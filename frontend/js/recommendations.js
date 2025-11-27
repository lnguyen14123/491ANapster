// frontend/js/recommendations.js

(() => {
  // ------------------------------- Utilities -------------------------------
  const $ = (sel, root = document) => root.querySelector(sel);

  // Degrees → radians
  const toRad = d => d * Math.PI / 180;

  // Haversine distance (meters)
  function haversine(lat1, lon1, lat2, lon2){
    const R = 6371000;
    const dLat = toRad(lat2 - lat1), dLon = toRad(lon2 - lon1);
    const a = Math.sin(dLat/2)**2
            + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon/2)**2;
    return 2 * R * Math.asin(Math.sqrt(a));
  }

  // Convert distance to walking minutes using ~80 m/min (≈4.8 km/h)
  const minutesFromMeters = m => m / 80;

  // Geolocation as a Promise
  function getPosition(){
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) return reject(new Error('Geolocation not supported'));
      navigator.geolocation.getCurrentPosition(
        pos => resolve({ lat: pos.coords.latitude, lon: pos.coords.longitude }),
        err => reject(err),
        { enableHighAccuracy: true, timeout: 8000 }
      );
    });
  }

  // ------------------------------- Weather ---------------------------------
  async function fetchWeather(lat, lon){
    const url = new URL('https://api.open-meteo.com/v1/forecast');
    url.searchParams.set('latitude',  String(lat));
    url.searchParams.set('longitude', String(lon));
    url.searchParams.set('current', [
      'temperature_2m',
      'apparent_temperature',
      'precipitation',
      'precipitation_probability',
      'cloud_cover',
      'wind_speed_10m',
      'is_day'
    ].join(','));
    const res = await fetch(url.toString());
    if(!res.ok) throw new Error('Weather fetch failed');
    const data = await res.json();
    return data.current; // { temperature_2m, apparent_temperature, ... }
  }

  function renderWeatherPanel(current){
    const panel = $('#weatherPanel');
    const out = $('#wxSummary');
    if(!panel || !out) return;

    if(!current){
      panel.style.display = 'none';
      out.textContent = '';
      return;
    }
    const t   = Math.round(current.temperature_2m);
    const app = Math.round(current.apparent_temperature);
    const wind = Math.round(current.wind_speed_10m);
    const pop  = current.precipitation_probability ?? 0;
    const clouds = current.cloud_cover ?? 0;

    out.textContent = `Weather now: ${t}°C (feels ${app}°C), wind ${wind} m/s, precip ${pop}%, clouds ${clouds}%`;
    panel.style.display = 'block';
  }

  // Score a place (0–100) for nap comfort given weather
  function scorePlace(place, wx){
    const temp = wx?.apparent_temperature ?? 22;
    let score = 100 - Math.abs(22 - temp) * 2;   // sweet spot ~22°C

    const wind = wx?.wind_speed_10m ?? 0;
    const pop  = wx?.precipitation_probability ?? 0;
    const precip = wx?.precipitation ?? 0;
    const isDay  = wx?.is_day === 1;

    const indoor = !!place.indoor;
    const hasAC  = !!place.hasAC;
    const shade  = !!place.shade;

    // Wind penalty mainly outdoors
    if(!indoor) score -= Math.max(0, wind - 2) * 2;

    // Rain probability or actual precip punishes outdoor heavily
    if(!indoor && (precip > 0 || pop >= 50)) score -= 30;

    // Hot daytime outdoors without shade
    if(!indoor && isDay && temp >= 28 && !shade) score -= 15;

    // Cold outdoors
    if(!indoor && temp <= 12) score -= 12;

    // Indoor with AC helps in heat
    if(indoor && hasAC && temp >= 26) score += 10;

    // Indoor slightly better in rain
    if(indoor && (precip > 0 || pop >= 50)) score += 6;

    // Noise bonus if provided
    const noiseBonus = { 'very-quiet': 10, 'quiet': 6, 'medium': 2, 'loud': -6 };
    if (place.noise) score += (noiseBonus[place.noise] ?? 0);

    // Clamp
    return Math.max(0, Math.min(100, Math.round(score)));
  }

  // ------------------------------ Rendering --------------------------------
  function renderCards(list){
    const results = $('#results');
    if (!results) return;

    if (!list.length){
      results.innerHTML = `<div class="meta">No nearby nap spots within your max walk time.</div>`;
      return;
    }
    results.innerHTML = list.map(p => `
      <div class="card">
        <div class="title">${p.name}</div>
        <div class="meta">${p.walkMinutes} min • ${p.distanceMeters} m</div>
        <div class="meta">
          <span class="pill">${p.indoor ? 'Indoor' : 'Outdoor'}</span>
          <span class="pill">${p.seating || 'seating'}</span>
          ${p.wxScore !== undefined ? `<span class="pill">comfort ${p.wxScore}</span>` : ''}
        </div>
        <div class="cta"><button onclick="startNap(${p.id})">Start nap here</button></div>
      </div>
    `).join('');
  }

  // Hook used by card button (keep global)
  window.startNap = function(){
    window.location.href = './nappingPage.html';
      };

  // ------------------------------ Main flow --------------------------------
  async function loadPageRecommendations(){
    const status = $('#status');
    const results = $('#results');
    const useWeather = $('#useWeather');
    const maxWalkSel = $('#maxWalkSelect');
    const weatherPanel = $('#weatherPanel');

    if (status) status.textContent = 'Finding your location…';
    if (results) results.innerHTML = '';
    if (weatherPanel) weatherPanel.style.display = 'none';

    try{
      // 1) get user location
      const user = await getPosition();

      // 2) maybe load weather
      let wx = null;
      if(useWeather?.checked){
        if(status) status.textContent = 'Getting local weather…';
        try{
          wx = await fetchWeather(user.lat, user.lon);
          renderWeatherPanel(wx);
        }catch{
          renderWeatherPanel(null);
        }
      }

      // 3) load places from JSON
      const resp = await fetch('./data/places.json', { cache: 'no-cache' });
      const places = await resp.json();

      // 4) compute walking minutes + comfort score
      const maxWalk = Number(maxWalkSel?.value || 10);
      const enriched = places.map(p => {
        const distM = Math.round(haversine(user.lat, user.lon, p.lat, p.lon));
        const mins = Math.max(1, Math.round(minutesFromMeters(distM)));
        const wxScore = wx ? scorePlace(p, wx) : 50; // neutral baseline if no weather
        // Blend: give distance primary weight, weather nudges ranking
        const sortKey = mins * 2 - (wxScore / 20);   // smaller is better
        return { ...p, distanceMeters: distM, walkMinutes: mins, wxScore, sortKey };
      })
      .filter(p => p.walkMinutes <= maxWalk);

      // Optional: in precip, prefer indoor or shaded outdoors
      const precipLikely = (wx?.precipitation ?? 0) > 0 || (wx?.precipitation_probability ?? 0) >= 50;
      const finalList = precipLikely ? enriched.filter(p => p.indoor || p.shade) : enriched;

      // 5) rank + render
      const ranked = finalList.sort((a,b) => a.sortKey - b.sortKey).slice(0, 5);
      if(status) status.textContent = ranked.length ? 'Closest & coziest spots (weather-aware):' : 'No spots within your max walk time.';
      renderCards(ranked);
    } catch {
      if(status) status.textContent = 'Location unavailable. Enable location in your browser and try again.';
      renderCards([]);
      renderWeatherPanel(null);
    }
  }

  // ---------------------------- Widget support -----------------------------
  // Back-compat: if you also embed a small widget elsewhere that calls this,
  // it will render into #best-nap-nearby. You can remove this if unused.
  window.loadNearbyRecommendations = async function(maxWalkMinutes = 10, limit = 3){
    const out = document.getElementById("best-nap-nearby");
    if (!out) return;

    out.innerHTML = "Finding your location…";

    try {
      const user = await getPosition();
      let wx = null; // keep widget simple; set to weather by default if desired

      const resp = await fetch("./data/places.json", { cache: "no-cache" });
      const places = await resp.json();

      const ranked = places.map(p => {
        const distM = Math.round(haversine(user.lat, user.lon, p.lat, p.lon));
        const mins = Math.max(1, Math.round(minutesFromMeters(distM)));
        const wxScore = wx ? scorePlace(p, wx) : 50;
        const sortKey = mins * 2 - (wxScore / 20);
        return { ...p, distanceMeters: distM, walkMinutes: mins, wxScore, sortKey };
      })
      .filter(p => p.walkMinutes <= maxWalkMinutes)
      .sort((a,b) => a.sortKey - b.sortKey)
      .slice(0, limit);

      if (ranked.length === 0) {
        out.textContent = `No nearby nap spots within ${maxWalkMinutes} minutes.`;
        return;
      }

      out.innerHTML = ranked.map(p => `
        <div class="nap-card">
          <div class="title">${p.name}</div>
          <div>${p.walkMinutes} min walk • ${p.distanceMeters} m</div>
          <div>${p.indoor ? "Indoor" : "Outdoor"} • ${p.seating || "seating"}</div>
          <button onclick="startNap(${p.id})">Start Nap here</button>
        </div>
      `).join("");
    } catch {
      out.textContent = "Location unavailable. Please enable location and refresh.";
    }
  };

  // ------------------------------ Wire up ----------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    const useBtn = $('#useLocationBtn');
    const refreshBtn = $('#refreshBtn');

    useBtn && useBtn.addEventListener('click', loadPageRecommendations);
    refreshBtn && refreshBtn.addEventListener('click', loadPageRecommendations);

    // Optional: auto-run on page open
    // loadPageRecommendations();
  });
})();

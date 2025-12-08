const HEADER_CACHE_KEY = "napsterUserHeader";

function applyHeaderData(data) {
  if (!data) return;

  const displayName =
    data.displayName ||
    data.username ||
    "User";

  document.querySelectorAll(".username-display")
    .forEach(el => el.textContent = displayName);

  // Avatar
  let avatarUrl = data.avatarUrl;
  if (!avatarUrl) {
    const encodedName = encodeURIComponent(displayName);
    const bg = data.avatarColor || "random";
    avatarUrl = `https://ui-avatars.com/api/?name=${encodedName}&background=${bg}&color=ffffff&size=160`;
  }

  document.querySelectorAll(".user-menu img")
    .forEach(img => { img.src = avatarUrl; });

  // member since
  if (data.created_at) {
    const d = new Date(data.created_at);
    if (!Number.isNaN(d.getTime())) {
      const text = "Member since " + d.toLocaleDateString();
      const ms = document.getElementById("memberSince");
      if (ms) ms.textContent = text;
    }
  }
}

function initHeaderCommon() {
  // 1) If a cached value exists, apply it immediately
  try {
    const raw = localStorage.getItem(HEADER_CACHE_KEY);
    if (raw) {
      const cached = JSON.parse(raw);
      applyHeaderData(cached);
    }
  } catch (e) {
    console.warn("header cache parse error", e);
  }

  // 2) Fetch the latest value from the backend, overwrite it, and update the cache
  fetch("/api/user/header", { credentials: "include" })
    .then(res => {
      if (res.status === 401) {
        location.href = "/signin";
        return null;
      }
      return res.json();
    })
    .then(data => {
      if (!data) return;
      applyHeaderData(data);
      try {
        localStorage.setItem(HEADER_CACHE_KEY, JSON.stringify(data));
      } catch (_) {}
    })
    .catch(err => {
      console.error("initHeaderCommon fetch error", err);
    });

  // 3) sidebar scroll
  try {
    const sidebarWrapper = document.querySelector(".sidebar-wrapper");
    if (
      sidebarWrapper &&
      typeof OverlayScrollbarsGlobal?.OverlayScrollbars !== "undefined"
    ) {
      OverlayScrollbarsGlobal.OverlayScrollbars(sidebarWrapper, {
        scrollbars: {
          theme: "os-theme-light",
          autoHide: "leave",
          clickScroll: true,
        },
      });
    }
  } catch (e) {
    console.error("OverlayScrollbars init error", e);
  }

  // Sign out
   const logoutBtn = document.getElementById("logout-btn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      // Remove cache when logged out
      try {
        localStorage.removeItem(HEADER_CACHE_KEY);
      } catch (_) {}

      fetch("/logout", { method: "POST" })
        .then(() => (location.href = "/signin"))
        .catch(console.error);
    });
  }

  // sidebar active
  highlightActiveSidebar?.();
}


function highlightActiveSidebar() {
  const path = window.location.pathname;  // ex: /friends.html
  const menuLinks = document.querySelectorAll('.sidebar-menu .nav-link');

  menuLinks.forEach(link => {
    // Remove previous active
    link.classList.remove('active');

    // If the current page matches the link's href, mark it as active
    const href = link.getAttribute('href');

    if (href && path.endsWith(href)) {
      link.classList.add('active');

      // If there is a sub-menu, also apply the parent "menu-open" class
      const parent = link.closest('.nav-item');
      if (parent) parent.classList.add('menu-open');
    }
  });
}

// OverlayScrollbars for sidebar
document.addEventListener('DOMContentLoaded', function () {
  const el = document.querySelector('.sidebar-wrapper');
  if (el && typeof OverlayScrollbarsGlobal?.OverlayScrollbars !== 'undefined') {
    OverlayScrollbarsGlobal.OverlayScrollbars(el, {
      scrollbars: { theme: 'os-theme-light', autoHide: 'leave', clickScroll: true }
    });
  }
});

const fmtDate = (v) => {
  if (!v) return '—';
  const d = new Date(v);
  if (Number.isNaN(d.getTime())) return '—';
  // date format
  return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: '2-digit' });
};

// ---- Avatar (ui-avatars) helpers ----
let avatarBaseName = 'User';
let avatarColor = '8b5cf6';        // default background-color (purple)

function buildAvatarUrl(name, color) {
  const safeName = name || 'User';
  const bg = color || '8b5cf6';
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(safeName)}&background=${bg}&color=ffffff&rounded=true&size=160`;
}

// Fetch user basics
async function loadUser() {
  try {
    const res = await fetch('/api/user');
    if (res.status === 401) {
      window.location.href = '/signin';
      return;
    }
    const user = await res.json();
    const username = user?.username || 'Guest';

    document.querySelectorAll('.username-display')
      .forEach(el => el.textContent = username);

    const usernameHandleEl = document.getElementById('usernameHandle');
    if (usernameHandleEl) usernameHandleEl.textContent = username;

    avatarBaseName = username;

  } catch (e) {
    console.error(e);
  }
}


// Fetch profile details
async function loadProfile() {
  try {
    const res = await fetch('/api/userprofile');
    if (!res.ok) return;
    const p = await res.json();

    const displayNameEl = document.getElementById('displayName');
    const bioEl = document.getElementById('bioText');
    const locationEl = document.getElementById('locationText');
    const websiteLink = document.getElementById('websiteLink');
    const avatarEl = document.getElementById('profileAvatar');
    const usernameEl = document.getElementById('usernameHandle');

    const usernameText = usernameEl?.textContent?.trim() || '';

    if (displayNameEl) {
      const dn = p?.displayName || usernameText || 'User';
      displayNameEl.textContent = dn;
    }

    if (bioEl) {
      bioEl.textContent = p?.bio || 'Short bio goes here. Keep it cozy 🌙';
    }

    if (locationEl) {
      locationEl.textContent = p?.location || 'Earth';
    }

    if (websiteLink) {
      const website = p?.website || '#';
      websiteLink.href = website;
      websiteLink.textContent = website === '#' ? '—' : website;
    }

    const createdRaw = p?.memberSince || p?.created_at || p?.create_at;
    const when = fmtDate(createdRaw);

    const el1 = document.getElementById('memberSince');
    if (el1) el1.textContent = 'Member since ' + when;

    const el2 = document.getElementById('memberSince2');
    if (el2) el2.textContent = when;

    // Stats
    const statTotalNaps = document.getElementById('statTotalNaps');
    const statAvgLen = document.getElementById('statAvgLen');
    const statStreak = document.getElementById('statStreak');

    if (statTotalNaps) statTotalNaps.textContent = p?.stats?.totalNaps ?? 0;
    if (statAvgLen) statAvgLen.textContent = p?.stats?.avgNapLen ?? '—';
    if (statStreak) statStreak.textContent = p?.stats?.streak ?? '—';

    // Activity list
    const activity = p?.activity || [];
    const list = document.getElementById('activityList');
    if (list) {
      list.innerHTML = '';
      if (!activity.length) {
        list.innerHTML = '<li class="list-group-item">No recent activity yet.</li>';
      } else {
        activity.forEach(it => {
          const li = document.createElement('li');
          li.className = 'list-group-item d-flex justify-content-between align-items-center';
          li.innerHTML = `<span>${it.text}</span><span class="text-muted small">${it.time || ''}</span>`;
          list.appendChild(li);
        });
      }
    }

    if (avatarEl) {
      const baseForAvatar = usernameText || p?.displayName || 'User';

      if (p?.avatarUrl) {
        avatarEl.src = p.avatarUrl;
      } else {
        avatarEl.src = buildAvatarUrl(baseForAvatar, avatarColor);
      }

      avatarBaseName = baseForAvatar; 
    }
  } catch (e) {
    console.error(e);
  }
}

async function loadSettingsForProfile() {
  try {
    const res = await fetch('/api/settings');
    if (!res.ok) return;
    const data = await res.json();

    // Ringtone
    const prefRingtone = document.getElementById('prefRingtone');
    if (prefRingtone) {
      prefRingtone.textContent = data?.ringtoneName || '—';
    }
  } catch (e) {
    console.error(e);
  }
}

// Save profile edits
const editFormEl = document.getElementById('editProfileForm');
if (editFormEl) {
  editFormEl.addEventListener('submit', async (e) => {
    e.preventDefault();
    const payload = {
      displayName: document.getElementById('editDisplayName').value.trim(),
      location: document.getElementById('editLocation').value.trim(),
      website: document.getElementById('editWebsite').value.trim(),
      bio: document.getElementById('editBio').value.trim()
    };
    try {
      const res = await fetch('/api/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error('Update failed');

      const displayNameEl = document.getElementById('displayName');
      const usernameHandleEl = document.getElementById('usernameHandle');
      const locationEl = document.getElementById('locationText');
      const websiteLink = document.getElementById('websiteLink');
      const bioEl = document.getElementById('bioText');

      const fallbackName = usernameHandleEl?.textContent || 'User';
      if (displayNameEl) displayNameEl.textContent = payload.displayName || fallbackName;
      if (locationEl) locationEl.textContent = payload.location || 'Earth';
      if (websiteLink) {
        websiteLink.href = payload.website || '#';
        websiteLink.textContent = payload.website || '—';
      }
      if (bioEl) bioEl.textContent = payload.bio || 'Short bio goes here. Keep it cozy 🌙';

      avatarBaseName = payload.displayName || fallbackName;

      // close modal
      const modalEl = document.getElementById('editProfileModal');
      const m = bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);
      m.hide();
    } catch (e) {
      alert('Failed to update profile');
      console.error(e);
    }
  });
}

// ---- Avatar selction (ui-avatars) ----
function isValidHex(hex) {
  return /^[0-9A-Fa-f]{6}$/.test(hex);
}
function initAvatarControls() {
  const inputHex = document.getElementById('avatarColorInput');
  const picker = document.getElementById('avatarColorPicker');
  const previewBtn = document.getElementById('avatarPreviewBtn');
  const saveBtn = document.getElementById('avatarSaveBtn');
  const statusEl = document.getElementById('avatarStatus');
  const avatarEl = document.getElementById('profileAvatar');

  if (!inputHex || !previewBtn || !saveBtn) return;

  // Color picker → HEX input synchronize 
  picker.addEventListener('input', () => {
    inputHex.value = picker.value.replace('#', '').toUpperCase();
  });

  // Preview button
  previewBtn.addEventListener('click', () => {
    const hex = inputHex.value.trim();
    if (!isValidHex(hex)) {
      statusEl.textContent = 'Invalid HEX color. Use 6 characters (e.g. FF9900).';
      return;
    }

    const name = document.getElementById('displayName').textContent || 'User';
    const url = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=${hex}&color=ffffff&size=128`;

    avatarEl.src = url;
    statusEl.textContent = 'Preview updated ✔';
  });

  // Save button → Save DB
  saveBtn.addEventListener('click', async () => {
    const hex = inputHex.value.trim();
    if (!isValidHex(hex)) {
      statusEl.textContent = 'Invalid HEX color.';
      return;
    }

    const name = document.getElementById('displayName').textContent || 'User';
    const url = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=${hex}&color=ffffff&size=128`;

    saveBtn.disabled = true;
    statusEl.textContent = 'Saving…';

    try {
      const res = await fetch('/api/profile/avatar-url', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ avatarUrl: url })
      });

      if (!res.ok) throw new Error('Request failed');

      statusEl.textContent = '✔ Avatar saved!';
    } catch (err) {
      console.error('avatar-url error', err);
      statusEl.textContent = 'Could not save avatar.';
    } finally {
      saveBtn.disabled = false;
    }
  });
}

// Logout
const logoutBtn = document.getElementById('logout-btn');
if (logoutBtn) {
  logoutBtn.addEventListener('click', () => {
    fetch('/logout', { method: 'POST' })
      .then(() => window.location.href = '/signin')
      .catch(console.error);
  });
}

// Init
loadUser();
loadProfile();
loadSettingsForProfile();
initAvatarControls();
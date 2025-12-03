// ========== Sidebar scroll ==========
document.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('.sidebar-wrapper');
  if (el && typeof OverlayScrollbarsGlobal?.OverlayScrollbars !== 'undefined') {
    OverlayScrollbarsGlobal.OverlayScrollbars(el, {
      scrollbars: { theme: 'os-theme-light', autoHide: 'leave', clickScroll: true }
    });
  }
});

// ========== Helpers ==========
const $  = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);
const on = (el, ev, fn) => el && el.addEventListener(ev, fn);

// add dynamically if there is no value in the dropdown menu
function ensureRingtoneOptionExists(name) {
  if (!name || !tone) return;
  const exists = [...tone.options].some(o => o.value === name);
  if (exists) return;
  const opt = document.createElement('option');
  opt.value = name;
  opt.textContent = name; // file name => file name
  tone.appendChild(opt);
}

function toast(type, text) {
  const msg = $('#alarmMsg');
  if (!msg) return alert(text);
  msg.className = 'alert alert-' + type;
  msg.textContent = text;
  if (type !== 'danger') setTimeout(() => { msg.className = ''; msg.textContent = ''; }, 2000);
}

function setStatus(kind, text) {
  const chip = $('#alarmStatus');
  if (!chip) return;
  chip.innerHTML = '';
  const dot = document.createElement('span');
  dot.className = 'status-dot ' + (kind === 'ok' ? 'status-ok' : kind === 'bad' ? 'status-bad' : 'status-warn');
  chip.append(dot, document.createTextNode(text));
}

// ========== Optional: username fetch ==========
fetch('/api/user')
  .then(r => (r.status === 401 ? (location.href = '/signin', null) : r.json()))
  .then(u => { if (u?.username) $$('.username-display').forEach(el => el.textContent = u.username); })
  .catch(() => {});

// ========== Elements ==========
const notif     = $('#notifEnable');
const priv      = $('#privateProfile');
const share     = $('#shareAnonData');

const vol       = $('#alarmVolume');
const volTxt    = $('#alarmVolumeValue');
const tone      = $('#ringtoneSelect');
const playlist  = $('#playlistUrl');

const preview   = $('#alarmPreview');
const stopBtn   = $('#alarmStop');
const saveBtn   = $('#saveAlarmAll');
const resetBtn  = $('#resetAlarm');

const form      = $('#ringtoneForm');
const fileInput = $('#ringtoneFile');
const customLbl = $('#customFileName');
const clearBtn  = $('#clearCustom');

const napForm   = $('#changeNapLen');
const napSelect = $('#napLength');
const napSaved  = $('#napLengthSavedText');

const curPassInput  = $('#curPass');
const newPassInput  = $('#newPass');
const confPassInput = $('#confPass');
const changePassBtn = $('#changePassBtn');



const audio = $('#alarmAudio') || (() => {
  const a = document.createElement('audio');
  a.id = 'alarmAudio'; a.preload = 'auto'; a.style.display = 'none';
  document.body.appendChild(a);
  return a;
})();

// default ringtone path
const SOUND_MAP = {
  'Early-Riser':    './dist/sounds/Early-Riser.mp3',
  'Acousticfields': './dist/sounds/Acousticfields.mp3',
  'morning-bird':   './dist/sounds/Early-Riser.mp3',
  'piano-wake':     './dist/sounds/Acousticfields.mp3'
};

// ===== Session blob store (uploads are session-only) =====
const KEY = { sess: 'alarm.custom.blobs.sess' }; // [ {id,name,blobUrl} ]
const readSess = () => JSON.parse(sessionStorage.getItem(KEY.sess) || '[]');
const writeSess = (arr) => sessionStorage.setItem(KEY.sess, JSON.stringify(arr));

// rebuild ringtone select with built-ins + session uploads
function rebuildSelect() {
  if (!tone) return;
  const cur = tone.value;
  tone.innerHTML = '';

  // built-in
  const gB = document.createElement('optgroup');
  gB.label = 'Built-in';
  Object.keys(SOUND_MAP).forEach(k => {
    const opt = document.createElement('option');
    opt.value = k; opt.textContent = k.replace(/-/g, ' ');
    gB.appendChild(opt);
  });
  tone.appendChild(gB);

  // session uploads
  const uploads = readSess();
  if (uploads.length) {
    const gU = document.createElement('optgroup');
    gU.label = 'My uploads (this session)';
    uploads.forEach(u => {
      const opt = document.createElement('option');
      opt.value = 'blob-' + u.id;
      opt.textContent = u.name + ' (upload)';
      gU.appendChild(opt);
    });
    tone.appendChild(gU);
  }

  // try keep selection
  const exists = [...tone.options].some(o => o.value === cur);
  tone.value = exists ? cur : 'Early-Riser';
}

// map select value to playable src
function currentSrc() {
  if (!tone) return null;
  const val = tone.value;
  if (val?.startsWith?.('blob-')) {
    const id = val.slice(5);
    const hit = readSess().find(x => x.id === id);
    return hit?.blobUrl || null;
  }
  return SOUND_MAP[val] || null;
}

// ========== INIT: GET /api/settings ==========
(async function init() {
  try {
    rebuildSelect();

    const r = await fetch('/api/settings');
    if (!r.ok) return;
    const data = await r.json();

    // Ringtone
    if (tone) {
      const desired = data?.ringtoneName || 'Early-Riser';
      const exists = [...tone.options].some(o => o.value === desired);
      tone.value = exists ? desired : 'Early-Riser';
    }

    // Settings(JSONB)
    const s = data?.settings || {};
    if (notif && s.notificationEnabled !== undefined) notif.checked = !!s.notificationEnabled;
    if (priv  && s.privateProfile       !== undefined) priv.checked  = !!s.privateProfile;
    if (share && s.shareAnonData        !== undefined) share.checked = !!s.shareAnonData;

    if (vol && s.alarm_volume !== undefined) {
      const n = Math.max(0, Math.min(100, Number(s.alarm_volume)));
      vol.value = String(n);
      if (volTxt) volTxt.textContent = String(n);
      audio.volume = n / 100;
    }

    if (playlist && s.playlist_url) playlist.value = s.playlist_url;

    setStatus('warn', 'Not saved');
  } catch (e) {
    console.error('init /api/settings failed:', e);
  }
})();

// ========== UI Handlers ==========
on(vol, 'input', (e) => {
  const n = Math.max(0, Math.min(100, Number(e.target.value) || 0));
  if (volTxt) volTxt.textContent = String(n);
  audio.volume = n / 100;
  setStatus('warn', 'Unsaved changes');
});

on(preview, 'click', async () => {
  try {
    // priority: playlist directly URL > select 
    const url = playlist?.value?.trim();
    if (url) {
      if (!/^https?:\/\//i.test(url) || !/(\.mp3|\.wav|\.ogg)(\?|#|$)/i.test(url)) {
        return toast('warning', 'Use a direct http(s) audio URL (.mp3/.wav/.ogg).');
      }
      audio.src = url;
    } else {
      const src = currentSrc();
      if (!src) return toast('warning', 'Choose or upload a ringtone first.');
      audio.src = src;
    }
    await audio.play();
  } catch (e) {
    console.error('[preview] play error:', e);
    toast('danger', 'Cannot play the sound.');
  }
});
on(stopBtn, 'click', () => { audio.pause(); audio.currentTime = 0; });

// detect changes
[notif, priv, share, tone, playlist].forEach(el => on(el, 'change', () => setStatus('warn', 'Unsaved changes')));

// ========== Upload (session-only preview) ==========
on(form, 'submit', (e) => {
  e.preventDefault();
  if (!fileInput?.files?.length) return toast('warning', 'Choose an audio file first.');
  const file = fileInput.files[0];

  // simple validation
  if (file.size > 10 * 1024 * 1024) return toast('danger', 'File too large (max 10 MB).');
  const ok = ['audio/mpeg', 'audio/wav', 'audio/ogg'];
  if (!ok.includes(file.type) && !/\.(mp3|wav|ogg)$/i.test(file.name)) {
    return toast('danger', 'Unsupported file type. Use MP3, WAV, or OGG.');
  }

  // save session
  const list = readSess();
  const id = String(Date.now());
  const blobUrl = URL.createObjectURL(file);
  list.push({ id, name: file.name, blobUrl });
  writeSess(list);

  // UI
  rebuildSelect();
  if (tone) tone.value = 'blob-' + id;
  if (customLbl) { customLbl.style.display = ''; customLbl.textContent = 'Current custom file: ' + file.name; }
  setStatus('ok', 'Saved (session)');
  toast('success', 'Custom ringtone uploaded (session only).');
  form.reset();
  fileInput.value = '';
});

// initialize upload (clear session)
on(clearBtn, 'click', () => {
  const list = readSess();
  list.forEach(x => { try { URL.revokeObjectURL(x.blobUrl); } catch {} });
  writeSess([]);
  rebuildSelect();
  if (tone) tone.value = 'Early-Riser';
  if (customLbl) { customLbl.style.display = 'none'; customLbl.textContent = ''; }
  setStatus('warn', 'Unsaved changes');
  toast('success', 'Cleared uploaded ringtones (session).');
});

function compact(obj) {
  const out = {};
  Object.entries(obj).forEach(([k, v]) => {
    if (v === undefined || v === null) return;
    if (typeof v === 'string' && v.trim() === '') return;
    out[k] = v;
  });
  return out;
}

on(saveBtn, 'click', async () => {
  try {
    // 1) ringtoneName calculate
    let ringtoneName = tone ? tone.value : undefined;

    // When using session upload, replace ‘blob-’ with the actual file name (optional)
    if (ringtoneName?.startsWith?.('blob-')) {
      const id = ringtoneName.slice(5);
      const uploads = JSON.parse(sessionStorage.getItem('alarm.custom.blobs.sess') || '[]');
      const hit = uploads.find((x) => x.id === id);
      if (hit?.name) {
        ringtoneName = hit.name;
        ensureRingtoneOptionExists(ringtoneName);
        tone.value = ringtoneName;
      }
    }

    // 2) settings payload (undefined/delete empty string)
    const settingsPayload = compact({
      alarm_volume:        vol ? Number(vol.value) : undefined,
      notificationEnabled: notif ? !!notif.checked : undefined,
      privateProfile:      priv  ? !!priv.checked  : undefined,
      shareAnonData:       share ? !!share.checked : undefined
    });

    // 2-1) /api/settings first
    if (Object.keys(settingsPayload).length) {
      const resSettings = await fetch('/api/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settingsPayload)
      });
      if (!resSettings.ok) {
        const text = await resSettings.text().catch(()=> '');
        throw new Error(text || 'Save settings failed');
      }
    }

    // 3) /api/profile, update only the ringtone name separately
    if (ringtoneName !== undefined) {
      const resProfile = await fetch('/api/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ringtoneName })
      });
      if (!resProfile.ok) {
        const text = await resProfile.text().catch(()=> '');
        throw new Error(text || 'Save ringtone failed');
      }
    }

    setStatus('ok', 'Saved');
    toast('success', 'Settings saved.');
  } catch (e) {
    console.error(e);
    setStatus('bad', 'Save failed');
    toast('danger', e?.message || 'Failed to save settings.');
  }
});

// ===== Preferred Nap Length =====
async function loadNapLength() {
  if (!napSelect) return;

  try {
    const res = await fetch('/api/naplen');
    if (!res.ok) return;

    const data = await res.json();
    const seconds = data?.preferrednaplen;

    if (seconds != null) {
      const minutes = Math.round(Number(seconds) / 60); // sec → min

      const exists = [...napSelect.options].some(
        o => o.value === String(minutes)
      );
      napSelect.value = exists ? String(minutes) : '30';

      if (napSaved) {
        napSaved.textContent = `Current preferred nap length: ${minutes} minutes`;
      }
    } else {
      if (napSaved) {
        napSaved.textContent = 'No preferred nap length saved yet.';
      }
    }
  } catch (e) {
    console.error('loadNapLength failed:', e);
  }
}
loadNapLength();

// ========== Preferred Nap Length SAVE (POST /changeNapLen) ==========
napForm?.addEventListener('submit', async (e) => {
  e.preventDefault();

  if (!napSelect) return;

  const minutes = napSelect.value.trim();
  if (!minutes) {
    toast('warning', 'Select nap length first.');
    return;
  }

  try {
    const res = await fetch('/api/changeNapLen', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ napValue: minutes })
    });

    const text = await res.text();

    if (res.ok) {
      toast('success', text || 'Nap length updated successfully');

      if (napSaved) {
        napSaved.textContent = `Current preferred nap length: ${minutes} minutes`;
      }
    } else {
      toast('danger', text || 'Failed to update nap length.');
    }
  } catch (err) {
    console.error(err);
    toast('danger', 'Something went wrong while saving nap length.');
  }
});

// ========== Change Password (POST /api/changePassword) ==========
changePassBtn?.addEventListener('click', async () => {
  const currentPassword = curPassInput?.value?.trim() || '';
  const newPassword     = newPassInput?.value?.trim() || '';
  const confirmPassword = confPassInput?.value?.trim() || '';

  if (!currentPassword || !newPassword || !confirmPassword) {
    toast('warning', 'Please fill in all password fields.');
    return;
  }

  if (newPassword !== confirmPassword) {
    toast('warning', 'New password and confirmation do not match.');
    return;
  }

  if (newPassword.length < 3) {
    toast('warning', 'New password should be at least 3 characters.');
    return;
  }

  try {
    const res = await fetch('/changePassword', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ currentPassword, newPassword })
    });

    const text = await res.text();

    if (res.ok) {
      toast('success', text || 'Password updated successfully.');
      // Reset Input
      if (curPassInput)  curPassInput.value  = '';
      if (newPassInput)  newPassInput.value  = '';
      if (confPassInput) confPassInput.value = '';
    } else {
      toast('danger', text || 'Failed to update password.');
    }
  } catch (err) {
    console.error(err);
    toast('danger', 'Something went wrong while changing password.');
  }
});


// ========== RESET (Only UI) ==========
on(resetBtn, 'click', () => {
  if (vol)   { vol.value = '70'; if (volTxt) volTxt.textContent = '70'; audio.volume = 0.7; }
  if (playlist) playlist.value = '';
  if (tone) tone.value = 'Early-Riser';
  setStatus('warn', 'Unsaved changes');
  toast('success', 'Defaults restored. Click Save.');
});

// ========== Logout (optional) ==========
on($('#logout-btn'), 'click', () => {
  fetch('/logout', { method: 'POST' })
    .then(() => (location.href = '/signin'))
    .catch(() => {});
});

// ========== Modal ==========
const btnViewPrivacy   = document.getElementById('btnViewPrivacy');
const privacyModalEl   = document.getElementById('privacyModal');
const btnPrivacyAccept = document.getElementById('btnPrivacyAccept');
const chkPrivacyAgree  = document.getElementById('chkPrivacyAgree');
const modalShareAnon   = document.getElementById('modalShareAnon');

let privacyModal;
if (privacyModalEl) {
  privacyModal = new bootstrap.Modal(privacyModalEl, { backdrop: 'static' });
}

// open
btnViewPrivacy?.addEventListener('click', () => {
  if (!privacyModal) return;
  // initialize modal toggle
  const mainShare = document.getElementById('shareAnonData');
  if (modalShareAnon && mainShare) modalShareAnon.checked = !!mainShare.checked;
  if (chkPrivacyAgree) { chkPrivacyAgree.checked = false; btnPrivacyAccept.disabled = true; }
  privacyModal.show();
});

// The Save button is enabled only when the agreement checkbox is checked.
chkPrivacyAgree?.addEventListener('change', (e) => {
  btnPrivacyAccept.disabled = !e.target.checked;
});

// Save (agreement + selected analytics values) → call /api/settings + synchronize main toggle
btnPrivacyAccept?.addEventListener('click', async () => {
  try {
    if (!chkPrivacyAgree?.checked) return;

    const allowAnon = !!modalShareAnon?.checked;

    // Save to server
    const nowISO = new Date().toISOString();

    const res = await fetch('/api/settings', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        shareAnonData: allowAnon,
        privacyAgreed: true,
        privacyAgreedAt: nowISO
      })
    });
    if (!res.ok) throw new Error('Failed to save preference');

    // Main toggle synchronization
    const mainShare = document.getElementById('shareAnonData');
    if (mainShare) mainShare.checked = allowAnon;

    // UX feedback
    toast('success', 'Privacy preference saved.');
    setStatus('ok', 'Saved');
    privacyModal?.hide();
  } catch (e) {
    console.error(e);
    toast('danger', e?.message || 'Save failed.');
  }
});
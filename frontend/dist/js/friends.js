// frontend/js/friends.js
// This script handles the frontend logic for the Napster Friend System.
// It manages searching users, sending/accepting friend requests, and viewing friends.

// Import all API functions from friendsApi.js
import * as api from './friendsApi.js';

// Collect references to all key DOM elements for easier access later
const els = {
  // tabBtns: document.querySelectorAll('.tabs button'), // All tab buttons
  tabBtns: document.querySelectorAll('.friends-tabs button'),
  sections: {
    find: document.getElementById('tab-find'),        // Search friends tab
    requests: document.getElementById('tab-requests'),// Friend requests tab
    friends: document.getElementById('tab-friends'),  // Friend list tab
  },
  searchInput: document.getElementById('friendSearch'),    // Search input field
  searchBtn: document.getElementById('friendSearchBtn'),   // Search button
  searchResults: document.getElementById('searchResults'), // Container for search results
  incoming: document.getElementById('incomingRequests'),   // Incoming friend requests
  outgoing: document.getElementById('outgoingRequests'),   // Outgoing requests
  friends: document.getElementById('friendsList'),         // List of current friends
};

// --- Tab Handling ---
// Show a specific tab by name and hide the others
function showTab(name) {
  for (const btn of els.tabBtns)
    btn.classList.toggle('active', btn.dataset.tab === name); // Highlight active tab
  for (const [key, sec] of Object.entries(els.sections))
    sec.hidden = key !== name; // Hide all other sections
}

// --- Search for Users ---
// Fetch and render search results from API
async function renderSearch() {
  const q = els.searchInput.value.trim(); // Get user input
  if (!q) {
    els.searchResults.innerHTML = '<div class="meta">Enter a query.</div>';
    return;
  }
   //1) Search result
  const results = await api.searchUsers(q);

  // 2) Retrieve the current friend list
  const friends = await api.listFriends();
  const friendIdSet = new Set(friends.map(f => String(f.id)));

  // 3) Add an "_isFriend" flag to the search results before returning them
  const decorated = results.map(u => ({
    ...u,
    _isFriend: friendIdSet.has(String(u.id)),
  }));

  els.searchResults.innerHTML = decorated.length
    ? decorated.map(renderUserResult).join('') // Display found users
    : '<div class="meta">No users found.</div>'; // No matches
}

// Template for one user card in search results
function renderUserResult(u){
  const isFriend = !!u._isFriend;

  const addLabel = isFriend ? 'Already friends' : 'Add friend';
  const addDisabledAttr = isFriend ? 'disabled aria-disabled="true"' : '';

  return `
    <div class="friends-card">
      <div class="friends-card-header">
        <div class="friends-avatar"></div>
        <div class="friends-card-main">
          <div class="friends-card-name">
            ${u.displayName || u.username || '(no name)'}
          </div>
          <div class="friends-card-meta">
            @${u.username || ''}${u.email ? ' • ' + u.email : ''}
          </div>
          ${u.city ? `
            <div class="friends-pill-row">
              <span class="friends-pill">${u.city}</span>
            </div>` : ''
          }
        </div>
      </div>
      <div class="friends-card-actions">
        <button 
          type="button" 
          class="btn-nap-primary btn-sm"
          data-action="add" 
          data-id="${u.id}"
          ${addDisabledAttr}>
          <i class="bi bi-person-plus"></i> ${addLabel}
        </button>
        <button 
          type="button" 
          class="btn-nap-outline btn-sm"
          data-action="view-profile" 
          data-id="${u.id}">
          <i class="bi bi-person"></i> View profile
        </button>
      </div>
    </div>
  `;
}

// --- Friend Requests ---
// Load and render incoming/outgoing friend requests
async function renderRequests() {
  const { incoming, outgoing } = await api.listRequests();

  // Show incoming requests (from other users)
  els.incoming.innerHTML = incoming.length
    ? incoming.map(r => `
      <div class="friends-card">
        <div class="friends-card-header">
          <div class="friends-avatar"></div>
          <div class="friends-card-main">
            <div class="friends-card-name">
              ${r.from.displayName || r.from.username}
            </div>
            <div class="friends-card-meta">
              @${r.from.username}
            </div>
          </div>
        </div>
        <div class="friends-card-actions">
          <button class="btn-nap-primary btn-sm" data-action="accept" data-id="${r.id}">
            <i class="bi bi-check-lg"></i> Accept
          </button>
          <button class="btn-nap-outline btn-sm" data-action="decline" data-id="${r.id}">
            <i class="bi bi-x-lg"></i> Decline
          </button>
        </div>
      </div>
    `).join('')
    : '<div class="meta">No incoming requests.</div>';

  // Show outgoing requests (sent by current user)
  els.outgoing.innerHTML = outgoing.length
    ? outgoing.map(r => `
      <div class="friends-card">
        <div class="friends-card-header">
          <div class="friends-avatar"></div>
          <div class="friends-card-main">
            <div class="friends-card-name">
              ${r.to.displayName || r.to.username}
            </div>
            <div class="friends-card-meta">
              @${r.to.username}
            </div>
          </div>
        </div>
        <div class="friends-card-actions">
          <button class="btn-nap-outline btn-sm" data-action="cancel" data-id="${r.id}">
            <i class="bi bi-x-circle"></i> Cancel request
          </button>
        </div>
      </div>
    `).join('')
    : '<div class="meta">No outgoing requests.</div>';
}

// --- Friends List ---
// Load and render current friend list
async function renderFriends() {
  const friends = await api.listFriends();
  els.friends.innerHTML = friends.length
    ? friends.map(f => `
      <div class="friends-card">
        <div class="friends-card-header">
          <div class="friends-avatar"></div>
          <div class="friends-card-main">
            <div class="friends-card-name">
              ${f.displayName || f.username}
            </div>
            <div class="friends-card-meta">
              @${f.username} ${f.city ? '• ' + f.city : ''}
            </div>
          </div>
        </div>
        <div class="friends-card-actions">
          <button class="btn-nap-outline btn-sm" data-action="unfriend" data-id="${f.id}">
            <i class="bi bi-person-dash"></i> Unfriend
          </button>
        </div>
      </div>
    `).join('')
    : '<div class="meta">No friends yet.</div>';
}

// --- Profile modal ---
function formatMemberSince(dateStr) {
  if (!dateStr) return '-';
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return '-';
  return `Member since ${d.toLocaleDateString()}`;
}

function openProfileModal(profile) {
  const modalEl = document.getElementById('friendProfileModal');
  if (!modalEl) return;

  const avatarEl = modalEl.querySelector('[data-field="avatar"]');
  const nameTitleEl = modalEl.querySelector('[data-field="displayName"]');
  const nameMainEl = modalEl.querySelector('[data-field="displayName-main"]');
  const usernameEl = modalEl.querySelector('[data-field="username"]');
  const memberSinceEl = modalEl.querySelector('[data-field="memberSince"]');
  const bioEl = modalEl.querySelector('[data-field="bio"]');
  const cityEl = modalEl.querySelector('[data-field="city"]');
  const websiteLinkEl = modalEl.querySelector('[data-field="website-link"]');

  const displayName = profile.displayName || profile.username || '(no name)';
  const username = profile.username ? '@' + profile.username : '-';

  nameTitleEl.textContent = displayName;
  nameMainEl.textContent = displayName;
  usernameEl.textContent = username;
  memberSinceEl.textContent = formatMemberSince(profile.memberSince);

  bioEl.textContent = profile.bio || '-';
  cityEl.textContent = profile.city || '-';

  if (profile.website) {
    websiteLinkEl.textContent = profile.website;
    websiteLinkEl.href = profile.website.startsWith('http')
      ? profile.website
      : `https://${profile.website}`;
  } else {
    websiteLinkEl.textContent = '-';
    websiteLinkEl.href = '#';
  }

  if (profile.avatarUrl && avatarEl) {
    avatarEl.src = profile.avatarUrl;
  } else if (avatarEl) {
    // fallback avatar
    avatarEl.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=random&size=80`;
  }

  const modal = new bootstrap.Modal(modalEl);
  modal.show();
}

// Private profile modal
function openPrivateProfileModal(){
  const modalEl = document.getElementById('privateProfileModal');
  if (!modalEl) return;
  const modal = new bootstrap.Modal(modalEl);
  modal.show();
}

// --- Button Click Actions ---
// Handle all button clicks using event delegation
document.addEventListener('click', async (e) => {
  const btn = e.target.closest('button[data-action]');
  if (!btn) return;
  const id = btn.dataset.id;
  const action = btn.dataset.action;

  // Perform action depending on button type
  if (action === 'add') {
    await api.sendRequest(id);
    await renderRequests();
    showTab('requests');
  }

  if (action === 'accept') {
    await api.acceptRequest(id);
    await renderRequests();
    await renderFriends();     // Refresh friend list
    showTab('friends');        // Move to the Friends tab
  }

  if (action === 'decline') {
    await api.declineRequest(id);
    await renderRequests();
  }

  if (action === 'cancel') {
    await api.cancelRequest(id);
    await renderRequests();
  }

  if (action === 'unfriend') {
    await api.unfriend(id);
    await renderFriends();     // Refresh after delete the friend
  }

  if (action === 'view-profile') {
    try {
      const profile = await api.getUserProfile(id);

      //private profile
      if (profile.privateProfile  === true) {
        openPrivateProfileModal();
        return;
      }

      openProfileModal(profile);
    } catch (err) {
      console.error('view-profile error', err);
    }
  }
});

// --- Event Listeners for Tabs and Search ---
// --- Init + Event wiring ---
document.addEventListener('DOMContentLoaded', async () => {
  // Re-select the element after the DOM has fully loaded
  els.tabBtns = document.querySelectorAll('.friends-tabs button');
  els.searchInput = document.getElementById('friendSearch');
  els.searchBtn = document.getElementById('friendSearchBtn');
  els.searchResults = document.getElementById('searchResults');
  els.incoming = document.getElementById('incomingRequests');
  els.outgoing = document.getElementById('outgoingRequests');
  els.friends = document.getElementById('friendsList');

  // Search Button
  els.searchBtn?.addEventListener('click', renderSearch);

  // Switching Tab + Refresh
  for (const b of els.tabBtns) {
    b.addEventListener('click', async () => {
      const tab = b.dataset.tab;
      showTab(tab);

      if (tab === 'requests') {
        await renderRequests();
      } else if (tab === 'friends') {
        await renderFriends();
      }
    });
  }

  // --- Initialization ---
  showTab('find');
  await renderRequests();
  await renderFriends();
});

// frontend/js/services/friendsApi.js
// API layer for the Napster Friend System.
// Handles all requests to the backend for searching users, managing requests, and listing friends.
// Currently uses mock data for testing until backend endpoints are ready.

const USE_MOCK = false; // Toggle this to false when the real backend API is available

// --- Search for users by query string ---
export async function searchUsers(q){
  if (USE_MOCK) return mockSearch(q); // Use mock data while backend is not ready
  
  const res = await fetch(`/api/friends/search?q=${encodeURIComponent(q)}`, { credentials: 'include' });
  return res.json(); // Parse and return JSON result from backend
}

// --- Send a new friend request ---
export async function sendRequest(friendUserId){
  if (USE_MOCK) return { ok: true }; // Simulate success
  return fetch('/api/friends/requests', {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ friend_user_id: friendUserId }) // Send friend ID as JSON
  });
}

// --- Get all friend requests (incoming + outgoing) ---
export async function listRequests(){
  if (USE_MOCK) return mockListRequests(); // Return fake requests for testing
  const res = await fetch('/api/friends/requests?type=all', { credentials: 'include' });
  return res.json();
}

// --- Accept a friend request ---
export async function acceptRequest(id){
  if (USE_MOCK) return { ok: true };
  return fetch(`/api/friends/requests/${id}/accept`, {
    method: 'POST',
    credentials: 'include'
  });
}

// --- Decline a friend request ---
export async function declineRequest(id){
  if (USE_MOCK) return { ok: true };
  return fetch(`/api/friends/requests/${id}/decline`, {
    method: 'POST',
    credentials: 'include'
  });
}

// --- Cancel an outgoing friend request (you sent it) ---
export async function cancelRequest(id){
  if (USE_MOCK) return { ok: true };
  return fetch(`/api/friends/requests/${id}`, {
    method: 'DELETE',
    credentials: 'include'
  });
}

// --- Retrieve current friend list ---
export async function listFriends(){
  if (USE_MOCK) return mockListFriends();
  const res = await fetch('/api/friends', { credentials: 'include' });
  return res.json();
}

// --- Remove a friend from your friend list ---
export async function unfriend(friendUserId){
  if (USE_MOCK) return { ok: true };
  return fetch(`/api/friends/${friendUserId}`, {
    method: 'DELETE',
    credentials: 'include'
  });
}

// --- Display profile modal ---
export async function getUserProfile(id){
  const res = await fetch(`/api/friends/profile/${encodeURIComponent(id)}`, {
    credentials: 'include'
  });

  if (!res.ok) {
    const text = await res.text();
    console.error('getUserProfile error', res.status, text);
    throw new Error('Failed to load profile');
  }

  return res.json();
}

/* ---------------------------------------------------
   Mock Data Section
   Used only when USE_MOCK = true for local testing.
   These simulate backend responses so the UI can run
   without an actual server.
--------------------------------------------------- */

// Simulate user search results
async function mockSearch(q){
  const users = [
    { id: '101', username: 'jane', displayName: 'Jane Nguyen', city: 'Long Beach' },
    { id: '102', username: 'tony', displayName: 'Tony Tran', city: 'Garden Grove' },
    { id: '103', username: 'mimi', displayName: 'Mimi Pham', city: 'Anaheim' },
  ];
  // Filter users whose username, name, or city matches the query (case-insensitive)
  return users.filter(u =>
    (u.username + u.displayName + u.city).toLowerCase().includes(q.toLowerCase())
  );
}

// Simulate friend requests (incoming + outgoing)
async function mockListRequests(){
  return {
    incoming: [
      { id: 'req_1', from: { id:'102', username:'tony', displayName:'Tony Tran' } }
    ],
    outgoing: [
      { id: 'req_2', to: { id:'103', username:'mimi', displayName:'Mimi Pham' } }
    ]
  };
}

// Simulate current friend list
async function mockListFriends(){
  return [
    { id: '101', username: 'jane', displayName: 'Jane Nguyen', city: 'Long Beach' }
  ];
}

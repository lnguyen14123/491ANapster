async function loadPartial(selector, url) {
  const container = document.querySelector(selector);
  if (!container) return;
  try {
    const res = await fetch(url, { credentials: "include" });
    if (!res.ok) throw new Error(`Failed to load partial: ${url}`);
    const html = await res.text();
    container.innerHTML = html;
  } catch (err) {
    console.error("loadPartial error", url, err);
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  // 1) Insert nav / sidebar
  await Promise.all([
    loadPartial("#nav-placeholder", "./nav.html"),
    loadPartial("#sidebar-placeholder", "./sidebar.html"),
  ]);

  // 2) initialize common header(username, avatar, memberSince, logout)
  if (typeof initHeaderCommon === "function") {
    initHeaderCommon();
  }
});

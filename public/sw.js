self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    // Clear all caches created by gatsby-plugin-offline/workbox
    const keys = await caches.keys();
    await Promise.all(keys.map((k) => caches.delete(k)));

    // Unregister this SW so future loads have no SW at all
    await self.registration.unregister();

    // Reload open tabs so they’re no longer under SW control
    const clients = await self.clients.matchAll({ type: "window" });
    clients.forEach((client) => client.navigate(client.url));
  })());
});

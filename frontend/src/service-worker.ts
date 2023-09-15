export {};

const CACHE_NAME = "my-cache";

//install service worker
self.addEventListener("install", (event: any) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) =>
            cache.addAll(["/", "/index.html", "/styles.css", "/app.js"])
        )
    );
});

//activate service worker
self.addEventListener("activate", (event: any) => {
    event.waitUntil(
        caches.keys().then((keyList) =>
            Promise.all(
                keyList.map((key) => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            )
        )
    );
});

//listen for requests
self.addEventListener("fetch", (event: any) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
const cachedFiles = [
  "pages/index.html",
  "pages/page1.html",
  "pages/off.html",
  "pages/notFound.html",
  "css/main.css",
  "js/main.js",
];

const cacheDB = "Files";
// add files to cache
self.addEventListener("install", (e) => {
  console.log("service worker installing....", e);
  e.waitUntil(
    caches
      .open(cacheDB)
      .then((db) => {
        console.log("Files added to cache successfully");
        return db.addAll(cachedFiles);
      })
      .catch((err) => {
        console.log("Error during caching:", err);
      })
  );
});

self.addEventListener('activate',event=>{
    console.log('service worker activating....')
})

// Fetch event - serve from cache or network
self.addEventListener("fetch", (e) => {
  console.log("Fetching request ===> ", e.request.url);
  e.respondWith(
    caches
      .match(e.request)
      .then(async (res) => {
        // If response found in cache, return it
        if (res) {
          console.log("Request Found in cache!", e.request.url);
          return res;
        }
        
        // If not found in cache, request it from network
        console.log("Network request ", e.request.url);
        try {
          const response = await fetch(e.request);
          console.log(response);
          
          // Handle error responses
          if (!response.ok) {
            if (response.status === 404) {
              return caches.match("pages/notFound.html");
            } else {
              return caches.match("pages/off.html");
            }
          }
          
          // Cache the requested page before returning (only successful responses)
          const responseClone = response.clone();
          const cache = await caches.open(cacheDB);
          cache.put(e.request, responseClone);
          
          return response;

        } catch (err) {
          console.log("Network error:", err);
          // Return offline page when network fails
          return caches.match("pages/off.html");
        }
      })
      .catch((err) => {
        console.log("Cache match error:", err);
        // Return offline page for any cache errors
        return caches.match("pages/off.html");
      })
  );
});


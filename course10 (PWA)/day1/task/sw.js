const cachedFiles = [
  "pages/index.html",
  "pages/page1.html",
  "pages/offline.html",
  "pages/wrong.html",
  "css/main.css",
  "js/main.js",
];

const cacheDB = "Files-2";
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
      .catch((error) => {
        console.log("Error", error);
      })
  );
});

// self.addEventListener('activate',event=>{
//     console.log('service worker activating....')
// })

// handle fetching event
self.addEventListener("fetch", (e) => {
  console.log("Fetching request ===> ", e.request.url);
  e.respondWith(
    caches
      .match(e.request)
      .then(async (res) => {
        // if response found in cache return it
        if (res) {
          console.log("Request Found in cache!", e.request.url);
          return res;
        }
        // if not found in cache request it from network
        try {
          console.log("Network request ", e.request.url);
          let fetchedData = await fetch(e.request);
          if (!fetchedData.ok) {
            console.log("your are offline");
            const cachedOffline = await caches.match("/pages/offline.html");
            return cachedOffline;
          }
          console.log(fetchedData);
          return fetchedData;
        } catch (err) {
          console.log("your are offline");
          return await caches.match("/pages/offline.html");
        }
      })
      .catch((err) => {
        console.log("Error", err);
      })
  );
});

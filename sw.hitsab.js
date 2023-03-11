var proxy_url = 'https://cors-anywhere.herokuapp.com/';

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(proxy_url + fetchEvent.request)
    })
  )
})

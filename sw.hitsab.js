self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch('https://cors-anywhere.herokuapp.com/' + fetchEvent.request)
    })
  )
})

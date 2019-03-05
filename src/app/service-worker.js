const version = 'v0.0.4';
const worker = self;

worker.addEventListener('install', (e) => {
    console.log("Installing worker");
    (e).waitUntil(
        caches.open(`${version}-resume`)
            .then(cache => {
                cache.addAll([
                    '/',
                    '/main.bundle.js',
                    '/resume.png'
                ])
            })
    )
});

worker.addEventListener("fetch", (evt) => {
    if(evt.request.method !== 'GET') {
        return;
    }

    evt.respondWith(
        caches
            .match(evt.request)
                .then(cached => handleNetworkResponse(cached, evt))
                .catch(handleFailedResponse)
    )
})

const handleNetworkResponse = (cached, evt) => {
    const real = fetch(evt.request)
        .then(resp => {
            const cacheCopy = resp.clone();
            caches.open(`${version}-pages`)
                .then(cache => {
                    cache.put(evt.request, cacheCopy);
                    console.log(`Worker cached: ${evt.request.url}`)
                });
                return resp
        })
    return cached || real;
}

const handleFailedResponse = (e) => {
    return new Response('<h1>Service Unavailable</h1>', {
        status: 503,
        statusText: 'Service Unavailable',
        headers: new Headers({
            'Content-Type': 'text/html'
        })
    })
}

worker.addEventListener("activate", e => {
    e.waitUntil(
        caches
            .keys()
            .then(keys => Promise.all(
                keys
                    .filter(key => !key.startsWith(version))
                    .map(key => caches.delete(key))
            ))
    )
})
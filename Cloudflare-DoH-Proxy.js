// --- Configuration ---
// You can edit the DNS query path here. It is sey to the standard by default.
const DOH_PATH = '/dns-query';

// --- Worker Code ---
addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
    // Use cloudflare's own DNS over HTTPS endpoint as the upstream resolver.
    const dohUrl = 'https://cloudflare-dns.com/dns-query';

    try {
        const url = new URL(request.url);

        // Check if the request path matches our editable path
        if (url.pathname !== DOH_PATH) {
            return new Response('Not Found', { status: 404 });
        }

        //Reconstruct the request to forward it to the upstream DoH resolver.
        const proxyUrl = new URL(dohUrl);
        proxyUrl.search = url.search;

        const newRequest = new Request(proxyUrl, {
            method: request.method,
            headers: request.headers,
            body: request.body,
        });

        const response = await fetch(newRequest);
        return response;

    } catch (error) {
        console.error(error);
        return new Response('Internal Server Error', { status: 500 });
    }
}

# DoH Proxy on Cloudflare Workers
A lightweight DNS over HTTPS (DoH) proxy that runs on Cloudflare Workers, forwarding DNS queries to Cloudflare's DNS resolver (you can change it).

## Why Use DoH?
DNS queries are sent in plain text, meaning anyone monitoring your network can see which websites you're visiting.
### With traditional DNS:
❌ Your ISP can see every domain you visit

❌ Network administrators can monitor your browsing

❌ Hackers on public WiFi can intercept your DNS traffic

❌ DNS queries can be manipulated (DNS spoofing)

### With DoH:
✅ All DNS queries are encrypted with TLS/HTTPS

✅ ISP only sees you're connecting to Cloudflare (not which sites)

✅ Protection against man-in-the-middle attacks

✅ DNS queries cannot be tampered with

✅ Your browsing habits remain private

## Features
🚀 Serverless - Runs entirely on Cloudflare Workers edge network

🌍 Global - Deployed across Cloudflare's worldwide network

🔒 Secure - Encrypts DNS queries using HTTPS

⚡ Fast - Low latency due to edge computing

🆓 Free - Works within Cloudflare Workers free tier

## Limit
This project works within Cloudflare Workers Free Tier. For detailed information about request limits, CPU time, and other restrictions, see:

 [CloudFlare Free Workers limit](https://developers.cloudflare.com/workers/platform/limits/)

## Usage
After deployment, configure your DoH client with your worker URL:
``` URL
https://your-worker-name.your-subdomain.workers.dev/dns-query
```

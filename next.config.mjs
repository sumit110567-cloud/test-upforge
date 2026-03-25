// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vunvjscphatofvsqvofg.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
      { protocol: "https", hostname: "images.inc42.com" },
      { protocol: "https", hostname: "assets.inc42.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "www.browserstack.com" },
      { protocol: "https", hostname: "**" },
    ],
  },
  async headers() {
    return [
      {
        // Apply to all routes on both domains
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options",        value: "DENY" },
          { key: "X-Content-Type-Options",  value: "nosniff" },
          { key: "Referrer-Policy",         value: "strict-origin-when-cross-origin" },
          { key: "X-DNS-Prefetch-Control",  value: "on" },
        ],
      },
      {
        // CORS for the registry API — allows upforge.org to read upforge.in data
        source: "/api/(.*)",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "https://www.upforge.org, https://www.upforge.in",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // ── .in redirects ────────────────────────────────────────────────────
      // /registry on www.upforge.in → upforge.org (registry lives on .org only)
      {
        source: "/registry/:slug*",
        has: [{ type: "host", value: "www.upforge.in" }],
        destination: "https://www.upforge.org/registry/:slug*",
        permanent: true,
      },
      // Same for bare upforge.in (no www) — vercel.json handles www redirect
      // but next.config redirects fire first so cover both just in case
      {
        source: "/registry/:slug*",
        has: [{ type: "host", value: "upforge.in" }],
        destination: "https://www.upforge.org/registry/:slug*",
        permanent: true,
      },

      // ── .org redirects ───────────────────────────────────────────────────
      // /startup/* on .org → .in — keeps Indian SEO authority on .in
      // and prevents the cross-domain leak where .org users land on .in startup pages
      {
        source: "/startup/:slug*",
        has: [{ type: "host", value: "www.upforge.org" }],
        destination: "https://www.upforge.in/startup/:slug*",
        permanent: false, // 302 — keeps flexibility to host some startups on .org later
      },
      {
        source: "/startup/:slug*",
        has: [{ type: "host", value: "upforge.org" }],
        destination: "https://www.upforge.in/startup/:slug*",
        permanent: false,
      },
    ];
  },
  reactStrictMode: true,
};

export default nextConfig;

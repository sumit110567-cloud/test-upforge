/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Supabase storage — startup logos & uploads
      {
        protocol: 'https',
        hostname: 'vunvjscphatofvsqvofg.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
      // Inc42 — founder press photos
      {
        protocol: 'https',
        hostname: 'images.inc42.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.inc42.com',
      },
      // Wikipedia / Wikimedia — company logos
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      // BrowserStack CDN
      {
        protocol: 'https',
        hostname: 'www.browserstack.com',
      },
      // General wildcard fallback for any other press/CDN images
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ]
  },
}

export default nextConfig

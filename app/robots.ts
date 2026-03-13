export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/'],
    },
    sitemap: 'https://www.upforge.in/sitemap.xml', // 'www' add karein consistency ke liye
  }
}

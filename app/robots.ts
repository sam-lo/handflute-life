import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/cloud',
    },
    sitemap: 'https://handflute.life/sitemap.xml',
  }
}
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://handflute.life'
  return [
    {
      url: baseUrl,
      lastModified: new Date('2024-05-25'),
      priority: 1,
    },
    {
      url: baseUrl + '/about',
      lastModified: new Date('2024-05-25'),
      priority: 0.9,
    },
    {
      url: baseUrl + '/work',
      lastModified: new Date('2024-05-25'),
      priority: 0.8,
    },
    {
      url: baseUrl + '/support',
      lastModified: new Date('2024-05-25'),
      priority: 0.7,
    },
  ]
}
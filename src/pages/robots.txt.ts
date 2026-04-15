import type { APIRoute } from 'astro'
import { getSiteOrigin } from '@/lib/site'

const getRobotsTxt = (sitemapURL: URL) => `
User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
`

export const GET: APIRoute = ({ site, url }) => {
  const sitemapURL = new URL('sitemap-index.xml', getSiteOrigin({ site, url }))
  return new Response(getRobotsTxt(sitemapURL))
}

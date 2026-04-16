import { SITE } from '@/config'
import rss from '@astrojs/rss'
import { getSiteOrigin } from '@/lib/site'
import type { APIContext } from 'astro'
import { getAllPosts } from '@/lib/data-utils'

export async function GET(context: APIContext) {
  try {
    const posts = await getAllPosts()
    const site = getSiteOrigin({ site: context.site, url: context.url })

    return rss({
      title: SITE.title,
      description: SITE.description,
      site,
      items: posts.map((post) => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.date,
        link: `/blog/${post.id}/`,
      })),
    })
  } catch (error) {
    console.error('Error generating RSS feed:', error)
    return new Response('Error generating RSS feed', { status: 500 })
  }
}

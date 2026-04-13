import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: '青萤博客',
  description:
    '一个基于 Astro 构建的中文静态博客模板，内置作者、标签、目录与深浅色主题。',
  href: 'https://qingyingx.github.io/MyBlog',
  author: '青萤',
  locale: 'zh-CN',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: '博客',
  },
  {
    href: '/authors',
    label: '作者',
  },
  {
    href: '/about',
    label: '关于',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/QingYingX/MyBlog',
    label: 'GitHub',
  },
  {
    href: '/rss.xml',
    label: '订阅',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  网站: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  邮箱: 'lucide:mail',
  RSS: 'lucide:rss',
  订阅: 'lucide:rss',
}

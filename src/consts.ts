import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'QingYingX\'s Blog',
  description:
    'Hi~ 这里是清影的个人博客，记录一些技术文章和生活点滴。希望能在这里与大家分享我的知识和经验，也欢迎大家留言交流！',
  href: 'https://blog.099311.xyz',
  author: '清影',
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
    href: '/authors/qingyingx',
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

export const THEME_TOGGLE = {
  followPointer: false,
} as const

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

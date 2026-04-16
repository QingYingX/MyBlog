import type { IconMap, SocialLink, Site } from '@/types'

// 这里集中放站点层面的可调配置。
// 日常改博客标题、导航、分页、主题切换时，优先看这个文件。

export const SITE: Site = {
  title: "QingYingX's Blog", // 站点名称，会用于 Header、SEO、RSS 和浏览器标题
  description:
    'Hi~ 这里是清影的个人博客，记录一些技术文章和生活点滴。希望能在这里与大家分享我的知识和经验，也欢迎大家留言交流！', // 默认站点描述，用于分享摘要和 SEO
  href: 'https://blog.099311.xyz', // 站点完整地址，用于 canonical、RSS、Sitemap
  author: '清影', // 默认作者名
  locale: 'zh-CN', // 页面语言和 Open Graph locale
  featuredPostCount: 2, // 首页展示的精选文章数量
  postsPerPage: 3, // 博客列表分页大小
}

// 顶部导航链接。
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

// 页脚和社交区域使用的链接。
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

// 主题切换动效配置。
export const THEME_TOGGLE = {
  followPointer: false, // true: 动画收束点跟随鼠标；false: 始终锁定在按钮中心
} as const

// 社交字段名和图标的映射。
// 作者 frontmatter 或社交链接里出现的名称，需要能在这里找到对应图标。
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

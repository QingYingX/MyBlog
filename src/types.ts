export type Site = {
  title: string
  description: string
  href: string
  author: string
  locale: string
  featuredPostCount: number
  postsPerPage: number
}

export type Comments = {
  enabled: boolean
  defaultEnabled: boolean
  provider: 'twikoo'
  serverUrl: string
  scriptUrl: string
  styleUrl: string
  lang: string
  lazyLoad: boolean
}

export type SocialLink = {
  href: string
  label: string
}

export type IconMap = {
  [key: string]: string
}

import { SITE } from '@/config'

type SiteContext = {
  site?: URL
  url?: URL
}

export const getSiteOrigin = ({ site, url }: SiteContext = {}) => {
  if (url) {
    return new URL(url.origin)
  }

  if (site) {
    return new URL(site)
  }

  return new URL(SITE.href)
}

export const resolveSiteUrl = (pathname: string, context: SiteContext = {}) => {
  return new URL(pathname, getSiteOrigin(context))
}

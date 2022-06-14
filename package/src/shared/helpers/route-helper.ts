import { Router } from 'vue-router'

const URL_PATTERN = /^((http|https|ftp):\/\/)/

function isRouterLink(router: Router | undefined, href: string): boolean {
  return Boolean(router) && !URL_PATTERN.test(href)
}

export { isRouterLink }

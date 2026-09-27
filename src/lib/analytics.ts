type CountVars = { path?: string; title?: string; referrer?: string; event?: boolean }

declare global {
  interface Window {
    goatcounter?: { no_onload?: boolean; count?: (vars: CountVars) => void }
  }
}

const queue: CountVars[] = []
let lastPath: string | null = null

function flush() {
  const count = window.goatcounter?.count
  if (!count) return false
  while (queue.length) count(queue.shift()!)
  return true
}

/**
 * GoatCounter counts once on load and nothing after, so a hash-routed SPA
 * would report every screen as `/volleyball/`. index.html turns the automatic
 * hit off (`no_onload`) and every route change is counted here instead.
 *
 * `route` is the router's pathname, rebuilt into the URL a visitor can open
 * (`/volleyball/#/browse`) so the dashboard's paths stay clickable. The query
 * string is deliberately left off: Search rewrites `?q=` on every keystroke,
 * which would both inflate the counts and log what people typed.
 */
export function countPageView(route: string) {
  const path = `${window.location.pathname}#${route}`
  if (path === lastPath) return // StrictMode's double effect in dev
  lastPath = path

  queue.push({ path })
  if (flush()) return

  // `count.js` is async, so the first view usually lands before it arrives.
  // Same handler and options every time, so the browser keeps just one.
  document.querySelector('script[data-goatcounter]')?.addEventListener('load', flush, { once: true })
}

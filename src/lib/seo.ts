import { useEffect } from 'react'

const DEFAULT_TITLE = 'Volleyball Handbook'
const DEFAULT_DESCRIPTION =
  'A curated volleyball skills library. Categories, levels, and one hand-picked video per skill.'

function setMeta(name: string, content: string) {
  document.querySelector(`meta[name="${name}"]`)?.setAttribute('content', content)
}

/**
 * Hash routing means crawlers only ever fetch index.html, so this can't add
 * real per-URL metadata — it keeps the tab title and description honest for
 * whoever's actually on the page, and for Google specifically, which does
 * run the JS and read document.title / meta[description] before indexing.
 * `noindex` lets thin, per-visit pages (search results, 404) opt out.
 */
export function useDocumentMeta(title: string, description = DEFAULT_DESCRIPTION, noindex = false) {
  useEffect(() => {
    document.title = title
    setMeta('description', description)
    setMeta('robots', noindex ? 'noindex' : 'index, follow')
    return () => {
      document.title = DEFAULT_TITLE
      setMeta('description', DEFAULT_DESCRIPTION)
      setMeta('robots', 'index, follow')
    }
  }, [title, description, noindex])
}

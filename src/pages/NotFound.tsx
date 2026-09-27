import { Link } from 'react-router'
import { useDocumentMeta } from '../lib/seo'

export function NotFound() {
  useDocumentMeta('Page not found — Volleyball Handbook', undefined, true)
  return (
    <div className="py-12 text-center">
      <p className="label text-ink-3">Page not found</p>
      <h1 className="mt-2 text-[24px] font-bold">Nothing here</h1>
      <p className="text-ink-2 mt-1.5">
        That page does not exist, or the skill has not been added yet.
      </p>
      <Link
        to="/"
        className="tap-target border-rule-strong bg-ink text-paper rounded-box mt-6 inline-flex items-center px-4 py-3 text-[15px] font-semibold"
      >
        Back to contents
      </Link>
    </div>
  )
}

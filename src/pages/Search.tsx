import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router'
import { searchSkills } from '../lib/search'
import { SkillCard } from '../components/SkillCard'
import { useDocumentMeta } from '../lib/seo'

export function Search() {
  // Query-dependent results are thin, duplicate content — keep it out of the index.
  useDocumentMeta('Search — Volleyball Handbook', undefined, true)
  const [params, setParams] = useSearchParams()
  const initial = params.get('q') ?? ''
  const [query, setQuery] = useState(initial)

  // Keep the URL shareable without pushing a history entry per keystroke.
  useEffect(() => {
    const id = setTimeout(() => {
      setParams(query ? { q: query } : {}, { replace: true })
    }, 250)
    return () => clearTimeout(id)
  }, [query, setParams])

  const results = searchSkills(query)

  return (
    <div className="space-y-4">
      <h1 className="text-[26px] font-bold">Search</h1>

      <form role="search" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search-input" className="sr-only">
          Search skills
        </label>
        <div className="border-ink-3 bg-surface rounded-box flex items-center gap-2.5 border px-3.5">
          <svg
            viewBox="0 0 24 24"
            className="text-ink-3 h-[18px] w-[18px] shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-4.5-4.5" />
          </svg>
          <input
            id="search-input"
            type="search"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="forearm pass, float serve, home, solo"
            className="tap-target placeholder:text-ink-3 w-full bg-transparent py-3 text-[15px] outline-none"
          />
        </div>
      </form>

      {query.trim() === '' ? (
        <p className="text-ink-2 text-[14px]">
          Search by skill name, or by a tag like <em>Home</em>, <em>Club court</em>, or{' '}
          <em>Solo</em>.
        </p>
      ) : results.length === 0 ? (
        <p className="text-ink-2 text-[14px]">No skills match “{query}”.</p>
      ) : (
        <>
          <p aria-live="polite" className="label text-ink-3">
            {results.length} {results.length === 1 ? 'result' : 'results'}
          </p>
          <ul className="border-rule-strong border-t-2">
            {results.map((skill) => (
              <SkillCard key={skill.id} skill={skill} showCategory />
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

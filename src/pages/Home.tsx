import { Link, useNavigate } from 'react-router'
import { useState } from 'react'
import { PUBLISHED_CATEGORIES, START_HERE_SKILL, countByCategory } from '../data'
import { useDocumentMeta } from '../lib/seo'

export function Home() {
  useDocumentMeta('Volleyball Handbook')
  const navigate = useNavigate()
  const [query, setQuery] = useState('')

  return (
    <div className="space-y-7">
      <section>
        <h1 className="text-[27px] font-bold">Volleyball skills, sorted out.</h1>
        <p className="text-ink-2 mt-2">
          A short explanation, the key points, and one hand-picked video for every skill.
        </p>
      </section>

      <form
        role="search"
        onSubmit={(e) => {
          e.preventDefault()
          if (query.trim()) navigate(`/search?q=${encodeURIComponent(query.trim())}`)
        }}
      >
        <label htmlFor="home-search" className="sr-only">
          Search skills
        </label>
        <div className="border-ink-3 bg-surface rounded-box flex items-center gap-2.5 border px-3.5">
          <SearchIcon />
          <input
            id="home-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search skills"
            className="tap-target placeholder:text-ink-3 w-full bg-transparent py-3 text-[15px] outline-none"
          />
        </div>
      </form>

      {START_HERE_SKILL && (
        <Link to={`/skill/${START_HERE_SKILL.id}`} className="border-rule bg-surface block border">
          <div className="bg-accent h-1" />
          <div className="flex items-center gap-3 px-4 py-3.5">
            <div className="flex-1">
              <span className="label text-accent">Start here</span>
              <span className="font-slab mt-1 block text-[18px] font-semibold">
                {START_HERE_SKILL.title}
              </span>
              <span className="text-ink-2 mt-0.5 block text-[13.5px] leading-snug">
                {START_HERE_SKILL.summary}
              </span>
            </div>
            <svg
              viewBox="0 0 24 24"
              className="text-accent h-5 w-5 shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </div>
        </Link>
      )}

      {/* Numbered entries, dot leaders, and the skill count where a page
          number would sit — the contents page of the handbook. */}
      <section>
        <h2 className="label text-ink-3 mb-1">Categories</h2>
        <ul>
          {PUBLISHED_CATEGORIES.map((category, index) => (
            <li key={category.id} className="border-rule border-b">
              <Link to={`/category/${category.id}`} className="hover:bg-surface block py-3.5">
                <div className="flex items-baseline gap-3">
                  <span className="font-slab text-accent w-6 shrink-0 text-[14px] font-semibold tabular-nums">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="font-slab text-[19px] font-semibold">{category.name}</span>
                  <span className="leader" />
                  <span className="text-ink-3 shrink-0 text-[13px] tabular-nums">
                    {countByCategory(category.id)}
                  </span>
                </div>
                <p className="text-ink-2 mt-0.5 pl-9 text-[13.5px] leading-snug">
                  {category.blurb}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

function SearchIcon() {
  return (
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
  )
}

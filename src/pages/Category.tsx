import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router'
import { CATEGORY_BY_ID, skillsInCategory } from '../data'
import { LEVELS, LEVEL_BLURBS, LEVEL_NAMES } from '../types'
import type { CategoryId, SpaceTag } from '../types'
import { SkillCard } from '../components/SkillCard'
import { LevelMeter } from '../components/badges'
import { NotFound } from './NotFound'
import { useDocumentMeta } from '../lib/seo'

const SPACES: SpaceTag[] = ['Home', 'Open space', 'Practice court', 'Club court']

export function Category() {
  const { categoryId } = useParams<{ categoryId: string }>()
  const category = CATEGORY_BY_ID.get(categoryId as CategoryId)
  const all = useMemo(() => (category ? skillsInCategory(category.id) : []), [category])

  useDocumentMeta(
    category ? `${category.name} — Volleyball Handbook` : 'Volleyball Handbook',
    category?.blurb,
  )

  const [space, setSpace] = useState<SpaceTag | null>(null)
  const [soloOnly, setSoloOnly] = useState(false)

  const filtered = all.filter(
    (s) => (!space || s.tags.space.includes(space)) && (!soloOnly || s.tags.solo === 'Solo'),
  )

  if (!category || !all.length) return <NotFound />

  return (
    <div className="space-y-6">
      <nav aria-label="Breadcrumb">
        <Link to="/" className="text-ink-3 hover:text-accent text-[13px]">
          ← Contents
        </Link>
      </nav>

      <header>
        <h1 className="text-[26px] font-bold">{category.name}</h1>
        <p className="text-ink-2 mt-1.5">{category.blurb}</p>
      </header>

      <section aria-label="Filters">
        <h2 className="label text-ink-3 mb-2">Where are you?</h2>
        <div className="flex flex-wrap gap-1.5">
          <FilterButton active={space === null} onClick={() => setSpace(null)}>
            Anywhere
          </FilterButton>
          {SPACES.map((s) => (
            <FilterButton key={s} active={space === s} onClick={() => setSpace(s)}>
              {s}
            </FilterButton>
          ))}
          <FilterButton active={soloOnly} onClick={() => setSoloOnly((v) => !v)}>
            Solo only
          </FilterButton>
        </div>
      </section>

      {filtered.length === 0 && (
        <p className="border-rule text-ink-2 border border-dashed p-4 text-[14px]">
          Nothing in {category.name} matches those filters yet. Try “Anywhere”.
        </p>
      )}

      {LEVELS.map((level) => {
        const skills = filtered.filter((s) => s.level === level)
        if (!skills.length) return null
        return (
          /* Level 1 open, the rest collapsed — the site answering "start where?" (5.3). */
          <details key={level} open={level === 1} className="group border-rule-strong border-t-2">
            <summary className="tap-target flex cursor-pointer list-none items-center gap-2.5 py-3">
              <LevelMeter level={level} />
              <span className="font-slab text-[17px] font-semibold">
                L{level}
                <span className="text-ink-2 ml-1.5 font-sans text-[15px] font-normal">
                  {LEVEL_NAMES[level]}
                </span>
              </span>
              <span className="leader" />
              <span className="text-ink-3 shrink-0 text-[13px] tabular-nums">{skills.length}</span>
              <svg
                viewBox="0 0 24 24"
                className="text-ink-3 h-3.5 w-3.5 shrink-0 transition-transform group-open:rotate-90"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
            </summary>

            <div className="pb-2">
              <p className="text-ink-2 pb-1 text-[13.5px] leading-snug">{LEVEL_BLURBS[level]}</p>
              <ul>
                {skills.map((skill) => (
                  <SkillCard key={skill.id} skill={skill} />
                ))}
              </ul>
            </div>
          </details>
        )
      })}
    </div>
  )
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-box border px-3 py-2 text-[13.5px] transition-colors ${
        active
          ? 'border-rule-strong bg-ink text-paper'
          : 'border-rule bg-surface text-ink-2 hover:border-rule-strong'
      }`}
    >
      {children}
    </button>
  )
}

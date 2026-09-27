import { Link } from 'react-router'
import { PUBLISHED_CATEGORIES, SKILLS, skillsInLevel } from '../data'
import { LEVELS, LEVEL_NAMES } from '../types'
import { LevelMeter } from '../components/badges'
import { useDocumentMeta } from '../lib/seo'

/** Every skill on one page — the index at the back of the book. */
export function Browse() {
  useDocumentMeta(
    'Contents — Volleyball Handbook',
    `All ${SKILLS.length} volleyball skills, by category and level.`,
  )
  return (
    <div className="space-y-7">
      <header>
        <h1 className="text-[26px] font-bold">Contents</h1>
        <p className="text-ink-2 mt-1.5">
          All {SKILLS.length} skills, by category and level.
        </p>
      </header>

      {PUBLISHED_CATEGORIES.map((category, index) => (
        <section key={category.id}>
          <h2 className="border-rule-strong flex items-baseline gap-3 border-b-2 pb-1.5">
            <span className="font-slab text-accent w-6 shrink-0 text-[14px] font-semibold tabular-nums">
              {String(index + 1).padStart(2, '0')}
            </span>
            <Link to={`/category/${category.id}`} className="hover:text-accent text-[20px] font-bold">
              {category.name}
            </Link>
          </h2>

          {LEVELS.map((level) => {
            const skills = skillsInLevel(category.id, level)
            if (!skills.length) return null
            return (
              <div key={level} className="mt-3">
                <div className="mb-0.5 flex items-center gap-2 pl-9">
                  <LevelMeter level={level} />
                  <span className="label text-ink-3">
                    L{level} {LEVEL_NAMES[level]}
                  </span>
                </div>
                <ul>
                  {skills.map((skill) => (
                    <li key={skill.id} className="border-rule border-b">
                      <Link
                        to={`/skill/${skill.id}`}
                        className="tap-target hover:bg-surface hover:text-accent flex items-center pl-9 text-[15px]"
                      >
                        {skill.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </section>
      ))}
    </div>
  )
}

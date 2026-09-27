import { Link } from 'react-router'
import type { Skill } from '../types'
import { thumbnailUrl } from '../lib/youtube'
import { CATEGORY_BY_ID } from '../data/categories'
import { LevelMeter, TagChips } from './badges'

interface Props {
  skill: Skill
  /** Search results need the category name; a category page already knows it. */
  showCategory?: boolean
}

/**
 * A ruled entry, not a floating card. Rows share one hairline so a level reads
 * as a list of entries — and the thumbnail is the only colour in it.
 */
export function SkillCard({ skill, showCategory = false }: Props) {
  const category = CATEGORY_BY_ID.get(skill.category)

  return (
    <li className="border-rule border-t first:border-t-0">
      <Link to={`/skill/${skill.id}`} className="hover:bg-surface flex gap-3.5 py-3.5">
        <div className="bg-rule w-[108px] shrink-0 overflow-hidden sm:w-[132px]">
          <img
            src={thumbnailUrl(skill.video)}
            alt=""
            loading="lazy"
            decoding="async"
            className="aspect-video h-full w-full object-cover"
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
            <h3 className="text-[16px] font-semibold">{skill.title}</h3>
            {showCategory && (
              <span className="text-ink-3 text-[12px]">
                {category?.name}
                <span aria-hidden="true"> · </span>L{skill.level}
              </span>
            )}
            {showCategory && <LevelMeter level={skill.level} />}
          </div>
          <p className="text-ink-2 mt-0.5 text-[14px] leading-snug">{skill.summary}</p>
          <div className="mt-2">
            <TagChips tags={skill.tags} compact />
          </div>
        </div>
      </Link>
    </li>
  )
}

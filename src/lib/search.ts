import { SKILLS } from '../data'
import { CATEGORY_BY_ID } from '../data/categories'
import type { Skill } from '../types'

interface Indexed {
  skill: Skill
  /** Fields kept apart so a title hit can outrank a description hit. */
  title: string
  summary: string
  rest: string
}

const INDEX: Indexed[] = SKILLS.map((skill) => ({
  skill,
  title: skill.title.toLowerCase(),
  summary: skill.summary.toLowerCase(),
  rest: [
    CATEGORY_BY_ID.get(skill.category)?.name ?? '',
    skill.description,
    ...skill.keyPoints,
    ...skill.tags.space,
    skill.tags.solo,
    ...skill.tags.equipment,
    skill.tags.duration,
  ]
    .join(' ')
    .toLowerCase(),
}))

/**
 * Client-side substring search over title, summary and tags (6.4). Small data
 * set, so a scan is faster than any index we could ship.
 */
export function searchSkills(query: string): Skill[] {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean)
  if (!terms.length) return []

  const scored: { skill: Skill; score: number }[] = []

  for (const entry of INDEX) {
    let score = 0
    for (const term of terms) {
      if (entry.title.startsWith(term)) score += 10
      else if (entry.title.includes(term)) score += 6
      else if (entry.summary.includes(term)) score += 3
      else if (entry.rest.includes(term)) score += 1
      else {
        score = -1
        break // every term has to match somewhere
      }
    }
    if (score > 0) scored.push({ skill: entry.skill, score })
  }

  return scored
    .sort((a, b) => b.score - a.score || a.skill.level - b.skill.level)
    .map((s) => s.skill)
}

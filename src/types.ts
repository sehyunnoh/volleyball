/** All nine categories are defined up front; content lands phase by phase (9.1). */
export type CategoryId =
  | 'fundamentals'
  | 'serving'
  | 'passing'
  | 'setting'
  | 'attacking'
  | 'blocking'
  | 'defense'
  | 'strategy'
  | 'athleticism'

/** Relative difficulty *inside* a category, not an absolute scale (5.3). */
export type Level = 1 | 2 | 3

/** Where the drill actually works. `Club court` is the scarce one — once a week (5.4). */
export type SpaceTag = 'Home' | 'Open space' | 'Practice court' | 'Club court'
export type SoloTag = 'Solo' | 'Partner'
export type EquipmentTag = 'Ball only' | 'Wall' | 'Net' | 'Cones'
export type DurationTag = '5 min' | '10 min' | '15 min+'

export interface SkillTags {
  space: SpaceTag[]
  solo: SoloTag
  equipment: EquipmentTag[]
  duration: DurationTag
}

export interface Video {
  /** YouTube video id, hand-picked and fixed — never fetched at runtime (5.5). */
  youtubeId: string
  title: string
  channel: string
  /** Jump straight to the part that explains this skill. */
  startSeconds?: number
}

export interface Skill {
  id: string
  title: string
  category: CategoryId
  level: Level
  /** One line, <= 80 chars. This is what shows in lists. */
  summary: string
  /** 2-4 sentences. The "tell me more" layer, not the primary one. */
  description: string
  /** 3-5 items, <= 10 words each. Glanceable on the court. */
  keyPoints: string[]
  commonMistakes?: string[]
  video: Video
  extraVideos?: Video[]
  tags: SkillTags
  prerequisites?: SkillId[]
  relatedSkills?: SkillId[]
}

/** Skill ids are plain slugs; kept as a named alias for readable cross-links. */
export type SkillId = string

export interface Category {
  id: CategoryId
  name: string
  blurb: string
  phase: 1 | 2 | 3
}

export const LEVEL_NAMES: Record<Level, string> = {
  1: 'Beginner',
  2: 'Intermediate',
  3: 'Advanced',
}

export const LEVEL_BLURBS: Record<Level, string> = {
  1: 'Start here. You can try these today, even if you have never played.',
  2: 'Once level 1 feels easy. Now add speed, combinations, and accuracy.',
  3: 'Game situations at game speed.',
}

export const LEVELS: Level[] = [1, 2, 3]

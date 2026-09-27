import type { Level, SkillTags } from '../types'
import { LEVEL_NAMES } from '../types'

/**
 * Level reads as three filled-in segments, not a colour. Green/amber/red would
 * say "safe / caution / danger"; level 3 is not a warning, it is further along.
 */
export function LevelMeter({ level }: { level: Level }) {
  return (
    <span className="inline-flex items-end gap-[2px]" aria-hidden="true">
      {[1, 2, 3].map((step) => (
        <span
          key={step}
          className={step <= level ? 'bg-ink' : 'bg-rule'}
          style={{ width: 3, height: 4 + step * 3 }}
        />
      ))}
    </span>
  )
}

export function LevelBadge({ level, showName = true }: { level: Level; showName?: boolean }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <LevelMeter level={level} />
      <span className="font-slab text-[13px] font-semibold">L{level}</span>
      {showName && <span className="text-ink-2 text-[13px]">{LEVEL_NAMES[level]}</span>}
      <span className="sr-only">
        Level {level} of 3, {LEVEL_NAMES[level]}
      </span>
    </span>
  )
}

export function Chip({ children, muted = false }: { children: React.ReactNode; muted?: boolean }) {
  return (
    <span
      className={`rounded-box inline-flex items-center border px-2 py-0.5 text-[12px] whitespace-nowrap ${
        muted ? 'border-rule text-ink-3' : 'border-rule text-ink-2'
      }`}
    >
      {children}
    </span>
  )
}

/**
 * Space first — "where am I right now" is the question people actually ask
 * when they open this on a court (5.4).
 */
export function TagChips({ tags, compact = false }: { tags: SkillTags; compact?: boolean }) {
  const items = compact
    ? [...tags.space, tags.duration]
    : [...tags.space, tags.solo, ...tags.equipment, tags.duration]

  return (
    <ul className="flex flex-wrap gap-1">
      {items.map((tag) => (
        <li key={tag}>
          <Chip muted={compact}>{tag}</Chip>
        </li>
      ))}
    </ul>
  )
}

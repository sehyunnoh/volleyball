import { Link, useParams } from 'react-router'
import { CATEGORY_BY_ID, getSkill, skillsInLevel } from '../data'
import { LEVEL_NAMES } from '../types'
import type { Skill } from '../types'
import { VideoFacade } from '../components/VideoFacade'
import { LevelBadge, TagChips } from '../components/badges'
import { NotFound } from './NotFound'
import { useDocumentMeta } from '../lib/seo'

export function SkillDetail() {
  const { skillId } = useParams<{ skillId: string }>()
  const skill = skillId ? getSkill(skillId) : undefined
  useDocumentMeta(skill ? `${skill.title} — Volleyball Handbook` : 'Volleyball Handbook', skill?.summary)
  if (!skill) return <NotFound />

  const category = CATEGORY_BY_ID.get(skill.category)
  const siblings = skillsInLevel(skill.category, skill.level)
  const index = siblings.findIndex((s) => s.id === skill.id)
  const previous = siblings[index - 1]
  const next = siblings[index + 1]

  return (
    <article className="flex flex-col gap-7">
      <nav aria-label="Breadcrumb">
        <Link
          to={`/category/${skill.category}`}
          className="text-ink-3 hover:text-accent text-[13px]"
        >
          ← {category?.name ?? 'Back'}
        </Link>
      </nav>

      <header className="flex flex-col gap-2.5">
        <h1 className="text-[28px] font-bold">{skill.title}</h1>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          {category && <span className="text-ink-3 text-[13px]">{category.name}</span>}
          <LevelBadge level={skill.level} />
        </div>
        <p className="text-ink-2 text-[16px]">{skill.summary}</p>
        <TagChips tags={skill.tags} />
      </header>

      <VideoFacade video={skill.video} />

      {/* Key points before the prose: the 9-year-old reads this and the video,
          and nothing else (5.6). */}
      <Section title="Key points">
        <ol className="border-rule border-t">
          {skill.keyPoints.map((point, i) => (
            <li key={point} className="border-rule flex gap-3 border-b py-2.5">
              <span className="font-slab text-accent w-6 shrink-0 text-[14px] font-semibold tabular-nums">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-[15.5px] leading-snug">{point}</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="What it is">
        <p>{skill.description}</p>
      </Section>

      {skill.commonMistakes?.length ? (
        <Section title="Common mistakes">
          <ul className="border-rule border-t">
            {skill.commonMistakes.map((mistake) => (
              <li key={mistake} className="border-rule flex gap-3 border-b py-2.5">
                <span aria-hidden="true" className="text-ink-3 w-6 shrink-0 text-center text-[14px]">
                  ✕
                </span>
                <span className="text-ink-2 text-[15px] leading-snug">{mistake}</span>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      {skill.extraVideos?.length ? (
        <Section title="More on this">
          <div className="grid gap-4 sm:grid-cols-2">
            {skill.extraVideos.map((video) => (
              <VideoFacade key={video.youtubeId} video={video} compact />
            ))}
          </div>
        </Section>
      ) : null}

      <SkillLinks title="Learn these first" ids={skill.prerequisites} />
      <SkillLinks title="Goes well with" ids={skill.relatedSkills} />

      <nav
        aria-label={`Other ${LEVEL_NAMES[skill.level]} skills in ${category?.name}`}
        className="border-rule-strong flex gap-3 border-t-2 pt-4"
      >
        {previous ? <PagerLink skill={previous} direction="previous" /> : <span className="flex-1" />}
        {next ? <PagerLink skill={next} direction="next" /> : <span className="flex-1" />}
      </nav>
    </article>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="label text-ink-3 mb-2">{title}</h2>
      {children}
    </section>
  )
}

function SkillLinks({ title, ids }: { title: string; ids?: string[] }) {
  const skills = (ids ?? []).map(getSkill).filter((s): s is Skill => Boolean(s))
  if (!skills.length) return null

  return (
    <Section title={title}>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li key={skill.id}>
            <Link
              to={`/skill/${skill.id}`}
              className="tap-target border-rule bg-surface rounded-box hover:border-rule-strong inline-flex items-center px-3 py-2 text-[14px]"
            >
              {skill.title}
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  )
}

function PagerLink({ skill, direction }: { skill: Skill; direction: 'previous' | 'next' }) {
  const isNext = direction === 'next'
  return (
    <Link
      to={`/skill/${skill.id}`}
      rel={direction}
      className={`tap-target hover:bg-surface flex flex-1 flex-col gap-0.5 py-1 ${
        isNext ? 'items-end text-right' : 'items-start'
      }`}
    >
      <span className="label text-ink-3">{isNext ? 'Next' : 'Previous'}</span>
      <span className="font-slab text-[15px] font-semibold">{skill.title}</span>
    </Link>
  )
}

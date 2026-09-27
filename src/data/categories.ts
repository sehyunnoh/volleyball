import type { Category } from '../types'

/**
 * All nine categories, defined once. Which ones appear on the site is derived
 * from whether they have skills (see `data/index.ts`) — adding phase 2 content
 * is a data-only change (10.7).
 */
export const CATEGORIES: Category[] = [
  {
    id: 'fundamentals',
    name: 'Fundamentals',
    blurb: 'Ready position, footwork, and the ball contact every other skill sits on.',
    phase: 1,
  },
  {
    id: 'serving',
    name: 'Serving',
    blurb: 'Start the rally: underhand, overhand float, spin, and jump serves.',
    phase: 1,
  },
  {
    id: 'passing',
    name: 'Passing',
    blurb: 'Forearm passing, platform control, and reading a serve before it lands.',
    phase: 1,
  },
  {
    id: 'setting',
    name: 'Setting',
    blurb: 'Hand shape, footwork, and putting the ball where a hitter can attack it.',
    phase: 2,
  },
  {
    id: 'attacking',
    name: 'Attacking',
    blurb: 'Approach, arm swing, and scoring from the front row or the back row.',
    phase: 2,
  },
  {
    id: 'blocking',
    name: 'Blocking',
    blurb: 'Footwork, timing, and reading a hitter to shut down an attack at the net.',
    phase: 2,
  },
  {
    id: 'defense',
    name: 'Defense',
    blurb: 'Digging, floor defense, and keeping a hard-hit ball alive.',
    phase: 3,
  },
  {
    id: 'strategy',
    name: 'Strategy',
    blurb: 'Positions, rotations, systems, and the rules that shape the game.',
    phase: 3,
  },
  {
    id: 'athleticism',
    name: 'Athleticism',
    blurb: 'Warm ups, jump training, agility, and staying injury free.',
    phase: 3,
  },
]

export const CATEGORY_BY_ID = new Map(CATEGORIES.map((c) => [c.id, c]))

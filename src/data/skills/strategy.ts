import type { Skill } from '../../types'

export const STRATEGY: Skill[] = [
  {
    id: 'player-positions',
    title: 'Player Positions',
    category: 'strategy',
    level: 1,
    summary: 'The six numbered court positions and what each one usually does.',
    description:
      'Volleyball splits the court into six numbered positions, and every player rotates through all six over the course of a game. A few roles do most of the specialized work: the setter runs the offense, outside and opposite hitters attack from the left and right sides, middle blockers attack and block in the center, and the libero handles back-row defense. Learning these roles makes it much easier to follow what is actually happening during a rally.',
    keyPoints: [
      'Six numbered positions, 1 through 6',
      'Setter runs the offense with the second touch',
      'Outside and opposite hitters attack from the sides',
      'Middle blockers attack and block in the center',
      'Libero is the back-row defense specialist',
    ],
    commonMistakes: [
      'Thinking a player only ever plays one position all game.',
      'Mixing up "outside hitter" and "opposite hitter" (they attack from opposite sides).',
    ],
    video: {
      youtubeId: 'aHZQfyl-hEA',
      title: 'Volleyball Positions: Explained with Animations',
      channel: 'Set Explainer',
    },
    tags: {
      space: ['Home'],
      solo: 'Solo',
      equipment: ['Ball only'],
      duration: '10 min',
    },
    prerequisites: ['rules-basics'],
    relatedSkills: ['rotation-order', 'libero-role'],
  },
  {
    id: 'rotation-order',
    title: 'Rotation Order',
    category: 'strategy',
    level: 1,
    summary: 'How all six players shift one spot clockwise after winning the serve.',
    description:
      'Every time a team wins the serve back from its opponent, all six of its players rotate one position clockwise before the next serve. The player who moves into position 1 becomes the new server, and everyone else shifts down the same way. A team that is already serving and keeps scoring does not rotate at all. Once the ball is served, players are free to move to their specialized spots, but they must be lined up correctly relative to each other at the exact moment of contact.',
    keyPoints: [
      'Rotate one spot clockwise after winning serve back',
      'No rotation while your team keeps serving',
      'Whoever reaches position 1 serves next',
      'Correct order only matters at the moment of serve',
    ],
    commonMistakes: [
      'Thinking a team rotates every single point no matter who scores.',
      'Believing players must stay in rotation order for the whole rally.',
    ],
    video: {
      youtubeId: '3bjy4_o1Suk',
      title: 'Volleyball ROTATION BASICS Explained! - How Volleyball Rotations Work',
      channel: 'KoKo Volley',
    },
    tags: {
      space: ['Home'],
      solo: 'Solo',
      equipment: ['Ball only'],
      duration: '10 min',
    },
    prerequisites: ['player-positions'],
    relatedSkills: ['base-defense-positions', 'serve-receive-rotation'],
  },
  {
    id: 'libero-role',
    title: 'The Libero',
    category: 'strategy',
    level: 1,
    summary: 'The defensive specialist who wears a different jersey and never attacks.',
    description:
      "The libero is a defensive specialist who wears a jersey in a clearly different color from the rest of the team, so referees and coaches can spot substitutions at a glance. Liberos play only in the back row, focusing on passing and digging instead of attacking. Because they are strictly defensive, a libero cannot block and cannot attack the ball while it is entirely above the top of the net. Libero swaps also do not use up a team's normal substitutions, so liberos can enter and exit far more often than other players.",
    keyPoints: [
      'Wears a jersey that looks different from teammates',
      'Plays only in the back row',
      'Cannot block or attack above net height',
      'Substitutes in and out without using a team sub',
    ],
    commonMistakes: [
      'Assuming a libero can never serve (rules vary by league).',
      'Thinking the libero is allowed to spike like a normal hitter.',
    ],
    video: {
      youtubeId: 'Y7X9Z9Uzglc',
      title: 'The volleyball libero, explained | Position basics and rules',
      channel: 'NCAA Championships',
    },
    tags: {
      space: ['Home'],
      solo: 'Solo',
      equipment: ['Ball only'],
      duration: '10 min',
    },
    prerequisites: ['player-positions'],
    relatedSkills: ['rotation-order'],
  },
  {
    id: 'base-defense-positions',
    title: 'Base Positions',
    category: 'strategy',
    level: 2,
    summary: 'Where each player stands right after their own team serves.',
    description:
      'Base position is the neutral spot each of the six players returns to right after their own team serves, before the opponent sets up an attack. It gives every player the best starting point to react, whether that means blocking at the net or covering a passing lane in the back row. Base positions look different in each of the six rotations, since the setter and hitters are never in the same spot twice. Getting to base quickly and then reading the play is the foundation of solid team defense.',
    keyPoints: [
      'The home spot right after your team serves',
      'Different in each of the six rotations',
      'Front row spreads out to cover the net',
      'Back row splits the court into thirds',
    ],
    commonMistakes: [
      'Freezing in base instead of reading the set and adjusting.',
      'Confusing base position with where you stand for serve receive.',
    ],
    video: {
      youtubeId: 'KWWj411PWGo',
      title: 'Volleyball Defense - More about Base Positions',
      channel: 'Coach Steve',
    },
    tags: {
      space: ['Practice court', 'Club court'],
      solo: 'Partner',
      equipment: ['Ball only'],
      duration: '10 min',
    },
    prerequisites: ['rotation-order'],
    relatedSkills: ['player-positions', 'serve-receive-rotation'],
  },
  {
    id: 'serve-receive-rotation',
    title: 'Serve Receive Rotation',
    category: 'strategy',
    level: 2,
    summary: 'How a team arranges its passers differently in each rotation.',
    description:
      "When the other team serves, having all six players try to pass gets confusing fast, so most teams use just two or three primary passers, often the outside hitters and the libero. Exactly where those passers stand shifts depending on which of the six rotations the team is in, since the setter and other hitters need to be out of the way. Setting up the right passers in the right spots for every rotation keeps the middle of the court covered and keeps the setter's job simple. Teams practice each rotation separately so passers always know exactly where to stand.",
    keyPoints: [
      'Usually 2-3 main passers, not all six',
      'Libero and outside hitters often share the load',
      'Passer spots change with every rotation',
      'Fewer passers means less confusion over who takes it',
    ],
    commonMistakes: [
      'Letting non-passing hitters crowd into the passing lanes.',
      'Using the exact same passing shape in every rotation.',
    ],
    video: {
      youtubeId: 'gHE5pun0kqg',
      title: 'Serve Receive Rotations for a 5-1 Offense Volleyball Tutorial',
      channel: 'Elevate Yourself',
    },
    tags: {
      space: ['Practice court', 'Club court'],
      solo: 'Partner',
      equipment: ['Ball only'],
      duration: '10 min',
    },
    prerequisites: ['rotation-order'],
    relatedSkills: ['serve-receive-shape', 'base-defense-positions'],
  },
  {
    id: 'simple-attack-options',
    title: 'Attack Options',
    category: 'strategy',
    level: 2,
    summary: 'Spreading attacks between hitters so the block cannot key on one spot.',
    description:
      "A team that only ever sets one hitter is easy to defend, because the other team can stack all three blockers in front of that single spot. Spreading attacks between the outside hitter, the middle, and the opposite forces the defense to cover the whole net instead of loading up one area. The setter reads the pass and the block, then chooses whichever hitter has the best matchup at that moment. Even a simple mix of a quick middle set and an outside set makes a defense's job much harder.",
    keyPoints: [
      'Spreads attacks across outside, middle, and opposite',
      'Forces the block to cover the whole net',
      'Setter picks the option with the best matchup',
      'A single go-to hitter is easy to defend',
    ],
    commonMistakes: [
      'Always setting the same hitter no matter how the block looks.',
      'Ignoring the middle attacker as a real scoring option.',
    ],
    video: {
      youtubeId: 'SbY3FR5lSkw',
      title: 'All Volleyball Offensive Systems Explained in One Video',
      channel: 'Volleyball Tools',
    },
    tags: {
      space: ['Practice court', 'Club court'],
      solo: 'Partner',
      equipment: ['Ball only'],
      duration: '15 min+',
    },
    prerequisites: ['player-positions'],
    relatedSkills: ['running-the-offense', 'five-one-system', 'six-two-system'],
  },
  {
    id: 'five-one-system',
    title: '5-1 System',
    category: 'strategy',
    level: 3,
    summary: 'The most common system: one setter runs the offense every rotation.',
    description:
      'The 5-1 is the most common team system in volleyball: one player sets in every single rotation, while the other five are hitters. When the setter is in the back row, the team has three front-row attackers to choose from. When the setter rotates into the front row, only two front-row hitters are left, so the opposite hitter usually lines up directly across the net from the setter to help balance the court. Running one setter the whole match lets hitters build real timing and chemistry with a single style of setting.',
    keyPoints: [
      'One setter plays and sets every rotation',
      'Three front-row hitters when setter is in back row',
      'Two front-row hitters when setter is up front',
      'Opposite hitter lines up across from the setter',
    ],
    commonMistakes: [
      'Thinking the setter also plays as a hitter sometimes.',
      'Forgetting the opposite hitter\'s spot depends on the setter\'s spot.',
    ],
    video: {
      youtubeId: 'UjLq3NH9lDw',
      title: '5-1 Rotation in Volleyball: Explained With Animations',
      channel: 'Set Explainer',
    },
    tags: {
      space: ['Home'],
      solo: 'Solo',
      equipment: ['Ball only'],
      duration: '10 min',
    },
    prerequisites: ['simple-attack-options', 'rotation-order'],
    relatedSkills: ['six-two-system', 'running-the-offense'],
  },
  {
    id: 'six-two-system',
    title: '6-2 System',
    category: 'strategy',
    level: 3,
    summary: 'The system with two setters, always giving three front-row attackers.',
    description:
      'The 6-2 system uses two setters instead of one, positioned opposite each other in the rotation. Whichever setter is in the back row runs the offense for that rotation, while the other setter moves up to the front row and becomes a hitter instead. Because the setter always comes from the back row, a 6-2 team always has three front-row attackers to choose from, one more option than a standard 5-1. The tradeoff is that hitters have to adjust to two different setters instead of just one.',
    keyPoints: [
      'Uses two setters instead of one',
      'Back-row setter runs the offense that rotation',
      'Front-row setter becomes an extra attacker',
      'Always three front-row attack options',
    ],
    commonMistakes: [
      'Thinking both setters set at the same time.',
      'Forgetting the front-row setter still has to hit or cover.',
    ],
    video: {
      youtubeId: '4Lf2GeVh5bw',
      title: 'Volleyball 6‐2 Offense Explained (Full Breakdown)',
      channel: 'Volleyball Tools',
    },
    tags: {
      space: ['Home'],
      solo: 'Solo',
      equipment: ['Ball only'],
      duration: '10 min',
    },
    prerequisites: ['simple-attack-options', 'rotation-order'],
    relatedSkills: ['five-one-system'],
  },
  {
    id: 'scouting-the-opponent',
    title: 'Scouting the Opponent',
    category: 'strategy',
    level: 3,
    summary: 'Watching the other team for patterns you can turn into a plan.',
    description:
      "Scouting means watching an opponent, before the match or during warmups and early rallies, to spot patterns worth using. A common example is noticing which passer struggles most with serves, then serving at that player on purpose. Teams also track things like an opponent's go-to hitter or a blocker who is slow to move, then adjust their own strategy around it. Even simple scouting, like remembering who the other team sets most often in a tight moment, can change how you play the next point.",
    keyPoints: [
      'Watch for patterns before and during the match',
      'Serve at the opponent\'s weakest passer on purpose',
      'Notice the opponent\'s go-to hitter',
      'Adjust your own strategy based on what you see',
    ],
    commonMistakes: [
      'Ignoring clear patterns because "we just play our game."',
      'Only scouting the other team\'s best player and not their weak links.',
    ],
    video: {
      youtubeId: 'nVLb_w1-7dQ',
      title: 'How to Scout a Volleyball Team like a Pro | Jacoby Sims',
      channel: 'Jacoby Volleyball',
    },
    tags: {
      space: ['Home'],
      solo: 'Solo',
      equipment: ['Ball only'],
      duration: '10 min',
    },
    prerequisites: ['reading-the-play'],
    relatedSkills: ['reading-the-hitter'],
  },
]

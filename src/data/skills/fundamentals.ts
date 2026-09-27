import type { Skill } from '../../types'

export const FUNDAMENTALS: Skill[] = [
  {
    id: 'ready-position',
    title: 'Ready Position',
    category: 'fundamentals',
    level: 1,
    summary: 'The athletic stance you take before every play begins.',
    description:
      'Ready position means knees bent, feet about shoulder width apart, and weight forward on the balls of your feet. From here you can move any direction the moment the ball is hit. Standing tall and flat-footed costs you a half second, and in volleyball a half second is the difference between a play and a miss.',
    keyPoints: [
      'Feet shoulder width, knees bent',
      'Weight forward, on the balls of your feet',
      'Hands up in front of your chest',
      'Eyes on the ball at all times',
      'Stay relaxed, ready to move any way',
    ],
    commonMistakes: [
      'Standing tall with straight, locked knees.',
      'Letting weight settle back onto the heels.',
    ],
    video: {
      youtubeId: '5AQON_01snY',
      title: 'Volleyball Skills: Part 1 Ready Position',
      channel: 'raleighparksandrec',
    },
    tags: {
      space: ['Home', 'Open space'],
      solo: 'Solo',
      equipment: ['Ball only'],
      duration: '5 min',
    },
    relatedSkills: ['shuffle-step', 'overhead-ball-control'],
  },
  {
    id: 'shuffle-step',
    title: 'Shuffle Step',
    category: 'fundamentals',
    level: 1,
    summary: "Sideways footwork that lines your body up with the ball.",
    description:
      'The shuffle step moves you sideways without crossing your feet, so you stay balanced and facing the net. Step first with the foot closest to where you want to go, then slide the other foot to match. Crossing your feet is faster over long distances, but it turns your body away from the play, so short distances always call for a shuffle.',
    keyPoints: [
      'Step sideways with the lead foot first',
      'Slide the trail foot to match it',
      'Never let your feet cross',
      'Stay low, knees bent the whole time',
    ],
    commonMistakes: [
      'Crossing the feet, which turns the body away from the ball.',
      'Standing up tall while shuffling instead of staying low.',
    ],
    video: {
      youtubeId: 'bnem9cJD-4w',
      title: 'Shuffling Drill - Volleyball Drill',
      channel: 'Upward Sports',
    },
    tags: {
      space: ['Home', 'Open space'],
      solo: 'Solo',
      equipment: ['Ball only', 'Cones'],
      duration: '10 min',
    },
    prerequisites: ['ready-position'],
    relatedSkills: ['pursuit-footwork', 'transition-footwork'],
  },
  {
    id: 'rules-basics',
    title: 'Rules Basics',
    category: 'fundamentals',
    level: 1,
    summary: 'The short version of how a volleyball point and game work.',
    description:
      'Each team gets up to three touches to send the ball back over the net, and the same player cannot hit it twice in a row. Every single rally ends in a point for someone, whether or not that team served, which is called rally scoring. When the serving team loses a rally, the other team wins the serve and rotates everyone one spot clockwise before the next play.',
    keyPoints: [
      'Up to 3 touches per side',
      'No player hits the ball twice in a row',
      'Every rally scores a point for someone',
      'Winning the serve back means you rotate one spot',
    ],
    commonMistakes: [
      'Assuming only the serving team can score a point.',
      'Thinking you can catch or briefly hold the ball.',
    ],
    video: {
      youtubeId: 'KuKYiUfcCNU',
      title: 'Volleyball Rules Explained for Beginners (2025 Update)',
      channel: 'Set Explainer',
    },
    tags: {
      space: ['Home'],
      solo: 'Solo',
      equipment: ['Ball only'],
      duration: '10 min',
    },
  },
  {
    id: 'overhead-ball-control',
    title: 'Overhead Ball Control',
    category: 'fundamentals',
    level: 2,
    summary: 'Toss, track, and touch the ball to build hand-eye timing.',
    description:
      'Toss the ball a few feet above your head, watch it all the way down, and either catch it softly or redirect it with your fingertips back up. This is not about technique yet, it is about training your eyes to track the ball and your hands to react on time. Keep the tosses small and controlled before making them bigger or adding movement.',
    keyPoints: [
      'Toss the ball just above your head',
      'Watch the ball all the way into your hands',
      'Catch softly, or redirect with fingertips',
      'Keep tosses low and controlled at first',
    ],
    commonMistakes: [
      'Tossing too far forward, forcing a lunge to reach it.',
      'Watching your hands instead of the ball.',
    ],
    video: {
      youtubeId: 'AFnTKgyXuXc',
      title: 'Volleyball Ball-Control Is HARD! ⎮ SOLO +Volleyball Partner Ball Control Drills',
      channel: 'KoKo Volley',
    },
    tags: {
      space: ['Home', 'Open space'],
      solo: 'Solo',
      equipment: ['Ball only'],
      duration: '10 min',
    },
    prerequisites: ['ready-position'],
    relatedSkills: ['ready-position'],
  },
  {
    id: 'pursuit-footwork',
    title: 'Pursuit Footwork',
    category: 'fundamentals',
    level: 2,
    summary: 'Turning and sprinting to run down a ball moving away.',
    description:
      'When a ball is flying past you or behind you, do not backpedal or shuffle, turn your hips and sprint. Get all the way past the spot where you will play the ball, then plant and square your shoulders to your target before you make contact. Backpedaling feels safer but it is slower, and a late arrival means an off-balance play.',
    keyPoints: [
      'Turn your hips toward the ball immediately',
      'Sprint, do not backpedal or shuffle',
      'Run past the ball before you stop',
      'Square your shoulders before contact',
    ],
    commonMistakes: [
      'Backpedaling instead of turning and sprinting.',
      'Reaching for the ball without resetting your feet first.',
    ],
    video: {
      youtubeId: 'FSdgB9-U9Og',
      title: 'The "Pursuit" Volleyball Drill from Iowa State\'s Christy Johnson-Lynch!',
      channel: 'Championship Productions',
    },
    tags: {
      space: ['Open space', 'Practice court'],
      solo: 'Solo',
      equipment: ['Ball only'],
      duration: '10 min',
    },
    prerequisites: ['shuffle-step'],
    relatedSkills: ['shuffle-step', 'transition-footwork'],
  },
  {
    id: 'calling-the-ball',
    title: 'Calling the Ball',
    category: 'fundamentals',
    level: 2,
    summary: "Saying 'Mine!' early and loud so teammates don't collide.",
    description:
      'The instant you decide you are playing the ball, say so, loudly and clearly. "Mine!" or "Got it!" works fine, one word is enough. A teammate who hears a confident call should back off immediately, since two players going for the same ball is how collisions and dropped balls happen.',
    keyPoints: [
      'Call it the instant you decide to play it',
      'Say it loud, and repeat it if needed',
      'Use one clear word every time',
      'Back off the moment a teammate calls it',
    ],
    commonMistakes: [
      'Calling the ball late, after already starting to move.',
      'Two players calling with equal volume and neither backing off.',
    ],
    video: {
      youtubeId: '6tFSiQaW6LY',
      title: 'Volleyball drill: Ball reception & communication | planet.training',
      channel: 'planet training',
    },
    tags: {
      space: ['Practice court', 'Club court'],
      solo: 'Partner',
      equipment: ['Net'],
      duration: '10 min',
    },
    relatedSkills: ['ready-position'],
  },
  {
    id: 'transition-footwork',
    title: 'Transition Footwork',
    category: 'fundamentals',
    level: 3,
    summary: 'Recovering fast from the net back to a defensive spot.',
    description:
      'Transition means moving from one job, like blocking or setting at the net, straight into your next job, like digging or serve-receive. The instant your role at the net is done, push off and get back to your base position, either with quick backpedal steps or a full turn and sprint if there is time. Players who stand and admire their last play arrive late for the next one.',
    keyPoints: [
      'Push off the net the moment your job ends',
      'Backpedal short distances, turn and sprint longer ones',
      'Reset into ready position before the next contact',
      'Keep your eyes on the ball while moving',
    ],
    commonMistakes: [
      'Watching your own last play instead of recovering.',
      'Standing near the net after your job there is finished.',
    ],
    video: {
      youtubeId: 'DQgMvCUwK1I',
      title: 'Volleyball  Transition Footwork Patterns--Coach Suzie Fritz',
      channel: '3 Sport Training',
    },
    tags: {
      space: ['Practice court', 'Club court'],
      solo: 'Partner',
      equipment: ['Net'],
      duration: '15 min+',
    },
    prerequisites: ['shuffle-step', 'pursuit-footwork'],
    relatedSkills: ['pursuit-footwork', 'movement-under-pressure'],
  },
  {
    id: 'reading-the-play',
    title: 'Reading the Play',
    category: 'fundamentals',
    level: 3,
    summary: "Predicting where the ball is going before it's even hit.",
    description:
      'Good defenders start moving before contact by reading cues instead of just watching the ball. A hitter\'s shoulders, hips, and arm swing point toward where the ball is about to go, and a passer\'s platform angle shows where their pass is headed. By the time the ball is actually hit, you should already be moving toward where you expect it to land.',
    keyPoints: [
      "Watch the hitter's shoulders and arm swing",
      "Watch a passer's platform angle early",
      'React to the cue, not just the ball',
      'Start moving before contact happens',
    ],
    commonMistakes: [
      'Watching only the ball, which reacts too late.',
      'Guessing randomly instead of reading a specific cue.',
    ],
    video: {
      youtubeId: 'FdDVATEIKTs',
      title: 'Reading the Hitter in Defense',
      channel: 'Diego Perez',
    },
    tags: {
      space: ['Practice court', 'Club court'],
      solo: 'Partner',
      equipment: ['Net'],
      duration: '10 min',
    },
    prerequisites: ['ready-position'],
    relatedSkills: ['pursuit-footwork', 'movement-under-pressure'],
  },
  {
    id: 'movement-under-pressure',
    title: 'Movement Under Pressure',
    category: 'fundamentals',
    level: 3,
    summary: 'Combining footwork and ball contact fast, with no time to think.',
    description:
      'In a real rally there is no pause between moving your feet and playing the ball, they happen almost together. Fast, repeated reps with very little rest force your footwork to become automatic, so your brain is free to read the play instead of thinking about your feet. Trust the footwork you have already built rather than slowing down to plan each step.',
    keyPoints: [
      'Move your feet first, set up second',
      'Keep reps fast with almost no rest',
      'Trust your footwork instead of overthinking it',
      'Reset to ready position after every touch',
    ],
    commonMistakes: [
      'Freezing for a moment before moving.',
      'Rushing the contact and skipping the footwork.',
    ],
    video: {
      youtubeId: '3xOiozUaCJw',
      title: 'Become a Better Passer with the "Russian Passing Drill"',
      channel: 'Championship Productions',
    },
    tags: {
      space: ['Practice court', 'Club court'],
      solo: 'Partner',
      equipment: ['Ball only'],
      duration: '15 min+',
    },
    prerequisites: ['transition-footwork', 'reading-the-play'],
    relatedSkills: ['transition-footwork', 'reading-the-play', 'pursuit-footwork'],
  },
]

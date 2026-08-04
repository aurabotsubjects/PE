// Soccer unit data — BLOCK_INFO + LESSONS
const BLOCK_INFO = {
  1:{name:"Foundational Ball Control", range:"Lessons 1–5", color:"var(--b1)", soft:"var(--b1-soft)", warmup:"Colour Cone Dribble", warmdown:"Walk & Reach",
    warmupSetup:"Scatter 4 different-coloured cones evenly around a large open space (roughly 20m x 20m for a class of 20-25). Every student needs their own ball. No lines or grids needed — the whole space is open for free movement.",
    warmupHowTo:[
      "Explain the 4 colours before starting and assign each one a simple action, e.g. Red = dribble to a red cone and touch it with your foot; Blue = dribble to a blue cone and do a sharp turn around it; Yellow = dribble to a yellow cone and stop the ball dead; Green = dribble to a green cone and speed up away from it.",
      "Demonstrate each action briefly with a ball so students see it once before starting.",
      "On 'go', everyone dribbles freely around the space, choosing their own path between cones.",
      "Call out a colour every 10–15 seconds — students dribble to the nearest cone of that colour and perform the matching action.",
      "Keep the pace light and playful — this is about raising heart rates and getting first touches on the ball, not testing skill.",
      "Run for the full 5 minutes, mixing up the order of colours called."
    ],
    warmdownSetup:"No equipment needed beyond the space already in use. Gather the class into a loose circle or scattered spread with enough room for each student to stretch without touching anyone else.",
    warmdownHowTo:[
      "Have students leave their ball to the side and walk slowly around the space for about 1 minute to bring their heart rate down gradually.",
      "Gather into a circle (or stay scattered) and lead 3–4 simple static stretches — calves, quads, hamstrings, and a gentle reach-up/side stretch — holding each for about 15–20 seconds.",
      "Keep instructions simple and calm: 'reach, hold, breathe' rather than technical cues.",
      "Use this quiet time to briefly ask how the session felt for a couple of students, setting a relaxed tone before the Discussion segment.",
      "Finish with everyone standing tall and taking one big breath in and out together."
    ]
  },
  2:{name:"Combining Skills & Attacking Basics", range:"Lessons 6–10", color:"var(--b2)", soft:"var(--b2-soft)", warmup:"Partner Pulse Pass", warmdown:"Partner Stretch",
    warmupSetup:"Pairs spread out across the space (roughly 4-5m apart per pair), one ball per pair, enough room between pairs that passes don't cross.",
    warmupHowTo:[
      "Partners stand facing each other and begin passing the ball back and forth gently using the inside of the foot.",
      "Every 30–45 seconds, call a change: 'pulse up' means pass a little faster/firmer, 'pulse down' means slow right back to gentle taps.",
      "Occasionally call 'jog swap' — both partners jog to swap positions with another nearby pair, then continue passing with their new partner.",
      "Keep the whole activity light and continuous — the goal is raising heart rate and warming up passing muscles, not technical correction.",
      "Run for the full 5 minutes, mixing pulse changes and partner swaps throughout."
    ],
    warmdownSetup:"Same pairs from the warm-up (or new pairs), enough space to stretch side-by-side without touching. Balls set aside.",
    warmdownHowTo:[
      "Have pairs walk together slowly around the space for about 1 minute to bring heart rate down.",
      "In pairs, lead 3–4 simple partner-assisted stretches — e.g. one partner gently holds the other's ankle behind them for a quad stretch, or both sit and reach toward each other's feet for a hamstring stretch.",
      "Hold each stretch for about 15–20 seconds, then swap who is being assisted if the stretch requires it.",
      "Keep contact gentle and consent-based — no forcing a stretch further than a partner is comfortable with.",
      "Finish with partners saying one thing their partner did well in today's session before moving into the Discussion segment."
    ]
  },
  3:{name:"Defending, Attacking & Decision-Making", range:"Lessons 11–15", color:"var(--b3)", soft:"var(--b3-soft)", warmup:"Shadow Runs", warmdown:"Breathe & Balance",
    warmupSetup:"Pairs spread out across the space, no ball needed for this warm-up, roughly 5m x 5m of room per pair.",
    warmupHowTo:[
      "Explain the game: one partner is the 'leader,' the other is the 'shadow' who must copy the leader's movement as closely as possible, staying about 1-2m behind or beside them.",
      "The leader jogs, jinks side to side, changes direction and pace — nothing too sharp or unsafe, just varied movement.",
      "The shadow tries to mirror every change as quickly as possible.",
      "Swap roles every 60–90 seconds so both partners lead and shadow.",
      "This builds the same reading-movement instincts used in defending later in the lesson, while raising heart rate through varied running.",
      "Run for the full 5 minutes, encouraging bigger movements as students warm up."
    ],
    warmdownSetup:"No equipment needed. Gather the class into a spread-out circle with room to balance without bumping others.",
    warmdownHowTo:[
      "Walk slowly around the space for about 1 minute to bring heart rate down.",
      "Lead a few slow, controlled breathing cycles together: breathe in for 4 counts, hold for 2, breathe out for 4 — repeat 3-4 times.",
      "Follow with 2-3 simple balance holds, e.g. standing on one foot for 10-15 seconds, then swap feet — this connects to the body control used in defending.",
      "Keep the tone calm and unhurried — this is a good moment to help students settle before reflecting on the lesson.",
      "Finish standing tall with one final deep breath together before moving into the Discussion segment."
    ]
  },
  4:{name:"Team Tactics & Culmination", range:"Lessons 16–20", color:"var(--b4)", soft:"var(--b4-soft)", warmup:"Team Shape Jog", warmdown:"Circle Stretch & Cheer",
    warmupSetup:"Split the class into their tournament/practice teams (groups of 4-6), each team with a marked-out area to jog in (cones optional). No ball needed.",
    warmupHowTo:[
      "Each team jogs together as a group around their area, staying reasonably close to each other rather than spreading out randomly.",
      "Call out simple shape prompts as they jog: 'spread wide,' 'come together,' 'form a line,' 'form a triangle' — teams adjust their jogging shape on the call.",
      "This gets students moving together as a unit and thinking about team shape before the tactical focus of today's lesson.",
      "Rotate through several shape calls over the 5 minutes, mixing up the order.",
      "Keep energy high and encourage teams to communicate with each other while jogging.",
      "Finish with each team jogging back to a central point together as one group."
    ],
    warmdownSetup:"Gather each team (or the whole class) into a circle with enough room to stretch without touching neighbours.",
    warmdownHowTo:[
      "Walk slowly as a team/group for about 1 minute to bring heart rate down.",
      "In the circle, lead 3-4 simple static stretches together — calves, quads, hamstrings, and a shoulder/arm stretch — holding each for 15-20 seconds.",
      "Keep the group together and calm, using this as a settling-down moment after a high-energy tactical session.",
      "Finish with a short team cheer or acknowledgment — each team says one thing they're proud of from today's session or the block as a whole.",
      "Move directly into the Discussion segment once the cheer is done."
    ]
  }
};

const TIMELINE = [
  {key:"warmup", label:"Warm-Up", min:5},
  {key:"sg1", label:"Skill Game 1", min:6},
  {key:"sg2", label:"Skill Game 2", min:6},
  {key:"sg3", label:"Skill Game 3", min:6},
  {key:"big", label:"Big Game", min:12},
  {key:"warmdown", label:"Warm-Down", min:5},
  {key:"discuss", label:"Reflect", min:5}
];

const LESSONS = [
 {
  "n": 1,
  "block": 1,
  "title": "Glue Feet",
  "focus": "Ball familiarisation & close control",
  "walt": "We are learning to keep the ball close using different parts of both feet while moving.",
  "wilf": [
   "I can dribble without the ball going more than a small step away from me",
   "I can use the inside, outside, and sole of my foot to control the ball"
  ],
  "nzc": "Strand B · Managing self",
  "value": "Aroha",
  "valueText": "Looking after yourself with patience while learning something new, and encouraging others (not laughing at mistakes) as everyone's ball control looks different on day one.",
  "equipment": "1 ball per student, cones for grid boundaries",
  "safety": "Spread out — one ball's-width minimum gap when dribbling freely; clear grid boundaries so students don't run into fences/walls",
  "games": [
   {
    "name": "Traffic Lights Dribble",
    "desc": "Free dribble in a grid; teacher calls 'green' (fast, light touches), 'yellow' (slow, tight control), 'red' (stop the ball dead under one foot).",
    "coach": "Eyes up between touches where possible.",
    "easier": "Bigger grid, slower calls.",
    "harder": "Smaller grid, faster/mixed calls.",
    "chaos": "Random constraint calls",
    "setup": "Mark out one grid per 6–8 students using 4 cones per grid (roughly 10m x 10m — big enough that students aren't colliding, small enough that they stay close to you). Every student needs their own ball inside the grid. Stand where the whole class can see and hear you, ideally on a slightly raised spot or the edge of the grid.",
    "howTo": [
     "Explain the three calls before starting: 'GREEN' = dribble at a fast jog with light, quick touches; 'YELLOW' = slow right down, take small controlling touches, ball stays glued to the foot; 'RED' = stop completely, ball trapped dead under one foot, freeze.",
     "Demonstrate all three yourself with a ball so students see the difference in speed and touch size before they start.",
     "Send everyone into the grid dribbling their own ball on 'green' to begin.",
     "Call out colours in a random order every 5–10 seconds. Watch for students bunching up or losing control and gently redirect them to open space.",
     "On 'red', check that every ball is stopped dead under a foot before you call 'green' again — this is your checkpoint to see who needs help.",
     "Run for the full time, mixing up the order and pace of your calls so students can't predict what's coming next."
    ]
   },
   {
    "name": "Sole Tag",
    "desc": "Partners each dribble their own ball in a small grid, trying to tap a partner's ball out while protecting their own — no standing still allowed.",
    "coach": "Keep the ball on your 'safe' foot, away from the tagger.",
    "easier": "Bigger grid, no tagging (just avoid contact).",
    "harder": "3 players, 1 ball each, everyone taggable.",
    "chaos": "Added pressure / protecting possession",
    "setup": "Pair students up and give each pair a small shared grid of about 5m x 5m marked with 4 cones (several grids side by side across the space). Each student in the pair needs their own ball.",
    "howTo": [
     "Explain the rule: both partners dribble their own ball inside the same small grid at the same time, trying to tap the partner's ball out of the grid with their foot, while protecting their own ball from being tapped out.",
     "Clarify what's not allowed: no pushing, no kicking a person, only the ball can be touched, and both feet must stay on the ground (no jumping in to tackle).",
     "If a ball gets knocked out of the grid, that student quickly retrieves it, dribbles back in, and play continues straight away — there's no stopping or restarting for the whole class.",
     "Start play on your signal and let pairs go continuously for 2–3 minutes.",
     "Rotate students into new pairs partway through so they experience different opponents.",
     "Stop the whole class together, not pair by pair, so nobody feels singled out for finishing early."
    ]
   },
   {
    "name": "1v1 Gate Challenge",
    "desc": "Pairs in a small square with two cone gates on opposite sides; score by dribbling through either gate while your partner tries to poke the ball away.",
    "coach": "Change of pace to unbalance the defender.",
    "easier": "Defender must stay 2m back until attacker starts moving.",
    "harder": "Both gates defended by same player.",
    "chaos": "Mild opposition + decision-making",
    "setup": "In pairs, mark out a small square (about 6m x 6m) with two 'gates' — each gate is two cones placed 1–1.5m apart on opposite sides of the square. One ball per pair.",
    "howTo": [
     "One student starts as the attacker with the ball, the other as the defender.",
     "The attacker scores a point by dribbling the ball through either gate under control (the ball must pass fully between the two cones).",
     "The defender's only job is to use their feet to poke or block the ball — no pushing, holding, or sliding tackles allowed.",
     "After a goal is scored, or if the defender wins the ball and dribbles it out of the square, restart with the attacker taking the ball again from the centre.",
     "Play for a set time (e.g. 90 seconds) then swap attacker and defender roles.",
     "Remind students both gates are always open — the attacker should look for whichever gate is easier to reach based on where the defender is standing."
    ]
   }
  ],
  "big": {
   "name": "Small-Sided Possession Soccer",
   "desc": "3v3 or 4v4, small pitch, no goals. A team scores a point for 5 consecutive touches/passes kept without the other team touching the ball. Close control determines who can keep the ball under pressure.",
   "setup": "Split the class into groups of 6 or 8, and set up one small pitch per group (no goals needed) using cones for corners — roughly 15m x 10m works well for 3v3, slightly bigger for 4v4. Bibs to mark two teams within each group.",
   "howTo": [
    "Explain scoring: a team earns 1 point every time they string together 5 consecutive touches/passes without the other team touching the ball. Call the count out loud as it happens so students can hear ('1...2...3...') to build anticipation.",
    "If the ball goes out of play or the other team wins it, the count resets to zero for whatever team now has the ball.",
    "There are no goals in this game — the only way to score is through consecutive possession, so the focus is entirely on keeping the ball under pressure using close control.",
    "Restart after every point or turnover with a simple pass-in from the sideline nearest to where the ball went out, rather than stopping play for long resets.",
    "Circulate between pitches, calling out and celebrating good close control moments you see, not just final point totals.",
    "Run 2–3 short games (2–3 minutes each) with a quick water break and team reshuffle in between if time allows."
   ]
  },
  "discussion": [
   "What helped you keep the ball close today?",
   "Who did you notice controlling the ball really well — what were they doing with their feet?",
   "What was tricky, and how did you keep trying?"
  ],
  "lookfors": [
   "Ball stays within playing distance during free dribbling",
   "Uses more than just the front of the foot",
   "Recovers control quickly after a heavy touch"
  ],
  "inclusion": "Allow a larger 'close control' tolerance for students newer to the ball; pair confident dribblers with less confident ones in Sole Tag rather than same-ability pairs.",
  "skillBreakdown": [
   {
    "step": "Use the inside, outside, and sole of both feet to touch the ball.",
    "why": "Training all surfaces early prevents a one-footed dependency and builds a bigger toolkit for later dribbling."
   },
   {
    "step": "Keep the ball within half a metre of your feet at a walking pace.",
    "why": "Close control means you can react to pressure or change direction without the ball getting away from you."
   },
   {
    "step": "Keep your head up between touches, glancing down only briefly.",
    "why": "Soccer is played by seeing the space around you, not just watching the ball."
   }
  ]
 },
 {
  "n": 2,
  "block": 1,
  "title": "Gear Shift",
  "focus": "Dribbling with change of direction/speed",
  "walt": "We are learning to change direction and speed while keeping control of the ball.",
  "wilf": [
   "I can speed up and slow down without losing the ball",
   "I can turn the ball sharply using the inside/outside of my foot"
  ],
  "nzc": "Strand B · Managing self",
  "value": "Mōhio",
  "valueText": "Knowing and understanding your own body and how it moves — noticing what your feet are doing and learning from it.",
  "equipment": "1 ball per student, cones",
  "safety": "Watch for collisions when changing direction in tight grids — remind students to check space before turning",
  "games": [
   {
    "name": "Cone Slalom Sprint",
    "desc": "Individual dribble through a zig-zag line of cones as fast as possible without losing control; race against own best time.",
    "coach": "Small touches near cones, bigger touches in open space.",
    "easier": "Wider cone spacing.",
    "harder": "Narrower spacing / timed leaderboard.",
    "chaos": "Beat the clock",
    "setup": "Set up 4–6 parallel slalom lines of 5–6 cones each in a zig-zag pattern (cones about 1.5m apart), spaced well apart from each other so students aren't running into neighbouring lines. One ball per student, one line per student or small group taking turns.",
    "howTo": [
     "Demonstrate the slalom once yourself: small, quick touches when weaving close to cones, bigger touches to cover ground in the open sections.",
     "Students line up at the start of their slalom line.",
     "On 'go', each student dribbles through their own zig-zag as fast as they can while keeping the ball under control — if they lose control badly, they simply collect the ball and continue rather than starting over.",
     "Time individuals informally (a stopwatch or just counted 'Mississippis') so each student is racing their own previous attempt, not each other.",
     "Rotate through the line 3–4 times, encouraging students to try beating their own best time or number of touches.",
     "For safety, only one student per lane at a time — the next student waits until the lane is clear."
    ]
   },
   {
    "name": "Number Call Turns",
    "desc": "Each student has a number; dribbling freely, when their number is called they must do a sharp turn (inside-of-foot cut) before continuing.",
    "coach": "Plant foot beside the ball, turn body and ball together.",
    "easier": "Fewer numbers active at once.",
    "harder": "Two numbers called in sequence quickly.",
    "chaos": "Random constraint calls",
    "setup": "One large open grid for the whole class (or split into two grids for bigger classes), each student with their own ball. Assign every student a number from 1 up (write numbers on a whiteboard or just count off at the start).",
    "howTo": [
     "Demonstrate the turn technique first: plant the non-kicking foot beside the ball, use the inside of the other foot to drag/cut the ball in a new direction, turning the whole body with it.",
     "Everyone dribbles freely inside the grid at a gentle pace.",
     "Call out a number at random — every student with that number must immediately perform a sharp inside-of-foot turn before continuing to dribble.",
     "Students without that number keep dribbling normally, watching where they're going so they don't collide with someone turning nearby.",
     "Call numbers every 5–10 seconds in a random order so all students get several turns during the game.",
     "Occasionally call two different numbers back-to-back for extra challenge once students are comfortable with the basic pattern."
    ]
   },
   {
    "name": "Shrinking Grid Dribble",
    "desc": "Whole class dribbles inside a grid that shrinks every 30 seconds; those still in full control 'survive' each round (no elimination — just a challenge marker).",
    "coach": "Use quick changes of direction to find space.",
    "easier": "Shrink slower.",
    "harder": "Shrink faster, add a second ball-less 'space raider'.",
    "chaos": "Shrinking space",
    "setup": "Mark out a large grid (roughly 20m x 20m for a class of 20-25) using cones at the corners and a few along each edge — the edge cones are what you'll move inward. One ball per student, all starting inside the grid.",
    "howTo": [
     "Explain that everyone dribbles freely inside the grid, trying to keep control of their own ball while avoiding others.",
     "Every 30 seconds, pause briefly and move the edge cones inward on all four sides to shrink the playing area.",
     "Restart dribbling immediately after each shrink — there's no elimination, just an increasing challenge to find space and keep control as things get tighter.",
     "Coach live during play: point out students using quick changes of direction well to find gaps.",
     "Once the grid gets very small (or after 3–4 shrinks), reset it back to full size and start again, or move into the next activity.",
     "For the 'harder' version, add one or two ball-less 'space raiders' who move through the grid (without touching anyone's ball) to make finding open space trickier."
    ]
   }
  ],
  "big": {
   "name": "End Zone Dribble",
   "desc": "4v4, pitch split into thirds; teams try to dribble the ball into the opposition's end zone (not passing — must dribble it in) while defenders try to intercept. Change of pace/direction is essential to beat defenders in the middle third.",
   "setup": "Split into groups of 8 for 4v4, pitch divided into three even thirds using cones (roughly 25m x 15m total, so each third is about 8m deep). No goals — instead mark a clear 'end zone' line at each end of the pitch.",
   "howTo": [
    "Explain the objective: teams score by dribbling the ball into the opposition's end zone under their own control — passing the ball into the end zone does not count as a score, only dribbling it in.",
    "Defenders try to win the ball back using feet only (no sliding), especially in the tight middle third.",
    "When a team scores by dribbling into the end zone, that team keeps the point and the ball is walked back to the centre for a simple restart with the other team.",
    "If the ball goes out of bounds, restart with a dribble-in (not a throw-in) for the team that didn't put it out, keeping the focus on dribbling skills.",
    "Coach specifically for change of pace and direction in the tight middle third — point out students who slow down, then explode past a defender.",
    "Play 2–3 short rounds with brief breaks, swapping which end each team attacks if needed for fairness."
   ]
  },
  "discussion": [
   "What did changing speed do to help you get past a defender or through a gap?",
   "Which turn (inside/outside foot) felt most natural to you?",
   "What would you try differently next time?"
  ],
  "lookfors": [
   "Clear change of pace (not just constant speed)",
   "Uses inside/outside of foot to turn",
   "Keeps head up briefly to spot space"
  ],
  "inclusion": "For students who find rapid direction change hard, allow a 'two-touch turn' (slower, controlled) rather than a single sharp touch.",
  "skillBreakdown": [
   {
    "step": "Use the outside or inside of the foot to push the ball into a new direction.",
    "why": "This lets you change direction without stopping the ball dead or slowing down too much."
   },
   {
    "step": "Drop your hips and lower your centre of gravity before changing direction.",
    "why": "A lower body position lets you cut sharply without losing balance."
   },
   {
    "step": "Accelerate for 2-3 touches immediately after the change of direction.",
    "why": "The change of direction only creates separation from a defender if you explode away from it straight after."
   }
  ]
 },
 {
  "n": 3,
  "block": 1,
  "title": "Escape Artist",
  "focus": "Dribbling under light pressure (1v1)",
  "walt": "We are learning to keep control of the ball while someone is trying to win it from us.",
  "wilf": [
   "I can shield the ball with my body from a defender",
   "I can find a way past a defender using a change of direction"
  ],
  "nzc": "Strand B · Managing self, Relating to others",
  "value": "Manaaki",
  "valueText": "Using your skills faithfully to give your partner a fair, honest challenge — not going so hard it isn't fun, not giving up either.",
  "equipment": "1 ball per pair, cones for grids/gates",
  "safety": "No sliding/lunging tackles — feet-only pressure, stay upright",
  "games": [
   {
    "name": "Shadow Dribble",
    "desc": "Attacker dribbles freely; a 'shadow' defender stays 1.5m away and mirrors movement without touching the ball, just to get the attacker used to pressure nearby.",
    "coach": "Keep body between ball and defender.",
    "easier": "Defender stays further back.",
    "harder": "Defender allowed to get closer.",
    "chaos": "Added defender / pressure (delayed contact)",
    "setup": "Pairs spread out across the space, each pair with one ball. No cones needed — just enough room (roughly 8m x 8m per pair) for the attacker to move freely.",
    "howTo": [
     "One partner is the attacker with the ball, the other is the 'shadow' defender.",
     "Explain the shadow's job: stay about 1.5m away from the attacker at all times, mirroring their movement, but never reaching in to touch the ball.",
     "The attacker dribbles freely around the space, changing pace and direction, getting used to having someone close by without panicking.",
     "Coach the attacker to keep their body between the ball and the shadow whenever the shadow gets close.",
     "Run for about 60–90 seconds, then swap roles so both partners experience being the attacker.",
     "For 'harder', let the shadow drift a little closer (still not tackling) to raise the pressure gradually."
    ]
   },
   {
    "name": "1v1 to Two Gates",
    "desc": "As Lesson 1's gate game but now the defender may actively try to win the ball (feet only), not just poke.",
    "coach": "Shield with your body, use quick feet to protect.",
    "easier": "Attacker gets 2 'lives' before defender wins the round.",
    "harder": "Smaller grid.",
    "chaos": "Added pressure",
    "setup": "Same square-and-two-gates layout as Lesson 1's gate game (6m x 6m square, two gates of two cones each on opposite sides). One ball per pair.",
    "howTo": [
     "Remind students of the gate-scoring rule from Lesson 1: dribble the ball cleanly through either gate to score.",
     "New rule for today: the defender may now actively try to win the ball with their feet, not just poke at it — but still no sliding tackles, pushing, or holding.",
     "Attacker starts with the ball in the middle of the square and looks to protect it while working toward a gate.",
     "If the defender wins the ball and dribbles it under control for 2 seconds, that counts as a win for them — restart with the attacker taking the ball again.",
     "Play for 90 seconds then swap attacker and defender.",
     "For 'easier', give the attacker 2 'lives' — they can lose the ball once and simply restart before the defender's win properly counts."
    ]
   },
   {
    "name": "King of the Grid",
    "desc": "Small group (4–5), everyone dribbles their own ball in a shared grid; if your ball gets knocked out you retrieve it and rejoin — the 'king' has kept control the longest streak without being dispossessed.",
    "coach": "Constant scanning for the nearest threat.",
    "easier": "Bigger grid, fewer players.",
    "harder": "Smaller grid, more players.",
    "chaos": "Scoring streaks, role rotation via re-entry",
    "setup": "Groups of 4–5 students share one grid (about 12m x 12m for a group of 5), each student with their own ball inside the grid.",
    "howTo": [
     "Explain the goal: everyone dribbles their own ball inside the shared grid while trying to knock other players' balls out using their feet, protecting their own ball at the same time.",
     "If your ball gets knocked outside the grid, quickly retrieve it, dribble back in, and keep playing — there's no elimination or sitting out.",
     "Play continuously for 2–3 minutes with everyone in the grid at once.",
     "The 'king' is whoever can tell you they kept control the longest streak without being dispossessed — ask a couple of students to share their streak at the end rather than making it a strict competition.",
     "Coach constant scanning: remind students to check around them regularly rather than only watching their own ball.",
     "For 'harder', shrink the grid or add players; for 'easier', enlarge the grid or reduce numbers."
    ]
   }
  ],
  "big": {
   "name": "1v1 Alley Tournament",
   "desc": "Pairs take turns in a narrow 'alley' pitch with a small goal at each end — 1v1, first to 3 goals or most goals in 2 minutes, then rotate partners. Shielding and quick changes of direction under real pressure decide most points.",
   "setup": "Set up several narrow 'alley' pitches (about 15m long x 5m wide) side by side, each with a small goal (two cones 1.5m apart, no need for a real goal frame) at both ends. Pair students up, one pair per alley, with spare pairs waiting to rotate in.",
   "howTo": [
    "Explain the format: 1v1 within the alley, first to score 3 goals wins, or most goals scored within a fixed 2-minute time limit if no one reaches 3.",
    "Players can score in either goal they're attacking, and must defend both of their own goals.",
    "No sliding tackles — feet-only challenges, staying upright at all times.",
    "Start with a kick-off from the centre of the alley; after each goal, the scored-against player restarts from their own goal.",
    "After the time limit or reaching 3 goals, rotate: winners could play winners, or simply rotate to a fresh partner from a waiting pair, so everyone gets 2–3 different matchups.",
    "Coach shielding and quick changes of direction throughout — these are the skills that decide most points in this tight space."
   ]
  },
  "discussion": [
   "What worked well to protect the ball from your partner?",
   "How did it feel to defend fairly and try your best without being too rough?",
   "What's one thing you'll try next time you're 1v1?"
  ],
  "lookfors": [
   "Uses body/shoulder to shield",
   "Keeps ball on the far foot from the defender",
   "Attempts a change of direction under pressure rather than just running into the defender"
  ],
  "inclusion": "For lower-confidence pairs, use 'passive defenders' (hands behind back, feet only, walking pace) so the attacker experiences pressure without high stress.",
  "skillBreakdown": [
   {
    "step": "Keep your body between the ball and the defender.",
    "why": "Shields the ball so the defender has to go through or around you to win it."
   },
   {
    "step": "Use small, controlled touches when a defender is close.",
    "why": "Big touches are easy for a nearby defender to intercept."
   },
   {
    "step": "Look up briefly to see the space or a teammate before committing to a move.",
    "why": "Dribbling past a defender should open something up, not just be for its own sake."
   }
  ]
 },
 {
  "n": 4,
  "block": 1,
  "title": "Laser Passes",
  "focus": "Passing — short, accurate ground passes",
  "walt": "We are learning to pass the ball accurately along the ground to a partner.",
  "wilf": [
   "I can strike the ball with the inside of my foot so it travels straight",
   "I can pass so my partner doesn't have to move far to receive it"
  ],
  "nzc": "Strand B · Relating to others",
  "value": "Pānga",
  "valueText": "A good, accurate pass makes the game better for everyone else — thinking about how your actions impact your teammate, not just yourself.",
  "equipment": "1 ball per pair, cones for targets/gates",
  "safety": "Passing lanes should not cross other pairs' lanes — space grids out",
  "games": [
   {
    "name": "Pass & Retreat",
    "desc": "Partners face each other and pass; after every pass, the passer takes one big step backward and the receiver may only take one step sideways to collect it. Distance grows each successful pass.",
    "coach": "Strike with the inside of the foot, follow through toward the target.",
    "easier": "Two steps sideways allowed for receiver.",
    "harder": "Passer takes two steps back each time.",
    "chaos": "Movement penalty/reward",
    "setup": "Pairs spread out with plenty of space between pairs (start about 4m apart facing each other), one ball per pair, in an open area or lined-up channels so passing lanes don't cross.",
    "howTo": [
     "Partners start facing each other about 4m apart and pass the ball back and forth using the inside of the foot.",
     "After every pass, the passer takes one big step backward, increasing the passing distance a little each time.",
     "The receiver is only allowed one step sideways to collect the ball under control before passing it back.",
     "If a pass goes astray or the receiver needs more than one step, simply reset to the last successful distance and continue rather than starting from scratch.",
     "Keep going until pairs reach a distance where it becomes genuinely challenging, then reset back to the start distance and try to beat their record.",
     "Coach striking technique throughout: inside of the foot, follow through toward the target, plant foot pointing where the pass should go."
    ]
   },
   {
    "name": "Gate Passing",
    "desc": "Pairs pass through a small cone gate between them from increasing distances; score a point each time the ball goes cleanly through.",
    "coach": "Plant foot points at the target.",
    "easier": "Wider gate.",
    "harder": "Narrower gate, further apart.",
    "chaos": "Scoring streaks",
    "setup": "Pairs each set up one small gate (two cones about 1m apart) roughly halfway between them, starting about 5m apart on either side of the gate. One ball per pair.",
    "howTo": [
     "Partners stand on opposite sides of their gate and pass the ball to each other, aiming to send it cleanly through the gate.",
     "A point is scored each time the ball passes fully between the two cones without touching either one.",
     "After a few successful passes at the starting distance, both partners take a step back to increase the distance and keep scoring points.",
     "If the ball misses the gate, the receiver collects it and simply passes back — no need to reset distance immediately unless it's clearly too hard.",
     "Coach plant-foot alignment: the non-kicking foot should point at the target (the gate) to help with accuracy.",
     "For 'harder', narrow the gate width or increase the starting distance between partners."
    ]
   },
   {
    "name": "Triangle Passing Race",
    "desc": "Groups of 3 form a triangle and must complete 10 accurate passes around the triangle as fast as possible, racing other triangles.",
    "coach": "Prepare your body/feet before the ball arrives so the return pass is quick.",
    "easier": "Smaller triangle.",
    "harder": "Bigger triangle, must alternate feet.",
    "chaos": "Beat the clock, head-to-head mirror",
    "setup": "Groups of 3 form a triangle using cones (each side about 3–4m), one ball per triangle, several triangles spread across the space so groups can see each other for the 'race' element.",
    "howTo": [
     "Each group of 3 stands at the points of their triangle.",
     "On 'go', the group passes the ball around the triangle in order, counting each accurate pass out loud.",
     "The first group to reach 10 accurate passes calls out and puts their hands up to signal they've finished.",
     "If a pass is miscontrolled or goes to the wrong person, the group doesn't lose their count — they just recover the ball and continue.",
     "Run the race 2–3 times so groups can try to beat their own time or beat other groups.",
     "Coach receivers to prepare their body and feet before the ball arrives so the next pass out can be quick — this is what makes teams fast."
    ]
   }
  ],
  "big": {
   "name": "Possession Passing Soccer",
   "desc": "4v4, small pitch, no goals — 1 point per 5 consecutive accurate passes kept as a team. Building on Lesson 1's version but now explicitly coached/scored on pass accuracy, not just touches.",
   "setup": "Groups of 8 (4v4), small pitch with no goals (about 20m x 15m), bibs for two teams. Same layout as Lesson 1's possession game.",
   "howTo": [
    "Remind students of the scoring rule: 1 point for every 5 consecutive accurate passes a team completes without the other team touching the ball.",
    "New focus for today: passes must be accurate and controllable, not just any touch — coach specifically calls out and praises well-weighted, accurate passes rather than just counting touches.",
    "Count passes out loud as they happen so students can hear the streak building.",
    "If the ball is intercepted or goes out of play, the count resets to zero and restarts with a simple pass-in.",
    "Circulate between groups giving specific feedback on plant foot and follow-through, connecting back to today's Skill Games.",
    "Play 2–3 short rounds with brief breaks for water and quick team talk."
   ]
  },
  "discussion": [
   "What technique helped your passes go where you wanted?",
   "How did a good pass make it easier for your partner?",
   "What happens to the game when passes aren't accurate?"
  ],
  "lookfors": [
   "Uses inside of the foot (not toe-poking)",
   "Plant foot points toward target",
   "Pass weight suits the distance (not always maximum power)"
  ],
  "inclusion": "Shorten distances for students still building leg strength/technique; the game structures (gates, triangles) scale naturally by moving cones closer.",
  "skillBreakdown": [
   {
    "step": "Plant the non-kicking foot beside the ball, pointing at the target.",
    "why": "Your plant foot aims the pass — if it points the wrong way, the ball often follows it."
   },
   {
    "step": "Strike the ball with the inside of the foot, ankle locked.",
    "why": "The inside of the foot gives the largest, flattest contact surface for accuracy; a locked ankle stops the ball ballooning up."
   },
   {
    "step": "Follow through toward the target.",
    "why": "Stopping the leg early can leave the pass short or send it off-line."
   }
  ]
 },
 {
  "n": 5,
  "block": 1,
  "title": "Soft Hands, Soft Feet",
  "focus": "Receiving/first touch (cushioning the ball)",
  "walt": "We are learning to control ('cushion') an incoming pass so the ball stays close to us.",
  "wilf": [
   "I can take the pace off an incoming ball using my foot, thigh, or chest",
   "I can set up my next touch to face where I want to go"
  ],
  "nzc": "Strand B · Managing self",
  "value": "Aroha",
  "valueText": "Being patient and kind with yourself (and encouraging teammates) when a first touch doesn't go to plan — everyone's still learning.",
  "equipment": "1 ball per pair, cones",
  "safety": "Passes should stay below head height in early games — no volleys/headers yet",
  "games": [
   {
    "name": "Cushion Catch",
    "desc": "Partners pass; receiver must 'cushion' the ball to a dead stop within one touch before passing back — a point is lost if the ball bounces away more than a big step.",
    "coach": "Relax the receiving surface, withdraw the foot slightly on contact.",
    "easier": "Slower passes.",
    "harder": "Passes with more pace.",
    "chaos": "Scoring streaks",
    "setup": "Pairs facing each other about 4–5m apart, one ball per pair, open space with no obstacles.",
    "howTo": [
     "Demonstrate 'cushioning' first: as the ball arrives, relax the receiving foot and withdraw it slightly on contact so the ball dies dead rather than bouncing away.",
     "Partners pass the ball to each other using the inside of the foot.",
     "The receiver must cushion the ball to a complete stop within one touch before passing it back.",
     "If the ball bounces away more than about one big step from the receiver, that pass 'loses' the point for the pair — simply collect the ball and continue, no need to restart the whole game.",
     "Keep count of consecutive clean cushions as a friendly team target ('let's get to 10 in a row').",
     "For 'harder', partners pass with more pace once the basic technique is solid; for 'easier', slow the passes right down."
    ]
   },
   {
    "name": "First Touch, Second Touch, Go",
    "desc": "Receiver must control the ball with their first touch in a chosen direction (away from an imaginary defender) with their second touch, then dribble to a target cone.",
    "coach": "Touch should go into space, not straight down.",
    "easier": "Mark the 'away' direction with a cone.",
    "harder": "Passer calls the direction just before passing (reaction).",
    "chaos": "Random constraint calls",
    "setup": "Pairs with one ball, a target cone placed a few metres away from the receiver to dribble toward. Space pairs out so dribbling lanes don't cross.",
    "howTo": [
     "Explain the sequence: first touch controls the ball away from an imaginary defender (to the side), second touch sets it up in the direction of the target cone, then dribble to the cone.",
     "The passer plays a simple pass to the receiver to start each rep.",
     "The receiver controls with their first touch, directs with their second touch, then dribbles to the target cone and back.",
     "Swap roles so the passer becomes the receiver for the next rep.",
     "For 'easier', mark the 'away' direction with a cone so students know exactly where to direct their first touch.",
     "For 'harder', the passer calls out a direction just before passing so the receiver must react rather than plan ahead."
    ]
   },
   {
    "name": "Pressure Receive",
    "desc": "As Skill Game 1, but a light 'shadow' defender stands nearby (not tackling yet) to add visual/decision pressure on the first touch.",
    "coach": "Check over your shoulder before the ball arrives.",
    "easier": "Defender further away.",
    "harder": "Defender allowed to close in after the pass is played.",
    "chaos": "Added defender / pressure",
    "setup": "Same pair setup as First Touch, Second Touch, Go, but add a third student as a light 'shadow' defender standing a few metres from the receiver.",
    "howTo": [
     "Set up in threes: passer, receiver, and shadow defender standing nearby (not tackling).",
     "The passer plays the ball in as before; the shadow defender stands close enough to be seen but does not attempt to win the ball.",
     "The receiver checks over their shoulder to spot the defender before the ball arrives, then controls and directs their first touch away from that defender.",
     "Rotate roles every 4–5 reps so each student experiences passing, receiving under pressure, and being the shadow.",
     "For 'easier', the shadow starts further away; for 'harder', the shadow is allowed to close in after the pass is played (still without tackling).",
     "Coach checking over the shoulder as the key habit — this is what separates confident receivers from surprised ones."
    ]
   }
  ],
  "big": {
   "name": "3-Touch Possession Soccer",
   "desc": "4v4, small pitch, no goals — each player is limited to 3 touches maximum before passing, rewarding a clean first touch that sets up the next action quickly.",
   "setup": "Groups of 8 (4v4), small pitch, no goals, bibs for two teams.",
   "howTo": [
    "Explain the touch limit: every player may take a maximum of 3 touches before they must pass — 1 (control), 2 (set up), 3 (release).",
    "If a player takes a 4th touch, possession switches to the other team on the spot.",
    "Play possession-style: no goals, just keeping the ball as a team under the touch limit.",
    "Coach specifically on first touch quality — a clean first touch that sets up the next action quickly is what makes the 3-touch limit work.",
    "Restart with a simple pass-in after any touch-limit turnover or ball out of play.",
    "Play 2–3 short rounds, reminding students this connects directly to the cushioning and first-touch work from today's Skill Games."
   ]
  },
  "discussion": [
   "What did a 'good' first touch look and feel like today?",
   "How did your first touch help (or make harder) your next move?",
   "What will you focus on next time the ball comes to you?"
  ],
  "lookfors": [
   "Ball stays within a step of the receiver after first touch",
   "Touch is directed with purpose, not just stopped dead",
   "Body shape/shoulder check before the ball arrives"
  ],
  "inclusion": "For students who find cushioning difficult, allow trapping under the sole of the foot as a valid 'good enough' first touch before progressing to inside-of-foot cushioning.",
  "skillBreakdown": [
   {
    "step": "Get your body in line with the ball early.",
    "why": "Gives you more surface and time to control it rather than stretching at the last second."
   },
   {
    "step": "Relax the receiving foot or surface and withdraw slightly on contact.",
    "why": "'Giving' with the touch absorbs the ball's speed instead of it bouncing away."
   },
   {
    "step": "Cushion the ball into space away from pressure, not straight to your feet.",
    "why": "A touch into space keeps you moving and away from a defender, rather than stopping dead."
   }
  ]
 },
 {
  "n": 6,
  "block": 2,
  "title": "Give and Go",
  "focus": "Passing on the move (give-and-go)",
  "walt": "We are learning to pass the ball and immediately move into space to receive it back.",
  "wilf": [
   "I can pass and then run into space, not stand still",
   "I can time my pass so a moving teammate can control it easily"
  ],
  "nzc": "Strand B · Relating to others",
  "value": "Mōhio",
  "valueText": "Understanding your role and where you fit in the play — knowing when to move and why.",
  "equipment": "Balls, cones, bibs (2 colours)",
  "safety": "Keep passing lanes clear of other groups when running through space",
  "games": [
   {
    "name": "Wall Pass Relay",
    "desc": "Pairs practise 'pass and move': Player A passes to Player B and immediately jogs to a new cone; B controls and passes back to A's new position. Repeat down a channel.",
    "coach": "Move immediately after passing, don't watch the ball.",
    "easier": "Walk instead of jog.",
    "harder": "Add a defender jogging alongside (not intercepting yet).",
    "chaos": "Role rotation",
    "setup": "Pairs spread along a channel about 15m long marked with cones on each side. One ball per pair. Several cones placed along the channel as target markers for Player A to jog to.",
    "howTo": [
     "Player A starts with the ball, Player B stands a few metres away facing them.",
     "Player A passes to Player B, then immediately jogs forward to the next cone marker down the channel — don't stand and admire the pass.",
     "Player B controls the ball with one touch and passes it into the space where Player A has jogged to.",
     "Repeat this pattern all the way down the channel: pass, move, receive, pass, move.",
     "At the end of the channel, pairs jog back to the start and go again, or swap so Player B leads the movement this time.",
     "For 'easier', walk instead of jog; for 'harder', add a third student jogging alongside as a passive defender (not intercepting yet)."
    ]
   },
   {
    "name": "Give and Go Gates",
    "desc": "In trios, two attackers combine give-and-go passes to move the ball through a series of gates down the field, racing another trio.",
    "coach": "Pass early, before you're under real pressure.",
    "easier": "Wider gates/no time pressure.",
    "harder": "Narrower gates, timed race.",
    "chaos": "Beat the clock, head-to-head mirror",
    "setup": "Groups of 3 (two attackers plus one passive/timing role, or simply two attackers working together), set up a line of 3–4 gates (two cones each, 1.5m apart) spaced down a channel about 20m long. One ball per trio.",
    "howTo": [
     "The two attackers work together to move the ball through each gate in sequence using give-and-go passes: pass to your partner, run into space, receive the pass back.",
     "The third group member can act as a timer/starter, or trios can race each other side by side down parallel channels.",
     "A gate is 'passed' when the ball travels through it cleanly (either by pass or dribble) as part of the sequence.",
     "Race down the channel through all gates as quickly as possible while still completing genuine give-and-go combinations, not just dribbling through.",
     "Reset at the start and go again 2–3 times, timing informally to build a sense of pace.",
     "For 'easier', widen the gates and remove time pressure; for 'harder', narrow the gates and add a clock."
    ]
   },
   {
    "name": "1-2 vs Shadow Defender",
    "desc": "Pairs attempt a give-and-go against one light-touch defender who can only intercept after the first pass is played (delayed pressure).",
    "coach": "The 'give' player should move into space immediately, not just stand and admire the pass.",
    "easier": "Defender starts further back.",
    "harder": "Defender allowed to close immediately.",
    "chaos": "Added defender / pressure",
    "setup": "Pairs of attackers plus one defender per group (groups of 3), working in a small area about 10m x 10m. One ball per group.",
    "howTo": [
     "One attacker starts with the ball, their partner nearby ready to support, and the defender positioned between them and the target.",
     "Explain the delayed-pressure rule: the defender may only try to intercept the ball after the first pass has been played, not before.",
     "The attacker with the ball plays a pass to their partner (the 'give'), then immediately moves into space to receive it back (the 'go').",
     "The receiving partner looks to return the pass into the space the first attacker has moved into, completing the give-and-go past the defender.",
     "Rotate roles regularly so every student experiences both attacking roles and defending.",
     "For 'easier', the defender starts further back; for 'harder', the defender can close in immediately once the first pass is played."
    ]
   }
  ],
  "big": {
   "name": "3v3 + 1 Target Player Soccer",
   "desc": "Small-sided game with small goals; encourage give-and-go combinations as a way to beat defenders, especially near the target player position. Coach highlights any successful give-and-go in play.",
   "setup": "Groups of 8, small pitch with small goals at each end (about 20m x 15m), with one 'target player' zone marked near each goal. Bibs for two teams.",
   "howTo": [
    "Explain the target player idea: each team can use a designated target player positioned near the opponent's goal to combine with as they attack.",
    "Encourage teams to use give-and-go combinations (pass, move into space, receive back) to beat defenders, especially around the target player.",
    "Play a normal small-sided game with goals — teams score by getting the ball into the small goal under normal rules.",
    "Whenever a successful give-and-go combination happens in play, stop briefly (or call it out without stopping) to celebrate it so students connect today's skill to real game moments.",
    "Rotate which student plays the target player role every few minutes so everyone gets a turn.",
    "Play 2–3 short rounds with brief breaks."
   ]
  },
  "discussion": [
   "What made a give-and-go work well today?",
   "Why does moving after your pass matter?",
   "Can you describe a moment you found space at the right time?"
  ],
  "lookfors": [
   "Moves immediately after passing",
   "Receives the return pass without needing to stop and reset",
   "Communicates (calls for the ball) with a teammate"
  ],
  "inclusion": "Slow the whole combination down to walking pace for students still building the timing/decision sequence; speed increases as confidence grows.",
  "skillBreakdown": [
   {
    "step": "Pass, then immediately move into new space.",
    "why": "Standing still after passing makes you easy to mark and removes you as an option."
   },
   {
    "step": "Time your run so you arrive as the return pass arrives.",
    "why": "Arriving too early or too late means you have to stop and wait, losing the tempo advantage."
   },
   {
    "step": "Receive on the move with an open body shape.",
    "why": "Keeps your options — pass, dribble, shoot — available immediately rather than needing an extra touch to turn."
   }
  ]
 },
 {
  "n": 7,
  "block": 2,
  "title": "Perfect Strike",
  "focus": "Striking technique (shooting form)",
  "walt": "We are learning correct shooting technique — how to strike the ball cleanly toward a target.",
  "wilf": [
   "I can place my non-kicking foot beside the ball",
   "I can strike through the middle of the ball with the top of my laces or inside of my foot"
  ],
  "nzc": "Strand B · Managing self",
  "value": "Manaaki",
  "valueText": "Practising a skill faithfully, with focus and effort, even when it doesn't work first time — using your talent well takes repetition.",
  "equipment": "Balls, small goals/targets, cones",
  "safety": "Clear 'shooting lanes,' no one stands behind/beside a goal while shots are being taken",
  "games": [
   {
    "name": "Technique Target Shots",
    "desc": "From a stationary ball, students shoot at a large target (e.g. a taped square on a wall or a big cone gate) focusing purely on technique, not power.",
    "coach": "Plant foot beside the ball, eyes on the ball at contact, follow through.",
    "easier": "Closer to target.",
    "harder": "Further away.",
    "chaos": "Scoring streaks",
    "setup": "Set up several shooting stations, each with a large target (a taped square on a wall, or a big cone gate about 2m wide) and a stationary ball placed a set distance away (start around 6–8m). Small groups rotate through stations.",
    "howTo": [
     "Demonstrate the technique: plant foot beside the ball pointing at the target, eyes on the ball at the moment of contact, strike through the middle of the ball, and follow through toward the target.",
     "Students take turns shooting one at a time from a stationary ball at their station's target.",
     "The focus is purely on technique, not power — a soft, well-struck shot that hits the target is better than a hard, scrappy one that misses.",
     "After each shot, the student retrieves their ball and returns to the back of their station's line.",
     "Give quick individual feedback on plant foot position and follow-through as students take their turns.",
     "For 'easier', move closer to the target; for 'harder', move further away."
    ]
   },
   {
    "name": "Roll and Strike",
    "desc": "A partner rolls the ball toward the shooter, who must strike a moving ball cleanly at a target — introducing timing on top of technique.",
    "coach": "Adjust the run-up to meet the ball, don't rush the strike.",
    "easier": "Slow, straight rolls.",
    "harder": "Varied speed/angle rolls.",
    "chaos": "Random constraint calls (varied delivery)",
    "setup": "Pairs at shooting stations, one ball per pair, a target set up a set distance from the shooter (similar to Technique Target Shots).",
    "howTo": [
     "One partner stands off to the side with the ball, the other stands ready to shoot at the target.",
     "The partner rolls the ball firmly toward the shooter along the ground, aimed so the shooter can strike it in one clean movement.",
     "The shooter adjusts their run-up and timing to meet the moving ball rather than rushing the strike, then shoots at the target using the technique from Skill Game 1.",
     "Swap roles after every 4–5 shots so both partners get rolling and shooting practice.",
     "Coach timing specifically: 'don't rush to meet the ball — let it come to the right spot.'",
     "For 'easier', roll slow and straight; for 'harder', vary the speed and angle of the roll."
    ]
   },
   {
    "name": "Shot Streak Challenge",
    "desc": "Small groups rotate through a shooting station, each getting quick-fire shots at a target from a feed; the group tracks consecutive 'clean technique' shots as a team streak.",
    "coach": "Reset your technique each shot, don't chase power.",
    "easier": "Slower feeds, bigger target.",
    "harder": "Quicker feeds, smaller target zones worth bonus points.",
    "chaos": "Scoring streaks, bonus objectives",
    "setup": "Small groups (3–4) rotate through a shooting station with one 'feeder' delivering balls and a target zone marked with cones. A ball supply nearby for quick-fire feeding.",
    "howTo": [
     "One student feeds the ball (rolling or a simple pass) to the shooter, one student shoots at a time, others wait in line.",
     "The shooter takes a quick shot at the target using good technique, then moves to the back of the line.",
     "The group counts consecutive shots with 'clean technique' (good plant foot, contact, follow-through) as a team streak — this can be judged by the group itself or a nearby helper.",
     "If a shot has poor technique (even if it scores), the streak resets to zero and the group starts counting again.",
     "Rotate the feeder role every few reps so everyone experiences both feeding and shooting.",
     "For 'easier', use slower feeds and a bigger target; for 'harder', use quicker feeds and smaller target zones worth bonus points."
    ]
   }
  ],
  "big": {
   "name": "Small-Sided Goals Soccer",
   "desc": "4v4 with small goals; emphasis in coaching feedback is on clean technique when shooting, not just outcome — celebrate good technique attempts even if they miss.",
   "setup": "Groups of 8 (4v4), small pitch with small goals (about 20m x 15m), bibs for two teams.",
   "howTo": [
    "Play a normal small-sided game with small goals at each end.",
    "Explain to students that today's coaching feedback focuses on shooting technique, not just whether the shot goes in — a well-struck shot that's saved is still worth celebrating.",
    "Circulate and call out good technique moments loudly and specifically ('great follow-through on that shot!') even when the shot misses or is saved.",
    "Keep score normally, but remind the group that technique feedback matters as much as the scoreline today.",
    "Restart with a simple pass-in or goal kick equivalent after goals or the ball going out.",
    "Play 2–3 short rounds with brief breaks."
   ]
  },
  "discussion": [
   "What does 'good technique' feel like when you strike the ball well?",
   "What part of your shooting technique are you most proud of today?",
   "What will you keep practising?"
  ],
  "lookfors": [
   "Non-kicking foot placed beside the ball",
   "Eyes on the ball at the point of contact",
   "Balanced follow-through (not falling backward)"
  ],
  "inclusion": "Use a lighter/softer ball for students building leg strength or confidence around striking; success is measured by technique, not distance/power.",
  "skillBreakdown": [
   {
    "step": "Plant the non-kicking foot alongside the ball, pointing at the target.",
    "why": "This foot aims the shot, just as it does for a pass."
   },
   {
    "step": "Strike through the middle or lower half of the ball.",
    "why": "Contact point below centre controls trajectory and helps lift the ball if needed."
   },
   {
    "step": "Keep your head down and eyes on the ball through contact.",
    "why": "Lifting your head early is the most common cause of scuffed or mis-hit shots."
   }
  ]
 },
 {
  "n": 8,
  "block": 2,
  "title": "Pick Your Spot",
  "focus": "Shooting accuracy & placement",
  "walt": "We are learning to place a shot in a specific part of the goal, not just strike it hard.",
  "wilf": [
   "I can choose a target area before I shoot",
   "I can place the ball into that area more often than not"
  ],
  "nzc": "Strand B · Thinking",
  "value": "Pānga",
  "valueText": "Thinking ahead about where your shot will have the most impact (an open space in goal) rather than just reacting.",
  "equipment": "Balls, goals divided into zones (cones/markers), cones",
  "safety": "Same shooting-lane clearances as Lesson 7",
  "games": [
   {
    "name": "Zone Shooting",
    "desc": "Goal is divided into 4 zones with cones; teacher calls a zone before each shot, students must place the ball there.",
    "coach": "Body/foot angle determines direction — line it up before striking.",
    "easier": "Bigger zones.",
    "harder": "Smaller zones, called right before the shot.",
    "chaos": "Random constraint calls",
    "setup": "Set up a goal divided into 4 zones using cones or markers (e.g. top-left, top-right, bottom-left, bottom-right), with a ball supply and a shooting spot marked a set distance away.",
    "howTo": [
     "Students take turns at the shooting spot with a ball.",
     "Before each shot, the teacher (or a partner) calls out a target zone ('bottom-left!').",
     "The student must strike the ball so it lands in the called zone, using body and foot angle to direct it rather than just power.",
     "After each shot, retrieve the ball and return to the line for the next turn.",
     "Give feedback on body/foot alignment — remind students to line up their plant foot and shoulders toward the zone before striking.",
     "For 'easier', use bigger zones; for 'harder', use smaller zones and call the zone right before the shot (less time to line up)."
    ]
   },
   {
    "name": "Beat the Keeper Angles",
    "desc": "A student 'keeper' stands in different positions; the shooter must pick the open side of goal and place their shot there.",
    "coach": "Look at the space, not the keeper.",
    "easier": "Keeper stands still/central.",
    "harder": "Keeper moves just before the shot.",
    "chaos": "Added defender / pressure",
    "setup": "One student acts as keeper in a small goal, one shooter at a marked spot a set distance away, others waiting in line to rotate through both roles.",
    "howTo": [
     "The keeper stands in different starting positions within the goal (centre, slightly left, slightly right) before each shot.",
     "The shooter looks at where the open space in the goal is — not directly at the keeper — and picks their shot to go into that open side.",
     "The shooter strikes the ball toward the open side of the goal.",
     "Rotate: after each shot, the shooter goes to the back of the line and the next student shoots; swap the keeper role every 4–5 shots.",
     "Coach 'look at the space, not the keeper' as the key cue throughout.",
     "For 'easier', keeper stays still and central; for 'harder', keeper can move slightly just before the shot."
    ]
   },
   {
    "name": "Points Target Shootout",
    "desc": "Zones worth different points (corners = 3, middle = 1); small groups compete for the highest team score in a set number of shots.",
    "coach": "Balance risk (harder corner shot) vs. reliability (safer central shot) — a decision-making element.",
    "easier": "Fewer high-value zones.",
    "harder": "Time pressure added.",
    "chaos": "Bonus objectives, beat the clock",
    "setup": "Divide a goal into zones with different point values marked using cones or tape (corners worth more, e.g. 3 points, middle worth less, e.g. 1 point). Small groups take a set number of shots each (e.g. 5 shots per student).",
    "howTo": [
     "Explain the points system before starting: corner zones score more (3 points) because they're harder to hit, the middle scores less (1 point) because it's easier and more reliable.",
     "Each student takes their set number of shots in turn, aiming for whichever zone they choose.",
     "The group keeps a running total for team score, adding up everyone's zone points.",
     "After each student's turns, the group tallies the points before the next student goes.",
     "Coach the decision-making side: is it worth risking the harder corner shot for more points, or playing it safe for a reliable score?",
     "For 'easier', reduce the number of high-value zones; for 'harder', add a time limit for each student's turn."
    ]
   }
  ],
  "big": {
   "name": "Small-Sided Goals Soccer with Zone Bonus",
   "desc": "4v4 small goals; a goal scored into a marked 'bonus corner' area is worth 2 points, encouraging placement decisions in a real game.",
   "setup": "Groups of 8 (4v4), small pitch with small goals, one corner of each goal marked as a 'bonus corner' zone using cones or tape.",
   "howTo": [
    "Play a normal small-sided game with small goals.",
    "Explain the bonus rule: any goal scored into the marked bonus corner zone is worth 2 points instead of 1.",
    "Keep a running score for each team, calling out bonus goals clearly when they happen.",
    "Restart with a simple pass-in or equivalent after goals or the ball going out of play.",
    "Coach placement decisions in the moment — encourage students to notice when the bonus corner is open and try to place a shot there rather than blasting centrally.",
    "Play 2–3 short rounds with brief breaks, tallying total scores at the end if useful for engagement."
   ]
  },
  "discussion": [
   "How did you decide where to place your shot today?",
   "What's the difference between shooting hard and shooting smart?",
   "Did you ever choose a safer option over a riskier one — why?"
  ],
  "lookfors": [
   "Looks at the target space before striking",
   "Adjusts body/foot angle to aim, not just power",
   "Shows awareness of risk vs. reliability in shot choice"
  ],
  "inclusion": "Use larger target zones and closer distances for students still building accuracy; keep the 'decision-making' element (pick a zone) even if the physical target is generous.",
  "skillBreakdown": [
   {
    "step": "Pick a specific target — a corner or gap — before you strike.",
    "why": "Aiming generally at the goal is far less accurate than committing to one spot."
   },
   {
    "step": "Use the inside of the foot for placement, laces for power.",
    "why": "Different contact surfaces suit different goals — accuracy versus power."
   },
   {
    "step": "Stay balanced through the strike, arms out for balance.",
    "why": "Losing balance sends the shot off target regardless of technique."
   }
  ]
 },
 {
  "n": 9,
  "block": 2,
  "title": "Triple Threat",
  "focus": "Combining dribble → pass → shoot",
  "walt": "We are learning to combine dribbling, passing, and shooting smoothly in one sequence.",
  "wilf": [
   "I can choose the right moment to dribble, pass, or shoot",
   "I can link these actions together without stopping awkwardly between them"
  ],
  "nzc": "Strand B · Thinking",
  "value": "Aroha",
  "valueText": "Enjoying the game and encouraging teammates as everyone tries to link skills together — celebrating good combinations, not just goals.",
  "equipment": "Balls, small goals, cones",
  "safety": "Standard shooting-lane clearance; watch for congestion near goals in small-sided drills",
  "games": [
   {
    "name": "Dribble-Pass-Shoot Circuit",
    "desc": "Individual circuit: dribble through cones, pass to a rebound target/wall, control the return, then shoot at goal. Timed for personal best.",
    "coach": "Keep the sequence flowing — don't over-control between actions.",
    "easier": "Simplify the circuit (fewer cones).",
    "harder": "Add a second rebound/pass.",
    "chaos": "Beat the clock",
    "setup": "Set up one circuit per group of 4–5: a short line of cones to dribble through, a wall or rebound target to pass against, and a small goal to shoot at, all in sequence over about 15–20m.",
    "howTo": [
     "Explain the full sequence: dribble through the cones, pass the ball against the wall/rebound target, control the ball as it comes back, then shoot at the goal.",
     "One student goes at a time while others wait at the start of the circuit.",
     "Time each student informally so they can try to beat their own personal best on repeat attempts.",
     "After shooting, the student collects their ball and jogs back to the start, and the next student in line begins.",
     "Coach flow — remind students not to over-control between each part of the sequence, keeping the ball moving smoothly.",
     "For 'easier', use fewer cones in the dribble section; for 'harder', add a second rebound/pass into the sequence."
    ]
   },
   {
    "name": "2v1 to Goal",
    "desc": "Two attackers vs. one defender, working the ball down the field using dribble/pass combinations before shooting.",
    "coach": "The extra attacker should decide dribble vs. pass based on the defender's position.",
    "easier": "Defender passive/delayed.",
    "harder": "Defender active from the start.",
    "chaos": "Added defender / pressure",
    "setup": "Groups of 3 (two attackers, one defender) with a small goal at the end of a marked area about 15m x 10m. One ball per group, groups rotating through the defender role.",
    "howTo": [
     "Two attackers start with the ball at one end, one defender positions themselves between the attackers and the goal.",
     "Attackers work the ball down the area toward the goal using a mix of dribbling and passing, trying to create a shooting chance.",
     "The extra attacker (the one without the ball) should read the defender's position and decide whether to ask for a pass or let their partner dribble.",
     "The defender uses feet only (no sliding) to try to win the ball or block the shot.",
     "After a goal, save, or the defender winning the ball, reset with the attackers back at the start.",
     "Rotate roles regularly so everyone experiences attacking and defending. For 'easier', defender starts passive/delayed; for 'harder', defender is active from the start."
    ]
   },
   {
    "name": "Combo Points Challenge",
    "desc": "Small games (3v3) where bonus points are awarded any time a team completes a genuine dribble→pass→shoot sequence (even if it misses).",
    "coach": "Look for the combination, not just any shot.",
    "easier": "Bigger pitch/more time.",
    "harder": "Smaller pitch.",
    "chaos": "Bonus objectives",
    "setup": "Groups of 6 (3v3), small pitch with a small goal at each end (about 15m x 12m), bibs for two teams within each group.",
    "howTo": [
     "Play a normal small-sided game with small goals.",
     "Explain the bonus rule: any time a team completes a genuine dribble, then a pass, then a shot in the same team move, they earn bonus recognition — even if the shot misses.",
     "Coach and students together watch for and call out these combination sequences during play ('that's a combo — dribble, pass, shot!').",
     "Keep a simple tally of combo bonuses alongside normal goals if useful for engagement, or just celebrate them verbally.",
     "Restart with a simple pass-in after goals or the ball going out of play.",
     "For 'easier', use a bigger pitch or more time; for 'harder', use a smaller pitch to force quicker decisions."
    ]
   }
  ],
  "big": {
   "name": "Small-Sided Soccer — Combo Bonus",
   "desc": "4v4 small goals; any goal that includes a visible dribble, pass, and shot in the same team move earns bonus recognition (celebrated, not necessarily extra formal points).",
   "setup": "Groups of 8 (4v4), small pitch with small goals (about 20m x 15m), bibs for two teams.",
   "howTo": [
    "Play a normal small-sided game with small goals.",
    "Explain that any goal which includes a visible dribble, a pass, and a shot in the same team move earns bonus recognition — celebrated out loud rather than necessarily worth extra formal points.",
    "Coach circulates and calls out combo goals enthusiastically when they happen, reinforcing the link between today's Skill Games and the full game.",
    "Restart with a simple pass-in or equivalent after goals or the ball going out of play.",
    "Keep the game flowing with minimal stoppages so students get maximum touches.",
    "Play 2–3 short rounds with brief breaks."
   ]
  },
  "discussion": [
   "What combination of skills worked best for you today?",
   "How did you decide between dribbling, passing, or shooting in the moment?",
   "What was a great combination you saw a teammate do?"
  ],
  "lookfors": [
   "Links actions smoothly (minimal unnecessary touches between phases)",
   "Makes a decision rather than defaulting to the same action every time",
   "Recognises and reacts to defender positioning"
  ],
  "inclusion": "Allow extra touches/time in the circuit and 2v1 games for students still building confidence linking skills; the goal is fluency over speed at this stage.",
  "skillBreakdown": [
   {
    "step": "Take the touch that sets up your next action, not just any touch.",
    "why": "Each touch should be purposeful and lead cleanly into the pass or shot."
   },
   {
    "step": "Keep your head up between actions to read what's actually open.",
    "why": "The sequence should respond to the game, not run on autopilot."
   },
   {
    "step": "Decide early — pass or shoot — so your body can prepare for it.",
    "why": "Last-second indecision leads to a rushed, poor-technique action."
   }
  ]
 },
 {
  "n": 10,
  "block": 2,
  "title": "Body Shield",
  "focus": "Turning with the ball / protecting the ball (shielding)",
  "walt": "We are learning to turn away from pressure and shield the ball with our bodies.",
  "wilf": [
   "I can use my body to keep the ball away from a defender",
   "I can turn into space rather than into pressure"
  ],
  "nzc": "Strand B · Managing self",
  "value": "Mōhio",
  "valueText": "Understanding your position relative to pressure/space — reading the situation around you before deciding which way to turn.",
  "equipment": "Balls, cones",
  "safety": "No shoulder-charging — shielding is positioning, not physical contact beyond fair, feet-based challenges",
  "games": [
   {
    "name": "Turn Away Challenge",
    "desc": "Receiving a pass with a shadow defender close behind, the receiver must turn away from the defender's side and dribble to a target.",
    "coach": "Check over your shoulder before the ball arrives to know which way to turn.",
    "easier": "Defender starts further back.",
    "harder": "Defender closer/faster.",
    "chaos": "Added defender / pressure",
    "setup": "Groups of 3 (passer, receiver, shadow defender), a target cone placed a few metres beyond the receiver's starting position. One ball per group.",
    "howTo": [
     "The shadow defender stands close behind the receiver (not touching, just present) before the pass is played.",
     "The passer plays a simple pass to the receiver.",
     "As the ball arrives, the receiver checks over their shoulder to see which side the defender is on, then turns away from that side using their first touch and dribbles to the target cone.",
     "Rotate roles every 4–5 reps so each student experiences passing, receiving/turning, and being the defender.",
     "Coach the shoulder-check as the key habit — remind students to look before the ball arrives, not after.",
     "For 'easier', the defender starts further back; for 'harder', the defender stands closer and moves faster."
    ]
   },
   {
    "name": "Protect the Ball 1v1",
    "desc": "In a small grid, one player must keep the ball for as long as possible using shielding while a defender tries to win it (feet only); swap roles regularly.",
    "coach": "Body side-on to the defender, ball on the far foot.",
    "easier": "Bigger grid, more time before rotating.",
    "harder": "Smaller grid.",
    "chaos": "Role rotation",
    "setup": "Pairs share a small grid (about 6m x 6m), one ball per pair.",
    "howTo": [
     "One player starts with the ball and must keep it away from their partner (the defender) for as long as possible using shielding — body side-on, ball kept on the foot furthest from the defender.",
     "The defender tries to win the ball using feet only (no sliding, no pushing).",
     "Time each turn (e.g. 20–30 seconds), then swap roles so both players experience shielding and defending.",
     "Coach body position throughout: 'side-on to the defender, ball on your far foot.'",
     "Run several rounds so both students get multiple turns in each role.",
     "For 'easier', use a bigger grid and give more time before rotating; for 'harder', use a smaller grid."
    ]
   },
   {
    "name": "Shield & Release",
    "desc": "As above, but the shielding player must hold the ball for a set count then release a pass to a supporting teammate under pressure.",
    "coach": "Know where your support is before you're pressured.",
    "easier": "Longer hold time, supporter closer.",
    "harder": "Shorter hold time, supporter further/moving.",
    "chaos": "Random constraint calls",
    "setup": "Groups of 3 (shielding player, defender, supporting teammate) in a small grid (about 8m x 8m). One ball per group.",
    "howTo": [
     "The shielding player receives the ball and must hold it under pressure from the defender for a set count (e.g. 5 seconds) using the shielding technique from the previous game.",
     "The supporting teammate positions themselves somewhere useful to receive a pass once the count is up.",
     "After the count, the shielding player releases a pass to the supporting teammate while still under pressure from the defender.",
     "Rotate roles after each rep so every student experiences shielding, defending, and supporting.",
     "Coach awareness: 'know where your support is before you're pressured, not after.'",
     "For 'easier', use a longer hold time and keep the supporter close; for 'harder', use a shorter hold time with the supporter further away or moving."
    ]
   }
  ],
  "big": {
   "name": "Small-Sided Soccer — Protect the Ball Bonus",
   "desc": "4v4; bonus recognition any time a player successfully shields the ball under pressure for 3+ seconds before releasing it to a teammate.",
   "setup": "Groups of 8 (4v4), small pitch (about 20m x 15m), bibs for two teams. No goals needed unless preferred — can be played as possession or with small goals.",
   "howTo": [
    "Play a normal small-sided game.",
    "Explain the bonus rule: any time a player successfully shields the ball under real pressure for 3 or more seconds before releasing it to a teammate, that's worth bonus recognition.",
    "Coach circulates and calls out shielding moments loudly when they happen, connecting them back to today's Skill Games.",
    "Keep the game flowing with minimal stoppages.",
    "Restart with a simple pass-in after the ball goes out of play.",
    "Play 2–3 short rounds with brief breaks."
   ]
  },
  "discussion": [
   "What helped you protect the ball from a defender today?",
   "How did you decide which way to turn?",
   "When is it better to shield and hold vs. release the ball quickly?"
  ],
  "lookfors": [
   "Body positioned between the ball and the defender",
   "Turns away from pressure rather than into it",
   "Aware of supporting teammates before releasing the ball"
  ],
  "inclusion": "For students who find shielding physically challenging, focus success criteria on positioning/awareness rather than 'winning' every contest.",
  "skillBreakdown": [
   {
    "step": "Keep your body side-on between the ball and the defender.",
    "why": "This uses your body as a barrier so the defender has to go around you."
   },
   {
    "step": "Use your far foot to shield the ball while your body blocks access.",
    "why": "Keeps the ball protected on the side away from the defender."
   },
   {
    "step": "Turn away from pressure using the outside of the foot once a gap opens.",
    "why": "Turning into a defender loses the ball; turning away uses the space you've shielded."
   }
  ]
 },
 {
  "n": 11,
  "block": 3,
  "title": "Patient Defender",
  "focus": "Defending — jockeying & body positioning",
  "walt": "We are learning to defend patiently, staying goal-side and delaying an attacker rather than diving in.",
  "wilf": [
   "I can stay on-balance and side-on while defending",
   "I can delay an attacker without immediately trying to tackle"
  ],
  "nzc": "Strand B · Managing self",
  "value": "Manaaki",
  "valueText": "Serving your team well through a role that isn't about scoring — good defending is a gift to the whole team.",
  "equipment": "Balls, cones, bibs",
  "safety": "No sliding tackles; feet-only, upright challenges throughout",
  "games": [
   {
    "name": "Jockey & Freeze",
    "desc": "Defender jockeys an attacker dribbling in a channel; on 'freeze,' both stop — defender is scored on balance/positioning (side-on, low, goal-side), not on winning the ball.",
    "coach": "Small controlled steps, don't lunge.",
    "easier": "Slower attacker.",
    "harder": "Attacker changes direction often.",
    "chaos": "Random constraint calls",
    "setup": "Pairs in a channel about 10m long and 3–4m wide marked with cones. One ball per pair.",
    "howTo": [
     "Demonstrate 'jockeying' first: defender stays side-on, low body position, small controlled steps, staying goal-side of the attacker without diving in.",
     "The attacker dribbles down the channel while the defender jockeys alongside, staying between the attacker and the end of the channel.",
     "Call 'freeze' at random moments — both players stop immediately.",
     "On freeze, check the defender's position: are they side-on, balanced, low, and goal-side? Give quick feedback rather than judging whether they won the ball.",
     "Continue play after each freeze check, repeating several times down the channel.",
     "For 'easier', the attacker moves slower; for 'harder', the attacker changes direction often to test the defender's footwork."
    ]
   },
   {
    "name": "Delay the Attacker",
    "desc": "1v1 in a channel; defender's only job is to delay the attacker from reaching the end line for as long as possible (timed), not to win the ball.",
    "coach": "Stay goal-side, patient footwork.",
    "easier": "Longer channel (more time/space to delay).",
    "harder": "Shorter channel.",
    "chaos": "Beat the clock (defender vs. own best delay time)",
    "setup": "Pairs in a channel (start around 12m long, 3–4m wide, marked with cones), one ball per pair, with a clear end line marked.",
    "howTo": [
     "The attacker starts with the ball at one end of the channel and tries to dribble to the far end line.",
     "The defender's only job is to delay the attacker — staying goal-side and using patient footwork to slow them down, not to actually win the ball.",
     "Time how long it takes the attacker to reach the end line (informally counted or with a stopwatch).",
     "After each attempt, reset both players to the start and swap roles so both experience attacking and defending.",
     "Coach patience: 'stay goal-side, don't lunge in — every second you delay is a win.'",
     "For 'easier', use a longer channel giving more time/space to delay; for 'harder', use a shorter channel."
    ]
   },
   {
    "name": "2 Defenders, Patient Press",
    "desc": "Small group game (2 defenders vs. 2 attackers in a limited zone) — defenders must stay connected and patient, only committing to a tackle when support arrives.",
    "coach": "Communicate with your defending partner.",
    "easier": "Bigger zone.",
    "harder": "Smaller zone, time limit for attackers to escape.",
    "chaos": "Added pressure, role rotation",
    "setup": "Groups of 4 (2 attackers, 2 defenders) in a limited zone (about 10m x 10m). One ball per group.",
    "howTo": [
     "The two attackers start with the ball and try to keep possession or advance through the zone.",
     "The two defenders must stay connected (not too far apart) and work together, only committing to a tackle when the second defender is close enough to support.",
     "Defenders communicate verbally to coordinate who presses and who covers.",
     "Play continuously for a set time (e.g. 60–90 seconds), then swap which pair is attacking and which is defending.",
     "Coach communication specifically: 'talk to your defending partner — who's pressing, who's covering?'",
     "For 'easier', use a bigger zone; for 'harder', use a smaller zone with a time limit for attackers to escape."
    ]
   }
  ],
  "big": {
   "name": "Small-Sided Soccer — Defending Focus",
   "desc": "4v4; coach highlights good jockeying/delaying moments as much as tackles won, reinforcing that patient defending is valuable even without winning the ball outright.",
   "setup": "Groups of 8 (4v4), small pitch (about 20m x 15m), bibs for two teams.",
   "howTo": [
    "Play a normal small-sided game.",
    "Explain to students that today's coaching feedback highlights good jockeying and delaying moments just as much as tackles won — patient defending counts even without winning the ball outright.",
    "Coach circulates and calls out good defensive positioning loudly when it happens, not just successful tackles.",
    "No sliding tackles — feet-only, upright challenges throughout.",
    "Restart with a simple pass-in after the ball goes out of play.",
    "Play 2–3 short rounds with brief breaks."
   ]
  },
  "discussion": [
   "What does patient defending look like, compared to just chasing the ball?",
   "How did staying on balance help you defend better?",
   "Why is delaying an attacker useful for your team, even if you don't win the ball?"
  ],
  "lookfors": [
   "Stays on balance (not overcommitting/lunging)",
   "Maintains a goal-side position",
   "Communicates with a defending partner when applicable"
  ],
  "inclusion": "For students less confident defending, use the 'delay only' version (no live tackling) as the main experience, adding live 1v1 challenge later once technique is secure.",
  "skillBreakdown": [
   {
    "step": "Stay on the balls of your feet in a low, balanced stance.",
    "why": "Allows a quick reaction to a sudden change of direction from the attacker."
   },
   {
    "step": "Show the attacker onto your stronger side or toward support.",
    "why": "Influencing their options, rather than reacting to all of them, makes defending easier."
   },
   {
    "step": "Stay patient — jockey and delay rather than diving in.",
    "why": "A rushed tackle attempt is easy to beat; delaying buys time for teammates to help."
   }
  ]
 },
 {
  "n": 12,
  "block": 3,
  "title": "Perfect Timing",
  "focus": "Defending — timing a tackle",
  "walt": "We are learning to time a tackle so we win the ball cleanly and fairly.",
  "wilf": [
   "I can wait for the right moment (when the ball is slightly away from the attacker's feet) to tackle",
   "I can make a fair, feet-only challenge"
  ],
  "nzc": "Strand B · Managing self",
  "value": "Pānga",
  "valueText": "Making a positive impact through fair play — a well-timed, fair tackle is good for the game; a reckless one isn't.",
  "equipment": "Balls, cones",
  "safety": "Feet-only tackles, no sliding; teacher demonstrates and checks technique before live 1v1 play",
  "games": [
   {
    "name": "Poke Tackle Practice",
    "desc": "Attacker dribbles slowly in a straight line; defender practises timing a simple poke tackle when the ball is slightly loose from the attacker's feet, at controlled pace.",
    "coach": "Watch the ball, not the attacker's feet/body.",
    "easier": "Very slow, predictable dribbling.",
    "harder": "Attacker adds occasional change of pace.",
    "chaos": "Random constraint calls",
    "setup": "Pairs in a straight-line channel (about 10m), one ball per pair.",
    "howTo": [
     "Demonstrate the poke tackle technique first: watch the ball (not the attacker's body), and time a simple poke with the foot when the ball is slightly loose from the attacker's feet.",
     "The attacker dribbles slowly and predictably in a straight line down the channel.",
     "The defender jogs alongside at a controlled pace, watching for the right moment to poke the ball away.",
     "After each attempt, reset to the start and go again, giving the defender several tries.",
     "Swap roles so both students practise the poke tackle.",
     "For 'easier', keep the dribbling very slow and predictable; for 'harder', the attacker adds occasional changes of pace."
    ]
   },
   {
    "name": "Win It Clean 1v1",
    "desc": "Live 1v1 in a small grid; defender scores a point only for a clean, feet-only win of the ball (not just any contact).",
    "coach": "Patience — wait for the right moment rather than diving in early.",
    "easier": "Attacker limited to straight-line dribbling.",
    "harder": "Attacker free to use full range of moves from earlier lessons.",
    "chaos": "Scoring streaks (clean wins only)",
    "setup": "Pairs in a small grid (about 6m x 6m), one ball per pair.",
    "howTo": [
     "Live 1v1: the attacker dribbles freely within the grid, the defender tries to win the ball.",
     "A point is only awarded to the defender for a clean, feet-only win of the ball — not for any contact or a scrappy 50/50.",
     "Play continuously for 60–90 seconds, then swap attacker and defender.",
     "Coach patience for the defender: 'wait for the right moment rather than diving in early.'",
     "Keep a simple tally of clean wins if useful for engagement.",
     "For 'easier', the attacker is limited to straight-line dribbling; for 'harder', the attacker can use the full range of moves practised in earlier lessons."
    ]
   },
   {
    "name": "Tackle & Transition",
    "desc": "As above, but the moment the defender wins the ball cleanly, they become the attacker and must dribble to a target — rewarding a good tackle with an immediate attacking opportunity.",
    "coach": "Be ready to transition mentally the instant you win the ball.",
    "easier": "Target closer.",
    "harder": "Target further, second defender added after transition.",
    "chaos": "Role rotation",
    "setup": "Pairs in a small grid (about 6m x 6m) with a target cone placed a short distance outside the grid. One ball per pair.",
    "howTo": [
     "Play the same live 1v1 as Win It Clean, but add a new rule: the moment the defender wins the ball cleanly, they immediately become the attacker.",
     "The new attacker (former defender) dribbles the ball out of the grid to the target cone as quickly as possible.",
     "The original attacker (now defender) can try to win it back once the transition happens.",
     "Reset both players to the grid and go again after each transition sequence completes.",
     "Coach mental readiness: 'the instant you win the ball, you're an attacker — think forward immediately.'",
     "For 'easier', the target is closer; for 'harder', the target is further away and a second defender joins after the transition."
    ]
   }
  ],
  "big": {
   "name": "Small-Sided Soccer — Fair Tackle Focus",
   "desc": "4v4; coach specifically praises well-timed, clean tackles, reinforcing timing and fairness together.",
   "setup": "Groups of 8 (4v4), small pitch (about 20m x 15m), bibs for two teams.",
   "howTo": [
    "Play a normal small-sided game.",
    "Explain that today's coaching feedback specifically praises well-timed, clean tackles — both the timing and the fairness of the challenge.",
    "No sliding tackles — feet-only, upright challenges throughout, reinforced consistently.",
    "Coach circulates and calls out good clean tackles loudly when they happen.",
    "Restart with a simple pass-in after the ball goes out of play.",
    "Play 2–3 short rounds with brief breaks."
   ]
  },
  "discussion": [
   "What did you notice about the right moment to try a tackle?",
   "How did you keep your tackling fair and controlled?",
   "What happened when you tackled too early or too late?"
  ],
  "lookfors": [
   "Watches the ball rather than lunging at the player",
   "Attempts are feet-only and controlled",
   "Shows patience (waits for the right moment) rather than constant attempts"
  ],
  "inclusion": "Keep early practice at walking/slow pace for all students until technique and fairness are consistent, regardless of overall confidence level.",
  "skillBreakdown": [
   {
    "step": "Wait for the ball to be slightly away from the attacker's close control.",
    "why": "Tackling when the ball is tucked in close usually just fouls the player."
   },
   {
    "step": "Attack the ball, not the player.",
    "why": "Keeps the tackle fair, safe, and focused on winning possession."
   },
   {
    "step": "Stay balanced through the tackle.",
    "why": "Over-committing means if you miss, you're beaten completely."
   }
  ]
 },
 {
  "n": 13,
  "block": 3,
  "title": "Find the Gap",
  "focus": "Attacking — creating and finding space",
  "walt": "We are learning to move into open space to make ourselves available as an attacking option.",
  "wilf": [
   "I can recognise where the space is on the field",
   "I can move into space at the right time (not too early, not too late)"
  ],
  "nzc": "Strand B · Thinking",
  "value": "Mōhio",
  "valueText": "Understanding the bigger picture of the game — where you fit and where the opportunities are, beyond just your own ball touches.",
  "equipment": "Balls, cones, bibs",
  "safety": "Standard field safety — clear space awareness when multiple groups run patterns simultaneously",
  "games": [
   {
    "name": "Spot the Space",
    "desc": "Small groups (4) move around a grid without a ball; on a whistle, everyone must freeze in what they believe is the 'most open' spot — coach briefly confirms good choices.",
    "coach": "Look at where defenders/teammates are, not just run randomly.",
    "easier": "Fewer players in the grid (more obvious space).",
    "harder": "More players (less obvious space).",
    "chaos": "Random constraint calls",
    "setup": "Small groups of 4 share one grid (about 10m x 10m), no ball needed for this game.",
    "howTo": [
     "Explain the idea: students move around the grid freely, thinking about where the most 'open' space is relative to the other 3 players in their group.",
     "Students jog/walk around the grid, constantly scanning where their groupmates are.",
     "On a whistle, everyone must freeze immediately in what they believe is the most open spot in the grid.",
     "The coach walks around briefly, confirming good choices out loud ('great spacing there — that's genuinely open') without needing to judge every single student.",
     "Unfreeze and repeat 4–5 times so students get multiple chances to read the space.",
     "For 'easier', use fewer players in the grid (more obvious space); for 'harder', add more players so space is less obvious."
    ]
   },
   {
    "name": "Third Player Movement",
    "desc": "Trios: two players pass while a third moves continuously to find space to receive the next pass, never standing still.",
    "coach": "Move as the pass is being played, not after.",
    "easier": "Bigger area.",
    "harder": "Smaller area, add a passive defender.",
    "chaos": "Role rotation",
    "setup": "Groups of 3 in an open area (about 10m x 10m), one ball per trio.",
    "howTo": [
     "Two players stand a few metres apart and pass the ball between themselves.",
     "The third player continuously moves around the area, looking for space to receive the next pass — they should never stand still.",
     "Whichever of the two passers has the ball should look to find the moving third player if a good passing lane opens up.",
     "After the third player receives a pass, roles rotate: the player who passed to them becomes the new 'mover'.",
     "Coach timing: 'move as the pass is being played, not after it arrives.'",
     "For 'easier', use a bigger area; for 'harder', use a smaller area and add a passive defender who can block one lane."
    ]
   },
   {
    "name": "4v2 Space Rondo",
    "desc": "Four attackers keep possession against two defenders in a grid, scored on consecutive passes; attackers must constantly move to create passing angles.",
    "coach": "Don't bunch together — spread to make the grid bigger for yourselves.",
    "easier": "Bigger grid.",
    "harder": "Smaller grid, 3 defenders.",
    "chaos": "Scoring streaks, shrinking space",
    "setup": "Groups of 6 (4 attackers, 2 defenders) in a grid (about 12m x 12m). One ball per group.",
    "howTo": [
     "The 4 attackers keep possession of the ball while the 2 defenders try to win it inside the grid.",
     "Count consecutive passes out loud as a team target for the attackers.",
     "If a defender wins the ball, swap that defender in as an attacker and swap in a new defender (or simply swap roles with whichever attacker lost the ball).",
     "Coach spacing: 'don't bunch together — spread out to make the grid feel bigger for yourselves and create passing angles.'",
     "Play continuously for 2–3 minutes, resetting the pass count after each turnover.",
     "For 'easier', use a bigger grid; for 'harder', use a smaller grid or add a third defender."
    ]
   }
  ],
  "big": {
   "name": "Small-Sided Soccer — Space Bonus",
   "desc": "4v4 small goals; coach calls out and celebrates any player who clearly created/found space to receive a useful pass.",
   "setup": "Groups of 8 (4v4), small pitch with small goals (about 20m x 15m), bibs for two teams.",
   "howTo": [
    "Play a normal small-sided game with small goals.",
    "Explain that today's coaching feedback calls out and celebrates any player who clearly created or found space to receive a useful pass — not just goals or tackles.",
    "Coach circulates and calls out good movement into space loudly when it happens, connecting it back to today's Skill Games.",
    "Restart with a simple pass-in after goals or the ball going out of play.",
    "Keep the game flowing with minimal stoppages.",
    "Play 2–3 short rounds with brief breaks."
   ]
  },
  "discussion": [
   "How did you decide where the space was today?",
   "What helped you move into space at the right time?",
   "What happens to a game when players don't create space for each other?"
  ],
  "lookfors": [
   "Scans the area before/while moving",
   "Moves with purpose into open space rather than following the ball",
   "Recognises when NOT to move (avoiding crowding a teammate)"
  ],
  "inclusion": "Use verbal prompts/cues for students who find spatial awareness challenging ('look for the biggest gap'); pair with a supportive teammate in Third Player Movement.",
  "skillBreakdown": [
   {
    "step": "Scan around you before the ball arrives.",
    "why": "You need to know where space is before you receive, not after."
   },
   {
    "step": "Move into space away from your marker, not just anywhere.",
    "why": "Space only helps if it's somewhere you can actually receive a pass."
   },
   {
    "step": "Time your movement so you arrive in space just as the ball is about to be played.",
    "why": "Moving too early lets a defender follow you and close the space back down."
   }
  ]
 },
 {
  "n": 14,
  "block": 3,
  "title": "Options Everywhere",
  "focus": "Support play — passing options/angles",
  "walt": "We are learning to offer good passing angles to a teammate with the ball.",
  "wilf": [
   "I can position myself so a teammate has a clear passing lane to me",
   "I can offer more than one option at a time as a team"
  ],
  "nzc": "Strand B, C · Relating to others",
  "value": "Aroha",
  "valueText": "Actively looking out for your teammate with the ball — offering support is a form of care in the game.",
  "equipment": "Balls, cones, bibs",
  "safety": "Standard field safety for multiple simultaneous small games",
  "games": [
   {
    "name": "Angle Awareness",
    "desc": "In trios, the ball-carrier must have two supporting teammates positioned at different angles (not directly behind or in front of a defender's shadow); coach checks and adjusts positioning.",
    "coach": "Avoid 'flat' support directly beside the ball-carrier — angle slightly ahead or behind.",
    "easier": "Walk through positioning without a defender.",
    "harder": "Add a passive defender who can block one passing lane.",
    "chaos": "Random constraint calls",
    "setup": "Groups of 3 (ball-carrier plus two supporting teammates) in an open area (about 10m x 10m). One ball per trio.",
    "howTo": [
     "Explain 'flat' vs 'angled' support: standing directly beside the ball-carrier is 'flat' and hard to pass to safely; standing slightly ahead or behind at an angle gives a better passing lane.",
     "One student holds the ball as the ball-carrier; the other two position themselves at different angles around them.",
     "Walk through positioning first without a defender, with the coach checking and adjusting each supporting player's angle.",
     "Once positioning looks good, add gentle movement — the ball-carrier turns or shifts, and the supporters adjust their angle to stay useful.",
     "Rotate the ball-carrier role every few minutes so everyone practises finding good angles.",
     "For 'harder', add one passive defender who can block one of the passing lanes, forcing the other supporter to be used."
    ]
   },
   {
    "name": "Rondo with Two Targets",
    "desc": "Small group possession game where the team in possession must use two different supporting players (not the same one twice in a row) to keep the ball.",
    "coach": "Constantly recheck your angle as the ball moves.",
    "easier": "Bigger grid.",
    "harder": "Smaller grid, add a defender.",
    "chaos": "Scoring streaks",
    "setup": "Small groups (5–6) share a grid (about 10m x 10m). One ball per group.",
    "howTo": [
     "Explain the rule: the team in possession must use two different supporting players to keep the ball — the same player cannot receive the ball twice in a row.",
     "Play possession rondo-style within the grid, with the group keeping the ball among themselves.",
     "If the same player receives twice in a row, that's a turnover — restart possession with the group.",
     "Coach constant rechecking of angles as the ball moves — 'your best angle a second ago might not be your best angle now.'",
     "Play continuously for 2–3 minutes.",
     "For 'easier', use a bigger grid; for 'harder', use a smaller grid and add a defender."
    ]
   },
   {
    "name": "Support Under Pressure",
    "desc": "3v1 keep-away in a grid — three attackers must always offer the ball-carrier at least two passing options; defender tries to cut passing lanes.",
    "coach": "Move to open a lane the moment it closes.",
    "easier": "Bigger grid.",
    "harder": "Smaller grid, 2 defenders.",
    "chaos": "Added pressure, shrinking space",
    "setup": "Groups of 4 (3 attackers, 1 defender) in a grid (about 10m x 10m). One ball per group.",
    "howTo": [
     "The three attackers keep the ball away from the single defender inside the grid.",
     "Explain the rule: the ball-carrier must always have at least two passing options available from their supporting teammates.",
     "The defender's job is to move and try to cut off passing lanes, not just chase the ball directly.",
     "Attackers must move to open a new lane the moment the defender closes one off.",
     "Rotate the defender role every 60–90 seconds so everyone experiences defending.",
     "For 'easier', use a bigger grid; for 'harder', use a smaller grid with 2 defenders."
    ]
   }
  ],
  "big": {
   "name": "Small-Sided Soccer — Support Bonus",
   "desc": "4v4; coach highlights moments where a player's off-the-ball movement clearly created a good passing option for a teammate.",
   "setup": "Groups of 8 (4v4), small pitch (about 20m x 15m), bibs for two teams.",
   "howTo": [
    "Play a normal small-sided game.",
    "Explain that today's coaching feedback highlights moments where a player's off-the-ball movement clearly created a good passing option for a teammate — not just the pass itself.",
    "Coach circulates and calls out good supporting movement loudly when it happens.",
    "Restart with a simple pass-in after the ball goes out of play.",
    "Keep the game flowing with minimal stoppages.",
    "Play 2–3 short rounds with brief breaks."
   ]
  },
  "discussion": [
   "How did you offer good support to a teammate with the ball today?",
   "What makes a passing angle 'good' or 'bad'?",
   "How did the team work together to always have options?"
  ],
  "lookfors": [
   "Positions at an angle rather than directly flat to the ball-carrier",
   "Continuously adjusts position as play moves",
   "Communicates (calls) to offer as an option"
  ],
  "inclusion": "Use cones to mark suggested 'good angle' zones initially for students building spatial understanding, removing the cues as confidence grows.",
  "skillBreakdown": [
   {
    "step": "Position yourself at an angle to the ball carrier, not directly behind or in front.",
    "why": "An angled position gives the passer an actual passing lane."
   },
   {
    "step": "Offer at least two options at different angles or distances.",
    "why": "Gives the ball carrier a genuine choice rather than one predictable pass."
   },
   {
    "step": "Adjust your position as the ball carrier's situation changes.",
    "why": "Support has to move with the game, not stay static."
   }
  ]
 },
 {
  "n": 15,
  "block": 3,
  "title": "Cushion Control",
  "focus": "Aerial control (controlling a bouncing/lofted ball)",
  "walt": "We are learning to control a ball that arrives off the ground (bouncing or in the air).",
  "wilf": [
   "I can cushion a bouncing ball down to my feet",
   "I can bring a lofted ball under control within one or two touches"
  ],
  "nzc": "Strand B · Managing self",
  "value": "Manaaki",
  "valueText": "Persisting faithfully with a genuinely tricky skill — aerial control takes real practice and effort to serve the team well.",
  "equipment": "Balls, cones",
  "safety": "No heading in this program (age-appropriate); all aerial control is with feet/thigh/chest only. Space pairs out so balls don't collide between groups.",
  "games": [
   {
    "name": "Bounce & Trap",
    "desc": "Partners bounce the ball to each other (thrown, not kicked) and practise trapping it dead with the sole or cushioning it with the top of the foot.",
    "coach": "Relax the foot/leg on contact, don't stab at the ball.",
    "easier": "Gentle, predictable bounces.",
    "harder": "Varied bounce height/angle.",
    "chaos": "Random constraint calls",
    "setup": "Pairs facing each other about 4–5m apart, one ball per pair, open space.",
    "howTo": [
     "One partner throws (does not kick) the ball so it bounces once in front of the other partner.",
     "The receiver practises trapping it dead with the sole of the foot, or cushioning it with the top of the foot so it drops under control.",
     "Once controlled, the receiver picks up the ball and becomes the thrower for the next rep, or passes it back along the ground depending on the space.",
     "Coach relaxing the foot/leg on contact — 'don't stab at the ball, let it come to you and soften on landing.'",
     "Repeat for several reps each, swapping roles regularly.",
     "For 'easier', throw gentle, predictable bounces close by; for 'harder', vary the bounce height and angle."
    ]
   },
   {
    "name": "Thigh & Chest Cushion",
    "desc": "Partners softly throw the ball for a thigh or chest cushion, letting it drop to feet under control, scoring a point for each clean control.",
    "coach": "Move the body part backward slightly on contact to absorb pace.",
    "easier": "Very soft, close throws.",
    "harder": "Longer throws with more pace.",
    "chaos": "Scoring streaks",
    "setup": "Pairs facing each other about 3–4m apart, one soft-ish ball per pair if available (or normal ball thrown gently), open space.",
    "howTo": [
     "One partner softly throws the ball toward the other's thigh or chest height.",
     "The receiver cushions the ball with the thigh or chest, letting it drop down under control to their feet.",
     "A point is scored for each clean control where the ball drops within a comfortable playing distance of the feet.",
     "Coach the absorbing motion: 'move the body part backward slightly on contact to take the pace off the ball.'",
     "Swap thrower/receiver roles regularly so both students get practice.",
     "For 'easier', use very soft, close throws; for 'harder', use longer throws with more pace."
    ]
   },
   {
    "name": "Aerial Control Relay",
    "desc": "Small teams relay-race through a sequence: receive a thrown ball out of the air, control it, dribble to a target, and return — fastest clean-control team wins.",
    "coach": "Control first, speed second — a fumbled control costs more time than a careful one.",
    "easier": "Simplify the sequence.",
    "harder": "Add a second aerial control step.",
    "chaos": "Beat the clock, head-to-head mirror",
    "setup": "Small teams (3–4) set up in a relay line with a thrower at one end and a target cone to dribble to and from further down. One ball per team.",
    "howTo": [
     "Explain the sequence: receive a thrown ball out of the air, control it with foot/thigh/chest, dribble to the target cone, then dribble back and hand off to the next teammate.",
     "The first student in each team receives a throw from a designated thrower (coach or rotating teammate), controls it, and completes the dribble sequence.",
     "Once back, that student hands the ball to the next teammate in line, who repeats the sequence.",
     "The fastest team to get all members through the sequence with clean control wins — but remind students a fumbled control costs more time than a careful one.",
     "Rotate the thrower role so every student gets a turn both receiving and throwing.",
     "For 'easier', simplify the sequence (just control, no dribble); for 'harder', add a second aerial control step before the dribble."
    ]
   }
  ],
  "big": {
   "name": "Small-Sided Soccer — Feed From the Air",
   "desc": "4v4; every few minutes, the coach feeds a ball into play with a throw (bouncing or lofted) instead of a normal restart, requiring a controlled first touch before play continues.",
   "setup": "Groups of 8 (4v4), small pitch (about 20m x 15m), bibs for two teams. Coach or a designated feeder positioned to throw balls into play.",
   "howTo": [
    "Play a normal small-sided game.",
    "Every few minutes, instead of a normal restart, the coach feeds the ball into play with a throw — either a bounce pass or a lofted throw — to a player near where play stopped.",
    "That player must control the throw with a good first touch (foot, thigh, or chest) before play continues normally.",
    "Continue the game as normal between these feed moments.",
    "Coach specifically on aerial control quality during these feed moments, connecting back to today's Skill Games.",
    "Play 2–3 short rounds with brief breaks, using several coach-feed restarts per round."
   ]
  },
  "discussion": [
   "What helped you control a bouncing or lofted ball today?",
   "Which body part did you find easiest to cushion the ball with — why?",
   "What was frustrating, and how did you keep working at it?"
  ],
  "lookfors": [
   "Relaxes the receiving surface rather than meeting the ball rigidly",
   "Ball drops within playing distance after control",
   "Attempts multiple body parts (foot/thigh/chest) appropriately"
  ],
  "inclusion": "Allow students to let the ball bounce once more than intended if needed while building confidence; celebrate any controlled outcome, not just first-touch perfection.",
  "skillBreakdown": [
   {
    "step": "Get in line with the ball's flight path early.",
    "why": "Gives you time to adjust rather than stretching at the last moment."
   },
   {
    "step": "Choose the right surface — thigh, chest, or foot — for the ball's height.",
    "why": "Different heights suit different cushioning surfaces."
   },
   {
    "step": "Relax and withdraw the surface slightly on contact.",
    "why": "Cushions the ball down instead of it bouncing away."
   }
  ]
 },
 {
  "n": 16,
  "block": 4,
  "title": "Last Line",
  "focus": "Goalkeeping basics (handling, positioning)",
  "walt": "We are learning the basics of goalkeeping — handling the ball safely and positioning well in goal.",
  "wilf": [
   "I can catch or block a shot using safe hand/body technique",
   "I can position myself in the right spot in goal relative to the ball"
  ],
  "nzc": "Strand B · Managing self",
  "value": "Pānga",
  "valueText": "The goalkeeper has a unique impact on the whole team — understanding how one role affects everyone else's game.",
  "equipment": "Balls, small goals, cones, (optional) soft/foam balls for early handling work",
  "safety": "Use softer balls for close-range keeper practice initially; no diving on hard ground — encourage safe, controlled movements",
  "games": [
   {
    "name": "Catch & Roll",
    "desc": "Partners roll/gently throw the ball at a 'keeper' standing in a small goal, who practises catching with a 'W' hand shape and rolling the ball back out.",
    "coach": "Hands behind the ball, 'give' slightly on catching.",
    "easier": "Slower, central deliveries.",
    "harder": "Varied angles/pace.",
    "chaos": "Random constraint calls, role rotation",
    "setup": "Pairs at a small goal, one student as keeper standing in the goal, the other as thrower a few metres away. Use a softer/foam ball if available for early sessions.",
    "howTo": [
     "Demonstrate the 'W' hand shape for catching: thumbs and index fingers close together behind the ball, forming a W shape to cradle it securely.",
     "The thrower rolls or gently throws the ball toward the keeper.",
     "The keeper catches with the W hand shape, letting the hands 'give' slightly on contact to absorb the pace.",
     "After catching, the keeper rolls the ball back out to the thrower along the ground using an underarm bowling-style roll.",
     "Swap roles every 5–6 attempts so both students practise being keeper.",
     "For 'easier', use slower, central deliveries; for 'harder', vary the angle and pace of deliveries."
    ]
   },
   {
    "name": "Angle Steps",
    "desc": "Keeper practises small side-steps to stay central to the ball as a partner moves the ball along a line outside the box, without a shot yet — purely positioning.",
    "coach": "Imaginary line from the ball to the middle of the goal — stay on it.",
    "easier": "Slower ball movement.",
    "harder": "Faster/more unpredictable movement.",
    "chaos": "Random constraint calls",
    "setup": "Pairs at a small goal marked with cones, one student as keeper, the other moving along a line outside the goal box with the ball at their feet.",
    "howTo": [
     "Explain the concept: an imaginary line runs from the ball to the middle of the goal, and the keeper's job is to stay on that line using small side-steps.",
     "The outside player moves the ball slowly along a line in front of the goal (no shot yet).",
     "The keeper takes small, controlled side-steps to stay central relative to the ball's position, always on that imaginary line.",
     "Continue for 30–60 seconds, then swap roles so both students practise the keeper positioning.",
     "Coach positioning purely — this is not about diving or saving, just staying correctly positioned.",
     "For 'easier', move the ball slowly; for 'harder', move faster and less predictably."
    ]
   },
   {
    "name": "Shot Stopper Rotation",
    "desc": "Small group takes turns in goal facing gentle shots from close range, focusing on technique (hands, body behind the ball) over athleticism; everyone rotates through the keeper role.",
    "coach": "Get the whole body behind the ball where possible.",
    "easier": "Closer, slower shots.",
    "harder": "Further, varied placement.",
    "chaos": "Role rotation",
    "setup": "Small group (4–5) with one small goal, a shooting spot marked a short distance away, and a ball supply. One student in goal at a time.",
    "howTo": [
     "One student stands in goal, the rest take turns as shooters from close range.",
     "Shooters take gentle, controlled shots — the focus is on the keeper's technique (hands ready, body positioned behind the ball), not on beating the keeper with power.",
     "After each shot, the ball is collected and the next shooter takes their turn.",
     "Rotate the keeper role every 4–5 shots so every student experiences being in goal.",
     "Coach getting the whole body behind the ball where possible, not just reaching with hands.",
     "For 'easier', shots are closer and slower; for 'harder', shots come from further away with varied placement."
    ]
   }
  ],
  "big": {
   "name": "Small-Sided Soccer — Everyone Keeps",
   "desc": "4v4 with rotating goalkeepers (swap every few minutes) so every student experiences the position; coach reinforces that the goalkeeper's decisions affect the whole team.",
   "setup": "Groups of 8 (4v4), small pitch with small goals (about 20m x 15m), bibs for two teams. A simple rotation order for goalkeepers agreed before starting.",
   "howTo": [
    "Play a normal small-sided game with small goals and an actual goalkeeper for each team.",
    "Swap the goalkeeper on each team every few minutes on a set rotation, so every student experiences the position during the game.",
    "Coach reinforces that the goalkeeper's decisions (positioning, when to come out, rolling the ball back into play) affect the whole team, not just the individual.",
    "Restart with a goalkeeper roll-out or simple pass-in after goals or the ball going out of play.",
    "Keep the rotation visible and fair (e.g. a set order written on a whiteboard or called out by the coach).",
    "Play 2–3 short rounds with brief breaks, making sure the rotation completes for everyone."
   ]
  },
  "discussion": [
   "What did you notice about positioning in goal today?",
   "How did catching/handling technique change what happened next in the game?",
   "What's hard about being a goalkeeper that you didn't expect?"
  ],
  "lookfors": [
   "Uses safe hand technique (not just blocking with arms/body only)",
   "Maintains central/appropriate positioning relative to the ball",
   "Communicates with defenders in front of them"
  ],
  "inclusion": "Goalkeeping is rotated so no single student is 'stuck' in goal; use softer balls and closer distances for any student anxious about the position.",
  "skillBreakdown": [
   {
    "step": "Form a 'W' shape with your hands behind the ball.",
    "why": "Gives a wide, secure base to catch cleanly rather than fumbling."
   },
   {
    "step": "Get your body behind the ball as a second barrier.",
    "why": "If the ball squirts through your hands, your body can still stop it."
   },
   {
    "step": "Move your feet to get in line with the shot, not just reach with your hands.",
    "why": "Full-body positioning behind the ball is more reliable than arms alone."
   }
  ]
 },
 {
  "n": 17,
  "block": 4,
  "title": "Keep Away Kings",
  "focus": "Small-sided possession play (keep-ball under pressure)",
  "walt": "We are learning to keep the ball as a team under real pressure, using all our passing/control skills together.",
  "wilf": [
   "I can help my team keep possession by offering support and passing accurately",
   "I can apply pressure as a team to try to win the ball back"
  ],
  "nzc": "Strand B, C · Relating to others",
  "value": "Mōhio",
  "valueText": "Understanding the team's overall plan and your part in keeping/winning possession, not just your individual touches.",
  "equipment": "Balls, cones, bibs",
  "safety": "Standard small-sided game safety; ensure grids are well spaced from other groups",
  "games": [
   {
    "name": "5v2 Rondo",
    "desc": "Five attackers keep the ball from two defenders in a grid, counting consecutive passes; defenders swap in when they win the ball or after a time limit.",
    "coach": "Use the skills from Lessons 13–14 — space and angles — together.",
    "easier": "Bigger grid.",
    "harder": "Smaller grid.",
    "chaos": "Scoring streaks, shrinking space",
    "setup": "Groups of 7 (5 attackers, 2 defenders) in a grid (about 12m x 12m). One ball per group.",
    "howTo": [
     "The 5 attackers keep the ball away from the 2 defenders within the grid, using support and good angles from Lessons 13–14.",
     "Count consecutive passes out loud as a team target.",
     "If a defender wins the ball, or after an agreed time limit (e.g. 60 seconds), swap two attackers in as the new defenders.",
     "Coach specifically on combining space-finding (Lesson 13) and good angles (Lesson 14) together in the same game.",
     "Play continuously, resetting the pass count after each turnover or defender swap.",
     "For 'easier', use a bigger grid; for 'harder', use a smaller grid."
    ]
   },
   {
    "name": "Possession Points Ladder",
    "desc": "Small teams (4v4) play possession-only (no goals) with a running points ladder for consecutive passes, resetting to zero when the other team wins the ball — teams try to beat their previous best streak.",
    "coach": "Stay patient, don't force risky passes.",
    "easier": "Bigger pitch.",
    "harder": "Smaller pitch, time pressure.",
    "chaos": "Beat the clock (own record), scoring streaks",
    "setup": "Groups of 8 (4v4), small pitch with no goals (about 20m x 15m), bibs for two teams.",
    "howTo": [
     "Play possession-only — no goals, the aim is purely to keep the ball as a team.",
     "Keep a running points ladder: count consecutive passes for whichever team has the ball, resetting to zero the moment the other team wins it.",
     "Each team tries to beat their own previous best streak during the game, not just compete directly on a single score.",
     "Coach patience: 'don't force a risky pass just to keep the streak — a safe reset is better than losing the ball cheaply.'",
     "Restart immediately with a pass-in after any turnover so play keeps flowing.",
     "For 'easier', use a bigger pitch; for 'harder', use a smaller pitch with time pressure."
    ]
   },
   {
    "name": "Press & Win",
    "desc": "Same format, but this time the coach also scores/celebrates the defending team for quick, coordinated pressure that wins the ball back within 3 seconds of losing it.",
    "coach": "The whole team presses together, not just the nearest player.",
    "easier": "Longer 'press window.'",
    "harder": "Shorter window.",
    "chaos": "Added pressure, role rotation",
    "setup": "Same groups of 8 (4v4), same small pitch, no goals, bibs for two teams.",
    "howTo": [
     "Play the same possession format as Possession Points Ladder.",
     "Add a new coaching focus: the team that just lost the ball can earn recognition (extra celebration/points) if they win it back within 3 seconds through quick, coordinated pressure.",
     "Coach the whole-team press: 'this isn't just the nearest player chasing — everyone needs to react together.'",
     "Call out and celebrate successful quick-win-backs loudly when they happen.",
     "Keep play flowing with quick restarts after turnovers.",
     "For 'easier', allow a longer press window (e.g. 5 seconds); for 'harder', shorten the window (e.g. 2 seconds)."
    ]
   }
  ],
  "big": {
   "name": "4v4 Possession Soccer with Small Goals",
   "desc": "Combines everything — teams look to keep possession using support/angles, while also looking for moments to attack and score in small goals.",
   "setup": "Groups of 8 (4v4), small pitch with small goals (about 20m x 15m), bibs for two teams.",
   "howTo": [
    "Play a normal small-sided game with small goals.",
    "Explain that this game combines everything from today: teams should look to keep possession using good support and angles, while also looking for moments to attack and score.",
    "Coach circulates giving balanced feedback — praising both good possession play and good attacking moments/goals.",
    "Restart with a simple pass-in after goals or the ball going out of play.",
    "Keep the game flowing with minimal stoppages.",
    "Play 2–3 short rounds with brief breaks."
   ]
  },
  "discussion": [
   "What helped your team keep the ball under pressure today?",
   "How did you work together, not just individually, to keep possession?",
   "What did good team pressing look like when you were defending?"
  ],
  "lookfors": [
   "Contributes to team shape/spacing, not just chasing the ball",
   "Communicates with teammates",
   "Shows patience in possession rather than forcing risky actions"
  ],
  "inclusion": "Adjust grid/pitch size so all ability levels can experience success keeping possession; rotate roles so every student experiences both possession and pressing.",
  "skillBreakdown": [
   {
    "step": "Keep the ball moving — avoid unnecessary touches.",
    "why": "An extra touch under pressure gives defenders time to close you down."
   },
   {
    "step": "Spread out to keep passing lanes open.",
    "why": "Bunching up makes it easy for one defender to press multiple players at once."
   },
   {
    "step": "Communicate before receiving the ball.",
    "why": "Helps the receiver decide their first touch before the ball even arrives."
   }
  ]
 },
 {
  "n": 18,
  "block": 4,
  "title": "Switch It On",
  "focus": "Transition — attack to defence and back",
  "walt": "We are learning to react quickly when possession changes — switching mindset from attacking to defending (and back) immediately.",
  "wilf": [
   "I can react quickly the moment my team loses/wins the ball",
   "I can help my team reorganise quickly after a transition"
  ],
  "nzc": "Strand B, C · Managing self",
  "value": "Manaaki",
  "valueText": "Serving the team in the moments that matter most — reacting instantly for the team's benefit, not just when it's your turn on the ball.",
  "equipment": "Balls, cones, bibs",
  "safety": "Standard small-sided game safety",
  "games": [
   {
    "name": "Freeze & React",
    "desc": "Small-sided possession game; on a whistle the moment possession changes, both teams must react to a call ('attack!'/'defend!') and adjust positioning immediately.",
    "coach": "The first 2 seconds after losing/winning the ball matter most.",
    "easier": "Slower/telegraphed calls.",
    "harder": "Rapid, unpredictable calls.",
    "chaos": "Random constraint calls",
    "setup": "Groups of 8 (4v4), small pitch (about 20m x 15m), bibs for two teams.",
    "howTo": [
     "Play a normal small-sided possession game.",
     "The coach blows a whistle at the exact moment possession changes from one team to the other.",
     "Immediately after the whistle, the coach calls 'attack!' or 'defend!' and both teams must react and adjust their positioning right away based on which team now has the ball.",
     "Continue play immediately after the call — there's no long stoppage, just a quick reaction moment.",
     "Coach the key message: 'the first 2 seconds after losing or winning the ball matter most — react immediately, don't drift.'",
     "For 'easier', make the calls slower and more telegraphed; for 'harder', make them rapid and unpredictable."
    ]
   },
   {
    "name": "3v3 Quick Switch",
    "desc": "Small games where goals can be scored at both ends immediately after a turnover — rewarding teams who transition mentally and physically the fastest.",
    "coach": "Don't stand and admire a turnover — react immediately.",
    "easier": "Bigger pitch.",
    "harder": "Smaller pitch.",
    "chaos": "Added pressure, beat the clock",
    "setup": "Groups of 6 (3v3), small pitch with a small goal at each end (about 15m x 12m), bibs for two teams.",
    "howTo": [
     "Play a small-sided game where goals can be scored at both ends immediately after a turnover — there's no delay or reset period after winning the ball.",
     "The moment a team wins possession, they can immediately attack either goal without waiting.",
     "This rewards teams who transition mentally and physically the fastest after a turnover.",
     "Coach the key message: 'don't stand and admire a turnover — react immediately and attack.'",
     "Restart with a simple pass-in after goals or the ball going out of play.",
     "For 'easier', use a bigger pitch; for 'harder', use a smaller pitch."
    ]
   },
   {
    "name": "Counter-Attack Race",
    "desc": "After winning the ball in a small drill, a team has 8 seconds to attack and shoot before defenders reorganise — practising immediate, decisive transition.",
    "coach": "Quick decisions over perfect ones in transition moments.",
    "easier": "Longer time window.",
    "harder": "Shorter window.",
    "chaos": "Beat the clock",
    "setup": "Small groups with a drill area and small goal set up (about 15m x 10m). One ball per group, a clear time-keeping method (stopwatch or counted seconds).",
    "howTo": [
     "Set up a simple drill where one team wins the ball (e.g. from a coach feed or a light challenge) and must then attack quickly.",
     "The moment the ball is won, start an 8-second countdown out loud.",
     "The attacking team has those 8 seconds to move the ball forward and get a shot off before defenders (who start slightly delayed) can reorganise.",
     "If the shot happens within 8 seconds, celebrate the quick transition regardless of whether it scores; if the 8 seconds run out first, reset and try again.",
     "Coach the key message: 'quick decisions over perfect ones in transition moments — speed matters more than the perfect pass here.'",
     "For 'easier', use a longer time window (e.g. 12 seconds); for 'harder', shorten it (e.g. 6 seconds)."
    ]
   }
  ],
  "big": {
   "name": "Small-Sided Soccer — Transition Focus",
   "desc": "4v4 small goals; coach specifically highlights and celebrates fast, well-organised reactions to turnovers in both directions.",
   "setup": "Groups of 8 (4v4), small pitch with small goals (about 20m x 15m), bibs for two teams.",
   "howTo": [
    "Play a normal small-sided game with small goals.",
    "Explain that today's coaching feedback specifically highlights and celebrates fast, well-organised reactions to turnovers in both directions — winning the ball and losing it.",
    "Coach circulates and calls out good transition moments loudly when they happen.",
    "Restart with a simple pass-in after goals or the ball going out of play.",
    "Keep the game flowing with minimal stoppages so transition moments happen naturally and often.",
    "Play 2–3 short rounds with brief breaks."
   ]
  },
  "discussion": [
   "What helped you react quickly when the ball changed hands today?",
   "Why does the moment right after a turnover matter so much in a game?",
   "What was hard about switching your mindset quickly?"
  ],
  "lookfors": [
   "Reacts promptly to a change in possession",
   "Adjusts position/shape rather than standing still",
   "Communicates with teammates during the transition moment"
  ],
  "inclusion": "Use clear visual/verbal cues (coloured cones held up, loud calls) to support students who need extra processing time for quick transitions.",
  "skillBreakdown": [
   {
    "step": "React immediately the moment possession changes.",
    "why": "The first few seconds after losing or winning the ball are the most valuable attacking or defending moments."
   },
   {
    "step": "On losing the ball, the nearest player closes down immediately.",
    "why": "Prevents the opposition's easiest, fastest counter-attack."
   },
   {
    "step": "On winning the ball, look forward immediately for a quick option.",
    "why": "The opposition is often disorganised straight after losing the ball — that's the moment to exploit."
   }
  ]
 },
 {
  "n": 19,
  "block": 4,
  "title": "Set Piece Specialists",
  "focus": "Set plays — throw-ins & corners",
  "walt": "We are learning correct technique and simple team strategy for throw-ins and corners.",
  "wilf": [
   "I can perform a legal throw-in (both feet on the ground, ball behind and over the head)",
   "I can execute a simple planned corner routine with my team"
  ],
  "nzc": "Strand B, C · Thinking",
  "value": "Aroha",
  "valueText": "Working together warmly as a team to plan something in advance — set plays are a team effort built on trust in each other.",
  "equipment": "Balls, cones, bibs, small goals",
  "safety": "Standard field safety; check throw-in technique for back/shoulder safety (no excessive arching)",
  "games": [
   {
    "name": "Legal Throw-In Practice",
    "desc": "Pairs practise throw-in technique (both feet down, ball behind and over the head, released in front) aiming at a moving target partner.",
    "coach": "Feet stay grounded through the throw.",
    "easier": "Stationary target.",
    "harder": "Moving target, increasing distance.",
    "chaos": "Scoring streaks",
    "setup": "Pairs spread out, one ball per pair, open space with room for a moving target.",
    "howTo": [
     "Demonstrate the legal throw-in technique: both feet stay in contact with the ground (behind the sideline), hold the ball with both hands behind the head, and release it evenly from over and behind the head, in front of the body.",
     "One partner takes the throw-in, aiming at the other partner who acts as the target.",
     "Start with the target standing still to focus purely on technique.",
     "Check feet stay grounded throughout the throw — no jumping or lifting the back foot.",
     "Swap roles after every 4–5 throws so both partners practise throwing and receiving.",
     "For 'easier', keep the target stationary; for 'harder', have the target move and increase the throwing distance."
    ]
   },
   {
    "name": "Corner Routine Design",
    "desc": "Small groups design and practise one simple, repeatable corner routine (e.g. short pass then cross, or direct to a specific zone) and rehearse it several times.",
    "coach": "Everyone needs to know their specific job in the routine.",
    "easier": "Simpler routine (2 players).",
    "harder": "Routine involves 3–4 players with movement.",
    "chaos": "Role rotation",
    "setup": "Small groups of 3–4 near a marked 'corner' spot and a small goal, with cones available to mark specific zones or player positions. No time pressure — this is a planning and rehearsal activity.",
    "howTo": [
     "Explain the task: each group designs one simple, repeatable routine for a corner-style restart — for example, a short pass followed by a cross, or a direct ball into a specific zone.",
     "Give groups a couple of minutes to plan and agree who does what in the routine.",
     "Each group rehearses their routine several times without opposition, refining timing and positioning.",
     "Check in with each group to make sure every player knows their specific job in the routine — not just a vague idea.",
     "Have groups show their routine to another group or to the class briefly if time allows.",
     "For 'easier', keep the routine to just 2 players; for 'harder', involve 3–4 players with movement."
    ]
   },
   {
    "name": "Set Piece vs Defence",
    "desc": "Groups run their throw-in/corner routines against a small defending team trying to intercept, adjusting the routine if it's not working.",
    "coach": "Be ready to adapt the plan, not repeat a routine that isn't working.",
    "easier": "Defenders passive at first.",
    "harder": "Full active defence.",
    "chaos": "Added pressure",
    "setup": "Same small groups as Corner Routine Design, now facing a small defending team near their goal (about 4 defenders per group, borrowed from another group or a subset of the class). Small goal in place.",
    "howTo": [
     "Groups run the throw-in or corner routine they designed and rehearsed, now against a live but limited defending team.",
     "Defenders try to intercept or block the routine using normal fair-play rules (feet only, no sliding).",
     "After each attempt, briefly discuss as a group: did the routine work? If not, what needs to change?",
     "Adjust the routine on the spot if it isn't working rather than repeating something ineffective.",
     "Rotate which group is attacking and which is defending every few attempts.",
     "For 'easier', defenders start passive at first; for 'harder', defenders are fully active from the start."
    ]
   }
  ],
  "big": {
   "name": "Small-Sided Soccer with Set Piece Restarts",
   "desc": "4v4 small goals; every throw-in and any ball out for a corner-equivalent uses the practised technique/routines from today, applied live.",
   "setup": "Groups of 8 (4v4), small pitch with small goals (about 20m x 15m), bibs for two teams.",
   "howTo": [
    "Play a normal small-sided game with small goals.",
    "Whenever the ball goes out for a throw-in, players use the legal technique practised today.",
    "Whenever the ball goes out near the goal in a corner-equivalent situation, the team can use one of their practised routines from today's Skill Games if they choose.",
    "Coach reinforces good technique on throw-ins and encourages teams to actually use their planned routines rather than reverting to random restarts.",
    "Keep the game flowing, using these moments as natural teaching points rather than long stoppages.",
    "Play 2–3 short rounds with brief breaks."
   ]
  },
  "discussion": [
   "What made your throw-in or corner routine effective today?",
   "How did your team work together to plan and execute a set play?",
   "What did you adjust when your first plan didn't work?"
  ],
  "lookfors": [
   "Throw-in technique is legal and controlled",
   "Understands their specific role in a team set-play routine",
   "Communicates and adjusts the plan when needed"
  ],
  "inclusion": "Let every student have a defined, valued role in the group's set-play routine (not just the most confident players); rotate roles across attempts.",
  "skillBreakdown": [
   {
    "step": "Point both feet behind the line, ball behind and over the head for a throw-in.",
    "why": "This is the legal throw-in technique — both feet on the ground, both hands, one motion."
   },
   {
    "step": "Aim the throw to a moving or unmarked teammate, not just the nearest player.",
    "why": "A throw to a marked player is easily won back by the defence."
   },
   {
    "step": "Time attacking runs to arrive as the ball is delivered from a corner.",
    "why": "Arriving too early lets defenders adjust; arriving late misses the ball."
   }
  ]
 },
 {
  "n": 20,
  "block": 4,
  "title": "Soccer Showdown",
  "focus": "Culminating mini-tournament — applying the whole unit",
  "walt": "We are learning to apply everything from this unit — control, passing, shooting, defending, and teamwork — in a full small-sided tournament.",
  "wilf": [
   "I can use skills from across the unit in a real game",
   "I can play fairly and encouragingly in a competitive setting"
  ],
  "nzc": "Strands A, B, C, D · all five Key Competencies",
  "value": "Pānga",
  "valueText": "Reflecting on the impact this whole unit has had — on your skills, your team, and how you treat others in a game.",
  "equipment": "Balls, small goals, cones, bibs (multiple colours for round-robin teams)",
  "safety": "Standard game safety; manage fatigue/hydration across a tournament format, ensure fair rotation so no team is overplayed",
  "games": [
   {
    "name": "Unit Skills Warm-Up Carousel",
    "desc": "Quick-fire stations revisiting a taste of the unit's key skills (close control, passing accuracy, shooting technique) — a light refresher, not new teaching.",
    "coach": "Notice how much more comfortable these feel now compared to Lesson 1.",
    "easier": "—",
    "harder": "—",
    "chaos": "Beat the clock",
    "setup": "Set up 3–4 quick stations around the space, each revisiting one key skill from the unit (e.g. close control dribbling through cones, passing accuracy at a gate, shooting technique at a target). Small groups start at different stations.",
    "howTo": [
     "Explain this is a light refresher, not new teaching — a chance to feel how much more comfortable these skills are now compared to Lesson 1.",
     "Split the class into small groups, one group per station.",
     "Each group spends 1–2 minutes at their station doing a simple version of that skill.",
     "On your signal, groups rotate to the next station.",
     "Continue until every group has visited every station.",
     "Coach comments on visible improvement throughout — 'notice how much smoother that feels now compared to Lesson 1?'"
    ]
   },
   {
    "name": "Mixed Skill Relay",
    "desc": "Teams complete a relay combining dribbling, passing, and shooting in sequence — a fun, competitive combination of the whole unit's skills.",
    "coach": "Smooth handovers between skills.",
    "easier": "—",
    "harder": "—",
    "chaos": "Head-to-head mirror, beat the clock",
    "setup": "Set up one relay circuit per team combining a short dribble section, a passing target (wall or partner), and a shot at a small goal, laid out over about 20m. One ball per team, teams of 4–5.",
    "howTo": [
     "Explain the full sequence each team member must complete: dribble through the cones, pass to the target, then shoot at the small goal.",
     "The first student in each team completes the sequence, then tags the next teammate to go.",
     "Continue until every team member has completed the full sequence.",
     "The first team to have everyone finish the sequence (with reasonable control, not just speed) is the winner.",
     "Coach smooth handovers between the dribbling, passing, and shooting sections — a rushed transition often costs more time than it saves.",
     "Run 1–2 rounds if time allows, mixing up team order."
    ]
   },
   {
    "name": "Captain's Challenge",
    "desc": "Each team nominates a 'captain' who sets one focus for their team's tournament games (e.g. 'let's focus on passing accuracy today') — light strategic ownership before the tournament begins.",
    "coach": "Give every captain a genuine, valued choice.",
    "easier": "—",
    "harder": "—",
    "chaos": "Role rotation",
    "setup": "Same tournament teams as will be used in the Round-Robin Mini-Tournament, gathered briefly in team huddles before games begin.",
    "howTo": [
     "Each team nominates one student as their 'captain' for the day.",
     "Give teams 2–3 minutes to huddle and have their captain lead a short discussion, choosing one genuine focus for their tournament games (e.g. 'let's focus on passing accuracy today' or 'let's focus on good communication').",
     "Ask each captain to briefly share their team's chosen focus with the coach or the class.",
     "Make sure every captain's choice is treated as genuine and valued, not corrected or overridden.",
     "Remind teams to keep their focus in mind during the tournament games that follow.",
     "Rotate the captain role in future units so different students get the experience over time."
    ]
   }
  ],
  "big": {
   "name": "Round-Robin Mini-Tournament",
   "desc": "Multiple small teams (3v3/4v4) rotate through short games against each other on 2–3 small pitches, scoring simply (goals or a fair-play points system). Every skill from the unit is relevant somewhere in these games.",
   "setup": "Divide the class into multiple small teams of 3–4 (3v3 or 4v4), with 2–3 small pitches set up with small goals. A simple round-robin schedule prepared in advance so every team knows who they play and when.",
   "howTo": [
    "Explain the tournament format: teams rotate through short games against different opponents on the available pitches, following the round-robin schedule.",
    "Score simply — either goals scored, or a fair-play points system (e.g. win = 3 points, draw = 1, plus bonus points for good sportsmanship) depending on what the class values most today.",
    "Play each round for a fixed short time (e.g. 4–5 minutes), then rotate to the next scheduled match.",
    "Remind students that every skill from the unit — dribbling, passing, shooting, defending, movement, set pieces — is relevant somewhere in these games.",
    "Manage fatigue and hydration across the tournament with brief breaks between rounds, and make sure rotation is fair so no team is overplayed.",
    "Finish with a simple wrap-up acknowledging effort, improvement, and each captain's focus from Skill Game 3, not just final results."
   ]
  },
  "discussion": [
   "What's one skill from this whole unit you're most proud of improving?",
   "What did fair, encouraging play look like in today's tournament?",
   "What will you take from this unit into other sports or games?"
  ],
  "lookfors": [
   "Applies a visible range of skills from across the unit (not just one)",
   "Plays fairly and encourages teammates/opponents in a competitive setting",
   "Shows growth compared to Lesson 1 (informal, teacher's own judgement)"
  ],
  "inclusion": "Structure round-robin teams to be balanced/mixed-ability; consider a simple fair-play recognition (not just a 'winning team') to keep the culminating day inclusive and values-aligned.",
  "skillBreakdown": [
   {
    "step": "Bring your best technique from across the unit into every touch.",
    "why": "A tournament is where all of the unit's individual skills get tested together under real pressure."
   },
   {
    "step": "Make decisions based on what the game is showing you, not a fixed plan.",
    "why": "Reading and reacting to the real situation beats sticking rigidly to a plan that doesn't fit."
   },
   {
    "step": "Play fairly and encourage teammates throughout, win or lose.",
    "why": "A tournament is a great chance to practise sportsmanship under real competitive stakes."
   }
  ]
 }
];

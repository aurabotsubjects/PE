// Rippa unit data — RIPPA_BLOCK_INFO + RIPPA_LESSONS
const RIPPA_BLOCK_INFO = {
  1:{name:"Foundational Ball Skills", range:"Lessons 1–5", color:"var(--b1)", soft:"var(--b1-soft)", warmup:"Two-Hand Carry Jog", warmdown:"Walk & Reach",
    warmupSetup:"Open space roughly 20m x 20m for the whole class, each student with their own rippa/junior rugby ball. No cones or grids needed.",
    warmupHowTo:[
      "Demonstrate the two-hand carry position briefly: ball held away from the body, elbows out, eyes up.",
      "On 'go', everyone jogs freely around the space carrying their own ball.",
      "Every 20-30 seconds, call a change: 'pass to the nearest person' (a quick pass and receive, then keep jogging), 'speed up' (jog faster briefly), or 'slow down' (ease right off).",
      "Keep the pace light and playful — the goal is raising heart rates and getting comfortable holding the ball, not testing skill.",
      "Run for the full 5 minutes, mixing up the order of calls."
    ],
    warmdownSetup:"No equipment needed beyond the space already in use. Gather the class into a loose circle or scattered spread with room for each student to stretch without touching anyone else.",
    warmdownHowTo:[
      "Have students set their ball to the side and walk slowly around the space for about 1 minute to bring heart rate down gradually.",
      "Gather into a circle (or stay scattered) and lead 3-4 simple static stretches — calves, quads, hamstrings, and a gentle reach-up/side stretch — holding each for about 15-20 seconds.",
      "Keep instructions simple and calm: 'reach, hold, breathe' rather than technical cues.",
      "Use this quiet time to briefly ask how the session felt for a couple of students, setting a relaxed tone before the Discussion segment.",
      "Finish with everyone standing tall and taking one big breath in and out together."
    ]
  },
  2:{name:"Continuity, Support & Defence Basics", range:"Lessons 6–10", color:"var(--b2)", soft:"var(--b2-soft)", warmup:"Partner Pop Pass", warmdown:"Partner Stretch",
    warmupSetup:"Pairs spread out across the space, roughly 3-4m apart per pair, enough room between pairs that passes don't cross. One ball per pair.",
    warmupHowTo:[
      "Partners stand facing each other and begin passing the ball back and forth gently, two hands, backward or flat.",
      "Every 30-45 seconds, call a change: 'pulse up' means pass a little faster/firmer, 'pulse down' means slow right back to gentle passes.",
      "Occasionally call 'jog swap' — both partners jog to swap with another nearby pair, then continue passing with their new partner.",
      "Keep the whole activity light and continuous — the goal is raising heart rate and warming up passing muscles, not technical correction.",
      "Run for the full 5 minutes, mixing pulse changes and partner swaps throughout."
    ],
    warmdownSetup:"Same pairs from the warm-up (or new pairs), enough space to stretch side-by-side without touching. Balls set aside.",
    warmdownHowTo:[
      "Have pairs walk together slowly around the space for about 1 minute to bring heart rate down.",
      "In pairs, lead 3-4 simple partner-assisted stretches — e.g. one partner gently holds the other's ankle behind them for a quad stretch, or both sit and reach toward each other's feet for a hamstring stretch.",
      "Hold each stretch for about 15-20 seconds, then swap who is being assisted if the stretch requires it.",
      "Keep contact gentle and consent-based — no forcing a stretch further than a partner is comfortable with.",
      "Finish with partners saying one thing their partner did well in today's session before moving into the Discussion segment."
    ]
  },
  3:{name:"Attacking, Reading the Game & Decision-Making", range:"Lessons 11–15", color:"var(--b3)", soft:"var(--b3-soft)", warmup:"Mirror Evasion Runs", warmdown:"Breathe & Balance",
    warmupSetup:"Pairs spread out across the space, no ball needed for this warm-up, roughly 5m x 5m of room per pair.",
    warmupHowTo:[
      "Explain the game: one partner is the 'leader,' the other is the 'shadow' who must copy the leader's movement as closely as possible, staying about 1-2m behind or beside them.",
      "The leader jogs, jinks side to side, changes direction and pace — nothing too sharp or unsafe, just varied movement.",
      "The shadow tries to mirror every change as quickly as possible.",
      "Swap roles every 60-90 seconds so both partners lead and shadow.",
      "This builds the same reading-movement instincts used in defending later in the lesson, while raising heart rate through varied running.",
      "Run for the full 5 minutes, encouraging bigger movements as students warm up."
    ],
    warmdownSetup:"No equipment needed. Gather the class into a spread-out circle with room to balance without bumping others.",
    warmdownHowTo:[
      "Walk slowly around the space for about 1 minute to bring heart rate down.",
      "Lead a few slow, controlled breathing cycles together: breathe in for 4 counts, hold for 2, breathe out for 4 — repeat 3-4 times.",
      "Follow with 2-3 simple balance holds, e.g. standing on one foot for 10-15 seconds, then swap feet — this connects to the body control used in evasion and defending.",
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

/* RIPPA_LESSONS is generated below */
const RIPPA_LESSONS = [
 {
  "n": 1,
  "block": 1,
  "title": "Cradle Carry",
  "focus": "Ball handling — carrying, passing basics",
  "walt": "We are learning to carry the ball securely in two hands and pass it accurately to a teammate.",
  "wilf": [
   "I can carry the ball in two hands, held away from my body ('long arms')",
   "I can pass the ball sideways or backward with a smooth, two-handed action"
  ],
  "nzc": "Strand B (Movement Concepts & Motor Skills) · Managing self",
  "value": "Aroha",
  "valueText": "Looking after yourself with patience while learning to handle a new shape of ball, and encouraging others (not laughing at drops) as everyone's hands look different on day one.",
  "equipment": "1 rippa/junior rugby ball per pair, cones for grid boundaries",
  "safety": "Keep passes below shoulder height; spread pairs out with at least 3m between grids",
  "games": [
   {
    "name": "Long Arms Carry",
    "desc": "Free carry around a grid, ball held in two hands away from the body. On 'stop!', players pass to the nearest teammate and keep moving.",
    "coach": "Elbows out, ball away from the chest, eyes up.",
    "easier": "Bigger grid, slower calls.",
    "harder": "Smaller grid, faster calls.",
    "chaos": "Random constraint calls",
    "setup": "Mark out a grid roughly 15m x 15m per group of 8-10 students using 4 cones per corner. Every student needs one rippa/junior rugby ball. No partners needed for this game — everyone carries their own ball inside the shared grid.",
    "howTo": [
     "Demonstrate the carry position first: ball held in two hands, arms away from the body ('long arms'), elbows out, eyes up looking around rather than down at the ball.",
     "On 'go', every student jogs freely around the grid in their own space, practising the carry.",
     "Call 'stop!' at random intervals — on this call, each student must immediately find the nearest teammate and pass the ball to them, then both keep moving.",
     "There's no scoring — the focus is on the quality of the carry position and a clean, controlled pass, not speed.",
     "Coach the key message throughout: 'elbows out, ball away from the chest, eyes up' — call this out as students carry past you.",
     "For 'easier', widen the grid and call 'stop!' less often; for 'harder', shrink the grid slightly and call 'stop!' every few seconds so students are always ready to pass."
    ]
   },
   {
    "name": "Standing Pass Lines",
    "desc": "Partners face each other 3m apart and pass the ball backward/sideways with two hands; after every clean catch, the passer takes one step back.",
    "coach": "Soft hands — 'give' with the catch instead of stabbing at the ball.",
    "easier": "Stay at a fixed, closer distance.",
    "harder": "Take two steps back each time.",
    "chaos": "Movement penalty/reward",
    "setup": "Partners stand facing each other 3m apart, with enough space between pairs (at least 2m) that passes don't cross into another pair's lane. One ball per pair.",
    "howTo": [
     "Demonstrate the two-handed backward/sideways pass: hands soft, ball released with a smooth push rather than a throw.",
     "Partners begin passing back and forth from the starting 3m distance.",
     "After every clean catch, the passer takes one step further back before passing again, gradually increasing the distance.",
     "If a pass is dropped or off target, the pair resets to their current distance and tries again rather than starting all the way back at 3m.",
     "Coach the key message: 'soft hands — give with the catch instead of stabbing at the ball.'",
     "For 'easier', keep the pair at a fixed, closer distance throughout; for 'harder', have them take two steps back after each clean catch instead of one."
    ]
   },
   {
    "name": "Circle Pass Race",
    "desc": "Groups of 5–6 stand in a circle and pass the ball around as fast as possible without dropping it, racing other circles for the fastest lap of 3.",
    "coach": "Call your teammate's name before the ball arrives.",
    "easier": "Bigger circle, slower pace.",
    "harder": "Smaller circle, alternate pass direction on a call.",
    "chaos": "Beat the clock, head-to-head mirror",
    "setup": "Groups of 5-6 students form circles roughly 3-4m across, spaced well apart from other circles (at least 3m gap) so balls don't collide between groups. One ball per circle.",
    "howTo": [
     "Explain the rule: the group must pass the ball all the way around the circle, in order, three times as fast as possible without dropping it.",
     "On 'go', the student holding the ball starts passing to their neighbour in one direction and the group counts each completed lap out loud.",
     "If the ball is dropped, the group picks it up and continues from that point — they don't restart the whole race.",
     "The first circle to complete 3 clean laps calls out and is declared the winner; run several rounds so different circles get to win.",
     "Coach the key message: 'call your teammate's name before the ball arrives' so receivers are ready.",
     "For 'easier', use a bigger circle and a slower pace; for 'harder', use a smaller circle and call an occasional direction-change to alternate which way the ball travels."
    ]
   }
  ],
  "big": {
   "name": "Continuous Pass Rugby",
   "desc": "4v4, walking/jogging pace, no tags yet. Teams try to complete as many clean passes as possible while moving toward the try line, scoring by grounding the ball over the line. Ball must be passed within 3 steps of receiving it.",
   "setup": "Split the class into groups of 8, forming two teams of 4 per game. Mark a small field roughly 20m x 15m with a try line (a row of cones) at each end. One ball per game.",
   "howTo": [
    "Explain the rules before starting: walking or jogging pace only, no tags yet, and the ball must be passed within 3 steps of receiving it.",
    "One team starts with the ball in the middle of the field; the other team spreads out to defend without touching or tackling.",
    "Teams try to complete as many clean passes as possible while moving the ball toward their attacking try line.",
    "A team scores by grounding the ball over the opposition's try line with a hand; after a score, the other team restarts with the ball from the halfway point.",
    "If the ball is dropped or a pass goes forward, possession switches to the other team from that spot — restart play immediately with minimal fuss.",
    "Rotate players through different positions on the field every few minutes so everyone experiences carrying, passing, and supporting."
   ]
  },
  "discussion": [
   "What helped you catch and carry the ball securely today?",
   "What made a pass easy for your partner to catch?",
   "What was tricky, and how did you keep trying?"
  ],
  "lookfors": [
   "Carries the ball in two hands away from the body",
   "Passes with a smooth two-handed action, not a one-handed throw",
   "Recovers quickly and keeps playing after a dropped ball"
  ],
  "inclusion": "Allow a larger, softer ball or a slower pace for students newer to catching; pair confident carriers with less confident ones rather than same-ability pairs.",
  "skillBreakdown": [
   {
    "step": "Carry the ball in both hands, close to the body.",
    "why": "Two hands ready to pass at any moment, and holding it close prevents it being knocked loose."
   },
   {
    "step": "Keep the ball above waist height when carrying.",
    "why": "Makes for a faster, easier pass without needing to adjust your grip first."
   },
   {
    "step": "Pass side-on with a flat trajectory, following through toward the receiver.",
    "why": "A flat, accurate pass is easier to catch in stride than a looping one."
   }
  ]
 },
 {
  "n": 2,
  "block": 1,
  "title": "Flat & Back",
  "focus": "Passing accuracy (flat, backward pass)",
  "walt": "We are learning to pass the ball flat or backward so it's always legal and easy for a teammate to catch.",
  "wilf": [
   "I can pass so the ball travels level with or behind my teammate, never forward",
   "I can adjust my pass depending on how fast my teammate is moving"
  ],
  "nzc": "Strand B · Managing self",
  "value": "Mōhio",
  "valueText": "Understanding why the 'backward pass' rule exists in rugby, and noticing what your own hands and body are doing when you pass well.",
  "equipment": "1 ball per pair, cones",
  "safety": "Keep passing lanes clear of other pairs; remind students to check space before releasing a pass",
  "games": [
   {
    "name": "Backward Gate Passing",
    "desc": "Pairs pass through a small cone gate placed level with or slightly behind the receiver, from increasing distances; a point is lost if the pass drifts forward.",
    "coach": "Aim the pass slightly behind a moving teammate so it arrives in their path, not ahead of them.",
    "easier": "Wider gate, players standing still.",
    "harder": "Narrower gate, receiver jogging.",
    "chaos": "Scoring streaks",
    "setup": "Pairs stand 3-4m apart with a small cone gate (two cones about 1m apart) placed level with or slightly behind the receiver. Space pairs at least 3m apart. One ball per pair.",
    "howTo": [
     "Demonstrate the target: the pass must travel through the gate and land level with or behind the receiver, never drifting in front of them.",
     "Partners begin passing to each other, aiming each pass through their partner's gate.",
     "A point is lost (or a coach calls it out) any time the pass drifts forward past the gate — reset and try again immediately, no long stoppage.",
     "After every few successful passes through the gate, both partners take a step further apart to increase the distance.",
     "Coach the key message: aim the pass slightly behind a moving teammate so it arrives in their path, not ahead of them.",
     "For 'easier', use a wider gate and keep both players standing still; for 'harder', narrow the gate and have the receiver jog gently as the pass arrives."
    ]
   },
   {
    "name": "Moving Line Pass",
    "desc": "A line of 4–5 players jogs across the field passing the ball along the line; every pass must travel backward relative to the direction of the run.",
    "coach": "Run onto the pass rather than waiting for it, but never get ahead of the ball.",
    "easier": "Walk instead of jog.",
    "harder": "Jog faster, add a second ball moving the other way.",
    "chaos": "Beat the clock",
    "setup": "Lines of 4-5 players stand shoulder to width apart (roughly 2m gaps) at one end of the field, facing across it. One ball per line, cones marking the start and finish lines.",
    "howTo": [
     "Demonstrate that every pass must travel backward relative to the direction the line is jogging — never forward.",
     "The line begins jogging together across the field, starting with the ball at one end of the line.",
     "Players pass the ball along the line one at a time as they jog, always releasing it backward or flat, never ahead of the receiver.",
     "If a pass goes forward, the line stops, resets the ball with the player who made the error, and continues jogging from there.",
     "Coach the key message: run onto the pass rather than waiting for it, but never get ahead of the ball.",
     "For 'easier', have the line walk instead of jog; for 'harder', increase the jog pace or add a second ball moving the opposite way along the line."
    ]
   },
   {
    "name": "Triangle Pass & Move",
    "desc": "Groups of 3 form a triangle and complete 10 legal (backward/flat) passes as fast as possible, racing other triangles.",
    "coach": "Prepare your hands early — call for it before it arrives.",
    "easier": "Smaller triangle.",
    "harder": "Bigger triangle, must alternate pass direction.",
    "chaos": "Head-to-head mirror",
    "setup": "Groups of 3 form a triangle with roughly 4-5m between each player, spaced well away from other triangles. One ball per triangle.",
    "howTo": [
     "Explain the target: complete 10 legal (backward or flat) passes around the triangle as fast as possible.",
     "On 'go', one player starts with the ball and the group begins passing, counting each legal pass out loud.",
     "If a pass is forward or dropped, that pass doesn't count — the group keeps going without a long stoppage.",
     "The first triangle to reach 10 legal passes calls out and wins that round; reset and run several rounds, racing other triangles each time.",
     "Coach the key message: prepare your hands early — call for it before it arrives.",
     "For 'easier', use a smaller triangle; for 'harder', use a bigger triangle and require players to alternate the direction the ball travels each round."
    ]
   }
  ],
  "big": {
   "name": "Continuous Pass Rugby v2",
   "desc": "As Lesson 1's big game, but coached and lightly scored on pass legality — any forward pass returns the ball to the other team, rewarding accurate backward/flat passing under a bit more pace.",
   "setup": "Same setup as Lesson 1's Continuous Pass Rugby: groups of 8 split into two teams of 4, a 20m x 15m field with a try line at each end, one ball per game.",
   "howTo": [
    "Remind students of the base rules from Lesson 1: walking/jogging pace, no tags, pass within 3 steps of receiving the ball.",
    "Add today's focus: any forward pass results in an immediate turnover — the other team restarts from that spot with the ball.",
    "One team starts with the ball at the halfway point; the other team spreads out to defend without tackling or touching.",
    "Teams try to move the ball toward their try line using only backward or flat passes, scoring by grounding the ball over the line.",
    "On a score or a forward-pass turnover, restart play quickly from that spot or the halfway line rather than pausing the game.",
    "Coach pass legality actively during play, calling out 'good flat pass!' or 'that one drifted forward' so students connect today's focus to the live game."
   ]
  },
  "discussion": [
   "Why does a rugby pass have to go backward or flat, not forward?",
   "What did you notice about timing your pass to a moving teammate?",
   "What happens to the game when a pass goes forward?"
  ],
  "lookfors": [
   "Releases the ball level with or behind the receiver",
   "Adjusts pass timing to the receiver's running speed",
   "Recognises and self-corrects a forward pass"
  ],
  "inclusion": "For students still building accuracy, allow a stationary receiver and a closer gate before adding movement.",
  "skillBreakdown": [
   {
    "step": "Point your hands and follow through toward the target.",
    "why": "Aims the pass and keeps it flat rather than floating."
   },
   {
    "step": "Release the ball slightly in front of the receiver's chest.",
    "why": "Lets them catch in stride without breaking speed."
   },
   {
    "step": "Always pass backward or level, never forward.",
    "why": "This is the fundamental rule of rugby-style passing — a forward pass is an infringement."
   }
  ]
 },
 {
  "n": 3,
  "block": 1,
  "title": "Safe Hands",
  "focus": "Catching under pressure/movement",
  "walt": "We are learning to catch a moving ball cleanly while we ourselves are moving.",
  "wilf": [
   "I can catch the ball with two hands while jogging",
   "I can get my hands ready ('target hands') before the ball arrives"
  ],
  "nzc": "Strand B · Managing self",
  "value": "Manaaki",
  "valueText": "Using your skills fairly to give your partner a realistic but manageable challenge — not throwing wildly just to catch them out.",
  "equipment": "1 ball per pair, cones",
  "safety": "Passes should stay below head height; no diving for the ball — controlled movement only",
  "games": [
   {
    "name": "Target Hands Catch",
    "desc": "Partners jog side by side; the passer calls 'hands' before passing so the receiver presents target hands and catches without breaking stride.",
    "coach": "Watch the ball all the way into your hands.",
    "easier": "Walk instead of jog.",
    "harder": "Jog faster, no verbal call.",
    "chaos": "Random constraint calls",
    "setup": "Partners jog side by side, roughly 1m apart, with at least 3m between each pair. One ball per pair, open space with no cones needed.",
    "howTo": [
     "Demonstrate 'target hands' — receiver holds both hands up and slightly out to the side they want the ball, giving the passer a clear target before it's thrown.",
     "Partners jog together side by side; the passer calls 'hands' just before passing so the receiver knows to present their target.",
     "The receiver catches without breaking stride, watching the ball all the way in rather than looking at the passer.",
     "Continue jogging and passing back and forth for the full activity, swapping who passes first every 30 seconds or so.",
     "Coach the key message: watch the ball all the way into your hands.",
     "For 'easier', walk instead of jog; for 'harder', jog faster and drop the verbal 'hands' call so the receiver must anticipate the pass."
    ]
   },
   {
    "name": "Catch on the Move Relay",
    "desc": "Small groups jog down a channel passing and catching continuously, aiming to reach the far cone without a drop; if the ball is dropped, restart from that point.",
    "coach": "Reach forward slightly to meet the ball rather than waiting for it to arrive.",
    "easier": "Wider channel, slower pace.",
    "harder": "Narrower channel, faster pace.",
    "chaos": "Beat the clock",
    "setup": "Mark a channel roughly 15m long and 4m wide with cones. Small groups of 3-4 line up at one end, one ball per group.",
    "howTo": [
     "Demonstrate reaching slightly forward to meet the ball as it arrives, rather than standing still and waiting for it.",
     "The group jogs down the channel together, passing and catching continuously as they move toward the far cone.",
     "If the ball is dropped, the group stops, picks it up from where it landed, and continues jogging and passing from that point — no restart from the beginning.",
     "The group's goal is to reach the far cone without a drop; run several reps, timing the group each time if it helps motivation.",
     "Coach the key message: reach forward slightly to meet the ball rather than waiting for it to arrive.",
     "For 'easier', widen the channel and jog slower; for 'harder', narrow the channel and increase the pace."
    ]
   },
   {
    "name": "Distraction Catch",
    "desc": "Receiver must catch a pass while a 'shadow' defender jogs alongside (not intercepting) to add visual pressure and distraction.",
    "coach": "Keep eyes on the ball, not the defender.",
    "easier": "Defender further away.",
    "harder": "Defender allowed to close in as the pass is thrown.",
    "chaos": "Added defender/pressure",
    "setup": "Pairs plus one 'shadow' defender per pair, jogging in an open space with at least 4m between groups. One ball per group of 3.",
    "howTo": [
     "Explain the shadow defender's job: jog alongside the receiver without intercepting or touching, purely to add visual distraction.",
     "The passer and receiver jog together as in Target Hands Catch, while the shadow jogs 1-2m to the side of the receiver.",
     "The receiver must catch the pass while keeping their focus on the ball, not on the shadow moving beside them.",
     "Rotate roles every few passes so each student gets a turn as passer, receiver, and shadow.",
     "Coach the key message: keep eyes on the ball, not the defender.",
     "For 'easier', have the shadow stay further away; for 'harder', let the shadow close in as the pass is thrown to add real pressure."
    ]
   }
  ],
  "big": {
   "name": "3-Pass Possession Rugby",
   "desc": "4v4, no tags, small field — every player must complete at least 3 clean catch-and-passes before their team can score, rewarding secure hands under game movement.",
   "setup": "Groups of 8 split into two teams of 4, small field roughly 20m x 15m, no tags. One ball per game.",
   "howTo": [
    "Explain today's rule addition: every player on the attacking team must complete at least 3 clean catch-and-passes before their team is allowed to score.",
    "One team starts with the ball at the halfway point; the other team spreads out to defend without tackling.",
    "Teams move the ball around, keeping a mental (or coach-tracked) tally of clean catches and passes completed by different players.",
    "Once the 3-pass minimum has been met, the attacking team may ground the ball over the try line to score.",
    "If the ball is dropped, restart immediately from that spot with the other team gaining possession — keep stoppages brief.",
    "Coach calls out encouragement for secure hands under movement, e.g. 'great catch under pressure there!' to reinforce today's focus."
   ]
  },
  "discussion": [
   "What helped you catch cleanly while you were moving?",
   "What did 'target hands' feel like when it worked well?",
   "What will you focus on next time the ball comes to you at speed?"
  ],
  "lookfors": [
   "Presents hands early as a target",
   "Catches with two hands, not trapping against the body",
   "Keeps moving/jogging through the catch rather than stopping dead"
  ],
  "inclusion": "Allow players to slow to a walk for their first few catches before adding jogging speed; some students may prefer catching a slightly underinflated/softer ball first.",
  "skillBreakdown": [
   {
    "step": "Show target hands early, fingers spread.",
    "why": "Gives the passer a clear aiming point."
   },
   {
    "step": "Watch the ball all the way into your hands.",
    "why": "Looking away early is the most common cause of a drop."
   },
   {
    "step": "Catch and immediately secure the ball to the chest.",
    "why": "Reduces the chance of a defender knocking it loose right after the catch."
   }
  ]
 },
 {
  "n": 4,
  "block": 1,
  "title": "Jinking Feet",
  "focus": "Evasion — footwork & change of direction",
  "walt": "We are learning to change direction quickly with the ball to create space away from a defender.",
  "wilf": [
   "I can plant my foot and change direction sharply while carrying the ball",
   "I can accelerate away after a change of direction"
  ],
  "nzc": "Strand B · Managing self",
  "value": "Pānga",
  "valueText": "Thinking about how your movement affects the flow of the game for everyone else sharing the space.",
  "equipment": "1 ball per student, cones",
  "safety": "Watch for collisions in tight grids when changing direction — remind students to check space before cutting",
  "games": [
   {
    "name": "Cone Slalom Carry",
    "desc": "Individual ball carry through a zig-zag line of cones as fast as possible without losing control; race against your own best time.",
    "coach": "Small, quick steps near the cone, longer strides in open space.",
    "easier": "Wider cone spacing.",
    "harder": "Narrower spacing/timed leaderboard.",
    "chaos": "Beat the clock",
    "setup": "Set up a zig-zag line of 6-8 cones, each about 2m apart, for each group of 4-5 students. One ball per student, with several parallel slalom lines if the class is large.",
    "howTo": [
     "Demonstrate carrying the ball while weaving through the cones: small, quick steps close to each cone, longer strides in the open space between them.",
     "Students line up at the start of their slalom and go one at a time, carrying their own ball through the zig-zag as fast as they can under control.",
     "Encourage each student to race against their own best time on repeat attempts rather than comparing directly with others.",
     "Once through the slalom, the student jogs back around the outside to rejoin the back of their line for another turn.",
     "Coach the key message: small, quick steps near the cone, longer strides in open space.",
     "For 'easier', space the cones further apart; for 'harder', narrow the spacing and keep an informal timed leaderboard."
    ]
   },
   {
    "name": "Number Call Cuts",
    "desc": "Students carry the ball freely; when their number is called, they must plant and cut sharply in a new direction before continuing.",
    "coach": "Plant the outside foot and drive off it explosively.",
    "easier": "Fewer numbers active at once.",
    "harder": "Two numbers called in quick sequence.",
    "chaos": "Random constraint calls",
    "setup": "Open space roughly 20m x 20m for the whole class, each student with their own ball and an assigned number (1-4 works well for a class of 20-24, in groups of 5-6 per number).",
    "howTo": [
     "Assign each student a number before starting and explain that when their number is called, they must plant their outside foot and cut sharply into a new direction.",
     "Students carry their ball freely around the space at a controlled jog.",
     "Call out a number at random intervals — students with that number immediately plant and cut, then continue carrying in their new direction.",
     "Remind students to check the space around them before cutting to avoid colliding with others.",
     "Coach the key message: plant the outside foot and drive off it explosively.",
     "For 'easier', have fewer numbers active in the space at once (e.g. split the class into two smaller groups); for 'harder', call two numbers in quick succession."
    ]
   },
   {
    "name": "Shrinking Grid Evade",
    "desc": "Whole class carries a ball each inside a grid that shrinks every 30 seconds; players use quick cuts to keep finding space (no elimination, just a challenge).",
    "coach": "Scan for the open space before you're boxed in.",
    "easier": "Shrink more slowly.",
    "harder": "Shrink faster, add a 'space raider' calling out crowded zones.",
    "chaos": "Shrinking space",
    "setup": "Mark a large grid roughly 20m x 20m with cones for the whole class, each student carrying their own ball. Have a set of inner cones ready to bring the boundary in every 30 seconds.",
    "howTo": [
     "Explain there's no elimination in this game — it's a continuous challenge to keep finding space as the grid gets smaller.",
     "All students carry their ball freely inside the grid, using quick cuts and changes of direction to avoid crowding.",
     "Every 30 seconds, move the cone boundary inward slightly to shrink the available space.",
     "Students must keep scanning for open space and adjusting their movement as the grid tightens.",
     "Coach the key message: scan for the open space before you're boxed in.",
     "For 'easier', shrink the grid more slowly; for 'harder', shrink it faster and add a 'space raider' — a student (no ball) who calls out crowded zones for others to avoid."
    ]
   }
  ],
  "big": {
   "name": "End Zone Evasion",
   "desc": "4v4, field split into thirds; ball carriers try to run the ball into the opposition's end zone using footwork to beat defenders (no tags yet — defenders must touch below the shoulder to stop play, then restart). Change of direction is essential through the middle third.",
   "setup": "Groups of 8 split into two teams of 4. Field split into three even thirds (mark the two dividing lines with cones), roughly 25m long, with an end zone at each end.",
   "howTo": [
    "Explain the focus: ball carriers use footwork to beat defenders, especially through the middle third where change of direction matters most.",
    "One team starts with the ball at their end; defenders spread out across the thirds without tackling.",
    "Defenders may only stop the ball carrier with a controlled touch below the shoulder — no grabbing or tackling — after which play restarts immediately with a pass from that spot.",
    "The attacking team scores by carrying the ball into the opposition's end zone using cuts and changes of direction to beat defenders, especially in the middle third.",
    "After a score or a touch-stoppage without a restart pass, reset possession quickly and keep the game flowing.",
    "Coach calls out good footwork moments live, e.g. 'nice cut through the middle!' to connect today's skill to the game."
   ]
  },
  "discussion": [
   "What did a sharp change of direction do to help you find space?",
   "Which direction (left or right cut) felt more natural to you?",
   "What would you try differently next time you're being chased?"
  ],
  "lookfors": [
   "Plants foot firmly before cutting (not a slow drift)",
   "Accelerates away after the change of direction",
   "Keeps the ball secure in two hands through the cut"
  ],
  "inclusion": "For students finding rapid changes hard, allow a wider, slower 'banana-shaped' cut rather than a single sharp plant-and-go.",
  "skillBreakdown": [
   {
    "step": "Approach the defender at a controlled pace, not full speed.",
    "why": "Gives you the balance and control to change direction sharply."
   },
   {
    "step": "Plant the outside foot and push off sharply to change direction.",
    "why": "This is what creates the sudden direction change that beats a defender."
   },
   {
    "step": "Accelerate immediately after the change of direction.",
    "why": "The change of direction only works if you explode away from it."
   }
  ]
 },
 {
  "n": 5,
  "block": 1,
  "title": "The Step",
  "focus": "Evasion — using a step to beat a defender",
  "walt": "We are learning to use a sidestep to beat a defender one-on-one.",
  "wilf": [
   "I can plant my outside foot and step past a defender",
   "I can sell a fake direction before stepping the other way"
  ],
  "nzc": "Strand B · Managing self, Relating to others",
  "value": "Aroha",
  "valueText": "Looking after yourself with patience while learning a tricky new skill, and encouraging teammates whose steps don't come off yet.",
  "equipment": "1 ball per pair, cones for a channel",
  "safety": "No shoulder contact — hands-off evasion only; stay upright, feet-only movement",
  "games": [
   {
    "name": "Shadow Step",
    "desc": "Ball carrier jogs down a channel; a 'shadow' defender stays 1.5m away and mirrors without touching, letting the carrier practise stepping past a nearby presence.",
    "coach": "Look at the defender's hips, not their head, to time the step.",
    "easier": "Defender stays further back.",
    "harder": "Defender allowed to get closer.",
    "chaos": "Added defender/pressure",
    "setup": "Mark a channel roughly 15m long and 4m wide with cones. Pairs — one ball carrier, one shadow defender — one channel per pair, spaced well apart from other pairs.",
    "howTo": [
     "Explain the shadow defender's job: stay about 1.5m away from the carrier and mirror their movement without touching, giving the carrier a safe presence to step past.",
     "The ball carrier jogs down the channel while the shadow moves alongside, matching pace and direction.",
     "The carrier practises a sidestep, watching the shadow's hips (not their head) to time the step past them.",
     "Continue to the end of the channel, then swap roles and jog back for the next rep.",
     "Coach the key message: look at the defender's hips, not their head, to time the step.",
     "For 'easier', have the shadow stay further back; for 'harder', let the shadow move a little closer to add realistic pressure."
    ]
   },
   {
    "name": "1v1 Channel Step",
    "desc": "In a narrow channel, an attacker tries to get past a stationary-then-moving defender using a sidestep to reach the far cone.",
    "coach": "Sell the fake — look one way, step the other.",
    "easier": "Attacker gets 2 attempts before the defender 'wins' the round.",
    "harder": "Narrower channel.",
    "chaos": "Mild opposition + decision-making",
    "setup": "Mark a narrow channel roughly 8m long and 3m wide with cones, one per pair. One ball per pair.",
    "howTo": [
     "Demonstrate the sidestep: look one way with eyes and shoulders to sell the fake, then push off and step the other way.",
     "One partner starts as attacker with the ball at one end of the channel; the other starts as a stationary defender partway down.",
     "The attacker tries to use a sidestep to get past the defender and reach the far cone; the defender may move to block but not tackle or grab.",
     "Give the attacker two attempts before the defender is considered to have 'won' that round if the attacker hasn't got past.",
     "Coach the key message: sell the fake — look one way, step the other.",
     "For 'easier', give the attacker 2 attempts before a round ends; for 'harder', narrow the channel so there's less room to step around."
    ]
   },
   {
    "name": "King of the Grid (Evasion)",
    "desc": "Small group, everyone carries their own ball in a shared grid, trying to step past others without being touched below the shoulder; the 'king' is whoever keeps the longest streak untouched.",
    "coach": "Keep scanning for the nearest threat.",
    "easier": "Bigger grid, fewer players.",
    "harder": "Smaller grid, more players.",
    "chaos": "Scoring streaks, role rotation via re-entry",
    "setup": "Mark a grid roughly 12m x 12m per small group of 5-6 students, each with their own ball.",
    "howTo": [
     "Explain the game: everyone carries their own ball inside the shared grid, trying to step past others without being touched below the shoulder.",
     "Students move freely, using steps and changes of direction to avoid being touched by anyone else in the grid.",
     "If touched below the shoulder, a student's streak ends — they simply continue playing and start counting a new streak from zero.",
     "The 'king' is whoever is currently on the longest untouched streak — call this out periodically to keep energy and awareness high.",
     "Coach the key message: keep scanning for the nearest threat.",
     "For 'easier', use a bigger grid with fewer players; for 'harder', shrink the grid or add more players to increase congestion."
    ]
   }
  ],
  "big": {
   "name": "1v1 Alley Challenge",
   "desc": "Pairs take turns in a narrow 'alley' with a small scoring zone at each end — 1v1, first to 3 successful evasions or most in 2 minutes, then rotate partners. A clean step under real pressure decides most points.",
   "setup": "Mark several narrow 'alleys' roughly 8m long and 3m wide, each with a small scoring zone (marked with cones) at both ends. Pairs rotate through in turns, one ball per alley.",
   "howTo": [
    "Explain the format: 1v1 in the alley, first to 3 successful evasions or whoever has the most in 2 minutes wins that head-to-head.",
    "One player attacks with the ball from one end, trying to evade the defender using a clean step and reach the scoring zone at the far end.",
    "The defender tries to touch the attacker below the shoulder before they reach the scoring zone — no tackling or grabbing.",
    "After each attempt (successful evasion or a touch), both players reset to their starting ends and go again immediately.",
    "Swap attacker/defender roles after each point, or after an agreed number of attempts, so both get equal turns.",
    "Once the 2 minutes or 3-evasion target is reached, rotate to new partners so students face different opponents."
   ]
  },
  "discussion": [
   "What made your step successful (or not) today?",
   "How did it feel to defend fairly and try your best without being too rough?",
   "What's one thing you'll try next time you're 1v1?"
  ],
  "lookfors": [
   "Plants the outside foot firmly before stepping",
   "Uses a fake/look before committing to a direction",
   "Accelerates away immediately after the step"
  ],
  "inclusion": "For lower-confidence pairs, use 'passive defenders' (hands behind back, walking pace) so the attacker experiences pressure without high stress.",
  "skillBreakdown": [
   {
    "step": "Sell a subtle look or lean one way before stepping the other.",
    "why": "Unbalances the defender's weight in the wrong direction."
   },
   {
    "step": "Plant firmly and push off low through the step.",
    "why": "A higher, softer step is slower and easier for a defender to react to."
   },
   {
    "step": "Accelerate away immediately after the step.",
    "why": "The step only creates separation if you use it, not admire it."
   }
  ]
 },
 {
  "n": 6,
  "block": 2,
  "title": "Shadow & Shape",
  "focus": "Supporting the ball carrier (depth & width)",
  "walt": "We are learning to support a ball carrier by running at the right depth and width to receive a pass.",
  "wilf": [
   "I can run alongside a ball carrier at a supporting angle, not directly behind them",
   "I can time my run so I'm in a good position to receive a pass"
  ],
  "nzc": "Strand B · Relating to others",
  "value": "Mōhio",
  "valueText": "Understanding your role in supporting a teammate — knowing where you fit and why your position matters to the play.",
  "equipment": "Balls, cones, bibs (2 colours)",
  "safety": "Keep supporting lines spaced out from other groups to avoid collisions",
  "games": [
   {
    "name": "Triangle Support Run",
    "desc": "Three players jog down the field in a triangle shape, the ball carrier passing to either support runner who then becomes the new carrier, maintaining depth and width.",
    "coach": "Support runners stay slightly behind and to the side, never level or ahead illegally.",
    "easier": "Walk instead of jog.",
    "harder": "Add a shadow defender jogging alongside (not intercepting).",
    "chaos": "Role rotation",
    "setup": "Groups of 3 spread across the field in a triangle shape, roughly 4-5m between each player, several triangles running down the field with at least 5m between groups. One ball per group.",
    "howTo": [
     "Demonstrate correct support position: support runners stay slightly behind and to the side of the ball carrier, never level or ahead.",
     "The group jogs down the field together in their triangle shape, starting with one player carrying the ball.",
     "The carrier passes to either support runner, who becomes the new carrier while the others adjust to maintain the triangle shape.",
     "Continue jogging and passing the length of the field, then jog back and repeat.",
     "Coach the key message: support runners stay slightly behind and to the side, never level or ahead illegally.",
     "For 'easier', walk instead of jog; for 'harder', add a shadow defender jogging alongside without intercepting, to simulate pressure."
    ]
   },
   {
    "name": "Call for the Ball",
    "desc": "Pairs jog, one carries; the support player must call loudly and show a target hand before receiving, reinforcing communication alongside positioning.",
    "coach": "Call early, not right as the pass is thrown.",
    "easier": "Slower pace, closer support distance.",
    "harder": "Faster pace, greater support distance.",
    "chaos": "Random constraint calls",
    "setup": "Pairs jog together down the field with at least 3-4m between pairs. One ball per pair.",
    "howTo": [
     "Demonstrate calling early and showing a target hand well before the pass arrives, not right as it's thrown.",
     "One partner carries the ball while jogging; the support partner jogs alongside at a supporting distance.",
     "The support player must call loudly and show a target hand before they receive the ball — the carrier waits for the call before passing.",
     "Continue jogging and passing down the field, swapping who carries first each length.",
     "Coach the key message: call early, not right as the pass is thrown.",
     "For 'easier', use a slower pace and keep support distance closer; for 'harder', jog faster and increase the support distance."
    ]
   },
   {
    "name": "Depth & Width Gates",
    "desc": "Groups of 3 pass through a series of marked 'support zones' (cones) that show correct depth/width, scoring bonus points for staying inside the zone while supporting.",
    "coach": "Picture an imaginary line joining you to the ball carrier — stay slightly behind it.",
    "easier": "Wider zones.",
    "harder": "Narrower zones, timed race.",
    "chaos": "Bonus objectives",
    "setup": "Groups of 3 with a series of 3-4 marked 'support zones' set out using cone gates along the field, each zone roughly 2m wide, showing the correct depth/width position for support runners.",
    "howTo": [
     "Explain the imaginary line concept: picture a line joining you to the ball carrier — support runners should stay slightly behind this line, inside their zone.",
     "The group moves down the field, passing between players as they pass through each marked support zone.",
     "Award a bonus point (or just verbal praise) each time a support runner is inside their zone when they receive the ball.",
     "Continue through all the zones to the end of the field, then reset and go again.",
     "Coach the key message: picture an imaginary line joining you to the ball carrier — stay slightly behind it.",
     "For 'easier', make the zones wider; for 'harder', narrow the zones and time the group for a race against other groups."
    ]
   }
  ],
  "big": {
   "name": "3v2 Support Rugby",
   "desc": "Small-sided, no tags yet — attacking team always has an extra support player; the ball carrier must find and use support to keep the phase alive and score. Coach highlights good depth/width in play.",
   "setup": "Groups of 5 split into 3 attackers and 2 defenders, small field roughly 20m x 15m, no tags. One ball per game.",
   "howTo": [
    "Explain the numbers advantage: the attacking team always has an extra support player (3v2), so there should always be a free support option.",
    "Attackers start with the ball at one end; the 2 defenders spread out to defend without tackling or touching.",
    "The ball carrier looks to use their extra support player to keep the phase alive, passing before contact rather than trying to beat both defenders alone.",
    "The attacking team scores by grounding the ball over the defenders' try line; after a score, swap which 3 players attack and which 2 defend.",
    "If the ball is dropped, restart immediately from that spot with defenders gaining the ball to keep pace up.",
    "Coach highlights good depth and width in play as it happens, e.g. 'great width there, that gave you two passing options!'"
   ]
  },
  "discussion": [
   "What made your support run useful to the ball carrier today?",
   "Why does depth and width matter for a support runner?",
   "What did you notice about timing your call for the ball?"
  ],
  "lookfors": [
   "Runs at an angle, not directly behind the ball carrier",
   "Calls clearly and early for the ball",
   "Adjusts depth/width based on where the defenders are"
  ],
  "inclusion": "Slow the whole shape down to walking pace for students still building the timing/positioning sequence; speed increases as confidence grows.",
  "skillBreakdown": [
   {
    "step": "Position at an angle, not directly behind the ball carrier.",
    "why": "Gives a genuine passing option rather than a blocked one."
   },
   {
    "step": "Stay close enough to be a real option, far enough to have space.",
    "why": "Too close and there's no room to work with; too far and the pass can't reach in time."
   },
   {
    "step": "Communicate that you're an option.",
    "why": "Helps decision-making happen faster under pressure."
   }
  ]
 },
 {
  "n": 7,
  "block": 2,
  "title": "Quick Recycle",
  "focus": "Continuity — quick recycling of the ball",
  "walt": "We are learning to quickly recycle (pass or place) the ball so play keeps flowing after a tag.",
  "wilf": [
   "I can pass the ball away quickly after being tagged",
   "I can support a tagged teammate so the ball keeps moving"
  ],
  "nzc": "Strand B · Relating to others",
  "value": "Manaaki",
  "valueText": "Supporting a teammate the moment they need help — being ready and available so the team doesn't lose momentum.",
  "equipment": "Balls, belts & tags, cones",
  "safety": "Introduce the tag rule carefully: after a tag, the carrier must stop and pass within a few steps — walk through it slowly before adding pace",
  "games": [
   {
    "name": "Tag & Pass",
    "desc": "Carrier jogs freely; when tagged (light touch to the belt/tag) by a shadow defender, they must stop and pass immediately to a nearby support player.",
    "coach": "Have a support player already close by before you're tagged.",
    "easier": "Defender delays the tag (counts to 3 first).",
    "harder": "Defender tags earlier/faster.",
    "chaos": "Added defender/pressure",
    "setup": "Pairs — one carrier, one shadow defender wearing a tag belt — spread across an open space with at least 4m between pairs. One ball and one tag belt per pair.",
    "howTo": [
     "Walk through the tag rule slowly first: after being tagged (a light touch to the belt/tag), the carrier must stop immediately and pass within a few steps to a nearby support player.",
     "The carrier jogs freely with the ball while the shadow defender jogs nearby, ready to tag.",
     "When tagged, the carrier stops straight away and passes to the nearest support player (use a third player if available, or pass back to the defender-turned-support for practice).",
     "After the pass, play continues immediately — the new ball carrier keeps jogging and the process repeats.",
     "Coach the key message: have a support player already close by before you're tagged.",
     "For 'easier', have the defender count to 3 before tagging, giving the carrier more time; for 'harder', have the defender tag earlier and faster."
    ]
   },
   {
    "name": "Recycle Relay",
    "desc": "Small groups move the ball down the field; every time a 'tag' cone is reached, the carrier must place/pass immediately and a new carrier continues, racing another group.",
    "coach": "React immediately — no hesitation after the tag.",
    "easier": "More space between tag cones.",
    "harder": "Less space, faster recycle required.",
    "chaos": "Beat the clock",
    "setup": "Mark a series of 'tag cones' every 4-5m down a channel roughly 20m long. Small groups of 4-5 line up at the start, one ball per group.",
    "howTo": [
     "Explain the rule: every time the carrier reaches a tag cone, they must immediately place the ball down or pass it, and a new carrier continues from there.",
     "The group moves the ball down the field together, with the current carrier jogging to the first tag cone.",
     "On reaching the cone, the carrier passes (or places, if playing a simplified version) the ball to the next player in the group, who continues to the next tag cone.",
     "Continue this pattern all the way to the end of the channel, racing another group doing the same course.",
     "Coach the key message: react immediately — no hesitation after the tag.",
     "For 'easier', space the tag cones further apart; for 'harder', place them closer together so the recycle happens more often and faster."
    ]
   },
   {
    "name": "Quick Ball Grid",
    "desc": "Groups of 4 play in a grid where every catch counts as a 'tag' — the receiver must pass again within 3 seconds, keeping the ball moving continuously.",
    "coach": "Decide who you're passing to before the ball even arrives.",
    "easier": "5 seconds allowed.",
    "harder": "2 seconds allowed.",
    "chaos": "Beat the clock, scoring streaks",
    "setup": "Groups of 4 in a grid roughly 10m x 10m, one ball per group, several grids spread around the space.",
    "howTo": [
     "Explain the rule: every catch counts as a 'tag' — the receiver must pass again within 3 seconds of catching the ball.",
     "Students move around inside the grid, passing the ball to a teammate who must immediately look for their next pass.",
     "Count down out loud ('3, 2, 1') if it helps students feel the time pressure, especially in early reps.",
     "Keep the ball moving continuously around the grid — the goal is speed of decision, not scoring.",
     "Coach the key message: decide who you're passing to before the ball even arrives.",
     "For 'easier', allow 5 seconds instead of 3; for 'harder', reduce the time to 2 seconds."
    ]
   }
  ],
  "big": {
   "name": "Continuity Rugby",
   "desc": "4v4 with tags introduced — ball carrier who is tagged must stop and pass within 3 steps; teams score points for keeping continuous phases of play (no stoppage) as they move toward the try line.",
   "setup": "Groups of 8 split into two teams of 4, tag belts worn by all players, small field roughly 20m x 15m. One ball per game.",
   "howTo": [
    "Explain today's rule addition: a tagged carrier must stop immediately and pass within 3 steps — walk through this once more before starting if needed.",
    "One team starts with the ball at the halfway point; defenders spread out and may tag (not tackle) the ball carrier.",
    "Teams score points not just for tries but for keeping a continuous phase of play going without a stoppage — coach can call out a phase count as the ball moves.",
    "After a tag, the carrier must stop and pass within 3 steps to keep the phase alive; failing to do so ends the phase and hands possession over.",
    "On a score or a broken phase, restart quickly from that spot to keep the game flowing.",
    "Coach celebrates long unbroken phases as much as tries, e.g. 'that's 6 phases without a stop, brilliant continuity!'"
   ]
  },
  "discussion": [
   "What helped you recycle the ball quickly after a tag today?",
   "Why does the game slow down or stop if the ball isn't recycled fast?",
   "What's one thing that made continuity easier for your team?"
  ],
  "lookfors": [
   "Stops immediately when tagged",
   "Passes away within the allowed steps",
   "Support players are already nearby, ready to receive"
  ],
  "inclusion": "Start with a generous step count and a slow, walked-through tag rule before adding real pace; some students may need the tag rule demonstrated a few extra times.",
  "skillBreakdown": [
   {
    "step": "Get to the tackle area or ball quickly after a tag.",
    "why": "Quick support means faster recycling and keeps the attack moving."
   },
   {
    "step": "Present or pass the ball immediately — don't hold onto it.",
    "why": "Holding on slows the whole team's attack down."
   },
   {
    "step": "Call clearly for quick ball if you're the next receiver.",
    "why": "Communication speeds up the recycle under pressure."
   }
  ]
 },
 {
  "n": 8,
  "block": 2,
  "title": "Rip It",
  "focus": "Rip technique (defensive rip of the belt/tag)",
  "walt": "We are learning the correct, safe technique to rip an opponent's tag from their belt.",
  "wilf": [
   "I can approach a ball carrier safely and rip the tag with one clean pull",
   "I can call 'tag!' clearly and hold the tag up after ripping it"
  ],
  "nzc": "Strand B · Managing self, Relating to others",
  "value": "Pānga",
  "valueText": "Thinking about how your actions (a safe or unsafe rip attempt) affect the safety and enjoyment of the game for everyone.",
  "equipment": "Belts & tags (2 per student), balls, cones",
  "safety": "No grabbing clothing or bodies — tag/belt only; no diving at the legs; approach from the front/side, not a blind-side dive",
  "games": [
   {
    "name": "Static Rip Practice",
    "desc": "Partners stand still; the defender practises the rip technique — reaching for the tag, gripping firmly, pulling in one motion, then holding it up and calling 'tag!'.",
    "coach": "Aim for the tag itself, not the belt or clothing around it.",
    "easier": "Carrier stands completely still.",
    "harder": "Carrier shuffles side to side slightly.",
    "chaos": "Random constraint calls",
    "setup": "Partners stand facing each other, one wearing a tag belt with two tags. Space pairs at least 2m apart. No ball needed for this drill — focus is purely on the rip technique.",
    "howTo": [
     "Demonstrate the rip technique slowly: reach for the tag with one hand, grip it firmly, pull it away in one smooth motion, then hold it up and call 'tag!' loudly.",
     "The carrier stands completely still while the defender practises reaching for and ripping the tag.",
     "After each rip, the defender hands the tag back to the carrier, who reattaches it before the next attempt.",
     "Swap roles every 5-6 attempts so both partners practise both ripping and being ripped.",
     "Coach the key message: aim for the tag itself, not the belt or clothing around it, and remind students no grabbing at clothing or bodies is allowed — tag only.",
     "For 'easier', keep the carrier completely still throughout; for 'harder', have the carrier shuffle gently side to side while the defender times their rip."
    ]
   },
   {
    "name": "Jog & Rip",
    "desc": "Carrier jogs slowly in a straight line; the defender jogs alongside and practises timing the rip on a moving target.",
    "coach": "Get your rip hand ready early, don't lunge late.",
    "easier": "Carrier jogs slower.",
    "harder": "Carrier jogs faster or changes direction slightly.",
    "chaos": "Added defender/pressure",
    "setup": "Pairs — one carrier wearing a tag belt, one defender — jogging in a straight line down a marked lane roughly 15m long, spaced well apart from other pairs.",
    "howTo": [
     "Remind students of safe technique: approach from the front or side (never a blind-side dive), reach for the tag, grip, and pull in one motion.",
     "The carrier jogs slowly in a straight line while the defender jogs alongside, timing their rip attempt.",
     "The defender reaches for the tag while jogging, ripping it cleanly and calling 'tag!' when successful.",
     "After a successful rip, hand the tag back, reattach it, and go again from the start of the lane.",
     "Coach the key message: get your rip hand ready early, don't lunge late.",
     "For 'easier', have the carrier jog slower; for 'harder', have the carrier jog faster or add a slight change of direction."
    ]
   },
   {
    "name": "Rip Grid Game",
    "desc": "Small group, everyone carries a ball with two tags in a shared grid; defenders (rotating role) try to rip tags safely while carriers evade — a ripped tag means a short 'sin bin' pause before rejoining.",
    "coach": "Communicate with other defenders so you're not both chasing the same carrier.",
    "easier": "Bigger grid, slower pace.",
    "harder": "Smaller grid, more defenders active.",
    "chaos": "Tag/elimination-lite",
    "setup": "Small groups of 5-6 in a grid roughly 12m x 12m, each carrier with a ball and two tags on their belt; 1-2 students per group rotate as defenders (no ball, no tags).",
    "howTo": [
     "Explain the safety rules first: no grabbing clothing or bodies, no diving at the legs — defenders approach from the front or side only.",
     "Carriers move freely around the grid with their ball, using evasion to avoid the rotating defenders.",
     "Defenders try to safely rip a tag from a carrier; once a tag is ripped, that carrier does a short 'sin bin' pause (e.g. 5 seconds standing still) before rejoining with their remaining tag.",
     "If both tags are ripped, the carrier does a slightly longer pause before rejoining with a fresh pair of tags.",
     "Coach the key message: communicate with other defenders so you're not both chasing the same carrier.",
     "For 'easier', use a bigger grid and slower pace; for 'harder', use a smaller grid with more defenders active at once."
    ]
   }
  ],
  "big": {
   "name": "Rip & Recycle Rugby",
   "desc": "4v4 full tag rules — defenders rip tags to stop the carrier, who must then pass within 3 steps (Lesson 7's continuity skill combines with today's rip technique). Emphasis on safe, clean rips and quick recycling after.",
   "setup": "Groups of 8 split into two teams of 4, full tag belts worn by all players, small field roughly 20m x 15m. One ball per game.",
   "howTo": [
    "Combine today's and last lesson's focus: defenders rip tags to stop the carrier (safe technique only — no grabbing clothing or diving at legs), who must then pass within 3 steps as in Continuity Rugby.",
    "One team starts with the ball; defenders spread out and attempt to rip tags rather than simply touch.",
    "When a tag is successfully ripped, the carrier stops immediately and passes within 3 steps to keep the phase alive.",
    "Teams score by grounding the ball over the try line; after a score, restart from the halfway point.",
    "If the ball is dropped or the 3-step rule is broken, possession switches to the other team from that spot — restart quickly.",
    "Coach emphasises safe, clean rips and quick recycling after, praising both good defensive technique and fast reactions from the carrier."
   ]
  },
  "discussion": [
   "What did a clean, safe rip technique feel like today?",
   "Why is it important to only go for the tag, not the player?",
   "How did communicating with other defenders help your team?"
  ],
  "lookfors": [
   "Reaches for the tag with a controlled, single-motion pull",
   "Calls 'tag!' clearly and holds the tag up",
   "Approaches safely from the front or side, not a reckless dive"
  ],
  "inclusion": "Walk through the rip motion in slow motion first with stationary partners before adding any movement; pair students of similar height/reach where possible for early practice.",
  "skillBreakdown": [
   {
    "step": "Reach with one clean hand to the tag or belt.",
    "why": "A single-handed rip is safe and effective; grabbing with the whole body risks contact."
   },
   {
    "step": "Pull the tag away in one confident motion.",
    "why": "Hesitation lets the attacker evade the tag attempt."
   },
   {
    "step": "Call 'tag!' clearly and hold the tag up.",
    "why": "Confirms to everyone the play has stopped, avoiding confusion or ongoing contact."
   }
  ]
 },
 {
  "n": 9,
  "block": 2,
  "title": "Line Up",
  "focus": "Defensive line — spacing & communication",
  "walt": "We are learning to defend as a connected line, with even spacing and clear communication.",
  "wilf": [
   "I can stand in a line with my teammates, evenly spaced",
   "I can call out to organise my line before the attack arrives"
  ],
  "nzc": "Strand B · Relating to others",
  "value": "Aroha",
  "valueText": "Looking after your teammates by communicating clearly — patience with players still learning where to stand and when to call.",
  "equipment": "Cones, bibs (2 colours), balls",
  "safety": "Keep defensive lines moving forward together at a controlled jog/walk pace — no sprinting into contact zones",
  "games": [
   {
    "name": "Mirror Line Shift",
    "desc": "A line of 4–5 defenders shuffles sideways together, mirroring a caller's direction changes, staying evenly spaced throughout.",
    "coach": "Keep the same gap as your neighbours — don't bunch or spread unevenly.",
    "easier": "Slower calls, bigger gaps allowed.",
    "harder": "Faster calls, tighter spacing required.",
    "chaos": "Random constraint calls",
    "setup": "A line of 4-5 defenders stands shoulder-width apart (roughly 1.5-2m gaps) facing a caller, in an open space with room to shuffle sideways several metres each way.",
    "howTo": [
     "Explain the goal: the whole line moves together sideways, staying evenly spaced, mirroring the caller's direction changes.",
     "The caller stands facing the line and calls 'left' or 'right' at intervals, pointing in that direction.",
     "The whole line shuffles sideways together in the called direction, each player keeping the same gap as their neighbours rather than bunching or spreading unevenly.",
     "Continue calling direction changes for the full activity, watching for gaps opening or players drifting out of line.",
     "Coach the key message: keep the same gap as your neighbours — don't bunch or spread unevenly.",
     "For 'easier', call more slowly and allow bigger gaps; for 'harder', call faster and require tighter, more precise spacing."
    ]
   },
   {
    "name": "Call the Line",
    "desc": "Defensive line jogs forward as attackers approach (no tagging yet); defenders must call out who they're 'on' (which attacker) before the attack arrives.",
    "coach": "Call early and loudly — communication beats speed.",
    "easier": "Attackers walk, more time to organise.",
    "harder": "Attackers jog, less time to organise.",
    "chaos": "Beat the clock",
    "setup": "A defensive line of 4-5 players faces an attacking line of the same number, roughly 10m apart, with cones marking the width of the field. No tagging in this game — it's a walkthrough of communication only.",
    "howTo": [
     "Explain the goal: before the attack arrives, each defender must call out loudly which attacker they are 'on' (marking).",
     "The attacking line begins walking or jogging forward toward the defensive line.",
     "As they approach, defenders call out their assigned attacker clearly before the attack reaches them — no tagging occurs, this is purely about organisation.",
     "Once the lines meet (or attackers reach a marked point), reset both lines and repeat with attackers approaching again.",
     "Coach the key message: call early and loudly — communication beats speed.",
     "For 'easier', have attackers walk, giving defenders more time to organise; for 'harder', have attackers jog, giving less time."
    ]
   },
   {
    "name": "Gap Spot Game",
    "desc": "Defensive line stands still while attackers walk past looking for gaps; defenders practise shuffling to close any gap that opens, staying connected as a line.",
    "coach": "Move as a unit, not just the player nearest the gap.",
    "easier": "Wider starting gaps.",
    "harder": "Narrower starting gaps, faster attacker movement.",
    "chaos": "Shrinking space",
    "setup": "A defensive line of 4-5 stands still facing an attacking line of walkers, roughly 10-12m of width marked with cones.",
    "howTo": [
     "Explain the goal: defenders stay connected as a line, shuffling to close any gap that opens rather than just the nearest player reacting alone.",
     "The defensive line stands still initially while attackers walk slowly across the width, looking for gaps between defenders.",
     "As an attacker approaches a gap, the whole defensive line shuffles together to close it, not just the two players either side of the gap.",
     "Continue for several passes of attackers walking across, resetting positions between each pass.",
     "Coach the key message: move as a unit, not just the player nearest the gap.",
     "For 'easier', start with wider gaps between defenders; for 'harder', start with narrower gaps and have attackers move faster."
    ]
   }
  ],
  "big": {
   "name": "Line Defence Rugby",
   "desc": "4v4 with tags — defending team focuses explicitly on staying connected, evenly spaced, and communicating who's marking whom, while attackers try to find and exploit any gap.",
   "setup": "Groups of 8 split into two teams of 4, tag belts worn by all players, small field roughly 20m x 15m. One ball per game.",
   "howTo": [
    "Explain today's defensive focus: the defending team must stay connected, evenly spaced, and call out who they're marking as attackers approach.",
    "One team starts with the ball; the defending team organises their line and calls out their markers before the attack begins.",
    "Attackers try to find and exploit any gap in the defensive line to break through and score, using passing and running.",
    "Defenders use tags to stop the ball carrier, who must then pass within 3 steps to continue the phase.",
    "After a score or a tag-stoppage, restart quickly from that spot, swapping which team defends each round if time allows.",
    "Coach highlights good defensive organisation live, e.g. 'great call there, that closed the gap before it opened.'"
   ]
  },
  "discussion": [
   "What made your defensive line hard to break through today?",
   "How did calling out help your team defend better?",
   "What happens to a defensive line if players don't communicate?"
  ],
  "lookfors": [
   "Maintains even spacing with neighbouring defenders",
   "Communicates clearly (calls) before and during defence",
   "Shifts as a connected unit rather than individually"
  ],
  "inclusion": "For students less confident calling out loudly, allow hand signals or shorter set phrases as an alternative to shouting.",
  "skillBreakdown": [
   {
    "step": "Stand at an even, connected distance from your defensive teammates.",
    "why": "Gaps in the line are exactly what attackers look to exploit."
   },
   {
    "step": "Communicate who you're marking and any gaps you see.",
    "why": "A talking defensive line closes gaps faster than a silent one."
   },
   {
    "step": "Move as a connected line, not as individuals.",
    "why": "A line that moves together keeps its shape; one player rushing ahead breaks it."
   }
  ]
 },
 {
  "n": 10,
  "block": 2,
  "title": "Step & Support",
  "focus": "Combining evasion + support in small games",
  "walt": "We are learning to combine evasion (stepping past a defender) with good support play in a small game.",
  "wilf": [
   "I can use a step to beat a defender and then look for support",
   "I can support a teammate immediately after they beat a defender"
  ],
  "nzc": "Strand B · Relating to others",
  "value": "Mōhio",
  "valueText": "Understanding how your individual skill (the step) and your role in the team (supporting) fit together for a shared outcome.",
  "equipment": "Balls, belts & tags, cones, bibs",
  "safety": "Keep games small-sided (3v3 max) so evasion and support decisions come thick and fast without overcrowding",
  "games": [
   {
    "name": "Step & Pop",
    "desc": "Attacker steps past a shadow defender then immediately pops a short pass to a trailing support player who continues the run.",
    "coach": "The step creates the gap; the pass keeps the play alive — don't try to do everything yourself.",
    "easier": "Defender delayed, more time to step.",
    "harder": "Defender live from the start.",
    "chaos": "Added defender/pressure",
    "setup": "Groups of 3 — one carrier, one shadow defender, one trailing support player — in a channel roughly 10m long, spaced well apart from other groups.",
    "howTo": [
     "Remind students of the step technique from Lesson 5 and the support positioning from Lesson 6 before combining them today.",
     "The carrier jogs down the channel with the shadow defender nearby, while the support player trails slightly behind and to the side.",
     "The carrier uses a sidestep to get past the shadow defender, then immediately pops a short, flat pass to the trailing support player.",
     "The support player becomes the new carrier and continues to the end of the channel.",
     "Coach the key message: the step creates the gap; the pass keeps the play alive — don't try to do everything yourself.",
     "For 'easier', have the defender delayed (count to 2 before engaging) to give more time to step; for 'harder', have the defender live and reacting from the start."
    ]
   },
   {
    "name": "3v2 Evade & Support",
    "desc": "Three attackers against two defenders in a channel — attackers combine stepping and support running to reach the far line.",
    "coach": "If your step doesn't beat the defender, trust your support and pass.",
    "easier": "Wider channel, slower defenders.",
    "harder": "Narrower channel, faster defenders.",
    "chaos": "Mild opposition + decision-making",
    "setup": "Mark a channel roughly 15m long and 8m wide with cones. Groups of 5 — 3 attackers, 2 defenders — one channel per group.",
    "howTo": [
     "Explain the numbers advantage: 3 attackers against 2 defenders means there should always be a free support option somewhere.",
     "Attackers start with the ball at one end of the channel; defenders spread out to defend without tackling, just touching below the shoulder to stop play.",
     "Attackers combine stepping past a defender directly, or passing to a free support runner, to reach the far line.",
     "If a defender makes a touch, that phase ends — reset and go again from the start of the channel.",
     "Coach the key message: if your step doesn't beat the defender, trust your support and pass.",
     "For 'easier', widen the channel and slow the defenders down; for 'harder', narrow the channel and let defenders move at full pace."
    ]
   },
   {
    "name": "Continuous Small Game",
    "desc": "3v3, tags on, small grid — a fast-paced mix of evasion and support with a quick recycle after every tag, rewarding whichever team keeps the phase alive longest.",
    "coach": "Always have two options: step yourself, or use your support.",
    "easier": "Bigger grid, more time.",
    "harder": "Smaller grid, faster decisions.",
    "chaos": "Beat the clock, scoring streaks",
    "setup": "Groups of 6 split into two teams of 3, tag belts worn, small grid roughly 12m x 10m. One ball per game.",
    "howTo": [
     "Explain the focus: a fast mix of stepping and support running, with a quick recycle after every tag.",
     "One team starts with the ball; the other defends, using tags (not tackles) to stop the carrier.",
     "After a tag, the carrier must pass within 3 steps to a nearby support player to keep the phase alive, using stepping to create gaps where possible.",
     "The team that keeps their phase alive the longest before a stoppage or score wins that round.",
     "Coach the key message: always have two options — step yourself, or use your support.",
     "For 'easier', use a bigger grid with more time; for 'harder', use a smaller grid requiring faster decisions."
    ]
   }
  ],
  "big": {
   "name": "4v3 Combination Rugby",
   "desc": "Attacking team has a numbers advantage (4v3); success depends on combining today's two skills — stepping to create the gap, and using support to finish what the step started.",
   "setup": "Groups of 7 split into 4 attackers and 3 defenders, small field roughly 20m x 15m, tag belts worn. One ball per game.",
   "howTo": [
    "Explain the numbers advantage: attackers have 4 against 3 defenders, so success depends on combining stepping and support rather than relying on just one skill.",
    "Attackers start with the ball; defenders spread out to defend, using tags to stop the ball carrier.",
    "The ball carrier looks to step past a defender to create a gap, or pass to a free support player if the step doesn't fully beat them.",
    "After a tag, the carrier passes within 3 steps to keep the phase going, using the numbers advantage to eventually break through and score.",
    "After a score or a broken phase, restart quickly from that spot, rotating which players attack and defend each round.",
    "Coach highlights moments where a step created space for a support pass to finish, connecting today's two combined skills."
   ]
  },
  "discussion": [
   "How did stepping and supporting work together today?",
   "What happened when you tried to do everything yourself instead of using support?",
   "What's one moment you combined both skills well?"
  ],
  "lookfors": [
   "Uses a step to genuinely create space, not just for show",
   "Looks for and finds support immediately after evading",
   "Support players time their run to be useful, not just present"
  ],
  "inclusion": "Reduce numbers (e.g. 2v1) for students still building confidence combining two skills at once, before scaling up to 3v2 or 4v3.",
  "skillBreakdown": [
   {
    "step": "Evade using your best footwork or step, then immediately look for support.",
    "why": "Evasion alone doesn't finish the play — support keeps it going after you're tagged."
   },
   {
    "step": "Time your pass to a support player before or as you're tagged.",
    "why": "Passing after being tagged keeps continuity rather than stopping play."
   },
   {
    "step": "Communicate with your support before and during the play.",
    "why": "Your support runner needs to know when and where you might need them."
   }
  ]
 },
 {
  "n": 11,
  "block": 3,
  "title": "Spread the Line",
  "focus": "Attacking shape — width in attack",
  "walt": "We are learning to spread out across the field to create width and space in attack.",
  "wilf": [
   "I can hold my position in a spread-out attacking line",
   "I can recognise when the defence is narrow and space is wide"
  ],
  "nzc": "Strand B · Thinking",
  "value": "Manaaki",
  "valueText": "Being patient with the process of learning to read space — width doesn't always feel natural at first, and that's okay.",
  "equipment": "Balls, cones marking field width, bibs",
  "safety": "Ensure the field is wide enough for genuine width — mark clear boundaries so players don't drift into other groups",
  "games": [
   {
    "name": "Spread & Pass",
    "desc": "A line of 5 attackers spreads to use the full width of a marked area, passing along the line while maintaining even spacing.",
    "coach": "Resist the urge to bunch toward the ball — hold your width.",
    "easier": "Narrower field, closer spacing.",
    "harder": "Full width field, greater spacing.",
    "chaos": "Bonus objectives",
    "setup": "A line of 5 attackers spreads across the full marked width of the field (roughly 20m), with cones marking the sideline boundaries. One ball per line.",
    "howTo": [
     "Demonstrate the target spacing: attackers spread evenly across the full width, each roughly 4-5m from their neighbour.",
     "The line jogs forward together, passing the ball along the line from one end to the other.",
     "Players resist bunching in toward wherever the ball currently is, holding their width throughout.",
     "Once the ball reaches the far end, reset and repeat, passing back the other direction.",
     "Coach the key message: resist the urge to bunch toward the ball — hold your width.",
     "For 'easier', use a narrower field with closer spacing between players; for 'harder', use the full width with greater spacing."
    ]
   },
   {
    "name": "Numbers Wide",
    "desc": "Attackers count off and must touch a cone at their assigned width position before receiving a pass, reinforcing spatial awareness of the whole line.",
    "coach": "Know your number and your space before the play starts.",
    "easier": "Fewer positions/cones.",
    "harder": "More positions, faster ball movement.",
    "chaos": "Random constraint calls",
    "setup": "Mark 5 cones evenly spaced across the field width, each numbered 1-5 (write on cones or assign verbally). Attackers count off 1-5 and line up near their matching cone.",
    "howTo": [
     "Explain the rule: each attacker must touch their assigned numbered cone before they're allowed to receive a pass.",
     "Attackers spread out to their positions, each near their numbered cone.",
     "The ball moves along the line — before a player receives it, they must touch their cone, reinforcing awareness of their exact width position.",
     "Continue passing along the line, resetting once it reaches the far end.",
     "Coach the key message: know your number and your space before the play starts.",
     "For 'easier', use fewer positions/cones; for 'harder', add more positions and speed up the ball movement."
    ]
   },
   {
    "name": "Find the Wide Gap",
    "desc": "3v2 in a wide channel — attackers must move the ball to the wide side where defenders are outnumbered, rather than running into a crowded middle.",
    "coach": "Look before you run — where are the extra defenders NOT standing?",
    "easier": "Wider channel, slower defenders.",
    "harder": "Narrower channel.",
    "chaos": "Mild opposition + decision-making",
    "setup": "Mark a wide channel roughly 18m wide and 12m long. Groups of 5 — 3 attackers, 2 defenders — one channel per group.",
    "howTo": [
     "Explain the goal: attackers must move the ball toward whichever side has fewer defenders, rather than running into a crowded middle.",
     "Attackers start with the ball; the 2 defenders position themselves somewhere across the width (not necessarily evenly).",
     "Attackers scan the defensive line before passing, identifying which side is outnumbered, then move the ball that way.",
     "Continue until the attackers reach the far line on the wide (outnumbered) side, then reset and go again with defenders repositioning differently.",
     "Coach the key message: look before you run — where are the extra defenders NOT standing?",
     "For 'easier', widen the channel and slow the defenders; for 'harder', narrow the channel."
    ]
   }
  ],
  "big": {
   "name": "Width Rugby",
   "desc": "4v4 or 5v5, wide pitch — teams are coached to spread across the full width; bonus points for scoring after the ball has travelled through at least 3 pairs of hands, rewarding genuine width in attack.",
   "setup": "Groups of 8-10 split into two teams of 4-5, wide field roughly 25m wide x 20m long, tag belts worn. One ball per game.",
   "howTo": [
    "Explain today's bonus rule: extra points are awarded when a try is scored after the ball has travelled through at least 3 pairs of hands (3 separate passes).",
    "One team starts with the ball; both teams are reminded to spread across the full width of the pitch rather than bunching centrally.",
    "Teams move the ball using passing and running, with defenders using tags to stop the carrier, who passes within 3 steps to continue.",
    "Coach or students keep a rough count of passes completed in the current attacking phase to track toward the bonus.",
    "On a score, note whether the bonus (3+ passes) was achieved and celebrate it; restart quickly from the halfway point.",
    "Coach actively encourages width during play, e.g. 'spread out, use the space — don't bunch in!'"
   ]
  },
  "discussion": [
   "What did spreading out do to the space available for your team?",
   "How did you know when to hold your width instead of drifting to the ball?",
   "What made width hard for the defending team to deal with?"
  ],
  "lookfors": [
   "Holds an even attacking width rather than bunching",
   "Recognises open space away from the ball",
   "Times the run to arrive as the ball does, not too early or late"
  ],
  "inclusion": "Use visible width markers (cones) as anchor points for students still learning to judge spacing without a reference.",
  "skillBreakdown": [
   {
    "step": "Spread across the field, not bunched together.",
    "why": "Width forces defenders to spread too, creating gaps."
   },
   {
    "step": "Keep a consistent, even spacing between attacking players.",
    "why": "Uneven spacing creates either overcrowded or unsupported areas."
   },
   {
    "step": "Time width-creating runs before the ball arrives.",
    "why": "Width has to exist before the pass, not be created after."
   }
  ]
 },
 {
  "n": 12,
  "block": 3,
  "title": "Find the Gap",
  "focus": "Reading the defensive line (where's the space?)",
  "walt": "We are learning to read a defensive line and identify where the space is before we run.",
  "wilf": [
   "I can spot a gap or a mismatch in the defensive line",
   "I can choose to run at space rather than straight at a defender"
  ],
  "nzc": "Strand B · Thinking",
  "value": "Pānga",
  "valueText": "Thinking about how your decisions (which gap you choose) affect whether your whole team's play succeeds.",
  "equipment": "Balls, cones, bibs",
  "safety": "Keep defensive numbers realistic (not overcrowded) so genuine gaps exist to find",
  "games": [
   {
    "name": "Spot the Gap",
    "desc": "Attackers walk toward a set defensive line and must call out loudly where they see the biggest gap before the whistle to move.",
    "coach": "Look at the whole line, not just the defender directly in front of you.",
    "easier": "Bigger, more obvious gaps.",
    "harder": "Subtler gaps, less time to spot them.",
    "chaos": "Beat the clock",
    "setup": "A defensive line of 4-5 stands in a set position facing an attacking group of the same number, roughly 10m apart, field width marked with cones.",
    "howTo": [
     "Explain the task: attackers must look at the whole defensive line and call out loudly where they see the biggest gap, before a whistle signals them to move.",
     "Attackers walk slowly toward the defensive line, scanning it as they approach.",
     "Before the whistle, each attacker (or a nominated caller) calls out where they think the biggest gap is.",
     "On the whistle, attackers move toward the gap they identified; reset and repeat with the defensive line repositioned slightly differently each time.",
     "Coach the key message: look at the whole line, not just the defender directly in front of you.",
     "For 'easier', make gaps bigger and more obvious; for 'harder', make gaps subtler and reduce the time to spot them before the whistle."
    ]
   },
   {
    "name": "Overload Read",
    "desc": "3v2 or 4v3 attack — attackers must identify and run at the side of the defensive line with fewer defenders.",
    "coach": "Count defenders on each side before you commit.",
    "easier": "Bigger numbers advantage (e.g. 4v2).",
    "harder": "Smaller advantage (e.g. 3v2).",
    "chaos": "Mild opposition + decision-making",
    "setup": "Mark a channel roughly 15m long and 10m wide. Groups of 5-6 — 3 or 4 attackers against 2 or 3 defenders — one channel per group.",
    "howTo": [
     "Explain the numbers: attackers must identify which side of the defensive line has fewer defenders and attack that side.",
     "Attackers start with the ball at one end; defenders position themselves somewhere across the channel, not necessarily evenly.",
     "Before running, attackers count the defenders on each side of the ball to identify the overload.",
     "Attackers run and pass toward the side with fewer defenders to reach the far line, then reset and repeat with defenders repositioning.",
     "Coach the key message: count defenders on each side before you commit.",
     "For 'easier', use a bigger numbers advantage such as 4v2; for 'harder', use a smaller advantage such as 3v2."
    ]
   },
   {
    "name": "Shifting Line Read",
    "desc": "Defensive line shuffles sideways between reps; attackers must re-read the (now different) gap each time before running.",
    "coach": "Re-check the line every single time — don't run the same gap out of habit.",
    "easier": "Line shifts slowly.",
    "harder": "Line shifts quickly, less time to read.",
    "chaos": "Random constraint calls",
    "setup": "A defensive line of 4-5 faces attackers across a marked width of roughly 15-18m, with room for the defensive line to shuffle sideways between reps.",
    "howTo": [
     "Explain the challenge: the defensive line will shuffle sideways between each rep, so attackers must re-read the gap fresh every time rather than running the same spot out of habit.",
     "The defensive line shuffles a few metres in one direction while attackers wait and observe.",
     "Once the line settles, attackers scan again and run at whatever new gap has appeared.",
     "Reset after each attempt, shift the line again, and repeat several times.",
     "Coach the key message: re-check the line every single time — don't run the same gap out of habit.",
     "For 'easier', shift the line slowly with plenty of time to observe; for 'harder', shift it quickly, giving less time to read the new gap."
    ]
   }
  ],
  "big": {
   "name": "Read & Run Rugby",
   "desc": "4v4 with tags — coach/app periodically calls 'freeze' for 2 seconds, prompting attackers to consciously scan the line and choose their run before play continues, reinforcing the reading habit.",
   "setup": "Groups of 8 split into two teams of 4, tag belts worn, small field roughly 20m x 15m. One ball per game.",
   "howTo": [
    "Explain the special rule: the coach (or app) will periodically call 'freeze' during play — on this call, all players stop moving for 2 seconds.",
    "One team starts with the ball; play begins as normal with attackers running and passing, defenders tagging to stop the carrier.",
    "When 'freeze' is called, everyone stops immediately for 2 seconds — attackers use this moment to consciously scan the defensive line and decide where to run once play resumes.",
    "After the 2-second freeze, play continues immediately from exactly where it stopped.",
    "Continue play with tags and the 3-step pass rule as normal between freezes, scoring by grounding the ball over the try line.",
    "Coach reinforces the reading habit by asking a quick question after a freeze occasionally, e.g. 'where's the gap right now?', before letting play continue."
   ]
  },
  "discussion": [
   "What helped you spot a gap in the defensive line today?",
   "How did reading the line change your decision about where to run?",
   "What's the difference between running at a gap and running at a defender?"
  ],
  "lookfors": [
   "Scans the full defensive line before committing to a run",
   "Identifies numbers-up situations (more attackers than defenders)",
   "Adjusts their run when the defensive line shifts"
  ],
  "inclusion": "For students who find scanning difficult under pressure, use the 'freeze and point' version first — stop, point at the gap, then go.",
  "skillBreakdown": [
   {
    "step": "Scan the defensive line before deciding your next move.",
    "why": "Attacking blind means missing obvious gaps."
   },
   {
    "step": "Look for numbers — is your side outnumbering the defence?",
    "why": "An overload of attackers over defenders is the easiest space to exploit."
   },
   {
    "step": "Communicate what you see to teammates.",
    "why": "One player's read can help the whole attacking line make a better decision."
   }
  ]
 },
 {
  "n": 13,
  "block": 3,
  "title": "Pass or Run?",
  "focus": "Decision-making — pass or run?",
  "walt": "We are learning to decide quickly whether to pass or run with the ball based on the space and defenders around us.",
  "wilf": [
   "I can make a quick decision to pass or run based on what I see",
   "I can commit fully to my decision rather than hesitating"
  ],
  "nzc": "Strand B · Thinking",
  "value": "Aroha",
  "valueText": "Being patient with yourself as decision-making speed develops — good decisions come with repetition, not instantly.",
  "equipment": "Balls, belts & tags, cones, bibs",
  "safety": "Encourage decisive movement — hesitation causes more collisions than committed decisions",
  "games": [
   {
    "name": "Green Light / Red Light Decision",
    "desc": "Carrier runs toward a shadow defender; if there's clear space ('green light') they run, if the defender is set ('red light') they must pass — coach/app calls which scenario.",
    "coach": "Decide early, before the defender is right on top of you.",
    "easier": "More obvious scenarios.",
    "harder": "Ambiguous scenarios requiring a genuine read.",
    "chaos": "Random constraint calls",
    "setup": "Pairs — carrier and shadow defender — in an open lane roughly 10m long, spaced well apart from other pairs. One ball per pair.",
    "howTo": [
     "Explain the two scenarios: 'green light' means the defender is out of position with clear space to run through; 'red light' means the defender is set and ready, requiring a pass instead.",
     "The carrier runs toward the shadow defender while the coach (or app) calls out which scenario applies for that rep.",
     "On 'green light', the carrier runs through the space; on 'red light', the carrier must pass to an imaginary or real support player before reaching the defender.",
     "Reset after each rep and repeat with the scenario called again, mixing up which one comes up.",
     "Coach the key message: decide early, before the defender is right on top of you.",
     "For 'easier', make the scenarios more obvious; for 'harder', make them ambiguous so students must make a genuine read."
    ]
   },
   {
    "name": "2v1 Decision Drill",
    "desc": "Classic 2v1 — the attacker with the ball must read the defender and either run themselves (if defender commits to the passer) or pass (if defender comes to them).",
    "coach": "Watch the defender's shoulders/feet, not their eyes.",
    "easier": "Defender slower to react.",
    "harder": "Defender reacts immediately.",
    "chaos": "Mild opposition + decision-making",
    "setup": "Groups of 3 — 2 attackers, 1 defender — in a channel roughly 10m long and 6m wide, one channel per group.",
    "howTo": [
     "Demonstrate the classic 2v1: the attacker with the ball must watch the defender's shoulders and feet (not their eyes) to read their movement.",
     "The ball-carrying attacker runs toward the defender while the second attacker runs in support, slightly behind and to the side.",
     "If the defender commits toward the ball carrier, the carrier passes to the free support player; if the defender shifts toward the support player, the carrier keeps the ball and runs.",
     "Continue to the end of the channel, then reset with roles rotated so each student experiences both attacking roles and defending.",
     "Coach the key message: watch the defender's shoulders/feet, not their eyes.",
     "For 'easier', have the defender react slowly; for 'harder', have the defender react immediately and decisively."
    ]
   },
   {
    "name": "Quick Call Grid",
    "desc": "Small group game where every carrier has 3 seconds to decide pass or run once tagged-and-recycled, building speed of decision-making under mild time pressure.",
    "coach": "Trust your first good read rather than second-guessing.",
    "easier": "5 seconds allowed.",
    "harder": "2 seconds allowed.",
    "chaos": "Beat the clock",
    "setup": "Small groups of 4 in a grid roughly 10m x 10m, tag belts worn, one ball per group.",
    "howTo": [
     "Explain the rule: once tagged and having recycled the ball (pass within 3 steps), the new carrier has only 3 seconds to decide whether to pass again or run before being challenged again.",
     "Students move around the grid; when tagged, the carrier passes within 3 steps as usual.",
     "The new carrier then has 3 seconds to make their next decision (pass or run) before the defender can close in again.",
     "Keep play continuous, cycling through tags and quick decisions for the full activity.",
     "Coach the key message: trust your first good read rather than second-guessing.",
     "For 'easier', allow 5 seconds to decide; for 'harder', reduce it to 2 seconds."
    ]
   }
  ],
  "big": {
   "name": "Decision Rugby",
   "desc": "4v4 full rules — coach highlights good pass-or-run decisions in the moment ('great read!') rather than just outcomes, reinforcing that a good decision is valuable even if it doesn't always result in a try.",
   "setup": "Groups of 8 split into two teams of 4, full tag rules, small field roughly 20m x 15m. One ball per game.",
   "howTo": [
    "Explain today's coaching focus: the coach will highlight good pass-or-run decisions in the moment, regardless of whether they result in a try.",
    "One team starts with the ball; play proceeds under full rules — tags, 3-step recycle, backward/flat passing.",
    "As the carrier approaches a defender, they must read whether to run (space available) or pass (defender set), just as practised in today's games.",
    "Coach calls out 'great read!' whenever a good pass-or-run decision is made, whether or not it leads directly to a score.",
    "Continue play with scores, restarts, and rotations as in previous full-rules games.",
    "After the game, ask a couple of students to describe a decision they made and why, reinforcing that the decision itself is what's being coached."
   ]
  },
  "discussion": [
   "What helped you decide whether to pass or run today?",
   "Can you describe a decision you made that worked out well?",
   "What made a decision hard, and how did you handle it?"
  ],
  "lookfors": [
   "Reads the defender before deciding (not a random guess)",
   "Commits fully once a decision is made",
   "Can explain why they chose to pass or run in a given moment"
  ],
  "inclusion": "For students who freeze under decision pressure, slow the game to a walk and add a clear verbal cue system (defender says 'come to me' or 'I'm covering you') as training wheels.",
  "skillBreakdown": [
   {
    "step": "Assess the gap and the defender's position before committing.",
    "why": "A rushed decision often picks the worse option."
   },
   {
    "step": "Run if there's a clear gap; pass if you're about to be tagged with support outside.",
    "why": "This simple rule covers most game situations effectively."
   },
   {
    "step": "Commit fully to whichever decision you make.",
    "why": "Hesitating halfway through either option usually fails both."
   }
  ]
 },
 {
  "n": 14,
  "block": 3,
  "title": "Boot It",
  "focus": "Kicking basics (grubber & short kick)",
  "walt": "We are learning the basic technique for a simple grubber (along-the-ground) kick.",
  "wilf": [
   "I can strike the ball along the ground with control using a grubber kick",
   "I can judge roughly how far my kick will travel"
  ],
  "nzc": "Strand B · Managing self",
  "value": "Mōhio",
  "valueText": "Understanding your own technique and how small changes (contact point, follow-through) change the outcome of a kick.",
  "equipment": "Balls (one between two), cones marking a kicking lane",
  "safety": "Kicking lanes must be clear of other groups; no kicking directly at another person — always kick into open space",
  "games": [
   {
    "name": "Static Grubber Practice",
    "desc": "Students practise the grubber kick technique individually into open space, focusing on contact point and follow-through rather than distance.",
    "coach": "Strike down and through the top half of the ball with the laces/top of the foot.",
    "easier": "Ball placed still on the ground.",
    "harder": "Ball rolling slowly before the kick.",
    "chaos": "Random constraint calls",
    "setup": "Each student has a ball (or one between two if balls are limited) and a lane of open space roughly 8-10m long to kick into, with cones marking each student's lane.",
    "howTo": [
     "Demonstrate the grubber technique: strike down and through the top half of the ball using the laces or top of the foot, sending it rolling along the ground.",
     "Students place their ball still on the ground and practise the kicking technique individually, focusing on where the foot contacts the ball.",
     "Encourage a smooth follow-through after contact rather than a short jab.",
     "Retrieve the ball after each kick and repeat, focusing on technique and contact point rather than how far it travels.",
     "Coach the key message: strike down and through the top half of the ball with the laces/top of the foot.",
     "For 'easier', keep the ball completely still before each kick; for 'harder', roll the ball slowly first and kick it while moving."
    ]
   },
   {
    "name": "Grubber to a Target",
    "desc": "Partners take turns grubber-kicking toward a marked target zone, scoring points for accuracy rather than power.",
    "coach": "Control beats power — a soft, accurate grubber is more useful in a game than a huge, wild one.",
    "easier": "Bigger target zone, closer distance.",
    "harder": "Smaller target zone, further distance.",
    "chaos": "Scoring streaks",
    "setup": "Partners take turns kicking toward a marked target zone (a small cone square roughly 2m x 2m) placed 6-8m away. One ball per pair.",
    "howTo": [
     "Explain the scoring focus: points are awarded for accuracy (landing in or rolling into the target zone), not for power or distance.",
     "One partner grubber-kicks toward the target zone while the other watches and calls out whether it landed inside.",
     "Retrieve the ball and swap turns, keeping a rough tally of successful hits for friendly competition.",
     "Continue alternating turns for the full activity.",
     "Coach the key message: control beats power — a soft, accurate grubber is more useful in a game than a huge, wild one.",
     "For 'easier', use a bigger target zone at a closer distance; for 'harder', use a smaller target zone further away."
    ]
   },
   {
    "name": "Chase the Kick",
    "desc": "Kicker grubbers the ball into space and a partner sprints to collect and control it before it goes dead, simulating a simple attacking kick-and-chase.",
    "coach": "Kick into space ahead of your chaser, not at them.",
    "easier": "Slower/softer kick, more time to chase.",
    "harder": "Firmer kick, less time to chase.",
    "chaos": "Beat the clock",
    "setup": "Pairs — one kicker, one chaser — in an open lane roughly 15m long, spaced well apart from other pairs. One ball per pair.",
    "howTo": [
     "Demonstrate kicking into space ahead of the chaser, not directly at them, so there's a genuine gap to sprint into.",
     "The kicker grubbers the ball into open space down the lane while the chaser waits at the start.",
     "On the kick, the chaser sprints to collect and control the ball before it goes dead (rolls off the marked lane or stops).",
     "Swap roles after each attempt so both partners practise kicking and chasing.",
     "Coach the key message: kick into space ahead of your chaser, not at them.",
     "For 'easier', use a slower/softer kick with more time to chase; for 'harder', use a firmer kick with less time to react."
    ]
   }
  ],
  "big": {
   "name": "Kick & Chase Rugby",
   "desc": "4v4 modified game where teams may use one grubber kick per possession to try to regain territory or create a chase, alongside normal passing/running — introduces kicking as one more attacking option, not a requirement.",
   "setup": "Groups of 8 split into two teams of 4, tag belts worn, small field roughly 20m x 15m. One ball per game.",
   "howTo": [
    "Explain the new option: each team may use one grubber kick per possession to try to regain territory or create a chase, alongside normal passing and running.",
    "One team starts with the ball; they may choose to run and pass as usual, or use their one grubber kick option to send the ball forward into space.",
    "If a kick is used, both teams may chase to collect and control the ball, with whoever gathers it first gaining possession from that spot.",
    "Play continues under full rules — tags, 3-step recycle — with the kick simply being one more attacking option, not a requirement.",
    "On a score or the ball going dead after a kick, restart quickly from the appropriate spot.",
    "Coach reminds teams the kick is optional, e.g. 'you don't have to kick — only use it if the space is there.'"
   ]
  },
  "discussion": [
   "What did you notice about the contact point that changed how the kick travelled?",
   "When might a kick be a useful option instead of a pass or a run?",
   "What made chasing and controlling a kicked ball tricky?"
  ],
  "lookfors": [
   "Strikes the ball with a controlled, low trajectory (not a high boot)",
   "Judges kick distance reasonably for the situation",
   "Chases and controls a kicked ball with soft hands/feet"
  ],
  "inclusion": "Kicking is optional in many junior rippa formats — students who aren't ready can focus purely on the chase-and-collect role, building the skill for later.",
  "skillBreakdown": [
   {
    "step": "Keep your eyes on the ball through contact.",
    "why": "Looking up early causes mis-kicks."
   },
   {
    "step": "Strike a grubber with the toe or instep angled down slightly.",
    "why": "This makes the ball bounce and roll along the ground rather than fly up."
   },
   {
    "step": "Follow through toward your target.",
    "why": "Keeps the kick accurate and on line."
   }
  ]
 },
 {
  "n": 15,
  "block": 3,
  "title": "Over the Line",
  "focus": "Scoring plays — finishing near the line",
  "walt": "We are learning how to finish an attacking play cleanly by grounding the ball over the try line.",
  "wilf": [
   "I can carry the ball with control right up to and over the line",
   "I can choose the right finishing option (run it in, short pass, or draw-and-pass) near the line"
  ],
  "nzc": "Strand B · Thinking",
  "value": "Manaaki",
  "valueText": "Using your skills fairly to give the defender a genuine, sporting contest right to the very end of the play, not just rushing past them.",
  "equipment": "Balls, belts & tags, cones marking a try line",
  "safety": "Slow players down near the line — no diving; ground the ball under control while upright or kneeling",
  "games": [
   {
    "name": "Grounding Practice",
    "desc": "Students practise carrying the ball at speed and grounding it correctly just over a marked line, without diving or unnecessary contact.",
    "coach": "Ball touches the ground under control — no need to dive to 'make sure'.",
    "easier": "Slower approach speed.",
    "harder": "Faster approach speed, tag defender chasing.",
    "chaos": "Random constraint calls",
    "setup": "Students carry a ball at a jog toward a marked try line (a row of cones), with a lane roughly 10m long for each student or pair.",
    "howTo": [
     "Demonstrate correct grounding: the ball touches the ground under control while the player is upright or kneeling — no diving needed.",
     "Students jog toward the try line carrying the ball, gradually building to a faster approach speed over several reps.",
     "As they cross the line, they ground the ball under control, without diving or unnecessary contact with the ground.",
     "Retrieve the ball and jog back to the start for another rep, increasing speed gradually as confidence builds.",
     "Coach the key message: ball touches the ground under control — no need to dive to 'make sure'.",
     "For 'easier', use a slower approach speed; for 'harder', use a faster approach speed with a tag defender chasing from behind."
    ]
   },
   {
    "name": "Draw & Pass Finish",
    "desc": "Attacker runs at a single defender near the line and must decide whether to draw the defender and pass to a support player, or finish themselves if the gap is there.",
    "coach": "Run AT the defender first — this is what creates the decision for them, not you running around.",
    "easier": "Defender reacts slowly.",
    "harder": "Defender reacts immediately.",
    "chaos": "Mild opposition + decision-making",
    "setup": "Groups of 3 — attacker, defender, support player — near a marked try line roughly 8m away, one ball per group.",
    "howTo": [
     "Demonstrate the key idea: the attacker must run directly at the defender first, which is what creates the decision, rather than running around them.",
     "The attacker runs at the single defender with the support player trailing behind and to the side.",
     "As the defender reacts, the attacker decides: pass to the free support player if the defender commits toward them, or finish themselves if a gap opens.",
     "Whoever finishes grounds the ball correctly over the line (as practised in Grounding Practice); reset and rotate roles after each attempt.",
     "Coach the key message: run AT the defender first — this is what creates the decision for them, not you running around.",
     "For 'easier', have the defender react slowly; for 'harder', have the defender react immediately."
    ]
   },
   {
    "name": "2-on-1 Finish Race",
    "desc": "Small groups race to finish a 2v1 situation correctly near the line as many times as possible in 90 seconds, alternating attackers and defenders.",
    "coach": "Commit to your read and finish it — don't slow down at the last second.",
    "easier": "More space near the line.",
    "harder": "Less space, defender starts closer.",
    "chaos": "Beat the clock",
    "setup": "Small groups of 3 near a marked try line, with a defined attacking zone roughly 10m from the line. One ball per group.",
    "howTo": [
     "Explain the goal: complete a 2v1 situation correctly near the line as many times as possible in 90 seconds.",
     "Two attackers start with the ball a short distance from the line; one defender tries to stop them without tackling (a touch below the shoulder ends that attempt).",
     "Attackers use the draw-and-pass or run-through decision to finish over the line, then quickly reset for another attempt.",
     "Count successful clean finishes over the 90 seconds, then rotate so each student gets turns attacking and defending.",
     "Coach the key message: commit to your read and finish it — don't slow down at the last second.",
     "For 'easier', give more space near the line; for 'harder', reduce the space and have the defender start closer."
    ]
   }
  ],
  "big": {
   "name": "Finish Line Rugby",
   "desc": "4v4 with a strong emphasis on the final phase — extra points awarded for a clean, controlled finish (correct decision + clean grounding) rather than just for scoring at all.",
   "setup": "Groups of 8 split into two teams of 4, tag belts worn, small field roughly 20m x 15m with a clearly marked try line. One ball per game.",
   "howTo": [
    "Explain the scoring focus: extra points are awarded for a clean, controlled finish (a good decision near the line plus correct, non-diving grounding), not just for scoring at all.",
    "One team starts with the ball; play proceeds under full rules — tags, 3-step recycle, backward/flat passing.",
    "As attackers approach the try line, they apply today's focus: run at the defender, then decide to pass or finish, and ground the ball correctly and under control.",
    "Coach or a nominated helper notes whether each score included a clean decision and controlled grounding for bonus recognition.",
    "On a score, celebrate a clean finish specifically if it happened, e.g. 'great decision AND a controlled grounding — that's a top finish!'",
    "Restart quickly from the halfway point after each score to keep the game flowing."
   ]
  },
  "discussion": [
   "What made a finish near the line clean and controlled today?",
   "How did you decide whether to run it in yourself or pass to a support player?",
   "What's the risk of diving or rushing a finish?"
  ],
  "lookfors": [
   "Approaches the line under control, not at reckless speed",
   "Grounds the ball cleanly without diving",
   "Makes a good draw-and-pass or run decision in the final moment"
  ],
  "inclusion": "For students who find the final decision overwhelming, walk through a slow-motion 2v1 near the line first before adding pace.",
  "skillBreakdown": [
   {
    "step": "Identify the space or gap near the line early.",
    "why": "Last-second decisions near the line are rushed and often fumbled."
   },
   {
    "step": "Secure the ball firmly with both hands as you finish.",
    "why": "Reduces the chance of dropping it right at the crucial moment."
   },
   {
    "step": "Stay composed and controlled in the final steps.",
    "why": "Rushing the finish causes more errors than the actual evasion did."
   }
  ]
 },
 {
  "n": 16,
  "block": 4,
  "title": "Drift & Shift",
  "focus": "Defensive strategy — drift defence",
  "walt": "We are learning to defend as a team by drifting sideways together to cover an attacker's width.",
  "wilf": [
   "I can shift sideways in line with my teammates as the attack moves the ball",
   "I can avoid rushing forward out of the defensive line"
  ],
  "nzc": "Strand B · Thinking",
  "value": "Pānga",
  "valueText": "Thinking about how your individual movement (rushing vs. staying connected) affects the whole team's defensive structure.",
  "equipment": "Balls, cones, bibs (2 colours)",
  "safety": "Keep drift speed controlled — no sprinting through the line, which causes gaps and collisions",
  "games": [
   {
    "name": "Drift Shuffle",
    "desc": "A defensive line shuffles sideways together as a ball is passed along an attacking line opposite them (no live tags), practising staying connected while drifting.",
    "coach": "Move at the same pace as your neighbours — the line drifts as one.",
    "easier": "Slower ball movement.",
    "harder": "Faster ball movement.",
    "chaos": "Random constraint calls",
    "setup": "A defensive line of 4-5 faces an attacking line of the same number across a marked width of roughly 15-18m. No tags — this is a walkthrough drill. One ball for the attacking line.",
    "howTo": [
     "Explain drift defence: the defensive line shuffles sideways together as the ball moves along the attacking line opposite them, staying connected as a unit.",
     "The attacking line passes the ball along its line from one end toward the other, without live tagging.",
     "As the ball moves, the defensive line shuffles sideways at the same pace, matching the direction the ball is travelling.",
     "Continue passing the ball back and forth along the attacking line, with defenders drifting to match each time.",
     "Coach the key message: move at the same pace as your neighbours — the line drifts as one.",
     "For 'easier', move the ball more slowly along the attacking line; for 'harder', move it faster, requiring quicker drift."
    ]
   },
   {
    "name": "Push Up, Don't Rush",
    "desc": "Defenders practise stepping forward together only when appropriate (ball passed, not held), resisting the urge to rush individually out of the line.",
    "coach": "Watch the ball, not the attacker in front of you, to time your push up.",
    "easier": "Coach calls 'push!' clearly each time.",
    "harder": "No verbal cue — read it yourself.",
    "chaos": "Random constraint calls",
    "setup": "A defensive line of 4-5 faces an attacking line holding the ball, roughly 10m apart, open width marked with cones.",
    "howTo": [
     "Explain the key discipline: defenders should only step forward together when the ball is passed, not simply because an attacker is running at them.",
     "The attacking line holds and passes the ball along their line while the defensive line watches, ready to push up.",
     "Each time the ball is passed, the whole defensive line takes a controlled step forward together; when the ball is just held (not passed), the line holds its position.",
     "Continue for several passes, resetting the lines to their start distance between reps.",
     "Coach the key message: watch the ball, not the attacker in front of you, to time your push up.",
     "For 'easier', have the coach call 'push!' clearly each time the ball is passed; for 'harder', remove the verbal cue so students read it themselves."
    ]
   },
   {
    "name": "3v3 Drift Practice",
    "desc": "Small-sided game where the defending team's only job is to drift and contain — no tagging allowed, just staying connected and pushing the attack toward the sideline.",
    "coach": "Herd the attack toward the sideline as a connected unit.",
    "easier": "Wider field, more time to drift.",
    "harder": "Narrower field, faster drift required.",
    "chaos": "Shrinking space",
    "setup": "Small-sided groups of 6 — 3 attackers, 3 defenders — in a field roughly 18m wide x 12m long, no tagging. One ball per game.",
    "howTo": [
     "Explain the defending team's only job today: drift and contain, staying connected and pushing the attack toward the sideline, without tagging.",
     "Attackers move the ball with passing and running, trying to find space; defenders drift sideways together to match the ball's movement.",
     "Rather than tagging, 'success' for defenders is herding the attack toward the sideline as a connected unit, using positioning alone.",
     "Reset after the attackers reach the sideline or a set time limit, then swap which team attacks and defends.",
     "Coach the key message: herd the attack toward the sideline as a connected unit.",
     "For 'easier', use a wider field with more time to drift; for 'harder', use a narrower field requiring faster drift."
    ]
   }
  ],
  "big": {
   "name": "Drift Defence Rugby",
   "desc": "4v4 or 5v5 — defending team is coached explicitly on drift technique (staying connected, shifting with the ball, not rushing) while attackers try to beat the drift with width and timing.",
   "setup": "Groups of 8-10 split into two teams of 4-5, tag belts worn, field roughly 22m wide x 18m long. One ball per game.",
   "howTo": [
    "Explain today's coaching focus: the defending team is coached explicitly on drift technique — staying connected, shifting sideways with the ball, and not rushing individually.",
    "One team starts with the ball; the defending team practises drifting as a connected line rather than defenders peeling off individually.",
    "Attackers try to beat the drift using width and good timing of their passes, looking for the moment the drift is slow to react.",
    "Defenders use tags to stop the carrier when they do get close enough, who then passes within 3 steps to continue.",
    "On a score or a tag-stoppage, restart quickly from that spot, swapping which team defends periodically.",
    "Coach calls out good drift technique live, e.g. 'great, you stayed connected and pushed them to the sideline!'"
   ]
  },
  "discussion": [
   "What made your defensive drift effective (or not) today?",
   "Why is rushing forward individually risky for a defensive line?",
   "How did staying connected as a line help your team defend?"
  ],
  "lookfors": [
   "Shifts sideways in line with teammates, not ahead or behind",
   "Resists rushing forward out of the defensive structure",
   "Communicates with neighbours to stay connected while drifting"
  ],
  "inclusion": "Slow the whole game to walking pace for students still learning the drift concept before adding jogging speed.",
  "skillBreakdown": [
   {
    "step": "Move sideways in line with the ball's movement, not straight forward.",
    "why": "Drifting keeps the defensive line connected while covering width."
   },
   {
    "step": "Communicate with teammates to drift together.",
    "why": "One player drifting alone creates a gap rather than closing one."
   },
   {
    "step": "Stay patient — don't rush in and break the line.",
    "why": "A broken line is easier to exploit than a solid, drifting one."
   }
  ]
 },
 {
  "n": 17,
  "block": 4,
  "title": "Switch It",
  "focus": "Attacking strategy — switch plays",
  "walt": "We are learning a simple switch play, where two attackers change direction and hand the ball across to confuse the defence.",
  "wilf": [
   "I can run a switch pass with a teammate, changing our running lines",
   "I can time the switch so it happens before the defender can react"
  ],
  "nzc": "Strand B · Thinking",
  "value": "Aroha",
  "valueText": "Being patient with a teammate while learning a two-person pattern — timing takes a few tries to click for everyone.",
  "equipment": "Balls, cones, bibs",
  "safety": "Switch passes happen at close range — remind students to keep the exchange controlled, not rushed into a collision",
  "games": [
   {
    "name": "Switch Pass Walkthrough",
    "desc": "Pairs walk through the switch play slowly: Player A runs one way, Player B crosses behind and takes a short pass, changing the attack's direction.",
    "coach": "The pass is short and flat — this is about changing direction, not distance.",
    "easier": "Walk pace only.",
    "harder": "Add a light jog.",
    "chaos": "Random constraint calls",
    "setup": "Pairs walk through the movement in an open lane roughly 10m long, spaced well apart from other pairs. One ball per pair.",
    "howTo": [
     "Demonstrate the switch play slowly: Player A runs in one direction, Player B crosses behind them and takes a short, flat pass, changing the direction of the attack.",
     "Both players start walking together with Player A carrying the ball.",
     "Player B crosses behind Player A at walking pace and receives a short pass, then continues walking in the new direction.",
     "Repeat several times at walking pace, swapping who starts with the ball so both practise both roles.",
     "Coach the key message: the pass is short and flat — this is about changing direction, not distance.",
     "For 'easier', keep it to walk pace only; for 'harder', add a light jog once the movement pattern is understood."
    ]
   },
   {
    "name": "Switch vs. Shadow Defender",
    "desc": "Pairs execute the switch play against a single shadow defender who reacts to whichever direction the ball appears to be going.",
    "coach": "Sell the first direction with your eyes and shoulders before switching.",
    "easier": "Defender reacts slowly.",
    "harder": "Defender reacts immediately.",
    "chaos": "Added defender/pressure",
    "setup": "Pairs plus one shadow defender per pair, in an open lane roughly 10m long, spaced well apart from other groups. One ball per pair.",
    "howTo": [
     "Remind students to sell the first direction with their eyes and shoulders before switching, to convince the defender to commit the wrong way.",
     "The pair executes the switch play (as practised in the walkthrough) while a single shadow defender reacts to whichever direction the ball appears to be going.",
     "The defender tries to react and move toward the attack's apparent direction, without tackling — just shadowing.",
     "After each attempt, reset and swap which player starts with the ball, and rotate the defender role periodically.",
     "Coach the key message: sell the first direction with your eyes and shoulders before switching.",
     "For 'easier', have the defender react slowly; for 'harder', have the defender react immediately to the first movement."
    ]
   },
   {
    "name": "Switch Chain Relay",
    "desc": "Groups of 4 chain together two switch plays in a row moving down the field, racing another group for the fastest clean run-through.",
    "coach": "Communicate clearly who's taking the ball each switch.",
    "easier": "One switch only.",
    "harder": "Two switches, timed.",
    "chaos": "Beat the clock, head-to-head mirror",
    "setup": "Groups of 4 in a lane roughly 20m long, chaining together two switch plays as they move down the field. One ball per group.",
    "howTo": [
     "Explain the goal: chain two switch plays in a row while moving down the field, racing another group for the fastest clean run-through.",
     "The group starts at one end with one player carrying the ball, and executes the first switch play as practised.",
     "Immediately after the first switch, the group executes a second switch play with different players to continue changing direction down the field.",
     "The first group to complete both switches cleanly and reach the far end wins that round; reset and repeat, swapping starting roles.",
     "Coach the key message: communicate clearly who's taking the ball each switch.",
     "For 'easier', do one switch only; for 'harder', do two switches and time the group for a race."
    ]
   }
  ],
  "big": {
   "name": "Switch Play Rugby",
   "desc": "4v4 or 5v5 with tags — attacking teams are encouraged to call and run at least one switch play per possession, aiming to catch a drifting defence moving the wrong way.",
   "setup": "Groups of 8-10 split into two teams of 4-5, tag belts worn, field roughly 22m wide x 18m long. One ball per game.",
   "howTo": [
    "Explain today's attacking encouragement: attacking teams should call and run at least one switch play per possession during the game.",
    "One team starts with the ball; the defending team applies drift defence as practised in Lesson 16.",
    "The attacking team looks for a moment to call and execute a switch play, aiming to catch the drifting defence moving the wrong way.",
    "Play continues under full rules — tags, 3-step recycle — with the switch play being one attacking tool among others.",
    "On a score or a tag-stoppage, restart quickly, swapping which team attacks and defends periodically.",
    "Coach celebrates a well-timed switch specifically, e.g. 'that switch caught the drift perfectly, great timing!'"
   ]
  },
  "discussion": [
   "What made the switch play successful (or not) against a defender today?",
   "How did selling a fake direction help the switch work?",
   "What's the purpose of a switch play against a drifting defence?"
  ],
  "lookfors": [
   "Times the switch pass to happen before the defender reacts",
   "Communicates clearly with their switch partner",
   "Changes direction convincingly, not half-heartedly"
  ],
  "inclusion": "Walk the pattern through cone markers first for students who need a visual/spatial reference before adding a live defender.",
  "skillBreakdown": [
   {
    "step": "Call the switch clearly before executing it.",
    "why": "Your team needs to know the direction of attack is about to change."
   },
   {
    "step": "Move the ball quickly across the field with accurate passes.",
    "why": "A slow switch gives the defence time to adjust and cover it anyway."
   },
   {
    "step": "Time support runners to the new side of attack.",
    "why": "A switch is only effective if there's support ready on the new side."
   }
  ]
 },
 {
  "n": 18,
  "block": 4,
  "title": "Know Your Role",
  "focus": "Roles within a team (structure)",
  "walt": "We are learning about different roles within a rippa rugby team and how each role contributes to the team's structure.",
  "wilf": [
   "I can describe what my role is asking of me in a small-sided game",
   "I can support teammates in different roles, not just my own"
  ],
  "nzc": "Strand C (Relationships with Other People) · Relating to others, Participating & contributing",
  "value": "Mōhio",
  "valueText": "Valuing every role on the team equally — a sweeper is just as important as a try-scorer, and everyone's contribution matters.",
  "equipment": "Balls, bibs marking roles (e.g. runners, support, sweeper), cones",
  "safety": "Rotate roles regularly so no student is stuck in one position for the whole lesson",
  "games": [
   {
    "name": "Role Carousel",
    "desc": "In small groups, students rotate through simple roles (first receiver, support runner, sweeper/cover defender) every 90 seconds in a continuous small game.",
    "coach": "Know what your current role is asking of you before the ball arrives.",
    "easier": "Longer rotations, simpler roles.",
    "harder": "Shorter rotations, more roles.",
    "chaos": "Role rotation",
    "setup": "Small groups of 4-5, each player wearing a bib marking their current role (first receiver, support runner, sweeper/cover defender). Small grid roughly 15m x 12m, one ball per group.",
    "howTo": [
     "Explain the three roles clearly before starting: first receiver takes the ball first, support runners offer options, and the sweeper/cover defender covers behind the play.",
     "Students play a continuous small game inside the grid, each performing their currently assigned role.",
     "Every 90 seconds, call a rotation — students swap bibs and take on a new role, continuing play without a long stoppage.",
     "Continue rotating through all roles so every student experiences each one at least once.",
     "Coach the key message: know what your current role is asking of you before the ball arrives.",
     "For 'easier', use longer rotation periods and simpler roles; for 'harder', shorten the rotations and add more distinct roles."
    ]
   },
   {
    "name": "Structure Walkthrough",
    "desc": "Coach/app sets up a simple attacking structure (first receiver, two support runners, a sweeper) and the team walks through where each role should be as the ball moves.",
    "coach": "Talk to your teammates about where you're going, not just where you are.",
    "easier": "Fewer roles, walked through slowly.",
    "harder": "More roles, at jogging pace.",
    "chaos": "Bonus objectives",
    "setup": "A team of 4-5 walks through a marked-out structure (cones showing where a first receiver, two support runners, and a sweeper should be) across a field roughly 18m x 12m.",
    "howTo": [
     "Set up the structure: mark cone positions showing roughly where the first receiver, two support runners, and sweeper should be as the ball starts.",
     "The team walks through where each role should move to as the ball is passed, following the marked structure.",
     "Talk through each movement together as a team — where is the ball going, and where should each role be moving to next.",
     "Repeat the walkthrough a few times, gradually increasing to a light jog as the pattern becomes familiar.",
     "Coach the key message: talk to your teammates about where you're going, not just where you are.",
     "For 'easier', use fewer roles and walk through slowly; for 'harder', add more roles and move at jogging pace."
    ]
   },
   {
    "name": "Find Your Space Game",
    "desc": "Small-sided game where each player is assigned a role for that game only; points awarded when a player is found in the correct structural position when the ball arrives near them.",
    "coach": "Structure isn't standing still — it's being in the right space at the right time.",
    "easier": "Fewer defenders, more time to find position.",
    "harder": "Full opposition.",
    "chaos": "Bonus objectives",
    "setup": "Small-sided groups of 4-5 in a field roughly 18m x 14m, each player assigned a role for that game (bibs help identify roles), with light or no opposition. One ball per game.",
    "howTo": [
     "Assign each player a role for this specific game only (first receiver, support, sweeper, etc.) before starting.",
     "Play a small-sided game where the team tries to move the ball using passing and running as normal.",
     "Award a point (or verbal praise) whenever a player is found in the correct structural position relative to the ball when it arrives near them.",
     "Continue play, rotating roles between games so different students experience different positions.",
     "Coach the key message: structure isn't standing still — it's being in the right space at the right time.",
     "For 'easier', use fewer defenders and give more time to find position; for 'harder', play with full opposition."
    ]
   }
  ],
  "big": {
   "name": "Structured Small-Sided Rugby",
   "desc": "4v4 or 5v5 with simple assigned roles (e.g. first receiver, support, sweeper) — teams are coached to recognise how their individual role contributes to the team's overall shape and success.",
   "setup": "Groups of 8-10 split into two teams of 4-5, simple roles assigned by bib (first receiver, support, sweeper), tag belts worn, field roughly 22m x 18m. One ball per game.",
   "howTo": [
    "Explain the coaching focus: teams are encouraged to recognise how their individual assigned role contributes to the team's overall shape and success.",
    "Assign roles within each team using bibs before starting; briefly remind students what their role's job is.",
    "Play proceeds under full rules — tags, 3-step recycle, backward/flat passing — with players trying to stay true to their assigned role's positioning.",
    "Coach highlights moments where a role was filled well, e.g. 'great sweeper cover there, that stopped a big gap.'",
    "On a score or a tag-stoppage, restart quickly, rotating roles at the halfway point of the game so everyone experiences more than one role.",
    "After the game, ask a couple of students what their role asked of them and how it helped the team."
   ]
  },
  "discussion": [
   "What did your role ask you to do differently from a teammate's role?",
   "How did understanding your role help the team play better together?",
   "What was it like trying a role you don't usually play?"
  ],
  "lookfors": [
   "Can describe their assigned role in simple terms",
   "Positions themselves appropriately for their role",
   "Supports and communicates with teammates in different roles"
  ],
  "inclusion": "Offer a simplified two-role version (attacker/support) for students who find three or more roles overwhelming, building up to full structure over the lesson.",
  "skillBreakdown": [
   {
    "step": "Understand your specific role before the play starts.",
    "why": "Knowing your job means faster, more confident decisions in the moment."
   },
   {
    "step": "Communicate your role or position to teammates.",
    "why": "Reduces confusion about who is doing what."
   },
   {
    "step": "Adjust your role based on what the team needs in the moment.",
    "why": "Rigid roles break down when the game situation changes."
   }
  ]
 },
 {
  "n": 19,
  "block": 4,
  "title": "Game Day",
  "focus": "Full-rules small-sided games with tactics focus",
  "walt": "We are learning to apply everything we've practised — passing, evasion, support, defence, and structure — in a full small-sided game.",
  "wilf": [
   "I can apply at least one tactic we've learned in a live game situation",
   "I can adjust my play based on what the game is asking for in the moment"
  ],
  "nzc": "Strand B & C · Thinking, Relating to others, Participating & contributing",
  "value": "Manaaki",
  "valueText": "Bringing everything together fairly — playing hard, playing safe, and playing for the team, not just for yourself.",
  "equipment": "Belts & tags, balls, bibs, cones for field boundaries",
  "safety": "Full rules apply — reinforce safe rip technique and controlled finishing near the line before starting",
  "games": [
   {
    "name": "Tactic Spotlight Rounds",
    "desc": "Short rounds of small-sided games where each round has a spotlighted tactic (e.g. 'today's focus: use width') that the coach/app calls out and looks for in play.",
    "coach": "Try the spotlighted tactic even if it doesn't work perfectly the first time.",
    "easier": "Longer rounds, simpler tactic focus.",
    "harder": "Shorter rounds, combined tactics.",
    "chaos": "Bonus objectives",
    "setup": "Groups of 8-10 split into two teams of 4-5, tag belts worn, field roughly 20m x 16m. One ball per game, with a way to announce the round's spotlighted tactic (e.g. write it on a small whiteboard or call it out).",
    "howTo": [
     "Announce the spotlighted tactic for this round before play begins — e.g. 'today's focus: use width' or 'today's focus: try a switch play.'",
     "Teams play a short round of the small-sided game (roughly 3-4 minutes), consciously trying to apply the spotlighted tactic during play.",
     "Coach watches for and calls out moments where the tactic is used well, regardless of whether it leads to a score.",
     "At the end of the round, briefly announce the next spotlighted tactic and start a new short round.",
     "Coach the key message: try the spotlighted tactic even if it doesn't work perfectly the first time.",
     "For 'easier', use longer rounds with a simpler single tactic focus; for 'harder', shorten the rounds and combine two tactics in one round."
    ]
   },
   {
    "name": "Coach's Freeze & Reset",
    "desc": "During live small-sided games, the coach/app occasionally calls 'freeze' to briefly discuss the decision just made, then play resumes from that point.",
    "coach": "Use the freeze as a learning moment, not a criticism.",
    "easier": "Fewer freezes, longer play periods.",
    "harder": "More frequent freezes.",
    "chaos": "Random constraint calls",
    "setup": "Groups of 8-10 split into two teams of 4-5, tag belts worn, field roughly 20m x 16m. One ball per game.",
    "howTo": [
     "Explain the freeze rule: during live play, the coach will occasionally call 'freeze,' at which point everyone stops exactly where they are.",
     "Play begins as a normal small-sided game under full rules.",
     "When 'freeze' is called, the coach briefly discusses the decision that was just made — asking the player involved what they saw or why they chose that option.",
     "After the brief discussion (10-15 seconds), play resumes immediately from that exact point.",
     "Coach the key message: use the freeze as a learning moment, not a criticism.",
     "For 'easier', use fewer freezes with longer periods of uninterrupted play; for 'harder', freeze more frequently."
    ]
   },
   {
    "name": "Mini League Round Robin",
    "desc": "Short round-robin games between groups of 4, rotating opponents every few minutes, applying full rules and whichever tactics suit the situation.",
    "coach": "Talk to your team between games about what worked.",
    "easier": "Longer games, fewer rotations.",
    "harder": "Shorter games, more rotations/opponents.",
    "chaos": "Head-to-head mirror",
    "setup": "Groups of 4 forming several small teams, short round-robin games on a field roughly 18m x 14m per game, tag belts worn, ball per game.",
    "howTo": [
     "Explain the format: short games (roughly 3-4 minutes) played in a round robin, rotating opponents every few minutes.",
     "Teams play under full rules, applying whichever tactics from across the unit suit the situation (width, support, stepping, switch, structure).",
     "At the end of each short game, teams rotate to face a new opponent.",
     "Between games, encourage teams to briefly talk about what worked in the previous game before starting the next.",
     "Coach the key message: talk to your team between games about what worked.",
     "For 'easier', use longer games with fewer rotations; for 'harder', use shorter games with more frequent opponent changes."
    ]
   }
  ],
  "big": {
   "name": "Full-Rules Small-Sided Rippa Rugby",
   "desc": "4v4 or 5v5, full Rippa Rugby rules (tags, backward passing, 3-step recycle) — teams are encouraged to consciously apply tactics from across the unit (support, width, drift, switch, structure) in genuine competitive play.",
   "setup": "Groups of 8-10 split into two teams of 4-5, full tag belts worn, field roughly 22m x 18m with clearly marked try lines. One ball per game.",
   "howTo": [
    "Remind teams of the full Rippa Rugby rules: tags to stop the carrier, backward/flat passing only, and a 3-step recycle after every tag.",
    "Encourage teams to consciously apply tactics learned across the whole unit — support positioning, width, drift defence, switch plays, and team structure — wherever the situation calls for them.",
    "Play a continuous small-sided game under full rules, with teams scoring by grounding the ball over the try line.",
    "Coach highlights moments where a specific unit tactic was applied well, connecting it back to the lesson it came from, e.g. 'that's the switch play from earlier in the unit!'",
    "On a score or a broken phase, restart quickly from the relevant spot to keep the game flowing.",
    "Rotate players through different roles/positions periodically so everyone experiences a variety of situations."
   ]
  },
  "discussion": [
   "What tactic did you try today, and how did it go?",
   "What did you notice about your team's decision-making under real game pressure?",
   "What's one thing your team could work on next time?"
  ],
  "lookfors": [
   "Applies at least one taught tactic recognisably in live play",
   "Adjusts decisions based on what the game situation demands",
   "Communicates with teammates during live play"
  ],
  "inclusion": "Allow a slightly reduced pace or smaller-sided game (e.g. 3v3) for groups still building confidence with full rules before scaling to 5v5.",
  "skillBreakdown": [
   {
    "step": "Apply the specific tactical focus the coach calls out.",
    "why": "This lesson is about putting tactics into practice, not just skills."
   },
   {
    "step": "Communicate constantly with teammates during play.",
    "why": "Tactics only work if the whole team is coordinated."
   },
   {
    "step": "Adjust when the first plan doesn't work.",
    "why": "Good teams adapt rather than repeating a failing plan."
   }
  ]
 },
 {
  "n": 20,
  "block": 4,
  "title": "Rippa Rugby Cup",
  "focus": "Culminating mini-tournament",
  "walt": "We are learning to apply the whole unit's skills in a fun, competitive mini-tournament format.",
  "wilf": [
   "I can play a full game applying skills and tactics from across the unit",
   "I can be a good teammate and good sport across multiple games"
  ],
  "nzc": "Strand A, B, C & D · All key competencies",
  "value": "Pānga",
  "valueText": "Celebrating the whole team's effort and growth across the unit — thinking about how everyone's contribution, not just the scoreline, made the tournament work.",
  "equipment": "Belts & tags, balls, bibs (multiple colours for teams), cones, a simple ladder/scoreboard",
  "safety": "Manage fatigue with rotations/subs; reinforce safe rip technique and controlled finishing before the tournament begins",
  "games": [
   {
    "name": "Skills Warm-In Circuit",
    "desc": "A short rotating circuit revisiting the unit's key skills (carry & pass, catch, evade, rip, support) as a fun warm-in before the tournament starts.",
    "coach": "Bring your best technique from across the unit into every station.",
    "easier": "Longer stations, fewer skills.",
    "harder": "Shorter stations, all 5 skills.",
    "chaos": "Beat the clock",
    "setup": "Set up 5 stations around the field, each themed on a key unit skill (carry & pass, catch, evade, rip, support), with balls, tags, and cones at each. Groups of 4-5 rotate through stations.",
    "howTo": [
     "Briefly remind students what each station focuses on before starting: carry & pass, catch, evade, rip, and support.",
     "Groups spend roughly 2 minutes at each station, practising the skill using a simple version of a game already played earlier in the unit.",
     "On a signal, groups rotate to the next station, bringing their best technique from across the unit to each one.",
     "Continue until every group has visited all 5 stations.",
     "Coach the key message: bring your best technique from across the unit into every station.",
     "For 'easier', use longer stations covering fewer skills; for 'harder', use shorter stations covering all 5 skills."
    ]
   },
   {
    "name": "Captain's Huddle",
    "desc": "Each team spends 2 minutes with their 'captain' (rotating role) planning one simple tactic to try in their first game — a light structure/strategy touchpoint before playing.",
    "coach": "Keep the plan simple — one clear idea everyone understands.",
    "easier": "Coach suggests the tactic.",
    "harder": "Team chooses their own tactic.",
    "chaos": "Bonus objectives",
    "setup": "Each tournament team gathers in a huddle with their rotating 'captain' for that round, no equipment needed beyond a quiet space to talk for 2 minutes.",
    "howTo": [
     "Explain the huddle's purpose: the team spends 2 minutes planning one simple tactic to try in their first game of the tournament.",
     "The rotating captain leads the discussion, encouraging teammates to suggest ideas from across the unit (width, support, switch, structure).",
     "The team agrees on one simple, clear plan that everyone understands before heading out to play.",
     "Rotate the captain role for future huddles across the tournament so different students get a turn leading.",
     "Coach the key message: keep the plan simple — one clear idea everyone understands.",
     "For 'easier', have the coach suggest the tactic for the team to discuss; for 'harder', have the team choose their own tactic independently."
    ]
   },
   {
    "name": "Fair Play Check-In",
    "desc": "Brief between-games moment where teams acknowledge one good play from their opponent, reinforcing sportsmanship as part of the tournament structure.",
    "coach": "Be specific — name what your opponent did well.",
    "easier": "n/a",
    "harder": "n/a",
    "chaos": "n/a",
    "setup": "Brief between-games moment where each team gathers for about 1 minute, no equipment needed.",
    "howTo": [
     "After each tournament game, gather both teams briefly for a fair play check-in.",
     "Each team takes a turn naming one specific good play their opponent made during the game just finished.",
     "Encourage specific, genuine comments rather than generic praise — e.g. naming an actual moment from the game.",
     "Move on to the next round of the tournament once both teams have shared.",
     "Coach the key message: be specific — name what your opponent did well.",
     "This activity has no easier/harder variation — it's a consistent sportsmanship routine between every game."
    ]
   }
  ],
  "big": {
   "name": "Rippa Rugby Cup — Round Robin",
   "desc": "Full Rippa Rugby rules, small-sided round-robin mini-tournament (4v4 or 5v5) across several short games; ladder/results tracked lightly and playfully, with every team guaranteed multiple games regardless of results.",
   "setup": "Whole class split into teams of 4-5, each team with a distinct bib colour, full tag belts worn, field roughly 22m x 18m per game, with a simple ladder or scoreboard visible to track results lightly.",
   "howTo": [
    "Explain the tournament format: full Rippa Rugby rules apply, and every team is guaranteed multiple short games across the round robin regardless of results.",
    "Run a series of short games (roughly 4-5 minutes each) between different pairs of teams, rotating opponents through the round robin schedule.",
    "Play each game under full rules — tags, 3-step recycle, backward/flat passing — scoring by grounding the ball over the try line.",
    "Update the ladder/scoreboard lightly and playfully after each game, keeping the tone fun and low-pressure rather than intensely competitive.",
    "Use the Captain's Huddle and Fair Play Check-In routines between games as the tournament progresses.",
    "At the end of the round robin, celebrate the whole class's effort across the tournament rather than focusing only on the final ladder position."
   ]
  },
  "discussion": [
   "What's one skill from across the whole unit you felt proudest of today?",
   "How did your team work together across multiple games?",
   "What would you want to work on if we played another rippa rugby unit?"
  ],
  "lookfors": [
   "Applies a recognisable range of skills from across the unit",
   "Shows good sportsmanship across wins and losses",
   "Encourages and includes teammates throughout the tournament"
  ],
  "inclusion": "Ensure team sizes/formats can flex on the day for uneven numbers; emphasise participation and effort in any informal recognition, not just results.",
  "skillBreakdown": [
   {
    "step": "Bring your best skills and decision-making from across the unit.",
    "why": "The tournament tests everything you've learned together."
   },
   {
    "step": "Communicate and encourage teammates throughout.",
    "why": "A competitive setting is a great test of teamwork and sportsmanship."
   },
   {
    "step": "Adapt your play based on what each game actually needs.",
    "why": "Reading the game beats sticking to one fixed plan."
   }
  ]
 }
];


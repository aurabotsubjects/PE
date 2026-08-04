// Basketball unit data — BASKETBALL_BLOCK_INFO + BASKETBALL_LESSONS
const BASKETBALL_BLOCK_INFO = {
  1:{name:"Foundational Ball Handling & Footwork", range:"Lessons 1–5", color:"var(--b1)", soft:"var(--b1-soft)", warmup:"Dribble Freeze", warmdown:"Walk & Reach",
    warmupSetup:"Open space roughly 20m x 20m for the whole class, one ball per student, cones marking the outer boundary of the space.",
    warmupHowTo:[
      "Everyone dribbles freely around the space in their own lane, staying aware of others nearby.",
      "Call 'freeze!' at random intervals — students immediately stop their dribble under control on the spot, then resume dribbling on the next 'go.'",
      "Occasionally call 'swap hands!' — students continue dribbling but switch to their other hand without stopping.",
      "Keep the pace light and playful; the goal is raising heart rate and warming up ball-handling before today's lesson, not technical correction.",
      "Run for the full 5 minutes, mixing up the order and speed of calls."
    ],
    warmdownSetup:"No equipment needed beyond the space already in use. Gather the class into a loose circle or scattered spread with room for each student to stretch without touching anyone else.",
    warmdownHowTo:[
      "Walk slowly around the space for about 1 minute to bring heart rate down gradually.",
      "Gather into a circle (or stay scattered) and lead 3-4 simple static stretches — calves, quads, hamstrings, and a gentle reach-up/side stretch — holding each for about 15-20 seconds.",
      "Keep instructions simple and calm: 'reach, hold, breathe' rather than technical cues.",
      "Use this quiet time to briefly ask how the session felt for a couple of students, setting a relaxed tone before the Discussion segment.",
      "Finish with everyone standing tall and taking one big breath in and out together."
    ]
    },
  2:{name:"Combining Skills & Shooting", range:"Lessons 6–10", color:"var(--b2)", soft:"var(--b2-soft)", warmup:"Partner Give-and-Go Jog", warmdown:"Partner Stretch",
    warmupSetup:"Pairs spread out across the space, roughly 3-4m apart per pair with enough room between pairs that passes and jogging don't collide with a neighbouring pair. One ball per pair.",
    warmupHowTo:[
      "Partners start passing gently back and forth (chest or bounce pass) while jogging slowly on the spot.",
      "Every 30-45 seconds, call 'go!' — on this call, the passer must immediately jog toward a new spot as if starting a give-and-go, and the receiver passes back to their new position.",
      "Occasionally call 'jog swap' — both partners jog to find a new partner nearby, then continue passing and moving with them.",
      "Keep the whole activity light and continuous — the goal is raising heart rate and warming up the give-and-go movement pattern, not technical correction.",
      "Run for the full 5 minutes, mixing pass-and-move calls and partner swaps throughout."
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
  3:{name:"Defending, Attacking & Positional Play", range:"Lessons 11–15", color:"var(--b3)", soft:"var(--b3-soft)", warmup:"Mirror Defence Slide", warmdown:"Breathe & Balance",
    warmupSetup:"Pairs spread out across the space, no ball needed for this warm-up, roughly 5m x 5m of room per pair.",
    warmupHowTo:[
      "Explain the game: one partner is the 'leader,' the other is the 'shadow' who must copy the leader's movement as closely as possible, staying about 1-2m behind or beside them, echoing the defensive slide focus from this block.",
      "The leader jogs, jinks side to side, changes direction and pace — nothing too sharp or unsafe, just varied movement.",
      "The shadow tries to mirror every change as quickly as possible, using a low, athletic stance where they can.",
      "Swap roles every 60-90 seconds so both partners lead and shadow.",
      "Run for the full 5 minutes, encouraging bigger movements as students warm up."
    ],
    warmdownSetup:"No equipment needed. Gather the class into a spread-out circle with room to balance without bumping others.",
    warmdownHowTo:[
      "Walk slowly around the space for about 1 minute to bring heart rate down.",
      "Lead a few slow, controlled breathing cycles together: breathe in for 4 counts, hold for 2, breathe out for 4 — repeat 3-4 times.",
      "Follow with 2-3 simple balance holds, e.g. standing on one foot for 10-15 seconds, then swap feet — this connects to the body control used in shooting and defending.",
      "Keep the tone calm and unhurried — this is a good moment to help students settle before reflecting on the lesson.",
      "Finish standing tall with one final deep breath together before moving into the Discussion segment."
    ]
    },
  4:{name:"Team Tactics & Culmination", range:"Lessons 16–20", color:"var(--b4)", soft:"var(--b4-soft)", warmup:"Team Shape Jog", warmdown:"Circle Stretch & Cheer",
    warmupSetup:"Split the class into their tournament/practice teams (groups of 4-6), each team with a marked-out area to jog in (cones optional). No ball needed.",
    warmupHowTo:[
      "Each team jogs together as a group around their area, staying reasonably close to each other rather than spreading out randomly.",
      "Call out simple shape prompts as they jog: 'spread wide,' 'come together,' 'form a line,' 'form a triangle' — teams adjust their jogging shape on the call, echoing the team positioning focus of this block.",
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

const BASKETBALL_LESSONS = [
 {
  "n": 1,
  "block": 1,
  "title": "Home Base Dribble",
  "focus": "Dribbling — control at a stationary point",
  "walt": "We are learning to dribble the ball with control while standing in one spot.",
  "wilf": [
   "I can dribble using my fingertips, not my palm",
   "I can keep the ball below waist height without watching it constantly"
  ],
  "nzc": "Strand B (Movement Concepts & Motor Skills) · Managing self",
  "value": "Aroha",
  "valueText": "Looking after yourself with patience while your dribbling hand feels clumsy at first, and encouraging teammates whose ball control looks different on day one.",
  "equipment": "1 ball per student, cones for grid boundaries",
  "safety": "Spread out — one ball's-width minimum gap when dribbling freely; clear grid boundaries so students don't collide",
  "games": [
   {
    "name": "Fingertip Focus",
    "desc": "Standing in a personal space, students dribble continuously using only their fingertips, pushing the ball down rather than slapping it.",
    "coach": "Spread your fingers and push the ball, don't slap at it with a flat hand",
    "easier": "Bigger bounce, ball allowed higher",
    "harder": "Lower, quicker dribble",
    "chaos": "Random constraint calls",
    "setup": "Each student has their own ball and a personal space marked by a cone, spread out in a grid roughly 15m x 15m for a class of 25-30 so no two students are within a ball's width of each other.",
    "howTo": [
     "Demonstrate dribbling with fingers spread wide, pushing the ball down with the pads of the fingers rather than slapping it with a flat palm.",
     "Students stand in their own marked space and begin dribbling continuously on the spot, no travelling required.",
     "Keep the dribble below waist height throughout — if the ball pops up above the waist, students reset to a controlled dribble before continuing.",
     "Coach the key message around the room: 'spread your fingers and push the ball, don't slap at it with a flat hand.'",
     "For 'easier', allow a bigger bounce with the ball rising higher; for 'harder', ask for a lower, quicker dribble.",
     "Run for 3-4 minutes continuously, walking the grid to check individual technique rather than stopping the whole class."
    ]
   },
   {
    "name": "Eyes Up Count",
    "desc": "While dribbling on the spot, students must hold up fingers on their non-dribbling hand when the teacher calls 'show me!' — forcing them to keep their head up rather than watching the ball.",
    "coach": "Feel the ball with your fingertips, trust it without looking",
    "easier": "Slower dribble, more time to respond",
    "harder": "Faster dribble, quick-fire calls",
    "chaos": "Random constraint calls",
    "setup": "Same personal-space grid as Fingertip Focus, one ball per student, no partner needed — the teacher calls out to the whole class at once.",
    "howTo": [
     "Explain the challenge: students keep dribbling on the spot with their dominant hand while their other hand stays free.",
     "On 'show me!', students hold up a number of fingers on their non-dribbling hand without stopping or looking down at the ball.",
     "Call out a number (e.g. 'show me three!') and scan the room for correct, confident responses.",
     "If a student loses control of the dribble while responding, they simply restart their dribble and keep going — no penalty.",
     "Coach the key message: 'feel the ball with your fingertips, trust it without looking.'",
     "For 'easier', slow the pace of calls down; for 'harder', fire calls quickly and unpredictably."
    ]
   },
   {
    "name": "Freeze & Balance",
    "desc": "As the warm-up, but now with a partner watching — on 'freeze!' the dribbler must stop the ball dead under control (no travelling) and balance it on their fingertips for a count of three.",
    "coach": "Bring the ball to a soft stop, don't let it bounce away",
    "easier": "Slower calls, more warning",
    "harder": "Faster, less predictable calls",
    "chaos": "Beat the clock",
    "setup": "Pair students up within the same grid, partners standing about 1m apart, one ball per dribbling student — partners swap roles halfway through.",
    "howTo": [
     "Explain that the dribbler keeps dribbling on the spot exactly as in Fingertip Focus, but now a partner watches for the freeze.",
     "The partner calls 'freeze!' at an unpredictable moment — the dribbler must bring the ball to a soft, controlled stop (no travelling with their feet).",
     "Once stopped, the dribbler balances the ball on their fingertips (resting on top, not gripping) and holds it still for a count of three out loud.",
     "If the ball wobbles off the fingertips or the feet move, the pair simply restarts the dribble and tries the freeze again.",
     "Swap roles so both partners get turns dribbling and calling freeze.",
     "Coach the key message: 'bring the ball to a soft stop, don't let it bounce away.' For 'easier', give more warning before calling freeze; for 'harder', call it faster and less predictably."
    ]
   }
  ],
  "big": {
   "name": "Musical Dribble",
   "desc": "Whole class dribbles freely in a large grid to music (or a continuous count); when the sound stops everyone must freeze their dribble under control — anyone whose ball gets away or who travels does 3 quick fingertip touches before rejoining. No eliminations — just a fun, repeated challenge.",
   "setup": "Whole class dribbles freely inside one large shared grid roughly 20m x 20m, each student with their own ball. A phone/speaker for music (or the teacher's own steady counting) sits at the front.",
   "howTo": [
    "Explain the game: everyone dribbles freely around the big grid while the music/count plays, using the fingertip technique from today's games.",
    "When the music stops (or the count pauses), every student must freeze their dribble under control on the spot — no extra bounce, no travelling.",
    "Anyone whose ball gets away from them, or who takes a travelling step after the freeze, does 3 quick fingertip touches on the ball where they stand before rejoining the next round.",
    "There's no elimination — everyone keeps playing every round, so mistakes just mean a quick, friendly consequence rather than sitting out.",
    "Restart the music/count as soon as everyone is set, and repeat for several rounds, mixing up how long the music plays each time.",
    "Keep the tone upbeat and playful — this is a fun capstone to the lesson's fingertip-control focus, not a competitive elimination game."
   ]
  },
  "discussion": [
   "What helped you keep control of the ball while standing still?",
   "What's the difference between slapping the ball and pushing it with your fingertips?",
   "Why does keeping your eyes up matter, even this early in learning to dribble?"
  ],
  "lookfors": [
   "Uses fingertips, not the palm",
   "Keeps the ball below waist height",
   "Can glance up briefly without losing control"
  ],
  "inclusion": "Allow a bigger, slower bounce or a softer ball for students building hand strength/confidence; success is measured by control, not speed.",
  "skillBreakdown": [
   {
    "step": "Push the ball with spread fingertips, not the palm.",
    "why": "Fingertip control gives better feel and prevents carrying or palming violations."
   },
   {
    "step": "Keep the ball below waist height.",
    "why": "A lower dribble is harder for defenders to reach and easier to control."
   },
   {
    "step": "Keep your head up, using peripheral vision to feel the ball.",
    "why": "Trains you to dribble without needing to watch the ball constantly."
   }
  ]
 },
 {
  "n": 2,
  "block": 1,
  "title": "Hand Swap",
  "focus": "Dribbling on the move / change of hand",
  "walt": "We are learning to dribble while moving and to swap between hands under control.",
  "wilf": [
   "I can dribble while walking or jogging without losing the ball",
   "I can swap the ball from one hand to the other without slapping it"
  ],
  "nzc": "Strand B · Managing self",
  "value": "Mōhio",
  "valueText": "Understanding what your own hands and feet are doing while moving with the ball, and noticing what changes when it starts to click.",
  "equipment": "1 ball per student, cones",
  "safety": "Watch for collisions when moving through a shared space — remind students to check space before changing direction",
  "games": [
   {
    "name": "Walking Dribble Lanes",
    "desc": "Students dribble the length of a marked lane while walking, focusing purely on keeping control while moving; race back using the other hand.",
    "coach": "Push the ball slightly ahead of you as you walk, don't let it trail behind",
    "easier": "Wider lane, walk only",
    "harder": "Narrower lane, light jog",
    "chaos": "Random constraint calls",
    "setup": "Mark 4-6 parallel lanes roughly 1.5m wide and 10m long using cones, one student dribbling in each lane at a time, one ball per student waiting at the start of their lane.",
    "howTo": [
     "Demonstrate walking forward while dribbling, pushing the ball slightly ahead of the body rather than letting it trail behind or bounce beside the feet.",
     "Students walk the length of their lane dribbling with one hand, keeping the ball under control the whole way.",
     "At the far end, they turn around and dribble back down the same lane using the other hand only.",
     "If the ball gets away or a student has to chase it outside the lane, they walk back to where they lost control and continue from there rather than starting over completely.",
     "Coach the key message: 'push the ball slightly ahead of you as you walk, don't let it trail behind.'",
     "For 'easier', widen the lane and keep to a walk; for 'harder', narrow the lane and allow a light jog."
    ]
   },
   {
    "name": "Cone Hand-Swap Slalom",
    "desc": "Dribbling through a zig-zag line of cones, students swap hands every time they change direction around a cone.",
    "coach": "Swap the ball low and in front of your body, not with a big slap across",
    "easier": "Wider cone spacing, slower pace",
    "harder": "Narrower spacing, faster pace",
    "chaos": "Beat the clock",
    "setup": "Set up a zig-zag line of 6-8 cones spaced roughly 2m apart per group of 4-5 students, with 2-3 parallel slalom lines if space allows so several students can go at once.",
    "howTo": [
     "Demonstrate dribbling in a zig-zag around the cones, switching the ball to the other hand low and in front of the body every time you change direction around a cone.",
     "Students take turns weaving through their line's cones, swapping hands at each direction change rather than dribbling the whole slalom with one hand.",
     "If the ball is swapped with a big slap across the body instead of a low, controlled switch, the student redoes that cone before continuing.",
     "Once a student clears the last cone, they jog the ball back around the outside to the start and the next student in line begins.",
     "Coach the key message: 'swap the ball low and in front of your body, not with a big slap across.'",
     "For 'easier', space the cones wider and slow the pace; for 'harder', narrow the spacing and race against a partner group with a stopwatch."
    ]
   },
   {
    "name": "Shrinking Grid Dribble",
    "desc": "Whole class dribbles inside a grid that shrinks every 30 seconds; students must swap hands whenever the teacher calls 'swap!' while weaving to find space.",
    "coach": "Use quick, low dribbles to find gaps as the grid shrinks",
    "easier": "Shrink slower, fewer swap calls",
    "harder": "Shrink faster, frequent swap calls",
    "chaos": "Shrinking space",
    "setup": "Mark a starting grid of roughly 20m x 20m using cones for the whole class, one ball per student, with 4 extra cones ready to move inward to shrink the grid every 30 seconds.",
    "howTo": [
     "Explain that everyone dribbles freely inside the shared grid, weaving to find open space and avoid bumping into others.",
     "Call 'swap!' at random intervals — every student must immediately change dribbling hands without stopping their dribble.",
     "Every 30 seconds, move the boundary cones inward to shrink the playing area, forcing students to find gaps and dribble with tighter control.",
     "If two students' balls collide or a student steps outside the shrinking boundary, they simply reset their dribble in the nearest open space and continue.",
     "Coach the key message: 'use quick, low dribbles to find gaps as the grid shrinks.'",
     "For 'easier', shrink the grid more slowly with fewer swap calls; for 'harder', shrink faster with frequent swap calls."
    ]
   }
  ],
  "big": {
   "name": "Dribble Tag",
   "desc": "In a shared space, everyone dribbles their own ball while trying to gently tap other players' balls away (without grabbing or contacting hands) while protecting their own — no elimination, just count how many times your ball gets tapped versus how many you tap.",
   "setup": "Whole class in one shared space roughly 20m x 20m, every student with their own ball — no teams, everyone plays individually against everyone else.",
   "howTo": [
    "Explain the game: everyone dribbles their own ball while trying to gently tap other players' balls away using an open hand — no grabbing, no contact with hands or bodies.",
    "At the same time, everyone protects their own ball using the shielding and hand-swap skills from today's games.",
    "Play continuously for a set time (e.g. 2-3 minutes) — if your ball gets tapped away, simply collect it and rejoin straight away rather than sitting out.",
    "Each student keeps a rough personal count of how many times they successfully tapped another ball away versus how many times their own ball was tapped.",
    "After each round, ask a few students to share their tally, then reset and play another round.",
    "Keep contact rules strict and remind students throughout: hands only on the ball, never on another player."
   ]
  },
  "discussion": [
   "What did moving while dribbling feel different from dribbling on the spot?",
   "Which hand did you find easier to swap to, and why do you think that is?",
   "What helped you protect your ball while others were nearby?"
  ],
  "lookfors": [
   "Keeps the ball under control while walking/jogging",
   "Swaps hands with a low, controlled push",
   "Keeps the ball close to the body when others are nearby"
  ],
  "inclusion": "Allow students to practise the hand swap stationary before adding movement if the combined skill feels like too much at once.",
  "skillBreakdown": [
   {
    "step": "Push the ball slightly ahead of you as you walk or jog.",
    "why": "Stops the ball trailing behind and getting out of reach."
   },
   {
    "step": "Swap hands low and in front of the body, not with a big slap.",
    "why": "A low, controlled swap keeps the ball protected during the change."
   },
   {
    "step": "Keep your eyes up while moving.",
    "why": "Lets you see space, teammates, and defenders while still controlling the ball."
   }
  ]
 },
 {
  "n": 3,
  "block": 1,
  "title": "Guard the Rock",
  "focus": "Dribbling under pressure (protect the ball)",
  "walt": "We are learning to protect the ball with our body while dribbling near a defender.",
  "wilf": [
   "I can keep my body between the ball and a defender",
   "I can use my non-dribbling arm to shield the ball (without pushing)"
  ],
  "nzc": "Strand B · Managing self, Relating to others",
  "value": "Manaaki",
  "valueText": "Using your skills faithfully to give your partner a fair, honest challenge — not going so hard it isn't fun, not giving up either.",
  "equipment": "1 ball per pair, cones for grids",
  "safety": "No reaching in or grabbing at the ball — hands-off pressure only; no pushing with the shielding arm",
  "games": [
   {
    "name": "Shadow Dribble",
    "desc": "Attacker dribbles freely; a 'shadow' defender stays an arm's length away and mirrors movement without reaching for the ball, just to get the dribbler used to pressure nearby.",
    "coach": "Keep your body between the ball and the defender at all times",
    "easier": "Defender stays further back",
    "harder": "Defender allowed to get closer",
    "chaos": "Added defender/pressure",
    "setup": "Pairs spread out across a grid roughly 15m x 15m for the whole class, one ball per pair, each pair given about 3m x 3m of working space.",
    "howTo": [
     "One partner (the attacker) dribbles freely within their pair's space while the other partner (the shadow) stays about an arm's length away.",
     "The shadow mirrors the attacker's movement closely but must keep their hands to themselves at all times — no reaching for the ball yet.",
     "The attacker practises keeping their body between the ball and the shadow as they move, turning and shielding naturally as the shadow follows.",
     "Swap roles every 45-60 seconds so both partners get equal attacking and shadowing turns.",
     "Coach the key message: 'keep your body between the ball and the defender at all times.'",
     "For 'easier', the shadow stays further back; for 'harder', the shadow is allowed to get closer while still not reaching in."
    ]
   },
   {
    "name": "Shield & Switch",
    "desc": "Dribbler practises turning their back slightly to the defender and switching the ball to the far hand to shield it, using the non-dribbling arm (bent, not pushing) for balance and protection.",
    "coach": "Use your arm to feel where the defender is, not to push them away",
    "easier": "Defender stationary",
    "harder": "Defender moves side to side",
    "chaos": "Random constraint calls",
    "setup": "Same pairs and space as Shadow Dribble, one ball per pair, defender now allowed to move but never to reach for the ball.",
    "howTo": [
     "Demonstrate turning the back and shoulder slightly toward the defender while switching the ball to the hand furthest from them.",
     "The dribbler uses their free (non-dribbling) arm bent up for balance and awareness of where the defender is — not to push them away.",
     "Practise this shield-and-switch move slowly at first: dribbler turns, switches hands, and re-faces away from the defender.",
     "The defender stays stationary at first, then is allowed to shuffle side to side to make the dribbler adjust their shield angle.",
     "Coach the key message: 'use your arm to feel where the defender is, not to push them away.'",
     "For 'easier', keep the defender stationary; for 'harder', let the defender move side to side."
    ]
   },
   {
    "name": "1v1 Protect the Rock",
    "desc": "In a small square, one player dribbles and must protect the ball for a count of 10 seconds against a light-touch defender trying to tap it away, then swap roles.",
    "coach": "Change of pace and shielding beat trying to out-muscle a defender",
    "easier": "Bigger square, defender starts 2m back",
    "harder": "Smaller square, defender close from the start",
    "chaos": "Mild opposition + decision-making",
    "setup": "Mark small squares roughly 4m x 4m, one per pair, with one ball per pair — enough squares spread out so pairs don't interfere with each other.",
    "howTo": [
     "One player dribbles inside the square and must protect the ball for a count of 10 seconds against a light-touch defender trying to tap it away (no grabbing).",
     "The defender may only use an open hand to tap at the ball, never grab or make body contact with the dribbler.",
     "If the dribbler loses the ball or steps outside the square, the count restarts from zero.",
     "After the 10-second count is reached (or attempted), swap roles so both students get a turn dribbling and defending.",
     "Coach the key message: 'change of pace and shielding beat trying to out-muscle a defender.'",
     "For 'easier', use a bigger square and start the defender 2m back; for 'harder', use a smaller square with the defender close from the start."
    ]
   }
  ],
  "big": {
   "name": "Keep-Away Basketball",
   "desc": "3v3 or 4v4, small court, no hoops — a team scores a point for every 5 consecutive dribbles/passes kept under pressure without the other team touching the ball. Protecting the ball under pressure directly determines success.",
   "setup": "Split the class into groups of 6-8 for 3v3 or 4v4 games on a small marked court roughly 12m x 10m, no hoops needed — just cones marking the court edges. One ball per game, bibs in two colours to tell teams apart.",
   "howTo": [
    "Explain the scoring rule: a team scores a point for every 5 consecutive dribbles or passes they keep under pressure without the other team touching the ball.",
    "Play begins with one team in possession; players use shielding, hand-swaps, and support passing to protect the ball from the other team's hands-off pressure.",
    "If the ball is knocked away, intercepted, or goes out of the court area, possession switches to the other team and their own count starts from zero.",
    "Call out the running count out loud as a team reaches it ('that's 5 — point!') so the game stays fast and the reward for good protection is obvious.",
    "Rotate players on and off every few minutes if numbers are tight, so everyone gets even game time.",
    "Keep reminding both teams: hands-off pressure only — tapping at the ball, never grabbing or pushing."
   ]
  },
  "discussion": [
   "What helped you protect the ball when a defender was close?",
   "How did shielding with your body (not your hands) make a difference?",
   "What did you notice about giving your partner a fair, honest challenge?"
  ],
  "lookfors": [
   "Keeps body between the ball and defender",
   "Uses the non-dribbling arm to shield, not push",
   "Changes pace/direction rather than freezing under pressure"
  ],
  "inclusion": "Start defenders further back (2m) and only close in once the dribbler is confident; allow a 'no-defender' version for students still consolidating basic control.",
  "skillBreakdown": [
   {
    "step": "Keep your body between the ball and the defender at all times.",
    "why": "Uses your body as a shield so the defender must go around you."
   },
   {
    "step": "Use your non-dribbling arm, bent not pushing, to feel where the defender is.",
    "why": "Gives you awareness without needing to look back, and keeps the shield legal."
   },
   {
    "step": "Change pace or direction rather than trying to power through.",
    "why": "A change of pace beats a defender more reliably than strength alone."
   }
  ]
 },
 {
  "n": 4,
  "block": 1,
  "title": "Two-Way Passer",
  "focus": "Chest & bounce passing accuracy",
  "walt": "We are learning to throw an accurate chest pass and bounce pass with two hands.",
  "wilf": [
   "I can push a chest pass out from my chest with two hands, stepping toward my target",
   "I can bounce a pass so it arrives at my partner's waist height"
  ],
  "nzc": "Strand B · Managing self",
  "value": "Pānga",
  "valueText": "Thinking ahead about where your pass needs to land so your partner can catch it easily, not just where it's easiest to throw from.",
  "equipment": "1 ball per pair, cones for targets",
  "safety": "Passing lanes should not cross other pairs' lanes — space grids out",
  "games": [
   {
    "name": "Wall of Targets",
    "desc": "Partners chest pass through a small cone gate at chest height from increasing distances, scoring a point each time the ball goes cleanly through.",
    "coach": "Thumbs behind the ball, push straight out, step toward your target as you release",
    "easier": "Wider gate, closer distance",
    "harder": "Narrower gate, further apart",
    "chaos": "Scoring streaks",
    "setup": "Pairs spread out with roughly 3-4m between partners, one ball per pair, plus a set of 2 cones per pair set upright about 1m apart at chest height (or use a hoop/marker as the 'gate') to pass through.",
    "howTo": [
     "Demonstrate the chest pass: thumbs behind the ball, push straight out from the chest, stepping toward the target as the ball is released.",
     "Partners stand either side of the cone gate and take turns chest-passing the ball cleanly through the gate to each other.",
     "Score a point each time the ball passes cleanly through the gate without touching a cone.",
     "Every 4-5 successful passes, take one step further apart to increase the challenge.",
     "Coach the key message: 'thumbs behind the ball, push straight out, step toward your target as you release.'",
     "For 'easier', widen the gate and stand closer together; for 'harder', narrow the gate and stand further apart."
    ]
   },
   {
    "name": "Bounce to a Target",
    "desc": "Partners bounce pass to each other, aiming for the ball to bounce roughly two-thirds of the way between them and rise to waist height.",
    "coach": "Push down and out, not straight down — aim for the bounce spot, not your partner's feet",
    "easier": "Closer distance, slower pace",
    "harder": "Greater distance, add a target hoop for the bounce spot",
    "chaos": "Bonus objectives",
    "setup": "Same pairs and spacing as Wall of Targets, one ball per pair, with an optional hoop or cone marker placed roughly two-thirds of the way between partners as a bounce-spot target.",
    "howTo": [
     "Demonstrate the bounce pass: push the ball down and out (not straight down), aiming for a spot roughly two-thirds of the way to your partner so it rises to about waist height when it arrives.",
     "Partners take turns bounce-passing to each other, aiming for the marked bounce spot if one is used.",
     "If the ball bounces too close or too far and arrives too high or too low, the pair adjusts their aim on the next attempt rather than repeating the same mistake.",
     "Coach the key message: 'push down and out, not straight down — aim for the bounce spot, not your partner's feet.'",
     "For 'easier', stand closer together and pass at a slower pace; for 'harder', stand further apart and require the bounce to land inside a hoop marker."
    ]
   },
   {
    "name": "Choose Your Pass",
    "desc": "Partners alternate between chest and bounce passes based on a called instruction, building quick recognition of when to use each.",
    "coach": "Decide the pass type before you catch, not after",
    "easier": "Fewer calls, more time to decide",
    "harder": "Quick-fire calls",
    "chaos": "Random constraint calls",
    "setup": "Same pairs and spacing as the earlier two games, one ball per pair, no extra equipment needed since the call comes verbally from a partner or the teacher.",
    "howTo": [
     "Explain that partners will alternate between chest and bounce passes, but only on a called instruction ('chest!' or 'bounce!').",
     "One partner calls the pass type just before throwing; the thrower must execute that exact pass type correctly.",
     "Swap who is calling after every 4-5 passes so both partners practise deciding and both practise reacting to a call.",
     "If the wrong pass type is thrown, the pair simply resets and tries the same call again.",
     "Coach the key message: 'decide the pass type before you catch, not after.'",
     "For 'easier', use fewer calls with more time to decide; for 'harder', fire calls quickly one after another."
    ]
   }
  ],
  "big": {
   "name": "Two-Pass-Type Basketball",
   "desc": "4v4, small court, no hoops — teams must use both a chest pass and a bounce pass at least once during a passing sequence before scoring, encouraging a full passing toolkit.",
   "setup": "Groups of 8 for 4v4 games on a small court roughly 15m x 10m, no hoops needed. One ball per game, bibs in two colours to tell teams apart.",
   "howTo": [
    "Explain the rule: before a team can score (reaching a marked scoring zone or completing a set passing sequence), they must use both a chest pass and a bounce pass somewhere in that same possession.",
    "Play begins with one team in possession, moving the ball with a mix of passing and light movement, no dribble-heavy play required.",
    "If the ball is turned over before both pass types have been used, possession simply switches to the other team and their own sequence starts fresh.",
    "Encourage players to call out which pass type they're about to throw, connecting back to the communication practised in Choose Your Pass.",
    "Rotate players through every few minutes so everyone gets even game time.",
    "Keep celebrating any successful sequence that uses both pass types, regardless of whether it leads to a score."
   ]
  },
  "discussion": [
   "What technique helped your passes go where you wanted?",
   "When might a bounce pass be more useful than a chest pass?",
   "What happens to the game when passes aren't accurate?"
  ],
  "lookfors": [
   "Thumbs behind the ball, not underneath or beside it",
   "Steps toward the target as they release",
   "Chooses an appropriate pass type for the distance/situation"
  ],
  "inclusion": "Shorten distances for students still building arm strength/technique; the gate/target structures scale naturally by moving cones closer.",
  "skillBreakdown": [
   {
    "step": "Grip the ball with thumbs behind it, fingers spread.",
    "why": "Even contact gives a consistent, accurate release."
   },
   {
    "step": "Step toward your target as you push the pass out.",
    "why": "The step adds power and directs the pass on line."
   },
   {
    "step": "For a bounce pass, aim the ball to bounce roughly two-thirds of the way to the target.",
    "why": "This brings the ball up to a comfortable waist-height catch."
   }
  ]
 },
 {
  "n": 5,
  "block": 1,
  "title": "Catch & Turn",
  "focus": "Receiving a pass & pivoting",
  "walt": "We are learning to receive a pass with strong hands and pivot on our landing foot to protect the ball.",
  "wilf": [
   "I can show target hands and catch with both hands before bringing the ball in close",
   "I can pivot on one foot without dragging or lifting it"
  ],
  "nzc": "Strand B · Managing self",
  "value": "Aroha",
  "valueText": "Being patient with yourself and encouraging teammates while catching and pivoting confidence builds — everyone's hands and feet look different at first.",
  "equipment": "1 ball per pair, cones",
  "safety": "Passes should stay below head height; no contact during pivoting practice — hands-off only",
  "games": [
   {
    "name": "Target Hands Catch",
    "desc": "Partners pass; the receiver must show clear target hands (fingers spread, hands up) before every pass is thrown, then bring the ball in close to the body.",
    "coach": "Show your hands early so your partner has an obvious target to aim for",
    "easier": "Slower passes",
    "harder": "Passes with more pace",
    "chaos": "Random constraint calls",
    "setup": "Pairs spread out roughly 3-4m apart, one ball per pair, enough space between pairs that passes don't cross into a neighbour's lane.",
    "howTo": [
     "Demonstrate 'target hands' — fingers spread, hands held up and out as a clear target — before every pass is thrown.",
     "The receiver shows target hands before their partner throws; the passer waits for that signal before releasing the pass.",
     "On the catch, the receiver brings the ball in close to the body immediately rather than leaving it out at arm's length.",
     "Swap who is receiving after every 4-5 passes so both partners get equal practice showing target hands and catching.",
     "Coach the key message: 'show your hands early so your partner has an obvious target to aim for.'",
     "For 'easier', throw passes more slowly; for 'harder', add more pace to the pass."
    ]
   },
   {
    "name": "Static Pivot Practice",
    "desc": "Students catch a gentle pass, land, and practise pivoting 180 degrees on their landing foot without dragging it, then pass.",
    "coach": "Keep your pivot foot glued to the same spot as you spin your body around it",
    "easier": "Smaller pivot (90°)",
    "harder": "Full 180° pivot, added speed",
    "chaos": "Random constraint calls",
    "setup": "Same pairs and spacing, one ball per pair, plenty of room around each pair so a 180-degree pivot doesn't clip a neighbour.",
    "howTo": [
     "Demonstrate landing on catching the ball, then pivoting 180 degrees on the landing foot while keeping that same foot glued to the spot.",
     "One partner passes gently; the receiver catches, lands, and pivots a full 180 degrees without dragging or lifting their pivot foot.",
     "Once turned, the receiver passes back to their partner from the new facing direction.",
     "If the pivot foot drags or lifts, the pair repeats that same pivot attempt rather than moving on.",
     "Coach the key message: 'keep your pivot foot glued to the same spot as you spin your body around it.'",
     "For 'easier', practise a smaller 90-degree pivot; for 'harder', use the full 180-degree pivot with added speed."
    ]
   },
   {
    "name": "Shield & Pivot",
    "desc": "A shadow defender stands nearby (not touching) while the receiver catches, lands, and pivots to shield the ball with their body before passing away from the defender.",
    "coach": "Keep your body and the ball between you and the defender as you turn",
    "easier": "Defender further away",
    "harder": "Defender allowed to move around the pivoter",
    "chaos": "Added defender/pressure",
    "setup": "Same pairs, plus one extra student per pair acting as a light shadow defender (groups of 3 rotating through), one ball shared within each trio.",
    "howTo": [
     "The passer throws gently to the receiver, who catches and lands as practised in Static Pivot Practice.",
     "A shadow defender stands nearby without touching, applying visual pressure only — no reaching in.",
     "The receiver pivots to shield the ball with their body, keeping it and their body between themselves and the defender, before passing away from the defender's side.",
     "Rotate roles (passer, receiver, defender) every couple of minutes so everyone practises each part.",
     "Coach the key message: 'keep your body and the ball between you and the defender as you turn.'",
     "For 'easier', keep the defender further away; for 'harder', let the defender move around the pivoter."
    ]
   }
  ],
  "big": {
   "name": "Secure Catch Basketball",
   "desc": "4v4, small court, light shadow defence only — teams score for maintaining clean, secure catches and legal pivots under mild pressure, building toward full defending in later lessons.",
   "setup": "Groups of 8 for 4v4 games on a small court roughly 15m x 10m, no hoops needed, one ball per game, bibs in two colours, with light shadow defenders only (no ball contact).",
   "howTo": [
    "Explain the focus: this game rewards clean, secure catches and legal pivots rather than scoring — defenders may only shadow, not touch the ball.",
    "Play begins with one team passing the ball around, using target hands and clean pivots practised in today's games to maintain possession under mild pressure.",
    "Every catch should be followed, where appropriate, by a controlled pivot to shield the ball before the next pass.",
    "If a catch is fumbled or a pivot foot drags, possession simply resets to the nearest teammate so play keeps flowing without a big stoppage.",
    "Rotate which four students are on court every few minutes so everyone gets even game time.",
    "Keep coaching feedback focused on catching and pivoting technique — this lesson builds toward full defending in Block 3."
   ]
  },
  "discussion": [
   "What did showing target hands do to help your partner pass to you?",
   "How did pivoting help you protect the ball after catching it?",
   "What made pivoting under a bit of pressure trickier?"
  ],
  "lookfors": [
   "Shows clear target hands before the ball arrives",
   "Catches with two hands and secures the ball close to the body",
   "Pivots without dragging or lifting the landing foot"
  ],
  "inclusion": "Allow a slightly underinflated or softer ball for students who find catching difficult, so the pivoting focus isn't lost to a hard catch.",
  "skillBreakdown": [
   {
    "step": "Show target hands early so the passer has a clear aim.",
    "why": "Speeds up the passer's decision and improves catch accuracy."
   },
   {
    "step": "Catch with both hands and bring the ball in close.",
    "why": "Secures possession immediately against a defender's reach."
   },
   {
    "step": "Keep your pivot foot glued to the floor while turning your body around it.",
    "why": "This is the basketball travelling rule — lifting or dragging the pivot foot is a violation."
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
    "coach": "Move immediately after passing, don't watch the ball",
    "easier": "Walk instead of jog",
    "harder": "Add a defender jogging alongside (not intercepting yet)",
    "chaos": "Role rotation",
    "setup": "Pairs spread along a marked channel roughly 10m long and 2m wide, one ball per pair, with a line of 3-4 cones down the middle marking spots for Player B to receive at.",
    "howTo": [
     "Player A passes to Player B, then immediately jogs to a new position further down the channel rather than standing still and admiring the pass.",
     "Player B controls the ball and passes it to Player A's new position, then moves themselves to a new spot.",
     "Repeat this pass-and-move pattern all the way down the channel and back.",
     "If a pass is misjudged because a player hasn't moved yet, the pair simply resets at their last good position and continues.",
     "Coach the key message: 'move immediately after passing, don't watch the ball.'",
     "For 'easier', walk through the pattern instead of jogging; for 'harder', add a defender jogging alongside without intercepting yet."
    ]
   },
   {
    "name": "Give and Go Gates",
    "desc": "In trios, two attackers combine give-and-go passes to move the ball through a series of gates down the court, racing another trio.",
    "coach": "Pass early, before you're under real pressure",
    "easier": "Wider gates/no time pressure",
    "harder": "Narrower gates, timed race",
    "chaos": "Beat the clock, head-to-head mirror",
    "setup": "Trios spread along a course of 4-5 cone gates (each gate 1.5-2m wide) set out over roughly 15-20m, one ball per trio, with two parallel courses if space allows so trios can race.",
    "howTo": [
     "Explain that two attackers in the trio must combine give-and-go passes (pass then move into space) to move the ball through each gate in turn.",
     "The third student acts as timekeeper/scorekeeper for their trio, or rotates in after the first run.",
     "Attackers move the ball gate to gate purely by passing — no dribbling through the gates — moving into space immediately after every pass.",
     "The trio completes the course when the ball has passed cleanly through every gate; race another trio if courses are side by side.",
     "Coach the key message: 'pass early, before you're under real pressure.'",
     "For 'easier', use wider gates with no time pressure; for 'harder', narrow the gates and time the run."
    ]
   },
   {
    "name": "1-2 vs Shadow Defender",
    "desc": "Pairs attempt a give-and-go against one light-touch defender who can only intercept after the first pass is played (delayed pressure).",
    "coach": "The 'give' player should move into space immediately, not just stand and admire the pass",
    "easier": "Defender starts further back",
    "harder": "Defender allowed to close immediately",
    "chaos": "Added defender/pressure",
    "setup": "Groups of 3 (two attackers, one defender) spread across a grid roughly 8m x 8m, one ball per group, enough grids for the whole class working at once.",
    "howTo": [
     "Explain the rule: the defender may only intercept after the first pass has been played, not on the first attacker's initial touch (delayed pressure).",
     "The two attackers attempt a give-and-go — one passes, immediately moves into space, and looks to receive the return pass past the defender.",
     "If the give-and-go succeeds (the moving player receives the ball past the defender), reset and try again from the start.",
     "If the defender intercepts or the pass is misplaced, the group resets with attackers and defender swapping who defends.",
     "Coach the key message: 'the give player should move into space immediately, not just stand and admire the pass.'",
     "For 'easier', the defender starts further back; for 'harder', the defender is allowed to close in immediately."
    ]
   }
  ],
  "big": {
   "name": "3v3 + 1 Target Player Basketball",
   "desc": "Small-sided game with small hoops/targets; encourage give-and-go combinations as a way to beat defenders, especially near the target player position. Coach highlights any successful give-and-go in play.",
   "setup": "Groups of 7-8 for a 3v3 + 1 target player game on a court roughly 15m x 12m with small hoops or cone-marked target zones at each end, one ball per game, bibs in two colours.",
   "howTo": [
    "Explain the target player role: one neutral or rotating player stands near each scoring target and can be passed to, but doesn't otherwise defend.",
    "Play begins with one team building possession, using give-and-go combinations (from today's games) to move past defenders and combine with the target player.",
    "Encourage attackers to look for the moving player after a pass, just as practised in the skill games, especially near the target player position.",
    "If a give-and-go move works and leads to a score or a clean pass to the target player, call it out ('nice give-and-go!') so the whole group sees it recognised.",
    "Rotate the target player role and defending/attacking teams every few minutes so everyone experiences each part.",
    "Keep the coaching focus on spotting and rewarding successful give-and-go combinations, not just final scores."
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
    "step": "Pass, then move immediately into new space.",
    "why": "Staying still after passing removes you as a future option and makes you easy to guard."
   },
   {
    "step": "Time your run to receive the return pass in stride.",
    "why": "Arriving too early or late forces an awkward, stationary catch."
   },
   {
    "step": "Communicate ('give and go!') so your teammate knows to return it.",
    "why": "Speeds up decision-making in a fast-moving situation."
   }
  ]
 },
 {
  "n": 7,
  "block": 2,
  "title": "Perfect Form",
  "focus": "Shooting form (set shot / lay-up steps)",
  "walt": "We are learning correct shooting technique for a set shot, and the basic footwork steps for a lay-up.",
  "wilf": [
   "I can hold a balanced set shot stance with the ball above my head, elbow in",
   "I can perform the simple 'step-step-shoot' footwork pattern for a lay-up"
  ],
  "nzc": "Strand B · Managing self",
  "value": "Manaaki",
  "valueText": "Practising a skill faithfully, with focus and effort, even when it doesn't work first time — using your talent well takes repetition.",
  "equipment": "Balls, hoops/targets, cones",
  "safety": "Shooters should have clear space in front of them; rotate turns so no one is standing directly under the hoop while others shoot",
  "games": [
   {
    "name": "Balanced Stance Practice",
    "desc": "Students practise the set shot stance (feet shoulder-width, ball held above the head with fingers spread, elbow tucked in) without shooting yet, focusing purely on set-up.",
    "coach": "Elbow in, eyes on the target, ball resting on your fingertips not your palm",
    "easier": "Wider stance, more time to set up",
    "harder": "Quicker set-up, timed",
    "chaos": "Random constraint calls",
    "setup": "Students spread out individually across the space, one ball per student, each with about 2m of personal room to set up their shooting stance without a hoop needed yet.",
    "howTo": [
     "Demonstrate the set shot stance: feet shoulder-width apart, ball held above the head resting on the fingertips (not the palm), elbow tucked in under the ball, eyes on an imaginary target.",
     "Students set up in this stance individually, holding the position (without shooting) for a few seconds while checking their own elbow and hand position.",
     "Walk around checking form — common fixes are elbow flaring out or the ball resting flat on the palm instead of the fingertips.",
     "Students reset and repeat the stance-only set-up several times, focusing purely on getting the shape right before any shooting is added later in the lesson.",
     "Coach the key message: 'elbow in, eyes on the target, ball resting on your fingertips not your palm.'",
     "For 'easier', allow a wider stance and more time to set up; for 'harder', time how quickly they can set up correctly."
    ]
   },
   {
    "name": "Step-Step-Shoot Walkthrough",
    "desc": "Students walk through the basic lay-up footwork pattern (two controlled steps toward the hoop, then a gentle release) without a defender, focusing purely on the foot sequence.",
    "coach": "Same-side foot as your shooting hand takes the last, higher step",
    "easier": "Slower walk-through, no ball at first",
    "harder": "Add the ball and a light jog approach",
    "chaos": "Random constraint calls",
    "setup": "Students spread out individually with about 3-4m of clear space each to walk through footwork, no ball needed at first, then one ball per student once added.",
    "howTo": [
     "Demonstrate the basic lay-up footwork: two controlled steps toward the hoop (or an imaginary hoop), with the same-side foot as the shooting hand taking the last, higher step, followed by a gentle upward release.",
     "Students first walk through the two-step pattern with no ball, focusing purely on foot sequence and rhythm.",
     "Once the footwork feels comfortable, add the ball: students walk through the same two steps while holding the ball, finishing with a soft release motion (no jumping or shooting at a real hoop yet if space is tight).",
     "Repeat the walkthrough several times at walking pace before any speed is added.",
     "Coach the key message: 'same-side foot as your shooting hand takes the last, higher step.'",
     "For 'easier', keep it a slow walkthrough with no ball at first; for 'harder', add the ball and a light jog approach."
    ]
   },
   {
    "name": "Shot Streak Challenge",
    "desc": "Small groups rotate through a shooting station, taking quick-fire set shots from a fixed spot; the group tracks consecutive 'clean technique' shots as a team streak (technique counts even if it misses).",
    "coach": "Reset your technique each shot, don't chase power",
    "easier": "Closer range, bigger target",
    "harder": "Further range, smaller target zones worth bonus points",
    "chaos": "Scoring streaks, bonus objectives",
    "setup": "Small groups of 4-5 rotate through shooting stations at hoops/targets, one ball per group, with a fixed shooting spot marked by a cone at each station.",
    "howTo": [
     "Each student takes a quick-fire set shot from the fixed spot, one after another, cycling through the group.",
     "The group tracks a shared 'clean technique' streak — a shot counts toward the streak if the stance and release looked technically correct, even if it misses the hoop.",
     "If a shot breaks technique (elbow flares, rushed release), the streak resets to zero and the group starts counting again.",
     "Rotate through the group several times, celebrating when the group beats its own best streak.",
     "Coach the key message: 'reset your technique each shot, don't chase power.'",
     "For 'easier', shoot from closer range at a bigger target; for 'harder', shoot from further out with smaller target zones worth bonus points."
    ]
   }
  ],
  "big": {
   "name": "Small-Sided Shooting Basketball",
   "desc": "4v4 with hoops/targets; emphasis in coaching feedback is on clean set shot or lay-up technique, not just outcome — celebrate good technique attempts even if they miss.",
   "setup": "Groups of 8 for 4v4 games on a court with hoops or marked targets at each end, one ball per game, bibs in two colours.",
   "howTo": [
    "Explain the coaching focus for this game: clean set shot or lay-up technique matters more than whether the shot actually goes in.",
    "Play a normal small-sided game, with both teams attacking their target hoop and defending the other using skills built up so far in the unit.",
    "Whenever a player attempts a shot with good technique (balanced stance or correct lay-up footwork), the coach calls it out and celebrates it regardless of the outcome.",
    "If a shot misses but technique was clean, treat it exactly like a successful shot in terms of praise and feedback.",
    "Rotate players through every few minutes so everyone gets even game time and shooting opportunities.",
    "Keep reminding players: good technique on every attempt beats rushing for power or forcing a shot."
   ]
  },
  "discussion": [
   "What does 'good technique' feel like when you shoot well?",
   "What part of your shooting or lay-up technique are you most proud of today?",
   "What will you keep practising?"
  ],
  "lookfors": [
   "Holds a balanced stance with the ball above the head, elbow in",
   "Uses the step-step-shoot footwork pattern for a lay-up",
   "Follows through with fingers, not the palm"
  ],
  "inclusion": "Use a lower hoop or closer distance for students building arm strength or confidence around shooting; success is measured by technique, not outcome.",
  "skillBreakdown": [
   {
    "step": "Hold a balanced stance, ball above the head, elbow tucked in.",
    "why": "A consistent base and elbow position is what makes a shot repeatable."
   },
   {
    "step": "Use the step-step-shoot footwork pattern for a lay-up.",
    "why": "This footwork pattern is the legal, balanced way to approach a lay-up."
   },
   {
    "step": "Follow through with fingers, not the palm.",
    "why": "Controls the ball's backspin and improves accuracy."
   }
  ]
 },
 {
  "n": 8,
  "block": 2,
  "title": "Spot Shooter",
  "focus": "Shooting accuracy from varied spots",
  "walt": "We are learning to shoot accurately from a range of spots around the hoop, not just one favourite position.",
  "wilf": [
   "I can choose a target area before I shoot",
   "I can adjust my technique slightly depending on my distance and angle to the hoop"
  ],
  "nzc": "Strand B · Thinking",
  "value": "Pānga",
  "valueText": "Thinking ahead about where your shot will have the most impact rather than just reacting or always shooting from the same spot.",
  "equipment": "Balls, hoops/targets, cones marking shooting spots",
  "safety": "Rotate shooting spots so no one crosses in front of another shooter mid-attempt",
  "games": [
   {
    "name": "Five Spot Shootout",
    "desc": "Students rotate through five marked spots around the hoop (varying angle and distance), taking one shot from each before rotating.",
    "coach": "Reset your stance for each new spot — don't reuse the same angle from a different position",
    "easier": "Spots closer together, closer to the hoop",
    "harder": "Spots further out, wider angles",
    "chaos": "Scoring streaks",
    "setup": "Mark five shooting spots around each hoop/target using cones — varying both distance and angle — one ball per student or pair sharing a hoop, enough hoops/targets for small groups to rotate through.",
    "howTo": [
     "Walk students through the five marked spots, pointing out how each has a different angle and distance to the hoop.",
     "Students take one shot from Spot 1, then move to Spot 2 and shoot, continuing around all five spots in order.",
     "Encourage a quick reset of stance and aim at each new spot rather than rushing straight into the shot.",
     "Once all five spots are done, the student (or pair) rotates out and the next student begins the same sequence.",
     "Coach the key message: 'reset your stance for each new spot — don't reuse the same angle from a different position.'",
     "For 'easier', place spots closer together and nearer the hoop; for 'harder', place spots further out at wider angles."
    ]
   },
   {
    "name": "Call Your Spot",
    "desc": "A partner calls out which of the five spots to shoot from next, building quick adaptation between different shooting angles.",
    "coach": "Decide your target and adjust your feet before you catch the pass",
    "easier": "Slower calls, more time to reset",
    "harder": "Quick-fire calls between spots",
    "chaos": "Random constraint calls",
    "setup": "Same five marked spots per hoop, students working in pairs, one ball per pair, one partner calling while the other shoots.",
    "howTo": [
     "One partner calls out which of the five spots to shoot from next (e.g. 'Spot 3!'), rather than the shooter choosing their own order.",
     "The shooter moves to that spot, resets their stance and aim, and takes the shot before the next call comes.",
     "Swap roles after 5-6 calls so both partners get equal shooting and calling turns.",
     "If the shooter moves to the wrong spot, they simply correct and shoot from the right one before the next call.",
     "Coach the key message: 'decide your target and adjust your feet before you catch the pass.'",
     "For 'easier', call more slowly with time to reset; for 'harder', fire calls quickly between spots."
    ]
   },
   {
    "name": "Spot Streak Challenge",
    "desc": "Small groups compete to make the most clean shots across all five spots combined within a time limit, encouraging consistency everywhere, not just one strong spot.",
    "coach": "Don't rush your best spot — every spot deserves the same careful technique",
    "easier": "Fewer spots, more time",
    "harder": "All five spots, tighter time limit",
    "chaos": "Beat the clock, bonus objectives",
    "setup": "Small groups of 3-4 share a hoop with the same five marked spots, one ball per group, with a stopwatch or set time limit (e.g. 3 minutes) for the whole activity.",
    "howTo": [
     "Explain the challenge: the group works together to make as many clean shots as possible across all five spots combined within the time limit.",
     "Students rotate through the group, each taking a shot from a spot of their choice, then moving aside for the next teammate.",
     "Every made shot from any spot adds to the group's combined total — encourage consistency across all spots rather than only shooting from a favourite one.",
     "Keep a running tally out loud so the group knows how they're tracking against the clock.",
     "Coach the key message: 'don't rush your best spot — every spot deserves the same careful technique.'",
     "For 'easier', use fewer spots and more time; for 'harder', use all five spots with a tighter time limit."
    ]
   }
  ],
  "big": {
   "name": "Spot Value Basketball",
   "desc": "4v4 with marked shooting spots worth different point values (further/harder angles worth more) — teams choose which spots to attack based on what's open, rewarding accuracy from a range of positions.",
   "setup": "Groups of 8 for 4v4 games on a court with hoops/targets, each with 5 marked shooting spots worth different point values (closer/easier spots worth less, further/harder angles worth more), one ball per game, bibs in two colours.",
   "howTo": [
    "Explain the scoring system: shots made from further or harder-angle spots earn more points than closer, easier spots, based on today's five-spot markings.",
    "Play a normal small-sided game, with both teams choosing which spots to attack based on what space and angle the defence gives up.",
    "Encourage attacking teams to read the defence and select a spot that's open, rather than always driving for the same easy spot.",
    "Keep score visibly (a simple tally on a whiteboard or called out loud) so students see the value of range and accuracy over just getting close.",
    "Rotate players through every few minutes so everyone gets even game time.",
    "Coach highlights good shot selection — choosing an open spot with good value — as much as the shot itself going in."
   ]
  },
  "discussion": [
   "Which spot did you find easiest, and which was hardest? Why do you think that is?",
   "What did you adjust about your technique from different spots?",
   "How did thinking ahead about your target area help your shooting?"
  ],
  "lookfors": [
   "Adjusts stance/angle for different spots",
   "Chooses a target area before shooting",
   "Maintains consistent technique across varied positions"
  ],
  "inclusion": "Reduce the number of spots or move them closer to the hoop for students building confidence; the five-spot idea can scale down to three for a simpler version.",
  "skillBreakdown": [
   {
    "step": "Reset your stance fully for every new shooting spot.",
    "why": "Reusing an old angle from a new position throws off your aim."
   },
   {
    "step": "Choose your target area before you shoot.",
    "why": "Aiming at a specific spot is more accurate than shooting at the whole hoop generally."
   },
   {
    "step": "Adjust your technique slightly for distance and angle, not your whole shot.",
    "why": "Small adjustments keep your shot consistent across positions."
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
   "I can dribble into space, then choose to pass or shoot based on what's open",
   "I can move from a dribble into a shot without stopping awkwardly"
  ],
  "nzc": "Strand B · Thinking",
  "value": "Aroha",
  "valueText": "Understanding how your individual skills (dribble, pass, shoot) fit together with your team's play for a shared outcome.",
  "equipment": "Balls, hoops/targets, cones, bibs",
  "safety": "Keep games small-sided (3v3 max) so the combined sequence comes thick and fast without overcrowding",
  "games": [
   {
    "name": "Dribble-Pass-Shoot Drill",
    "desc": "Player dribbles toward the hoop, then either passes to a moving teammate or pulls up for a shot, all in one continuous sequence, walked through slowly first.",
    "coach": "Each part flows into the next — don't pause awkwardly between the dribble and your decision",
    "easier": "Slower pace, more time between parts",
    "harder": "Faster pace, less time",
    "chaos": "Random constraint calls",
    "setup": "Students spread individually or in small groups approaching a hoop/target from roughly 8-10m out, one ball per student, cones marking the starting point and a decision point about 4m from the hoop.",
    "howTo": [
     "Walk through the sequence slowly first: dribble from the start cone toward the hoop, then at the decision-point cone either pass to a moving teammate or pull up for a shot.",
     "Students dribble in under control, keeping the ball low, and make their decision only once they reach the decision-point cone.",
     "If passing, the receiving teammate should already be moving into space; if shooting, the student sets their stance quickly using today's earlier shooting technique.",
     "Repeat the sequence several times, alternating between the pass option and the shoot option so both get practised.",
     "Coach the key message: 'each part flows into the next — don't pause awkwardly between the dribble and your decision.'",
     "For 'easier', slow the pace down with more time between parts; for 'harder', increase pace and reduce decision time."
    ]
   },
   {
    "name": "2v1 Combo Challenge",
    "desc": "Two attackers against one defender — the ball-handler must combine a dribble, and then a pass or shot, to beat the defender's numbers disadvantage.",
    "coach": "If the shot isn't on, the extra pass usually is — read it quickly",
    "easier": "Wider grid, slower defender",
    "harder": "Narrower grid, faster defender",
    "chaos": "Mild opposition + decision-making",
    "setup": "Groups of 3 (two attackers, one defender) in a grid roughly 10m x 8m with a small hoop or target at one end, one ball per group, enough grids for the whole class.",
    "howTo": [
     "Explain the numbers advantage: two attackers face only one defender, so there should always be an open option somewhere.",
     "The ball-handler dribbles to engage the defender, then reads whether to pass to the free teammate or shoot themselves.",
     "If the defender commits to the ball-handler, the pass to the open teammate should usually be the better read; if the defender hangs back, a shot may be on.",
     "After each attempt (score or turnover), rotate which student defends so everyone gets attacking and defending turns.",
     "Coach the key message: 'if the shot isn't on, the extra pass usually is — read it quickly.'",
     "For 'easier', use a wider grid with a slower defender; for 'harder', use a narrower grid with a faster defender."
    ]
   },
   {
    "name": "Continuous Combo Game",
    "desc": "Small-sided game where every scoring attempt must be preceded by a visible dribble-then-decision sequence, rewarding whichever team keeps combining the skills successfully.",
    "coach": "Always be thinking one step ahead — dribble, then what's my best option?",
    "easier": "Bigger grid, more time",
    "harder": "Smaller grid, faster decisions",
    "chaos": "Beat the clock, scoring streaks",
    "setup": "Small-sided groups (3v3 or 4v4) in a grid roughly 12m x 10m with a hoop or target at each end, one ball per game, bibs in two colours.",
    "howTo": [
     "Explain the rule: every scoring attempt must be preceded by a visible dribble followed by a decision (pass or shoot) — no scoring straight off a stationary catch.",
     "Play a small-sided game where teams look to combine dribbling to create an opening, then either pass to a better-placed teammate or shoot themselves.",
     "If a team scores without the required dribble-then-decision sequence, the score doesn't count and possession resets to the other team.",
     "Keep play continuous, resetting quickly after any stoppage so the combination habit gets lots of repetitions.",
     "Coach the key message: 'always be thinking one step ahead — dribble, then what's my best option?'",
     "For 'easier', use a bigger grid with more time; for 'harder', use a smaller grid with faster decisions required."
    ]
   }
  ],
  "big": {
   "name": "4v3 Combination Basketball",
   "desc": "Attacking team has a numbers advantage (4v3); success depends on combining today's three skills — dribbling to create an opening, then reading whether to pass or shoot cleanly.",
   "setup": "Groups of 7 for a 4v3 game (attacking team has the extra player) on a court roughly 15m x 12m with a hoop or target, one ball per game, bibs in two colours to show which team is attacking.",
   "howTo": [
    "Explain the numbers advantage: the attacking team has four players against three defenders, so there should always be a free option if the ball moves well.",
    "The attacking team works the ball using dribbling to create openings, then reads whether to pass to a free teammate or shoot, exactly as practised in today's games.",
    "If the attack scores or the defence wins the ball back, rotate one attacker to become a defender (and vice versa) so teams stay fresh, or simply swap which team attacks after a set number of turns.",
    "Encourage defenders to communicate and cover the extra attacker as best they can, even though they're outnumbered.",
    "Coach highlights good combination play — dribble to create the opening, then a clean pass or shot — regardless of the final score.",
    "Rotate players through every few minutes so everyone experiences both the numbers-up attacking role and the numbers-down defending role."
   ]
  },
  "discussion": [
   "How did dribbling, passing, and shooting work together today?",
   "What happened when you tried to rush a decision instead of reading the situation?",
   "What's one moment you combined all three skills well?"
  ],
  "lookfors": [
   "Dribble creates a genuine opening, not just movement for its own sake",
   "Reads pass vs shoot appropriately",
   "Sequence flows without an awkward pause"
  ],
  "inclusion": "Reduce numbers (e.g. 1v0 with a feeder) for students still building confidence combining three skills at once, before scaling up to 2v1 or 4v3.",
  "skillBreakdown": [
   {
    "step": "Dribble with your head up to read what's actually open.",
    "why": "The sequence needs to respond to the game, not run on autopilot."
   },
   {
    "step": "Decide early whether you're passing or shooting so your body can prepare.",
    "why": "Last-second indecision leads to a rushed, poor-technique action."
   },
   {
    "step": "Move smoothly from one phase to the next without stopping the ball completely.",
    "why": "A stopped dribble gives defenders time to set up and close you down."
   }
  ]
 },
 {
  "n": 10,
  "block": 2,
  "title": "Pivot Escape",
  "focus": "Footwork — pivoting to escape pressure",
  "walt": "We are learning to use pivoting footwork to protect the ball and find an escape option when pressured.",
  "wilf": [
   "I can pivot in more than one direction to keep the ball away from a defender",
   "I can find a passing option while pivoting under pressure"
  ],
  "nzc": "Strand B · Managing self, Thinking",
  "value": "Mōhio",
  "valueText": "Looking after your opponent by defending fairly and safely, and understanding your own footwork choices when under pressure.",
  "equipment": "Balls, cones, bibs",
  "safety": "No contact — hands-off defending only; stay upright and controlled while pivoting",
  "games": [
   {
    "name": "Multi-Direction Pivot",
    "desc": "Students catch a pass, land, and practise pivoting in several directions (not just one 180° turn) around their landing foot, scanning for an imaginary passing option each time.",
    "coach": "Keep your pivot foot planted and let your body/eyes do the scanning",
    "easier": "Fewer pivot directions",
    "harder": "Full range of pivot directions, added speed",
    "chaos": "Random constraint calls",
    "setup": "Pairs spread out with roughly 2-3m of space each, one ball per pair, enough room around each pair to pivot freely in any direction without clipping a neighbour.",
    "howTo": [
     "One partner passes gently; the receiver catches, lands, and establishes their pivot foot as practised in earlier lessons.",
     "Instead of only one 180-degree turn, the receiver practises pivoting in several different directions in sequence (e.g. quarter-turn left, quarter-turn right, half-turn), each time as if scanning for an imaginary passing option.",
     "The pivot foot must stay planted through every direction change — only the body and free foot move around it.",
     "Swap roles after each student has had several pivot sequences so both get equal practice.",
     "Coach the key message: 'keep your pivot foot planted and let your body/eyes do the scanning.'",
     "For 'easier', practise fewer pivot directions; for 'harder', use the full range of directions with added speed."
    ]
   },
   {
    "name": "Pressure Pivot",
    "desc": "A shadow defender applies light, hands-off pressure while the receiver pivots to shield the ball and find a passing lane away from the defender.",
    "coach": "Pivot away from the defender's side, toward your open teammate",
    "easier": "Defender further away",
    "harder": "Defender allowed to move around the pivoter",
    "chaos": "Added defender/pressure",
    "setup": "Same pairs, plus one extra shadow defender per pair (trios rotating through), one ball shared within each trio, similar spacing to Multi-Direction Pivot.",
    "howTo": [
     "The passer throws to the receiver, who catches, lands, and establishes a pivot foot.",
     "A shadow defender applies light, hands-off pressure nearby — close enough to be a real presence, but never touching or reaching for the ball.",
     "The receiver pivots to shield the ball with their body and scans for a passing lane away from the defender's side before passing.",
     "Rotate roles (passer, receiver, defender) every couple of minutes so everyone practises each part.",
     "Coach the key message: 'pivot away from the defender's side, toward your open teammate.'",
     "For 'easier', the defender stays further away; for 'harder', the defender is allowed to move around the pivoter."
    ]
   },
   {
    "name": "Trapped Corner Escape",
    "desc": "Player receives the ball in a tight corner grid with a defender nearby and must pivot to find any legal passing option to escape the pressure, racing the clock.",
    "coach": "Stay calm — a good pivot buys you time to find an option",
    "easier": "Bigger corner grid, slower defender",
    "harder": "Tighter corner, quicker defender",
    "chaos": "Beat the clock, mild opposition + decision-making",
    "setup": "Mark a small corner grid roughly 3m x 3m using cones at one corner of the playing space, one ball and one defender per attacker, a stopwatch or simple count for timing.",
    "howTo": [
     "The attacker receives the ball while standing in the tight corner grid, with a defender positioned nearby applying hands-off pressure.",
     "Set a short time limit (e.g. 5-8 seconds) for the attacker to pivot and find any legal passing option to escape the pressure.",
     "The attacker uses pivoting and shielding from today's earlier games to protect the ball and locate an open passing lane before the time runs out.",
     "If the attacker successfully passes out within the time limit, that's a win for that attempt; if not, reset and try again with a fresh time count.",
     "Coach the key message: 'stay calm — a good pivot buys you time to find an option.'",
     "For 'easier', use a bigger corner grid with a slower defender; for 'harder', use a tighter corner with a quicker defender."
    ]
   }
  ],
  "big": {
   "name": "Pivot Under Pressure Basketball",
   "desc": "4v4 — every player who catches the ball must legally pivot at least once (protecting it from a nearby defender) before passing or shooting, reinforcing composed footwork under real pressure.",
   "setup": "Groups of 8 for 4v4 games on a court roughly 15m x 12m, no hoops needed for this focus (or use hoops if available), one ball per game, bibs in two colours.",
   "howTo": [
    "Explain the rule: every player who catches the ball must legally pivot at least once — protecting it from a nearby defender — before passing or shooting.",
    "Play a normal small-sided game, with both teams applying hands-off defensive pressure as players catch and look to move the ball on.",
    "If a player passes or shoots without pivoting first (when a defender was applying pressure), that's a gentle reminder moment rather than a hard stoppage — coach cues the habit in the moment.",
    "Keep play flowing continuously, resetting quickly after any turnover or out-of-bounds moment.",
    "Rotate players through every few minutes so everyone gets even game time.",
    "Coach highlights composed pivoting under pressure as the main thing to notice and praise during this game."
   ]
  },
  "discussion": [
   "What made pivoting under pressure tricky today?",
   "How did a good pivot buy you time to find an option?",
   "What's the difference between pivoting calmly and panicking under pressure?"
  ],
  "lookfors": [
   "Keeps the pivot foot planted, no dragging/lifting",
   "Shields the ball with body positioning while pivoting",
   "Finds a legal option (pass or dribble start) rather than panicking"
  ],
  "inclusion": "Slow the whole sequence to walking pace and use a visible cone as the defender's marker for students still building the pivot-under-pressure concept.",
  "skillBreakdown": [
   {
    "step": "Keep your pivot foot fixed on the floor.",
    "why": "Legal pivoting depends on that foot staying planted."
   },
   {
    "step": "Turn your body and shield the ball away from the defender's pressure.",
    "why": "Uses your body as a barrier while you look for an escape option."
   },
   {
    "step": "Look for an escape pass or dribble lane as you pivot.",
    "why": "Pivoting should create an option, not just delay the inevitable."
   }
  ]
 },
 {
  "n": 11,
  "block": 3,
  "title": "Wall Up",
  "focus": "Defending — stance & staying in front",
  "walt": "We are learning a strong, balanced defensive stance and how to stay in front of an attacker.",
  "wilf": [
   "I can hold a low, balanced defensive stance with knees bent and feet apart",
   "I can slide my feet to stay in front of a moving attacker, without crossing my feet"
  ],
  "nzc": "Strand B · Managing self, Relating to others",
  "value": "Manaaki",
  "valueText": "Using your skills fairly to give the attacker a genuine, respectful contest without crowding or contacting them.",
  "equipment": "Balls, cones, bibs",
  "safety": "No contact and no reaching in to grab the ball — hands-off defending, arm's length distance maintained at all times",
  "games": [
   {
    "name": "Stance Check",
    "desc": "Students practise the low defensive stance (knees bent, feet shoulder-width, hands up and active) while a partner checks their form, holding the stance for short bursts.",
    "coach": "Stay low with your weight on the balls of your feet, ready to move in any direction",
    "easier": "Shorter holds, more rest",
    "harder": "Longer holds, added movement",
    "chaos": "Random constraint calls",
    "setup": "Pairs spread out with about 2m each, no ball needed for this game, enough space for each pair to work without bumping neighbours.",
    "howTo": [
     "Demonstrate the low defensive stance: knees bent, feet shoulder-width apart, weight on the balls of the feet, hands up and active in front of the body.",
     "One partner gets into the stance and holds it for a short burst (e.g. 10-15 seconds) while the other partner checks their knee bend, foot width, and hand position.",
     "Swap roles so both partners get a turn holding the stance and a turn checking form.",
     "If the stance drifts (knees straighten, feet come together), the student resets and holds again for the same short burst.",
     "Coach the key message: 'stay low with your weight on the balls of your feet, ready to move in any direction.'",
     "For 'easier', use shorter holds with more rest between; for 'harder', hold for longer and add small side-to-side movement while maintaining the stance."
    ]
   },
   {
    "name": "Slide & Stay",
    "desc": "An attacker moves side to side (no ball) along a line while the defender slides their feet to stay directly in front, without crossing their feet or standing up out of the stance.",
    "coach": "Slide, don't cross your feet — a crossed step is a moment you can be beaten",
    "easier": "Slower attacker movement",
    "harder": "Faster, less predictable movement",
    "chaos": "Mild opposition + decision-making",
    "setup": "Pairs work along a marked line roughly 5-6m long using cones at each end, no ball needed, one attacker and one defender per pair.",
    "howTo": [
     "The attacker moves side to side along the line (walking or light jogging, no ball), while the defender mirrors them using the low defensive stance and sliding footwork.",
     "The defender's feet must slide (step-together-step) rather than cross over — a crossed step is treated as 'beaten' for that moment and the pair simply continues.",
     "The defender should stay directly in front of the attacker at all times, matching their side-to-side movement without standing upright out of the stance.",
     "Swap roles after 45-60 seconds so both partners get attacking and defending turns.",
     "Coach the key message: 'slide, don't cross your feet — a crossed step is a moment you can be beaten.'",
     "For 'easier', the attacker moves more slowly and predictably; for 'harder', the attacker moves faster and less predictably."
    ]
   },
   {
    "name": "1v1 Stay in Front",
    "desc": "Attacker dribbles in a small grid trying to get past; defender's only job is to stay in front using good stance and sliding footwork (no reaching for the ball).",
    "coach": "Focus on your feet and stance, not on grabbing at the ball",
    "easier": "Bigger grid, slower attacker",
    "harder": "Smaller grid, quicker attacker",
    "chaos": "Mild opposition + decision-making",
    "setup": "Mark small grids roughly 5m x 5m, one grid per pair, one ball per pair — enough grids spread out so pairs don't interfere with each other.",
    "howTo": [
     "The attacker dribbles inside the grid trying to get past the defender to the far side; the defender's only job is to stay in front using the stance and slide footwork from today's earlier games.",
     "The defender must not reach in or grab at the ball — the focus is purely on positioning and footwork, not stealing.",
     "If the attacker gets past, they simply reset back to the start and try again; if the defender stays in front for a set time (e.g. 10 seconds), that's a win for the defender.",
     "Swap roles after each attempt (or every couple of attempts) so both partners get equal attacking and defending turns.",
     "Coach the key message: 'focus on your feet and stance, not on grabbing at the ball.'",
     "For 'easier', use a bigger grid with a slower attacker; for 'harder', use a smaller grid with a quicker attacker."
    ]
   }
  ],
  "big": {
   "name": "Stance & Slide Basketball",
   "desc": "4v4 — coach highlights good defensive stance and sliding footwork in play ('great stance!'), reinforcing that staying in front fairly is as valuable as any steal attempt.",
   "setup": "Groups of 8 for 4v4 games on a court roughly 15m x 12m, one ball per game, bibs in two colours.",
   "howTo": [
    "Explain the coaching focus: good defensive stance and sliding footwork are being watched for and celebrated just as much as any steal or turnover.",
    "Play a normal small-sided game, with defenders applying hands-off pressure using the stance and slide skills from today's games.",
    "Whenever a defender stays in front of their attacker using a good low stance and clean sliding footwork, the coach calls it out ('great stance!') regardless of what happens to the ball next.",
    "Keep reminding players that fair, controlled defending (no reaching, no grabbing) is the standard expected throughout.",
    "Rotate players through every few minutes so everyone gets even game time.",
    "Coach highlights defensive positioning as a core skill being built here, setting up next lesson's closing-out focus."
   ]
  },
  "discussion": [
   "What did a low, balanced stance help you do as a defender today?",
   "Why does sliding (rather than crossing your feet) matter when staying in front?",
   "What's the difference between defending fairly and defending too aggressively?"
  ],
  "lookfors": [
   "Holds a low, balanced stance with hands active",
   "Slides feet without crossing them",
   "Stays an arm's length away, no reaching or grabbing"
  ],
  "inclusion": "Allow defenders to start a step further back for students still building confidence with the stance and sliding footwork combination.",
  "skillBreakdown": [
   {
    "step": "Stay low, weight on the balls of your feet.",
    "why": "A low, balanced stance lets you react instantly to a change of direction."
   },
   {
    "step": "Slide your feet rather than crossing them.",
    "why": "Crossing your feet is slower to recover from and can be beaten easily."
   },
   {
    "step": "Keep an arm's length distance from the attacker.",
    "why": "Close enough to contest, far enough to react to a move."
   }
  ]
 },
 {
  "n": 12,
  "block": 3,
  "title": "Close Out",
  "focus": "Defending — closing out on a shooter",
  "walt": "We are learning to close out under control on a player about to shoot, without fouling or overrunning them.",
  "wilf": [
   "I can approach a shooter under control, with short, choppy steps as I get close",
   "I can get my hand up to contest the shot without touching the ball or the shooter"
  ],
  "nzc": "Strand B · Managing self",
  "value": "Pānga",
  "valueText": "Thinking ahead about the safest, most controlled way to close out, rather than just sprinting in as fast as possible.",
  "equipment": "Balls, hoops/targets, cones",
  "safety": "No contact and no touching the ball during a shot attempt — defenders may only contest with a raised hand at a safe distance",
  "games": [
   {
    "name": "Choppy Steps Approach",
    "desc": "Students practise closing out from a few metres away, using short, choppy steps to slow down under control as they approach an imaginary shooter (a cone).",
    "coach": "Slow your steps down as you get close — arriving under control beats arriving fast",
    "easier": "Shorter approach distance",
    "harder": "Longer approach, added speed early",
    "chaos": "Random constraint calls",
    "setup": "Students spread out individually, each approaching a cone (standing in for an imaginary shooter) from about 4-5m away, no ball needed for this game.",
    "howTo": [
     "Demonstrate closing out: starting a few metres from the cone and using short, choppy steps to slow down under control as you approach, rather than sprinting all the way in.",
     "Students practise closing out on their cone repeatedly, focusing on arriving under control with balanced feet rather than rushing.",
     "The last 1-2 steps before arriving should be noticeably shorter and slower than the first few steps of the approach.",
     "Repeat several times from slightly different starting distances so students get used to adjusting their choppy-step timing.",
     "Coach the key message: 'slow your steps down as you get close — arriving under control beats arriving fast.'",
     "For 'easier', use a shorter approach distance; for 'harder', use a longer approach with added speed early on."
    ]
   },
   {
    "name": "Hand Up, No Touch",
    "desc": "A partner holds the ball in a shooting stance; the defender closes out and raises one hand to contest without touching the ball or getting closer than an arm's length.",
    "coach": "One hand up, stay balanced — don't lunge or fly past",
    "easier": "Slower, more predictable closeout timing",
    "harder": "Quicker, reactive closeout on a cue",
    "chaos": "Random constraint calls",
    "setup": "Pairs spread out with about 4-5m between them, one ball per pair, enough space so a closeout approach doesn't cross into another pair's space.",
    "howTo": [
     "One partner holds the ball in a shooting stance (from earlier lessons) a few metres away; the other partner practises the closeout approach from Choppy Steps Approach.",
     "On arrival, the defender raises one hand up to contest the shot without touching the ball, staying at least an arm's length away and balanced (not lunging).",
     "The 'shooter' can hold their stance or go through a slow shooting motion so the defender practises timing their hand-raise to the shot.",
     "Swap roles after several closeouts so both partners get equal defending and shooting-stance turns.",
     "Coach the key message: 'one hand up, stay balanced — don't lunge or fly past.'",
     "For 'easier', use slower, more predictable closeout timing; for 'harder', react to a quicker, less predictable cue."
    ]
   },
   {
    "name": "Closeout Relay",
    "desc": "Small groups take turns closing out on a shooter from different starting distances and angles, racing to complete controlled closeouts without fouling.",
    "coach": "Read the distance — a closer shooter needs a shorter, quicker approach",
    "easier": "Fixed, known distance",
    "harder": "Varied, surprise distances",
    "chaos": "Beat the clock, role rotation",
    "setup": "Small groups of 4-5 taking turns closing out from marked starting cones at varying distances and angles to a central shooter spot, one ball per group.",
    "howTo": [
     "Set up 2-3 different starting cones at different distances/angles from the central shooter spot.",
     "Students take turns starting from a different cone each time, practising a controlled closeout to the shooter spot without fouling (no contact, one hand up only).",
     "Race as a group to complete a full round of closeouts (one from each starting cone) as cleanly and quickly as possible.",
     "If a closeout is uncontrolled (defender arrives off-balance or too fast), that attempt is redone before the group's round is considered complete.",
     "Coach the key message: 'read the distance — a closer shooter needs a shorter, quicker approach.'",
     "For 'easier', use a fixed, known distance each time; for 'harder', use varied, surprise distances."
    ]
   }
  ],
  "big": {
   "name": "Closeout Basketball",
   "desc": "4v4 with hoops/targets — defenders are coached explicitly on controlled closeouts, with bonus recognition (not points) for a well-controlled, fair contest on a shot.",
   "setup": "Groups of 8 for 4v4 games on a court with hoops/targets, one ball per game, bibs in two colours.",
   "howTo": [
    "Explain the coaching focus: defenders closing out under control on a shooter earns recognition (not extra points), separate from whether the shot is contested successfully.",
    "Play a normal small-sided game, with defenders practising controlled closeouts on any attacker who receives the ball in a shooting position.",
    "Whenever a defender closes out with good, balanced footwork and a fair one-handed contest (no fouling contact), the coach calls it out as a highlight.",
    "Keep reminding players that a fast but reckless closeout (fouling or flying past) is worse than a slightly slower, controlled one.",
    "Rotate players through every few minutes so everyone gets even game time.",
    "Coach continues to praise defensive stance and sliding footwork from last lesson alongside today's new closeout focus."
   ]
  },
  "discussion": [
   "What made a closeout feel 'under control' rather than rushed?",
   "How did short, choppy steps help you as you got close to the shooter?",
   "What's the value of thinking ahead about how you approach, rather than just sprinting in?"
  ],
  "lookfors": [
   "Slows down with choppy steps on approach",
   "Contests with one hand up, no contact",
   "Stays balanced rather than flying past the shooter"
  ],
  "inclusion": "Use a stationary cone/marker as the 'shooter' first before adding a real person, so students focus purely on their own footwork and control.",
  "skillBreakdown": [
   {
    "step": "Approach under control, not at a flat sprint.",
    "why": "Sprinting in makes you easy to blow past with a simple fake or drive."
   },
   {
    "step": "Break down your steps into a low, balanced stance as you arrive.",
    "why": "Lets you contest the shot without fouling or losing balance."
   },
   {
    "step": "Get a hand up to contest without lunging or reaching in.",
    "why": "Contests the shot legally while staying in defensive position."
   }
  ]
 },
 {
  "n": 13,
  "block": 3,
  "title": "Cut & Clear",
  "focus": "Attacking — creating space (cutting)",
  "walt": "We are learning to cut into space at the right moment to create a passing or scoring opportunity.",
  "wilf": [
   "I can cut into space when my defender isn't watching or is out of position",
   "I can time my cut so a teammate can pass to me cleanly"
  ],
  "nzc": "Strand B · Thinking",
  "value": "Aroha",
  "valueText": "Understanding your own timing and decision-making — noticing what changes when your cut clicks into place.",
  "equipment": "Balls, cones, bibs",
  "safety": "Keep cutting lanes clear of other groups when running through shared space",
  "games": [
   {
    "name": "Call & Cut",
    "desc": "A passer calls 'now!' as the cue for their partner to cut sharply into space and receive the pass, building the timing connection between passer and cutter.",
    "coach": "Cut hard on the call, not before or after",
    "easier": "Slower pace, more obvious timing",
    "harder": "Faster pace, subtler timing",
    "chaos": "Random constraint calls",
    "setup": "Pairs spread out across a grid roughly 8m x 8m, one ball per pair, enough grids for the whole class working at once.",
    "howTo": [
     "The passer holds the ball while the cutter stands nearby in a starting position.",
     "The passer calls 'now!' as the cue — on this call, the cutter sprints sharply into open space to receive the pass.",
     "The passer delivers the ball to the space the cutter is moving into, not to where they started.",
     "Swap roles after 5-6 repetitions so both partners practise cutting and passing-on-the-call.",
     "Coach the key message: 'cut hard on the call, not before or after.'",
     "For 'easier', use a slower pace with more obvious timing; for 'harder', use a faster pace with subtler timing."
    ]
   },
   {
    "name": "Read the Gap Cut",
    "desc": "Cutter watches their defender and cuts into space the moment the defender is out of position or looking away, without a verbal cue.",
    "coach": "Watch your defender's feet and weight, not the ball, to time your cut",
    "easier": "Defender moves predictably",
    "harder": "Defender moves unpredictably",
    "chaos": "Mild opposition + decision-making",
    "setup": "Pairs plus one light shadow defender (trios rotating through) in a grid roughly 8m x 8m, one ball per trio.",
    "howTo": [
     "The cutter's defender shadows them lightly (no ball contact) while the cutter watches the defender's feet and body weight rather than the ball.",
     "The moment the defender is out of position, looking away, or shifts their weight badly, the cutter cuts into the open space without any verbal cue.",
     "The passer reads the cut and delivers the ball the moment the cutter moves.",
     "Rotate roles (cutter, defender, passer) every couple of minutes so everyone practises reading a defender's positioning.",
     "Coach the key message: 'watch your defender's feet and weight, not the ball, to time your cut.'",
     "For 'easier', the defender moves predictably; for 'harder', the defender moves unpredictably."
    ]
   },
   {
    "name": "Triangle Cut Relay",
    "desc": "Groups of 3 rotate cutting into space to receive a pass, then immediately becoming the next passer, racing other triangles for clean completions.",
    "coach": "Prepare your cut early — decide your target space before you move",
    "easier": "Slower pace",
    "harder": "Faster pace, timed race",
    "chaos": "Beat the clock, head-to-head mirror",
    "setup": "Groups of 3 spread out in a triangle shape roughly 5m per side, one ball per group, enough triangles for the whole class to work at once.",
    "howTo": [
     "One student passes to a teammate who cuts into space to receive it, then that receiver immediately becomes the next passer for the third teammate to cut.",
     "Keep the ball moving triangle-style, with a cut happening before every single pass — no standing still to receive.",
     "Race against another triangle group to see who can complete the most clean pass-and-cut completions in a set time.",
     "If a cut is mistimed and the pass is missed, the group resets to the last successful position and continues.",
     "Coach the key message: 'prepare your cut early — decide your target space before you move.'",
     "For 'easier', use a slower pace; for 'harder', use a faster pace with a timed race."
    ]
   }
  ],
  "big": {
   "name": "Timed Cut Basketball",
   "desc": "4v4 with defence — coach highlights well-timed cuts in play ('great cut!'), reinforcing that arriving in space at the right moment is as valuable as the pass itself.",
   "setup": "Groups of 8 for 4v4 games on a court roughly 15m x 12m with light defence, one ball per game, bibs in two colours.",
   "howTo": [
    "Explain the coaching focus: cutting into space at the right moment is being watched for and celebrated just as much as any pass or score.",
    "Play a normal small-sided game with full hands-off defence, encouraging attackers to cut into open space using the reading and timing skills from today's games.",
    "Whenever a player makes a well-timed cut to receive the ball in space, the coach calls it out ('great cut!') regardless of what happens after.",
    "Keep reminding players that arriving in the right space at the right time is just as valuable as the pass itself.",
    "Rotate players through every few minutes so everyone gets even game time.",
    "Coach continues to reinforce defensive stance and closeouts from previous lessons alongside today's cutting focus."
   ]
  },
  "discussion": [
   "What helped you time your cut well today?",
   "How did reading your defender's position help you decide when to cut?",
   "What happens if you cut too early or too late?"
  ],
  "lookfors": [
   "Times the cut to arrive as the ball becomes available",
   "Reads the defender's position before cutting",
   "Accelerates into space rather than drifting"
  ],
  "inclusion": "Use a verbal cue system (passer calls 'now!') as training wheels for students still building the reading skill, removing the cue as confidence grows.",
  "skillBreakdown": [
   {
    "step": "Read the defender's attention before you cut.",
    "why": "Cutting when a defender is watching the ball, not you, is far more effective."
   },
   {
    "step": "Cut hard and decisively, not half-heartedly.",
    "why": "A sharp cut is what actually creates separation from your defender."
   },
   {
    "step": "Time your cut to match when the passer can actually deliver the ball.",
    "why": "Cutting too early or late wastes the opportunity."
   }
  ]
 },
 {
  "n": 14,
  "block": 3,
  "title": "Pick Me",
  "focus": "Screening / using a teammate to get free",
  "walt": "We are learning to set a simple, legal screen to help a teammate get free, and how to use a screen as the player being defended.",
  "wilf": [
   "I can stand still and hold a legal screening position for a teammate",
   "I can use a teammate's screen by cutting close by it to lose my defender"
  ],
  "nzc": "Strand B & C · Relating to others, Thinking",
  "value": "Mōhio",
  "valueText": "Understanding how your individual role (screener or cutter) fits into a shared team outcome.",
  "equipment": "Balls, cones, bibs",
  "safety": "Screens must be stationary and legal — no moving into a defender's path at the last second; screener holds a stationary, balanced position",
  "games": [
   {
    "name": "Statue Screen",
    "desc": "One student stands completely still (a 'statue') in a marked spot while a partner practises cutting close by the statue to lose an imaginary defender.",
    "coach": "Screener stays still and balanced; cutter brushes close by without contact",
    "easier": "Bigger space around the screen",
    "harder": "Tighter space, cutter must change direction sharply off the screen",
    "chaos": "Random constraint calls",
    "setup": "Pairs spread out with about 3-4m of space each, no ball needed for this first game, a cone marking where the 'statue' should stand still.",
    "howTo": [
     "One student (the screener) stands completely still and balanced on the marked spot, arms in and not moving, like a statue.",
     "The other student (the cutter) practises cutting close by the statue's shoulder to lose an imaginary defender, brushing near but not touching.",
     "Repeat several times, cutting from different starting angles around the statue.",
     "Swap roles so both partners practise being the still, balanced screener and the cutter using the screen.",
     "Coach the key message: 'screener stays still and balanced; cutter brushes close by without contact.'",
     "For 'easier', use a bigger space around the screen; for 'harder', use a tighter space where the cutter must change direction sharply off the screen."
    ]
   },
   {
    "name": "Screen & Cut Combo",
    "desc": "In trios, one player sets a legal, stationary screen for a teammate who is being shadowed by a light-touch defender; the cutter uses the screen to get free and receive a pass.",
    "coach": "Cutter should brush shoulder-close to the screen, not go wide around it",
    "easier": "Defender reacts slowly",
    "harder": "Defender reacts quickly, must fight through or around",
    "chaos": "Mild opposition + decision-making",
    "setup": "Trios spread out with about 4-5m of working space, one ball per trio, one student acting as a light-touch shadow defender.",
    "howTo": [
     "One player sets a legal, stationary screen (as in Statue Screen) for a teammate who is being shadowed by the defender.",
     "The cutter uses the screen — brushing shoulder-close past it — to lose the shadow defender and get free to receive a pass from the third player.",
     "The passer delivers the ball the moment the cutter is free of the defender.",
     "Rotate roles (screener, cutter, defender, passer if a fourth is added) every couple of minutes so everyone practises each part.",
     "Coach the key message: 'cutter should brush shoulder-close to the screen, not go wide around it.'",
     "For 'easier', the defender reacts slowly; for 'harder', the defender reacts quickly and must fight through or around the screen."
    ]
   },
   {
    "name": "Screen Rotation Game",
    "desc": "Small-sided game where players rotate roles (screener, cutter, defender) every couple of minutes, so everyone practises each part of the screen-and-cut combination.",
    "coach": "Communicate with your teammate about where you're setting the screen",
    "easier": "Longer periods per role",
    "harder": "Shorter periods, faster rotation",
    "chaos": "Role rotation",
    "setup": "Small groups of 4 in a grid roughly 10m x 8m, one ball per group, with clearly defined roles (screener, cutter, defender, passer) that rotate.",
    "howTo": [
     "Explain that this is a small-sided game where players rotate roles every couple of minutes so everyone practises screening, cutting, and defending against a screen.",
     "Play continuously, with the screener and cutter combining to get free while the defender tries to stay with their mark using only legal, hands-off effort.",
     "Every couple of minutes, call a rotation so players swap into a new role within their group.",
     "If a screen is set illegally (moving into the defender's path at the last second), the group resets and the screener tries again from a stationary position.",
     "Coach the key message: 'communicate with your teammate about where you're setting the screen.'",
     "For 'easier', use longer periods per role; for 'harder', use shorter periods with faster rotation."
    ]
   }
  ],
  "big": {
   "name": "Pick & Roll Basketball",
   "desc": "4v4 or 5v5 — teams are encouraged to use at least one legal screen per possession to help a teammate get free, with the coach highlighting successful, legal screening plays.",
   "setup": "Groups of 8-10 for a 4v4 or 5v5 game on a court roughly 15m x 12m with hoops if available, one ball per game, bibs in two colours.",
   "howTo": [
    "Explain the coaching encouragement: teams are asked to use at least one legal, stationary screen per possession to help a teammate get free.",
    "Play a normal small-sided game, with attacking teams looking for opportunities to set a screen (as practised today) to create separation from a defender.",
    "Whenever a legal screen leads to a teammate getting free, the coach highlights it as a successful, fair play — regardless of whether it leads to a score.",
    "Keep reminding players that a screen must be stationary and set early — no last-second moving into a defender's path.",
    "Rotate players through every few minutes so everyone gets even game time.",
    "Coach continues to reinforce cutting timing from last lesson alongside today's screening focus."
   ]
  },
  "discussion": [
   "What made a screen effective (or not) today?",
   "How did using a teammate's screen help you get free?",
   "Why do you think a screen needs to be still and legal to work fairly?"
  ],
  "lookfors": [
   "Holds a stationary, legal screening position",
   "Cuts close by the screen rather than wide around it",
   "Communicates with the teammate about the screen"
  ],
  "inclusion": "Practise the screener's stationary role first without any defender at all, so students build confidence with the legal, still positioning before adding pressure.",
  "skillBreakdown": [
   {
    "step": "Set a stationary, legal screen with feet planted.",
    "why": "A moving screen is an illegal, foul situation."
   },
   {
    "step": "Communicate the screen to your teammate.",
    "why": "They need to know which way to cut off it."
   },
   {
    "step": "Cut off the screen tight and with a change of pace.",
    "why": "Cutting too wide loses the benefit of the screen entirely."
   }
  ]
 },
 {
  "n": 15,
  "block": 3,
  "title": "Box Out",
  "focus": "Rebounding basics (positioning, boxing out)",
  "walt": "We are learning to box out an opponent and position ourselves to collect a rebound.",
  "wilf": [
   "I can turn and make contact with my body (not my arms) to box out an opponent",
   "I can position myself between my opponent and the hoop before going for the rebound"
  ],
  "nzc": "Strand B · Managing self",
  "value": "Manaaki",
  "valueText": "Contesting a rebound fairly and safely — using your body position, not pushing or grabbing, to compete for the ball.",
  "equipment": "Balls, hoops/targets, cones",
  "safety": "No pushing, elbowing, or grabbing during boxing out — body contact must be controlled and balanced, not aggressive",
  "games": [
   {
    "name": "Turn and Box",
    "desc": "Facing a partner, students practise turning to make gentle, balanced body contact (a 'box out') and holding a wide, low stance to claim space in front of the hoop.",
    "coach": "Find your opponent, turn, and make contact with your body — don't watch the ball yet",
    "easier": "Slower, walked-through turns",
    "harder": "Quicker turn on a cue",
    "chaos": "Random constraint calls",
    "setup": "Pairs facing each other with about 1m of space between them, no ball needed for this first game, enough room for each pair to turn and make contact safely.",
    "howTo": [
     "Explain that boxing out means finding your opponent, turning your back to them, and making gentle, balanced body contact to claim the space in front of an imaginary hoop.",
     "Partners face each other, then on a cue, one partner turns and makes light, controlled contact with their back/shoulder against their partner, settling into a wide, low stance.",
     "The student boxing out holds that wide, low position for a few seconds, claiming the space rather than backing away.",
     "Swap roles so both partners practise turning and boxing out, and being boxed out against.",
     "Coach the key message: 'find your opponent, turn, and make contact with your body — don't watch the ball yet.'",
     "For 'easier', use slower, walked-through turns; for 'harder', turn quickly on a sudden cue."
    ]
   },
   {
    "name": "Box Out & Collect",
    "desc": "A partner tosses the ball off a wall or backboard; the student must box out an imaginary or light-touch opponent, then move to collect the rebound.",
    "coach": "Box out first, then go get the ball — don't turn to watch the ball too early",
    "easier": "Slower tosses, more space",
    "harder": "Quicker tosses, tighter space",
    "chaos": "Mild opposition + decision-making",
    "setup": "Pairs near a wall or backboard (or use a soft toss instead if no backboard is available), one ball per pair, enough space for safe, controlled contact.",
    "howTo": [
     "One partner tosses the ball off a wall or backboard so it rebounds unpredictably, while the other partner practises boxing out an imaginary or light-touch opponent (their partner) first.",
     "Only after boxing out — turning, making contact, and claiming the space — does the student turn to look for and collect the rebound.",
     "If the student turns to watch the ball before boxing out, the pair resets and tries the toss again.",
     "Swap roles after several tosses so both partners get boxing-out and tossing turns.",
     "Coach the key message: 'box out first, then go get the ball — don't turn to watch the ball too early.'",
     "For 'easier', use slower tosses with more space; for 'harder', use quicker tosses in a tighter space."
    ]
   },
   {
    "name": "Rebound Rumble",
    "desc": "Small groups compete to box out and collect the most rebounds off a series of tosses or missed shots, tracked as a friendly team tally.",
    "coach": "Stay low and wide after boxing out — don't stand up straight and lose your position",
    "easier": "Fewer players competing for each rebound",
    "harder": "More players, more contested rebounds",
    "chaos": "Scoring streaks, bonus objectives",
    "setup": "Small groups of 3-4 near a hoop/target or wall, one ball per group, a rough tally system (marks on paper or verbal count) to track rebounds.",
    "howTo": [
     "Explain the friendly competition: the group tosses or shoots the ball so it comes off the hoop, backboard, or wall, and everyone competes to box out and collect the rebound.",
     "Students apply the turn-and-box technique from earlier games before going for the ball, keeping contact controlled and balanced, never aggressive.",
     "Each successful box-out-then-collect counts as one point for that student on the group's shared tally.",
     "Rotate who tosses/shoots for the group so everyone gets a fair mix of rebounding attempts.",
     "Coach the key message: 'stay low and wide after boxing out — don't stand up straight and lose your position.'",
     "For 'easier', fewer players compete for each rebound; for 'harder', more players compete for a more contested rebound."
    ]
   }
  ],
  "big": {
   "name": "Box Out Basketball",
   "desc": "4v4 with hoops/targets — every missed shot is a live rebound opportunity; players are coached explicitly to box out before chasing the ball, reinforcing fair, safe positioning over raw scrambling.",
   "setup": "Groups of 8 for 4v4 games on a court with hoops/targets, one ball per game, bibs in two colours.",
   "howTo": [
    "Explain the coaching focus: every missed shot is treated as a live rebound opportunity, and players are explicitly coached to box out before chasing the ball.",
    "Play a normal small-sided game, with both teams applying the box-out technique from today's games whenever a shot goes up.",
    "Whenever a player boxes out fairly and safely before collecting a rebound, the coach highlights it as good, safe positioning.",
    "If any contact becomes aggressive (pushing, elbowing, grabbing), stop play immediately and reset with a reminder of the controlled, balanced contact expected.",
    "Rotate players through every few minutes so everyone gets even game time.",
    "Coach continues to reinforce screening and cutting from previous lessons alongside today's rebounding focus."
   ]
  },
  "discussion": [
   "What did boxing out help you do before going for the rebound?",
   "Why is body positioning more useful than just reaching for the ball?",
   "What made a rebound contest feel fair and safe today?"
  ],
  "lookfors": [
   "Turns and makes balanced body contact to box out",
   "Positions between opponent and hoop before chasing the ball",
   "Stays low and wide rather than standing up straight"
  ],
  "inclusion": "Practise the box-out turn without any ball or contest first, so students build the positioning habit before adding the scramble for a rebound.",
  "skillBreakdown": [
   {
    "step": "Make contact with your opponent and hold your position before going for the ball.",
    "why": "Positioning first prevents them getting inside position for the rebound."
   },
   {
    "step": "Keep a wide, balanced stance with arms up.",
    "why": "Makes you a bigger target for the ball and harder to move."
   },
   {
    "step": "Go get the ball at its highest point, don't wait for it to come to you.",
    "why": "Attacking the ball wins more rebounds than passively waiting."
   }
  ]
 },
 {
  "n": 16,
  "block": 4,
  "title": "Fast Break",
  "focus": "Fast break basics (outnumbering the defence)",
  "walt": "We are learning to recognise and use a fast break — moving the ball quickly up the court when we outnumber the defence.",
  "wilf": [
   "I can sprint into space immediately after my team gains the ball",
   "I can recognise when my team has more attackers than defenders and use the advantage"
  ],
  "nzc": "Strand B & C · Thinking, Participating & contributing",
  "value": "Pānga",
  "valueText": "Being patient with a team while learning a multi-person pattern — timing takes a few tries to click for everyone.",
  "equipment": "Balls, cones marking court thirds, bibs",
  "safety": "Keep the court clear of congestion during fast-paced running sections — space players out to avoid collisions",
  "games": [
   {
    "name": "Fast Break Walkthrough",
    "desc": "Team walks through a simple fast break pattern slowly: after a rebound or steal, players sprint into lanes up the court while one dribbles/passes ahead, before adding any defence.",
    "coach": "Everyone has a lane to sprint into — know yours before the ball moves",
    "easier": "Walk pace only",
    "harder": "Add a light jog",
    "chaos": "Random constraint calls",
    "setup": "Whole team (or small group) walks through a marked court divided into thirds using cones, one ball per group, no defence yet.",
    "howTo": [
     "Explain the fast break concept: after a rebound or steal, players sprint into their own lanes up the court rather than bunching together, while one player dribbles or passes the ball ahead.",
     "Walk through the pattern slowly first: one player 'collects' an imaginary rebound, then everyone jogs (at walk pace for this first version) into their own lane up the court.",
     "The ball-carrier dribbles or passes ahead to a teammate who has sprinted into a lane, working toward the far end.",
     "Repeat the walkthrough several times so everyone understands their lane and role before any pace is added.",
     "Coach the key message: 'everyone has a lane to sprint into — know yours before the ball moves.'",
     "For 'easier', keep it to walk pace only; for 'harder', add a light jog."
    ]
   },
   {
    "name": "3v2 Numbers Up",
    "desc": "Three attackers push the ball up the court against only two defenders, practising quick decisions on when to pass and who has the advantage.",
    "coach": "Spread out into your lanes — a bunched-up fast break loses its advantage",
    "easier": "Defenders start further back",
    "harder": "Defenders start closer, more realistic recovery speed",
    "chaos": "Mild opposition + decision-making",
    "setup": "Groups of 5 (three attackers, two defenders) on a court roughly 20m long with a hoop or target at the far end, one ball per group.",
    "howTo": [
     "Three attackers start with the ball and push it up the court against only two defenders, spreading into separate lanes rather than bunching together.",
     "Attackers read the defenders' positioning and pass quickly to whichever teammate is left open by the numbers disadvantage.",
     "If a shot or clean finish results, reset and go again with attackers and defenders rotating roles.",
     "Encourage attackers to make their decision quickly rather than dribbling too long and letting the defence recover.",
     "Coach the key message: 'spread out into your lanes — a bunched-up fast break loses its advantage.'",
     "For 'easier', defenders start further back; for 'harder', defenders start closer with more realistic recovery speed."
    ]
   },
   {
    "name": "Fast Break Race",
    "desc": "Groups practise executing a clean fast break sequence and finish (pass or shot) as fast and cleanly as possible, racing another group for the fastest clean sequence.",
    "coach": "Communicate clearly about who's finishing the fast break",
    "easier": "Slower pace",
    "harder": "Faster pace, timed",
    "chaos": "Beat the clock, head-to-head mirror",
    "setup": "Two groups of 3-5 racing side by side down two parallel lanes on the court, one ball per group, a hoop/target at the far end of each lane.",
    "howTo": [
     "Each group executes a clean fast break sequence — spreading into lanes, moving the ball quickly, and finishing with a pass or shot at the far end.",
     "Groups race each other to see who can complete their fast break sequence fastest while keeping it clean (no dropped passes, no bunching up).",
     "If a group's sequence breaks down (a pass is dropped or players bunch together), they reset from the start of their lane.",
     "Rotate group members through different roles (starter, lane-runner, finisher) between races.",
     "Coach the key message: 'communicate clearly about who's finishing the fast break.'",
     "For 'easier', use a slower pace; for 'harder', use a faster pace with the race timed."
    ]
   }
  ],
  "big": {
   "name": "Fast Break Basketball",
   "desc": "4v4 or 5v5 — whenever a team gains possession off a rebound or turnover, they're encouraged to push the ball quickly up the court and recognise any numbers advantage before the defence recovers.",
   "setup": "Groups of 8-10 for a 4v4 or 5v5 game on a full or near-full court with hoops if available, one ball per game, bibs in two colours.",
   "howTo": [
    "Explain the coaching encouragement: whenever a team gains possession off a rebound or turnover, they should look to push the ball quickly up the court before the defence recovers.",
    "Play a normal game, with both teams looking to recognise fast break opportunities and spread into lanes as practised in today's games.",
    "Whenever a team successfully executes a fast break — spreading out, moving the ball quickly, and finishing before the defence sets up — the coach highlights it as a great team play.",
    "If a fast break opportunity is missed (team walks the ball up instead), that's simply a coaching cue for next time, not a stoppage.",
    "Rotate players through every few minutes so everyone gets even game time.",
    "Coach continues to reinforce rebounding and box-out habits from the previous lesson, since fast breaks often start from a rebound."
   ]
  },
  "discussion": [
   "What made your fast break successful (or not) today?",
   "How did spreading into lanes help keep the advantage alive?",
   "What's the purpose of pushing the ball quickly rather than walking it up?"
  ],
  "lookfors": [
   "Sprints into a lane immediately after a change of possession",
   "Recognises and uses a numbers advantage",
   "Communicates clearly during the fast break"
  ],
  "inclusion": "Simplify to a 2v1 version for teams still building confidence before adding a third attacker and defender.",
  "skillBreakdown": [
   {
    "step": "Push the ball forward quickly after gaining possession.",
    "why": "The fast break only works if you exploit the defence before it's set."
   },
   {
    "step": "Fill the outside lanes when running, not bunching in the middle.",
    "why": "Spreading out gives the ball handler passing options and stretches the defence."
   },
   {
    "step": "Make the decision to pass or finish early based on the numbers.",
    "why": "Hesitating in a fast break lets the defence recover."
   }
  ]
 },
 {
  "n": 17,
  "block": 4,
  "title": "Keep Away",
  "focus": "Small-sided possession games (keep-away)",
  "walt": "We are learning to keep possession of the ball as a team using movement, passing, and communication.",
  "wilf": [
   "I can move into space to give my teammate a passing option",
   "I can communicate clearly to help my team keep the ball"
  ],
  "nzc": "Strand B & C · Relating to others, Participating & contributing",
  "value": "Aroha",
  "valueText": "Understanding how your individual movement and passing choices affect your whole team's ability to keep the ball.",
  "equipment": "Balls, cones, bibs",
  "safety": "Keep games within a clearly marked area so groups don't collide with each other",
  "games": [
   {
    "name": "Triangle Support",
    "desc": "Groups of 3 keep the ball moving between them, with the two players off the ball always moving to form good passing angles (triangle shapes) for the ball carrier.",
    "coach": "Always offer at least two passing options for your teammate with the ball",
    "easier": "Bigger space, slower pace",
    "harder": "Smaller space, one light defender added",
    "chaos": "Random constraint calls",
    "setup": "Groups of 3 in a grid roughly 8m x 8m, one ball per group, enough grids for the whole class to work at once.",
    "howTo": [
     "Explain the passing-triangle idea: whoever doesn't have the ball should be moving to create good passing angles for the ball carrier, not standing still.",
     "The three students keep the ball moving between them with simple passes, while the two off the ball constantly reposition to offer clear angles.",
     "At any moment, the ball carrier should have at least two visible passing options rather than one blocked line.",
     "If the group loses the ball or a pass is poorly angled, they simply restart their triangle passing and keep working on movement.",
     "Coach the key message: 'always offer at least two passing options for your teammate with the ball.'",
     "For 'easier', use a bigger space at a slower pace; for 'harder', use a smaller space with one light defender added."
    ]
   },
   {
    "name": "4v2 Keep Away",
    "desc": "Four attackers keep the ball away from two defenders in a marked grid, focusing on movement and quick decisions to maintain possession.",
    "coach": "Move the ball quickly before the defence can close the gap",
    "easier": "Bigger grid, slower defenders",
    "harder": "Smaller grid, quicker defenders",
    "chaos": "Mild opposition + decision-making",
    "setup": "Groups of 6 (four attackers, two defenders) in a grid roughly 10m x 10m, one ball per group.",
    "howTo": [
     "Four attackers spread out around the grid and keep the ball away from two defenders using quick passing and constant movement.",
     "Attackers should move into space immediately after passing, applying the triangle-support idea from the previous game.",
     "Defenders try to intercept or force a mistake using hands-off pressure only.",
     "If the defenders win the ball, rotate two attackers to become the new defenders and continue.",
     "Coach the key message: 'move the ball quickly before the defence can close the gap.'",
     "For 'easier', use a bigger grid with slower defenders; for 'harder', use a smaller grid with quicker defenders."
    ]
   },
   {
    "name": "Possession Streak Challenge",
    "desc": "Small-sided keep-away game where the team tracks their longest streak of consecutive passes kept without losing the ball, trying to beat their own best streak.",
    "coach": "Celebrate a good streak, then reset your focus for the next one",
    "easier": "Bigger space, fewer defenders",
    "harder": "Smaller space, more defenders",
    "chaos": "Beat the clock, scoring streaks",
    "setup": "Small-sided groups (e.g. 4v2 or 3v2) in a grid roughly 10m x 10m, one ball per group, a simple tally to track the team's longest streak of consecutive passes.",
    "howTo": [
     "The attacking team keeps possession using passing and movement, with the group counting consecutive completed passes out loud as a shared streak.",
     "If the ball is intercepted or goes out of the grid, the streak resets to zero and the group starts counting again from the next pass.",
     "Encourage the group to try to beat their own best streak from earlier in the activity.",
     "Rotate which players are defending every couple of minutes so everyone gets both attacking and defending turns.",
     "Coach the key message: 'celebrate a good streak, then reset your focus for the next one.'",
     "For 'easier', use a bigger space with fewer defenders; for 'harder', use a smaller space with more defenders."
    ]
   }
  ],
  "big": {
   "name": "Keep Away Basketball",
   "desc": "4v4, small court — teams score a point for every 6 consecutive passes kept as a team, rewarding movement, communication, and decision-making over individual dribbling.",
   "setup": "Groups of 8 for 4v4 games on a small court roughly 12m x 10m, no hoops needed, one ball per game, bibs in two colours.",
   "howTo": [
    "Explain the scoring rule: a team scores a point for every 6 consecutive passes kept as a team without the other team touching the ball.",
    "Play begins with one team in possession, using the triangle-support movement and quick passing practised in today's games.",
    "If the ball is intercepted or knocked away, possession switches to the other team and their own count starts from zero.",
    "Call out the running count out loud as a team approaches 6 ('four... five... six — point!') so the reward for good movement is obvious.",
    "Rotate players through every few minutes so everyone gets even game time.",
    "Coach highlights good movement and communication as the reason for a successful streak, more than any individual dribbling."
   ]
  },
  "discussion": [
   "What helped your team keep possession under pressure today?",
   "How did moving without the ball help your teammates?",
   "What did good communication sound like in your team?"
  ],
  "lookfors": [
   "Moves to create a passing option, not just watching the ball",
   "Communicates clearly and early",
   "Makes quick, sensible decisions under mild pressure"
  ],
  "inclusion": "Increase the space or reduce defender numbers for teams still building confidence keeping the ball under any pressure at all.",
  "skillBreakdown": [
   {
    "step": "Keep the ball moving with quick, simple passes.",
    "why": "Extra dribbles or hesitation under pressure risk turnovers."
   },
   {
    "step": "Spread out to keep passing lanes open.",
    "why": "Bunched-up players are easy for defenders to press all at once."
   },
   {
    "step": "Communicate before receiving to know the pressure situation.",
    "why": "Helps you decide your next move before the ball even arrives."
   }
  ]
 },
 {
  "n": 18,
  "block": 4,
  "title": "Team Flow",
  "focus": "Team offence patterns",
  "walt": "We are learning simple attacking patterns that help our team move the ball toward the hoop.",
  "wilf": [
   "I can run a simple attacking pattern with my team",
   "I can adjust the pattern based on what the defence is doing"
  ],
  "nzc": "Strand B · Thinking",
  "value": "Mōhio",
  "valueText": "Thinking about how your decisions within the pattern affect whether the whole team's play succeeds.",
  "equipment": "Balls, cones, bibs",
  "safety": "Keep attacking patterns within a marked area so groups don't collide with each other",
  "games": [
   {
    "name": "Pattern Walkthrough",
    "desc": "Team walks through a simple attacking pattern (e.g. pass-cut-screen toward the hoop) slowly with cone markers before adding pace or defence.",
    "coach": "Know your role in the pattern before you start moving",
    "easier": "Fewer players, simpler pattern",
    "harder": "More players, more complex pattern",
    "chaos": "Random constraint calls",
    "setup": "Small groups of 3-4 walk through a simple attacking pattern (e.g. pass-cut-screen toward a hoop or marked target) using cones to mark positions, one ball per group, no defence yet.",
    "howTo": [
     "Explain the simple pattern being learned: Player A passes to Player B, Player A then cuts toward the hoop, and Player C sets a screen to help free up whoever needs it.",
     "Walk through the pattern slowly at walking pace with cone markers showing each position, so every player knows exactly where to be and when.",
     "Repeat the walkthrough several times, rotating which player takes each role (passer, cutter, screener) so everyone learns all parts.",
     "Once the pattern feels familiar, add light pace (still no defence) to see the pattern flow more naturally.",
     "Coach the key message: 'know your role in the pattern before you start moving.'",
     "For 'easier', use fewer players and a simpler pattern; for 'harder', use more players and a more complex pattern."
    ]
   },
   {
    "name": "Pattern vs Shadow Defence",
    "desc": "Team runs their attacking pattern against shadow defenders (not intercepting) to build confidence with defensive presence nearby.",
    "coach": "Trust the pattern — don't abandon it the moment a defender appears",
    "easier": "Defenders further back",
    "harder": "Defenders closer, more realistic",
    "chaos": "Added defender/pressure",
    "setup": "Same small groups, plus shadow defenders added (groups of 6-8 total), one ball per group, same hoop/target markers as Pattern Walkthrough.",
    "howTo": [
     "Run the same attacking pattern from Pattern Walkthrough, but now with shadow defenders assigned to each attacker who apply hands-off pressure without intercepting.",
     "Attackers practise running their pattern with a real defensive presence nearby, building confidence that the pattern still works under pressure.",
     "If the pattern breaks down because a player hesitates due to the defender, reset and try the same pattern again.",
     "Rotate roles between attackers and defenders every few minutes.",
     "Coach the key message: 'trust the pattern — don't abandon it the moment a defender appears.'",
     "For 'easier', defenders stay further back; for 'harder', defenders play closer and more realistically."
    ]
   },
   {
    "name": "Read & Adjust",
    "desc": "Team runs their pattern, but must adjust on the fly if a defender blocks the planned option, practising a backup plan.",
    "coach": "Have a simple backup option in mind if your first choice is covered",
    "easier": "Predictable defensive block",
    "harder": "Unpredictable defensive block",
    "chaos": "Mild opposition + decision-making",
    "setup": "Same groups and setup as Pattern vs Shadow Defence, with defenders now allowed to actively block the planned first option (still hands-off pressure only).",
    "howTo": [
     "The attacking group starts running their pattern as before, but a defender is instructed to specifically block or cover the first planned passing option.",
     "When the first option is covered, the attacking group must adjust on the fly — finding a simple backup option (a different pass or cutter) rather than forcing the original plan.",
     "Reset and repeat several times so the group gets used to reading the defence and switching to their backup option smoothly.",
     "Rotate which defender is assigned to block the first option, and rotate attacking roles as well.",
     "Coach the key message: 'have a simple backup option in mind if your first choice is covered.'",
     "For 'easier', make the defensive block predictable; for 'harder', make it unpredictable."
    ]
   }
  ],
  "big": {
   "name": "Team Offence Basketball",
   "desc": "4v4 or 5v5 with full defence — attacking teams are encouraged to run at least one planned pattern per possession, adjusting when the defence covers their first option.",
   "setup": "Groups of 8-10 for a 4v4 or 5v5 game with full defence on a court roughly 15m x 12m with hoops if available, one ball per game, bibs in two colours.",
   "howTo": [
    "Explain the coaching encouragement: attacking teams are asked to run at least one planned pattern per possession (pass-cut-screen or similar) rather than playing purely off instinct.",
    "Play a normal small-sided game with full defence, encouraging attackers to call or signal their pattern before starting a possession where possible.",
    "If the defence covers the first planned option, the attacking team should adjust smoothly to a backup option, exactly as practised in Read & Adjust.",
    "Whenever a team runs a clear pattern successfully (or adjusts well when covered), the coach highlights it as a great team play.",
    "Rotate players through every few minutes so everyone gets even game time.",
    "Coach continues to reinforce possession and passing habits from the previous lesson alongside today's pattern focus."
   ]
  },
  "discussion": [
   "What made your attacking pattern successful (or not) against real defence today?",
   "How did you adjust when your first option was covered?",
   "What's the value of having a plan, even if you sometimes need to change it?"
  ],
  "lookfors": [
   "Runs a recognisable attacking pattern with teammates",
   "Adjusts the pattern when the defence covers the first option",
   "Communicates with teammates during the pattern"
  ],
  "inclusion": "Walk the pattern through cone markers first for teams who need a visual/spatial reference before adding a live defender.",
  "skillBreakdown": [
   {
    "step": "Learn and run your team's planned pattern of movement.",
    "why": "Patterns create better spacing and options than random attacking."
   },
   {
    "step": "Adjust when the defence covers your first option.",
    "why": "Real defence requires adapting the plan, not abandoning it."
   },
   {
    "step": "Communicate throughout the pattern.",
    "why": "A silent pattern breaks down under any defensive pressure."
   }
  ]
 },
 {
  "n": 19,
  "block": 4,
  "title": "Team Wall",
  "focus": "Team defence patterns",
  "walt": "We are learning to defend as a connected team, not just as individuals marking their own player.",
  "wilf": [
   "I can communicate with my defensive teammates about where the ball and attackers are",
   "I can adjust my defensive position based on what my teammates are doing"
  ],
  "nzc": "Strand B & C · Thinking, Relating to others",
  "value": "Manaaki",
  "valueText": "Bringing everything together fairly — defending hard, defending safely, and defending for the team, not just for yourself.",
  "equipment": "Balls, cones, bibs",
  "safety": "Keep defensive movement controlled — no sprinting into others' space; communication should be clear, not aggressive shouting",
  "games": [
   {
    "name": "Call the Danger",
    "desc": "Defensive team practises calling out loudly when an attacker is dangerous (open, about to receive, or about to shoot) so teammates can help cover.",
    "coach": "Call early and specifically — name who and what you're seeing",
    "easier": "Slower, more obvious danger",
    "harder": "Faster, less obvious danger",
    "chaos": "Random constraint calls",
    "setup": "Small groups of 4-5 defenders working together in a grid roughly 10m x 10m against an equal number of light attackers, one ball per group, no scoring for this first game.",
    "howTo": [
     "Explain the defensive communication idea: whenever an attacker becomes dangerous (open, about to receive a pass, or about to shoot), a nearby defender should call it out loudly and specifically.",
     "As attackers move the ball around, defenders practise calling out danger early and by name ('watch number 3, she's open!') rather than staying silent.",
     "Attackers move and pass at a light, cooperative pace so defenders have time to practise their calling habit without needing to fully contest yet.",
     "Rotate attacking and defending groups every few minutes.",
     "Coach the key message: 'call early and specifically — name who and what you're seeing.'",
     "For 'easier', attackers create more obvious, slower danger; for 'harder', attackers move faster and less obviously."
    ]
   },
   {
    "name": "Cover & Recover",
    "desc": "One defender practises leaving their direct mark briefly to cover a bigger danger, while a teammate calls out and helps recover the original mark.",
    "coach": "Communicate the swap clearly so no attacker is left completely open",
    "easier": "Slower pace, more time to communicate",
    "harder": "Faster pace, quick decisions",
    "chaos": "Mild opposition + decision-making",
    "setup": "Small groups of 4-5 defenders against an equal number of attackers in a grid roughly 10m x 10m, one ball per group.",
    "howTo": [
     "One defender is assigned a direct mark (an attacker to stick with), but is asked to briefly leave that mark to cover a bigger, more dangerous attacker elsewhere.",
     "While that defender covers the danger, a teammate calls out clearly and helps recover the original mark so no attacker is left completely open.",
     "Practise this cover-and-recover pattern several times with different defenders taking the covering role.",
     "If communication breaks down and an attacker is left open, the group resets and tries the same scenario again with clearer calling.",
     "Coach the key message: 'communicate the swap clearly so no attacker is left completely open.'",
     "For 'easier', use a slower pace with more time to communicate; for 'harder', use a faster pace with quick decisions required."
    ]
   },
   {
    "name": "Team Defence Grid",
    "desc": "Small-sided game where the defending team's only job is to communicate and cover for each other, with the coach highlighting good team defensive moments.",
    "coach": "Defence is a team job, not just your own player",
    "easier": "Fewer attackers, easier to cover",
    "harder": "Full attacking numbers",
    "chaos": "Role rotation",
    "setup": "Small-sided groups (e.g. 4v4) in a grid roughly 12m x 10m, one ball per group, no hoops needed — this game is purely about defensive communication.",
    "howTo": [
     "Explain that the defending team's only job in this game is to communicate and cover for each other using the calling and cover-and-recover habits from today's earlier games.",
     "Play a small-sided possession game where the defending team focuses entirely on talking, covering gaps, and helping teammates rather than individual steals.",
     "The coach walks the sideline and highlights good team defensive moments out loud whenever they happen.",
     "Rotate which team defends every few minutes so everyone practises the communication habit.",
     "Coach the key message: 'defence is a team job, not just your own player.'",
     "For 'easier', use fewer attackers, making it easier to cover; for 'harder', use full attacking numbers."
    ]
   }
  ],
  "big": {
   "name": "Team Defence Basketball",
   "desc": "4v4 or 5v5 — defending team is coached explicitly on communication and covering for each other, while attackers try to exploit any gaps in the defensive structure.",
   "setup": "Groups of 8-10 for a 4v4 or 5v5 game on a court roughly 15m x 12m with hoops if available, one ball per game, bibs in two colours.",
   "howTo": [
    "Explain the coaching focus for the defending team: communication and covering for each other are being coached explicitly, alongside individual defending skills built earlier in the unit.",
    "Play a normal small-sided game, with the attacking team trying to exploit any gaps in the defensive structure while defenders call out danger and cover for each other.",
    "Whenever the defending team communicates well and covers a gap successfully, the coach highlights it as a great team defensive moment.",
    "If gaps open up because of poor communication, that's a coaching cue for the next possession rather than a stoppage.",
    "Rotate players through every few minutes so everyone gets even game time, and swap which team is defending regularly.",
    "Coach continues to reinforce attacking patterns from the previous lesson alongside today's team defence focus."
   ]
  },
  "discussion": [
   "What made your team's defence effective (or not) today?",
   "Why is communication important for a defensive team, not just individual marking?",
   "How did covering for a teammate help your team defend better?"
  ],
  "lookfors": [
   "Communicates clearly with defensive teammates",
   "Covers for a teammate when needed",
   "Recovers to their original mark after helping"
  ],
  "inclusion": "Slow the whole game to walking pace for students still learning the team defence concept before adding jogging speed.",
  "skillBreakdown": [
   {
    "step": "Communicate constantly about who's covering whom.",
    "why": "Team defence relies on clear, updated roles in real time."
   },
   {
    "step": "Cover for a teammate who's beaten, then recover to your own mark.",
    "why": "Helping without abandoning your job keeps the defence solid."
   },
   {
    "step": "Move as a connected unit, not as isolated defenders.",
    "why": "Gaps appear exactly where defenders stop working together."
   }
  ]
 },
 {
  "n": 20,
  "block": 4,
  "title": "Hoops Cup",
  "focus": "Culminating mini-tournament",
  "walt": "We are learning to apply the whole unit's skills in a fun, competitive mini-tournament format.",
  "wilf": [
   "I can play a full game applying skills and tactics from across the unit",
   "I can be a good teammate and good sport across multiple games"
  ],
  "nzc": "Strand A, B, C & D · All key competencies",
  "value": "Pānga",
  "valueText": "Celebrating the whole team's effort and growth across the unit — thinking about how everyone's contribution, not just the scoreline, made the tournament work.",
  "equipment": "Balls, bibs (multiple colours for teams), cones, hoops/targets, a simple ladder/scoreboard",
  "safety": "Manage fatigue with rotations/subs; reinforce dribbling, footwork, and no-contact defending rules before the tournament begins",
  "games": [
   {
    "name": "Skills Warm-In Circuit",
    "desc": "A short rotating circuit revisiting the unit's key skills (dribble, pass & catch, shoot, defend) as a fun warm-in before the tournament starts.",
    "coach": "Bring your best technique from across the unit into every station",
    "easier": "Longer stations, fewer skills",
    "harder": "Shorter stations, all skills",
    "chaos": "Beat the clock",
    "setup": "Set up 4 short stations around the space — dribble, pass & catch, shoot, and defend — each with its own cones/equipment from earlier lessons, small groups rotating through every 1-2 minutes.",
    "howTo": [
     "Explain that this is a fun revision circuit touching on the unit's four key skill areas before the tournament begins.",
     "Groups rotate through all four stations, spending 1-2 minutes at each practising the skill using their best technique from across the unit.",
     "At the dribble station, use fingertip control and hand-swaps; at pass & catch, use target hands and clean passes; at shoot, use balanced stance and follow-through; at defend, use low stance and sliding footwork.",
     "Rotate to the next station on a call from the teacher, keeping the pace brisk and energetic.",
     "Coach the key message: 'bring your best technique from across the unit into every station.'",
     "For 'easier', use longer stations covering fewer skills; for 'harder', use shorter stations covering all four skills quickly."
    ]
   },
   {
    "name": "Captain's Huddle",
    "desc": "Each team spends 2 minutes with their 'captain' (rotating role) planning one simple tactic to try in their first game — a light strategy touchpoint before playing.",
    "coach": "Keep the plan simple — one clear idea everyone understands",
    "easier": "Coach suggests the tactic",
    "harder": "Team chooses their own tactic",
    "chaos": "Bonus objectives",
    "setup": "Each tournament team gathers in their own small circle with their bibs on, no equipment needed beyond a couple of minutes of quiet space per team.",
    "howTo": [
     "Explain that each team spends 2 minutes with a 'captain' (a rotating role across lessons/games) leading a short planning discussion.",
     "The captain leads the team in choosing one simple tactic to try in their first game — for example, using a give-and-go, running a screen, or focusing on team defence communication.",
     "Keep the plan to one clear, simple idea that every teammate understands and can picture doing.",
     "Move straight into the first tournament game once the huddle is done.",
     "Coach the key message: 'keep the plan simple — one clear idea everyone understands.'",
     "For 'easier', the coach suggests the tactic to the team; for 'harder', the team chooses their own tactic independently."
    ]
   },
   {
    "name": "Fair Play Check-In",
    "desc": "Brief between-games moment where teams acknowledge one good play from their opponent, reinforcing sportsmanship as part of the tournament structure.",
    "coach": "Be specific — name what your opponent did well",
    "easier": "n/a",
    "harder": "n/a",
    "chaos": "n/a",
    "setup": "Brief between-games moment where each tournament team gathers for under a minute, no equipment needed.",
    "howTo": [
     "Between games in the round robin, gather each team briefly for a quick fair play moment.",
     "Ask each team to name one specific good play their opponent made in the game just finished.",
     "Keep it brief and specific — a particular pass, a good defensive stance, or a well-timed cut, rather than a vague compliment.",
     "Move straight into the next scheduled game once the check-in is done.",
     "Coach the key message: 'be specific — name what your opponent did well.'",
     "This activity doesn't need easier/harder variants — it's a short, consistent sportsmanship routine between games."
    ]
   }
  ],
  "big": {
   "name": "Hoops Cup — Round Robin",
   "desc": "Full simplified basketball rules, small-sided round-robin mini-tournament (4v4 or 5v5) across several short games; ladder/results tracked lightly and playfully, with every team guaranteed multiple games regardless of results.",
   "setup": "Whole class split into tournament teams of 4-5 (using bibs in multiple colours), playing full simplified basketball rules in a small-sided round-robin format (4v4 or 5v5) across several short games on the available court(s), with hoops/targets and a simple ladder or scoreboard visible to all.",
   "howTo": [
    "Explain the round-robin format: every team plays several short games against different opponents, with results tracked lightly on a simple ladder or scoreboard.",
    "Games run for a short, fixed time (e.g. 5-6 minutes) using full simplified basketball rules covering everything practised across the unit — dribbling, passing, shooting, defending, and team play.",
    "Between games, run the Fair Play Check-In routine so sportsmanship stays part of the tournament structure throughout.",
    "Rotate players within each team so everyone gets fair game time across the round robin, especially in larger teams.",
    "Keep the ladder/results tracking light and playful — the emphasis is on every team getting multiple games and having fun, not just final standings.",
    "Use this final session to celebrate growth across the whole unit, referencing specific skills or moments from earlier lessons where you can."
   ]
  },
  "discussion": [
   "What's one skill from across the whole unit you felt proudest of today?",
   "How did your team work together across multiple games?",
   "What would you want to work on if we played another basketball unit?"
  ],
  "lookfors": [
   "Applies a recognisable range of skills from across the unit",
   "Shows good sportsmanship across wins and losses",
   "Encourages and includes teammates throughout the tournament"
  ],
  "inclusion": "Ensure team sizes/formats can flex on the day for uneven numbers; emphasise participation and effort in any informal recognition, not just results.",
  "skillBreakdown": [
   {
    "step": "Apply your best technique from across the unit in every play.",
    "why": "The tournament tests everything you've learned together under real pressure."
   },
   {
    "step": "Communicate constantly with teammates.",
    "why": "Communication becomes even more important when the stakes go up."
   },
   {
    "step": "Play fairly and encourage teammates, win or lose.",
    "why": "Sportsmanship is as much a part of the unit as the physical skills."
   }
  ]
 }
];

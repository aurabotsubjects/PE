// Teeball unit data — TEEBALL_BLOCK_INFO + TEEBALL_LESSONS
const TEEBALL_BLOCK_INFO = {
  1:{name:"Batting & Fundamental Skills", range:"Lessons 1–5", color:"var(--b1)", soft:"var(--b1-soft)", warmup:"Toss & Catch Circle", warmdown:"Walk & Reach",
    warmupSetup:"Pairs spread out across the space (roughly 4-5m apart per pair), one soft/modified teeball per pair, enough room between pairs that tosses don't cross.",
    warmupHowTo:[
      "Partners stand facing each other and begin gently tossing and catching the ball underarm with two hands.",
      "Every 30-45 seconds, call a change: 'quick hands' means slightly faster tosses, 'soft hands' means slow right back to gentle, easy catches.",
      "Occasionally call 'jog swap' — both partners jog to swap positions with another nearby pair, then continue tossing with their new partner.",
      "Keep the whole activity light and continuous — the goal is raising heart rate and warming up catching hands, not technical correction.",
      "Run for the full 5 minutes, mixing pulse changes and partner swaps throughout."
    ],
    warmdownSetup:"No equipment needed beyond the space already in use. Gather the class into a loose circle or scattered spread with enough room for each student to stretch without touching anyone else.",
    warmdownHowTo:[
      "Have students set their ball aside and walk slowly around the space for about 1 minute to bring heart rate down gradually.",
      "Gather into a circle (or stay scattered) and lead 3-4 simple static stretches — calves, quads, hamstrings, and a gentle shoulder/arm reach for the throwing arm — holding each for about 15-20 seconds.",
      "Keep instructions simple and calm: 'reach, hold, breathe' rather than technical cues.",
      "Use this quiet time to briefly ask how the session felt for a couple of students, setting a relaxed tone before the Discussion segment.",
      "Finish with everyone standing tall and taking one big breath in and out together."
    ]
  },
  2:{name:"Base Running & Fielding Combinations", range:"Lessons 6–10", color:"var(--b2)", soft:"var(--b2-soft)", warmup:"Diamond Dash Jog", warmdown:"Partner Stretch",
    warmupSetup:"Mark a simple diamond shape with 4 cones/bases roughly 8-10m apart per side. Split the class into small groups that jog the diamond together; no ball needed.",
    warmupHowTo:[
      "Explain that groups will jog together around the outside of the diamond shape, staying loosely together as a group.",
      "Groups jog a lap of the diamond at an easy pace, touching or running past each base as they go.",
      "Every lap or so, call a light variation — 'high knees to first,' 'side-shuffle to second,' 'backward jog to third' — to add variety while keeping the pace easy.",
      "Keep the activity continuous and playful, focusing on raising heart rate and loosening up leg muscles for base running later in the lesson.",
      "Run for the full 5 minutes, rotating which base groups start from so everyone experiences the variations at different points."
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
  3:{name:"Positioning, Decisions & Tactics", range:"Lessons 11–15", color:"var(--b3)", soft:"var(--b3-soft)", warmup:"Read & React Shuffle", warmdown:"Breathe & Balance",
    warmupSetup:"Pairs spread out across the space, no ball needed for this warm-up, roughly 5m x 5m of room per pair.",
    warmupHowTo:[
      "Explain the game: one partner is the 'leader' who moves and points/gestures toward an imaginary ball direction, the other 'reacts' by quickly shuffling that direction.",
      "The leader varies their pointed direction and pace unpredictably — nothing too sharp or unsafe, just varied movement.",
      "The reactor tries to shuffle and adjust their body position as quickly as possible each time.",
      "Swap roles every 60-90 seconds so both partners lead and react.",
      "This builds the same reading-and-reacting instincts used in fielding and positioning later in the lesson, while raising heart rate through varied movement.",
      "Run for the full 5 minutes, encouraging bigger, more confident movements as students warm up."
    ],
    warmdownSetup:"No equipment needed. Gather the class into a spread-out circle with room to balance without bumping others.",
    warmdownHowTo:[
      "Walk slowly around the space for about 1 minute to bring heart rate down.",
      "Lead a few slow, controlled breathing cycles together: breathe in for 4 counts, hold for 2, breathe out for 4 — repeat 3-4 times.",
      "Follow with 2-3 simple balance holds, e.g. standing on one foot for 10-15 seconds, then swap feet — this connects to the body control used in fielding and positioning.",
      "Keep the tone calm and unhurried — this is a good moment to help students settle before reflecting on the lesson.",
      "Finish standing tall with one final deep breath together before moving into the Discussion segment."
    ]
  },
  4:{name:"Team Tactics & Culmination", range:"Lessons 16–20", color:"var(--b4)", soft:"var(--b4-soft)", warmup:"Team Shape Jog", warmdown:"Circle Stretch & Cheer",
    warmupSetup:"Split the class into their tournament/practice teams (groups of 4-6), each team with a marked-out area to jog in (cones optional). No ball needed.",
    warmupHowTo:[
      "Each team jogs together as a group around their area, staying reasonably close to each other rather than spreading out randomly.",
      "Call out simple shape prompts as they jog: 'spread wide,' 'come together,' 'form a line,' 'form a diamond shape' — teams adjust their jogging shape on the call.",
      "This gets students moving together as a unit and thinking about team shape before the tactical focus of today's lesson.",
      "Rotate through several shape calls over the 5 minutes, mixing up the order.",
      "Keep energy high and encourage teams to communicate with each other while jogging.",
      "Finish with each team jogging back to a central point together as one group."
    ],
    warmdownSetup:"Gather each team (or the whole class) into a circle with enough room to stretch without touching neighbours.",
    warmdownHowTo:[
      "Walk slowly as a team/group for about 1 minute to bring heart rate down.",
      "In the circle, lead 3-4 simple static stretches together — calves, quads, hamstrings, and a shoulder/throwing-arm stretch — holding each for 15-20 seconds.",
      "Keep the group together and calm, using this as a settling-down moment after a high-energy tactical session.",
      "Finish with a short team cheer or acknowledgment — each team says one thing they're proud of from today's session or the block as a whole.",
      "Move directly into the Discussion segment once the cheer is done."
    ]
  }
};

const TEEBALL_LESSONS = [
 {
  "n": 1,
  "block": 1,
  "title": "Tee Time",
  "focus": "Batting stance & swing off the tee",
  "walt": "We are learning to hold a balanced batting stance and swing level and controlled at a ball on a tee.",
  "wilf": [
   "I can stand side-on in a balanced stance with hands together on the bat",
   "I can swing level through the ball rather than chopping down or scooping up"
  ],
  "nzc": "Strand B (Movement Concepts & Motor Skills) · Managing self",
  "value": "Aroha",
  "valueText": "Looking after yourself with patience while your stance and swing feel new and awkward, and encouraging teammates whose first hits look different from yours.",
  "equipment": "1 junior bat and soft/modified teeball per pair, batting tees, cones for spacing",
  "safety": "Batters spread well apart with a clear swinging radius; no one stands in front of or beside a batter at the tee; wait for a clear 'go' signal before hitting",
  "games": [
   {
    "name": "Grip & Stance Check",
    "desc": "Partners take turns checking each other's grip (hands together, 'V' shapes lined up) and side-on stance without hitting yet, giving friendly feedback.",
    "coach": "Hands together, front shoulder pointing toward where the ball sits on the tee.",
    "easier": "Use a visual reference card for grip/stance.",
    "harder": "Partner corrects without a reference.",
    "chaos": "Random constraint calls",
    "setup": "Pairs spread out with 2m gaps, no bat or ball needed yet. Each pair has one printed grip/stance picture card (or the coach's demonstration to refer back to) placed on the ground beside them.",
    "howTo": [
     "Demonstrate the grip (hands together, knuckle 'V' shapes lined up) and the side-on stance in front of the whole class first.",
     "Partner A sets up their grip and stance while Partner B checks it against the reference card, without any bat swinging yet.",
     "Partner B gives one piece of friendly feedback using the coaching cue: hands together, front shoulder pointing at an imaginary tee.",
     "Swap roles so Partner B sets up and Partner A checks.",
     "Rotate to a new partner every 2 minutes so students see a few different stances.",
     "Easier: keep the reference card in hand the whole time. Harder: card is put away after the first check, so the partner corrects from memory."
    ]
   },
   {
    "name": "Shadow Swing Freeze",
    "desc": "Students shadow-swing without a ball, freezing in a balanced position at the end of the swing on a call.",
    "coach": "Swing level through an imaginary line, not down and up.",
    "easier": "Slower swings, more time.",
    "harder": "Freeze called unpredictably.",
    "chaos": "Beat the clock",
    "setup": "Students spread out individually with at least a full arm-span plus bat-length of space each, in rows facing the coach. No ball or tee used — bats only, or an imaginary bat if bats are limited.",
    "howTo": [
     "Demonstrate a level shadow-swing (no ball) and show what a 'balanced freeze' looks like at the end of it.",
     "Students shadow-swing slowly on their own, focusing on a level path rather than chopping down or scooping up.",
     "On the coach's call of 'Freeze!', everyone stops mid-motion or at the end of the swing and holds the position for 3 seconds.",
     "Coach quickly scans the group and calls out 2-3 examples of good balance without singling anyone out negatively.",
     "Repeat 6-8 times, gradually increasing the swing speed.",
     "Easier: give students extra time before each freeze call. Harder: call 'Freeze!' at unpredictable points, including mid-swing."
    ]
   },
   {
    "name": "Tee Contact Count",
    "desc": "Small groups take turns hitting off the tee, counting only hits where the stance and swing technique were correct beforehand.",
    "coach": "Reset your stance fully before every single swing.",
    "easier": "Bigger, softer ball, closer tee height check.",
    "harder": "Standard ball, coach spot-checks technique each hit.",
    "chaos": "Scoring streaks",
    "setup": "Small groups of 3-4 at each batting tee station, spaced at least 5m apart. Each station needs 1 tee, 1 junior bat, and 4-5 soft/modified teeballs so the group doesn't stop to collect balls after every hit.",
    "howTo": [
     "Remind the group of the stance and swing checkpoints from the first two activities before anyone hits.",
     "One student bats while teammates stand well back outside the swinging radius and act as checkers.",
     "Before each swing, the group calls out whether the stance looked correct — only hits with a correct starting stance and level swing count toward the group's tally.",
     "After each swing, quickly reset the ball on the tee and the batter resets their stance fully before swinging again — no rushing between hits.",
     "Rotate the batter every 4-5 swings so everyone gets several turns.",
     "Easier: use a bigger, softer ball and lower the tee for an easier contact height. Harder: use the standard ball and have the coach spot-check technique on every single hit."
    ]
   }
  ],
  "big": {
   "name": "Tee Ball Technique Challenge",
   "desc": "Small groups rotate through batting-tee stations where a hit only counts toward the team total if the stance and swing were correct beforehand — technique earns the point, not just contact.",
   "setup": "Set up 3-4 batting-tee stations around the space, each 5-6m apart with its own tee, junior bat, and 4-5 balls. Split the class into small groups of 3-4 that rotate through every station.",
   "howTo": [
    "Explain the challenge: a hit only earns the team a point if the stance and swing were correct before contact, not just if the ball was hit.",
    "One group member bats at a time while the rest of the group act as technique-checkers, calling 'good technique' or 'reset' before each swing.",
    "The batter takes 4-5 swings, resetting their stance fully between each one; the group keeps a running tally of technique-approved hits.",
    "Rotate to the next station on the coach's signal (roughly every 3 minutes) so every group visits every station.",
    "Coach circulates and reinforces the key cue: hands together, side-on, swing level through the ball.",
    "Add up each group's technique-approved hit tally at the end for a friendly team total."
   ]
  },
  "discussion": [
   "What did a balanced, side-on stance feel like today?",
   "What's the difference between a level swing and a chop or a scoop?",
   "What was tricky about the new grip and stance?"
  ],
  "lookfors": [
   "Hands together in a balanced grip",
   "Side-on stance with front shoulder toward the tee",
   "Swings level through the ball rather than chopping or scooping"
  ],
  "inclusion": "Allow a wider stance and a lower/closer tee height for students building coordination and confidence; success is measured by technique, not power.",
  "skillBreakdown": [
   {
    "step": "Stand side-on with hands together in a balanced grip.",
    "why": "Side-on positioning and a joined grip give control and a consistent swing path."
   },
   {
    "step": "Keep your front shoulder pointing at the tee before swinging.",
    "why": "This alignment sets up a level, accurate swing."
   },
   {
    "step": "Swing level through the ball rather than chopping down or scooping up.",
    "why": "A level swing gives the most consistent contact."
   }
  ]
 },
 {
  "n": 2,
  "block": 1,
  "title": "Line Drive",
  "focus": "Batting — contact & direction",
  "walt": "We are learning to make clean contact with the ball and direct our hit toward a target area.",
  "wilf": [
   "I can make contact with the middle of the bat, not the handle or the end",
   "I can aim my hit toward a chosen target area by adjusting where I make contact"
  ],
  "nzc": "Strand B · Managing self",
  "value": "Mōhio",
  "valueText": "Understanding your own contact point and what changes when the ball goes where you intended rather than by accident.",
  "equipment": "Junior bats, soft/modified teeballs, batting tees, cones marking target zones",
  "safety": "Same batting-radius spacing rules as Lesson 1; only one batter hits at a time per tee station",
  "games": [
   {
    "name": "Sweet Spot Search",
    "desc": "Batters experiment with contact point on the bat, noticing how a hit off the middle of the bat feels and travels differently to a hit off the handle or end.",
    "coach": "Watch the ball onto the bat, don't guess where it is.",
    "easier": "Bigger bat/target zone on the bat.",
    "harder": "Call out where contact was made immediately after hitting.",
    "chaos": "Random constraint calls",
    "setup": "Batters work individually at their own tee station (or share one tee between 2 with soft foam balls if tees are limited), spaced at least 5m apart. Each station has 1 tee, 1 bat, and 4-5 balls.",
    "howTo": [
     "Show students the middle of the bat ('the sweet spot') versus hitting near the handle or the end.",
     "Batter hits 3 balls aiming to feel the difference, calling out after each swing whether contact felt solid (middle) or 'thin' (handle/end).",
     "Encourage batters to watch the ball onto the bat rather than guessing where contact happened.",
     "Reset the ball on the tee after every swing and pause briefly before the next one so each swing is a fresh, focused attempt.",
     "Rotate turns every 3-4 swings if sharing a station.",
     "Easier: use a bigger bat or mark a larger target zone on the bat face. Harder: batter must call out where contact was made immediately after hitting, before anyone else says it."
    ]
   },
   {
    "name": "Left, Right, Straight",
    "desc": "Batters aim their hit toward one of three marked zones (left, straight, right) called before each swing.",
    "coach": "Adjust your contact point slightly, not your whole swing, to change direction.",
    "easier": "Wider zones, fewer choices.",
    "harder": "Narrower zones, quick-fire calls.",
    "chaos": "Random constraint calls",
    "setup": "Each tee station has 3 cone-marked target zones set out roughly 8-10m in front of the tee: one to the left, one straight ahead, one to the right, each about 3-4m wide.",
    "howTo": [
     "Show the group the three target zones and explain that a slight change in contact point (not the whole swing) sends the ball a different direction.",
     "A partner calls one zone ('Left!', 'Straight!', or 'Right!') just before the batter sets up for each swing.",
     "Batter aims their hit toward the called zone, adjusting only their contact point on the ball.",
     "After each swing, reset the ball on the tee and call the next zone before the batter is fully set, so they commit to a target rather than reacting to the ball.",
     "Rotate the batter/caller roles every 4-5 swings.",
     "Easier: use wider zones and only two choices (left/right). Harder: narrow the zones and call them quick-fire with less setup time."
    ]
   },
   {
    "name": "Direction Streak",
    "desc": "Small groups tally how many hits in a row land in the called target zone.",
    "coach": "Commit to your target before you swing.",
    "easier": "Bigger zones, more attempts.",
    "harder": "Smaller zones, must call zone before seeing where teammates are fielding.",
    "chaos": "Scoring streaks, beat the clock",
    "setup": "Small groups of 3-4 share one tee station with the same 3 target zones marked from the previous activity. Keep 5-6 balls at the station to avoid stopping for retrieval.",
    "howTo": [
     "Explain that the group is now counting a shared tally of consecutive hits that land in the called zone.",
     "One student calls the zone, the batter swings, and a teammate confirms out loud whether the ball landed in the correct zone.",
     "Keep a running tally of the current streak; if a hit misses the called zone, the streak resets to zero but play continues without stopping to discuss it.",
     "Rotate the batter after every 4-5 attempts so everyone gets a turn at building the group's streak.",
     "Coach circulates and calls out group streak totals to build friendly energy.",
     "Easier: use bigger zones and allow more attempts before rotating. Harder: use smaller zones and require the batter to call their own target before seeing where teammates are standing to field."
    ]
   }
  ],
  "big": {
   "name": "Target Zone Teeball",
   "desc": "Small-sided game where batters score bonus points for placing a hit into a called or open target zone, rewarding controlled direction over just hitting the ball hard.",
   "setup": "Set up a small-sided field with the 3 target zones marked further out (roughly 12-15m from the tee) using cones, plus 2-3 fielders per batting group spread across the zones.",
   "howTo": [
    "Explain that batters score a bonus point for placing a hit into a called or open target zone, on top of any normal play.",
    "Batter hits from the tee, either aiming at a zone called by a teammate or spotting an open zone themselves before swinging.",
    "Fielders react and field the ball as normal; the coach or a scorer notes whether the hit landed in the intended zone for the bonus point.",
    "After each hit, quickly reset the tee and rotate the next batter in — keep the pace moving so everyone gets several turns.",
    "Rotate batting and fielding groups roughly halfway through so every student bats and fields.",
    "Coach highlights examples of batters successfully placing the ball rather than just hitting it hard."
   ]
  },
  "discussion": [
   "What helped you make clean contact today?",
   "How did changing your contact point change the direction of your hit?",
   "What's the difference between hitting hard and hitting with control?"
  ],
  "lookfors": [
   "Makes contact near the middle of the bat",
   "Adjusts contact point to influence direction",
   "Commits to a target before swinging"
  ],
  "inclusion": "Use larger target zones and a closer/lower tee for students building contact consistency; success is measured by clean contact before direction.",
  "skillBreakdown": [
   {
    "step": "Watch the ball onto the bat through contact.",
    "why": "Watching the contact point, not the target, is what actually connects a clean hit."
   },
   {
    "step": "Aim to contact the middle of the bat, not the handle or end.",
    "why": "The middle of the bat gives the most control and power."
   },
   {
    "step": "Adjust your contact point slightly to influence the ball's direction.",
    "why": "Small technical adjustments control direction better than changing your whole swing."
   }
  ]
 },
 {
  "n": 3,
  "block": 1,
  "title": "Bullseye Throw",
  "focus": "Throwing — accuracy to a target",
  "walt": "We are learning to throw accurately to a target using a controlled overarm technique.",
  "wilf": [
   "I can point my non-throwing shoulder at the target before releasing",
   "I can step toward the target with my opposite foot as I throw"
  ],
  "nzc": "Strand B · Managing self",
  "value": "Manaaki",
  "valueText": "Giving your partner a fair, honest target and a genuine effort to throw well to them — teammates rely on each other's accuracy.",
  "equipment": "1 soft/modified teeball per pair, cones, target markers (hoops or chalk circles)",
  "safety": "Spread pairs well apart before throwing; throw only on a clear 'go' signal; never throw at another person, only at markers/gloves",
  "games": [
   {
    "name": "Shoulder Point Practice",
    "desc": "Standing side-on to a target, students practise pointing their non-throwing shoulder at it and stepping through before any ball is thrown.",
    "coach": "Point, step, then throw — don't throw side-on without stepping.",
    "easier": "Slower, exaggerated steps.",
    "harder": "Add the ball, quicker sequence.",
    "chaos": "Random constraint calls",
    "setup": "Students spread out individually, each facing a cone or wall target about 5-8m away. No ball is used for this activity — bodyweight only.",
    "howTo": [
     "Demonstrate standing side-on to the target with the non-throwing shoulder pointing directly at it.",
     "Students practise the sequence: point the shoulder at the target, step toward it with the front foot, then mime a throwing action.",
     "Repeat the point-step-throw sequence slowly 5-6 times, pausing to check shoulder alignment each time.",
     "Coach circulates and reinforces the cue: point, step, then throw — don't throw side-on without stepping through.",
     "Once the sequence looks consistent, add a gentle jog-through version to build rhythm.",
     "Easier: exaggerate and slow down each part of the sequence. Harder: add a real ball and speed the sequence up."
    ]
   },
   {
    "name": "Target Toss",
    "desc": "Partners throw at a hoop or cone target from a set distance, scoring a point for a clean hit inside the target.",
    "coach": "Follow through toward the target after release.",
    "easier": "Bigger target, closer distance.",
    "harder": "Smaller target, further distance.",
    "chaos": "Scoring streaks",
    "setup": "Pairs each have 1 soft/modified teeball and a hoop or cone target set up 5-6m apart. Space pairs at least 3m apart from each other.",
    "howTo": [
     "Remind students of the point-step-throw sequence from the previous activity before adding the target.",
     "Partner A throws at the target from the set distance while Partner B stands well clear to retrieve.",
     "A clean hit inside the target scores a point; the pair keeps a simple running tally.",
     "After each throw, Partner B quickly returns the ball so the pair can keep a good pace without long pauses.",
     "Swap thrower and retriever roles every 5 throws.",
     "Easier: use a bigger target and move closer. Harder: use a smaller target and increase the throwing distance."
    ]
   },
   {
    "name": "Moving Target Rotation",
    "desc": "Small groups rotate through three targets at different distances/angles, tallying accurate throws as a team total.",
    "coach": "Reset your stance and aim fresh for every new angle.",
    "easier": "Fewer, closer targets.",
    "harder": "More targets, mixed distances, time limit.",
    "chaos": "Beat the clock, bonus objectives",
    "setup": "Small groups of 3-4 share a set of 3 targets placed at different distances and angles (e.g. 4m, 6m, and 8m away, at slightly different angles), each marked with a cone or hoop.",
    "howTo": [
     "Explain that the group rotates through all three targets, tallying accurate throws as one team total.",
     "One student throws at Target 1 while teammates retrieve and reset; after 2-3 throws, rotate to Target 2, then Target 3.",
     "Before each new target, the thrower resets their stance and aims fresh rather than carrying over the angle from the previous target.",
     "Keep a shared tally of clean hits across all three targets for the group.",
     "Rotate the throwing role after each full circuit of the three targets.",
     "Easier: use fewer, closer targets. Harder: add all three targets with mixed distances and a time limit for the full circuit."
    ]
   }
  ],
  "big": {
   "name": "Bullseye Base Relay",
   "desc": "Small teams relay-throw at a set of base targets, tagging the next teammate only after a clean hit; fastest team to hit every target wins, rewarding accuracy under a bit of pressure.",
   "setup": "Mark out 4-5 base-shaped targets in a wide relay formation, each about 6-8m apart, with small teams of 3-4 lined up at a start cone. Each team has 1 ball.",
   "howTo": [
    "Explain the relay: the team must hit every base target cleanly before the relay is complete, tagging the next teammate only after a clean hit.",
    "First thrower in each team throws at the nearest base target; if it's a clean hit, they tag the next teammate to go, who retrieves the ball and throws at the next target.",
    "If a throw misses, that same thrower retrieves the ball and tries again before passing on — accuracy is required to progress.",
    "Continue until the team has hit every base target in the sequence; the first team to finish calls out and wins that round.",
    "Reset all teams to the start and run 2-3 more rounds, mixing up the target order each time.",
    "Coach reminds students to throw only on a clear 'go' and never at another person, only at the markers."
   ]
  },
  "discussion": [
   "What helped your throws land accurately today?",
   "How did pointing your shoulder and stepping change your throw?",
   "What did a fair, genuine target from your partner look like?"
  ],
  "lookfors": [
   "Points non-throwing shoulder at the target before releasing",
   "Steps toward the target with the opposite foot",
   "Follows through after release"
  ],
  "inclusion": "Use a bigger, softer ball and closer, larger targets for students building throwing confidence; success is measured by technique and effort, not just hits.",
  "skillBreakdown": [
   {
    "step": "Point your non-throwing shoulder at the target before releasing.",
    "why": "Aligns your whole body toward accuracy."
   },
   {
    "step": "Step toward the target with your opposite foot as you throw.",
    "why": "The step adds accuracy and a little natural power."
   },
   {
    "step": "Follow through toward the target after release.",
    "why": "Stopping the arm early reduces both accuracy and power."
   }
  ]
 },
 {
  "n": 4,
  "block": 1,
  "title": "Two Safe Hands",
  "focus": "Catching — two-handed catches",
  "walt": "We are learning to catch a ball cleanly using two hands and soft, giving hands.",
  "wilf": [
   "I can form a 'basket' or 'W' shape with my hands to receive the ball",
   "I can give slightly with my hands and arms on contact rather than catching stiff-armed"
  ],
  "nzc": "Strand B · Managing self",
  "value": "Pānga",
  "valueText": "Thinking ahead about your hand shape and body position before the ball arrives, rather than just reacting at the last second.",
  "equipment": "1 soft/modified teeball per pair, cones",
  "safety": "Use soft/modified balls only; spread pairs out; call 'mine!' loudly to avoid collisions",
  "games": [
   {
    "name": "Basket Hands Practice",
    "desc": "Partners gently toss the ball to each other, receiver practises forming a soft two-handed basket shape and giving on contact.",
    "coach": "Give with your hands on contact, don't snatch or stab at the ball.",
    "easier": "Slower, gentler tosses.",
    "harder": "Firmer, faster tosses.",
    "chaos": "Scoring streaks",
    "setup": "Pairs stand 3-4m apart with 1 soft/modified teeball per pair, spaced at least 2m from neighbouring pairs.",
    "howTo": [
     "Demonstrate the two-handed 'basket' shape — fingers up for a ball above the waist, fingers down for a ball below the waist — and show giving with the hands on contact.",
     "Partner A gently tosses underarm to Partner B, who catches with two hands, forming the basket shape and giving slightly on contact.",
     "Partner B tosses back to Partner A, keeping a steady rhythm of gentle, catchable tosses.",
     "Coach reinforces the cue: give with your hands on contact, don't snatch or stab at the ball.",
     "Continue for 2-3 minutes, then swap who starts the toss so both partners get equal reps.",
     "Easier: slow, gentle, close tosses. Harder: slightly firmer, faster tosses from the same distance."
    ]
   },
   {
    "name": "Call & Catch",
    "desc": "Small groups of 3-4 stand in a circle; one player tosses, calling a name — that player calls 'mine!' and moves to catch cleanly with two hands.",
    "coach": "Move your feet to get in line with the ball early.",
    "easier": "Slower, more predictable tosses.",
    "harder": "Faster, less predictable tosses, more players in the circle.",
    "chaos": "Random constraint calls",
    "setup": "Groups of 3-4 stand in a circle with roughly 2m between each student, 1 soft/modified teeball per group.",
    "howTo": [
     "Explain that one student starts with the ball, tosses to any other student in the circle, and calls that student's name as they toss.",
     "The named student calls 'mine!' loudly, moves their feet to get in line with the ball, and catches cleanly with two hands.",
     "That student then becomes the new tosser, calling a different name and tossing to them.",
     "Keep the ball moving around the circle for 2-3 minutes, making sure everyone gets multiple turns catching.",
     "Coach reminds the group to call 'mine!' early to avoid two players going for the same ball.",
     "Easier: slower, more predictable tosses to nearby players. Harder: faster, less predictable tosses, and add 1-2 extra players to the circle."
    ]
   },
   {
    "name": "Clean Catch Streak",
    "desc": "Pairs count consecutive clean two-handed catches, trying to beat their own best streak.",
    "coach": "Reset your hand shape after every catch.",
    "easier": "Bigger, softer ball, closer distance.",
    "harder": "Standard ball, greater distance.",
    "chaos": "Beat the clock (own record)",
    "setup": "Pairs stand 3-4m apart with 1 soft/modified teeball, spaced well clear of neighbouring pairs.",
    "howTo": [
     "Pairs toss the ball back and forth underarm, counting out loud each consecutive clean two-handed catch.",
     "If the ball is dropped or caught with one hand, the pair calls out the number they reached and restarts the count from zero — no stopping to discuss it, just keep going.",
     "Coach reminds pairs to reset their hand shape (basket ready) after every single catch, not just the first one.",
     "Pairs try to beat their own best streak from earlier in the activity.",
     "After 3 minutes, ask a few pairs to share their best streak for some friendly recognition.",
     "Easier: use a bigger, softer ball and stand closer together. Harder: use the standard ball and increase the distance between partners."
    ]
   }
  ],
  "big": {
   "name": "Around the Diamond Catch",
   "desc": "Small groups spread around a diamond shape; a feeder throws to each player in turn while the group counts total clean two-handed catches as a team score, rotating the feeder role regularly.",
   "setup": "Small groups of 4-5 spread out around a diamond shape (using bases or cones), roughly 5-6m between each point, with one student in the middle as the feeder holding the ball.",
   "howTo": [
    "Explain that the feeder throws to each player around the diamond in turn, and the group counts total clean two-handed catches as a team score.",
    "Feeder throws a gentle, catchable ball to the first player on the diamond, who catches with two hands and calls the tally number out loud.",
    "The player then returns the ball to the feeder, who throws to the next player around the diamond in sequence.",
    "Continue around the diamond, keeping the running team tally going even if a catch is missed — just move to the next player.",
    "Rotate the feeder role every full lap of the diamond so everyone gets a turn to throw as well as catch.",
    "Coach calls out team totals between rotations to build encouragement and energy."
   ]
  },
  "discussion": [
   "What helped you catch cleanly with two hands today?",
   "How did giving with your hands change how the catch felt?",
   "What did you do differently for a faster throw versus a gentle one?"
  ],
  "lookfors": [
   "Forms a soft two-handed shape before the ball arrives",
   "Gives with hands and arms on contact",
   "Moves feet early to get in line with the ball"
  ],
  "inclusion": "Use a larger, very soft ball and gentler tosses for students building catching confidence; allow a bounce-first version before progressing to catching on the full.",
  "skillBreakdown": [
   {
    "step": "Form a soft two-handed 'basket' shape to receive the ball.",
    "why": "Gives a secure, wide surface for a clean catch."
   },
   {
    "step": "Give slightly with your hands and arms on contact.",
    "why": "Absorbs the ball's speed instead of it bouncing away."
   },
   {
    "step": "Move your feet early to get in line with the ball.",
    "why": "Being in position early is more reliable than reaching at the last second."
   }
  ]
 },
 {
  "n": 5,
  "block": 1,
  "title": "Down and Scoop",
  "focus": "Fielding ground balls",
  "walt": "We are learning to field a ground ball cleanly by getting low and in line behind it.",
  "wilf": [
   "I can get my body low and in line behind a ground ball",
   "I can scoop the ball up with two soft hands close to the ground"
  ],
  "nzc": "Strand B · Managing self",
  "value": "Aroha",
  "valueText": "Being patient with yourself while ground fielding technique feels new, and encouraging teammates whose early attempts look different from yours.",
  "equipment": "1 soft/modified teeball per pair, cones",
  "safety": "Soft/modified balls only; check the ground surface for hazards before ground-fielding games",
  "games": [
   {
    "name": "Low Roller Scoop",
    "desc": "Partners roll the ball along the ground to each other, receiver gets low and scoops it up with two hands.",
    "coach": "Get your body behind the ball as a backstop, don't just reach with your hands.",
    "easier": "Slower rolls, closer distance.",
    "harder": "Faster rolls, further distance.",
    "chaos": "Random constraint calls",
    "setup": "Pairs stand 4-5m apart with 1 soft/modified teeball, on a checked, hazard-free surface. Space pairs at least 2m apart.",
    "howTo": [
     "Demonstrate getting low with knees bent and body positioned behind the ball as a backstop, scooping with two hands rather than just reaching.",
     "Partner A rolls the ball steadily along the ground toward Partner B.",
     "Partner B moves to get behind the ball, gets low, and scoops it up with two hands rather than stabbing at it with one.",
     "Partner B rolls the ball back to Partner A, keeping a steady rhythm.",
     "Swap roller and fielder roles every 4-5 rolls.",
     "Easier: slower rolls from a closer distance. Harder: faster rolls from further away."
    ]
   },
   {
    "name": "In Line & Down",
    "desc": "Partners roll the ball slightly to one side, and the fielder must move to get in line with it before getting low to scoop.",
    "coach": "Move your feet first to get in line, then get low.",
    "easier": "Rolls closer to the fielder's starting position.",
    "harder": "Wider rolls requiring more movement.",
    "chaos": "Scoring streaks",
    "setup": "Pairs stand 4-5m apart with 1 soft/modified teeball, on the same checked surface used for Low Roller Scoop.",
    "howTo": [
     "Explain that this time the roll won't come straight at the fielder — they need to move to get in line with it first.",
     "Partner A rolls the ball slightly to one side of Partner B rather than directly at them.",
     "Partner B shuffles sideways to get their body in line with the ball's path before getting low to scoop it.",
     "Coach reinforces the cue: move your feet first to get in line, then get low — don't reach across your body.",
     "Swap roller and fielder roles every 4-5 rolls, alternating which side the roll goes to.",
     "Easier: roll closer to the fielder's starting position so less movement is needed. Harder: roll wider, requiring a bigger lateral movement."
    ]
   },
   {
    "name": "Ground Ball Relay",
    "desc": "Small teams relay a rolled ball down a line, each player fielding cleanly before passing on; fastest clean team wins.",
    "coach": "Get down low and in line with the ball every time.",
    "easier": "Slower pace, shorter distance.",
    "harder": "Faster pace, longer line.",
    "chaos": "Beat the clock, head-to-head mirror",
    "setup": "Small teams of 3-4 line up single file with roughly 3m between each teammate, 1 soft/modified teeball per team, on the checked surface.",
    "howTo": [
     "Explain the relay: the first player rolls the ball to the second, who must field it cleanly (get in line, get low, scoop) before rolling it on to the third player.",
     "If a roll is fumbled, that player must gather it fully and cleanly before continuing — no passing on a bad gather.",
     "Continue down the line until the ball reaches the last player, who raises it overhead to signal the team is finished.",
     "Run 2-3 rounds, having the line reset and go again each time so everyone touches the ball multiple times.",
     "Coach calls out the finishing order for some friendly competitive energy.",
     "Easier: slower pace and a shorter line. Harder: faster pace, a longer line, or a head-to-head mirror race against another team's line."
    ]
   }
  ],
  "big": {
   "name": "Diamond Ground Ball Game",
   "desc": "Small-sided game where the fielding team scores points for clean ground ball gathers, rewarding the full technique — getting in line, getting low, and scooping softly — not just stopping the ball.",
   "setup": "Set up a small-sided diamond area with 2-3 fielders per group and a feeder rolling or gently hitting ground balls from home plate, using the same checked, hazard-free surface.",
   "howTo": [
    "Explain that the fielding team scores a point for every clean ground ball gather — getting in line, getting low, and scooping softly, not just stopping the ball anywhere.",
    "Feeder rolls a ground ball toward one of the fielders in turn.",
    "The fielder moves to get in line, gets low, and scoops the ball with two hands; a teammate or coach confirms whether it met the full technique to count for the point.",
    "Fielder returns the ball to the feeder for the next roll, keeping the pace moving.",
    "Rotate the feeder role and fielding positions every few minutes so everyone gets a turn in each role.",
    "Coach highlights full-technique gathers over ones that just happen to stop the ball."
   ]
  },
  "discussion": [
   "What did getting your body low and in line help you do today?",
   "How is fielding a ground ball different from catching a high ball?",
   "What made a good, fair roll from your partner?"
  ],
  "lookfors": [
   "Moves to get in line with the ball before getting low",
   "Gets body low behind the ball",
   "Uses soft hands to scoop rather than stab at the ball"
  ],
  "inclusion": "Use a larger, slower-rolling ball for students building ground fielding confidence; allow kneeling as a starting technique before progressing to a full low crouch.",
  "skillBreakdown": [
   {
    "step": "Move to get in line with the ball before getting low.",
    "why": "Your feet need to find the right position before your hands can do their job."
   },
   {
    "step": "Get your body low and behind the ball as a backstop.",
    "why": "If the ball gets past your hands, your body can still stop it."
   },
   {
    "step": "Scoop the ball up with two soft hands.",
    "why": "Soft hands absorb the ball rather than it bouncing away."
   }
  ]
 },
 {
  "n": 6,
  "block": 2,
  "title": "Call It & Cover",
  "focus": "Fielding — communication & backing up",
  "walt": "We are learning to communicate clearly in the field and back up a teammate's throw.",
  "wilf": [
   "I can call clearly to claim a ball or direct a teammate ('mine!', 'yours!', 'back up!')",
   "I can position myself behind a teammate receiving a throw in case it's missed"
  ],
  "nzc": "Strand B, C · Relating to others",
  "value": "Mōhio",
  "valueText": "Understanding your role in relation to your teammates — reading where support is needed before it's needed.",
  "equipment": "Soft/modified balls, cones, base markers",
  "safety": "Standard field safety for multiple simultaneous small games",
  "games": [
   {
    "name": "Call It Loud",
    "desc": "Small groups practise calling clearly as a ball is fed toward two or more potential fielders.",
    "coach": "Call early and loudly — hesitation causes mistakes.",
    "easier": "Slower feeds, obvious calls.",
    "harder": "Faster feeds, players must decide who calls.",
    "chaos": "Random constraint calls",
    "setup": "Small groups of 3-4 spread across a marked area roughly 8m x 8m, with 1 soft/modified ball per group and 2-3 cones marking rough fielding zones.",
    "howTo": [
     "Explain that when a ball could be fielded by more than one player, whoever is going for it must call loudly and early so teammates know to leave it to them.",
     "A coach or student feeder rolls or tosses the ball toward a spot between two potential fielders.",
     "Whichever fielder gets there first calls out clearly (e.g. 'Mine!' or 'Got it!') as early as possible, ideally before the ball arrives.",
     "The other fielder(s) back off and let the caller take the ball cleanly.",
     "Repeat with different feeds so different pairs of fielders get the chance to call.",
     "Easier: slower feeds with an obvious closest fielder. Harder: faster feeds where it's less obvious who should call."
    ]
   },
   {
    "name": "Backstop Positioning",
    "desc": "Trios practise: one throws to a base/target, a second fields, a third positions behind as a backstop in case the throw is missed.",
    "coach": "Always know where your backstop is before you throw.",
    "easier": "Backstop close and obvious.",
    "harder": "Backstop must find their own position.",
    "chaos": "Role rotation",
    "setup": "Trios spread out with roughly 6-8m between the thrower and the target/base, and the backstop positioned a few metres behind the target. 1 soft/modified ball per trio.",
    "howTo": [
     "Explain the three roles: a thrower aiming at a base/target, a fielder near the target, and a backstop positioned behind in case the throw is missed.",
     "The backstop finds and holds a position directly behind the target before the throw happens.",
     "The thrower throws toward the target; if the fielder misses or the throw goes wide, the backstop retrieves it so the ball doesn't travel far.",
     "Coach reinforces the cue: always know where your backstop is before you throw.",
     "Rotate the three roles every 4-5 throws so everyone experiences each job.",
     "Easier: backstop stands close and obvious. Harder: backstop must find and hold their own position without being told exactly where."
    ]
   },
   {
    "name": "Team Field Communication",
    "desc": "Small-sided fielding game where the coach specifically rewards clear calling and correct backing-up positions, not just stopping the ball.",
    "coach": "Talk constantly — a quiet field is a field making mistakes.",
    "easier": "Bigger space, more time.",
    "harder": "Smaller space, faster play.",
    "chaos": "Bonus objectives",
    "setup": "Small-sided fielding groups of 4-5 spread across a mini-diamond area, with a feeder hitting or throwing balls into play. Cones mark rough zone boundaries.",
    "howTo": [
     "Explain that points are earned specifically for clear calling and correct backing-up positions, not just for stopping the ball.",
     "Feeder sends a ball into a zone between two or more fielders.",
     "Fielders call loudly and early to establish who is taking the ball, while others move into backing-up positions.",
     "Coach or a nominated scorer awards a point when the calling and backing-up were clear and correct, regardless of whether the ball was cleanly stopped.",
     "Rotate the feeder role and fielding positions every few minutes.",
     "Easier: bigger space and slower feeds give more time to call and move. Harder: smaller space and faster play demand quicker calls."
    ]
   }
  ],
  "big": {
   "name": "Backed-Up Fielding Teeball",
   "desc": "Small-sided game where the fielding team earns bonus points any time a missed stop is cleanly backed up by a teammate, reinforcing that fielding is a team effort.",
   "setup": "Set up a small-sided fielding game on a mini-diamond with 4-5 fielders per team and a feeder/batter sending balls into play from home plate.",
   "howTo": [
    "Explain that the fielding team earns bonus points any time a missed stop is cleanly backed up by a teammate, on top of normal fielding plays.",
    "Feeder hits or throws the ball into play; fielders call and move to field it using the calling and backing-up habits from the earlier activities.",
    "If the first fielder misses the ball, the backstop's clean recovery earns the team a bonus point, reinforcing that fielding is a team effort.",
    "Rotate the feeder role and fielding positions every few minutes so everyone experiences different spots on the field.",
    "Coach specifically praises backing-up plays out loud, not just clean first stops.",
    "Keep a simple running tally of bonus points to add some friendly competitive energy."
   ]
  },
  "discussion": [
   "What helped your team communicate clearly in the field today?",
   "Why does backing up a teammate matter, even when most throws are caught cleanly?",
   "What did good team fielding look like when you saw it?"
  ],
  "lookfors": [
   "Calls clearly and early to claim the ball or direct others",
   "Positions behind a teammate receiving a throw",
   "Adjusts backing-up position as play develops"
  ],
  "inclusion": "Use clear visual cues (a cone marking the backstop spot) for students who find reading support positioning challenging.",
  "skillBreakdown": [
   {
    "step": "Call clearly and early to claim a ball or direct a teammate.",
    "why": "Clear calls prevent collisions and confusion between fielders."
   },
   {
    "step": "Position yourself behind a teammate receiving a throw.",
    "why": "Gives your team a second chance if the first stop is missed."
   },
   {
    "step": "Adjust your backing-up position as the play develops.",
    "why": "The right position changes as the ball and players move."
   }
  ]
 },
 {
  "n": 7,
  "block": 2,
  "title": "Running Form",
  "focus": "Base running — technique & speed",
  "walt": "We are learning correct base running technique — a strong sprint path and running through first base.",
  "wilf": [
   "I can run in a straight, efficient line to the base without slowing early",
   "I can run through first base rather than stopping on top of it"
  ],
  "nzc": "Strand A, B · Managing self",
  "value": "Manaaki",
  "valueText": "Giving your full, honest effort every time you run, even in practice reps — your team benefits from your genuine effort on the bases.",
  "equipment": "Bases/markers, cones",
  "safety": "Clear running lanes; only one runner per lane at a time; stop safely well beyond the base",
  "games": [
   {
    "name": "Sprint to the Bag",
    "desc": "Students practise a full sprint from home to first base, focusing on a straight running line and running through the base rather than stopping on it.",
    "coach": "Run through the bag, don't slow down to stop on it.",
    "easier": "Shorter distance, walk-through first.",
    "harder": "Full distance, timed.",
    "chaos": "Beat the clock",
    "setup": "Mark a clear running lane from home plate to first base (roughly 15-18m), with only one runner using the lane at a time. Use cones to mark the lane edges.",
    "howTo": [
     "Demonstrate a full sprint from home to first base, emphasising a straight line and running through the base rather than slowing down to stop on it.",
     "One student at a time sprints the full distance while others wait clear of the lane.",
     "Runner focuses on running through the bag and only slowing down safely well beyond it.",
     "Coach reinforces the cue: run through the bag, don't slow down to stop on it.",
     "Rotate runners quickly so everyone gets 2-3 full sprints.",
     "Easier: shorter distance and a walk-through first. Harder: full distance, timed for a personal best."
    ]
   },
   {
    "name": "Explosive Start Practice",
    "desc": "Students practise the first few explosive steps out of a ready position before a full sprint to first base.",
    "coach": "Drive low out of your first two steps, then rise into your sprint.",
    "easier": "Slower first steps, more time.",
    "harder": "Full-speed reaction start.",
    "chaos": "Random constraint calls",
    "setup": "Students line up individually at a start cone, each with a clear lane of at least 5-6m to practise the first few steps, spaced well apart from neighbours.",
    "howTo": [
     "Demonstrate a ready position and the first two explosive steps out of it, showing a low drive before rising into a sprint.",
     "Students practise from a ready position, driving low out of the first two steps on a 'Go!' call, then rising into a short sprint.",
     "Coach reinforces the cue: drive low out of your first two steps, then rise into your sprint.",
     "Repeat 5-6 times, giving feedback on the explosiveness of the first steps rather than overall speed.",
     "Progress to a full sprint to first base once the start looks solid.",
     "Easier: slower first steps with more time to think about the position. Harder: a full-speed reaction start on an unpredictable 'Go!' signal."
    ]
   },
   {
    "name": "Timed Base Sprint",
    "desc": "Partners time each other's sprint from home to first base, trying to beat their own personal best.",
    "coach": "Focus on your own technique and time, not comparing to others.",
    "easier": "Shorter distance.",
    "harder": "Full distance, add a swing/contact before the sprint.",
    "chaos": "Beat the clock (own record)",
    "setup": "Pairs share the home-to-first running lane, with one partner timing (phone stopwatch or simple count) while the other runs, spaced so only one pair uses the lane at a time.",
    "howTo": [
     "Explain that partners will time each other's sprint from home to first base and try to beat their own personal best.",
     "Partner A sprints the full distance while Partner B times from the first movement to reaching the base.",
     "Partner B tells Partner A their time immediately afterward.",
     "Swap roles so Partner B runs and Partner A times.",
     "Repeat 2-3 times each, encouraging students to focus on their own technique and time rather than comparing to others.",
     "Easier: shorter distance. Harder: full distance, with a swing/contact off the tee added before the sprint begins."
    ]
   }
  ],
  "big": {
   "name": "Sprint & Score Teeball",
   "desc": "Modified small-sided game where every hit requires a full sprint through first base, with coaching focus on running technique and effort rather than just the outcome of the hit.",
   "setup": "Set up a small-sided game with a tee, home plate, and first base marked at full running distance, with fielders spread to field hits.",
   "howTo": [
    "Explain that every hit in this game requires a full sprint through first base, and the coach is watching running technique and effort, not just the outcome of the hit.",
    "Batter hits off the tee, then sprints immediately, running through the base rather than stopping on it.",
    "Fielders field the ball and make a simple play, but the coaching focus stays on the runner's technique and effort.",
    "Coach calls out specific examples of good running technique after plays, separate from whether the runner was 'safe.'",
    "Rotate batters through quickly so everyone gets several sprints; rotate fielders partway through.",
    "Keep the pace brisk so students get plenty of running reps in the available time."
   ]
  },
  "discussion": [
   "What did a strong sprint to first base feel like today?",
   "Why does running through the base matter instead of stopping on it?",
   "What did your personal best sprint time teach you about effort?"
  ],
  "lookfors": [
   "Runs in a straight, efficient line to the base",
   "Runs through the base rather than slowing to stop on it",
   "Shows genuine effort on every sprint rep"
  ],
  "inclusion": "Allow a walk-through or shorter distance for students building running confidence or fitness; success is measured by technique and effort, not raw speed.",
  "skillBreakdown": [
   {
    "step": "Run in a straight, efficient line to the base.",
    "why": "A wandering running line wastes time and effort."
   },
   {
    "step": "Run through the base rather than stopping on top of it.",
    "why": "Slowing down early costs valuable time getting to base safely."
   },
   {
    "step": "Drive low out of your first two steps, then rise into your sprint.",
    "why": "An explosive, low start gets you to top speed faster."
   }
  ]
 },
 {
  "n": 8,
  "block": 2,
  "title": "Go or No-Go",
  "focus": "Base running — reading when to run",
  "walt": "We are learning to read a fielding situation and decide when it's safe to run to the next base.",
  "wilf": [
   "I can watch where the ball is fielded before deciding to run",
   "I can hold up at a base when the fielding team has the ball under control"
  ],
  "nzc": "Strand B · Thinking",
  "value": "Pānga",
  "valueText": "Thinking ahead about the fielding situation before you commit to running, rather than just reacting without looking.",
  "equipment": "Bases/markers, soft/modified balls, cones",
  "safety": "Standard base running safety; runners must be able to see the fielding situation clearly before committing",
  "games": [
   {
    "name": "Watch & Decide",
    "desc": "Runners practise watching a fielder gather a ball and deciding out loud whether it's a 'go' or 'no-go' situation, without actually running yet.",
    "coach": "Watch the fielder's hands and body, not just the ball in flight.",
    "easier": "Obvious, slow fielding situations.",
    "harder": "Quick, less obvious fielding situations.",
    "chaos": "Random constraint calls",
    "setup": "Small groups of 3-4 stand near a base, with one student acting as a fielder gathering a ball while others act as runners who watch but don't run yet.",
    "howTo": [
     "Explain that runners will practise reading a fielding situation and calling out whether it's a 'go' or 'no-go', without actually running.",
     "A student fielder gathers a ball (rolled or gently thrown) in front of the group.",
     "The 'runner' watches the fielder's hands and body position, then calls out loud 'Go!' or 'No-go!' based on what they see.",
     "Coach reinforces the cue: watch the fielder's hands and body, not just the ball in flight.",
     "Rotate the fielder and runner roles every few reps so everyone practises reading the situation.",
     "Easier: use obvious, slow fielding situations. Harder: use quicker, less obvious fielding situations."
    ]
   },
   {
    "name": "Hold or Go Base Runs",
    "desc": "Runners practise a short run and must decide, based on a fielder's actions, whether to hold at the base or continue to the next one.",
    "coach": "A good decision beats blind speed every time.",
    "easier": "Clear coach cue for the decision.",
    "harder": "Runner must read the situation independently.",
    "chaos": "Mild opposition + decision-making",
    "setup": "Set up two bases roughly 10-12m apart, with a fielder positioned to make plays and a runner starting at the first base.",
    "howTo": [
     "Explain that the runner will take a short lead or start a run and must decide, based on what the fielder is doing, whether to hold at the base or continue to the next one.",
     "A feeder sends a ball toward the fielder while the runner watches and starts a short run.",
     "The runner decides whether to hold at the current base or press on to the next one, based on the fielder's actions.",
     "Coach reinforces the cue: a good decision beats blind speed every time.",
     "Rotate the runner, fielder, and feeder roles every few reps.",
     "Easier: coach gives a clear cue for the decision. Harder: runner must read the situation independently with no coach cue."
    ]
   },
   {
    "name": "Read the Field Relay",
    "desc": "Small teams take turns running bases while the fielding team tries to make clean plays, with runners scoring bonus points for good hold/go decisions regardless of outcome.",
    "coach": "Trust your read, even if the outcome doesn't go your way.",
    "easier": "Slower fielding team.",
    "harder": "Full-speed fielding team.",
    "chaos": "Bonus objectives",
    "setup": "Small teams of 3-4 take turns running the bases while another small group acts as the fielding team, using 2-3 bases spaced around a mini-diamond.",
    "howTo": [
     "Explain that runners score bonus points for good hold/go decisions, regardless of whether they end up safe or out.",
     "One runner at a time runs the bases while the fielding team tries to make clean plays.",
     "After each base decision, the coach or a nominated observer calls out whether it was a good decision, awarding a bonus point if so — separate from the outcome.",
     "Rotate through all runners in the team, then swap the running and fielding teams.",
     "Coach reinforces trusting a good read even when the outcome doesn't go the runner's way.",
     "Easier: fielding team moves at a slower pace. Harder: fielding team plays at full speed."
    ]
   }
  ],
  "big": {
   "name": "Decision Diamond Teeball",
   "desc": "Small-sided game where the coach specifically praises good hold/go decisions on the bases, separate from whether the runner was safe or out, reinforcing that reading the game matters as much as speed.",
   "setup": "Set up a small-sided game on a mini-diamond with bases at running distance and a full fielding team in position.",
   "howTo": [
    "Explain that the coach will specifically praise good hold/go decisions on the bases, separate from whether the runner ended up safe or out.",
    "Play a small-sided game where batters hit and then make base-running decisions based on the fielding situation.",
    "After notable plays, the coach calls out specific examples of good decision-making on the bases, regardless of the outcome.",
    "Continue play with normal rotations between batting and fielding teams.",
    "Rotate all players through batting, running, and fielding roles across the game.",
    "Reinforce throughout: reading the game matters as much as speed."
   ]
  },
  "discussion": [
   "What helped you decide between holding at a base or running today?",
   "What did you watch to make that decision?",
   "Can you describe a moment your read was right, even if the outcome wasn't perfect?"
  ],
  "lookfors": [
   "Watches the fielding situation before deciding to run",
   "Holds up at a base when appropriate",
   "Makes a clear, committed decision rather than hesitating halfway"
  ],
  "inclusion": "Use clear coach cues ('go!' or 'hold!') initially for students building game-reading confidence, fading the cues as independent reading develops.",
  "skillBreakdown": [
   {
    "step": "Watch where the ball is fielded before deciding to run.",
    "why": "A decision made without checking the fielder's position often leads to being out."
   },
   {
    "step": "Hold up at a base if the fielding team clearly has the ball under control.",
    "why": "A cautious hold is often safer than a risky, uninformed run."
   },
   {
    "step": "Commit fully once you've made your decision.",
    "why": "Hesitating halfway through a decision is the worst outcome of all."
   }
  ]
 },
 {
  "n": 9,
  "block": 2,
  "title": "Field, Turn, Throw",
  "focus": "Combining fielding + throwing to a base",
  "walt": "We are learning to combine fielding a ground ball with turning and throwing accurately to a base.",
  "wilf": [
   "I can gather a ground ball cleanly before looking up to throw",
   "I can turn my body toward the base as part of one smooth fielding-to-throwing motion"
  ],
  "nzc": "Strand B · Managing self",
  "value": "Aroha",
  "valueText": "Understanding how your individual fielding and throwing skills combine into one smooth sequence that helps your whole team.",
  "equipment": "Soft/modified balls, bases/markers, cones",
  "safety": "Standard field safety; check ground for hazards; call 'mine!' when approaching a shared ball",
  "games": [
   {
    "name": "Gather & Turn",
    "desc": "Individual practice fielding a rolled ball, gathering it cleanly with two hands, and turning toward a base before throwing.",
    "coach": "Gather first, then turn — don't rush the gather to turn early.",
    "easier": "Stationary ball.",
    "harder": "Rolling ball, increasing speed.",
    "chaos": "Random constraint calls",
    "setup": "Students work individually with a ball each and a base/target marked roughly 6-8m away, spread out with plenty of space around each.",
    "howTo": [
     "Demonstrate fielding a rolled ball with two hands, gathering it cleanly, then turning the body toward the base before any throw is made.",
     "Roll the ball to yourself (or have it rolled gently by a partner) and practise gathering it with two hands.",
     "After gathering, turn your whole body — feet and hips — to face the base target before miming or making a throw.",
     "Coach reinforces the cue: gather first, then turn — don't rush the gather to turn early.",
     "Repeat 5-6 times, starting with a stationary ball before adding movement.",
     "Easier: use a stationary ball to start. Harder: use a rolling ball, gradually increasing its speed."
    ]
   },
   {
    "name": "Field & Fire to Base",
    "desc": "Partners field a rolled ball and immediately throw to a base target, timing themselves from gather to release.",
    "coach": "One smooth motion — gather, turn, throw.",
    "easier": "Closer base, slower roll.",
    "harder": "Further base, faster roll.",
    "chaos": "Beat the clock",
    "setup": "Pairs stand with a base target 6-8m from the fielder and the roller positioned to send the ball toward them. 1 soft/modified ball per pair.",
    "howTo": [
     "Explain that partners will field a rolled ball and immediately throw to a base target, timing the sequence from gather to release.",
     "Partner A rolls the ball toward Partner B, who fields it, turns, and throws to the base target in one smooth motion.",
     "Partner A can time the sequence with a phone stopwatch or simple count if available, to give friendly feedback.",
     "Coach reinforces the cue: one smooth motion — gather, turn, throw.",
     "Swap roller and fielder roles every 4-5 reps.",
     "Easier: closer base and a slower roll. Harder: further base and a faster roll."
    ]
   },
   {
    "name": "Race to the Base",
    "desc": "Two fielders start equal distance from a ball rolled between them; first to field it cleanly and hit the base target scores a point.",
    "coach": "Call 'mine!' early and commit.",
    "easier": "Slower roll, closer base.",
    "harder": "Faster roll, further base.",
    "chaos": "Head-to-head mirror",
    "setup": "Pairs of fielders start equal distance (roughly 4-5m) from a base target, with the ball rolled directly between them by a feeder.",
    "howTo": [
     "Explain that two fielders will start equal distance from a rolled ball, and whoever fields it cleanly and hits the base target first scores a point.",
     "Feeder rolls the ball squarely between the two fielders.",
     "Both fielders react, with whoever gets there first calling 'Mine!' early and committing to the field-turn-throw sequence.",
     "The fielder completes the sequence by hitting the base target; the other fielder backs off once the call is made.",
     "Rotate the feeder role and fielding pairs every few rounds.",
     "Easier: slower roll and a closer base. Harder: faster roll and a further base."
    ]
   }
  ],
  "big": {
   "name": "Fielding Circuit Teeball",
   "desc": "Small-sided game where the fielding team scores points for clean gathers and quick, accurate throws to a base, rewarding the whole fielding sequence, not just stopping the ball.",
   "setup": "Set up a small-sided fielding circuit with several base targets around a mini-diamond and a feeder sending ground balls into different areas.",
   "howTo": [
    "Explain that the fielding team scores points for clean gathers and quick, accurate throws to a base — the whole sequence, not just stopping the ball.",
    "Feeder rolls or hits a ground ball toward a fielder.",
    "Fielder gathers cleanly, turns, and throws to the relevant base target; a point is awarded if the whole sequence was clean and accurate.",
    "Rotate the feeder role and fielding positions every few minutes.",
    "Coach highlights the full sequence — gather, turn, throw — rather than praising just the stop or just the throw.",
    "Keep a simple running team tally to add friendly competitive energy."
   ]
  },
  "discussion": [
   "What helped you gather the ball cleanly today?",
   "Why does gathering fully before turning matter?",
   "What made your gather-to-throw sequence smooth or clunky?"
  ],
  "lookfors": [
   "Gathers with two hands before looking up",
   "Turns toward the base as part of one smooth motion",
   "Throws with reasonable accuracy after fielding"
  ],
  "inclusion": "Slow the ball speed and shorten the fielding-to-base distance for students building confidence; success is measured by a clean gather-to-throw sequence, not speed.",
  "skillBreakdown": [
   {
    "step": "Gather the ball cleanly with two hands before turning.",
    "why": "Rushing the turn before gathering fully often causes a fumble."
   },
   {
    "step": "Turn your body toward the base as part of one smooth motion.",
    "why": "A continuous action is faster and more reliable than separate, stop-start steps."
   },
   {
    "step": "Throw with a clear release straight after the turn.",
    "why": "Hesitating after turning wastes the time advantage of a clean gather."
   }
  ]
 },
 {
  "n": 10,
  "block": 2,
  "title": "Diamond Duty",
  "focus": "Infield positioning basics",
  "walt": "We are learning basic infield positions and what each position's job is.",
  "wilf": [
   "I can stand in a ready, balanced position at my infield spot before the ball is hit",
   "I can describe what my infield position's main job is in a simple game"
  ],
  "nzc": "Strand B · Managing self, Thinking",
  "value": "Mōhio",
  "valueText": "Understanding your own role and where you fit in the team's fielding shape, not just chasing every ball.",
  "equipment": "Bases/markers, cones, soft/modified balls, bibs",
  "safety": "Standard field safety; rotate positions regularly so games don't run too long in one spot",
  "games": [
   {
    "name": "Find Your Spot",
    "desc": "Students walk through each infield position (pitcher's mound area, first, second, third, shortstop equivalent) and practise the ready stance at each.",
    "coach": "Stay light on your feet, weight forward, ready to move any direction.",
    "easier": "Walk through slowly with a coach cue at each spot.",
    "harder": "Rotate quickly through all positions.",
    "chaos": "Role rotation",
    "setup": "Mark out the infield positions (pitcher's mound area, first, second, third, shortstop equivalent) with cones on a mini-diamond. Students walk through as a whole class or in a small rotating group.",
    "howTo": [
     "Walk the group to each infield position in turn, demonstrating the ready stance — light on the feet, weight forward, ready to move any direction.",
     "At each position, students practise holding the ready stance for a few seconds before moving to the next spot.",
     "Coach reinforces the cue: stay light on your feet, weight forward, ready to move any direction.",
     "Once the group has visited every position slowly, repeat the walk-through at a slightly quicker pace.",
     "Rotate small groups through if the whole class can't move through the positions at once.",
     "Easier: walk through slowly with a coach cue at each spot. Harder: rotate quickly through all positions with less guidance."
    ]
   },
   {
    "name": "Position Job Match",
    "desc": "In small groups, students match a simple 'job' card (e.g. 'closest to first base') to the correct infield position, then demonstrate standing there.",
    "coach": "Know your job before the ball is even hit.",
    "easier": "Fewer positions, obvious matches.",
    "harder": "All positions, quick-fire matching.",
    "chaos": "Random constraint calls",
    "setup": "Small groups of 3-4 each have a set of simple 'job' cards (e.g. 'closest to first base', 'covers the middle') and stand near the marked infield positions.",
    "howTo": [
     "Explain that each job card describes a simple responsibility that matches one infield position.",
     "Give each group a job card and have them discuss which infield position it matches.",
     "Once they agree, the group demonstrates by standing at that position together.",
     "Coach reinforces the cue: know your job before the ball is even hit.",
     "Rotate through several job cards so groups match multiple positions.",
     "Easier: use fewer positions with obvious matches. Harder: use all positions with quick-fire matching."
    ]
   },
   {
    "name": "Live Ball Positioning",
    "desc": "A gentle live-hit game where infielders must move to and hold their correct position readiness before each hit, coach checking positioning.",
    "coach": "Reset your ready position after every play.",
    "easier": "Slower hits, more time to reset.",
    "harder": "Quicker succession of hits.",
    "chaos": "Bonus objectives",
    "setup": "Set up a mini-diamond with infielders in their positions and a feeder hitting or throwing gentle balls into play from home plate.",
    "howTo": [
     "Explain that infielders must move to and hold their correct ready position before each hit, and the coach will check positioning.",
     "Before each hit, the coach pauses briefly to check that every infielder is in a correct, ready position.",
     "Feeder sends a gentle live ball into play; infielders react and field as normal.",
     "After the play, infielders reset to their ready position before the next hit.",
     "Rotate infield positions every few minutes so everyone experiences different spots.",
     "Easier: slower hits with more time to reset position. Harder: quicker succession of hits with less reset time."
    ]
   }
  ],
  "big": {
   "name": "Positioned Infield Teeball",
   "desc": "Small-sided game where the fielding team earns bonus points for every player who is in a correct, ready infield position before the ball is hit, alongside normal fielding plays.",
   "setup": "Set up a small-sided game on a mini-diamond with a full infield in position and bibs to distinguish fielding and batting teams.",
   "howTo": [
    "Explain that the fielding team earns bonus points for every player in a correct, ready infield position before the ball is hit, in addition to normal fielding plays.",
    "Before each hit, the coach or a nominated scorer quickly checks the infield positioning.",
    "Batter hits and fielders play the ball as normal; bonus points are awarded based on the pre-hit positioning check.",
    "Continue with normal rotations between batting and fielding.",
    "Rotate infield positions regularly, and swap batting/fielding teams partway through.",
    "Coach highlights good, alert positioning as much as good plays on the ball."
   ]
  },
  "discussion": [
   "What is your infield position's main job?",
   "What did a ready, balanced stance feel like at your position?",
   "How did knowing your job help you react faster?"
  ],
  "lookfors": [
   "Stands in a ready, balanced position before the hit",
   "Can describe their position's main job simply",
   "Moves appropriately for their position when the ball is hit"
  ],
  "inclusion": "Use simple visual markers/cones for each infield spot, and allow students to stay in one position for longer while learning before rotating through all of them.",
  "skillBreakdown": [
   {
    "step": "Stand in a ready, balanced position at your spot before the ball is hit.",
    "why": "Being ready and balanced lets you react instantly."
   },
   {
    "step": "Know your position's main job before play starts.",
    "why": "Understanding your role means faster, more confident decisions."
   },
   {
    "step": "Reset your ready position after every play.",
    "why": "Staying ready for the next ball matters as much as the last one."
   }
  ]
 },
 {
  "n": 11,
  "block": 3,
  "title": "Deep Ground Basics",
  "focus": "Outfield positioning basics",
  "walt": "We are learning basic outfield positioning and how to track and move to a fly or hit ball.",
  "wilf": [
   "I can stand in a ready position at an appropriate outfield depth and angle",
   "I can move to get in line behind a ball hit into the outfield"
  ],
  "nzc": "Strand B · Managing self, Thinking",
  "value": "Manaaki",
  "valueText": "Covering ground fairly and honestly for your team, even when the ball isn't hit directly to you — outfielders support the whole team's fielding.",
  "equipment": "Soft/modified balls, cones, bases/markers",
  "safety": "Outfield spacing must be generous; call 'mine!' clearly before converging on a ball",
  "games": [
   {
    "name": "Depth & Angle Practice",
    "desc": "Students practise standing at an appropriate outfield depth and adjusting their angle based on where a coach points, without a ball yet.",
    "coach": "Read the angle early and adjust your feet, don't wait until the ball is hit.",
    "easier": "Coach gives clear verbal cues.",
    "harder": "Students read a silent pointed cue.",
    "chaos": "Random constraint calls",
    "setup": "Students spread out in an open outfield area with plenty of space, no ball used yet. Coach stands centrally where all students can see them point.",
    "howTo": [
     "Explain appropriate outfield depth (not too close, not too far) and show how angle changes based on where the ball is likely to go.",
     "Students stand at what they judge to be a sensible outfield depth for their position.",
     "Coach points in different directions without a ball; students adjust their angle and a step or two of positioning based on the point.",
     "Coach reinforces the cue: read the angle early and adjust your feet, don't wait until the ball is hit.",
     "Repeat with several different pointed directions.",
     "Easier: coach gives a clear verbal cue alongside the point. Harder: students read a silent pointed cue only."
    ]
   },
   {
    "name": "Track & Call",
    "desc": "A coach or partner hits/throws a ball into the outfield; the fielder calls 'mine!' and tracks it into a clean gather.",
    "coach": "Call early, then move with soft, balanced steps to get under or in line with the ball.",
    "easier": "Slower, more predictable hits.",
    "harder": "Faster, less predictable hits/angles.",
    "chaos": "Scoring streaks",
    "setup": "Pairs or small groups spread out in the outfield area, with a coach or partner positioned to hit/throw balls into the outfield.",
    "howTo": [
     "Demonstrate calling 'mine!' as soon as a ball is identified and tracking it with soft, balanced steps into a clean gather.",
     "A coach or partner hits or throws a ball out into the outfield toward a fielder.",
     "The fielder calls 'mine!' early and moves with soft, balanced steps to get under or in line with the ball before gathering it cleanly.",
     "Coach reinforces the cue: call early, then move with soft, balanced steps.",
     "Rotate fielders through regularly so everyone gets several tracking reps.",
     "Easier: slower, more predictable hits. Harder: faster, less predictable hits and angles."
    ]
   },
   {
    "name": "Outfield Coverage Game",
    "desc": "Small groups of outfielders practise covering ground between them, calling and adjusting position as balls are hit to different areas.",
    "coach": "Communicate constantly about who's taking the ball.",
    "easier": "Fewer outfielders covering more obvious zones.",
    "harder": "More balls in quicker succession, bigger area.",
    "chaos": "Bonus objectives",
    "setup": "Small groups of 3-4 outfielders spread across a wide zone (roughly 15m x 15m or larger), with a feeder hitting balls to different areas.",
    "howTo": [
     "Explain that the group is covering ground between them and must call and adjust position as balls are hit to different areas.",
     "Feeder hits a ball into one part of the zone; the closest outfielder calls it and the others adjust their coverage of the remaining space.",
     "Coach reinforces the cue: communicate constantly about who's taking the ball.",
     "Continue with feeds to different areas, encouraging outfielders to reposition between hits based on where gaps appear.",
     "Rotate the feeder role periodically.",
     "Easier: fewer outfielders covering more obvious zones. Harder: more balls in quicker succession across a bigger area."
    ]
   }
  ],
  "big": {
   "name": "Deep Field Teeball",
   "desc": "Small-sided game where outfielders are specifically coached and rewarded for good positioning, clear calling, and clean tracking of hit balls, alongside the normal game.",
   "setup": "Set up a small-sided game with a full outfield group in position, generous spacing, and a feeder/batter sending balls into the outfield as well as the infield.",
   "howTo": [
    "Explain that outfielders are specifically coached and rewarded for good positioning, clear calling, and clean tracking of hit balls, on top of the normal game.",
    "Play a small-sided game where hits sometimes reach the outfield; outfielders apply depth, angle, calling, and tracking skills from the earlier activities.",
    "Coach calls out specific examples of good outfield positioning and calling as they happen.",
    "Continue play with normal batting and fielding rotations.",
    "Rotate outfield positions regularly so everyone gets outfield reps.",
    "Remind the group to call 'mine!' clearly before converging on any ball, given the generous outfield spacing."
   ]
  },
  "discussion": [
   "What helped you track and get in line with a hit ball today?",
   "How did adjusting your depth and angle help you field better?",
   "What did good outfield communication sound like?"
  ],
  "lookfors": [
   "Stands at an appropriate ready depth/angle",
   "Calls clearly before converging on a ball",
   "Moves with balanced steps to get in line with the ball"
  ],
  "inclusion": "Reduce outfield distances/depth for students building confidence tracking balls in open space, and use bigger, softer balls for early reps.",
  "skillBreakdown": [
   {
    "step": "Stand at an appropriate depth and angle for your position.",
    "why": "Correct starting position reduces the ground you have to cover reactively."
   },
   {
    "step": "Call clearly before converging on a hit ball.",
    "why": "Prevents collisions when more than one fielder could reach the ball."
   },
   {
    "step": "Move with soft, balanced steps to get in line with the ball.",
    "why": "Balanced movement is more reliable than a rushed sprint and grab."
   }
  ]
 },
 {
  "n": 12,
  "block": 3,
  "title": "Force or Tag",
  "focus": "Force plays / tag plays concept",
  "walt": "We are learning the basic idea of a force play versus a tag play in teeball.",
  "wilf": [
   "I can explain the simple difference between a force play and a tag play",
   "I can make a correct, safe force play at a base"
  ],
  "nzc": "Strand B · Thinking",
  "value": "Pānga",
  "valueText": "Thinking ahead about which type of play is actually available in a situation, rather than just reacting the same way every time.",
  "equipment": "Bases/markers, soft/modified balls, cones",
  "safety": "No diving or sliding; force plays are simply about reaching the base with the ball before the runner — no contact between fielder and runner",
  "games": [
   {
    "name": "Force Play Walkthrough",
    "desc": "Coach walks students through simple force-play scenarios (runner must run because the base behind them is occupied), practising a fielder simply touching the base with the ball before the runner arrives.",
    "coach": "You just need to beat the runner to the base with the ball in hand or glove.",
    "easier": "Slow-motion walkthrough, obvious scenarios.",
    "harder": "Full-speed scenarios, quick decisions.",
    "chaos": "Random constraint calls",
    "setup": "Set up two bases roughly 10-12m apart on a mini-diamond, with a coach guiding a small group through slow-motion scenarios. No live running yet.",
    "howTo": [
     "Explain the force-play concept: a runner must run to the next base because the base behind them is occupied, so a fielder can get them out by simply touching the base with the ball before they arrive.",
     "Walk through a simple scenario slowly: a runner starts moving while a fielder gathers a ball and walks to touch the base ahead of the runner.",
     "Coach reinforces the cue: you just need to beat the runner to the base with the ball in hand or glove — no tag needed.",
     "Repeat the walkthrough a few times with different students in the fielder and runner roles.",
     "Remind the group throughout: no diving or sliding, and no contact between fielder and runner.",
     "Easier: slow-motion walkthrough with obvious scenarios. Harder: full-speed scenarios requiring quick decisions."
    ]
   },
   {
    "name": "Force or Not?",
    "desc": "Small groups are shown quick scenarios and must call out whether a force play is 'on' at a particular base before acting it out.",
    "coach": "Check if the base behind the runner is occupied — that's what makes it a force.",
    "easier": "Fewer, clearer scenarios.",
    "harder": "Multiple runners, quick-fire scenarios.",
    "chaos": "Random constraint calls",
    "setup": "Small groups of 3-4 gather around a mini-diamond with bases marked, and the coach sets up quick scenario cards or verbal descriptions (e.g. runner on first only, runners on first and second).",
    "howTo": [
     "Present a quick scenario describing where runners are on the bases.",
     "The group discusses and calls out whether a force play is 'on' at a particular base.",
     "Coach reinforces the cue: check if the base behind the runner is occupied — that's what makes it a force.",
     "Once the group has called it, have them briefly act out the scenario to confirm their answer.",
     "Repeat with several different scenarios, mixing up which base is in question.",
     "Easier: fewer, clearer scenarios. Harder: multiple runners and quick-fire scenarios."
    ]
   },
   {
    "name": "Live Force Play Reps",
    "desc": "A gentle live game where fielders practise clean, safe force-play attempts at a base while runners run at a controlled pace.",
    "coach": "Get to the base early and hold it steady, don't dive or reach dangerously.",
    "easier": "Slower runners, more time.",
    "harder": "Full-speed runners.",
    "chaos": "Mild opposition + decision-making",
    "setup": "Set up a mini-diamond with bases at running distance, controlled-pace runners, and fielders positioned to make force plays. Soft/modified balls only.",
    "howTo": [
     "Remind the group of the safety rule: no diving or sliding, and force plays are about reaching the base with the ball before the runner, with no contact.",
     "A feeder sends a ball into play; the fielder gathers it and moves to the relevant base to attempt a safe, controlled force play.",
     "Runner runs at a controlled pace toward the base, without contesting the play physically.",
     "Coach reinforces the cue: get to the base early and hold it steady, don't dive or reach dangerously.",
     "Rotate fielder, runner, and feeder roles every few reps.",
     "Easier: slower runners with more time. Harder: full-speed runners."
    ]
   }
  ],
  "big": {
   "name": "Force Play Teeball",
   "desc": "Small-sided game with simple force-play situations built in, coached explicitly on safe, correct technique at the base rather than just the outcome of the play.",
   "setup": "Set up a small-sided game on a mini-diamond with simple force-play situations built into the rules, using soft/modified balls and no sliding.",
   "howTo": [
    "Explain that the game includes simple force-play situations, and the coach will explicitly coach safe, correct technique at the base rather than just the outcome of the play.",
    "Play a small-sided game where runners and fielders encounter force-play situations as they naturally arise.",
    "Coach pauses briefly after force plays to reinforce safe technique — reaching the base early and holding it steady, no diving or contact.",
    "Continue play with normal rotations between batting, running, and fielding.",
    "Rotate all players through fielding and running roles across the game.",
    "Reinforce the no-contact, no-sliding safety rule throughout."
   ]
  },
  "discussion": [
   "What's the simple difference between a force play and a tag play?",
   "What made a force play successful (or not) today?",
   "Why is safety at the base so important in this kind of play?"
  ],
  "lookfors": [
   "Can explain the basic force-play concept simply",
   "Gets to the base safely and holds it steady with the ball",
   "Reads whether a force play is available in a given situation"
  ],
  "inclusion": "Use walkthroughs and slow-motion scenarios for students who need more processing time before adding full-speed live reps.",
  "skillBreakdown": [
   {
    "step": "Check whether the base behind the runner is occupied.",
    "why": "That's what determines whether a force play is actually available."
   },
   {
    "step": "Get to the base early and hold it steady with the ball.",
    "why": "A force play just needs the fielder at the base before the runner, held safely."
   },
   {
    "step": "Avoid diving or reaching dangerously for the play.",
    "why": "Safety at the base matters more than a marginal, risky play."
   }
  ]
 },
 {
  "n": 13,
  "block": 3,
  "title": "Find the Gap",
  "focus": "Batting placement (hitting gaps)",
  "walt": "We are learning to place our hit into open space rather than always hitting the same way.",
  "wilf": [
   "I can look at where fielders are positioned before I bat",
   "I can adjust my contact point to aim for an open gap"
  ],
  "nzc": "Strand B · Thinking",
  "value": "Aroha",
  "valueText": "Understanding how your individual batting choices connect to the bigger picture of the fielding team's positioning.",
  "equipment": "Junior bats, soft/modified balls, batting tees, cones marking gaps, bibs",
  "safety": "Standard batting-radius spacing rules",
  "games": [
   {
    "name": "Scan Before You Swing",
    "desc": "Batters pause to look at where fielders are standing before each hit, calling out loud which gap looks open.",
    "coach": "Scan the field, then decide your target before you swing.",
    "easier": "Obvious, wide-open gaps.",
    "harder": "Smaller, less obvious gaps.",
    "chaos": "Random constraint calls",
    "setup": "Batters at a tee station with fielders spread out at different depths and angles in front (using cones or actual students as visual reference), roughly 8-12m away.",
    "howTo": [
     "Explain that before each swing, batters will pause to look at where fielders are standing and call out loud which gap looks open.",
     "Batter pauses at the tee, scans the field, and calls out the gap they've identified as open before setting up to swing.",
     "Batter then sets up and hits, aiming for the called gap.",
     "Coach reinforces the cue: scan the field, then decide your target before you swing.",
     "Rotate the batter every 4-5 swings, moving fielders slightly between turns so gaps change.",
     "Easier: use obvious, wide-open gaps. Harder: use smaller, less obvious gaps."
    ]
   },
   {
    "name": "Called Gap Challenge",
    "desc": "A partner calls a specific gap for the batter to aim for before each hit.",
    "coach": "Adjust your contact point slightly to send the ball toward the called gap.",
    "easier": "Fewer gap choices, closer targets.",
    "harder": "More gap choices, quick-fire calls.",
    "chaos": "Random constraint calls",
    "setup": "Batter at a tee station with a partner standing where they can see the field and call gaps, fielders spread out as in the previous activity.",
    "howTo": [
     "Explain that this time a partner calls a specific gap for the batter to aim for before each hit.",
     "Partner calls a gap (e.g. left, middle, right) just before the batter sets up.",
     "Batter aims their hit toward the called gap, adjusting their contact point slightly rather than their whole swing.",
     "Coach reinforces the cue: adjust your contact point slightly to send the ball toward the called gap.",
     "Rotate batter and caller roles every 4-5 swings.",
     "Easier: fewer gap choices and closer targets. Harder: more gap choices with quick-fire calls."
    ]
   },
   {
    "name": "Gap Finder Streak",
    "desc": "Small groups tally hits that successfully find an open or called gap in a row.",
    "coach": "Commit to your target and trust your technique.",
    "easier": "Bigger gaps, more attempts.",
    "harder": "Smaller gaps, live fielders adjusting position.",
    "chaos": "Scoring streaks",
    "setup": "Small groups of 3-4 share a tee station with fielders spread around, keeping a shared tally of gap-finding hits in a row.",
    "howTo": [
     "Explain the group is tallying consecutive hits that successfully find an open or called gap.",
     "One student bats while another calls a gap (or the batter identifies an open one themselves); the rest of the group act as fielders and confirm the result.",
     "Keep a running tally of the streak, resetting to zero (without stopping play) if a hit doesn't find the gap.",
     "Rotate the batter every 4-5 attempts so everyone contributes to the group's streak.",
     "Coach circulates and calls out group streak totals for encouragement.",
     "Easier: bigger gaps and more attempts. Harder: smaller gaps with live fielders actively adjusting position between hits."
    ]
   }
  ],
  "big": {
   "name": "Small-Sided Gap Teeball",
   "desc": "Small-sided game where the coach specifically celebrates batters who place hits into open space to beat the field, alongside runs scored.",
   "setup": "Set up a small-sided game on a mini-diamond with a full fielding team spread across the field, using bibs to distinguish teams.",
   "howTo": [
    "Explain that the coach will specifically celebrate batters who place hits into open space to beat the field, alongside runs scored in the normal game.",
    "Play a small-sided game where batters apply the scanning and gap-finding skills from the earlier activities.",
    "Coach calls out specific examples of good placement hits as they happen, separate from just praising runs scored.",
    "Continue play with normal batting and fielding rotations.",
    "Rotate all players through batting and fielding roles across the game.",
    "Encourage batters to scan and commit to a target before every swing, just like in the lead-up activities."
   ]
  },
  "discussion": [
   "How did you decide where to place your hits today?",
   "What's the difference between hitting hard and hitting smart?",
   "What did you notice about the field that helped you find a gap?"
  ],
  "lookfors": [
   "Scans the field before committing to a hit",
   "Adjusts contact point rather than always hitting the same way",
   "Shows awareness of where fielders are positioned"
  ],
  "inclusion": "Use a simplified field with fewer, larger gaps for students building placement awareness, adding complexity as confidence grows.",
  "skillBreakdown": [
   {
    "step": "Scan the field before deciding where to hit.",
    "why": "Placement decisions need information about where fielders are standing."
   },
   {
    "step": "Adjust your contact point slightly to aim for an open gap.",
    "why": "Small technical adjustments control direction more reliably than swinging harder."
   },
   {
    "step": "Commit to your target before you swing.",
    "why": "Last-second changes of mind usually produce a worse result than either original option."
   }
  ]
 },
 {
  "n": 14,
  "block": 3,
  "title": "Team Diamond Shape",
  "focus": "Team fielding shape & communication",
  "walt": "We are learning to hold a connected team fielding shape and communicate as a whole infield/outfield unit.",
  "wilf": [
   "I can adjust my fielding position based on where my teammates are standing",
   "I can communicate clearly with teammates about coverage and gaps"
  ],
  "nzc": "Strand B, C · Relating to others",
  "value": "Mōhio",
  "valueText": "Understanding how your individual position fits into the team's whole fielding shape, not just your own patch of ground.",
  "equipment": "Soft/modified balls, cones, bases/markers, bibs",
  "safety": "Standard field safety for a full small-sided fielding team",
  "games": [
   {
    "name": "Shape Check",
    "desc": "The fielding team freezes on a coach's call and checks as a group whether their overall shape has any obvious big gaps or overlaps.",
    "coach": "Look left and right, not just at your own spot.",
    "easier": "Coach highlights gaps directly.",
    "harder": "Team identifies and fixes gaps themselves.",
    "chaos": "Role rotation",
    "setup": "The fielding team (4-6 players) spreads out across a mini-diamond in their positions, with a coach able to call a freeze at any point.",
    "howTo": [
     "Explain that on a freeze call, the whole fielding team checks as a group whether their overall shape has any obvious big gaps or overlaps.",
     "Coach calls 'Freeze!' at a random point during light movement or positioning practice.",
     "Team holds their positions and looks around — left and right, not just at their own spot — to spot gaps or overlaps.",
     "Coach reinforces the cue: look left and right, not just at your own spot.",
     "Discuss briefly as a group what could be adjusted, then repeat with a new freeze.",
     "Easier: coach highlights gaps directly. Harder: team identifies and fixes gaps themselves without hints."
    ]
   },
   {
    "name": "Communicate & Cover",
    "desc": "Small-sided fielding practice where teammates must call out to cover for each other as hits are placed around the field.",
    "coach": "A busy field is a talking field — call constantly.",
    "easier": "Slower hits, more time to communicate.",
    "harder": "Quicker hits, less time.",
    "chaos": "Bonus objectives",
    "setup": "Small-sided fielding team spread across a mini-diamond, with a feeder hitting or throwing balls to different spots around the field.",
    "howTo": [
     "Explain that teammates must call out to cover for each other as hits are placed around the field.",
     "Feeder sends a ball to one area; the nearest fielder calls it while others shift to cover the space that opens up.",
     "Coach reinforces the cue: a busy field is a talking field — call constantly.",
     "Continue with feeds to different areas, encouraging constant communication between plays.",
     "Rotate the feeder role and fielding positions every few minutes.",
     "Easier: slower hits with more time to communicate. Harder: quicker hits with less time to react."
    ]
   },
   {
    "name": "Whole Team Shape Game",
    "desc": "A gentle live game where the coach specifically highlights and rewards good team shape and communication, separate from individual plays.",
    "coach": "Your teammates' positions should influence your own.",
    "easier": "Fewer live hits, more discussion time between.",
    "harder": "Continuous live play.",
    "chaos": "Mild opposition + decision-making",
    "setup": "A gentle live small-sided game on a mini-diamond with the full fielding team in position and a batter/feeder sending live hits.",
    "howTo": [
     "Explain that the coach will specifically highlight and reward good team shape and communication, separate from individual plays.",
     "Play live with a batter hitting and the fielding team reacting, applying the shape-checking and communication habits from earlier activities.",
     "Coach pauses occasionally to point out good examples of team shape or communication, regardless of whether the ball was fielded cleanly.",
     "Coach reinforces the cue: your teammates' positions should influence your own.",
     "Rotate fielding positions and the batter role every few minutes.",
     "Easier: fewer live hits with more discussion time between them. Harder: continuous live play with less pause time."
    ]
   }
  ],
  "big": {
   "name": "Connected Diamond Teeball",
   "desc": "Small-sided game where the fielding team earns bonus points for maintaining good overall shape and clear communication across the whole field, not just for individual stops.",
   "setup": "Set up a small-sided game on a mini-diamond with the full fielding team in position across the whole field, using bibs to distinguish teams.",
   "howTo": [
    "Explain that the fielding team earns bonus points for maintaining good overall shape and clear communication across the whole field, not just for individual stops.",
    "Play a small-sided game where the fielding team applies shape-checking and communication skills throughout.",
    "Coach or a nominated observer awards bonus points periodically for good team shape and communication, separate from normal fielding plays.",
    "Continue with normal batting and fielding rotations.",
    "Rotate all players through batting and fielding roles across the game.",
    "Coach reinforces that good shape and talking are team achievements, not just individual ones."
   ]
  },
  "discussion": [
   "What made your team's fielding shape effective (or not) today?",
   "Why does communication matter for the whole fielding team, not just individuals?",
   "How did adjusting your position based on teammates help?"
  ],
  "lookfors": [
   "Adjusts position based on where teammates are standing",
   "Communicates clearly about coverage and gaps",
   "Recognises and helps fix gaps in the team shape"
  ],
  "inclusion": "Use a simplified field with fewer players/positions initially, adding full team numbers as the concept of team shape becomes clearer.",
  "skillBreakdown": [
   {
    "step": "Check your position relative to your teammates, not just your own spot.",
    "why": "Team shape is about the whole unit, not individual positioning alone."
   },
   {
    "step": "Communicate constantly about coverage and gaps.",
    "why": "A talking fielding team closes gaps faster than a silent one."
   },
   {
    "step": "Adjust your position based on where teammates are standing.",
    "why": "Your position should respond to the team's shape, not stay fixed."
   }
  ]
 },
 {
  "n": 15,
  "block": 3,
  "title": "Where's the Play",
  "focus": "Decision-making — where to throw",
  "walt": "We are learning to decide quickly and correctly where to throw the ball after fielding it.",
  "wilf": [
   "I can look up after gathering the ball to see where the play is",
   "I can choose the base that gives my team the best chance of an out"
  ],
  "nzc": "Strand B · Thinking",
  "value": "Manaaki",
  "valueText": "Making a fair, honest decision under pressure that genuinely helps your team, rather than just panicking and throwing anywhere.",
  "equipment": "Soft/modified balls, bases/markers, cones, bibs",
  "safety": "Standard field safety; encourage controlled, accurate throws over rushed, wild ones",
  "games": [
   {
    "name": "Look Up & Decide",
    "desc": "After fielding a ball, students pause briefly to look up and call out loud which base they would throw to before actually throwing.",
    "coach": "Gather first, then look — don't try to do both at once.",
    "easier": "Obvious, single-option scenarios.",
    "harder": "Multiple base options to choose between.",
    "chaos": "Random constraint calls",
    "setup": "Students field a ball individually or in pairs, with 2-3 base options marked around a mini-diamond roughly 8-10m away.",
    "howTo": [
     "Explain that after fielding, students will pause briefly to look up and call out loud which base they would throw to before actually throwing.",
     "A ball is rolled or gently hit to the fielder, who gathers it cleanly.",
     "Fielder pauses, looks up at the base options, and calls out which base they would throw to.",
     "Coach reinforces the cue: gather first, then look — don't try to do both at once.",
     "Repeat with different scenarios so students practise the gather-then-look sequence several times.",
     "Easier: obvious, single-option scenarios. Harder: multiple base options to choose between."
    ]
   },
   {
    "name": "Best Play Call",
    "desc": "Small groups are shown quick scenarios (runners on different bases) and must call out the base that gives the best chance of an out.",
    "coach": "Think about which out actually stops the biggest threat.",
    "easier": "Fewer runners/options.",
    "harder": "Multiple runners, quick-fire scenarios.",
    "chaos": "Random constraint calls",
    "setup": "Small groups of 3-4 gather around a mini-diamond with runner positions described by the coach (e.g. using cones to represent runners on different bases).",
    "howTo": [
     "Present a quick scenario showing runners on different bases (using cones as stand-ins).",
     "The group discusses and calls out the base that gives the best chance of an out.",
     "Coach reinforces the cue: think about which out actually stops the biggest threat.",
     "Once the group has called it, briefly explain why that base was the best choice.",
     "Repeat with several different scenarios, varying the number and position of runners.",
     "Easier: fewer runners/options. Harder: multiple runners with quick-fire scenarios."
    ]
   },
   {
    "name": "Live Decision Fielding",
    "desc": "A gentle live game where fielders practise fielding and making a quick, correct throw decision under mild game pressure.",
    "coach": "Trust your first good read rather than second-guessing under pressure.",
    "easier": "Slower pace, more thinking time.",
    "harder": "Full pace, quicker decisions required.",
    "chaos": "Mild opposition + decision-making",
    "setup": "A gentle live small-sided game on a mini-diamond with fielders in position, a feeder/batter, and runners moving at a controlled, mild pace.",
    "howTo": [
     "Remind fielders of the gather-look-decide sequence from the earlier activities.",
     "Feeder or batter sends the ball into play; fielder gathers it cleanly and looks up to make a quick throw decision.",
     "Fielder throws to the base they judge gives the best chance of an out, under mild game pressure from a controlled-pace runner.",
     "Coach reinforces the cue: trust your first good read rather than second-guessing under pressure.",
     "Rotate fielding positions and the runner/feeder roles every few reps.",
     "Easier: slower pace with more thinking time. Harder: full pace with quicker decisions required."
    ]
   }
  ],
  "big": {
   "name": "Decision Diamond Teeball",
   "desc": "Small-sided game where the coach specifically highlights good decision-making about where to throw, separate from whether the throw itself was perfectly accurate.",
   "setup": "Set up a small-sided game on a mini-diamond with a full fielding team, runners, and a batter/feeder, using bibs to distinguish teams.",
   "howTo": [
    "Explain that the coach will specifically highlight good decision-making about where to throw, separate from whether the throw itself was perfectly accurate.",
    "Play a small-sided game where fielders apply the gather-look-decide sequence from the earlier activities as plays develop.",
    "Coach calls out specific examples of good throw decisions as they happen, even if the throw itself wasn't perfectly accurate.",
    "Continue with normal batting, running, and fielding rotations.",
    "Rotate all players through batting, running, and fielding roles across the game.",
    "Reinforce throughout: a good decision under pressure is a skill worth celebrating on its own."
   ]
  },
  "discussion": [
   "What helped you decide where to throw today?",
   "What made a play a 'good decision' even if the outcome wasn't perfect?",
   "How did thinking ahead about the game situation help you?"
  ],
  "lookfors": [
   "Looks up to assess the play after gathering the ball",
   "Chooses a base with a clear, sensible reason",
   "Commits to a decision rather than hesitating"
  ],
  "inclusion": "Use simple, single-option scenarios for students building decision-making confidence, adding multiple-option scenarios as understanding grows.",
  "skillBreakdown": [
   {
    "step": "Gather the ball fully, then look up to assess the play.",
    "why": "Trying to do both at once often causes a fumble."
   },
   {
    "step": "Choose the base that gives the best chance of an out.",
    "why": "Not every base is equally valuable — some outs matter more than others."
   },
   {
    "step": "Commit to your decision and throw with control.",
    "why": "Hesitating after deciding usually causes a rushed, inaccurate throw."
   }
  ]
 },
 {
  "n": 16,
  "block": 4,
  "title": "Mini Diamond Games",
  "focus": "Small-sided modified games",
  "walt": "We are learning to apply batting, fielding, and base running skills together in a small-sided modified game.",
  "wilf": [
   "I can use skills from across the unit in a small-sided game",
   "I can play my position and role within a small team"
  ],
  "nzc": "Strand A, B, C · Thinking, Relating to others",
  "value": "Pānga",
  "valueText": "Thinking about how everyone's contribution in a small team — batting, fielding, running — adds up to the team's success.",
  "equipment": "Soft/modified balls, junior bats, batting tees, bases/markers, cones, bibs",
  "safety": "Standard small-sided game safety; soft/modified balls only",
  "games": [
   {
    "name": "Skills Reminder Circuit",
    "desc": "Quick-fire stations lightly revisiting throwing, catching, batting, and fielding from across the unit — a refresher, not new teaching.",
    "coach": "Notice how much more natural these feel now compared to earlier lessons.",
    "easier": "n/a",
    "harder": "n/a",
    "chaos": "Beat the clock",
    "setup": "Set up 4 short stations (throwing, catching, batting, fielding), each with its own equipment, spread around the space. Small groups of 3-4 rotate through.",
    "howTo": [
     "Explain that this is a quick refresher touching on throwing, catching, batting, and fielding from across the unit — not new teaching.",
     "Each group spends about 90 seconds to 2 minutes at each station, doing a few light reps of the relevant skill using the cues learned earlier in the unit.",
     "Coach circulates, reminding students of the key cue for each station (e.g. gather-turn-throw, basket hands, level swing, get low and in line).",
     "Rotate groups to the next station on a signal, keeping the pace brisk.",
     "Continue until every group has visited all 4 stations.",
     "Coach reinforces: notice how much more natural these feel now compared to earlier lessons."
    ]
   },
   {
    "name": "Small Team Set-Up",
    "desc": "Teams of 4-5 organise themselves into simple fielding positions and a batting order before a short practice game.",
    "coach": "Talk as a team before you start — know your roles.",
    "easier": "Coach assigns roles.",
    "harder": "Team decides roles themselves.",
    "chaos": "Role rotation",
    "setup": "Teams of 4-5 gather together with access to a simple diagram or verbal list of fielding positions, before a short practice game.",
    "howTo": [
     "Explain that each team needs to organise itself into simple fielding positions and decide a batting order before the practice game begins.",
     "Team discusses together and assigns each player a fielding position, making sure every key area is covered.",
     "Team also agrees on a simple batting order.",
     "Coach reinforces the cue: talk as a team before you start — know your roles.",
     "Once organised, the team moves into position ready for the mini-game rounds that follow.",
     "Easier: coach assigns roles directly. Harder: team decides roles themselves with no coach input."
    ]
   },
   {
    "name": "Mini Game Rounds",
    "desc": "Short, rotating mini-games (3-4 overs/turns each) so every team gets several quick reps at batting, fielding, and running.",
    "coach": "Reset and refocus for every new mini-round.",
    "easier": "Longer rounds, fewer rotations.",
    "harder": "Shorter rounds, quicker rotations.",
    "chaos": "Beat the clock",
    "setup": "Set up 2-3 mini-diamonds if space allows, so multiple small teams can play short rounds simultaneously, each with bases, a tee, and soft/modified balls.",
    "howTo": [
     "Explain that teams will play short, rotating mini-games of 3-4 overs/turns each, so everyone gets several quick reps.",
     "Run a short round of batting, fielding, and running using the team's chosen positions and order.",
     "After 3-4 turns/overs, call time and rotate teams to a new mini-diamond or swap batting/fielding roles.",
     "Coach reinforces the cue: reset and refocus for every new mini-round.",
     "Repeat for several rounds so every team experiences both batting and fielding multiple times.",
     "Easier: longer rounds with fewer rotations. Harder: shorter rounds with quicker rotations."
    ]
   }
  ],
  "big": {
   "name": "Small-Sided Diamond Teeball",
   "desc": "Small teams (4-5 players) play a full modified teeball game on a smaller diamond, using all core skills from across the unit.",
   "setup": "Set up a smaller-scale diamond (shorter base paths) for teams of 4-5, with tees, soft/modified balls, bases/markers, and bibs to distinguish teams.",
   "howTo": [
    "Explain that small teams will play a full modified teeball game on the smaller diamond, using all core skills from across the unit.",
    "Teams take turns batting and fielding using the positions and batting order they organised earlier.",
    "Play continues with normal teeball rules scaled to the smaller diamond and group size.",
    "Coach circulates, offering light reminders of key cues from across the unit as needed.",
    "Rotate batting and fielding roles at a sensible interval (e.g. every 4-5 batters) so every team gets fair time in both roles.",
    "Keep the pace energetic — this is a chance to put the whole unit's skills together."
   ]
  },
  "discussion": [
   "What skill from this unit felt most useful in today's small-sided game?",
   "How did your team organise itself before playing?",
   "What's tricky about playing a full game compared to practising skills alone?"
  ],
  "lookfors": [
   "Applies a range of skills from across the unit",
   "Understands and plays their role within the small team",
   "Communicates with teammates during the game"
  ],
  "inclusion": "Keep team sizes small and rotate roles frequently so every student gets varied, meaningful game time regardless of confidence level.",
  "skillBreakdown": [
   {
    "step": "Apply batting, fielding, and running technique together in a real game.",
    "why": "This lesson tests the whole unit's skills working together."
   },
   {
    "step": "Communicate with teammates about roles and coverage.",
    "why": "Small teams need very clear communication to avoid gaps."
   },
   {
    "step": "Make decisions based on the actual situation, not a fixed plan.",
    "why": "Reading the game beats sticking rigidly to a plan that doesn't fit."
   }
  ]
 },
 {
  "n": 17,
  "block": 4,
  "title": "Full Rotation",
  "focus": "Full-team fielding rotations",
  "walt": "We are learning to rotate smoothly through different fielding positions across a full-team game.",
  "wilf": [
   "I can move to a new fielding position quickly and confidently when rotated",
   "I can apply the correct positioning basics at whatever position I'm rotated to"
  ],
  "nzc": "Strand B, C · Relating to others",
  "value": "Aroha",
  "valueText": "Being patient with yourself as you adjust to a new position each rotation, and encouraging teammates who are still learning positions you already feel confident in.",
  "equipment": "Soft/modified balls, bases/markers, cones, bibs",
  "safety": "Standard full-team game safety; clear rotation signal so no position is left empty during play",
  "games": [
   {
    "name": "Position Rotation Walkthrough",
    "desc": "The whole fielding team walks through a full rotation cycle without live batting, practising moving smoothly between positions on a signal.",
    "coach": "Know which position you're moving to before the signal, not after.",
    "easier": "Slower, more obvious rotation pattern.",
    "harder": "Full-speed, less predictable rotation order.",
    "chaos": "Role rotation",
    "setup": "The whole fielding team (5-6 players) stands in their positions on a mini-diamond, with the coach able to give a clear rotation signal.",
    "howTo": [
     "Explain the rotation pattern the team will use (e.g. each player moves one position clockwise) before any live play.",
     "Team walks through the rotation slowly, without a live batter, moving smoothly between positions on the coach's signal.",
     "Coach reinforces the cue: know which position you're moving to before the signal, not after.",
     "Repeat the walkthrough 2-3 times to build familiarity with the pattern.",
     "Once smooth, speed up the walkthrough slightly.",
     "Easier: slower, more obvious rotation pattern. Harder: full-speed, less predictable rotation order."
    ]
   },
   {
    "name": "Quick Switch Fielding",
    "desc": "A light live game where the whole fielding team rotates positions every few plays, practising fast, confident position changes.",
    "coach": "Communicate with the teammate you're swapping with.",
    "easier": "Longer time before each rotation.",
    "harder": "Quicker, more frequent rotations.",
    "chaos": "Bonus objectives",
    "setup": "A light live small-sided game on a mini-diamond with the fielding team in position, a batter/feeder, and a clear rotation signal available.",
    "howTo": [
     "Explain that the whole fielding team will rotate positions every few plays during light live play.",
     "Play continues with a batter/feeder sending balls into play as normal.",
     "Every few plays, the coach gives the rotation signal and the whole fielding team moves to their next position confidently and quickly.",
     "Coach reinforces the cue: communicate with the teammate you're swapping with.",
     "Continue play with rotations happening at a steady, predictable interval.",
     "Easier: longer time before each rotation. Harder: quicker, more frequent rotations."
    ]
   },
   {
    "name": "Rotation Under Pressure",
    "desc": "Full-team fielding practice where rotations happen mid-game at unpredictable moments, testing how smoothly the team adapts.",
    "coach": "Stay ready — the next rotation could come any time.",
    "easier": "Coach gives advance warning.",
    "harder": "No warning, quick reaction required.",
    "chaos": "Random constraint calls",
    "setup": "Full-team fielding practice on a mini-diamond with a batter/feeder, and the coach ready to call rotations at unpredictable moments.",
    "howTo": [
     "Explain that rotations will now happen mid-game at unpredictable moments, testing how smoothly the team adapts.",
     "Play continues as normal with the batter/feeder sending balls into play.",
     "The coach calls a rotation signal at an unpredictable point during play, and the team must adapt smoothly without a position being left empty.",
     "Coach reinforces the cue: stay ready — the next rotation could come any time.",
     "Continue play with several unpredictable rotation calls across the activity.",
     "Easier: coach gives advance warning of an upcoming rotation. Harder: no warning, requiring a quick reaction."
    ]
   }
  ],
  "big": {
   "name": "Full Rotation Teeball",
   "desc": "Full-team small-sided game where every fielder rotates through multiple positions across the game, rewarded for smooth, confident transitions as much as individual plays.",
   "setup": "Set up a full-team small-sided game on a mini-diamond with every fielding position covered and bibs to distinguish teams.",
   "howTo": [
    "Explain that every fielder will rotate through multiple positions across the game, and the coach is rewarding smooth, confident transitions as much as individual plays.",
    "Play a small-sided game with normal batting and fielding, using the rotation signal from the earlier activities at set intervals.",
    "On each rotation signal, the whole fielding team moves smoothly to their next position, communicating with the teammate they're swapping with.",
    "Coach calls out specific examples of smooth, confident transitions, alongside normal fielding plays.",
    "Continue with normal batting rotations between teams.",
    "Make sure every player experiences at least 2-3 different fielding positions by the end of the game."
   ]
  },
  "discussion": [
   "What helped you move confidently into a new position today?",
   "Which position did you feel most and least confident in, and why?",
   "How did your team handle rotating under a bit of pressure?"
  ],
  "lookfors": [
   "Moves to new positions quickly and confidently",
   "Applies basic positioning correctly at multiple spots",
   "Supports teammates who are adjusting to a new position"
  ],
  "inclusion": "Allow some students to rotate through fewer, chosen positions initially if the full rotation feels overwhelming, building up to the full cycle.",
  "skillBreakdown": [
   {
    "step": "Know which position you're moving to before the rotation signal.",
    "why": "Knowing in advance means a faster, smoother transition."
   },
   {
    "step": "Apply the correct positioning basics at whatever spot you rotate to.",
    "why": "Rotation only works well if you understand every position's job, not just one."
   },
   {
    "step": "Communicate with the teammate you're swapping with.",
    "why": "Coordinated swaps prevent gaps during the transition."
   }
  ]
 },
 {
  "n": 18,
  "block": 4,
  "title": "Batting Order Tactics",
  "focus": "Batting order & team strategy",
  "walt": "We are learning to think about batting order and simple team strategy as a group.",
  "wilf": [
   "I can contribute an idea to my team's batting order or strategy discussion",
   "I can explain a simple reason behind a batting order decision"
  ],
  "nzc": "Strand B, C · Thinking, Relating to others",
  "value": "Mōhio",
  "valueText": "Understanding how your own strengths and your teammates' strengths might fit together into a shared team plan.",
  "equipment": "Junior bats, soft/modified balls, batting tees, bases/markers, cones, bibs",
  "safety": "Standard full-team game safety",
  "games": [
   {
    "name": "Team Strategy Huddle",
    "desc": "Small teams discuss and decide a simple batting order, giving a reason for at least one placement decision.",
    "coach": "Listen to every teammate's idea before deciding together.",
    "easier": "Coach offers a simple framework (e.g. 'strongest contact hitters mid-order').",
    "harder": "Team builds their own reasoning from scratch.",
    "chaos": "Role rotation",
    "setup": "Small teams of 4-5 gather in a huddle away from the playing area, with paper or a simple verbal format to note their batting order.",
    "howTo": [
     "Explain that the team needs to discuss and decide a simple batting order, giving a reason for at least one placement decision.",
     "Team discusses together who will bat in what order, with each member sharing an opinion.",
     "The team agrees on at least one specific reason for a placement (e.g. 'strongest contact hitter goes third').",
     "Coach reinforces the cue: listen to every teammate's idea before deciding together.",
     "Team writes down or remembers their final order ready for the try-out.",
     "Easier: coach offers a simple framework to guide the discussion. Harder: team builds their own reasoning from scratch."
    ]
   },
   {
    "name": "Order Try-Out",
    "desc": "Teams run a short practice batting sequence in their chosen order, then discuss afterward whether they'd change anything.",
    "coach": "Notice what worked and what you'd adjust next time.",
    "easier": "Shorter sequence, more discussion time.",
    "harder": "Longer sequence, quicker turnaround to discussion.",
    "chaos": "Bonus objectives",
    "setup": "Teams move to a tee or mini-diamond station and run through their chosen batting order in a short practice sequence.",
    "howTo": [
     "Explain that the team will run a short practice batting sequence in their chosen order, then discuss afterward.",
     "Each batter takes their turn in the agreed order, hitting off the tee or in a light live setting.",
     "Once the sequence is complete, the team gathers briefly to discuss whether they'd change anything about the order.",
     "Coach reinforces the cue: notice what worked and what you'd adjust next time.",
     "Teams can adjust their order based on the discussion if they want to.",
     "Easier: shorter sequence with more discussion time. Harder: longer sequence with a quicker turnaround to discussion."
    ]
   },
   {
    "name": "Captain's Call",
    "desc": "Each team nominates a rotating 'captain' who leads a two-minute discussion on one simple tactic to try in their next mini-game.",
    "coach": "Keep the plan simple — one clear idea everyone understands.",
    "easier": "Coach suggests the tactic.",
    "harder": "Team chooses their own tactic.",
    "chaos": "Role rotation",
    "setup": "Each team nominates a rotating 'captain' role, gathering briefly for a two-minute discussion before their next mini-game.",
    "howTo": [
     "Explain that each team nominates a captain who leads a short discussion on one simple tactic to try in their next mini-game.",
     "The nominated captain leads a two-minute discussion, gathering input but ultimately helping the team settle on one clear, simple tactic.",
     "Coach reinforces the cue: keep the plan simple — one clear idea everyone understands.",
     "Team moves into their next mini-game attempting to apply the chosen tactic.",
     "Rotate the captain role to a different student for the next round.",
     "Easier: coach suggests the tactic for the captain to present. Harder: team chooses their own tactic entirely."
    ]
   }
  ],
  "big": {
   "name": "Strategic Small-Sided Teeball",
   "desc": "Small teams play a modified game after choosing their own batting order and one simple team tactic, with the coach highlighting moments where the plan paid off.",
   "setup": "Set up a small-sided game area with tees, bases/markers, and bibs, allowing teams of 4-5 to apply their chosen batting order and tactic.",
   "howTo": [
    "Explain that teams will play a modified game after choosing their own batting order and one simple team tactic, with the coach highlighting moments where the plan paid off.",
    "Teams play using the batting order and tactic they agreed on in the earlier activities.",
    "Coach watches for and calls out specific moments where the team's plan or order worked well.",
    "Continue play with normal rotations between batting and fielding.",
    "Briefly check in with teams partway through to see if they want to adjust their tactic.",
    "Rotate all players through batting and fielding roles across the game."
   ]
  },
  "discussion": [
   "What was one idea your team discussed for your batting order or tactics?",
   "How did having a simple plan change how your team played?",
   "What would your team think about differently next time?"
  ],
  "lookfors": [
   "Contributes an idea to the team's strategy discussion",
   "Can explain a simple reason behind a decision",
   "Applies part of the agreed plan during the mini-game"
  ],
  "inclusion": "Provide simple discussion prompts or a basic decision framework for teams who need more structure in the strategy conversation.",
  "skillBreakdown": [
   {
    "step": "Contribute an idea and a reason to your team's discussion.",
    "why": "Understanding the 'why' behind a decision helps you apply it better in the game."
   },
   {
    "step": "Try out your team's plan and be ready to adjust it.",
    "why": "Plans often need small changes once you see them in action."
   },
   {
    "step": "Communicate the agreed plan clearly to the whole team.",
    "why": "A strategy only works if everyone understands and follows it."
   }
  ]
 },
 {
  "n": 19,
  "block": 4,
  "title": "Full Diamond Match",
  "focus": "Full modified games",
  "walt": "We are learning to apply the whole unit's skills and tactics together in a full small-sided teeball match.",
  "wilf": [
   "I can use skills and tactics from across the unit in a real game",
   "I can adjust my play based on what the game situation calls for"
  ],
  "nzc": "Strand A, B, C · Thinking, Relating to others",
  "value": "Manaaki",
  "valueText": "Serving your team throughout a full match — batting, fielding, and base running — with faithful effort in whichever role is needed.",
  "equipment": "Soft/modified balls, junior bats, batting tees, bases/markers, cones, bibs",
  "safety": "Standard full modified-game safety, soft/modified balls only",
  "games": [
   {
    "name": "Skills Reminder Circuit",
    "desc": "Quick-fire stations lightly revisiting throwing, catching, batting, fielding, and base running from across the unit — a refresher, not new teaching.",
    "coach": "Notice how much more natural these feel now compared to early lessons.",
    "easier": "n/a",
    "harder": "n/a",
    "chaos": "Beat the clock",
    "setup": "Set up 5 short stations (throwing, catching, batting, fielding, base running), each with its own equipment, spread around the space. Small groups of 3-4 rotate through.",
    "howTo": [
     "Explain that this is a quick refresher touching on throwing, catching, batting, fielding, and base running from across the unit — not new teaching.",
     "Each group spends about 90 seconds to 2 minutes at each station, doing a few light reps of the relevant skill using the cues learned earlier in the unit.",
     "Coach circulates, reminding students of the key cue for each station as needed.",
     "Rotate groups to the next station on a signal, keeping the pace brisk.",
     "Continue until every group has visited all 5 stations.",
     "Coach reinforces: notice how much more natural these feel now compared to early lessons."
    ]
   },
   {
    "name": "Tactics Call-Out",
    "desc": "During small games, the coach periodically calls out a tactical focus (e.g. 'placement focus,' 'communication focus,' 'running focus') for players to specifically apply.",
    "coach": "Adapt immediately when a new focus is called.",
    "easier": "n/a",
    "harder": "n/a",
    "chaos": "Random constraint calls",
    "setup": "Small-sided games running across 2-3 mini-diamonds, with the coach positioned to observe and call out to all groups.",
    "howTo": [
     "Explain that during play, the coach will periodically call out a tactical focus (e.g. 'placement focus,' 'communication focus,' 'running focus') for everyone to apply.",
     "Play continues as normal small-sided games across the diamonds.",
     "When the coach calls a tactical focus, players immediately try to apply it in their next few plays (e.g. batters aim for gaps during 'placement focus').",
     "Coach reinforces the cue: adapt immediately when a new focus is called.",
     "Call a new tactical focus every couple of minutes to keep players adjusting.",
     "Continue with normal batting and fielding rotations throughout."
    ]
   },
   {
    "name": "Captain's Read",
    "desc": "Each team nominates a rotating captain who reads the game and calls one tactical focus for their team during a short segment.",
    "coach": "Base your call on what you're actually seeing in the game.",
    "easier": "n/a",
    "harder": "n/a",
    "chaos": "Role rotation",
    "setup": "Each team nominates a rotating captain during a short segment of small-sided play, with the captain positioned to observe the game.",
    "howTo": [
     "Explain that each team nominates a rotating captain who reads the game and calls one tactical focus for their team during a short segment.",
     "The captain watches a short segment of play, thinking about what their team could focus on to improve.",
     "Captain calls one tactical focus for their team (e.g. 'let's cover the gaps better'), based on what they've actually observed.",
     "Coach reinforces the cue: base your call on what you're actually seeing in the game.",
     "Team applies the captain's call for the next few plays.",
     "Rotate the captain role to a new student for the next segment."
    ]
   }
  ],
  "big": {
   "name": "Full Small-Sided Teeball Match",
   "desc": "Multiple small teams play a full, timed modified teeball match with all of the unit's skills and tactics live and relevant — batting, fielding, base running, and decision-making all in play.",
   "setup": "Set up multiple small teams playing a full, timed modified teeball match across 2-3 diamonds, with bibs, tees, bases/markers, and soft/modified balls.",
   "howTo": [
    "Explain that this is a full, timed modified teeball match bringing together all of the unit's skills and tactics — batting, fielding, base running, and decision-making all live and relevant.",
    "Teams play a timed match using normal rules, applying skills and tactics practised across the whole unit.",
    "Coach circulates between diamonds, calling out examples of good technique, decisions, and teamwork as they happen.",
    "Continue play with normal batting, running, and fielding rotations for the set match time.",
    "Briefly pause for a tactical call-out or captain's read partway through if time allows.",
    "Wrap up with a quick note on standout moments from across the match."
   ]
  },
  "discussion": [
   "What tactic or skill from this unit did you use most successfully today?",
   "How did the game change when a new tactical focus was called?",
   "What are you most looking forward to for the tournament?"
  ],
  "lookfors": [
   "Applies a visible range of skills and tactics from across the unit",
   "Adjusts play in response to called tactical focuses",
   "Communicates and reads the game situation"
  ],
  "inclusion": "Allow captains' tactical calls to be simple and concrete ('everyone move in') rather than abstract, so every student can act on them regardless of tactical experience.",
  "skillBreakdown": [
   {
    "step": "Apply the specific tactical focus called out during play.",
    "why": "This lesson is about applying tactics live, not performing skills in isolation."
   },
   {
    "step": "Communicate constantly across batting, fielding, and running.",
    "why": "A full game relies on continuous team communication."
   },
   {
    "step": "Adjust your play when the first approach isn't working.",
    "why": "Adapting tactics is what separates good teeball from just repeating a plan."
   }
  ]
 },
 {
  "n": 20,
  "block": 4,
  "title": "Diamond Cup",
  "focus": "Culminating mini-tournament",
  "walt": "We are learning to apply everything from this unit — batting, throwing, catching, fielding, base running, and teamwork — in a full mini-tournament.",
  "wilf": [
   "I can use skills from across the unit in a real game",
   "I can play fairly and encouragingly in a competitive setting"
  ],
  "nzc": "Strands A, B, C, D · all five Key Competencies",
  "value": "Pānga",
  "valueText": "Reflecting on the impact this whole unit has had — on your skills, your team, and how you treat others in a game.",
  "equipment": "Soft/modified balls, junior bats, batting tees, bases/markers, cones, bibs (multiple colours for round-robin teams)",
  "safety": "Standard game safety; manage fatigue/hydration across a tournament format, ensure fair rotation so no team is overplayed",
  "games": [
   {
    "name": "Unit Skills Warm-Up Carousel",
    "desc": "Quick-fire stations revisiting a taste of the unit's key skills (batting, throwing, catching, fielding, running) — a light refresher, not new teaching.",
    "coach": "Notice how much more comfortable these feel now compared to Lesson 1.",
    "easier": "n/a",
    "harder": "n/a",
    "chaos": "Beat the clock",
    "setup": "Set up 5 quick stations touching on batting, throwing, catching, fielding, and running, spread around the space. Small groups rotate through briefly.",
    "howTo": [
     "Explain that this is a light refresher carousel touching on the unit's key skills — not new teaching.",
     "Each group spends about 60-90 seconds at each station doing a few light reps.",
     "Coach circulates with brief, encouraging reminders rather than detailed coaching at this stage.",
     "Rotate groups to the next station on a signal, keeping the pace energetic and fun.",
     "Continue until every group has visited all 5 stations.",
     "Coach reinforces: notice how much more comfortable these feel now compared to Lesson 1."
    ]
   },
   {
    "name": "Mixed Skill Relay",
    "desc": "Teams complete a relay combining throwing, catching, and a batting strike in sequence — a fun, competitive combination of the whole unit's skills.",
    "coach": "Smooth handovers between skills.",
    "easier": "n/a",
    "harder": "n/a",
    "chaos": "Head-to-head mirror, beat the clock",
    "setup": "Small teams of 3-4 line up at a start cone with a short relay course set up: a throwing target, a catching partner, and a tee to finish with a batting strike.",
    "howTo": [
     "Explain the relay sequence: each team member throws at a target, then catches a toss from a partner, then finishes with a batting strike off the tee, before the next teammate goes.",
     "First team member completes the throw-catch-strike sequence, then tags the next teammate to start.",
     "Coach reinforces the cue: smooth handovers between skills.",
     "Continue until every team member has completed the sequence.",
     "Run 1-2 more rounds if time allows, mixing up the order.",
     "Coach calls out finishing times/order for some friendly competitive energy, alongside a head-to-head mirror race against another team if space allows."
    ]
   },
   {
    "name": "Captain's Challenge",
    "desc": "Each team nominates a captain who sets one focus for their team's tournament games (e.g. 'let's focus on calling our bases clearly today') — light strategic ownership before the tournament begins.",
    "coach": "Give every captain a genuine, valued choice.",
    "easier": "n/a",
    "harder": "n/a",
    "chaos": "Role rotation",
    "setup": "Each team nominates a captain before the tournament begins, gathering briefly as a team to hear the captain's chosen focus.",
    "howTo": [
     "Explain that each team nominates a captain who sets one focus for their team's tournament games.",
     "Captain thinks of one simple, genuine focus for their team (e.g. 'let's focus on calling our bases clearly today') and shares it with the team.",
     "Coach reinforces the cue: give every captain a genuine, valued choice.",
     "Team briefly discusses how they'll apply the captain's focus during the tournament.",
     "Move straight into the round-robin tournament with the focus in mind.",
     "Rotate the captain role for future tournament rounds if there's time for more than one."
    ]
   }
  ],
  "big": {
   "name": "Round-Robin Mini-Tournament",
   "desc": "Multiple small teams rotate through short small-sided teeball matches against each other across 2-3 diamonds, scoring simply (runs or a fair-play points system). Every skill from the unit is relevant somewhere in these games.",
   "setup": "Set up 2-3 mini-diamonds for a round-robin format, with multiple small teams, bibs in different colours for each team, and full equipment (tees, bats, balls, bases/markers) at each diamond.",
   "howTo": [
    "Explain the round-robin format: teams rotate through short small-sided matches against different opponents across the available diamonds.",
    "Run each mini-match for a set short time (e.g. 5-6 minutes), keeping score simply by runs or a fair-play points system agreed at the start.",
    "At the end of each mini-match, rotate teams to a new diamond and a new opponent.",
    "Coach circulates between diamonds, managing fatigue and hydration and ensuring fair rotation so no team is overplayed.",
    "Continue through as many rounds as time allows, keeping a simple running record of results if desired.",
    "Finish with a quick celebration of effort and skills shown across the whole unit, not just final results."
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
   "Shows growth compared to Lesson 1 (informal, teacher's own judgement — no formal recording required)"
  ],
  "inclusion": "Structure round-robin teams to be balanced/mixed-ability; consider a simple fair-play recognition (not just a 'winning team') to keep the culminating day inclusive and values-aligned.",
  "skillBreakdown": [
   {
    "step": "Apply skills from across the whole unit.",
    "why": "The tournament brings batting, throwing, catching, fielding, and running together under real pressure."
   },
   {
    "step": "Communicate and encourage teammates and opponents.",
    "why": "Fair play and encouragement are as much a part of the unit as the physical skills."
   },
   {
    "step": "Reflect on your growth compared to Lesson 1.",
    "why": "Reflecting on your own improvement is as valuable as the result of any one game."
   }
  ]
 }
];


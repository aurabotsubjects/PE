// Volleyball unit data — VOLLEYBALL_BLOCK_INFO + VOLLEYBALL_LESSONS
const VOLLEYBALL_BLOCK_INFO = {
  1:{name:"Foundational Ball Control", range:"Lessons 1–5", color:"var(--b1)", soft:"var(--b1-soft)", warmup:"Bubble Wrap Taps", warmdown:"Reach & Roll",
    warmupSetup:"Open space roughly 20m x 20m for the whole class, one light/soft ball (or balloon) per student, no other equipment needed — this warm-up is about gentle ball contact, not competition.",
    warmupHowTo:[
      "Everyone spreads out with a full arm's reach of space and holds their own ball.",
      "On 'go', students gently self-toss and tap their ball upward continuously, like a light 'bubble wrap' popping rhythm, moving around the space as needed to stay under the ball.",
      "Keep the taps soft and controlled — the goal is raising heart rate and warming up soft hands, not maximum power.",
      "Occasionally call 'freeze taps!' where students catch and hold, then resume on 'go' — this keeps attention sharp without stopping the flow for long.",
      "Run for the full 5 minutes, encouraging students to keep their ball moving the whole time."
    ],
    warmdownSetup:"No equipment needed beyond the space already in use. Gather the class into a loose circle or scattered spread with room for each student to stretch without touching anyone else.",
    warmdownHowTo:[
      "Walk slowly around the space for about 1 minute to bring heart rate down gradually.",
      "Gather into a circle (or stay scattered) and lead a slow, reaching stretch sequence — reach both arms overhead, roll gently down through the spine toward the toes, then roll back up slowly, repeating 3-4 times.",
      "Keep instructions simple and calm: 'reach, roll, breathe' rather than technical cues.",
      "Use this quiet time to briefly ask how the session felt for a couple of students, setting a relaxed tone before the Discussion segment.",
      "Finish with everyone standing tall and taking one big breath in and out together."
    ]
  },
  2:{name:"Combining Skills & Serving", range:"Lessons 6–10", color:"var(--b2)", soft:"var(--b2-soft)", warmup:"Partner Pepper", warmdown:"Partner Stretch Circle",
    warmupSetup:"Pairs spread out across the space, roughly 3-4m apart per pair with enough room between pairs that a stray ball doesn't reach a neighbouring pair. One ball per pair.",
    warmupHowTo:[
      "Partners start gently tossing and bumping/setting the ball back and forth to each other, keeping it light and continuous.",
      "Every 30-45 seconds, call 'pepper switch!' — on this call, partners quickly alternate between using bumps and sets, whichever the coach calls next.",
      "Occasionally call 'jog swap' — both partners jog to find a new partner nearby, then continue the pepper rally with them.",
      "Keep the whole activity light and continuous — the goal is raising heart rate and warming up both touches together, not technical correction.",
      "Run for the full 5 minutes, mixing touch calls and partner swaps throughout."
    ],
    warmdownSetup:"Same pairs from the warm-up (or new pairs), enough space to stretch side-by-side without touching. Balls set aside.",
    warmdownHowTo:[
      "Have pairs walk together slowly around the space for about 1 minute to bring heart rate down.",
      "In pairs, lead 3-4 simple partner-assisted stretches — e.g. one partner gently holds the other's arm across their chest for a shoulder stretch, or both sit and reach toward each other's feet for a hamstring stretch.",
      "Hold each stretch for about 15-20 seconds, then swap who is being assisted if the stretch requires it.",
      "Keep contact gentle and consent-based — no forcing a stretch further than a partner is comfortable with.",
      "Finish with partners saying one thing their partner did well in today's session before moving into the Discussion segment."
    ]
  },
  3:{name:"Rally Building, Movement & Positioning", range:"Lessons 11–15", color:"var(--b3)", soft:"var(--b3-soft)", warmup:"Court Ghosts", warmdown:"Breathe & Balance",
    warmupSetup:"Pairs spread out across the space, no ball needed for this warm-up, roughly 5m x 5m of room per pair.",
    warmupHowTo:[
      "Explain the game: one partner is the 'leader,' the other is the 'ghost' who must copy the leader's court movement as closely as possible, staying about 1-2m behind or beside them.",
      "The leader shuffles, jinks side to side, changes direction and pace — echoing the footwork and space-reading focus of this block.",
      "The ghost tries to mirror every change in direction and stance as quickly as possible, staying low and ready.",
      "Swap roles every 60-90 seconds so both partners lead and shadow.",
      "Run for the full 5 minutes, encouraging bigger, more court-realistic movements as students warm up."
    ],
    warmdownSetup:"No equipment needed. Gather the class into a spread-out circle with room to balance without bumping others.",
    warmdownHowTo:[
      "Walk slowly around the space for about 1 minute to bring heart rate down.",
      "Lead a few slow, controlled breathing cycles together: breathe in for 4 counts, hold for 2, breathe out for 4 — repeat 3-4 times.",
      "Follow with 2-3 simple balance holds, e.g. standing on one foot for 10-15 seconds, then swap feet — this connects to the balanced footwork used throughout this block.",
      "Keep the tone calm and unhurried — this is a good moment to help students settle before reflecting on the lesson.",
      "Finish standing tall with one final deep breath together before moving into the Discussion segment."
    ]
  },
  4:{name:"Team Tactics & Culmination", range:"Lessons 16–20", color:"var(--b4)", soft:"var(--b4-soft)", warmup:"Team Rotation Jog", warmdown:"Circle Stretch & Cheer",
    warmupSetup:"Split the class into their tournament/practice teams (groups of 4-6), each team with a marked-out area to jog in (cones optional). No ball needed.",
    warmupHowTo:[
      "Each team jogs together as a group around their area, staying reasonably close to each other rather than spreading out randomly.",
      "Call out simple position prompts as they jog: 'rotate!' (team shuffles jogging order by one spot), 'spread wide,' 'come together' — echoing the team rotation and tactics focus of this block.",
      "This gets students moving together as a unit and thinking about team shape and order before the tactical focus of today's lesson.",
      "Rotate through several prompts over the 5 minutes, mixing up the order.",
      "Keep energy high and encourage teams to communicate with each other while jogging.",
      "Finish with each team jogging back to a central point together as one group."
    ],
    warmdownSetup:"Gather each team (or the whole class) into a circle with enough room to stretch without touching neighbours.",
    warmdownHowTo:[
      "Walk slowly as a team/group for about 1 minute to bring heart rate down.",
      "In the circle, lead 3-4 simple static stretches together — calves, quads, hamstrings, and a shoulder/arm stretch — holding each for 15-20 seconds.",
      "Keep the group together and calm, using this as a settling-down moment after a high-energy tactical session.",
      "Finish with a short team cheer or acknowledgment — each team says one thing they're proud of from today's session or the unit as a whole.",
      "Move directly into the Discussion segment once the cheer is done."
    ]
  }
};

const VOLLEYBALL_LESSONS = [
 {
  "n": 1,
  "block": 1,
  "title": "Bubble Control",
  "focus": "Ball familiarisation — controlled taps/catches",
  "walt": "We are learning to control a ball using soft hands, catching and tapping it without losing control.",
  "wilf": [
   "I can catch a ball softly above my forehead without it bouncing off my arms",
   "I can tap a ball straight up using two hands"
  ],
  "nzc": "Strand B · Managing self",
  "value": "Aroha",
  "valueText": "Looking after yourself with patience while learning something new, and encouraging others (not laughing at mistakes) as everyone's ball control looks different on day one.",
  "equipment": "1 light/soft volleyball (or balloon indoors) per student, cones for grid boundaries",
  "safety": "Spread out with a full arm's reach of space; watch overhead ball paths so students don't collide while looking up; no diving on hard floors",
  "games": [
   {
    "name": "Catch & Tap",
    "desc": "Toss the ball to yourself, catch it softly above your forehead with two hands, then tap it straight back up before catching again — build up reps.",
    "coach": "Fingers spread and soft, catch the ball rather than trap it against the chest.",
    "easier": "Catch every time, no tap required yet.",
    "harder": "Two taps before each catch.",
    "chaos": "Scoring streaks",
    "setup": "Each student has their own light/soft volleyball (or balloon indoors) and stands in their own space, at least a full arm's reach from the nearest neighbour. No grid lines needed for this one — just spread the class out across the hall or court.",
    "howTo": [
     "Demonstrate first: toss the ball gently to yourself, catch it softly above your forehead with two hands and spread fingers, then tap it straight back up before catching it again.",
     "Students start by tossing to themselves and catching every time, getting used to where the ball lands above their forehead.",
     "Once catching feels comfortable, add the tap: catch, tap straight up, then catch again, building up the number of reps in a row.",
     "There's no formal stoppage — if the ball is dropped or goes wide, students simply pick it up and start again from a fresh toss.",
     "Coach the key message throughout: 'fingers spread and soft, catch the ball rather than trap it against the chest.'",
     "For 'easier', students catch every time with no tap required; for 'harder', require two taps before each catch."
    ]
   },
   {
    "name": "Keep It Up",
    "desc": "Individually, keep the ball off the ground using taps only (no catching) inside a small grid, for as long as possible.",
    "coach": "Move your feet under the ball rather than reaching.",
    "easier": "Allow one bounce between taps.",
    "harder": "Must alternate a one-hand tap and a two-hand tap.",
    "chaos": "Beat the clock (personal best)",
    "setup": "Mark out small individual grids roughly 2m x 2m using cones, one per student, spaced so no two grids touch. Each student keeps their own ball inside their grid.",
    "howTo": [
     "Demonstrate keeping the ball off the ground using taps only (no catching), staying inside the grid.",
     "On 'go', each student starts their own count from a self-toss, tapping the ball upward repeatedly.",
     "The only rule during play is: taps only, ball stays inside the grid, no catching.",
     "If the ball touches the ground or leaves the grid, that student's count resets to zero and they restart immediately with a fresh toss — there's no waiting for a whistle.",
     "Coach the key message throughout: 'move your feet under the ball rather than reaching.'",
     "For 'easier', allow one bounce between taps; for 'harder', students must alternate a one-hand tap and a two-hand tap."
    ]
   },
   {
    "name": "Circle Pop-Up",
    "desc": "Groups of 4–5 stand in a circle and tap the ball to each other, calling the receiver's name before each tap, trying to keep it off the ground.",
    "coach": "Call the name early, aim the tap gently above the receiver's head.",
    "easier": "Allow a catch between taps.",
    "harder": "No catching at all — clean tap-passes only.",
    "chaos": "Role rotation, scoring streaks",
    "setup": "Split the class into groups of 4-5 and have each group form a circle roughly 3m across, with enough space between circles that a mistimed tap doesn't land in a neighbouring group. One ball per circle.",
    "howTo": [
     "Demonstrate the pattern: call a teammate's name, then tap the ball gently toward them, aiming it above their head so it's easy to control.",
     "One student starts with the ball and calls a name before their first tap.",
     "Play continues around the circle with each receiver calling the next name before they tap, always trying to keep the ball off the ground.",
     "If the ball hits the ground, the group simply restarts with any student picking it up and calling a name to begin again — no formal scoring, just rebuilding the streak.",
     "Coach the key message throughout: 'call the name early, aim the tap gently above the receiver's head.'",
     "For 'easier', allow a catch between taps; for 'harder', remove catching entirely so it's clean tap-passes only."
    ]
   }
  ],
  "big": {
   "name": "Circle Keep-It-Up Challenge",
   "desc": "Groups of 6–8 form large circles; each team counts consecutive taps kept off the ground as a group, without a break, racing other circles for the highest streak. Soft, controlled ball contact (today's skill) directly determines the team's score.",
   "setup": "Split the class into teams of 6-8 and have each team form a large circle, roughly 5-6m across, with plenty of space between different teams' circles. One ball per team.",
   "howTo": [
    "Explain the challenge: as a group, count every consecutive tap that keeps the ball off the ground, without a break, and see which circle can reach the highest streak.",
    "One student in each circle starts with a self-toss and the first tap; the ball can be tapped by anyone as it moves around or across the circle.",
    "Every legal, controlled tap that keeps the ball airborne adds one to the team's running count, said out loud together as a group.",
    "The moment the ball touches the ground, that attempt ends — the group notes their score, picks the ball up, and immediately restarts the count from zero.",
    "Give each circle 3-4 attempts and celebrate whichever team beats their own previous best, not just the highest overall number.",
    "Remind students this connects directly to today's skill: soft, controlled contact above the forehead is exactly what keeps a streak alive."
   ]
  },
  "discussion": [
   "What helped you keep control of the ball today?",
   "Who did you notice using really soft hands — what did that look like?",
   "What was tricky, and how did you keep trying?"
  ],
  "lookfors": [
   "Catches with soft hands above the forehead (not against the chest)",
   "Fingers spread on contact",
   "Moves feet to get under the ball rather than reaching with arms"
  ],
  "inclusion": "Use a balloon or very light ball for students newer to the skill so contact doesn't sting; allow unlimited catches between taps until confidence builds.",
  "skillBreakdown": [
   {
    "step": "Use soft, spread fingers to control the ball on contact.",
    "why": "Soft hands absorb the ball's speed rather than it bouncing away uncontrolled."
   },
   {
    "step": "Keep your eyes on the ball all the way to contact.",
    "why": "Looking away early is the most common cause of a mis-hit or drop."
   },
   {
    "step": "Move your feet to get under or behind the ball rather than reaching.",
    "why": "Full-body positioning gives more control than arms alone."
   }
  ]
 },
 {
  "n": 2,
  "block": 1,
  "title": "Forearm Fundamentals",
  "focus": "Forearm pass (bump) fundamentals",
  "walt": "We are learning to bump a ball using flat forearms so it travels up and forward in a controlled way.",
  "wilf": [
   "I can put my forearms together flat, like a platform",
   "I can use my legs, not my arms, to power the bump"
  ],
  "nzc": "Strand B · Managing self",
  "value": "Mōhio",
  "valueText": "Knowing and understanding your own body — noticing what your arms and legs are doing, and learning from how the ball responds.",
  "equipment": "1 ball per student or pair, cones",
  "safety": "Keep good spacing so swinging arms don't clash with a neighbour's",
  "games": [
   {
    "name": "Platform Freeze",
    "desc": "Students self-toss a low, gentle ball and bump it to themselves, freezing their platform (arms together, flat) after each contact so it can be checked.",
    "coach": "Thumbs pressed together, elbows locked, bend at the knees not the waist.",
    "easier": "Partner drops the ball gently instead of self-toss.",
    "harder": "Self-toss slightly further away, forcing a small step to the platform.",
    "chaos": "Random constraint calls (\"freeze!\")",
    "setup": "Students work individually or in pairs, each with one ball, spread out with enough room that a swinging arm platform can't clash with a neighbour. No other equipment needed.",
    "howTo": [
     "Demonstrate the platform first: thumbs pressed together, arms straight and flat, elbows locked, bending at the knees rather than the waist to get under the ball.",
     "Students self-toss a low, gentle ball just above waist height and bump it to themselves using the platform.",
     "After every contact, freeze the platform in place for a second so it can be checked — by a partner, the coach, or the student themselves.",
     "If the ball drops or the platform breaks down, students simply reset with a fresh gentle toss and continue.",
     "Coach the key message throughout: 'thumbs pressed together, elbows locked, bend at the knees not the waist.'",
     "For 'easier', have a partner drop the ball gently instead of self-tossing; for 'harder', self-toss slightly further away so a small step is needed to reach the platform."
    ]
   },
   {
    "name": "Bump to Self Streak",
    "desc": "Individually, bump the ball to yourself as many times in a row as possible, tracking a personal best streak.",
    "coach": "Use leg power, keep the platform steady rather than swinging the arms hard.",
    "easier": "Allow a small bounce between bumps.",
    "harder": "Must bump above head height each time.",
    "chaos": "Scoring streaks",
    "setup": "Each student has their own ball and their own space, roughly 2m x 2m, so a slightly wayward bump doesn't land in someone else's area.",
    "howTo": [
     "Demonstrate bumping the ball to yourself using leg power rather than swinging the arms, keeping the platform steady.",
     "Students self-toss and begin bumping the ball to themselves, counting each successful bump out loud.",
     "The count keeps going as long as the ball stays under control and off the ground.",
     "If the ball is dropped or bumped away, that's the end of the streak — the student notes their personal best and restarts immediately with a fresh toss.",
     "Coach the key message throughout: 'use leg power, keep the platform steady rather than swinging the arms hard.'",
     "For 'easier', allow a small bounce between bumps; for 'harder', require every bump to go above head height."
    ]
   },
   {
    "name": "Partner Feed Bump",
    "desc": "In pairs, one gently tosses the ball underarm, the other bumps it back; swap roles after 6 attempts.",
    "coach": "Move the feet to get square to the ball before contacting it.",
    "easier": "Tosser stands closer, softer toss.",
    "harder": "Tosser varies the toss slightly left/right, forcing a small movement first.",
    "chaos": "Role rotation",
    "setup": "Pairs spread out across the space, roughly 3m apart, each pair with one ball.",
    "howTo": [
     "Demonstrate the roles: one partner gently tosses the ball underarm to the other, who bumps it back using a platform.",
     "The tosser starts each rep with a soft, predictable underarm toss aimed at the receiver's midline.",
     "The receiver moves their feet to get square to the ball before contacting it, then bumps it back to the tosser.",
     "After 6 attempts, partners swap roles so both get equal practice tossing and bumping.",
     "Coach the key message throughout: 'move the feet to get square to the ball before contacting it.'",
     "For 'easier', the tosser stands closer and tosses more softly; for 'harder', the tosser varies the toss slightly left or right, forcing a small movement first."
    ]
   }
  ],
  "big": {
   "name": "Bump Battle Grids",
   "desc": "Pairs face off across a low rope/line in small grids, gently tossing/bumping the ball back and forth, scoring a point if the ball lands in the opponent's grid after a legal bump — a simple, low-pressure introduction to using the bump in a game. Clean forearm technique determines whose bumps stay controlled.",
   "setup": "Pairs face off across a low rope or line (set at roughly waist height) inside small grids about 3m x 3m per side. One ball per pair.",
   "howTo": [
    "Explain the game: gently toss or bump the ball back and forth across the rope, scoring a point for your side if the ball lands inside the opponent's grid after a legal bump.",
    "One partner starts by tossing the ball over the rope into the opponent's grid to begin the rally.",
    "From there, every return must be a legal bump (platform contact, not a catch or throw) sent back over the rope.",
    "A point is scored whenever the ball lands inside the opponent's grid after a controlled bump, or if the receiving side fails to return it legally — play then restarts with a fresh toss from whoever conceded the point.",
    "Rotate opponents every few minutes so students get to bump against a few different partners.",
    "Keep the tone low-pressure — celebrate clean forearm contact and controlled placement over raw power, since that's what today's skill was building toward."
   ]
  },
  "discussion": [
   "What did your platform (arms) feel like when the bump went well?",
   "What part of your body actually did the work — arms or legs?",
   "What's one thing you'll try to fix next time?"
  ],
  "lookfors": [
   "Forms a flat platform with forearms together",
   "Bends knees rather than swinging arms hard",
   "Gets feet in position before contact"
  ],
  "inclusion": "For students who find the platform shape uncomfortable, allow a two-hand 'catch and bump' hybrid at first (catch, reset, then bump) before removing the catch.",
  "skillBreakdown": [
   {
    "step": "Join your hands together and keep arms flat and straight.",
    "why": "A flat platform gives a consistent, predictable surface for the ball to bounce off."
   },
   {
    "step": "Contact the ball on the forearms, not the wrists or hands.",
    "why": "The forearms give the largest, most stable contact area."
   },
   {
    "step": "Use your legs to generate the movement, not just your arms.",
    "why": "Leg drive gives more control and reduces reliance on arm swing, which is less accurate."
   }
  ]
 },
 {
  "n": 3,
  "block": 1,
  "title": "Target Bump",
  "focus": "Bump accuracy to a target",
  "walt": "We are learning to bump the ball so it travels accurately toward a chosen target.",
  "wilf": [
   "I can aim my platform toward a target before I bump",
   "I can bump the ball so a partner doesn't have to move far to receive it"
  ],
  "nzc": "Strand B · Relating to others",
  "value": "Manaaki",
  "valueText": "A good, accurate bump makes the game better for your partner — thinking about how your actions help someone else, not just yourself.",
  "equipment": "1 ball per pair, cones/hoops as targets",
  "safety": "Space grids apart so pairs aren't bumping into each other's target zones",
  "games": [
   {
    "name": "Hoop Target Bump",
    "desc": "A partner tosses the ball; the bumper aims to land it inside a hoop or cone square a few metres away.",
    "coach": "Angle the platform toward the target, don't just swing upward.",
    "easier": "Bigger hoop, closer distance.",
    "harder": "Smaller target, further away.",
    "chaos": "Scoring streaks",
    "setup": "Pairs spread out, each with one ball and one hoop (or a small cone square marking a target) placed a few metres from the bumper.",
    "howTo": [
     "Demonstrate angling the platform toward the target rather than just swinging the ball upward.",
     "The tosser gently underarm-tosses the ball to the bumper, aiming to make the contact easy to control.",
     "The bumper's job is to angle their platform so the ball lands inside the hoop or cone square.",
     "After each attempt, retrieve the ball and go again — there's no formal stoppage, just repeated attempts building accuracy.",
     "Coach the key message throughout: 'angle the platform toward the target, don't just swing upward.'",
     "For 'easier', use a bigger hoop and stand closer; for 'harder', use a smaller target further away."
    ]
   },
   {
    "name": "Bump to a Moving Partner",
    "desc": "Tosser jogs gently side to side; the bumper must track and bump accurately to wherever the tosser currently is.",
    "coach": "Watch the target, not just the ball, in the split second before contact.",
    "easier": "Tosser moves slowly/predictably.",
    "harder": "Tosser changes direction quickly.",
    "chaos": "Random constraint calls",
    "setup": "Pairs spread out with enough room for the tosser to move side to side, roughly 4-5m of lateral space, one ball per pair.",
    "howTo": [
     "Demonstrate the idea: the tosser jogs gently side to side while tossing, and the bumper must track where they currently are, not where they started.",
     "The tosser begins moving at an easy, predictable pace side to side while tossing the ball toward the bumper.",
     "The bumper watches the tosser's current position and adjusts their feet before each bump to stay square to wherever they've moved.",
     "Continue for a set number of reps, then swap roles so both partners practise bumping to a moving target.",
     "Coach the key message throughout: 'watch the target, not just the ball, in the split second before contact.'",
     "For 'easier', the tosser moves slowly and predictably; for 'harder', the tosser changes direction quickly and less predictably."
    ]
   },
   {
    "name": "Triangle Bump Relay",
    "desc": "Trios stand in a triangle; bump the ball around the triangle in order as many times as possible without it hitting the ground, racing other trios.",
    "coach": "Call the next receiver's name before you bump.",
    "easier": "Allow a catch between bumps.",
    "harder": "Must go around the triangle in both directions on request.",
    "chaos": "Head-to-head mirror",
    "setup": "Groups of three stand in a triangle formation, spaced roughly 2-3m apart, one ball per trio, with enough room between trios that a stray bump doesn't reach a neighbouring group.",
    "howTo": [
     "Demonstrate calling the next receiver's name clearly before bumping the ball toward them.",
     "One student starts with the ball and calls the name of whichever teammate they're bumping to.",
     "Play continues around the triangle, always calling the next name before contact, trying to keep the ball off the ground for as long as possible.",
     "If the ball touches the ground, the trio simply restarts immediately with a fresh toss and keeps counting from zero.",
     "Coach the key message throughout: 'call the next receiver's name before you bump.'",
     "For 'easier', allow a catch between bumps; for 'harder', the trio must be able to reverse direction around the triangle on request."
    ]
   }
  ],
  "big": {
   "name": "Target Bump Rally Court",
   "desc": "Small groups rally a ball across a low net/rope, scoring bonus points any time a bump lands inside a marked target zone on the other side, in addition to normal rally points. Accuracy — not just getting the ball over — is what earns the team extra points.",
   "setup": "Small groups (4-6 students, split into two even sides) rally across a low net or rope, inside a court roughly 6m x 4m, with a marked target zone (cones or a taped square) on each side of the net.",
   "howTo": [
    "Explain the scoring: normal rally points are earned as usual, but any bump that lands inside the marked target zone on the opponent's side earns an extra bonus point.",
    "One side starts the rally with a gentle toss or bump over the net to begin play.",
    "Players return the ball with legal bumps, aiming for the target zone whenever they get the chance, while still keeping the rally going.",
    "A rally point is scored when the other side fails to return the ball legally; a bonus point is added on top any time a bump lands inside the target zone, whether or not that specific touch ends the rally.",
    "Restart quickly after each point with a fresh toss from the side that conceded, keeping the pace up.",
    "Coach students to notice that aiming for the target — not just getting the ball over — is what earns the extra points today."
   ]
  },
  "discussion": [
   "What helped you aim your bump toward the target today?",
   "How did an accurate bump make it easier for your partner?",
   "What happens to a rally when bumps aren't accurate?"
  ],
  "lookfors": [
   "Platform angled toward the target before contact",
   "Consistent leg power rather than arm swing",
   "Communicates before receiving/bumping in group games"
  ],
  "inclusion": "Use bigger targets and shorter distances for students still building consistency; the triangle/relay games scale naturally by moving players closer together.",
  "skillBreakdown": [
   {
    "step": "Angle your platform toward your target before contact.",
    "why": "The platform's angle directly controls the ball's direction."
   },
   {
    "step": "Move your feet to get in line with the ball first.",
    "why": "Reaching sideways with the platform reduces accuracy."
   },
   {
    "step": "Keep the motion controlled — a small punch from the legs, not a big swing.",
    "why": "A big swing is harder to direct accurately."
   }
  ]
 },
 {
  "n": 4,
  "block": 1,
  "title": "Platform Up",
  "focus": "Overhead set fundamentals",
  "walt": "We are learning correct setting technique — using fingers (not palms) to push the ball up and forward from above the forehead.",
  "wilf": [
   "I can shape my hands like a \"window\" above my forehead before the ball arrives",
   "I can push the ball up using my fingers and a small leg extension, not a slap"
  ],
  "nzc": "Strand B · Managing self",
  "value": "Pānga",
  "valueText": "Thinking ahead about your hand shape and body position before the ball arrives, rather than just reacting at the last second.",
  "equipment": "1 ball per student or pair, cones",
  "safety": "Keep sets below a safe, controlled height early on — no wild high sets near other groups",
  "games": [
   {
    "name": "Window Shape Freeze",
    "desc": "Students hold their \"window\" hand shape above their forehead, self-toss a gentle ball into it, and freeze on catch to check finger position before pushing it back up.",
    "coach": "Thumbs and index fingers form a triangle/window, elbows out and slightly bent.",
    "easier": "Catch first, check shape, then push.",
    "harder": "Remove the catch — push straight through on contact.",
    "chaos": "Random constraint calls (\"freeze!\")",
    "setup": "Students work individually, each with a ball, spread out with enough room to freeze and check their hand shape without bumping a neighbour.",
    "howTo": [
     "Demonstrate the 'window' hand shape: thumbs and index fingers forming a triangle above the forehead, elbows out and slightly bent.",
     "Students self-toss a gentle ball so it drops into their window shape above their forehead.",
     "On catching the ball in the window shape, freeze for a second to check finger position before pushing it back upward.",
     "If the toss goes wide or the ball is dropped, simply reset with a fresh gentle toss and continue.",
     "Coach the key message throughout: 'thumbs and index fingers form a triangle/window, elbows out and slightly bent.'",
     "For 'easier', catch first, check the shape, then push the ball back up; for 'harder', remove the catch and push straight through on contact."
    ]
   },
   {
    "name": "Set to Self Streak",
    "desc": "Individually, set the ball to yourself as many times in a row as possible using fingers only, tracking a personal best.",
    "coach": "Get under the ball early, contact it above and slightly in front of the forehead.",
    "easier": "Allow a small bounce between sets.",
    "harder": "Must move one step between each set (no standing still).",
    "chaos": "Scoring streaks",
    "setup": "Each student has their own ball and their own space, roughly 2m x 2m, spread well apart from neighbours.",
    "howTo": [
     "Demonstrate setting using fingers only, contacting the ball above and slightly in front of the forehead.",
     "Students self-toss and begin setting the ball to themselves, counting each successful set out loud.",
     "The aim is to get under the ball early each time rather than reaching for it late.",
     "If the ball is dropped or mishandled, that's the end of the streak — note the personal best and restart immediately with a fresh toss.",
     "Coach the key message throughout: 'get under the ball early, contact it above and slightly in front of the forehead.'",
     "For 'easier', allow a small bounce between sets; for 'harder', require one step of movement between every set — no standing still."
    ]
   },
   {
    "name": "Partner Feed Set",
    "desc": "In pairs, one gently underarm-tosses the ball slightly above head height, the other sets it back; swap after 6 attempts.",
    "coach": "Move the feet to get square and underneath the ball before it arrives.",
    "easier": "Tosser stands closer, softer toss.",
    "harder": "Tosser varies the toss left/right slightly.",
    "chaos": "Role rotation",
    "setup": "Pairs spread out across the space, roughly 3m apart, one ball per pair.",
    "howTo": [
     "Demonstrate the roles: one partner gently underarm-tosses the ball slightly above head height, the other sets it back using fingers only.",
     "The tosser begins each rep with a soft, predictable underarm toss aimed just above the receiver's head.",
     "The receiver moves their feet to get square and underneath the ball before it arrives, then sets it back cleanly.",
     "After 6 attempts, partners swap roles so both get equal practice tossing and setting.",
     "Coach the key message throughout: 'move the feet to get square and underneath the ball before it arrives.'",
     "For 'easier', the tosser stands closer with a softer toss; for 'harder', the tosser varies the toss slightly left or right."
    ]
   }
  ],
  "big": {
   "name": "Set Battle Grids",
   "desc": "Pairs face off across a low rope/line in small grids, tossing/setting the ball back and forth, scoring a point if the ball lands in the opponent's grid after a legal set — the setting equivalent of Lesson 2's bump battle. Clean finger technique determines whose sets stay controlled and legal (no obvious catches/throws).",
   "setup": "Pairs face off across a low rope or line inside small grids about 3m x 3m per side, same layout as Lesson 2's Bump Battle Grids. One ball per pair.",
   "howTo": [
    "Explain the game: toss or set the ball back and forth across the rope, scoring a point for your side if the ball lands inside the opponent's grid after a legal set.",
    "One partner starts by tossing the ball over the rope into the opponent's grid to begin the rally.",
    "From there, every return must be a legal, clean finger-set — no obvious catches or throws — sent back over the rope.",
    "A point is scored whenever the ball lands inside the opponent's grid after a legal set, or if the receiving side fails to return it legally; play then restarts with a fresh toss from whoever conceded the point.",
    "Rotate opponents every few minutes so students get to set against a few different partners.",
    "Keep a close eye on legality — the game only works as intended if sets are genuinely clean finger contacts, not disguised catches."
   ]
  },
  "discussion": [
   "What did your hand shape look like when your set went well?",
   "What's the difference between how a bump and a set feel?",
   "What's one thing you'll try to fix next time?"
  ],
  "lookfors": [
   "Hands form a \"window\" shape above the forehead",
   "Contact is with fingers, not palms",
   "Uses a small leg extension for power, not just the arms"
  ],
  "inclusion": "For students who find finger contact uncomfortable, allow a two-hand 'catch and push' version first before removing the catch; softer/lighter balls reduce sting and build confidence.",
  "skillBreakdown": [
   {
    "step": "Get in position under the ball early, hands up and ready.",
    "why": "Being in position before the ball arrives gives cleaner technique."
   },
   {
    "step": "Form a triangle or window shape with your hands above your forehead.",
    "why": "This hand shape gives a soft, controlled contact for the set."
   },
   {
    "step": "Extend your legs and arms together to push the ball up and out.",
    "why": "Using the whole body gives consistent power and control, not just the fingers."
   }
  ]
 },
 {
  "n": 5,
  "block": 1,
  "title": "Set the Target",
  "focus": "Set accuracy to a target",
  "walt": "We are learning to set the ball so it travels accurately toward a chosen target.",
  "wilf": [
   "I can choose a target before I set",
   "I can set the ball so a partner doesn't have to move far to receive it"
  ],
  "nzc": "Strand B · Thinking",
  "value": "Aroha",
  "valueText": "Being patient and kind with yourself (and encouraging teammates) when a set doesn't go to plan — everyone's still learning.",
  "equipment": "1 ball per pair, cones/hoops as targets",
  "safety": "Space grids apart; sets should stay at a safe, controlled height near other groups",
  "games": [
   {
    "name": "Hoop Target Set",
    "desc": "A partner tosses the ball; the setter aims to land it inside a hoop or cone square a few metres away, using a clean finger-set.",
    "coach": "Face the target with your whole body before the ball arrives.",
    "easier": "Bigger hoop, closer distance.",
    "harder": "Smaller target, further away.",
    "chaos": "Scoring streaks",
    "setup": "Pairs spread out, each with one ball and one hoop (or cone square) placed a few metres from the setter.",
    "howTo": [
     "Demonstrate facing the target with the whole body before the ball arrives, not just reaching with the arms.",
     "The tosser gently underarm-tosses the ball toward the setter, giving them time to get positioned.",
     "The setter's job is to face the hoop and use a clean finger-set to land the ball inside it.",
     "After each attempt, retrieve the ball and go again, building accuracy through repetition.",
     "Coach the key message throughout: 'face the target with your whole body before the ball arrives.'",
     "For 'easier', use a bigger hoop and stand closer; for 'harder', use a smaller target further away."
    ]
   },
   {
    "name": "Set to a Moving Partner",
    "desc": "Tosser jogs gently side to side; the setter must track and set accurately to wherever the tosser currently is.",
    "coach": "Get underneath the ball early rather than reaching at the last second.",
    "easier": "Tosser moves slowly/predictably.",
    "harder": "Tosser changes direction quickly.",
    "chaos": "Random constraint calls",
    "setup": "Pairs spread out with enough room for the tosser to move side to side, roughly 4-5m of lateral space, one ball per pair.",
    "howTo": [
     "Demonstrate the idea: the tosser jogs gently side to side while tossing, and the setter must track their current position, not where they started.",
     "The tosser begins moving at an easy, predictable pace side to side while tossing the ball toward the setter.",
     "The setter gets underneath the ball early rather than reaching at the last second, adjusting their feet to the tosser's current spot.",
     "Continue for a set number of reps, then swap roles so both partners practise setting to a moving target.",
     "Coach the key message throughout: 'get underneath the ball early rather than reaching at the last second.'",
     "For 'easier', the tosser moves slowly and predictably; for 'harder', the tosser changes direction quickly."
    ]
   },
   {
    "name": "Triangle Set Relay",
    "desc": "Trios stand in a triangle; set the ball around the triangle in order as many times as possible without it hitting the ground, racing other trios.",
    "coach": "Call the next receiver's name before you set.",
    "easier": "Allow a catch between sets.",
    "harder": "Alternate direction around the triangle on request.",
    "chaos": "Head-to-head mirror",
    "setup": "Groups of three stand in a triangle formation, spaced roughly 2-3m apart, one ball per trio, with enough room between trios.",
    "howTo": [
     "Demonstrate calling the next receiver's name clearly before setting the ball toward them.",
     "One student starts with the ball and calls the name of whichever teammate they're setting to.",
     "Play continues around the triangle, always calling the next name before contact, trying to keep the ball off the ground for as long as possible.",
     "If the ball touches the ground, the trio simply restarts immediately with a fresh toss and keeps counting from zero.",
     "Coach the key message throughout: 'call the next receiver's name before you set.'",
     "For 'easier', allow a catch between sets; for 'harder', the trio must alternate direction around the triangle on request."
    ]
   }
  ],
  "big": {
   "name": "Target Set Rally Court",
   "desc": "Small groups rally across a low net/rope, scoring bonus points any time a set lands inside a marked target zone on the other side, alongside normal rally points. Accuracy is what earns the extra points, not just height or power.",
   "setup": "Small groups (4-6 students, split into two even sides) rally across a low net or rope, inside a court roughly 6m x 4m, with a marked target zone on each side of the net.",
   "howTo": [
    "Explain the scoring: normal rally points are earned as usual, but any set that lands inside the marked target zone on the opponent's side earns an extra bonus point.",
    "One side starts the rally with a gentle toss or set over the net to begin play.",
    "Players return the ball with legal sets, aiming for the target zone whenever they get the chance, while still keeping the rally going.",
    "A rally point is scored when the other side fails to return the ball legally; a bonus point is added on top any time a set lands inside the target zone.",
    "Restart quickly after each point with a fresh toss from the side that conceded, keeping the pace up.",
    "Coach students to notice that accuracy — not just height or power — is what earns the extra points today."
   ]
  },
  "discussion": [
   "What helped you aim your set toward the target today?",
   "How did an accurate set make it easier for your partner?",
   "What happens to a rally when sets aren't accurate?"
  ],
  "lookfors": [
   "Body faces the target before contact",
   "Gets underneath the ball early",
   "Consistent, controlled height on sets rather than wild variation"
  ],
  "inclusion": "Use bigger targets and shorter distances for students still building consistency; allow a 'catch and reset' version of the set for students not yet confident with clean finger contact.",
  "skillBreakdown": [
   {
    "step": "Square your body and shoulders to the target before setting.",
    "why": "Your body position influences where the set actually goes."
   },
   {
    "step": "Contact the ball with fingertips, not palms.",
    "why": "Fingertip contact is a legal, controlled touch that shapes the set accurately."
   },
   {
    "step": "Follow through toward the target with your arms.",
    "why": "Stopping the motion early can send the set short or off-line."
   }
  ]
 },
 {
  "n": 6,
  "block": 2,
  "title": "Bump to Set",
  "focus": "Combining bump → set",
  "walt": "We are learning to combine a bump and a set together in a short sequence, like the start of a real rally.",
  "wilf": [
   "I can bump the ball under control to myself or a partner",
   "I can follow my bump with a clean set straight after"
  ],
  "nzc": "Strand B · Relating to others",
  "value": "Mōhio",
  "valueText": "Understanding how the two skills work together — knowing which one to use and when, based on how the ball arrives.",
  "equipment": "Balls, cones",
  "safety": "Keep enough space between pairs/trios so sequences don't collide",
  "games": [
   {
    "name": "Bump-Set to Self",
    "desc": "Individually, self-toss, bump the ball up to yourself, then set it — repeating the bump-then-set sequence as many times as possible.",
    "coach": "The bump should send the ball high enough and controlled enough to set cleanly next.",
    "easier": "Allow a small bounce or catch between the two actions.",
    "harder": "No catching at all between bump and set.",
    "chaos": "Scoring streaks",
    "setup": "Each student has their own ball and their own space, roughly 2m x 2m, spread well apart from neighbours.",
    "howTo": [
     "Demonstrate the sequence: self-toss, bump the ball up to yourself, then set it — repeating bump-then-set over and over.",
     "Students begin with a gentle self-toss, followed by one bump contact, then one set contact, in that order.",
     "The bump should send the ball high enough and controlled enough that the set that follows is easy to execute cleanly.",
     "If the ball drops at any point, that's the end of the sequence count — students note their best and restart with a fresh toss.",
     "Coach the key message throughout: 'the bump should send the ball high enough and controlled enough to set cleanly next.'",
     "For 'easier', allow a small bounce or catch between the two actions; for 'harder', remove catching entirely between bump and set."
    ]
   },
   {
    "name": "Partner Bump-Set Relay",
    "desc": "In pairs, Player A tosses, Player B bumps it back to themselves then sets it to Player A, who catches and repeats.",
    "coach": "Move your feet into position for the set immediately after the bump.",
    "easier": "Allow a catch between the bump and set.",
    "harder": "B must move sideways one step between the bump and the set.",
    "chaos": "Role rotation",
    "setup": "Pairs spread out across the space, roughly 3-4m apart, one ball per pair.",
    "howTo": [
     "Demonstrate the sequence: Player A tosses, Player B bumps it to themselves then sets it back to Player A, who catches.",
     "Player A starts with a gentle toss toward Player B.",
     "Player B bumps the ball up to themselves first, then follows with a set sent back to Player A.",
     "Player A catches the set, then repeats the toss to keep the cycle going — swap who tosses and who bump-sets after several reps.",
     "Coach the key message throughout: 'move your feet into position for the set immediately after the bump.'",
     "For 'easier', allow a catch between the bump and the set; for 'harder', Player B must move sideways one step between the bump and the set."
    ]
   },
   {
    "name": "Trio Sequence Tag",
    "desc": "Trios pass in sequence — bump, set, catch — cycling through all three players, trying to keep the sequence going for as long as possible without the ball touching the ground.",
    "coach": "Call which action you're about to use ('bump!' or 'set!').",
    "easier": "Allow a catch anywhere in the sequence if needed.",
    "harder": "No catching allowed at all.",
    "chaos": "Scoring streaks, role rotation",
    "setup": "Groups of three stand spread out roughly 2-3m apart in a small triangle or line, one ball per trio, with enough room between trios.",
    "howTo": [
     "Demonstrate the full cycle: bump, set, catch, passed between the three players in sequence, calling out which action is coming.",
     "One student starts the sequence by calling 'bump!' and bumping the ball to a teammate.",
     "That teammate calls 'set!' and sets it on to the third player, who catches it before the cycle repeats.",
     "The group keeps cycling through bump, set, catch for as long as possible without the ball touching the ground, restarting immediately with a fresh toss if it drops.",
     "Coach the key message throughout: 'call which action you're about to use (\"bump!\" or \"set!\").'",
     "For 'easier', allow a catch anywhere in the sequence if needed; for 'harder', remove catching allowed at all."
    ]
   }
  ],
  "big": {
   "name": "2-Touch Rally Court",
   "desc": "Small groups rally across a low net; each side must use exactly two touches (a bump then a set, in either order) before sending the ball over. Combining the two skills cleanly is what keeps a rally alive.",
   "setup": "Small groups (4-6 students, split into two even sides) rally across a low net, inside a court roughly 6m x 4m.",
   "howTo": [
    "Explain the rule: each side must use exactly two touches — a bump then a set, in either order — before sending the ball over the net.",
    "One side starts the rally with a toss over the net to begin play.",
    "The receiving side must use exactly two touches (bump then set, or set then bump) before returning it, calling out which touch they're using as they go.",
    "A point is scored if the other side fails to return the ball legally within the two-touch limit, or the ball lands out; play restarts quickly with a toss from whoever conceded.",
    "Rotate opponents every few minutes so students get variety in who they're combining skills against.",
    "Coach students that combining the two skills cleanly — not rushing either touch — is what keeps their rally alive under the two-touch rule."
   ]
  },
  "discussion": [
   "What helped you go smoothly from a bump into a set today?",
   "How did you decide which touch to use first?",
   "What was tricky about combining the two skills, and how did you keep trying?"
  ],
  "lookfors": [
   "Bump sends the ball to a controlled, settable height",
   "Quick footwork adjustment between the two actions",
   "Calls out which action is coming"
  ],
  "inclusion": "Allow a catch between the bump and the set for as long as needed; remove it gradually as confidence grows rather than all at once.",
  "skillBreakdown": [
   {
    "step": "Call which touch you're taking to avoid confusion with a teammate.",
    "why": "Clear communication prevents both players going for the same ball."
   },
   {
    "step": "Bump the ball up high and central to give the setter time and a good position.",
    "why": "A low, off-target bump makes the following set much harder."
   },
   {
    "step": "Move into position early for your touch, don't wait for the ball to arrive.",
    "why": "Being in position before the ball arrives gives cleaner technique for both touches."
   }
  ]
 },
 {
  "n": 7,
  "block": 2,
  "title": "Serve It Up",
  "focus": "Serving technique (underarm)",
  "walt": "We are learning correct underarm serving technique — how to strike the ball cleanly and legally over a net.",
  "wilf": [
   "I can hold the ball still in one hand and strike it with the heel of my other hand",
   "I can step forward as I serve to add controlled power"
  ],
  "nzc": "Strand B · Managing self",
  "value": "Manaaki",
  "valueText": "Practising a skill faithfully, with focus and effort, even when it doesn't work first time — using your talent well takes repetition.",
  "equipment": "Balls, low nets/ropes or serving lines, cones",
  "safety": "Clear serving lanes — no one stands in front of or beside a server during practice",
  "games": [
   {
    "name": "Technique Target Serves",
    "desc": "From a stationary stance, students serve underarm at a large target (a taped zone on a wall, or over a low rope into a big grid), focusing purely on technique, not power.",
    "coach": "Ball held steady in front, step with the opposite foot, strike through the middle-back of the ball.",
    "easier": "Closer to the target/net.",
    "harder": "Further away.",
    "chaos": "Scoring streaks",
    "setup": "Students spread along a serving line, each with a ball, facing a large target — either a taped zone on a wall or a big grid marked on the other side of a low net/rope a few metres away.",
    "howTo": [
     "Demonstrate the underarm serve: ball held steady in front, step with the opposite foot, strike through the middle-back of the ball.",
     "Students take turns serving underarm from a stationary stance toward the large target, focusing purely on clean technique rather than power.",
     "After each serve, retrieve the ball and go again — there's no elimination, just repeated technique reps.",
     "Coach individual students between turns on any part of the technique that needs adjusting.",
     "Coach the key message throughout: 'ball held steady in front, step with the opposite foot, strike through the middle-back of the ball.'",
     "For 'easier', move the serving line closer to the target/net; for 'harder', move it further away."
    ]
   },
   {
    "name": "Serve & Track",
    "desc": "Students serve to a partner who calls out where it landed (short/long/left/right) to build the server's sense of their own tendencies.",
    "coach": "Consistent contact point every time.",
    "easier": "Partner stands closer, bigger target zone.",
    "harder": "Partner stands further, smaller zone.",
    "chaos": "Random constraint calls (varied target calls)",
    "setup": "Pairs spread out, one serving line and one receiving zone marked a suitable distance apart, one ball per pair.",
    "howTo": [
     "Demonstrate the roles: the server serves underarm, the partner calls out where it landed (short, long, left, or right).",
     "The server serves underarm toward their partner using consistent technique each time.",
     "The receiving partner calls out where the serve landed immediately after each attempt, helping the server notice their own tendencies.",
     "Continue for several serves, then swap roles so both partners get to serve and track.",
     "Coach the key message throughout: 'consistent contact point every time.'",
     "For 'easier', the partner stands closer with a bigger target zone; for 'harder', the partner stands further away with a smaller zone."
    ]
   },
   {
    "name": "Serve Streak Challenge",
    "desc": "In small groups, students take turns serving over a low net, tracking consecutive 'clean, legal technique' serves (judged on technique, not just success) as a group streak.",
    "coach": "Reset your technique each serve, don't chase power.",
    "easier": "Closer serving line, bigger net gap.",
    "harder": "Further serving line, add a target zone for bonus points.",
    "chaos": "Scoring streaks, bonus objectives",
    "setup": "Small groups of 3-4 take turns at a serving line, each group with one low net or rope and one ball.",
    "howTo": [
     "Demonstrate resetting technique fully before every serve rather than chasing extra power.",
     "Students take turns serving over the low net, with the group tracking a shared streak of 'clean, legal technique' serves — judged on technique, not just whether it lands in.",
     "The coach or a nominated student judges each serve on technique and confirms whether it counts toward the group streak.",
     "If a serve is judged as poor technique (regardless of whether it went over), the streak resets to zero and the group starts counting again from the next serve.",
     "Coach the key message throughout: 'reset your technique each serve, don't chase power.'",
     "For 'easier', use a closer serving line and a bigger net gap; for 'harder', use a further serving line and add a target zone for bonus points."
    ]
   }
  ],
  "big": {
   "name": "Serve & Rally Mini-Games",
   "desc": "Small-sided games begin every point with an underarm serve over a low net; coaching feedback emphasises clean serving technique first, with the rally as a bonus outcome — celebrate good technique attempts even if the serve is out.",
   "setup": "Small-sided games (2v2 or 3v3) across low nets, courts roughly 6m x 4m, one ball per game.",
   "howTo": [
    "Explain that every point begins with an underarm serve over the net, and coaching feedback will focus on serve technique first.",
    "The serving team's player steps up and serves underarm, using the technique practised earlier in the lesson.",
    "Play continues as a normal rally once the serve is legally returned, with points scored as usual.",
    "Even if a serve goes out, celebrate a clean technique attempt out loud before play restarts with a fresh serve from the same or next server.",
    "Rotate the serving role through the team so everyone gets serving turns across the games.",
    "Keep reinforcing that a well-struck serve — even an unsuccessful one — is more valuable right now than a lucky, messy one that happens to land in."
   ]
  },
  "discussion": [
   "What does 'good technique' feel like when you serve well?",
   "What part of your serving technique are you most proud of today?",
   "What will you keep practising?"
  ],
  "lookfors": [
   "Ball held steady before contact",
   "Steps forward with the opposite foot to the striking hand",
   "Strikes through the middle-back of the ball with a flat hand/heel of the palm"
  ],
  "inclusion": "Allow a shorter serving distance or a lighter ball for students building arm strength/confidence; success is measured by technique and legality, not distance/power.",
  "skillBreakdown": [
   {
    "step": "Hold the ball in front of you at waist height in your non-hitting hand.",
    "why": "A consistent set-up leads to a consistent serve."
   },
   {
    "step": "Strike the ball with a straight arm, stepping forward as you hit.",
    "why": "The step adds control and a bit of power to the serve."
   },
   {
    "step": "Follow through toward your target.",
    "why": "Keeps the serve accurate rather than sending it off-line."
   }
  ]
 },
 {
  "n": 8,
  "block": 2,
  "title": "Ace Zone",
  "focus": "Serving accuracy/placement",
  "walt": "We are learning to place a serve into a specific part of the court, not just get it over the net.",
  "wilf": [
   "I can choose a target zone before I serve",
   "I can place the ball into that zone more often than not"
  ],
  "nzc": "Strand B · Thinking",
  "value": "Pānga",
  "valueText": "Thinking ahead about where your serve will have the most impact (an open space on the court) rather than just serving anywhere.",
  "equipment": "Balls, low nets/ropes, cones/hoops marking target zones",
  "safety": "Clear serving lanes; make sure target zones don't overlap with another group's serving area",
  "games": [
   {
    "name": "Zone Serve Challenge",
    "desc": "The court is divided into marked zones (e.g. left, middle, right, deep, short); students call their target zone before serving and score points for hitting it.",
    "coach": "Aim your body and follow-through toward the chosen zone, not just 'at the net.'",
    "easier": "Fewer, bigger zones.",
    "harder": "More, smaller zones.",
    "chaos": "Bonus objectives",
    "setup": "Divide the receiving side of the court into marked zones (e.g. left, middle, right, deep, short) using cones or hoops, one server at a time per court, ball per student turn.",
    "howTo": [
     "Demonstrate aiming the body and follow-through toward a chosen zone, not just generally 'at the net.'",
     "Before each serve, the student calls out which zone they're aiming for.",
     "They then serve underarm, trying to land the ball inside that called zone.",
     "A point is scored for hitting the called zone; whether or not it scores, retrieve the ball and go again with a new zone call.",
     "Coach the key message throughout: 'aim your body and follow-through toward the chosen zone, not just \"at the net.\"'",
     "For 'easier', use fewer, bigger zones; for 'harder', use more, smaller zones."
    ]
   },
   {
    "name": "Called Target Serves",
    "desc": "A partner or the coach calls a target zone just before each serve, forcing a quick decision and adjustment.",
    "coach": "Pick your aim point in the split second before you toss/strike.",
    "easier": "Call the zone earlier, with more time to prepare.",
    "harder": "Call the zone right before the serve.",
    "chaos": "Random constraint calls",
    "setup": "Pairs or small groups with one server at a time, court zones already marked from the previous game, one ball per server.",
    "howTo": [
     "Demonstrate picking the aim point in the split second before tossing and striking, once a zone is called.",
     "A partner or the coach calls out a target zone just before each serve, giving the server little time to adjust their plan.",
     "The server reacts to the call and serves underarm, aiming for that zone.",
     "Continue serving with a new called zone each time, retrieving the ball between attempts.",
     "Coach the key message throughout: 'pick your aim point in the split second before you toss/strike.'",
     "For 'easier', call the zone earlier with more time to prepare; for 'harder', call the zone right before the serve."
    ]
   },
   {
    "name": "Serve Ladder",
    "desc": "Serving pairs/small groups move 'up' a ladder of increasingly small target zones as they succeed, and step back down after a miss, tracking how high they can climb.",
    "coach": "Stay relaxed — rushing to climb faster often reduces accuracy.",
    "easier": "Bigger zone steps between ladder levels.",
    "harder": "Smaller zone steps.",
    "chaos": "Scoring streaks",
    "setup": "Small groups or pairs at a serving line, with a series of increasingly small target zones marked in a line or ladder pattern using cones.",
    "howTo": [
     "Demonstrate staying relaxed rather than rushing, since rushing to climb the ladder faster often reduces accuracy.",
     "Students start serving at the first, easiest (biggest) zone on the ladder.",
     "A successful serve into the current zone moves them up to the next, smaller zone; a miss moves them back down one level.",
     "Students track how high up the ladder they can climb over their turns, trying to beat their own previous best.",
     "Coach the key message throughout: 'stay relaxed — rushing to climb faster often reduces accuracy.'",
     "For 'easier', use bigger zone steps between ladder levels; for 'harder', use smaller zone steps."
    ]
   }
  ],
  "big": {
   "name": "Zone Ace Mini-Games",
   "desc": "Small-sided games where a serve landing inside a marked 'ace zone' (away from the receiver) scores a bonus point immediately, on top of normal rally scoring. Thinking ahead about placement — not just getting it over — is what earns the bonus.",
   "setup": "Small-sided games (2v2 or 3v3) across low nets, with one marked 'ace zone' (away from the receiver's usual position) on each side of the court.",
   "howTo": [
    "Explain the bonus rule: a serve landing inside the marked ace zone earns an immediate bonus point, on top of normal rally scoring.",
    "The serving player looks at where the receiving team is standing and aims their serve toward the ace zone if the opportunity is there.",
    "Play continues as a normal rally after the serve is returned, with usual points scored for winning the point.",
    "The bonus point is awarded the instant a serve lands in the ace zone, regardless of how the rally that follows turns out.",
    "Rotate the serving role through each team so everyone gets chances to look for the bonus.",
    "Coach students to notice that thinking ahead about placement — not just serving it over — is what earns the bonus today."
   ]
  },
  "discussion": [
   "What helped you choose and hit your target zone today?",
   "How did placing your serve well change what happened next in the rally?",
   "What's one zone you want to get more accurate at next time?"
  ],
  "lookfors": [
   "Chooses a target before serving (not just swinging and hoping)",
   "Body/follow-through points toward the chosen zone",
   "Adjusts technique calmly after a miss rather than rushing the next serve"
  ],
  "inclusion": "Use bigger zones and shorter serving distances for students still building consistency; the ladder game scales naturally by adjusting zone sizes per group.",
  "skillBreakdown": [
   {
    "step": "Pick a specific target zone in the opponent's court before serving.",
    "why": "Aiming generally is far less accurate than committing to a spot."
   },
   {
    "step": "Keep your toss or ball position consistent every serve.",
    "why": "An inconsistent set-up leads to inconsistent serves."
   },
   {
    "step": "Use the same, repeatable technique regardless of the target.",
    "why": "Changing technique to 'aim' often causes more errors than trusting your normal serve."
   }
  ]
 },
 {
  "n": 9,
  "block": 2,
  "title": "First Contact",
  "focus": "Receiving a serve",
  "walt": "We are learning to receive an incoming serve cleanly using a bump, so it's ready for a teammate's next touch.",
  "wilf": [
   "I can move into position early to receive an incoming serve",
   "I can bump the serve under control toward a target area, not just anywhere"
  ],
  "nzc": "Strand B · Managing self, Relating to others",
  "value": "Aroha",
  "valueText": "Staying calm and patient with yourself when a serve is tricky to receive — everyone misses some early on.",
  "equipment": "Balls, low nets/ropes, cones marking a target 'receive zone'",
  "safety": "Watch for players backing into each other while tracking an incoming serve — call 'mine!' early",
  "games": [
   {
    "name": "Serve & Receive Pairs",
    "desc": "One partner serves gently underarm, the other receives with a bump aimed at a target zone; swap roles regularly.",
    "coach": "Move your feet early to get square to the incoming ball, don't reach with just your arms.",
    "easier": "Slower, closer serves.",
    "harder": "Serves with more pace/variety.",
    "chaos": "Random constraint calls (varied serve speed/placement)",
    "setup": "Pairs spread out, a marked target zone set up on the receiving side, one ball per pair.",
    "howTo": [
     "Demonstrate the roles: one partner serves gently underarm, the other receives with a bump aimed at the target zone.",
     "The server serves underarm toward their partner using a controlled, predictable technique.",
     "The receiver moves their feet early to get square to the incoming ball, then bumps it toward the marked target zone.",
     "Swap roles regularly so both partners get equal serving and receiving practice.",
     "Coach the key message throughout: 'move your feet early to get square to the incoming ball, don't reach with just your arms.'",
     "For 'easier', use slower, closer serves; for 'harder', use serves with more pace and variety."
    ]
   },
   {
    "name": "Receive & Track",
    "desc": "As above, but the receiver's bump is scored on both control and accuracy toward the target zone, tracked as a running tally.",
    "coach": "Platform angled toward the target, not just up.",
    "easier": "Bigger target zone.",
    "harder": "Smaller target zone.",
    "chaos": "Scoring streaks",
    "setup": "Same pairs setup as Serve & Receive Pairs, with a marked target zone, one ball per pair.",
    "howTo": [
     "Demonstrate angling the platform toward the target, not just up, so the bump has direction as well as control.",
     "The server serves underarm toward their partner as before.",
     "The receiver bumps the serve, and the pair tracks two things together: whether the bump was controlled, and whether it landed in the target zone.",
     "Keep a running tally of successful controlled-and-accurate bumps across several serves, then swap roles.",
     "Coach the key message throughout: 'platform angled toward the target, not just up.'",
     "For 'easier', use a bigger target zone; for 'harder', use a smaller target zone."
    ]
   },
   {
    "name": "Group Serve-Receive Rotation",
    "desc": "Small groups rotate through server and receiver roles, with receivers calling 'mine!' before contact to build the habit of early communication.",
    "coach": "Call early and clearly, then move.",
    "easier": "Fewer receivers, more space each.",
    "harder": "Two receivers close together must decide who calls it.",
    "chaos": "Role rotation",
    "setup": "Small groups of 3-4, one server and one or two receivers per rotation, one ball per group, with clear space between groups.",
    "howTo": [
     "Demonstrate calling 'mine!' clearly and early, before moving to the ball, so teammates know who's taking the serve.",
     "The server serves underarm toward the group of receivers.",
     "Whichever receiver is taking the ball calls 'mine!' immediately and clearly before contact, then bumps it under control.",
     "Rotate server and receiver roles regularly so everyone in the group gets a turn at each role.",
     "Coach the key message throughout: 'call early and clearly, then move.'",
     "For 'easier', use fewer receivers with more space each; for 'harder', place two receivers close together who must decide who calls it."
    ]
   }
  ],
  "big": {
   "name": "Serve-Receive Mini-Games",
   "desc": "Small-sided games where every point starts with a serve; the receiving team scores a bonus point if their first touch is a controlled bump that lands in a marked target zone for their teammate. Clean receiving is what sets up everything that follows.",
   "setup": "Small-sided games (2v2 or 3v3) across low nets, with a marked target zone on the receiving side of each court.",
   "howTo": [
    "Explain the bonus rule: every point starts with a serve, and the receiving team scores a bonus point if their first touch is a controlled bump landing in the marked target zone for a teammate.",
    "The serving player serves underarm to begin the point.",
    "The receiving team's first touch must be a bump — if it's controlled and lands in the target zone for a teammate, the bonus point is awarded immediately.",
    "Play continues as a normal rally regardless, with the usual point scored for winning the rally.",
    "Rotate the serving role and receiving order through each team across the games.",
    "Coach students to notice that a clean, well-placed first touch is what sets up everything the team does for the rest of the rally."
   ]
  },
  "discussion": [
   "What helped you get in position early to receive today?",
   "Why does a good first touch on a serve matter for the rest of the rally?",
   "What will you focus on next time a serve comes to you?"
  ],
  "lookfors": [
   "Moves into position early rather than reaching at the last second",
   "Calls 'mine!' before contact in group settings",
   "Bump is aimed at a target, not just returned anywhere"
  ],
  "inclusion": "Slow serves right down and reduce the target distance for students building confidence; allow a catch-and-bump hybrid for receiving until the clean bump is consistent.",
  "skillBreakdown": [
   {
    "step": "Get into a ready position early, platform prepared.",
    "why": "Reacting late to a serve leads to rushed, poor technique."
   },
   {
    "step": "Move your feet to get in line with the serve's path.",
    "why": "Reaching sideways with the arms alone is less reliable."
   },
   {
    "step": "Angle the platform toward your target, usually the setter.",
    "why": "A good first touch sets up the whole rally, not just returns the serve."
   }
  ]
 },
 {
  "n": 10,
  "block": 2,
  "title": "Two-Touch Tango",
  "focus": "Rally building — 2-touch games",
  "walt": "We are learning to build a short rally using exactly two touches per side, combining our skills so far.",
  "wilf": [
   "I can use a bump and a set together to send the ball over in two touches",
   "I can communicate with a partner about who takes which touch"
  ],
  "nzc": "Strand B · Relating to others",
  "value": "Mōhio",
  "valueText": "Understanding how your skills fit together with a partner's — knowing your role in a two-touch sequence.",
  "equipment": "Balls, low nets/ropes, cones",
  "safety": "Keep enough space between courts so rallies (and calls) don't interfere with neighbouring groups",
  "games": [
   {
    "name": "2-Touch Wall Rally",
    "desc": "Pairs rally against a wall (or with each other), using exactly two touches — a bump then a set, in either order — before the ball must go over/across.",
    "coach": "Decide early which touch you'll use based on how the ball arrives.",
    "easier": "Allow extra touches if needed while learning.",
    "harder": "Strict two touches only, no more.",
    "chaos": "Scoring streaks",
    "setup": "Pairs at a wall (or facing each other if no wall is available), one ball per pair, roughly 3-4m back from the wall or from each other.",
    "howTo": [
     "Demonstrate deciding early which touch to use — bump or set — based on how the ball is arriving.",
     "One partner starts the rally by hitting the ball against the wall (or across to their partner).",
     "Each side gets exactly two touches — a bump then a set, or a set then a bump, in either order — before the ball must go back across or against the wall again.",
     "If the ball is dropped, mishandled, or more than two touches are used, the pair simply restarts with a fresh toss and keeps rallying.",
     "Coach the key message throughout: 'decide early which touch you'll use based on how the ball arrives.'",
     "For 'easier', allow extra touches if needed while learning; for 'harder', enforce strict two touches only."
    ]
   },
   {
    "name": "Call Your Touch",
    "desc": "As above, but each player must call out ('bump!' or 'set!') which touch they're about to use before contact, building awareness of the choice being made.",
    "coach": "Call early and confidently — hesitation causes mistakes.",
    "easier": "Coach suggests which touch to call.",
    "harder": "Players choose freely and must justify their choice afterward.",
    "chaos": "Random constraint calls",
    "setup": "Same pairs setup as 2-Touch Wall Rally, one ball per pair.",
    "howTo": [
     "Demonstrate calling out 'bump!' or 'set!' clearly before each contact, building awareness of the choice being made.",
     "Play the same two-touch rally as before, but each player must call out which touch they're about to use before contact.",
     "Continue the rally as long as possible, with both touches called out loud every time.",
     "If the ball drops, restart with a fresh toss and keep calling touches throughout.",
     "Coach the key message throughout: 'call early and confidently — hesitation causes mistakes.'",
     "For 'easier', the coach suggests which touch to call; for 'harder', players choose freely and must justify their choice afterward."
    ]
   },
   {
    "name": "2-Touch Grid Battle",
    "desc": "Small teams face off across a low net in a marked grid, playing short rallies using a strict 2-touch rule, scoring a point when the other side fails to return it legally.",
    "coach": "Communicate loudly about who's taking which touch.",
    "easier": "Bigger grid, more time between serves.",
    "harder": "Smaller grid, quicker restarts.",
    "chaos": "Head-to-head mirror",
    "setup": "Small teams (2-3 per side) face off across a low net in a marked grid roughly 4m x 4m per side, one ball per game.",
    "howTo": [
     "Demonstrate communicating loudly about who's taking which touch before the ball arrives.",
     "One side starts the rally with a toss over the net.",
     "Both sides must use the strict 2-touch rule (bump then set, or set then bump) before sending the ball back over.",
     "A point is scored when the other side fails to return it legally within the two touches, and play restarts quickly with a toss from whoever conceded.",
     "Coach the key message throughout: 'communicate loudly about who's taking which touch.'",
     "For 'easier', use a bigger grid with more time between serves; for 'harder', use a smaller grid with quicker restarts."
    ]
   }
  ],
  "big": {
   "name": "2-Touch Rally Tournament",
   "desc": "Small-sided games (2v2/3v3) across low nets, strictly 2 touches per side, with simple rally scoring. Combining skills cleanly under the two-touch limit is what keeps a team's rallies alive.",
   "setup": "Small-sided games (2v2 or 3v3) across low nets, courts roughly 6m x 4m, one ball per game.",
   "howTo": [
    "Explain the format: strictly 2 touches per side, simple rally scoring, playing several short matches against rotating opponents.",
    "One side starts each point with a toss or serve over the net.",
    "Both sides must combine exactly two touches (bump then set, or set then bump) before returning the ball, calling out their touches as needed.",
    "A point is scored when the other side fails to legally return within the two-touch limit or the ball lands out; play restarts quickly.",
    "Rotate opponents every few minutes so students play several different pairs or trios across the session.",
    "Coach students that combining skills cleanly under the two-touch limit — not rushing either contact — is what keeps a team's rallies alive."
   ]
  },
  "discussion": [
   "What helped your team keep a two-touch rally going today?",
   "How did calling your touch out loud help (or not help) your team?",
   "What's one thing your team will try to improve next time?"
  ],
  "lookfors": [
   "Decides and calls the touch early",
   "Touches are clean and controlled (not rushed)",
   "Communicates with teammates about roles/coverage"
  ],
  "inclusion": "Relax the strict two-touch rule for teams still building consistency, allowing a bonus catch-and-restart when needed, tightening the rule as the block progresses.",
  "skillBreakdown": [
   {
    "step": "Call which touch you're taking.",
    "why": "Prevents confusion and collisions between teammates."
   },
   {
    "step": "Aim your first touch to set up a teammate's second touch.",
    "why": "Each touch should have a clear purpose within the short rally."
   },
   {
    "step": "Stay ready and moving between touches, not static.",
    "why": "Volleyball rallies move fast — staying ready keeps you involved."
   }
  ]
 },
 {
  "n": 11,
  "block": 3,
  "title": "Bump-Set-Return",
  "focus": "Rally building — 3-touch games (bump-set-return)",
  "walt": "We are learning to build a rally using the full three touches — bump, set, and a return touch — like a real team sequence.",
  "wilf": [
   "I can use up to three touches to control, set up, and return the ball",
   "I can move to cover a teammate's touch"
  ],
  "nzc": "Strand B · Managing self, Relating to others",
  "value": "Manaaki",
  "valueText": "Using your skills faithfully to serve your team's rally — taking your touch fully, not leaving it for someone else.",
  "equipment": "Balls, low nets/ropes, cones",
  "safety": "Keep clear space behind each player for the third touch/return so no one backs into another player",
  "games": [
   {
    "name": "Trio 3-Touch Circuit",
    "desc": "Trios pass in a fixed sequence — bump, set, return (a light tap or hit) — trying to complete the full sequence cleanly as many times as possible.",
    "coach": "The first touch should make the second touch easy, and so on — think one step ahead.",
    "easier": "Allow a catch between touches.",
    "harder": "No catching, continuous sequence.",
    "chaos": "Scoring streaks",
    "setup": "Groups of three spread out roughly 2-3m apart, one ball per trio, with enough room between trios.",
    "howTo": [
     "Demonstrate the fixed sequence: bump, set, return (a light tap or hit), passed in that order between the three players.",
     "One student starts the sequence with a bump to a teammate.",
     "That teammate sets it on to the third player, who completes the sequence with a light return touch.",
     "The trio tries to complete the full bump-set-return sequence cleanly as many times in a row as possible, restarting immediately with a fresh toss if the ball drops.",
     "Coach the key message throughout: 'the first touch should make the second touch easy, and so on — think one step ahead.'",
     "For 'easier', allow a catch between touches; for 'harder', remove catching for a continuous sequence."
    ]
   },
   {
    "name": "3-Touch Wall Rally",
    "desc": "Pairs/trios rally against a wall using all three touch types across three consecutive contacts before it must go over/across again.",
    "coach": "Communicate who's taking which touch before the ball arrives.",
    "easier": "Slow the pace, allow resets.",
    "harder": "Add a time limit or shrink the space.",
    "chaos": "Beat the clock",
    "setup": "Pairs or trios at a wall (or facing each other), one ball per group, roughly 3-4m back from the wall.",
    "howTo": [
     "Demonstrate communicating who's taking which touch before the ball arrives.",
     "One player starts the rally by hitting the ball against the wall or across to the group.",
     "The group uses up to three consecutive contacts — bump, set, and a return touch — before the ball must go over or against the wall again.",
     "If the ball drops or more than three touches are used, restart with a fresh toss and keep going.",
     "Coach the key message throughout: 'communicate who's taking which touch before the ball arrives.'",
     "For 'easier', slow the pace and allow resets; for 'harder', add a time limit or shrink the space."
    ]
   },
   {
    "name": "3-Touch Grid Battle",
    "desc": "Small teams play short rallies across a low net using up to three touches per side, scoring when the other side fails to legally return it.",
    "coach": "First touch under control, second touch sets up a teammate, third touch sends it over.",
    "easier": "Bigger grid, slower restarts.",
    "harder": "Smaller grid, quicker restarts.",
    "chaos": "Head-to-head mirror",
    "setup": "Small teams (2-3 per side) play across a low net in a marked grid roughly 4m x 4m per side, one ball per game.",
    "howTo": [
     "Demonstrate the sequence idea: first touch under control, second touch sets up a teammate, third touch sends it over.",
     "One side starts the rally with a toss over the net.",
     "Each side can use up to three touches before returning the ball, aiming for a clean bump-set-return pattern where possible.",
     "A point is scored when the other side fails to legally return the ball within three touches, and play restarts quickly.",
     "Coach the key message throughout: 'first touch under control, second touch sets up a teammate, third touch sends it over.'",
     "For 'easier', use a bigger grid with slower restarts; for 'harder', use a smaller grid with quicker restarts."
    ]
   }
  ],
  "big": {
   "name": "Full Rally Round-Robin",
   "desc": "Small-sided games (2v2/3v3) across low nets, up to three touches per side, simple rally scoring, rotating opponents every few minutes. Building a clean bump-set-return sequence is what keeps a team's rallies going the longest.",
   "setup": "Small-sided games (2v2 or 3v3) across low nets, courts roughly 6m x 4m, one ball per game, rotating opponents every few minutes.",
   "howTo": [
    "Explain the format: up to three touches per side, simple rally scoring, playing several short round-robin games against different opponents.",
    "One side starts each point with a toss or serve over the net.",
    "Both sides aim to build a clean bump-set-return sequence within their three allowed touches, communicating who's taking each touch.",
    "A point is scored when the other side fails to legally return the ball, and play restarts quickly with a fresh toss.",
    "Rotate opponents every few minutes so students play several different teams across the round-robin.",
    "Coach students that building a clean bump-set-return sequence — not just surviving the rally — is what keeps their team's rallies going the longest."
   ]
  },
  "discussion": [
   "What helped your team build a full three-touch rally today?",
   "How did your first touch set up the rest of the sequence?",
   "What's one thing your team wants to improve about working together across three touches?"
  ],
  "lookfors": [
   "First touch is controlled and sets up the next player",
   "Communicates about who's taking which touch",
   "Moves to cover space after their own touch, rather than standing still"
  ],
  "inclusion": "Allow teams to use a catch-and-restart on any touch that breaks down, tightening this as confidence with the full sequence grows.",
  "skillBreakdown": [
   {
    "step": "Use the right touch — bump, set, or hit — for each situation.",
    "why": "Each touch type suits a different moment in the rally."
   },
   {
    "step": "Communicate clearly between all three touches.",
    "why": "Three players need to coordinate smoothly for the sequence to work."
   },
   {
    "step": "Keep each touch controlled and purposeful.",
    "why": "A rushed or careless touch early in the sequence makes the later touches much harder."
   }
  ]
 },
 {
  "n": 12,
  "block": 3,
  "title": "Quick Feet",
  "focus": "Moving to the ball (footwork)",
  "walt": "We are learning to move our feet quickly and get into position under the ball before it arrives.",
  "wilf": [
   "I can shuffle sideways/forwards/backwards to get square to an incoming ball",
   "I can be in position and ready before the ball reaches me, not reaching at the last second"
  ],
  "nzc": "Strand B · Managing self",
  "value": "Pānga",
  "valueText": "Thinking ahead about where the ball is going and getting there early, so your whole team benefits from your positioning.",
  "equipment": "Balls, cones marking movement patterns",
  "safety": "Watch for collisions during fast footwork drills — keep enough space between pairs/groups",
  "games": [
   {
    "name": "Shuffle & Freeze",
    "desc": "Students shuffle in ready position (low, on the balls of the feet) in response to called directions ('left! right! back! forward!'), freezing in a balanced, ready stance on each call.",
    "coach": "Stay low, small quick steps rather than crossing feet.",
    "easier": "Slower calls, bigger pauses.",
    "harder": "Faster, mixed calls.",
    "chaos": "Random constraint calls",
    "setup": "Students spread out across an open space, roughly 20m x 20m for the class, with enough room between students to shuffle without colliding.",
    "howTo": [
     "Demonstrate the ready position: low stance, on the balls of the feet, ready to move quickly in any direction.",
     "Students start in the ready position, waiting for a direction call.",
     "On each call ('left! right! back! forward!'), students shuffle a few steps in that direction using small quick steps, not crossing their feet.",
     "On the freeze call, they stop and hold a balanced, ready stance until the next direction is called.",
     "Coach the key message throughout: 'stay low, small quick steps rather than crossing feet.'",
     "For 'easier', use slower calls with bigger pauses; for 'harder', use faster, mixed-up calls."
    ]
   },
   {
    "name": "Move & Bump",
    "desc": "A partner tosses the ball to different spots around the receiver (not straight at them), forcing footwork before each bump.",
    "coach": "Move first, then set the platform — don't reach while still moving.",
    "easier": "Tosses closer together, more predictable.",
    "harder": "Tosses further apart, less predictable.",
    "chaos": "Random constraint calls",
    "setup": "Pairs spread out, one ball per pair, with enough room for a tosser to send the ball to different spots around the receiver.",
    "howTo": [
     "Demonstrate moving first, then setting the platform, rather than reaching for the ball while still moving.",
     "The tosser gently tosses the ball to different spots around the receiver, rather than straight at them.",
     "The receiver reacts by moving their feet to get in position before setting their platform to bump.",
     "Continue for several tosses, then swap roles so both partners get practice moving to the ball.",
     "Coach the key message throughout: 'move first, then set the platform — don't reach while still moving.'",
     "For 'easier', tosses land closer together and more predictably; for 'harder', tosses land further apart and less predictably."
    ]
   },
   {
    "name": "Footwork Relay Ladder",
    "desc": "Small groups race through a footwork pattern (shuffle-shuffle-sprint-recover) marked by cones before receiving a tossed ball at the end and bumping it to a target.",
    "coach": "Arrive under control, not off-balance, so the bump stays clean.",
    "easier": "Simpler pattern, more time.",
    "harder": "More complex pattern, timed.",
    "chaos": "Beat the clock, head-to-head mirror",
    "setup": "Small groups of 3-4 at a footwork course marked with cones (shuffle-shuffle-sprint-recover pattern), one ball and one target zone at the end of each course.",
    "howTo": [
     "Demonstrate the footwork pattern first — shuffle, shuffle, sprint, recover — moving through the cones under control.",
     "One student at a time races through the footwork pattern marked by cones.",
     "At the end of the pattern, a tosser sends them a ball which they must bump toward a target while arriving under control, not off-balance.",
     "The rest of the group waits their turn, cheering the racer through; rotate through the whole group.",
     "Coach the key message throughout: 'arrive under control, not off-balance, so the bump stays clean.'",
     "For 'easier', use a simpler pattern with more time; for 'harder', use a more complex, timed pattern."
    ]
   }
  ],
  "big": {
   "name": "Move-to-Score Mini-Games",
   "desc": "Small-sided rally games across low nets where good footwork (arriving early, balanced, and square to the ball) is highlighted by the coach as the difference between a clean return and a scramble. Quick feet directly support every other skill in the game.",
   "setup": "Small-sided games (2v2 or 3v3) across low nets, courts roughly 6m x 4m, one ball per game.",
   "howTo": [
    "Explain the coaching focus: good footwork — arriving early, balanced, and square to the ball — will be highlighted throughout as the difference between a clean return and a scramble.",
    "One side starts each point with a toss or serve over the net.",
    "Play a normal rally, with players trying to move their feet early to get set up for each touch rather than reaching at the last moment.",
    "A point is scored as usual when the other side fails to legally return the ball.",
    "Rotate opponents every few minutes, and specifically call out moments of good footwork as they happen.",
    "Coach students that quick feet directly support every other skill in the game — a good platform starts with good positioning."
   ]
  },
  "discussion": [
   "What helped you get into position early today, instead of reaching at the last second?",
   "How did good footwork make your bump or set easier?",
   "What will you focus on with your feet next time?"
  ],
  "lookfors": [
   "Stays low and ready between touches",
   "Uses small shuffle steps rather than crossing feet or lunging",
   "Arrives balanced under the ball before contact"
  ],
  "inclusion": "Slow all footwork patterns down and reduce distances for students building coordination/confidence; celebrate early movement even if the resulting touch isn't perfect yet.",
  "skillBreakdown": [
   {
    "step": "Take small, quick adjusting steps rather than one big lunge.",
    "why": "Small steps keep you balanced and ready to change direction."
   },
   {
    "step": "Get your body in line with the ball before you make contact.",
    "why": "Positioning first means your technique doesn't have to compensate for being out of position."
   },
   {
    "step": "Stay on the balls of your feet, ready to move any direction.",
    "why": "A flat-footed stance is slow to react."
   }
  ]
 },
 {
  "n": 13,
  "block": 3,
  "title": "Mine!",
  "focus": "Communication — calling the ball",
  "walt": "We are learning to communicate clearly and early about who is taking the ball.",
  "wilf": [
   "I can call \"mine!\" loudly and early when I'm taking the ball",
   "I can listen for a teammate's call and move out of their way"
  ],
  "nzc": "Strand B · Relating to others",
  "value": "Aroha",
  "valueText": "Speaking up clearly and kindly so teammates aren't confused, and trusting a teammate's call instead of competing for the same ball.",
  "equipment": "Balls, cones",
  "safety": "Watch for two players going for the same ball without calling — this is exactly the collision risk this lesson addresses",
  "games": [
   {
    "name": "Call & Catch",
    "desc": "In small groups, a ball is tossed into a shared space; whoever calls 'mine!' first and loudest gets to take it, while others step back.",
    "coach": "Call the instant you decide, don't wait to see if someone else calls first.",
    "easier": "Clear pauses between tosses.",
    "harder": "Tosses closer together/faster, more overlap.",
    "chaos": "Random constraint calls",
    "setup": "Small groups of 4-5 stand spread out in a shared space roughly 4m x 4m, one ball per group.",
    "howTo": [
     "Demonstrate calling 'mine!' the instant you decide to go for the ball, rather than waiting to see if someone else calls first.",
     "The coach or a nominated student tosses the ball up into the shared space.",
     "Whoever calls 'mine!' first and loudest gets to take the ball, while everyone else steps back to give them room.",
     "The catcher then tosses it back into the space for the next toss, and the group repeats.",
     "Coach the key message throughout: 'call the instant you decide, don't wait to see if someone else calls first.'",
     "For 'easier', use clear pauses between tosses; for 'harder', use tosses closer together and faster, with more overlap."
    ]
   },
   {
    "name": "Silent Freeze, Loud Call",
    "desc": "Pairs/trios stand still (no ball) until a toss arrives; the moment someone calls it, everyone else must freeze so the caller has clear space.",
    "coach": "Trust your teammate's call — don't chase a ball someone else has claimed.",
    "easier": "Fewer players sharing the space.",
    "harder": "More players, more overlap zones.",
    "chaos": "Role rotation",
    "setup": "Pairs or trios stand still spread out, roughly 3m apart, no ball needed until the toss.",
    "howTo": [
     "Demonstrate the rule: everyone stands still until a toss arrives, and the moment someone calls it, everyone else freezes so the caller has clear space.",
     "The coach tosses a ball toward one of the small groups.",
     "The player who wants it calls it clearly and immediately; everyone else in that group freezes in place.",
     "The caller moves to take the ball, then it's tossed back for the next round with a different group.",
     "Coach the key message throughout: 'trust your teammate's call — don't chase a ball someone else has claimed.'",
     "For 'easier', use fewer players sharing the space; for 'harder', use more players with more overlap zones."
    ]
   },
   {
    "name": "2-on-Ball Rally",
    "desc": "Pairs receive tosses/serves aimed into the space between them, practising calling early and clearly across a full rally sequence (bump, set, return).",
    "coach": "Call before you move, not while you're already moving toward the ball.",
    "easier": "Clearly divide the space in half to start.",
    "harder": "Remove the dividing line, full shared space.",
    "chaos": "Random constraint calls",
    "setup": "Pairs spread out with a marked space between them, roughly 4m x 4m, one ball per pair.",
    "howTo": [
     "Demonstrate calling before moving toward the ball, not while already moving toward it.",
     "A toss or serve is aimed into the space between the two partners.",
     "Whoever is taking the ball calls it early and clearly, then moves to bump, set, or return it as part of a full rally sequence.",
     "Continue the rally sequence (bump, set, return) as long as possible, calling every ball clearly throughout.",
     "Coach the key message throughout: 'call before you move, not while you're already moving toward the ball.'",
     "For 'easier', clearly divide the space in half to start; for 'harder', remove the dividing line for a full shared space."
    ]
   }
  ],
  "big": {
   "name": "Communication Cup Mini-Games",
   "desc": "Small-sided games across low nets where the coach specifically praises clear, early calling ('mine!') as part of the scoring feedback — teams are encouraged to call constantly, not just when there's doubt. Clear communication is what prevents collisions and dropped balls.",
   "setup": "Small-sided games (2v2 or 3v3) across low nets, courts roughly 6m x 4m, one ball per game.",
   "howTo": [
    "Explain the coaching focus: clear, early calling of 'mine!' will be specifically praised as part of the feedback, and teams should call constantly, not just when there's doubt.",
    "One side starts each point with a toss or serve over the net.",
    "Play a normal rally, with players calling the ball loudly and early every time they go to make contact.",
    "A point is scored as usual when the other side fails to legally return the ball.",
    "Rotate opponents every few minutes, calling out great examples of clear, early communication as they happen.",
    "Coach students that clear communication is what prevents collisions and dropped balls — it's a skill just like any touch."
   ]
  },
  "discussion": [
   "What made calling 'mine!' easier or harder today?",
   "How did it feel to trust a teammate's call and step back?",
   "What will your team focus on communicating next time?"
  ],
  "lookfors": [
   "Calls early and loudly, before reaching the ball",
   "Steps back/out of the way when a teammate calls",
   "Doesn't compete for a ball once someone else has claimed it"
  ],
  "inclusion": "For quieter/less confident students, practise the call in low-pressure pairs first before adding it into busier group games; celebrate any clear call, even a quiet one, as a good start.",
  "skillBreakdown": [
   {
    "step": "Call 'mine!' clearly and early when you're taking the ball.",
    "why": "Early, clear calls prevent collisions and confusion."
   },
   {
    "step": "Listen for teammates' calls and move out of the way if it's not yours.",
    "why": "Communication only works if everyone actually responds to it."
   },
   {
    "step": "Keep calling throughout fast exchanges, not just once.",
    "why": "Fast rallies need constant communication, not a single call at the start."
   }
  ]
 },
 {
  "n": 14,
  "block": 3,
  "title": "Cover the Court",
  "focus": "Positioning — covering space as a team",
  "walt": "We are learning to spread out and cover space as a team so the court doesn't have obvious gaps.",
  "wilf": [
   "I can find and stand in space rather than crowding a teammate",
   "I can shift my position as the ball moves around the court"
  ],
  "nzc": "Strand B · Thinking",
  "value": "Mōhio",
  "valueText": "Understanding your role and position within the team's shape — knowing where you fit so the whole team is covered.",
  "equipment": "Balls, cones marking court zones, bibs (useful for identifying zones/positions)",
  "safety": "Standard court spacing — ensure zones don't overlap with neighbouring games",
  "games": [
   {
    "name": "Fill the Gap",
    "desc": "Small teams stand on a marked court with obvious 'gap' zones; on a call, they must reposition so every zone has someone in it, as quickly as possible.",
    "coach": "Scan the whole court, not just the ball.",
    "easier": "Fewer zones, more time.",
    "harder": "More zones, timed.",
    "chaos": "Beat the clock",
    "setup": "Small teams (4-5 students) stand on a marked court with obvious zones drawn using cones, leaving visible 'gap' zones unfilled at the start.",
    "howTo": [
     "Demonstrate scanning the whole court for empty zones, not just watching the ball.",
     "On a call, the team must quickly reposition so that every marked zone has at least one player standing in it.",
     "The coach checks (or calls out) whether every zone is covered, then calls again to reset with a new random gap pattern.",
     "Repeat several times, encouraging students to move quickly but under control each time.",
     "Coach the key message throughout: 'scan the whole court, not just the ball.'",
     "For 'easier', use fewer zones with more time; for 'harder', use more zones under a time limit."
    ]
   },
   {
    "name": "Shadow the Ball",
    "desc": "As a tosser moves the ball around the court (without hitting it into play), teammates shift their position to stay balanced and covered as a group, without being told individually where to stand.",
    "coach": "If a teammate moves toward the ball, someone should shift to cover the space they left.",
    "easier": "Slower ball movement.",
    "harder": "Faster, less predictable movement.",
    "chaos": "Random constraint calls",
    "setup": "Small teams positioned on a marked court, one tosser (coach or student) who moves the ball around without hitting it into play.",
    "howTo": [
     "Demonstrate the idea: as the ball moves, teammates shift their position as a group to stay balanced and covered, without being individually told where to stand.",
     "The tosser walks or jogs around the court edge, carrying the ball to different spots without putting it into play.",
     "The team on court shifts their positioning together to stay balanced, with whoever is nearest the ball's current position adjusting first and others covering the space they leave.",
     "Continue for several minutes, with the tosser moving unpredictably to test the team's shifting.",
     "Coach the key message throughout: 'if a teammate moves toward the ball, someone should shift to cover the space they left.'",
     "For 'easier', move the ball more slowly; for 'harder', move it faster and less predictably."
    ]
   },
   {
    "name": "3v3 Space-Finding Rally",
    "desc": "Small teams rally across a low net, with bonus points awarded any time good spacing (no obvious gaps, no two players standing together) is noticed during a point.",
    "coach": "Check your position between every touch, not just when the ball comes to you.",
    "easier": "Larger court/fewer players.",
    "harder": "Smaller court/more players.",
    "chaos": "Bonus objectives",
    "setup": "Small teams of three play across a low net on a court roughly 6m x 4m per side, one ball per game.",
    "howTo": [
     "Demonstrate checking position between every touch, not just when the ball is coming to you.",
     "One side starts the rally with a toss or serve over the net.",
     "Play continues as a normal rally, with the coach watching for good spacing — no obvious gaps, no two players standing together.",
     "Bonus points are awarded any time the coach notices good spacing during a point, on top of normal rally scoring.",
     "Coach the key message throughout: 'check your position between every touch, not just when the ball comes to you.'",
     "For 'easier', use a larger court with fewer players; for 'harder', use a smaller court with more players."
    ]
   }
  ],
  "big": {
   "name": "Covered Court Mini-Games",
   "desc": "Small-sided games across low nets where team positioning/spacing is specifically coached and praised alongside the usual rally scoring — a team that stays well spread and covered will have far fewer gaps for the ball to drop into.",
   "setup": "Small-sided games (2v2 or 3v3) across low nets, courts roughly 6m x 4m, one ball per game.",
   "howTo": [
    "Explain the coaching focus: team positioning and spacing will be specifically coached and praised alongside the usual rally scoring.",
    "One side starts each point with a toss or serve over the net.",
    "Play a normal rally, with players actively working to stay spread out and cover the court as a team, not just as individuals.",
    "A point is scored as usual when the other side fails to legally return the ball; the coach calls out well-covered court shape as it happens.",
    "Rotate opponents every few minutes so students practise spacing against a few different teams.",
    "Coach students that a team that stays well spread and covered will have far fewer gaps for the ball to drop into."
   ]
  },
  "discussion": [
   "What helped your team stay spread out and cover the space today?",
   "How did you decide where to move when the ball moved?",
   "What's one gap your team noticed and fixed today?"
  ],
  "lookfors": [
   "Scans the whole court, not just the ball",
   "Shifts to cover a space a teammate has just left",
   "Avoids standing directly next to another teammate"
  ],
  "inclusion": "Use fewer, bigger zones for teams still learning to read space collectively; simple visual markers (cones/bibs per zone) help less confident students know where 'their' space is at first.",
  "skillBreakdown": [
   {
    "step": "Know your area of responsibility on the court.",
    "why": "Understanding your zone reduces confusion about who covers what."
   },
   {
    "step": "Adjust your position based on where the ball and teammates are.",
    "why": "Positioning should respond to the game, not stay fixed."
   },
   {
    "step": "Communicate about gaps or overlaps with teammates.",
    "why": "A talking team closes court gaps faster than a silent one."
   }
  ]
 },
 {
  "n": 15,
  "block": 3,
  "title": "Directed Hit",
  "focus": "Attacking touch / directed hit",
  "walt": "We are learning to direct a stronger touch (a light attacking hit) toward open space on the other side.",
  "wilf": [
   "I can choose where the open space is before I hit",
   "I can direct my hit with more purpose than just sending it back anywhere"
  ],
  "nzc": "Strand B · Thinking",
  "value": "Manaaki",
  "valueText": "Using a stronger touch responsibly and fairly, with control, rather than just hitting as hard as possible.",
  "equipment": "Balls, low nets/ropes, cones marking target zones",
  "safety": "Attacking touches should stay controlled and at a safe height for this age group — no jumping/spiking with full force yet",
  "games": [
   {
    "name": "Open Space Tap",
    "desc": "From a gentle self/partner toss, students direct a controlled tap/hit toward whichever half of a marked grid is currently open (marked by a mobile cone).",
    "coach": "Look at the open space before you hit, not at the ball the whole time.",
    "easier": "Bigger open zone.",
    "harder": "Smaller/moving open zone.",
    "chaos": "Random constraint calls",
    "setup": "Students work in pairs or individually with a gentle self/partner toss, inside a marked grid roughly 5m x 5m split into two halves by a mobile cone.",
    "howTo": [
     "Demonstrate looking at the open space before hitting, not staring at the ball the whole time.",
     "A gentle self-toss or partner toss sets up the ball for a controlled tap or hit.",
     "The student looks toward whichever half of the grid is currently marked open (by the mobile cone) and directs their touch there.",
     "After each attempt, move the cone to change which half is open and repeat.",
     "Coach the key message throughout: 'look at the open space before you hit, not at the ball the whole time.'",
     "For 'easier', use a bigger open zone; for 'harder', use a smaller or moving open zone."
    ]
   },
   {
    "name": "Set-and-Direct",
    "desc": "In trios, one sets the ball up nicely for a partner, who directs a controlled attacking touch toward a called target zone.",
    "coach": "Approach at an angle that lets you direct the hit, not just swat straight down.",
    "easier": "Target called well in advance.",
    "harder": "Target called at the last moment.",
    "chaos": "Random constraint calls",
    "setup": "Groups of three, one ball per trio, with a marked target zone a few metres from the hitter.",
    "howTo": [
     "Demonstrate approaching the ball at an angle that lets you direct the hit, rather than swatting straight down.",
     "One student sets the ball up nicely for a partner, giving them an easy, controllable ball to hit.",
     "The hitting partner directs a controlled attacking touch toward a called target zone, using body angle to aim the shot.",
     "Rotate through all three roles (setter, hitter, target-caller) regularly so everyone practises each part.",
     "Coach the key message throughout: 'approach at an angle that lets you direct the hit, not just swat straight down.'",
     "For 'easier', call the target well in advance; for 'harder', call it at the last moment."
    ]
   },
   {
    "name": "Directed Hit Streak",
    "desc": "Small groups rotate through a set-and-hit station, tracking a team streak of 'controlled, well-directed' attacking touches (judged on control and direction, not power).",
    "coach": "Control first, direction second, power a distant third.",
    "easier": "Slower, easier sets to hit from.",
    "harder": "Varied sets requiring adjustment.",
    "chaos": "Scoring streaks, bonus objectives",
    "setup": "Small groups rotate through a set-and-hit station, one ball per group, with a marked target zone.",
    "howTo": [
     "Demonstrate the priority order: control first, direction second, power a distant third.",
     "A setter sets the ball up for the hitter, who attempts a controlled, well-directed attacking touch toward the target.",
     "The group tracks a running streak of touches judged as 'controlled and well-directed' — judged on control and direction, not power.",
     "If a touch is judged uncontrolled or poorly directed, the streak resets and the group keeps going, rotating roles regularly.",
     "Coach the key message throughout: 'control first, direction second, power a distant third.'",
     "For 'easier', use slower, easier sets to hit from; for 'harder', use varied sets that require adjustment."
    ]
   }
  ],
  "big": {
   "name": "Direct & Defend Mini-Games",
   "desc": "Small-sided games across low nets where a legal, controlled directed hit into open space scores a bonus point, encouraging players to look for space rather than just returning the ball anywhere. Reading the open space and directing the touch is today's decisive skill.",
   "setup": "Small-sided games (2v2 or 3v3) across low nets, courts roughly 6m x 4m, one ball per game.",
   "howTo": [
    "Explain the bonus rule: a legal, controlled directed hit into open space scores a bonus point, encouraging players to look for space rather than just returning the ball anywhere.",
    "One side starts each point with a toss or serve over the net.",
    "Play a normal rally, with attacking players looking for open space before directing their touch, at a controlled height and force for this age group.",
    "A point is scored as usual when the other side fails to legally return the ball; a bonus point is awarded immediately for a controlled, well-directed hit into open space.",
    "Rotate opponents every few minutes so students get to practise directing hits against different defensive setups.",
    "Coach students that reading the open space and directing the touch — done under control, not force — is today's decisive skill."
   ]
  },
  "discussion": [
   "What helped you spot open space before hitting today?",
   "How is directing a hit different from just returning the ball anywhere?",
   "What's one thing you'll try next time you get the chance to attack the ball?"
  ],
  "lookfors": [
   "Looks at the open space before contact",
   "Directs the hit with a clear intention, not just reacting",
   "Keeps control/technique even when trying to be more attacking"
  ],
  "inclusion": "Keep all attacking touches at chest height or below and emphasise placement over power for this age group; allow a firm-tap version instead of a full hit for students still building confidence/strength.",
  "skillBreakdown": [
   {
    "step": "Get into position early, side-on to your target.",
    "why": "Body position controls the direction of your hit."
   },
   {
    "step": "Contact the ball with a firm wrist, aiming rather than just swinging hard.",
    "why": "Control and direction matter more than pure power at this stage."
   },
   {
    "step": "Follow through toward your target area.",
    "why": "Stopping the arm early reduces accuracy."
   }
  ]
 },
 {
  "n": 16,
  "block": 4,
  "title": "Read & React",
  "focus": "Reading the opponent's return",
  "walt": "We are learning to read where an opponent's return is likely to go, and react early.",
  "wilf": [
   "I can watch an opponent's body/hand shape to predict where their return will go",
   "I can start moving toward the likely landing spot before the ball arrives"
  ],
  "nzc": "Strand B · Thinking",
  "value": "Pānga",
  "valueText": "Thinking ahead about the impact of reading the game well — reacting early helps the whole team, not just you.",
  "equipment": "Balls, low nets/ropes, cones",
  "safety": "Standard court spacing; encourage controlled reactions rather than diving/lunging",
  "games": [
   {
    "name": "Guess the Return",
    "desc": "A partner sets up to hit/direct a touch; before it happens, the other partner calls out a guess for where it will go, then reacts.",
    "coach": "Watch the shoulders and hand shape, not just the ball.",
    "easier": "Hitter exaggerates their aim/body shape as a visual clue.",
    "harder": "Hitter tries to disguise the direction.",
    "chaos": "Random constraint calls",
    "setup": "Pairs spread out, one ball per pair, with room for a hitter to set up and a defender to react.",
    "howTo": [
     "Demonstrate watching the shoulders and hand shape of a hitter, not just the ball, to predict where a touch is going.",
     "One partner sets up to hit or direct a touch toward the other.",
     "Before contact, the defending partner calls out a guess for where the ball will go, then reacts and tries to get there.",
     "Compare the guess to where the ball actually went, then swap roles and repeat.",
     "Coach the key message throughout: 'watch the shoulders and hand shape, not just the ball.'",
     "For 'easier', the hitter exaggerates their aim/body shape as a visual clue; for 'harder', the hitter tries to disguise the direction."
    ]
   },
   {
    "name": "Shadow Defender Rally",
    "desc": "In small rallies, a defending player tries to anticipate and move toward the likely return before it's hit, without a ball at first (shadowing), then with real returns.",
    "coach": "Small, ready movements — don't commit too early or you can't adjust.",
    "easier": "Slower, more obvious hits to read.",
    "harder": "Faster, more varied hits.",
    "chaos": "Added defender/pressure",
    "setup": "Small groups rally in a marked space roughly 5m x 5m, starting without a ball for the shadowing phase, then adding a ball.",
    "howTo": [
     "Demonstrate small, ready movements rather than committing too early, since over-committing means you can't adjust.",
     "Start without a ball: the defending player shadows the likely return by anticipating and moving toward where a hit is probably going, based on the hitter's body shape.",
     "Once the shadowing feels natural, add a real ball and small rallies, with the defender applying the same anticipation to real returns.",
     "Rotate the defending role regularly through the group.",
     "Coach the key message throughout: 'small, ready movements — don't commit too early or you can't adjust.'",
     "For 'easier', use slower, more obvious hits to read; for 'harder', use faster, more varied hits."
    ]
   },
   {
    "name": "Read & Dig Streak",
    "desc": "Small groups rally continuously, tracking a team streak of successful 'reads' — moments a defender got into position early because they anticipated the return correctly.",
    "coach": "Trust your first read and commit to moving, rather than freezing.",
    "easier": "Simpler, more predictable attacking patterns to read.",
    "harder": "Varied, disguised attacking patterns.",
    "chaos": "Scoring streaks",
    "setup": "Small groups rally continuously in a marked space, one ball per group.",
    "howTo": [
     "Demonstrate trusting the first read and committing to moving, rather than freezing on the spot.",
     "The group rallies continuously, with attacking touches directed by whoever has the ball.",
     "Every time a defender gets into position early because they correctly anticipated the return, the group counts that as a successful 'read' toward their team streak.",
     "Keep the rally and the streak count going as long as possible, restarting quickly if the ball drops.",
     "Coach the key message throughout: 'trust your first read and commit to moving, rather than freezing.'",
     "For 'easier', use simpler, more predictable attacking patterns to read; for 'harder', use varied, disguised attacking patterns."
    ]
   }
  ],
  "big": {
   "name": "Read the Game Mini-Tournament",
   "desc": "Small-sided games across low nets where good anticipation/early movement is specifically highlighted and praised as part of feedback, alongside normal rally scoring. Reading the opponent is what turns a scramble into a controlled return.",
   "setup": "Small-sided games (2v2 or 3v3) across low nets, courts roughly 6m x 4m, one ball per game.",
   "howTo": [
    "Explain the coaching focus: good anticipation and early movement will be specifically highlighted and praised as part of feedback, alongside normal rally scoring.",
    "One side starts each point with a toss or serve over the net.",
    "Play a normal rally, with defending players actively trying to read the hitter's body shape and move early rather than reacting late.",
    "A point is scored as usual when the other side fails to legally return the ball; the coach calls out good reads and early movement as they happen.",
    "Rotate opponents every few minutes so students practise reading different hitting styles.",
    "Coach students that reading the opponent is what turns a scramble into a controlled return."
   ]
  },
  "discussion": [
   "What clues helped you predict where a return was going today?",
   "How did reacting early (instead of late) change what you could do with the ball?",
   "What will you watch for next time you're defending?"
  ],
  "lookfors": [
   "Watches the hitter's body/hand shape, not just the ball",
   "Begins moving before the ball is actually struck",
   "Adjusts quickly if the read turns out to be wrong"
  ],
  "inclusion": "Start with very obvious, exaggerated attacking cues for students building this skill, gradually introducing more disguised/varied returns as confidence grows.",
  "skillBreakdown": [
   {
    "step": "Watch the opponent's body shape and arm swing before they hit.",
    "why": "Their technique often signals where the ball is going before contact."
   },
   {
    "step": "Move early based on your read, not after the ball is already coming.",
    "why": "Reacting after the hit is often too late in a fast rally."
   },
   {
    "step": "Stay in a ready, balanced position while reading.",
    "why": "You need to be able to move instantly once you've made your read."
   }
  ]
 },
 {
  "n": 17,
  "block": 4,
  "title": "Small Court Showdown",
  "focus": "Small-sided rally games (2v2/3v3)",
  "walt": "We are learning to apply our skills together in a small team, in a full small-sided rally game.",
  "wilf": [
   "I can combine bump, set, and directed touches with my team in a real small-sided game",
   "I can communicate and cover space with a partner throughout a rally"
  ],
  "nzc": "Strands B, C · Relating to others, Thinking",
  "value": "Aroha",
  "valueText": "Playing with patience and encouragement for your small team, especially when a rally doesn't go to plan.",
  "equipment": "Balls, low nets/ropes, cones, bibs (2 colours)",
  "safety": "Standard small-sided game safety; ensure adjacent courts have enough buffer space",
  "games": [
   {
    "name": "2v2 Skills Warm-In",
    "desc": "Pairs play short rallies against each other focusing on using all their skills so far (bump, set, serve, directed touch) without strict scoring — a light, game-like refresher.",
    "coach": "Notice how much more comfortable these skills feel now compared to early lessons.",
    "easier": "n/a",
    "harder": "n/a",
    "chaos": "Role rotation",
    "setup": "Pairs of pairs (four students per court) play short rallies across a low net on a small court roughly 5m x 4m per side, one ball per game.",
    "howTo": [
     "Explain that this is a light refresher — pairs use all their skills so far (bump, set, serve, directed touch) without strict scoring.",
     "One pair starts a point with a serve over the net.",
     "Play a relaxed rally, using whichever skills feel natural — bump, set, serve, or a directed touch — without formally tracking a score.",
     "Reset with a fresh serve whenever a rally ends, keeping the tone light and game-like rather than corrective.",
     "Coach the key message throughout: 'notice how much more comfortable these skills feel now compared to early lessons.'",
     "This activity doesn't use easier/harder variants — rotate roles regularly instead so everyone gets an even mix of touches."
    ]
   },
   {
    "name": "Rotating Pairs Round-Robin",
    "desc": "Pairs rotate through quick mini-matches against several other pairs, playing short rally-scored games to a low target (e.g. first to 5).",
    "coach": "Communicate constantly — call the ball, call coverage.",
    "easier": "Longer games, more forgiving scoring.",
    "harder": "Shorter games, quicker rotation.",
    "chaos": "Head-to-head mirror, beat the clock",
    "setup": "Several small courts set up around the space, pairs rotating through quick mini-matches, one ball per court.",
    "howTo": [
     "Demonstrate constant communication — calling the ball, calling coverage — as the key habit for this format.",
     "Each pair plays a short rally-scored game against another pair, first to a low target such as 5 points.",
     "Points are scored with simple rally scoring — whichever side wins the rally gets the point, regardless of who served.",
     "Once a mini-match finishes, pairs rotate to play a new opponent pair, continuing through several quick matches.",
     "Coach the key message throughout: 'communicate constantly — call the ball, call coverage.'",
     "For 'easier', play longer games with more forgiving scoring; for 'harder', play shorter games with quicker rotation."
    ]
   },
   {
    "name": "3v3 Space & Cover Challenge",
    "desc": "Trios play short rallies with a specific focus on spacing/coverage, with bonus points for good positioning noticed by the coach.",
    "coach": "Check in with teammates about who's covering which zone before each serve.",
    "easier": "Bigger court, more space per player.",
    "harder": "Smaller court, tighter spacing required.",
    "chaos": "Bonus objectives",
    "setup": "Trios play short rallies across a low net on a court roughly 6m x 5m per side, one ball per game.",
    "howTo": [
     "Demonstrate checking in with teammates about who's covering which zone before each serve.",
     "Before each point, the trio briefly agrees who is covering which part of the court.",
     "Play a short rally, with the coach watching specifically for good spacing and coverage.",
     "Bonus points are awarded any time the coach notices good positioning, on top of normal rally scoring.",
     "Coach the key message throughout: 'check in with teammates about who's covering which zone before each serve.'",
     "For 'easier', use a bigger court with more space per player; for 'harder', use a smaller court with tighter spacing required."
    ]
   }
  ],
  "big": {
   "name": "Small-Sided Rally League",
   "desc": "Full 2v2/3v3 small-sided games across low nets with simple rally scoring, rotating opponents through several short matches. Every skill from the unit so far is relevant somewhere in these games.",
   "setup": "Full 2v2 and 3v3 small-sided games across low nets, on courts roughly 6m x 5m per side, rotating opponents through several short matches.",
   "howTo": [
    "Explain the format: simple rally scoring, with teams playing several short matches, rotating opponents throughout.",
    "One side starts each match with a serve over the net.",
    "Play continues as a normal rally, with players using whichever skills from the unit so far fit the situation — serve, bump, set, receive, or a directed touch.",
    "Points are scored with simple rally scoring, and matches finish at an agreed low target (e.g. first to 7 or after a set time).",
    "Rotate opponents every match so students play against several different teams through the league.",
    "Coach students that every skill from the unit so far is relevant somewhere in these games — this is where it all comes together."
   ]
  },
  "discussion": [
   "What combination of skills worked well for your team today?",
   "How did communication help your small team during rallies?",
   "What's one thing your team wants to work on before the next game?"
  ],
  "lookfors": [
   "Combines multiple skills smoothly within a real rally",
   "Communicates and covers space consistently, not just occasionally",
   "Stays encouraging with teammates through mistakes"
  ],
  "inclusion": "Allow flexible team sizes (2v2 or 3v3) depending on confidence/ability; consider mixed-ability pairs/trios so every team has a blend of experience.",
  "skillBreakdown": [
   {
    "step": "Communicate constantly about who's taking each ball.",
    "why": "Smaller teams need extra-clear communication to avoid gaps."
   },
   {
    "step": "Use all three touches purposefully when possible.",
    "why": "A full sequence — bump, set, hit — gives your team the best attacking option."
   },
   {
    "step": "Cover space efficiently as a small team.",
    "why": "Fewer players means every gap matters more."
   }
  ]
 },
 {
  "n": 18,
  "block": 4,
  "title": "Rotation Station",
  "focus": "Rotation basics",
  "walt": "We are learning the basic idea of rotating positions after winning the serve, like in a real volleyball game.",
  "wilf": [
   "I can rotate one position clockwise when it's my team's turn to serve",
   "I can find my new position quickly without confusion"
  ],
  "nzc": "Strand B · Thinking",
  "value": "Mōhio",
  "valueText": "Understanding the team's structure and your changing role within it — rotation only works if everyone knows their part.",
  "equipment": "Balls, low nets/ropes, cones/markers for the 6 rotation positions, bibs",
  "safety": "Standard court safety; clear position markers reduce confusion-related bumps",
  "games": [
   {
    "name": "Rotation Walk-Through",
    "desc": "Teams of 6 stand on marked position spots and physically walk through a clockwise rotation on each whistle, without a ball, until the pattern feels familiar.",
    "coach": "Always rotate the same direction (clockwise), one position at a time.",
    "easier": "Slower, with position numbers marked on the floor.",
    "harder": "Faster, no floor markers.",
    "chaos": "Random constraint calls (rotate on random whistle)",
    "setup": "Teams of six, each standing on marked position spots (cones or floor markers arranged in the six rotation positions), no ball needed.",
    "howTo": [
     "Demonstrate the rule: always rotate the same direction (clockwise), one position at a time.",
     "Each player starts standing on their marked position spot.",
     "On a whistle, the whole team physically walks through a clockwise rotation, each player moving to the next position spot.",
     "Repeat the walk-through on each whistle until the pattern feels familiar to the whole team.",
     "Coach the key message throughout: 'always rotate the same direction (clockwise), one position at a time.'",
     "For 'easier', go slower with position numbers marked on the floor; for 'harder', go faster with no floor markers."
    ]
   },
   {
    "name": "Rotate & Rally",
    "desc": "Teams play a short rally; every time their team wins the serve, they rotate one position before serving again.",
    "coach": "Rotate quickly and calmly, then reset into ready position.",
    "easier": "Rotate only after every few points instead of every serve win.",
    "harder": "Rotate after every single serve win, as in a real game.",
    "chaos": "Role rotation",
    "setup": "Teams of six (or a simplified smaller rotation for smaller teams) play a short rally across a low net, on a marked court with position spots.",
    "howTo": [
     "Demonstrate rotating quickly and calmly, then resetting into ready position before the next serve.",
     "The team plays a short rally as usual.",
     "Every time their team wins the serve (gains the right to serve), they rotate one position clockwise before serving again.",
     "Continue playing and rotating through several serve-wins, keeping the rotation habit consistent.",
     "Coach the key message throughout: 'rotate quickly and calmly, then reset into ready position.'",
     "For 'easier', rotate only after every few points instead of every serve win; for 'harder', rotate after every single serve win, as in a real game."
    ]
   },
   {
    "name": "Position Awareness Quiz-Rally",
    "desc": "During a short rally, play is occasionally paused and a player is asked to name their current position/role; teams get a bonus point for a correct, quick answer.",
    "coach": "Know your position, not just your teammates'.",
    "easier": "Fewer positions in play (e.g. 4-person rotation).",
    "harder": "Full 6-person rotation.",
    "chaos": "Bonus objectives",
    "setup": "Teams of six (or simplified rotation) play a short rally on a marked court with position spots, one ball per game.",
    "howTo": [
     "Demonstrate that knowing your own position is the goal, not just knowing your teammates'.",
     "The team plays a short rally as usual, rotating on serve wins as in the previous game.",
     "Play is occasionally paused, and a player is asked to name their current position or role.",
     "A correct, quick answer earns the team a bonus point before play resumes.",
     "Coach the key message throughout: 'know your position, not just your teammates'.'",
     "For 'easier', use a simplified 4-person rotation; for 'harder', use the full 6-person rotation."
    ]
   }
  ],
  "big": {
   "name": "Rotation League Mini-Games",
   "desc": "Small-sided games (using simplified rotation appropriate to team size) where teams rotate correctly after winning serve, alongside normal rally scoring. Understanding rotation is what keeps the team's structure working smoothly across a whole game.",
   "setup": "Small-sided games using simplified rotation appropriate to team size, across low nets, courts roughly 6m x 5m per side.",
   "howTo": [
    "Explain the format: teams rotate correctly after winning serve, alongside normal rally scoring.",
    "One side starts each point with a serve over the net.",
    "Play continues as a normal rally, with the serving team rotating one position after each new serve win, as practised earlier in the lesson.",
    "A point is scored as usual when the other side fails to legally return the ball; the coach checks rotations are happening correctly.",
    "Rotate opponents every few minutes, keeping team rotation consistent throughout each match.",
    "Coach students that understanding rotation is what keeps the team's structure working smoothly across a whole game."
   ]
  },
  "discussion": [
   "What helped your team rotate smoothly and quickly today?",
   "What was confusing about rotation at first, and how did your team sort it out?",
   "Why do you think volleyball uses rotation as part of the game?"
  ],
  "lookfors": [
   "Rotates in the correct direction, one position at a time",
   "Finds their new position quickly and calmly",
   "Helps a confused teammate find their spot"
  ],
  "inclusion": "Use a simplified 4-position rotation for teams still building the concept before introducing the full 6-position version; floor markers/numbers help students who find the spatial pattern tricky.",
  "skillBreakdown": [
   {
    "step": "Know your rotation order before play starts.",
    "why": "Volleyball's rotation rules require players to move in a set order."
   },
   {
    "step": "Move to your new position promptly when rotating.",
    "why": "Delays in rotating can leave gaps in coverage."
   },
   {
    "step": "Communicate your new position to teammates.",
    "why": "Helps everyone adjust their own coverage around you."
   }
  ]
 },
 {
  "n": 19,
  "block": 4,
  "title": "Full Rally Ready",
  "focus": "Full modified games with all touches",
  "walt": "We are learning to play a full modified volleyball game, using serving, receiving, bumping, setting, and directed touches together.",
  "wilf": [
   "I can play my position and use the right touch for each situation in a real game",
   "I can support my team through communication and coverage across a whole game"
  ],
  "nzc": "Strands A, B, C · Managing self, Relating to others, Thinking",
  "value": "Manaaki",
  "valueText": "Giving your full effort and skill in service of your team's game today, using everything you've built across the unit.",
  "equipment": "Balls, low nets, cones, bibs",
  "safety": "Standard full-game safety; monitor fatigue and hydration across longer games",
  "games": [
   {
    "name": "All-Skills Warm-In Circuit",
    "desc": "Quick-fire stations lightly revisiting the unit's key skills (bump, set, serve, receive, directed touch) — a refresher, not new teaching.",
    "coach": "Notice how much more comfortable these feel now compared to Lesson 1.",
    "easier": "n/a",
    "harder": "n/a",
    "chaos": "Beat the clock",
    "setup": "Several quick-fire stations set up around the space, each lightly revisiting one unit skill (bump, set, serve, receive, directed touch), students rotating through in small groups.",
    "howTo": [
     "Explain that this is a refresher, not new teaching — a light touch on everything learned so far.",
     "Students rotate through each station in small groups, spending a short time at each one.",
     "At each station, they lightly practise that station's skill using the technique already learned earlier in the unit.",
     "Move on to the next station after a set time or number of reps, until every group has visited every station.",
     "Coach the key message throughout: 'notice how much more comfortable these feel now compared to Lesson 1.'",
     "This activity doesn't use easier/harder variants — adjust the time at each station if the group needs more or less practice."
    ]
   },
   {
    "name": "Mixed Skill Relay",
    "desc": "Teams complete a relay combining a serve, a bump-receive, a set, and a directed touch in sequence — a fun, competitive combination of the whole unit's skills.",
    "coach": "Keep each touch clean rather than rushing to the next one.",
    "easier": "n/a",
    "harder": "n/a",
    "chaos": "Head-to-head mirror, beat the clock",
    "setup": "Teams of 4-6 at a relay course combining a serve, a bump-receive, a set, and a directed touch in sequence, one ball per team.",
    "howTo": [
     "Demonstrate the full sequence once: a serve, a bump-receive, a set, and a directed touch, performed one after another.",
     "The first team member serves the ball to begin their leg of the relay.",
     "The next teammate receives it with a bump, the next sets it, and the next completes it with a directed touch, each keeping their touch clean rather than rushing to the next one.",
     "The team races to complete the full sequence as a group, competing against other teams' times or completion.",
     "Coach the key message throughout: 'keep each touch clean rather than rushing to the next one.'",
     "This activity doesn't use easier/harder variants — adjust team size or sequence length if needed for the group."
    ]
   },
   {
    "name": "Team Game Plan Huddle",
    "desc": "Each team spends a few minutes agreeing one simple focus for their upcoming game (e.g. 'let's call the ball loudly today,' or 'let's cover the back corners'), then tries it in a short practice rally.",
    "coach": "Keep the plan simple — one clear idea everyone understands.",
    "easier": "n/a",
    "harder": "n/a",
    "chaos": "Bonus objectives",
    "setup": "Teams gather in a huddle for a few minutes, then move to a marked court for a short practice rally, one ball per team.",
    "howTo": [
     "Demonstrate the idea of a simple, shared focus — one clear idea everyone on the team understands and can act on.",
     "Each team spends a few minutes discussing and agreeing on one simple focus for their upcoming game.",
     "Once agreed, the team moves onto the court and tries out their focus in a short practice rally.",
     "After the practice rally, briefly check in as a team on how the focus went before moving into the day's bigger games.",
     "Coach the key message throughout: 'keep the plan simple — one clear idea everyone understands.'",
     "This activity doesn't use easier/harder variants — support younger or less confident teams with a suggested focus if they're stuck."
    ]
   }
  ],
  "big": {
   "name": "Full Modified Volleyball",
   "desc": "Small-sided or full-sided modified games (adjusted net height, court size, and rotation to suit the group) using serve, receive, bump, set, and directed touches together, with simple rally scoring across a full game. Every skill from the unit is relevant somewhere in this game.",
   "setup": "Small-sided or full-sided modified games, with net height, court size, and rotation adjusted to suit the group, using serve, receive, bump, set, and directed touches together, simple rally scoring across a full game.",
   "howTo": [
    "Explain the format: a full modified game using every skill from the unit, with net height, court size, and rotation adjusted to suit the group's level.",
    "One side starts the game with a serve over the net.",
    "Play continues as a normal full rally, with players using serve, receive, bump, set, and directed touches together as the situation requires.",
    "Points are scored with simple rally scoring throughout the game.",
    "Rotate positions and, if time allows, rotate opponents so students experience the full game in different roles.",
    "Coach students that every skill from the unit is relevant somewhere in this game — this is the whole picture coming together."
   ]
  },
  "discussion": [
   "What's one skill from across the whole unit you felt proudest of using today?",
   "How did your team's game plan from the huddle work out?",
   "What would you want to work on if we played another volleyball unit?"
  ],
  "lookfors": [
   "Uses a visible range of skills from across the unit (not just one)",
   "Communicates and covers space consistently across a whole game",
   "Applies a simple team plan, adjusting if it isn't working"
  ],
  "inclusion": "Adjust net height, court size, and team size to suit the group; ensure roles/positions rotate fairly so every student experiences a variety of touches during the full game.",
  "skillBreakdown": [
   {
    "step": "Apply the right touch — bump, set, hit — for each situation.",
    "why": "This lesson tests using the whole toolkit together in a real game."
   },
   {
    "step": "Communicate constantly throughout each rally.",
    "why": "Full games move fast and need constant coordination."
   },
   {
    "step": "Cover your position and support teammates as the rally develops.",
    "why": "Team positioning is as important as individual technique in a full game."
   }
  ]
 },
 {
  "n": 20,
  "block": 4,
  "title": "Volleyball Volley-Off",
  "focus": "Culminating mini-tournament — applying the whole unit",
  "walt": "We are learning to apply everything from this unit — ball control, serving, rallying, positioning, and teamwork — in a full small-sided tournament.",
  "wilf": [
   "I can use skills from across the unit in a real game",
   "I can play fairly and encouragingly in a competitive setting"
  ],
  "nzc": "Strands A, B, C, D · all five Key Competencies, drawn together",
  "value": "Pānga",
  "valueText": "Reflecting on the impact this whole unit has had — on your skills, your team, and how you treat others in a game.",
  "equipment": "Balls, low nets, cones, bibs (multiple colours for round-robin teams)",
  "safety": "Standard game safety; manage fatigue/hydration across a tournament format, ensure fair rotation so no team is overplayed",
  "games": [
   {
    "name": "Unit Skills Warm-Up Carousel",
    "desc": "Quick-fire stations revisiting a taste of the unit's key skills (ball control, bump, set, serve) — a light refresher, not new teaching.",
    "coach": "Notice how much more comfortable these feel now compared to Lesson 1.",
    "easier": "n/a",
    "harder": "n/a",
    "chaos": "Beat the clock",
    "setup": "Several quick-fire stations set up around the space, each lightly revisiting one unit skill (ball control, bump, set, serve), students rotating through in small groups.",
    "howTo": [
     "Explain that this is a light refresher, not new teaching — a taste of the unit's key skills before the tournament begins.",
     "Students rotate through each station in small groups, spending a short time at each one.",
     "At each station, they lightly practise that station's skill using the technique already learned earlier in the unit.",
     "Move on to the next station after a set time, until every group has visited every station.",
     "Coach the key message throughout: 'notice how much more comfortable these feel now compared to Lesson 1.'",
     "This activity doesn't use easier/harder variants — adjust the time at each station if the group needs more or less warm-up."
    ]
   },
   {
    "name": "Mixed Skill Relay",
    "desc": "Teams complete a relay combining ball control, a bump, a set, and a serve in sequence — a fun, competitive combination of the whole unit's skills.",
    "coach": "n/a",
    "easier": "n/a",
    "harder": "n/a",
    "chaos": "Head-to-head mirror, beat the clock",
    "setup": "Teams of 4-6 at a relay course combining ball control, a bump, a set, and a serve in sequence, one ball per team.",
    "howTo": [
     "Demonstrate the full sequence once: ball control, a bump, a set, and a serve, performed one after another.",
     "The first team member performs a short ball control sequence to begin their leg of the relay.",
     "The next teammate performs a bump, the next a set, and the next finishes with a serve, each keeping their touch clean.",
     "The team races to complete the full sequence as a group, competing against other teams' times or completion.",
     "This activity doesn't use easier/harder variants — adjust team size or sequence length if needed for the group.",
     "This activity doesn't have a specific coaching cue beyond the general focus on clean, controlled touches throughout the relay."
    ]
   },
   {
    "name": "Captain's Challenge",
    "desc": "Each team nominates a 'captain' (rotating role) who sets one focus for their team's tournament games (e.g. 'let's focus on calling the ball') — light strategic ownership before the tournament begins.",
    "coach": "n/a",
    "easier": "n/a",
    "harder": "n/a",
    "chaos": "Role rotation",
    "setup": "Teams nominate a rotating 'captain' role, gathering briefly before tournament games begin, no extra equipment beyond what the tournament courts already use.",
    "howTo": [
     "Explain the role: each team nominates a captain (a role that rotates through the team across the tournament) who sets one focus for their team's games.",
     "The nominated captain leads a brief huddle and picks one simple focus for their team's upcoming tournament games, such as 'let's focus on calling the ball.'",
     "The team carries that focus into their tournament matches, with the captain reminding teammates of it between points if needed.",
     "Rotate the captain role to a different student for later rounds so multiple students get the leadership turn.",
     "This activity doesn't use easier/harder variants — support younger or less confident captains with a suggested focus if they're stuck.",
     "This activity doesn't have a specific coaching cue beyond encouraging every student to have a turn leading."
    ]
   }
  ],
  "big": {
   "name": "Round-Robin Mini-Tournament",
   "desc": "Multiple small teams (2v2/3v3) rotate through short games against each other across 2–3 small courts, scoring simply (rally points or a fair-play points system). Every skill from the unit is relevant somewhere in these games.",
   "setup": "Multiple small teams (2v2 or 3v3) rotating through short games against each other across 2-3 small courts, using simple rally-point or fair-play scoring.",
   "howTo": [
    "Explain the tournament format: short round-robin games across several small courts, with teams rotating opponents throughout.",
    "One side starts each game with a serve over the net.",
    "Play continues as a normal rally, with players using every skill from across the unit as the situation requires.",
    "Score each game with simple rally points or an agreed fair-play points system, recording results as teams move between courts.",
    "Rotate teams through opponents and courts on a schedule so every team plays a similar number of games.",
    "Coach students that every skill from the unit is relevant somewhere in these games — this is the celebration of everything they've built across the unit."
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
    "step": "Apply your best technique from across the unit in every touch.",
    "why": "The tournament tests everything the unit has built together."
   },
   {
    "step": "Communicate constantly and encourage teammates.",
    "why": "Communication and encouragement both matter more under competitive pressure."
   },
   {
    "step": "Stay composed and controlled rather than rushing under pressure.",
    "why": "Rushed technique breaks down exactly when it matters most."
   }
  ]
 }
];

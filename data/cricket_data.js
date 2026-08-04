// Cricket unit data — CRICKET_BLOCK_INFO + CRICKET_LESSONS
const CRICKET_BLOCK_INFO = {
  1:{name:"Fielding & Throwing Fundamentals", range:"Lessons 1–5", color:"var(--b1)", soft:"var(--b1-soft)", warmup:"Quick Hands Catch Circle", warmdown:"Walk & Reach",
    warmupSetup:"Whole class spread out in a large circle or scattered space (roughly 15m x 15m for a class of 20-25), each student with a soft/modified ball. No other equipment needed.",
    warmupHowTo:[
      "Explain the routine: on 'go,' students move around the space gently tossing their ball a short distance up and catching it themselves as they walk or jog.",
      "Every 30-45 seconds, call a change: 'partner up' means quickly find a nearby partner and start gently underarm-tossing to each other; 'solo' means go back to tossing and catching alone while moving.",
      "Occasionally call 'quick hands' — for a few seconds, students toss and catch as fast as they safely can before returning to a normal pace.",
      "Keep the whole activity light, continuous, and playful — this is about raising heart rates and getting first touches on a ball, not testing catching technique.",
      "Run for the full 5 minutes, mixing up solo/partner changes and quick-hands bursts throughout."
    ],
    warmdownSetup:"No equipment needed beyond the space already in use. Gather the class into a loose circle or scattered spread with enough room for each student to stretch without touching anyone else.",
    warmdownHowTo:[
      "Have students set their ball aside and walk slowly around the space for about 1 minute to bring their heart rate down gradually.",
      "Gather into a circle (or stay scattered) and lead 3-4 simple static stretches — calves, quads, hamstrings, and a gentle shoulder/arm stretch (relevant to today's throwing and catching work) — holding each for about 15-20 seconds.",
      "Keep instructions simple and calm: 'reach, hold, breathe' rather than technical cues.",
      "Use this quiet time to briefly ask how the session felt for a couple of students, setting a relaxed tone before the Discussion segment.",
      "Finish with everyone standing tall and taking one big breath in and out together."
    ]
  },
  2:{name:"Batting Fundamentals", range:"Lessons 6–10", color:"var(--b2)", soft:"var(--b2-soft)", warmup:"Shadow Swing Jog", warmdown:"Partner Stretch",
    warmupSetup:"Individual space across the area (roughly 15m x 15m), each student holding a junior bat (no ball needed). Enough spacing between students that a shadow swing doesn't reach anyone else.",
    warmupHowTo:[
      "Students jog gently around the space at their own pace, keeping a light, continuous movement going.",
      "Every 20-30 seconds, call 'freeze and swing' — students stop, take their batting stance, and perform 2-3 smooth shadow swings before jogging on.",
      "Occasionally call 'pulse up' (jog a little faster) or 'pulse down' (slow right back to a walk) between swing prompts to vary the heart-rate work.",
      "Keep the swings light and controlled — this is about warming up the batting muscles and raising heart rate, not perfecting technique.",
      "Run for the full 5 minutes, mixing jogging pace and swing prompts throughout."
    ],
    warmdownSetup:"Same pairs or individuals from the warm-up, enough space to stretch without touching neighbours. Bats set aside.",
    warmdownHowTo:[
      "Have students walk slowly around the space for about 1 minute to bring their heart rate down.",
      "In pairs, lead 3-4 simple partner-assisted stretches — e.g. one partner gently holds the other's arm across the chest for a shoulder stretch, or both sit and reach toward each other's feet for a hamstring stretch (useful after today's batting and running work).",
      "Hold each stretch for about 15-20 seconds, then swap who is being assisted if the stretch requires it.",
      "Keep contact gentle and consent-based — no forcing a stretch further than a partner is comfortable with.",
      "Finish with partners saying one thing their partner did well in today's session before moving into the Discussion segment."
    ]
  },
  3:{name:"Bowling, Decision-Making & Game Reading", range:"Lessons 11–15", color:"var(--b3)", soft:"var(--b3-soft)", warmup:"Line & Length Shuffle", warmdown:"Breathe & Balance",
    warmupSetup:"Pairs spread out across the space, no ball needed for this warm-up, roughly 5m x 5m of room per pair, with 2-3 cones per pair to mark short line-and-length style shuffle zones.",
    warmupHowTo:[
      "Explain the game: one partner calls out a zone (short, good length, full — matching today's bowling language) and the other must shuffle sideways or step forward/back to 'stand' in that zone as fast as possible.",
      "The caller mixes up the order and pace of calls, keeping their partner moving continuously.",
      "Swap caller and mover roles every 60-90 seconds so both partners get the movement work.",
      "This builds the same quick, controlled footwork used in bowling run-ups and fielding, while raising heart rate through varied, reactive movement.",
      "Run for the full 5 minutes, encouraging quick, controlled shuffles rather than sloppy footwork."
    ],
    warmdownSetup:"No equipment needed. Gather the class into a spread-out circle with room to balance without bumping others.",
    warmdownHowTo:[
      "Walk slowly around the space for about 1 minute to bring heart rate down.",
      "Lead a few slow, controlled breathing cycles together: breathe in for 4 counts, hold for 2, breathe out for 4 — repeat 3-4 times.",
      "Follow with 2-3 simple balance holds, e.g. standing on one foot for 10-15 seconds, then swap feet — this connects to the balance used in bowling and fielding.",
      "Keep the tone calm and unhurried — this is a good moment to help students settle before reflecting on the lesson.",
      "Finish standing tall with one final deep breath together before moving into the Discussion segment."
    ]
  },
  4:{name:"Team Tactics & Culmination", range:"Lessons 16–20", color:"var(--b4)", soft:"var(--b4-soft)", warmup:"Team Shape Jog", warmdown:"Circle Stretch & Cheer",
    warmupSetup:"Split the class into their tournament/practice teams (groups of 4-6), each team with a marked-out area to jog in (cones optional). No ball needed.",
    warmupHowTo:[
      "Each team jogs together as a group around their area, staying reasonably close to each other rather than spreading out randomly.",
      "Call out simple shape prompts as they jog: 'spread wide,' 'come together,' 'form a line,' 'form a circle' — teams adjust their jogging shape on the call, echoing the fielding-shape thinking from this block.",
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

const CRICKET_LESSONS = [
 {
  "n": 1,
  "block": 1,
  "title": "Bullseye",
  "focus": "Underarm and overarm throwing accuracy to a target",
  "walt": "We are learning to throw a ball accurately to a target using underarm and overarm technique.",
  "wilf": [
   "I can throw underarm with a smooth, controlled release toward a target",
   "I can throw overarm with my non-throwing shoulder pointing at the target"
  ],
  "nzc": "Strand B (Movement Concepts & Motor Skills) · Managing self",
  "value": "Aroha",
  "valueText": "Looking after yourself with patience while your throwing technique feels new, and encouraging teammates whose accuracy looks different on day one.",
  "equipment": "1 soft/modified cricket ball per pair, cones, target markers (hoops or chalk circles)",
  "safety": "Spread pairs well apart before throwing; throw only on a clear 'go' signal; never throw at another person, only at targets",
  "games": [
   {
    "name": "Underarm Target Toss",
    "desc": "Standing a short distance from a hoop/cone target, students practise a smooth underarm throw, aiming to land the ball inside the target.",
    "coach": "Step toward the target with your opposite foot, release low and smooth.",
    "easier": "Bigger target, closer distance.",
    "harder": "Smaller target, further distance.",
    "chaos": "Scoring streaks",
    "setup": "Pairs spread out with about 3m between each pair, one soft/modified ball per pair. Each student stands roughly 4m from their own hoop or chalk-circle target laid flat on the ground.",
    "howTo": [
     "Demonstrate the underarm action first: step toward the target with the opposite foot to the throwing hand, swing the arm low and smooth, and release toward the ground so the ball lands inside the target.",
     "Students take turns throwing at their own target while their partner retrieves and resets the ball.",
     "A throw only counts if the ball lands fully inside the hoop or circle — call out your own hits so your partner can keep a rough tally.",
     "Swap thrower and retriever roles every 6-8 throws so both partners get even reps.",
     "Coach the key message: step toward the target with your opposite foot, release low and smooth.",
     "Easier: move the target closer and use a bigger hoop. Harder: move further back and shrink the target to a small cone gap."
    ]
   },
   {
    "name": "Overarm Line-Up",
    "desc": "Partners stand facing each other at a comfortable distance and throw overarm, focusing on pointing the non-throwing shoulder at the target before releasing.",
    "coach": "Point your shoulder, step, then throw — don't throw side-on.",
    "easier": "Shorter distance, bigger target zone (partner's whole body).",
    "harder": "Longer distance, aim for a smaller zone (chest height only).",
    "chaos": "Random constraint calls",
    "setup": "Partners face each other about 6m apart, spread out so no pair is within throwing range of another. One soft/modified ball per pair.",
    "howTo": [
     "Demonstrate the overarm cue first: point the non-throwing shoulder at the target, step in, then release — not a side-on throw.",
     "One partner throws while the other receives, calling 'ready' before each throw so no one is caught off guard.",
     "After each throw, the receiver gives one quick piece of feedback: did the shoulder point at the target before release?",
     "Swap throwing and receiving roles every 6-8 throws.",
     "Coach the key message: point your shoulder, step, then throw — don't throw side-on.",
     "Easier: shorten the distance and let any throw at the partner's body count. Harder: increase the distance and only count throws to chest height."
    ]
   },
   {
    "name": "Target Rotation Challenge",
    "desc": "Small groups rotate through 3 targets at different distances/heights, tallying accurate hits as a team total.",
    "coach": "Choose the right throw (underarm for accuracy close up, overarm for distance) for each target.",
    "easier": "Fewer, closer targets.",
    "harder": "More targets, mixed distances, time limit.",
    "chaos": "Beat the clock, bonus objectives",
    "setup": "Groups of 3-4 students share a set of 3 targets (hoops or cones) placed at different distances (close, medium, far) and slightly different heights using a bucket or crate to raise one target. One ball per group.",
    "howTo": [
     "Explain the rotation: each group works through all 3 targets, choosing underarm for the close target and overarm for the further ones.",
     "One student throws at a time while the rest of the group watches and calls out whether the throw landed inside the target.",
     "Every hit adds one point to the group's shared team total — write the running total on a whiteboard or track verbally.",
     "Rotate the thrower after every throw so everyone gets frequent turns across all three targets.",
     "Coach the key message: choose the right throw — underarm for accuracy close up, overarm for distance.",
     "Easier: use fewer, closer targets. Harder: add a time limit and mix in a bonus target for extra points."
    ]
   }
  ],
  "big": {
   "name": "Target Cricket Relay",
   "desc": "Small teams relay-race, each member throwing (underarm or overarm, their choice) at a set of targets before tagging the next teammate; fastest team to hit every target wins. Both accuracy and choosing the right throw for the situation decide the winner.",
   "setup": "Split the class into small teams of 3-4, each team lined up behind a start cone about 8-10m from their own set of 3 targets (hoops/cones at varied distances). One ball per team.",
   "howTo": [
    "Explain the relay: the first player runs to the throwing line, chooses underarm or overarm for each target, and must hit all 3 before running back to tag the next teammate.",
    "On 'go', the first player from each team goes; the rest of the team cheers and waits behind the start cone.",
    "A target only counts as hit once the ball lands inside it — misses can be retried until it lands in, but the clock keeps running.",
    "The next teammate can't start until the previous player is tagged in, so successful tags matter as much as accurate throws.",
    "The first team to have every player complete all 3 targets wins — coach calls out the finishing order for excitement.",
    "Reinforce the lesson focus: reward players who visibly choose the right throw type for each target, not just fast throwers."
   ]
  },
  "discussion": [
   "What helped your throws land accurately today?",
   "When did you choose underarm over overarm, and why?",
   "What was tricky about throwing at a target compared to just throwing far?"
  ],
  "lookfors": [
   "Steps toward the target before releasing",
   "Chooses underarm or overarm appropriately for the distance",
   "Follows through toward the target after release"
  ],
  "inclusion": "Use a bigger, softer ball and closer, larger targets for students building throwing confidence; success is measured by technique and effort, not just hits.",
  "skillBreakdown": [
   {
    "step": "Step toward the target with the opposite foot as you release.",
    "why": "Aims the throw and adds a little natural power."
   },
   {
    "step": "For overarm, point the non-throwing shoulder at the target before releasing.",
    "why": "Aligns your whole body toward accuracy rather than throwing side-on."
   },
   {
    "step": "Follow through toward the target after release.",
    "why": "Stopping the arm early reduces both accuracy and power."
   }
  ]
 },
 {
  "n": 2,
  "block": 1,
  "title": "Safe Hands High",
  "focus": "Catching — high catches",
  "walt": "We are learning to catch a ball that arrives high, using safe hand technique.",
  "wilf": [
   "I can make a 'basket' shape with my hands above my head to catch a high ball",
   "I can track the ball with my eyes all the way into my hands"
  ],
  "nzc": "Strand B · Managing self",
  "value": "Mōhio",
  "valueText": "Understanding your own body — reading the flight of the ball and adjusting your position and hands to meet it.",
  "equipment": "1 soft/modified ball per pair, cones",
  "safety": "Use soft/modified balls only; spread pairs out so no one is under two balls at once; call 'mine!' loudly to avoid collisions",
  "games": [
   {
    "name": "Basket Hands Practice",
    "desc": "Partners gently lob the ball high to each other, receiver practises forming a soft 'basket' with fingers up and hands together above head height.",
    "coach": "Give with your hands on contact, don't snatch at the ball.",
    "easier": "Lower, gentler lobs.",
    "harder": "Higher, further lobs requiring movement to get under the ball.",
    "chaos": "Scoring streaks",
    "setup": "Pairs stand about 3-4m apart with plenty of space between pairs (roughly 4m x 4m each) so lobbed balls don't cross paths. One soft/modified ball per pair.",
    "howTo": [
     "Demonstrate the 'basket' shape first: fingers pointing up, hands together above head height, elbows soft.",
     "One partner gently lobs the ball high and slightly in front of the receiver, who moves to get under it and catches with the basket shape.",
     "After each catch, the receiver briefly checks their hand shape was fingers-up (not palms-down) before the next lob.",
     "Swap thrower and catcher roles every 6-8 lobs so both partners get equal reps.",
     "Coach the key message: give with your hands on contact, don't snatch at the ball.",
     "Easier: lob lower and gentler. Harder: lob higher and further so the catcher has to move to get under it."
    ]
   },
   {
    "name": "Call & Catch",
    "desc": "Small groups of 3-4 stand in a circle; one player lobs high, calling a name — that player must call 'mine!' and move under the ball to catch it.",
    "coach": "Move your feet to get under the ball early, don't reach at the last second.",
    "easier": "Slower, more predictable lobs.",
    "harder": "Faster, less predictable lobs, more players in the circle.",
    "chaos": "Random constraint calls",
    "setup": "Groups of 3-4 stand in a circle with about 2m between each student, one ball per group.",
    "howTo": [
     "Explain the game: whoever has the ball lobs it high into the air and calls out a teammate's name before it lands.",
     "The named player must shout 'mine!' immediately and move quickly to get under the ball to catch it.",
     "Anyone else nearby stops and gives the caller space rather than also going for the ball.",
     "The player who caught it becomes the next thrower, choosing a new name to call.",
     "Coach the key message: move your feet to get under the ball early, don't reach at the last second.",
     "Easier: slower, more predictable lobs with fewer players in the circle. Harder: faster lobs and more players sharing the space."
    ]
   },
   {
    "name": "High Catch Streak",
    "desc": "Pairs count consecutive clean high catches in a row, trying to beat their own best streak.",
    "coach": "Reset your basket shape after every catch.",
    "easier": "Lower lobs, bigger target area.",
    "harder": "Higher lobs, must call 'mine!' every time.",
    "chaos": "Beat the clock (own record)",
    "setup": "Pairs spread out with about 3-4m between them, one ball per pair, enough room to move a few steps in any direction to get under the ball.",
    "howTo": [
     "Partners lob the ball high back and forth, counting out loud together every clean catch in a row.",
     "If the ball is dropped or mishandled, the streak resets to zero and the pair starts counting again.",
     "Encourage pairs to remember their personal best streak and try to beat it across the activity.",
     "After every catch, the receiver resets their basket hand shape ready for the next lob.",
     "Coach the key message: reset your basket shape after every catch.",
     "Easier: lower lobs with a bigger target area to stand in. Harder: higher lobs, and the receiver must call 'mine!' out loud on every single catch."
    ]
   }
  ],
  "big": {
   "name": "Around the Grid High Catch",
   "desc": "Small groups spread around a grid; a feeder lobs high catches to each player in turn while the group counts total clean catches as a team score, rotating the feeder role regularly.",
   "setup": "Split the class into groups of 5-6, each group spread around a large circle or grid (roughly 8m across) with one ball per group.",
   "howTo": [
    "One student in each group is the feeder, standing in the middle or at one side of the grid.",
    "The feeder lobs a high catch to each group member in turn, working around the group in order.",
    "The group calls out together and keeps a running team tally of every clean catch made.",
    "Swap the feeder role every 2-3 minutes so several students get a turn feeding.",
    "Coach the key message: move early and use a soft basket shape — the whole group's score depends on everyone's catches, not just the strong catchers.",
    "Easier: feeder lobs slower and closer. Harder: feeder mixes in faster or further lobs once the group is catching consistently."
   ]
  },
  "discussion": [
   "What helped you get into position under a high ball today?",
   "How did your hand shape change your catching success?",
   "What did you do differently for a higher ball versus a lower one?"
  ],
  "lookfors": [
   "Forms a soft basket shape with hands before the ball arrives",
   "Tracks the ball with eyes into the hands",
   "Moves feet early to get under the ball"
  ],
  "inclusion": "Use a larger, very soft ball (e.g. a foam ball) and lower lobs for students building catching confidence; allow a bounce-first version before progressing to catching on the full.",
  "skillBreakdown": [
   {
    "step": "Form a soft 'basket' shape with your hands above your head.",
    "why": "Gives a secure, wide surface to receive a high ball safely."
   },
   {
    "step": "Track the ball with your eyes all the way into your hands.",
    "why": "Looking away early is the most common cause of a drop."
   },
   {
    "step": "Move your feet early to get under the ball.",
    "why": "Reaching at the last second is less reliable than being in position early."
   }
  ]
 },
 {
  "n": 3,
  "block": 1,
  "title": "Down Low",
  "focus": "Catching — low and ground-level catches",
  "walt": "We are learning to catch a ball that arrives low or along the ground.",
  "wilf": [
   "I can get my body low and in line behind a ground ball",
   "I can scoop a low catch with soft hands close to the ground"
  ],
  "nzc": "Strand B · Managing self",
  "value": "Manaaki",
  "valueText": "Giving your partner a fair, honest feed so they get a genuine chance to practise — cricket relies on teammates setting each other up to succeed.",
  "equipment": "1 soft/modified ball per pair, cones",
  "safety": "Soft/modified balls only; check ground surface for hazards before ground-fielding games",
  "games": [
   {
    "name": "Low Roller Scoop",
    "desc": "Partners roll the ball along the ground to each other, receiver gets low and scoops it up with two hands.",
    "coach": "Get your body behind the ball as a backstop, don't just reach with your hands.",
    "easier": "Slower rolls, closer distance.",
    "harder": "Faster rolls, further distance.",
    "chaos": "Random constraint calls",
    "setup": "Pairs face each other about 4-5m apart on a checked, hazard-free surface, one ball per pair.",
    "howTo": [
     "Demonstrate the scoop first: get low with knees bent, get the body behind the ball as a backstop, and scoop with two hands.",
     "One partner rolls the ball firmly along the ground toward the other, who gets low and scoops it up cleanly.",
     "If the ball squeezes through, the fielder still chases it down rather than leaving it — no half-effort stops.",
     "Swap roller and fielder roles every 6-8 rolls.",
     "Coach the key message: get your body behind the ball as a backstop, don't just reach with your hands.",
     "Easier: slower rolls from a closer distance. Harder: faster rolls from further away."
    ]
   },
   {
    "name": "Low Bounce Catch",
    "desc": "Partners throw a gentle low, bouncing ball for the receiver to catch just after the bounce.",
    "coach": "Watch the bounce and move to meet the ball early.",
    "easier": "Predictable, straight bounces.",
    "harder": "Varied angle/height bounces.",
    "chaos": "Scoring streaks",
    "setup": "Pairs stand about 4-5m apart, one ball per pair, spread out so bouncing balls don't roll into another pair's space.",
    "howTo": [
     "Demonstrate first: throw a gentle underarm ball so it bounces once roughly halfway between the pair, then catch it just after the bounce.",
     "One partner throws while the other watches the bounce closely and moves to meet the ball as it comes up.",
     "Catch with two hands close to the body rather than reaching out stiff-armed.",
     "Swap thrower and catcher roles every 6-8 throws.",
     "Coach the key message: watch the bounce and move to meet the ball early.",
     "Easier: predictable, straight bounces aimed right at the catcher. Harder: bounces angled slightly left or right, or with more height."
    ]
   },
   {
    "name": "Ground Ball Relay",
    "desc": "Small teams relay a low rolled/thrown ball down a line, each player fielding cleanly before passing on; fastest clean team wins.",
    "coach": "Get down low and in line with the ball every time.",
    "easier": "Slower pace, shorter distance.",
    "harder": "Faster pace, longer line.",
    "chaos": "Beat the clock, head-to-head mirror",
    "setup": "Teams of 3-4 line up 2-3m apart along a straight line (roughly 10m total length), one ball per team, teams spaced well apart from each other.",
    "howTo": [
     "Explain the relay: the ball is rolled or thrown low along the line from player to player, and every player must field it cleanly before passing it on.",
     "On 'go', the first player fields (or starts with) the ball and rolls/throws it low to the next player in line.",
     "If a player fumbles the ball, they must gather it cleanly before continuing — no rushing a messy pickup.",
     "The fastest team to have the ball cleanly fielded by every player down the line wins that round.",
     "Coach the key message: get down low and in line with the ball every time.",
     "Easier: slower pace over a shorter line. Harder: faster pace over a longer line, or race two teams head-to-head."
    ]
   }
  ],
  "big": {
   "name": "Low & High Mixed Catch Game",
   "desc": "Small groups feed a mix of high and low/ground balls to each player in rotation, scoring team points for clean catches of both types — testing the adaptability built across Lessons 2 and 3.",
   "setup": "Groups of 5-6 spread around a grid roughly 8-10m across, one ball per group, with a designated feeder for each round.",
   "howTo": [
    "The feeder mixes up deliveries to each group member in turn — sometimes a high lob, sometimes a low roller or bounce.",
    "Each player fields whatever comes their way, using the high-catch basket shape from Lesson 2 or the low scoop technique from today, whichever fits.",
    "The group keeps a shared tally of clean stops across both catch types, calling out each success together.",
    "Rotate the feeder role every 2-3 minutes so several students get a turn feeding a mix of deliveries.",
    "Coach the key message: read what's coming early — high catches and low catches need different body shapes, and good fielders switch instantly between them.",
    "Easier: feeder announces high or low before each delivery. Harder: feeder mixes deliveries with no warning."
   ]
  },
  "discussion": [
   "What did getting your body low help you do today?",
   "How is catching a ground ball different from catching a high ball?",
   "What made a good, fair feed from your partner?"
  ],
  "lookfors": [
   "Gets body low and in line behind the ball",
   "Uses soft hands to scoop rather than stab at the ball",
   "Adjusts technique appropriately for ground vs. low bouncing balls"
  ],
  "inclusion": "Use a larger, slower-rolling ball for students building ground fielding confidence; allow kneeling as a starting technique before progressing to a full low crouch.",
  "skillBreakdown": [
   {
    "step": "Get your body low and in line behind the ball.",
    "why": "Your body acts as a backstop if the ball gets past your hands."
   },
   {
    "step": "Use soft hands to scoop rather than stab at the ball.",
    "why": "Soft hands absorb the ball instead of it bouncing away."
   },
   {
    "step": "Adjust your technique for ground versus low bouncing balls.",
    "why": "A bouncing ball needs a slightly different read than one rolling flat."
   }
  ]
 },
 {
  "n": 4,
  "block": 1,
  "title": "First to the Ball",
  "focus": "Fielding — ground fielding technique",
  "walt": "We are learning correct ground fielding technique — approaching, gathering, and preparing to throw in one movement.",
  "wilf": [
   "I can approach a ground ball at an angle that lets me gather and throw in one motion",
   "I can gather the ball cleanly before looking up to release"
  ],
  "nzc": "Strand B · Managing self",
  "value": "Pānga",
  "valueText": "A clean, quick fielding effort has a real impact on the game — stopping runs and creating chances for your team.",
  "equipment": "Soft/modified balls, cones",
  "safety": "Standard field safety; check the ground for hazards; call 'mine!' when approaching a shared ball",
  "games": [
   {
    "name": "Approach & Gather",
    "desc": "Individual practice approaching a stationary/slow-rolling ball from an angle, gathering it cleanly with two hands, and stepping into a throwing position.",
    "coach": "Approach at an angle, not straight on, so your body is already turning to throw.",
    "easier": "Stationary ball.",
    "harder": "Rolling ball, increasing speed.",
    "chaos": "Random constraint calls",
    "setup": "Individual stations spread across the space (roughly 4-5m per student), one ball each, with a stationary or slow-rolling ball to approach from about 3-4m away.",
    "howTo": [
     "Demonstrate the angled approach: run in from an angle (not straight on) so the body is already turning toward the throw target as the ball is gathered.",
     "Students place the ball a short distance away, jog back to a start point, then approach and gather it with two hands.",
     "Immediately after gathering, step into a balanced throwing position facing the target, even without throwing yet.",
     "Repeat several times, alternating which side the ball is approached from.",
     "Coach the key message: approach at an angle, not straight on, so your body is already turning to throw.",
     "Easier: use a stationary ball only. Harder: have a partner roll the ball at increasing speed to approach."
    ]
   },
   {
    "name": "Field & Fire",
    "desc": "Partners field a rolled ball and immediately throw to a target, timing themselves from gather to release.",
    "coach": "One smooth motion — gather, turn, throw.",
    "easier": "Closer target, slower roll.",
    "harder": "Further target, faster roll.",
    "chaos": "Beat the clock",
    "setup": "Pairs work together with one thrower/roller and one fielder about 5-6m apart, plus a target (cone or stump) a further 4-5m from the fielder. One ball per pair.",
    "howTo": [
     "One partner rolls the ball toward the fielder while the fielder times themselves (or the coach times) from gather to throw release.",
     "The fielder gathers the ball using the angled approach, turns, and throws immediately at the target.",
     "Partners compare times or simply aim to beat their own previous attempt.",
     "Swap roller and fielder roles every 4-5 reps.",
     "Coach the key message: one smooth motion — gather, turn, throw.",
     "Easier: closer target and a slower roll. Harder: further target and a faster roll."
    ]
   },
   {
    "name": "Race to the Ball",
    "desc": "Two fielders start equal distance from a ball rolled between them; first to field it cleanly and hit a target scores a point.",
    "coach": "Call 'mine!' early and commit.",
    "easier": "Slower roll, closer targets.",
    "harder": "Faster roll, further target.",
    "chaos": "Head-to-head mirror",
    "setup": "Pairs of fielders stand an equal distance (about 4m) on either side of a target zone; the coach or a third student rolls the ball between them from a further distance so it arrives roughly in the middle. Cones mark a target for the throw.",
    "howTo": [
     "Explain the contest: as soon as the ball is rolled, both fielders react and race to be first to field it cleanly.",
     "Whoever gets there first calls 'mine!' immediately and commits — the other fielder backs off to avoid a collision.",
     "The fielder who won the race then throws at the target; a point is scored for winning the race and another for hitting the target.",
     "Rotate fielders after every roll so everyone gets multiple turns racing.",
     "Coach the key message: call 'mine!' early and commit.",
     "Easier: slower roll and closer targets. Harder: faster roll and a further target."
    ]
   }
  ],
  "big": {
   "name": "Fielding Circuit Game",
   "desc": "Small-sided game (pairs cricket style) where the fielding team scores points for clean gathers and quick, accurate returns to a target stump/cone, rewarding the whole fielding sequence, not just stopping the ball.",
   "setup": "Set up a small pairs-cricket-style station: a batting/hitting area with a tee or gentle underarm feed, stumps or a target cone about 8-10m away, and 3-4 fielders spread around. Soft/modified balls and bats if available.",
   "howTo": [
    "One player hits or the coach rolls a ball into the field for the fielding team to react to.",
    "Fielders score points for a clean gather (using today's angled approach) and a further point for a quick, accurate return throw to the target stump or cone.",
    "Points are awarded for the fielding sequence itself, not just for getting the batter out — a good gather-and-return earns credit even if the batter is safe.",
    "Rotate fielding positions and the batter/hitter role every few minutes so everyone experiences both.",
    "Coach the key message: the whole sequence matters — a rushed, messy gather undoes a good throw.",
    "Easier: bigger fielding circle and more time between deliveries. Harder: tighter field and quicker deliveries."
   ]
  },
  "discussion": [
   "What helped you gather the ball cleanly today?",
   "Why does the angle of your approach matter?",
   "What made your gather-to-throw sequence smooth or clunky?"
  ],
  "lookfors": [
   "Approaches at an angle that sets up the throw",
   "Gathers with two hands before looking up",
   "Moves smoothly from gather into a throwing position"
  ],
  "inclusion": "Slow the ball speed and shorten the approach distance for students building confidence; success is measured by a clean gather, not speed of release.",
  "skillBreakdown": [
   {
    "step": "Approach the ball at an angle, not straight on.",
    "why": "An angled approach means your body is already turning to throw."
   },
   {
    "step": "Gather the ball cleanly with two hands before looking up.",
    "why": "Rushing to look up before gathering causes fumbles."
   },
   {
    "step": "Move smoothly from gather into a throwing position.",
    "why": "One continuous motion is faster and cleaner than separate, stop-start actions."
   }
  ]
 },
 {
  "n": 5,
  "block": 1,
  "title": "Backing Up",
  "focus": "Fielding — backing up teammates & communication",
  "walt": "We are learning to back up a teammate's throw and communicate clearly in the field.",
  "wilf": [
   "I can position myself behind a teammate receiving a throw, in case it's missed",
   "I can call clearly to claim a ball or direct a teammate"
  ],
  "nzc": "Strand B, C · Relating to others",
  "value": "Mōhio",
  "valueText": "Understanding your role in relation to your teammates — reading where support is needed before it's needed.",
  "equipment": "Soft/modified balls, cones, stumps/markers",
  "safety": "Standard field safety for multiple simultaneous small games",
  "games": [
   {
    "name": "Call It Loud",
    "desc": "Small groups practise calling clearly ('mine!', 'yours!', 'back up!') as a ball is fed toward two or more potential fielders.",
    "coach": "Call early and loudly — hesitation causes mistakes.",
    "easier": "Slower feeds, obvious calls.",
    "harder": "Faster feeds, players must decide who calls.",
    "chaos": "Random constraint calls",
    "setup": "Groups of 3-4 stand a few metres apart in a loose triangle or line, one ball per group, with a feeder (coach or student) ready to send the ball toward two potential fielders at once.",
    "howTo": [
     "Explain the calls before starting: 'mine!' means I've got it, 'yours!' hands it to a teammate, 'back up!' tells someone to get in position behind in case of a miss.",
     "The feeder rolls or throws the ball toward a spot where two fielders could both reasonably go for it.",
     "The nearer fielder must call clearly and immediately — teammates react to the call rather than both diving for the ball.",
     "Rotate who feeds and who fields every few turns so everyone practises calling.",
     "Coach the key message: call early and loudly — hesitation causes mistakes.",
     "Easier: slower feeds with an obvious nearest fielder. Harder: faster, more even feeds where players must decide who calls."
    ]
   },
   {
    "name": "Backstop Positioning",
    "desc": "Trios practise: one throws to a target/stump, a second fields, a third positions behind as a backstop in case the throw is missed.",
    "coach": "Always know where your backstop is before you throw.",
    "easier": "Backstop close and obvious.",
    "harder": "Backstop must find their own position.",
    "chaos": "Role rotation",
    "setup": "Trios spread out with a thrower, a fielder about 5-6m away near a target stump/cone, and a backstop positioned a further few metres behind the target. One ball per trio.",
    "howTo": [
     "Explain the roles: the thrower aims at the stump/cone, the fielder is the intended receiver, and the backstop's job is to stop any missed throw from running away.",
     "The thrower throws at the target; the fielder attempts to field or intercept it.",
     "If the throw is missed, the backstop moves to collect it quickly rather than letting it roll far.",
     "Rotate all three roles every 4-5 throws so everyone experiences throwing, fielding, and backing up.",
     "Coach the key message: always know where your backstop is before you throw.",
     "Easier: backstop stands in an obvious, close position. Harder: backstop has to read the situation and find their own position."
    ]
   },
   {
    "name": "Team Field Communication",
    "desc": "Small-sided fielding game where the coach specifically rewards clear calling and correct backing-up positions, not just stopping the ball.",
    "coach": "Talk constantly — a quiet field is a field making mistakes.",
    "easier": "Bigger space, more time.",
    "harder": "Smaller space, faster play.",
    "chaos": "Bonus objectives",
    "setup": "Set up a small-sided fielding scenario with 5-6 fielders spread across a modest area (roughly 15m x 15m) and a feeder hitting or rolling balls into the space for them to field.",
    "howTo": [
     "Explain that points are awarded specifically for clear calling and good backing-up positions, not just for stopping the ball.",
     "The feeder sends a ball into the field; fielders react, calling clearly and moving to back up teammates near the ball.",
     "After each play, the coach calls out one example of good communication or positioning that was seen.",
     "Rotate the feeder role regularly so different students get to send balls into different areas of the field.",
     "Coach the key message: talk constantly — a quiet field is a field making mistakes.",
     "Easier: bigger space and more time to react. Harder: smaller space and faster play."
    ]
   }
  ],
  "big": {
   "name": "Backed-Up Fielding Game",
   "desc": "Small-sided pairs cricket game where the fielding team earns bonus points any time a missed stop is cleanly backed up by a teammate, reinforcing that fielding is a team effort.",
   "setup": "Set up a small-sided pairs cricket game with two batters, stumps, and 4-5 fielders spread across a modest playing area (roughly 20m x 20m). Soft/modified balls and junior bats if available.",
   "howTo": [
    "Play a standard short pairs cricket game: bowl, bat, and field as normal, with fielders using the calling and backing-up skills from today.",
    "Whenever a fielder misses a stop but a teammate has backed up and cleanly collects the rebound, award the fielding team a bonus point on top of any normal scoring.",
    "Call out these bonus moments immediately so the whole group sees why they were rewarded.",
    "Rotate batting, bowling, and fielding positions every few overs so everyone experiences different roles.",
    "Coach the key message: fielding is a team effort — a backed-up miss is nearly as good as a clean stop.",
    "Easier: fewer fielders covering a smaller area with more obvious backing-up spots. Harder: a fuller field where players must find their own backing-up positions."
   ]
  },
  "discussion": [
   "What helped your team communicate clearly in the field today?",
   "Why does backing up a teammate matter, even when most throws are caught cleanly?",
   "What did good team fielding look like when you saw it?"
  ],
  "lookfors": [
   "Positions behind a teammate receiving a throw",
   "Calls clearly and early to claim the ball or direct others",
   "Adjusts backing-up position as play develops"
  ],
  "inclusion": "Use clear visual cues (a cone marking the backstop spot) for students who find reading support positioning challenging.",
  "skillBreakdown": [
   {
    "step": "Position yourself behind a teammate receiving a throw.",
    "why": "Gives your team a second chance if the first stop is missed."
   },
   {
    "step": "Call clearly to avoid confusion.",
    "why": "Clear calls prevent collisions and missed responsibilities."
   },
   {
    "step": "Adjust your backing-up position as play develops.",
    "why": "The right backup position changes as the ball and players move."
   }
  ]
 },
 {
  "n": 6,
  "block": 2,
  "title": "Ready Stance",
  "focus": "Batting grip & stance",
  "walt": "We are learning a correct batting grip and a balanced, ready stance.",
  "wilf": [
   "I can hold the bat with a 'V' grip, hands together",
   "I can stand side-on in a balanced, ready stance before the ball arrives"
  ],
  "nzc": "Strand B · Managing self",
  "value": "Aroha",
  "valueText": "Being patient with yourself as a new grip and stance feel awkward at first — good technique takes repetition to feel natural.",
  "equipment": "1 junior bat and soft/modified ball per pair, batting tees, cones",
  "safety": "Spacing between pairs so no one is in a bat's swinging range; check grip/stance before any live hitting begins",
  "games": [
   {
    "name": "Grip Check Partners",
    "desc": "Partners check each other's grip (hands together, 'V' shapes lined up on the bat) and side-on stance, giving friendly feedback.",
    "coach": "Hands together, 'V' pointing up the bat, front shoulder toward the bowler.",
    "easier": "Coach/visual reference for the grip shape.",
    "harder": "Students correct each other without a reference.",
    "chaos": "Random constraint calls",
    "setup": "Pairs stand about 2m apart, each with a junior bat, spread out so bats can be held up without touching anyone else's space.",
    "howTo": [
     "Demonstrate the grip and stance first: hands together low on the handle with the 'V' shapes (thumb and finger) both pointing up the bat, side-on stance with the front shoulder pointing toward an imaginary bowler.",
     "One partner sets up their grip and stance while the other checks it against the two cues and gives one piece of friendly feedback.",
     "Swap roles so both partners check and get checked.",
     "Repeat 3-4 times, resetting the stance fresh each time rather than just holding one position.",
     "Coach the key message: hands together, 'V' pointing up the bat, front shoulder toward the bowler.",
     "Easier: use a poster, photo, or the coach's own stance as a visual reference. Harder: partners correct each other with no reference, just the verbal cues."
    ]
   },
   {
    "name": "Shadow Swing Freeze",
    "desc": "Students take a stance and shadow-swing (no ball) on a call, freezing in a balanced follow-through position.",
    "coach": "Balance at the end of the swing shows a controlled technique.",
    "easier": "Slower swings, more time.",
    "harder": "Faster swings, freeze called unpredictably.",
    "chaos": "Beat the clock",
    "setup": "Students spread out individually with about 2m of swinging space each, one bat each, no ball needed.",
    "howTo": [
     "Demonstrate a shadow swing: take the batting stance, swing the bat smoothly as if hitting a ball, and finish in a balanced follow-through.",
     "Students shadow-swing on their own rhythm until the coach calls 'freeze.'",
     "On 'freeze,' students hold their follow-through position completely still — the coach checks for balance (not falling forward or off to one side).",
     "Repeat several times, mixing up how long students swing before the freeze call.",
     "Coach the key message: balance at the end of the swing shows a controlled technique.",
     "Easier: slower swings with more time before each freeze call. Harder: faster swings with the freeze called unpredictably."
    ]
   },
   {
    "name": "Stance & Ready Relay",
    "desc": "Small teams race to correctly demonstrate grip and stance in turn before their teammate can start, coach checks each rep.",
    "coach": "Get into position early, don't rush the setup.",
    "easier": "Simplify checkpoints.",
    "harder": "Add a timing element per player.",
    "chaos": "Head-to-head mirror",
    "setup": "Teams of 3-4 line up behind a start cone, one bat per team, with a checkpoint spot about 5m away where each player demonstrates their grip and stance.",
    "howTo": [
     "Explain the relay: each player runs to the checkpoint, sets up a correct grip and stance, and waits for the coach (or a nominated checker) to approve it before running back.",
     "Only once a rep is approved can that player tag the next teammate to start their turn.",
     "The checker (coach or student) uses the two cues from Grip Check Partners to decide if the stance passes.",
     "Continue until every player on the team has completed a checked rep.",
     "Coach the key message: get into position early, don't rush the setup.",
     "Easier: simplify to checking grip only. Harder: add a timing element, racing to see which team finishes all their checks fastest."
    ]
   }
  ],
  "big": {
   "name": "Tee Ball Stance Challenge",
   "desc": "Small groups rotate through a batting tee station where each hit is only counted if the grip and stance were correct beforehand — technique earns the point, not just contact.",
   "setup": "Set up 3-4 batting tee stations spread around the space, each with a tee, a junior bat, and a soft/modified ball. Groups of 3-4 rotate through the stations.",
   "howTo": [
    "Before hitting, each batter sets up their grip and stance and a partner or the coach checks it against the grip/stance cues.",
    "A hit only counts as a scoring hit if the grip and stance were correct beforehand — contact alone doesn't earn the point.",
    "Batters take turns hitting off the tee within their group, with the checker calling out whether each attempt counts.",
    "Rotate the checker role and rotate groups through different stations every few minutes.",
    "Coach the key message: technique earns the point today, not just contact — this sets up everything that follows in the unit.",
    "Easier: coach or an older buddy does the checking. Harder: students check each other independently with no adult confirmation."
   ]
  },
  "discussion": [
   "What did a balanced, ready stance feel like today?",
   "How did your grip affect your control of the bat?",
   "What was tricky about the new stance and grip?"
  ],
  "lookfors": [
   "Hands together in a 'V' grip",
   "Side-on, balanced stance before the ball arrives",
   "Maintains balance through a shadow swing"
  ],
  "inclusion": "Allow a modified two-handed 'shovel' grip initially for students building hand strength/coordination, progressing to the full grip as confidence grows.",
  "skillBreakdown": [
   {
    "step": "Hold the bat with hands together in a 'V' grip.",
    "why": "This grip gives control and a consistent swing path."
   },
   {
    "step": "Stand side-on in a balanced, ready stance.",
    "why": "Side-on positioning is the base for both defensive and attacking shots."
   },
   {
    "step": "Keep your weight balanced, ready to move either foot.",
    "why": "A flat-footed stance is slow to react to the ball."
   }
  ]
 },
 {
  "n": 7,
  "block": 2,
  "title": "Middle It",
  "focus": "Batting — hitting off a tee or soft toss",
  "walt": "We are learning to strike the ball cleanly off a tee or a soft toss.",
  "wilf": [
   "I can watch the ball onto the bat",
   "I can swing level and follow through toward my target"
  ],
  "nzc": "Strand B · Managing self",
  "value": "Manaaki",
  "valueText": "Practising a new skill faithfully, with effort, even when contact doesn't happen every time — batting takes real repetition.",
  "equipment": "Junior bats, soft/modified balls, batting tees, cones",
  "safety": "Batters swing only when clear; others wait well back from the swinging zone; one batter hits at a time per station",
  "games": [
   {
    "name": "Tee Strike Technique",
    "desc": "Individual practice hitting off a stationary tee, focusing on watching the ball and a level swing, not power.",
    "coach": "Eyes on the ball right up to contact, swing level through the ball.",
    "easier": "Ball placed lower/more central.",
    "harder": "Ball placed at varied heights.",
    "chaos": "Scoring streaks",
    "setup": "Individual stations spread well apart (at least 4-5m of swinging room each), each with a batting tee, a junior bat, and a few soft/modified balls.",
    "howTo": [
     "Demonstrate the level swing first: eyes on the ball right up to contact, swinging level through the ball rather than chopping down or scooping up.",
     "Students set up their stance, place the ball on the tee, and take a swing, watching the ball all the way to contact.",
     "After each hit, reset the ball on the tee and repeat — focus on watching and swinging level, not on how far it travels.",
     "Rotate turns if sharing a station, with the next student waiting well back until it's clearly their turn.",
     "Coach the key message: eyes on the ball right up to contact, swing level through the ball.",
     "Easier: place the ball lower and more central on the tee. Harder: vary the ball's height on the tee between swings."
    ]
   },
   {
    "name": "Soft Toss Timing",
    "desc": "A partner gently underarm-tosses the ball for the batter to strike, adding timing on top of technique.",
    "coach": "Watch the toss all the way, don't guess when to swing.",
    "easier": "Slow, predictable tosses.",
    "harder": "Varied speed/height tosses.",
    "chaos": "Random constraint calls",
    "setup": "Pairs with one batter and one gentle underarm feeder, about 3-4m apart, one bat and ball per pair, plenty of space around each pair for the swing.",
    "howTo": [
     "The feeder tosses the ball gently underarm toward the batter, giving a clear 'ready' cue before each toss.",
     "The batter watches the toss the whole way and swings to make contact, focusing on timing rather than power.",
     "After each hit, the feeder collects the ball and resets before the next toss.",
     "Swap batter and feeder roles every 6-8 tosses.",
     "Coach the key message: watch the toss all the way, don't guess when to swing.",
     "Easier: slow, predictable tosses at the same height each time. Harder: vary the toss speed and height between deliveries."
    ]
   },
   {
    "name": "Clean Contact Challenge",
    "desc": "Small groups rotate through a hitting station, tallying clean, well-timed contacts as a team total.",
    "coach": "Reset your stance and focus fully before each hit.",
    "easier": "Tee only, bigger target zone.",
    "harder": "Soft toss, target zone for placement.",
    "chaos": "Beat the clock, bonus objectives",
    "setup": "Groups of 3-4 rotate through a shared hitting station with a tee, junior bat, and soft/modified balls, spaced well away from other stations.",
    "howTo": [
     "Explain the challenge: the group counts every clean, well-timed contact as a shared team total across everyone's turns.",
     "Each student takes a turn hitting several balls off the tee (or soft toss if the group is ready) while the rest of the group watches and tallies clean hits.",
     "A hit counts as 'clean' if the ball was struck with a level swing rather than badly mis-hit — the group agrees on this together.",
     "Rotate through every group member, keeping a running total visible or called out.",
     "Coach the key message: reset your stance and focus fully before each hit.",
     "Easier: tee only, with a big imaginary target zone for any hit to count. Harder: use soft toss, and only hits into a marked placement zone count."
    ]
   }
  ],
  "big": {
   "name": "Tee & Toss Mini-Game",
   "desc": "Small-sided pairs cricket game where batters choose tee or soft toss depending on the station, with fielders practising Lessons 1–5 skills as they field the hits — batting and fielding practised together live.",
   "setup": "Set up 2-3 small pairs-cricket stations, each with a batting area (tee or soft toss), junior bats, stumps or a target, and 2-3 fielders spread out to field hits. Soft/modified balls throughout.",
   "howTo": [
    "At each station, the batter chooses tee or soft toss depending on what the station has set up, and hits toward the fielders.",
    "Fielders react to the hit using the gathering and throwing skills built in Lessons 1-5, fielding cleanly and returning the ball.",
    "Batting and fielding run live together — batters focus on clean contact while fielders focus on quick, clean stops.",
    "Rotate batter and fielders every few minutes so everyone gets both batting and fielding time.",
    "Coach the key message: this is where batting and fielding meet — a clean hit only really counts if the fielders respond well too.",
    "Easier: slower deliveries and a smaller fielding area. Harder: faster deliveries and a fuller field to cover."
   ]
  },
  "discussion": [
   "What helped you make clean contact with the ball today?",
   "What's the difference between swinging hard and swinging well?",
   "What will you keep practising with your batting?"
  ],
  "lookfors": [
   "Watches the ball onto the bat",
   "Swings level rather than chopping down or up",
   "Balanced follow-through toward the target"
  ],
  "inclusion": "Use a lighter/bigger bat and a larger, softer ball for students building strength/confidence; success is measured by clean technique, not distance hit.",
  "skillBreakdown": [
   {
    "step": "Watch the ball onto the bat through contact.",
    "why": "Watching the ball, not the target, is what actually connects a clean hit."
   },
   {
    "step": "Swing level through the ball, not chopping down or scooping up.",
    "why": "A level swing gives the most consistent, controlled contact."
   },
   {
    "step": "Transfer your weight into the shot as you swing.",
    "why": "Weight transfer adds control and a bit of natural power."
   }
  ]
 },
 {
  "n": 8,
  "block": 2,
  "title": "Run!",
  "focus": "Batting — running between wickets",
  "walt": "We are learning to run safely and quickly between wickets, calling clearly with our batting partner.",
  "wilf": [
   "I can run in a straight line to the crease, touching my bat/foot down",
   "I can call 'yes,' 'no,' or 'wait' clearly to my batting partner"
  ],
  "nzc": "Strand B · Relating to others",
  "value": "Pānga",
  "valueText": "A clear call has a real impact on your partner's safety and success — good communication prevents run-outs and mix-ups.",
  "equipment": "Junior bats, soft/modified balls, stumps/markers, cones for creases",
  "safety": "Clear running lanes, no colliding paths between batters; running technique (not diving) at this age group",
  "games": [
   {
    "name": "Call & Run Practice",
    "desc": "Pairs practise calling 'yes,' 'no,' or 'wait' and responding correctly by running or staying, without a ball yet.",
    "coach": "The caller commits fully and calls loudly and early.",
    "easier": "Coach makes the call.",
    "harder": "Batters decide and call themselves under mock pressure.",
    "chaos": "Random constraint calls",
    "setup": "Pairs stand at opposite ends of two creases marked with cones, about 10-12m apart, no ball needed for this activity.",
    "howTo": [
     "Explain the three calls: 'yes' means run now, 'no' means stay, 'wait' means hold and see.",
     "One partner is the caller and shouts one of the three calls; both partners respond correctly — running together on 'yes,' staying put on 'no,' or holding on 'wait.'",
     "Repeat with different calls in different orders so students react rather than predict.",
     "Swap who makes the call every 4-5 rounds.",
     "Coach the key message: the caller commits fully and calls loudly and early.",
     "Easier: the coach makes the call for everyone at once. Harder: batters make and call their own decision under a mock pressure countdown from the coach."
    ]
   },
   {
    "name": "Straight Line Sprint",
    "desc": "Individual practice sprinting a set running distance between two creases, touching down correctly each time.",
    "coach": "Run in a straight line, touch down without breaking stride unnecessarily.",
    "easier": "Shorter distance.",
    "harder": "Longer distance, timed.",
    "chaos": "Beat the clock",
    "setup": "Individual lanes marked with cones between two creases about 10-15m apart, enough lanes so students aren't sprinting shoulder to shoulder.",
    "howTo": [
     "Demonstrate a proper 'touch down': run in a straight line and touch the bat (or a marker) down just past the crease line without overrunning wildly.",
     "Students sprint from one crease to the other on a 'go' signal, touching down correctly at the far end.",
     "Encourage a straight running line rather than drifting sideways, which wastes time and risks collisions.",
     "Repeat several times, resting briefly between sprints.",
     "Coach the key message: run in a straight line, touch down without breaking stride unnecessarily.",
     "Easier: shorter distance at a comfortable pace. Harder: longer distance, timed for personal best."
    ]
   },
   {
    "name": "Run Decision Relay",
    "desc": "Pairs face a fielded ball and must decide together, calling clearly, whether to run 1, run 2, or hold — coach varies the fielding speed to test decisions.",
    "coach": "Trust your partner's call and commit immediately.",
    "easier": "Slower fielding, obvious decisions.",
    "harder": "Faster fielding, tighter decisions.",
    "chaos": "Added pressure",
    "setup": "Pairs stand ready to run between two creases about 10m apart, with a fielder (coach or student) positioned to field a ball at varying speeds. One ball for the group.",
    "howTo": [
     "The fielder fields (or pretends to field) a ball at a speed the coach controls, sometimes fast and sharp, sometimes slow.",
     "Based on the fielding speed, the pair must decide together and call clearly whether to run 1, run 2, or hold their ground.",
     "Both partners must commit to the same decision immediately once the call is made — no half-hearted setting off.",
     "Rotate fielders and pairs regularly so everyone experiences a range of decision scenarios.",
     "Coach the key message: trust your partner's call and commit immediately.",
     "Easier: slower fielding with obvious decisions. Harder: faster fielding with tighter, less obvious decisions."
    ]
   }
  ],
  "big": {
   "name": "Pairs Cricket — Running Focus",
   "desc": "Small-sided pairs cricket game where the coach specifically highlights clear calling and safe, decisive running between wickets, in addition to runs scored.",
   "setup": "Set up a small-sided pairs cricket game with two batting pairs, stumps, and 4-5 fielders across a modest area (roughly 20m x 20m). Soft/modified balls and junior bats.",
   "howTo": [
    "Play pairs cricket as normal — bat, bowl, and field — with running between wickets happening naturally on every hit.",
    "The coach specifically calls out and praises clear, loud calling and safe, decisive running, in addition to any runs scored.",
    "If a pair calls late or runs unsafely (e.g. crossing paths dangerously), pause briefly to reset the calling habit before continuing.",
    "Rotate batting pairs, bowlers, and fielders every few overs so everyone gets running practice.",
    "Coach the key message: good calling and running is worth celebrating just as much as a big hit.",
    "Easier: shorter running distance between creases. Harder: standard distance with tighter run/no-run decisions expected."
   ]
  },
  "discussion": [
   "What helped you and your partner run safely and quickly today?",
   "Why does a clear, early call matter so much?",
   "What happened when a call was late or unclear?"
  ],
  "lookfors": [
   "Calls clearly and early ('yes'/'no'/'wait')",
   "Runs in a straight line and touches down correctly",
   "Commits fully once a call is made"
  ],
  "inclusion": "Use shorter running distances and simplified 'yes/no' only calls for students building confidence with the running/calling sequence.",
  "skillBreakdown": [
   {
    "step": "Call clearly ('yes', 'no', 'wait') and early.",
    "why": "Clear, early calls prevent run-outs from confusion between batters."
   },
   {
    "step": "Run in a straight line and touch the crease with the bat.",
    "why": "This is required to complete a legal run safely."
   },
   {
    "step": "Back up down the pitch as the bowler releases the ball.",
    "why": "Backing up gives you a head start if a run is called."
   }
  ]
 },
 {
  "n": 9,
  "block": 2,
  "title": "Field It, Fire It",
  "focus": "Combining fielding and throwing to a target",
  "walt": "We are learning to combine a clean field with an accurate throw to a target in one sequence.",
  "wilf": [
   "I can field the ball cleanly and immediately set up to throw",
   "I can throw accurately to a stump/target without pausing too long"
  ],
  "nzc": "Strand B · Thinking",
  "value": "Aroha",
  "valueText": "Enjoying the game and celebrating good fielding sequences from teammates, not just wickets or big hits.",
  "equipment": "Soft/modified balls, cones, stumps/markers",
  "safety": "Standard field safety; clear throwing lanes toward targets",
  "games": [
   {
    "name": "Field-Turn-Throw Circuit",
    "desc": "Individual circuit fielding a rolled/thrown ball, turning, and throwing at a target stump, timed for personal best.",
    "coach": "Keep the sequence flowing — field, turn, throw as one motion.",
    "easier": "Simplify the circuit, closer target.",
    "harder": "Add a second fielding rep before throwing.",
    "chaos": "Beat the clock",
    "setup": "Individual stations spread apart, each with a ball rolled or thrown from about 5m away toward a target stump/cone a further 5-6m beyond the fielder.",
    "howTo": [
     "Demonstrate the sequence first: field the ball cleanly, turn toward the target in the same motion, and throw — one flowing action rather than three separate stops.",
     "A partner or the coach rolls/throws the ball to the fielder, who fields, turns, and throws at the target, timed from gather to release.",
     "Students try to beat their own previous time on each repeat rather than compare directly with others.",
     "Repeat several times, resetting to the start position each time.",
     "Coach the key message: keep the sequence flowing — field, turn, throw as one motion.",
     "Easier: simplify to a shorter, more direct circuit with a closer target. Harder: add a second fielding rep before the throw."
    ]
   },
   {
    "name": "Race the Runner",
    "desc": "A fielder fields a ball and throws at the stumps while a 'batter' runs between wickets — fielding team scores if the throw beats the runner.",
    "coach": "Decide quickly, don't hesitate over a perfect throw.",
    "easier": "Runner starts with a head start disadvantage (slower).",
    "harder": "Even race.",
    "chaos": "Added pressure, beat the clock",
    "setup": "Set up a fielder about 5-6m from the stumps, with a 'batter' who runs between two creases roughly 10m apart. One ball, cones for creases.",
    "howTo": [
     "A ball is rolled or hit toward the fielder at the same moment the batter sets off running.",
     "The fielder must field cleanly and throw quickly at the stumps to try to beat the runner reaching the far crease.",
     "The fielding team scores a point if the throw beats the runner; the batter scores a point if they make it safely.",
     "Rotate fielder and runner regularly so everyone experiences both roles.",
     "Coach the key message: decide quickly, don't hesitate over a perfect throw.",
     "Easier: give the runner a head-start disadvantage (starts a beat late or has to run further). Harder: run it as an even race with no head start."
    ]
   },
   {
    "name": "Combo Points Challenge",
    "desc": "Small games where bonus points are awarded any time a team completes a genuine field-then-accurate-throw sequence, even if the batter is safe.",
    "coach": "Look for the combination, not just the outcome.",
    "easier": "Bigger space/more time.",
    "harder": "Smaller space.",
    "chaos": "Bonus objectives",
    "setup": "Set up a small fielding game across a modest area (roughly 15m x 15m) with 4-5 fielders and a feeder hitting or rolling balls into play.",
    "howTo": [
     "Explain the bonus: any time a fielder completes a genuine field-then-accurate-throw sequence to the target, the team earns a bonus point — even if a batter running isn't actually put out.",
     "The feeder sends balls into different parts of the field for fielders to react to.",
     "After each play, the coach calls out whether a bonus combo was completed and awards the point.",
     "Rotate the feeder and fielding positions regularly.",
     "Coach the key message: look for the combination, not just the outcome.",
     "Easier: more space and time to react. Harder: smaller space, forcing quicker decisions."
    ]
   }
  ],
  "big": {
   "name": "Small-Sided Pairs Cricket — Combo Bonus",
   "desc": "Pairs cricket game where any fielding sequence that includes a clean gather and an accurate throw to the stumps in the same move earns bonus recognition, whether or not the batter is out.",
   "setup": "Set up a small-sided pairs cricket game with stumps, junior bats, and 4-5 fielders across a modest area (roughly 20m x 20m). Soft/modified balls throughout.",
   "howTo": [
    "Play pairs cricket as normal, with the fielding team specifically aiming for the field-turn-throw sequence from today whenever a ball comes to them.",
    "Any time a fielder completes a clean gather and an accurate throw to the stumps in one continuous move, award bonus recognition — call it out loud regardless of whether the batter was actually given out.",
    "Keep normal batting/running scoring running alongside the bonus recognition so both sides of the game matter.",
    "Rotate batting, bowling, and fielding roles every few overs.",
    "Coach the key message: a clean field-and-throw combo is worth celebrating on its own, not just when it results in a wicket.",
    "Easier: smaller field with fielders closer to the stumps. Harder: fuller field with longer throws required."
   ]
  },
  "discussion": [
   "What combination of fielding and throwing worked best for you today?",
   "How did you decide how quickly to release your throw?",
   "What was a great fielding combination you saw a teammate do?"
  ],
  "lookfors": [
   "Links fielding and throwing smoothly, minimal pause between them",
   "Throws with purpose at the target, not just anywhere",
   "Reacts to the game situation (how urgent the throw is)"
  ],
  "inclusion": "Allow extra time in the circuit and race-the-runner games for students still building confidence linking the two skills; fluency over speed at this stage.",
  "skillBreakdown": [
   {
    "step": "Gather the ball cleanly first, then turn toward the target.",
    "why": "Rushing the turn before gathering fully often causes a fumble."
   },
   {
    "step": "Throw in one smooth motion straight after gathering.",
    "why": "A continuous action is faster and more accurate than separate, stop-start steps."
   },
   {
    "step": "Call 'mine!' early when approaching a shared ball.",
    "why": "Prevents collisions and confusion with a nearby teammate."
   }
  ]
 },
 {
  "n": 10,
  "block": 2,
  "title": "Let It Go",
  "focus": "Bowling — basic run-up and delivery, safe technique",
  "walt": "We are learning a safe, correct bowling action — a short run-up and a straight-arm delivery.",
  "wilf": [
   "I can bowl with a straight arm, not a throwing/jerking action",
   "I can use a short, controlled run-up before releasing the ball"
  ],
  "nzc": "Strand B · Managing self",
  "value": "Mōhio",
  "valueText": "Understanding your own body and movement — building a bowling action that's safe and repeatable, not just fast.",
  "equipment": "Soft/modified balls, cones marking a short run-up, stumps/markers",
  "safety": "Straight-arm action only (no throwing action) to protect the elbow/shoulder; check spacing so no one bowls toward another group; safe run-up lanes",
  "games": [
   {
    "name": "Straight Arm Shadow Bowl",
    "desc": "Individual practice of the bowling arm action without a ball, focusing on a straight arm from a short run-up.",
    "coach": "Keep the arm straight as it comes over — no bend at the elbow.",
    "easier": "Slower, walked-through action.",
    "harder": "Full-speed action from a run-up.",
    "chaos": "Random constraint calls",
    "setup": "Students spread out individually with about 3m of arm-swing space each, no ball needed, facing the same direction.",
    "howTo": [
     "Demonstrate the straight-arm bowling action slowly: arm stays straight (no bend at the elbow) as it comes over the top, unlike a throwing action.",
     "Students shadow the action slowly without a ball, checking their own arm stays straight throughout.",
     "Walk around and give individual feedback, watching specifically for elbow bend which is a safety issue as well as a technique one.",
     "Once the slow action looks safe and straight, students can try it a little faster from a standing position.",
     "Coach the key message: keep the arm straight as it comes over — no bend at the elbow.",
     "Easier: a slower, walked-through action broken into stages. Harder: the full-speed action performed from a short run-up."
    ]
   },
   {
    "name": "Short Run-Up Delivery",
    "desc": "Students bowl from a short, marked run-up at a simple target (a hoop or cone) focusing on technique over speed.",
    "coach": "Controlled run-up, balanced delivery stride, straight arm release.",
    "easier": "No run-up, bowl from a standing position.",
    "harder": "Full short run-up with delivery stride.",
    "chaos": "Scoring streaks",
    "setup": "Mark a short run-up lane (about 3-4m) with cones for each bowler, aiming at a simple target (a hoop or cone) roughly 5-6m from the release point. Soft/modified balls, spacing so no one bowls toward another group.",
    "howTo": [
     "Demonstrate the full short sequence: a controlled run-up, a balanced delivery stride, and a straight-arm release toward the target.",
     "Students bowl one at a time from their run-up lane, focusing on technique over speed or bounce power.",
     "After each ball, briefly note whether the arm stayed straight and the stride was balanced, more than whether it hit the target.",
     "Rotate bowlers through so everyone gets several deliveries, retrieving balls safely between turns.",
     "Coach the key message: controlled run-up, balanced delivery stride, straight arm release.",
     "Easier: bowl from a standing position with no run-up. Harder: use the full short run-up with a delivery stride."
    ]
   },
   {
    "name": "Technique Check Rotation",
    "desc": "Small groups rotate through a bowling station where a partner watches and gives one piece of feedback on the arm action each turn.",
    "coach": "Give one specific, kind piece of feedback each time.",
    "easier": "Coach/teacher gives the feedback.",
    "harder": "Students give each other feedback.",
    "chaos": "Role rotation",
    "setup": "Small groups rotate through a bowling station with a short run-up lane and target, one partner watching from the side at a safe distance to observe the arm action.",
    "howTo": [
     "One student bowls while a partner stands to the side (not in the line of the ball) specifically watching the arm action.",
     "After each ball, the watching partner gives one specific, kind piece of feedback — for example, 'your arm stayed straight' or 'try to keep your elbow locked a bit more.'",
     "Bowler and watcher swap roles every few deliveries.",
     "Rotate through the group so everyone gets watched and gives feedback.",
     "Coach the key message: give one specific, kind piece of feedback each time.",
     "Easier: the coach or teacher gives the feedback instead of a peer. Harder: students give each other feedback independently."
    ]
   }
  ],
  "big": {
   "name": "Bowl to the Target Game",
   "desc": "Small-sided game where bowlers deliver to a batter (or simply to the stumps if no batter yet) with all deliveries checked for safe, straight-arm technique before any accuracy is scored.",
   "setup": "Set up a small bowling station aimed at a batter (or directly at the stumps if no batter is involved yet), with stumps/markers as the target roughly 6-8m from the bowler. Soft/modified balls.",
   "howTo": [
    "Bowlers deliver from their short run-up, aiming at the batter or stumps as appropriate.",
    "Before any delivery is scored for accuracy, the coach or a nominated checker confirms the arm action was safe and straight — an unsafe action doesn't count even if it's accurate.",
    "Once technique is confirmed safe, track accuracy (hitting the stumps or a good target zone) as a secondary score.",
    "Rotate bowlers regularly so everyone gets several checked deliveries.",
    "Coach the key message: safe technique always comes first — accuracy only counts once the action is safe.",
    "Easier: no batter yet, bowling straight at the stumps. Harder: bowl to a batter, adding a live decision element."
   ]
  },
  "discussion": [
   "What did a safe, straight-arm bowling action feel like today?",
   "Why does technique matter more than speed at this stage?",
   "What's one thing you'll keep working on with your bowling action?"
  ],
  "lookfors": [
   "Straight arm through the delivery, no throwing action",
   "Short, controlled run-up",
   "Balanced delivery stride at the point of release"
  ],
  "inclusion": "Allow bowling from a standing position (no run-up) for students still building the action, adding a short run-up once the arm technique is safe and consistent.",
  "skillBreakdown": [
   {
    "step": "Use a consistent, controlled run-up every time.",
    "why": "Consistency in your approach leads to a more repeatable delivery."
   },
   {
    "step": "Keep the bowling arm straight through the delivery.",
    "why": "This is both the safe technique and the legal bowling action."
   },
   {
    "step": "Follow through safely away from the pitch after release.",
    "why": "Protects both the bowler and other players from collisions."
   }
  ]
 },
 {
  "n": 11,
  "block": 3,
  "title": "On the Money",
  "focus": "Bowling — accuracy to a target",
  "walt": "We are learning to bowl accurately at a target, building on our safe technique.",
  "wilf": [
   "I can land the ball on or near a target area most of the time",
   "I can adjust my aim based on where my last ball landed"
  ],
  "nzc": "Strand B · Managing self",
  "value": "Manaaki",
  "valueText": "Practising faithfully, with effort and focus, even when accuracy doesn't come immediately — bowling well takes real repetition.",
  "equipment": "Soft/modified balls, cones/target zones, stumps/markers",
  "safety": "Same safe straight-arm technique requirements as Lesson 10; clear bowling lanes",
  "games": [
   {
    "name": "Target Zone Bowling",
    "desc": "Students bowl at a marked target zone (e.g. a hoop around a good length), scoring a point for each ball landing inside it.",
    "coach": "Use the same run-up and arm action every time — consistency builds accuracy.",
    "easier": "Bigger target zone, closer.",
    "harder": "Smaller target zone, further.",
    "chaos": "Scoring streaks",
    "setup": "Bowlers use their short run-up lane from Lesson 10, bowling at a marked target zone (a hoop laid around a 'good length' spot roughly 5-6m away). Soft/modified balls, stumps/markers optional behind the zone.",
    "howTo": [
     "Remind students of the straight-arm technique before starting, since accuracy work only counts with safe technique.",
     "Bowlers deliver one at a time from their run-up, aiming to land the ball inside the marked zone.",
     "Score one point for every ball that lands inside the hoop, kept as a running personal or pair total.",
     "Rotate bowlers through steadily so everyone gets frequent deliveries.",
     "Coach the key message: use the same run-up and arm action every time — consistency builds accuracy.",
     "Easier: bigger target zone placed closer. Harder: smaller target zone placed further away."
    ]
   },
   {
    "name": "Adjust & Aim",
    "desc": "After each ball, students note where it landed and adjust their next delivery accordingly, with a partner giving feedback.",
    "coach": "Small adjustments — don't change everything after one ball.",
    "easier": "Partner tells them exactly what to adjust.",
    "harder": "Students self-correct without help.",
    "chaos": "Random constraint calls",
    "setup": "Pairs share a bowling lane and target zone, with one bowling and one watching where each ball lands to give feedback. Soft/modified balls.",
    "howTo": [
     "The bowler delivers a ball; the partner notes exactly where it landed relative to the target zone (short, long, left, right).",
     "Based on that feedback, the bowler makes a small adjustment to their next delivery — for example, a slightly shorter run-up or a small change in release point.",
     "Continue through several deliveries, adjusting each time based on the previous result.",
     "Swap bowler and watching-feedback roles halfway through.",
     "Coach the key message: small adjustments — don't change everything after one ball.",
     "Easier: the partner tells the bowler exactly what to adjust. Harder: the bowler watches their own result and self-corrects without help."
    ]
   },
   {
    "name": "Bowling Streak Challenge",
    "desc": "Small groups rotate through a bowling station, tracking consecutive accurate deliveries as a team streak.",
    "coach": "Reset your focus fully after every ball, good or bad.",
    "easier": "Bigger target, more attempts.",
    "harder": "Smaller target, fewer attempts.",
    "chaos": "Beat the clock, bonus objectives",
    "setup": "Small groups rotate through a shared bowling station with a target zone, tracking a team streak of consecutive accurate deliveries. Soft/modified balls.",
    "howTo": [
     "Explain the streak: the group counts consecutive accurate deliveries (landing in the zone) across all members bowling in turn.",
     "If a ball misses the zone, the streak resets to zero and the count restarts from the next delivery.",
     "Each student bowls one ball at a time before rotating to the next bowler in the group.",
     "Keep the running streak count visible or called out loudly so the group stays engaged.",
     "Coach the key message: reset your focus fully after every ball, good or bad.",
     "Easier: bigger target with more attempts allowed per turn. Harder: smaller target with only one attempt per turn."
    ]
   }
  ],
  "big": {
   "name": "Bowl-Off Mini-Game",
   "desc": "Small-sided game where bowlers take turns bowling at the stumps/target with a simple batter or fielder in place, coach highlights accuracy and consistency as much as wickets/dismissals.",
   "setup": "Set up a small-sided bowling game with a simple batter or fielder in place at the stumps, roughly 6-8m from the bowling run-up. Soft/modified balls, stumps/markers.",
   "howTo": [
    "Bowlers take turns bowling at the stumps/target with a batter or fielder present to add a live element.",
    "The coach highlights accuracy and consistency across a bowler's overs, not just whether a wicket/dismissal happens.",
    "Call out specifically when a bowler lands several deliveries in a row in a good area, even if none result in a wicket.",
    "Rotate bowlers and the batter/fielder role every few deliveries so everyone gets a turn.",
    "Coach the key message: consistency is the win today — a string of good-length balls matters as much as a wicket.",
    "Easier: no batter, bowling straight at the stumps only. Harder: bowl to a batter who is actively trying to score."
   ]
  },
  "discussion": [
   "What helped your bowling accuracy improve today?",
   "How did you adjust your aim after a ball didn't land where you wanted?",
   "What does 'consistent' mean for a bowler, and why does it matter?"
  ],
  "lookfors": [
   "Uses a repeatable run-up and action each ball",
   "Lands the ball on or near the target area regularly",
   "Makes small adjustments based on the previous delivery"
  ],
  "inclusion": "Use a bigger target zone and closer distance for students building bowling accuracy; success is measured by consistency of technique, not just hitting the target.",
  "skillBreakdown": [
   {
    "step": "Pick a consistent release point in your action.",
    "why": "A variable release point is the main cause of inaccurate bowling."
   },
   {
    "step": "Aim for a specific target zone — line and length — not just 'at the batter'.",
    "why": "A specific target gives you something concrete to repeat and improve."
   },
   {
    "step": "Follow through in the same direction as your target.",
    "why": "Keeps your whole action aligned with accuracy."
   }
  ]
 },
 {
  "n": 12,
  "block": 3,
  "title": "Behind the Stumps",
  "focus": "Wicketkeeping basics",
  "walt": "We are learning the basics of wicketkeeping — a ready stance and safe handling behind the stumps.",
  "wilf": [
   "I can take a low, balanced stance behind the stumps",
   "I can gather the ball safely with soft hands"
  ],
  "nzc": "Strand B · Managing self",
  "value": "Pānga",
  "valueText": "The wicketkeeper has a unique impact on the whole team's fielding effort, even without the ball coming to them every time.",
  "equipment": "Soft/modified balls, stumps/markers, (optional) wicketkeeping gloves if available",
  "safety": "Use only soft/modified balls for keeping practice; keeper stays a safe distance back from the stumps until confident and comfortable with the role",
  "games": [
   {
    "name": "Ready Stance Practice",
    "desc": "Students practise a low, balanced wicketkeeping stance behind the stumps, receiving gentle underarm rolls/throws.",
    "coach": "Stay low and balanced, hands ready and relaxed.",
    "easier": "Slower, closer deliveries.",
    "harder": "Faster, varied-height deliveries.",
    "chaos": "Random constraint calls",
    "setup": "Individual stations behind a set of stumps, each student a safe distance back (about 2-3m) until confident, facing a partner who delivers gentle underarm rolls/throws. Soft/modified balls.",
    "howTo": [
     "Demonstrate the keeping stance: low and balanced, knees bent, hands relaxed and ready in front of the body.",
     "The partner rolls or gently throws the ball toward the stumps while the student practises holding the ready stance and receiving it.",
     "After each rep, reset to the ready stance before the next delivery rather than staying crouched the whole time.",
     "Swap keeper and feeder roles every 6-8 deliveries.",
     "Coach the key message: stay low and balanced, hands ready and relaxed.",
     "Easier: slower, closer deliveries. Harder: faster deliveries at varied heights."
    ]
   },
   {
    "name": "Gather & Return",
    "desc": "Keeper gathers a ball (rolled or gently thrown) and quickly returns it to a target, practising the full sequence.",
    "coach": "Gather with soft hands first, then think about the return.",
    "easier": "Simplify to gather only.",
    "harder": "Add a quick, accurate return throw.",
    "chaos": "Beat the clock",
    "setup": "Pairs with a keeper behind the stumps and a feeder rolling or gently throwing the ball, a target a few metres away for the return throw. Soft/modified balls.",
    "howTo": [
     "The feeder sends a ball toward the keeper, who gathers it with soft hands first, prioritising a clean take over a rushed one.",
     "Once gathered cleanly, the keeper turns and returns the ball to a target (a cone or the feeder's hands) with a quick, accurate throw.",
     "Repeat several times, resetting the ready stance between each rep.",
     "Swap keeper and feeder roles halfway through.",
     "Coach the key message: gather with soft hands first, then think about the return.",
     "Easier: simplify to gathering only, with no return throw required yet. Harder: add a quick, accurate return throw after every gather."
    ]
   },
   {
    "name": "Keeper Rotation Circuit",
    "desc": "Small groups rotate through the keeping role at a station facing gentle deliveries, everyone experiencing the position.",
    "coach": "Focus on watching the ball all the way in, every single time.",
    "easier": "Very gentle, predictable deliveries.",
    "harder": "Varied deliveries.",
    "chaos": "Role rotation",
    "setup": "Small groups rotate through a keeping station behind the stumps, one student keeping while others take turns feeding gentle deliveries. Soft/modified balls.",
    "howTo": [
     "Explain that everyone in the group will get a turn as keeper so the whole group experiences the position.",
     "The current keeper faces a series of gentle deliveries from rotating feeders, focusing on watching the ball all the way in.",
     "After a set number of deliveries (e.g. 6), rotate to the next student as keeper.",
     "Continue until every group member has had a turn behind the stumps.",
     "Coach the key message: focus on watching the ball all the way in, every single time.",
     "Easier: very gentle, predictable deliveries for every keeper. Harder: vary the deliveries once keepers are comfortable."
    ]
   }
  ],
  "big": {
   "name": "Small-Sided Game — Everyone Keeps",
   "desc": "Small-sided pairs cricket game with rotating wicketkeepers (swap every few minutes) so every student experiences the position; coach reinforces how the keeper supports the whole fielding effort.",
   "setup": "Set up a small-sided pairs cricket game with stumps, junior bats, and a wicketkeeper position behind the stumps, plus 3-4 other fielders. Soft/modified balls.",
   "howTo": [
    "Play pairs cricket as normal, with a wicketkeeper stationed behind the stumps for every delivery.",
    "Swap the wicketkeeper role every few minutes (or every over) so every student experiences the position during the game.",
    "The coach reinforces how the keeper supports the whole fielding effort — for example, backing up throws and gathering balls that get past the batter.",
    "Continue normal batting, bowling, and fielding scoring alongside the keeper rotation.",
    "Coach the key message: the keeper is part of the fielding team, not a separate role — everyone should experience it.",
    "Easier: keeper stands further back with gentler deliveries. Harder: keeper stands in a more standard position with full-pace deliveries."
   ]
  },
  "discussion": [
   "What did you notice about the wicketkeeping stance today?",
   "What's tricky about keeping that you didn't expect?",
   "How does a good keeper help the rest of the fielding team?"
  ],
  "lookfors": [
   "Takes a low, balanced ready stance",
   "Uses soft hands to gather the ball safely",
   "Stays focused and watches the ball throughout"
  ],
  "inclusion": "Rotate wicketkeeping so no single student is 'stuck' in the role; use extra-soft balls and closer distances for any student anxious about the position.",
  "skillBreakdown": [
   {
    "step": "Stay low in a balanced, ready crouch behind the stumps.",
    "why": "A ready position lets you react quickly to any delivery."
   },
   {
    "step": "Watch the ball all the way from the bowler's hand.",
    "why": "Losing sight of the ball early is the main cause of missed takes."
   },
   {
    "step": "Move your gloves to the ball, not just wait for it to arrive.",
    "why": "Active hands catch more cleanly than passive ones."
   }
  ]
 },
 {
  "n": 13,
  "block": 3,
  "title": "Read the Gaps",
  "focus": "Reading the game — where to hit and where to field",
  "walt": "We are learning to read the field to decide where to hit as a batter, or where to position as a fielder.",
  "wilf": [
   "I can spot a gap in the field to aim my hit toward",
   "I can position myself in the field based on where the batter is likely to hit"
  ],
  "nzc": "Strand B · Thinking",
  "value": "Mōhio",
  "valueText": "Understanding the bigger picture of the game — reading the whole field, not just the ball in front of you.",
  "equipment": "Soft/modified balls, junior bats, cones marking field positions",
  "safety": "Standard field safety with bats and balls in play simultaneously",
  "games": [
   {
    "name": "Spot the Gap",
    "desc": "Batters look at a set fielding formation (cones marking fielders) and call out where the biggest gap is before hitting off a tee.",
    "coach": "Look at the whole field, not just straight ahead.",
    "easier": "Obvious, exaggerated gap.",
    "harder": "Subtle, evenly-spread field.",
    "chaos": "Random constraint calls",
    "setup": "Individual batting station with a tee, junior bat, and cones set up around the hitting area to represent a fielding formation with one obvious gap. Soft/modified balls.",
    "howTo": [
     "Set the cone 'fielders' in a formation with a clear gap before each batter's turn.",
     "The batter looks at the formation and calls out loud where they think the biggest gap is before hitting off the tee.",
     "The batter then hits, aiming toward the gap they called.",
     "Reset the field (moving cones slightly) between turns so batters keep reading fresh formations.",
     "Coach the key message: look at the whole field, not just straight ahead.",
     "Easier: obvious, exaggerated gap. Harder: subtle, evenly-spread field with no obvious gap."
    ]
   },
   {
    "name": "Field the Likely Hit",
    "desc": "Fielders practise reading a batter's stance/setup and positioning themselves where a hit is likely to go, coach confirms good reads.",
    "coach": "Watch the batter's setup for early clues about where they might hit.",
    "easier": "Coach hints at the likely direction.",
    "harder": "Fielders read it independently.",
    "chaos": "Added pressure",
    "setup": "Small groups of fielders spread around a batter who is in their stance (no hit yet), roughly 8-10m radius. No ball needed for this reading exercise.",
    "howTo": [
     "The batter sets up in their normal stance and setup, as if about to hit.",
     "Fielders study the batter's stance and body position for clues about where a hit is likely to go, then quietly move to a position they think covers it.",
     "The coach confirms whether the read looks sound before revealing what the batter was actually thinking.",
     "Rotate the batter and fielders regularly so everyone practises reading a stance.",
     "Coach the key message: watch the batter's setup for early clues about where they might hit.",
     "Easier: the coach gives a hint about the likely direction. Harder: fielders read the setup completely independently."
    ]
   },
   {
    "name": "Gap-Hitting Challenge",
    "desc": "Batters score bonus points for placing a hit through a called gap rather than just making contact.",
    "coach": "Placement matters as much as power here.",
    "easier": "Bigger gaps, more of them.",
    "harder": "Smaller, more precise gaps.",
    "chaos": "Bonus objectives",
    "setup": "Individual or pairs batting station with a tee or soft toss, cones marking a fielding formation with clear gaps. Soft/modified balls, junior bats.",
    "howTo": [
     "Set a fielding formation using cones before each batter's turn, with the gaps clearly visible.",
     "The batter calls a target gap, then hits, scoring a bonus point for placing the ball through the called gap rather than just making clean contact.",
     "A clean hit that misses the called gap still counts as contact but doesn't earn the placement bonus.",
     "Rotate turns and reset the field between batters.",
     "Coach the key message: placement matters as much as power here.",
     "Easier: bigger gaps, more of them available. Harder: smaller, more precise gaps to aim for."
    ]
   }
  ],
  "big": {
   "name": "Small-Sided Game — Placement Focus",
   "desc": "Pairs cricket game where the coach specifically celebrates batters who place a hit into space and fielders who correctly read and cover the likely hitting zone.",
   "setup": "Set up a small-sided pairs cricket game with stumps, junior bats, and 4-5 fielders positioned across a modest area (roughly 20m x 20m). Soft/modified balls.",
   "howTo": [
    "Play pairs cricket as normal, with fielders positioned in a realistic spread across the field.",
    "The coach specifically celebrates batters who place a hit into open space to beat the field, and fielders who correctly read and cover the likely hitting zone before the ball is even hit.",
    "Call out these moments as they happen so both batting and fielding reads are visibly valued, not just runs or wickets.",
    "Rotate batting pairs, bowlers, and fielding positions every few overs.",
    "Coach the key message: reading the game — where to hit, where to field — is a skill worth celebrating on its own.",
    "Easier: fewer fielders with bigger obvious gaps. Harder: a fuller field where gaps are harder to spot and cover."
   ]
  },
  "discussion": [
   "How did you decide where to hit (or where to field) today?",
   "What helped you read the game rather than just reacting?",
   "What happens when a batter or fielder doesn't read the field?"
  ],
  "lookfors": [
   "Scans the field before committing to a hit or fielding position",
   "Places a hit with purpose rather than just making contact",
   "Positions in the field based on reading the batter, not standing still"
  ],
  "inclusion": "Use simplified, exaggerated field setups initially for students building this reading skill, moving to realistic spacing as confidence grows.",
  "skillBreakdown": [
   {
    "step": "Scan the field before committing to a shot or fielding position.",
    "why": "Reading the situation first leads to better decisions than reacting blindly."
   },
   {
    "step": "Look for gaps or overloads in the field placement.",
    "why": "Gaps are the space that batting or fielding decisions should target."
   },
   {
    "step": "Communicate what you see to your teammates.",
    "why": "Shared awareness helps the whole team make better decisions."
   }
  ]
 },
 {
  "n": 14,
  "block": 3,
  "title": "Run or Not?",
  "focus": "Decision-making — run or not?",
  "walt": "We are learning to make a quick, good decision about whether to run after hitting the ball.",
  "wilf": [
   "I can judge how well the ball was fielded to decide run or no run",
   "I can commit fully and communicate my decision to my partner immediately"
  ],
  "nzc": "Strand B · Thinking",
  "value": "Pānga",
  "valueText": "A good running decision has a real impact on your team's score and your partner's safety — thinking ahead matters here.",
  "equipment": "Soft/modified balls, junior bats, stumps/markers, cones for creases",
  "safety": "Standard field safety; clear running lanes, no diving/sliding into creases",
  "games": [
   {
    "name": "Fielded Well or Not?",
    "desc": "Batters hit off a tee/toss and must instantly judge (based on where and how quickly the ball is fielded) whether to call for a run.",
    "coach": "Read the fielder's position and speed the moment you hit, don't wait.",
    "easier": "Fielding deliberately slow/fast to make the decision obvious.",
    "harder": "Fielding varies unpredictably.",
    "chaos": "Random constraint calls",
    "setup": "Individual or pairs batting station with a tee or soft toss, junior bat, and a fielder placed in the hitting area at a distance the coach controls. Soft/modified balls, cones for creases.",
    "howTo": [
     "The batter hits off the tee or toss while a fielder (deliberately positioned well or poorly by the coach) reacts to field it.",
     "The instant the ball is hit, the batter must judge how quickly and cleanly the ball is being fielded and decide whether to call for a run.",
     "The batter calls their decision out loud immediately, then the coach confirms whether it was a sound read.",
     "Rotate batters and fielders regularly, varying the fielding setup each time.",
     "Coach the key message: read the fielder's position and speed the moment you hit, don't wait.",
     "Easier: the coach deliberately fields obviously slow or fast to make the decision clear-cut. Harder: fielding varies unpredictably from hit to hit."
    ]
   },
   {
    "name": "Quick Call Challenge",
    "desc": "Pairs practise making and calling their run decision within a very short time limit after the hit.",
    "coach": "Trust your first read and call it loudly.",
    "easier": "Longer time to decide.",
    "harder": "Very short time to decide.",
    "chaos": "Beat the clock",
    "setup": "Pairs stand ready to run between two creases about 10m apart, with a hit or feed triggering the decision, and a short time limit (a coach count or clap) for the call. Soft/modified balls.",
    "howTo": [
     "After the ball is hit or fielded, the pair has a short, clearly-signalled time limit to make and call their run/no-run decision.",
     "Both partners must respond to whichever call is made within the time limit — hesitation counts as a missed decision.",
     "Repeat several times, keeping the time pressure consistent so students get used to deciding quickly.",
     "Rotate pairs and who calls the decision.",
     "Coach the key message: trust your first read and call it loudly.",
     "Easier: allow a longer time to decide. Harder: shorten the time limit further."
    ]
   },
   {
    "name": "Decision Under Pressure",
    "desc": "Small-sided game where the coach occasionally asks a batter to explain their run/no-run decision straight after making it.",
    "coach": "Be ready to explain your reasoning, not just react.",
    "easier": "Fewer check-ins.",
    "harder": "More frequent check-ins.",
    "chaos": "Added pressure",
    "setup": "Set up a small-sided game across a modest area with stumps, bats, and 4-5 fielders. Soft/modified balls.",
    "howTo": [
     "Play the small-sided game as normal, with batters making run/no-run decisions on every hit.",
     "Occasionally — not every time — the coach pauses play right after a decision and asks the batter to briefly explain their reasoning.",
     "Accept any reasonable explanation, even if the outcome wasn't perfect — the goal is thinking it through, not being right every time.",
     "Continue play after each brief check-in, rotating roles regularly.",
     "Coach the key message: be ready to explain your reasoning, not just react.",
     "Easier: check in less frequently. Harder: check in more often, keeping decision-making front of mind."
    ]
   }
  ],
  "big": {
   "name": "Pairs Cricket — Decision Focus",
   "desc": "Small-sided pairs cricket game where the coach highlights good running decisions (even when the outcome wasn't perfect) as much as runs scored.",
   "setup": "Set up a small-sided pairs cricket game with stumps, junior bats, and 4-5 fielders across a modest area (roughly 20m x 20m). Soft/modified balls.",
   "howTo": [
    "Play pairs cricket as normal, with running decisions happening naturally on every hit.",
    "The coach highlights good running decisions specifically — including ones where the batter read the situation well even if the outcome (run out, no run gained) wasn't ideal.",
    "Call these moments out separately from runs actually scored, so decision quality is visibly valued on its own.",
    "Rotate batting pairs, bowlers, and fielders every few overs.",
    "Coach the key message: a good decision is a good decision, whatever the outcome — that's what we're building today.",
    "Easier: slower fielding gives batters more time to decide. Harder: sharper fielding forces tighter, faster decisions."
   ]
  },
  "discussion": [
   "How did you decide whether to run today?",
   "What helped you commit to your decision quickly?",
   "Can you describe a moment your decision worked out well?"
  ],
  "lookfors": [
   "Reads the fielding situation quickly after the hit",
   "Commits fully and calls clearly once a decision is made",
   "Can explain their reasoning when asked"
  ],
  "inclusion": "Allow a brief 'freeze and decide' pause for students still building confidence with fast decision-making, gradually removing it as confidence grows.",
  "skillBreakdown": [
   {
    "step": "Watch where the ball is fielded before deciding to run.",
    "why": "A rushed decision without checking the fielder's position often ends in a run-out."
   },
   {
    "step": "Communicate clearly and early with your batting partner.",
    "why": "Both batters need to agree before committing to a run."
   },
   {
    "step": "Hold your ground if the fielding team has the ball under control.",
    "why": "A cautious 'no' is often safer than a risky run."
   }
  ]
 },
 {
  "n": 15,
  "block": 3,
  "title": "Set the Field",
  "focus": "Fielding placements & team shape",
  "walt": "We are learning to position a fielding team sensibly across the field to cover likely hitting areas.",
  "wilf": [
   "I can position myself in a fielding role that covers space, not just stand near a friend",
   "I can adjust my position as the batter or game situation changes"
  ],
  "nzc": "Strand B, C · Relating to others",
  "value": "Manaaki",
  "valueText": "Serving the team through a fielding position that isn't glamorous but is genuinely needed — good field placement is a gift to the whole team.",
  "equipment": "Soft/modified balls, junior bats, cones marking field zones",
  "safety": "Standard field safety with bats and balls in play simultaneously",
  "games": [
   {
    "name": "Cover the Zones",
    "desc": "Small groups position themselves across marked field zones, adjusting as a coach or captain calls changes, no ball yet.",
    "coach": "Look at the whole field shape, not just your own spot.",
    "easier": "Fewer zones, obvious gaps.",
    "harder": "More zones, subtle adjustments needed.",
    "chaos": "Random constraint calls",
    "setup": "Small groups of 5-6 stand across marked field zones (cones dividing a rough semicircle into 5-6 sections), no ball needed for this positioning exercise.",
    "howTo": [
     "Mark out the field zones with cones before starting, showing the group the full layout.",
     "Students position themselves one per zone, then the coach or a caller announces a change (e.g. 'shift zones one right').",
     "The whole group adjusts their positions together, aiming to keep every zone covered with no gaps.",
     "Repeat with several different change calls, checking as a group whether zones stayed covered.",
     "Coach the key message: look at the whole field shape, not just your own spot.",
     "Easier: fewer zones with obvious gaps to notice. Harder: more zones with subtler adjustments needed."
    ]
   },
   {
    "name": "Captain's Field Set",
    "desc": "A rotating 'captain' sets the fielding positions for their team before each short game segment, explaining their thinking briefly.",
    "coach": "Base your field setting on where the batter is likely to hit.",
    "easier": "Coach supports the captain's choices.",
    "harder": "Captain sets the field independently.",
    "chaos": "Role rotation",
    "setup": "Small groups of 5-6 with a rotating 'captain' role, cones to mark field positions, set up before each short game segment. No ball needed for the setting phase.",
    "howTo": [
     "One student is nominated captain and sets the fielding positions for their team using cones, explaining briefly why each fielder is placed there.",
     "The rest of the team takes up the positions the captain has set.",
     "Play a short game segment with that field set, then reset and rotate to a new captain for the next segment.",
     "Continue rotating captains so several students get a turn setting the field.",
     "Coach the key message: base your field setting on where the batter is likely to hit.",
     "Easier: the coach supports and guides the captain's choices. Harder: the captain sets the field completely independently."
    ]
   },
   {
    "name": "Gap Coverage Challenge",
    "desc": "Small-sided game where the fielding team earns bonus points for having no obvious gap left uncovered when a hit goes through.",
    "coach": "Talk to each other to check the whole field is covered.",
    "easier": "Simpler field, fewer positions.",
    "harder": "Full field, more positions to manage.",
    "chaos": "Bonus objectives",
    "setup": "Set up a small-sided game with stumps, bats, and 4-5 fielders across a modest area, cones marking approximate field zones. Soft/modified balls.",
    "howTo": [
     "Play the small-sided game as normal, with fielders responsible for covering the marked zones.",
     "The fielding team earns a bonus point any time a hit goes through without an obvious gap being left uncovered — judged by the coach.",
     "If a hit does find an obvious gap, briefly pause to discuss as a team how the field shape could adjust next time.",
     "Rotate fielding positions and batters regularly.",
     "Coach the key message: talk to each other to check the whole field is covered.",
     "Easier: a simpler field with fewer positions to manage. Harder: a fuller field with more positions to manage and communicate about."
    ]
   }
  ],
  "big": {
   "name": "Small-Sided Game — Team Shape Focus",
   "desc": "Pairs cricket game where the coach specifically highlights good fielding team shape and communication, in addition to any wickets or stops.",
   "setup": "Set up a small-sided pairs cricket game with stumps, junior bats, and 4-5 fielders across a modest area (roughly 20m x 20m). Soft/modified balls.",
   "howTo": [
    "Play pairs cricket as normal, with the fielding team setting and adjusting their field shape as the game goes on.",
    "The coach specifically highlights good fielding team shape and communication — fielders talking to cover gaps and adjusting between deliveries — in addition to any wickets or stops made.",
    "Call out visible examples of good team shape as they happen so the whole group sees what it looks like in a live game.",
    "Rotate batting pairs, bowlers, and fielders every few overs.",
    "Coach the key message: this is the whole block coming together — reading gaps, backing up, and now setting the field as a team.",
    "Easier: fielders keep the same simple shape throughout. Harder: fielders actively re-set their shape between overs."
   ]
  },
  "discussion": [
   "What did good fielding team shape look like today?",
   "How did you decide where to position yourself?",
   "What happened when the field wasn't well covered?"
  ],
  "lookfors": [
   "Positions to cover space rather than clustering near others",
   "Adjusts position as the batter/game situation changes",
   "Communicates with teammates about field coverage"
  ],
  "inclusion": "Use a simplified field with fewer positions and clear markers for students who find spatial team-shape decisions challenging.",
  "skillBreakdown": [
   {
    "step": "Understand your fielding position's specific job.",
    "why": "Knowing your job means faster reactions when the ball comes your way."
   },
   {
    "step": "Adjust your position slightly based on the batter and situation.",
    "why": "Fielding shape should respond to the game, not stay fixed all match."
   },
   {
    "step": "Communicate with nearby fielders about coverage.",
    "why": "Reduces gaps and overlaps in the team's fielding shape."
   }
  ]
 },
 {
  "n": 16,
  "block": 4,
  "title": "Pairs Play",
  "focus": "Small-sided modified games — pairs cricket",
  "walt": "We are learning to apply our batting, bowling, and fielding skills together in a pairs cricket format.",
  "wilf": [
   "I can use skills from across the unit in a real small-sided game",
   "I can support my batting partner and communicate clearly throughout"
  ],
  "nzc": "Strand B, C · Relating to others",
  "value": "Aroha",
  "valueText": "Working together warmly with a batting or fielding partner — pairs cricket relies on genuine teamwork between just two people.",
  "equipment": "Soft/modified balls, junior bats, stumps/markers, cones",
  "safety": "Standard modified-game safety, soft/modified balls only",
  "games": [
   {
    "name": "Pairs Rules Walkthrough",
    "desc": "In pairs, students walk through the basic pairs cricket format (shared batting, both running, retiring after a set number of runs) at a slow pace to learn the structure.",
    "coach": "Know the format before the pace increases.",
    "easier": "Coach talks through each step.",
    "harder": "Pairs run through independently.",
    "chaos": "n/a",
    "setup": "Whole class or small groups gathered around a set of stumps, junior bats, and soft/modified balls, walking through the format rather than playing at speed.",
    "howTo": [
     "Explain the pairs cricket format step by step: two batters share the batting, both run together, and the pair retires after reaching a set number of runs (e.g. 10 or 20) to let another pair bat.",
     "Walk through a slow-motion example: a hit, a call, a run, and a retirement, pausing to check understanding at each step.",
     "Have a pair try the full sequence themselves at a slow, deliberate pace with the coach narrating each part.",
     "Repeat with a different pair so more than one group tries the walkthrough.",
     "Coach the key message: know the format before the pace increases.",
     "Easier: the coach talks through each step as the pair goes. Harder: pairs run through the format independently, only checking in if unsure."
    ]
   },
   {
    "name": "Mini Pairs Match",
    "desc": "Short pairs cricket matches (a few overs each) between multiple pairs on small stations, applying batting, bowling, and fielding together.",
    "coach": "Communicate constantly with your batting partner.",
    "easier": "More overs, simpler scoring.",
    "harder": "Fewer overs, full scoring rules.",
    "chaos": "Beat the clock",
    "setup": "Set up multiple small stations (2-3, depending on class size), each with stumps, junior bats, and soft/modified balls, running short pairs cricket matches of a few overs each.",
    "howTo": [
     "Split the class into pairs and small fielding teams, sending pairs to different stations to play short matches simultaneously.",
     "Play a set number of overs (e.g. 3-4) per match, applying batting, bowling, and fielding skills together for the first time this block.",
     "Batting pairs communicate constantly, calling runs clearly as practised earlier in the unit.",
     "Rotate pairs and fielding teams between stations after each mini match so different groups play each other.",
     "Coach the key message: communicate constantly with your batting partner.",
     "Easier: more overs per match with simpler scoring (just count runs). Harder: fewer overs with full scoring rules applied."
    ]
   },
   {
    "name": "Skill Spotlight Rotation",
    "desc": "Within the mini matches, the coach calls out a skill focus for a few balls at a time (e.g. 'placement focus,' 'running focus') for players to specifically apply.",
    "coach": "Adapt immediately when a new focus is called.",
    "easier": "Fewer focus changes.",
    "harder": "Frequent focus changes.",
    "chaos": "Random constraint calls",
    "setup": "Within the same mini-match stations from Mini Pairs Match, no extra equipment needed beyond what's already set up.",
    "howTo": [
     "While mini matches continue, the coach periodically calls out a specific skill focus for the next few balls — for example 'placement focus' or 'running focus.'",
     "Players adjust their play immediately to emphasise the called skill without stopping the match.",
     "After a few balls, the coach calls a new focus (or 'free play') and players adapt again.",
     "Continue cycling through different focuses across the remaining match time.",
     "Coach the key message: adapt immediately when a new focus is called.",
     "Easier: fewer focus changes, giving players more time in each one. Harder: frequent focus changes to test quick adaptation."
    ]
   }
  ],
  "big": {
   "name": "Full Pairs Cricket Match",
   "desc": "Multiple pairs play a full, timed pairs cricket match on small stations, rotating batting/bowling/fielding roles — the complete modified format in action.",
   "setup": "Set up multiple small stations across the space, each with stumps, junior bats, soft/modified balls, and enough pairs/fielders for a full timed match. A stopwatch or visible clock for timing.",
   "howTo": [
    "Run full, timed pairs cricket matches at each station simultaneously, using the complete format walked through earlier in the lesson.",
    "Batting, bowling, and fielding roles rotate through the match as pairs retire and new pairs come in.",
    "Keep matches moving at a good pace — remind pairs to call runs clearly and fielders to back each other up, drawing on the whole unit so far.",
    "At the end of the timed period, briefly share how each station's matches went.",
    "Coach the key message: this is the modified format in full action — everything from the unit is in play at once.",
    "Easier: longer time per match with simpler scoring. Harder: shorter, sharper matches with full scoring rules."
   ]
  },
  "discussion": [
   "What did you enjoy about playing a full pairs cricket match today?",
   "How did you and your partner communicate and support each other?",
   "What skill from earlier in the unit did you use most today?"
  ],
  "lookfors": [
   "Applies a range of skills from across the unit",
   "Communicates clearly with their batting/fielding partner",
   "Understands and follows the pairs cricket format"
  ],
  "inclusion": "Simplify the format (fewer overs, generous retiring scores) for classes newer to cricket; increase structure toward the full ANZ Junior Game format as confidence grows.",
  "skillBreakdown": [
   {
    "step": "Apply your batting, bowling, and fielding technique in a real game setting.",
    "why": "This lesson tests the unit's skills together under game conditions."
   },
   {
    "step": "Communicate with your partner throughout.",
    "why": "Pairs cricket relies on constant coordination between batting partners."
   },
   {
    "step": "Make decisions based on the real situation, not a fixed plan.",
    "why": "Reading the game beats sticking rigidly to a plan that doesn't fit."
   }
  ]
 },
 {
  "n": 17,
  "block": 4,
  "title": "Line & Length",
  "focus": "Bowling tactics — line and length concepts",
  "walt": "We are learning simple bowling tactics — choosing a line (direction) and length (distance) to make it harder for a batter.",
  "wilf": [
   "I can choose a consistent line and length for my deliveries",
   "I can adjust my line/length based on how a batter is playing"
  ],
  "nzc": "Strand B · Thinking",
  "value": "Mōhio",
  "valueText": "Understanding your bowling options and making an informed choice, rather than bowling the same way every time without thinking.",
  "equipment": "Soft/modified balls, cones/target zones, stumps/markers",
  "safety": "Same safe technique requirements as earlier bowling lessons",
  "games": [
   {
    "name": "Line Choice Practice",
    "desc": "Bowlers practise aiming deliveries at different lines (toward the stumps, wide of the stumps) using target zones, focusing on choosing deliberately.",
    "coach": "Decide your line before you start your run-up, not mid-delivery.",
    "easier": "Bigger target zones.",
    "harder": "Smaller, more precise zones.",
    "chaos": "Random constraint calls",
    "setup": "Bowlers use their run-up lane, with target zones marked to represent different lines — one toward the stumps, one wide of the stumps — roughly 5-6m from release. Soft/modified balls.",
    "howTo": [
     "Explain the two line options: aiming toward the stumps (attacking the wicket) or wide of the stumps (a different tactical choice).",
     "Before each delivery, the bowler decides and states out loud which line they're going for.",
     "The bowler runs up and delivers, aiming for the chosen line's target zone.",
     "Rotate bowlers through steadily, mixing which line is chosen each time.",
     "Coach the key message: decide your line before you start your run-up, not mid-delivery.",
     "Easier: bigger target zones for each line. Harder: smaller, more precise zones."
    ]
   },
   {
    "name": "Length Ladder",
    "desc": "Bowlers aim for different length zones (short, good length, full) marked on the pitch, scoring points for landing in the called zone.",
    "coach": "A consistent length is more valuable than an occasional perfect one.",
    "easier": "Fewer, bigger length zones.",
    "harder": "More, smaller length zones.",
    "chaos": "Scoring streaks",
    "setup": "Mark 2-3 length zones (short, good length, full) along the pitch using cones or tape, roughly evenly spaced between the bowler and the stumps. Soft/modified balls.",
    "howTo": [
     "Show the three length zones clearly before starting, explaining what 'short,' 'good length,' and 'full' mean in terms of where the ball bounces.",
     "Bowlers deliver one at a time, aiming to land the ball in whichever zone is called before the delivery.",
     "Score a point for each ball landing in the correct called zone.",
     "Rotate bowlers and call a variety of lengths across turns.",
     "Coach the key message: a consistent length is more valuable than an occasional perfect one.",
     "Easier: fewer, bigger length zones. Harder: more, smaller length zones."
    ]
   },
   {
    "name": "Read the Batter, Adjust",
    "desc": "Bowlers face a batter (or simulated batter) and must adjust their line/length based on how the batter is playing, coach discusses the choices afterward.",
    "coach": "Notice what's working and adjust — don't repeat a plan that isn't working.",
    "easier": "Coach suggests adjustments.",
    "harder": "Bowler reads and adjusts independently.",
    "chaos": "Added pressure",
    "setup": "Set up a bowler facing a batter (or a simulated batter using a cone/marker if no batter yet), stumps as the target, roughly 6-8m apart. Soft/modified balls.",
    "howTo": [
     "The bowler delivers a short over of balls to the batter, watching closely how the batter responds to each delivery.",
     "Based on what's working or not working, the bowler adjusts their line and/or length for the next ball.",
     "After the over, the coach discusses with the bowler what they noticed and why they made the adjustments they did.",
     "Rotate to a new bowler and repeat.",
     "Coach the key message: notice what's working and adjust — don't repeat a plan that isn't working.",
     "Easier: the coach suggests adjustments during the over. Harder: the bowler reads and adjusts completely independently."
    ]
   }
  ],
  "big": {
   "name": "Small-Sided Game — Bowling Tactics Focus",
   "desc": "Pairs cricket game where the coach specifically highlights good line/length choices and adjustments, not just wickets taken.",
   "setup": "Set up a small-sided pairs cricket game with stumps, junior bats, and 4-5 fielders across a modest area (roughly 20m x 20m). Soft/modified balls.",
   "howTo": [
    "Play pairs cricket as normal, with bowlers applying line and length choices from today throughout the game.",
    "The coach specifically highlights good line/length choices and in-game adjustments, not just wickets taken.",
    "Call out moments where a bowler visibly changed their plan based on how a batter was playing.",
    "Rotate bowlers, batting pairs, and fielders every few overs.",
    "Coach the key message: smart bowling is about consistent, deliberate choices — celebrate the thinking, not just the results.",
    "Easier: bigger target areas in mind for bowlers, more forgiving batters. Harder: batters actively trying to score, forcing sharper bowling choices."
   ]
  },
  "discussion": [
   "What line and length did you choose today, and why?",
   "How did you adjust your bowling based on what was happening in the game?",
   "What did you notice about the value of consistency versus one great ball?"
  ],
  "lookfors": [
   "Chooses a deliberate line/length before bowling",
   "Shows some consistency across deliveries",
   "Adjusts their approach based on how the batter is playing"
  ],
  "inclusion": "Use simplified, larger target zones for students still building bowling accuracy and consistency, while keeping the decision-making element (choosing a zone) alive.",
  "skillBreakdown": [
   {
    "step": "Choose a consistent line and length to bowl to.",
    "why": "Line and length together create the difficulty for the batter, more than raw pace."
   },
   {
    "step": "Adjust length based on what's troubling the batter.",
    "why": "Tactical bowling responds to what's actually happening in the game."
   },
   {
    "step": "Stay consistent rather than trying something different every ball.",
    "why": "Consistency builds pressure over several balls, not just one."
   }
  ]
 },
 {
  "n": 18,
  "block": 4,
  "title": "Find the Gap, Fill the Gap",
  "focus": "Batting tactics — placement and hitting gaps",
  "walt": "We are learning batting tactics — placing our hits into gaps in the field rather than just hitting hard.",
  "wilf": [
   "I can identify a gap in the field before I hit",
   "I can adjust my shot to place the ball into that gap"
  ],
  "nzc": "Strand B · Thinking",
  "value": "Pānga",
  "valueText": "Thinking ahead about where a hit will have the most impact, rather than just reacting without a plan.",
  "equipment": "Soft/modified balls, junior bats, cones marking field positions",
  "safety": "Standard field safety with bats and balls in play simultaneously",
  "games": [
   {
    "name": "Gap Spotting",
    "desc": "Batters look at a set field (cones marking fielders) and call out the biggest gap before hitting off a tee/toss into it.",
    "coach": "Look at the whole field, decide, then commit to your shot.",
    "easier": "Obvious, exaggerated gaps.",
    "harder": "Subtle, evenly-spread field.",
    "chaos": "Random constraint calls",
    "setup": "Individual batting station with a tee or toss, junior bat, cones marking a set field formation with visible gaps. Soft/modified balls.",
    "howTo": [
     "Set up a cone field formation before each turn, showing a clear gap somewhere in the layout.",
     "The batter looks at the whole field, calls out where they see the biggest gap, then commits to their shot toward it.",
     "The batter hits off the tee or toss, aiming for the gap they called.",
     "Reset the field slightly differently between turns so batters keep reading fresh layouts.",
     "Coach the key message: look at the whole field, decide, then commit to your shot.",
     "Easier: obvious, exaggerated gaps. Harder: a subtle, evenly-spread field."
    ]
   },
   {
    "name": "Placement Points",
    "desc": "Batters score bonus points for placing hits into a called gap rather than just making clean contact.",
    "coach": "Adjust your shot shape/direction to aim for the gap, not just swing the same way every time.",
    "easier": "Bigger gaps, more of them.",
    "harder": "Smaller, more precise gaps.",
    "chaos": "Bonus objectives",
    "setup": "Individual or pairs batting station with a tee or toss, cones marking field zones with defined gaps. Soft/modified balls, junior bats.",
    "howTo": [
     "Set the field formation with cones, showing the gaps clearly.",
     "The batter hits, earning a bonus point specifically for placing the ball into a called gap, on top of any point for clean contact.",
     "If the hit is clean but doesn't find the gap, only the contact point is earned, not the placement bonus.",
     "Rotate turns, resetting the field between batters.",
     "Coach the key message: adjust your shot shape/direction to aim for the gap, not just swing the same way every time.",
     "Easier: bigger gaps, more of them available. Harder: smaller, more precise gaps to aim for."
    ]
   },
   {
    "name": "Field Adjusts, Batter Reads",
    "desc": "The field shifts between hits; batters must re-read the gaps each time before hitting.",
    "coach": "Don't assume the field is the same as last time — check again.",
    "easier": "Field changes are obvious/announced.",
    "harder": "Field changes are subtle.",
    "chaos": "Added pressure",
    "setup": "Individual batting station with cones representing the field, a helper (coach or student) who shifts 1-2 cones between each turn. Soft/modified balls, junior bats.",
    "howTo": [
     "Before each hit, the helper quietly shifts one or two of the cone 'fielders' to a new position, changing where the gaps are.",
     "The batter must look again and re-read the field fresh each time, rather than assuming it's the same as the last turn.",
     "The batter calls the gap they see, then hits toward it.",
     "Repeat several times, shifting the field differently each turn.",
     "Coach the key message: don't assume the field is the same as last time — check again.",
     "Easier: field changes are obvious and announced out loud. Harder: field changes are subtle and unannounced."
    ]
   }
  ],
  "big": {
   "name": "Small-Sided Game — Placement Focus",
   "desc": "Pairs cricket game where the coach specifically celebrates batters who place hits into space to beat the field, alongside runs scored.",
   "setup": "Set up a small-sided pairs cricket game with stumps, junior bats, and 4-5 fielders positioned across a modest area (roughly 20m x 20m). Soft/modified balls.",
   "howTo": [
    "Play pairs cricket as normal, with fielders positioned in a realistic, changing field shape.",
    "The coach specifically celebrates batters who place hits into space to beat the field, in addition to runs scored normally.",
    "Call out these placement moments as they happen, distinguishing a well-placed shot from a lucky one where possible.",
    "Rotate batting pairs, bowlers, and fielders every few overs.",
    "Coach the key message: this brings batting placement and reading the field together — the same skill from both sides of the ball this block.",
    "Easier: fielders stay in a simple, predictable shape. Harder: fielders actively shift positions between deliveries."
   ]
  },
  "discussion": [
   "How did you decide where to place your hits today?",
   "What's the difference between hitting hard and hitting smart?",
   "What did you notice about the field that helped you find a gap?"
  ],
  "lookfors": [
   "Scans the field before committing to a shot",
   "Adjusts shot placement rather than always hitting the same way",
   "Shows awareness of where fielders are positioned"
  ],
  "inclusion": "Use a simplified field with fewer, larger gaps for students building placement awareness, adding complexity as confidence grows.",
  "skillBreakdown": [
   {
    "step": "Scan the field before deciding where to hit.",
    "why": "Placement decisions need information about where fielders are."
   },
   {
    "step": "Adjust your shot slightly to find gaps, not just hit hard.",
    "why": "Smart placement beats power alone for finding boundaries or easy runs."
   },
   {
    "step": "Communicate with your batting partner about running risks after placing a shot.",
    "why": "Placement decisions and running decisions are linked."
   }
  ]
 },
 {
  "n": 19,
  "block": 4,
  "title": "Full Match",
  "focus": "Full small-sided games with tactics focus",
  "walt": "We are learning to apply the whole unit's skills and tactics together in a full small-sided cricket match.",
  "wilf": [
   "I can use skills and tactics from across the unit in a real game",
   "I can adjust my play based on what the game situation calls for"
  ],
  "nzc": "Strands A, B, C · Thinking, Relating to others",
  "value": "Manaaki",
  "valueText": "Serving your team throughout a full match — batting, bowling, and fielding — with faithful effort in whichever role is needed.",
  "equipment": "Soft/modified balls, junior bats, stumps/markers, cones",
  "safety": "Standard full modified-game safety, soft/modified balls only",
  "games": [
   {
    "name": "Skills Reminder Circuit",
    "desc": "Quick-fire stations lightly revisiting throwing, catching, batting, and bowling from across the unit — a refresher, not new teaching.",
    "coach": "Notice how much more natural these feel now compared to early lessons.",
    "easier": "n/a",
    "harder": "n/a",
    "chaos": "Beat the clock",
    "setup": "Set up 4 quick stations (throwing, catching, batting, bowling) around the space, each with the relevant equipment from earlier in the unit, groups rotating through briskly.",
    "howTo": [
     "Explain this is a light refresher, not new teaching — a chance to feel how much more natural these skills are now.",
     "Split the class into small groups and send each group to a different station.",
     "At each station, groups spend a short, fixed time (e.g. 90 seconds) lightly practising that skill before rotating on.",
     "Rotate through all 4 stations so every group touches throwing, catching, batting, and bowling briefly.",
     "Coach the key message: notice how much more natural these feel now compared to early lessons.",
     "Easier: n/a — keep this station relaxed and low-pressure for everyone. Harder: n/a — this is intentionally a light refresher, not a challenge."
    ]
   },
   {
    "name": "Tactics Call-Out",
    "desc": "During small games, the coach periodically calls out a tactical focus (e.g. 'placement focus,' 'line and length focus,' 'running focus') for players to specifically apply.",
    "coach": "Adapt immediately when a new focus is called.",
    "easier": "n/a",
    "harder": "n/a",
    "chaos": "Random constraint calls",
    "setup": "Set up a small-sided game with stumps, bats, and 4-5 fielders across a modest area. Soft/modified balls.",
    "howTo": [
     "Play the small-sided game as normal.",
     "Periodically — every few minutes — the coach calls out a tactical focus from the unit, such as 'placement focus,' 'line and length focus,' or 'running focus.'",
     "Players immediately adjust their play to emphasise the called focus without stopping the game.",
     "Continue cycling through different focuses across the game.",
     "Coach the key message: adapt immediately when a new focus is called.",
     "Easier: n/a — keep focus changes gentle and well-spaced. Harder: n/a — this activity is inherently about quick adaptation for everyone."
    ]
   },
   {
    "name": "Captain's Read",
    "desc": "Each team nominates a rotating captain who reads the game and calls one tactical focus for their team during a short segment.",
    "coach": "Base your call on what you're actually seeing in the game.",
    "easier": "n/a",
    "harder": "n/a",
    "chaos": "Role rotation",
    "setup": "Within the same small-sided game, each team nominates a rotating captain for short segments of play. No extra equipment needed.",
    "howTo": [
     "Each team names a captain for a short segment of the game (a few minutes or one over).",
     "The captain watches how the game is unfolding and calls one tactical focus for their team to apply during that segment — for example, 'let's cover the gaps better.'",
     "The team applies the captain's call during that segment of play.",
     "Rotate the captain role to a new player for the next segment.",
     "Coach the key message: base your call on what you're actually seeing in the game.",
     "Easier: n/a — the coach can prompt captains with a question if they're unsure. Harder: n/a — this role is naturally a stretch for whoever holds it."
    ]
   }
  ],
  "big": {
   "name": "Full Small-Sided Cricket Match",
   "desc": "Multiple small teams play a full, timed modified cricket match (ANZ Junior Game style) with all of the unit's skills and tactics live and relevant — batting, bowling, fielding, and running all in play.",
   "setup": "Set up a full, timed small-sided cricket match (ANZ Junior Game style) across a suitably sized area, with stumps, junior bats, soft/modified balls, and enough players for full batting, bowling, and fielding teams.",
   "howTo": [
    "Play a complete, timed match using the modified format, rotating batting, bowling, and fielding roles as the game progresses.",
    "Encourage players to draw on everything from the unit — technique, calling, running decisions, line and length, placement, and field reading — as it comes up naturally.",
    "The coach steps back into more of a match-day observer role, only stepping in for safety or major rule clarifications.",
    "Keep the match moving at a good pace, with clear communication expected from both batting and fielding sides.",
    "Coach the key message: everything from the unit is live and relevant right now — trust what you've practised.",
    "Easier: shorter overs and more generous scoring. Harder: full-length overs and standard scoring rules."
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
    "why": "This lesson is about applying tactics live, not just performing skills in isolation."
   },
   {
    "step": "Communicate constantly in all three disciplines — batting, bowling, fielding.",
    "why": "Cricket's stop-start structure still relies on continuous team communication."
   },
   {
    "step": "Adjust your play when the first approach isn't working.",
    "why": "Adapting tactics is what separates good cricket from just repeating a plan."
   }
  ]
 },
 {
  "n": 20,
  "block": 4,
  "title": "Cricket Carnival",
  "focus": "Culminating mini-tournament — applying the whole unit",
  "walt": "We are learning to apply everything from this unit — throwing, catching, fielding, batting, bowling, and teamwork — in a full mini-tournament.",
  "wilf": [
   "I can use skills from across the unit in a real game",
   "I can play fairly and encouragingly in a competitive setting"
  ],
  "nzc": "Strands A, B, C, D · all five Key Competencies",
  "value": "Pānga",
  "valueText": "Reflecting on the impact this whole unit has had — on your skills, your team, and how you treat others in a game.",
  "equipment": "Soft/modified balls, junior bats, stumps/markers, cones, bibs (multiple colours for round-robin teams)",
  "safety": "Standard game safety; manage fatigue/hydration across a tournament format, ensure fair rotation so no team is overplayed",
  "games": [
   {
    "name": "Unit Skills Warm-Up Carousel",
    "desc": "Quick-fire stations revisiting a taste of the unit's key skills (throwing, catching, batting, bowling) — a light refresher, not new teaching.",
    "coach": "Notice how much more comfortable these feel now compared to Lesson 1.",
    "easier": "n/a",
    "harder": "n/a",
    "chaos": "Beat the clock",
    "setup": "Set up 4 quick stations (throwing, catching, batting, bowling) around the space, mirroring the Lesson 19 refresher, groups rotating through briskly.",
    "howTo": [
     "Explain this is a light refresher taste of the whole unit before the tournament begins, not new teaching.",
     "Split the class into small groups and send each group to a different station.",
     "At each station, groups spend a short, fixed time lightly practising that skill before rotating on.",
     "Rotate through all 4 stations so every group touches throwing, catching, batting, and bowling briefly.",
     "Coach the key message: notice how much more comfortable these feel now compared to Lesson 1.",
     "Easier: n/a — keep this light and low-pressure. Harder: n/a — this is intentionally an easy warm-up before the tournament."
    ]
   },
   {
    "name": "Mixed Skill Relay",
    "desc": "Teams complete a relay combining throwing, catching, and a batting strike in sequence — a fun, competitive combination of the whole unit's skills.",
    "coach": "Smooth handovers between skills.",
    "easier": "n/a",
    "harder": "n/a",
    "chaos": "Head-to-head mirror, beat the clock",
    "setup": "Teams of 3-4 line up behind a start cone, with a short course combining a throw at a target, a catch from a partner, and a batting strike off a tee, all set up in sequence over about 10-15m.",
    "howTo": [
     "Explain the relay sequence: each player throws at a target, then catches a feed from a partner, then strikes a ball off a tee, before tagging the next teammate.",
     "On 'go,' the first player from each team works through the sequence as fast and cleanly as possible.",
     "A step only counts as complete if done properly (target hit, clean catch, clean contact) — rushing through sloppily doesn't save time if it has to be redone.",
     "The next teammate can't start until the previous player has completed all three parts and tagged in.",
     "Coach the key message: smooth handovers between skills.",
     "Easier: n/a — this relay is designed as a fun combination challenge for everyone. Harder: n/a — the mixed sequence itself is the challenge, no separate variant needed."
    ]
   },
   {
    "name": "Captain's Challenge",
    "desc": "Each team nominates a captain who sets one focus for their team's tournament games (e.g. 'let's focus on calling our runs clearly today') — light strategic ownership before the tournament begins.",
    "coach": "Give every captain a genuine, valued choice.",
    "easier": "n/a",
    "harder": "n/a",
    "chaos": "Role rotation",
    "setup": "Each tournament team gathers briefly before the round-robin begins, no equipment needed beyond a moment of team time.",
    "howTo": [
     "Each team nominates a captain for the tournament ahead.",
     "The captain sets one simple focus for their team's games — for example, 'let's focus on calling our runs clearly today.'",
     "The team briefly discusses and agrees to carry that focus into their tournament matches.",
     "Captains can be reminded of their team's focus between matches by the coach if needed.",
     "Coach the key message: give every captain a genuine, valued choice.",
     "Easier: n/a — the coach can suggest a couple of focus options if a captain is stuck. Harder: n/a — every captain gets equal ownership of this choice regardless of experience."
    ]
   }
  ],
  "big": {
   "name": "Round-Robin Mini-Tournament",
   "desc": "Multiple small teams rotate through short pairs/small-sided cricket matches against each other across 2–3 stations, scoring simply (runs or a fair-play points system). Every skill from the unit is relevant somewhere in these games.",
   "setup": "Set up 2-3 mini-tournament stations across the space, each with stumps, junior bats, and soft/modified balls, with teams in different bib colours rotating between stations across the tournament.",
   "howTo": [
    "Split the class into multiple small teams (bibs to distinguish colours), and organise a round-robin roster showing which teams play which stations and in what order.",
    "Run short pairs/small-sided matches at each station, scoring simply — either runs scored or a straightforward fair-play points system agreed at the start.",
    "Rotate teams through 2-3 stations across the session, giving every team multiple short matches against different opponents.",
    "Manage fatigue and hydration across the tournament — build in a water/rest break between rounds, and rotate so no single team is overplayed.",
    "Coach the key message: every skill from the whole unit is relevant somewhere in these games — enjoy seeing it all come together.",
    "Easier: shorter matches with simpler scoring. Harder: longer matches with full scoring rules applied."
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
    "step": "Apply skills and tactics from across the whole unit.",
    "why": "The tournament brings batting, bowling, and fielding together under real competitive pressure."
   },
   {
    "step": "Communicate and encourage teammates and opponents.",
    "why": "Cricket has a strong tradition of fair play and sportsmanship alongside competition."
   },
   {
    "step": "Reflect on your growth compared to Lesson 1.",
    "why": "Reflecting on improvement is as valuable as the final result of any one game."
   }
  ]
 }
];

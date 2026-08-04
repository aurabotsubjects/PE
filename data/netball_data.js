// Netball unit data — NETBALL_BLOCK_INFO + NETBALL_LESSONS
const NETBALL_BLOCK_INFO = {
  1:{name:"Foundational Ball & Footwork Skills", range:"Lessons 1–5", color:"var(--b1)", soft:"var(--b1-soft)", warmup:"Footwork Freeze", warmdown:"Walk & Reach",
    warmupSetup:"Open space roughly 20m x 20m for the whole class, no ball or equipment needed — this warm-up is about feet and landings, not hands.",
    warmupHowTo:[
      "Everyone jogs freely around the space in their own lane, staying aware of others nearby.",
      "Call 'one foot!' at random intervals — students immediately land and freeze on a single foot, then resume jogging on the next 'go.'",
      "Call 'two feet!' the same way — students land and freeze on both feet at once.",
      "Keep the pace light and playful; the goal is raising heart rate and getting the landing habit into their bodies before today's lesson.",
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
  2:{name:"Combining Movement & Introducing Defence", range:"Lessons 6–10", color:"var(--b2)", soft:"var(--b2-soft)", warmup:"Partner Pass & Pivot", warmdown:"Partner Stretch",
    warmupSetup:"Pairs spread out across the space, roughly 3-4m apart per pair with enough room between pairs that passes and pivots don't collide with a neighbouring pair. One ball per pair.",
    warmupHowTo:[
      "Partners start passing gently back and forth using any pass type while jogging slowly on the spot.",
      "Every 30-45 seconds, call 'pivot!' — on this call, the receiver must land, pivot 180 degrees on the spot, and pass back from their new facing direction before continuing.",
      "Occasionally call 'jog swap' — both partners jog to find a new partner nearby, then continue passing and pivoting with them.",
      "Keep the whole activity light and continuous — the goal is raising heart rate and warming up the pass-and-pivot combination, not technical correction.",
      "Run for the full 5 minutes, mixing pivot calls and partner swaps throughout."
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
  3:{name:"Shooting, Space & Positional Play", range:"Lessons 11–15", color:"var(--b3)", soft:"var(--b3-soft)", warmup:"Mirror Dodge Runs", warmdown:"Breathe & Balance",
    warmupSetup:"Pairs spread out across the space, no ball needed for this warm-up, roughly 5m x 5m of room per pair.",
    warmupHowTo:[
      "Explain the game: one partner is the 'leader,' the other is the 'shadow' who must copy the leader's movement as closely as possible, staying about 1-2m behind or beside them.",
      "The leader jogs, jinks side to side, changes direction and pace — nothing too sharp or unsafe, just varied movement that echoes the dodging focus from Block 2.",
      "The shadow tries to mirror every change as quickly as possible.",
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

const NETBALL_LESSONS = [
 {
  "n": 1,
  "block": 1,
  "title": "Landing Zone",
  "focus": "Footwork fundamentals (landing on one/two feet)",
  "walt": "We are learning to land correctly on one or two feet when catching the ball, ready to apply the footwork rule.",
  "wilf": [
   "I can land on one foot and identify it as my 'landing foot'",
   "I can land on two feet at the same time when that's how I choose to land"
  ],
  "nzc": "Strand B (Movement Concepts & Motor Skills) · Managing self",
  "value": "Aroha",
  "valueText": "Looking after yourself with patience while learning a new rule that feels unusual at first, and encouraging teammates whose landings wobble on day one.",
  "equipment": "1 ball per pair, cones for grid boundaries",
  "safety": "Spread out to land safely — one body-width minimum gap when moving freely",
  "games": [
   {
    "name": "Footwork Freeze",
    "desc": "Free movement in a grid; on 'one foot!' students land and freeze on a single foot, on 'two feet!' they land and freeze on both feet at once.",
    "coach": "Bend your landing knee to absorb the landing softly",
    "easier": "Slower calls, bigger grid",
    "harder": "Faster calls, mixed sequence",
    "chaos": "Random constraint calls",
    "setup": "Mark a grid roughly 15m x 15m per group of 10-12 students using 4 cones at the corners. No ball is needed for this game — everyone moves freely inside the shared grid at once.",
    "howTo": [
     "Demonstrate both landings first: freezing on one foot with a bent knee, and freezing on two feet at shoulder width with soft knees.",
     "On 'go', everyone jogs or moves freely around the grid in their own space.",
     "Call 'one foot!' — everyone must immediately land and freeze on a single foot and hold it until the next call. Call 'two feet!' for a two-foot landing instead.",
     "Anyone who wobbles, hops, or drags a foot after freezing simply resets and waits for the next call — there's no elimination, just repetition.",
     "Coach the key message throughout: 'bend your landing knee to absorb the landing softly.'",
     "For 'easier', space calls further apart and use a bigger grid; for 'harder', call faster and mix the order unpredictably."
    ]
   },
   {
    "name": "Catch & Land",
    "desc": "Partners toss the ball gently to each other; the receiver must call out which foot (or both) they landed on the moment they catch it.",
    "coach": "Decide your landing before the ball arrives, not after",
    "easier": "Underarm toss, close distance",
    "harder": "Higher toss, greater distance",
    "chaos": "Random constraint calls",
    "setup": "Partners stand 2-3m apart with one ball between them, spaced at least 2m from neighbouring pairs so tosses don't cross into another pair's space.",
    "howTo": [
     "Demonstrate a gentle underarm toss and the idea of deciding your landing foot before the ball actually arrives.",
     "One partner tosses the ball; the receiver catches it and immediately calls out 'one!' or 'two!' depending on how they landed.",
     "Partners swap roles after every catch so both get equal tossing and catching turns.",
     "If the landing is unclear or the foot drags, the pair repeats that same toss again rather than moving straight on.",
     "Coach the key message: 'decide your landing before the ball arrives, not after.'",
     "For 'easier', use an underarm toss at close range; for 'harder', toss higher and increase the distance between partners."
    ]
   },
   {
    "name": "Landing Line Race",
    "desc": "Small groups race down a line of hoops/cones, jumping and landing correctly in each one (alternating one-foot and two-foot landings), racing another group.",
    "coach": "Stick the landing before moving to the next hoop",
    "easier": "Bigger hoops, more space between",
    "harder": "Smaller hoops, closer together",
    "chaos": "Beat the clock, head-to-head mirror",
    "setup": "Lay out a line of 6-8 hoops (or cones as markers) roughly 1m apart per group of 4-5 students, with two parallel lines set up 4-5m apart so two groups can race side by side.",
    "howTo": [
     "Demonstrate jumping into each hoop and alternating between a one-foot landing and a two-foot landing as you go down the line.",
     "On 'go', the first student in each line jumps hoop to hoop, sticking each landing cleanly before moving to the next.",
     "A landing only counts if it's stuck without a wobble or extra hop — otherwise the student repeats that hoop before continuing.",
     "Once a student reaches the end, they jog back around the outside and tag the next teammate in their line to go.",
     "The first group to get every student through the line wins; coach the key message 'stick the landing before moving to the next hoop.'",
     "For 'easier', use bigger hoops with more space between them; for 'harder', use smaller hoops set closer together."
    ]
   }
  ],
  "big": {
   "name": "Freeze Catch Netball",
   "desc": "4v4, small court, no defending pressure yet. Every catch must be followed by a clear, controlled landing (caller announces 'one!' or 'two!') before the next pass — the game only flows if landings are clean.",
   "setup": "Split the class into groups of 8 for 4v4 games on a small marked court roughly 15m x 10m (about a quarter of a full netball court). One ball per game — no bibs needed yet, since there's no defending pressure.",
   "howTo": [
    "Explain that this is a passing game only — no defenders contesting the ball yet, just free passing as players move around the court.",
    "One team starts with the ball and players pass freely to teammates as they move into space.",
    "Every catch must be followed by a called, controlled landing — the catcher announces 'one!' or 'two!' out loud — before the next pass can be thrown.",
    "If a player forgets to call their landing, that pass doesn't count and possession simply resets to the nearest teammate so play keeps flowing.",
    "Rotate which four students are on court every few minutes so everyone gets even game time.",
    "Keep the pace relaxed and the focus on clean, called landings rather than speed or scoring."
   ]
  },
  "discussion": [
   "What helped you land under control today?",
   "What's the difference between a one-foot and a two-foot landing?",
   "Why does a clean landing matter before you can pivot or pass?"
  ],
  "lookfors": [
   "Lands with a bent knee, not stiff-legged",
   "Can identify which foot (or both) they landed on",
   "Stays balanced immediately after landing, ready to move"
  ],
  "inclusion": "Allow a bounce or roll instead of a toss for students still building catching confidence, so the footwork focus isn't lost to a difficult catch.",
  "skillBreakdown": [
   {
    "step": "Land firmly on one foot, or both feet simultaneously, and establish it as your landing foot.",
    "why": "Netball's footwork rule requires a clear, controlled landing foot before you move again."
   },
   {
    "step": "Keep your knees slightly bent on landing.",
    "why": "Absorbs the landing safely and keeps you balanced to move next."
   },
   {
    "step": "Decide immediately what you'll do next — pivot, pass, or shoot.",
    "why": "Hesitating after landing wastes time and can lead to a footwork infringement."
   }
  ]
 },
 {
  "n": 2,
  "block": 1,
  "title": "Target Chest",
  "focus": "Chest pass — accuracy",
  "walt": "We are learning to throw an accurate chest pass using two hands.",
  "wilf": [
   "I can push the ball from my chest with two hands, thumbs behind the ball",
   "I can step toward my target as I release the pass"
  ],
  "nzc": "Strand B · Managing self",
  "value": "Mōhio",
  "valueText": "Understanding what your own hands and body are doing during a pass, and noticing what changes when the technique clicks.",
  "equipment": "1 ball per pair, cones for targets",
  "safety": "Passing lanes should not cross other pairs' lanes — space grids out",
  "games": [
   {
    "name": "Wall of Targets",
    "desc": "Partners chest pass through a small cone gate at chest height from increasing distances, scoring a point each time the ball goes cleanly through.",
    "coach": "Thumbs behind the ball, push straight out, follow through with your hands",
    "easier": "Wider gate, closer distance",
    "harder": "Narrower gate, further apart",
    "chaos": "Scoring streaks",
    "setup": "Partners stand facing each other with a small cone gate (two cones about 1m apart) placed at chest height between them — use a raised bar, hoop held upright, or a partner's marked chest zone as the target. Start 2m apart.",
    "howTo": [
     "Demonstrate the chest pass technique: thumbs behind the ball, push straight out, follow through with the hands finishing pointing at the target.",
     "Partners take turns chest-passing the ball cleanly through the gate at chest height, scoring a point each time it goes through without touching a cone.",
     "After every 3 successful passes, both partners take one step further apart to increase the distance.",
     "If a pass misses the gate or drops, the pair stays at the current distance and tries again rather than moving back.",
     "Coach the key message: 'thumbs behind the ball, push straight out, follow through with your hands.'",
     "For 'easier', widen the gate and stay closer together; for 'harder', narrow the gate and increase the starting distance."
    ]
   },
   {
    "name": "Step & Push",
    "desc": "Partners pass while explicitly stepping forward with the pass, exaggerating the transfer of weight into the throw.",
    "coach": "Step with the same-side foot as your throwing motion for balance",
    "easier": "No step required, stationary pass",
    "harder": "Step and pass while moving sideways",
    "chaos": "Random constraint calls",
    "setup": "Partners stand 2-3m apart, one ball between them, with enough room between pairs (at least 2m) to step forward without bumping into another pair.",
    "howTo": [
     "Demonstrate stepping forward with the same-side foot as the throwing hand while pushing the pass, exaggerating the transfer of weight.",
     "Partners pass back and forth, each one clearly stepping into every pass rather than passing from a static stance.",
     "Watch for balance after the step — the passer should land ready to move, not off-balance or falling forward.",
     "Coach the key message: 'step with the same-side foot as your throwing motion for balance.'",
     "For 'easier', remove the step and pass from a stationary position; for 'harder', have partners shuffle sideways while stepping and passing."
    ]
   },
   {
    "name": "Triangle Chest Pass Race",
    "desc": "Groups of 3 complete 10 accurate chest passes around a triangle as fast as possible, racing other triangles.",
    "coach": "Prepare your hands early — call for it before it arrives",
    "easier": "Smaller triangle",
    "harder": "Bigger triangle, must alternate direction",
    "chaos": "Beat the clock, head-to-head mirror",
    "setup": "Groups of 3 form a triangle roughly 3-4m per side, marked with a cone at each point, with triangles spaced at least 3m apart from neighbouring groups. One ball per triangle.",
    "howTo": [
     "Explain the goal: complete 10 clean, accurate chest passes around the triangle as fast as possible, counting out loud as a group.",
     "On 'go', the group starts passing corner to corner in order, with receivers showing target hands early to help the passer.",
     "If a pass is dropped or off-target, the group doesn't restart the count — they simply recover the ball and continue from where they left off.",
     "The first triangle to reach 10 clean passes calls out and is declared the winner for that round; run several rounds so different groups get to win.",
     "Coach the key message: 'prepare your hands early — call for it before it arrives.'",
     "For 'easier', use a smaller triangle; for 'harder', use a bigger triangle and require the group to alternate the direction of travel on a call."
    ]
   }
  ],
  "big": {
   "name": "Possession Chest Pass Netball",
   "desc": "4v4, small court, no defenders — 1 point per 5 consecutive accurate chest passes kept as a team, rewarding technique over speed.",
   "setup": "Split into groups of 8 for 4v4 games on a small court with no defenders, roughly 15m x 10m. One ball per game.",
   "howTo": [
    "Explain the scoring rule before starting: 1 point is awarded for every 5 consecutive accurate chest passes a team completes without a drop.",
    "One team starts with the ball; players move into space and use chest passes only to build up their sequence.",
    "If the ball is dropped or a pass isn't a clean chest pass, the count resets to zero for that team and play continues immediately from the nearest spot.",
    "Keep track of each team's best streak during the game and celebrate when a team reaches 5.",
    "Rotate players on and off court every few minutes so everyone gets even game time.",
    "Emphasise technique over speed — a slower, accurate sequence beats a fast, sloppy one."
   ]
  },
  "discussion": [
   "What technique helped your chest pass go where you wanted?",
   "How did stepping into the pass change its accuracy?",
   "What happens to the game when passes aren't accurate?"
  ],
  "lookfors": [
   "Thumbs behind the ball, not underneath or beside it",
   "Steps toward the target as they release",
   "Pass arrives at chest height, not too high or low"
  ],
  "inclusion": "Shorten distances for students still building arm strength/technique; the gate structure scales naturally by moving cones closer.",
  "skillBreakdown": [
   {
    "step": "Hold the ball with both hands, thumbs behind, fingers spread.",
    "why": "This grip gives control and an even push through the ball."
   },
   {
    "step": "Push the ball out from the chest, stepping toward the target.",
    "why": "The step adds power and directs the pass accurately."
   },
   {
    "step": "Follow through with the arms toward the target.",
    "why": "Stopping the arms early causes the pass to fall short or stray off target."
   }
  ]
 },
 {
  "n": 3,
  "block": 1,
  "title": "Bounce & Loft",
  "focus": "Bounce pass & overhead pass",
  "walt": "We are learning two more passing options — the bounce pass and the overhead pass — and when each is useful.",
  "wilf": [
   "I can bounce a pass so it reaches my partner around waist height",
   "I can throw an overhead pass over a defender's reach"
  ],
  "nzc": "Strand B · Managing self",
  "value": "Manaaki",
  "valueText": "Using fair, honest effort to challenge your partner appropriately — an overhead pass thrown too hard isn't fun or safe for anyone.",
  "equipment": "1 ball per pair, cones",
  "safety": "Overhead passes should stay controlled — no throwing directly at another person's head",
  "games": [
   {
    "name": "Bounce to a Target",
    "desc": "Partners bounce pass to each other, aiming for the ball to bounce roughly two-thirds of the way between them and rise to waist height.",
    "coach": "Push down and out, not straight down — aim for the bounce spot, not your partner's feet",
    "easier": "Closer distance, slower pace",
    "harder": "Greater distance, add a target hoop for the bounce spot",
    "chaos": "Scoring streaks",
    "setup": "Partners stand 3-4m apart with one ball each pair. Optionally place a hoop or cone on the ground roughly two-thirds of the way between them as a bounce-spot target.",
    "howTo": [
     "Demonstrate the bounce pass technique: push down and out (not straight down), aiming for a spot roughly two-thirds of the way to your partner so the ball rises to waist height for the catch.",
     "Partners take turns bounce-passing to each other, aiming for the target spot between them.",
     "After every 3 clean bounce passes in a row, both partners take one step further apart.",
     "Coach the key message: 'push down and out, not straight down — aim for the bounce spot, not your partner's feet.'",
     "For 'easier', keep the distance closer and pace slower; for 'harder', increase the distance and add a target hoop that the ball must bounce inside."
    ]
   },
   {
    "name": "Overhead Over the Rope",
    "desc": "Partners throw overhead passes over a raised rope or line (simulating a tall defender), focusing on height and control rather than power.",
    "coach": "Use your whole arm and follow through, not just a flick of the wrist",
    "easier": "Lower rope, closer distance",
    "harder": "Higher rope, further distance",
    "chaos": "Bonus objectives",
    "setup": "Partners stand 3-4m apart with a rope or line raised between them at roughly head height (a skipping rope tied between two cones/posts works well, or a chalk/tape line on the ground as a simplified version). One ball per pair.",
    "howTo": [
     "Demonstrate the overhead pass: ball held above and behind the head with two hands, using the whole arm and a full follow-through rather than just a wrist flick.",
     "Partners take turns throwing overhead passes that clear the rope and land in their partner's hands with control.",
     "Emphasise height and control over power — a soft, well-aimed pass that clears the rope beats a hard, wild one.",
     "Coach the key message: 'use your whole arm and follow through, not just a flick of the wrist.'",
     "For 'easier', lower the rope and reduce the distance; for 'harder', raise the rope and increase the distance between partners."
    ]
   },
   {
    "name": "Choose Your Pass",
    "desc": "Partners alternate between chest, bounce, and overhead passes based on a called instruction, building quick recognition of when to use each.",
    "coach": "Decide the pass type before you catch, not after",
    "easier": "Fewer pass types, more time to decide",
    "harder": "All three types, quick-fire calls",
    "chaos": "Random constraint calls",
    "setup": "Partners stand 3m apart with one ball between them, in the same pairs used across today's lesson.",
    "howTo": [
     "Remind students of all three passes practised today: chest, bounce, and overhead.",
     "The coach (or app) calls out a pass type before each throw — 'chest!', 'bounce!', or 'overhead!' — and the passer must use that exact pass.",
     "Partners keep passing back and forth, alternating who receives the call each time.",
     "Coach the key message: 'decide the pass type before you catch, not after,' so receivers are ready for what's coming.",
     "For 'easier', use only two pass types and allow more time to decide; for 'harder', use all three types with quick-fire calls."
    ]
   }
  ],
  "big": {
   "name": "Three-Pass-Type Netball",
   "desc": "4v4, small court, no defenders — teams must use all three pass types (chest, bounce, overhead) at least once during a passing sequence before scoring, encouraging a full passing toolkit.",
   "setup": "Split into groups of 8 for 4v4 games on a small court with no defenders, roughly 15m x 10m. One ball per game.",
   "howTo": [
    "Explain the rule before starting: during any passing sequence, a team must use all three pass types — chest, bounce, and overhead — at least once before they can score.",
    "One team starts with the ball; players move and pass, mentally tracking which pass types they've already used in the current sequence.",
    "If the ball is dropped, possession switches to the other team and the pass-type count resets to zero for the team receiving it.",
    "Once a team has used all three pass types, their next successful pass into the marked scoring area is worth a point, then play restarts and the count resets.",
    "Rotate players on and off court every few minutes so everyone gets even game time.",
    "Encourage players to call out which pass types are still needed to help their team track the sequence."
   ]
  },
  "discussion": [
   "When might a bounce pass be more useful than a chest pass?",
   "What did height and power do to your overhead pass's accuracy?",
   "Which pass type did you find hardest, and why?"
  ],
  "lookfors": [
   "Chooses an appropriate pass type for the situation",
   "Controls the bounce so it arrives at a catchable height",
   "Overhead pass has height and control, not wild power"
  ],
  "inclusion": "Let students focus on mastering one new pass type at a time if two feels like too much in a single lesson; the chest pass from Lesson 2 remains a safe fallback throughout.",
  "skillBreakdown": [
   {
    "step": "For a bounce pass, aim the ball to bounce roughly two-thirds of the way to your target.",
    "why": "This makes it rise to a comfortable catching height for the receiver."
   },
   {
    "step": "For an overhead pass, release from above the head with a flat trajectory.",
    "why": "Keeps the pass fast and out of defenders' reach."
   },
   {
    "step": "Choose the pass type based on the defender's position.",
    "why": "Different pressure situations suit different pass types."
   }
  ]
 },
 {
  "n": 4,
  "block": 1,
  "title": "Strong Hands",
  "focus": "Receiving a pass (strong hands, target-making)",
  "walt": "We are learning to receive a pass confidently by making a clear target and catching with strong hands.",
  "wilf": [
   "I can show 'target hands' before the ball arrives",
   "I can catch with both hands and bring the ball in close to my body"
  ],
  "nzc": "Strand B · Managing self",
  "value": "Pānga",
  "valueText": "Being patient with yourself and encouraging teammates while catching confidence builds — everyone's hands look different at first.",
  "equipment": "1 ball per pair, cones",
  "safety": "Passes should stay below head height in early games",
  "games": [
   {
    "name": "Target Hands Catch",
    "desc": "Partners pass; the receiver must show clear target hands (fingers spread, hands up) before every pass is thrown.",
    "coach": "Show your hands early so your partner has an obvious target to aim for",
    "easier": "Slower passes",
    "harder": "Passes with more pace",
    "chaos": "Random constraint calls",
    "setup": "Partners stand 3m apart with one ball between them, spaced at least 2m from neighbouring pairs.",
    "howTo": [
     "Demonstrate 'target hands': fingers spread, hands held up and ready in front of the body, clearly showing the passer exactly where to aim.",
     "Before every single pass, the receiver must show target hands — the passer waits until they see it before throwing.",
     "Partners pass back and forth using any pass type, focusing purely on the receiver's hand position each time.",
     "Coach the key message: 'show your hands early so your partner has an obvious target to aim for.'",
     "For 'easier', use slower passes with more time to set the target; for 'harder', increase the pace so hands must go up quickly."
    ]
   },
   {
    "name": "Catch & Secure",
    "desc": "Receiver catches the ball and immediately brings it in close to the body (pivot-ready position) before passing back.",
    "coach": "Watch the ball all the way into your hands, then secure it close to your chest",
    "easier": "Slower passes, closer distance",
    "harder": "Faster passes, greater distance",
    "chaos": "Scoring streaks",
    "setup": "Partners stand 3m apart with one ball between them, in the same spacing as the previous game.",
    "howTo": [
     "Demonstrate catching the ball with both hands and immediately pulling it in close to the chest — the 'pivot-ready' position — before doing anything else.",
     "One partner passes; the receiver catches, secures the ball tight to their chest, pauses briefly, then passes back.",
     "Coach the key message: 'watch the ball all the way into your hands, then secure it close to your chest.'",
     "If the ball is caught loosely or held away from the body, that catch doesn't count — the pair repeats it.",
     "For 'easier', use slower passes at a closer distance; for 'harder', use faster passes at a greater distance."
    ]
   },
   {
    "name": "Pressure Receive",
    "desc": "As Skill Game 1, but a light 'shadow' defender stands nearby (not intercepting yet) to add visual pressure on the catch.",
    "coach": "Keep eyes on the ball, not the defender",
    "easier": "Defender further away",
    "harder": "Defender allowed to close in after the pass is thrown",
    "chaos": "Added defender/pressure",
    "setup": "Same pairs as Target Hands Catch, with one extra student per pair acting as a 'shadow' defender standing 1-2m to the side of the receiver — hands-off, not intercepting.",
    "howTo": [
     "Explain that the shadow defender is there to add visual distraction only — they don't move to intercept or touch the ball.",
     "The passer throws to the receiver exactly as in Target Hands Catch, showing target hands first.",
     "The receiver focuses on catching cleanly despite the defender's presence nearby.",
     "Coach the key message: 'keep eyes on the ball, not the defender.'",
     "Rotate roles every few throws so each student experiences passing, receiving, and shadowing.",
     "For 'easier', keep the defender further away; for 'harder', allow the defender to move slightly closer after the pass is thrown."
    ]
   }
  ],
  "big": {
   "name": "Secure Catch Netball",
   "desc": "4v4, small court, light shadow defence only — teams score for maintaining clean, secure catches under mild pressure, building toward full defending in later lessons.",
   "setup": "Split into groups of 8 for 4v4 games on a small court, roughly 15m x 10m, with light shadow defenders only (hands-off, not intercepting). One ball per game.",
   "howTo": [
    "Explain that defenders may stand near their mark and move with them, but must not touch or intercept the ball — the focus is on catching cleanly under mild visual pressure.",
    "One team starts with the ball; players move into space and pass, aiming to maintain secure, well-caught possession.",
    "A team scores a point each time they string together 5 clean, secure catches (ball brought in close each time) without a drop.",
    "If the ball is dropped, the count resets and possession goes to whichever team is nearest the ball to keep the game moving.",
    "Rotate players on and off court every few minutes so everyone gets even game time.",
    "This sets up the fully live defending introduced in Lesson 10 — remind students that today's defenders are hands-off only."
   ]
  },
  "discussion": [
   "What did showing target hands do to help your partner pass to you?",
   "How did securing the ball close to your body help you next?",
   "What made catching under a bit of pressure trickier?"
  ],
  "lookfors": [
   "Shows clear target hands before the ball arrives",
   "Catches with two hands, not trapping against the body",
   "Brings the ball in close and secure immediately after catching"
  ],
  "inclusion": "Allow a slightly underinflated or softer ball for students who find catching difficult, so the footwork/target-hands focus isn't lost to a hard catch.",
  "skillBreakdown": [
   {
    "step": "Show clear target hands early, fingers spread.",
    "why": "Gives the passer confidence and an obvious aim point."
   },
   {
    "step": "Catch with both hands and bring the ball in close to the body.",
    "why": "Secures the ball immediately against defensive pressure."
   },
   {
    "step": "Land under control on the landing foot rule.",
    "why": "Connects the catch directly into legal footwork."
   }
  ]
 },
 {
  "n": 5,
  "block": 1,
  "title": "Pivot Power",
  "focus": "Pivoting to protect the ball",
  "walt": "We are learning to pivot on our landing foot to protect the ball from a defender.",
  "wilf": [
   "I can pivot on my landing foot without dragging or lifting it",
   "I can use my body to shield the ball from a defender while pivoting"
  ],
  "nzc": "Strand B · Managing self",
  "value": "Aroha",
  "valueText": "Using your skills fairly to challenge a teammate at a level that helps them learn, not just to catch them out.",
  "equipment": "1 ball per pair, cones",
  "safety": "No contact — hands-off defending only; stay upright and controlled while pivoting",
  "games": [
   {
    "name": "Static Pivot Practice",
    "desc": "Students catch a gentle toss, land, and practise pivoting 180 degrees on their landing foot without dragging it, then pass.",
    "coach": "Keep your landing foot glued to the same spot as you spin your body around it",
    "easier": "Smaller pivot (90°)",
    "harder": "Full 180° pivot, added speed",
    "chaos": "Random constraint calls",
    "setup": "Partners stand 3m apart with one ball between them, with enough room (at least 2m) around each pair to pivot freely without bumping into others.",
    "howTo": [
     "Demonstrate the pivot: catch the ball, land, plant one foot as the 'landing foot,' and spin the body 180 degrees around that same spot without lifting or dragging it.",
     "One partner tosses gently; the receiver catches, lands, pivots a full 180 degrees, then passes back from the new facing direction.",
     "Coach the key message: 'keep your landing foot glued to the same spot as you spin your body around it.'",
     "Watch closely for a dragged or lifted landing foot and reset the rep if it happens, rather than letting the habit build in.",
     "For 'easier', reduce the pivot to 90 degrees; for 'harder', require the full 180-degree pivot done quickly."
    ]
   },
   {
    "name": "Shield & Pivot",
    "desc": "A shadow defender stands nearby (not touching) while the receiver catches, lands, and pivots to shield the ball with their body before passing away from the defender.",
    "coach": "Keep your body and the ball between you and the defender as you turn",
    "easier": "Defender further away",
    "harder": "Defender allowed to move around the pivoter",
    "chaos": "Added defender/pressure",
    "setup": "Same pairs as Static Pivot Practice, with one shadow defender standing 1-2m away from the receiver — hands-off, not touching.",
    "howTo": [
     "Explain that the defender's job is to stand near the pivoter without touching, so the receiver has to actually use their body to shield the ball.",
     "The receiver catches, lands, and pivots so their body and the ball are positioned between themselves and the defender, then passes away from the defender's side.",
     "Coach the key message: 'keep your body and the ball between you and the defender as you turn.'",
     "Rotate roles every few reps so everyone experiences receiving, passing, and shadowing.",
     "For 'easier', keep the defender further away; for 'harder', let the defender move around the pivoter to force a decision about which way to turn."
    ]
   },
   {
    "name": "Pivot Under Pressure Grid",
    "desc": "Small group game where every catch must be followed by a clean pivot before a pass is allowed, with a light defender adding decision pressure.",
    "coach": "Decide your pivot direction based on where the defender is, not out of habit",
    "easier": "Bigger grid, slower defender",
    "harder": "Smaller grid, active defender",
    "chaos": "Mild opposition + decision-making",
    "setup": "Small groups of 4-5 students in a grid roughly 8m x 8m, with one light defender per group (hands-off). One ball per group.",
    "howTo": [
     "Explain the rule: every catch inside the grid must be followed by a clean pivot (no dragged or lifted landing foot) before a pass is allowed.",
     "Players pass freely around the grid; the defender moves to add mild decision pressure without touching the ball or making contact.",
     "Coach the key message: 'decide your pivot direction based on where the defender is, not out of habit.'",
     "If a pivot is sloppy (foot drags or lifts), that player simply repeats the pivot on the spot before passing — no restart of the whole game.",
     "For 'easier', use a bigger grid and a slower-moving defender; for 'harder', shrink the grid and let the defender move more actively."
    ]
   }
  ],
  "big": {
   "name": "Pivot & Protect Netball",
   "desc": "4v4, small court — every catch must include a clean pivot (no dragged/lifted landing foot) before the next pass; a called-out 'footwork!' resets possession to the other team, reinforcing the rule under game pressure.",
   "setup": "Split into groups of 8 for 4v4 games on a small court roughly 15m x 10m, hands-off defending only (no contact). One ball per game.",
   "howTo": [
    "Explain the core rule before starting: every catch must include a clean pivot — landing foot planted, no dragging or lifting — before the next pass can be thrown.",
    "Play flows normally with both teams passing and moving; the coach or a nominated caller watches for footwork.",
    "If a player's landing foot drags or lifts during a pivot, the caller shouts 'footwork!' and possession resets immediately to the other team from that spot.",
    "This mirrors the real footwork rule in netball, so let the game continue at pace rather than stopping for long explanations each time it's called.",
    "Rotate players on and off court every few minutes so everyone gets even game time.",
    "Remind students that defending stays hands-off and no-contact throughout, consistent with the safety rule for this lesson."
   ]
  },
  "discussion": [
   "What did pivoting well feel like today?",
   "How did shielding the ball with your body help protect it from a defender?",
   "What happened when your landing foot lifted or dragged?"
  ],
  "lookfors": [
   "Keeps the landing foot planted throughout the pivot",
   "Uses body position to shield the ball from a defender",
   "Recognises and self-corrects a footwork error"
  ],
  "inclusion": "For students who find the footwork rule difficult, allow extra practice reps with no defender before adding pressure, and be generous with early on-court coaching rather than enforcing the rule strictly straight away.",
  "skillBreakdown": [
   {
    "step": "Keep the landing/pivot foot planted without lifting or dragging it.",
    "why": "This is the footwork rule — lifting or dragging the pivot foot is an infringement."
   },
   {
    "step": "Turn your body around the pivot foot to shield the ball from a defender.",
    "why": "Uses your body as a barrier between the ball and the defender."
   },
   {
    "step": "Keep the ball high and away from the defender's reach while pivoting.",
    "why": "Protects it from being intercepted mid-pivot."
   }
  ]
 },
 {
  "n": 6,
  "block": 2,
  "title": "On the Move",
  "focus": "Passing on the move / pass-and-move",
  "walt": "We are learning to pass the ball and then move immediately into space, rather than standing still.",
  "wilf": [
   "I can pass and then move into space straight away",
   "I can time my pass so a moving teammate can control it easily"
  ],
  "nzc": "Strand B · Relating to others",
  "value": "Mōhio",
  "valueText": "Understanding your role in keeping the game moving — knowing when to move and why it helps your teammate.",
  "equipment": "Balls, cones, bibs (2 colours)",
  "safety": "Keep passing lanes clear of other groups when moving through space",
  "games": [
   {
    "name": "Pass & Move Relay",
    "desc": "Pairs practise 'pass and move': Player A passes to Player B and immediately jogs to a new spot; B controls and passes back to A's new position, repeating down a channel.",
    "coach": "Move immediately after passing — don't stand and admire your pass",
    "easier": "Walk instead of jog",
    "harder": "Add a light shadow defender jogging alongside",
    "chaos": "Role rotation",
    "setup": "Pairs stand at either end of a marked channel roughly 10m long and 2-3m wide, with channels spaced at least 2m apart from neighbouring pairs. One ball per pair.",
    "howTo": [
     "Demonstrate 'pass and move': Player A passes to Player B, then immediately jogs sideways to a new spot in the channel rather than standing still.",
     "Player B controls the ball and passes it back to Player A's new position, then also moves to a new spot after passing.",
     "Coach the key message: 'move immediately after passing — don't stand and admire your pass.'",
     "Continue this pattern down the length of the channel and back.",
     "For 'easier', have players walk instead of jog between passes; for 'harder', add a light shadow defender jogging alongside without touching the ball."
    ]
   },
   {
    "name": "Give and Regive Gates",
    "desc": "In trios, players combine pass-and-move sequences to move the ball through a series of marked gates down the court, racing another trio.",
    "coach": "Pass early, before you're crowded by a defender",
    "easier": "Wider gates, no time pressure",
    "harder": "Narrower gates, timed race",
    "chaos": "Beat the clock, head-to-head mirror",
    "setup": "Trios stand at the start of a channel roughly 15m long with 4-5 cone gates (two cones about 2m apart) spaced evenly down its length, one channel per trio, spaced at least 2m apart.",
    "howTo": [
     "Explain the goal: move the ball through every gate in order using pass-and-move combinations, racing another trio down a parallel channel.",
     "Players advance by passing to a teammate who has moved ahead through the next gate, then following themselves.",
     "Coach the key message: 'pass early, before you're crowded by a defender' — even though there's no defender yet, this builds the habit.",
     "The trio must pass through every gate cleanly; if the ball misses a gate, they return to the previous gate and try again.",
     "For 'easier', use wider gates with no time pressure; for 'harder', use narrower gates and time the race."
    ]
   },
   {
    "name": "1-2 vs Shadow Defender",
    "desc": "Pairs attempt a pass-and-move combination against one light-touch defender who can only intercept after the first pass is played.",
    "coach": "Move into space immediately, don't just stand and watch your pass",
    "easier": "Defender starts further back",
    "harder": "Defender allowed to close immediately",
    "chaos": "Added defender/pressure",
    "setup": "Pairs plus one extra student as a light-touch shadow defender, working in a grid roughly 10m x 8m. One ball per group of three.",
    "howTo": [
     "Explain the defender's limit: they may only move to intercept after the first pass has been played, not before.",
     "The pair attempts a pass-and-move combination — pass, move into new space, receive a return pass — while the defender tries to react and get in the passing lane.",
     "Coach the key message: 'move into space immediately, don't just stand and watch your pass.'",
     "Rotate the defender role every 2-3 minutes so all three students experience defending and attacking.",
     "For 'easier', have the defender start further back; for 'harder', let the defender close in immediately after the first pass."
    ]
   }
  ],
  "big": {
   "name": "Continuous Movement Netball",
   "desc": "4v4 with light defence — extra points awarded for a passing sequence where every player moves after their own pass, encouraging constant, purposeful movement across the whole team.",
   "setup": "Split into groups of 8 for 4v4 games on a small court roughly 15m x 10m, with light hands-off defence. One ball per game.",
   "howTo": [
    "Explain the bonus rule before starting: extra points are awarded for a passing sequence where every player who passes then visibly moves to a new position afterward.",
    "Play flows normally, with both teams passing and defending lightly (no contact, no interceptions with contact).",
    "The coach or a nominated caller watches for a full team sequence of pass-and-move and calls out 'bonus!' when it happens, awarding the extra point.",
    "If any player stands still after passing, the bonus sequence is broken and the team must start building toward it again.",
    "Rotate players on and off court every few minutes so everyone gets even game time.",
    "Coach the key message throughout play: constant, purposeful movement after every pass is what wins the bonus."
   ]
  },
  "discussion": [
   "What made a pass-and-move sequence work well today?",
   "Why does moving after your pass matter in a game?",
   "Can you describe a moment you found good space at the right time?"
  ],
  "lookfors": [
   "Moves immediately after passing",
   "Receives the return pass without needing to stop and reset",
   "Communicates (calls) with a teammate for the next pass"
  ],
  "inclusion": "Slow the whole combination down to walking pace for students still building the timing/decision sequence; speed increases as confidence grows.",
  "skillBreakdown": [
   {
    "step": "Pass, then immediately move to new space.",
    "why": "Standing still after passing makes you an easy, static target to mark."
   },
   {
    "step": "Time your movement so you're available again quickly.",
    "why": "Netball's fast tempo rewards players who keep offering new options."
   },
   {
    "step": "Communicate where you're moving to.",
    "why": "Helps the ball carrier find you again after you move."
   }
  ]
 },
 {
  "n": 7,
  "block": 2,
  "title": "Dodge & Dash",
  "focus": "Dodging to lose a defender",
  "walt": "We are learning to dodge quickly to lose a defender and create space to receive a pass.",
  "wilf": [
   "I can change direction sharply to lose a defender",
   "I can accelerate away immediately after my dodge"
  ],
  "nzc": "Strand B · Managing self",
  "value": "Manaaki",
  "valueText": "Looking after yourself with patience while learning a tricky new skill, and encouraging teammates whose dodges don't come off yet.",
  "equipment": "Balls, cones, bibs",
  "safety": "No contact — dodges must be hands-off; watch for collisions in tight grids",
  "games": [
   {
    "name": "Shadow Dodge",
    "desc": "A player dodges freely around a grid while a shadow defender mirrors from 1.5m away without touching, getting used to a defender's presence nearby.",
    "coach": "Look at the defender's hips, not their head, to time your dodge",
    "easier": "Defender stays further back",
    "harder": "Defender allowed to get closer",
    "chaos": "Added defender/pressure",
    "setup": "Pairs spread out in a grid roughly 10m x 10m per pair, spaced at least 2m from neighbouring pairs. No ball needed for this game.",
    "howTo": [
     "One partner is the mover, dodging freely around the grid with quick changes of direction; the other is the shadow defender, mirroring from about 1.5m away without touching.",
     "Coach the key message: 'look at the defender's hips, not their head, to time your dodge' — remind the mover this applies when they later add a defender reacting to them.",
     "Swap roles every 60-90 seconds so both partners experience dodging and shadowing.",
     "Keep all movement hands-off — this is about getting comfortable with a defender's presence, not contact.",
     "For 'easier', have the shadow stay further back; for 'harder', let the shadow get closer while still not touching."
    ]
   },
   {
    "name": "Cone Dodge Sprint",
    "desc": "Individual dodge run through a zig-zag line of cones as fast as possible, racing against their own best time.",
    "coach": "Small, quick steps at each cone, longer strides between them",
    "easier": "Wider cone spacing",
    "harder": "Narrower spacing/timed leaderboard",
    "chaos": "Beat the clock",
    "setup": "Set up a zig-zag line of 6-8 cones roughly 2m apart per student, with several parallel lines so multiple students can go at once, spaced at least 2m apart.",
    "howTo": [
     "Demonstrate small, quick steps at each cone with longer strides in between, weaving through the zig-zag as fast as possible.",
     "Each student runs the line individually, timed by a partner or the coach if a stopwatch is available.",
     "Coach the key message: 'small, quick steps at each cone, longer strides between them.'",
     "Students race against their own previous best time rather than against each other directly.",
     "For 'easier', widen the spacing between cones; for 'harder', narrow the spacing and keep a running leaderboard of best times."
    ]
   },
   {
    "name": "1v1 to a Gap",
    "desc": "Attacker tries to dodge past a single defender to reach a marked space on the other side of a small grid.",
    "coach": "Sell a fake direction with your eyes and shoulders before committing to your real dodge",
    "easier": "Attacker gets 2 attempts before rotating",
    "harder": "Smaller grid",
    "chaos": "Mild opposition + decision-making",
    "setup": "Pairs in a small grid roughly 6m x 6m, with a marked 2m-wide gap on the far side as the attacker's target. No ball needed.",
    "howTo": [
     "The attacker starts on one side of the grid and tries to dodge past the defender to reach the marked gap on the other side.",
     "The defender stands hands-off in the middle, moving to block the attacker's path without making contact.",
     "Coach the key message: 'sell a fake direction with your eyes and shoulders before committing to your real dodge.'",
     "Swap attacker and defender roles after every attempt (or every 2 attempts) so turns are even.",
     "For 'easier', give the attacker 2 attempts before rotating; for 'harder', shrink the grid to make the dodge sharper and quicker."
    ]
   }
  ],
  "big": {
   "name": "Dodge to Receive Netball",
   "desc": "4v4 with light defence — attackers must use a genuine dodge to lose their defender before a pass can be thrown to them, rewarding clean, purposeful movement to get free.",
   "setup": "Split into groups of 8 for 4v4 games on a small court roughly 15m x 10m, with light hands-off defence. One ball per game.",
   "howTo": [
    "Explain the rule before starting: a pass can only be thrown to an attacker once they've used a genuine dodge to lose their defender — a simple standing catch doesn't count.",
    "Play flows with both teams attacking and defending; attackers must actively dodge (change direction, use a fake) before a teammate passes to them.",
    "If an attacker receives a pass without dodging first, the coach or caller can call it back and have the team retry from that spot.",
    "Coach the key message during play: 'sell a fake direction with your eyes and shoulders before committing to your real dodge.'",
    "Rotate players on and off court every few minutes so everyone gets even game time.",
    "Keep defending hands-off throughout, consistent with today's safety rule."
   ]
  },
  "discussion": [
   "What made your dodge successful (or not) today?",
   "How did selling a fake direction help your real dodge work?",
   "What's one thing you'll try next time you're trying to lose a defender?"
  ],
  "lookfors": [
   "Plants a foot firmly before changing direction",
   "Uses a fake/look before committing to the real dodge",
   "Accelerates away immediately after the dodge"
  ],
  "inclusion": "For lower-confidence pairs, use passive defenders (walking pace, hands behind back) so the attacker experiences pressure without high stress.",
  "skillBreakdown": [
   {
    "step": "Use a sharp change of direction to unbalance the defender.",
    "why": "A sudden change is much harder for a defender to react to than a straight run."
   },
   {
    "step": "Push off explosively out of the dodge.",
    "why": "The dodge only creates separation if you accelerate away immediately."
   },
   {
    "step": "Time the dodge just before you want to receive the ball.",
    "why": "Dodging too early lets the defender recover before the pass arrives."
   }
  ]
 },
 {
  "n": 8,
  "block": 2,
  "title": "Lead the Way",
  "focus": "Getting free — timing your lead",
  "walt": "We are learning to time a lead so we arrive in space at exactly the right moment to receive a pass.",
  "wilf": [
   "I can time my lead to arrive in space just as the ball is ready to be passed",
   "I can recognise when my defender is out of position and lead immediately"
  ],
  "nzc": "Strand B · Thinking",
  "value": "Pānga",
  "valueText": "Understanding your own timing and decision-making — noticing what changes when your lead clicks into place.",
  "equipment": "Balls, cones, bibs",
  "safety": "Keep leads within the group's grid to avoid colliding with other groups",
  "games": [
   {
    "name": "Call & Lead",
    "desc": "A passer calls 'now!' as the cue for their partner to lead sharply into space and receive the pass, building the timing connection between passer and receiver.",
    "coach": "Lead on the call, not before or after",
    "easier": "Slower pace, more obvious timing",
    "harder": "Faster pace, subtler timing",
    "chaos": "Random constraint calls",
    "setup": "Pairs spread out in a grid roughly 8m x 8m per pair, spaced at least 2m apart from neighbouring pairs. One ball per pair.",
    "howTo": [
     "The passer holds the ball while their partner stands a few metres away, ready to move.",
     "The passer calls 'now!' as the exact cue for their partner to lead sharply into open space and receive the pass.",
     "Coach the key message: 'lead on the call, not before or after,' so the timing connection between passer and receiver becomes automatic.",
     "Swap roles after every 4-5 reps so both partners practise passing and leading.",
     "For 'easier', use a slower pace with a more obvious call; for 'harder', speed up the pace and make the timing window subtler."
    ]
   },
   {
    "name": "Read the Gap Lead",
    "desc": "Receiver watches their defender and leads into space the moment the defender is out of position or looking away, without a verbal cue.",
    "coach": "Watch your defender's feet and weight, not the ball, to time your lead",
    "easier": "Defender moves predictably",
    "harder": "Defender moves unpredictably",
    "chaos": "Mild opposition + decision-making",
    "setup": "Pairs plus one shadow defender working in a grid roughly 8m x 8m, spaced at least 2m from neighbouring groups. One ball per group of three.",
    "howTo": [
     "The receiver watches their shadow defender rather than waiting for a verbal cue, and leads into space the moment the defender is out of position or looking away.",
     "The passer waits for the receiver to lead before throwing, rather than passing on a fixed count.",
     "Coach the key message: 'watch your defender's feet and weight, not the ball, to time your lead.'",
     "Rotate roles every few minutes so all three students experience receiving, passing, and defending.",
     "For 'easier', have the defender move predictably; for 'harder', have the defender move unpredictably to make the read genuinely tricky."
    ]
   },
   {
    "name": "Triangle Lead Relay",
    "desc": "Groups of 3 rotate leading into space to receive a pass, then immediately becoming the next passer, racing other triangles for clean completions.",
    "coach": "Prepare your lead early — decide your target space before you move",
    "easier": "Slower pace",
    "harder": "Faster pace, timed race",
    "chaos": "Beat the clock, head-to-head mirror",
    "setup": "Groups of 3 form a triangle roughly 5m per side, marked with a cone at each point, spaced at least 3m from neighbouring triangles. One ball per group.",
    "howTo": [
     "Explain the pattern: one player passes to a teammate who has led into space, then that receiver immediately becomes the next passer for the third player.",
     "Rotate this leading-and-passing sequence continuously around the triangle, racing other triangles for the most clean completions in a set time.",
     "Coach the key message: 'prepare your lead early — decide your target space before you move.'",
     "If a pass is dropped or a lead is mistimed, the group simply recovers the ball and keeps the sequence going rather than restarting.",
     "For 'easier', run the sequence at a slower pace; for 'harder', speed it up and time the race."
    ]
   }
  ],
  "big": {
   "name": "Timed Lead Netball",
   "desc": "4v4 with defence — coach highlights well-timed leads in play ('great timing!'), reinforcing that arriving in space at the right moment is as valuable as the pass itself.",
   "setup": "Split into groups of 8 for 4v4 games on a small court roughly 15m x 10m, with defence active. One ball per game.",
   "howTo": [
    "Play a normal small-sided game with both teams attacking and defending.",
    "The coach watches closely for well-timed leads — a player arriving into space at exactly the right moment to receive a pass — and calls out 'great timing!' when it happens.",
    "Use these call-outs as teaching moments during play, briefly naming what made the timing work well.",
    "Encourage attackers to think about when to lead, not just where, reinforcing that arriving in space at the right moment is as valuable as the pass itself.",
    "Rotate players on and off court every few minutes so everyone gets even game time.",
    "Keep the game flowing at a natural pace rather than stopping play for lengthy explanations."
   ]
  },
  "discussion": [
   "What helped you time your lead well today?",
   "How did reading your defender's position help you decide when to lead?",
   "What happens if you lead too early or too late?"
  ],
  "lookfors": [
   "Times the lead to arrive as the ball becomes available",
   "Reads the defender's position before leading",
   "Accelerates into space rather than drifting"
  ],
  "inclusion": "Use a verbal cue system (passer calls 'now!') as training wheels for students still building the reading skill, removing the cue as confidence grows.",
  "skillBreakdown": [
   {
    "step": "Read when the ball carrier is ready to pass before you lead.",
    "why": "Leading too early means the defender has time to react and follow."
   },
   {
    "step": "Lead with a strong change of pace into space.",
    "why": "A lazy lead is easy for a defender to track and cover."
   },
   {
    "step": "Communicate that you're ready for the ball.",
    "why": "Helps the passer's timing and decision-making."
   }
  ]
 },
 {
  "n": 9,
  "block": 2,
  "title": "Triple Combo",
  "focus": "Combining dodge + lead + receive",
  "walt": "We are learning to combine a dodge, a timed lead, and a clean catch into one smooth sequence.",
  "wilf": [
   "I can dodge, lead into space, and catch the ball in one connected sequence",
   "I can adjust my sequence based on what my defender does"
  ],
  "nzc": "Strand B · Thinking",
  "value": "Aroha",
  "valueText": "Understanding how your individual skills (dodge, lead, catch) fit together with your team's play for a shared outcome.",
  "equipment": "Balls, cones, bibs",
  "safety": "Keep games small-sided (3v3 max) so the combined sequence comes thick and fast without overcrowding",
  "games": [
   {
    "name": "Dodge-Lead-Catch Drill",
    "desc": "Player dodges a shadow defender, leads into space, and catches a pass from a partner, all in one continuous sequence, walked through slowly first.",
    "coach": "Each part flows into the next — don't pause between the dodge and the lead",
    "easier": "Slower pace, more time between parts",
    "harder": "Faster pace, less time",
    "chaos": "Random constraint calls",
    "setup": "Groups of 3 (one dodger/receiver, one shadow defender, one passer) in a grid roughly 8m x 8m, spaced at least 2m apart from neighbouring groups. One ball per group.",
    "howTo": [
     "Walk through the sequence slowly first: the receiver dodges the shadow defender, leads into space, and catches a pass from the passer, all in one continuous action.",
     "Coach the key message: 'each part flows into the next — don't pause between the dodge and the lead.'",
     "Once the walkthrough is smooth, repeat the sequence at a light jog, then a full pace.",
     "Rotate roles every few reps so all three students experience dodging/receiving, defending, and passing.",
     "For 'easier', slow the pace and add more time between each part; for 'harder', speed the whole sequence up."
    ]
   },
   {
    "name": "2v1 Combo Challenge",
    "desc": "Two attackers against one defender — the attacker without the ball must combine a dodge and lead to get free and receive a pass from their teammate.",
    "coach": "If your first dodge doesn't lose the defender, adjust and try again immediately",
    "easier": "Wider grid, slower defender",
    "harder": "Narrower grid, faster defender",
    "chaos": "Mild opposition + decision-making",
    "setup": "Groups of 3 (two attackers, one defender) in a grid roughly 10m x 8m, spaced at least 2m from neighbouring groups. One ball per group.",
    "howTo": [
     "One attacker starts with the ball; the other attacker (without the ball) must combine a dodge and a lead to get free of the single defender.",
     "The defender tries to track and mark the free attacker, using hands-off positioning only.",
     "Coach the key message: 'if your first dodge doesn't lose the defender, adjust and try again immediately' rather than freezing.",
     "Once the free attacker receives the ball cleanly, reset and rotate which player defends.",
     "For 'easier', use a wider grid with a slower defender; for 'harder', use a narrower grid with a faster, more active defender."
    ]
   },
   {
    "name": "Continuous Combo Game",
    "desc": "Small-sided game where every reception must be preceded by a visible dodge-and-lead sequence, rewarding whichever team keeps combining the skills successfully.",
    "coach": "Always be thinking one step ahead — dodge, lead, catch, then what's next?",
    "easier": "Bigger grid, more time",
    "harder": "Smaller grid, faster decisions",
    "chaos": "Beat the clock, scoring streaks",
    "setup": "Small-sided groups of 6-8 (3v3 max on court at once) in a grid roughly 12m x 10m, with the rest of the group waiting to rotate in. One ball per game.",
    "howTo": [
     "Explain the rule: every reception during the game must be preceded by a visible dodge-and-lead sequence, not just a standing catch.",
     "Play flows continuously; the coach or a caller watches for teams combining the skills successfully and calls out good examples.",
     "Coach the key message: 'always be thinking one step ahead — dodge, lead, catch, then what's next?'",
     "If a catch happens without a visible dodge-and-lead, the coach can call it back and have the team retry from that spot.",
     "For 'easier', use a bigger grid with more time; for 'harder', use a smaller grid with faster decisions required."
    ]
   }
  ],
  "big": {
   "name": "4v3 Combination Netball",
   "desc": "Attacking team has a numbers advantage (4v3); success depends on combining today's three skills — dodging to create separation, leading with good timing, and catching cleanly to keep the sequence alive.",
   "setup": "Split into groups of 7 for 4v3 games on a small court roughly 15m x 10m, giving the attacking team a numbers advantage. One ball per game.",
   "howTo": [
    "Explain the numbers advantage: the attacking team has 4 players against 3 defenders, and success depends on combining today's three skills — dodging, leading, and catching cleanly.",
    "Play flows with the attacking team trying to keep the sequence alive by dodging free, leading with good timing, and catching securely under the numbers advantage.",
    "Defenders play hands-off and try to cover as much space as they can despite being outnumbered.",
    "Rotate which team is attacking (4) versus defending (3) every few minutes so everyone experiences both roles.",
    "Coach the key message throughout: combine all three skills in sequence rather than relying on just one.",
    "Rotate players on and off court every few minutes so everyone gets even game time."
   ]
  },
  "discussion": [
   "How did dodging, leading, and catching work together today?",
   "What happened when you tried to skip a step in the sequence?",
   "What's one moment you combined all three skills well?"
  ],
  "lookfors": [
   "Dodge genuinely creates separation from the defender",
   "Lead is timed to arrive as the ball becomes available",
   "Catch is clean and secure, completing the sequence"
  ],
  "inclusion": "Reduce numbers (e.g. 1v1 with a feeder) for students still building confidence combining three skills at once, before scaling up to 2v1 or 4v3.",
  "skillBreakdown": [
   {
    "step": "Dodge to create separation, then lead into open space.",
    "why": "The dodge and lead work together — one creates the gap, the other uses it."
   },
   {
    "step": "Time your final movement to arrive as the ball is released.",
    "why": "Arriving too early or late breaks the timing of the whole sequence."
   },
   {
    "step": "Show target hands as you receive.",
    "why": "Keeps the catch clean at the end of a well-timed combination."
   }
  ]
 },
 {
  "n": 10,
  "block": 2,
  "title": "Shadow the Pass",
  "focus": "Defending — marking the pass",
  "walt": "We are learning to defend by standing off a player who has the ball and trying to intercept the pass they throw.",
  "wilf": [
   "I can stand the correct distance (0.9m) away from a player holding the ball",
   "I can watch the ball to try to intercept a pass, without contacting my opponent"
  ],
  "nzc": "Strand B · Managing self, Relating to others",
  "value": "Mōhio",
  "valueText": "Looking after your opponent by defending fairly and safely, respecting the marking distance rather than crowding them.",
  "equipment": "Balls, cones marking distance, bibs",
  "safety": "No contact — hands-off defending only; maintain the 0.9m marking distance to keep it safe and fair",
  "games": [
   {
    "name": "Distance Check",
    "desc": "Partners practise standing exactly 0.9m (about 3 feet, or one long step) away from a player holding the ball, checking distance with a cone marker.",
    "coach": "Use a cone on the ground as a visual reminder of the correct distance",
    "easier": "Slightly more generous distance",
    "harder": "Exact distance, checked by a partner",
    "chaos": "Random constraint calls",
    "setup": "Partners stand together with one cone placed exactly 0.9m (about one long step) away from the ball-holder, one set per pair, spaced at least 2m from neighbouring pairs. No ball movement needed yet — just positioning practice.",
    "howTo": [
     "One partner holds the ball still; the other practises standing exactly at the cone marker, checking they're at the correct 0.9m marking distance.",
     "Coach the key message: 'use a cone on the ground as a visual reminder of the correct distance.'",
     "Swap roles every few reps so both partners feel what the correct distance looks and feels like from both sides.",
     "Once comfortable, remove the cone and have the defending partner try to judge the distance by eye, checking against where the cone was.",
     "For 'easier', allow a slightly more generous distance while learning; for 'harder', require the exact distance, checked by the partner each time."
    ]
   },
   {
    "name": "Read the Pass",
    "desc": "Defender marks a player with the ball and tries to read which direction the pass will go, moving to intercept without contacting anyone.",
    "coach": "Watch the passer's eyes and shoulders for clues about where the ball is going",
    "easier": "Passer telegraphs the pass obviously",
    "harder": "Passer disguises the pass",
    "chaos": "Mild opposition + decision-making",
    "setup": "Pairs plus one defender working in a grid roughly 8m x 8m, spaced at least 2m from neighbouring groups. One ball per group of three.",
    "howTo": [
     "The defender marks the player with the ball at the correct 0.9m distance, using cones as a reference if needed.",
     "The passer looks for a passing option while the defender tries to read which direction the pass will go, moving to intercept without making contact.",
     "Coach the key message: 'watch the passer's eyes and shoulders for clues about where the ball is going.'",
     "Rotate roles every few reps so all three students experience passing, receiving, and defending.",
     "For 'easier', have the passer telegraph the pass obviously; for 'harder', have the passer disguise where they're throwing."
    ]
   },
   {
    "name": "Marking Grid Game",
    "desc": "Small group game where every player with the ball is marked by a defender at the correct distance, practising the marking habit continuously.",
    "coach": "Stay on the balls of your feet, ready to move either direction",
    "easier": "Bigger grid, slower pace",
    "harder": "Smaller grid, faster pace",
    "chaos": "Role rotation",
    "setup": "Small groups of 5-6 in a grid roughly 10m x 10m, with one or two defenders rotating through. One ball per group.",
    "howTo": [
     "Explain the rule: every player holding the ball must be marked by a defender standing at the correct 0.9m distance before play continues.",
     "Players pass freely around the grid while defenders track and mark whoever currently holds the ball.",
     "Coach the key message: 'stay on the balls of your feet, ready to move either direction.'",
     "Rotate the defender role every 2-3 minutes so everyone gets a turn marking and being marked.",
     "For 'easier', use a bigger grid with a slower pace; for 'harder', use a smaller grid with a faster pace."
    ]
   }
  ],
  "big": {
   "name": "Marked Pass Netball",
   "desc": "4v4 — every player with the ball must be marked by a defender at the correct distance before a pass can be thrown, introducing live defending pressure for the first time in the unit.",
   "setup": "Split into groups of 8 for 4v4 games on a small court roughly 15m x 10m — the first game in the unit with full live defending pressure. One ball per game, bibs to tell teams apart.",
   "howTo": [
    "Explain the headline rule before starting: every player with the ball must be marked by a defender at the correct 0.9m distance before a pass can be thrown.",
    "Play a normal small-sided game; defenders must track their mark closely but stay hands-off, no contact.",
    "If a player passes while unmarked (no defender within the correct distance), the coach or caller can note it as an easy attacking win for that team.",
    "Coach the key message throughout: 'stay on the balls of your feet, ready to move either direction.'",
    "Rotate players on and off court every few minutes so everyone gets even game time.",
    "This is the unit's first live defending pressure — keep reminding students that it's hands-off and no-contact throughout."
   ]
  },
  "discussion": [
   "What made marking at the correct distance tricky today?",
   "How did reading the passer help you try to intercept?",
   "What's the purpose of the 0.9m marking rule?"
  ],
  "lookfors": [
   "Maintains the correct marking distance",
   "Reads passer's cues to anticipate the pass direction",
   "Defends without contacting the opponent"
  ],
  "inclusion": "Use a visible cone or line as a distance reference for students still learning to judge 0.9m by eye.",
  "skillBreakdown": [
   {
    "step": "Stay within the legal defending distance (arm's length, three feet).",
    "why": "This is netball's contact and defending distance rule."
   },
   {
    "step": "Position your body between the attacker and the ball where possible.",
    "why": "Makes the passing lane to your player harder to use."
   },
   {
    "step": "React the instant the ball is released, not before.",
    "why": "Reacting too early can be considered obstruction — timing matters."
   }
  ]
 },
 {
  "n": 11,
  "block": 3,
  "title": "Read & Intercept",
  "focus": "Defending — marking the shot/intercepting",
  "walt": "We are learning to defend a shooter and to read a pass in order to intercept it.",
  "wilf": [
   "I can mark a shooter at the correct distance without touching the ball on its way to the hoop",
   "I can move into the passing lane to try to intercept a pass"
  ],
  "nzc": "Strand B · Thinking",
  "value": "Manaaki",
  "valueText": "Using your skills fairly to give the shooter and passer a genuine, respectful contest without crowding or contacting them.",
  "equipment": "Balls, hoops/targets, cones, bibs",
  "safety": "No contact and no touching the ball during a shot attempt — defenders may only intercept a pass, not block a shot at the hoop",
  "games": [
   {
    "name": "Shooter Mark Practice",
    "desc": "Defender marks a shooter at the correct distance as they prepare to shoot, practising positioning without interfering with the shot itself.",
    "coach": "Stay balanced and ready to move — don't lunge at the shooter",
    "easier": "Shooter shoots from close range",
    "harder": "Shooter shoots from further out",
    "chaos": "Random constraint calls",
    "setup": "Pairs near a hoop or shooting target, with the shooter standing 2-3m from the hoop and the defender marking at the correct 0.9m distance. One ball and one hoop per pair, spaced well apart from other pairs.",
    "howTo": [
     "The defender takes up position marking the shooter at the correct distance, without touching the ball or interfering with the shot.",
     "The shooter goes through their shooting stance and prepares to shoot as normal, getting used to a defender's presence nearby.",
     "Coach the key message: 'stay balanced and ready to move — don't lunge at the shooter.'",
     "Rotate shooter and defender roles every few attempts so both experience each role.",
     "For 'easier', have the shooter shoot from close range; for 'harder', have them shoot from further out."
    ]
   },
   {
    "name": "Passing Lane Read",
    "desc": "Defender practises stepping into the passing lane between two attackers to try to intercept, based on reading the passer's body language.",
    "coach": "Position yourself in the lane before the pass is thrown, not after",
    "easier": "Passer telegraphs the pass",
    "harder": "Passer disguises the pass",
    "chaos": "Mild opposition + decision-making",
    "setup": "Groups of 3 (two attackers, one defender) in a small area roughly 6m x 6m near the shooting circle, spaced at least 2m from neighbouring groups. One ball per group.",
    "howTo": [
     "The two attackers stand a few metres apart with the ball moving between them; the defender positions in the space between them, trying to read the passing lane.",
     "Coach the key message: 'position yourself in the lane before the pass is thrown, not after.'",
     "The defender attempts to step into the lane and intercept without making contact with either attacker.",
     "Rotate the defender role every few reps so everyone experiences reading the lane.",
     "For 'easier', have the passer telegraph the pass obviously; for 'harder', have the passer disguise where they're throwing."
    ]
   },
   {
    "name": "Intercept Relay",
    "desc": "Small group game where defenders rotate trying to intercept a series of passes between attackers, racing to reach a target number of interceptions.",
    "coach": "Anticipate, don't just react — where is this pass most likely to go?",
    "easier": "Slower, more obvious passes",
    "harder": "Faster, less predictable passes",
    "chaos": "Beat the clock, role rotation",
    "setup": "Small groups of 5-6 in a grid roughly 10m x 10m, with 1-2 defenders rotating through and trying to reach a target number of interceptions. One ball per group.",
    "howTo": [
     "Explain the target: defenders rotate through trying to reach a set number of interceptions (e.g. 3) as fast as possible while attackers pass freely.",
     "Coach the key message: 'anticipate, don't just react — where is this pass most likely to go?'",
     "Defenders stay hands-off except for legally intercepting passes in the air or reading the lane, no contact with players.",
     "Rotate the defender role every 2-3 minutes so everyone gets a turn.",
     "For 'easier', use slower, more obvious passes; for 'harder', use faster, less predictable passing."
    ]
   }
  ],
  "big": {
   "name": "Read & Defend Netball",
   "desc": "4v4 with shooting circles marked — defenders focus explicitly on marking shooters fairly and reading passing lanes to intercept, while attackers try to find a clear passing or shooting option.",
   "setup": "Split into groups of 8 for 4v4 games on a court with a marked shooting circle at each end, roughly 15m x 12m. One ball per game, bibs for each team.",
   "howTo": [
    "Explain the dual focus before starting: defenders should mark shooters fairly at the correct distance, and look to read passing lanes to intercept.",
    "Play a normal small-sided game with shooting allowed inside the marked circle only.",
    "The coach highlights good defensive reads out loud during play — both fair shooter-marking and successful lane interceptions.",
    "Attackers try to find a clear passing option into the circle or a clean shooting opportunity when marked fairly.",
    "Rotate players on and off court every few minutes so everyone gets even game time.",
    "Reinforce the safety rule throughout: no contact, and no touching the ball during a shot attempt."
   ]
  },
  "discussion": [
   "What made marking a shooter different from marking a passer?",
   "How did reading the passer's body language help you try to intercept?",
   "What's the difference between defending fairly and defending too aggressively?"
  ],
  "lookfors": [
   "Marks a shooter without interfering with the shot",
   "Positions in the passing lane before the pass is thrown",
   "Defends fairly, without contact"
  ],
  "inclusion": "For students who find reading passes difficult, start with an obvious, slow, telegraphed pass before introducing disguised passing.",
  "skillBreakdown": [
   {
    "step": "Stay at the legal defending distance while marking the shooter.",
    "why": "Keeps the defence within the rules while still applying pressure."
   },
   {
    "step": "Read the passer's body shape to anticipate the pass direction.",
    "why": "Anticipation, not just reaction, is what creates real interception chances."
   },
   {
    "step": "Move to intercept only when you have a genuine, safe chance.",
    "why": "Over-committing to a risky interception can leave your player completely free."
   }
  ]
 },
 {
  "n": 12,
  "block": 3,
  "title": "Sweet Shot",
  "focus": "Shooting technique (for shooting positions)",
  "walt": "We are learning correct shooting technique — how to shoot the ball cleanly toward the hoop.",
  "wilf": [
   "I can hold a balanced shooting stance with the ball above my head",
   "I can release the ball with a soft arc using my fingers, not my palm"
  ],
  "nzc": "Strand B · Managing self",
  "value": "Pānga",
  "valueText": "Being patient with yourself as shooting technique develops — even great shooters miss, and that's part of learning.",
  "equipment": "1 ball per pair or small group, hoops/targets",
  "safety": "Shooters should have clear space in front of them; rotate turns so no one is standing directly under the hoop while others shoot",
  "games": [
   {
    "name": "Balanced Stance Practice",
    "desc": "Students practise the shooting stance (feet shoulder-width, ball held above the head with fingers spread) without shooting yet, focusing purely on set-up.",
    "coach": "Elbow in, eyes on the target, ball resting on your fingertips not your palm",
    "easier": "Wider stance, more time to set up",
    "harder": "Quicker set-up, timed",
    "chaos": "Random constraint calls",
    "setup": "Students spread out individually near a hoop or target, one ball per pair or small group sharing a hoop, with hoops spaced at least 3m apart.",
    "howTo": [
     "Demonstrate the shooting stance: feet shoulder-width apart, ball held above the head resting on fingertips (not the palm), elbow tucked in, eyes on the target.",
     "Students practise setting up this stance repeatedly without shooting yet, checking their own hand and foot position each time.",
     "Coach the key message: 'elbow in, eyes on the target, ball resting on your fingertips not your palm.'",
     "Have partners check each other's stance and give quick feedback before rotating.",
     "For 'easier', use a wider stance and allow more time to set up; for 'harder', require a quicker set-up, timed if possible."
    ]
   },
   {
    "name": "Soft Arc Shooting",
    "desc": "Students take shots from close range, focusing on a high, soft arc rather than a flat, hard shot.",
    "coach": "Push up and slightly forward, follow through with your wrist",
    "easier": "Closer range, lower hoop if available",
    "harder": "Further range, standard hoop height",
    "chaos": "Scoring streaks",
    "setup": "Students in pairs or small groups near a hoop, shooting from close range (about 1.5-2m from the hoop), with hoops spaced at least 3m apart.",
    "howTo": [
     "Demonstrate a shot with a high, soft arc rather than a flat, hard shot — pushing up and slightly forward with a wrist follow-through.",
     "Students take turns shooting from close range, focusing purely on getting a high, soft arc rather than trying to shoot hard.",
     "Coach the key message: 'push up and slightly forward, follow through with your wrist.'",
     "Rebound and reset the ball for the next shooter quickly to keep turns coming often.",
     "For 'easier', shoot from even closer range or use a lower hoop if available; for 'harder', shoot from further out at standard hoop height."
    ]
   },
   {
    "name": "Shot Count Challenge",
    "desc": "Small groups take turns shooting from a marked spot, counting clean makes out of 10 attempts, focusing on consistent technique rather than power.",
    "coach": "Repeat the same technique every time — consistency beats trying something new each shot",
    "easier": "Closer distance",
    "harder": "Further distance",
    "chaos": "Beat the clock",
    "setup": "Small groups of 3-4 taking turns shooting from a marked spot near the hoop, counting clean makes out of 10 attempts. Hoops spaced at least 3m apart between groups.",
    "howTo": [
     "Each student takes 10 shots in a row from the same marked spot, with the group counting clean makes out loud.",
     "Coach the key message: 'repeat the same technique every time — consistency beats trying something new each shot.'",
     "Group members retrieve the ball quickly for the shooter to keep the pace of attempts high.",
     "Record each student's score out of 10 if useful for tracking progress across the block.",
     "For 'easier', shoot from a closer distance; for 'harder', shoot from further away."
    ]
   }
  ],
  "big": {
   "name": "Shooting Circle Netball",
   "desc": "Small-sided game with a designated shooting circle — only players in the circle may shoot, with the rest of the team focused on getting the ball there through good passing and movement.",
   "setup": "Split into groups of 8 for small-sided games on a court with one marked shooting circle at each end. One ball per game, bibs for each team.",
   "howTo": [
    "Explain the rule before starting: only players inside the marked shooting circle may attempt a shot at the hoop.",
    "The rest of the team focuses on moving the ball toward the circle through good passing and off-the-ball movement.",
    "Play flows as a normal small-sided game, with a point scored for every clean shot made from inside the circle.",
    "Encourage non-shooting players to think about how to get the ball to a teammate in the circle rather than trying to shoot from outside it.",
    "Rotate players on and off court every few minutes so everyone gets even game time, including time inside the circle.",
    "Keep the pace lively — this is the first game where shooting itself is the scoring method."
   ]
  },
  "discussion": [
   "What did a balanced stance do to help your shooting accuracy?",
   "How did a soft arc compare to a flat, hard shot?",
   "What technique will you focus on next time you're shooting?"
  ],
  "lookfors": [
   "Holds a balanced stance with the ball above the head",
   "Releases with fingers, not the palm",
   "Shot has a soft, controlled arc"
  ],
  "inclusion": "Offer a lower hoop or closer distance for students still building arm strength; celebrate good technique even when shots don't go in.",
  "skillBreakdown": [
   {
    "step": "Stand balanced, ball held above the head with both hands, elbows in.",
    "why": "A stable base and consistent hand position build repeatable shooting technique."
   },
   {
    "step": "Bend the knees slightly and use the legs to generate lift, not just the arms.",
    "why": "Leg drive gives more consistent power than arms alone."
   },
   {
    "step": "Follow through with a soft wrist flick towards the hoop.",
    "why": "The follow-through controls the ball's backspin and accuracy."
   }
  ]
 },
 {
  "n": 13,
  "block": 3,
  "title": "Pressure Shooting",
  "focus": "Shooting under defensive pressure",
  "walt": "We are learning to maintain good shooting technique even with a defender marking us.",
  "wilf": [
   "I can hold my shooting technique steady with a defender nearby",
   "I can decide whether to shoot or pass based on the pressure I'm under"
  ],
  "nzc": "Strand B · Thinking",
  "value": "Aroha",
  "valueText": "Understanding your own composure under pressure — noticing what helps you stay calm and make good decisions.",
  "equipment": "Balls, hoops/targets, cones, bibs",
  "safety": "Defenders must maintain the correct marking distance and must not touch the ball during a shot attempt",
  "games": [
   {
    "name": "Shadow Shot",
    "desc": "Shooter practises their technique with a shadow defender standing nearby (not intercepting), getting used to a presence without pressure on the shot itself.",
    "coach": "Trust your technique — don't rush just because a defender is there",
    "easier": "Defender further away",
    "harder": "Defender allowed to get closer",
    "chaos": "Added defender/pressure",
    "setup": "Pairs near a hoop, shooter shooting from a set spot with a shadow defender standing 1-2m away (hands-off, not intercepting). Hoops spaced at least 3m apart.",
    "howTo": [
     "The shooter sets up their shot exactly as practised in Lesson 12, with the shadow defender standing nearby but not moving to block.",
     "Coach the key message: 'trust your technique — don't rush just because a defender is there.'",
     "The shooter takes their shot at their normal pace, focusing on maintaining the same stance and follow-through.",
     "Rotate shooter and defender roles every few attempts.",
     "For 'easier', keep the defender further away; for 'harder', let the defender stand closer while still not touching."
    ]
   },
   {
    "name": "Shoot or Pass Decision",
    "desc": "Shooter with the ball near the circle must decide whether to shoot immediately or pass to a better-positioned teammate, based on defensive pressure.",
    "coach": "A good pass to a clear shot beats a rushed shot under pressure",
    "easier": "Defender reacts slowly",
    "harder": "Defender reacts immediately",
    "chaos": "Mild opposition + decision-making",
    "setup": "Small groups of 3 near the shooting circle — one shooter with the ball, one open teammate, one defender applying light pressure. Spaced at least 3m from neighbouring groups.",
    "howTo": [
     "The player with the ball near the circle must decide, based on the defender's position, whether to shoot immediately or pass to the better-positioned teammate.",
     "Coach the key message: 'a good pass to a clear shot beats a rushed shot under pressure.'",
     "The defender reacts to the ball-holder's decision, trying to close down whichever option looks likeliest.",
     "Rotate which player has the ball, which is open, and which defends every few reps.",
     "For 'easier', have the defender react slowly; for 'harder', have the defender react immediately to force a quick decision."
    ]
   },
   {
    "name": "Pressure Shot Count",
    "desc": "Small groups take shots with a live defender marking (correct distance, no contact), counting clean makes under real pressure.",
    "coach": "Stick to your technique from Lesson 12 — pressure doesn't change good form",
    "easier": "Fewer defenders, more space",
    "harder": "Full defensive pressure",
    "chaos": "Scoring streaks",
    "setup": "Small groups of 3-4 near a hoop, with a live defender marking the shooter at the correct distance (no contact). Hoops spaced at least 3m apart.",
    "howTo": [
     "The shooter takes shots from a marked spot while the defender marks at the correct distance without touching the ball.",
     "The group counts clean makes out loud, same as the Shot Count Challenge but now under real defensive pressure.",
     "Coach the key message: 'stick to your technique from Lesson 12 — pressure doesn't change good form.'",
     "Rotate the shooter and defender roles regularly so everyone shoots under pressure.",
     "For 'easier', use fewer defenders and more space; for 'harder', apply full defensive pressure."
    ]
   }
  ],
  "big": {
   "name": "Pressure Shooting Netball",
   "desc": "4v4 with a shooting circle and live defence — shooters are coached to maintain technique and make good shoot-or-pass decisions under realistic defensive pressure.",
   "setup": "Split into groups of 8 for 4v4 games on a court with a marked shooting circle at each end and live defence. One ball per game, bibs for each team.",
   "howTo": [
    "Play a normal small-sided game with shooting allowed only from inside the marked circle, defenders marking at the correct distance without contact.",
    "Coach shooters explicitly to maintain their technique from Lesson 12 and to make good shoot-or-pass decisions under realistic pressure.",
    "The coach highlights good decisions out loud during play — both smart shots taken and smart passes made instead of a rushed shot.",
    "Reinforce the safety rule throughout: defenders must maintain the correct marking distance and must not touch the ball during a shot attempt.",
    "Rotate players on and off court every few minutes so everyone gets even game time, including time inside the circle.",
    "Keep encouraging composure — a calm, well-formed shot beats a rushed one every time."
   ]
  },
  "discussion": [
   "What changed about your shot when a defender was there?",
   "How did you decide whether to shoot or pass under pressure?",
   "What helped you stay calm and controlled while defended?"
  ],
  "lookfors": [
   "Maintains shooting technique under mild defensive pressure",
   "Makes a sensible shoot-or-pass decision",
   "Stays composed rather than rushing"
  ],
  "inclusion": "Reduce defensive intensity (bigger marking distance, slower defender) for students still building shooting confidence before adding full pressure.",
  "skillBreakdown": [
   {
    "step": "Keep the same shooting technique regardless of the defender's presence.",
    "why": "Changing technique under pressure is what causes inconsistency."
   },
   {
    "step": "Use your body to shield the ball from the defender before shooting.",
    "why": "Protects your shooting opportunity within the legal defending distance."
   },
   {
    "step": "Stay balanced and composed rather than rushing the shot.",
    "why": "A rushed shot under pressure is far less accurate than a composed one."
   }
  ]
 },
 {
  "n": 14,
  "block": 3,
  "title": "Know Your Third",
  "focus": "Understanding space — thirds of the court",
  "walt": "We are learning how the netball court is divided into thirds and what that means for where we can play.",
  "wilf": [
   "I can name the three thirds of the court and where my position is allowed to go",
   "I can move into the correct third at the correct time during play"
  ],
  "nzc": "Strand B · Thinking",
  "value": "Mōhio",
  "valueText": "Being fair and honest about staying within the boundaries of your role, even when no one is strictly checking.",
  "equipment": "Balls, cones marking thirds, bibs",
  "safety": "Keep movement controlled when transitioning between thirds — no sprinting through others' space",
  "games": [
   {
    "name": "Third Spotter",
    "desc": "Students walk/jog around a marked court, calling out which third they're standing in as the coach/app calls out different thirds to move to.",
    "coach": "Know the boundary lines before the game starts — check them with your feet",
    "easier": "Fewer, clearer third markers",
    "harder": "More subtle markers, faster calls",
    "chaos": "Random constraint calls",
    "setup": "Whole class (or half at a time) on a court marked into three equal thirds using cones along two lines, roughly 15m x 10m total space.",
    "howTo": [
     "Walk the group along the court first, showing exactly where each third's boundary line is.",
     "Students walk or jog around the marked court; the coach or app calls out a third (e.g. 'centre third!') and students move into that third and call out where they are.",
     "Coach the key message: 'know the boundary lines before the game starts — check them with your feet.'",
     "Continue calling different thirds so students build a mental map of the space.",
     "For 'easier', use fewer, clearer third markers; for 'harder', use more subtle markers and call faster."
    ]
   },
   {
    "name": "Positional Boundary Game",
    "desc": "Small groups are assigned simplified positions (e.g. defence third only, centre third only) and practise passing the ball while respecting their thirds boundary.",
    "coach": "Stay aware of your positional boundary even while focused on the ball",
    "easier": "Fewer positions, more space",
    "harder": "More positions, tighter boundaries",
    "chaos": "Bonus objectives",
    "setup": "Small groups of 4-5 assigned to a single third (e.g. defence third only, centre third only), with one ball per group and thirds clearly marked with cones.",
    "howTo": [
     "Assign each group a simplified position tied to one third of the court and explain they must stay within that third's boundary while playing.",
     "Groups pass the ball freely among themselves, staying inside their assigned third throughout.",
     "Coach the key message: 'stay aware of your positional boundary even while focused on the ball.'",
     "Rotate which third each group is assigned to every few minutes so everyone experiences a different third.",
     "For 'easier', use fewer positions with more space; for 'harder', use more positions with tighter boundaries."
    ]
   },
   {
    "name": "Transition Third Relay",
    "desc": "Ball is passed down the court through all three thirds in sequence, with players entering and leaving the play as the ball crosses each boundary line.",
    "coach": "Communicate with teammates about who's allowed in which third right now",
    "easier": "Slower pace, walked through",
    "harder": "Faster pace, timed race",
    "chaos": "Beat the clock",
    "setup": "Whole class on a marked court divided into three thirds, with groups of 3-4 students assigned to each third at the start. One ball for the whole relay.",
    "howTo": [
     "Explain that the ball must be passed down the court through all three thirds in sequence, from defence third to centre third to attack third.",
     "As the ball crosses each boundary line, the players from that third step out and the players from the next third take over, so the ball is always in the hands of players allowed in that zone.",
     "Coach the key message: 'communicate with teammates about who's allowed in which third right now.'",
     "Run the sequence there and back, timing how quickly the ball can travel down and back through all three thirds cleanly.",
     "For 'easier', walk through the sequence slowly; for 'harder', run it at a faster pace and time it as a race."
    ]
   }
  ],
  "big": {
   "name": "Thirds-Aware Netball",
   "desc": "Small-sided game on a marked court where players are gently reminded of simplified positional boundaries (without full 7-a-side rules yet), building court awareness ahead of full positional play.",
   "setup": "Split into groups of 8 for small-sided games on a court marked into three thirds. One ball per game, bibs for each team.",
   "howTo": [
    "Play a small-sided game on the marked court, gently reminding players of the simplified positional boundaries as they play — this isn't full 7-a-side rules yet.",
    "The coach reminds players which third they're currently allowed to be active in, without stopping play for long explanations.",
    "Encourage players to stay generally aware of the thirds while still focusing on passing, moving, and scoring.",
    "This game builds court awareness ahead of the full positional play introduced in Lesson 15.",
    "Rotate players on and off court every few minutes so everyone gets even game time.",
    "Keep the tone light — the goal is familiarity with the thirds, not strict enforcement yet."
   ]
  },
  "discussion": [
   "What did you notice about how the thirds shaped where the ball could go?",
   "Why might a netball court be divided into thirds like this?",
   "What was tricky about staying aware of your third while playing?"
  ],
  "lookfors": [
   "Can name the three thirds of the court",
   "Moves into the correct third at appropriate times",
   "Shows awareness of positional boundaries during play"
  ],
  "inclusion": "Use highly visible markers (different coloured cones or chalk lines) for students who find spatial boundaries hard to judge.",
  "skillBreakdown": [
   {
    "step": "Know which third you're allowed to play in for your position.",
    "why": "Netball's court-thirds rule restricts where each position can go."
   },
   {
    "step": "Stay aware of the ball's position relative to your third.",
    "why": "Helps you anticipate when you'll become involved in play."
   },
   {
    "step": "Communicate with teammates about court areas.",
    "why": "Reduces confusion about who covers which space."
   }
  ]
 },
 {
  "n": 15,
  "block": 3,
  "title": "Find Your Spot",
  "focus": "Positional roles & where to stand",
  "walt": "We are learning about the different positions in netball and where each one is allowed to play on the court.",
  "wilf": [
   "I can name at least 2 netball positions and where they're allowed to go",
   "I can move to the correct area of the court for my assigned position"
  ],
  "nzc": "Strand C (Relationships with Other People) · Relating to others, Participating & contributing",
  "value": "Manaaki",
  "valueText": "Valuing every position on the team equally — a defender is just as important as a shooter, and everyone's contribution matters.",
  "equipment": "Balls, bibs marking positions, cones marking court areas",
  "safety": "Rotate positions regularly so no student is stuck in one role for the whole lesson",
  "games": [
   {
    "name": "Position Carousel",
    "desc": "In small groups, students rotate through simplified positions (e.g. shooter, centre, defender) every few minutes in a continuous small game.",
    "coach": "Know what your current position is asking of you before the ball arrives",
    "easier": "Longer rotations, simpler positions",
    "harder": "Shorter rotations, more positions",
    "chaos": "Role rotation",
    "setup": "Small groups of 5-6 on a small court roughly 12m x 8m, with bibs marking 3 simplified positions (e.g. shooter, centre, defender). One ball per group.",
    "howTo": [
     "Assign each student a starting simplified position using bibs, and explain each position's basic job for this game.",
     "Play a continuous small-sided game where students rotate through the simplified positions every few minutes on a call.",
     "Coach the key message: 'know what your current position is asking of you before the ball arrives.'",
     "When rotating, swap bibs quickly so play can resume with minimal stoppage.",
     "For 'easier', use longer rotations with simpler positions; for 'harder', use shorter rotations with more positions to learn."
    ]
   },
   {
    "name": "Position Walkthrough",
    "desc": "Coach/app sets up a simple team structure and the team walks through where each position should stand as the ball moves around the court.",
    "coach": "Talk to your teammates about where you're going, not just where you are",
    "easier": "Fewer positions, walked through slowly",
    "harder": "More positions, at jogging pace",
    "chaos": "Bonus objectives",
    "setup": "Whole team (5-7 students) on a marked court, bibs showing each assigned simplified position, walking pace only, no defenders yet.",
    "howTo": [
     "Set up a simple team structure with each student in their assigned position and bib.",
     "Walk the team slowly through where each position should stand and move to as the ball is passed around the court.",
     "Coach the key message: 'talk to your teammates about where you're going, not just where you are.'",
     "Pause and reset if a player drifts out of their positional area, showing them where to return to.",
     "For 'easier', use fewer positions and walk through slowly; for 'harder', use more positions and move at a light jogging pace."
    ]
   },
   {
    "name": "Find Your Space Game",
    "desc": "Small-sided game where each player is assigned a position for that game only; points awarded when a player is found in the correct positional area when the ball arrives near them.",
    "coach": "A position isn't standing still — it's being in the right space at the right time",
    "easier": "Fewer positional boundaries",
    "harder": "Full positional boundaries",
    "chaos": "Bonus objectives",
    "setup": "Small-sided groups of 6-8 on a court with positional areas marked by cones, bibs assigned per position. One ball per game.",
    "howTo": [
     "Assign each player a position for the game only, with a bib and a marked area they're expected to be in.",
     "Play flows as a small-sided game; a point is awarded whenever a player is found standing in their correct positional area at the moment the ball arrives near them.",
     "Coach the key message: 'a position isn't standing still — it's being in the right space at the right time.'",
     "The coach or a nominated caller watches for correct positioning and calls out points as they happen.",
     "For 'easier', use fewer positional boundaries; for 'harder', enforce full positional boundaries strictly."
    ]
   }
  ],
  "big": {
   "name": "Positional Small-Sided Netball",
   "desc": "4v4 or 5v5 with simplified assigned positions — teams are coached to recognise how their individual position contributes to the team's overall shape and success.",
   "setup": "Split into groups of 8-10 for 4v4 or 5v5 games on a full or near-full court, bibs assigned per simplified position. One ball per game.",
   "howTo": [
    "Assign simplified positions to every player using bibs before starting, matching the positions practised in today's Skill Games.",
    "Play a normal small-sided game with each player generally staying within their positional responsibility.",
    "The coach highlights moments where a player's position clearly helped the team — e.g. a defender covering their zone, or a shooter staying ready in the circle.",
    "Coach teams explicitly to recognise how their individual position contributes to the team's overall shape and success.",
    "Rotate players through different positions every few minutes so everyone experiences more than one role.",
    "Keep reminding players that positions are about being in the right space at the right time, not standing still."
   ]
  },
  "discussion": [
   "What did your position ask you to do differently from a teammate's position?",
   "How did understanding positions help the team play better together?",
   "What was it like trying a position you don't usually play?"
  ],
  "lookfors": [
   "Can describe their assigned position in simple terms",
   "Positions themselves appropriately for their role",
   "Supports and communicates with teammates in different positions"
  ],
  "inclusion": "Offer a simplified two-position version (attacker/defender) for students who find multiple positions overwhelming, building up to full structure over the lesson.",
  "skillBreakdown": [
   {
    "step": "Know your position's typical starting area and role.",
    "why": "Understanding your job helps you make faster decisions in games."
   },
   {
    "step": "Adjust your positioning based on where the ball is.",
    "why": "Positions aren't static — they shift with the flow of play within the allowed areas."
   },
   {
    "step": "Communicate your position or intentions to teammates.",
    "why": "Reduces overlaps and gaps in team shape."
   }
  ]
 },
 {
  "n": 16,
  "block": 4,
  "title": "Centre Stage",
  "focus": "Centre pass strategy",
  "walt": "We are learning a simple strategy for starting play well from the centre pass.",
  "wilf": [
   "I can move into a good position to receive or support the centre pass",
   "I can help my team plan a simple centre pass strategy"
  ],
  "nzc": "Strand B · Thinking",
  "value": "Pānga",
  "valueText": "Being patient with a team while learning a multi-person pattern — timing takes a few tries to click for everyone.",
  "equipment": "Balls, cones marking the centre third, bibs",
  "safety": "Keep the centre pass area clear of congestion — space players out to avoid collisions at the whistle",
  "games": [
   {
    "name": "Centre Pass Walkthrough",
    "desc": "Team walks through a simple centre pass pattern slowly: centre passes to a leading attacker, others move to support, before adding any defence.",
    "coach": "Everyone has a job on the centre pass — know yours before the whistle",
    "easier": "Walk pace only",
    "harder": "Add a light jog",
    "chaos": "Random constraint calls",
    "setup": "Whole team (5-7 students) on the centre third of the court, no defenders yet, one ball per team, walk pace only.",
    "howTo": [
     "Set up the team in their centre pass positions: one player taking the centre pass, one attacker leading, others in support positions.",
     "Walk the team slowly through the pattern: the centre passes to the leading attacker while the rest of the team moves into supporting positions.",
     "Coach the key message: 'everyone has a job on the centre pass — know yours before the whistle.'",
     "Repeat the walkthrough a few times so every player is confident in their specific role.",
     "For 'easier', keep it at walk pace only; for 'harder', add a light jog to the pattern."
    ]
   },
   {
    "name": "Centre Pass vs Shadow Defence",
    "desc": "Team practises their centre pass pattern against shadow defenders (not intercepting) to get used to defensive presence without losing the ball.",
    "coach": "Stick to the plan even with defenders nearby — trust your teammates' movement",
    "easier": "Defenders further back",
    "harder": "Defenders closer, more realistic",
    "chaos": "Added defender/pressure",
    "setup": "Whole team on the centre third with shadow defenders from another group standing near their marks (hands-off, not intercepting). One ball per team.",
    "howTo": [
     "The team runs their centre pass pattern from Centre Pass Walkthrough exactly as practised, now with defenders standing nearby.",
     "Defenders mark their positions but do not intercept or move to block, simply adding a realistic visual presence.",
     "Coach the key message: 'stick to the plan even with defenders nearby — trust your teammates' movement.'",
     "Repeat the pattern several times, encouraging the team to stay composed rather than panicking at the sight of a defender.",
     "For 'easier', have defenders stand further back; for 'harder', have defenders stand closer for a more realistic look."
    ]
   },
   {
    "name": "Centre Pass Race",
    "desc": "Groups practise executing a clean centre pass and first two passes as fast and cleanly as possible, racing another group for the fastest clean sequence.",
    "coach": "Communicate clearly who's taking the first pass",
    "easier": "Slower pace",
    "harder": "Faster pace, timed",
    "chaos": "Beat the clock, head-to-head mirror",
    "setup": "Two teams of 5-7 running their centre pass pattern side by side in separate areas, timed by the coach or a stopwatch. One ball per team.",
    "howTo": [
     "Each team lines up in their centre pass positions, ready to execute the pattern as cleanly and quickly as possible.",
     "On 'go', teams execute their centre pass and the first two passes of their pattern, aiming for a clean, error-free sequence.",
     "Coach the key message: 'communicate clearly who's taking the first pass' to avoid confusion at the start.",
     "The fastest team to complete a clean sequence (no drops, no confusion) wins that round; run several rounds.",
     "For 'easier', run at a slower pace; for 'harder', run at full pace and time every round."
    ]
   }
  ],
  "big": {
   "name": "Centre Pass Netball",
   "desc": "4v4 or 5v5 — every restart uses a real centre pass; teams are encouraged to run their planned pattern each time, aiming to beat a drifting or disorganised defence early in the phase.",
   "setup": "Split into groups of 8-10 for 4v4 or 5v5 games on a full or near-full court with live defence. One ball per game, bibs for each team.",
   "howTo": [
    "Explain the rule before starting: every restart of play (after a score, or after any stoppage) uses a real centre pass, run exactly as practised.",
    "Teams are encouraged to run their planned pattern every time the centre pass restarts, rather than improvising.",
    "The defending team tries to organise quickly to disrupt the pattern, giving attackers a real incentive to execute cleanly and quickly.",
    "Coach the key message during play: run the plan, communicate clearly, and trust your teammates' movement.",
    "Rotate players on and off court every few minutes so everyone gets even game time.",
    "Celebrate clean, well-organised centre pass sequences that beat a disorganised or slow-to-set defence."
   ]
  },
  "discussion": [
   "What made your centre pass pattern successful (or not) against a defender today?",
   "How did planning ahead help your team start well?",
   "What's the purpose of having a plan for the centre pass?"
  ],
  "lookfors": [
   "Moves into a planned position for the centre pass",
   "Communicates clearly with teammates before the whistle",
   "Executes the pattern with reasonable timing"
  ],
  "inclusion": "Simplify the pattern to just two players (centre + one target) for teams still building confidence before adding more players to the plan.",
  "skillBreakdown": [
   {
    "step": "Set up in planned starting positions for the centre pass.",
    "why": "A structured start creates better options than a random scramble."
   },
   {
    "step": "Move immediately and with purpose once the whistle goes.",
    "why": "The centre pass has strict timing rules, so early, decisive movement matters."
   },
   {
    "step": "Communicate the planned play if your team has one.",
    "why": "Coordinated movement beats individuals guessing what happens next."
   }
  ]
 },
 {
  "n": 17,
  "block": 4,
  "title": "Attack Patterns",
  "focus": "Attacking play patterns",
  "walt": "We are learning simple attacking patterns that help our team move the ball toward the shooting circle.",
  "wilf": [
   "I can run a simple attacking pattern with my team",
   "I can adjust the pattern based on what the defence is doing"
  ],
  "nzc": "Strand B · Thinking",
  "value": "Aroha",
  "valueText": "Understanding how your decisions within the pattern affect whether the whole team's play succeeds.",
  "equipment": "Balls, cones, bibs",
  "safety": "Keep attacking patterns within a marked area so groups don't collide with each other",
  "games": [
   {
    "name": "Pattern Walkthrough",
    "desc": "Team walks through a simple attacking pattern (e.g. pass-and-move into the circle) slowly with cone markers before adding pace or defence.",
    "coach": "Know your role in the pattern before you start moving",
    "easier": "Fewer players, simpler pattern",
    "harder": "More players, more complex pattern",
    "chaos": "Random constraint calls",
    "setup": "Small groups of 3-4 within a marked area, cone markers laid out to show the attacking pattern (e.g. pass-and-move into the circle), no defenders yet. One ball per group.",
    "howTo": [
     "Walk the group slowly through the pattern using the cone markers as a guide — who passes first, who moves where, who ends up taking the shot.",
     "Coach the key message: 'know your role in the pattern before you start moving.'",
     "Repeat the walkthrough a few times at walking pace until every player knows their part without needing reminders.",
     "Once confident, add a light jog to the same pattern.",
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
    "setup": "Same groups as Pattern Walkthrough, with shadow defenders from another group standing near their marks (hands-off, not intercepting). One ball per group, marked area at least 3m from neighbouring groups.",
    "howTo": [
     "The group runs their attacking pattern exactly as walked through, now with defenders standing nearby to add visual pressure.",
     "Defenders mark their positions but do not intercept or move to block, keeping the focus on the attacking team's execution.",
     "Coach the key message: 'trust the pattern — don't abandon it the moment a defender appears.'",
     "Repeat the pattern several times so the team gets comfortable running it with defenders present.",
     "For 'easier', have defenders stand further back; for 'harder', have defenders stand closer for realism."
    ]
   },
   {
    "name": "Read & Adjust",
    "desc": "Team runs their pattern, but must adjust on the fly if a defender blocks the planned option, practising a backup plan.",
    "coach": "Have a simple backup option in mind if your first choice is covered",
    "easier": "Predictable defensive block",
    "harder": "Unpredictable defensive block",
    "chaos": "Mild opposition + decision-making",
    "setup": "Same groups, with one active (but hands-off) defender who can block the planned passing option. One ball per group, marked area at least 3m from neighbouring groups.",
    "howTo": [
     "The team starts running their pattern; the defender positions themselves to block the first planned option (e.g. stands in the passing lane).",
     "When the first option is blocked, the team must adjust and use a simple backup option instead of forcing the original plan.",
     "Coach the key message: 'have a simple backup option in mind if your first choice is covered.'",
     "Rotate the defender role every few reps so everyone experiences reading and adjusting under pressure.",
     "For 'easier', have the defender block in a predictable way; for 'harder', have the defender block unpredictably."
    ]
   }
  ],
  "big": {
   "name": "Attacking Pattern Netball",
   "desc": "4v4 or 5v5 with full defence — attacking teams are encouraged to run at least one planned pattern per possession, adjusting when the defence covers their first option.",
   "setup": "Split into groups of 8-10 for 4v4 or 5v5 games on a full or near-full court with full live defence. One ball per game, bibs for each team.",
   "howTo": [
    "Play a normal small-sided game with full defensive pressure allowed (hands-off, correct marking distance).",
    "Attacking teams are encouraged to run at least one planned pattern per possession, drawing on today's Skill Games.",
    "When the defence covers the first option, attackers should adjust to a backup option rather than forcing a blocked pass.",
    "The coach highlights good examples of teams running a pattern and good examples of teams adjusting smartly when defended.",
    "Rotate players on and off court every few minutes so everyone gets even game time.",
    "Keep encouraging composure and communication as teams try their patterns under real game pressure."
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
    "step": "Learn and follow your team's planned movement pattern.",
    "why": "Patterns create better space and options than random attacking."
   },
   {
    "step": "Adjust the pattern when the defence covers the first option.",
    "why": "Real games require adapting a plan, not abandoning it at the first sign of resistance."
   },
   {
    "step": "Communicate during the pattern so everyone stays connected.",
    "why": "A silent pattern breaks down easily under pressure."
   }
  ]
 },
 {
  "n": 18,
  "block": 4,
  "title": "Team Wall",
  "focus": "Defensive team strategy",
  "walt": "We are learning to defend as a connected team, not just as individuals marking their own player.",
  "wilf": [
   "I can communicate with my defensive teammates about where the ball and attackers are",
   "I can adjust my defensive position based on what my teammates are doing"
  ],
  "nzc": "Strand B & C · Thinking, Relating to others",
  "value": "Mōhio",
  "valueText": "Thinking about how your individual defensive choices (helping or not helping) affect the whole team's structure.",
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
    "setup": "Small groups of 4-5 defenders working together against 3-4 attackers on a marked court roughly 12m x 10m. One ball, bibs for attackers.",
    "howTo": [
     "Defenders practise calling out loudly and clearly whenever an attacker looks dangerous — open, about to receive a pass, or about to shoot.",
     "Coach the key message: 'call early and specifically — name who and what you're seeing,' e.g. 'watch the shooter, she's open!'",
     "Attackers move and pass as normal while defenders focus purely on communication rather than intercepting.",
     "Rotate which students are defending versus attacking every few minutes.",
     "For 'easier', use slower, more obvious danger for defenders to spot and call; for 'harder', use faster, less obvious danger."
    ]
   },
   {
    "name": "Cover & Recover",
    "desc": "One defender practises leaving their direct mark briefly to cover a bigger danger, while a teammate calls out and helps recover the original mark.",
    "coach": "Communicate the swap clearly so no attacker is left completely open",
    "easier": "Slower pace, more time to communicate",
    "harder": "Faster pace, quick decisions",
    "chaos": "Mild opposition + decision-making",
    "setup": "Small groups of 4-5 defenders against 3-4 attackers on a marked court, one designated defender practising the cover-and-recover movement at a time. One ball, bibs for attackers.",
    "howTo": [
     "One defender briefly leaves their direct mark to cover a bigger danger elsewhere on the court (e.g. an unmarked shooter).",
     "A teammate calls out clearly and steps in to cover the original mark that's now been left open.",
     "Coach the key message: 'communicate the swap clearly so no attacker is left completely open.'",
     "Rotate which defender practises the cover-and-recover movement so everyone gets a turn.",
     "For 'easier', use a slower pace with more time to communicate; for 'harder', use a faster pace requiring quick decisions."
    ]
   },
   {
    "name": "Team Defence Grid",
    "desc": "Small-sided game where the defending team's only job is to communicate and cover for each other, with the coach highlighting good team defensive moments.",
    "coach": "Defence is a team job, not just your own player",
    "easier": "Fewer attackers, easier to cover",
    "harder": "Full attacking numbers",
    "chaos": "Role rotation",
    "setup": "Small-sided groups of 8 (4 attackers, 4 defenders) in a grid roughly 12m x 10m. One ball, bibs for each team.",
    "howTo": [
     "Explain that the defending team's only job in this game is to communicate and cover for each other — there's no separate attacking focus today.",
     "Play flows as a small-sided game with defenders focusing purely on calling danger and covering gaps as a team.",
     "The coach highlights good team defensive moments out loud as they happen, naming what made the cover or call effective.",
     "Coach the key message: 'defence is a team job, not just your own player.'",
     "For 'easier', use fewer attackers, making it easier to cover; for 'harder', use the full attacking numbers."
    ]
   }
  ],
  "big": {
   "name": "Team Defence Netball",
   "desc": "4v4 or 5v5 — defending team is coached explicitly on communication and covering for each other, while attackers try to exploit any gaps in the defensive structure.",
   "setup": "Split into groups of 8-10 for 4v4 or 5v5 games on a full or near-full court with full live defence. One ball per game, bibs for each team.",
   "howTo": [
    "Play a normal small-sided game, with the defending team explicitly coached to communicate and cover for each other throughout.",
    "Attackers try to exploit any gaps that open up in the defensive structure, especially where defenders forget to communicate a cover.",
    "The coach highlights strong team defensive moments and gently points out moments where a call or cover was missed.",
    "Coach the key message during play: 'defence is a team job, not just your own player.'",
    "Rotate players on and off court every few minutes so everyone gets even game time.",
    "Keep communication calm and clear rather than aggressive shouting, consistent with today's safety note."
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
    "step": "Communicate constantly about who's marking whom.",
    "why": "Team defence relies on clear roles, updated in real time."
   },
   {
    "step": "Cover for a teammate who's beaten, then recover to your own player.",
    "why": "Helping without abandoning your own responsibility keeps the defence solid."
   },
   {
    "step": "Move as a connected unit, not as isolated defenders.",
    "why": "Gaps appear where defenders aren't working together."
   }
  ]
 },
 {
  "n": 19,
  "block": 4,
  "title": "Position Swap",
  "focus": "Full small-sided games with position rotation",
  "walt": "We are learning to apply everything we've practised across a full small-sided game, rotating through different positions.",
  "wilf": [
   "I can apply at least one tactic we've learned in a live game situation",
   "I can adapt my play when I rotate into a new position"
  ],
  "nzc": "Strand B & C · Thinking, Relating to others, Participating & contributing",
  "value": "Manaaki",
  "valueText": "Bringing everything together fairly — playing hard, playing safe, and playing for the team, not just for yourself.",
  "equipment": "Balls, bibs marking positions, cones for court boundaries",
  "safety": "Full positional rules apply — reinforce the footwork rule and marking distance before starting",
  "games": [
   {
    "name": "Tactic Spotlight Rounds",
    "desc": "Short rounds of small-sided games where each round has a spotlighted tactic (e.g. 'today's focus: use your lead timing') that the coach/app calls out and looks for in play.",
    "coach": "Try the spotlighted tactic even if it doesn't work perfectly the first time",
    "easier": "Longer rounds, simpler tactic focus",
    "harder": "Shorter rounds, combined tactics",
    "chaos": "Bonus objectives",
    "setup": "Small-sided groups of 8-10 on a full or near-full court, playing short rounds (e.g. 3-4 minutes each) with a new spotlighted tactic called at the start of each round. One ball per game, bibs for each team.",
    "howTo": [
     "Before each round, the coach or app calls out a spotlighted tactic drawn from earlier in the unit (e.g. 'today's focus: use your lead timing').",
     "Teams play the round trying to consciously apply the spotlighted tactic whenever the opportunity arises.",
     "Coach the key message: 'try the spotlighted tactic even if it doesn't work perfectly the first time.'",
     "At the end of each round, briefly ask a couple of students where they used the tactic before starting the next round with a new focus.",
     "For 'easier', use longer rounds with a simpler tactic focus; for 'harder', use shorter rounds with combined tactics called together."
    ]
   },
   {
    "name": "Coach's Freeze & Reset",
    "desc": "During live small-sided games, the coach/app occasionally calls 'freeze' to briefly discuss the decision just made, then play resumes from that point.",
    "coach": "Use the freeze as a learning moment, not a criticism",
    "easier": "Fewer freezes, longer play periods",
    "harder": "More frequent freezes",
    "chaos": "Random constraint calls",
    "setup": "Small-sided games of 8-10 on a full or near-full court, played continuously with the coach ready to pause play at key moments. One ball per game, bibs for each team.",
    "howTo": [
     "Play flows as a normal small-sided game; the coach occasionally calls 'freeze!' at an interesting moment.",
     "When frozen, briefly discuss the decision that was just made — what the options were and what happened — with the players involved.",
     "Coach the key message: 'use the freeze as a learning moment, not a criticism.'",
     "Resume play immediately from exactly where it froze once the brief discussion is done.",
     "For 'easier', use fewer freezes with longer play periods in between; for 'harder', use more frequent freezes."
    ]
   },
   {
    "name": "Position Rotation Game",
    "desc": "Small-sided games where players rotate positions every few minutes, applying full rules and whichever tactics suit their current role.",
    "coach": "Talk to your team between rotations about what worked",
    "easier": "Longer periods per position, fewer rotations",
    "harder": "Shorter periods, more rotations",
    "chaos": "Role rotation",
    "setup": "Small-sided games of 8-10 on a full or near-full court, bibs marking assigned positions that rotate on a timer. One ball per game.",
    "howTo": [
     "Assign each player a starting position with a bib, applying full rules learned across the unit.",
     "Play continuously, rotating players through different positions every few minutes on a call.",
     "Coach the key message: 'talk to your team between rotations about what worked' in their previous position.",
     "Encourage players to apply whichever tactics suit their current role once they rotate.",
     "For 'easier', use longer periods per position with fewer rotations; for 'harder', use shorter periods with more frequent rotations."
    ]
   }
  ],
  "big": {
   "name": "Full-Rules Small-Sided Netball",
   "desc": "4v4 or 5v5, full simplified netball rules (footwork, marking distance, thirds) — teams are encouraged to consciously apply tactics from across the unit (dodge/lead, pass-and-move, team defence, patterns) in genuine competitive play.",
   "setup": "Split into groups of 8-10 for 4v4 or 5v5 games on a full or near-full court, full simplified netball rules in play (footwork, marking distance, thirds). One ball per game, bibs for each team.",
   "howTo": [
    "Explain that today's game brings together every rule and tactic covered across the unit: footwork, marking distance, thirds, dodge/lead, pass-and-move, team defence, and attacking patterns.",
    "Play a normal small-sided game under full simplified rules, encouraging teams to consciously apply tactics from across the unit whenever they fit.",
    "The coach highlights moments where a specific tactic from an earlier lesson clearly helped a team, naming it out loud.",
    "Keep enforcing the core rules (footwork, marking distance) consistently, since this is full-rules play.",
    "Rotate players on and off court every few minutes so everyone gets even game time.",
    "Use this as the final tune-up before tomorrow's tournament, keeping the tone encouraging and game-like."
   ]
  },
  "discussion": [
   "What tactic did you try today, and how did it go?",
   "What was different about playing a new position?",
   "What's one thing your team could work on next time?"
  ],
  "lookfors": [
   "Applies at least one taught tactic recognisably in live play",
   "Adjusts their play appropriately for a new position",
   "Communicates with teammates during live play"
  ],
  "inclusion": "Allow a slightly reduced pace or smaller-sided game (e.g. 3v3) for groups still building confidence with full rules before scaling to 5v5.",
  "skillBreakdown": [
   {
    "step": "Apply your position's specific job wherever you're rotated to.",
    "why": "Rotating positions tests whether you understand the role, not just memorised movements."
   },
   {
    "step": "Communicate your new position clearly after rotating.",
    "why": "Helps teammates adjust their own play around you."
   },
   {
    "step": "Adjust quickly to a new position's space and rules.",
    "why": "Netball's court-thirds rules change depending on which position you're in."
   }
  ]
 },
 {
  "n": 20,
  "block": 4,
  "title": "Netball Cup",
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
  "safety": "Manage fatigue with rotations/subs; reinforce footwork and marking distance rules before the tournament begins",
  "games": [
   {
    "name": "Skills Warm-In Circuit",
    "desc": "A short rotating circuit revisiting the unit's key skills (pass & catch, footwork, dodge & lead, shoot, defend) as a fun warm-in before the tournament starts.",
    "coach": "Bring your best technique from across the unit into every station",
    "easier": "Longer stations, fewer skills",
    "harder": "Shorter stations, all skills",
    "chaos": "Beat the clock",
    "setup": "5 short stations set up around the space (pass & catch, footwork, dodge & lead, shoot, defend), each with the equipment needed (balls, cones, hoops), groups of 3-4 rotating through together.",
    "howTo": [
     "Explain each station briefly before starting: pass & catch, footwork, dodge & lead, shoot, and defend, each revisiting a key skill from across the unit.",
     "Groups spend a short, timed period at each station (e.g. 1-2 minutes) before rotating to the next on a signal.",
     "Coach the key message: 'bring your best technique from across the unit into every station.'",
     "Keep the mood light and energetic — this is a warm-in, not a formal assessment.",
     "For 'easier', use longer stations covering fewer skills; for 'harder', use shorter stations covering all five skills quickly."
    ]
   },
   {
    "name": "Captain's Huddle",
    "desc": "Each team spends 2 minutes with their 'captain' (rotating role) planning one simple tactic to try in their first game — a light strategy touchpoint before playing.",
    "coach": "Keep the plan simple — one clear idea everyone understands",
    "easier": "Coach suggests the tactic",
    "harder": "Team chooses their own tactic",
    "chaos": "Bonus objectives",
    "setup": "Each tournament team gathers in their own huddle area for 2 minutes before their first game, with a rotating 'captain' role for each team.",
    "howTo": [
     "Each team nominates or rotates in a 'captain' for this tournament session.",
     "The captain leads a brief 2-minute huddle, helping the team agree on one simple tactic to try in their first game.",
     "Coach the key message: 'keep the plan simple — one clear idea everyone understands.'",
     "Teams head straight into their first game once the huddle finishes, trying to apply their chosen tactic early.",
     "For 'easier', have the coach suggest the tactic; for 'harder', have the team choose their own tactic independently."
    ]
   },
   {
    "name": "Fair Play Check-In",
    "desc": "Brief between-games moment where teams acknowledge one good play from their opponent, reinforcing sportsmanship as part of the tournament structure.",
    "coach": "Be specific — name what your opponent did well",
    "easier": "n/a",
    "harder": "n/a",
    "chaos": "n/a",
    "setup": "Brief moment between games where each team gathers for under a minute, no equipment needed.",
    "howTo": [
     "Between games, gather each team briefly and ask them to name one good play their opponent made during the game just finished.",
     "Coach the key message: 'be specific — name what your opponent did well,' rather than a generic compliment.",
     "Keep this check-in short so it doesn't eat into playing time, then move straight into the next game.",
     "Repeat this fair play check-in after every game throughout the tournament."
    ]
   }
  ],
  "big": {
   "name": "Netball Cup — Round Robin",
   "desc": "Full simplified netball rules, small-sided round-robin mini-tournament (4v4 or 5v5) across several short games; ladder/results tracked lightly and playfully, with every team guaranteed multiple games regardless of results.",
   "setup": "Whole class split into teams of 4-6 for a round-robin mini-tournament across the full or near-full court, using bibs of multiple colours and a simple ladder/scoreboard visible to everyone. Full simplified netball rules apply.",
   "howTo": [
    "Explain the round-robin format: every team plays several short games against different opponents, with results tracked lightly on the ladder/scoreboard.",
    "Run each game under full simplified rules (footwork, marking distance, thirds), keeping game lengths short so every team gets multiple games.",
    "Between games, run the Fair Play Check-In quickly so it doesn't eat into playing time.",
    "Update the ladder/scoreboard playfully after each round, keeping the tone fun and low-pressure regardless of results.",
    "Guarantee every team gets to play multiple games, adjusting the schedule on the fly if a team finishes early.",
    "Manage fatigue by rotating players on and off within each team's games, and remind teams of the footwork and marking distance rules before each game starts."
   ]
  },
  "discussion": [
   "What's one skill from across the whole unit you felt proudest of today?",
   "How did your team work together across multiple games?",
   "What would you want to work on if we played another netball unit?"
  ],
  "lookfors": [
   "Applies a recognisable range of skills from across the unit",
   "Shows good sportsmanship across wins and losses",
   "Encourages and includes teammates throughout the tournament"
  ],
  "inclusion": "Ensure team sizes/formats can flex on the day for uneven numbers; emphasise participation and effort in any informal recognition, not just results.",
  "skillBreakdown": [
   {
    "step": "Apply skills and positional understanding from across the unit.",
    "why": "The tournament brings every part of the unit together under real competitive pressure."
   },
   {
    "step": "Communicate and encourage teammates throughout.",
    "why": "Netball's fast pace relies heavily on constant, clear communication."
   },
   {
    "step": "Play fairly within the rules you've learned.",
    "why": "Understanding and respecting the rules is part of playing netball well."
   }
  ]
 }
];

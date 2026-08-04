// Hand-Eye Coordination unit data — HANDEYE_BLOCK_INFO + HANDEYE_LESSONS
const HANDEYE_BLOCK_INFO = {
  1:{name:"Tracking & Catching", range:"Lessons 1–5", color:"var(--b1)", soft:"var(--b1-soft)", warmup:"Track & Toss Jog", warmdown:"Walk & Reach",
    warmupSetup:"Open space roughly 20m x 20m for the whole class, each student with their own soft/foam ball. No cones or grids needed.",
    warmupHowTo:["Demonstrate tossing the ball gently a short distance above your own head and catching it while jogging on the spot.", "On 'go', everyone jogs freely around the space, each tossing and catching their own ball as they move.", "Every 20-30 seconds, call a change: 'higher toss' (toss a little higher before catching), 'clap toss' (clap once before the catch), or 'partner toss' (quick toss to the nearest person, then keep jogging).", "Keep the pace light and playful — the aim is raising heart rates and warming up eyes-to-hands timing, not testing skill.", "Run for the full 5 minutes, mixing up the order of calls."],
    warmdownSetup:"No equipment needed beyond the space already in use. Gather the class into a loose circle or scattered spread with room for each student to reach without touching anyone else.",
    warmdownHowTo:["Have students set their ball to the side and walk slowly around the space for about 1 minute to bring heart rate down gradually.", "Gather into a circle (or stay scattered) and lead 3-4 simple static stretches — shoulders, arms across the chest, calves, and a gentle reach-up/side stretch — holding each for about 15-20 seconds.", "Keep instructions simple and calm: 'reach, hold, breathe' rather than technical cues.", "Use this quiet time to briefly ask how the session felt for a couple of students, setting a relaxed tone before the Discussion segment.", "Finish with everyone standing tall and taking one big breath in and out together."]
  },
  2:{name:"Striking & Contact", range:"Lessons 6–10", color:"var(--b2)", soft:"var(--b2-soft)", warmup:"Strike Prep Shuffle", warmdown:"Partner Stretch",
    warmupSetup:"Open space roughly 20m x 20m for the whole class, no equipment needed beyond enough room to shuffle side-to-side without colliding.",
    warmupHowTo:["Demonstrate a light athletic shuffle stance: knees bent, weight on the balls of the feet, hands up ready — the same base position used before striking a ball.", "On 'go', everyone jogs freely around the space, dropping into a quick side-to-side shuffle every time the teacher calls 'shuffle', then returning to jogging on 'jog'.", "Every 20-30 seconds, call a change: 'shuffle left', 'shuffle right', or 'shadow swing' (a few gentle practice swings on the spot with an imaginary bat).", "Keep the pace light and playful — the aim is raising heart rate and warming up the ready stance used for striking, not testing skill.", "Run for the full 5 minutes, mixing up the order of calls."],
    warmdownSetup:"No equipment needed. Split into pairs spread out with enough room to stretch side-by-side without touching another pair.",
    warmdownHowTo:["Have pairs walk together slowly around the space for about 1 minute to bring heart rate down.", "In pairs, lead 3-4 simple partner-assisted stretches — e.g. one partner gently holds the other's arm across their chest for a shoulder stretch, or both sit and reach toward each other's feet for a hamstring stretch.", "Hold each stretch for about 15-20 seconds, then swap who is being assisted if the stretch requires it.", "Keep contact gentle and consent-based — no forcing a stretch further than a partner is comfortable with.", "Finish with partners saying one thing their partner did well in today's session before moving into the Discussion segment."]
  },
  3:{name:"Reaction & Timing", range:"Lessons 11–15", color:"var(--b3)", soft:"var(--b3-soft)", warmup:"Quick Reaction Jog", warmdown:"Breathe & Balance",
    warmupSetup:"Open space roughly 20m x 20m for the whole class, no equipment needed beyond enough room to change direction quickly without colliding.",
    warmupHowTo:["Demonstrate a quick reactive change of direction: jogging forward, then instantly sprinting a few steps sideways or backward on a signal.", "On 'go', everyone jogs freely around the space at an easy pace.", "Every 15-20 seconds, call a sudden signal — a clap, a colour, or a number — and students react immediately with a quick change of direction or a short burst of speed.", "Keep the pace playful and unpredictable — the aim is warming up quick reactions and raising heart rate, not testing skill.", "Run for the full 5 minutes, varying how often and how suddenly signals are called."],
    warmdownSetup:"No equipment needed. Gather the class into a spread-out circle with room to balance without bumping others.",
    warmdownHowTo:["Walk slowly around the space for about 1 minute to bring heart rate down.", "Lead a few slow, controlled breathing cycles together: breathe in for 4 counts, hold for 2, breathe out for 4 — repeat 3-4 times.", "Follow with 2-3 simple balance holds, e.g. standing on one foot for 10-15 seconds, then swap feet — this connects to the composure and control used in reaction and timing work.", "Keep the tone calm and unhurried — this is a good moment to help students settle before reflecting on the lesson.", "Finish standing tall with one final deep breath together before moving into the Discussion segment."]
  },
  4:{name:"Combining Skills & Culmination", range:"Lessons 16–20", color:"var(--b4)", soft:"var(--b4-soft)", warmup:"Coordination Circuit Jog", warmdown:"Circle Stretch & Cheer",
    warmupSetup:"Open space roughly 20m x 20m for the whole class, with 3-4 simple markers (cones) placed around the space to jog between. No other equipment needed.",
    warmupHowTo:["Demonstrate a light jog that weaves between the cones, adding a quick change of pace or direction at each one.", "On 'go', everyone jogs freely around the space, weaving between the cones at their own pace.", "Every 20-30 seconds, call a change: 'high knees' for a few steps, 'quick feet' shuffle at a cone, or 'freeze' for a two-second balanced hold.", "Keep the pace light and playful — this circuit-style jog reflects the multi-skill focus of Block 4, raising heart rate while touching on movement, balance, and quick changes.", "Run for the full 5 minutes, mixing up the order of calls."],
    warmdownSetup:"No equipment needed. Gather the whole class into one large circle with room for everyone to stretch without touching their neighbours.",
    warmdownHowTo:["Walk slowly around the space for about 1 minute to bring heart rate down, then gather into the circle.", "Lead 3-4 simple static stretches as a whole group — shoulders, calves, quads, and a gentle reach-up/side stretch — holding each for about 15-20 seconds.", "Keep instructions simple and calm: 'reach, hold, breathe.'", "Finish with a round of applause or a group cheer celebrating the unit's progress, since this warm-down is used across the culminating lessons of the whole unit.", "End with everyone standing tall and taking one big breath in and out together before moving into the Discussion segment."]
  }
};

const HANDEYE_LESSONS = [
 {
  "n": 1,
  "block": 1,
  "title": "Eyes On It",
  "focus": "Tracking an object with your eyes all the way into your hands",
  "walt": "We are learning to watch a ball all the way into our hands, not look away early.",
  "wilf": [
   "keep my eyes on the ball right until it touches my hands",
   "catch a gently thrown ball cleanly using both hands"
  ],
  "nzc": "Strand B · Movement skills",
  "equipment": "1 soft/foam ball per pair, cones",
  "safety": "Soft balls only for this early tracking work; standard spacing between pairs",
  "games": [
   {
    "name": "Watch It In",
    "desc": "In pairs, one gently underarm throws a soft ball while the partner calls out the colour/pattern on the ball just before it lands in their hands.",
    "coach": "Say it as it lands, not before.",
    "easier": "Bigger, brighter ball, thrown from closer.",
    "harder": "Smaller ball, thrown from further away.",
    "chaos": "Random fake throws (partner pretends to throw)",
    "setup": "Pairs spread out roughly 3m apart across the space, one soft/foam ball per pair (ideally with a visible colour pattern or marking on it). No cones needed for this game.",
    "howTo": [
     "Demonstrate first: underarm throw a soft ball gently to a partner and show how to call out the colour or pattern on the ball just as it lands in your hands, not before.",
     "One partner starts with the ball and gently underarm throws it to the other.",
     "The receiver watches the ball all the way in and calls out the colour/pattern the instant it lands in their hands.",
     "There's no scoring — the focus is on the timing of the call, not speed or competition; if the call comes too early, the thrower says 'watch it all the way' and they try again.",
     "Coach the key message throughout: 'say it as it lands, not before.'",
     "For 'easier', use a bigger, brighter ball and throw from closer; for 'harder', use a smaller ball and throw from further away."
    ]
   },
   {
    "name": "Eyes Stay On",
    "desc": "Standing in a circle, students pass a ball around while the teacher checks that eyes stay on the ball right up until it's caught, not on the thrower's face.",
    "coach": "Follow the ball's whole flight path.",
    "easier": "Slower, higher passes.",
    "harder": "Faster, flatter passes.",
    "chaos": "Teacher randomly calls 'switch direction'",
    "setup": "Whole class (or groups of 8-10) in a circle roughly 5-6m across, one ball per circle.",
    "howTo": [
     "Explain the rule before starting: eyes must stay on the ball for its whole flight, not flick to the thrower's face.",
     "One student starts with the ball and passes it to anyone else in the circle, calling their name as they throw.",
     "Students continue passing around the circle in this way, with the teacher walking around checking that eyes are following the ball, not the thrower.",
     "There's no scoring — if the teacher spots eyes drifting, they call that student's name gently as a reminder and play continues without stopping.",
     "Coach the key message: 'follow the ball's whole flight path.'",
     "For 'easier', use slower, higher passes; for 'harder', use faster, flatter passes; the teacher can randomly call 'switch direction' to keep focus sharp (chaos variant)."
    ]
   },
   {
    "name": "Catch & Freeze",
    "desc": "In small groups, players throw and catch on the move, freezing in a strong catching position the instant they've secured the ball.",
    "coach": "Freeze the moment it's in your hands.",
    "easier": "Walking pace only.",
    "harder": "Light jogging pace.",
    "chaos": "n/a",
    "setup": "Small groups of 4-5 spread across the space, roughly 5m x 5m per group, one ball per group.",
    "howTo": [
     "Demonstrate first: catch a thrown ball and immediately freeze in a strong, balanced catching position (ball held firmly in front of the body).",
     "Students move around slowly inside their group space while one player has the ball; that player throws to a teammate on the move.",
     "The receiver catches the ball and freezes the instant it's secured — the group briefly checks the freeze looks stable before play continues.",
     "Play resumes immediately after each freeze — the receiver becomes the new thrower and picks their next target.",
     "Rotate who starts with the ball each new round so everyone gets equal turns as thrower and catcher.",
     "For 'easier', keep to walking pace only; for 'harder', allow light jogging pace."
    ]
   }
  ],
  "big": {
   "name": "Track & Catch Tag",
   "desc": "4v4 keep-away style game where a clean tracked catch (eyes visibly on the ball throughout) earns a bonus point on top of standard possession scoring.",
   "setup": "Split the class into groups of 8, forming two teams of 4 per game. Mark a grid roughly 15m x 15m with cones. One ball per game, plus bibs to tell teams apart.",
   "howTo": [
    "Explain the rules before starting: this is a standard keep-away game — teams try to keep possession by passing, while the other team tries to intercept.",
    "One team starts with the ball in the middle of the grid; the other team spreads out to defend without touching or tackling.",
    "Award standard points for consecutive completed passes, plus one bonus point any time a catch is made with eyes visibly tracked onto the ball the whole way in (spotted by the teacher or a nominated 'tracker' on the sideline).",
    "If the ball is intercepted or goes out of the grid, possession switches immediately to the other team from that spot — restart with minimal fuss.",
    "Rotate players through attack and defence every few minutes so everyone gets equal time in both roles.",
    "Coach the key message throughout: 'eyes on it the whole way in earns the bonus.'"
   ]
  },
  "discussion": [
   "What happened when you looked away from the ball too early?",
   "How did getting your hands ready early change your catch?",
   "What did a 'freeze' catch feel like compared to a rushed one?"
  ],
  "lookfors": [
   "Keeps eyes on the ball right into the hands",
   "Prepares hands early, in front of the body",
   "Catches with relaxed, absorbing hands"
  ],
  "inclusion": "Use bigger, brighter, softer balls and slower throws for students building tracking confidence; allow two hands for every catch early on.",
  "skillBreakdown": [
   {
    "step": "Watch the ball the whole way, right into your hands, not just until it's close.",
    "why": "Looking away early is the single biggest reason a catch is dropped — the eyes need to finish the job the hands are about to do."
   },
   {
    "step": "Get your hands ready and in front of your body before the ball arrives.",
    "why": "Hands prepared early can adjust smoothly instead of stabbing late at a moving target."
   },
   {
    "step": "Relax your hands rather than tensing up.",
    "why": "Stiff hands bounce a ball away; relaxed hands absorb it."
   }
  ],
  "value": "Aroha",
  "valueText": "Being patient and encouraging with teammates whose skills or confidence look different from yours, and treating everyone with kindness whether the game is going well or not."
 },
 {
  "n": 2,
  "block": 1,
  "title": "Soft Hands",
  "focus": "Cushioning/absorbing the ball on catching rather than catching rigid",
  "walt": "We are learning to catch with soft hands, giving a little as the ball arrives so it doesn't bounce away.",
  "wilf": [
   "let my hands 'give' slightly as I catch",
   "catch without the ball bouncing out of my hands"
  ],
  "nzc": "Strand B · Movement skills",
  "equipment": "1 ball per pair (variety of ball sizes), cones",
  "safety": "Keep throws controlled and at a catchable height to avoid jammed fingers",
  "games": [
   {
    "name": "Give and Catch",
    "desc": "In pairs, one throws softly while the other practises pulling their hands back slightly on contact, exaggerating the 'give'.",
    "coach": "Let it sink in, don't stop it dead.",
    "easier": "Very soft, slow throws.",
    "harder": "Firmer throws.",
    "chaos": "Partner varies throw speed without warning",
    "setup": "Pairs spread out roughly 3m apart across the space, one ball per pair (mix of sizes available so pairs can try different ones across the lesson).",
    "howTo": [
     "Demonstrate first: catch a ball and pull your hands back slightly at the moment of contact, 'giving' with the throw rather than stopping it dead.",
     "One partner softly throws the ball while the other practises this exaggerated 'give' on every catch.",
     "Partners swap roles every 6-8 throws so both get equal practice as thrower and catcher.",
     "There's no scoring — the focus is on feeling the difference between a soft, giving catch and a rigid, jarring one.",
     "Coach the key message: 'let it sink in, don't stop it dead.'",
     "For 'easier', use very soft, slow throws; for 'harder', use firmer throws; the thrower can vary throw speed without warning to keep the catcher adjusting (chaos variant)."
    ]
   },
   {
    "name": "Cup It",
    "desc": "Students catch a range of different sized balls (small, medium, large) focusing on shaping their hands into a cup before each catch.",
    "coach": "Shape your hands before it arrives, not after.",
    "easier": "Same ball size each turn.",
    "harder": "Ball size changes every throw.",
    "chaos": "Mystery ball swap mid-round",
    "setup": "Small groups of 3-4 spread across the space, with a mix of small, medium, and large balls shared between each group (at least 3 different sizes per group).",
    "howTo": [
     "Demonstrate first: shape your hands into a cup before the ball arrives, matching the shape to the size of the ball coming.",
     "One student throws a ball of their choice to a teammate, calling out the size as they throw ('small one!').",
     "The receiver shapes their hands into a cup before the ball arrives, based on that call, then catches.",
     "Rotate the thrower role after every 4-5 throws so everyone gets equal turns catching different sizes.",
     "Coach the key message: 'shape your hands before it arrives, not after.'",
     "For 'easier', keep the same ball size each turn; for 'harder', change ball size every throw, or swap in a mystery ball mid-round for extra challenge (chaos variant)."
    ]
   },
   {
    "name": "Bounce-Out Battle",
    "desc": "In small groups, players count how many catches in a row they can make without the ball bouncing out of their hands, resetting the count if it does.",
    "coach": "Soft hands beat a strong grab.",
    "easier": "Slower pace, more time between catches.",
    "harder": "Quicker succession of catches.",
    "chaos": "n/a",
    "setup": "Small groups of 4-5 spread across the space, roughly 5m x 5m per group, one ball per group.",
    "howTo": [
     "Explain the rule before starting: the group counts, out loud, how many catches in a row they can make without the ball bouncing out of anyone's hands.",
     "One student starts with the ball and throws to a teammate; that student catches and immediately throws on to someone else.",
     "The group keeps a shared running count out loud as the ball moves around; if it bounces out, the count resets to zero and play restarts immediately with the ball going to whoever dropped it.",
     "Continue for the full activity time, with each group trying to beat their own best streak.",
     "Coach the key message: 'soft hands beat a strong grab.'",
     "For 'easier', use a slower pace with more time between catches; for 'harder', use quicker succession of catches."
    ]
   }
  ],
  "big": {
   "name": "Soft Hands Showdown",
   "desc": "4v2 keep-away where every clean, secure catch (no bounce-out) scores a bonus point, on top of possession scoring.",
   "setup": "Split the class into groups of 6, forming teams of 4 and 2 per game (4v2 keep-away). Mark a grid roughly 12m x 12m with cones. One ball per game, plus bibs to tell teams apart.",
   "howTo": [
    "Explain the rules before starting: the team of 4 tries to keep possession against the team of 2 defenders inside the grid.",
    "The team of 4 starts with the ball and passes it around, trying to keep it away from the two defenders.",
    "Award standard possession points, plus a bonus point every time a catch is clean and secure with no bounce-out (spotted by the teacher).",
    "If the ball is intercepted or bounces out uncaught, defenders swap in for two of the attacking players — restart immediately with minimal fuss.",
    "Rotate the two defenders every 2-3 minutes so everyone experiences both attacking and defending.",
    "Coach the key message throughout: 'soft hands beat a strong grab — that's what earns the bonus.'"
   ]
  },
  "discussion": [
   "What did 'giving' with the catch actually feel like?",
   "Did cupping your hands change how secure the catch felt?",
   "What happened when you tried to catch with stiff or flat hands?"
  ],
  "lookfors": [
   "Hands give slightly on contact",
   "Hands cupped before the ball arrives",
   "Ball is secured against the body after catching"
  ],
  "inclusion": "Use larger, softer balls for students still building grip confidence; allow extra attempts without penalty while the 'give' technique develops.",
  "skillBreakdown": [
   {
    "step": "Let your hands move slightly backward as the ball arrives, absorbing its speed.",
    "why": "Giving with the catch spreads out the force so the ball settles instead of bouncing off stiff hands."
   },
   {
    "step": "Cup your hands rather than holding them flat.",
    "why": "A cupped shape matches the ball better and stops it slipping straight through."
   },
   {
    "step": "Bring the ball in toward your body once it's caught.",
    "why": "Securing it against your body locks the catch in, especially under any pressure."
   }
  ],
  "value": "Mōhio",
  "valueText": "Understanding your own strengths and how you fit into the team, and noticing what your teammates need from you in order to do their best."
 },
 {
  "n": 3,
  "block": 1,
  "title": "Two Hands or One?",
  "focus": "Choosing appropriate catching technique (two-handed vs one-handed) for the situation",
  "walt": "We are learning when to use two hands and when one hand is needed to catch successfully.",
  "wilf": [
   "use two hands when I have time to get in position",
   "reach and catch with one hand when the ball is out of two-hand range"
  ],
  "nzc": "Strand B · Movement skills",
  "equipment": "Balls, cones, bibs",
  "safety": "Standard spacing; controlled throw heights when practising one-handed reaching catches",
  "games": [
   {
    "name": "Two Hands First",
    "desc": "In pairs, receivers must get their whole body in line and use two hands whenever the throw is within easy reach.",
    "coach": "Move your feet, not just your hands.",
    "easier": "Throws always within easy reach.",
    "harder": "Occasional throws just out of easy reach to test judgement.",
    "chaos": "n/a",
    "setup": "Pairs spread out roughly 4m apart across the space, one ball per pair.",
    "howTo": [
     "Demonstrate first: when a throw is within easy reach, step or shuffle so your whole body lines up behind the ball and catch with two hands.",
     "One partner throws to the other, aiming throws that are within easy reach.",
     "The receiver moves their feet to get in line with the ball and catches with two hands every time.",
     "Partners swap roles every 6-8 throws so both get equal practice.",
     "Coach the key message: 'move your feet, not just your hands.'",
     "For 'easier', keep throws always within easy reach; for 'harder', mix in occasional throws just out of easy reach so the receiver has to judge whether to stretch."
    ]
   },
   {
    "name": "Just Out of Reach",
    "desc": "Partner throws balls slightly wide so the receiver must judge whether to stretch with one hand or step to use two.",
    "coach": "Choose the option that actually gets the ball.",
    "easier": "Throws only slightly wide.",
    "harder": "Throws further out, requiring a genuine reach decision.",
    "chaos": "Mixed easy and hard throws in the same set",
    "setup": "Pairs spread out roughly 4-5m apart across the space, one ball per pair.",
    "howTo": [
     "Demonstrate first: judging whether to stretch with one hand or step across to use two hands, depending on how wide the throw is.",
     "One partner throws balls slightly wide of the receiver, left or right.",
     "The receiver must decide in the moment — stretch with one hand, or step to get two hands on it — and go with whichever actually gets the ball.",
     "Partners swap roles every 6-8 throws.",
     "Coach the key message: 'choose the option that actually gets the ball.'",
     "For 'easier', throw only slightly wide; for 'harder', throw further out to force a genuine reach decision; mixing easy and hard throws in the same set adds extra unpredictability (chaos variant)."
    ]
   },
   {
    "name": "Call It",
    "desc": "Before each throw, the receiver calls 'two' or 'one' based on where they think the ball will arrive, then attempts the catch.",
    "coach": "Trust your first read.",
    "easier": "Thrower signals direction early.",
    "harder": "No warning given.",
    "chaos": "Thrower occasionally fakes direction",
    "setup": "Pairs spread out roughly 4m apart across the space, one ball per pair.",
    "howTo": [
     "Explain the rule before starting: the receiver calls 'two' or 'one' out loud before each throw arrives, based on where they think the ball will land, then attempts that catch.",
     "One partner prepares to throw; the receiver watches their set-up and calls their prediction just before or as the ball is released.",
     "The receiver then attempts the catch using the method they called.",
     "Partners swap roles every 6-8 throws so both get equal practice predicting and catching.",
     "Coach the key message: 'trust your first read.'",
     "For 'easier', have the thrower signal direction early; for 'harder', give no warning at all; the thrower can occasionally fake direction for extra challenge (chaos variant)."
    ]
   }
  ],
  "big": {
   "name": "Catch Call",
   "desc": "Small-sided keep-away game where players earn a bonus point for correctly judging and executing either a two-handed or one-handed catch based on the ball's position.",
   "setup": "Split the class into groups of 8, forming two teams of 4 per game. Mark a grid roughly 15m x 15m with cones. One ball per game, plus bibs to tell teams apart.",
   "howTo": [
    "Explain the rules before starting: this is a keep-away game where a correctly judged and executed catch — two-handed for close balls, one-handed for wide ones — earns a bonus point.",
    "One team starts with the ball in the middle of the grid; the other team spreads out to defend without touching or tackling.",
    "Award standard possession points for completed passes, plus a bonus point any time a player is seen choosing the right catch method for where the ball actually arrives.",
    "If the ball is intercepted or goes out of the grid, possession switches immediately to the other team from that spot — restart with minimal fuss.",
    "Rotate players through attack and defence every few minutes so everyone gets equal time in both roles.",
    "Coach the key message throughout: 'read where it's going, then choose the catch that gets it.'"
   ]
  },
  "discussion": [
   "How did you decide between one hand and two?",
   "When did a one-handed catch actually save the play?",
   "What happens if you always try to catch with just one hand?"
  ],
  "lookfors": [
   "Uses two hands by default when there's time",
   "Reaches with one hand only when genuinely needed",
   "Recovers into a balanced position after catching"
  ],
  "inclusion": "Allow two-handed catches for every attempt for students still building confidence; introduce one-handed reaching only once two-handed catching is secure.",
  "skillBreakdown": [
   {
    "step": "Use two hands whenever you have time to get into position.",
    "why": "Two hands give the most secure, reliable catch, so they're the default whenever possible."
   },
   {
    "step": "Reach with one hand only when the ball is genuinely out of two-hand range.",
    "why": "A one-handed reach should be a last resort for distance, not a shortcut when two hands were available."
   },
   {
    "step": "Recover quickly into a balanced position after a one-handed catch.",
    "why": "A one-handed catch is only useful if you can do something with the ball straight afterwards."
   }
  ],
  "value": "Manaaki",
  "valueText": "Looking after your teammates' success as much as your own — including, encouraging, and setting others up to succeed."
 },
 {
  "n": 4,
  "block": 1,
  "title": "High and Low",
  "focus": "Adjusting hands and body position to different flight heights (high balls, low balls, bouncing balls)",
  "walt": "We are learning to adjust our hands and body to catch balls that arrive high, low, or bouncing.",
  "wilf": [
   "adjust my hand position for a high, low, or bouncing ball",
   "get my body behind the ball whenever I can"
  ],
  "nzc": "Strand B · Movement skills",
  "equipment": "Balls, cones",
  "safety": "Standard spacing; keep bouncing-ball throws controlled so they don't bounce into other groups",
  "games": [
   {
    "name": "High or Low",
    "desc": "Partner throws a mix of high, chest-height, and low balls, and the receiver adjusts hand shape each time.",
    "coach": "Match your hands to where it's arriving.",
    "easier": "Clearly high or clearly low throws only.",
    "harder": "Throws close to shoulder or waist height, harder to judge.",
    "chaos": "n/a",
    "setup": "Pairs spread out roughly 4m apart across the space, one ball per pair.",
    "howTo": [
     "Demonstrate first: shaping hands differently for a high ball (fingers up, hands above chest), a chest-height ball (hands out in front), and a low ball (fingers down, hands below waist).",
     "One partner throws a mix of high, chest-height, and low balls in no particular order.",
     "The receiver adjusts their hand shape each time based on where the ball is arriving, and catches.",
     "Partners swap roles every 6-8 throws so both get equal practice across all three heights.",
     "Coach the key message: 'match your hands to where it's arriving.'",
     "For 'easier', throw clearly high or clearly low balls only; for 'harder', throw closer to shoulder or waist height, which is harder to judge."
    ]
   },
   {
    "name": "Bounce Read",
    "desc": "In pairs, one bounces the ball to the other, who must track it all the way through the bounce before catching.",
    "coach": "Watch it hit the ground, not just before.",
    "easier": "One controlled bounce, close range.",
    "harder": "Varying bounce height and angle.",
    "chaos": "Occasional double-bounce thrown in",
    "setup": "Pairs spread out roughly 3-4m apart across the space, one ball per pair.",
    "howTo": [
     "Demonstrate first: watching a ball all the way through its bounce, not looking away just before it hits the ground.",
     "One partner bounces the ball to the other, controlling the bounce so it arrives at a reasonable height.",
     "The receiver tracks the ball all the way through the bounce and catches it after it rises back up.",
     "Partners swap roles every 6-8 bounces so both get equal practice.",
     "Coach the key message: 'watch it hit the ground, not just before.'",
     "For 'easier', use one controlled bounce at close range; for 'harder', vary the bounce height and angle; an occasional double-bounce thrown in adds extra challenge (chaos variant)."
    ]
   },
   {
    "name": "Body Behind It",
    "desc": "Small group game where receivers must move their feet to get their whole body behind the ball's line before catching, rather than reaching sideways.",
    "coach": "Feet first, then hands.",
    "easier": "Slower-moving balls, more time to adjust.",
    "harder": "Quicker, more varied throws.",
    "chaos": "Role rotation every minute",
    "setup": "Small groups of 4-5 spread across the space, roughly 6m x 6m per group, one ball per group.",
    "howTo": [
     "Demonstrate first: moving your feet to get your whole body directly behind the ball's flight line, rather than reaching sideways with just your arms.",
     "One student throws to a teammate; the receiver must shuffle or step to line their body up behind the ball before catching.",
     "If a receiver reaches sideways instead of moving their feet, the group pauses briefly, resets, and tries that throw again.",
     "Rotate the thrower role regularly, and swap roles every minute so everyone gets equal turns catching.",
     "Coach the key message: 'feet first, then hands.'",
     "For 'easier', use slower-moving balls with more time to adjust; for 'harder', use quicker, more varied throws."
    ]
   }
  ],
  "big": {
   "name": "All Heights",
   "desc": "4v4 small-sided game where a mix of high, low, and bounced passes are all in play, with a bonus point for a clean, well-adjusted catch at any height.",
   "setup": "Split the class into groups of 8, forming two teams of 4 per game. Mark a grid roughly 15m x 15m with cones. One ball per game, plus bibs to tell teams apart.",
   "howTo": [
    "Explain the rules before starting: this is a keep-away game where high, low, and bounced passes are all allowed and encouraged.",
    "One team starts with the ball in the middle of the grid; the other team spreads out to defend without touching or tackling.",
    "Award standard possession points for completed passes, plus a bonus point any time a player makes a clean, well-adjusted catch at any height (high, low, or bounced).",
    "If the ball is intercepted or goes out of the grid, possession switches immediately to the other team from that spot — restart with minimal fuss.",
    "Rotate players through attack and defence every few minutes so everyone gets equal time in both roles.",
    "Coach the key message throughout: 'match your hands to the height it arrives at.'"
   ]
  },
  "discussion": [
   "How did your hands change shape for a high ball compared to a low one?",
   "What did tracking a bounce all the way through actually look like?",
   "Why does getting your body behind the ball help, even if your hands don't catch it cleanly?"
  ],
  "lookfors": [
   "Adjusts hand shape to match ball height",
   "Moves feet to get body behind the ball",
   "Tracks a bouncing ball all the way through the bounce"
  ],
  "inclusion": "Start with clearly high or clearly low throws before mixing heights; allow a short pause before each throw for students still building this judgement.",
  "skillBreakdown": [
   {
    "step": "Turn your hands to match the height of the ball — fingers up for high balls, fingers down for low ones.",
    "why": "Hand shape needs to match the ball's approach angle, or it simply won't be secure."
   },
   {
    "step": "Get your body behind the ball's line whenever possible.",
    "why": "A body positioned behind the ball gives a second chance to control it even if the hands don't get it clean."
   },
   {
    "step": "Watch a bouncing ball all the way through the bounce, not just before it.",
    "why": "A bounce changes the ball's path, so tracking has to continue through it, not stop beforehand."
   }
  ],
  "value": "Pānga",
  "valueText": "Seeing how your role today connects to the bigger team effort — a small contribution that matters once it's put together with everyone else's."
 },
 {
  "n": 5,
  "block": 1,
  "title": "Catch It All",
  "focus": "Combining tracking, soft hands, catch-type choice, and height adjustment (Block 1 wrap-up)",
  "walt": "We are learning to bring together everything from this week — tracking, soft hands, and adjusting to height — into confident catching.",
  "wilf": [
   "use tracking, soft hands, and the right catch type together",
   "catch confidently across a range of heights and speeds"
  ],
  "nzc": "Strand B · Movement skills",
  "equipment": "Balls (various sizes), bibs, cones — combined equipment from Block 1 games for the wrap-up carousel",
  "safety": "Standard spacing; combined activities revisited at a controlled pace",
  "games": [
   {
    "name": "Coordination Carousel",
    "desc": "Teams rotate through short stations that each revisit a Block 1 focus — tracking, soft hands, catch-type choice, height adjustment.",
    "coach": "Use everything you've practised this week.",
    "easier": "Longer time per station.",
    "harder": "Shorter time, quicker rotation.",
    "chaos": "Head-to-head mirror",
    "setup": "Set up 4 short stations around the space (roughly 5m x 5m each), one for each Block 1 focus: tracking, soft hands, catch-type choice, and height adjustment. Split the class into teams of 4-5, one team starting at each station, with balls of varying sizes distributed across the stations.",
    "howTo": [
     "Briefly remind students what each station revisits before starting: Station 1 tracking (Watch It In style), Station 2 soft hands (Cup It style), Station 3 catch-type choice (Call It style), Station 4 height adjustment (High or Low style).",
     "Teams start at their assigned station and begin the activity immediately on 'go'.",
     "On the teacher's signal (roughly every 2-3 minutes), teams rotate clockwise to the next station.",
     "Continue until every team has completed all 4 stations.",
     "Coach the key message throughout: 'use everything you've practised this week.'",
     "For 'easier', give longer time per station; for 'harder', give shorter time with quicker rotation; a head-to-head mirror between two teams at the same station adds extra challenge (chaos variant)."
    ]
   },
   {
    "name": "Mixed Bag Catching",
    "desc": "In pairs, throws vary randomly in height, speed, and distance so the receiver must combine all of this week's skills on every catch.",
    "coach": "Read it fresh every time.",
    "easier": "Predictable pattern of throws.",
    "harder": "Fully randomised throws.",
    "chaos": "Caller occasionally shouts a trick instruction ('clap first!')",
    "setup": "Pairs spread out roughly 4m apart across the space, one ball per pair.",
    "howTo": [
     "Explain the rule before starting: throws will vary randomly in height, speed, and distance, so the receiver has to combine everything from this week on every single catch.",
     "One partner throws with no fixed pattern — sometimes high, sometimes low, sometimes fast, sometimes soft.",
     "The receiver reads and adjusts to each throw individually, using tracking, soft hands, and the right catch method as needed.",
     "Partners swap roles every 8-10 throws so both get equal practice.",
     "Coach the key message: 'read it fresh every time.'",
     "For 'easier', use a predictable pattern of throws; for 'harder', use fully randomised throws; the caller can occasionally shout a trick instruction like 'clap first!' for extra challenge (chaos variant)."
    ]
   },
   {
    "name": "Streak Catch",
    "desc": "Small groups count their longest run of clean, confident catches in a row, mixing heights and speeds.",
    "coach": "Stay relaxed, don't rush.",
    "easier": "Slower pace, generous spacing.",
    "harder": "Quicker pace, tighter spacing.",
    "chaos": "n/a",
    "setup": "Small groups of 4-5 spread across the space, roughly 6m x 6m per group, one ball per group.",
    "howTo": [
     "Explain the rule before starting: the group counts out loud their longest run of clean, confident catches in a row, mixing heights and speeds.",
     "One student starts with the ball and throws to a teammate, who catches and throws on to someone else.",
     "The group keeps a shared running count out loud; if a catch is dropped or fumbled, the count resets to zero and play restarts immediately.",
     "Continue for the full activity time, encouraging groups to try to beat their own best streak.",
     "Coach the key message: 'stay relaxed, don't rush.'",
     "For 'easier', use a slower pace with generous spacing; for 'harder', use a quicker pace with tighter spacing."
    ]
   }
  ],
  "big": {
   "name": "Catch It All Games",
   "desc": "Small-sided matches where teams earn a bonus point for clean, confident catches across a range of heights and speeds, wrapping up the whole block.",
   "setup": "Split the class into groups of 8, forming two teams of 4 per game. Mark a grid roughly 15m x 15m with cones. One ball per game, plus bibs to tell teams apart.",
   "howTo": [
    "Explain the rules before starting: this small-sided match brings together everything from Block 1 — tracking, soft hands, catch-type choice, and height adjustment.",
    "One team starts with the ball in the middle of the grid; the other team spreads out to defend without touching or tackling.",
    "Award standard possession points for completed passes, plus a bonus point any time a player makes a clean, confident catch across a range of heights and speeds.",
    "If the ball is intercepted or goes out of the grid, possession switches immediately to the other team from that spot — restart with minimal fuss.",
    "Rotate players through attack and defence every few minutes so everyone gets equal time in both roles.",
    "Coach the key message throughout: 'bring together everything you've learned this week — that's what wraps up Block 1.'"
   ]
  },
  "discussion": [
   "Which of this week's catching skills do you feel most confident with now?",
   "What did combining all of them together feel like today?",
   "What's still tricky when the ball comes in fast or awkward?"
  ],
  "lookfors": [
   "Combines tracking, soft hands, and correct catch type together",
   "Adjusts confidently across a range of heights",
   "Stays relaxed and ready between catches"
  ],
  "inclusion": "Allow students to nominate their own 'easier' or 'harder' station variant based on confidence; celebrate streaks of any length to build confidence going into Block 2.",
  "skillBreakdown": [
   {
    "step": "Trust the tracking, soft hands, and height-adjustment skills you've built this week, all at once.",
    "why": "A confident catch isn't one skill — it's several skills happening together without having to think about each one separately."
   },
   {
    "step": "Choose the right catch type instantly, without pausing to decide.",
    "why": "By this point the decision between one or two hands should be fast and automatic, not a hesitation."
   },
   {
    "step": "Stay relaxed and ready between catches, not just during them.",
    "why": "Good catchers are ready before the ball arrives, not scrambling once it does."
   }
  ],
  "value": "Aroha",
  "valueText": "Being patient and encouraging with teammates whose skills or confidence look different from yours, and treating everyone with kindness whether the game is going well or not."
 },
 {
  "n": 6,
  "block": 2,
  "title": "Meet the Ball",
  "focus": "Watching the ball onto the striking surface (bat, hand, paddle) before making contact",
  "walt": "We are learning to watch the ball all the way onto our striking surface before we hit it.",
  "wilf": [
   "keep my eyes on the ball right until contact",
   "make clean contact more often than I miss"
  ],
  "nzc": "Strand B · Movement skills",
  "equipment": "Soft bats/paddles or hands, soft balls, cones",
  "safety": "Spacing between pairs so swings don't connect with a neighbouring group; soft balls only",
  "games": [
   {
    "name": "Watch It Meet",
    "desc": "In pairs, one gently feeds a soft ball for the other to strike with an open hand or soft paddle, calling out the ball's colour just before contact.",
    "coach": "Say it right as you hit it.",
    "easier": "Slower, closer feeds.",
    "harder": "Faster, further feeds.",
    "chaos": "n/a",
    "setup": "Pairs spread out roughly 3-4m apart across the space, one soft ball per pair, and an open hand or soft paddle each. Extra room allowed on either side of each pair so swings don't reach a neighbouring group.",
    "howTo": [
     "Demonstrate first: watching the ball all the way onto your striking surface (open hand or soft paddle) and calling out its colour just as contact happens, not before.",
     "One partner gently feeds a soft ball underarm to the other.",
     "The receiver strikes it with an open hand or soft paddle, calling the ball's colour right as they make contact.",
     "There's no scoring — if the call comes early, the feeder says 'watch it all the way' and they try again.",
     "Coach the key message: 'say it right as you hit it.'",
     "For 'easier', use slower, closer feeds; for 'harder', use faster, further feeds."
    ]
   },
   {
    "name": "Early Swing",
    "desc": "Students practise starting their swing or hand movement early, so it's already in motion before the ball arrives.",
    "coach": "Start moving before it gets close.",
    "easier": "Feeder gives a clear countdown.",
    "harder": "No countdown given.",
    "chaos": "Feeder varies timing of the feed",
    "setup": "Pairs spread out roughly 3-4m apart across the space, one soft ball per pair, open hand or soft paddle each.",
    "howTo": [
     "Demonstrate first: starting the swing or hand movement early, so it's already moving before the ball arrives, rather than waiting and reacting late.",
     "One partner feeds the ball; the other starts their swing motion as soon as they see the feed begin, aiming to already be in motion by the time the ball arrives.",
     "Partners swap roles every 6-8 feeds so both get equal practice.",
     "Coach the key message: 'start moving before it gets close.'",
     "For 'easier', have the feeder give a clear countdown; for 'harder', give no countdown; the feeder can vary the timing of the feed for extra challenge (chaos variant)."
    ]
   },
   {
    "name": "Middle of the Ball",
    "desc": "In small groups, students aim to strike the centre of a stationary or gently rolling ball, with feedback on where contact was made.",
    "coach": "Picture the middle before you swing.",
    "easier": "Stationary ball.",
    "harder": "Slow rolling ball.",
    "chaos": "n/a",
    "setup": "Small groups of 3-4 spread across the space, roughly 5m x 5m per group, one ball per group, open hand or soft paddle each.",
    "howTo": [
     "Demonstrate first: aiming to strike the exact centre of the ball, and how a centred hit feels and sounds cleaner than an off-centre one.",
     "One student rolls or gently tosses the ball toward a teammate; that student aims to strike the centre of the ball.",
     "After each strike, the group briefly gives feedback on where contact was made (centre, edge, top, or bottom).",
     "Rotate the striker role every 4-5 turns so everyone gets equal practice.",
     "Coach the key message: 'picture the middle before you swing.'",
     "For 'easier', use a stationary ball; for 'harder', use a slow rolling ball."
    ]
   }
  ],
  "big": {
   "name": "Clean Contact Challenge",
   "desc": "Small-sided striking game (e.g. simple bat-and-ball or hand-strike format) where clean, centred contact earns a bonus point on top of standard scoring.",
   "setup": "Split the class into groups of 8, forming two teams of 4 per game. Mark a small playing area roughly 15m x 10m with cones. Soft bats/paddles or hands for striking, one soft ball per game, plus bibs to tell teams apart.",
   "howTo": [
    "Explain the rules before starting: this is a simple bat-and-ball or hand-strike small-sided game with standard scoring for winning a point/rally.",
    "Start with a gentle feed or serve to begin each point.",
    "Play the point out with normal scoring, and award a bonus point any time a player makes clean, centred contact (spotted by the teacher or a nominated player).",
    "After each point, restart immediately with the next feed or serve — rotate who feeds each time.",
    "Rotate players through different positions every few minutes so everyone gets equal chances to strike.",
    "Coach the key message throughout: 'clean, centred contact earns the bonus.'"
   ]
  },
  "discussion": [
   "What happened when your eyes left the ball too early?",
   "Did starting your swing earlier change how clean your contact was?",
   "What did centre contact actually feel like compared to an edge hit?"
  ],
  "lookfors": [
   "Eyes stay on the ball right until contact",
   "Striking surface begins moving early",
   "Contact is made near the centre of the ball"
  ],
  "inclusion": "Use larger, softer, slower-moving balls for students building striking confidence; allow a stationary ball to strike from before introducing movement.",
  "skillBreakdown": [
   {
    "step": "Watch the ball all the way onto your striking surface, not just until you start swinging.",
    "why": "Most mishits happen because the eyes leave the ball a fraction too early, right when accuracy matters most."
   },
   {
    "step": "Get your striking surface (hand, bat, paddle) moving early so it's ready in time.",
    "why": "A late-starting swing forces a rushed, inaccurate contact."
   },
   {
    "step": "Aim for the middle of the ball, not the edges.",
    "why": "Centre contact is what actually sends the ball where you intend."
   }
  ],
  "value": "Mōhio",
  "valueText": "Understanding your own strengths and how you fit into the team, and noticing what your teammates need from you in order to do their best."
 },
 {
  "n": 7,
  "block": 2,
  "title": "Sweet Spot",
  "focus": "Finding the centre/sweet spot of the striking surface for cleaner, more controlled contact",
  "walt": "We are learning to find the sweet spot on our striking surface so our hits are cleaner and more controlled.",
  "wilf": [
   "make contact near the middle of my bat or hand",
   "notice the difference between a sweet-spot hit and an edge hit"
  ],
  "nzc": "Strand B · Movement skills",
  "equipment": "Soft bats/paddles, soft balls, cones",
  "safety": "Standard spacing between striking pairs; soft equipment only",
  "games": [
   {
    "name": "Find the Spot",
    "desc": "Students experiment striking a slow, gently fed ball at different points on their bat/paddle/hand, noticing where it feels and sounds cleanest.",
    "coach": "Notice the difference, don't just swing.",
    "easier": "Very slow, close feeds.",
    "harder": "Slightly faster feeds.",
    "chaos": "n/a",
    "setup": "Pairs spread out roughly 3m apart across the space, soft bats/paddles and soft balls, one set per pair.",
    "howTo": [
     "Demonstrate first: striking a slow, close feed at a few different points on the bat/paddle/hand and noticing how each one feels and sounds different.",
     "One partner gently feeds a very slow, close ball; the other experiments with striking it at different points on their striking surface.",
     "After each strike, the striker says out loud whether that felt/sounded 'clean' (centred) or not.",
     "Partners swap roles every 6-8 feeds so both get equal practice.",
     "Coach the key message: 'notice the difference, don't just swing.'",
     "For 'easier', use very slow, close feeds; for 'harder', use slightly faster feeds."
    ]
   },
   {
    "name": "Move to the Spot",
    "desc": "In pairs, the feeder varies where the ball arrives slightly, and the striker must move their feet so the sweet spot meets the ball.",
    "coach": "Move your feet to the ball, not your bat to a fixed spot.",
    "easier": "Small variations in feed position.",
    "harder": "Larger variations.",
    "chaos": "Feeder calls 'freeze' — striker must adjust instantly",
    "setup": "Pairs spread out roughly 3-4m apart across the space, soft bats/paddles and soft balls, one set per pair.",
    "howTo": [
     "Explain the rule before starting: the striker must move their feet so their sweet spot meets the ball, rather than reaching their bat out to a fixed spot.",
     "The feeder varies where the ball arrives slightly — a little left, right, closer, or further — on each feed.",
     "The striker steps or shuffles to adjust their position so the sweet spot of their bat meets the ball at the right point.",
     "Partners swap roles every 6-8 feeds so both get equal practice.",
     "Coach the key message: 'move your feet to the ball, not your bat to a fixed spot.'",
     "For 'easier', use small variations in feed position; for 'harder', use larger variations; the feeder can call 'freeze' requiring an instant adjustment for extra challenge (chaos variant)."
    ]
   },
   {
    "name": "Sound Check",
    "desc": "Small groups strike in turn and call out 'clean' or 'edge' based on the sound and feel, checked against what the feeder saw.",
    "coach": "Trust what you felt and heard.",
    "easier": "Feeder confirms after every hit.",
    "harder": "Feeder only confirms occasionally.",
    "chaos": "n/a",
    "setup": "Small groups of 3-4 spread across the space, roughly 5m x 5m per group, soft bats/paddles and soft balls, one set per group.",
    "howTo": [
     "Explain the rule before starting: after each strike, the striker calls out 'clean' or 'edge' based on how it felt and sounded, and the feeder confirms what they actually saw.",
     "One student feeds the ball while another strikes it, then immediately calls 'clean' or 'edge' before the feeder gives feedback.",
     "The group checks whether the striker's own call matched what the feeder saw, building self-awareness of contact quality.",
     "Rotate the striker and feeder roles every 4-5 turns so everyone gets equal practice.",
     "Coach the key message: 'trust what you felt and heard.'",
     "For 'easier', have the feeder confirm after every hit; for 'harder', have the feeder only confirm occasionally."
    ]
   }
  ],
  "big": {
   "name": "Sweet Spot Scoring",
   "desc": "Small-sided striking game where clean, sweet-spot contact (spotted by the teacher or partner) earns bonus points on top of standard scoring.",
   "setup": "Split the class into groups of 8, forming two teams of 4 per game. Mark a small playing area roughly 15m x 10m with cones. Soft bats/paddles, one ball per game, plus bibs to tell teams apart.",
   "howTo": [
    "Explain the rules before starting: this small-sided striking game uses standard scoring, plus a bonus point for clean, sweet-spot contact.",
    "Start each point with a gentle feed or serve.",
    "Play the point out with normal scoring, and award a bonus point any time a player's contact is spotted as clean/sweet-spot by the teacher or their partner.",
    "After each point, restart immediately with the next feed or serve — rotate who feeds each time.",
    "Rotate players through different positions every few minutes so everyone gets equal chances to strike.",
    "Coach the key message throughout: 'find the sweet spot — that's what earns the bonus.'"
   ]
  },
  "discussion": [
   "What did the sweet spot actually feel or sound like compared to an edge hit?",
   "How did moving your feet help you find the sweet spot more often?",
   "What's one thing you'll try to fix about your contact next time?"
  ],
  "lookfors": [
   "Identifies roughly where their sweet spot is",
   "Moves feet to bring the sweet spot to the ball",
   "Notices and describes clean versus mishit contact"
  ],
  "inclusion": "Use bigger striking surfaces (wider bats/paddles) for students still building contact consistency; allow extra feeds without penalty while this feel develops.",
  "skillBreakdown": [
   {
    "step": "Know roughly where the sweet spot is on your bat, paddle, or hand.",
    "why": "You can't aim for something you haven't identified — knowing the target is the first step."
   },
   {
    "step": "Adjust your body position so the ball arrives at that sweet spot, not wherever it happens to land.",
    "why": "Moving to the ball is more reliable than hoping the ball comes to a fixed swing."
   },
   {
    "step": "Notice and describe the difference in feel and sound between a clean and a mishit strike.",
    "why": "Recognising the feedback helps you self-correct without needing to be told every time."
   }
  ],
  "value": "Manaaki",
  "valueText": "Looking after your teammates' success as much as your own — including, encouraging, and setting others up to succeed."
 },
 {
  "n": 8,
  "block": 2,
  "title": "Set Up Early",
  "focus": "Getting body and hands/bat into position before contact (preparation and stance)",
  "walt": "We are learning to set up our body and bat or hands early, before the ball arrives, not at the last second.",
  "wilf": [
   "get into a ready position before the ball is close",
   "adjust my set-up if the ball's path changes"
  ],
  "nzc": "Strand B · Movement skills",
  "equipment": "Soft bats/paddles, soft balls, cones",
  "safety": "Standard spacing; controlled feed speeds while set-up habits are being built",
  "games": [
   {
    "name": "Ready Early",
    "desc": "In pairs, the striker must be in a set, ready stance before the feeder releases the ball, checked by the feeder.",
    "coach": "Be ready before I even let go.",
    "easier": "Feeder gives a clear verbal countdown.",
    "harder": "No countdown, feeder chooses their own moment.",
    "chaos": "n/a",
    "setup": "Pairs spread out roughly 3-4m apart across the space, soft bats/paddles and soft balls, one set per pair.",
    "howTo": [
     "Demonstrate first: getting into a set, ready stance — balanced, hands/bat up, weight forward — before the ball is even released.",
     "The striker gets into their ready stance; the feeder checks the striker is set before releasing the ball.",
     "The feeder releases the ball only once the striker is visibly ready, and the striker strikes it.",
     "Partners swap roles every 6-8 feeds so both get equal practice.",
     "Coach the key message: 'be ready before I even let go.'",
     "For 'easier', have the feeder give a clear verbal countdown; for 'harder', give no countdown, with the feeder choosing their own moment."
    ]
   },
   {
    "name": "Adjust and Strike",
    "desc": "Feeder varies the ball's path slightly after release, and the striker must make a small last-moment adjustment to their set-up before striking.",
    "coach": "Small adjustment, not a big scramble.",
    "easier": "Small, gentle path changes.",
    "harder": "Larger, later path changes.",
    "chaos": "Feeder occasionally fakes a path change",
    "setup": "Pairs spread out roughly 3-4m apart across the space, soft bats/paddles and soft balls, one set per pair.",
    "howTo": [
     "Explain the rule before starting: the feeder will sometimes change the ball's path slightly after release, and the striker must make a small, last-moment adjustment to their set-up before striking.",
     "The feeder releases the ball, occasionally curving or redirecting its path slightly partway through.",
     "The striker watches closely and adjusts their stance in a small, controlled way to still meet the ball cleanly.",
     "Partners swap roles every 6-8 feeds so both get equal practice.",
     "Coach the key message: 'small adjustment, not a big scramble.'",
     "For 'easier', use small, gentle path changes; for 'harder', use larger, later path changes; the feeder can occasionally fake a path change for extra challenge (chaos variant)."
    ]
   },
   {
    "name": "Balanced and Ready",
    "desc": "Small groups practise moving between drills while returning to a balanced, ready stance each time before the next feed.",
    "coach": "Light feet, balanced base.",
    "easier": "More time between feeds.",
    "harder": "Quicker succession of feeds.",
    "chaos": "Role rotation every minute",
    "setup": "Small groups of 3-4 spread across the space, roughly 5m x 5m per group, soft bats/paddles and soft balls, one set per group, moving between two simple drill spots within the group area.",
    "howTo": [
     "Demonstrate first: returning to a balanced, ready stance every time after moving, before the next feed arrives.",
     "Students move between two drill spots (e.g. a short shuffle or step) and must reset into a balanced, ready stance at the new spot before the next feed is delivered.",
     "The feeder only releases the ball once the striker is visibly set and balanced.",
     "Rotate the feeder and striker roles every 4-5 turns so everyone gets equal practice.",
     "Coach the key message: 'light feet, balanced base.'",
     "For 'easier', allow more time between feeds; for 'harder', use quicker succession of feeds; rotating roles every minute keeps things moving (chaos variant)."
    ]
   }
  ],
  "big": {
   "name": "Set-Up Success",
   "desc": "Small-sided striking game where being visibly set up and ready before each ball arrives earns a bonus point, on top of standard scoring for clean contact.",
   "setup": "Split the class into groups of 8, forming two teams of 4 per game. Mark a small playing area roughly 15m x 10m with cones. Soft bats/paddles, one ball per game, plus bibs to tell teams apart.",
   "howTo": [
    "Explain the rules before starting: standard scoring applies for clean contact, plus a bonus point for visibly being set up and ready before each ball arrives.",
    "Start each point with a gentle feed or serve.",
    "Play the point out with normal scoring, and award a bonus point any time a player is spotted in a balanced, ready stance before contact.",
    "After each point, restart immediately with the next feed or serve — rotate who feeds each time.",
    "Rotate players through different positions every few minutes so everyone gets equal chances to strike.",
    "Coach the key message throughout: 'be ready before it arrives — that's what earns the bonus.'"
   ]
  },
  "discussion": [
   "What difference did being ready early make to your contact?",
   "How did you adjust your set-up when the ball's path changed?",
   "What does a balanced, ready stance actually feel like?"
  ],
  "lookfors": [
   "Gets into a ready stance before the ball is close",
   "Makes small adjustments as the ball's path becomes clear",
   "Stays balanced and light on their feet"
  ],
  "inclusion": "Give extra verbal cues ('ready... ready... now') for students still building early set-up habits; allow more time between feeds in early rounds.",
  "skillBreakdown": [
   {
    "step": "Get into a ready stance the moment you know the ball is coming, not once it's already close.",
    "why": "A rushed, last-second set-up rarely produces clean contact — early preparation gives your body time to adjust."
   },
   {
    "step": "Keep adjusting your set-up as the ball's path becomes clearer.",
    "why": "The first read isn't always perfect, so small adjustments as the ball approaches keep you lined up."
   },
   {
    "step": "Stay balanced and light on your feet in your ready position.",
    "why": "A balanced stance lets you move quickly in any direction once you know exactly where the ball is going."
   }
  ],
  "value": "Pānga",
  "valueText": "Seeing how your role today connects to the bigger team effort — a small contribution that matters once it's put together with everyone else's."
 },
 {
  "n": 9,
  "block": 2,
  "title": "Follow Through",
  "focus": "Completing the strike smoothly with a full follow-through for control and accuracy",
  "walt": "We are learning to follow all the way through our strike, not stop right at contact.",
  "wilf": [
   "continue my swing or hand motion smoothly after contact",
   "notice how follow-through changes where the ball goes"
  ],
  "nzc": "Strand B · Movement skills",
  "equipment": "Soft bats/paddles, soft balls, cones",
  "safety": "Extra spacing around each striker to allow for a full follow-through motion safely",
  "games": [
   {
    "name": "Swing It Through",
    "desc": "Students shadow-swing without a ball first, exaggerating a full, smooth follow-through, then add a gentle feed.",
    "coach": "Keep going after you've hit it.",
    "easier": "Shadow swings only, no ball at first.",
    "harder": "Add ball feeds sooner.",
    "chaos": "n/a",
    "setup": "Pairs spread out roughly 4m apart across the space (extra room for full swings), soft bats/paddles and soft balls, one set per pair.",
    "howTo": [
     "Demonstrate first: a full, smooth shadow-swing (no ball) with an exaggerated follow-through, continuing the motion well past where contact would happen.",
     "Students practise 3-4 shadow-swings each without a ball, focusing on a smooth, complete motion.",
     "Once the shadow-swing looks smooth, the feeder adds a gentle feed and the striker repeats the same full follow-through with a real ball.",
     "Partners swap roles every 6-8 swings so both get equal practice.",
     "Coach the key message: 'keep going after you've hit it.'",
     "For 'easier', stay on shadow swings only for longer before adding a ball; for 'harder', add ball feeds sooner."
    ]
   },
   {
    "name": "Point the Target",
    "desc": "In pairs, the striker aims their follow-through toward a cone target and checks whether the ball actually travelled that way.",
    "coach": "Follow through toward where you're aiming.",
    "easier": "Large, close target.",
    "harder": "Smaller, further target.",
    "chaos": "Target moved between turns",
    "setup": "Pairs spread out roughly 4-5m apart across the space, with one cone set up as a target a few metres beyond the striker, soft bats/paddles and soft balls, one set per pair.",
    "howTo": [
     "Explain the rule before starting: the striker's follow-through should finish pointing toward the cone target.",
     "The feeder feeds the ball; the striker hits it, aiming their follow-through toward the target cone.",
     "After each strike, the pair checks together whether the ball actually travelled toward the target.",
     "Partners swap roles every 6-8 strikes so both get equal practice.",
     "Coach the key message: 'follow through toward where you're aiming.'",
     "For 'easier', use a large, close target; for 'harder', use a smaller, further target; moving the target between turns adds extra challenge (chaos variant)."
    ]
   },
   {
    "name": "Smooth Not Stopped",
    "desc": "Small groups strike in turn, with a partner watching for a smooth, complete motion versus a stopped, chopped one.",
    "coach": "Smooth all the way, not a stop-start.",
    "easier": "Slower-paced feeds.",
    "harder": "Quicker succession of feeds.",
    "chaos": "n/a",
    "setup": "Small groups of 3-4 spread across the space, roughly 5m x 5m per group, soft bats/paddles and soft balls, one set per group.",
    "howTo": [
     "Explain the rule before starting: a partner will watch each strike and call out whether the motion looked smooth and complete, or stopped and chopped right at contact.",
     "One student feeds the ball while another strikes it in turn, and a third watches the swing.",
     "The watcher gives quick feedback — 'smooth' or 'stopped' — right after each strike.",
     "Rotate the feeder, striker, and watcher roles every 4-5 turns so everyone gets equal practice in each role.",
     "Coach the key message: 'smooth all the way, not a stop-start.'",
     "For 'easier', use slower-paced feeds; for 'harder', use quicker succession of feeds."
    ]
   }
  ],
  "big": {
   "name": "Follow-Through Focus",
   "desc": "Small-sided striking game where a visibly smooth, complete follow-through toward the intended direction earns a bonus point.",
   "setup": "Split the class into groups of 8, forming two teams of 4 per game. Mark a small playing area roughly 15m x 10m with cones (extra room around each striker for a full swing). Soft bats/paddles, one ball per game, plus bibs to tell teams apart.",
   "howTo": [
    "Explain the rules before starting: standard scoring applies, plus a bonus point for a visibly smooth, complete follow-through toward the intended direction.",
    "Start each point with a gentle feed or serve.",
    "Play the point out with normal scoring, and award a bonus point any time a player's follow-through is spotted as smooth and complete.",
    "After each point, restart immediately with the next feed or serve — rotate who feeds each time.",
    "Rotate players through different positions every few minutes so everyone gets equal chances to strike.",
    "Coach the key message throughout: 'keep going after you've hit it — that's what earns the bonus.'"
   ]
  },
  "discussion": [
   "What changed about your accuracy when you followed all the way through?",
   "How did pointing your follow-through at a target help?",
   "What did a 'stopped' swing feel like compared to a smooth one?"
  ],
  "lookfors": [
   "Continues the motion smoothly through contact",
   "Follow-through points toward the intended direction",
   "Stays balanced through the whole swing"
  ],
  "inclusion": "Use shadow swings without a ball for students still building the full motion; allow a slower-paced feed while follow-through habits develop.",
  "skillBreakdown": [
   {
    "step": "Continue your swing or hand motion smoothly through and past the point of contact.",
    "why": "Stopping right at contact shortens control and often sends the ball off-target."
   },
   {
    "step": "Point your follow-through toward where you want the ball to go.",
    "why": "The direction of your follow-through is closely linked to the direction the ball actually travels."
   },
   {
    "step": "Stay balanced through the whole motion, from set-up to follow-through.",
    "why": "Losing balance partway through the swing undoes the accuracy that early preparation built."
   }
  ],
  "value": "Aroha",
  "valueText": "Being patient and encouraging with teammates whose skills or confidence look different from yours, and treating everyone with kindness whether the game is going well or not."
 },
 {
  "n": 10,
  "block": 2,
  "title": "Strike It Clean",
  "focus": "Combining watching the ball in, sweet-spot contact, early set-up, and follow-through (Block 2 wrap-up)",
  "walt": "We are learning to bring together everything from this week — watching it in, sweet-spot contact, set-up, and follow-through — into a clean, confident strike.",
  "wilf": [
   "use set-up, contact, and follow-through together in one smooth strike",
   "strike confidently and cleanly more often than not"
  ],
  "nzc": "Strand B · Movement skills",
  "equipment": "Soft bats/paddles, balls (various sizes), bibs, cones — combined equipment from Block 2 games for the wrap-up carousel",
  "safety": "Standard spacing across the carousel, with extra room allowed for full follow-through swings",
  "games": [
   {
    "name": "Strike Carousel",
    "desc": "Teams rotate through short stations that each revisit a Block 2 focus — watching it in, sweet spot, set-up, follow-through.",
    "coach": "Use everything you've practised this week.",
    "easier": "Longer time per station.",
    "harder": "Shorter time, quicker rotation.",
    "chaos": "Head-to-head mirror",
    "setup": "Set up 4 short stations around the space (roughly 5m x 5m each), one for each Block 2 focus: watching it in, sweet spot, set-up, follow-through. Split the class into teams of 4-5, one team starting at each station, with soft bats/paddles and balls of varying sizes distributed across the stations.",
    "howTo": [
     "Briefly remind students what each station revisits before starting: Station 1 watching it in (Watch It Meet style), Station 2 sweet spot (Find the Spot style), Station 3 set-up (Ready Early style), Station 4 follow-through (Swing It Through style).",
     "Teams start at their assigned station and begin the activity immediately on 'go'.",
     "On the teacher's signal (roughly every 2-3 minutes), teams rotate clockwise to the next station.",
     "Continue until every team has completed all 4 stations.",
     "Coach the key message throughout: 'use everything you've practised this week.'",
     "For 'easier', give longer time per station; for 'harder', give shorter time with quicker rotation; a head-to-head mirror between two teams at the same station adds extra challenge (chaos variant)."
    ]
   },
   {
    "name": "Clean Strike Streak",
    "desc": "In pairs, students count their longest run of clean, confident strikes in a row, combining all of this week's focuses.",
    "coach": "One smooth thing, not four separate ones.",
    "easier": "Slower, closer feeds.",
    "harder": "Faster, more varied feeds.",
    "chaos": "n/a",
    "setup": "Pairs spread out roughly 3-4m apart across the space, soft bats/paddles and soft balls, one set per pair.",
    "howTo": [
     "Explain the rule before starting: the pair counts their longest run of clean, confident strikes in a row, combining watching it in, sweet spot, set-up, and follow-through.",
     "One partner feeds the ball while the other strikes; both count out loud together.",
     "If a strike is off-centre, rushed, or poorly followed through, the count resets to zero and play restarts immediately with the next feed.",
     "Partners swap roles halfway through so both get equal practice as striker.",
     "Coach the key message: 'one smooth thing, not four separate ones.'",
     "For 'easier', use slower, closer feeds; for 'harder', use faster, more varied feeds."
    ]
   },
   {
    "name": "Self-Check Strike",
    "desc": "Students strike in small groups, briefly naming out loud which part of their strike felt strongest that turn.",
    "coach": "Notice it, don't judge it.",
    "easier": "Teacher offers prompts.",
    "harder": "No prompts, own words only.",
    "chaos": "n/a",
    "setup": "Small groups of 3-4 spread across the space, roughly 5m x 5m per group, soft bats/paddles and soft balls, one set per group.",
    "howTo": [
     "Explain the rule before starting: after each strike, the striker briefly names out loud which part of their strike felt strongest that turn (watching it in, sweet spot, set-up, or follow-through).",
     "One student feeds while another strikes, and the striker gives their self-check immediately afterward.",
     "The group listens without judging or correcting — the goal is the student noticing their own strengths.",
     "Rotate the feeder and striker roles every 4-5 turns so everyone gets equal practice.",
     "Coach the key message: 'notice it, don't judge it.'",
     "For 'easier', have the teacher offer prompts; for 'harder', give no prompts, own words only."
    ]
   }
  ],
  "big": {
   "name": "Strike It Clean Games",
   "desc": "Small-sided striking matches where teams earn a bonus point for clean, well-combined strikes, wrapping up the whole block.",
   "setup": "Split the class into groups of 8, forming two teams of 4 per game. Mark a small playing area roughly 15m x 10m with cones. Soft bats/paddles, one ball per game, plus bibs to tell teams apart.",
   "howTo": [
    "Explain the rules before starting: this small-sided striking match brings together everything from Block 2 — watching it in, sweet-spot contact, set-up, and follow-through.",
    "Start each point with a gentle feed or serve.",
    "Play the point out with normal scoring, and award a bonus point any time a player's strike is spotted as clean and well-combined across all four elements.",
    "After each point, restart immediately with the next feed or serve — rotate who feeds each time.",
    "Rotate players through different positions every few minutes so everyone gets equal chances to strike.",
    "Coach the key message throughout: 'bring together everything you've learned this week — that's what wraps up Block 2.'"
   ]
  },
  "discussion": [
   "Which part of your strike — set-up, contact, or follow-through — feels strongest now?",
   "What did combining all of them together feel like today?",
   "What's one thing you'd still like to smooth out?"
  ],
  "lookfors": [
   "Combines set-up, contact, and follow-through into one smooth strike",
   "Strikes cleanly and confidently more often than not",
   "Resets calmly after a mishit"
  ],
  "inclusion": "Allow students to nominate their own 'easier' or 'harder' station variant based on confidence; celebrate streaks of any length to build confidence going into Block 3.",
  "skillBreakdown": [
   {
    "step": "Trust the watching-in, sweet-spot, set-up, and follow-through skills you've built this week, all together in one motion.",
    "why": "A clean strike isn't separate steps — it's one smooth sequence once each part has been practised enough."
   },
   {
    "step": "Notice which part of your strike is strongest and which still needs work.",
    "why": "Recognising your own pattern is what lets you keep improving after this unit ends."
   },
   {
    "step": "Stay relaxed and confident, even after a mishit.",
    "why": "Tension after a miss usually causes the next strike to go wrong too — resetting calmly keeps your technique intact."
   }
  ],
  "value": "Mōhio",
  "valueText": "Understanding your own strengths and how you fit into the team, and noticing what your teammates need from you in order to do their best."
 },
 {
  "n": 11,
  "block": 3,
  "title": "Quick Hands",
  "focus": "Fast reaction catching / reflex response to a sudden or unpredictable object",
  "walt": "We are learning to react quickly with our hands when a ball arrives suddenly or unexpectedly.",
  "wilf": [
   "react quickly to catch a suddenly thrown or dropped ball",
   "stay ready rather than relaxed between reactions"
  ],
  "nzc": "Strand B · Movement skills",
  "equipment": "Small reaction balls or tennis balls, cones",
  "safety": "Keep reaction throws close-range and gentle to avoid jammed fingers; standard spacing",
  "games": [
   {
    "name": "Drop Catch",
    "desc": "In pairs, one holds a ball at shoulder height and drops it without warning for the other to catch before it bounces twice.",
    "coach": "React the instant it drops.",
    "easier": "Verbal warning before dropping.",
    "harder": "No warning at all.",
    "chaos": "Occasional fake drop (hand moves, ball doesn't drop)",
    "setup": "Pairs facing each other roughly 1m apart across the space, one small reaction ball or tennis ball per pair.",
    "howTo": [
     "Demonstrate first: holding the ball at shoulder height with one hand and letting it drop without warning, while the partner's hands stay ready and low.",
     "One partner holds the ball at shoulder height; the other stands ready, hands loose and low, watching closely.",
     "The holder drops the ball without warning; the catcher reacts instantly to catch it before it bounces twice.",
     "Partners swap roles every 6-8 drops so both get equal practice.",
     "Coach the key message: 'react the instant it drops.'",
     "For 'easier', give a verbal warning before dropping; for 'harder', give no warning at all; an occasional fake drop (hand moves, ball doesn't drop) adds extra challenge (chaos variant)."
    ]
   },
   {
    "name": "Reaction Ball Rally",
    "desc": "Using a small reaction ball (or tennis ball), partners toss it low and short with unpredictable bounces for the other to react and catch.",
    "coach": "Stay light on your feet, ready to move either way.",
    "easier": "Softer, more predictable tosses.",
    "harder": "Livelier, less predictable tosses.",
    "chaos": "n/a",
    "setup": "Pairs facing each other roughly 2-3m apart across the space, one small reaction ball or tennis ball per pair.",
    "howTo": [
     "Demonstrate first: staying light on your feet, ready to move either way, before the toss even arrives.",
     "One partner tosses the ball low and short with a gentle, unpredictable bounce toward the other.",
     "The receiver reacts to the bounce and catches it, staying light on their feet throughout.",
     "Partners swap roles every 8-10 tosses so both get equal practice.",
     "Coach the key message: 'stay light on your feet the whole time, ready to move either way.'",
     "For 'easier', use softer, more predictable tosses; for 'harder', use livelier, less predictable tosses."
    ]
   },
   {
    "name": "Quick Hands Circle",
    "desc": "In a small circle, a ball is passed rapidly and randomly between players, rewarding fast, clean reactions.",
    "coach": "Hands up and ready, always.",
    "easier": "Slower pace, predictable order.",
    "harder": "Faster pace, random order.",
    "chaos": "Two balls introduced",
    "setup": "Small circles of 5-6 students, roughly 3-4m across, one ball per circle.",
    "howTo": [
     "Explain the rule before starting: the ball will be passed rapidly and randomly between players in the circle, not in a set order.",
     "One student starts with the ball and passes it to anyone else in the circle without warning.",
     "Students must keep their hands up and ready at all times, since the next pass could come to them at any moment.",
     "Continue passing randomly for the full activity time, with the teacher checking hands stay ready between passes.",
     "Coach the key message: 'hands up and ready, always.'",
     "For 'easier', use a slower pace with a predictable order; for 'harder', use a faster pace with random order; introducing a second ball adds extra challenge (chaos variant)."
    ]
   }
  ],
  "big": {
   "name": "Reaction Relay",
   "desc": "Small teams race through a series of quick-reaction catching challenges in relay format, with clean reactive catches earning points toward the team total.",
   "setup": "Split the class into teams of 4-5, each team with a short relay lane roughly 10m long marked with cones, and a small reaction ball or tennis ball per team.",
   "howTo": [
    "Explain the rules before starting: teams race through a series of quick-reaction catching challenges in relay format (e.g. drop-catch, then a short sprint, tag the next teammate).",
    "The first player in each team completes a quick-reaction catch challenge, then sprints to tag the next teammate in line.",
    "Each clean, reactive catch earns a point toward the team's running total, in addition to relay placing.",
    "As soon as one player finishes, the next starts immediately — keep the relay moving with minimal stoppage.",
    "Rotate the order of who goes first each round so everyone gets a mix of positions.",
    "Coach the key message throughout: 'quick hands and a quick reaction — that's what earns the points.'"
   ]
  },
  "discussion": [
   "What helped you react faster today — was it your position, your focus, or something else?",
   "What happened when you tried to think about the catch instead of just reacting?",
   "How did staying 'ready' between turns change your reaction time?"
  ],
  "lookfors": [
   "Stays in a light, ready position between reactions",
   "Reacts instantly rather than hesitating",
   "Resets quickly and gets ready again"
  ],
  "inclusion": "Use larger, softer reaction balls and closer distances for students building reaction confidence; add clear warnings before drops or throws in early rounds.",
  "skillBreakdown": [
   {
    "step": "Stay in a light, ready position between reactions, not fully relaxed.",
    "why": "A body that's already alert reacts far faster than one that has to first 'wake up'."
   },
   {
    "step": "React with your hands the instant you see the ball move, not after thinking about it.",
    "why": "Overthinking a reaction slows it down — trust the instant response."
   },
   {
    "step": "Reset quickly and get ready again straight after each reaction.",
    "why": "Reaction drills often come in quick succession, so recovery speed matters as much as the reaction itself."
   }
  ],
  "value": "Manaaki",
  "valueText": "Looking after your teammates' success as much as your own — including, encouraging, and setting others up to succeed."
 },
 {
  "n": 12,
  "block": 3,
  "title": "Read the Bounce",
  "focus": "Predicting where a bouncing or deflecting object will arrive",
  "walt": "We are learning to read how a ball bounces so we can predict where it will go next.",
  "wilf": [
   "predict roughly where a bounced ball will end up",
   "move into position early based on that prediction"
  ],
  "nzc": "Strand B · Movement skills",
  "equipment": "Balls, cones marking a grid",
  "safety": "Standard spacing; controlled bounce heights to avoid balls bouncing into other groups",
  "games": [
   {
    "name": "Bounce Predictor",
    "desc": "In pairs, one bounces the ball at varying angles while the other calls out and then moves to where they predict it will arrive.",
    "coach": "Call it before you move, then check.",
    "easier": "Straight, predictable bounces.",
    "harder": "Angled, less predictable bounces.",
    "chaos": "n/a",
    "setup": "Pairs spread out roughly 4m apart across the space, inside a grid marked with cones roughly 8m x 8m per pair, one ball per pair.",
    "howTo": [
     "Demonstrate first: calling out loud where you predict the ball will arrive before moving, then checking if your prediction was right.",
     "One partner bounces the ball at a varying angle toward the other.",
     "The receiver calls out where they predict it will arrive, then moves there to collect it.",
     "Partners swap roles every 6-8 bounces so both get equal practice.",
     "Coach the key message: 'call it before you move, then check.'",
     "For 'easier', use straight, predictable bounces; for 'harder', use angled, less predictable bounces."
    ]
   },
   {
    "name": "Beat the Bounce",
    "desc": "Small groups race to be first to reach and control a bounced ball after it's released from a height or angle.",
    "coach": "Move on the read, not the bounce.",
    "easier": "Ball bounced from a consistent spot.",
    "harder": "Ball bounced from varying spots and angles.",
    "chaos": "Fake bounce release (ball held, not released)",
    "setup": "Small groups of 3-4 spread across the space, roughly 6m x 6m per group, one ball per group.",
    "howTo": [
     "Explain the rule before starting: the group races to be first to reach and control the ball after it's released from a height or angle.",
     "One student releases the ball from a height or angle, without telling the others exactly where it will land.",
     "The rest of the group reacts to the bounce and races to be first to control it cleanly.",
     "Rotate who releases the ball every 4-5 turns so everyone gets equal chances to react.",
     "Coach the key message: 'move on the read, not the bounce.'",
     "For 'easier', release from a consistent spot; for 'harder', vary the release spot and angle; an occasional fake bounce release (ball held, not released) adds extra challenge (chaos variant)."
    ]
   },
   {
    "name": "Bad Bounce Recovery",
    "desc": "Partners deliberately introduce an occasional unpredictable bounce (off a slight surface change or spin) and the receiver practises adjusting mid-read.",
    "coach": "If it surprises you, adjust fast, don't freeze.",
    "easier": "Bad bounces flagged in advance.",
    "harder": "No warning given.",
    "chaos": "n/a",
    "setup": "Pairs spread out roughly 4m apart across the space, one ball per pair, on any available surface change (grass edge, painted line) if possible.",
    "howTo": [
     "Explain the rule before starting: the partner will deliberately introduce an occasional unpredictable bounce, and the receiver must adjust mid-read rather than freezing.",
     "One partner bounces the ball toward the other, mostly with normal, predictable bounces.",
     "Occasionally, the thrower introduces spin or bounces off a slight surface change to create an unpredictable bounce.",
     "The receiver reacts and adjusts quickly to still collect the ball cleanly.",
     "Coach the key message: 'if it surprises you, adjust fast, don't freeze.'",
     "For 'easier', flag bad bounces in advance; for 'harder', give no warning at all."
    ]
   }
  ],
  "big": {
   "name": "Read & React Bounce Game",
   "desc": "Small-sided game incorporating bounced passes, where correctly predicting and reaching a bounce first earns a bonus point.",
   "setup": "Split the class into groups of 8, forming two teams of 4 per game. Mark a grid roughly 15m x 15m with cones. One ball per game, plus bibs to tell teams apart.",
   "howTo": [
    "Explain the rules before starting: this is a keep-away style game where bounced passes are encouraged, and correctly predicting and reaching a bounce first earns a bonus point.",
    "One team starts with the ball in the middle of the grid; the other team spreads out to defend without touching or tackling.",
    "Award standard possession points for completed passes, plus a bonus point any time a player is first to correctly predict and reach a bounced pass.",
    "If the ball is intercepted or goes out of the grid, possession switches immediately to the other team from that spot — restart with minimal fuss.",
    "Rotate players through attack and defence every few minutes so everyone gets equal time in both roles.",
    "Coach the key message throughout: 'read it early — that's what earns the bonus.'"
   ]
  },
  "discussion": [
   "What told you where a bounce was going to end up?",
   "How did moving early based on your prediction help?",
   "What did you do when a bounce surprised you?"
  ],
  "lookfors": [
   "Watches angle and speed before the bounce",
   "Predicts and moves early rather than reacting late",
   "Adjusts quickly when a bounce is unexpected"
  ],
  "inclusion": "Use straight, predictable bounces before introducing angled ones; allow extra thinking time in early rounds for students building this read.",
  "skillBreakdown": [
   {
    "step": "Watch the angle and speed of the ball just before it bounces.",
    "why": "Those two things — angle and speed — are what actually determine where a bounce will end up."
   },
   {
    "step": "Predict roughly where the ball will arrive, then move there early.",
    "why": "Reacting after the bounce is often too late — reading it beforehand buys you time."
   },
   {
    "step": "Adjust your prediction if the bounce surface or spin surprises you.",
    "why": "Not every bounce behaves exactly as expected, so staying ready to correct matters as much as the first read."
   }
  ],
  "value": "Pānga",
  "valueText": "Seeing how your role today connects to the bigger team effort — a small contribution that matters once it's put together with everyone else's."
 },
 {
  "n": 13,
  "block": 3,
  "title": "Time It Right",
  "focus": "Timing a jump, swing, or reach to arrive exactly when the moving object does",
  "walt": "We are learning to time our jump, swing, or reach so it arrives exactly when the ball does.",
  "wilf": [
   "time my movement to meet the ball, not too early or too late",
   "adjust my timing if the ball's speed changes"
  ],
  "nzc": "Strand B · Movement skills",
  "equipment": "Balls, cones, soft bats/paddles (optional)",
  "safety": "Standard spacing; controlled speeds while timing skills are still developing",
  "games": [
   {
    "name": "Meet It There",
    "desc": "In pairs, one throws at varying speeds while the other times a jump or reach to meet the ball at its highest or furthest point.",
    "coach": "Start moving before it gets there.",
    "easier": "Consistent, predictable speed.",
    "harder": "Varying speed each throw.",
    "chaos": "n/a",
    "setup": "Pairs spread out roughly 4-5m apart across the space, one ball per pair.",
    "howTo": [
     "Demonstrate first: starting a jump or reach early enough to meet the ball right at its highest or furthest point, rather than reacting late.",
     "One partner throws at a varying speed; the other times a jump or reach to meet the ball at the right moment.",
     "Partners swap roles every 6-8 throws so both get equal practice.",
     "Coach the key message: 'start moving before it gets there.'",
     "For 'easier', use a consistent, predictable speed; for 'harder', vary the speed each throw."
    ]
   },
   {
    "name": "Timed Strike",
    "desc": "Using a soft bat or paddle, students time their swing to meet a gently rolled or tossed ball at exactly the right moment.",
    "coach": "Swing to meet it, not to chase it.",
    "easier": "Slower, closer feeds.",
    "harder": "Faster, more varied feeds.",
    "chaos": "Feeder occasionally changes speed mid-approach",
    "setup": "Pairs spread out roughly 3-4m apart across the space, soft bats/paddles (optional), one ball per pair.",
    "howTo": [
     "Demonstrate first: timing a swing so it meets a gently rolled or tossed ball exactly at the right moment, rather than chasing after it.",
     "One partner rolls or tosses the ball gently; the other times their swing to meet it right at the correct moment.",
     "Partners swap roles every 6-8 feeds so both get equal practice.",
     "Coach the key message: 'swing to meet it, not to chase it.'",
     "For 'easier', use slower, closer feeds; for 'harder', use faster, more varied feeds; the feeder occasionally changing speed mid-approach adds extra challenge (chaos variant)."
    ]
   },
   {
    "name": "Speed Change Read",
    "desc": "Partners vary a ball's speed unpredictably (fast, then slow) and the receiver must adjust their timing in real time.",
    "coach": "Watch for the change, don't assume it stays the same.",
    "easier": "Speed change signalled in advance.",
    "harder": "No signal given.",
    "chaos": "n/a",
    "setup": "Pairs spread out roughly 4m apart across the space, one ball per pair.",
    "howTo": [
     "Explain the rule before starting: the partner will vary the ball's speed unpredictably — fast, then slow — and the receiver must adjust their timing in real time.",
     "One partner throws with a mix of fast and slow speeds in no fixed pattern.",
     "The receiver watches closely and adjusts their timing for each throw individually.",
     "Partners swap roles every 6-8 throws so both get equal practice.",
     "Coach the key message: 'watch for the change, don't assume it stays the same.'",
     "For 'easier', signal the speed change in advance; for 'harder', give no signal at all."
    ]
   }
  ],
  "big": {
   "name": "Perfect Timing Game",
   "desc": "Small-sided game where a well-timed jump, reach, or strike (arriving exactly with the ball) earns a bonus point on top of standard scoring.",
   "setup": "Split the class into groups of 8, forming two teams of 4 per game. Mark a playing area roughly 15m x 10m with cones. Balls, soft bats/paddles (optional), plus bibs to tell teams apart.",
   "howTo": [
    "Explain the rules before starting: standard scoring applies, plus a bonus point for a well-timed jump, reach, or strike that arrives exactly with the ball.",
    "Start each point or passage of play with a gentle feed or throw-in.",
    "Play with normal scoring, and award a bonus point any time a player's timing is spotted as exactly on the mark.",
    "After each point/stoppage, restart immediately with minimal fuss.",
    "Rotate players through different positions every few minutes so everyone gets equal chances to time their actions.",
    "Coach the key message throughout: 'start moving before it gets there — that's what earns the bonus.'"
   ]
  },
  "discussion": [
   "What helped you judge the ball's speed early enough to time your movement?",
   "What happened when you started your movement too early, or too late?",
   "How did you adjust when the ball's speed changed unexpectedly?"
  ],
  "lookfors": [
   "Judges speed early rather than reacting late",
   "Times movement to arrive exactly with the ball",
   "Adjusts timing when speed or path changes"
  ],
  "inclusion": "Use slower, more predictable speeds for students building timing confidence; allow a practice attempt before each scored turn.",
  "skillBreakdown": [
   {
    "step": "Judge the ball's speed early so you can plan your timing, not just react at the last second.",
    "why": "Good timing starts with an early read of speed — leaving it too late removes your ability to adjust."
   },
   {
    "step": "Begin your jump, swing, or reach slightly before the ball arrives, so it's at full extension exactly on time.",
    "why": "Movements take a moment to complete — starting too late means arriving after the ball has already gone."
   },
   {
    "step": "Adjust your timing if the ball speeds up, slows down, or changes path.",
    "why": "A single fixed plan doesn't work if the ball's behaviour changes — timing has to stay flexible."
   }
  ],
  "value": "Aroha",
  "valueText": "Being patient and encouraging with teammates whose skills or confidence look different from yours, and treating everyone with kindness whether the game is going well or not."
 },
 {
  "n": 14,
  "block": 3,
  "title": "Under Pressure",
  "focus": "Coordinating hand-eye skills while moving, being defended, or under time pressure",
  "walt": "We are learning to keep our hand-eye coordination sharp even when we're moving, being defended, or under time pressure.",
  "wilf": [
   "catch or strike accurately even while moving",
   "stay coordinated when a defender or the clock is adding pressure"
  ],
  "nzc": "Strand B, C",
  "equipment": "Balls, bibs, cones",
  "safety": "Standard spacing across simultaneous pairs/groups; clear rules to avoid unsafe contact when defenders are added",
  "games": [
   {
    "name": "Catch on the Move",
    "desc": "In pairs, one throws while the other jogs or moves laterally, catching without stopping their movement.",
    "coach": "Keep your technique the same, just add movement.",
    "easier": "Slower movement, easier throws.",
    "harder": "Quicker movement, more varied throws.",
    "chaos": "n/a",
    "setup": "Pairs spread out across the space with enough room to jog roughly 8-10m, one ball per pair.",
    "howTo": [
     "Demonstrate first: keeping the same catching technique used in earlier lessons, but now while jogging or moving laterally rather than standing still.",
     "One partner throws while the other jogs or moves laterally, catching without stopping their movement.",
     "Partners swap roles every 6-8 throws so both get equal practice.",
     "Coach the key message: 'keep your technique the same, just add movement.'",
     "For 'easier', use slower movement with easier throws; for 'harder', use quicker movement with more varied throws."
    ]
   },
   {
    "name": "Defended Catch",
    "desc": "A light passive defender waves their arms nearby (without touching) while a pair practises catching, adding visual distraction pressure.",
    "coach": "Focus on the ball, not the distraction.",
    "easier": "Defender stands further away.",
    "harder": "Defender stands close and active.",
    "chaos": "Defender makes a surprise call-out",
    "setup": "Trios spread out across the space, roughly 5m x 5m per trio, one ball per trio, with the third player acting as a light passive defender.",
    "howTo": [
     "Explain the rule before starting: the defender waves their arms nearby without touching, to add visual distraction while the pair practises catching.",
     "One student throws to another while the third student (the defender) stands nearby, waving their arms without making any contact.",
     "The receiver focuses on the ball, not the distraction, and completes the catch.",
     "Rotate the defender role every 4-5 turns so everyone experiences defending and catching.",
     "Coach the key message: 'focus on the ball, not the distraction.'",
     "For 'easier', have the defender stand further away; for 'harder', have the defender stand close and active; a surprise call-out from the defender adds extra challenge (chaos variant)."
    ]
   },
   {
    "name": "Beat the Clock",
    "desc": "Small groups attempt a set number of clean catches or strikes within a time limit, adding time pressure to the coordination task.",
    "coach": "Fast hands, calm mind.",
    "easier": "More time given.",
    "harder": "Less time given.",
    "chaos": "Time limit shortened without warning",
    "setup": "Small groups of 4-5 spread across the space, roughly 6m x 6m per group, one ball per group, plus a stopwatch or visible timer.",
    "howTo": [
     "Explain the rule before starting: the group attempts a set number of clean catches or strikes within a set time limit.",
     "The teacher sets a target number of clean catches and a time limit, then starts the timer.",
     "The group passes and catches as quickly and cleanly as possible, trying to reach the target before time runs out.",
     "As soon as the time is up (or the target is reached), reset and try again with a fresh target.",
     "Coach the key message: 'fast hands, calm mind.'",
     "For 'easier', give more time; for 'harder', give less time; shortening the time limit without warning adds extra challenge (chaos variant)."
    ]
   }
  ],
  "big": {
   "name": "Pressure Game",
   "desc": "Small-sided game combining light defensive pressure and quick tempo, where accurate hand-eye actions under this pressure earn bonus points.",
   "setup": "Split the class into groups of 8, forming two teams of 4 per game. Mark a grid roughly 15m x 15m with cones. One ball per game, plus bibs to tell teams apart.",
   "howTo": [
    "Explain the rules before starting: this small-sided game combines light defensive pressure with a quick tempo, and accurate hand-eye actions under pressure earn bonus points.",
    "One team starts with the ball in the middle of the grid; the other team applies light, controlled defensive pressure without contact.",
    "Award standard possession points for completed passes, plus a bonus point any time a player makes an accurate catch or pass despite the pressure and tempo.",
    "If the ball is intercepted or goes out of the grid, possession switches immediately to the other team from that spot — restart with minimal fuss.",
    "Rotate players through attack and defence every few minutes so everyone gets equal time in both roles.",
    "Coach the key message throughout: 'fast hands, calm mind — that's what earns the bonus under pressure.'"
   ]
  },
  "discussion": [
   "What changed about your technique when pressure was added?",
   "What helped you stay calm and accurate even while moving or defended?",
   "How did you reset after a mistake made under pressure?"
  ],
  "lookfors": [
   "Keeps technique consistent under pressure",
   "Stays mentally calm even while moving quickly",
   "Resets quickly after a pressured mistake"
  ],
  "inclusion": "Introduce pressure gradually — movement first, then light distraction, then time pressure — for students building coordination confidence.",
  "skillBreakdown": [
   {
    "step": "Keep your technique the same under pressure as it was without it.",
    "why": "Pressure tends to rush technique first — holding onto the basics is what keeps performance steady."
   },
   {
    "step": "Slow your decision-making down mentally, even if your body is moving quickly.",
    "why": "A calm mind inside a fast-moving body is what actually produces accurate hand-eye skills under pressure."
   },
   {
    "step": "Accept that pressure will cause more mistakes than usual, and reset quickly.",
    "why": "Expecting perfection under pressure adds unnecessary tension — a quick reset keeps you performing well overall."
   }
  ],
  "value": "Mōhio",
  "valueText": "Understanding your own strengths and how you fit into the team, and noticing what your teammates need from you in order to do their best."
 },
 {
  "n": 15,
  "block": 3,
  "title": "Fast & Focused",
  "focus": "Combining quick reactions, reading bounces, timing, and composure under pressure (Block 3 wrap-up)",
  "walt": "We are learning to bring together everything from this week — quick hands, reading bounces, timing, and staying composed — into fast, focused coordination.",
  "wilf": [
   "react, read, and time my movements together under pressure",
   "stay focused and composed even when things happen quickly"
  ],
  "nzc": "Strand B, C",
  "equipment": "Balls, bibs, cones — combined equipment from Block 3 games for the wrap-up carousel",
  "safety": "Standard spacing across the carousel and games; controlled pace for higher-pressure stations",
  "games": [
   {
    "name": "Fast & Focused Carousel",
    "desc": "Teams rotate through short stations that each revisit a Block 3 focus — quick hands, reading bounces, timing, composure under pressure.",
    "coach": "Use everything you've practised this week.",
    "easier": "Longer time per station.",
    "harder": "Shorter time, quicker rotation.",
    "chaos": "Head-to-head mirror",
    "setup": "Set up 4 short stations around the space (roughly 5m x 5m each), one for each Block 3 focus: quick hands, reading bounces, timing, composure under pressure. Split the class into teams of 4-5, one team starting at each station, with balls distributed across the stations.",
    "howTo": [
     "Briefly remind students what each station revisits before starting: Station 1 quick hands (Drop Catch style), Station 2 reading bounces (Bounce Predictor style), Station 3 timing (Meet It There style), Station 4 composure under pressure (Beat the Clock style).",
     "Teams start at their assigned station and begin the activity immediately on 'go'.",
     "On the teacher's signal (roughly every 2-3 minutes), teams rotate clockwise to the next station.",
     "Continue until every team has completed all 4 stations.",
     "Coach the key message throughout: 'use everything you've practised this week.'",
     "For 'easier', give longer time per station; for 'harder', give shorter time with quicker rotation; a head-to-head mirror between two teams at the same station adds extra challenge (chaos variant)."
    ]
   },
   {
    "name": "Combined Pressure Challenge",
    "desc": "In pairs or small groups, students complete a fast sequence combining a reaction catch, a bounce read, and a timed strike or reach, one after another.",
    "coach": "One smooth sequence, not three separate stops.",
    "easier": "Pause briefly between each part.",
    "harder": "No pause, straight through.",
    "chaos": "n/a",
    "setup": "Pairs or small groups of 3 spread out across the space, roughly 6m x 6m per group, one ball per group.",
    "howTo": [
     "Explain the sequence before starting: a reaction catch, then a bounce read, then a timed strike or reach, one after another without stopping.",
     "One student feeds each part of the sequence in turn while the other completes all three actions as one flowing sequence.",
     "The group checks that all three parts were completed cleanly before swapping roles.",
     "Rotate roles every 2-3 sequences so everyone gets equal practice as the one completing the sequence.",
     "Coach the key message: 'one smooth sequence, not three separate stops.'",
     "For 'easier', pause briefly between each part; for 'harder', go straight through with no pause."
    ]
   },
   {
    "name": "Composure Check",
    "desc": "Students complete short pressure challenges, briefly naming out loud how they stayed focused afterwards.",
    "coach": "Notice what helped you stay calm.",
    "easier": "Teacher offers prompts.",
    "harder": "No prompts, own words only.",
    "chaos": "n/a",
    "setup": "Small groups of 3-4 spread across the space, roughly 5m x 5m per group, one ball per group.",
    "howTo": [
     "Explain the rule before starting: after a short pressure challenge, each student briefly names out loud how they stayed focused.",
     "The group completes a short pressure challenge together (e.g. a quick reaction/timing task from earlier this block).",
     "Immediately afterward, each student takes a turn naming one thing that helped them stay calm and focused.",
     "Rotate who leads the challenge each round so everyone gets equal turns.",
     "Coach the key message: 'notice what helped you stay calm.'",
     "For 'easier', have the teacher offer prompts; for 'harder', give no prompts, own words only."
    ]
   }
  ],
  "big": {
   "name": "Fast & Focused Games",
   "desc": "Small-sided matches combining reaction, timing, and light pressure, where teams earn a bonus point for staying accurate and composed throughout, wrapping up the whole block.",
   "setup": "Split the class into groups of 8, forming two teams of 4 per game. Mark a grid roughly 15m x 15m with cones. One ball per game, plus bibs to tell teams apart.",
   "howTo": [
    "Explain the rules before starting: this small-sided match combines reaction, timing, and light pressure, wrapping up the whole block.",
    "One team starts with the ball in the middle of the grid; the other team applies light, controlled defensive pressure without contact.",
    "Award standard possession points for completed passes, plus a bonus point any time a team stays accurate and composed under the pressure and pace.",
    "If the ball is intercepted or goes out of the grid, possession switches immediately to the other team from that spot — restart with minimal fuss.",
    "Rotate players through attack and defence every few minutes so everyone gets equal time in both roles.",
    "Coach the key message throughout: 'bring together everything you've learned this week — that's what wraps up Block 3.'"
   ]
  },
  "discussion": [
   "Which part of this week — reacting, reading, or timing — feels strongest now?",
   "What helped you stay focused when things were happening quickly?",
   "Looking back over this block, what's improved most in your coordination?"
  ],
  "lookfors": [
   "Combines reaction, bounce-reading, and timing skills under pressure",
   "Stays focused on the task rather than the pressure",
   "Recovers quickly from mistakes"
  ],
  "inclusion": "Allow students to nominate their own 'easier' or 'harder' station variant based on confidence; model calm recovery language for students who are hard on themselves after a mistake.",
  "skillBreakdown": [
   {
    "step": "Trust the reaction, bounce-reading, and timing skills you've built this week, all working together under pressure.",
    "why": "Fast, focused coordination is these separate skills becoming automatic together, not something new."
   },
   {
    "step": "Stay focused on the object itself, not on the pressure around it.",
    "why": "Pressure is a distraction — the actual task (catching, striking, timing) hasn't changed, so the focus shouldn't either."
   },
   {
    "step": "Recover quickly from any mistake and get ready for the next moment.",
    "why": "Fast-paced coordination always includes some mistakes — what matters is getting back into a ready state immediately."
   }
  ],
  "value": "Manaaki",
  "valueText": "Looking after your teammates' success as much as your own — including, encouraging, and setting others up to succeed."
 },
 {
  "n": 16,
  "block": 4,
  "title": "Hands & Feet Together",
  "focus": "Combining hand-eye coordination with footwork and body movement",
  "walt": "We are learning to combine our hand skills with good footwork, moving our whole body to support a catch or strike.",
  "wilf": [
   "move my feet to get into the right position before using my hands",
   "combine footwork and hand skills smoothly in one action"
  ],
  "nzc": "Strand B · Movement skills",
  "equipment": "Balls, cones, bibs",
  "safety": "Standard spacing; clear pathways for footwork drills to avoid collisions",
  "games": [
   {
    "name": "Footwork First",
    "desc": "In pairs, receivers must take at least two small adjusting steps to get into position before every catch.",
    "coach": "Feet first, hands second.",
    "easier": "Ball thrown closer, less movement needed.",
    "harder": "Ball thrown wider, more movement needed.",
    "chaos": "n/a",
    "setup": "Pairs spread out roughly 4m apart across the space, one ball per pair.",
    "howTo": [
     "Demonstrate first: taking at least two small adjusting steps to get into position before every catch, rather than reaching from a fixed spot.",
     "One partner throws to the other, who must take at least two visible steps to adjust into position before catching.",
     "Partners swap roles every 6-8 throws so both get equal practice.",
     "Coach the key message: 'feet first, hands second.'",
     "For 'easier', throw the ball closer, requiring less movement; for 'harder', throw the ball wider, requiring more movement."
    ]
   },
   {
    "name": "Shuffle & Catch",
    "desc": "Students shuffle sideways along a line of cones, catching a ball thrown at random points along the line.",
    "coach": "Stay light on your feet the whole time.",
    "easier": "Slower shuffle, predictable throw points.",
    "harder": "Faster shuffle, random throw points.",
    "chaos": "Thrower calls 'stop' — catch from a dead stop",
    "setup": "A line of 5-6 cones spaced roughly 2m apart, with students working in pairs at each line, one ball per pair.",
    "howTo": [
     "Demonstrate first: shuffling sideways along the line of cones while staying light on the feet, ready to catch at any point.",
     "One partner shuffles sideways along the cone line while the other throws the ball at random points along the line.",
     "The shuffling partner catches the ball wherever it's thrown, then continues shuffling.",
     "Partners swap roles every 6-8 throws so both get equal practice.",
     "Coach the key message: 'stay light on your feet the whole time.'",
     "For 'easier', use a slower shuffle with predictable throw points; for 'harder', use a faster shuffle with random throw points; the thrower calling 'stop' for a catch from a dead stop adds extra challenge (chaos variant)."
    ]
   },
   {
    "name": "Move to Strike",
    "desc": "Using a soft bat or paddle, students move their feet to get in line with a rolled or tossed ball before striking it.",
    "coach": "Get your feet there before your bat does.",
    "easier": "Ball rolled slowly, close range.",
    "harder": "Ball rolled faster, wider range.",
    "chaos": "n/a",
    "setup": "Pairs spread out roughly 4-5m apart across the space, soft bats/paddles and balls, one set per pair.",
    "howTo": [
     "Demonstrate first: moving your feet to get in line with a rolled or tossed ball before striking, rather than reaching or stretching to meet it.",
     "One partner rolls or tosses the ball toward the other; the striker moves their feet to get in line with it before striking.",
     "Partners swap roles every 6-8 feeds so both get equal practice.",
     "Coach the key message: 'get your feet there before your bat does.'",
     "For 'easier', roll the ball slowly at close range; for 'harder', roll the ball faster over a wider range."
    ]
   }
  ],
  "big": {
   "name": "Whole-Body Game",
   "desc": "Small-sided game where clean catches or strikes that clearly used good footwork to get into position earn a bonus point.",
   "setup": "Split the class into groups of 8, forming two teams of 4 per game. Mark a playing area roughly 15m x 15m with cones. Balls and soft bats/paddles (optional), plus bibs to tell teams apart.",
   "howTo": [
    "Explain the rules before starting: standard scoring applies, plus a bonus point for a clean catch or strike that clearly used good footwork to get into position.",
    "Play a small-sided game with normal scoring rules for the format in use.",
    "Award a bonus point any time a player is spotted moving their feet well to get into position before a catch or strike.",
    "After each stoppage, restart immediately with minimal fuss.",
    "Rotate players through different positions every few minutes so everyone gets equal chances to move and receive.",
    "Coach the key message throughout: 'feet first, hands second — that's what earns the bonus.'"
   ]
  },
  "discussion": [
   "How did moving your feet first change your catching or striking?",
   "What did small, quick steps feel like compared to one big lunge?",
   "When did footwork and hands come together smoothly today?"
  ],
  "lookfors": [
   "Moves feet into position before using hands",
   "Takes small, quick adjusting steps",
   "Combines footwork and hand action smoothly"
  ],
  "inclusion": "Reduce the distance balls are thrown/rolled for students still building footwork confidence; allow extra practice steps before each attempt.",
  "skillBreakdown": [
   {
    "step": "Move your feet first to get your body into position, then let your hands finish the job.",
    "why": "Good hand-eye actions are built on a base of good footwork — hands alone can only do so much."
   },
   {
    "step": "Keep your steps small and quick rather than one big lunge.",
    "why": "Small adjusting steps keep you balanced and ready to change direction if needed."
   },
   {
    "step": "Combine the footwork and hand action into one smooth movement, not two separate steps.",
    "why": "A pause between moving your feet and using your hands usually means you're already too late."
   }
  ],
  "value": "Pānga",
  "valueText": "Seeing how your role today connects to the bigger team effort — a small contribution that matters once it's put together with everyone else's."
 },
 {
  "n": 17,
  "block": 4,
  "title": "Multi-Skill Circuit",
  "focus": "Combining catching, striking, and reaction skills across a rotating multi-station circuit",
  "walt": "We are learning to apply catching, striking, and reaction skills across a range of different stations.",
  "wilf": [
   "apply the right hand-eye skill for each different station",
   "move confidently between different types of hand-eye challenge"
  ],
  "nzc": "Strand B · Movement skills",
  "equipment": "Balls (various sizes), soft bats/paddles, cones, bibs — set up as circuit stations",
  "safety": "Clear station boundaries and rotation system; standard spacing at each station",
  "games": [
   {
    "name": "Station Rotation Warm-Up",
    "desc": "A quick rotation through three short stations (catching, striking, reaction) to warm into today's circuit format.",
    "coach": "Get the feel of each station before we go full circuit.",
    "easier": "Longer time per station.",
    "harder": "Shorter time, quicker rotation.",
    "chaos": "n/a",
    "setup": "Set up 3 short stations around the space (roughly 5m x 5m each): one catching, one striking, one reaction. Split the class into teams of 4-5, one team starting at each station, with balls and soft bats/paddles distributed across the stations.",
    "howTo": [
     "Briefly explain each station before starting so students know what to expect.",
     "Teams start at their assigned station and begin the activity immediately on 'go'.",
     "On the teacher's signal (roughly every 90 seconds), teams rotate to the next station.",
     "Continue until every team has completed all 3 stations, getting a feel for each before the full circuit begins.",
     "Coach the key message: 'get the feel of each station before we go full circuit.'",
     "For 'easier', give longer time per station; for 'harder', give shorter time with quicker rotation."
    ]
   },
   {
    "name": "Full Circuit Round 1",
    "desc": "Students complete a full rotation through all circuit stations at a steady, controlled pace.",
    "coach": "Bring your best technique to every station.",
    "easier": "More time per station.",
    "harder": "Less time per station.",
    "chaos": "Head-to-head mirror between two groups on the same station",
    "setup": "Use the same stations set up for the day's circuit (catching, striking, reaction, plus any additional stations), each roughly 5m x 5m, with equipment already distributed at each station.",
    "howTo": [
     "Remind students of the technique focus at each station before starting.",
     "Teams rotate through every station in the circuit at a steady, controlled pace, spending roughly the same amount of time at each.",
     "At each station, students focus on bringing their best technique rather than rushing.",
     "Continue until every team has completed the full circuit once.",
     "Coach the key message: 'bring your best technique to every station.'",
     "For 'easier', give more time per station; for 'harder', give less time per station; a head-to-head mirror between two groups on the same station adds extra challenge (chaos variant)."
    ]
   },
   {
    "name": "Full Circuit Round 2",
    "desc": "A second full rotation, with students aiming to beat their own personal result or streak from Round 1 at each station.",
    "coach": "Try to beat your own number, not someone else's.",
    "easier": "Same difficulty as Round 1.",
    "harder": "Slightly increased difficulty at each station.",
    "chaos": "Bonus objectives added to one station",
    "setup": "Same circuit stations as Full Circuit Round 1, with each team's Round 1 result or streak noted (verbally or on a simple tally) so they have something to beat.",
    "howTo": [
     "Remind students of their own Round 1 result or streak at each station before starting.",
     "Teams complete a second full rotation through all stations, aiming to beat their own personal result or streak from Round 1 at each one.",
     "Encourage students to focus on their own improvement rather than comparing to other teams.",
     "Continue until every team has completed the full circuit a second time.",
     "Coach the key message: 'try to beat your own number, not someone else's.'",
     "For 'easier', keep the same difficulty as Round 1; for 'harder', slightly increase the difficulty at each station; adding bonus objectives to one station adds extra challenge (chaos variant)."
    ]
   }
  ],
  "big": {
   "name": "Circuit Challenge Game",
   "desc": "Teams combine their circuit results into a team score, then play a short small-sided game applying whichever circuit skills come up naturally in play.",
   "setup": "Split the class into groups of 8, forming two teams of 4 per game. Mark a playing area roughly 15m x 15m with cones. Balls and soft bats/paddles (optional), plus bibs to tell teams apart.",
   "howTo": [
    "Explain the rules before starting: teams first combine their circuit results into a team score, then play a short small-sided game.",
    "Add up each team's combined circuit results (catches, strikes, reactions) from Rounds 1 and 2 into one team score.",
    "Play a short small-sided game afterward, applying whichever circuit skills come up naturally in play, using standard scoring for that format.",
    "After each stoppage in the game, restart immediately with minimal fuss.",
    "Rotate players through different positions during the game so everyone gets equal involvement.",
    "Coach the key message throughout: 'everything from the circuit carries straight into the game.'"
   ]
  },
  "discussion": [
   "Which station felt strongest for you today, and which felt trickiest?",
   "What did you carry over from one station to the next?",
   "How did rotating between different challenges compare to practising just one thing?"
  ],
  "lookfors": [
   "Applies the correct hand-eye skill at each different station",
   "Transitions between stations calmly and quickly",
   "Uses feedback from one station to improve at the next"
  ],
  "inclusion": "Allow flexible station order so students can build confidence at an easier station first; offer a buddy system for stations that involve reaction speed.",
  "skillBreakdown": [
   {
    "step": "Recognise which hand-eye skill each station needs, and apply it.",
    "why": "Different challenges need different specific skills — a strong coordinator can tell the difference and adjust."
   },
   {
    "step": "Move between stations calmly and get ready quickly for the next challenge.",
    "why": "A circuit works best when transitions are smooth, not rushed or chaotic."
   },
   {
    "step": "Use feedback from one station to improve at the next.",
    "why": "These are all connected skills — a fix noticed in one spot often carries straight over to the next."
   }
  ],
  "value": "Aroha",
  "valueText": "Being patient and encouraging with teammates whose skills or confidence look different from yours, and treating everyone with kindness whether the game is going well or not."
 },
 {
  "n": 18,
  "block": 4,
  "title": "Game Ready",
  "focus": "Applying hand-eye coordination skills inside a live, game-like context",
  "walt": "We are learning to use our catching, striking, and reaction skills inside a real, flowing game, not just in isolated drills.",
  "wilf": [
   "apply hand-eye skills accurately while a game is flowing around me",
   "stay coordinated even as the game gets faster or more chaotic"
  ],
  "nzc": "Strand B, C",
  "equipment": "Balls, bibs, cones",
  "safety": "Standard spacing across simultaneous games; agreed, fair self-officiating routines",
  "games": [
   {
    "name": "Warm Into the Game",
    "desc": "A shortened, simplified version of today's game format, letting players find their rhythm and reacquaint their hand-eye skills with live play.",
    "coach": "Use this to settle in, not to win.",
    "easier": "Longer warm-in time.",
    "harder": "Shorter warm-in, straight into full games.",
    "chaos": "n/a",
    "setup": "Split the class into groups of 6-8, forming small teams for a shortened, simplified version of today's game format, using a playing area roughly 12m x 10m per game marked with cones. Balls and bibs to tell teams apart.",
    "howTo": [
     "Explain the rule before starting: this shortened, simplified game is for settling in and finding a rhythm, not for winning.",
     "Start play with a simple version of the day's game format, using relaxed or simplified rules.",
     "Let students find their rhythm and reacquaint their hand-eye skills with live play, without the teacher stopping for correction unless there's a safety issue.",
     "After each stoppage, restart immediately with minimal fuss.",
     "Rotate players through different positions every few minutes.",
     "Coach the key message: 'use this to settle in, not to win.'",
     "For 'easier', allow a longer warm-in time; for 'harder', use a shorter warm-in, going straight into full games."
    ]
   },
   {
    "name": "Call and Catch",
    "desc": "In small-sided games, players must call for the ball clearly before receiving it, reinforcing communication alongside coordination.",
    "coach": "Call early, then catch clean.",
    "easier": "Slower-paced games.",
    "harder": "Faster-paced games.",
    "chaos": "n/a",
    "setup": "Split the class into groups of 8, forming two teams of 4 per game. Mark a playing area roughly 15m x 10m with cones. One ball per game, plus bibs to tell teams apart.",
    "howTo": [
     "Explain the rule before starting: players must call for the ball clearly before receiving it, every time.",
     "Play a small-sided game with normal scoring rules for the format in use.",
     "Any player wanting the ball must call out clearly (their name, or 'here!') before a teammate passes to them; passes to a player who hasn't called don't count for scoring.",
     "After each stoppage, restart immediately with minimal fuss.",
     "Rotate players through different positions every few minutes.",
     "Coach the key message: 'call early, then catch clean.'",
     "For 'easier', use slower-paced games; for 'harder', use faster-paced games."
    ]
   },
   {
    "name": "Bonus Skill Game",
    "desc": "A small-sided game where a bonus point is awarded any time a player clearly demonstrates a specific hand-eye skill from earlier in the unit (a soft-hands catch, a clean strike, a well-timed reach).",
    "coach": "Look for chances to use your best skills, not just any skill.",
    "easier": "Teacher points out bonus moments.",
    "harder": "Players self-identify bonus moments.",
    "chaos": "Bonus objectives rotate mid-game",
    "setup": "Split the class into groups of 8, forming two teams of 4 per game. Mark a playing area roughly 15m x 10m with cones. One ball per game, plus bibs to tell teams apart.",
    "howTo": [
     "Explain the rule before starting: a bonus point is awarded any time a player clearly demonstrates a specific hand-eye skill from earlier in the unit (a soft-hands catch, a clean strike, a well-timed reach).",
     "Play a small-sided game with normal scoring rules for the format in use.",
     "The teacher (or players themselves) watches for a clear demonstration of a specific unit skill and awards a bonus point when spotted.",
     "After each stoppage, restart immediately with minimal fuss.",
     "Rotate players through different positions every few minutes.",
     "Coach the key message: 'look for chances to use your best skills, not just any skill.'",
     "For 'easier', have the teacher point out bonus moments; for 'harder', have players self-identify bonus moments; rotating bonus objectives mid-game adds extra challenge (chaos variant)."
    ]
   }
  ],
  "big": {
   "name": "Full Flowing Game",
   "desc": "A complete small-sided game where students apply the whole range of hand-eye skills from across the unit inside genuine, fast-flowing play.",
   "setup": "Split the class into groups of 8-10 for full small-sided games, using a playing area roughly 20m x 15m with cones. Balls, bibs to tell teams apart.",
   "howTo": [
    "Explain the rules before starting: this is a complete, full-flowing small-sided game using the whole range of hand-eye skills from across the unit.",
    "Play with standard scoring rules for the game format in use, at genuine game pace.",
    "Encourage students to bring in tracking, soft hands, striking, reaction, and timing naturally as situations call for them.",
    "After each stoppage, restart immediately with minimal fuss to keep the game flowing.",
    "Rotate players through different positions during the game so everyone gets a range of roles.",
    "Coach the key message throughout: 'let everything you've learned come out naturally in the game.'"
   ]
  },
  "discussion": [
   "What was different about using these skills in a real game compared to a drill?",
   "How did communicating with teammates help your coordination?",
   "What happened to your coordination as the game got faster?"
  ],
  "lookfors": [
   "Applies hand-eye skills accurately within live, flowing play",
   "Stays coordinated as pace and chaos increase",
   "Communicates clearly to support teammates' coordination"
  ],
  "inclusion": "Offer a simplified rule set or slower-paced group for students still building confidence in live-game coordination; celebrate effort and accurate attempts, not just successful outcomes.",
  "skillBreakdown": [
   {
    "step": "Bring catching, striking, timing, and reaction skills into a live game setting, not just controlled drills.",
    "why": "The real test of hand-eye coordination is whether it holds up once a game adds unpredictability and speed."
   },
   {
    "step": "Stay coordinated even as the pace and chaos of the game increase.",
    "why": "Games rarely happen at a nice, controlled drill pace — coordination has to hold up under real conditions."
   },
   {
    "step": "Communicate clearly with teammates to support each other's coordination (calling for the ball, warning of a defender).",
    "why": "Good communication makes everyone's hand-eye actions easier and more accurate."
   }
  ],
  "value": "Mōhio",
  "valueText": "Understanding your own strengths and how you fit into the team, and noticing what your teammates need from you in order to do their best."
 },
 {
  "n": 19,
  "block": 4,
  "title": "Coordination Challenge",
  "focus": "Team-based multi-skill challenge combining the whole unit as a trial run before the culminating games day",
  "walt": "We are learning to combine every hand-eye skill from this unit into team challenges, as a trial run before tomorrow's games day.",
  "wilf": [
   "apply a range of hand-eye coordination skills together in a challenge",
   "support my team's effort in a shared coordination challenge"
  ],
  "nzc": "Strand B, C",
  "equipment": "Balls, soft bats/paddles, cones, bibs",
  "safety": "Standard spacing across simultaneous team challenges; clear rotation system between challenge stations",
  "games": [
   {
    "name": "Team Relay Challenge",
    "desc": "Teams complete a relay combining a catch, a strike, and a reaction challenge in sequence, as a fun, competitive combination of the unit's skills.",
    "coach": "Support your teammate as much as you focus on your own turn.",
    "easier": "Simpler sequence, more time.",
    "harder": "Longer sequence, less time.",
    "chaos": "Head-to-head mirror between two teams",
    "setup": "Split the class into teams of 4-5, each team with a relay lane roughly 15m long marked with cones, set up with a catch station, a strike station, and a reaction station along the way. Balls, soft bats/paddles, and reaction balls distributed along each lane.",
    "howTo": [
     "Explain the sequence before starting: each team member completes a catch, a strike, and a reaction challenge in sequence along the relay lane.",
     "The first player in each team completes all three challenges in order, then tags the next teammate to go.",
     "Continue until every team member has completed the full sequence.",
     "Keep the relay moving quickly — the next player starts as soon as they're tagged, with minimal stoppage.",
     "Coach the key message: 'support your teammate as much as you focus on your own turn.'",
     "For 'easier', use a simpler sequence with more time; for 'harder', use a longer sequence with less time; a head-to-head mirror between two teams adds extra challenge (chaos variant)."
    ]
   },
   {
    "name": "Shared Streak Challenge",
    "desc": "Teams work together to build the longest combined streak of clean catches or strikes across the whole team.",
    "coach": "Everyone's turn matters to the total.",
    "easier": "Slower pace, generous spacing.",
    "harder": "Quicker pace, tighter spacing.",
    "chaos": "n/a",
    "setup": "Whole teams of 4-5 spread across the space, roughly 6m x 6m per team, one ball per team.",
    "howTo": [
     "Explain the rule before starting: the team works together to build the longest combined streak of clean catches or strikes across the whole team, counted out loud as one shared total.",
     "One student starts with the ball and passes/catches or strikes it around the team.",
     "The team keeps a shared running count out loud; if a catch or strike is dropped or fumbled, the count resets to zero and play restarts immediately.",
     "Continue for the full activity time, with each team trying to beat their own best combined streak.",
     "Coach the key message: 'everyone's turn matters to the total.'",
     "For 'easier', use a slower pace with generous spacing; for 'harder', use a quicker pace with tighter spacing."
    ]
   },
   {
    "name": "Skill Spotlight",
    "desc": "Each team nominates one member to demonstrate their strongest hand-eye skill from the unit to the group, with brief peer feedback.",
    "coach": "Pick your genuine strength, not just something easy.",
    "easier": "Teacher or peers suggest a focus.",
    "harder": "Student justifies their own choice.",
    "chaos": "n/a",
    "setup": "Whole teams of 4-5 gathered in their own space, roughly 4m x 4m, no equipment needed beyond what the nominated student wants to use for their demonstration.",
    "howTo": [
     "Explain the rule before starting: each team nominates one member to demonstrate their strongest hand-eye skill from the unit to the group.",
     "Teams briefly discuss and choose who will demonstrate and which skill they'll show.",
     "The nominated student demonstrates their chosen skill to their team (or a smaller group), with a teammate feeding or assisting if needed.",
     "The rest of the team gives brief, positive peer feedback after the demonstration.",
     "Coach the key message: 'pick your genuine strength, not just something easy.'",
     "For 'easier', have the teacher or peers suggest a focus; for 'harder', have the student justify their own choice."
    ]
   }
  ],
  "big": {
   "name": "Trial Challenge Games",
   "desc": "Full team challenge combining relay, streak, and small-sided game elements, drawing on catching, striking, reacting, timing, and footwork from across the whole unit.",
   "setup": "Split the class into teams of 4-5 for a combined event: a short relay section, a streak-counting section, and a small-sided game section, using the same lanes/areas already set up for this lesson's other activities.",
   "howTo": [
    "Explain the format before starting: this trial combines the relay, streak challenge, and a small-sided game, as a practice run for tomorrow's games day.",
    "Run each team through a short version of the relay and streak challenge, recording simple results for each.",
    "Move into a small-sided game section drawing on catching, striking, reacting, timing, and footwork from across the whole unit, using standard scoring for that format.",
    "After each stoppage in the game section, restart immediately with minimal fuss.",
    "Rotate players through different positions throughout so everyone experiences the full trial.",
    "Coach the key message throughout: 'this is your practice run — notice what you want to bring to tomorrow.'"
   ]
  },
  "discussion": [
   "What part of your coordination are you most confident in going into tomorrow's games day?",
   "Who supported their team really well in today's challenges?",
   "What's one hand-eye skill you'd still like to work on?"
  ],
  "lookfors": [
   "Combines a range of hand-eye skills together in team challenges",
   "Supports the team's shared effort",
   "Reflects honestly on personal strengths and areas to work on"
  ],
  "inclusion": "Match teams thoughtfully so challenges are competitive and enjoyable for everyone; offer flexible rules or equipment adjustments so every challenge remains genuinely achievable.",
  "skillBreakdown": [
   {
    "step": "Combine catching, striking, reacting, timing, and footwork into connected team challenges.",
    "why": "A real team challenge brings together everything the unit has built, often in quick succession — a genuine trial for tomorrow."
   },
   {
    "step": "Support your team's shared effort, not just your own individual result.",
    "why": "Many of today's challenges rely on the whole team's coordination, not one person's."
   },
   {
    "step": "Reflect honestly on which parts of your coordination are strongest heading into the games day.",
    "why": "Knowing your own strengths and areas to watch is what lets you play smart tomorrow, not just hard."
   }
  ],
  "value": "Manaaki",
  "valueText": "Looking after your teammates' success as much as your own — including, encouraging, and setting others up to succeed."
 },
 {
  "n": 20,
  "block": 4,
  "title": "Hand-Eye Coordination Games Day",
  "focus": "Culminating multi-game/challenge day celebrating hand-eye coordination across the whole unit",
  "walt": "We are learning to apply the whole unit's hand-eye coordination skills in a games day setting, showing fair play and reflecting on our growth.",
  "wilf": [
   "apply a range of hand-eye coordination skills from across the unit in competitive challenges and games",
   "play fairly and stay coordinated and confident throughout the games day"
  ],
  "nzc": "Strands A, B, C, D · all five Key Competencies",
  "equipment": "Balls, soft bats/paddles, cones, bibs, simple rotation chart or draw sheet",
  "safety": "Standard spacing across multiple simultaneous stations/games; clear rotation system",
  "games": [
   {
    "name": "Skill Circuit Warm-Up",
    "desc": "A quick circuit combining catching, striking, and reaction — a whistle-stop reminder of the whole unit before games begin.",
    "coach": "Bring your best technique from across the unit into every touch.",
    "easier": "Longer time per station.",
    "harder": "Shorter time, quicker rotation.",
    "chaos": "Head-to-head mirror, beat the clock",
    "setup": "Set up 3 short stations around the space (roughly 5m x 5m each): catching, striking, reaction. Split the class into teams of 4-5, one team starting at each station, with balls and soft bats/paddles distributed across the stations.",
    "howTo": [
     "Briefly remind students this is a whistle-stop reminder of the whole unit before games begin.",
     "Teams start at their assigned station and begin the activity immediately on 'go'.",
     "On the teacher's signal (roughly every 60-90 seconds), teams rotate to the next station.",
     "Continue until every team has completed all 3 stations.",
     "Coach the key message: 'bring your best technique from across the unit into every touch.'",
     "For 'easier', give longer time per station; for 'harder', give shorter time with quicker rotation; a head-to-head mirror, beat-the-clock format adds extra challenge (chaos variant)."
    ]
   },
   {
    "name": "Team Coordination Challenge",
    "desc": "Before games begin, each team huddles briefly to agree one hand-eye skill they'll try to show off today.",
    "coach": "Make it specific and meaningful to your team.",
    "easier": "n/a",
    "harder": "n/a",
    "chaos": "Role rotation",
    "setup": "Teams of 4-5 gathered in their own huddle space before games begin, no equipment needed.",
    "howTo": [
     "Explain the rule before starting: before games begin, each team briefly huddles to agree one hand-eye skill they'll try to show off today.",
     "Give teams 30-60 seconds to huddle and agree on their chosen skill.",
     "Each team briefly shares their chosen skill with the teacher or the wider group if time allows.",
     "Move straight into the day's games once every team has decided.",
     "Coach the key message: 'make it specific and meaningful to your team.'",
     "For 'easier'/'harder' this activity stays the same for all groups (n/a); role rotation within the huddle discussion keeps everyone involved (chaos variant)."
    ]
   },
   {
    "name": "Coordination Spotlight",
    "desc": "Throughout the games day, the teacher notices and briefly highlights one sharp piece of hand-eye coordination from each team to the whole group.",
    "coach": "Notice good technique, not just good outcomes.",
    "easier": "n/a",
    "harder": "n/a",
    "chaos": "Bonus objectives",
    "setup": "No separate space needed — this runs alongside the day's games, with the teacher circulating between playing areas.",
    "howTo": [
     "Explain to the class at the start of the day that the teacher will be watching for sharp pieces of hand-eye coordination throughout.",
     "As games run, the teacher circulates and notices moments of strong technique — a tracked catch, a clean strike, a well-timed reach.",
     "Briefly pause at a natural break to highlight one sharp piece of coordination from each team to the whole group.",
     "Resume games immediately after each highlight so momentum isn't lost.",
     "Coach the key message: 'notice good technique, not just good outcomes.'",
     "For 'easier'/'harder' this activity stays the same for all groups (n/a); rotating which team gets a bonus objective spotlighted next adds extra challenge (chaos variant)."
    ]
   }
  ],
  "big": {
   "name": "Round-Robin Coordination Games Day",
   "desc": "Students rotate through short games and challenges across multiple areas, using simple scoring or a fair-play points system. Every skill from the unit — tracking, catching, striking, timing, reacting, and combining hands and feet — is relevant somewhere in these games.",
   "setup": "Split the class into teams of 4-5 and set up multiple short game/challenge areas around the space (roughly 15m x 10m each) drawing on activities from across the whole unit. Balls, soft bats/paddles, cones, bibs, and a simple rotation chart or draw sheet showing which team plays where and when.",
   "howTo": [
    "Explain the format before starting: teams rotate through short games and challenges across multiple areas using the rotation chart, with a simple scoring or fair-play points system.",
    "Teams move to their first area according to the rotation chart and begin play immediately.",
    "Use simple scoring for each game/challenge, plus fair-play points awarded by the teacher for good sportsmanship and technique.",
    "On the teacher's signal (roughly every 5-6 minutes), teams rotate to their next area on the chart.",
    "Continue until every team has completed every area, then gather the whole class to share overall results and fair-play points.",
    "Coach the key message throughout: 'every skill from the unit — tracking, catching, striking, timing, reacting, and combining hands and feet — is relevant somewhere today.'"
   ]
  },
  "discussion": [
   "What's one hand-eye coordination skill from this whole unit you're most proud of improving?",
   "What did sharp, confident coordination look like in today's games day?",
   "What will you take from this unit into other games or sports?"
  ],
  "lookfors": [
   "Applies a visible range of hand-eye coordination skills from across the unit, not just one",
   "Plays fairly and communicates throughout a competitive setting",
   "Shows growth as a coordinator compared to Lesson 1 (informal, teacher's own judgement — no formal recording required)"
  ],
  "inclusion": "Structure the games day with balanced/mixed-ability groupings; consider a simple fair-play recognition alongside game results to keep the culminating day inclusive and values-aligned.",
  "skillBreakdown": [
   {
    "step": "Apply skills from across the whole unit — tracking and catching, striking, reacting, timing, and combining hands and feet.",
    "why": "The games day brings everything the unit has built together under real, enjoyable pressure."
   },
   {
    "step": "Communicate and support teammates and opponents throughout.",
    "why": "Fair play and clear communication are as much a part of this unit as the coordination skills themselves."
   },
   {
    "step": "Reflect on your growth as a hand-eye coordinator compared to Lesson 1.",
    "why": "Reflecting on your own improvement in tracking, striking, and reacting is as valuable as the result of any one game."
   }
  ],
  "value": "Pānga",
  "valueText": "Seeing how your role today connects to the bigger team effort — a small contribution that matters once it's put together with everyone else's."
 }
];

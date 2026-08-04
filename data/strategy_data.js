// Strategy and Decision Making unit data — STRATEGY_BLOCK_INFO + STRATEGY_LESSONS
const STRATEGY_BLOCK_INFO = {
  1:{name:"Reading the Game & Making a Choice", range:"Lessons 1–5", color:"var(--b1)", soft:"var(--b1-soft)", warmup:"Scan & Spot Jog", warmdown:"Walk & Reach",
    warmupSetup:"Whole class spread out in an open space roughly 20m x 20m, no equipment needed. Enough room for everyone to jog freely and change direction without bumping into each other.",
    warmupHowTo:[
      "Everyone jogs freely around the space at an easy pace, staying aware of who's nearby.",
      "On the coach's call of 'spot!', students point to something specific they can see — a cone colour, a classmate's shirt, the far fence — before continuing to jog.",
      "This connects to today's scanning focus by getting eyes moving and checking the surroundings before the lesson's main content begins.",
      "Repeat the 'spot!' call every 20-30 seconds, varying what students are asked to notice.",
      "Run for the full 5 minutes, keeping the pace light and continuous throughout."
    ],
    warmdownSetup:"No equipment needed. Gather the class into a loose circle or scattered spread with room for each student to stretch without touching anyone else.",
    warmdownHowTo:[
      "Walk slowly around the space for about 1 minute to bring heart rate down gradually.",
      "Gather into a circle (or stay scattered) and lead 3-4 simple static stretches — calves, quads, hamstrings, and a gentle reach-up/side stretch — holding each for about 15-20 seconds.",
      "Keep instructions simple and calm: 'reach, hold, breathe' rather than technical cues.",
      "Use this quiet time to briefly ask a couple of students what they noticed when they scanned today, setting up the Discussion segment.",
      "Finish with everyone standing tall and taking one big breath in and out together."
    ]
    },
  2:{name:"Weighing Risk & Reward", range:"Lessons 6–10", color:"var(--b2)", soft:"var(--b2-soft)", warmup:"Partner Choice Jog", warmdown:"Partner Stretch",
    warmupSetup:"Pairs spread out across the space, roughly 3-4m apart per pair with enough room between pairs that movement doesn't collide with a neighbouring pair. No equipment needed.",
    warmupHowTo:[
      "Partners jog slowly together, side by side or facing each other while shuffling backwards/forwards.",
      "Every 20-30 seconds, one partner calls out 'safe' or 'go' and the pair changes their jogging pace to match — slow and controlled for 'safe', a quicker burst for 'go'.",
      "This connects to today's risk-and-reward focus by getting the class used to reacting instantly to a quick call before the lesson's main content begins.",
      "Swap who makes the call every couple of rounds so both partners get practice calling and reacting.",
      "Run for the full 5 minutes, keeping the pace varied and continuous."
    ],
    warmdownSetup:"Same pairs from the warm-up (or new pairs), enough space to stretch side-by-side without touching. No equipment needed.",
    warmdownHowTo:[
      "Have pairs walk together slowly around the space for about 1 minute to bring heart rate down.",
      "In pairs, lead 3-4 simple partner-assisted stretches — e.g. one partner gently holds the other's ankle behind them for a quad stretch, or both sit and reach toward each other's feet for a hamstring stretch.",
      "Hold each stretch for about 15-20 seconds, then swap who is being assisted if the stretch requires it.",
      "Keep contact gentle and consent-based — no forcing a stretch further than a partner is comfortable with.",
      "Finish with partners quickly sharing one risky or safe decision they remember making well today, before moving into the Discussion segment."
    ]
    },
  3:{name:"Adapting Tactics & Team Plans", range:"Lessons 11–15", color:"var(--b3)", soft:"var(--b3-soft)", warmup:"Read & Shift Shuffle", warmdown:"Breathe & Balance",
    warmupSetup:"Groups of 5-6 spread out across the space, each group with a marked area roughly 8m x 8m using cones. No ball needed.",
    warmupHowTo:[
      "Groups jog together lightly within their area, staying reasonably close to each other as a unit.",
      "Call out simple shift prompts as they jog: 'spread wide,' 'come together,' 'shuffle sideways,' 'change direction' — groups adjust their jogging shape and direction on the call.",
      "This connects to today's focus on reading patterns and adapting tactics by getting students thinking about reacting and adjusting together before the lesson's main content begins.",
      "Rotate through several shift calls over the 5 minutes, mixing up the order so it stays unpredictable.",
      "Keep energy high and encourage groups to communicate with each other while jogging and shifting."
    ],
    warmdownSetup:"Gather each group (or the whole class) into a circle with enough room to breathe and balance without bumping neighbours. No equipment needed.",
    warmdownHowTo:[
      "Walk slowly around the space for about 1 minute to bring heart rate down.",
      "Lead a few slow, controlled breathing cycles together: breathe in for 4 counts, hold for 2, breathe out for 4 — repeat 3-4 times.",
      "Follow with 2-3 simple balance holds, e.g. standing on one foot for 10-15 seconds, then swap feet — this connects to the composure needed for reading patterns and adapting tactics calmly rather than rushing.",
      "Keep the tone calm and unhurried — a good moment to help students settle before reflecting on the lesson.",
      "Finish standing tall with one final deep breath together before moving into the Discussion segment."
    ]
    },
  4:{name:"Game Plans, Pressure & Culmination", range:"Lessons 16–20", color:"var(--b4)", soft:"var(--b4-soft)", warmup:"Team Shape Jog", warmdown:"Circle Stretch & Cheer",
    warmupSetup:"Split the class into their tournament/practice teams (groups of 4-6), each team with a marked-out area to jog in (cones optional). No ball needed.",
    warmupHowTo:[
      "Each team jogs together as a group around their area, staying reasonably close to each other rather than spreading out randomly.",
      "Call out simple team-shape prompts as they jog: 'spread into your positions,' 'group up,' 'shift as a unit' — teams adjust their jogging shape together on the call.",
      "This connects to today's focus on game plans and pressure by getting teams used to moving and reacting together before the lesson's main content begins.",
      "Rotate through several shape calls over the 5 minutes, gradually increasing pace toward the end.",
      "Keep energy high and encourage teams to communicate with each other while jogging and shifting shape."
    ],
    warmdownSetup:"Gather each team (or the whole class) into a circle with enough room to stretch without touching neighbours. No equipment needed.",
    warmdownHowTo:[
      "Walk slowly around the space for about 1 minute to bring heart rate down.",
      "Gather into a circle and lead 3-4 simple static stretches — calves, quads, hamstrings, and a gentle reach-up/side stretch — holding each for about 15-20 seconds.",
      "Keep instructions simple and calm: 'reach, hold, breathe' rather than technical cues.",
      "Finish with a brief team cheer or shared moment where each team calls out one thing they're proud of from today's games, setting a positive tone before the Discussion segment.",
      "End with everyone standing tall and taking one big breath in and out together."
    ]
    }
};

const STRATEGY_LESSONS = [
 {
  "n": 1,
  "block": 1,
  "title": "Eyes Up",
  "focus": "Scanning before acting (looking up to check options before receiving or deciding)",
  "walt": "We are learning to look up and scan our surroundings before we get the ball, so we already know our options.",
  "wilf": [
   "I can look around to check my options before the ball arrives",
   "I can name what I saw when asked (space, teammates, defenders)"
  ],
  "nzc": "Strand B · Thinking",
  "equipment": "Bibs (2 colours), 1 ball per group of 4, cones",
  "safety": "Standard spacing so scanning students don't collide while looking around; keep early activities at walking pace",
  "games": [
   {
    "name": "Head Up Circle",
    "desc": "Standing in a circle passing a ball, students must lift their head and look at two other players before receiving, with the teacher checking eyes stay up.",
    "coach": "Look up before it arrives, not after.",
    "easier": "Slower passes, bigger circle.",
    "harder": "Two balls going at once.",
    "chaos": "Random freeze — 'what did you see?'",
    "setup": "Whole class or groups of 8-10 stand in a circle roughly 4-5m across, one soft ball per circle, plenty of space between neighbouring circles.",
    "howTo": [
     "Demonstrate the standard: before catching, the receiver must lift their head and look at two other players in the circle, not just the ball coming toward them.",
     "One student starts with the ball and passes underarm to anyone in the circle.",
     "The receiver must show two clear head-turns to check other players before the ball arrives, then catches and passes on.",
     "If a student catches without scanning first, the group pauses, the teacher points it out, and play resumes straight away — no big stoppage.",
     "Coach the key message: 'look up before it arrives, not after.'",
     "For 'easier', use a bigger circle with slower passes; for 'harder', run two balls in the same circle so scanning has to happen faster and more often."
    ]
   },
   {
    "name": "Scan & Point",
    "desc": "In a moving grid, ball carriers dribble or jog while teammates without the ball silently point at open space they've spotted; the carrier passes toward a pointed space.",
    "coach": "Trust what you scanned, not what you guess.",
    "easier": "Walking pace only.",
    "harder": "Add a passive defender.",
    "chaos": "Role rotation every minute",
    "setup": "Groups of 4 in a marked grid roughly 10m x 10m, one ball per group, cones marking the grid corners.",
    "howTo": [
     "Demonstrate the two roles: the ball carrier dribbles or jogs with the ball, while teammates without the ball silently point at open space they've spotted.",
     "Play begins with one student carrying the ball and the other three jogging into different areas of the grid.",
     "The carrier scans the pointing teammates and passes toward whichever pointed space looks most open, then that receiver becomes the new carrier.",
     "Keep play continuous — there's no formal score, so if a pass goes astray, the nearest student collects the ball and carries on.",
     "Rotate roles every minute or so on a whistle so everyone gets time as carrier and as a pointer.",
     "Coach the key message: 'trust what you scanned, not what you guess.' For 'easier', keep it to walking pace only; for 'harder', add a passive defender who can't tackle but forces sharper scanning."
    ]
   },
   {
    "name": "What Did You See?",
    "desc": "In a small group possession game, the teacher randomly freezes play and asks a non-ball-carrier to say aloud what options they'd scanned.",
    "coach": "Name the specific thing — a space, or a person.",
    "easier": "Freeze more often, more time to answer.",
    "harder": "Freeze less often, faster recall needed.",
    "chaos": "n/a",
    "setup": "Groups of 4-5 in a small marked area roughly 8m x 8m, one ball per group, playing simple keep-away possession.",
    "howTo": [
     "Explain the rule before starting: at any point the teacher may call 'freeze!' and point to a player who does not have the ball.",
     "Groups begin a normal small-sided possession game, passing the ball around within their area.",
     "When 'freeze!' is called, everyone stops immediately and the chosen non-ball-carrier says aloud what options they had scanned — a specific space or a specific teammate.",
     "Play resumes straight after the answer, with the ball starting again from whoever was holding it at the freeze.",
     "Coach the key message: 'name the specific thing — a space, or a person,' not a vague answer like 'I saw everyone.'",
     "For 'easier', freeze more often and give more time to answer; for 'harder', freeze less often so recall has to be sharper and faster."
    ]
   }
  ],
  "big": {
   "name": "Scan & Score",
   "desc": "4v2 keep-away where players earn a bonus point for passing to an option they'd clearly scanned before receiving (spotted by the teacher), on top of points for keeping possession.",
   "setup": "Groups of 6 split into two teams of 3 attackers and 2 defenders plus one extra attacker floating (4v2), playing in a grid roughly 15m x 12m, bibs to separate teams, one ball per game.",
   "howTo": [
    "Explain the scoring before play starts: the attacking team keeps standard points for maintaining possession, plus a bonus point whenever the teacher spots a pass going to a teammate the passer had clearly scanned before receiving.",
    "The 4 attackers begin with the ball and try to keep it away from the 2 defenders using short passes within the grid.",
    "Defenders press to intercept; if they win the ball, roles swap and the team that lost it becomes the defending pair.",
    "On any stoppage (ball out, clean interception), restart quickly with the ball at the nearest attacker's feet so play doesn't drag.",
    "Rotate the two defenders every 2-3 minutes so everyone gets a turn attacking and defending.",
    "Coach the key message from the block's focus: scanning early means the pass to a scanned option should look calm and deliberate, not lucky."
   ]
  },
  "discussion": [
   "What did you actually see when you looked up today?",
   "Did scanning early change how fast you could decide?",
   "What happens to your decisions when you only look at the ball?"
  ],
  "lookfors": [
   "Lifts head to scan before receiving the ball",
   "Can name what they scanned when asked",
   "Scans repeatedly, not just once"
  ],
  "inclusion": "Allow more freeze-checks for students still building this habit; pair with a supportive partner who models scanning out loud.",
  "skillBreakdown": [
   {
    "step": "Scan the space around you before the ball arrives, not after.",
    "why": "Deciding starts with seeing — a player who scans early already knows their options when the ball turns up."
   },
   {
    "step": "Check for open teammates, space, and defenders, roughly in that order.",
    "why": "A simple scanning order stops the situation feeling overwhelming and speeds up decisions."
   },
   {
    "step": "Keep scanning even when you don't have the ball.",
    "why": "A good decision when the ball arrives depends on a picture already built beforehand."
   }
  ],
  "value": "Aroha",
  "valueText": "Being patient and encouraging with teammates whose skills or confidence look different from yours, and treating everyone with kindness whether the game is going well or not."
 },
 {
  "n": 2,
  "block": 1,
  "title": "Spot the Gap",
  "focus": "Recognising space and open options as a decision cue",
  "walt": "We are learning to spot open space and gaps so we know when there's a good option available.",
  "wilf": [
   "I can point out a gap or open teammate before acting",
   "I can choose the option that gives my team the most space"
  ],
  "nzc": "Strand B · Thinking",
  "equipment": "Bibs (2 colours), 1 ball per group of 4, cones marking a grid",
  "safety": "Clear grid boundaries so scanning for gaps doesn't send students into walls, fences, or other groups' games",
  "games": [
   {
    "name": "Gap Hunters",
    "desc": "Students jog through a grid of cones representing defenders, calling out 'gap!' as they move through the space between two cones.",
    "coach": "Eyes up, not down at your feet.",
    "easier": "Wider gaps.",
    "harder": "Narrower, moving gaps (a partner shifts the cones).",
    "chaos": "Gaps randomly shift on a whistle",
    "setup": "Groups of 4-6 in a grid roughly 12m x 10m scattered with 8-10 cones representing defenders, spaced so there are clear gaps of varying width between them.",
    "howTo": [
     "Demonstrate first: students jog through the grid and must call out 'gap!' the moment they move through the space between two cones.",
     "Everyone starts jogging slowly around the outside of the grid, then begins weaving through the cone gaps.",
     "Students keep moving and calling 'gap!' each time they pass through a new gap — there's no ball yet, this is purely about spotting and using space.",
     "If two students head for the same gap at once, the first to call it has right of way and the other adjusts to a different gap.",
     "Coach the key message: 'eyes up, not down at your feet' while weaving through.",
     "For 'easier', use wider gaps; for 'harder', have a partner shift the cones slightly every 30 seconds so gaps keep changing."
    ]
   },
   {
    "name": "Best Option Pass",
    "desc": "In a 3v1 keep-away game, the passer briefly names two options aloud ('A or B?') before passing to whichever is more open.",
    "coach": "Say both options before you choose.",
    "easier": "Defender walks only.",
    "harder": "Two defenders.",
    "chaos": "Bonus for spotting a gap the defender didn't expect",
    "setup": "Groups of 4 (3 attackers, 1 defender) in a grid roughly 10m x 10m, one ball per group, cones marking corners.",
    "howTo": [
     "Explain the rule: before every pass, the ball carrier must briefly say two names aloud as options — for example 'A or B?' — then pass to whichever is more open.",
     "The single defender starts in the middle of the grid; the three attackers keep possession using short passes.",
     "The carrier scans, names the two options out loud, and passes to whichever teammate the defender is not closest to.",
     "If the defender intercepts, swap them with the attacker who made the pass and continue straight away.",
     "Coach the key message: 'say both options before you choose,' so the decision process is visible, not silent guesswork.",
     "For 'easier', have the defender walk only; for 'harder', add a second defender so there are fewer clearly open options."
    ]
   },
   {
    "name": "Race to the Gap",
    "desc": "Small teams compete to be first to move into a marked open gap when the teacher calls it out.",
    "coach": "Move the instant you see it, don't wait.",
    "easier": "Gaps stay marked and visible longer.",
    "harder": "Gaps appear and disappear quickly.",
    "chaos": "Fake gap calls to test focus",
    "setup": "Small teams of 3-4 spread across a grid roughly 12m x 10m marked with several clearly labelled gaps between cone pairs, no ball needed.",
    "howTo": [
     "Explain the rule: when the teacher calls out a specific gap, the first team to have a player move fully into that gap scores a point for their team.",
     "Teams start spread out around the edges of the grid, ready to move on the call.",
     "The teacher calls a gap; players react immediately and the fastest team into that space wins the point for that round.",
     "After each call, reset teams to starting positions and call a new gap to keep the pace high.",
     "Coach the key message: 'move the instant you see it, don't wait,' rewarding quick reaction over hesitation.",
     "For 'easier', keep gaps marked and visible for longer before calling; for 'harder', have gaps appear and disappear quickly so students must track them continuously. The chaos variant occasionally calls a fake gap that doesn't exist, testing focus."
    ]
   }
  ],
  "big": {
   "name": "Gap Attack",
   "desc": "4v4 small-sided game where teams earn a bonus point for a pass or run into a clearly identified gap in the defence, on top of standard scoring.",
   "setup": "Two teams of 4 in a grid roughly 18m x 12m, bibs to separate teams, one ball per game, small goals or end-zones marked with cones at each end.",
   "howTo": [
    "Explain the scoring before play starts: standard points apply for scoring in the small-sided game, plus a bonus point whenever a pass or run clearly moves into an identified gap in the defence, as spotted by the teacher.",
    "Kick or throw off from the centre of the grid to begin, with both teams set up in their own half.",
    "Play a normal small-sided game, encouraging players to actively look for and call out gaps as they attack, just like in the Skill Games.",
    "On any stoppage, restart quickly with a short pass-in from where the ball went out, keeping the game flowing.",
    "Rotate which end each team attacks every few minutes so both sides get equal chances to practise spotting gaps in different directions.",
    "Coach the key message from the block's focus: reward the player who calls or shows a gap out loud before using it, not just the one who happens to score."
   ]
  },
  "discussion": [
   "What makes a gap 'good' to use, not just open?",
   "How did comparing two options change your decision?",
   "What happened when you waited too long to use a gap?"
  ],
  "lookfors": [
   "Identifies gaps or open options before acting",
   "Compares more than one option briefly",
   "Acts on a spotted gap without hesitating"
  ],
  "inclusion": "Use visual markers to highlight gaps for students who find spatial reading harder; allow verbal coaching cues ('look left') for those still building this skill.",
  "skillBreakdown": [
   {
    "step": "Look for gaps in the defence, not just where the ball is.",
    "why": "The best decision often depends on space that has nothing to do with where the ball currently sits."
   },
   {
    "step": "Compare more than one option before choosing.",
    "why": "The first option seen isn't always the best one — briefly comparing leads to better choices."
   },
   {
    "step": "Act on the gap quickly once you spot it.",
    "why": "Gaps close fast, so noticing one is only useful if you use it straight away."
   }
  ],
  "value": "Mōhio",
  "valueText": "Understanding your own strengths and how you fit into the team, and noticing what your teammates need from you in order to do their best."
 },
 {
  "n": 3,
  "block": 1,
  "title": "Quick or Safe?",
  "focus": "Simple binary decision-making — choosing between a safe option and a riskier one",
  "walt": "We are learning to choose between a safe option and a quicker, riskier one, based on what the game actually needs.",
  "wilf": [
   "I can explain why I chose the safe or risky option in a moment",
   "I can make a decision quickly instead of freezing"
  ],
  "nzc": "Strand B, C",
  "equipment": "Balls, bibs, cones",
  "safety": "Standard spacing; clear rules to prevent rushed or unsafe contact when moving quickly",
  "games": [
   {
    "name": "Safe or Send It",
    "desc": "In pairs, the receiver calls 'safe' or 'go' as the ball approaches, and the passer must react instantly with a slower controlled pass or a faster driven one.",
    "coach": "React to the call, don't guess ahead.",
    "easier": "Caller gives more time before the pass.",
    "harder": "Caller changes their mind at the last second.",
    "chaos": "Mixed calls mid-rally",
    "setup": "Pairs facing each other about 4-5m apart, one ball per pair, enough space between pairs to avoid collisions.",
    "howTo": [
     "Demonstrate the two calls: 'safe' means a slower, controlled pass; 'go' means a faster, driven pass.",
     "One partner starts with the ball and prepares to pass while the other, as receiver, calls 'safe' or 'go' just before the pass arrives.",
     "The passer must react instantly to whichever call is made, without knowing in advance which one is coming.",
     "After each pass, switch roles so both partners get turns calling and passing.",
     "Coach the key message: 'react to the call, don't guess ahead.'",
     "For 'easier', the caller gives more time before the pass is thrown; for 'harder', the caller can change their mind at the last second, forcing a genuine reaction."
    ]
   },
   {
    "name": "Traffic Light Decisions",
    "desc": "In a small group game, the teacher or a peer holds up a coloured card (green = go for it, red = play safe) mid-play, and students adjust their next action instantly.",
    "coach": "Check the signal, then commit.",
    "easier": "Signal held up further in advance.",
    "harder": "Signal flashed briefly and randomly.",
    "chaos": "Double signal — one true, one decoy",
    "setup": "Small groups of 4-5 playing possession in a grid roughly 10m x 10m, one ball per group, a green and a red coloured card or cone held by the teacher or a rotating peer.",
    "howTo": [
     "Explain the signal system before starting: green means 'go for it' (try something ambitious), red means 'play safe' (simple, controlled options only).",
     "Groups begin a normal small-sided possession game with no signal shown yet.",
     "Partway through play, the signal-holder raises green or red, and students must adjust their very next action to match the signal.",
     "Play continues without stopping — students simply adapt on the move as new signals are shown.",
     "Coach the key message: 'check the signal, then commit,' so decisions stay quick rather than hesitant.",
     "For 'easier', hold the signal up further in advance; for 'harder', flash it briefly and randomly. The chaos variant shows two signals at once — one real, one a decoy — testing whether students check properly rather than just glancing."
    ]
   },
   {
    "name": "Why Did You Choose That?",
    "desc": "In short small-sided rounds, the teacher asks a player, right after a key moment, to explain in one sentence why they went safe or risky.",
    "coach": "One clear reason is enough.",
    "easier": "Multiple-choice reasons offered.",
    "harder": "No prompts, own words only.",
    "chaos": "n/a",
    "setup": "Groups of 4-5 playing short small-sided rounds (2-3 minutes each) in a grid roughly 10m x 10m, one ball per group.",
    "howTo": [
     "Explain the rule: right after any key moment (a pass, a shot, a dribble decision), the teacher may point to the player involved and ask them to explain their choice.",
     "Groups play a normal short round of possession or a simple small-sided game.",
     "When asked, the player gives one clear sentence explaining why they went safe or risky in that moment, then play resumes immediately.",
     "Rotate through several rounds so different players get asked over the session.",
     "Coach the key message: 'one clear reason is enough' — this isn't about a long explanation, just naming the thinking behind the choice.",
     "For 'easier', offer multiple-choice reasons the player can pick from; for 'harder', require their own words with no prompts."
    ]
   }
  ],
  "big": {
   "name": "Risk or Rest",
   "desc": "Small-sided possession game where a flipped coloured cone mid-game signals whether the round rewards safe, controlled play or quick, risky play, and teams must adjust their decisions accordingly.",
   "setup": "Two teams of 4-5 in a grid roughly 15m x 12m, bibs to separate teams, one ball per game, a single coloured cone in the middle that can be flipped between two colours.",
   "howTo": [
    "Explain the scoring before play starts: whichever colour the middle cone is showing decides the round's reward — one colour rewards safe, controlled possession, the other rewards quick, ambitious risk-taking.",
    "Begin with the cone showing one colour and play a short round of small-sided possession or a simple scoring game matching that style.",
    "Partway through, the teacher flips the cone to the other colour without pausing play, and teams must adjust their decision-making to match the new reward on the fly.",
    "On any stoppage, restart quickly with the ball at the nearest player's feet, keeping the flipped-cone rule in force.",
    "Rotate which team starts with possession each round so both sides get equal practice adjusting to the flip.",
    "Coach the key message from the block's focus: notice how quickly a team can shift its whole approach when the reward changes, rather than sticking to one style regardless."
   ]
  },
  "discussion": [
   "What told you a moment needed a safe choice instead of a risky one?",
   "Did explaining your choice out loud change how you saw it?",
   "When did hesitating cost your team an option today?"
  ],
  "lookfors": [
   "Chooses between safe and risky options based on the situation",
   "Decides quickly rather than freezing",
   "Can explain the reasoning behind a decision"
  ],
  "inclusion": "Allow more thinking time in early rounds for students building decision confidence; accept a range of valid reasons rather than one 'correct' answer.",
  "skillBreakdown": [
   {
    "step": "Notice when a situation calls for a safe option instead of a risky one.",
    "why": "Not every moment needs a big risk — reading the moment first is what makes a decision a good one."
   },
   {
    "step": "Make your decision quickly rather than freezing between two options.",
    "why": "Hesitating usually loses both options — quick, decisive choices keep opportunities alive."
   },
   {
    "step": "Be able to explain your choice afterwards.",
    "why": "Naming the reason behind a decision is what turns it into a lesson for next time, not just a guess."
   }
  ],
  "value": "Manaaki",
  "valueText": "Looking after your teammates' success as much as your own — including, encouraging, and setting others up to succeed."
 },
 {
  "n": 4,
  "block": 1,
  "title": "Read the Defender",
  "focus": "Reading an opponent's position and body language to inform a decision",
  "walt": "We are learning to read a defender's position and body language to decide our next move.",
  "wilf": [
   "I can notice which side a defender is favouring before I decide",
   "I can choose a decision that uses what the defender is giving me"
  ],
  "nzc": "Strand B · Thinking",
  "equipment": "Bibs, balls, cones",
  "safety": "1v1/2v1 activities kept to controlled speed, with clear space between groups",
  "games": [
   {
    "name": "Shadow Read",
    "desc": "In pairs, one student mirrors a slow-moving 'defender' while trying to read and call out which side is more open.",
    "coach": "Watch hips and feet, not just the ball.",
    "easier": "Defender moves slowly and obviously.",
    "harder": "Defender fakes direction.",
    "chaos": "Role swap on a whistle",
    "setup": "Pairs spread out with roughly 3m of space each, no ball needed, enough room between pairs to move freely.",
    "howTo": [
     "Demonstrate first: one partner plays a slow-moving 'defender,' shifting their body weight and stance from side to side, while the other reads them.",
     "The reading partner watches the defender's hips and feet (not just which way they're facing) and calls out which side looks more open.",
     "The defender then confirms whether the read was correct by stepping fully to that side.",
     "Swap roles after every 4-5 reads so both partners get practice reading and defending.",
     "Coach the key message: 'watch hips and feet, not just the ball.'",
     "For 'easier', the defender moves slowly and obviously; for 'harder', the defender adds a fake change of direction to test the read. The chaos variant swaps roles on a random whistle rather than a fixed count."
    ]
   },
   {
    "name": "1v1 Gap Read",
    "desc": "A simple 1v1 grid game where the attacker chooses to go to the side the defender is showing them, scoring a bonus point for reading it correctly.",
    "coach": "Go where they're not.",
    "easier": "Defender must stay side-on the whole time.",
    "harder": "Defender can square up and reset.",
    "chaos": "Bonus point for reading a fake",
    "setup": "Pairs in a small grid roughly 6m x 4m with a marked line as the scoring end, one ball per pair.",
    "howTo": [
     "Explain the rule: the attacker starts with the ball facing the defender and must choose which side to attack based on which side the defender is showing them as open.",
     "The attacker begins a controlled 1v1 dribble toward the defender.",
     "If the attacker correctly reads and goes to the side the defender is actually leaving open, they earn a bonus point on top of getting past.",
     "After each attempt, swap attacker and defender and reset to the starting line.",
     "Coach the key message: 'go where they're not,' not where the defender's body is facing.",
     "For 'easier', the defender must stay side-on the whole time, making the open side obvious; for 'harder', the defender can square up and reset their stance, making the read trickier. The chaos variant gives a bonus point for reading a genuine fake."
    ]
   },
   {
    "name": "2v1 Decision",
    "desc": "A classic 2v1 keep-away game where the ball carrier reads the single defender's position to decide whether to pass or carry themselves.",
    "coach": "Read the defender, not just your teammate.",
    "easier": "Defender must stay a set distance back.",
    "harder": "Defender can close down quickly.",
    "chaos": "Defender allowed one 'fake' movement per round",
    "setup": "Groups of 3 (2 attackers, 1 defender) in a grid roughly 10m x 8m, one ball per group.",
    "howTo": [
     "Explain the classic 2v1 setup: two attackers keep the ball away from a single defender, using the extra player as an advantage.",
     "The ball carrier starts play and must decide, based on the defender's position, whether to pass to the free teammate or carry the ball themselves.",
     "The defender tries to cover as much space as possible, forcing a genuine decision rather than an automatic pass.",
     "If the defender wins the ball, rotate them out and bring in a new defender from a queue, or simply reset and swap roles.",
     "Coach the key message: 'read the defender, not just your teammate' — the decision should follow what the defender is doing, not habit.",
     "For 'easier', the defender must stay a set distance back; for 'harder', the defender can close down quickly. The chaos variant allows the defender one genuine 'fake' movement per round to test if the attacker reads through it."
    ]
   }
  ],
  "big": {
   "name": "Read & React",
   "desc": "Small-sided game where teams earn a bonus point for attacking moves that visibly used a defender's position or body shape to make the decision, on top of standard scoring.",
   "setup": "Two teams of 4-5 in a grid roughly 18m x 12m, bibs to separate teams, one ball per game, small goals or end-zones marked at each end.",
   "howTo": [
    "Explain the scoring before play starts: standard points apply for scoring, plus a bonus point whenever an attacking move visibly used a defender's position or body shape to make the decision, as spotted by the teacher.",
    "Start play from the centre of the grid with both teams set in their own half.",
    "Play a normal small-sided game, encouraging attackers to watch defenders' hips, feet, and positioning before choosing where to go, just like in the Skill Games.",
    "On any stoppage, restart quickly with a short pass-in from where the ball went out.",
    "Rotate defensive and attacking roles or ends every few minutes so everyone practises reading defenders from different angles.",
    "Coach the key message from the block's focus: praise the specific read out loud when you see it — 'you saw their hips open up and went there' — so students connect the decision to what they actually saw."
   ]
  },
  "discussion": [
   "What did a defender's position tell you today?",
   "How did reading the defender change your decision compared to guessing?",
   "What happened when the defender's position changed quickly?"
  ],
  "lookfors": [
   "Notices a defender's position or body shape before deciding",
   "Chooses an option the defender is leaving open",
   "Rechecks and adjusts if the defender's position changes"
  ],
  "inclusion": "Start with slow, obvious defender movement for students building this reading skill; use simple verbal cues ('which way are they facing?') to prompt the read.",
  "skillBreakdown": [
   {
    "step": "Notice which way a defender is facing or leaning before deciding.",
    "why": "A defender's position usually tells you which option they've already given up — reading it early makes the decision easier."
   },
   {
    "step": "Choose the option the defender is least protecting.",
    "why": "Working with what's already open is more reliable than trying to force through where they're strongest."
   },
   {
    "step": "Recheck the defender's position if it changes.",
    "why": "Defenders move and adjust, so a decision based on an old picture can quickly become the wrong one."
   }
  ],
  "value": "Pānga",
  "valueText": "Seeing how your role today connects to the bigger team effort — a small contribution that matters once it's put together with everyone else's."
 },
 {
  "n": 5,
  "block": 1,
  "title": "Decide and Commit",
  "focus": "Committing to a decision without hesitation (Block 1 wrap-up)",
  "walt": "We are learning to make a decision and commit to it fully, without hesitating or second-guessing halfway through.",
  "wilf": [
   "I can commit fully to a decision once I've made it",
   "I can reflect on a decision afterwards without dwelling on a mistake"
  ],
  "nzc": "Strand B, C",
  "equipment": "Balls, bibs, cones — combined equipment from Block 1 games for the wrap-up carousel",
  "safety": "Standard spacing; remind students that hesitating mid-action can cause more collisions than committing fully",
  "games": [
   {
    "name": "Commit Challenge",
    "desc": "In short small-sided rounds, the teacher calls out 'commit!' the instant a player begins an action, rewarding full, committed execution over hesitant half-actions.",
    "coach": "Once you've started, follow all the way through.",
    "easier": "Teacher calls decisions early to build confidence.",
    "harder": "Decisions must be made and committed to instantly.",
    "chaos": "Bonus for recovering well after a committed decision doesn't quite work",
    "setup": "Groups of 4-5 playing short small-sided rounds (2 minutes each) in a grid roughly 10m x 10m, one ball per group.",
    "howTo": [
     "Explain the rule: the moment a player begins any action — a pass, a dribble, a shot attempt — the teacher calls 'commit!' as a reminder to follow all the way through rather than pulling out halfway.",
     "Groups play a normal short round of small-sided possession or a simple game.",
     "Whenever the teacher spots a player starting to hesitate mid-action, the 'commit!' call is given as encouragement to finish the action fully.",
     "Play continues without a full stop — the call is a verbal nudge, not a stoppage.",
     "Coach the key message: 'once you've started, follow all the way through.'",
     "For 'easier', the teacher calls decisions early to build confidence before students act; for 'harder', decisions must be made and committed to instantly with no lead-in time. The chaos variant gives a bonus for recovering well after a committed decision doesn't quite work out."
    ]
   },
   {
    "name": "Decision Carousel",
    "desc": "Teams rotate through short stations that each revisit a Block 1 focus — scanning, spotting gaps, safe vs risky choices, reading a defender.",
    "coach": "Use everything you've practised this week.",
    "easier": "Longer time per station.",
    "harder": "Shorter time, quicker rotation.",
    "chaos": "Head-to-head mirror",
    "setup": "Four stations set up around the space, each revisiting one Block 1 focus (scanning, spotting gaps, safe-vs-risky, reading a defender), teams of 3-4 rotating through all four, roughly 3-4 minutes per station.",
    "howTo": [
     "Briefly remind students what each of the four stations is testing before rotating begins, since this is a recap of the whole block.",
     "Teams start at their assigned station and complete a short version of that block's key activity.",
     "On the teacher's signal, teams rotate clockwise to the next station until all four have been completed.",
     "Keep transitions between stations quick and orderly — equipment stays in place, only students move.",
     "Coach the key message: 'use everything you've practised this week,' connecting each station back to its earlier lesson.",
     "For 'easier', allow longer time per station; for 'harder', shorten the time and speed up rotation. The chaos variant adds a head-to-head mirror challenge at one station."
    ]
   },
   {
    "name": "No Regrets Round",
    "desc": "In small games, after every decision — whether it worked or not — the player briefly says what they saw and why they chose it, with no criticism allowed.",
    "coach": "State it, don't judge it.",
    "easier": "Teacher models the first few.",
    "harder": "Quick turnaround, no pause in play.",
    "chaos": "n/a",
    "setup": "Groups of 4-5 playing small-sided games in a grid roughly 10m x 10m, one ball per group.",
    "howTo": [
     "Explain the rule before starting: after every decision — whether it worked or didn't — the player involved briefly says what they saw and why they chose it, with absolutely no criticism allowed from teammates.",
     "Groups play a normal small-sided game or possession round.",
     "After a notable decision (a pass, a shot, a dribble choice), that player quickly states their reasoning out loud before play resumes.",
     "Teammates listen without judging the outcome — the focus is on the thinking, not whether it worked.",
     "Coach the key message: 'state it, don't judge it,' reinforcing that naming a decision matters more than whether it succeeded.",
     "For 'easier', the teacher models the first few examples; for 'harder', keep a quick turnaround with no pause in play."
    ]
   }
  ],
  "big": {
   "name": "Commit & Reflect Games",
   "desc": "Small-sided matches where teams earn a bonus point for committing fully to decisions and for giving each other quick, judgement-free feedback on choices, wrapping up the whole block.",
   "setup": "Two or more teams of 4-5 in a grid roughly 15m x 12m, bibs to separate teams, one ball per game, small goals or end-zones marked at each end.",
   "howTo": [
    "Explain the scoring before play starts: teams earn a bonus point for committing fully to decisions (no hesitant half-actions) and a further bonus for giving each other quick, judgement-free feedback on choices after the fact.",
    "Start play from the centre of the grid with teams in their own half.",
    "Play a normal small-sided game, drawing on scanning, spotting gaps, weighing safe-versus-risky, and reading defenders from across the whole block.",
    "On any stoppage, restart quickly with a short pass-in, keeping the game moving.",
    "Rotate ends or opponents every few minutes if running multiple short games, so the wrap-up covers a range of matchups.",
    "Coach the key message from the whole block: praise full commitment to a decision and honest, kind feedback afterwards, since this lesson brings together everything from Block 1 before moving on to Block 2's focus on risk and reward."
   ]
  },
  "discussion": [
   "What did 'committing' to a decision actually feel like today?",
   "What's the difference between reflecting on a decision and dwelling on it?",
   "Looking back over this block, what's improved most in how your team makes decisions?"
  ],
  "lookfors": [
   "Commits fully to a decision rather than hesitating or changing mid-action",
   "Reflects briefly and constructively on decisions",
   "Shows growth across Block 1 in scanning, reading, and choosing"
  ],
  "inclusion": "Model 'no regrets' reflection language for students who are hard on themselves after mistakes; allow extra thinking time in early rounds for those still building decision confidence.",
  "skillBreakdown": [
   {
    "step": "Make your decision and commit to it fully, rather than changing your mind halfway.",
    "why": "A committed action, even an imperfect one, usually works out better than a hesitant, half-changed one."
   },
   {
    "step": "Reflect briefly on a decision after it happens, then move on.",
    "why": "A quick, honest reflection helps you learn without it turning into dwelling on a mistake."
   },
   {
    "step": "Trust the scanning, gap-reading, and defender-reading skills you've already practised this week.",
    "why": "Good decisions come from trusting the picture you've already built, not from second-guessing it in the moment."
   }
  ],
  "value": "Aroha",
  "valueText": "Being patient and encouraging with teammates whose skills or confidence look different from yours, and treating everyone with kindness whether the game is going well or not."
 },
 {
  "n": 6,
  "block": 2,
  "title": "Worth the Risk?",
  "focus": "Weighing risk versus reward before attempting an ambitious option",
  "walt": "We are learning to weigh up whether a risky option is actually worth it before we try it.",
  "wilf": [
   "I can weigh up the risk and reward before attempting an ambitious play",
   "I can choose the safer option when the risk clearly outweighs the reward"
  ],
  "nzc": "Strand B · Thinking",
  "equipment": "Balls, bibs, cones",
  "safety": "Standard spacing for small-sided games",
  "games": [
   {
    "name": "Risk Points",
    "desc": "Small-sided possession game where a risky pass or move scores double points if it works but costs a turnover-style penalty if it doesn't, while safe options score a single guaranteed point.",
    "coach": "Is the double worth the risk right now?",
    "easier": "Smaller penalty for a failed risky option.",
    "harder": "Bigger reward and bigger cost, sharpening the decision.",
    "chaos": "Bonus multiplier round announced at random",
    "setup": "Groups of 4-5 (mixed attackers/defenders) playing possession in a grid roughly 10m x 10m, one ball per group, two cones marking a designated 'risky pass' zone at one end.",
    "howTo": [
     "Explain the scoring before starting: a risky pass or move into the marked zone scores double points if it succeeds, but costs a turnover-style penalty (the ball goes straight to the other side) if it fails; safe options score a single guaranteed point.",
     "Groups begin a normal possession game, with players free to choose safe or risky options as they play.",
     "Players decide moment to moment whether to attempt the risky option for a bigger reward or stick with the safe, guaranteed point.",
     "On a turnover from a failed risky attempt, restart immediately with the ball to the team that gained it — no long stoppage.",
     "Coach the key message: 'is the double worth the risk right now?' — prompting genuine weighing up, not automatic risk-taking.",
     "For 'easier', reduce the penalty for a failed risky option; for 'harder', increase both the reward and the cost to sharpen the decision. The chaos variant randomly announces a bonus multiplier round."
    ]
   },
   {
    "name": "Worth It? Card Call",
    "desc": "In a partner activity, before each attempt one partner quickly says 'worth it' or 'not worth it' and why, before the pair attempts the play.",
    "coach": "Say the reason, not just the verdict.",
    "easier": "Teacher offers example reasons.",
    "harder": "Quick-turnaround verdicts, no pause.",
    "chaos": "n/a",
    "setup": "Pairs spread out with roughly 4m of space each, one ball or simple challenge per pair (e.g. a longer pass, a trick move).",
    "howTo": [
     "Demonstrate the rule: before each attempt, one partner quickly says 'worth it' or 'not worth it' and gives a brief reason, before the pair attempts the play.",
     "One partner proposes the attempt (a longer or trickier pass/move) and the other gives their quick verdict and reason.",
     "The pair then attempts the play regardless of the verdict, to see how the prediction compares with the outcome.",
     "Swap who gives the verdict after every 2-3 attempts so both partners practise judging worth.",
     "Coach the key message: 'say the reason, not just the verdict.'",
     "For 'easier', the teacher offers example reasons students can borrow; for 'harder', require quick-turnaround verdicts with no pause before attempting."
    ]
   },
   {
    "name": "Cost of the Fail",
    "desc": "In small games, every failed risky attempt is briefly discussed — what did it actually cost the team?",
    "coach": "Name the cost honestly, then move on.",
    "easier": "Teacher prompts the discussion point.",
    "harder": "Players self-identify the cost.",
    "chaos": "Bonus point for the clearest cost explanation",
    "setup": "Groups of 4-5 playing small-sided games in a grid roughly 10m x 10m, one ball per group.",
    "howTo": [
     "Explain the rule: every time a risky attempt fails during play, the group briefly and honestly discusses what it actually cost the team (possession, a scoring chance, position).",
     "Groups play a normal small-sided game, attempting risky and safe options as they choose.",
     "After any failed risky attempt, pause briefly for the group to name the specific cost, then restart play straight away.",
     "Keep these discussions short — a sentence or two is enough before continuing.",
     "Coach the key message: 'name the cost honestly, then move on' — this isn't about dwelling on mistakes.",
     "For 'easier', the teacher prompts the discussion point; for 'harder', players self-identify the cost without prompting."
    ]
   }
  ],
  "big": {
   "name": "High Stakes Possession",
   "desc": "Small-sided game with a genuine risk/reward scoring system — bigger reward for ambitious plays, real cost for failed ones — pushing teams to weigh decisions rather than always choosing one or the other.",
   "setup": "Two teams of 4-5 in a grid roughly 15m x 12m, bibs to separate teams, one ball per game, a genuine risk/reward scoring system explained beforehand (bigger reward for ambitious plays, real cost for failed ones).",
   "howTo": [
    "Explain the scoring before play starts: ambitious plays (long passes, dribbles past a defender, shots from distance) earn bigger rewards if they work, but genuinely cost the team possession or points if they fail; safe options always earn a smaller, guaranteed reward.",
    "Start play from the centre of the grid with teams in their own half.",
    "Play a normal small-sided game, with players choosing moment to moment between safe and ambitious options based on the real stakes involved.",
    "On any stoppage or turnover, restart quickly with the ball to the appropriate team, keeping the risk/reward system running throughout.",
    "Rotate ends or opponents every few minutes if running multiple short games.",
    "Coach the key message from the block's focus: notice out loud when a team weighs the decision well, whether they chose safe or risky, rather than only praising successful risky plays."
   ]
  },
  "discussion": [
   "What made a risk 'worth it' today, and what made one not worth it?",
   "Did thinking about the cost change which option you chose?",
   "When did a safe choice turn out to be the smarter one?"
  ],
  "lookfors": [
   "Weighs risk and reward before attempting an ambitious play",
   "Can explain what a risky option would cost if it failed",
   "Chooses the safer option when the risk clearly isn't worth it"
  ],
  "inclusion": "Offer simplified risk/reward language (e.g. 'big prize, big cost' vs 'small prize, safe') for younger or less confident decision-makers; allow extra discussion time before attempts early on.",
  "skillBreakdown": [
   {
    "step": "Ask what you actually gain if a risky option works.",
    "why": "A risk is only worth it if the reward genuinely matters — decide that before you try it, not after."
   },
   {
    "step": "Ask what your team loses if it doesn't work.",
    "why": "Knowing the cost of a failed risk is just as important as knowing the potential reward."
   },
   {
    "step": "Choose the safer option when the cost clearly outweighs the gain.",
    "why": "Good decision-makers aren't afraid of risk, but they don't take one that costs more than it's worth."
   }
  ],
  "value": "Mōhio",
  "valueText": "Understanding your own strengths and how you fit into the team, and noticing what your teammates need from you in order to do their best."
 },
 {
  "n": 7,
  "block": 2,
  "title": "Numbers Game",
  "focus": "Reading numbers — attackers versus defenders — to decide when to go",
  "walt": "We are learning to count attackers versus defenders to decide when it's actually a good moment to attack.",
  "wilf": [
   "I can recognise when my team has more attackers than defenders in a space",
   "I can decide to attack or hold based on the numbers, not just instinct"
  ],
  "nzc": "Strand B · Thinking",
  "equipment": "Bibs, balls, cones marking zones",
  "safety": "Standard spacing across overlapping small-sided zones",
  "games": [
   {
    "name": "Count and Call",
    "desc": "Small groups move through a grid with defenders scattered through it; before every action, students must call out the number of attackers versus defenders nearby.",
    "coach": "Count before you decide, every time.",
    "easier": "Numbers stay obvious and fixed for longer.",
    "harder": "Numbers shift quickly as players move.",
    "chaos": "Random numbers-check freeze",
    "setup": "Groups of 5-6 moving through a grid roughly 12m x 10m scattered with cones representing defenders, some cones grouped to create uneven numbers in different areas.",
    "howTo": [
     "Demonstrate the rule: before any action (a pass, a move into space), students must quickly count and call out the number of attackers versus defenders nearby — e.g. '2 v 1 here!'",
     "Students move through the grid in small groups, approaching different cone clusters as they go.",
     "Before acting near a cluster, they call out the numbers they see, then act based on what they counted.",
     "Keep the movement continuous — the calling happens on the move, not as a full stop.",
     "Coach the key message: 'count before you decide, every time.'",
     "For 'easier', keep numbers obvious and fixed for longer; for 'harder', have numbers shift quickly as players move through the grid. The chaos variant calls a random numbers-check freeze."
    ]
   },
   {
    "name": "2v1, 3v2 Rotation",
    "desc": "Rotating small-sided overload games — 2v1, then 3v2 — where the attacking side must recognise and use the numbers advantage to attack directly.",
    "coach": "Numbers up means go, don't overthink it.",
    "easier": "Defender must stay further back.",
    "harder": "Numbers advantage reduced (e.g. 3v2 becomes tighter).",
    "chaos": "Sudden extra defender joins mid-play",
    "setup": "Groups of 3 for 2v1 and groups of 5 for 3v2, rotating between the two set-ups in a grid roughly 10m x 8m, one ball per group.",
    "howTo": [
     "Explain the overload principle: whenever attackers outnumber defenders, the attacking side should recognise the advantage and attack directly rather than passing sideways out of habit.",
     "Start with the 2v1 set-up: two attackers try to beat the single defender using the extra player.",
     "After a few minutes, rotate to the 3v2 set-up with an extra attacker and defender added, keeping the same overload principle.",
     "If defenders win the ball, reset quickly with attackers restarting from the far end of the grid.",
     "Coach the key message: 'numbers up means go, don't overthink it.'",
     "For 'easier', the defender(s) must stay further back; for 'harder', reduce the numbers advantage (e.g. tighten the 3v2). The chaos variant adds a sudden extra defender mid-play."
    ]
   },
   {
    "name": "Numbers Up Call",
    "desc": "Possession game where a player who correctly calls 'numbers up!' in a genuinely favourable moment earns their team a bonus point.",
    "coach": "Call it the second you see it.",
    "easier": "Teacher confirms calls.",
    "harder": "Players must justify their own call.",
    "chaos": "False numbers announced by teacher to test genuine reading",
    "setup": "Groups of 5-6 playing possession in a grid roughly 10m x 10m, one ball per group.",
    "howTo": [
     "Explain the rule: any player who correctly calls 'numbers up!' the instant their side has a genuine attacking advantage earns their team a bonus point.",
     "Groups play a normal possession game, with numbers naturally shifting as players move around the grid.",
     "Players watch for genuine overload moments and call them out the instant they spot one.",
     "The teacher (or a nominated peer) confirms whether the call was accurate before awarding the bonus point, then play continues without a long stop.",
     "Coach the key message: 'call it the second you see it,' rewarding sharp, immediate reads over delayed ones.",
     "For 'easier', the teacher confirms calls to build confidence; for 'harder', players must justify their own call. The chaos variant has the teacher occasionally announce a false 'numbers up' to test genuine reading."
    ]
   }
  ],
  "big": {
   "name": "Overload Game",
   "desc": "Small-sided game with regularly shifting overload situations (an extra attacker or defender rotated in), rewarding teams who recognise and attack genuine numbers-up moments rather than attacking blindly.",
   "setup": "Two teams starting at 4v4 in a grid roughly 18m x 12m, bibs to separate teams, one ball per game, one or two extra players ready to rotate in and create overloads.",
   "howTo": [
    "Explain the scoring before play starts: teams earn a bonus point for recognising and attacking a genuine numbers-up moment (created when an extra player rotates in), on top of standard scoring.",
    "Start with an even 4v4 game from the centre of the grid.",
    "At intervals, rotate an extra attacker or defender into the game to create a temporary overload, without stopping play.",
    "Players must notice the shifted numbers and adjust their decisions accordingly, attacking directly when the numbers favour them.",
    "On any stoppage, restart quickly with a short pass-in, keeping the rotating-overload system running.",
    "Coach the key message from the block's focus: praise the team that attacks the overload immediately rather than passing sideways out of habit."
   ]
  },
  "discussion": [
   "What did 'numbers up' actually look like today?",
   "How did counting change your decision compared to just going for it?",
   "What happened when your team attacked into numbers down?"
  ],
  "lookfors": [
   "Recognises numbers-up situations before attacking",
   "Holds or resets when numbers aren't favourable",
   "Calls out numbers to help teammates decide"
  ],
  "inclusion": "Use simple visual cues (an extra bib colour for 'attacker') to make counting easier for students still building this skill; keep early rounds at a walking pace to allow time to count.",
  "skillBreakdown": [
   {
    "step": "Count how many attackers versus defenders are in the space before deciding to go.",
    "why": "Numbers up — more attackers than defenders — is one of the clearest, most reliable signals that a moment is worth attacking."
   },
   {
    "step": "Hold or reset when the numbers aren't in your favour.",
    "why": "Attacking into numbers down usually costs possession — waiting for a better moment is often the smarter decision."
   },
   {
    "step": "Call the numbers out loud to help teammates decide too.",
    "why": "A quick call like 'numbers up!' helps the whole team recognise and use a good moment together, not just one player."
   }
  ],
  "value": "Manaaki",
  "valueText": "Looking after your teammates' success as much as your own — including, encouraging, and setting others up to succeed."
 },
 {
  "n": 8,
  "block": 2,
  "title": "Plan B",
  "focus": "Having a backup option ready if the first choice doesn't work",
  "walt": "We are learning to have a backup plan ready in case our first decision doesn't work out.",
  "wilf": [
   "I can think of a second option before I commit to my first",
   "I can switch smoothly to my backup plan if my first choice is taken away"
  ],
  "nzc": "Strand B, C",
  "equipment": "Balls, bibs, cones",
  "safety": "Standard spacing; clear communication when switching plans to avoid confusion or collisions",
  "games": [
   {
    "name": "Plan A, Plan B",
    "desc": "In pairs, before each pass attempt the passer quietly names two options — Plan A and Plan B — to their partner, then switches to Plan B if a 'defender' cone blocks Plan A.",
    "coach": "Know your Plan B before you need it.",
    "easier": "Defender cone placement announced in advance.",
    "harder": "Defender cone appears at the last second.",
    "chaos": "Role rotation halfway",
    "setup": "Pairs facing each other about 5m apart with a single defender cone placed between them, one ball per pair.",
    "howTo": [
     "Demonstrate the rule: before each pass attempt, the passer quietly names two options to their partner — 'Plan A' (the direct pass) and 'Plan B' (an alternative angle).",
     "The passer states both plans quietly, then looks to see if the defender cone is blocking Plan A's direct line.",
     "If Plan A is blocked, the passer switches smoothly to Plan B without pausing to re-think from scratch.",
     "Move the defender cone to a new position after every few attempts to keep testing the switch.",
     "Coach the key message: 'know your Plan B before you need it.'",
     "For 'easier', announce the defender cone's placement in advance; for 'harder', place it at the last second. The chaos variant swaps roles halfway through."
    ]
   },
   {
    "name": "'Blocked!' Reaction Game",
    "desc": "Small-sided game where the teacher or a defender can call or signal 'blocked!' on a player's intended option, forcing an instant, smooth switch to a backup.",
    "coach": "Switch calmly, don't freeze.",
    "easier": "Blocked calls given with more warning.",
    "harder": "Blocked calls given at the last possible moment.",
    "chaos": "Double-block forces a third option",
    "setup": "Groups of 4-5 playing small-sided possession in a grid roughly 10m x 10m, one ball per group, an active defender able to call or signal 'blocked!'",
    "howTo": [
     "Explain the rule: the defender (or teacher) can call or signal 'blocked!' on a player's clearly intended option, forcing that player to instantly and smoothly switch to a backup.",
     "Groups play a normal possession game, with the defender watching for a player committing to an obvious option.",
     "When 'blocked!' is called, the player with the ball must immediately find and use a different option rather than freezing or forcing the original plan.",
     "Play continues without a full stop — the call happens on the move.",
     "Coach the key message: 'switch calmly, don't freeze.'",
     "For 'easier', give blocked calls with more warning; for 'harder', call them at the last possible moment. The chaos variant occasionally uses a double-block, forcing a third option."
    ]
   },
   {
    "name": "Call the Switch",
    "desc": "Possession game where players must verbally call out when they're switching from their first plan to a backup, so teammates can adjust too.",
    "coach": "Say it loud enough for your team to hear and react.",
    "easier": "Teacher prompts the call if forgotten.",
    "harder": "Fast-paced play, quick switches required.",
    "chaos": "n/a",
    "setup": "Groups of 4-5 playing possession in a grid roughly 10m x 10m, one ball per group.",
    "howTo": [
     "Explain the rule: whenever a player switches from their first intended plan to a backup, they must call it out loud (e.g. 'switching!') so teammates can adjust too.",
     "Groups play a normal possession game, choosing and occasionally switching plans as the situation changes.",
     "Whenever a switch happens, the player calls it clearly so nearby teammates can react and reposition.",
     "Keep play continuous — the call is part of the action, not a stoppage.",
     "Coach the key message: 'say it loud enough for your team to hear and react.'",
     "For 'easier', the teacher prompts the call if a student forgets; for 'harder', play at a faster pace requiring quicker switches."
    ]
   }
  ],
  "big": {
   "name": "Backup Ball",
   "desc": "Small-sided possession game where teams earn a bonus point for smoothly executing a backup plan after their first option is genuinely blocked, on top of standard scoring.",
   "setup": "Two teams of 4-5 in a grid roughly 15m x 12m, bibs to separate teams, one ball per game, small goals or end-zones marked at each end.",
   "howTo": [
    "Explain the scoring before play starts: teams earn a bonus point for smoothly executing a backup plan after their first option is genuinely blocked by a defender, on top of standard scoring.",
    "Start play from the centre of the grid with teams in their own half.",
    "Play a normal small-sided game, encouraging players to have a backup option ready and to switch to it smoothly when their first choice is shut down.",
    "On any stoppage, restart quickly with a short pass-in from where the ball went out.",
    "Rotate ends or opponents every few minutes if running multiple short games.",
    "Coach the key message from the block's focus: praise calm, smooth switches to a backup plan over forced, hesitant attempts to force the original option through."
   ]
  },
  "discussion": [
   "What was your Plan B today, and when did you actually need it?",
   "How did having a backup ready change how calm you felt?",
   "What happened when a plan change wasn't communicated clearly?"
  ],
  "lookfors": [
   "Has a backup option in mind before committing to a first choice",
   "Switches to a backup smoothly rather than panicking",
   "Communicates a plan change to teammates"
  ],
  "inclusion": "Allow extra thinking time in early rounds to name both Plan A and Plan B out loud before playing; pair less confident decision-makers with a supportive partner who models calm switching.",
  "skillBreakdown": [
   {
    "step": "Have a second option in mind before you commit to your first one.",
    "why": "A defender can take away your first choice in an instant — having a backup ready means you're never caught with nothing."
   },
   {
    "step": "Switch to your backup smoothly, without panicking.",
    "why": "A calm switch to Plan B looks and works far better than a rushed, panicked scramble."
   },
   {
    "step": "Communicate a plan change to your teammates quickly.",
    "why": "A backup plan only works for the team if teammates know it's happening too."
   }
  ],
  "value": "Pānga",
  "valueText": "Seeing how your role today connects to the bigger team effort — a small contribution that matters once it's put together with everyone else's."
 },
 {
  "n": 9,
  "block": 2,
  "title": "Under the Pump",
  "focus": "Decision-making under time and defensive pressure",
  "walt": "We are learning to make good decisions even when we're under pressure and don't have much time.",
  "wilf": [
   "I can make a clear decision quickly when I'm under pressure",
   "I can stay calm rather than rushing into a poor choice"
  ],
  "nzc": "Strand B, C",
  "equipment": "Balls, bibs, cones",
  "safety": "Standard spacing; remind students that rushing under pressure is a common cause of collisions, so stay controlled",
  "games": [
   {
    "name": "Beat the Clock Decisions",
    "desc": "Simple passing or possession drills with a shrinking time limit to make a decision before a defender or timer catches up.",
    "coach": "Quick and calm, not rushed and sloppy.",
    "easier": "More time allowed per decision.",
    "harder": "Time shrinks round by round.",
    "chaos": "Sudden extra defender added",
    "setup": "Pairs or small groups of 3 in a grid roughly 8m x 8m, one ball per group, a visible or verbal countdown timer.",
    "howTo": [
     "Explain the rule: students have a set time (starting around 5 seconds) to make and execute a decision — a pass or a move — before the timer or a chasing defender catches up.",
     "Start with the ball at one player, who must decide and act before time runs out.",
     "The teacher calls the countdown aloud or uses a visible timer, shrinking the allowed time round by round.",
     "If the decision isn't made in time, that round is simply reset and play continues to the next attempt — no penalty beyond a quick restart.",
     "Coach the key message: 'quick and calm, not rushed and sloppy.'",
     "For 'easier', allow more time per decision; for 'harder', shrink the time round by round. The chaos variant adds a sudden extra defender."
    ]
   },
   {
    "name": "Closing Down",
    "desc": "Small-sided game where one or two defenders actively close down space quickly, forcing the ball carrier to decide fast using skills from earlier lessons.",
    "coach": "Use what you already know, just faster.",
    "easier": "Defenders close down slowly.",
    "harder": "Defenders close down immediately and aggressively.",
    "chaos": "Role rotation on a whistle",
    "setup": "Groups of 4-5 (including 1-2 active defenders) in a grid roughly 10m x 10m, one ball per group.",
    "howTo": [
     "Explain the rule: one or two defenders actively close down the ball carrier quickly, forcing a fast decision using skills already practised earlier in the unit (scanning, gaps, reading a defender).",
     "The attacking group begins with possession while defenders start a short distance away.",
     "On the teacher's signal, defenders close down quickly and attackers must decide fast — pass, dribble, or use a backup plan.",
     "If defenders win the ball, rotate roles so different students get defending turns.",
     "Coach the key message: 'use what you already know, just faster.'",
     "For 'easier', defenders close down slowly; for 'harder', defenders close down immediately and aggressively. The chaos variant rotates roles on a random whistle."
    ]
   },
   {
    "name": "Calm Under Pressure",
    "desc": "Partner drills where one player applies light pressure (shadowing, noise, time pressure) while the other practises staying physically relaxed while still deciding quickly.",
    "coach": "Notice your own breathing and feet.",
    "easier": "Light pressure only.",
    "harder": "Pressure increases gradually.",
    "chaos": "n/a",
    "setup": "Pairs spread out with roughly 3m of space each, no ball needed for the core drill (optional light ball work can be added).",
    "howTo": [
     "Demonstrate the idea: one partner applies light pressure — shadowing closely, making noise, or counting down loudly — while the other practises staying physically relaxed while still deciding quickly.",
     "The pressured partner focuses on keeping their shoulders and breathing relaxed rather than tensing up, while still responding to prompts from their partner.",
     "Swap roles after 1-2 minutes so both partners experience applying and handling pressure.",
     "Keep the activity light-hearted — this is about noticing physical tension, not a serious contest.",
     "Coach the key message: 'notice your own breathing and feet.'",
     "For 'easier', apply light pressure only; for 'harder', increase pressure gradually over the activity."
    ]
   }
  ],
  "big": {
   "name": "Pressure Cooker Possession",
   "desc": "Small-sided game with actively closing defenders and a shot-clock-style time pressure, rewarding teams who keep making clear, calm decisions rather than rushing or freezing.",
   "setup": "Two teams of 4-5 in a grid roughly 15m x 12m, bibs to separate teams, one ball per game, a visible or verbal shot-clock-style timer for possessions.",
   "howTo": [
    "Explain the scoring before play starts: teams keep standard points for scoring, and are rewarded for making clear, calm decisions under the shot-clock pressure rather than rushing or freezing.",
    "Start play from the centre of the grid with teams in their own half, with defenders instructed to close down actively.",
    "Play a normal small-sided game with a running shot-clock (e.g. 15-20 seconds) that resets on each change of possession, keeping decision-making under real time pressure.",
    "On any stoppage, restart quickly with a short pass-in and reset the clock.",
    "Rotate ends or opponents every few minutes if running multiple short games.",
    "Coach the key message from the block's focus: notice and praise players who stay calm and controlled under pressure rather than rushing their decisions."
   ]
  },
  "discussion": [
   "What did good decision-making under pressure actually look like today?",
   "What's the difference between deciding quickly and deciding rushed?",
   "What helped you stay calm when the pressure was on?"
  ],
  "lookfors": [
   "Makes a clear decision quickly under time or defensive pressure",
   "Shows calm body language (controlled feet, breathing) under pressure",
   "Uses established decision-making skills rather than abandoning them when rushed"
  ],
  "inclusion": "Build pressure gradually across the lesson so students aren't overwhelmed early; allow a brief 'reset breath' option before a decision for students who need it.",
  "skillBreakdown": [
   {
    "step": "Make a clear decision quickly, even when you feel rushed.",
    "why": "Pressure won't go away, so the goal is deciding well within it, not waiting for it to disappear."
   },
   {
    "step": "Stay physically calm — controlled feet and breathing — even when the pressure is on.",
    "why": "A calm body usually leads to a clearer decision than a panicked one."
   },
   {
    "step": "Trust the decision-making skills you've already built, rather than abandoning them under pressure.",
    "why": "Good habits, like scanning, reading numbers, and having a backup, matter most exactly when there's least time to think."
   }
  ],
  "value": "Aroha",
  "valueText": "Being patient and encouraging with teammates whose skills or confidence look different from yours, and treating everyone with kindness whether the game is going well or not."
 },
 {
  "n": 10,
  "block": 2,
  "title": "Team Choice",
  "focus": "Group decision-making — weighing options together as a team (Block 2 wrap-up)",
  "walt": "We are learning to make a shared decision as a team quickly and confidently, combining everyone's read of the situation.",
  "wilf": [
   "I can contribute my read of the situation to a team decision",
   "I can commit to a team's shared decision even if it wasn't my first idea"
  ],
  "nzc": "Strand B, C · Relating to others",
  "equipment": "Balls, bibs, cones — combined equipment from Block 2 games for the wrap-up carousel",
  "safety": "Standard spacing across simultaneous small-sided games",
  "games": [
   {
    "name": "Quick Team Call",
    "desc": "Small groups make a fast shared decision (attack down the left or right, go now or reset) using only a few seconds of quiet discussion before acting.",
    "coach": "Share your read fast, then commit together.",
    "easier": "More discussion time allowed.",
    "harder": "Very short decision windows.",
    "chaos": "Bonus for a genuinely shared, fast decision",
    "setup": "Small groups of 4-5 huddled briefly before short rounds of small-sided play in a grid roughly 10m x 10m, one ball per group.",
    "howTo": [
     "Explain the rule: before each short round, groups get only a few seconds of quiet discussion to make a fast shared decision (e.g. attack down the left or right, go now or reset).",
     "Groups huddle briefly, share their read of the situation quickly, and agree on the decision together.",
     "The round then plays out with the team trying to follow through on their quick shared decision.",
     "Reset and repeat for several short rounds, changing the decision each time.",
     "Coach the key message: 'share your read fast, then commit together.'",
     "For 'easier', allow more discussion time; for 'harder', use very short decision windows. The chaos variant gives a bonus for a genuinely shared, fast decision."
    ]
   },
   {
    "name": "Risk/Reward Vote",
    "desc": "Before a round, teams briefly weigh up a risky versus safe team option and must agree together before playing it out.",
    "coach": "Everyone gets a say, then the team commits.",
    "easier": "Teacher offers the two options to choose between.",
    "harder": "Teams generate their own risk/reward options.",
    "chaos": "n/a",
    "setup": "Small groups of 4-5 briefly discussing before a short round of small-sided play in a grid roughly 10m x 10m, one ball per group.",
    "howTo": [
     "Explain the rule: before a round, teams briefly weigh up a risky versus a safe team option (e.g. attack quickly versus build possession slowly) and must agree together before playing it out.",
     "Groups discuss for a short, timed window and settle on one option as a team.",
     "The round is then played trying to follow through on the agreed team option.",
     "After the round, briefly note whether the chosen option worked out, then move to the next round.",
     "Coach the key message: 'everyone gets a say, then the team commits.'",
     "For 'easier', the teacher offers the two options to choose between; for 'harder', teams generate their own risk/reward options."
    ]
   },
   {
    "name": "Backup Team Plan",
    "desc": "Teams plan a simple Plan A and Plan B together before a short game, then must switch to the team's Plan B smoothly if Plan A is blocked.",
    "coach": "Know the team's backup, not just your own.",
    "easier": "Plans kept very simple.",
    "harder": "Plans include multiple players' roles.",
    "chaos": "Role rotation mid-game",
    "setup": "Small groups of 4-5 planning briefly before a short game in a grid roughly 10m x 10m, one ball per group.",
    "howTo": [
     "Explain the rule: teams plan a simple Plan A and Plan B together before the short game starts, involving more than one player's role.",
     "Groups huddle to agree both plans, keeping them simple and clear enough for everyone to remember.",
     "During the game, if Plan A is clearly blocked by opponents, the team must smoothly switch to their agreed Plan B.",
     "Play continues without a full stop when the switch happens — it should feel like a natural in-game adjustment.",
     "Coach the key message: 'know the team's backup, not just your own.'",
     "For 'easier', keep plans very simple; for 'harder', include multiple players' roles in each plan. The chaos variant rotates roles mid-game."
    ]
   }
  ],
  "big": {
   "name": "Team Decision Cup",
   "desc": "Small-sided round-robin where teams huddle briefly before each game to agree a shared plan, combining risk/reward thinking, numbers-reading, and backup plans from across the block.",
   "setup": "Two or more teams of 4-5 in a grid roughly 15m x 12m, bibs to separate teams, one ball per game, small goals or end-zones marked at each end, brief huddle time built in before each game.",
   "howTo": [
    "Explain the scoring before play starts: teams huddle briefly before each round-robin game to agree a shared plan, combining risk/reward thinking, numbers-reading, and backup plans from across the block.",
    "Give each team a short, timed huddle to agree their plan before the round begins.",
    "Play a normal small-sided game, with teams trying to follow through on their huddled plan and adjusting to a backup if needed.",
    "On any stoppage, restart quickly with a short pass-in, keeping the round moving.",
    "Rotate opponents between rounds so teams get to try their planning process against a range of opposition.",
    "Coach the key message from the whole block: praise teams that clearly used their huddle time well, since this lesson wraps up Block 2's focus on weighing risk, reading numbers, and having a backup, before Block 3 moves into adapting tactics."
   ]
  },
  "discussion": [
   "What made a team decision better than an individual one today?",
   "How did it feel to commit to a decision that wasn't your first idea?",
   "Looking back over this block, what's improved most in how your team decides together?"
  ],
  "lookfors": [
   "Contributes their read of the situation to a team decision",
   "Commits fully to a shared team decision",
   "Combines risk/reward, numbers-reading, and backup planning as a team"
  ],
  "inclusion": "Ensure quieter students get a genuine turn to contribute during team huddles, not just the most confident voices; keep huddle time short and structured (e.g. one idea each) so every voice fits in.",
  "skillBreakdown": [
   {
    "step": "Share your read of the situation quickly and clearly with your team.",
    "why": "A team decision is only as good as the information shared to make it — your read matters, so offer it."
   },
   {
    "step": "Commit fully to the team's decision, even if it wasn't your first idea.",
    "why": "A team that fully commits to one shared decision usually beats one where players are each doing something different."
   },
   {
    "step": "Combine risk/reward thinking, numbers-reading, and backup plans as a team, not just individually.",
    "why": "This block's skills are most powerful when a whole team uses them together, not just one player."
   }
  ],
  "value": "Mōhio",
  "valueText": "Understanding your own strengths and how you fit into the team, and noticing what your teammates need from you in order to do their best."
 },
 {
  "n": 11,
  "block": 3,
  "title": "Read the Pattern",
  "focus": "Recognising patterns and tendencies in how an opponent plays",
  "walt": "We are learning to notice patterns in how an opponent or another team tends to play, and use that to inform our decisions.",
  "wilf": [
   "I can notice a pattern in how an opponent tends to play",
   "I can use a spotted pattern to make a better decision"
  ],
  "nzc": "Strand B · Thinking",
  "equipment": "Bibs, balls, cones",
  "safety": "Standard spacing for repeated small-sided rounds",
  "games": [
   {
    "name": "Pattern Watch",
    "desc": "Students play repeated short rounds of a simple movement game against the same partner, trying to notice and use a pattern in their partner's choices.",
    "coach": "Watch a few rounds before trying to use what you see.",
    "easier": "Partner plays a more obvious, repeated pattern at first.",
    "harder": "Partner deliberately breaks their own pattern.",
    "chaos": "Partner swap mid-activity",
    "setup": "Pairs facing each other about 4m apart in a simple movement game (e.g. rock-paper-scissors-style or a side-step chase game), repeated across several short rounds.",
    "howTo": [
     "Explain the rule: students play repeated short rounds of the same simple game against the same partner, trying to notice a pattern in their partner's choices over time.",
     "Play the first 2-3 rounds normally, without commentary, so a genuine pattern (if any) has a chance to appear.",
     "From round 4 onward, players try to use what they've noticed to predict and counter their partner's next choice.",
     "Continue for 8-10 rounds total, keeping each round quick.",
     "Coach the key message: 'watch a few rounds before trying to use what you see.'",
     "For 'easier', the partner plays a more obvious, repeated pattern at first; for 'harder', the partner deliberately breaks their own pattern. The chaos variant swaps partners mid-activity."
    ]
   },
   {
    "name": "Predict & Play",
    "desc": "In a small-sided game, students briefly predict aloud what an opponent is likely to do next, based on what they've noticed so far, before playing the point out.",
    "coach": "Base your prediction on something you actually saw.",
    "easier": "Teacher highlights an obvious pattern to notice.",
    "harder": "Patterns are subtler and require more rounds to spot.",
    "chaos": "n/a",
    "setup": "Groups of 3-4 playing a small-sided game in a grid roughly 10m x 10m, one ball per group, played over several short rounds against the same opponent.",
    "howTo": [
     "Explain the rule: before each point or possession, students briefly predict aloud what an opponent is likely to do next, based on what they've noticed in earlier rounds.",
     "Play a short round first without prediction so students have something to base their read on.",
     "From the next round, the player about to face that opponent states a quick prediction before the point starts, then plays it out to see if the prediction holds.",
     "Repeat over several rounds, encouraging students to update their prediction as they learn more.",
     "Coach the key message: 'base your prediction on something you actually saw.'",
     "For 'easier', the teacher highlights an obvious pattern to notice; for 'harder', patterns are subtler and require more rounds to spot."
    ]
   },
   {
    "name": "Break the Pattern",
    "desc": "In a partner activity, one player deliberately plays a genuine pattern for a few rounds, then breaks it, and the other must notice the pattern breaking.",
    "coach": "Notice the moment it changes, not just the pattern itself.",
    "easier": "Obvious pattern break.",
    "harder": "Subtle pattern break.",
    "chaos": "Role rotation",
    "setup": "Pairs facing each other about 4m apart in a simple repeated movement or passing activity, no ball required unless preferred.",
    "howTo": [
     "Explain the two roles: one player deliberately plays a genuine, repeated pattern for several rounds, then breaks it on purpose, while the other tries to notice exactly when the pattern changes.",
     "The first player repeats a consistent choice or movement for 4-5 rounds so the pattern is real and learnable.",
     "The first player then deliberately breaks the pattern, and the second player calls out the moment they notice the change.",
     "Swap roles after each full sequence so both partners get to set and spot a pattern.",
     "Coach the key message: 'notice the moment it changes, not just the pattern itself.'",
     "For 'easier', use an obvious pattern break; for 'harder', make the break subtle. The chaos variant rotates roles unpredictably."
    ]
   }
  ],
  "big": {
   "name": "Scout & Score",
   "desc": "Round-robin small-sided games where teams play the same opponent over multiple short rounds, earning a bonus point for decisions that clearly used a pattern spotted from an earlier round.",
   "setup": "Two teams of 4-5 playing several short round-robin games against the same opponent, in a grid roughly 15m x 12m, bibs to separate teams, one ball per game.",
   "howTo": [
    "Explain the scoring before play starts: teams earn a bonus point for decisions that clearly used a pattern spotted from an earlier round against the same opponent, on top of standard scoring.",
    "Play the first short round normally, giving both teams a chance to observe how the other side tends to play.",
    "In later rounds against the same opponent, encourage players to use what they noticed to anticipate and counter the opponent's choices.",
    "On any stoppage, restart quickly with the ball to the appropriate team.",
    "Rotate to a new opponent after several rounds so students practise spotting fresh patterns against different teams.",
    "Coach the key message from the block's focus: praise a specific, named observation ('they always pass right after two touches') over a vague guess."
   ]
  },
  "discussion": [
   "What pattern did you notice in an opponent today?",
   "How did using a pattern change your decision-making?",
   "What happened when a pattern you were using suddenly changed?"
  ],
  "lookfors": [
   "Notices patterns in an opponent's play over multiple turns",
   "Uses a spotted pattern to inform a decision",
   "Notices and adjusts when a pattern changes"
  ],
  "inclusion": "Use clearly exaggerated patterns in early rounds so the skill is easy to notice and build confidence; pair students thoughtfully so pattern-reading practice is genuinely useful for both.",
  "skillBreakdown": [
   {
    "step": "Watch for a pattern in how an opponent or team tends to play over a few turns.",
    "why": "Most players and teams fall into habits — noticing them early gives you information nobody else has yet."
   },
   {
    "step": "Use a spotted pattern to predict what's likely to happen next.",
    "why": "A good prediction, even an educated guess, beats reacting blind every single time."
   },
   {
    "step": "Keep checking the pattern still holds — opponents adjust too.",
    "why": "A pattern that was true five minutes ago might not be true now, especially once an opponent notices you're using it."
   }
  ],
  "value": "Manaaki",
  "valueText": "Looking after your teammates' success as much as your own — including, encouraging, and setting others up to succeed."
 },
 {
  "n": 12,
  "block": 3,
  "title": "Change It Up",
  "focus": "Adapting a plan mid-game when the first plan isn't working",
  "walt": "We are learning to notice when a plan isn't working and change it, rather than sticking with it out of habit.",
  "wilf": [
   "I can notice when my team's plan isn't working",
   "I can suggest or support a change of plan mid-game"
  ],
  "nzc": "Strand B, C",
  "equipment": "Bibs, balls, cones",
  "safety": "Standard spacing; clear signals for plan changes to avoid confusion mid-play",
  "games": [
   {
    "name": "Plan Fail Spot",
    "desc": "In small-sided games, the teacher periodically pauses play and asks teams to honestly rate whether their current plan is working.",
    "coach": "Be honest, not just optimistic.",
    "easier": "Teacher offers a simple yes/no check.",
    "harder": "Teams must justify their rating with evidence.",
    "chaos": "n/a",
    "setup": "Small groups of 4-5 playing small-sided games in a grid roughly 10m x 10m, one ball per group.",
    "howTo": [
     "Explain the rule: the teacher will periodically pause play and ask each team to honestly rate whether their current plan or approach is actually working.",
     "Groups begin playing their small-sided game with whatever approach they've chosen.",
     "On the pause, teams quickly and honestly rate their plan (working / not working / mixed) and briefly say why.",
     "Play resumes immediately after the quick check — this isn't a long discussion.",
     "Coach the key message: 'be honest, not just optimistic,' since noticing a failing plan is the first step toward changing it.",
     "For 'easier', the teacher offers a simple yes/no check; for 'harder', teams must justify their rating with a specific piece of evidence."
    ]
   },
   {
    "name": "Switch Signal",
    "desc": "Teams agree a simple signal — a word or hand action — that any player can use mid-game to suggest 'let's change the plan,' and the whole team practises responding to it.",
    "coach": "Respond to the signal quickly, don't argue about it mid-play.",
    "easier": "Only the designated leader can call the switch.",
    "harder": "Any player can call it.",
    "chaos": "Bonus point for a switch that clearly improves the game",
    "setup": "Groups of 4-5 agreeing a simple team signal before playing a small-sided game in a grid roughly 10m x 10m, one ball per group.",
    "howTo": [
     "Have each team agree a simple signal — a word or hand action — that any player can use mid-game to suggest 'let's change the plan.'",
     "Groups begin playing their small-sided game using their current approach.",
     "Any player can give the agreed signal during play when they think the plan isn't working, and the whole team practises responding to it quickly.",
     "Keep play continuous — the signal is meant to trigger an in-game adjustment, not a stoppage.",
     "Coach the key message: 'respond to the signal quickly, don't argue about it mid-play.'",
     "For 'easier', only a designated leader can call the switch; for 'harder', any player can call it. The chaos variant gives a bonus point for a switch that clearly improves the game."
    ]
   },
   {
    "name": "New Idea, Old Idea",
    "desc": "Small groups practise proposing a specific new plan (not just 'do something else') after a plan clearly isn't working, and try it out immediately.",
    "coach": "Name the new plan clearly in one sentence.",
    "easier": "Teacher offers example alternative plans.",
    "harder": "Teams generate their own alternative.",
    "chaos": "Role rotation",
    "setup": "Small groups of 4-5 practising in a grid roughly 10m x 10m, one ball per group.",
    "howTo": [
     "Explain the rule: after a plan clearly isn't working, groups must propose a specific new plan — not just 'do something else' — and try it out immediately.",
     "Groups start with their original plan and play until it's clear it isn't working (or the teacher signals a check).",
     "The team quickly names a specific alternative plan in one sentence, then puts it into action straight away.",
     "Repeat with a few different starting plans across the activity so students get practice both failing and adapting.",
     "Coach the key message: 'name the new plan clearly in one sentence.'",
     "For 'easier', the teacher offers example alternative plans; for 'harder', teams generate their own alternative. The chaos variant rotates roles."
    ]
   }
  ],
  "big": {
   "name": "Adapt or Lose",
   "desc": "Small-sided round-robin where teams that visibly notice a failing plan and adapt to a new one within the same game earn a bonus point, rewarding adaptability over stubbornness.",
   "setup": "Two or more teams of 4-5 playing round-robin small-sided games in a grid roughly 15m x 12m, bibs to separate teams, one ball per game.",
   "howTo": [
    "Explain the scoring before play starts: teams that visibly notice a failing plan and adapt to a new one within the same game earn a bonus point, rewarding adaptability over stubbornness.",
    "Start each round with teams choosing and briefly stating their initial plan.",
    "Play a normal small-sided game, watching for a moment where a team's plan clearly isn't working.",
    "When a team visibly switches to a new, named plan mid-game, the teacher awards the bonus point without stopping play for long.",
    "Rotate opponents between rounds so teams practise adapting against a range of playing styles.",
    "Coach the key message from the block's focus: praise the team that changes tack early over one that keeps trying a plan that clearly isn't working."
   ]
  },
  "discussion": [
   "How did you know your plan wasn't working today?",
   "What made it easier or harder to actually change the plan mid-game?",
   "What happened when your team stuck with a plan that clearly wasn't working?"
  ],
  "lookfors": [
   "Notices honestly when a team plan isn't working",
   "Suggests a specific alternative rather than a vague call for change",
   "Supports a teammate's suggested change of plan"
  ],
  "inclusion": "Give quieter students a clear, low-pressure way to signal a plan change (e.g. a hand action) rather than relying only on speaking up; model honest, blame-free plan reviews.",
  "skillBreakdown": [
   {
    "step": "Notice honestly when a plan isn't working, rather than just repeating it.",
    "why": "Sticking with a failing plan out of habit is one of the most common and avoidable mistakes in team games."
   },
   {
    "step": "Suggest a specific change, not just 'try something different.'",
    "why": "A specific new idea is far easier for a team to actually act on than a vague call for change."
   },
   {
    "step": "Support a teammate's suggested change even if it wasn't your idea.",
    "why": "A team that adapts together, without arguing over whose idea it was, adapts faster and better."
   }
  ],
  "value": "Pānga",
  "valueText": "Seeing how your role today connects to the bigger team effort — a small contribution that matters once it's put together with everyone else's."
 },
 {
  "n": 13,
  "block": 3,
  "title": "Set Plays",
  "focus": "Using a simple pre-planned team strategy or set play",
  "walt": "We are learning to use a simple, pre-planned team play and execute it together on a signal.",
  "wilf": [
   "I can learn and remember my role in a simple team set play",
   "I can execute a set play on a clear signal with my team"
  ],
  "nzc": "Strand B, C · Relating to others",
  "equipment": "Bibs, balls, cones marking set positions",
  "safety": "Standard spacing; walk through set plays slowly before adding speed",
  "games": [
   {
    "name": "Walk the Play",
    "desc": "Teams walk slowly through a simple 3-player set play — for example a decoy run, a pass, and a run into space — without pressure, learning their specific roles.",
    "coach": "Know your job in the play before adding any speed.",
    "easier": "Teacher talks the team through each step.",
    "harder": "Team must run it from memory without prompts.",
    "chaos": "n/a",
    "setup": "Teams of 3 walking through a marked-out grid roughly 10m x 8m with cones showing set starting positions for a simple 3-player set play (a decoy run, a pass, and a run into space).",
    "howTo": [
     "Demonstrate the full set play once at walking pace so students can see the whole sequence before splitting into roles.",
     "Assign each of the 3 players a specific role — decoy runner, passer, and the player running into space.",
     "Walk through the play slowly and without pressure, focusing on each player knowing exactly where to move and when.",
     "Repeat the walk-through several times, swapping roles so everyone experiences each part of the play.",
     "Coach the key message: 'know your job in the play before adding any speed.'",
     "For 'easier', the teacher talks the team through each step as they walk; for 'harder', the team must run it from memory without prompts."
    ]
   },
   {
    "name": "Signal & Execute",
    "desc": "Teams practise their set play at game speed, triggered only by a clear agreed signal — a call or hand action — from a teammate.",
    "coach": "Wait for the signal, then commit fully.",
    "easier": "Signal given with plenty of warning.",
    "harder": "Signal given at an unpredictable moment.",
    "chaos": "Role rotation within the play",
    "setup": "Teams of 3 in the same grid roughly 10m x 8m, now practising the set play at game speed, one ball per team, an agreed signal (a call or hand action) to trigger the play.",
    "howTo": [
     "Confirm the team's agreed signal before starting — a specific word or hand action that any teammate can give to trigger the play.",
     "Teams begin in a normal small-sided or passing situation, waiting for the signal.",
     "When the signal is given, all three players execute their roles from the set play at full game speed.",
     "Reset to starting positions after each execution and repeat several times.",
     "Coach the key message: 'wait for the signal, then commit fully.'",
     "For 'easier', give the signal with plenty of warning; for 'harder', give it at an unpredictable moment. The chaos variant rotates roles within the play."
    ]
   },
   {
    "name": "Read the Play",
    "desc": "One team runs their set play while an opposing pair tries to read and defend it after seeing it once or twice.",
    "coach": "Have your backup ready if they read it.",
    "easier": "Defenders react passively at first.",
    "harder": "Defenders actively try to shut the play down.",
    "chaos": "Bonus point for an attacking team that adapts their play successfully",
    "setup": "One team of 3 running their set play against an opposing pair of defenders in a grid roughly 10m x 8m, one ball per group.",
    "howTo": [
     "The attacking team runs their set play once or twice at game speed while the defending pair simply observes without full pressure.",
     "After seeing it once or twice, the defending pair tries to read and actively defend the set play on subsequent attempts.",
     "The attacking team notices whether their play is being read and, if so, tries a small adjustment to keep it working.",
     "Swap which team is attacking and which is defending after several attempts.",
     "Coach the key message: 'have your backup ready if they read it,' linking back to earlier lessons on backup plans.",
     "For 'easier', defenders react passively at first; for 'harder', defenders actively try to shut the play down. The chaos variant gives a bonus point to an attacking team that adapts their play successfully."
    ]
   }
  ],
  "big": {
   "name": "Set Play Showdown",
   "desc": "Small-sided games where teams earn a bonus point for successfully executing a learned set play, and an extra bonus for adapting it smoothly once an opponent starts to read it.",
   "setup": "Two teams of 4-5 in a grid roughly 15m x 12m, bibs to separate teams, one ball per game, each team having practised one simple set play beforehand.",
   "howTo": [
    "Explain the scoring before play starts: teams earn a bonus point for successfully executing their learned set play, and an extra bonus for adapting it smoothly once an opponent starts to read and defend it.",
    "Start play from the centre of the grid with teams in their own half, free to call their set play whenever the signal condition is right.",
    "Play a normal small-sided game, with teams triggering their practised set play at opportune moments.",
    "On any stoppage, restart quickly with a short pass-in, keeping the game flowing.",
    "Rotate ends or opponents every few minutes if running multiple short games.",
    "Coach the key message from the block's focus: praise a team that notices their play being read and adjusts it, not just one that scores from the play working cleanly."
   ]
  },
  "discussion": [
   "What was your specific role in the set play today?",
   "What made the timing of the play work well, or fall apart?",
   "What did your team do when an opponent started reading the play?"
  ],
  "lookfors": [
   "Knows and executes their specific role in a set play",
   "Times their action to a clear team signal",
   "Helps adapt the play when it's being read by opponents"
  ],
  "inclusion": "Use consistent, simple language and visual markers for each role so set plays are easy to remember; allow extra walk-through repetitions before adding speed or opposition.",
  "skillBreakdown": [
   {
    "step": "Learn your specific role within a simple team set play.",
    "why": "A set play only works if every player knows and trusts their own specific job within it."
   },
   {
    "step": "Execute your role on a clear team signal, at the right moment.",
    "why": "Good timing is often what separates a set play that works from one that falls apart."
   },
   {
    "step": "Stay ready to adapt the set play if the opposition reads it.",
    "why": "Even a great set play needs a backup once opponents start to recognise and defend it."
   }
  ],
  "value": "Aroha",
  "valueText": "Being patient and encouraging with teammates whose skills or confidence look different from yours, and treating everyone with kindness whether the game is going well or not."
 },
 {
  "n": 14,
  "block": 3,
  "title": "Change of Plan",
  "focus": "Reading an opponent's tactics and adjusting the team's approach in response",
  "walt": "We are learning to read how an opponent is playing and adjust our team's tactics to counter it.",
  "wilf": [
   "I can notice a specific tactic an opponent is using against us",
   "I can help my team adjust our tactics in response"
  ],
  "nzc": "Strand B, C",
  "equipment": "Bibs, balls, cones",
  "safety": "Standard spacing across simultaneous games",
  "games": [
   {
    "name": "Spot Their Tactic",
    "desc": "Short small-sided rounds against the same opponent, where teams pause briefly afterwards to name one specific tactic the opponent used.",
    "coach": "Be specific — where, when, how.",
    "easier": "Teacher helps identify the tactic.",
    "harder": "Teams identify it independently.",
    "chaos": "n/a",
    "setup": "Groups of 4-5 playing short small-sided rounds against the same opponent in a grid roughly 10m x 10m, one ball per group.",
    "howTo": [
     "Play a short round (2-3 minutes) against the same opponent with no analysis yet, just normal play.",
     "After the round, pause briefly and have each team name one specific tactic the opponent used — for example, always attacking down one side, or a particular passing pattern.",
     "Coach the key message: 'be specific — where, when, how,' rather than a vague statement like 'they were good at passing.'",
     "Record or remember the spotted tactic, since it feeds directly into the next game, Counter It.",
     "For 'easier', the teacher helps identify the tactic; for 'harder', teams identify it independently."
    ]
   },
   {
    "name": "Counter It",
    "desc": "After spotting an opponent's tactic, teams propose and try one specific counter-adjustment in the next short round.",
    "coach": "Match your adjustment to their specific tactic.",
    "easier": "Teacher offers example counters to choose from.",
    "harder": "Teams generate their own counter.",
    "chaos": "Bonus point for a counter that clearly works",
    "setup": "Same groups of 4-5 and same grid roughly 10m x 10m, continuing directly from Spot Their Tactic, one ball per group.",
    "howTo": [
     "Using the tactic identified in the previous game, each team proposes one specific counter-adjustment to try — for example, doubling up on the side the opponent favours.",
     "Teams state their planned counter clearly before the next short round begins.",
     "Play a further short round (2-3 minutes) attempting the counter-adjustment against the same opponent.",
     "After the round, briefly note whether the counter worked, setting up the next game, Give It a Fair Go.",
     "Coach the key message: 'match your adjustment to their specific tactic.'",
     "For 'easier', the teacher offers example counters to choose from; for 'harder', teams generate their own counter. The chaos variant gives a bonus point for a counter that clearly works."
    ]
   },
   {
    "name": "Give It a Fair Go",
    "desc": "Teams commit to trying their tactical adjustment for a full short round before deciding whether to keep it, tweak it, or try something else.",
    "coach": "Don't judge it after one play — give it a real go.",
    "easier": "Longer trial round.",
    "harder": "Shorter trial round, quicker decision needed.",
    "chaos": "Role rotation",
    "setup": "Same groups of 4-5 continuing from Counter It, in the same grid roughly 10m x 10m, one ball per group.",
    "howTo": [
     "Remind teams of the rule: they must commit to trying their tactical adjustment for a full short round before deciding whether to keep it, tweak it, or try something else.",
     "Play a full short round (3-4 minutes) using the adjustment consistently, without switching back to the old approach partway through.",
     "After the round, teams decide together whether to keep the adjustment as is, tweak it slightly, or move on to a different idea.",
     "If time allows, play a further short round with the refined approach.",
     "Coach the key message: 'don't judge it after one play — give it a real go.'",
     "For 'easier', use a longer trial round; for 'harder', use a shorter trial round requiring a quicker decision."
    ]
   }
  ],
  "big": {
   "name": "Tactical Chess",
   "desc": "Round-robin small-sided games against rotating opponents, where teams earn a bonus point for identifying an opponent's tactic and successfully adjusting to counter it.",
   "setup": "Two or more teams of 4-5 playing round-robin small-sided games against rotating opponents, in a grid roughly 15m x 12m, bibs to separate teams, one ball per game.",
   "howTo": [
    "Explain the scoring before play starts: teams earn a bonus point for identifying an opponent's tactic and successfully adjusting to counter it, on top of standard scoring.",
    "Play a short opening round against the first opponent to allow tactics to emerge naturally.",
    "In the following round against a new opponent, encourage teams to spot and name a tactic, then try a specific counter-adjustment.",
    "On any stoppage, restart quickly with the ball to the appropriate team.",
    "Rotate opponents every couple of rounds so students practise this spot-and-counter process against a range of playing styles.",
    "Coach the key message from the block's focus: praise a specific, named tactic and counter over a general 'we played better that time.'"
   ]
  },
  "discussion": [
   "What specific tactic did you notice an opponent using today?",
   "How did your team's counter-adjustment work out?",
   "What's the difference between judging a new tactic too early and giving it a fair go?"
  ],
  "lookfors": [
   "Notices a specific tactic an opponent is using",
   "Contributes to or supports a specific team counter-adjustment",
   "Gives a new tactical adjustment a fair, genuine try"
  ],
  "inclusion": "Support teams in naming tactics specifically by offering simple example language ('they keep doing X'); ensure all voices are heard when proposing a counter-adjustment.",
  "skillBreakdown": [
   {
    "step": "Notice a specific tactic an opponent is using, not just that 'they're good.'",
    "why": "A specific observation, like 'they're always doubling up on our left side,' is something a team can actually respond to."
   },
   {
    "step": "Suggest a specific counter-adjustment as a team.",
    "why": "Matching a specific problem with a specific solution is what turns a good read into a useful tactical change."
   },
   {
    "step": "Give the new adjustment a genuine go before judging whether it worked.",
    "why": "A tactical change needs a fair try before a team decides whether to keep it or try something else."
   }
  ],
  "value": "Mōhio",
  "valueText": "Understanding your own strengths and how you fit into the team, and noticing what your teammates need from you in order to do their best."
 },
 {
  "n": 15,
  "block": 3,
  "title": "Captain's Call",
  "focus": "Team-captain-style decision-making, combining reading, adapting, and set plays (Block 3 wrap-up)",
  "walt": "We are learning to make and communicate confident tactical decisions in a captain-style role, combining everything from this block.",
  "wilf": [
   "I can make a confident tactical call when it's my turn to lead",
   "I can follow and support a teammate's tactical call when it's theirs"
  ],
  "nzc": "Strand B, C · Relating to others",
  "equipment": "Bibs, balls, cones — combined equipment from Block 3 games for the wrap-up carousel",
  "safety": "Standard spacing across simultaneous games; agreed, fair rotation of the captain role",
  "games": [
   {
    "name": "Captain Carousel",
    "desc": "In small groups, the 'captain' role rotates every few minutes, with each captain responsible for calling one tactical decision — a pattern spotted, a plan change, a set play — during their turn.",
    "coach": "Make your call, then trust your team to follow it.",
    "easier": "Teacher supports the captain's first few calls.",
    "harder": "Captain makes calls independently.",
    "chaos": "Rapid captain rotation",
    "setup": "Small groups of 4-5 playing small-sided games in a grid roughly 10m x 10m, one ball per group, with a rotating 'captain' role.",
    "howTo": [
     "Explain the rule: the captain role rotates every few minutes, and whoever is captain is responsible for calling one tactical decision — a spotted pattern, a plan change, or a set play — during their turn.",
     "Assign the first captain and begin play, with the captain watching for a moment to make their call.",
     "The captain makes their tactical call during play, and the team follows it as best they can.",
     "Rotate the captain role on the teacher's signal (every 2-3 minutes) so everyone gets a turn.",
     "Coach the key message: 'make your call, then trust your team to follow it.'",
     "For 'easier', the teacher supports the captain's first few calls; for 'harder', the captain makes calls independently. The chaos variant speeds up captain rotation."
    ]
   },
   {
    "name": "Call and Commit",
    "desc": "Small-sided games where whoever is captain that round must make one clear tactical call at least once during play, and the team must commit to it fully.",
    "coach": "Commit to the call, question it afterwards, not during.",
    "easier": "Captain given a menu of call options.",
    "harder": "Captain generates their own call.",
    "chaos": "n/a",
    "setup": "Small groups of 4-5 playing small-sided games in a grid roughly 10m x 10m, one ball per group, a designated captain for each round.",
    "howTo": [
     "Explain the rule: whoever is captain that round must make one clear tactical call at least once during play, and the whole team must commit to it fully.",
     "Begin the round with the captain identified and play starting normally.",
     "At some point during the round, the captain makes their one clear call, and teammates follow it without arguing mid-play.",
     "After the round ends, the team can briefly discuss whether the call worked well.",
     "Coach the key message: 'commit to the call, question it afterwards, not during.'",
     "For 'easier', the captain is given a menu of call options; for 'harder', the captain generates their own call."
    ]
   },
   {
    "name": "Leadership Feedback",
    "desc": "After each captain's turn, teammates briefly and kindly share one thing that worked well about their tactical call.",
    "coach": "Specific and genuine feedback only.",
    "easier": "Teacher models the first round of feedback.",
    "harder": "Students lead feedback independently.",
    "chaos": "Role rotation",
    "setup": "Small groups of 4-5, gathering briefly after each captain's turn in or near the playing grid, no extra equipment needed.",
    "howTo": [
     "After each captain's turn ends, gather the group briefly for feedback.",
     "Each teammate shares one specific and kind thing that worked well about the captain's tactical call.",
     "Keep feedback short — one sentence per student is enough — and always positive and specific, not critical.",
     "Move on to the next captain's turn once feedback is done, keeping transitions quick.",
     "Coach the key message: 'specific and genuine feedback only.'",
     "For 'easier', the teacher models the first round of feedback; for 'harder', students lead feedback independently. The chaos variant rotates roles."
    ]
   }
  ],
  "big": {
   "name": "Captain's Cup",
   "desc": "Small-sided round-robin where the captain role rotates through every player across the games, and teams earn a bonus point for confident tactical calls and for the team's full commitment to whoever is leading.",
   "setup": "Two or more teams of 4-5 playing a small-sided round-robin in a grid roughly 15m x 12m, bibs to separate teams, one ball per game, with the captain role rotating through every player across the games.",
   "howTo": [
    "Explain the scoring before play starts: teams earn a bonus point for confident tactical calls from whoever is captain, and for the whole team's full commitment to following whoever is leading.",
    "Assign the first captain for each team and begin the round-robin games from the centre of the grid.",
    "Play normally, with each captain making at least one tactical call during their turn as captain.",
    "Rotate the captain role at set intervals (e.g. every game or every few minutes) so every player leads at least once.",
    "On any stoppage, restart quickly with a short pass-in, keeping the round-robin moving.",
    "Coach the key message from the whole block: praise confident calls and full team commitment to the leader, since this lesson wraps up Block 3's focus on reading patterns, adapting plans, and set plays, before Block 4 moves into full game plans and pressure."
   ]
  },
  "discussion": [
   "What was it like making a tactical call as captain today?",
   "What made it easier to follow someone else's call, even if it wasn't your idea?",
   "Looking back over this block, what's improved most in how your team reads and adapts?"
  ],
  "lookfors": [
   "Makes a confident tactical call when leading",
   "Communicates a call clearly to the team",
   "Supports and commits to a teammate's call when someone else is leading"
  ],
  "inclusion": "Ensure the captain role rotates fairly so every student gets a genuine turn, including quieter students; offer sentence starters ('Let's try...') for students who find leading aloud harder.",
  "skillBreakdown": [
   {
    "step": "Combine pattern-reading, adapting, and set plays into one confident tactical call when it's your turn to lead.",
    "why": "This block's skills come together fully in the role of making a real call for the team, not just contributing an idea."
   },
   {
    "step": "Communicate your call clearly and confidently to your team.",
    "why": "Even a good tactical idea needs to be communicated clearly to actually help the team."
   },
   {
    "step": "Support a teammate's call fully when it's their turn to lead.",
    "why": "A team practises leadership best when every player gets a genuine turn, and every player backs whoever's leading."
   }
  ],
  "value": "Manaaki",
  "valueText": "Looking after your teammates' success as much as your own — including, encouraging, and setting others up to succeed."
 },
 {
  "n": 16,
  "block": 4,
  "title": "Game Plan Huddle",
  "focus": "Building and communicating a team game plan before playing",
  "walt": "We are learning to build a simple team game plan together before a game and communicate it clearly to everyone.",
  "wilf": [
   "I can contribute an idea to a team game plan",
   "I can explain the team's game plan clearly if asked"
  ],
  "nzc": "Strand B, C · Relating to others",
  "equipment": "Bibs, balls, cones",
  "safety": "Standard spacing across simultaneous games; keep huddle time brief and structured",
  "games": [
   {
    "name": "Huddle Up",
    "desc": "Before short small-sided games, teams have one minute to huddle and agree a simple game plan — for example, one tactic to try, and one role each.",
    "coach": "Keep it simple — one or two things, not ten.",
    "easier": "Teacher offers a simple plan template to fill in.",
    "harder": "Teams build their plan entirely independently.",
    "chaos": "n/a",
    "setup": "Small teams of 4-5 gathering for a timed one-minute huddle before short small-sided games in a grid roughly 12m x 10m, one ball per game.",
    "howTo": [
     "Explain the rule before starting: each team gets exactly one minute to huddle and agree a simple game plan — for example, one tactic to try and one role each.",
     "Give teams their one-minute huddle, timed clearly so it doesn't drag on.",
     "At the end of the huddle, teams begin their short game trying to put the agreed plan into action.",
     "On any stoppage during the game, restart quickly without a fresh huddle — the plan should carry through the whole game.",
     "Coach the key message: 'keep it simple — one or two things, not ten.'",
     "For 'easier', the teacher offers a simple plan template to fill in; for 'harder', teams build their plan entirely independently."
    ]
   },
   {
    "name": "Explain the Plan",
    "desc": "Immediately after huddling, the teacher randomly asks one player from each team to explain the team's plan in one or two sentences.",
    "coach": "Know the plan well enough to say it simply.",
    "easier": "Teacher helps if a player gets stuck.",
    "harder": "Player must explain without any prompting.",
    "chaos": "Random player chosen each time",
    "setup": "Same small teams of 4-5, immediately after huddling in Huddle Up, in the same grid roughly 12m x 10m.",
    "howTo": [
     "Immediately after the huddle ends, the teacher randomly asks one player from each team to explain the team's plan in one or two sentences.",
     "The chosen player states the plan clearly and briefly before the game begins.",
     "If the explanation is vague, the teacher can ask one quick follow-up question to sharpen it.",
     "Once every team has explained their plan, games begin normally.",
     "Coach the key message: 'know the plan well enough to say it simply.'",
     "For 'easier', the teacher helps if a player gets stuck; for 'harder', the player must explain without any prompting. The chaos variant picks a random player each time so everyone needs to know the plan."
    ]
   },
   {
    "name": "Plan in Action",
    "desc": "Teams play a short game trying specifically to use their huddled plan, then briefly discuss afterwards how closely they followed it.",
    "coach": "Notice where you stuck to the plan and where you didn't.",
    "easier": "Simple plan, generous time to try it.",
    "harder": "Teams must adjust the plan mid-game if needed.",
    "chaos": "Role rotation",
    "setup": "Same small teams of 4-5, playing a short game in the grid roughly 12m x 10m, one ball per game.",
    "howTo": [
     "Teams play a short game (3-4 minutes) specifically trying to use the plan they huddled and explained.",
     "Players focus on their agreed roles and the one tactic chosen, without over-complicating things mid-game.",
     "After the short game ends, teams briefly discuss how closely they actually followed their plan.",
     "Use this discussion to feed into the next huddle if playing another round.",
     "Coach the key message: 'notice where you stuck to the plan and where you didn't.'",
     "For 'easier', use a simple plan with generous time to try it; for 'harder', teams must adjust the plan mid-game if needed."
    ]
   }
  ],
  "big": {
   "name": "Huddle & Play",
   "desc": "Small-sided round-robin where every team huddles briefly before each game to build and communicate a simple game plan, then plays it out, discussing afterwards how well the plan worked.",
   "setup": "Two or more teams of 4-5 playing a small-sided round-robin in a grid roughly 15m x 12m, bibs to separate teams, one ball per game, with a brief huddle built in before each game.",
   "howTo": [
    "Explain the format before play starts: every team huddles briefly before each round-robin game to build and communicate a simple game plan, then plays it out.",
    "Give each team their timed huddle before the round begins.",
    "Play a normal small-sided game, with teams trying to follow through on their huddled plan.",
    "After each game, teams discuss briefly how well the plan worked before huddling again for the next round.",
    "Rotate opponents between rounds so teams get practice building fresh plans against different opposition.",
    "Coach the key message from today's focus: praise teams whose plan is simple, clear, and actually followed through — not just an ambitious plan that falls apart in play."
   ]
  },
  "discussion": [
   "What did your team's game plan actually include today?",
   "What made a plan easy or hard for everyone to remember?",
   "What happened when you explained the plan to someone else?"
  ],
  "lookfors": [
   "Contributes an idea to a team game plan",
   "Keeps a plan simple enough for the whole team to remember",
   "Can explain the team's plan clearly when asked"
  ],
  "inclusion": "Provide a simple plan template (one tactic, one role reminder) for teams who find open-ended planning harder; ensure every player gets a genuine chance to contribute during the huddle.",
  "skillBreakdown": [
   {
    "step": "Contribute at least one clear idea to a team game plan before playing.",
    "why": "A game plan is stronger when it draws on more than one player's read of the game."
   },
   {
    "step": "Keep the plan simple enough that every player can actually remember it.",
    "why": "A complicated plan that nobody remembers under pressure isn't actually useful once the game starts."
   },
   {
    "step": "Be able to explain the team's plan clearly if asked, not just follow it silently.",
    "why": "Understanding the plan, not just going along with it, is what lets you adapt it well later if needed."
   }
  ],
  "value": "Pānga",
  "valueText": "Seeing how your role today connects to the bigger team effort — a small contribution that matters once it's put together with everyone else's."
 },
 {
  "n": 17,
  "block": 4,
  "title": "Clutch Calls",
  "focus": "Decision-making in high-pressure, late-game moments",
  "walt": "We are learning to make clear, confident decisions in high-pressure, late-game moments.",
  "wilf": [
   "I can make a clear decision in a high-pressure, late-game moment",
   "I can stay composed and supportive of teammates under pressure"
  ],
  "nzc": "Strand B, C",
  "equipment": "Balls, bibs, cones",
  "safety": "Standard spacing; remind students composure matters as much as speed under pressure",
  "games": [
   {
    "name": "Final Minute",
    "desc": "Short small-sided games with a genuine time pressure element — a visible countdown or a 'final minute' call — requiring a clear decision before time runs out.",
    "coach": "Use your final seconds calmly, not in a panic.",
    "easier": "Longer time windows.",
    "harder": "Very short, high-pressure windows.",
    "chaos": "Sudden score change announced to raise stakes",
    "setup": "Small teams of 4-5 playing short small-sided games in a grid roughly 12m x 10m, one ball per game, a visible countdown timer or clock.",
    "howTo": [
     "Explain the rule before starting: the game includes a genuine time pressure element — a visible countdown or a 'final minute' call — requiring a clear decision before time runs out.",
     "Play the game normally for the first portion of time.",
     "As the countdown reaches its final stage (or the teacher calls 'final minute!'), teams must make and commit to a clear decision before time expires.",
     "When time runs out, note the result and reset for another short round.",
     "Coach the key message: 'use your final seconds calmly, not in a panic.'",
     "For 'easier', use longer time windows; for 'harder', use very short, high-pressure windows. The chaos variant announces a sudden score change to raise the stakes."
    ]
   },
   {
    "name": "Composure Check",
    "desc": "Partner or small-group activities where the teacher deliberately raises the pressure — noise, a countdown, an audience — and checks whether players' decision-making stays clear and composed.",
    "coach": "Notice your own breathing and body language under pressure.",
    "easier": "Pressure introduced gradually.",
    "harder": "Pressure introduced suddenly and intensely.",
    "chaos": "n/a",
    "setup": "Partner or small-group activities (groups of 3-4) in a space roughly 8m x 8m, no ball strictly required, optional noise-makers or an 'audience' of watching classmates.",
    "howTo": [
     "Explain the idea: the teacher will deliberately raise the pressure — with noise, a countdown, or an audience — while checking whether players' decision-making stays clear and composed.",
     "Students perform a simple decision-based activity (e.g. a quick pass-and-decide sequence) under normal conditions first.",
     "The teacher then adds a pressure element — noise, a countdown, or onlookers — and students repeat the activity.",
     "After each round, briefly ask how the added pressure felt and whether decisions stayed clear.",
     "Coach the key message: 'notice your own breathing and body language under pressure.'",
     "For 'easier', introduce pressure gradually; for 'harder', introduce it suddenly and intensely."
    ]
   },
   {
    "name": "Support After a Slip",
    "desc": "In small games, any mistake in a high-pressure moment must be met immediately with genuine, specific encouragement from teammates before play restarts.",
    "coach": "Encourage first, reset second.",
    "easier": "Teacher prompts the encouragement.",
    "harder": "Team must self-manage without prompts.",
    "chaos": "Bonus point for the fastest genuine encouragement",
    "setup": "Small groups of 4-5 playing small-sided games in a grid roughly 10m x 10m, one ball per group.",
    "howTo": [
     "Explain the rule: any mistake made during a high-pressure moment must be met immediately with genuine, specific encouragement from teammates before play restarts.",
     "Groups play a normal small-sided game with genuine pressure moments arising naturally.",
     "When a mistake happens under pressure, teammates immediately offer a specific piece of encouragement (not a generic 'good try') before the next action.",
     "Play resumes straight after the encouragement — this should feel quick and natural, not staged.",
     "Coach the key message: 'encourage first, reset second.'",
     "For 'easier', the teacher prompts the encouragement; for 'harder', the team must self-manage without prompts. The chaos variant gives a bonus point for the fastest genuine encouragement."
    ]
   }
  ],
  "big": {
   "name": "Clutch Cup",
   "desc": "Small-sided games with genuine late-game pressure moments — close scores, visible countdowns — rewarding teams for clear decisions and supportive communication under real pressure.",
   "setup": "Two teams of 4-5 in a grid roughly 15m x 12m, bibs to separate teams, one ball per game, close scores or a visible countdown built into the format to create genuine late-game pressure.",
   "howTo": [
    "Explain the scoring before play starts: teams are rewarded for clear decisions and supportive communication under real late-game pressure, on top of standard scoring.",
    "Start play from the centre of the grid with teams in their own half, ideally with scores kept close through the scoring system used.",
    "Play a normal small-sided game with a visible countdown or clearly announced close score to build genuine pressure as the game nears its end.",
    "On any stoppage or mistake under pressure, restart quickly and expect teammates to offer quick encouragement before play resumes.",
    "Rotate ends or opponents every few minutes if running multiple short games.",
    "Coach the key message from today's focus: notice and praise composed decisions and supportive team communication in the pressure moments, not just who wins the close finish."
   ]
  },
  "discussion": [
   "What did a genuinely clutch moment feel like today?",
   "What helped you stay composed rather than rushing or freezing?",
   "How did your team support each other under real pressure?"
  ],
  "lookfors": [
   "Makes a clear decision in a high-pressure, late-game moment",
   "Shows composure (calm body, clear head) under pressure",
   "Stays supportive of teammates, especially after a pressure-moment mistake"
  ],
  "inclusion": "Build pressure gradually across the lesson so no student is overwhelmed early; model calm, supportive language for teammates to use after a high-pressure mistake.",
  "skillBreakdown": [
   {
    "step": "Make a clear decision even when a game moment feels high-pressure or 'clutch.'",
    "why": "The skills built across this whole unit matter most in exactly these moments — that's what they're for."
   },
   {
    "step": "Stay composed rather than letting pressure rush or freeze your decision.",
    "why": "A composed player usually makes a better late-game decision than a panicked one, even under the same time pressure."
   },
   {
    "step": "Stay supportive of teammates in high-pressure moments, especially after a mistake.",
    "why": "A team that stays encouraging under real pressure keeps making good decisions for longer than one that turns on itself."
   }
  ],
  "value": "Aroha",
  "valueText": "Being patient and encouraging with teammates whose skills or confidence look different from yours, and treating everyone with kindness whether the game is going well or not."
 },
 {
  "n": 18,
  "block": 4,
  "title": "Scout the Opposition",
  "focus": "Reading and adapting to an unfamiliar opponent's style",
  "walt": "We are learning to read an unfamiliar opponent's style quickly and adapt our approach to it.",
  "wilf": [
   "I can identify something specific about an unfamiliar opponent's style early in a game",
   "I can adjust my team's approach based on what we noticed"
  ],
  "nzc": "Strand B, C · Thinking",
  "equipment": "Bibs, balls, cones",
  "safety": "Standard spacing across simultaneous, rotating games",
  "games": [
   {
    "name": "First Five Minutes",
    "desc": "Teams rotate through short games against unfamiliar opponents, focusing specifically on identifying one thing about the new opponent's style in the first few minutes.",
    "coach": "Watch closely before you judge.",
    "easier": "Longer observation window.",
    "harder": "Shorter observation window, quicker read required.",
    "chaos": "Opponent rotation speeds up",
    "setup": "Teams of 4-5 rotating through short games against unfamiliar opponents, in a grid roughly 12m x 10m, one ball per game.",
    "howTo": [
     "Explain the rule before starting: in the first few minutes against a new, unfamiliar opponent, teams focus specifically on identifying one thing about the opponent's style.",
     "Begin the short game against the new opponent, playing normally while actively observing.",
     "Within the observation window, players note something specific — a favourite side, a passing habit, their pace of play.",
     "Continue playing the rest of the short game as normal once the observation window has passed.",
     "Coach the key message: 'watch closely before you judge.'",
     "For 'easier', use a longer observation window; for 'harder', use a shorter window requiring a quicker read. The chaos variant speeds up opponent rotation."
    ]
   },
   {
    "name": "Report Back",
    "desc": "Immediately after the observation window, each team quickly reports one specific thing they noticed about their opponent to the teacher or another team.",
    "coach": "Be specific, not general.",
    "easier": "Teacher offers example observation categories (speed, passing style, favourite space).",
    "harder": "Teams generate their own categories.",
    "chaos": "n/a",
    "setup": "Same teams of 4-5, gathering briefly immediately after the observation window from First Five Minutes, near the playing grid.",
    "howTo": [
     "Immediately after the observation window ends, gather each team briefly.",
     "Each team quickly reports one specific thing they noticed about their opponent to the teacher or to another team.",
     "Keep reports short and specific — a single clear sentence is enough.",
     "Move quickly back into play once reports are given, so momentum isn't lost.",
     "Coach the key message: 'be specific, not general.'",
     "For 'easier', the teacher offers example observation categories (speed, passing style, favourite space); for 'harder', teams generate their own categories."
    ]
   },
   {
    "name": "Adjust and Play",
    "desc": "Teams use their scouting observation to make one specific adjustment to their approach for the rest of the game against that opponent.",
    "coach": "Match your adjustment to what you actually saw.",
    "easier": "Teacher supports the adjustment idea.",
    "harder": "Teams generate their own adjustment.",
    "chaos": "Role rotation",
    "setup": "Same teams of 4-5, continuing their game against the same opponent in the grid roughly 12m x 10m, one ball per game.",
    "howTo": [
     "Using the observation reported in Report Back, each team decides on one specific adjustment to their approach for the rest of the game against that opponent.",
     "Teams state their planned adjustment clearly before play resumes.",
     "Play the remainder of the game trying to put the adjustment into practice.",
     "After the game, briefly note whether the adjustment worked, ready for the next opponent rotation.",
     "Coach the key message: 'match your adjustment to what you actually saw.'",
     "For 'easier', the teacher supports the adjustment idea; for 'harder', teams generate their own adjustment. The chaos variant rotates roles."
    ]
   }
  ],
  "big": {
   "name": "Scout & Adapt Tournament",
   "desc": "Round-robin small-sided games against a rotating set of unfamiliar opponents, where teams earn a bonus point for specific, accurate observations and effective tactical adjustments.",
   "setup": "Multiple teams of 4-5 playing a round-robin against a rotating set of unfamiliar opponents, in a grid roughly 15m x 12m, bibs to separate teams, one ball per game.",
   "howTo": [
    "Explain the scoring before play starts: teams earn a bonus point for specific, accurate observations about a new opponent and for effective tactical adjustments made in response.",
    "Start each round against a new, unfamiliar opponent from the centre of the grid.",
    "In the opening minutes, teams observe and identify something specific about the new opponent's style, as practised in the Skill Games.",
    "Teams then adjust their approach based on that observation for the rest of the round.",
    "Rotate to a new opponent for each round of the round-robin, repeating the observe-and-adjust process each time.",
    "Coach the key message from today's focus: praise teams whose adjustment clearly matches something they genuinely observed, not a random change."
   ]
  },
  "discussion": [
   "What specific thing did you notice about an unfamiliar opponent today?",
   "How did that observation change your team's approach?",
   "What's the risk of assuming things about an opponent instead of watching first?"
  ],
  "lookfors": [
   "Identifies something specific about an unfamiliar opponent's style",
   "Shares observations clearly and quickly with the team",
   "Adjusts the team's approach based on genuine observation"
  ],
  "inclusion": "Offer simple observation categories (speed, passing, favourite space) to support students who find open-ended scouting harder; rotate opponents fairly so every team gets a genuine scouting challenge.",
  "skillBreakdown": [
   {
    "step": "Watch closely in the first few minutes against an unfamiliar opponent to identify something specific about their style.",
    "why": "Every opponent has tendencies, and the first few minutes are often the best chance to spot them before they adjust to you."
   },
   {
    "step": "Share what you noticed with your team quickly.",
    "why": "A quick, specific observation shared early can shape the whole team's approach for the rest of the game."
   },
   {
    "step": "Adjust your team's approach based on genuine observations, not assumptions.",
    "why": "Reacting to what an opponent is actually doing, rather than what you expected, leads to better tactical decisions."
   }
  ],
  "value": "Mōhio",
  "valueText": "Understanding your own strengths and how you fit into the team, and noticing what your teammates need from you in order to do their best."
 },
 {
  "n": 19,
  "block": 4,
  "title": "Strategy Trial Day",
  "focus": "Practice run bringing the whole unit's skills together ahead of the culminating games day",
  "walt": "We are learning to bring together the whole unit's decision-making and tactical skills in full practice games.",
  "wilf": [
   "I can apply a range of strategy and decision-making skills together in a game",
   "I can give and receive tactical feedback constructively with my team"
  ],
  "nzc": "Strands B, C · Thinking, Relating to others",
  "equipment": "Bibs, balls, cones",
  "safety": "Standard spacing across simultaneous games; agreed, fair self-officiating routines to prevent disputes",
  "games": [
   {
    "name": "Warm-Up Strategy Points",
    "desc": "A short warm-up game where students settle into rhythm and remind themselves of key decision-making points from across the unit before full games begin.",
    "coach": "Use this to find your rhythm, not to win.",
    "easier": "Longer warm-up time.",
    "harder": "Shorter warm-up, straight into full games.",
    "chaos": "n/a",
    "setup": "Whole class or large groups playing a short, low-stakes warm-up game in a grid roughly 15m x 12m, one ball per group.",
    "howTo": [
     "Explain the purpose: this is a short warm-up game to settle into rhythm and remind students of key decision-making points from across the unit, not a competitive contest.",
     "Begin a light small-sided game, encouraging students to naturally scan, weigh options, and communicate as they've practised all unit.",
     "As play continues, briefly call out reminders of unit themes — scanning, numbers, backup plans, composure — without stopping play for long.",
     "Keep the intensity moderate, saving full effort for the practice matches that follow.",
     "Coach the key message: 'use this to find your rhythm, not to win.'",
     "For 'easier', allow a longer warm-up time; for 'harder', shorten the warm-up and move straight into full games."
    ]
   },
   {
    "name": "Skill Focus Choice",
    "desc": "Each student picks one strategy or decision-making skill from the unit — scanning, reading numbers, staying composed — to focus on today, and gets brief feedback on it during play.",
    "coach": "Pick something you genuinely want to improve, not just something easy.",
    "easier": "Teacher or peer suggests a focus.",
    "harder": "Student justifies their own choice of focus.",
    "chaos": "Role rotation",
    "setup": "Individual students playing within their small-sided teams in a grid roughly 15m x 12m, one ball per group, each student having chosen a personal focus beforehand.",
    "howTo": [
     "Before play begins, each student picks one strategy or decision-making skill from the unit — scanning, reading numbers, staying composed — to focus on today.",
     "Students play a normal small-sided game while trying to specifically apply their chosen focus.",
     "During play, the teacher gives brief, individual feedback tied to each student's chosen focus when the opportunity arises.",
     "Continue through the game, encouraging students to notice their own focus area in action.",
     "Coach the key message: 'pick something you genuinely want to improve, not just something easy.'",
     "For 'easier', the teacher or a peer suggests a focus; for 'harder', the student must justify their own choice of focus. The chaos variant adds a head-to-head mirror challenge."
    ]
   },
   {
    "name": "Practice Match Sets",
    "desc": "Short practice games played with full rules and scoring, as a run-through before the culminating tournament.",
    "coach": "Treat this like the real thing.",
    "easier": "Shorter games, more generous rules.",
    "harder": "Full-length games, standard rules.",
    "chaos": "Head-to-head mirror",
    "setup": "Full teams playing short practice games with complete rules and scoring, in a grid roughly 15m x 12m, bibs to separate teams, one ball per game.",
    "howTo": [
     "Explain the purpose: these are short practice games played with full rules and scoring, as a run-through before the culminating tournament.",
     "Start the game from the centre of the grid with both teams in their own half, using standard rules and scoring throughout.",
     "Play the game as if it were the real tournament, applying strategy and decision-making skills from across the whole unit.",
     "On any stoppage, restart promptly using normal game procedures.",
     "Coach the key message: 'treat this like the real thing.'",
     "For 'easier', use shorter games with more generous rules; for 'harder', use full-length games with standard rules. The chaos variant adds a head-to-head mirror format."
    ]
   }
  ],
  "big": {
   "name": "Full Strategy Trial Games",
   "desc": "Students play complete small-sided matches, self-officiated, drawing on scanning, risk/reward thinking, reading opponents, adapting plans, and composure under pressure from across the whole unit.",
   "setup": "Full teams playing complete small-sided matches, self-officiated, in a grid roughly 18m x 12m, bibs to separate teams, one ball per game.",
   "howTo": [
    "Explain the format before play starts: students play complete small-sided matches, self-officiated, drawing on everything from across the unit — scanning, risk/reward thinking, reading opponents, adapting plans, and composure under pressure.",
    "Start the match from the centre of the grid with both teams in their own half, using standard rules and full scoring.",
    "Play the complete match with students managing their own calls (out of bounds, fair play) as practice for the culminating games day.",
    "On any stoppage, restart promptly following the agreed self-officiating approach, keeping disputes brief and fair.",
    "If time allows, rotate opponents for a second complete match so more matchups are trialled before the real day.",
    "Coach the key message from today's focus: notice out loud when a team draws on a specific unit skill during the match, connecting it back to where it was first practised."
   ]
  },
  "discussion": [
   "What part of your decision-making are you most confident in going into tomorrow's games day?",
   "Who made a really sharp tactical decision today?",
   "What's one decision-making skill you'd still like to work on?"
  ],
  "lookfors": [
   "Applies a range of strategy and decision-making skills together in one game",
   "Gives and receives tactical feedback constructively",
   "Reflects honestly on decisions without dwelling on mistakes"
  ],
  "inclusion": "Match teams thoughtfully so games are competitive and enjoyable for everyone; offer flexible rules/space adjustments so every game remains genuinely playable and inclusive.",
  "skillBreakdown": [
   {
    "step": "Bring together scanning, risk/reward thinking, reading opponents, adapting plans, and composure under pressure into one connected game.",
    "why": "A real strategic game asks for all of these skills together, often in quick succession — this is the whole unit coming together."
   },
   {
    "step": "Give tactical feedback to teammates constructively, and accept it the same way.",
    "why": "Honest, specific feedback is what helps a team sharpen its decision-making right up to the culminating day."
   },
   {
    "step": "Reflect honestly on which decisions worked and which didn't, without dwelling on mistakes.",
    "why": "A short memory for mistakes, combined with honest reflection, is what lets a team keep improving decision by decision."
   }
  ],
  "value": "Manaaki",
  "valueText": "Looking after your teammates' success as much as your own — including, encouraging, and setting others up to succeed."
 },
 {
  "n": 20,
  "block": 4,
  "title": "Strategy & Decision-Making Games Day",
  "focus": "Culminating multi-game tournament celebrating strategic thinking across the whole unit",
  "walt": "We are learning to apply the whole unit's strategy and decision-making skills in a games day setting, showing fair play and reflecting on our growth.",
  "wilf": [
   "I can apply a range of strategy and decision-making skills from across the unit in competitive games",
   "I can play fairly and make composed, confident decisions throughout the games day"
  ],
  "nzc": "Strands A, B, C, D · all five Key Competencies",
  "equipment": "Bibs, balls, cones, simple draw sheet or rotation chart",
  "safety": "Standard spacing across multiple simultaneous games; clear rotation system so students know where to go next",
  "games": [
   {
    "name": "Skill Circuit Warm-Up",
    "desc": "A quick circuit combining scanning, numbers-reading, and composure under pressure — a whistle-stop reminder of the whole unit before games begin.",
    "coach": "Smooth transitions between stations.",
    "easier": "Longer time per station.",
    "harder": "Shorter time, quicker rotation.",
    "chaos": "Head-to-head mirror, beat the clock",
    "setup": "Three short stations set up around the space combining scanning, numbers-reading, and composure under pressure, groups of 4-5 rotating through, roughly 2 minutes per station.",
    "howTo": [
     "Briefly remind students what each of the three stations is testing, since this is a whistle-stop reminder of the whole unit before games begin.",
     "Groups start at their assigned station and complete a short version of that station's activity.",
     "On the teacher's signal, groups rotate to the next station until all three have been completed.",
     "Keep transitions between stations quick and orderly — equipment stays in place, only students move.",
     "Coach the key message: 'smooth transitions between stations.'",
     "For 'easier', allow longer time per station; for 'harder', shorten the time and speed up rotation. The chaos variant adds a head-to-head, beat-the-clock element."
    ]
   },
   {
    "name": "Team Strategy Challenge",
    "desc": "Before games begin, each team huddles briefly to agree one specific strategic focus they'll try to show off today.",
    "coach": "Make it specific and meaningful to your team.",
    "easier": "n/a",
    "harder": "n/a",
    "chaos": "Role rotation",
    "setup": "Full teams huddling briefly before the games day begins, in or near the main playing area, no extra equipment needed.",
    "howTo": [
     "Explain the rule: before games begin, each team huddles briefly to agree one specific strategic focus they'll try to show off today.",
     "Give each team a short, timed huddle to decide their focus.",
     "Teams state their chosen focus to the teacher (or write it down) before the first game starts.",
     "Throughout the day, teams try to visibly demonstrate their chosen focus during play.",
     "Coach the key message: 'make it specific and meaningful to your team.'",
     "The chaos variant rotates roles within the team for who leads the huddle."
    ]
   },
   {
    "name": "Decision Spotlight",
    "desc": "Throughout the games day, the teacher notices and briefly highlights one sharp decision from each team to the whole group.",
    "coach": "Notice good decisions, not just good outcomes.",
    "easier": "n/a",
    "harder": "n/a",
    "chaos": "Bonus objectives",
    "setup": "Ongoing throughout the games day across all playing areas, no extra equipment needed beyond what each game already uses.",
    "howTo": [
     "Explain the rule: throughout the games day, the teacher notices and briefly highlights one sharp decision from each team to the whole group.",
     "As games progress, the teacher watches for a clear example of good decision-making from each team — a scan, a smart risk, a good adjustment.",
     "At a natural break, briefly and positively highlight the spotted decision to the whole group, naming the team and what they did well.",
     "Continue through the day so every team gets at least one spotlight moment.",
     "Coach the key message: 'notice good decisions, not just good outcomes' — a good decision that didn't quite work still counts.",
     "The chaos variant adds bonus objectives that teams can complete for extra recognition during the day."
    ]
   }
  ],
  "big": {
   "name": "Round-Robin Strategy Games Day",
   "desc": "Students rotate through short strategic games across multiple areas, using simple scoring or a fair-play points system. Every skill from the unit — scanning, risk/reward, reading opponents, adapting, set plays, and composure — is relevant somewhere in these games.",
   "setup": "Multiple teams of 4-5 rotating through short strategic games across several playing areas, bibs to separate teams, one ball per game, a simple scoring or fair-play points system displayed for the whole group.",
   "howTo": [
    "Explain the format before play starts: students rotate through short strategic games across multiple areas, using simple scoring or a fair-play points system, with every skill from the unit being relevant somewhere across the games.",
    "Start the round-robin with teams at their first assigned game area.",
    "Play each short game using standard rules and scoring, drawing on scanning, risk/reward, reading opponents, adapting, set plays, and composure as needed.",
    "On the teacher's signal, rotate teams to the next game area, keeping transitions quick.",
    "Continue rotating through all game areas so every team experiences a range of strategic challenges.",
    "Coach the key message for the whole unit's culmination: celebrate the specific decisions and adaptations shown throughout the day, tying each one back to a skill first learned earlier in the unit, rather than only celebrating final scores."
   ]
  },
  "discussion": [
   "What's one strategy or decision-making skill from this whole unit you're most proud of improving?",
   "What did sharp, composed decision-making look like in today's games day?",
   "What will you take from this unit into other team games or sports?"
  ],
  "lookfors": [
   "Applies a visible range of strategy and decision-making skills from across the unit, not just one",
   "Plays fairly and communicates decisions in a competitive setting",
   "Shows growth as a decision-maker compared to Lesson 1 (informal, teacher's own judgement — no formal recording required)"
  ],
  "inclusion": "Structure the games day with balanced/mixed-ability groupings; consider a simple fair-play recognition alongside game results to keep the culminating day inclusive and values-aligned.",
  "skillBreakdown": [
   {
    "step": "Apply skills from across the whole unit — scanning, risk/reward thinking, reading opponents, adapting plans, set plays, and composure under pressure.",
    "why": "The games day brings everything the unit has built together under real, enjoyable pressure."
   },
   {
    "step": "Communicate decisions and support teammates and opponents throughout.",
    "why": "Fair play and clear communication are as much a part of this unit as the decision-making skills themselves."
   },
   {
    "step": "Reflect on your growth as a decision-maker compared to Lesson 1.",
    "why": "Reflecting on your own improvement in reading and deciding is as valuable as the result of any one game."
   }
  ],
  "value": "Pānga",
  "valueText": "Seeing how your role today connects to the bigger team effort — a small contribution that matters once it's put together with everyone else's."
 }
];

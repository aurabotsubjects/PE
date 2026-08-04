// Team Play unit data — TEAMPLAY_BLOCK_INFO + TEAMPLAY_LESSONS
const TEAMPLAY_BLOCK_INFO = {
  1:{name:"Communication, Space & Trust", range:"Lessons 1–5", color:"var(--b1)", soft:"var(--b1-soft)", warmup:"Name & Claim Jog", warmdown:"Walk & Reach",
    warmupSetup:"Whole class spread out in an open space roughly 20m x 20m, no equipment needed. Enough room for everyone to jog freely without bumping into each other.",
    warmupHowTo:[
      "Everyone jogs freely around the space in their own lane, staying aware of who's nearby.",
      "On the coach's signal, students jog toward the nearest person, say that person's name clearly, and give a quick high-five or fist bump before jogging off to find someone new.",
      "Keep the pace light and continuous — the goal is raising heart rate while getting names into the group's ears before the lesson's communication focus begins.",
      "If a student doesn't know a name yet, they simply ask — 'what's your name?' counts as the claim for that round.",
      "Run for the full 5 minutes, encouraging students to greet as many different classmates as possible."
    ],
    warmdownSetup:"No equipment needed. Gather the class into a loose circle or scattered spread with room for each student to stretch without touching anyone else.",
    warmdownHowTo:[
      "Walk slowly around the space for about 1 minute to bring heart rate down gradually.",
      "Gather into a circle (or stay scattered) and lead 3-4 simple static stretches — calves, quads, hamstrings, and a gentle reach-up/side stretch — holding each for about 15-20 seconds.",
      "Keep instructions simple and calm: 'reach, hold, breathe' rather than technical cues.",
      "Use this quiet time to briefly ask how the session felt for a couple of students, setting a relaxed tone before the Discussion segment.",
      "Finish with everyone standing tall and taking one big breath in and out together."
    ]
  },
  2:{name:"Supporting Teammates & Cooperative Play", range:"Lessons 6–10", color:"var(--b2)", soft:"var(--b2-soft)", warmup:"Partner Passing Jog", warmdown:"Partner Stretch",
    warmupSetup:"Pairs spread out across the space, roughly 3-4m apart per pair with enough room between pairs that passes don't collide with a neighbouring pair. One ball per pair.",
    warmupHowTo:[
      "Partners jog slowly on the spot while passing a ball gently back and forth using any comfortable pass.",
      "Every 30-45 seconds, call 'switch!' — both partners jog to find a new partner nearby and continue passing with them.",
      "Keep the whole activity light and continuous — the goal is raising heart rate and getting comfortable passing with lots of different classmates before today's cooperative-play focus.",
      "Encourage students to say their new partner's name each time they switch.",
      "Run for the full 5 minutes, mixing up the pace and switching frequency."
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
  3:{name:"Team Problem-Solving & Tactics", range:"Lessons 11–15", color:"var(--b3)", soft:"var(--b3-soft)", warmup:"Shape & Shuffle", warmdown:"Breathe & Balance",
    warmupSetup:"Groups of 5-6 spread out across the space, each group with a marked area roughly 8m x 8m. No ball needed.",
    warmupHowTo:[
      "Groups jog together lightly within their area, staying reasonably close to each other as a unit.",
      "Call out simple shape prompts as they jog: 'spread wide,' 'come together,' 'form a line,' 'shuffle sideways' — groups adjust their jogging shape on the call.",
      "This connects to today's team problem-solving and tactics focus by getting students thinking about team shape before the lesson begins.",
      "Rotate through several shape calls over the 5 minutes, mixing up the order.",
      "Keep energy high and encourage groups to communicate with each other while jogging and shuffling."
    ],
    warmdownSetup:"Gather each group (or the whole class) into a circle with enough room to breathe and balance without bumping neighbours.",
    warmdownHowTo:[
      "Walk slowly around the space for about 1 minute to bring heart rate down.",
      "Lead a few slow, controlled breathing cycles together: breathe in for 4 counts, hold for 2, breathe out for 4 — repeat 3-4 times.",
      "Follow with 2-3 simple balance holds, e.g. standing on one foot for 10-15 seconds, then swap feet — this connects to the composure and focus needed for reading the game and problem-solving under pressure.",
      "Keep the tone calm and unhurried — a good moment to help students settle before reflecting on the lesson.",
      "Finish standing tall with one final deep breath together before moving into the Discussion segment."
    ]
  },
  4:{name:"Team Challenges & Culmination", range:"Lessons 16–20", color:"var(--b4)", soft:"var(--b4-soft)", warmup:"Team Shape Jog", warmdown:"Circle Stretch & Cheer",
    warmupSetup:"Split the class into their tournament/practice teams (groups of 4-6), each team with a marked-out area to jog in (cones optional). No ball needed.",
    warmupHowTo:[
      "Each team jogs together as a group around their area, staying reasonably close to each other rather than spreading out randomly.",
      "Call out simple shape prompts as they jog: 'spread wide,' 'come together,' 'form a line,' 'form a triangle' — teams adjust their jogging shape on the call.",
      "This gets students moving together as a unit and thinking about team shape before the final block's culminating games.",
      "Rotate through several shape calls over the 5 minutes, mixing up the order.",
      "Keep energy high and encourage teams to communicate with each other while jogging.",
      "Finish with each team jogging back to a central point together as one group."
    ],
    warmdownSetup:"Gather each team (or the whole class) into a circle with enough room to stretch without touching neighbours.",
    warmdownHowTo:[
      "Walk slowly as a team/group for about 1 minute to bring heart rate down.",
      "In the circle, lead 3-4 simple static stretches together — calves, quads, hamstrings, and a shoulder/arm stretch — holding each for 15-20 seconds.",
      "Keep the group together and calm, using this as a settling-down moment after a high-energy session.",
      "Finish with a short team cheer or acknowledgment — each team says one thing they're proud of from today's session or the unit as a whole.",
      "Move directly into the Discussion segment once the cheer is done."
    ]
  },
};

const TEAMPLAY_LESSONS = [
 {
  "n": 1,
  "block": 1,
  "title": "Talk It Out",
  "focus": "Clear, purposeful communication (calling names, short clear calls)",
  "walt": "We are learning to use clear, simple calls and teammates' names so the right person knows what to do, when.",
  "wilf": [
   "I can call a teammate's name before I pass or ask for the ball",
   "I can use short, clear words instead of long sentences when I'm playing"
  ],
  "nzc": "Strand B, C · Relating to others",
  "equipment": "Bibs (2 colours), 1 soft ball per group of 4, cones for boundaries",
  "safety": "Calls should be clear but not shouted right next to another player's ear; spread out enough that thrown/rolled balls don't collide with other groups",
  "games": [
   {
    "name": "Name Pass Circle",
    "desc": "Standing in a circle, students pass a soft ball underarm, calling the receiver's name clearly before every pass.",
    "coach": "Say the name first, then pass — not the other way around.",
    "easier": "Bigger circle, slower passes, teacher prompts names if forgotten.",
    "harder": "Two balls going at once in the same circle.",
    "chaos": "Random reverse-direction call",
    "setup": "Whole class or groups of 8-10 stand in a circle roughly 4-5m across, one soft ball per circle.",
    "howTo": [
     "Demonstrate the rule first: say the receiver's name clearly, then pass underarm — never the other way around.",
     "One student starts with the ball, looks at who they're passing to, says that person's name, then passes.",
     "The receiver catches, then repeats the process — name first, then pass — to a different student.",
     "If a pass happens without a name being called first, the group simply pauses, the passer says the name out loud, and play continues from there.",
     "Coach the key message: 'say the name first, then pass — not the other way around.'",
     "For 'easier', use a bigger circle with slower passes and let the teacher prompt names if forgotten; for 'harder', add a second ball into the same circle so two passing sequences run at once."
    ]
   },
   {
    "name": "Call & Catch",
    "desc": "In moving pairs across a grid, the receiver calls their own name and 'here' to ask for the ball, and the passer waits for that call before throwing.",
    "coach": "Passer — wait for the call, don't guess.",
    "easier": "Walking pace only.",
    "harder": "Light jog with a defender shadowing (no contact) to add distraction.",
    "chaos": "Bonus point for an encouragement word added to the call",
    "setup": "Pairs stand at either end of a marked grid roughly 8m x 5m, spaced at least 2m from neighbouring pairs, one ball per pair.",
    "howTo": [
     "Demonstrate the call: the receiver says their own name followed by 'here!' as the cue for the passer to throw.",
     "Both partners move gently within the grid; the receiver only calls when they're ready and in space, and the passer waits for that exact call before throwing.",
     "If the passer throws before hearing the call, that pass doesn't count and the pair simply resets and tries again.",
     "Coach the key message: 'passer — wait for the call, don't guess.'",
     "Swap who is calling and who is passing every few throws so both partners get equal turns.",
     "For 'easier', keep both partners walking only; for 'harder', add a light jog and a shadow defender (no contact) to add distraction."
    ]
   },
   {
    "name": "Silent Minute",
    "desc": "Teams try a short small-sided keep-away game with absolutely no talking allowed, then immediately replay it with talking allowed, and compare how each version felt.",
    "coach": "Notice exactly what got harder with no talking.",
    "easier": "Slightly bigger space and simpler rules for the silent round.",
    "harder": "Add a light defender in the silent round to increase pressure.",
    "chaos": "n/a",
    "setup": "Small teams of 4 in a marked grid roughly 10m x 10m, one ball per team, with a second identical round to follow.",
    "howTo": [
     "Explain the two-round format: first a short keep-away game (about 1 minute) with absolutely no talking allowed, then immediately the same game again with talking allowed.",
     "During the silent round, teams try to keep the ball away from a light defender (or another team) using only eye contact and movement — no words at all.",
     "Stop the silent round after about a minute, then run the same game again straight away, this time encouraging normal calls and talking.",
     "Afterwards, ask the team to quickly compare how each round felt before moving on.",
     "Coach the key message: 'notice exactly what got harder with no talking.'",
     "For 'easier', use a slightly bigger space and simpler rules for the silent round; for 'harder', add a light defender in the silent round to increase pressure."
    ]
   }
  ],
  "big": {
   "name": "Call It, Catch It",
   "desc": "4v4 keep-away possession game where every pass must be preceded by a clear name call; teams earn a bonus point for an encouraging call after a mistake, on top of points for consecutive completed passes.",
   "setup": "Split into groups of 8 for 4v4 keep-away games in a grid roughly 12m x 10m. One ball per game, bibs to tell teams apart.",
   "howTo": [
    "Explain the rule before starting: every pass must be preceded by the passer calling the receiver's name clearly.",
    "One team starts with the ball and tries to keep possession through named passes while the other team tries to intercept (hands-off, no contact).",
    "Award a point for every 5 consecutive named passes a team completes without a drop or an unnamed pass.",
    "If a mistake happens (a drop, an unnamed pass, or a turnover), the team must give the player involved a quick, genuine encouraging word before play restarts — this earns a bonus point on top of the passing count.",
    "Rotate players on and off court every few minutes so everyone gets even game time.",
    "Coach the key message throughout: naming your teammate and encouraging them after a mistake both matter as much as the pass itself."
   ]
  },
  "discussion": [
   "What made a call 'clear' today, and what made one confusing?",
   "What did the Silent Minute teach you about talking during a game?",
   "Who used a really clear call today that helped their team?"
  ],
  "lookfors": [
   "Uses a teammate's name before passing or asking for the ball",
   "Uses short, clear words rather than long explanations",
   "Keeps communicating even when a play doesn't work"
  ],
  "inclusion": "Allow students to use a nickname or a simple pointed signal alongside the verbal call if speaking up is hard for them; pre-teach names in mixed groups before the lesson starts.",
  "skillBreakdown": [
   {
    "step": "Call a teammate's name before you call for the ball or pass it.",
    "why": "A name tells one specific person the message is for them, so the right teammate reacts instead of everyone or no one."
   },
   {
    "step": "Use short, clear words — 'here', 'man on', 'switch' — instead of long sentences.",
    "why": "Games move fast; short calls can be heard and acted on in the half-second a teammate actually has to react."
   },
   {
    "step": "Match your voice and your body — look at who you're calling to, not just shout into space.",
    "why": "Combining eye contact with the call removes doubt about exactly who the message is for."
   }
  ],
  "value": "Aroha",
  "valueText": "Being patient and encouraging with teammates whose skills or confidence look different from yours, and treating everyone with kindness whether the game is going well or not."
 },
 {
  "n": 2,
  "block": 1,
  "title": "Find Your Space",
  "focus": "Spatial awareness & support positioning (spreading out to give options)",
  "walt": "We are learning to spread out and move into space so we're always a useful option for whoever has the ball.",
  "wilf": [
   "I can move away from a teammate who already has the ball rather than crowding them",
   "I can find and move into new space where I can be seen by the ball carrier"
  ],
  "nzc": "Strand B · Thinking",
  "equipment": "Bibs (2 colours), 1 ball per group of 4, cones to mark a grid",
  "safety": "Clear grid boundaries so spreading out doesn't send students into walls, fences, or other groups' games",
  "games": [
   {
    "name": "Grid Spread",
    "desc": "In a marked grid, students jog freely, keeping as much distance as possible from every other player at all times — teacher periodically freezes play to check spacing.",
    "coach": "Picture an invisible bubble around you and each teammate.",
    "easier": "Bigger grid, fewer players.",
    "harder": "Smaller grid, more players, faster movement.",
    "chaos": "Freeze-and-check spacing spot-audits",
    "setup": "Whole class or groups of 10-12 inside a marked grid roughly 15m x 15m, no ball needed.",
    "howTo": [
     "Demonstrate the idea of an 'invisible bubble' — staying as far as possible from every other player at all times while jogging freely.",
     "Students jog around the grid, constantly adjusting position to keep maximum distance from everyone else.",
     "Periodically call 'freeze!' — everyone stops immediately and the coach checks spacing, pointing out anyone who's drifted too close to another player.",
     "Resume jogging on 'go' and repeat several freeze-and-check cycles.",
     "Coach the key message: 'picture an invisible bubble around you and each teammate.'",
     "For 'easier', use a bigger grid with fewer players; for 'harder', use a smaller grid with more players and faster movement."
    ]
   },
   {
    "name": "Shadow Space",
    "desc": "One student has a ball and moves around the grid; teammates must constantly reposition to stay 'available' — in open space, visible to the ball carrier — without ever being told where to go.",
    "coach": "If you can see the ball carrier's eyes, they can probably see you.",
    "easier": "Ball carrier walks only.",
    "harder": "Ball carrier can jog and change direction suddenly.",
    "chaos": "Role rotation every 60 seconds",
    "setup": "Small groups of 4-5 in a grid roughly 10m x 10m, one ball per group.",
    "howTo": [
     "One student holds the ball and moves around the grid; the rest of the group are 'teammates' without the ball.",
     "Without being told where to go, teammates constantly reposition to stay in open space, visible to the ball carrier, ready to receive if called.",
     "The ball carrier occasionally calls a name to 'receive' a pretend or real pass to whoever looks best positioned.",
     "Coach the key message: 'if you can see the ball carrier's eyes, they can probably see you.'",
     "Rotate who holds the ball every 60-90 seconds so everyone experiences both roles.",
     "For 'easier', have the ball carrier walk only; for 'harder', let the ball carrier jog and change direction suddenly."
    ]
   },
   {
    "name": "3v1 Keep-Away",
    "desc": "Three attackers keep the ball from one defender in a grid, with attackers rewarded specifically for spreading into good triangle shapes rather than bunching near the ball.",
    "coach": "If you're standing next to a teammate, one of you should move.",
    "easier": "Bigger grid, defender must stay 2m back until the ball moves.",
    "harder": "Smaller grid, two defenders.",
    "chaos": "Bonus point for a triangle shape spotted by the teacher",
    "setup": "Groups of 4 (three attackers, one defender) in a grid roughly 8m x 8m, one ball per group, spaced at least 2m from neighbouring groups.",
    "howTo": [
     "Explain the target: the three attackers keep the ball from the single defender, specifically rewarded for spreading into a good triangle shape rather than bunching near the ball.",
     "The defender moves to press and intercept (hands-off, no contact) while attackers pass and reposition.",
     "If two attackers end up standing close together, the coach or teammates should prompt one of them to move — coach the key message: 'if you're standing next to a teammate, one of you should move.'",
     "Rotate the defender role every 2-3 minutes so everyone gets a turn defending.",
     "For 'easier', use a bigger grid and require the defender to stay 2m back until the ball moves; for 'harder', use a smaller grid with two defenders."
    ]
   }
  ],
  "big": {
   "name": "Spread & Score",
   "desc": "Small-sided possession game where teams score bonus points not just for completed passes but for visibly good spacing — support players staying spread into open passing lanes rather than clustering around the ball.",
   "setup": "Split into groups of 8 for 4v4 possession games in a grid roughly 12m x 10m. One ball per game, bibs for each team.",
   "howTo": [
    "Explain the scoring rule before starting: teams earn points not just for completed passes but for visibly good spacing — support players staying spread into open passing lanes rather than clustering around the ball.",
    "Play flows as a normal possession game, with the coach or a nominated caller watching for good spacing and calling out bonus points when spotted.",
    "If the ball is turned over, possession simply switches to the other team and play continues immediately without a stoppage.",
    "Rotate players on and off court every few minutes so everyone gets even game time.",
    "Coach the key message throughout: spreading out gives the ball carrier real options, not just extra bodies on the field.",
    "Keep encouraging players to check their spacing relative to teammates, not just watch the ball."
   ]
  },
  "discussion": [
   "What did 'good space' actually look like today?",
   "What happens to a game when everyone crowds around the ball?",
   "Who found really useful space today, and what did they do to get there?"
  ],
  "lookfors": [
   "Moves away from a teammate who already has the ball",
   "Finds space where they can be seen by the ball carrier",
   "Keeps moving into new space rather than standing still"
  ],
  "inclusion": "Use visual floor markers (spots/hoops) as space 'targets' for students who find open spatial awareness harder to judge; simplify to a bigger grid with fewer players for those still building this sense.",
  "skillBreakdown": [
   {
    "step": "Move away from a teammate who already has the ball rather than standing near them.",
    "why": "Two players in the same small space give the ball carrier only one real option instead of two."
   },
   {
    "step": "Move to space where the ball carrier can actually see you.",
    "why": "Being open is only useful if the person with the ball knows you're there."
   },
   {
    "step": "Keep moving into fresh space rather than stopping once you find a good spot.",
    "why": "Defenders adjust to cover space quickly, so staying useful means continually resetting where the good space is."
   }
  ],
  "value": "Mōhio",
  "valueText": "Understanding your own strengths and how you fit into the team, and noticing what your teammates need from you in order to do their best."
 },
 {
  "n": 3,
  "block": 1,
  "title": "Same Team, Same Job",
  "focus": "Understanding and communicating roles (attacker / defender / supporter)",
  "walt": "We are learning to understand different roles within a team game and communicate our role clearly to teammates.",
  "wilf": [
   "I can explain what my role is doing at any point in a small game",
   "I can call out a role change clearly so my team knows what's happening"
  ],
  "nzc": "Strand B, C · Relating to others",
  "equipment": "Bibs (3 colours or role markers/wristbands), balls, cones",
  "safety": "Clear role boundaries in early games to avoid collisions between students moving into the same space unexpectedly",
  "games": [
   {
    "name": "Role Call",
    "desc": "In small groups, students rotate through three labelled roles — attacker, defender, supporter — with the teacher calling freezes to check each student can state their current role and job.",
    "coach": "Know your job before you worry about anyone else's.",
    "easier": "Roles stay fixed for longer before rotating.",
    "harder": "Fast, unpredictable role-swap calls.",
    "chaos": "Random constraint calls",
    "setup": "Small groups of 6 in a grid roughly 10m x 8m, with 3 coloured bibs or role markers (attacker, defender, supporter) shared among pairs of students within the group.",
    "howTo": [
     "Explain the three roles and each one's basic job before starting: attacker, defender, supporter.",
     "Students rotate through the three roles during light small-sided play, wearing or holding a marker that shows their current role.",
     "Periodically call 'freeze!' and point to individual students, who must state their current role and its job out loud.",
     "Coach the key message: 'know your job before you worry about anyone else's.'",
     "Resume play after each check and continue rotating roles regularly.",
     "For 'easier', keep roles fixed for longer before rotating; for 'harder', use fast, unpredictable role-swap calls."
    ]
   },
   {
    "name": "Colour-Coded Roles",
    "desc": "Each role wears a different coloured bib; students practise a simple small-sided game where only the correct role can perform a certain action (e.g. only 'attackers' can score).",
    "coach": "Check bib colours before you act, not after.",
    "easier": "Fewer roles active at once.",
    "harder": "All three roles active with fast rotation.",
    "chaos": "Role rotation mid-game on a signal",
    "setup": "Small-sided groups of 6-8 in a grid roughly 12m x 10m, with bibs in 3 colours marking attacker, defender, and supporter roles. One ball per group.",
    "howTo": [
     "Explain the rule: only the role wearing the 'attacker' colour may perform the scoring action (e.g. only attackers can score).",
     "Play a simple small-sided game where students check bib colours before acting, since actions are restricted by role.",
     "If a student acts outside their role (e.g. a defender tries to score), the coach simply reminds them of their current colour and play continues.",
     "Coach the key message: 'check bib colours before you act, not after.'",
     "Rotate bib colours around the group every few minutes so everyone experiences each role.",
     "For 'easier', have fewer roles active at once; for 'harder', have all three roles active with fast rotation."
    ]
   },
   {
    "name": "3-Role Rotation Game",
    "desc": "A continuous small game where every successful action (score, tackle, pass) triggers an immediate role rotation among the group, forcing quick adjustment to a new job.",
    "coach": "Call your new role out loud the second it changes.",
    "easier": "Slower, walking-pace version first.",
    "harder": "Full-pace version with quick rotations.",
    "chaos": "Double rotation on a bonus event",
    "setup": "Small-sided groups of 6 in a grid roughly 10m x 8m, with 3 role markers rotating through the group. One ball per group.",
    "howTo": [
     "Explain the trigger: every successful action (a score, a tackle, a completed pass) causes an immediate role rotation among the group.",
     "Play continuously; whenever the trigger event happens, the students involved swap roles right away and call out their new role.",
     "Coach the key message: 'call your new role out loud the second it changes.'",
     "Keep play moving with minimal stoppage — the rotation should feel quick and natural, not like a formal pause.",
     "Run a slower walking-pace version first before moving to full pace.",
     "For 'easier', stay at walking pace; for 'harder', run the full-pace version with quick rotations."
    ]
   }
  ],
  "big": {
   "name": "Triangle Ball",
   "desc": "Small-sided game built around three clear roles (feeder, attacker, defender) that rotate regularly; points are earned both for game success and for clearly communicating role changes to the rest of the team.",
   "setup": "Split into groups of 6-8 for small-sided games in a grid roughly 12m x 10m, using 3 role markers (feeder, attacker, defender) that rotate regularly. One ball per game.",
   "howTo": [
    "Explain the two scoring sources before starting: points for normal game success, and points for clearly communicating role changes to the rest of the team.",
    "Play flows with roles rotating regularly on a set trigger or a coach's call — students must call out their new role the moment it changes.",
    "The coach or a nominated caller listens for clear role calls and awards the communication bonus point when heard.",
    "Rotate players on and off court every few minutes so everyone gets even game time in every role.",
    "Coach the key message throughout: know your current job, and tell your team the moment that job changes.",
    "Keep the tone encouraging — the goal is clear, confident calling, not perfect execution."
   ]
  },
  "discussion": [
   "What was your role today, and what was its actual job?",
   "What happened when someone forgot which role they were in?",
   "How did calling out your role change help your team?"
  ],
  "lookfors": [
   "Can state their current role and its job when asked",
   "Performs actions appropriate to their current role",
   "Calls out role changes clearly to teammates"
  ],
  "inclusion": "Use coloured bibs or wristbands as a visual reminder of role for students who find quick verbal processing harder; allow a 'buddy' to help call out role changes early on.",
  "skillBreakdown": [
   {
    "step": "Know your current role and exactly what job it does in the game.",
    "why": "A team where everyone understands their own job first can then combine those jobs — confusion about your own role spreads confusion to the whole team."
   },
   {
    "step": "Call out clearly when your role changes.",
    "why": "Teammates can only adjust to a new team shape if they know a role has actually changed."
   },
   {
    "step": "Move and act in ways that match your current role, not your favourite role.",
    "why": "A team only works when players commit to what the team needs right now, not just what they enjoy doing most."
   }
  ],
  "value": "Manaaki",
  "valueText": "Looking after your teammates' success as much as your own — including, encouraging, and setting others up to succeed."
 },
 {
  "n": 4,
  "block": 1,
  "title": "Trust the Pass",
  "focus": "Trust & cooperative movement (committing to teammates' calls and movement)",
  "walt": "We are learning to trust a teammate's call or movement and commit fully to our part of a shared plan.",
  "wilf": [
   "I can commit to a pass or movement once a teammate has called for it",
   "I can guide a teammate clearly and safely using only my voice"
  ],
  "nzc": "Strand B, C · Relating to others",
  "equipment": "Balls, blindfolds/eye masks (optional) or 'eyes closed' agreement, cones for a simple safe pathway",
  "safety": "Guided movement activities kept slow and in a clear, obstacle-checked space; spotters used for anyone genuinely blindfolded",
  "games": [
   {
    "name": "Guide & Go",
    "desc": "In pairs, one student closes their eyes or wears a soft blindfold while their partner guides them verbally along a simple, safe pathway of cones using only calm, clear instructions.",
    "coach": "Short, calm instructions — one step at a time.",
    "easier": "Guide can also hold the mover's hand or shoulder.",
    "harder": "Voice-only guidance across a slightly longer or more winding path.",
    "chaos": "Role rotation halfway",
    "setup": "Pairs at one end of a simple, obstacle-checked pathway marked with cones roughly 8-10m long, spaced at least 3m from neighbouring pairs. Soft blindfolds/eye masks optional.",
    "howTo": [
     "Check the whole pathway is clear of trip hazards before starting, and assign a spotter (the guiding partner) to walk right beside the mover throughout.",
     "One partner closes their eyes or wears a soft blindfold; the other guides them verbally along the cone pathway using calm, clear, one-step-at-a-time instructions.",
     "The guide stays close enough to physically stop their partner if needed, even though guidance is mainly verbal.",
     "Coach the key message: 'short, calm instructions — one step at a time.'",
     "Swap roles halfway through so both partners experience guiding and being guided.",
     "For 'easier', allow the guide to also hold the mover's hand or shoulder; for 'harder', use voice-only guidance across a slightly longer or more winding path."
    ]
   },
   {
    "name": "Follow the Leader Formation Jog",
    "desc": "Small groups jog in a simple formation, with the lead student changing direction and the rest trusting and mirroring the change immediately without being told individually.",
    "coach": "Watch the leader, not your feet.",
    "easier": "Slower pace, simple straight-line changes only.",
    "harder": "Quicker pace, sharper direction changes.",
    "chaos": "Leader rotates on a whistle",
    "setup": "Small groups of 4-5 jogging together in a simple line or V-formation across an open space roughly 15m x 15m.",
    "howTo": [
     "Demonstrate the idea: the lead student jogs and changes direction, while the rest of the group mirrors the change immediately without being told individually.",
     "Groups jog together with one student leading; the leader changes direction, speed, or path, and the rest follow smoothly.",
     "Coach the key message: 'watch the leader, not your feet.'",
     "Rotate who leads every 60-90 seconds (or on a whistle) so everyone gets a turn.",
     "For 'easier', use a slower pace with simple straight-line changes only; for 'harder', use a quicker pace with sharper direction changes."
    ]
   },
   {
    "name": "Trust Toss",
    "desc": "Partners practise catching a softly thrown ball while relying on their partner's verbal call of 'ready' rather than watching the throw the whole way, building trust in teammates' timing.",
    "coach": "Trust the call — start moving your hands on 'ready', not after you see the ball.",
    "easier": "Bigger, softer ball, shorter distance.",
    "harder": "Smaller ball, slightly greater distance.",
    "chaos": "Random short delay before the call",
    "setup": "Partners stand 2-3m apart with one soft, larger ball between them, spaced at least 2m from neighbouring pairs.",
    "howTo": [
     "Demonstrate the trust cue: the thrower calls 'ready' just before releasing the ball, and the receiver starts moving their hands on that call rather than waiting to see the ball fully in the air.",
     "One partner throws softly on their own call of 'ready'; the receiver reacts to the call, not just the ball's flight.",
     "Coach the key message: 'trust the call — start moving your hands on ready, not after you see the ball.'",
     "Swap roles every few throws so both partners practise throwing and receiving.",
     "For 'easier', use a bigger, softer ball at a shorter distance; for 'harder', use a smaller ball at a slightly greater distance."
    ]
   }
  ],
  "big": {
   "name": "Blind Trust Relay",
   "desc": "Team relay where one blindfolded or eyes-closed 'runner' per leg must be guided safely to a marker and back using only their teammates' voices, combining trust, clear calling, and patience under mild time pressure.",
   "setup": "Teams of 4-5 set up for a short relay with a clear, obstacle-checked pathway to a marker and back, roughly 10-12m each way. No ball needed — this is a guided-movement relay.",
   "howTo": [
    "Check every team's pathway is clear of hazards before starting, and confirm a spotter is assigned to each blindfolded or eyes-closed runner.",
    "One team member at a time closes their eyes (or wears a soft blindfold) and is guided by their teammates' voices to the marker and back.",
    "Teammates use calm, clear, one-step-at-a-time calls, exactly as practised in Guide & Go, working together so multiple voices don't create confusion.",
    "Once the runner returns safely, the next team member goes, continuing until the whole team has had a turn.",
    "Add mild time pressure by tracking each team's total time, but prioritise safety and calm communication over speed at every point.",
    "Coach the key message throughout: trust, clear calling, and patience matter more than winning the relay quickly."
   ]
  },
  "discussion": [
   "What did it feel like to rely completely on a teammate's voice?",
   "What made a good 'guide' today?",
   "Why does trust matter in a team game, even when nobody's blindfolded?"
  ],
  "lookfors": [
   "Commits fully once a teammate calls for a pass or movement",
   "Gives calm, clear verbal guidance to a partner",
   "Stays patient and encouraging if a partner is nervous or unsure"
  ],
  "inclusion": "Never require a student to wear a blindfold if they're uncomfortable — eyes-closed-and-trusted is an equally valid option; pair thoughtfully so guiding partners are calm, clear communicators.",
  "skillBreakdown": [
   {
    "step": "Commit fully to a pass or movement once a teammate has clearly called for it.",
    "why": "Hesitating after a clear call is often what causes a good plan to fail — trust means acting on the call, not double-checking it."
   },
   {
    "step": "Give guidance in short, calm, specific instructions.",
    "why": "A guiding voice that stays calm and specific is far easier to trust and follow than a rushed or vague one."
   },
   {
    "step": "Stay patient if a teammate is unsure, and encourage rather than criticise.",
    "why": "Trust is built or broken by how teammates respond when things feel uncertain, not just when things go smoothly."
   }
  ],
  "value": "Pānga",
  "valueText": "Seeing how your role today connects to the bigger team effort — a small contribution that matters once it's put together with everyone else's."
 },
 {
  "n": 5,
  "block": 1,
  "title": "Cheer Squad",
  "focus": "Encouragement & positive communication under pressure (Block 1 wrap-up)",
  "walt": "We are learning to give specific, genuine encouragement to teammates, especially straight after a mistake.",
  "wilf": [
   "I can give a teammate specific praise, not just a generic 'good job'",
   "I can encourage a teammate straight after they make a mistake"
  ],
  "nzc": "Strand C · Relating to others",
  "equipment": "Balls, bibs, cones — combined equipment from Block 1 games for the wrap-up carousel",
  "safety": "Standard spacing for small-sided games; remind students encouragement is always genuine, never sarcastic",
  "games": [
   {
    "name": "Compliment Circuit",
    "desc": "Students rotate through short partner activities, and after each one must give their partner one specific piece of praise about something they actually did well.",
    "coach": "Name the specific thing, not just 'good job'.",
    "easier": "Teacher offers example phrases to choose from.",
    "harder": "No repeated compliments allowed across the circuit.",
    "chaos": "Role rotation between rounds",
    "setup": "Pairs rotate through 3-4 short partner activities (borrowed from earlier Block 1 games) set up around the space, roughly 2-3 minutes per station.",
    "howTo": [
     "Explain the rule before starting: after every activity at a station, each partner must give the other one specific piece of praise about something they actually did well.",
     "Pairs complete the short activity at their current station, then pause and exchange a specific compliment before moving to the next station.",
     "Coach the key message: 'name the specific thing, not just good job.'",
     "If a student is stuck for a specific compliment, the teacher can offer example phrases to choose from.",
     "Rotate pairs (not just stations) between rounds so students practise complimenting different classmates.",
     "For 'easier', offer example phrases throughout; for 'harder', don't allow any compliment to be repeated across the whole circuit."
    ]
   },
   {
    "name": "Bench Cheer Challenge",
    "desc": "While one team plays a short small-sided game, the resting team's job is to actively and specifically encourage them from the side — tracked by the teacher for genuine, specific calls.",
    "coach": "Cheer for effort and good decisions, not just goals or points.",
    "easier": "Teacher provides encouragement phrase ideas.",
    "harder": "Must call out a specific action, not a generic cheer.",
    "chaos": "n/a",
    "setup": "Split into two teams of 4; one team plays a short small-sided game in a grid roughly 10m x 8m while the other team rests on the side, ready to cheer. One ball for the playing team.",
    "howTo": [
     "Explain the resting team's job: actively and specifically encourage the playing team from the sideline throughout the game.",
     "The playing team plays a short small-sided game while the resting team calls out genuine, specific encouragement — naming what they see, not generic cheering.",
     "The teacher listens and tracks genuine, specific calls from the resting team during play.",
     "Coach the key message: 'cheer for effort and good decisions, not just goals or points.'",
     "Swap which team plays and which team cheers after a set time, so everyone experiences both roles.",
     "For 'easier', the teacher offers encouragement phrase ideas; for 'harder', require a specific action to be named, not a generic cheer."
    ]
   },
   {
    "name": "Mistake Reset Game",
    "desc": "In a small game, every time a mistake happens (dropped ball, missed pass), the team must give the player a specific encouragement before play restarts.",
    "coach": "Encouragement first, then get back into it.",
    "easier": "Teacher prompts the encouragement if the team is slow to respond.",
    "harder": "Faster restarts, less time to think of the encouragement.",
    "chaos": "Bonus point for the fastest genuine encouragement",
    "setup": "Small teams of 4 in a grid roughly 10m x 8m, playing a simple small game with a ball, on the lookout for mistakes to trigger the encouragement rule.",
    "howTo": [
     "Explain the rule before starting: every time a mistake happens (a dropped ball, a missed pass), the team must give that player a specific encouragement before play restarts.",
     "Play flows normally; whenever a mistake occurs, play pauses briefly while a teammate offers a genuine, specific encouraging comment.",
     "Coach the key message: 'encouragement first, then get back into it' — keep the pause short so the game keeps its rhythm.",
     "If the team is slow to respond, the teacher can prompt the encouragement to keep things moving.",
     "Resume play immediately once the encouragement is given.",
     "For 'easier', allow the teacher to prompt if needed; for 'harder', use faster restarts with less time to think of the encouragement."
    ]
   }
  ],
  "big": {
   "name": "Team Challenge Carousel",
   "desc": "Teams rotate through short challenge stations that each revisit a Block 1 focus — clear calls, good spacing, role clarity, trusting a teammate — with genuine encouragement required at every station, wrapping up the whole block.",
   "setup": "Whole class rotates through 4 short challenge stations (roughly 3-4 minutes each) that each revisit a Block 1 focus — clear calls, good spacing, role clarity, trusting a teammate. Equipment combined from earlier Block 1 games, set up at each station.",
   "howTo": [
    "Explain the carousel format: teams rotate through the four stations, each one a short revisit of a skill from earlier in Block 1.",
    "At every station, genuine encouragement is required — teams should be exchanging specific, positive comments throughout, not just completing the task.",
    "Move teams to the next station on a time signal (roughly every 3-4 minutes), keeping transitions quick and smooth.",
    "The coach circulates and highlights good examples of encouragement and skill application as they happen at each station.",
    "Continue until every team has rotated through all four stations.",
    "Use this as a natural wrap-up of Block 1's whole focus — communication, spacing, roles, and trust — all tied together with genuine encouragement."
   ]
  },
  "discussion": [
   "What's the difference between a generic 'good job' and specific praise?",
   "How did it feel to be encouraged straight after a mistake?",
   "Looking back over this whole block, what's improved most in how your team talks to each other?"
  ],
  "lookfors": [
   "Gives specific, genuine praise rather than generic comments",
   "Encourages a teammate immediately after a mistake",
   "Shows growth across Block 1 in communication, spacing, roles, and trust"
  ],
  "inclusion": "Model specific praise phrases for students who find this awkward or new; ensure quieter students get genuinely included as both givers and receivers of encouragement, not just louder personalities.",
  "skillBreakdown": [
   {
    "step": "Give praise that names something specific a teammate actually did.",
    "why": "Specific praise tells a teammate exactly what to keep doing; generic praise doesn't teach them anything."
   },
   {
    "step": "Encourage a teammate straight after a mistake, before moving on.",
    "why": "The moment right after a mistake is when encouragement matters most — it's what keeps confidence and effort going."
   },
   {
    "step": "Keep team energy positive even when the scoreline or game isn't going your way.",
    "why": "A team that stays encouraging under pressure keeps playing well for longer than one that turns on itself."
   }
  ],
  "value": "Aroha",
  "valueText": "Being patient and encouraging with teammates whose skills or confidence look different from yours, and treating everyone with kindness whether the game is going well or not."
 },
 {
  "n": 6,
  "block": 2,
  "title": "Give and Go",
  "focus": "Supporting a teammate in possession (moving after passing to offer a new option)",
  "walt": "We are learning to move into a new position immediately after passing, so we stay useful to our team.",
  "wilf": [
   "I can move to a new spot straight after I pass the ball, rather than standing still",
   "I can offer a passing angle rather than standing directly in line"
  ],
  "nzc": "Strand B · Thinking",
  "equipment": "Bibs, balls, cones to mark simple grids",
  "safety": "Watch for collisions as multiple players move into space at once in small grids",
  "games": [
   {
    "name": "Give & Go Grid",
    "desc": "In pairs within a grid, students pass and immediately jog to a new open spot before receiving the ball back, repeating continuously.",
    "coach": "The moment the ball leaves your hands, start moving.",
    "easier": "Bigger grid, walking pace.",
    "harder": "Smaller grid, add a light chasing defender.",
    "chaos": "Beat the clock — count clean give-and-go cycles",
    "setup": "Pairs in a grid roughly 8m x 6m, spaced at least 2m from neighbouring pairs. One ball per pair.",
    "howTo": [
     "Demonstrate 'give and go': pass the ball, then immediately jog to a new open spot in the grid before receiving it back.",
     "One partner passes to the other, then moves; the receiver controls the ball and passes it back to the mover's new position, then also moves after passing.",
     "Coach the key message: 'the moment the ball leaves your hands, start moving.'",
     "Continue this continuous pass-and-move cycle for the full activity.",
     "For 'easier', use a bigger grid at walking pace; for 'harder', use a smaller grid and add a light chasing defender.",
     "For 'chaos', count clean give-and-go cycles against the clock and see how many the pair can complete."
    ]
   },
   {
    "name": "Angle Finder",
    "desc": "Students practise moving to an angled position rather than directly behind or in front of the passer, so the return pass isn't blocked by anyone in between.",
    "coach": "A straight line is easy to block; an angle usually isn't.",
    "easier": "Cones mark two clear angled 'target spots' to move to.",
    "harder": "No marked spots — students must find their own angle.",
    "chaos": "Role rotation",
    "setup": "Pairs in a grid roughly 8m x 6m, with two cones marking angled 'target spots' near each partner. One ball per pair.",
    "howTo": [
     "Demonstrate the idea: moving to an angled position rather than directly behind or in front of the passer, so the return pass isn't blocked by anyone in between.",
     "One partner passes; the receiver moves into an angled position (using the marked target spots) before receiving the ball back.",
     "Coach the key message: 'a straight line is easy to block; an angle usually isn't.'",
     "Continue passing and moving to alternating angled spots, swapping who passes and who moves regularly.",
     "For 'easier', keep the cone target spots marked clearly; for 'harder', remove the marked spots so students must find their own angle."
    ]
   },
   {
    "name": "2-Touch Support Game",
    "desc": "Small-sided possession game where players are limited to two touches, forcing quick decisions and immediate supporting movement after every pass.",
    "coach": "Decide where you're moving to before the ball even arrives.",
    "easier": "Three touches allowed instead of two.",
    "harder": "One-touch only for confident players.",
    "chaos": "Bonus point for a clean give-and-go under pressure",
    "setup": "Small-sided groups of 4 in a grid roughly 10m x 8m, one ball per group.",
    "howTo": [
     "Explain the touch limit: every player gets a maximum of two touches on the ball before they must pass.",
     "Play a small possession game with the two-touch limit in force, forcing quick decisions and immediate supporting movement after every pass.",
     "Coach the key message: 'decide where you're moving to before the ball even arrives.'",
     "If a player takes more than two touches, possession simply switches to the other team or player and play continues immediately.",
     "For 'easier', allow three touches instead of two; for 'harder', allow one-touch only for confident players."
    ]
   }
  ],
  "big": {
   "name": "Overlap Ball",
   "desc": "Small-sided possession game where teams score bonus points specifically for completed give-and-go sequences — passing then immediately supporting into new space to receive again.",
   "setup": "Split into groups of 8 for 4v4 possession games in a grid roughly 12m x 10m. One ball per game, bibs for each team.",
   "howTo": [
    "Explain the bonus rule before starting: teams score extra points specifically for completed give-and-go sequences — passing then immediately supporting into new space to receive again.",
    "Play flows as a normal small-sided possession game, with both teams trying to keep the ball and build sequences.",
    "The coach or a nominated caller watches for full give-and-go sequences and calls out the bonus point when one happens.",
    "If the ball is turned over, possession switches to the other team and play continues immediately without a stoppage.",
    "Rotate players on and off court every few minutes so everyone gets even game time.",
    "Coach the key message throughout: move immediately after every pass — don't stand and admire it."
   ]
  },
  "discussion": [
   "What made a give-and-go work well today?",
   "Why is standing still after a pass a problem for your team?",
   "Who found a really good angle to support from today?"
  ],
  "lookfors": [
   "Moves to a new position immediately after passing",
   "Chooses an angled supporting position rather than a blocked one",
   "Stays ready to receive again after supporting"
  ],
  "inclusion": "Use marked 'target spots' for students still learning to judge angles independently; simplify to a bigger grid and slower pace so the movement pattern can be felt clearly first.",
  "skillBreakdown": [
   {
    "step": "Move to a new position the moment you release a pass.",
    "why": "Standing still after passing removes you as an option — moving keeps you useful to the play."
   },
   {
    "step": "Support from an angle rather than directly in line with the passer.",
    "why": "A defender can block one straight line easily; an angled option is much harder to cut off."
   },
   {
    "step": "Decide where you're moving to before the ball arrives, not after.",
    "why": "Quick decisions before receiving the ball again keep the whole sequence flowing instead of stalling."
   }
  ],
  "value": "Mōhio",
  "valueText": "Understanding your own strengths and how you fit into the team, and noticing what your teammates need from you in order to do their best."
 },
 {
  "n": 7,
  "block": 2,
  "title": "Numbers Up",
  "focus": "Creating and using overloads (2v1, 3v2) as a team",
  "walt": "We are learning to recognise when our team has an extra player and use that advantage to keep the ball.",
  "wilf": [
   "I can recognise when my team has more players than the defenders in a space",
   "I can use an extra player rather than crowding the ball"
  ],
  "nzc": "Strand B · Thinking",
  "equipment": "Bibs, balls, cones to mark grids",
  "safety": "Standard spacing in small grids; ensure defenders aren't outnumbered unfairly without rotation breaks",
  "games": [
   {
    "name": "2v1 Rondo",
    "desc": "Two attackers keep the ball from one defender in a small grid, focusing on recognising and using the extra player rather than both attackers crowding together.",
    "coach": "If you're both near the ball, one of you is wasting the overload.",
    "easier": "Bigger grid, defender must stay back until the first pass.",
    "harder": "Smaller grid, defender allowed to press immediately.",
    "chaos": "Role rotation every 90 seconds",
    "setup": "Groups of 3 (two attackers, one defender) in a small grid roughly 6m x 6m, spaced at least 2m from neighbouring groups. One ball per group.",
    "howTo": [
     "Explain the goal: the two attackers keep the ball from the single defender, focusing on recognising and using the extra player rather than both attackers crowding together.",
     "The defender presses to intercept (hands-off, no contact) while attackers pass and reposition to stay spread.",
     "Coach the key message: 'if you're both near the ball, one of you is wasting the overload.'",
     "Rotate the defender role every 90 seconds so everyone gets a turn.",
     "For 'easier', use a bigger grid and require the defender to stay back until the first pass; for 'harder', use a smaller grid and let the defender press immediately."
    ]
   },
   {
    "name": "Overload Alley",
    "desc": "3v2 possession game in a narrow 'alley' grid, where the attacking team must spot and use their extra player to keep possession under pressure.",
    "coach": "Look for the free player before you look for a risky pass.",
    "easier": "Wider alley, more time on the ball.",
    "harder": "Narrower alley, quicker defensive pressure.",
    "chaos": "Bonus point for a pass that clearly uses the extra player",
    "setup": "Groups of 5 (three attackers, two defenders) in a narrow 'alley' grid roughly 12m long and 4m wide. One ball per group.",
    "howTo": [
     "Explain the setup: this is a 3v2 possession game in a narrow alley, where the attacking team must spot and use their extra player to keep possession under pressure.",
     "Attackers pass and move within the alley while the two defenders press to intercept (hands-off, no contact).",
     "Coach the key message: 'look for the free player before you look for a risky pass.'",
     "Rotate which three students attack and which two defend every few minutes.",
     "For 'easier', use a wider alley with more time on the ball; for 'harder', use a narrower alley with quicker defensive pressure."
    ]
   },
   {
    "name": "Spot the Extra Player",
    "desc": "Freeze-frame game: teacher periodically freezes a small-sided game and students must correctly point out which team currently has an overload in a nearby area.",
    "coach": "Count defenders near the ball, not just anywhere on the field.",
    "easier": "Teacher highlights the relevant area before freezing.",
    "harder": "Whole-field freezes with no area highlighted.",
    "chaos": "Random constraint calls",
    "setup": "Whole class playing several small-sided games simultaneously across the space, with the teacher circulating to freeze and check understanding.",
    "howTo": [
     "Let several small-sided games run at once across the available space.",
     "Periodically freeze one nearby game and ask a few students from other games to correctly point out which team currently has an overload (extra attacker) in that area.",
     "Coach the key message: 'count defenders near the ball, not just anywhere on the field.'",
     "Unfreeze and let play continue, repeating the freeze-and-spot process every minute or two.",
     "For 'easier', highlight the relevant area before freezing; for 'harder', do whole-field freezes with no area highlighted."
    ]
   }
  ],
  "big": {
   "name": "Numbers Game",
   "desc": "5v3 possession game where the team of five must recognise and exploit their numerical advantage to keep the ball, while the team of three focuses on compact defending — roles rotate partway through.",
   "setup": "Groups of 8 for a 5v3 possession game in a grid roughly 15m x 10m. One ball per game, bibs for each team.",
   "howTo": [
    "Explain the setup before starting: the team of five must recognise and exploit their numerical advantage to keep the ball, while the team of three focuses on compact defending.",
    "Play flows as a possession game; the larger team looks to spread out and use their overload, while the smaller team stays compact and communicates to cover gaps.",
    "Coach the key message throughout: 'look for the free player before you look for a risky pass' for the attacking team, and 'stay compact and cover for each other' for the defending team.",
    "Swap which team has five players and which has three partway through the game so both group sizes are experienced.",
    "Rotate players on and off court every few minutes so everyone gets even game time.",
    "Keep the tone encouraging for the smaller defending team — being outnumbered is the point of the exercise, not a disadvantage to fix."
   ]
  },
  "discussion": [
   "What does 'numbers up' actually mean, and how did you spot it today?",
   "What happens if a team has an overload but doesn't use it?",
   "Who made a great decision today by using an extra player?"
  ],
  "lookfors": [
   "Recognises when their team has more players than defenders nearby",
   "Uses an extra player rather than crowding the ball",
   "Communicates an overload to teammates when they spot one"
  ],
  "inclusion": "Use clearly marked, smaller grids so overloads are easier to visually spot for students still developing this awareness; allow verbal prompts ('you're free!') from teammates or teacher early on.",
  "skillBreakdown": [
   {
    "step": "Count defenders near the ball to recognise when your team has an overload.",
    "why": "Spotting a numbers advantage is the first step — you can't use an overload you haven't noticed."
   },
   {
    "step": "Use the extra player rather than crowding around the ball yourself.",
    "why": "An overload only helps the team if the free player actually gets involved in the play."
   },
   {
    "step": "Communicate an overload to teammates when you see one.",
    "why": "A teammate on the ball can't always see the whole picture — your call can point them to the free option."
   }
  ],
  "value": "Manaaki",
  "valueText": "Looking after your teammates' success as much as your own — including, encouraging, and setting others up to succeed."
 },
 {
  "n": 8,
  "block": 2,
  "title": "Cover Your Mate",
  "focus": "Defensive cooperation (covering space or a teammate who's been beaten)",
  "walt": "We are learning to cover space or a teammate when they've been beaten, rather than everyone chasing the ball.",
  "wilf": [
   "I can recognise when a teammate has been beaten and needs covering",
   "I can communicate defensive information clearly to my team"
  ],
  "nzc": "Strand B, C · Relating to others",
  "equipment": "Bibs, balls, cones",
  "safety": "Standard spacing for small-sided defensive games; avoid over-crowding one area which raises collision risk",
  "games": [
   {
    "name": "Cover Shadow",
    "desc": "Pairs practise defensive cover — one defender pressures an attacker while the second 'shadows' just behind and to the side, ready to step in if the first is beaten.",
    "coach": "Don't stand square-on behind — angle yourself to cover the danger space.",
    "easier": "Attacker moves at walking pace.",
    "harder": "Attacker adds a change of direction to test the cover.",
    "chaos": "Role rotation",
    "setup": "Pairs (plus one attacker) working in a small grid roughly 6m x 6m, spaced at least 2m from neighbouring groups. No ball needed for the core pattern, though an attacker with a ball can be added.",
    "howTo": [
     "Demonstrate the cover position: one defender pressures the attacker directly while the second defender 'shadows' just behind and to the side, angled to cover the danger space rather than standing square-on.",
     "The attacker moves around the grid; the first defender pressures while the second stays in the shadow-cover position, ready to step in if the first is beaten.",
     "Coach the key message: 'don't stand square-on behind — angle yourself to cover the danger space.'",
     "Rotate roles every few reps so all three students experience attacking, pressuring, and shadowing.",
     "For 'easier', have the attacker move at walking pace; for 'harder', have the attacker add a change of direction to test the cover."
    ]
   },
   {
    "name": "Recovery Run Race",
    "desc": "After being 'beaten' in a 1v1, defenders race to recover into a useful covering position rather than chasing the ball directly, competing against a partner for who recovers into the smartest spot.",
    "coach": "Recover into the space, not just towards the ball.",
    "easier": "Slower attacker, more recovery time.",
    "harder": "Faster attacker, less recovery time.",
    "chaos": "Beat the clock",
    "setup": "Pairs in a grid roughly 8m x 8m, one attacker and one defender per pair, with a marked 'useful covering spot' as the target for the recovery run.",
    "howTo": [
     "Demonstrate a 1v1 where the defender is deliberately beaten, then must race to recover into a useful covering position rather than chasing the ball directly.",
     "The attacker moves past the defender; the defender immediately recovers toward the covering spot rather than sprinting straight at the ball.",
     "Coach the key message: 'recover into the space, not just towards the ball.'",
     "Time or compare recoveries between partners to see who recovers into the smartest spot, then swap roles.",
     "For 'easier', use a slower attacker with more recovery time; for 'harder', use a faster attacker with less recovery time."
    ]
   },
   {
    "name": "2v2 Cover Game",
    "desc": "Small 2v2 game where defenders must communicate and cover for each other whenever one is beaten, with points awarded for successful team recoveries.",
    "coach": "Call it the moment your partner is beaten — don't wait.",
    "easier": "Bigger space, slower pace.",
    "harder": "Smaller space, faster pace.",
    "chaos": "Bonus point for a verbal cover call",
    "setup": "Small groups of 4 (2v2) in a grid roughly 8m x 8m, one ball per group, spaced at least 2m from neighbouring groups.",
    "howTo": [
     "Explain the rule: defenders must communicate and cover for each other whenever one is beaten, earning points for successful team recoveries.",
     "Play a small 2v2 game; when one defender is beaten, the other must call it and cover immediately.",
     "Coach the key message: 'call it the moment your partner is beaten — don't wait.'",
     "Award a point to the defending pair whenever a successful cover recovery happens, tracked by the coach or the group itself.",
     "Rotate which pair attacks and which defends every few minutes.",
     "For 'easier', use a bigger space at a slower pace; for 'harder', use a smaller space at a faster pace."
    ]
   }
  ],
  "big": {
   "name": "Last Line Ball",
   "desc": "Small-sided game where defending teams are specifically rewarded for cooperative cover — communicating and covering for a beaten teammate — rather than individual defenders simply chasing the ball.",
   "setup": "Split into groups of 8 for small-sided games in a grid roughly 12m x 10m. One ball per game, bibs for each team.",
   "howTo": [
    "Explain the rule before starting: defending teams are specifically rewarded for cooperative cover — communicating and covering for a beaten teammate — rather than individual defenders simply chasing the ball.",
    "Play flows as a normal small-sided game; the coach or a nominated caller watches for good cover calls and awards bonus points when heard.",
    "Coach the key message throughout: 'call it the moment your partner is beaten — don't wait.'",
    "If a defender is beaten and no cover call happens, the coach can note it as a learning moment without stopping play.",
    "Rotate players on and off court every few minutes so everyone gets even game time.",
    "Keep encouraging communication over individual heroics — the whole point is defending as a connected team."
   ]
  },
  "discussion": [
   "What does 'covering' for a teammate actually look like?",
   "Why is chasing the ball as a whole defence usually a bad idea?",
   "Who communicated really well defensively today?"
  ],
  "lookfors": [
   "Recognises when a teammate has been beaten and needs covering",
   "Recovers into useful covering space rather than just chasing the ball",
   "Calls out defensive information clearly to teammates"
  ],
  "inclusion": "Simplify to a bigger space and slower pace while students learn to judge covering positions; use clear verbal cues from the teacher initially to reinforce the concept before expecting it independently.",
  "skillBreakdown": [
   {
    "step": "Recognise the moment a teammate has been beaten and needs help.",
    "why": "Cover only works if it happens quickly — noticing the moment it's needed is the whole skill."
   },
   {
    "step": "Recover into useful covering space, not just towards the ball.",
    "why": "Chasing the ball directly often leaves the real danger space open; covering space protects the team, not just the ball."
   },
   {
    "step": "Call out defensive information clearly and immediately.",
    "why": "A teammate who's just been beaten may not see the danger behind them — your call can be the thing that stops it."
   }
  ],
  "value": "Pānga",
  "valueText": "Seeing how your role today connects to the bigger team effort — a small contribution that matters once it's put together with everyone else's."
 },
 {
  "n": 9,
  "block": 2,
  "title": "Switch It Up",
  "focus": "Rotating positions/roles fluidly as a team during play",
  "walt": "We are learning to switch positions or roles smoothly during a game, keeping our team balanced as we do.",
  "wilf": [
   "I can recognise a good moment to switch roles or positions with a teammate",
   "I can communicate a switch clearly so my team stays balanced"
  ],
  "nzc": "Strand B, C · Relating to others",
  "equipment": "Bibs, balls, cones",
  "safety": "Clear calls before physical switches to avoid two players moving into the same space unexpectedly",
  "games": [
   {
    "name": "Position Swap Tag",
    "desc": "In small groups holding set positions in a grid, students practise calling and swapping positions cleanly with a teammate on a signal, without leaving gaps.",
    "coach": "Call the swap before you move, not while you're already moving.",
    "easier": "Slower pace, teacher calls the swap.",
    "harder": "Faster pace, students decide when to swap themselves.",
    "chaos": "Random constraint calls",
    "setup": "Small groups of 5-6 holding set positions marked with cones in a grid roughly 10m x 8m.",
    "howTo": [
     "Assign each student a starting position marked by a cone.",
     "On a signal, two students call and swap positions cleanly with each other, without leaving a gap uncovered.",
     "Coach the key message: 'call the swap before you move, not while you're already moving.'",
     "Continue calling swaps between different pairs of students throughout the activity.",
     "For 'easier', use a slower pace with the teacher calling the swap; for 'harder', use a faster pace with students deciding when to swap themselves."
    ]
   },
   {
    "name": "Rolling Rotation Game",
    "desc": "Small-sided game where players continuously rotate through two or three positions after set triggers (e.g. every successful pass), keeping the rotation smooth and communicated.",
    "coach": "Know which position you're rotating into before it's your turn.",
    "easier": "Slower rotation trigger.",
    "harder": "Faster, less predictable rotation trigger.",
    "chaos": "Double rotation on a bonus event",
    "setup": "Small-sided groups of 4-5 in a grid roughly 10m x 8m, with 2-3 marked positions to rotate through. One ball per group.",
    "howTo": [
     "Explain the rotation trigger: after every set event (e.g. every successful pass), players continuously rotate through two or three positions.",
     "Play flows with the ball moving around; each trigger event causes a smooth, communicated rotation to the next position.",
     "Coach the key message: 'know which position you're rotating into before it's your turn.'",
     "Keep the rotation moving continuously without long stoppages.",
     "For 'easier', use a slower rotation trigger; for 'harder', use a faster, less predictable rotation trigger."
    ]
   },
   {
    "name": "Call & Switch",
    "desc": "Partners practise switching roles mid-activity purely by calling out clearly to each other, with no other signal, building confidence in verbal-only switching.",
    "coach": "A clear call is enough — trust it and move.",
    "easier": "Only one type of switch practised.",
    "harder": "Multiple switch types called in sequence.",
    "chaos": "Role rotation",
    "setup": "Partners in an open space roughly 8m x 8m, no ball needed — this is a role-switching communication drill.",
    "howTo": [
     "Explain the rule: partners switch roles mid-activity purely by calling out clearly to each other, with no other signal used.",
     "Partners perform a simple paired activity (e.g. alternating jogging/jumping roles) and call out to switch roles whenever they choose.",
     "Coach the key message: 'a clear call is enough — trust it and move,' reinforcing that hesitation after a call slows the whole team down.",
     "Practise several switches in a row so the calling becomes confident and automatic.",
     "For 'easier', practise only one type of switch; for 'harder', chain multiple switch types together in sequence."
    ]
   }
  ],
  "big": {
   "name": "Fluid Formation Game",
   "desc": "Small-sided game requiring students to rotate positions on a clear signal or situation (such as winning the ball back), keeping team shape balanced throughout the rotations.",
   "setup": "Split into groups of 6-8 for small-sided games in a grid roughly 12m x 10m, with 2-3 marked positions to rotate through. One ball per game.",
   "howTo": [
    "Explain the rule before starting: students rotate positions on a clear signal or situation (such as winning the ball back), keeping team shape balanced throughout the rotations.",
    "Play flows normally; whenever the rotation trigger happens, players call and swap positions cleanly, without leaving gaps.",
    "Coach the key message throughout: 'call the swap before you move, not while you're already moving.'",
    "The coach highlights moments where a smooth rotation kept the team's shape strong.",
    "Rotate players on and off court every few minutes so everyone gets even game time.",
    "Keep the tone light and encouraging — a slightly messy rotation is a normal part of learning this skill."
   ]
  },
  "discussion": [
   "What made a position switch go smoothly today?",
   "What happened when a switch wasn't communicated clearly?",
   "How did your team stay balanced while switching roles?"
  ],
  "lookfors": [
   "Recognises a sensible moment to switch roles or positions",
   "Communicates a switch clearly before moving",
   "Keeps team shape balanced during and after a switch"
  ],
  "inclusion": "Start with slower, teacher-cued switches for students who need more processing time; pair confident 'switchers' with those still building this skill so switches stay smooth for everyone.",
  "skillBreakdown": [
   {
    "step": "Recognise a sensible moment to switch positions or roles with a teammate.",
    "why": "Switching at the right moment (not randomly) is what keeps the switch actually useful to the team."
   },
   {
    "step": "Communicate the switch clearly before physically moving.",
    "why": "A switch that isn't communicated can leave two players in the same space, or a gap where neither player is."
   },
   {
    "step": "Settle into the new position quickly and keep the team shape balanced.",
    "why": "A switch is only successful if the team's overall shape stays solid during and after it."
   }
  ],
  "value": "Aroha",
  "valueText": "Being patient and encouraging with teammates whose skills or confidence look different from yours, and treating everyone with kindness whether the game is going well or not."
 },
 {
  "n": 10,
  "block": 2,
  "title": "Team Huddle",
  "focus": "Reviewing & adjusting a simple team plan mid-game (Block 2 wrap-up)",
  "walt": "We are learning to use a short team huddle to review how a game is going and agree one clear adjustment.",
  "wilf": [
   "I can contribute one clear idea in a short team huddle",
   "I can help my team agree on and commit to one adjustment"
  ],
  "nzc": "Strand B, C · Relating to others",
  "equipment": "Bibs, balls, cones — combined equipment from Block 2 games",
  "safety": "Standard spacing for small-sided games; huddles kept brief and away from other games in progress",
  "games": [
   {
    "name": "60-Second Huddle Challenge",
    "desc": "Teams get exactly 60 seconds mid-game to huddle, review one thing that's working and one thing to change, and agree on it before restarting.",
    "coach": "One clear idea beats five confusing ones.",
    "easier": "Teacher offers a prompt question to guide the huddle.",
    "harder": "No prompts — team runs the huddle entirely themselves.",
    "chaos": "Beat the clock",
    "setup": "Teams of 4-5 playing a short small-sided game in a grid roughly 10m x 8m, with a clearly marked huddle spot just off to the side. One ball per team.",
    "howTo": [
     "Play a short game for a set period, then call 'huddle!' at the midway point.",
     "Teams have exactly 60 seconds to gather at their huddle spot, review one thing that's working and one thing to change, and agree on it.",
     "Coach the key message: 'one clear idea beats five confusing ones.'",
     "Restart the game immediately once the 60 seconds is up, with teams trying to apply what they just agreed.",
     "For 'easier', offer a prompt question to guide the huddle; for 'harder', give no prompts and let the team run the huddle entirely themselves."
    ]
   },
   {
    "name": "Plan & Adjust Game",
    "desc": "A small game is paused at the halfway point specifically for teams to hold a huddle and adjust something about how they're playing, before finishing the game.",
    "coach": "Adjust one thing, not everything at once.",
    "easier": "Teacher suggests possible adjustments to choose from.",
    "harder": "Team identifies its own adjustment with no suggestions.",
    "chaos": "n/a",
    "setup": "Teams of 4-5 playing a short small-sided game in a grid roughly 10m x 8m, paused once at the halfway point for a huddle. One ball per team.",
    "howTo": [
     "Start the game and let it run to the halfway point, then pause specifically for a team huddle.",
     "During the pause, the team discusses and agrees on one adjustment to how they're playing, then resumes.",
     "Coach the key message: 'adjust one thing, not everything at once.'",
     "Finish the game with the team trying to apply their agreed adjustment.",
     "For 'easier', suggest possible adjustments to choose from; for 'harder', have the team identify its own adjustment with no suggestions."
    ]
   },
   {
    "name": "Coach for a Minute",
    "desc": "One student per team takes a turn leading the huddle for a minute, practising giving clear, positive, useful input to their teammates.",
    "coach": "Lead with something the team's doing well, then one change.",
    "easier": "Rotate the 'coach' role often so it's low-pressure.",
    "harder": "Coach must justify their suggested adjustment to the team.",
    "chaos": "Role rotation",
    "setup": "Teams of 4-5 with a designated huddle spot, taking turns having one student lead the huddle for a minute. One ball per team, used before/after the huddle.",
    "howTo": [
     "One student per team takes a turn as 'coach' for a minute, leading the huddle themselves.",
     "The student-coach leads with something the team's doing well, then suggests one change, following the same structure as an adult coach would.",
     "Coach the key message: 'lead with something the team's doing well, then one change.'",
     "Rotate the coach role to a different student for the next huddle.",
     "For 'easier', rotate the coach role often to keep it low-pressure; for 'harder', require the coach to justify their suggested adjustment to the team."
    ]
   }
  ],
  "big": {
   "name": "Adjust & Win",
   "desc": "Round-robin mini-tournament where every match includes a compulsory halfway huddle; teams are encouraged to genuinely use it to adjust their play, wrapping up Block 2's cooperative play focus.",
   "setup": "Round-robin mini-tournament in groups of 8, playing short matches in a grid roughly 12m x 10m. One ball per game, bibs for each team.",
   "howTo": [
    "Explain the rule before starting: every match includes a compulsory halfway huddle, following the same structure practised in today's Skill Games.",
    "Play each short match to the halfway point, pause for the huddle, then finish the match.",
    "Teams are encouraged to genuinely use the huddle to adjust their play, not just go through the motions.",
    "The coach highlights teams that clearly applied their huddle adjustment in the second half of a match.",
    "Rotate through several short matches so every team plays multiple games.",
    "This wraps up Block 2's cooperative play focus — coach the key message throughout: one clear idea, genuinely applied, beats five confusing ones."
   ]
  },
  "discussion": [
   "What made today's huddles useful rather than just noise?",
   "What's one adjustment your team actually made and stuck to?",
   "Looking back over this whole block, how has your team supported each other better?"
  ],
  "lookfors": [
   "Contributes a clear, useful idea during a team huddle",
   "Helps the team agree on and commit to one adjustment",
   "Shows growth across Block 2 in supporting play, overloads, cover, and switching"
  ],
  "inclusion": "Give quieter students a specific, low-pressure way to contribute (e.g. one sentence each) so huddles don't get dominated by the loudest voices; keep huddles short so they stay achievable for every team.",
  "skillBreakdown": [
   {
    "step": "Contribute one clear idea during a short team huddle.",
    "why": "A huddle works best with a few clear ideas rather than everyone talking over each other."
   },
   {
    "step": "Help the team agree on and commit to a single adjustment.",
    "why": "Trying to change everything at once usually changes nothing — one clear adjustment is easier for a whole team to actually do."
   },
   {
    "step": "Return to play and genuinely follow through on the agreed adjustment.",
    "why": "A huddle is only useful if the plan discussed actually shows up in how the team plays afterwards."
   }
  ],
  "value": "Mōhio",
  "valueText": "Understanding your own strengths and how you fit into the team, and noticing what your teammates need from you in order to do their best."
 },
 {
  "n": 11,
  "block": 3,
  "title": "Read the Game",
  "focus": "Reading teammates' and opponents' movement to make shared decisions",
  "walt": "We are learning to read where space is opening up and what our teammates are about to do, so we can decide together, early.",
  "wilf": [
   "I can spot space opening up before it's obvious to everyone",
   "I can read a teammate's movement to predict what they're about to do"
  ],
  "nzc": "Strand B · Thinking",
  "equipment": "Bibs, balls, cones",
  "safety": "Standard spacing for small-sided games; encourage looking up and around rather than only at the ball",
  "games": [
   {
    "name": "Eyes On",
    "desc": "In small groups, students practise glancing up regularly during simple ball activities to spot where space or a teammate's movement is developing, rather than watching only the ball.",
    "coach": "A quick glance up is worth more than a long stare down.",
    "easier": "Slower pace, more time to look up.",
    "harder": "Faster pace, brief windows to look up.",
    "chaos": "Random constraint calls",
    "setup": "Small groups of 3-4 in a grid roughly 8m x 8m, one ball per group.",
    "howTo": [
     "Demonstrate the habit: glancing up regularly during a simple ball activity to spot where space or a teammate's movement is developing, rather than watching only the ball.",
     "Students pass and move within the grid, deliberately practising quick glances up between touches.",
     "Coach the key message: 'a quick glance up is worth more than a long stare down.'",
     "Periodically ask a student what they just saw when they looked up, to check the habit is genuinely forming.",
     "For 'easier', use a slower pace with more time to look up; for 'harder', use a faster pace with brief windows to look up."
    ]
   },
   {
    "name": "Space Spotter",
    "desc": "Students call out loud the moment they spot space opening up nearby during a small game, building the habit of noticing early rather than after the moment has passed.",
    "coach": "Call it the second you see it, not once it's obvious.",
    "easier": "Teacher highlights likely space zones in advance.",
    "harder": "No hints — students must spot space independently.",
    "chaos": "Bonus point for the earliest genuine spot",
    "setup": "Small-sided groups of 4-6 in a grid roughly 10m x 10m, one ball per group.",
    "howTo": [
     "Explain the rule: students call out loud the moment they spot space opening up nearby during the small game.",
     "Play flows normally; whenever a student notices space developing, they call it out immediately, even if they're not the one about to use it.",
     "Coach the key message: 'call it the second you see it, not once it's obvious.'",
     "The coach or teammates can acknowledge particularly early or useful spots to reinforce the habit.",
     "For 'easier', highlight likely space zones in advance; for 'harder', give no hints so students must spot space independently."
    ]
   },
   {
    "name": "React & Read Game",
    "desc": "Small-sided game where students are specifically coached to react to a teammate's body shape or eye direction as an early signal, rather than waiting for the ball or a verbal call.",
    "coach": "Body shape often tells you what's about to happen before any call does.",
    "easier": "Slower pace to give more time to read cues.",
    "harder": "Full pace with subtler cues to read.",
    "chaos": "Role rotation",
    "setup": "Small-sided groups of 4-6 in a grid roughly 10m x 10m, one ball per group.",
    "howTo": [
     "Explain the focus: reacting to a teammate's body shape or eye direction as an early signal, rather than waiting for the ball or a verbal call.",
     "Play a small-sided game with the coach specifically prompting students to watch teammates' shoulders and eyes for clues about what's coming next.",
     "Coach the key message: 'body shape often tells you what's about to happen before any call does.'",
     "Periodically pause briefly to point out a good example of someone reading a cue early.",
     "For 'easier', use a slower pace to give more time to read cues; for 'harder', use full pace with subtler cues to read."
    ]
   }
  ],
  "big": {
   "name": "Read & React Ball",
   "desc": "Small-sided invasion/possession game rewarding early decision-making — teams earn bonus points for visibly reading space or a teammate's movement and reacting before the moment becomes obvious.",
   "setup": "Split into groups of 8 for small-sided invasion/possession games in a grid roughly 12m x 10m. One ball per game, bibs for each team.",
   "howTo": [
    "Explain the bonus rule before starting: teams earn bonus points for visibly reading space or a teammate's movement and reacting before the moment becomes obvious.",
    "Play flows as a normal small-sided game; the coach or a nominated caller watches for early, well-read reactions and calls out the bonus point when spotted.",
    "Coach the key message throughout: 'a quick glance up is worth more than a long stare down,' and 'body shape often tells you what's about to happen before any call does.'",
    "If the ball is turned over, possession switches to the other team and play continues immediately.",
    "Rotate players on and off court every few minutes so everyone gets even game time.",
    "Keep encouraging players to look up and read cues early, rather than reacting only once things are obvious."
   ]
  },
  "discussion": [
   "What helped you 'read' the game a bit earlier today?",
   "What cues did you notice from a teammate's movement or body shape?",
   "Why does deciding early usually work better than deciding late?"
  ],
  "lookfors": [
   "Looks up regularly rather than only watching the ball",
   "Spots space opening up before it's obvious",
   "Reads a teammate's movement or body shape as an early signal"
  ],
  "inclusion": "Slow the pace and simplify cues for students still building this awareness; use clear, exaggerated body-shape cues early on before expecting students to read subtler signals.",
  "skillBreakdown": [
   {
    "step": "Glance up regularly to see the whole picture, not just the ball.",
    "why": "Reading the game is impossible if your eyes never leave the ball — the useful information is all around it."
   },
   {
    "step": "Spot space opening up as early as possible.",
    "why": "Space usually only stays open briefly; noticing it early gives your team time to actually use it."
   },
   {
    "step": "Read a teammate's body shape and movement as an early signal of intent.",
    "why": "Waiting for a verbal call is fine, but reading movement lets your team react even faster, together."
   }
  ],
  "value": "Manaaki",
  "valueText": "Looking after your teammates' success as much as your own — including, encouraging, and setting others up to succeed."
 },
 {
  "n": 12,
  "block": 3,
  "title": "Pick a Plan",
  "focus": "Choosing a simple attacking tactic together before play",
  "walt": "We are learning to agree on one simple attacking idea as a team before a game starts, and commit to it together.",
  "wilf": [
   "I can help my team agree on one simple attacking plan before we start",
   "I can commit to the team's plan rather than doing my own thing"
  ],
  "nzc": "Strand B, C · Thinking",
  "equipment": "Bibs, balls, cones, simple 'plan cards' or verbal prompts (e.g. 'overload one side', 'quick start', 'find the target player')",
  "safety": "Standard spacing for small-sided games",
  "games": [
   {
    "name": "Plan of the Day",
    "desc": "Before a short game, each team picks one simple attacking idea from a small set of options and briefly discusses how they'll try to use it.",
    "coach": "Pick one plan and actually try it, rather than picking nothing.",
    "easier": "Teacher assigns the plan.",
    "harder": "Team must justify why they chose their plan.",
    "chaos": "Random constraint calls",
    "setup": "Teams of 4-5 gathered briefly before a short game, with a small set of simple plan options available (written on cards or given verbally). One ball per team, grid roughly 10m x 8m.",
    "howTo": [
     "Before the game, each team picks one simple attacking idea from the small set of options (e.g. 'overload one side', 'quick start', 'find the target player').",
     "The team briefly discusses how they'll try to use their chosen plan during the upcoming short game.",
     "Coach the key message: 'pick one plan and actually try it, rather than picking nothing.'",
     "Play the short game with the team attempting to apply their chosen plan whenever the opportunity arises.",
     "For 'easier', have the teacher assign the plan; for 'harder', require the team to justify why they chose their plan."
    ]
   },
   {
    "name": "Target Player Game",
    "desc": "Teams practise a simple 'get the ball to the target player' plan, with one nominated player as the target that teammates try to consistently find and support.",
    "coach": "Look for the target early, not as a last resort.",
    "easier": "Target player can move freely to get open.",
    "harder": "Target player is shadowed by a defender.",
    "chaos": "Role rotation — target player changes each round",
    "setup": "Teams of 4-5 in a grid roughly 10m x 8m, with one nominated 'target player' per team. One ball per team.",
    "howTo": [
     "Explain the simple plan: teammates try to consistently find and support one nominated target player during the game.",
     "Play flows with the team looking to move the ball toward their target player whenever a safe option exists.",
     "Coach the key message: 'look for the target early, not as a last resort.'",
     "Rotate which student is the target player each round so everyone experiences the role.",
     "For 'easier', let the target player move freely to get open; for 'harder', have the target player shadowed by a defender."
    ]
   },
   {
    "name": "Fast Start Challenge",
    "desc": "Teams practise a simple 'quick start' plan — moving the ball forward fast in the first few seconds of a restart — and reflect on how well they executed it as a team.",
    "coach": "Decide the plan before the restart, not during it.",
    "easier": "Extra time before the restart begins.",
    "harder": "Restart begins with minimal warning.",
    "chaos": "Beat the clock",
    "setup": "Teams of 4-5 in a grid roughly 10m x 8m, practising restarts from a marked starting point. One ball per team.",
    "howTo": [
     "Explain the simple plan: move the ball forward fast in the first few seconds of a restart.",
     "The team agrees on their fast-start plan before the restart, then executes it as quickly and cleanly as possible once play begins.",
     "Coach the key message: 'decide the plan before the restart, not during it.'",
     "After each restart, briefly reflect as a team on how well they executed the plan before resetting for another attempt.",
     "For 'easier', give extra time before the restart begins; for 'harder', begin the restart with minimal warning."
    ]
   }
  ],
  "big": {
   "name": "Plan & Play",
   "desc": "Series of short mini-matches where each team selects one simple attacking tactic before every game and is specifically reviewed afterwards on how well they committed to and executed it together.",
   "setup": "Series of short mini-matches in groups of 8, in a grid roughly 12m x 10m. One ball per game, bibs for each team.",
   "howTo": [
    "Before every mini-match, each team selects one simple attacking tactic from today's Skill Games (target player, fast start, or their own plan).",
    "Play the short mini-match with the team trying to commit to and execute their chosen tactic.",
    "After each mini-match, the coach briefly reviews with each team how well they committed to and executed their plan together.",
    "Coach the key message throughout: 'pick one plan and actually try it, rather than picking nothing.'",
    "Rotate opponents between mini-matches so teams get several short games in a row.",
    "Rotate players on and off court every few minutes so everyone gets even game time."
   ]
  },
  "discussion": [
   "What plan did your team choose today, and why?",
   "How well did your team actually commit to the plan?",
   "What would you choose differently next time?"
  ],
  "lookfors": [
   "Contributes to choosing a simple team attacking plan",
   "Commits to the team's plan during play",
   "Reflects honestly on how well the plan worked"
  ],
  "inclusion": "Offer a small, clear set of plan options (rather than open-ended) for teams still building tactical thinking; allow shy students to vote rather than needing to propose ideas out loud.",
  "skillBreakdown": [
   {
    "step": "Help your team agree on one simple, clear attacking idea before starting.",
    "why": "A team with one shared idea moves with purpose; a team with no plan (or five different ones) tends to collide with itself."
   },
   {
    "step": "Commit to the team's plan during play, even if your own instinct says something different.",
    "why": "A plan only works if everyone actually follows it — a great individual idea that ignores the team plan can undo it."
   },
   {
    "step": "Reflect honestly afterwards on how well the plan worked.",
    "why": "Noticing what worked (or didn't) about today's plan is what makes tomorrow's plan better."
   }
  ],
  "value": "Pānga",
  "valueText": "Seeing how your role today connects to the bigger team effort — a small contribution that matters once it's put together with everyone else's."
 },
 {
  "n": 13,
  "block": 3,
  "title": "Hold the Line",
  "focus": "Simple defensive shape & shared responsibility as a team",
  "walt": "We are learning to keep a simple, connected defensive shape together as a team, rather than defending as separate individuals.",
  "wilf": [
   "I can help my team stay compact rather than too spread out defensively",
   "I can communicate who I'm covering or marking to my teammates"
  ],
  "nzc": "Strand B, C · Relating to others",
  "equipment": "Bibs, balls, cones to mark a simple defensive zone",
  "safety": "Standard spacing for small-sided defensive games",
  "games": [
   {
    "name": "Shape Shuffle",
    "desc": "A small defending group practises shuffling sideways together as a connected line in response to the ball's movement, without any one player drifting far from the group.",
    "coach": "Move as a line, not as individuals chasing separately.",
    "easier": "Slower ball movement to track.",
    "harder": "Faster, less predictable ball movement.",
    "chaos": "Random constraint calls",
    "setup": "Small defending groups of 4 in a grid roughly 10m x 8m, with an attacking group or coach moving a ball around to react to.",
    "howTo": [
     "Demonstrate the connected-line idea: the defending group shuffles sideways together as a line in response to the ball's movement, without any one player drifting far from the group.",
     "The ball (held by an attacker or the coach) moves side to side across the grid; the defending group shuffles to track it as a connected unit.",
     "Coach the key message: 'move as a line, not as individuals chasing separately.'",
     "Watch for any player drifting away from the line and gently guide them back into position.",
     "For 'easier', use slower ball movement to track; for 'harder', use faster, less predictable ball movement."
    ]
   },
   {
    "name": "Zone Hold",
    "desc": "Defenders are each given a simple zone to hold rather than a specific player to chase, practising staying compact and covering the zone as the ball moves around them.",
    "coach": "Hold your zone — don't get pulled out of it chasing the ball.",
    "easier": "Bigger, more forgiving zones.",
    "harder": "Smaller, tighter zones requiring more discipline.",
    "chaos": "Bonus point for a zone genuinely held under pressure",
    "setup": "Small defending groups of 4 in a grid roughly 10m x 8m, divided into individual marked zones using cones. One ball for an attacking side or coach to move.",
    "howTo": [
     "Assign each defender a simple zone to hold, marked with cones, rather than a specific player to chase.",
     "As the ball moves around the grid, defenders stay in their zone and cover it, rather than being pulled out of position chasing the ball.",
     "Coach the key message: 'hold your zone — don't get pulled out of it chasing the ball.'",
     "If a defender does get pulled out, calmly guide them back to their zone once there's a pause in play.",
     "For 'easier', use bigger, more forgiving zones; for 'harder', use smaller, tighter zones requiring more discipline."
    ]
   },
   {
    "name": "Connected Defence Game",
    "desc": "Small-sided game where the defending team is rewarded specifically for staying connected and compact as a shape, rather than for individual tackles or turnovers alone.",
    "coach": "Check the players either side of you, not just the ball.",
    "easier": "Slower-paced attacking team to defend against.",
    "harder": "Faster-paced attacking team, tighter space.",
    "chaos": "Role rotation between defence and attack",
    "setup": "Small-sided groups of 8 (4 attackers, 4 defenders) in a grid roughly 12m x 10m. One ball per group.",
    "howTo": [
     "Explain the rule: the defending team is rewarded specifically for staying connected and compact as a shape, rather than for individual tackles or turnovers alone.",
     "Play flows as a small-sided game; the coach or a nominated caller watches for good compact shape and awards points when spotted.",
     "Coach the key message: 'check the players either side of you, not just the ball.'",
     "Rotate which group of four attacks and which defends every few minutes.",
     "For 'easier', defend against a slower-paced attacking team; for 'harder', defend against a faster-paced attacking team in tighter space."
    ]
   }
  ],
  "big": {
   "name": "Hold the Line",
   "desc": "Small-sided game where defending teams earn bonus points for maintaining a compact, connected defensive shape and clearly communicating coverage, on top of standard game outcomes.",
   "setup": "Split into groups of 8 for small-sided games in a grid roughly 12m x 10m. One ball per game, bibs for each team.",
   "howTo": [
    "Explain the bonus rule before starting: defending teams earn bonus points for maintaining a compact, connected defensive shape and clearly communicating coverage, on top of standard game outcomes.",
    "Play flows as a normal small-sided game; the coach or a nominated caller watches for compact shape and clear coverage calls.",
    "Coach the key message throughout: 'move as a line, not as individuals chasing separately,' and 'check the players either side of you, not just the ball.'",
    "Award the bonus points during play when the defending team demonstrates good connected shape.",
    "Rotate players on and off court every few minutes so everyone gets even game time on both attack and defence.",
    "Keep the tone encouraging — compact, connected defending is a genuinely difficult skill to build as a team."
   ]
  },
  "discussion": [
   "What did 'staying connected' as a defence actually feel like today?",
   "What happened when someone drifted away from the group to chase the ball?",
   "How did communicating coverage help your team's defensive shape?"
  ],
  "lookfors": [
   "Stays compact rather than drifting far from the defensive group",
   "Communicates who or what they're covering",
   "Adjusts position based on teammates' positions, not just the ball"
  ],
  "inclusion": "Use clear zone markers (cones/lines) for students still learning to judge defensive spacing independently; simplify to slower-paced attacking play while the shape concept is being learned.",
  "skillBreakdown": [
   {
    "step": "Stay compact and connected to your defensive teammates rather than chasing the ball alone.",
    "why": "A defence that stays connected closes down space as a unit; individuals chasing the ball leave gaps everywhere else."
   },
   {
    "step": "Communicate clearly who or what you're covering.",
    "why": "A defensive shape only holds together if everyone knows their job and their teammates' jobs too."
   },
   {
    "step": "Adjust your position based on your teammates' positions, not just the ball's position.",
    "why": "Good defensive shape means reacting to the whole picture, since the ball alone doesn't tell you where the danger is."
   }
  ],
  "value": "Aroha",
  "valueText": "Being patient and encouraging with teammates whose skills or confidence look different from yours, and treating everyone with kindness whether the game is going well or not."
 },
 {
  "n": 14,
  "block": 3,
  "title": "Change of Plan",
  "focus": "Adapting tactics when the first plan isn't working (in-game problem solving)",
  "walt": "We are learning to notice when our plan isn't working and adapt it together as a team, without blame.",
  "wilf": [
   "I can recognise when our team's plan isn't working",
   "I can help my team try something different, calmly and without blame"
  ],
  "nzc": "Strand B, C · Thinking",
  "equipment": "Bibs, balls, cones",
  "safety": "Standard spacing for small-sided games",
  "games": [
   {
    "name": "Plan B Practice",
    "desc": "Teams start a short game with one plan, but the teacher signals partway through that it 'isn't working' and teams must quickly agree and switch to a different simple approach.",
    "coach": "Switch calmly — a change of plan isn't a failure.",
    "easier": "Teacher suggests the new plan.",
    "harder": "Team must come up with Plan B entirely themselves.",
    "chaos": "Random signal timing",
    "setup": "Teams of 4-5 in a grid roughly 10m x 8m, starting a short game with an agreed initial plan. One ball per team.",
    "howTo": [
     "Teams agree on one simple plan before starting a short game.",
     "Partway through, the coach signals that the plan 'isn't working,' and the team must quickly agree on and switch to a different simple approach.",
     "Coach the key message: 'switch calmly — a change of plan isn't a failure.'",
     "Continue the game with the team trying to apply their new Plan B.",
     "For 'easier', have the teacher suggest the new plan; for 'harder', require the team to come up with Plan B entirely themselves."
    ]
   },
   {
    "name": "Adapt or Repeat",
    "desc": "After each short round, teams reflect honestly on whether their plan worked, and either adapt it slightly or repeat it deliberately, based on that honest reflection.",
    "coach": "Be honest about what actually happened, not what you hoped happened.",
    "easier": "Teacher guides the reflection with prompt questions.",
    "harder": "Team runs its own reflection with no prompts.",
    "chaos": "n/a",
    "setup": "Teams of 4-5 playing several short rounds in a grid roughly 10m x 8m, with a brief reflection pause between rounds. One ball per team.",
    "howTo": [
     "Play a short round with the team's chosen plan, then pause briefly for honest reflection.",
     "The team discusses honestly whether their plan worked, and either adapts it slightly or repeats it deliberately based on that reflection.",
     "Coach the key message: 'be honest about what actually happened, not what you hoped happened.'",
     "Play the next round applying the team's decision (adapted or repeated plan).",
     "For 'easier', guide the reflection with prompt questions; for 'harder', let the team run its own reflection with no prompts."
    ]
   },
   {
    "name": "Signal to Switch",
    "desc": "Practising a simple, agreed team signal (word or gesture) that any player can use mid-game to suggest the team try something different, without needing a full stop in play.",
    "coach": "Keep the signal quick and blame-free.",
    "easier": "Only the designated 'captain' can give the signal.",
    "harder": "Any player can give the signal at any time.",
    "chaos": "Role rotation",
    "setup": "Teams of 4-5 in a grid roughly 10m x 8m, agreeing on one simple signal (word or gesture) before starting. One ball per team.",
    "howTo": [
     "Before play, the team agrees on one quick, blame-free signal (a word or a gesture) that means 'let's try something different.'",
     "Play a short game; any player can use the agreed signal mid-game to suggest the team try something different, without needing a full stop in play.",
     "Coach the key message: 'keep the signal quick and blame-free.'",
     "When the signal is given, the team adjusts smoothly and keeps playing rather than stopping to discuss at length.",
     "For 'easier', only the designated 'captain' can give the signal; for 'harder', any player can give the signal at any time."
    ]
   }
  ],
  "big": {
   "name": "Adapt & Overcome",
   "desc": "Small-sided games where the teacher deliberately changes a condition partway through (space, numbers, or rules), forcing teams to notice their plan isn't working and calmly adapt together.",
   "setup": "Split into groups of 8 for small-sided games in a grid roughly 12m x 10m. One ball per game, bibs for each team.",
   "howTo": [
    "Explain before starting that the coach will deliberately change a condition partway through the game (the available space, the numbers on each side, or a rule).",
    "Play flows normally until the coach makes the change, at which point teams must notice their plan isn't working under the new condition and calmly adapt together.",
    "Coach the key message throughout: 'switch calmly — a change of plan isn't a failure.'",
    "Highlight teams that adapt smoothly and communicate well when the condition changes.",
    "Rotate players on and off court every few minutes so everyone gets even game time.",
    "Keep the changes fair and clearly announced so adapting feels like a shared team challenge, not a surprise trick."
   ]
  },
  "discussion": [
   "How did your team notice the plan wasn't working today?",
   "What did a calm, blame-free change of plan sound like?",
   "Why is adapting a plan a strength, not a sign of failure?"
  ],
  "lookfors": [
   "Recognises when a team plan isn't working",
   "Suggests or supports an adaptation calmly, without blaming teammates",
   "Helps the team commit to the new approach quickly"
  ],
  "inclusion": "Provide simple, ready-made 'Plan B' options for teams still building this flexibility; explicitly praise calm, blame-free adaptation when you see it to reinforce the norm.",
  "skillBreakdown": [
   {
    "step": "Notice honestly when your team's plan isn't working.",
    "why": "A team can't adapt to a problem it hasn't recognised — honest noticing is the first step."
   },
   {
    "step": "Suggest or support a change calmly, without blaming a teammate.",
    "why": "Blame shuts down a team's ability to think clearly together; calm suggestions keep everyone focused on solving the problem."
   },
   {
    "step": "Commit to the new approach quickly once the team agrees to it.",
    "why": "A good adaptation is wasted if the team doesn't actually follow through and try it properly."
   }
  ],
  "value": "Mōhio",
  "valueText": "Understanding your own strengths and how you fit into the team, and noticing what your teammates need from you in order to do their best."
 },
 {
  "n": 15,
  "block": 3,
  "title": "Team Captain for a Day",
  "focus": "Shared leadership & decision-making (Block 3 wrap-up)",
  "walt": "We are learning to make decisions that consider the whole team, and to communicate those decisions clearly and kindly.",
  "wilf": [
   "I can make a decision that considers what the whole team needs, not just myself",
   "I can accept it when the team's decision is different from my own idea"
  ],
  "nzc": "Strand B, C · Relating to others",
  "equipment": "Bibs, balls, cones — combined equipment from Block 3 games",
  "safety": "Standard spacing for small-sided games",
  "games": [
   {
    "name": "Captain's Call",
    "desc": "Each student takes a brief turn as 'captain', making one simple tactical call for their team (e.g. a plan choice or a positional adjustment) that the team then tries out.",
    "coach": "A good captain thinks about the whole team, not just their own game.",
    "easier": "Captain chooses from a small set of suggested calls.",
    "harder": "Captain must justify their call to the team.",
    "chaos": "Role rotation every 90 seconds",
    "setup": "Teams of 4-5 in a grid roughly 10m x 8m, taking brief turns as 'captain.' One ball per team.",
    "howTo": [
     "Each student takes a brief turn as captain, making one simple tactical call for their team (e.g. a plan choice or a positional adjustment).",
     "The team then tries out the captain's call during a short period of play.",
     "Coach the key message: 'a good captain thinks about the whole team, not just their own game.'",
     "Rotate the captain role to a new student every 90 seconds or so.",
     "For 'easier', have the captain choose from a small set of suggested calls; for 'harder', require the captain to justify their call to the team."
    ]
   },
   {
    "name": "Leadership Carousel",
    "desc": "Students rotate through short leadership tasks — calling a huddle, suggesting a plan, organising a positional switch — practising different aspects of shared leadership.",
    "coach": "Leadership can be quiet and clear — it doesn't have to be loud.",
    "easier": "Tasks kept simple and short.",
    "harder": "Tasks combined or extended for confident leaders.",
    "chaos": "n/a",
    "setup": "Small groups of 4-5 rotating through 3 short leadership tasks (calling a huddle, suggesting a plan, organising a positional switch), each lasting a minute or two.",
    "howTo": [
     "Explain the three tasks students will rotate through: calling a huddle, suggesting a plan, and organising a positional switch.",
     "Each student takes a turn leading one task before rotating to the next.",
     "Coach the key message: 'leadership can be quiet and clear — it doesn't have to be loud.'",
     "Rotate through the tasks until every student has led at least one.",
     "For 'easier', keep tasks simple and short; for 'harder', combine or extend tasks for confident leaders."
    ]
   },
   {
    "name": "Decide Together",
    "desc": "Small teams are given a simple scenario and a short time limit to decide on one team response together, practising quick, inclusive decision-making under time pressure.",
    "coach": "Everyone gets heard, then the team decides and moves on.",
    "easier": "Longer time limit, fewer scenario options.",
    "harder": "Shorter time limit, more complex scenarios.",
    "chaos": "Beat the clock",
    "setup": "Small teams of 4-5 given a simple scenario card or verbal prompt, with a short time limit to decide as a group. No ball needed for the decision-making itself.",
    "howTo": [
     "Give each team a simple scenario (e.g. 'you're down by one goal with two minutes left — what's your plan?') and a short time limit.",
     "The team discusses and decides on one team response together within the time limit, making sure everyone gets heard.",
     "Coach the key message: 'everyone gets heard, then the team decides and moves on.'",
     "Once decided, teams can briefly explain their decision before moving to the next scenario.",
     "For 'easier', give a longer time limit with fewer scenario options; for 'harder', use a shorter time limit with more complex scenarios."
    ]
   }
  ],
  "big": {
   "name": "Captain's Cup",
   "desc": "Small tournament where a rotating student 'captain' on each team makes the key tactical calls each game, wrapping up Block 3's focus on shared decision-making, reading the game, and adapting tactics.",
   "setup": "Small tournament in groups of 8, playing short matches in a grid roughly 12m x 10m, with a rotating student captain per team. One ball per game, bibs for each team.",
   "howTo": [
    "Explain the format before starting: a rotating student captain on each team makes the key tactical calls each game.",
    "Play short matches with each team's captain making calls, drawing on today's leadership and decision-making practice.",
    "Coach the key message throughout: 'a good captain thinks about the whole team, not just their own game.'",
    "Rotate the captain role to a new student for each new match so everyone experiences leading.",
    "Rotate players on and off court every few minutes so everyone gets even game time.",
    "This wraps up Block 3's focus on shared decision-making, reading the game, and adapting tactics — keep the tone encouraging for every captain's calls, confident or hesitant."
   ]
  },
  "discussion": [
   "What did good, shared leadership look like today?",
   "How did it feel to make a call that the whole team then followed?",
   "Looking back over this whole block, how has your team's decision-making improved?"
  ],
  "lookfors": [
   "Makes decisions that consider the whole team, not just themselves",
   "Communicates decisions clearly and kindly",
   "Shows growth across Block 3 in reading the game, planning, defensive shape, and adapting"
  ],
  "inclusion": "Give every student a genuine turn at a leadership task, including quieter students, with support structures (prompts, smaller decisions) so leadership feels achievable for everyone.",
  "skillBreakdown": [
   {
    "step": "Make decisions that consider what the whole team needs.",
    "why": "Leadership in a team game means thinking beyond your own preference to what will actually help everyone."
   },
   {
    "step": "Communicate a decision clearly and kindly, even under time pressure.",
    "why": "A good decision is only useful if the team understands it — clarity and kindness both help it land well."
   },
   {
    "step": "Accept it gracefully when the team's decision differs from your own idea.",
    "why": "Shared leadership means everyone gets heard, but not everyone's idea is chosen every time — accepting that is part of being a good teammate."
   }
  ],
  "value": "Manaaki",
  "valueText": "Looking after your teammates' success as much as your own — including, encouraging, and setting others up to succeed."
 },
 {
  "n": 16,
  "block": 4,
  "title": "Mixed-Up Teams",
  "focus": "Working effectively with new or unfamiliar teammates",
  "walt": "We are learning to quickly build a working team with people we haven't played with before.",
  "wilf": [
   "I can introduce myself and share what I'm good at with new teammates",
   "I can adapt my role quickly to fit into a new team"
  ],
  "nzc": "Strand C · Participating and contributing",
  "equipment": "Bibs (multiple colours for re-mixing), balls, cones",
  "safety": "Standard spacing for small-sided games; ensure re-mixed teams stay balanced for fair, safe competition",
  "games": [
   {
    "name": "Quick Team Quiz",
    "desc": "Newly mixed teams have 60 seconds to find out one strength from every teammate before their first game together.",
    "coach": "Ask, don't assume — you might be surprised what a new teammate is good at.",
    "easier": "Teacher provides simple prompt questions.",
    "harder": "Teams design their own quick questions.",
    "chaos": "Beat the clock",
    "setup": "Newly mixed teams of 4-5 gathered briefly before their first game together, no equipment needed for the quiz itself.",
    "howTo": [
     "As soon as teams are mixed, give them exactly 60 seconds to find out one strength from every teammate.",
     "Students go around the group quickly asking each other what they're good at or enjoy, listening for genuine answers.",
     "Coach the key message: 'ask, don't assume — you might be surprised what a new teammate is good at.'",
     "Once the 60 seconds is up, move straight into the team's first game together.",
     "For 'easier', provide simple prompt questions; for 'harder', have teams design their own quick questions."
    ]
   },
   {
    "name": "New Faces Rondo",
    "desc": "Small possession games played entirely in freshly mixed groups, focusing on quickly re-establishing calls, spacing, and support with new teammates.",
    "coach": "Use the same clear calls you'd use with any team.",
    "easier": "Slower pace to allow adjustment time.",
    "harder": "Full pace, less settling-in time.",
    "chaos": "Role rotation",
    "setup": "Freshly mixed small groups of 4-5 in a grid roughly 10m x 8m, one ball per group.",
    "howTo": [
     "Play a small possession game entirely in the newly mixed groups.",
     "Focus specifically on quickly re-establishing calls, spacing, and support with these new teammates, using the same habits built earlier in the unit.",
     "Coach the key message: 'use the same clear calls you'd use with any team.'",
     "Keep the game light and low-pressure — the goal is settling in, not competing hard yet.",
     "For 'easier', use a slower pace to allow adjustment time; for 'harder', use full pace with less settling-in time."
    ]
   },
   {
    "name": "Fast Bonding Challenge",
    "desc": "Newly mixed teams complete a short cooperative challenge (not necessarily ball-based) that requires quick communication and trust before their first proper game.",
    "coach": "A quick, genuine connection now pays off once the game starts.",
    "easier": "Simpler challenge, more time allowed.",
    "harder": "More complex challenge, tighter time limit.",
    "chaos": "Beat the clock",
    "setup": "Newly mixed teams of 4-5 given a short cooperative challenge (not necessarily ball-based), with clear space to complete it. Simple equipment as needed for the chosen challenge.",
    "howTo": [
     "Explain the short cooperative challenge to the newly mixed team, making clear it requires quick communication and trust.",
     "The team works together to complete the challenge before their first proper game.",
     "Coach the key message: 'a quick, genuine connection now pays off once the game starts.'",
     "Move straight into the team's first game once the challenge is complete.",
     "For 'easier', use a simpler challenge with more time allowed; for 'harder', use a more complex challenge with a tighter time limit."
    ]
   }
  ],
  "big": {
   "name": "Shuffle Cup",
   "desc": "Mini-tournament where teams are re-mixed between rounds, requiring students to quickly rebuild working communication, roles, and trust with new teammates each time.",
   "setup": "Mini-tournament in groups of 8, with teams re-mixed between rounds. Grid roughly 12m x 10m per game, one ball per game, multiple bib colours for re-mixing.",
   "howTo": [
    "Explain the format before starting: teams are re-mixed between rounds, requiring students to quickly rebuild working communication, roles, and trust with new teammates each time.",
    "Play a short round with the current team mix, then re-mix teams using new bib combinations before the next round.",
    "Encourage each newly mixed team to briefly apply the Quick Team Quiz or Fast Bonding Challenge approach before their round starts.",
    "Coach the key message throughout: 'ask, don't assume,' and 'a quick, genuine connection now pays off once the game starts.'",
    "Continue through several rounds of re-mixed teams.",
    "Rotate players on and off court every few minutes within each round so everyone gets even game time."
   ]
  },
  "discussion": [
   "What helped you settle into a new team quickly today?",
   "What did you learn about a teammate you hadn't played with before?",
   "Why is being able to work with anyone a genuinely useful skill?"
  ],
  "lookfors": [
   "Introduces themselves and shares strengths with new teammates",
   "Adapts their role quickly to fit a new team's needs",
   "Uses the same clear communication skills regardless of who they're playing with"
  ],
  "inclusion": "Mix teams thoughtfully so no student is repeatedly the only unfamiliar face in a group; give a little extra settling-in time for students who find new social groupings harder.",
  "skillBreakdown": [
   {
    "step": "Introduce yourself and quickly find out a new teammate's strengths.",
    "why": "A team works faster together once everyone knows roughly what everyone else brings to it."
   },
   {
    "step": "Adapt your role to fit what a new team actually needs.",
    "why": "The role you play in a new group might be different from your usual one — flexibility helps the team come together fast."
   },
   {
    "step": "Use the same communication and support skills you'd use with any team.",
    "why": "The teamwork skills built all unit — clear calls, space, roles, trust — work with any group of teammates, not just familiar ones."
   }
  ],
  "value": "Pānga",
  "valueText": "Seeing how your role today connects to the bigger team effort — a small contribution that matters once it's put together with everyone else's."
 },
 {
  "n": 17,
  "block": 4,
  "title": "Under Pressure",
  "focus": "Team composure & communication under competitive pressure",
  "walt": "We are learning to keep communicating calmly and support each other even when a game gets competitive or tense.",
  "wilf": [
   "I can keep talking to my team even when the pressure is on",
   "I can use a calm reset after a mistake, especially under pressure"
  ],
  "nzc": "Strand C · Relating to others",
  "equipment": "Bibs, balls, cones, simple scoreboard or points system",
  "safety": "Standard spacing for competitive small-sided games; monitor tone to keep pressure fun and healthy rather than harsh",
  "games": [
   {
    "name": "Pressure Cooker Game",
    "desc": "Short, closely scored small-sided games with a visible scoreboard, specifically coaching students to keep communicating clearly even as the pressure builds.",
    "coach": "Talk more, not less, when it gets tight.",
    "easier": "Lower-stakes scoring, more relaxed pace.",
    "harder": "Tight scoring margins, faster pace.",
    "chaos": "Beat the clock — sudden-death finish",
    "setup": "Small-sided teams of 4-5 in a grid roughly 10m x 8m, with a visible scoreboard or points tally. One ball per game.",
    "howTo": [
     "Play short, closely scored small-sided games with a visible scoreboard, keeping the margin close where possible.",
     "Specifically coach students to keep communicating clearly even as the pressure builds toward the end of the game.",
     "Coach the key message: 'talk more, not less, when it gets tight.'",
     "Keep score visible and announce it periodically to maintain the pressure.",
     "For 'easier', use lower-stakes scoring at a more relaxed pace; for 'harder', use tight scoring margins at a faster pace.",
     "For 'chaos', add a sudden-death finish once the game is close."
    ]
   },
   {
    "name": "Calm Call Challenge",
    "desc": "Teams agree on one simple 'reset phrase' to use immediately after any mistake during a competitive small game, practising calm recovery under pressure.",
    "coach": "Say the reset phrase, then move on — no dwelling on it.",
    "easier": "Teacher suggests example reset phrases.",
    "harder": "Team creates and commits to their own phrase.",
    "chaos": "n/a",
    "setup": "Teams of 4-5 agreeing on one simple 'reset phrase' before starting a short competitive game. Grid roughly 10m x 8m, one ball per team.",
    "howTo": [
     "Before starting, each team agrees on one simple 'reset phrase' to use immediately after any mistake during the game.",
     "Play a short competitive small game; whenever a mistake happens, the team says their reset phrase and moves straight on.",
     "Coach the key message: 'say the reset phrase, then move on — no dwelling on it.'",
     "Keep an eye out for teams that use the phrase genuinely and calmly rather than sarcastically.",
     "For 'easier', suggest example reset phrases; for 'harder', have the team create and commit to their own phrase."
    ]
   },
   {
    "name": "Comeback Game",
    "desc": "Teams start a short game already behind on an artificial scoring handicap and must communicate and support each other to work back into it.",
    "coach": "A deficit is a challenge to solve together, not a reason to go quiet.",
    "easier": "Smaller starting deficit.",
    "harder": "Bigger starting deficit, shorter time to close it.",
    "chaos": "Random deficit size",
    "setup": "Teams of 4-5 starting a short game with an artificial scoring handicap already in place (e.g. starting 2 points behind). Grid roughly 10m x 8m, one ball per team.",
    "howTo": [
     "Explain the setup: the team starts the short game already behind on an artificial scoring handicap.",
     "The team must communicate and support each other to work back into the game from behind.",
     "Coach the key message: 'a deficit is a challenge to solve together, not a reason to go quiet.'",
     "Track the score throughout so the team can see their progress closing the gap.",
     "For 'easier', use a smaller starting deficit; for 'harder', use a bigger starting deficit with a shorter time to close it."
    ]
   }
  ],
  "big": {
   "name": "High Stakes Ball",
   "desc": "Competitive small-sided games with a visible scoreboard and genuine stakes, specifically coached and reviewed on how well teams maintained communication and composure under pressure.",
   "setup": "Split into groups of 8 for competitive small-sided games in a grid roughly 12m x 10m, with a visible scoreboard and genuine stakes. One ball per game, bibs for each team.",
   "howTo": [
    "Play competitive small-sided games with real, visible scoring — these are meant to feel like genuine competition, not just practice.",
    "Specifically coach and review how well teams maintained communication and composure under pressure throughout.",
    "Coach the key message throughout: 'talk more, not less, when it gets tight,' and 'say the reset phrase, then move on.'",
    "After each game, briefly ask teams to reflect on how well they kept communicating when things got tight.",
    "Rotate players on and off court every few minutes so everyone gets even game time.",
    "Keep the tone genuinely competitive but positive — pressure should feel exciting, not harsh."
   ]
  },
  "discussion": [
   "What changed in how your team talked to each other as the pressure went up?",
   "How did your reset phrase help after a mistake today?",
   "Who stayed calm and supportive under pressure today — what did you notice?"
  ],
  "lookfors": [
   "Keeps communicating clearly as competitive pressure increases",
   "Uses a calm reset after a mistake rather than dwelling on it",
   "Supports teammates who are struggling under pressure"
  ],
  "inclusion": "Keep genuine stakes light and fun rather than high-stress for students who find competition anxiety-inducing; check in with any student who seems overwhelmed and adjust the pressure level for them.",
  "skillBreakdown": [
   {
    "step": "Keep communicating clearly even as a game becomes more competitive.",
    "why": "Communication is often the first thing that breaks down under pressure — but it's exactly when a team needs it most."
   },
   {
    "step": "Use a calm, agreed reset phrase immediately after a mistake.",
    "why": "A quick, calm reset stops one mistake from turning into several by keeping the team's focus on what's next."
   },
   {
    "step": "Actively support a teammate who's visibly struggling under pressure.",
    "why": "Pressure affects teammates differently — noticing and supporting a struggling teammate keeps the whole team performing, not just individuals."
   }
  ],
  "value": "Aroha",
  "valueText": "Being patient and encouraging with teammates whose skills or confidence look different from yours, and treating everyone with kindness whether the game is going well or not."
 },
 {
  "n": 18,
  "block": 4,
  "title": "Everyone Plays a Part",
  "focus": "Inclusive team play — valuing every teammate's contribution",
  "walt": "We are learning to make sure every teammate gets genuinely involved, and to value contributions beyond just scoring.",
  "wilf": [
   "I can help make sure every teammate gets a genuine touch or involvement in the game",
   "I can recognise and value a teammate's contribution, even if it isn't a score"
  ],
  "nzc": "Strand C · Participating and contributing",
  "equipment": "Bibs, balls, cones",
  "safety": "Standard spacing for small-sided games",
  "games": [
   {
    "name": "Everyone Touches Game",
    "desc": "Small-sided game where a team can only score after the ball has been touched by every teammate at least once in that possession, encouraging genuine inclusion.",
    "coach": "Look for the teammate who hasn't touched it yet.",
    "easier": "Fewer players per team, more time per possession.",
    "harder": "More players per team, tighter time limits.",
    "chaos": "Bonus point for the quietest player's contribution",
    "setup": "Small-sided teams of 4-5 in a grid roughly 10m x 8m, one ball per team.",
    "howTo": [
     "Explain the rule: a team can only score after the ball has been touched by every teammate at least once in that possession.",
     "Play flows with teams working the ball around, deliberately looking for teammates who haven't touched it yet before attempting to score.",
     "Coach the key message: 'look for the teammate who hasn't touched it yet.'",
     "If possession is lost before everyone has touched the ball, simply restart the count once the team regains possession.",
     "For 'easier', use fewer players per team with more time per possession; for 'harder', use more players per team with tighter time limits."
    ]
   },
   {
    "name": "Value Spotter",
    "desc": "After a short game, students identify one teammate's valuable contribution that wasn't a score — a good call, a smart cover, a great pass, strong encouragement.",
    "coach": "Look beyond the scoreboard for what actually helped the team.",
    "easier": "Teacher offers example contribution types to look for.",
    "harder": "Students identify contribution types independently.",
    "chaos": "n/a",
    "setup": "Teams of 4-5 gathered briefly after a short game, no equipment needed for the discussion itself.",
    "howTo": [
     "Play a short small-sided game as normal.",
     "Afterwards, each student identifies one teammate's valuable contribution that wasn't a score — a good call, a smart cover, a great pass, strong encouragement.",
     "Coach the key message: 'look beyond the scoreboard for what actually helped the team.'",
     "Go around the group so everyone both gives and receives a specific piece of recognition.",
     "For 'easier', offer example contribution types to look for; for 'harder', have students identify contribution types independently."
    ]
   },
   {
    "name": "Inclusive Rotation Game",
    "desc": "Small-sided game with a rotation rule ensuring every player takes a turn in a key role (e.g. feeder, finisher, defender) regardless of confidence level.",
    "coach": "Every role matters — commit fully to whichever one is yours.",
    "easier": "Simple, predictable rotation order.",
    "harder": "Rotation triggered by unpredictable game events.",
    "chaos": "Role rotation",
    "setup": "Small-sided teams of 4-5 in a grid roughly 10m x 8m, with a rotation rule ensuring every player takes a turn in a key role. One ball per team.",
    "howTo": [
     "Explain the rotation rule: every player must take a turn in a key role (e.g. feeder, finisher, defender) regardless of confidence level.",
     "Play flows with roles rotating on a set trigger or time interval, making sure no student is stuck in the same role the whole game.",
     "Coach the key message: 'every role matters — commit fully to whichever one is yours.'",
     "Keep track (informally) that every student has had a turn in each key role by the end of the game.",
     "For 'easier', use a simple, predictable rotation order; for 'harder', trigger rotation by unpredictable game events."
    ]
   }
  ],
  "big": {
   "name": "All In",
   "desc": "Small-sided games played under an 'everyone touches before scoring' rule, with the teacher specifically highlighting and celebrating non-scoring contributions from every player.",
   "setup": "Split into groups of 8 for small-sided games in a grid roughly 12m x 10m, playing under the 'everyone touches before scoring' rule. One ball per game, bibs for each team.",
   "howTo": [
    "Explain the rule before starting: the ball must be touched by every teammate at least once in a possession before the team can score, exactly as practised in Everyone Touches Game.",
    "Play flows with teams deliberately including every player before attempting to score.",
    "The teacher specifically highlights and celebrates non-scoring contributions from every player throughout the game — a good call, a smart cover, a strong pass.",
    "Coach the key message throughout: 'look beyond the scoreboard for what actually helped the team.'",
    "Rotate players on and off court every few minutes so everyone gets even game time.",
    "Keep the tone warm and inclusive — every player's touch and contribution genuinely matters to whether the team can score."
   ]
  },
  "discussion": [
   "Who made a valuable contribution today that wasn't a score — what did they do?",
   "How did it feel to make sure everyone got genuinely involved?",
   "Why does a team work better when everyone plays a real part?"
  ],
  "lookfors": [
   "Actively includes every teammate in play, not just confident players",
   "Recognises and values non-scoring contributions",
   "Commits fully to whichever role they're given, not just their favourite"
  ],
  "inclusion": "Ensure the 'everyone touches' rule is genuinely followed rather than symbolically — check in with quieter or less confident students directly to make sure their involvement feels real, not token.",
  "skillBreakdown": [
   {
    "step": "Actively look for and include the teammate who hasn't been involved yet.",
    "why": "Inclusion doesn't happen automatically in a fast game — it takes a deliberate look for who's been left out."
   },
   {
    "step": "Notice and value contributions that aren't scores — a good call, a smart cover, a great pass.",
    "why": "A team that only values scoring misses most of what actually makes it work well together."
   },
   {
    "step": "Commit fully to whatever role you're given, not just your favourite one.",
    "why": "A team needs every role filled properly — a team member who only tries hard in their preferred role weakens the whole team."
   }
  ],
  "value": "Mōhio",
  "valueText": "Understanding your own strengths and how you fit into the team, and noticing what your teammates need from you in order to do their best."
 },
 {
  "n": 19,
  "block": 4,
  "title": "Practice Team Day",
  "focus": "Full run-throughs bringing together the whole unit's team-play skills",
  "walt": "We are learning to bring communication, support, tactics, and inclusion together into one connected game, as a practice run before our culmination day.",
  "wilf": [
   "I can apply a range of team-play skills together in one game",
   "I can give and receive feedback constructively with my team"
  ],
  "nzc": "Strands B, C · Thinking, Relating to others",
  "equipment": "Bibs, balls, cones",
  "safety": "Standard spacing across simultaneous games; agreed, fair self-officiating routines to prevent disputes",
  "games": [
   {
    "name": "Warm-Up Team Points",
    "desc": "A short warm-up game where students settle into rhythm and remind themselves of key teamwork points from across the unit before full games begin.",
    "coach": "Use this to find your rhythm as a team, not to win.",
    "easier": "Longer warm-up time.",
    "harder": "Shorter warm-up, straight into full games.",
    "chaos": "n/a",
    "setup": "Teams of 4-5 in a grid roughly 10m x 8m, playing a short low-stakes warm-up game before the day's main practice matches. One ball per team.",
    "howTo": [
     "Play a short warm-up game where the focus is settling into rhythm as a team, not winning.",
     "Use this time for students to remind themselves and each other of key teamwork points from across the whole unit — calls, spacing, roles, trust, support.",
     "Coach the key message: 'use this to find your rhythm as a team, not to win.'",
     "Keep the pace relaxed and encouraging as a lead-in to the day's practice matches.",
     "For 'easier', allow longer warm-up time; for 'harder', use a shorter warm-up, moving straight into full games."
    ]
   },
   {
    "name": "Skill Focus Choice",
    "desc": "Each student picks one team-play skill from the unit (e.g. clear calls, covering a teammate, reading the game) to focus on today, and gets brief feedback on it during play.",
    "coach": "Pick something you genuinely want to improve, not just something easy.",
    "easier": "Teacher/peer suggests a focus.",
    "harder": "Student justifies their own choice of focus.",
    "chaos": "Role rotation",
    "setup": "Individual students each choose one team-play skill from the unit to focus on today, within their team's practice game. Grid roughly 10m x 8m, one ball per team.",
    "howTo": [
     "Each student picks one team-play skill from across the unit (e.g. clear calls, covering a teammate, reading the game) to focus on today.",
     "During play, the student deliberately looks for opportunities to apply their chosen focus skill.",
     "Coach the key message: 'pick something you genuinely want to improve, not just something easy.'",
     "The teacher gives brief, specific feedback to each student on their chosen focus area during or after play.",
     "For 'easier', have the teacher or a peer suggest a focus; for 'harder', have the student justify their own choice of focus."
    ]
   },
   {
    "name": "Practice Match Sets",
    "desc": "Short practice games played with full rules and scoring, as a run-through before the culminating tournament.",
    "coach": "Treat this like the real thing.",
    "easier": "Shorter games, more generous rules.",
    "harder": "Full-length games, standard rules.",
    "chaos": "Head-to-head mirror",
    "setup": "Teams of 4-5 or larger playing short practice games with full rules and scoring, in a grid roughly 12m x 10m. One ball per game, bibs for each team.",
    "howTo": [
     "Play short practice games using full rules and real scoring, as a genuine run-through before tomorrow's culminating tournament.",
     "Encourage teams to treat this like a real competitive match, applying everything practised across the unit.",
     "Coach the key message: 'treat this like the real thing.'",
     "Rotate opponents between practice matches so teams experience playing different groups.",
     "For 'easier', use shorter games with more generous rules; for 'harder', use full-length games with standard rules."
    ]
   }
  ],
  "big": {
   "name": "Full Team Trial Games",
   "desc": "Students play complete small-sided matches, self-officiated, drawing on communication, support play, tactics, cover, and inclusion from across the whole unit.",
   "setup": "Complete small-sided matches, self-officiated, in groups of 8 in a grid roughly 12m x 10m. One ball per game, bibs for each team.",
   "howTo": [
    "Explain before starting that these are complete matches, self-officiated by the students themselves — this is a genuine trial run for tomorrow's tournament.",
    "Play flows as a full small-sided match, drawing on communication, support play, tactics, cover, and inclusion from across the whole unit.",
    "Encourage students to resolve any small disagreements themselves, fairly and calmly, as part of the self-officiating challenge.",
    "The coach circulates and observes rather than directly running the game, stepping in only if genuinely needed.",
    "Rotate players on and off court every few minutes so everyone gets even game time.",
    "Coach the key message throughout: bring together everything from across the unit — this is the final tune-up before Team Play Games Day."
   ]
  },
  "discussion": [
   "What part of your teamwork are you most confident in going into tomorrow's games day?",
   "Who showed great communication and fair play today?",
   "What's one team-play skill you'd still like to work on?"
  ],
  "lookfors": [
   "Applies a range of team-play skills together in one game",
   "Gives and receives feedback constructively",
   "Shows resilience and good communication after mistakes"
  ],
  "inclusion": "Match teams thoughtfully so games are competitive and enjoyable for everyone; offer flexible rules/space adjustments so every game remains genuinely playable and inclusive.",
  "skillBreakdown": [
   {
    "step": "Bring together communication, support, tactics, and inclusion into one connected game.",
    "why": "A real team game asks for all of these skills together, often in quick succession — this is the whole unit coming together."
   },
   {
    "step": "Give feedback to teammates constructively, and accept it the same way.",
    "why": "Honest, kind feedback is what helps a team keep improving right up to the culminating day."
   },
   {
    "step": "Stay calm and reset after a mistake, rather than carrying frustration into the next play.",
    "why": "A short memory for mistakes is what lets a team play its best teamwork point after point."
   }
  ],
  "value": "Manaaki",
  "valueText": "Looking after your teammates' success as much as your own — including, encouraging, and setting others up to succeed."
 },
 {
  "n": 20,
  "block": 4,
  "title": "Team Play Games Day",
  "focus": "Culminating multi-game tournament celebrating teamwork across the whole unit",
  "walt": "We are learning to apply the whole unit's team-play skills in a games day setting, showing fair play and reflecting on our growth.",
  "wilf": [
   "I can apply a range of team-play skills from across the unit in competitive and cooperative games",
   "I can play fairly and encourage teammates and opponents throughout the games day"
  ],
  "nzc": "Strands A, B, C, D · all five Key Competencies",
  "equipment": "Bibs, balls, cones, simple draw sheet or rotation chart",
  "safety": "Standard spacing across multiple simultaneous games; clear rotation system so students know where to go next",
  "games": [
   {
    "name": "Skill Circuit Warm-Up",
    "desc": "A quick circuit combining calls, spacing, roles, and support play — a whistle-stop reminder of the whole unit before games begin.",
    "coach": "Smooth transitions between stations.",
    "easier": "Longer time per station.",
    "harder": "Shorter time, quicker rotation.",
    "chaos": "Head-to-head mirror, beat the clock",
    "setup": "4 short stations set up around the space (calls, spacing, roles, support play), each with any needed equipment (balls, cones), groups of 4-5 rotating through together.",
    "howTo": [
     "Explain each station briefly before starting: calls, spacing, roles, and support play — a whistle-stop reminder of the whole unit before games begin.",
     "Groups spend a short, timed period at each station (e.g. 1-2 minutes) before rotating to the next on a signal.",
     "Coach the key message: 'smooth transitions between stations' — keep the changeovers quick and organised.",
     "Keep the mood light and energetic — this is a warm-in, not a formal assessment.",
     "For 'easier', use longer time per station; for 'harder', use shorter time with quicker rotation.",
     "For 'chaos', add a head-to-head mirror element or race the clock between stations."
    ]
   },
   {
    "name": "Team Encouragement Challenge",
    "desc": "Before games begin, each student nominates one specific thing they'll do to encourage a teammate or opponent during play.",
    "coach": "Make it specific and genuine, not generic.",
    "easier": "n/a",
    "harder": "n/a",
    "chaos": "Role rotation",
    "setup": "Whole class or each team gathered briefly before games begin, no equipment needed for this activity.",
    "howTo": [
     "Before games begin, each student nominates one specific thing they'll do to encourage a teammate or opponent during play.",
     "Students say their nomination out loud to their team or a partner so it's a genuine, spoken commitment.",
     "Coach the key message: 'make it specific and genuine, not generic.'",
     "Move straight into the day's games once everyone has nominated their encouragement action.",
     "Keep this brief so it doesn't eat into playing time."
    ]
   },
   {
    "name": "Focus Pick",
    "desc": "Each team picks one team-play skill from the unit they most want to show off today and keeps it in mind as their focus during games.",
    "coach": "Choose something meaningful to your team, not just easy.",
    "easier": "n/a",
    "harder": "n/a",
    "chaos": "Bonus objectives",
    "setup": "Each team gathered briefly before games begin, no equipment needed for this activity.",
    "howTo": [
     "Each team picks one team-play skill from the unit they most want to show off today (e.g. clear calls, good cover, great spacing).",
     "The team keeps this chosen focus in mind throughout their games today.",
     "Coach the key message: 'choose something meaningful to your team, not just easy.'",
     "Check in briefly with teams between games about how their focus skill is going.",
     "Keep this brief so it doesn't eat into playing time."
    ]
   }
  ],
  "big": {
   "name": "Round-Robin Team Games Day",
   "desc": "Students rotate through short team games across multiple areas, using simple scoring or a fair-play points system. Every skill from the unit — communication, space, roles, trust, support, tactics, and inclusion — is relevant somewhere in these games.",
   "setup": "Whole class split into teams of 4-6 for a round-robin culminating tournament across the full or near-full space, using bibs of multiple colours and a simple draw sheet or rotation chart visible to everyone.",
   "howTo": [
    "Explain the round-robin format: every team plays several short games across multiple areas, with a simple scoring or fair-play points system tracked lightly.",
    "Run each short game with students applying whichever skills from across the unit are relevant — communication, space, roles, trust, support, tactics, and inclusion are all fair game.",
    "Use a clear rotation system (the draw sheet or rotation chart) so students always know where to go next between games.",
    "Between games, briefly check in with teams about their chosen Focus Pick skill and their Team Encouragement Challenge commitment.",
    "Guarantee every team gets to play multiple games, adjusting the schedule on the fly if a team finishes early.",
    "Keep the tone fun, inclusive, and low-pressure regardless of results — this is a celebration of the whole unit's teamwork skills, not just a competition."
   ]
  },
  "discussion": [
   "What's one team-play skill from this whole unit you're most proud of improving?",
   "What did fair, encouraging teamwork look like in today's games day?",
   "What will you take from this unit into other team games or sports?"
  ],
  "lookfors": [
   "Applies a visible range of team-play skills from across the unit, not just one",
   "Plays fairly and encourages teammates/opponents in a competitive setting",
   "Shows growth compared to Lesson 1 (informal, teacher's own judgement — no formal recording required)"
  ],
  "inclusion": "Structure the games day with balanced/mixed-ability groupings; consider a simple fair-play recognition alongside game results to keep the culminating day inclusive and values-aligned.",
  "skillBreakdown": [
   {
    "step": "Apply skills from across the whole unit — communication, space, roles, trust, support, tactics, and inclusion.",
    "why": "The games day brings everything the unit has built together under real, enjoyable pressure."
   },
   {
    "step": "Communicate and encourage teammates and opponents throughout.",
    "why": "Fair play and encouragement are as much a part of this unit as the teamwork skills themselves."
   },
   {
    "step": "Reflect on your growth compared to Lesson 1.",
    "why": "Reflecting on your own improvement as a teammate is as valuable as the result of any one game."
   }
  ],
  "value": "Pānga",
  "valueText": "Seeing how your role today connects to the bigger team effort — a small contribution that matters once it's put together with everyone else's."
 }
];

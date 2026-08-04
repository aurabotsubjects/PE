// Tennis unit data — TENNIS_BLOCK_INFO + TENNIS_LESSONS
const TENNIS_BLOCK_INFO = {
  1:{name:"Foundational Racquet & Ball Control", range:"Lessons 1–5", color:"var(--b1)", soft:"var(--b1-soft)", warmup:"Bounce & Balance Relay", warmdown:"Walk & Reach",
    warmupSetup:"Split the class into small relay teams of 4-5 behind a start cone, with a turnaround cone 8-10m away per team. Each runner carries a racquet, and one ball waits at the turnaround cone.",
    warmupHowTo:["Explain the relay: each runner jogs out to the turnaround cone, bounces the ball up on the racquet a set number of times (e.g. 5), then balances it still on the racquet strings to carry back before tagging the next teammate.", "On 'go', the first runner in each team jogs out, completes the bounces, then carries the balanced ball back without dropping it.", "If the ball drops on the way back, the runner stops, rebalances it on the spot, and continues rather than restarting.", "Once tagged, the next runner sets off immediately with a fresh set of bounces at the turnaround cone.", "Keep the pace light and continuous — this is about raising heart rates and getting comfortable moving with the ball on the racquet, not testing skill.", "Run the relay for the full 5 minutes, rotating running order each round so it stays fair."],
    warmdownSetup:"No extra equipment needed beyond the space already in use. Gather the class into a loose circle or scattered spread with enough room for each student to stretch without touching anyone else.",
    warmdownHowTo:["Have students set their racquet down beside them and walk slowly around the space for about 1 minute to bring their heart rate down.", "Gather into a circle and lead 3-4 simple static stretches — shoulders, forearms/wrists (important after racquet work), quads, and hamstrings — holding each for about 15-20 seconds.", "Keep instructions simple and calm: 'reach, hold, breathe' rather than technical cues.", "Use this quiet time to briefly ask how the session felt for a couple of students, setting a relaxed tone before the Discussion segment.", "Finish with everyone standing tall and taking one big breath in and out together."]
  },
  2:{name:"Combining Strokes, Footwork & Rallying", range:"Lessons 6–10", color:"var(--b2)", soft:"var(--b2-soft)", warmup:"Partner Feed & Jog", warmdown:"Partner Stretch",
    warmupSetup:"Pairs spread out across the space (roughly 4-5m apart per pair), one ball per pair, each student with their own racquet. Enough room between pairs that feeds don't cross.",
    warmupHowTo:["Partners stand facing each other and begin gently feeding the ball back and forth to each other's hands (an underarm toss, not a hit).", "Every 30-45 seconds, call a change: 'jog swap' means both partners jog to swap positions with another nearby pair, then continue feeding with their new partner.", "Occasionally call 'quick feet' — partners add a few small side-shuffle steps between each feed instead of standing still.", "Keep the whole activity light and continuous — the goal is raising heart rate and warming up the arm and legs together, not technical correction.", "Run for the full 5 minutes, mixing swaps and quick-feet calls throughout."],
    warmdownSetup:"Same pairs from the warm-up (or new pairs), enough space to stretch side-by-side without touching. Racquets and balls set aside.",
    warmdownHowTo:["Have pairs walk together slowly around the space for about 1 minute to bring heart rate down.", "In pairs, lead 3-4 simple partner-assisted stretches — e.g. one partner gently holds the other's ankle behind them for a quad stretch, or both sit and reach toward each other's feet for a hamstring stretch, plus a gentle forearm/wrist stretch each.", "Hold each stretch for about 15-20 seconds, then swap who is being assisted if the stretch requires it.", "Keep contact gentle and consent-based — no forcing a stretch further than a partner is comfortable with.", "Finish with partners saying one thing their partner did well in today's session before moving into the Discussion segment."]
  },
  3:{name:"Net Play, Reading the Ball & Decision-Making", range:"Lessons 11–15", color:"var(--b3)", soft:"var(--b3-soft)", warmup:"Split-Step Shuffle", warmdown:"Breathe & Balance",
    warmupSetup:"Open space roughly 15m x 15m per group of 8-10 students. Each student needs their own racquet, no ball needed.",
    warmupHowTo:["Explain the split-step shuffle before starting: a small, light hop landing with feet apart, ready to move in any direction.", "Students spread out and begin light jogging on the spot.", "Call 'split!' every 8-10 seconds — students perform one split-step hop, then immediately shuffle two steps in a direction you call (left, right, forward, back).", "Keep the calls varied and the pace playful, focusing on quick, light feet rather than big movements.", "Run for the full 5 minutes, gradually mixing calls faster as students get comfortable with the pattern."],
    warmdownSetup:"No extra equipment needed beyond the space already in use. Gather the class into a loose circle or scattered spread with enough room to stretch and breathe comfortably.",
    warmdownHowTo:["Have students walk slowly around the space for about 1 minute to bring their heart rate down.", "Gather into a circle and lead 3-4 simple static stretches — calves, quads, hamstrings, and shoulders — holding each for about 15-20 seconds.", "Add a short guided breathing moment: 3 slow breaths in through the nose and out through the mouth, standing tall with eyes closed if comfortable.", "Keep the tone calm and quiet, using this time to settle the group before the Discussion segment.", "Finish with everyone standing tall and taking one final big breath in and out together."]
  },
  4:{name:"Match Play & Culmination", range:"Lessons 16–20", color:"var(--b4)", soft:"var(--b4-soft)", warmup:"Team Shape Jog", warmdown:"Circle Stretch & Cheer",
    warmupSetup:"Open space roughly 20m x 20m for the whole class, organised into the small teams/pairs that will be used for that lesson's matches.",
    warmupHowTo:["Explain the warm-up: teams jog together as a group around the space, staying loosely together rather than spreading out individually.", "On 'go', each team jogs a lap or loop of the space together at an easy pace.", "Every 30-45 seconds, call 'shape!' — teams quickly form a shape you name (a line, a circle, a triangle) before continuing to jog.", "Keep the pace light and social — this warm-up is as much about building team connection before matches as raising heart rate.", "Run for the full 5 minutes, mixing up the shapes called."],
    warmdownSetup:"No extra equipment needed beyond the space already in use. Gather the whole class into one large circle.",
    warmdownHowTo:["Have students walk slowly around the space for about 1 minute to bring their heart rate down after matches.", "Gather into one large circle and lead 3-4 simple static stretches — calves, quads, hamstrings, and shoulders/forearms — holding each for about 15-20 seconds.", "Invite a few students to briefly share a highlight from their matches while the group stretches.", "Keep the tone celebratory and calm, marking the end of the unit rather than just another lesson.", "Finish with the whole class giving a round of applause or cheer together before moving into the Discussion segment."]
  },
};

const TENNIS_LESSONS = [
 {
  "n": 1,
  "block": 1,
  "title": "Shake Hands With Your Racquet",
  "focus": "Racquet familiarisation & grip (forehand/backhand grip)",
  "walt": "We are learning to hold the racquet correctly for forehand and backhand, and to carry and control it safely while moving.",
  "wilf": [
   "I can show a correct forehand ‘shake hands’ grip and swap smoothly to a backhand grip",
   "I can carry and control my racquet safely while moving around others"
  ],
  "nzc": "Strand B · Managing self",
  "value": "Aroha",
  "valueText": "Being patient and kind with yourself while a new skill feels awkward, and encouraging classmates whose attempts look different from yours.",
  "equipment": "1 junior/Hot Shots racquet per student, cones for boundaries, spot markers",
  "safety": "Racquets carried head-down/by the throat when walking near others; a clear ‘swing space’ (arm's length plus racquet length) from anyone else before swinging",
  "games": [
   {
    "name": "Racquet Freeze Parade",
    "desc": "Students jog around a marked area carrying their racquet correctly; on ‘freeze’ they show the grip the teacher calls (forehand or backhand) and hold a ready position.",
    "coach": "Check your grip by feel, not by looking down.",
    "easier": "Slower pace, only forehand grip called.",
    "harder": "Quick grip swaps called in sequence (forehand-backhand-forehand).",
    "chaos": "Random constraint calls",
    "setup": "Mark out one open space per 8-10 students, roughly 15m x 15m, with 4 cones at the corners. Every student needs their own racquet — no balls yet. Stand somewhere you can see the whole group.",
    "howTo": [
     "Show the two grips before students move: forehand 'shake hands' grip (palm flat against the strings like shaking hands with the racquet), and backhand grip (a small quarter-turn of the hand from forehand).",
     "Explain 'freeze' — on your call, everyone stops immediately, shows the named grip, and holds a ready position (knees soft, racquet up in front of the body).",
     "Send students jogging around the space carrying their racquet correctly (head up, by the throat, away from others).",
     "Call 'freeze — forehand!' or 'freeze — backhand!' every 8-10 seconds; walk around checking grips by feel, not by sight, and give a thumbs-up or a quick fix to individuals.",
     "Coach the key message: check your grip by feel, not by looking down at your hand.",
     "For 'harder', call quick sequences ('forehand — backhand — forehand') so students swap grips on consecutive freezes without a jog in between."
    ]
   },
   {
    "name": "Racquet Face Balance Walk",
    "desc": "Balance a ball on the racquet strings while walking a pathway of cones, using forehand- and backhand-side carries.",
    "coach": "Soft hands, slightly bent elbow, eyes on the ball.",
    "easier": "Stand still and balance first before adding walking.",
    "harder": "Add a change of direction or a light jog.",
    "chaos": "Beat the clock (count consecutive steps without dropping)",
    "setup": "Lay out a pathway of 6-8 cones in a loose zig-zag line per group of 4-5 students, spaced about 1.5m apart. Each student needs a racquet and a low-compression ball.",
    "howTo": [
     "Demonstrate balancing the ball still on the racquet strings first, holding the racquet flat like a tray.",
     "Have students place the ball on the racquet face and stand still, getting the balance right before adding any movement.",
     "Once balanced, students walk the cone pathway keeping the ball on the strings, switching to carry it on the 'backhand side' (racquet turned slightly) for part of the path.",
     "If the ball drops, students pick it up calmly where it stopped and continue from that point — no restarting the whole pathway.",
     "Coach the key message: soft hands, a slightly bent elbow, and eyes on the ball, not on your feet.",
     "For 'harder', add a change of direction or a light jog partway along the path."
    ]
   },
   {
    "name": "Grip Swap Tag",
    "desc": "Partners jog together; on a signal, both swap grip (forehand to backhand or vice versa) as fast as possible and show it to their partner, who checks it's correct for a point.",
    "coach": "Feel the shape change in your hand, don't just twist the racquet.",
    "easier": "Partner calls the grip out loud in advance.",
    "harder": "No verbal cue — react to a visual card held up by partner.",
    "chaos": "Role rotation (checker/mover swap)",
    "setup": "Pair students up across the same open space, each pair with one racquet each (no ball needed). Pairs spread out with at least 2m between neighbouring pairs.",
    "howTo": [
     "Partners jog gently side by side, staying close enough to see each other's hands.",
     "On your signal ('swap!'), both partners change grip as fast as possible — forehand to backhand or backhand to forehand — and hold it out to show their partner.",
     "The partner checks the grip is correct and calls 'good' or gently helps fix it; award a point for a correct, fast swap.",
     "Jog on for another 10-15 seconds before the next signal, and keep rotating which partner checks first.",
     "Coach the key message: feel the shape change in your hand, don't just twist the racquet without thinking.",
     "For 'harder', drop the verbal signal and instead hold up a visual card (F or B) that partners must react to instead."
    ]
   }
  ],
  "big": {
   "name": "Grip & Go Relay",
   "desc": "Small teams relay: each runner sprints to a marked spot, shows the named grip correctly (checked by a teammate ‘coach’), balances the ball on the racquet back to the team, then tags the next runner. Combines today's two skills — grip and racquet control — under light time pressure and team encouragement.",
   "setup": "Split the class into teams of 4-5, each team behind a start cone. Place one marked spot 10-12m away per team with a low-compression ball waiting there. Racquets stay with the runners.",
   "howTo": [
    "Explain the relay before starting: one runner at a time sprints to the marked spot, shows the grip you call out (checked by the next teammate in line acting as 'coach'), balances the ball on the racquet strings, and carries it back without dropping it.",
    "On 'go', the first runner in each team sprints out, shows the correct grip to the waiting 'coach' teammate, then picks up and balances the ball back to the team.",
    "If the ball drops on the way back, the runner stops, rebalances it on the spot, and continues — no restart from the beginning.",
    "The relay is complete for that runner once they tag the next teammate, who repeats the sequence with a new grip call.",
    "Rotate the 'coach' role each turn so every student gets to check a grip as well as run it.",
    "Keep the energy light and encouraging — celebrate teams for clean, controlled runs, not just speed."
   ]
  },
  "discussion": [
   "What did the ‘shake hands’ grip feel like once you got used to it?",
   "Who in your team showed a really clear, correct grip today — what did you notice?",
   "What was tricky about swapping grips quickly, and how did you work it out?"
  ],
  "lookfors": [
   "Uses a recognisable ‘shake hands’ (forehand) grip without needing reminders",
   "Can swap to a backhand-side grip when asked",
   "Carries and controls the racquet safely around others"
  ],
  "inclusion": "Allow a two-handed grip for both forehand and backhand if that feels more stable early on; some students may need a lighter/shorter racquet — prioritise grip correctness over perfect technique on day one.",
  "skillBreakdown": [
   {
    "step": "‘Shake hands’ with the racquet handle so the strings face sideways, like shaking someone's hand (forehand grip).",
    "why": "This grip lets the racquet face meet the ball squarely without twisting the wrist."
   },
   {
    "step": "Rotate the hand slightly so the knuckles sit on top of the handle for backhand, or use two hands together for a two-handed backhand.",
    "why": "A stable, consistent grip is the foundation every other stroke sits on."
   },
   {
    "step": "Hold the racquet with a relaxed hand — like holding a bird, not a hammer — gripping firmly only just before contact.",
    "why": "A tense grip the whole time tires the arm and wobbles the racquet face; relaxed-then-firm gives control and power together."
   }
  ]
 },
 {
  "n": 2,
  "block": 1,
  "title": "Bounce Boss",
  "focus": "Bouncing & balancing the ball on the racquet (control)",
  "walt": "We are learning to control a ball by bouncing it up on the racquet face and bouncing it down onto the ground, using a soft, controlled touch.",
  "wilf": [
   "I can bounce the ball up on my racquet face several times in a row without losing control",
   "I can bounce the ball down onto the ground and back up using my racquet"
  ],
  "nzc": "Strand B · Managing self",
  "value": "Mōhio",
  "valueText": "Understanding your own body and how it moves — noticing exactly what's happening in your grip, swing, or footwork, and learning from it.",
  "equipment": "1 racquet + 1 low-compression ball per student, cones",
  "safety": "Enough personal space so a rolling ball doesn't cause a collision; balls collected calmly rather than chased through others' spaces",
  "games": [
   {
    "name": "Up-Bounce Count",
    "desc": "Individually bounce the ball up off the racquet face as many times in a row as possible; track a personal best.",
    "coach": "Small taps, flat racquet face.",
    "easier": "Bigger/softer ball; a ground bounce is allowed between racquet taps.",
    "harder": "Must also take three steps forward without stopping the bounce.",
    "chaos": "Beat the clock / personal-best streak",
    "setup": "Each student needs their own racquet and low-compression ball, spread out with at least an arm's length plus racquet length from anyone else across the open space. No grid needed — students find their own patch.",
    "howTo": [
     "Demonstrate bouncing the ball up off a flat racquet face with small, controlled taps, keeping the ball close to chest height.",
     "Students start bouncing individually, counting each consecutive tap out loud or silently in their head.",
     "If the ball drops or gets away, the student picks it up, resets, and starts their count again from zero.",
     "After 60-90 seconds, ask students to remember their best consecutive count for the session.",
     "Coach the key message: small taps, flat racquet face — don't chase the ball with a big swing.",
     "For 'harder', once a student reaches a comfortable streak, add the challenge of taking three steps forward without losing the bounce."
    ]
   },
   {
    "name": "Down-Bounce Dribble",
    "desc": "Like a basketball dribble but with the racquet: bounce the ball down onto the ground and back up while walking a pathway of cones.",
    "coach": "Push the ball, don't slap it.",
    "easier": "Stand still first before adding movement.",
    "harder": "Dribble while changing direction or speed on a call.",
    "chaos": "Random constraint calls",
    "setup": "Lay out a pathway of 6-8 cones per group of 4-5 students, spaced about 1.5m apart in a loose line. Each student needs a racquet and a ball.",
    "howTo": [
     "Show the down-bounce action: pushing the ball onto the ground with the racquet face and letting it bounce back up, like a basketball dribble.",
     "Students start bouncing on the spot to get the rhythm and height consistent before moving.",
     "Once controlled, students walk the cone pathway while continuing to down-bounce, weaving between cones.",
     "If control is lost, students collect the ball calmly and restart from where they stopped, not from the beginning of the path.",
     "Coach the key message: push the ball, don't slap it — a gentle, controlled push keeps the bounce predictable.",
     "For 'harder', call out direction or speed changes partway through the pathway that students must react to mid-dribble."
    ]
   },
   {
    "name": "Balance & Freeze",
    "desc": "Partners take turns bouncing the ball up on the racquet while walking; on ‘freeze’ they must balance the ball still on the racquet face without it rolling off, while their partner checks.",
    "coach": "Slightly cup the racquet face the instant you freeze.",
    "easier": "Fewer freeze calls, slower pace.",
    "harder": "Freeze while standing on one foot.",
    "chaos": "Movement penalty/reward",
    "setup": "Pair students up across the open space, each pair sharing one racquet and one ball, with clear space between neighbouring pairs.",
    "howTo": [
     "One partner walks slowly while bouncing the ball up on the racquet; the other watches and is ready to call 'freeze'.",
     "On 'freeze', the mover must stop and balance the ball still on the racquet face without it rolling off, holding it for a count of three.",
     "The watching partner checks the ball stays still and gives feedback — 'held it' or 'try again' — before swapping roles.",
     "Repeat several rounds, alternating who moves and who calls freeze, so everyone practises both bouncing and balancing.",
     "Coach the key message: slightly cup the racquet face the instant you freeze, rather than keeping it perfectly flat.",
     "For 'harder', the mover must freeze while standing on one foot, adding a balance challenge on top of the ball control."
    ]
   }
  ],
  "big": {
   "name": "Bounce Relay Challenge",
   "desc": "Small teams relay a set distance, each runner keeping the ball under control with up-bounces before tagging the next teammate; team with the fewest drops (or fastest clean run) wins.",
   "setup": "Split the class into teams of 4-5 behind a start cone, with a finish cone 12-15m away. Each runner carries a racquet and starts with a ball at the start cone.",
   "howTo": [
    "Explain the relay: each runner travels the set distance keeping the ball under control with up-bounces on the racquet before tagging the next teammate.",
    "On 'go', the first runner in each team sets off, bouncing the ball continuously up off the racquet as they move toward the finish cone and back.",
    "If the ball drops, the runner stops, picks it up, resets the bounce on the spot, and continues from there rather than going back to the start.",
    "Once a runner returns and tags the next teammate, that student sets off immediately with a fresh bounce.",
    "Track either the fewest total drops per team or the fastest clean run, depending on what will motivate your class most.",
    "Coach the key message: rushing causes drops — a slightly slower, controlled bounce finishes faster overall than a fast, wild one."
   ]
  },
  "discussion": [
   "What helped you keep the ball under control today?",
   "Who found a good rhythm with their bouncing — what did their racquet look like?",
   "What did you do differently after you dropped the ball a few times?"
  ],
  "lookfors": [
   "Uses a flat, steady racquet face rather than a tilted/slapping motion",
   "Strings together several controlled bounces in a row",
   "Eyes track the ball rather than the feet"
  ],
  "inclusion": "Let students who are struggling use a bigger, softer ball, or bounce off the ground between racquet touches; celebrate personal-best streaks rather than comparing students to each other.",
  "skillBreakdown": [
   {
    "step": "Keep the racquet face flat and steady, moving it slightly upward just as the ball touches it.",
    "why": "A flat, steady face sends the ball straight back up; tilting it sends the ball flying off sideways."
   },
   {
    "step": "Use small, soft ‘give’ movements from the wrist and elbow rather than big swings.",
    "why": "Small controlled movements are what let you bounce the ball many times in a row instead of smashing it away."
   },
   {
    "step": "Keep your eyes on the ball the whole time, not on your feet or racquet.",
    "why": "In tennis you react to where the ball actually is — this habit starts here."
   }
  ]
 },
 {
  "n": 3,
  "block": 1,
  "title": "Perfect Swing",
  "focus": "Forehand groundstroke technique (off a feed/self-drop)",
  "walt": "We are learning the technique of a forehand groundstroke — turning side-on, swinging low-to-high, and making contact out in front of the body.",
  "wilf": [
   "I can turn side-on and swing low-to-high to hit a self-dropped or fed ball",
   "I can make contact with the ball out in front of my body, not beside or behind it"
  ],
  "nzc": "Strand B · Managing self",
  "value": "Manaaki",
  "valueText": "Looking after a partner's success as much as your own — feeding, rallying, and encouraging in a way that helps them succeed too.",
  "equipment": "1 racquet + balls per pair, cones to mark a hitting line",
  "safety": "Feeders and hitters spaced well apart from neighbouring pairs; check the swing zone is clear before any swing",
  "games": [
   {
    "name": "Self-Drop Target",
    "desc": "Each student self-drops and forehands the ball toward a large marked zone; count clean hits into the zone.",
    "coach": "Turn side-on before you drop it.",
    "easier": "Bigger target zone, closer distance.",
    "harder": "Smaller target zone, further distance.",
    "chaos": "Scoring streaks",
    "setup": "Mark a large target zone (roughly 3m x 3m, using 4 cones) on the ground about 4-5m in front of each hitting line. Pairs or small groups share one hitting line, each student with a racquet and several balls.",
    "howTo": [
     "Demonstrate the self-drop forehand: turn side-on to the target, drop the ball from waist height in front of the body, and swing low-to-high to meet it after one bounce.",
     "Students take turns self-dropping and hitting forehands, aiming to land the ball inside the marked zone.",
     "Count clean hits into the zone out of a set number of attempts (e.g. 10 balls), collecting balls together between turns.",
     "Coach the key message: turn side-on before you drop it — the turn happens before the ball leaves your hand.",
     "For 'harder', shrink the target zone and move the hitting line further back to increase the challenge.",
     "Rotate who is hitting and who is collecting/watching for technique every set of attempts."
    ]
   },
   {
    "name": "Feeder & Hitter",
    "desc": "One partner gently underarm feeds/bounces the ball, the other forehands it back toward a target; swap roles regularly.",
    "coach": "Good feeds get good hits — feed with care.",
    "easier": "Feeder stands very close with a slow, gentle feed.",
    "harder": "Feeder varies feed distance/height slightly.",
    "chaos": "Role rotation",
    "setup": "Pair students up along a hitting line, spaced at least 3m from neighbouring pairs, with one racquet and a supply of balls per pair. Mark a simple target zone on the ground for the hitter to aim at.",
    "howTo": [
     "One partner (the feeder) gently underarm feeds or bounces the ball toward the hitter's forehand side.",
     "The hitter turns side-on, tracks the bounce, and forehands the ball back toward the marked target.",
     "After each hit, the feeder collects any loose balls and resets before the next feed — keep the pace calm, not rushed.",
     "Swap roles every 5-6 feeds so both partners get equal hitting time.",
     "Coach the key message: good feeds get good hits — feed with care and a soft, predictable toss.",
     "For 'harder', the feeder starts slightly varying the distance or height of the feed instead of keeping it identical each time."
    ]
   },
   {
    "name": "Shadow Swing Mirror",
    "desc": "Partners face each other and mirror a slow-motion forehand swing (no ball), checking each other's side-on turn and low-to-high path, then try it with a self-drop.",
    "coach": "Match your partner's turn before you match their swing.",
    "easier": "Call out each part of the swing step by step.",
    "harder": "Full-speed continuous shadow swings.",
    "chaos": "Head-to-head mirror",
    "setup": "Pair students up facing each other, about 2m apart, spread across the space with no ball needed for the first part — each student still holds their own racquet.",
    "howTo": [
     "Partners face each other and one leads a slow-motion forehand swing: turn side-on, racquet back low, swing low-to-high.",
     "The other partner mirrors the movement at the same time, while both check each other's side-on turn and swing path.",
     "Swap who leads every 3-4 repetitions so both partners get to lead and to check.",
     "Once the shape looks consistent, students try the same swing with an actual self-drop and ball.",
     "Coach the key message: match your partner's turn before you match their swing — the turn is the foundation.",
     "For 'harder', partners move to full-speed continuous shadow swings instead of slow motion, staying in time with each other."
    ]
   }
  ],
  "big": {
   "name": "Forehand Target Battle",
   "desc": "Small groups take turns self-dropping and hitting forehands at a shared set of scoring zones (close zone = 1pt, far zone = 3pt); technique — side-on turn, low-to-high swing — is what makes the harder zones reachable.",
   "setup": "Mark 2-3 scoring zones per group of 4 students, using cones: a close zone worth 1 point (about 4m out) and a further zone worth 3 points (about 6-7m out). Each group shares a hitting line and a supply of balls.",
   "howTo": [
    "Explain the scoring before starting: a self-drop forehand landing in the close zone scores 1 point, and one landing in the far zone scores 3 points.",
    "Students take turns self-dropping and hitting forehands at either zone, choosing their target before they drop the ball.",
    "Track each student's running total on a simple tally as the group rotates through turns.",
    "Coach the key message: the side-on turn and low-to-high swing from today's other games are exactly what make the harder, further zone reachable.",
    "Rotate through several rounds so everyone gets multiple attempts at both zones.",
    "Finish by asking students to compare their close-zone accuracy to their far-zone accuracy, celebrating improvement over the lesson rather than just the final score."
   ]
  },
  "discussion": [
   "What did turning side-on do for your swing?",
   "Who fed the ball really well for their partner today — what made it a good feed?",
   "What's the difference between hitting the ball out in front versus beside you?"
  ],
  "lookfors": [
   "Turns side-on before swinging",
   "Swings low-to-high with a visible upward brush on the ball",
   "Contacts the ball out in front of the body"
  ],
  "inclusion": "Allow closer self-drop/feed distances and bigger target zones for students building confidence; pair students so feeders are calm and patient, rotating pairs if a combination isn't working well.",
  "skillBreakdown": [
   {
    "step": "Turn side-on to the ball with your non-hitting shoulder pointing toward where you want the ball to go.",
    "why": "A side-on turn lets you swing across your body with power and accuracy, instead of just poking at the ball facing forward."
   },
   {
    "step": "Swing the racquet from low to high, like scooping upward, brushing up the back of the ball.",
    "why": "A low-to-high path naturally lifts the ball up and over the net with control instead of into the net or way over."
   },
   {
    "step": "Make contact with the ball out in front of your body, roughly level with your front hip.",
    "why": "Hitting the ball out in front gives you the best combination of power and control — behind your body you lose both."
   }
  ]
 },
 {
  "n": 4,
  "block": 1,
  "title": "Target Ace",
  "focus": "Forehand accuracy to a target",
  "walt": "We are learning to aim a forehand groundstroke at a chosen target, using our follow-through and racquet face to control direction.",
  "wilf": [
   "I can aim my forehand toward a target on the left or right, not just anywhere",
   "I can adjust my follow-through direction to help control where the ball goes"
  ],
  "nzc": "Strand B · Thinking",
  "value": "Pānga",
  "valueText": "Seeing how today's skill connects to the bigger game of tennis — a small piece that matters once it's put together with everything else.",
  "equipment": "racquets, balls, cones/hoops or marked zones",
  "safety": "Standard spacing between hitting pairs; check the target/swing zone is clear before hitting",
  "games": [
   {
    "name": "Zone Target Forehand",
    "desc": "Self-drop forehands aimed at three marked zones (left, middle, right) worth different points; call the zone before hitting.",
    "coach": "Decide, then swing.",
    "easier": "Two wide zones.",
    "harder": "Three narrower zones, called by a partner rather than chosen by the hitter.",
    "chaos": "Bonus objectives (harder zone = bonus points)",
    "setup": "Mark three adjacent zones (left, middle, right) about 2m wide each, roughly 5m from the hitting line, using cones or hoops. Students work individually or in pairs with a racquet and a supply of balls.",
    "howTo": [
     "Explain the points: assign different values to each zone (e.g. middle = 1 point, left/right = 2 points) since the outer zones require more precise aim.",
     "Before each hit, the student calls out which zone they're aiming for.",
     "The student self-drops and forehands the ball, aiming to land it in the called zone.",
     "Tally points across a set number of attempts (e.g. 8-10 balls), collecting between turns.",
     "Coach the key message: decide, then swing — pick your target before you drop the ball, not mid-swing.",
     "For 'harder', a partner calls the zone just before each hit instead of the hitter choosing it themselves."
    ]
   },
   {
    "name": "Hoop Hunter",
    "desc": "A partner places or moves a hoop around a marked area; the hitter forehands from a self-drop to land the ball in or near the hoop, then roles swap.",
    "coach": "Aim before you drop the ball, not after.",
    "easier": "Hoop stationary and close.",
    "harder": "Hoop moved between hits, further away.",
    "chaos": "Random constraint calls (target moves)",
    "setup": "Pair students up, each pair with one hoop, one racquet, and a supply of balls, spread out with clear space between pairs.",
    "howTo": [
     "One partner places the hoop somewhere in the marked hitting area, roughly 4-6m from the hitting line.",
     "The hitter self-drops a forehand, aiming to land the ball in or near the hoop.",
     "The placing partner retrieves the ball and either leaves the hoop or moves it slightly before the next attempt.",
     "Swap roles after 5-6 attempts so both partners get to hit and to place the hoop.",
     "Coach the key message: aim before you drop the ball, not after — pick your spot on the hoop first.",
     "For 'harder', the hoop is moved further away and repositioned between every single hit."
    ]
   },
   {
    "name": "Streak Target Challenge",
    "desc": "Consecutive successful hits to the same called target before a miss resets the streak — a friendly challenge against your own best.",
    "coach": "After a miss, reset calmly and try the same target again.",
    "easier": "Bigger target.",
    "harder": "Alternate between left and right targets each hit.",
    "chaos": "Scoring streaks",
    "setup": "Use the same marked target zone from earlier in the lesson (roughly 3m x 3m), 4-5m from the hitting line. Students work individually with a racquet and a supply of balls, tracking their own streak.",
    "howTo": [
     "The student calls a target (e.g. 'left zone') and attempts to hit it with consecutive self-drop forehands.",
     "Each successful hit into the called target adds one to their personal streak count.",
     "A miss resets the streak to zero, and the student immediately tries again at the same target.",
     "Give students 2-3 minutes to try and beat their own best streak from earlier attempts.",
     "Coach the key message: after a miss, reset calmly and try the same target again — don't chase a bigger target out of frustration.",
     "For 'harder', alternate between left and right targets on every single hit instead of staying on one target."
    ]
   }
  ],
  "big": {
   "name": "Forehand Precision Cup",
   "desc": "Small groups rotate through a mini target-course of forehand zones worth escalating points; team totals build across rounds, rewarding precision, not just power.",
   "setup": "Set up a mini target-course per group of 4 students using cones: 2-3 zones at increasing distance from the hitting line, each worth escalating points (e.g. 1, 2, 3). Each group shares a supply of balls.",
   "howTo": [
    "Explain the course: students rotate through hitting at each zone in turn, self-dropping a forehand and aiming for the called or chosen zone.",
    "Each group member takes a turn hitting a set number of balls (e.g. 3) at each zone before rotating to the next zone.",
    "Track a running team total across all rounds, adding up points from every zone.",
    "Coach the key message: precision beats power here — a controlled hit into the harder zone is worth more than a hard, wild swing.",
    "Rotate hitting order each round so the same student isn't always going first.",
    "Finish by comparing team totals and celebrating the team with the steadiest accuracy across rounds, not just the highest single score."
   ]
  },
  "discussion": [
   "What helped you actually hit the target you were aiming for?",
   "Who improved their accuracy during the lesson — what did they change?",
   "How does watching your follow-through help you understand your own shot?"
  ],
  "lookfors": [
   "Selects a target before swinging",
   "Follow-through points toward the intended target",
   "Makes small adjustments after a miss rather than repeating the same error"
  ],
  "inclusion": "Widen target zones or shorten the distance for students still building basic forehand technique; let confident hitters challenge themselves with narrower zones or longer distances.",
  "skillBreakdown": [
   {
    "step": "Choose a specific target — a hoop, cone gap, or zone — before you hit, not after.",
    "why": "Deciding where to aim before you swing is what turns technique into accuracy."
   },
   {
    "step": "Point your follow-through (where your racquet finishes) toward your target.",
    "why": "The path your racquet finishes on is a strong clue to where the ball actually went — a controlled follow-through means a controlled shot."
   },
   {
    "step": "Adjust the angle of your racquet face slightly left or right depending on which side of the target you're missing.",
    "why": "Small face adjustments are what fine-tune direction once your basic swing is already working."
   }
  ]
 },
 {
  "n": 5,
  "block": 1,
  "title": "Flip Side",
  "focus": "Backhand groundstroke technique",
  "walt": "We are learning the technique of a backhand groundstroke — turning side-on the opposite way to forehand, and swinging low-to-high.",
  "wilf": [
   "I can turn side-on (the opposite way to forehand) for a backhand",
   "I can swing low-to-high to hit a self-dropped or fed ball on my backhand side"
  ],
  "nzc": "Strand B · Managing self",
  "value": "Aroha",
  "valueText": "Being patient and kind with yourself while a new skill feels awkward, and encouraging classmates whose attempts look different from yours.",
  "equipment": "racquets, balls, cones",
  "safety": "Feeders and hitters spaced well apart from neighbouring pairs; check the swing zone is clear before any swing",
  "games": [
   {
    "name": "Backhand Self-Drop Target",
    "desc": "Same as a forehand self-drop target game, but on the backhand side — self-drop and backhand toward a large marked zone.",
    "coach": "Turn your hitting shoulder to the ball first.",
    "easier": "Bigger target zone, closer distance.",
    "harder": "Smaller target zone, further distance.",
    "chaos": "Scoring streaks",
    "setup": "Mark a large target zone (roughly 3m x 3m using 4 cones) about 4-5m in front of each hitting line, same as the forehand version. Pairs or small groups share a hitting line, each with a racquet and a supply of balls.",
    "howTo": [
     "Demonstrate the self-drop backhand: turn the hitting shoulder toward the target, drop the ball in front of the body, and swing low-to-high after one bounce.",
     "Students take turns self-dropping and hitting backhands, aiming to land the ball inside the marked zone.",
     "Count clean hits into the zone out of a set number of attempts (e.g. 10 balls), collecting balls together between turns.",
     "Coach the key message: turn your hitting shoulder to the ball first — the turn matters even more on the backhand side.",
     "For 'harder', shrink the target zone and move the hitting line further back.",
     "Rotate who is hitting and who is watching/collecting every set of attempts."
    ]
   },
   {
    "name": "Feeder & Hitter — Backhand",
    "desc": "One partner gently feeds to the backhand side, the other returns it toward a target; swap roles regularly.",
    "coach": "Two hands together if one hand feels shaky.",
    "easier": "Feeder stands close with a slow, gentle feed.",
    "harder": "Feeder varies feed distance/height slightly.",
    "chaos": "Role rotation",
    "setup": "Pair students up along a hitting line, spaced at least 3m from neighbouring pairs, with one racquet and a supply of balls per pair. Mark a simple target zone for the hitter to aim at.",
    "howTo": [
     "One partner gently feeds or bounces the ball toward the hitter's backhand side.",
     "The hitter turns their hitting shoulder toward the ball, tracks the bounce, and backhands it toward the marked target.",
     "The feeder collects loose balls and resets calmly before the next feed.",
     "Swap roles every 5-6 feeds so both partners get equal hitting time.",
     "Coach the key message: two hands together if one hand feels shaky — a two-handed backhand is completely fine at this stage.",
     "For 'harder', the feeder starts slightly varying the distance or height of the feed."
    ]
   },
   {
    "name": "Forehand or Backhand?",
    "desc": "The feeder places the feed slightly to one side or the other; the hitter must read it and choose the correct grip/turn before swinging.",
    "coach": "Decide your side as early as possible.",
    "easier": "Feeder calls the side out loud.",
    "harder": "No call — read it from the feed alone.",
    "chaos": "Random constraint calls / decision-making",
    "setup": "Pair students up along a hitting line, spaced at least 3m apart, with one racquet and a supply of balls per pair.",
    "howTo": [
     "The feeder places each feed slightly to one side of the hitter's body without saying which stroke to use.",
     "The hitter must read where the ball is going, choose the correct grip and turn, and play the appropriate stroke — forehand or backhand.",
     "Give brief feedback after each hit on whether the read and stroke choice matched the feed.",
     "Swap roles every 5-6 feeds so both partners practise reading and feeding.",
     "Coach the key message: decide your side as early as possible, ideally as soon as the ball leaves the feeder's hand.",
     "For 'harder', remove the option of the feeder calling the side out loud — the hitter must read it purely from the feed itself."
    ]
   }
  ],
  "big": {
   "name": "Backhand Target Battle",
   "desc": "Small groups take turns self-dropping and hitting backhands at a shared set of scoring zones worth different points, rewarding a growing, controlled backhand turn.",
   "setup": "Mark 2-3 scoring zones per group of 4 students, using cones, at varying distances from the hitting line, worth different points (e.g. close = 1 point, far = 3 points). Each group shares a hitting line and a supply of balls.",
   "howTo": [
    "Explain the scoring: a self-drop backhand landing in the close zone scores fewer points than one landing in the far zone.",
    "Students take turns self-dropping and hitting backhands at either zone, choosing their target before dropping the ball.",
    "Track each student's running total on a simple tally as the group rotates through turns.",
    "Coach the key message: a growing, controlled backhand turn is what makes today's harder zones reachable, just like the forehand a few lessons ago.",
    "Rotate through several rounds so everyone gets multiple attempts at both zones.",
    "Finish by asking students to notice one thing that felt easier on their backhand today compared to earlier in the block."
   ]
  },
  "discussion": [
   "What felt different about the backhand turn compared to forehand?",
   "Who used two hands well today, or one hand confidently — what worked for them?",
   "What helped your backhand feel less awkward as the lesson went on?"
  ],
  "lookfors": [
   "Turns side-on correctly for backhand",
   "Uses one or two hands with a stable grip",
   "Swings low-to-high with contact out in front"
  ],
  "inclusion": "Fully encourage a two-handed backhand as an equally valid technique, not a fallback; allow extra self-drop reps before adding a partner feed for less confident students.",
  "skillBreakdown": [
   {
    "step": "Turn side-on the opposite way to your forehand, with your hitting-side shoulder pointing toward the ball.",
    "why": "Backhand uses a mirror-image turn to forehand — getting the turn right matters even more here because it's less natural."
   },
   {
    "step": "Use one hand (with a backhand grip) or two hands together if that feels more stable, and swing low-to-high.",
    "why": "Two hands can give extra stability and confidence while one-handed technique and balance develop."
   },
   {
    "step": "Keep your swing path low-to-high, brushing up the back/side of the ball, the same as forehand.",
    "why": "The same lifting path applies to both sides — it's the grip and turn that change, not the overall shape of the swing."
   }
  ]
 },
 {
  "n": 6,
  "block": 2,
  "title": "Backhand Bullseye",
  "focus": "Backhand accuracy to a target",
  "walt": "We are learning to aim a backhand groundstroke at a chosen target, using our follow-through to control direction.",
  "wilf": [
   "I can aim my backhand toward a target on the left or right, not just anywhere",
   "I can adjust my follow-through direction to help control where the ball goes"
  ],
  "nzc": "Strand B · Thinking",
  "value": "Mōhio",
  "valueText": "Understanding your own body and how it moves — noticing exactly what's happening in your grip, swing, or footwork, and learning from it.",
  "equipment": "racquets, balls, cones/hoops or marked zones",
  "safety": "Standard spacing between hitting pairs; check the target/swing zone is clear before hitting",
  "games": [
   {
    "name": "Zone Target Backhand",
    "desc": "Self-drop backhands aimed at three marked zones (left, middle, right) worth different points; call the zone before hitting.",
    "coach": "Turn first, decide second, swing third.",
    "easier": "Two wide zones.",
    "harder": "Three narrower zones, called by a partner.",
    "chaos": "Bonus objectives (harder zone = bonus points)",
    "setup": "Mark three adjacent zones (left, middle, right) about 2m wide each, roughly 5m from the hitting line, using cones or hoops. Students work individually or in pairs with a racquet and a supply of balls.",
    "howTo": [
     "Explain the points: assign different values to each zone (e.g. middle = 1 point, left/right = 2 points).",
     "Before each hit, the student calls out which zone they're aiming for.",
     "The student self-drops and backhands the ball, aiming to land it in the called zone.",
     "Tally points across a set number of attempts (e.g. 8-10 balls), collecting between turns.",
     "Coach the key message: turn first, decide second, swing third — the sequence matters on the trickier backhand side.",
     "For 'harder', a partner calls the zone just before each hit instead of the hitter choosing it themselves."
    ]
   },
   {
    "name": "Hoop Hunter — Backhand",
    "desc": "A partner places or moves a hoop; the hitter backhands from a self-drop to land the ball in or near the hoop, then roles swap.",
    "coach": "Follow through toward the hoop.",
    "easier": "Hoop stationary and close.",
    "harder": "Hoop moved between hits, further away.",
    "chaos": "Random constraint calls (target moves)",
    "setup": "Pair students up, each pair with one hoop, one racquet, and a supply of balls, spread out with clear space between pairs.",
    "howTo": [
     "One partner places the hoop somewhere in the marked hitting area, roughly 4-6m from the hitting line.",
     "The hitter self-drops a backhand, aiming to land the ball in or near the hoop.",
     "The placing partner retrieves the ball and either leaves the hoop or moves it slightly before the next attempt.",
     "Swap roles after 5-6 attempts so both partners get to hit and to place the hoop.",
     "Coach the key message: follow through toward the hoop — let the swing finish pointing at the target.",
     "For 'harder', the hoop is moved further away and repositioned between every single hit."
    ]
   },
   {
    "name": "Streak Target Challenge — Backhand",
    "desc": "Consecutive successful backhand hits to the same called target before a miss resets the streak.",
    "coach": "Reset calmly after a miss and go again.",
    "easier": "Bigger target.",
    "harder": "Alternate between left and right targets each hit.",
    "chaos": "Scoring streaks",
    "setup": "Use a marked target zone (roughly 3m x 3m), 4-5m from the hitting line. Students work individually with a racquet and a supply of balls, tracking their own streak.",
    "howTo": [
     "The student calls a target and attempts to hit it with consecutive self-drop backhands.",
     "Each successful hit into the called target adds one to their personal streak count.",
     "A miss resets the streak to zero, and the student immediately tries again at the same target.",
     "Give students 2-3 minutes to try and beat their own best streak from earlier attempts.",
     "Coach the key message: reset calmly after a miss and go again — frustration makes the backhand tighten up.",
     "For 'harder', alternate between left and right targets on every single hit."
    ]
   }
  ],
  "big": {
   "name": "Backhand Precision Cup",
   "desc": "Small groups rotate through a mini target-course of backhand zones worth escalating points; team totals build across rounds, rewarding precision on the trickier side.",
   "setup": "Set up a mini target-course per group of 4 students using cones: 2-3 backhand zones at increasing distance from the hitting line, each worth escalating points. Each group shares a supply of balls.",
   "howTo": [
    "Explain the course: students rotate through hitting backhands at each zone in turn.",
    "Each group member takes a turn hitting a set number of balls (e.g. 3) at each zone before rotating to the next zone.",
    "Track a running team total across all rounds, adding up points from every zone.",
    "Coach the key message: the trickier backhand zones reward the same patience and turn you've been building all week.",
    "Rotate hitting order each round so the same student isn't always going first.",
    "Finish by comparing team totals and celebrating steady improvement in backhand accuracy across the two backhand lessons."
   ]
  },
  "discussion": [
   "What helped you aim your backhand where you wanted it to go?",
   "Who improved their backhand accuracy during the lesson — what did they change?",
   "Is backhand accuracy trickier than forehand for you? Why might that be?"
  ],
  "lookfors": [
   "Selects a target before swinging on the backhand side",
   "Follow-through points toward the intended target",
   "Makes small adjustments after a miss rather than repeating the same error"
  ],
  "inclusion": "Widen target zones or shorten the distance for students still building basic backhand technique; let confident hitters challenge themselves with narrower zones or longer distances.",
  "skillBreakdown": [
   {
    "step": "Choose a specific target before you hit, not after.",
    "why": "Deciding where to aim before you swing is what turns technique into accuracy, on either side."
   },
   {
    "step": "Point your follow-through toward your target.",
    "why": "A controlled, aimed follow-through is a strong sign of a controlled, aimed shot."
   },
   {
    "step": "Adjust your racquet face angle slightly if you're consistently missing to one side.",
    "why": "Small face adjustments fine-tune direction once your basic backhand turn and swing are already working."
   }
  ]
 },
 {
  "n": 7,
  "block": 2,
  "title": "Switch Hitter",
  "focus": "Combining forehand + backhand in a rally",
  "walt": "We are learning to decide quickly between forehand and backhand depending on where the ball arrives, and to combine both inside a short rally.",
  "wilf": [
   "I can decide quickly whether to use forehand or backhand based on where the ball is",
   "I can keep a short rally going by combining both strokes"
  ],
  "nzc": "Strand B · Thinking, Managing self",
  "value": "Manaaki",
  "valueText": "Looking after a partner's success as much as your own — feeding, rallying, and encouraging in a way that helps them succeed too.",
  "equipment": "racquets, balls, low nets/rope-and-cone ‘nets’, cones",
  "safety": "Standard spacing between rallying pairs; low nets/ropes checked to be secure and not a trip hazard",
  "games": [
   {
    "name": "Left-Right Feed Choice",
    "desc": "A partner feeds alternately or randomly to the forehand or backhand side; the hitter must choose and use the correct stroke each time.",
    "coach": "Decide early, turn early.",
    "easier": "Predictable alternating pattern.",
    "harder": "Random order.",
    "chaos": "Random constraint calls",
    "setup": "Pair students up along a hitting line, spaced at least 3m apart, with one racquet and a supply of balls per pair.",
    "howTo": [
     "Explain that the feeder will send the ball to either the forehand or backhand side, and the hitter must react with the correct stroke.",
     "Start with the feeder alternating sides in a predictable pattern (forehand, backhand, forehand...) so hitters can build confidence with the choice.",
     "The hitter turns and plays the appropriate stroke each time, aiming back toward the feeder or a simple target.",
     "Swap roles every 6-8 feeds so both partners practise choosing and feeding.",
     "Coach the key message: decide early, turn early — waiting to see the bounce is often too late.",
     "For 'harder', the feeder switches to a fully random order of forehand and backhand feeds."
    ]
   },
   {
    "name": "Cooperative Rally Count",
    "desc": "Partners rally back and forth over a low net/rope, counting consecutive controlled hits that combine both sides.",
    "coach": "Aim to a spot your partner can actually reach.",
    "easier": "Bigger target area, closer together.",
    "harder": "Further apart, deliberately alternating sides.",
    "chaos": "Scoring streaks",
    "setup": "Set up a low net or a rope-and-cone 'net' between pairs, with pairs standing about 3-4m apart on each side. Each pair shares one ball and both have a racquet.",
    "howTo": [
     "Explain the goal: keep a cooperative rally going for as many consecutive controlled hits as possible, using both forehand and backhand as needed.",
     "One partner starts with a gentle self-feed or underarm feed over the net to begin the rally.",
     "Both partners aim their shots to a spot their partner can comfortably reach, rather than trying to win the point.",
     "Count consecutive hits out loud together; if the rally breaks down, quickly restart with a gentle feed and begin counting again.",
     "Coach the key message: aim to a spot your partner can actually reach — a rally is a shared achievement, not a contest.",
     "For 'harder', partners stand further apart and deliberately alternate aiming to each other's forehand and backhand sides."
    ]
   },
   {
    "name": "Mirror Ready Position",
    "desc": "No ball — a partner calls or points forehand or backhand, and the student must snap into the correct ready turn as fast as possible.",
    "coach": "Turn your shoulders, not just your feet.",
    "easier": "Slower, predictable calls.",
    "harder": "Fast, random calls.",
    "chaos": "Beat the clock",
    "setup": "Pair students up facing each other, about 2m apart, each holding their own racquet — no ball needed.",
    "howTo": [
     "One partner calls or points 'forehand' or 'backhand' without warning.",
     "The other partner reacts as fast as possible, snapping into the correct ready turn for that stroke.",
     "The calling partner checks the turn looks correct (shoulders turned, racquet ready) and gives quick feedback.",
     "Swap roles every 8-10 calls so both partners practise reacting and calling.",
     "Coach the key message: turn your shoulders, not just your feet — the shoulder turn is what really shows the stroke choice.",
     "For 'harder', the calling partner speeds up and randomises the calls so there's less time to react."
    ]
   }
  ],
  "big": {
   "name": "Combo Rally Challenge",
   "desc": "Small groups/pairs try to build the longest cooperative rally combining forehand and backhand over a mini net, with the class tracking its best consecutive-hit total.",
   "setup": "Set up a mini net (or rope-and-cones) per pair or small group of 4, with cones marking a simple rally area on each side, roughly 4m x 4m.",
   "howTo": [
    "Explain the challenge: pairs try to build the longest cooperative rally combining forehand and backhand shots over the mini net.",
    "One partner starts each rally with a gentle underarm feed to get play going.",
    "Both partners rally back and forth, choosing forehand or backhand depending on where the ball comes to them.",
    "Track each pair's best consecutive-hit count on a simple class tally as rallies restart after breakdowns.",
    "Coach the key message: today's whole lesson has been about choosing the right stroke quickly — that's exactly what keeps a rally alive.",
    "Celebrate the class's overall best rally total, not just individual pairs, to keep the focus cooperative."
   ]
  },
  "discussion": [
   "What helped you decide which side to hit from quickly?",
   "Who kept a great rally going with their partner — what made it work?",
   "What did resetting your ready position do for your next shot?"
  ],
  "lookfors": [
   "Reads which side the ball is arriving on early",
   "Turns to the correct side without hesitation",
   "Resets to a ready position between shots"
  ],
  "inclusion": "Allow a bounce or two before requiring a stroke for less confident students; adjust net height and distance so rallies are genuinely achievable for every pair.",
  "skillBreakdown": [
   {
    "step": "Read early which side the ball is coming to (forehand or backhand side of your body).",
    "why": "The earlier you decide, the more time you have to turn and set up properly."
   },
   {
    "step": "Turn side-on on the correct side as soon as you've decided.",
    "why": "Committing to the turn early is what makes the actual stroke technique possible under time pressure."
   },
   {
    "step": "Reset to a ready position — racquet up, light feet — between every shot.",
    "why": "A rally is a series of separate decisions; resetting means you're ready for whichever side the next ball comes to."
   }
  ]
 },
 {
  "n": 8,
  "block": 2,
  "title": "Quick Feet",
  "focus": "Footwork — split step & moving to the ball",
  "walt": "We are learning to use a split step timed with our opponent's or feeder's contact, then move efficiently to the ball.",
  "wilf": [
   "I can perform a small split-step hop timed with my feeder's or opponent's contact",
   "I can move quickly and stay balanced to reach the ball, not just stretch with my arm"
  ],
  "nzc": "Strand B · Managing self",
  "value": "Pānga",
  "valueText": "Seeing how today's skill connects to the bigger game of tennis — a small piece that matters once it's put together with everything else.",
  "equipment": "racquets, balls, cones for movement patterns",
  "safety": "Clear space for movement drills; no loose equipment left underfoot in sprint/shuffle areas",
  "games": [
   {
    "name": "Split-Step Echo",
    "desc": "A partner claps or mimes a hit; students split-step in response as fast as possible, checking for a small hop rather than a big jump.",
    "coach": "Light and quick, not high.",
    "easier": "Slower, predictable timing.",
    "harder": "Random timing, followed by a direction call.",
    "chaos": "Random constraint calls",
    "setup": "Pair students up facing each other, about 3m apart, spread across the space. No ball or racquet needed for this drill — just movement.",
    "howTo": [
     "Demonstrate the split-step: a small, light hop landing with feet shoulder-width apart, timed just as an opponent is about to hit the ball.",
     "One partner claps or mimes a hitting action; the other reacts by split-stepping the instant they see or hear it.",
     "The calling partner checks the hop is small and light, not a big jump, and gives quick feedback.",
     "Swap roles every 8-10 reps so both partners practise the timing and the calling.",
     "Coach the key message: light and quick, not high — a split-step is about being ready to move, not about height.",
     "For 'harder', the calling partner adds a direction call (left/right) immediately after the clap, so the responder split-steps then moves."
    ]
   },
   {
    "name": "Cone Scatter Sprint",
    "desc": "Cones are scattered in a grid; the teacher calls a cone number or colour, and students split-step then move to that cone in a balanced hitting position.",
    "coach": "Small last steps to fine-tune your spot.",
    "easier": "Fewer cones, close together.",
    "harder": "More cones, further apart.",
    "chaos": "Beat the clock",
    "setup": "Scatter 8-10 numbered or coloured cones across a grid roughly 10m x 10m per group of 5-6 students.",
    "howTo": [
     "Explain that students will split-step on your call, then move to the named cone and arrive in a balanced, ready hitting position.",
     "Call a cone number or colour; students split-step first, then move quickly but under control to that cone.",
     "Check that students arrive with small, balanced final steps rather than a long final stride that throws off their balance.",
     "Call a new cone every 8-12 seconds, keeping the movement continuous.",
     "Coach the key message: small last steps to fine-tune your spot, rather than one big final stride.",
     "For 'harder', use more cones spread further apart to increase the distance and decision-making required."
    ]
   },
   {
    "name": "Shadow Rally Movement",
    "desc": "No ball — a partner points left/right/short/long, and the student split-steps and moves to mime a stroke in that position, resetting between each call.",
    "coach": "Reset your ready position every single time.",
    "easier": "Fewer directions, more time.",
    "harder": "Quick sequence of directions.",
    "chaos": "Head-to-head mirror (compare speed/balance)",
    "setup": "Pair students up facing each other, about 2-3m apart, each holding their own racquet — no ball needed.",
    "howTo": [
     "One partner points left, right, short, or long; the other split-steps and moves in that direction to mime a stroke.",
     "After each mimed shot, the mover resets back to a central ready position before the next call.",
     "The pointing partner checks the reset happens every time, not just on some reps.",
     "Swap roles every 8-10 calls so both partners practise moving and calling.",
     "Coach the key message: reset your ready position every single time — this habit is what makes real rallies possible later.",
     "For 'harder', the pointing partner gives a quick sequence of 2-3 directions in a row before allowing a reset."
    ]
   }
  ],
  "big": {
   "name": "Movement Mini-Rally",
   "desc": "A real rally over a low net where the focus is purely on split-step and movement quality rather than stroke power; small teams earn bonus points for visibly good footwork, not just for winning the point.",
   "setup": "Set up a low net or rope-and-cones per small team of 4, with a simple rally area marked on each side.",
   "howTo": [
    "Explain that today's mini-rally is scored on movement quality, not just on winning the point — teachers or peer observers watch for good split-steps and balanced footwork.",
    "One player starts each rally with a gentle feed over the net.",
    "Players rally, focusing on splitting and moving to the ball early rather than reaching or lunging at the last second.",
    "Award bonus points during the rally for visibly good footwork moments, calling them out as they happen ('nice split-step!').",
    "Coach the key message: the stroke can be simple — it's the movement underneath it that this lesson has been building.",
    "Rotate players through server/rally/observer roles so everyone gets a turn being watched for footwork."
   ]
  },
  "discussion": [
   "What did the split-step help you do?",
   "Who moved really well to the ball today — what did their feet look like?",
   "What's the difference between reaching with your arm and moving your whole body?"
  ],
  "lookfors": [
   "Shows a small hop timed with the opponent's/feeder's contact",
   "Moves the whole body to the ball rather than just reaching",
   "Uses small adjustment steps near the ball"
  ],
  "inclusion": "Allow extra time or slower feeds for students building footwork confidence; use a verbal cue (‘hop… now move!’) for students who need an extra prompt.",
  "skillBreakdown": [
   {
    "step": "Do a small, light hop (split step), landing on the balls of your feet just as the feeder/opponent hits the ball.",
    "why": "The split step puts you in a balanced, ready position so you can push off quickly in any direction."
   },
   {
    "step": "Push off and move your feet to get your whole body behind or beside the ball, not just stretch your arm.",
    "why": "Good footwork means you arrive with time to set up your swing properly instead of lunging and mishitting."
   },
   {
    "step": "Take small adjustment steps as you get close to the ball to find the right distance.",
    "why": "Big final steps overshoot the ball; small steps let you fine-tune your position right before contact."
   }
  ]
 },
 {
  "n": 9,
  "block": 2,
  "title": "Keep It Alive",
  "focus": "Rallying with a partner (cooperative, low net/modified ball)",
  "walt": "We are learning to combine grip, stroke technique, and footwork to sustain a cooperative rally over a low net.",
  "wilf": [
   "I can hit the ball back over a low net so my partner can return it",
   "I can move and reset between shots to keep a rally going"
  ],
  "nzc": "Strand B, C · Relating to others",
  "value": "Aroha",
  "valueText": "Being patient and kind with yourself while a new skill feels awkward, and encouraging classmates whose attempts look different from yours.",
  "equipment": "racquets, balls, modified/low nets or rope-and-cones, cones for court boundaries",
  "safety": "Standard spacing; low nets/ropes checked secure; call ‘mine’ if two players reach for the same ball",
  "games": [
   {
    "name": "Count the Rally",
    "desc": "Pairs count consecutive controlled hits over a low net/marked boundary, trying to beat their own best.",
    "coach": "Consistency beats power here.",
    "easier": "Bigger court/target area, closer together.",
    "harder": "Smaller area, further apart.",
    "chaos": "Scoring streaks",
    "setup": "Set up a low net or rope-and-cones per pair, with cones marking a rally area roughly 5m x 4m per side. Each pair shares one ball and both have a racquet.",
    "howTo": [
     "One partner starts with a gentle underarm feed or self-feed over the net to begin.",
     "Both partners rally back and forth, counting consecutive controlled hits out loud together.",
     "If the rally breaks down, restart quickly with a gentle feed and begin the count again from zero.",
     "Give pairs 2-3 attempts and ask them to try to beat their own best count each time.",
     "Coach the key message: consistency beats power here — a soft, controlled shot that lands in beats a hard shot that doesn't.",
     "For 'harder', shrink the marked area and move pairs further apart."
    ]
   },
   {
    "name": "Target Zone Rally",
    "desc": "Pairs rally but must alternate aiming to a marked left/right zone on their partner's side.",
    "coach": "Aim to help the rally continue, not to win the point.",
    "easier": "One wide zone.",
    "harder": "Two narrow zones, alternating.",
    "chaos": "Bonus objectives",
    "setup": "Mark a left and right zone on each side of the net using cones, within the existing rally area from the previous game.",
    "howTo": [
     "Explain that pairs must alternate aiming their shots to the left zone, then the right zone, on their partner's side.",
     "Start the rally with a gentle feed, then both partners continue alternating zones with each hit.",
     "If a shot misses the called zone but the rally is still playable, keep going — the goal is the pattern, not perfection.",
     "Coach the key message: aim to help the rally continue, not to win the point — a rally is a shared success.",
     "Count consecutive on-pattern hits as a simple team score.",
     "For 'harder', narrow to two smaller zones that must still be strictly alternated."
    ]
   },
   {
    "name": "Shrinking Court Rally",
    "desc": "The marked rally area gradually narrows as a pair's consecutive count increases, raising the challenge automatically.",
    "coach": "Smaller target, smaller swing — stay controlled.",
    "easier": "Shrink slowly, reset to a bigger area often.",
    "harder": "Shrink faster.",
    "chaos": "Shrinking/growing space",
    "setup": "Mark a starting rally area of about 5m x 5m per pair using cones, with a few spare cones nearby to shrink the area during play.",
    "howTo": [
     "Pairs begin rallying inside the full-size marked area, counting consecutive hits as they go.",
     "Every time the pair reaches a set milestone (e.g. 5 consecutive hits), move the boundary cones slightly inward to shrink the area.",
     "Continue the rally inside the smaller area, still counting consecutively from where they left off.",
     "If the rally breaks down, reset to a slightly bigger area than where it failed, rather than all the way back to the start.",
     "Coach the key message: smaller target, smaller swing — stay controlled as the space shrinks rather than swinging harder.",
     "For 'harder', shrink the area faster, after fewer consecutive hits."
    ]
   }
  ],
  "big": {
   "name": "Class Rally League",
   "desc": "All pairs rally simultaneously for a set time, tracking their best consecutive count; pairs may swap partners once to rally with someone new, celebrating cooperative totals across the whole class rather than head-to-head competition.",
   "setup": "Set up as many low nets or rope-and-cone dividers as needed so every pair in the class can rally simultaneously, each with a simple marked area.",
   "howTo": [
    "Explain that all pairs will rally at the same time for a set period (e.g. 5-6 minutes), tracking their own best consecutive count.",
    "Pairs begin rallying, using a gentle feed to restart whenever their rally breaks down.",
    "Partway through, call a 'partner swap' where each student moves to rally with someone new for a few minutes.",
    "After the swap, students return to a partner (original or new) to try and beat the class's earlier totals.",
    "Coach the key message: this is about the whole class's cooperative total, not head-to-head competition between pairs.",
    "Finish by asking a few pairs to share their best consecutive count and celebrate the class's combined effort."
   ]
  },
  "discussion": [
   "What did you and your partner do to help each other keep the rally going?",
   "What was your best rally count, and what worked?",
   "How is rallying together different from just hitting the ball as hard as you can?"
  ],
  "lookfors": [
   "Aims shots to be genuinely hittable by their partner",
   "Uses a controlled swing rather than maximum power",
   "Resets and moves between shots"
  ],
  "inclusion": "Allow bounces, bigger target zones, or closer distances for pairs still building consistency; pair thoughtfully so both partners can genuinely contribute to the rally.",
  "skillBreakdown": [
   {
    "step": "Aim your shots to your partner's side, not just anywhere over the net.",
    "why": "A rally only continues if the ball is genuinely hittable by your partner — accuracy is part of cooperation."
   },
   {
    "step": "Use a controlled, moderate swing rather than hitting as hard as possible.",
    "why": "Power without control ends rallies quickly; a rally rewards consistency over power."
   },
   {
    "step": "Reset to a ready position after every shot, watching your partner's contact to split-step and move.",
    "why": "This lesson combines everything so far — grip, stroke, footwork — into one continuous skill."
   }
  ]
 },
 {
  "n": 10,
  "block": 2,
  "title": "First Strike",
  "focus": "Serving technique (underarm/modified serve)",
  "walt": "We are learning correct technique for an underarm/modified serve to start a point.",
  "wilf": [
   "I can toss or drop the ball to a consistent spot before serving",
   "I can serve underarm with a controlled swing that clears the net into the service area"
  ],
  "nzc": "Strand B · Managing self",
  "value": "Mōhio",
  "valueText": "Understanding your own body and how it moves — noticing exactly what's happening in your grip, swing, or footwork, and learning from it.",
  "equipment": "racquets, balls, low nets, cones/markers for service boxes",
  "safety": "Always serve away from other groups; wait for a clear ‘go ahead’ before serving toward any shared space",
  "games": [
   {
    "name": "Toss & Catch",
    "desc": "Practise the toss/drop alone or with a partner checking consistency, catching the ball instead of hitting it first to isolate the skill.",
    "coach": "Same spot, every time.",
    "easier": "Use a self-drop instead of a toss.",
    "harder": "Toss to a marked target spot in the air.",
    "chaos": "Role rotation (feedback partner)",
    "setup": "Students spread out individually or in pairs across the space, each with a racquet and a ball. No net needed yet.",
    "howTo": [
     "Demonstrate a consistent toss or self-drop: releasing the ball to roughly the same spot in front of the body each time.",
     "Students practise tossing the ball up (or self-dropping it) and simply catching it again, without hitting it, to isolate the toss from the swing.",
     "If working in pairs, one partner watches and checks whether the toss lands in the same spot each time, giving quick feedback.",
     "Repeat 8-10 times, aiming for a consistent, repeatable toss rather than speed.",
     "Coach the key message: same spot, every time — consistency in the toss is what makes the whole serve work later.",
     "For 'harder', toss to a specific marked target spot in the air rather than just anywhere comfortable."
    ]
   },
   {
    "name": "Underarm Serve Target",
    "desc": "Serve underarm into a marked service box, counting clean serves in.",
    "coach": "Low-to-high swing, contact out in front.",
    "easier": "Bigger box, closer distance.",
    "harder": "Smaller box, further distance.",
    "chaos": "Scoring streaks",
    "setup": "Mark a service box (roughly 3m x 4m) using cones on the opposite side of a low net, about 6-8m from the server. Each student has a racquet and a supply of balls.",
    "howTo": [
     "Demonstrate the underarm serve: toss or self-drop the ball, then swing low-to-high, contacting the ball out in front of the body, aiming into the marked box.",
     "Students take turns serving underarm into the box, counting clean serves in out of a set number of attempts (e.g. 8-10).",
     "Collect balls together between turns to keep the group organised and safe.",
     "Coach the key message: low-to-high swing, contact out in front — not overhead and not behind the body.",
     "For 'harder', make the box smaller or move the server further back.",
     "Remind students to always check the box/net area is clear before serving toward it."
    ]
   },
   {
    "name": "Serve & Rally Starter",
    "desc": "Serve to a partner who returns it, turning the serve into the start of a short rally — the serve doesn't have to be a ‘winner,’ just a good start.",
    "coach": "A controlled serve beats a hard, wild one.",
    "easier": "Serve from closer, partner returns gently.",
    "harder": "Serve from full distance into a target.",
    "chaos": "Role rotation",
    "setup": "Pair students up on opposite sides of a low net, each pair with one racquet each and a shared supply of balls.",
    "howTo": [
     "One partner serves underarm toward the other, aiming for a controlled, in-play serve rather than a hard one.",
     "The receiving partner returns the serve gently, and the pair continues the exchange for a few shots if it stays in play.",
     "Remind students the serve doesn't need to be a winner — its job is just to start a good rally.",
     "Swap serving roles every 4-5 serves so both partners practise starting the rally.",
     "Coach the key message: a controlled serve beats a hard, wild one — control gets the point started.",
     "For 'harder', the server moves back to full serving distance and aims for a marked target."
    ]
   }
  ],
  "big": {
   "name": "Serve Ladder Challenge",
   "desc": "Small groups take turns serving into progressively smaller or further zones for increasing points, building the serve toward starting real points in later lessons.",
   "setup": "Mark 2-3 service zones per group of 4 students at progressively smaller size or further distance, worth increasing points, on the far side of a low net.",
   "howTo": [
    "Explain the ladder: each zone is worth more points than the last because it's smaller or further away.",
    "Students take turns serving underarm, choosing which zone to aim for and calling it before they serve.",
    "Track a running total per student or per team across several rounds of serves.",
    "Coach the key message: today's serve is the foundation for starting real points later in the unit — control now pays off then.",
    "Rotate serving order each round so turns stay fair.",
    "Finish by highlighting a few students who improved their zone accuracy across the rounds, not just the highest scorers."
   ]
  },
  "discussion": [
   "What helped you toss or drop the ball consistently?",
   "Who served really well today — what did you notice about their routine?",
   "Why does a consistent toss matter more than a powerful swing?"
  ],
  "lookfors": [
   "Uses a consistent toss/drop location",
   "Shows a low-to-high swing path with contact out in front",
   "Serve clears the net into the target area"
  ],
  "inclusion": "Allow a self-drop instead of a toss for anyone finding tossing tricky; shrink the serving distance for students building confidence.",
  "skillBreakdown": [
   {
    "step": "Use a consistent, gentle toss or self-drop of the ball to roughly the same spot every time.",
    "why": "A consistent toss/drop is what makes the rest of the serve repeatable — an inconsistent toss means an inconsistent serve no matter how good your swing is."
   },
   {
    "step": "Swing the racquet underarm with a smooth, low-to-high path, contacting the ball out in front of your body.",
    "why": "Same principle as groundstrokes — an out-front, lifting contact point gives control and clears the net safely."
   },
   {
    "step": "Follow through toward your target, the marked service area.",
    "why": "Following through toward the target keeps your swing purposeful and helps direct the serve rather than just hitting and hoping."
   }
  ]
 },
 {
  "n": 11,
  "block": 3,
  "title": "Corner Server",
  "focus": "Serving accuracy/placement",
  "walt": "We are learning to place serves into specific zones of the service area, not just anywhere inside it.",
  "wilf": [
   "I can aim my serve to a called zone — left, right, short, or deep",
   "I can adjust my toss or swing slightly to change where the serve lands"
  ],
  "nzc": "Strand B · Thinking",
  "value": "Manaaki",
  "valueText": "Looking after a partner's success as much as your own — feeding, rallying, and encouraging in a way that helps them succeed too.",
  "equipment": "racquets, balls, low nets, cones/markers for zoned service boxes",
  "safety": "Always serve away from other groups; wait for a clear ‘go ahead’ before serving toward any shared space",
  "games": [
   {
    "name": "Zone Serve Challenge",
    "desc": "Serve into one of several marked zones inside the service box, worth different points depending on difficulty.",
    "coach": "Pick your zone, then set your toss to match.",
    "easier": "Fewer, bigger zones.",
    "harder": "More, smaller zones.",
    "chaos": "Bonus objectives",
    "setup": "Mark 3-4 zones of different sizes inside a service box using cones, roughly 6-8m from the server, behind a low net.",
    "howTo": [
     "Explain the point values: smaller or more awkward zones are worth more points than larger, central ones.",
     "Students take turns serving underarm, choosing a zone to aim for and calling it before serving.",
     "Track points across a set number of serves (e.g. 8-10) per student.",
     "Coach the key message: pick your zone, then set your toss to match — the toss should support the target, not just be automatic.",
     "For 'harder', reduce the number of zones and make them smaller so there's less margin for error.",
     "Always check the box and net area is clear before each serve."
    ]
   },
   {
    "name": "Serve & Call",
    "desc": "A partner calls a target zone just before the serve, and the server must aim there rather than choosing themselves.",
    "coach": "Trust your routine even when the target changes.",
    "easier": "Same zone called several times in a row.",
    "harder": "A different zone called every serve.",
    "chaos": "Random constraint calls",
    "setup": "Pair students up, one serving and one calling, on either side of the service box with a low net between them.",
    "howTo": [
     "The calling partner names a target zone just before the server tosses the ball.",
     "The server must aim for that zone rather than choosing their own target.",
     "The calling partner checks whether the serve landed in the called zone and gives quick feedback.",
     "Swap roles every 5-6 serves so both partners practise serving under a called target.",
     "Coach the key message: trust your routine even when the target changes — don't rush the toss just because the target is new.",
     "For 'harder', the caller changes the target zone on every single serve rather than repeating one for a few serves."
    ]
   },
   {
    "name": "Streak Serve Target",
    "desc": "Consecutive successful serves into the same called zone before a miss resets the streak.",
    "coach": "Reset calmly after a miss and go again.",
    "easier": "Bigger zone.",
    "harder": "Smaller zone, or alternating zones.",
    "chaos": "Scoring streaks",
    "setup": "Use one marked zone within the service box, roughly 2m x 2m, with the server positioned at full serving distance.",
    "howTo": [
     "The student calls their target zone and attempts consecutive successful serves into it.",
     "Each successful serve adds to their personal streak; a miss resets the count to zero.",
     "Students immediately try again at the same target after a miss, without a long pause.",
     "Give students 2-3 minutes to try and beat their earlier best streak.",
     "Coach the key message: reset calmly after a miss and go again — tension in the toss causes more misses.",
     "For 'harder', use a smaller zone, or alternate between two zones instead of staying on one."
    ]
   }
  ],
  "big": {
   "name": "Serve Placement Showdown",
   "desc": "Small groups compete serving to escalating-value zones across several rounds, with encouragement for effort on the hardest, smallest zones as well as for successful serves.",
   "setup": "Set up escalating-value zones (e.g. three sizes, each worth different points) inside the service box for each group of 4 students, behind a low net.",
   "howTo": [
    "Explain the competition: groups compete across several rounds, serving toward zones of their choice for points.",
    "Students take turns serving, calling their target zone before each serve.",
    "Track a running group total across rounds, adding points from successful serves.",
    "Coach the key message: today celebrates good effort at the hardest zones just as much as clean successful serves.",
    "Give specific encouragement when a student attempts (even if they miss) the smallest, hardest zone.",
    "Finish with a quick class share of which zone felt hardest and why, connecting it back to toss consistency."
   ]
  },
  "discussion": [
   "What helped you aim your serve to a specific zone?",
   "Who kept trying for a tricky zone even after missing — how did you encourage them?",
   "What's one small adjustment that changed where your serve landed?"
  ],
  "lookfors": [
   "Aims serves to a specific zone rather than just ‘in’",
   "Makes small toss/swing adjustments to change direction",
   "Stays composed and keeps trying after a missed serve"
  ],
  "inclusion": "Use bigger zones or closer distances for students still building serve consistency; celebrate genuine attempts at harder zones, not just successes.",
  "skillBreakdown": [
   {
    "step": "Choose a specific zone to aim for before you toss the ball.",
    "why": "Placement starts with a decision, the same as any other shot in tennis."
   },
   {
    "step": "Shift your toss slightly left or right, or slightly further forward or back, to change your serve's direction and depth.",
    "why": "Small, deliberate toss adjustments are one of the most reliable ways to control where a serve lands."
   },
   {
    "step": "Keep your normal, controlled swing rather than swinging harder to reach a tricky zone.",
    "why": "Placement comes from where you aim and toss, not from extra power — swinging harder usually reduces accuracy."
   }
  ]
 },
 {
  "n": 12,
  "block": 3,
  "title": "Net Ninja",
  "focus": "Volley technique (at the net)",
  "walt": "We are learning to use a short, controlled ‘punch’ volley to return a ball at the net before it bounces.",
  "wilf": [
   "I can hit a fed ball out of the air near the net using a short punching motion, not a big swing",
   "I can hold a ready position — racquet up — at the net"
  ],
  "nzc": "Strand B · Managing self",
  "value": "Pānga",
  "valueText": "Seeing how today's skill connects to the bigger game of tennis — a small piece that matters once it's put together with everything else.",
  "equipment": "racquets, balls, low nets, cones",
  "safety": "Feeds toward the net kept gentle and controlled; clear spacing between pairs working at the net",
  "games": [
   {
    "name": "Volley Prep Reps",
    "desc": "A close, gentle feed to the net; the student returns it with a short punch volley, no backswing.",
    "coach": "Racquet up, short punch, no big swing.",
    "easier": "Very close, slow feed.",
    "harder": "Feed varied slightly left/right.",
    "chaos": "Role rotation",
    "setup": "Pair students up on either side of a low net, standing close to the net (roughly 1.5-2m back), each with a racquet and a shared supply of balls.",
    "howTo": [
     "Demonstrate the volley: racquet held up in front of the body, a short punch forward with no backswing, contacting the ball before it bounces.",
     "One partner gently feeds the ball directly at the volleyer from close range.",
     "The volleyer returns it with a short punch action, focusing on technique rather than power or placement.",
     "Swap roles every 6-8 feeds so both partners practise the volley.",
     "Coach the key message: racquet up, short punch, no big swing — the volley is a block, not a full stroke.",
     "For 'harder', the feeder varies the feed slightly left or right of the volleyer."
    ]
   },
   {
    "name": "Volley Target Zone",
    "desc": "Volley fed balls toward a marked zone on the other side of the net.",
    "coach": "Angle the face down slightly to keep it in.",
    "easier": "Bigger zone, closer net.",
    "harder": "Smaller zone, standard net.",
    "chaos": "Scoring streaks",
    "setup": "Mark a target zone on the far side of the net, roughly 3m x 3m, with the volleyer standing close to the net on the near side.",
    "howTo": [
     "A partner feeds the ball to the volleyer from close range.",
     "The volleyer punches a short volley aimed at the marked zone on the other side.",
     "Count clean hits into the zone across a set number of feeds (e.g. 8-10).",
     "Rotate the feeder and volleyer roles regularly so both get equal reps.",
     "Coach the key message: angle the face down slightly to keep the volley in, since volleys naturally want to fly long.",
     "For 'harder', shrink the target zone and use a standard net height instead of a lowered one."
    ]
   },
   {
    "name": "Two-Touch Volley Rally",
    "desc": "Partners volley to each other at the net without letting the ball bounce, counting consecutive volleys.",
    "coach": "Stay light on your feet between volleys.",
    "easier": "Bigger target area, softer ball speed.",
    "harder": "Smaller target area, quicker exchanges.",
    "chaos": "Beat the clock",
    "setup": "Pair students up close to a low net (roughly 1.5-2m back on each side), each with a racquet, sharing one ball.",
    "howTo": [
     "Partners volley the ball back and forth to each other without letting it bounce, starting with a gentle feed.",
     "Both students count consecutive volleys out loud together.",
     "If the rally breaks down, restart quickly with a gentle feed and count again from zero.",
     "Encourage light, quick foot adjustments between volleys rather than standing flat-footed.",
     "Coach the key message: stay light on your feet between volleys so you're ready to move to the next one.",
     "For 'harder', shrink the target area and pick up the pace of the exchanges."
    ]
   }
  ],
  "big": {
   "name": "Net Point Finisher",
   "desc": "Small-sided mini games where points start with a gentle feed and must be finished at the net with a volley, rewarding clean technique under a little game pressure.",
   "setup": "Set up a low net per pair with a small marked mini-court on each side, roughly 4m x 4m, close enough to the net that points naturally finish at the volley.",
   "howTo": [
    "Explain the format: each point starts with a gentle feed and must be finished at the net with a volley to count.",
    "One player feeds gently to start the point; both players may move to the net to contest the finish.",
    "Points are won by a clean volley finish rather than a groundstroke winner from the baseline.",
    "Coach the key message: today's whole focus — racquet up, short punch — is exactly what wins these points.",
    "Rotate feeding duties every 2-3 points so both players get to start and finish points.",
    "Keep score lightly (first to a small target like 5) so the focus stays on technique, not pressure."
   ]
  },
  "discussion": [
   "What did the short ‘punch’ motion feel like compared to a full groundstroke swing?",
   "Who held a really strong ready position at the net today?",
   "Why might a big swing not work well so close to the net?"
  ],
  "lookfors": [
   "Uses a short punching motion rather than a full swing",
   "Holds racquet up in a ready position between volleys",
   "Angles the racquet face to control the volley's direction"
  ],
  "inclusion": "Use gentler, closer feeds and bigger target zones for students building net confidence; reassure students that mishit volleys are a normal, expected part of learning this new skill.",
  "skillBreakdown": [
   {
    "step": "Hold the racquet up in front of you at the net in a ready position, with no backswing.",
    "why": "A volley is a short punch, not a full swing — preparing without a big backswing keeps your reaction time fast."
   },
   {
    "step": "Step toward the ball and punch or block it firmly using a short forward motion.",
    "why": "Because the ball is close and fast at the net, a short controlled punch is more reliable than a big swing."
   },
   {
    "step": "Angle the racquet face slightly to direct the ball down and away rather than straight back.",
    "why": "A slight downward angle keeps volleys from flying long, using the net's height rather than the ball's speed."
   }
  ]
 },
 {
  "n": 13,
  "block": 3,
  "title": "Full Point Player",
  "focus": "Combining groundstrokes + volley in a point",
  "walt": "We are learning to move forward from a baseline rally and finish a point with a volley at the net.",
  "wilf": [
   "I can recognise a good moment to move forward to the net",
   "I can combine a groundstroke rally with a volley finish in the same point"
  ],
  "nzc": "Strand B · Thinking",
  "value": "Aroha",
  "valueText": "Being patient and kind with yourself while a new skill feels awkward, and encouraging classmates whose attempts look different from yours.",
  "equipment": "racquets, balls, low nets, cones",
  "safety": "Clear communication when moving forward into a partner's space near the net; standard spacing between pairs",
  "games": [
   {
    "name": "Approach & Finish",
    "desc": "A feed starts a short groundstroke exchange, then on a call (or after a set number of shots) the student moves forward and finishes the point with a volley.",
    "coach": "Move forward with purpose, not by accident.",
    "easier": "Fixed number of groundstrokes before moving forward.",
    "harder": "Move forward whenever a shot feels short/easy.",
    "chaos": "Bonus objectives (finishing at net = bonus)",
    "setup": "Pair students up on either side of a low net, with a marked baseline roughly 6-7m back and a forward 'approach' line about 2m from the net.",
    "howTo": [
     "One partner feeds the first ball from the baseline to start a short groundstroke exchange.",
     "After a set number of groundstrokes (e.g. 2-3) or on a call from the feeder, the hitter moves forward to the approach line.",
     "The feeder sends one more ball for the hitter to finish with a volley at the net.",
     "Swap roles every few points so both partners practise both the groundstroke phase and the net finish.",
     "Coach the key message: move forward with purpose, not by accident — the move forward is a decision, not a drift.",
     "For 'harder', the hitter must judge for themselves when a shot is short/easy enough to move forward, rather than following a fixed count."
    ]
   },
   {
    "name": "Baseline to Net Relay",
    "desc": "Students hit a groundstroke from the baseline, sprint forward to a marked line, then volley a second feed to finish.",
    "coach": "Split-step as you arrive at the line.",
    "easier": "Shorter sprint distance.",
    "harder": "Longer sprint distance, quicker second feed.",
    "chaos": "Beat the clock",
    "setup": "Mark a baseline and a line about 4-5m closer to the net per pair, with a low net between the two sides. Each pair has one racquet each and a supply of balls.",
    "howTo": [
     "The student starts at the baseline and hits a groundstroke off a feed from their partner.",
     "Immediately after hitting, the student sprints forward to the marked line closer to the net.",
     "The partner sends a second feed as the student arrives, who finishes it with a volley.",
     "Swap roles after each attempt so both partners get to hit-and-move and to feed.",
     "Coach the key message: split-step as you arrive at the line, don't just run straight into the volley.",
     "For 'harder', increase the sprint distance and speed up the second feed."
    ]
   },
   {
    "name": "Point Construction Mini-Games",
    "desc": "Small-sided points that must include at least one groundstroke and one volley to score, encouraging the full pattern rather than staying on the baseline.",
    "coach": "Look for the moment to move in.",
    "easier": "More time/shots allowed before the volley requirement.",
    "harder": "Fewer shots allowed before it.",
    "chaos": "Added defender/pressure",
    "setup": "Set up a low net per pair with a marked mini-court on each side, roughly 5m x 5m.",
    "howTo": [
     "Explain the rule: a point only counts if it includes at least one groundstroke and one volley from the scoring player.",
     "Points start with a gentle feed or serve and play out normally from there.",
     "If a point ends with only groundstrokes (no one came to the net), it doesn't count and is replayed.",
     "Coach the key message: look for the moment to move in — after a shot that lands short or high is often the cue.",
     "Rotate feeding/serving duties regularly so play stays fair.",
     "For 'harder', reduce the number of groundstroke shots allowed before the volley requirement kicks in."
    ]
   }
  ],
  "big": {
   "name": "Construct the Point",
   "desc": "Small-sided games where points that combine a baseline rally with a net finish are specifically celebrated and lightly rewarded, encouraging students to build a full point pattern rather than just trading groundstrokes.",
   "setup": "Set up a low net per pair or small group with a marked mini-court, roughly 5m x 6m on each side.",
   "howTo": [
    "Explain that points combining a baseline rally with a finish at the net are specifically celebrated during play, alongside normal scoring.",
    "Points start with a gentle feed or serve and are played out normally.",
    "When a student successfully builds a rally and finishes it at the net, call it out and award a small bonus point.",
    "Coach the key message: today is about building the full point pattern, not staying safely on the baseline the whole time.",
    "Rotate players through serving/feeding roles regularly.",
    "Finish by asking a couple of students to describe a point where they successfully moved forward and finished it."
   ]
  },
  "discussion": [
   "What helped you recognise a good moment to move forward?",
   "Who combined a rally and a net finish really well today?",
   "What's tricky about switching from a groundstroke mindset to a volley mindset mid-point?"
  ],
  "lookfors": [
   "Recognises an opportunity to move forward during a rally",
   "Moves forward with balanced footwork rather than a rushed sprint",
   "Combines a groundstroke exchange with a volley finish"
  ],
  "inclusion": "Allow extra shots or a slower approach for students still building confidence moving forward; keep the ‘finish’ requirement flexible (a controlled volley attempt counts, whether or not it's a winner).",
  "skillBreakdown": [
   {
    "step": "Recognise a short or high ball during the rally as a good moment to move forward.",
    "why": "Choosing the right moment is what separates a purposeful approach from a random, risky one."
   },
   {
    "step": "Move forward with balanced, controlled steps rather than a rushed sprint.",
    "why": "Arriving balanced means you're ready to volley properly instead of just reaching."
   },
   {
    "step": "Split-step as you arrive near the net, then finish with a short punch volley.",
    "why": "This links today's skill directly back to your split-step and volley technique from earlier lessons."
   }
  ]
 },
 {
  "n": 14,
  "block": 3,
  "title": "Ball Reader",
  "focus": "Reading the ball's bounce & trajectory",
  "walt": "We are learning to predict where a ball will bounce or arrive based on its flight, and to move into position early.",
  "wilf": [
   "I can move to the right spot before the ball bounces, not after",
   "I can judge whether a ball will be high, low, short, or deep"
  ],
  "nzc": "Strand B · Thinking",
  "value": "Mōhio",
  "valueText": "Understanding your own body and how it moves — noticing exactly what's happening in your grip, swing, or footwork, and learning from it.",
  "equipment": "racquets, balls, cones",
  "safety": "Standard spacing; feeders vary trajectory gently and with control, not by hitting hard",
  "games": [
   {
    "name": "Call the Bounce",
    "desc": "A feeder sends a variety of trajectories; before the ball bounces, students call out ‘high,’ ‘low,’ ‘short,’ or ‘deep’ as a prediction.",
    "coach": "Watch the ball leave the racquet, not just where it lands.",
    "easier": "Slower, more obvious trajectories.",
    "harder": "Quicker, more varied trajectories.",
    "chaos": "Random constraint calls",
    "setup": "Pair students up, one feeding and one predicting, on either side of a low net or simple hitting line.",
    "howTo": [
     "The feeder sends a variety of gentle, controlled trajectories — some higher, some lower, some shorter, some deeper.",
     "Before the ball bounces, the predicting partner calls out 'high', 'low', 'short', or 'deep' based on what they see in flight.",
     "The feeder confirms whether the prediction matched the actual bounce once it happens.",
     "Swap roles every 6-8 feeds so both partners practise predicting and feeding.",
     "Coach the key message: watch the ball leave the racquet, not just where it lands — the flight gives the earliest clues.",
     "For 'harder', the feeder sends quicker, more varied trajectories with less obvious differences."
    ]
   },
   {
    "name": "Early Move Challenge",
    "desc": "Students must move to the predicted contact spot before the ball bounces, then play the shot from a balanced position.",
    "coach": "Move on the flight, not the bounce.",
    "easier": "Slower feeds, more reaction time.",
    "harder": "Quicker feeds, less reaction time.",
    "chaos": "Beat the clock",
    "setup": "Pair students up with one feeder and one mover, on either side of a low net or hitting line.",
    "howTo": [
     "The feeder sends a ball with a clear trajectory (height, depth, or direction).",
     "Before the ball bounces, the mover must move to where they predict the contact spot will be.",
     "Once positioned, the mover plays the shot from a balanced ready position rather than lunging or reaching.",
     "Swap roles every 6-8 feeds so both partners practise moving early and feeding.",
     "Coach the key message: move on the flight, not the bounce — waiting for the bounce is often too late.",
     "For 'harder', the feeder quickens the pace of feeds to reduce reaction time."
    ]
   },
   {
    "name": "Trajectory Tag",
    "desc": "A feeder deliberately varies trajectory (short, deep, high, low) and students react with correct positioning and stroke choice.",
    "coach": "Adjust your feet first, your racquet second.",
    "easier": "Predictable pattern of trajectories.",
    "harder": "Fully randomised trajectories.",
    "chaos": "Shrinking/growing space",
    "setup": "Pair students up with one feeder and one hitter, on either side of a low net or hitting line, in a marked area roughly 5m x 5m.",
    "howTo": [
     "The feeder deliberately varies trajectory — sometimes short, sometimes deep, sometimes high, sometimes low.",
     "The hitter reacts with correct positioning (moving forward/back as needed) and an appropriate stroke choice.",
     "The feeder gives quick feedback on whether the hitter's positioning matched the trajectory well.",
     "Swap roles every 6-8 feeds so both partners get practice at feeding and reacting.",
     "Coach the key message: adjust your feet first, your racquet second — footwork sets up the stroke.",
     "For 'harder', the feeder uses a fully randomised mix of trajectories with no pattern."
    ]
   }
  ],
  "big": {
   "name": "Read & React Mini-Games",
   "desc": "Small-sided games where feeders/opponents deliberately vary trajectory, and reading it well early is highlighted by the teacher as a key reason points are won.",
   "setup": "Set up a low net per pair or small group of 4 with a marked mini-court, roughly 5m x 6m on each side.",
   "howTo": [
    "Explain that today's small-sided games will highlight moments where a player reads the incoming ball well and reacts early.",
    "Points start with a gentle feed or serve and play out normally from there.",
    "When you see a student clearly read and react to a varied trajectory well, pause briefly to point it out to the group.",
    "Coach the key message: reading the ball early is often the real reason a point is won, more than raw power.",
    "Rotate feeding/serving duties so play stays fair.",
    "Finish by asking students to name one trajectory (short, deep, high, or low) they found hardest to read today."
   ]
  },
  "discussion": [
   "What clues helped you predict where the ball was going?",
   "Who read the ball really well today — what were they watching for?",
   "What happens if you wait until after the bounce to start moving?"
  ],
  "lookfors": [
   "Starts moving before the ball bounces, based on its flight",
   "Correctly judges high/low/short/deep in most cases",
   "Arrives at the ball in a balanced position, not stretching"
  ],
  "inclusion": "Use slower, more obvious trajectories and extra reaction time for students building this skill; keep feeds controlled and predictable in easier variants so success is genuinely achievable.",
  "skillBreakdown": [
   {
    "step": "Watch the ball as it leaves the racquet or hand, not just as it approaches you.",
    "why": "The earliest, clearest information about where a ball is going comes right at the start of its flight."
   },
   {
    "step": "Judge the trajectory — high or low, short or deep — and start moving toward the predicted spot immediately.",
    "why": "Moving early, based on a prediction, gives you time to arrive balanced instead of reacting late."
   },
   {
    "step": "Keep adjusting your position with small steps as the ball gets closer and your prediction becomes clearer.",
    "why": "An early prediction gets you close; small adjustments get you exactly right."
   }
  ]
 },
 {
  "n": 15,
  "block": 3,
  "title": "Smart Shot",
  "focus": "Decision-making — where to place a shot",
  "walt": "We are learning to choose where to aim a shot based on the situation — where our opponent is, and how balanced we are — rather than hitting to the same place every time.",
  "wilf": [
   "I can spot space on the other side of the court and aim there",
   "I can choose a safer, higher-percentage shot when I'm off-balance"
  ],
  "nzc": "Strand B · Thinking",
  "value": "Manaaki",
  "valueText": "Looking after a partner's success as much as your own — feeding, rallying, and encouraging in a way that helps them succeed too.",
  "equipment": "racquets, balls, low nets, cones to mark court zones",
  "safety": "Standard spacing; any light opposition/pressure kept controlled and non-contact",
  "games": [
   {
    "name": "Spot the Space",
    "desc": "A cone or a partner marks an ‘opponent’ position on the other side; hitters must aim away from it into open space.",
    "coach": "Look for the gap before you swing.",
    "easier": "Opponent marker stays still.",
    "harder": "Opponent marker moves between shots.",
    "chaos": "Added defender/pressure",
    "setup": "Pair students up with one hitter and one 'opponent' marker (a cone or a standing partner), on either side of a low net or marked court roughly 6m x 6m.",
    "howTo": [
     "Place the opponent marker somewhere on the far side to represent where a real opponent might be standing.",
     "The hitter receives a feed and must aim their shot away from the marker, into open space.",
     "Give quick feedback on whether the shot found space or went toward the marker.",
     "Swap roles every 5-6 hits so both partners practise hitting and placing the marker.",
     "Coach the key message: look for the gap before you swing — decide where the space is first.",
     "For 'harder', the marker (or partner) moves position between shots instead of staying still."
    ]
   },
   {
    "name": "Pressure Decision Rally",
    "desc": "A light, gentle chaser/defender applies mild pressure during a rally, forcing quicker placement decisions.",
    "coach": "A simple, safe shot beats a risky, wild one.",
    "easier": "Defender reacts slowly, more decision time.",
    "harder": "Defender reacts quickly, less decision time.",
    "chaos": "Added defender/pressure",
    "setup": "Set up a small marked court roughly 6m x 6m per group of 3, with a low net, one racquet each and a shared ball.",
    "howTo": [
     "Two students rally normally while a third, gentle 'chaser' applies light, non-contact pressure by moving toward the ball side.",
     "The rallying students must make quicker placement decisions to keep the rally going away from the pressure.",
     "Rotate the chaser role every 1-2 minutes so all three students get a turn applying and responding to pressure.",
     "Keep the chaser's pressure light and safe — no contact, just closing space calmly.",
     "Coach the key message: a simple, safe shot beats a risky, wild one, especially under pressure.",
     "For 'harder', the chaser reacts more quickly, giving hitters less decision time."
    ]
   },
   {
    "name": "Safe or Risky?",
    "desc": "Before each shot, students choose between a safe central shot (guaranteed point) or a risky angled shot (bonus points if successful, but no points if missed).",
    "coach": "Choose based on your balance, not just ambition.",
    "easier": "Smaller bonus, safer risky option.",
    "harder": "Bigger bonus, tighter risky option.",
    "chaos": "Bonus objectives",
    "setup": "Mark a central 'safe' target zone and a smaller, angled 'risky' zone on the far side of a low net, per pair.",
    "howTo": [
     "Before each shot, the hitter chooses out loud whether they'll aim for the safe central zone (guaranteed point) or the risky angled zone (bonus points if successful).",
     "A partner feeds the ball, and the hitter plays their chosen shot.",
     "Track points, awarding a bonus for successful risky shots and a smaller, reliable amount for safe ones.",
     "Swap roles every 5-6 hits so both partners practise choosing and feeding.",
     "Coach the key message: choose based on your balance, not just ambition — only go risky when you're set up well.",
     "For 'harder', make the risky zone smaller with a bigger bonus attached."
    ]
   }
  ],
  "big": {
   "name": "Decision Point Games",
   "desc": "Small-sided games scored partly on smart shot selection — the teacher or a peer observer calls out ‘smart shot!’ moments — not just on who wins each point.",
   "setup": "Set up a low net per pair or small group with a marked mini-court, roughly 5m x 6m on each side.",
   "howTo": [
    "Explain that today's small-sided games are scored partly on smart shot selection, not just on who wins each point.",
    "Points start with a gentle feed or serve and play out normally.",
    "When you or a peer observer notices a genuinely smart shot choice — finding space, playing safe under pressure — call out 'smart shot!' and note it.",
    "Coach the key message: winning the point and playing the smart shot are both worth celebrating, even when they don't line up.",
    "Rotate players through observer duty briefly if using peer observers, so everyone gets a turn watching for smart shots.",
    "Finish by asking a couple of students to describe their own smart-shot moment from the game."
   ]
  },
  "discussion": [
   "What helped you spot space on the other side?",
   "Who made a really smart shot choice today — what made it smart?",
   "When is it better to play it safe rather than go for a risky shot?"
  ],
  "lookfors": [
   "Looks for open space before choosing where to aim",
   "Chooses a safer shot when off-balance or under pressure",
   "Can explain the reasoning behind a shot choice, not just describe the result"
  ],
  "inclusion": "Simplify the decision (e.g. just ‘left or right’) for students who find rapid decision-making overwhelming; reduce pressure/speed for pairs still building confidence.",
  "skillBreakdown": [
   {
    "step": "Glance at where your opponent (or the marker) is positioned before you swing.",
    "why": "You can't aim for space if you haven't looked for it first."
   },
   {
    "step": "Choose a safer, central shot when you're off-balance or rushed, and a more ambitious placed shot when you're set and balanced.",
    "why": "Matching your shot choice to your own balance is what keeps errors low while still allowing smart, attacking shots when you're ready."
   },
   {
    "step": "Commit fully to your chosen shot rather than changing your mind mid-swing.",
    "why": "A confident, committed shot — even a simple one — is far more reliable than a hesitant, half-changed one."
   }
  ]
 },
 {
  "n": 16,
  "block": 4,
  "title": "Singles Showcase",
  "focus": "Small-sided mini-tennis games (singles)",
  "walt": "We are learning to apply groundstrokes, footwork, and shot placement together in a real 1v1 mini-tennis game.",
  "wilf": [
   "I can play a full mini-tennis point from serve through to a finish",
   "I can use today's game skills — movement and placement — inside a real game, not just a drill"
  ],
  "nzc": "Strand B · Managing self",
  "value": "Pānga",
  "valueText": "Seeing how today's skill connects to the bigger game of tennis — a small piece that matters once it's put together with everything else.",
  "equipment": "racquets, balls, low nets/marked mini-courts, cones",
  "safety": "Standard court spacing between simultaneous matches; balls collected calmly between points",
  "games": [
   {
    "name": "Mini-Match Warm Points",
    "desc": "Short practice points (serve, rally, finish) played to a low target score, with no formal scoring pressure yet.",
    "coach": "Play each point like it's the whole match.",
    "easier": "Extra serves allowed, generous court.",
    "harder": "One serve only, standard court.",
    "chaos": "Head-to-head mirror",
    "setup": "Set up a low net per pair with a marked mini-court roughly 6m x 6m, generous in size for a comfortable, low-pressure start.",
    "howTo": [
     "Explain the format: short practice points including a serve, a rally, and a finish, played to a low target score (e.g. first to 3).",
     "One player serves underarm to begin the point, and both players rally it out normally.",
     "Points are scored simply and casually, with no formal match pressure yet.",
     "Coach the key message: play each point like it's the whole match — build the habit of full focus now.",
     "Swap serving after every point (or every 2 points) so both players get equal serving practice.",
     "For 'harder', reduce to one serve only on a standard-size court instead of extra serves on a generous court."
    ]
   },
   {
    "name": "Serve-Rally-Finish Circuit",
    "desc": "A structured circuit where students rotate through serving, rallying, and finishing at the net, reinforcing the full sequence of a point.",
    "coach": "Reset your ready position between each phase.",
    "easier": "Longer time per station.",
    "harder": "Shorter time, quicker rotation.",
    "chaos": "Role rotation",
    "setup": "Set up 3 stations per group of 3-4 students, each with a low net: a serving station, a rallying station, and a net-finish station.",
    "howTo": [
     "Explain the circuit: students rotate through serving practice, then rallying practice, then net-finish practice, spending equal time at each.",
     "At the serve station, students practise serving underarm into a marked box.",
     "At the rally station, students rally cooperatively with a partner, counting consecutive hits.",
     "At the finish station, a partner feeds and the student practises finishing with a volley at the net.",
     "Coach the key message: reset your ready position between each phase, whichever station you're at.",
     "For 'harder', shorten the time at each station so rotations happen more quickly."
    ]
   },
   {
    "name": "Scoring Practice Points",
    "desc": "Play short points using simple, modified scoring (e.g. first to 4), focusing on applying skills under real (light) game conditions.",
    "coach": "Stay controlled — you don't need a winner every point.",
    "easier": "Lower score target, bigger court.",
    "harder": "Higher score target, standard court.",
    "chaos": "Beat the clock",
    "setup": "Set up a low net per pair with a marked mini-court, using a simple modified scoring system (e.g. first to 4 points).",
    "howTo": [
     "Explain the modified scoring system clearly before starting, including how a point is won.",
     "One player serves to begin, and both players play the point out to a natural conclusion.",
     "Both players call the score out loud after each point to build the habit of clear scorekeeping.",
     "Coach the key message: stay controlled — you don't need a winner every point, a rally you win by outlasting your partner still counts.",
     "Swap serving after every point or two so both players serve regularly.",
     "For 'harder', raise the score target and reduce court size slightly for tighter margins."
    ]
   }
  ],
  "big": {
   "name": "Round-Robin Singles Mini-Tennis",
   "desc": "Students rotate through short 1v1 mini-tennis matches on modified courts, applying serving, rallying, movement, and placement together in a genuine game context.",
   "setup": "Set up as many low nets/marked mini-courts as needed so every pair can play a short match simultaneously, roughly 6m x 6m each.",
   "howTo": [
    "Explain the round-robin format: students will rotate through several short 1v1 mini-tennis matches during the session.",
    "Each match begins with a serve and is played out using simple scoring, applying serving, rallying, movement, and placement together.",
    "At a set time or score, call 'rotate' and students move to a new court/opponent.",
    "Coach the key message: this is the first time everything from the unit comes together in a real match — enjoy applying it.",
    "Keep matches short (a few minutes each) so everyone gets multiple matches against different partners.",
    "Circulate and give brief, positive feedback rather than stopping play to coach at length."
   ]
  },
  "discussion": [
   "What part of a full point felt most natural to you today?",
   "Who played a really smart, controlled singles game — what did you notice?",
   "What's one thing from earlier lessons you used without even thinking about it?"
  ],
  "lookfors": [
   "Links serve, rally, and finish into one connected point",
   "Applies footwork and placement decisions from earlier lessons in a real game",
   "Shows fair play — accurate calls, encouraging opponents"
  ],
  "inclusion": "Adjust court size, net height, or scoring targets so every matchup is genuinely competitive and enjoyable; rotate opponents to avoid repeated uneven matchups.",
  "skillBreakdown": [
   {
    "step": "Start each point with your serving routine — consistent toss/drop, controlled swing.",
    "why": "A calm, consistent start sets up everything that follows in the point."
   },
   {
    "step": "Use split-step and movement to stay balanced and ready throughout the rally.",
    "why": "This is where all the footwork practice from earlier lessons pays off inside a real point."
   },
   {
    "step": "Look for a chance to place a shot smartly or move forward to finish, rather than rallying aimlessly.",
    "why": "A real point rewards purposeful play — using your skills with intent, not just keeping the ball going."
   }
  ]
 },
 {
  "n": 17,
  "block": 4,
  "title": "Dynamic Duos",
  "focus": "Small-sided mini-tennis games (doubles) — communication & positioning",
  "walt": "We are learning to play doubles mini-tennis, communicating with a partner and covering court space together.",
  "wilf": [
   "I can call ‘mine’ or ‘yours’ clearly and communicate with my partner during play",
   "I can position myself to cover space without colliding with my partner"
  ],
  "nzc": "Strand B, C · Relating to others",
  "value": "Aroha",
  "valueText": "Being patient and kind with yourself while a new skill feels awkward, and encouraging classmates whose attempts look different from yours.",
  "equipment": "racquets, balls, low nets/marked mini-courts, cones",
  "safety": "Clear, loud calling to prevent collisions between doubles partners; standard spacing between simultaneous matches",
  "games": [
   {
    "name": "Call It!",
    "desc": "Pairs practise calling ‘mine’ or ‘yours’ loudly and early as balls are fed toward the middle of their side.",
    "coach": "Call it the instant you decide, not after you've moved.",
    "easier": "Balls fed clearly to one side or the other.",
    "harder": "Balls fed down the middle, genuinely ambiguous.",
    "chaos": "Random constraint calls",
    "setup": "Set up doubles pairs on one side of a low net per group of 4, with a feeder on the other side, court marked roughly 7m x 6m.",
    "howTo": [
     "Explain the rule: whichever player is going to play the ball must call 'mine' loudly and early; the other calls 'yours' or stays clear.",
     "The feeder sends balls toward the middle of the doubles pair's side.",
     "The pair practises calling clearly and early, before either player moves to the ball.",
     "Rotate the feeder role regularly so all students get practice calling.",
     "Coach the key message: call it the instant you decide, not after you've already moved — a late call causes collisions.",
     "For 'harder', the feeder sends balls genuinely down the middle where the call is less obvious."
    ]
   },
   {
    "name": "Court Coverage Shuffle",
    "desc": "Pairs practise a simple movement pattern (e.g. one up, one back, or side-by-side) shuffling to cover the court as a feeder varies shot direction.",
    "coach": "Move together, not just individually.",
    "easier": "Slower, predictable feeds.",
    "harder": "Quicker, varied feeds.",
    "chaos": "Shrinking/growing space",
    "setup": "Set up doubles pairs on one side of a low net per group of 4, with a feeder on the other side, court marked roughly 7m x 6m.",
    "howTo": [
     "Explain a simple coverage pattern to the pair — either one player up and one back, or side-by-side — before starting.",
     "The feeder varies shot direction across the pair's side of the court.",
     "The pair shuffles together to cover the court according to their chosen pattern, staying connected rather than both chasing the same ball.",
     "Rotate the feeder role regularly so all students get practice moving as a pair.",
     "Coach the key message: move together, not just individually — the pattern only works if both players shift together.",
     "For 'harder', the feeder speeds up and varies feeds more unpredictably."
    ]
   },
   {
    "name": "Doubles Feed Points",
    "desc": "Short doubles points started by a feed, focusing on communication and positioning rather than winning outright.",
    "coach": "A clear call beats a fast reaction with no call.",
    "easier": "Extra time between feeds.",
    "harder": "Quick succession of feeds.",
    "chaos": "Role rotation",
    "setup": "Set up doubles pairs on each side of a low net per group of 4, court marked roughly 7m x 6m.",
    "howTo": [
     "A feed (from a teacher, coach, or rotating student) starts each short point.",
     "The pair plays the point out, focusing on clear calling and good court positioning rather than trying to win outright.",
     "After each point, give brief feedback on communication and coverage before the next feed.",
     "Rotate feeding duties regularly so play stays fair and everyone gets to play.",
     "Coach the key message: a clear call beats a fast reaction with no call — communication comes first.",
     "For 'harder', feeds come in quicker succession, giving less time to reset between points."
    ]
   }
  ],
  "big": {
   "name": "Doubles Mini-Tennis Round Robin",
   "desc": "Pairs rotate through short doubles matches on modified courts, applying communication and court coverage inside real doubles points.",
   "setup": "Set up as many low nets/marked doubles courts as needed, roughly 7m x 6m each, so every group of 4 can play simultaneously.",
   "howTo": [
    "Explain the round-robin format: pairs rotate through short doubles matches against different opponents during the session.",
    "Each match begins with a serve or feed and is played out with pairs applying today's calling and court-coverage skills.",
    "At a set time or score, call 'rotate' and pairs move to a new court/opponent pairing.",
    "Coach the key message: good communication is often the difference between a smooth doubles point and a collision.",
    "Keep matches short so everyone plays multiple rounds against different pairs.",
    "Circulate and specifically praise clear, early calling when you hear it."
   ]
  },
  "discussion": [
   "What did calling ‘mine’ or ‘yours’ do for you and your partner today?",
   "Who covered the court really well as a doubles pair — what did they do?",
   "What's one thing that's different about doubles compared to singles?"
  ],
  "lookfors": [
   "Calls clearly and early during doubles points",
   "Positions to cover space rather than crowding a partner",
   "Communicates and encourages a partner during play"
  ],
  "inclusion": "Pair students thoughtfully so communication styles work well together; simplify positioning patterns (e.g. just ‘left side/right side’) for pairs still building confidence.",
  "skillBreakdown": [
   {
    "step": "Call ‘mine’ or ‘yours’ clearly and as early as possible when a ball comes toward the middle.",
    "why": "An early, clear call prevents collisions and confusion far better than reacting silently."
   },
   {
    "step": "Position yourself relative to your partner — side-by-side or one-up-one-back — to cover the court as a pair.",
    "why": "Doubles is a shared space; a good position depends on where your partner is, not just where the ball is."
   },
   {
    "step": "Move and communicate together as the point develops, adjusting your shared coverage.",
    "why": "A doubles team that moves as a unit covers far more court than two players moving independently."
   }
  ]
 },
 {
  "n": 18,
  "block": 4,
  "title": "Game, Set, Smart",
  "focus": "Scoring & game strategy basics",
  "walt": "We are learning to understand and use simple tennis scoring, and to apply one basic strategic idea inside a game.",
  "wilf": [
   "I can keep score using simple modified scoring",
   "I can explain one simple strategy idea and try to use it in a game"
  ],
  "nzc": "Strand B, C · Thinking",
  "value": "Mōhio",
  "valueText": "Understanding your own body and how it moves — noticing exactly what's happening in your grip, swing, or footwork, and learning from it.",
  "equipment": "racquets, balls, low nets/marked mini-courts, cones, simple strategy cards",
  "safety": "Standard spacing between matches; clear, agreed scoring routines to avoid disputes",
  "games": [
   {
    "name": "Scoring Practice",
    "desc": "Play short points and practise keeping score aloud using a simple modified system (e.g. first to 4, win by 2).",
    "coach": "Call the score clearly after every point.",
    "easier": "Simple point-count scoring.",
    "harder": "Standard modified tennis scoring.",
    "chaos": "Bonus objectives",
    "setup": "Set up a low net per pair with a marked mini-court roughly 6m x 6m, using a simple modified scoring system (e.g. first to 4, win by 2).",
    "howTo": [
     "Explain the modified scoring system clearly, including how a point, and eventually a game, is won.",
     "One player serves to begin, and the pair plays short points using the system.",
     "Both players call the score out loud clearly after every single point.",
     "Coach the key message: call the score clearly after every point — this habit prevents disputes later.",
     "Swap serving regularly so both players get equal serving practice.",
     "For 'harder', move from simple point-count scoring to the standard modified tennis scoring system used in the unit."
    ]
   },
   {
    "name": "Strategy Card Points",
    "desc": "Before a short game, pairs draw a simple strategy card (e.g. ‘aim to your opponent's backhand,’ ‘bring them to the net’) and try to apply it.",
    "coach": "Try the strategy even if it doesn't work every time.",
    "easier": "One simple, obvious strategy.",
    "harder": "A more specific or situational strategy.",
    "chaos": "Random constraint calls",
    "setup": "Prepare a small set of simple strategy cards per pair (e.g. 'aim to your opponent's backhand', 'bring them to the net'), plus a low net and marked mini-court.",
    "howTo": [
     "Before a short game, the pair draws one strategy card together and reads it aloud.",
     "The pair plays a short game, with the receiving/returning student specifically trying to apply the strategy on the card.",
     "After the short game, briefly discuss whether the strategy worked and why or why not.",
     "Draw a new card and repeat for 2-3 rounds so students try a couple of different strategies.",
     "Coach the key message: try the strategy even if it doesn't work every time — the goal is applying an idea on purpose.",
     "For 'harder', use more specific or situational strategy cards that require reading the game state, not just a fixed target."
    ]
   },
   {
    "name": "Consistency Wins",
    "desc": "Points only end on a clear unforced error or a genuine winner — encouraging students to keep the ball in play rather than swinging wildly for winners.",
    "coach": "A rally you win by outlasting your opponent still counts.",
    "easier": "Bigger court, more margin for error.",
    "harder": "Smaller court, tighter margins.",
    "chaos": "Scoring streaks",
    "setup": "Set up a low net per pair with a marked mini-court, generous in size to encourage longer rallies (roughly 7m x 6m).",
    "howTo": [
     "Explain the rule: points only end on a clear unforced error (the ball goes out or into the net without pressure) or a genuine winner — no giving up on a rally early.",
     "One player serves to begin, and the pair plays the point out under this rule.",
     "Both players call the score and note whether the point ended in a winner or an error, to reinforce the pattern.",
     "Coach the key message: a rally you win by outlasting your opponent still counts — patience is a real skill here.",
     "Swap serving regularly so both players get equal serving practice.",
     "For 'harder', shrink the court for tighter margins, making patience and placement matter even more."
    ]
   }
  ],
  "big": {
   "name": "Scored Mini-Matches",
   "desc": "Real scored matches using today's simple scoring system, with each pair encouraged to name and try one strategy idea during the match.",
   "setup": "Set up a low net per pair with a marked mini-court roughly 6m x 6m, using the class's agreed modified scoring system.",
   "howTo": [
    "Explain that today's matches use real scoring, and each pair should name one strategy idea before they start.",
    "Before the match, the pair briefly agrees on one simple strategy they'll try to apply during play.",
    "Players serve, rally, and score using the modified system practised earlier in the lesson.",
    "Coach the key message: naming a strategy in advance turns today's match into more than just hitting the ball back and forth.",
    "Circulate and ask a couple of pairs mid-match whether they're managing to apply their chosen strategy.",
    "Finish by asking a few students to share their strategy and whether it worked."
   ]
  },
  "discussion": [
   "What did you find tricky or straightforward about keeping score?",
   "Who tried a strategy today — did it work, and how did they adjust?",
   "Why might a simple strategy be more useful than just trying to hit the ball hard?"
  ],
  "lookfors": [
   "Keeps and calls score accurately and clearly",
   "Can name a simple strategy they tried",
   "Adjusts their play slightly based on how a strategy is or isn't working"
  ],
  "inclusion": "Offer a very simple scoring option (just a running point count) for students who find traditional tennis scoring confusing; keep strategy ideas concrete and simple (‘aim there’ rather than abstract concepts).",
  "skillBreakdown": [
   {
    "step": "Learn and use a simple, agreed scoring system, calling the score clearly after each point.",
    "why": "Clear scoring is what turns a casual hit-around into a real game with structure."
   },
   {
    "step": "Choose one simple strategy idea before a game or set of points — for example, aiming to a particular side.",
    "why": "A single, clear strategic idea is easier to actually use in the moment than trying to think about everything at once."
   },
   {
    "step": "Notice whether your strategy is working and adjust it if it isn't.",
    "why": "Strategy isn't a fixed plan — reading how it's going and adapting is the real skill being learned here."
   }
  ]
 },
 {
  "n": 19,
  "block": 4,
  "title": "Match Day",
  "focus": "Full modified games with scoring",
  "walt": "We are learning to play a complete modified match, applying the full range of skills learned across the unit.",
  "wilf": [
   "I can play a full modified match using appropriate strokes, movement, and placement",
   "I can score and self-officiate fairly during a match"
  ],
  "nzc": "Strand B, C · Managing self, Relating to others",
  "value": "Manaaki",
  "valueText": "Looking after a partner's success as much as your own — feeding, rallying, and encouraging in a way that helps them succeed too.",
  "equipment": "racquets, balls, low nets/marked mini-courts, cones",
  "safety": "Standard spacing between simultaneous matches; agreed, fair self-officiating routines to prevent disputes",
  "games": [
   {
    "name": "Warm-Up Rally Points",
    "desc": "A short rally-based warm-up where students settle into rhythm and remind themselves of key technique points before matches begin.",
    "coach": "Use these points to find your rhythm, not to win.",
    "easier": "Longer warm-up time.",
    "harder": "Shorter warm-up, straight into matches.",
    "chaos": "n/a",
    "setup": "Set up a low net per pair with a marked mini-court roughly 6m x 6m, same as the match courts used later in the lesson.",
    "howTo": [
     "Explain that these points are for settling into rhythm and reminding themselves of key technique points, not for winning.",
     "One player starts with a gentle serve or feed, and the pair rallies the point out normally.",
     "Encourage players to consciously notice their grip, turn, and footwork during these points rather than just playing on autopilot.",
     "Coach the key message: use these points to find your rhythm, not to win — save the competitive focus for the matches ahead.",
     "Swap serving regularly so both players warm up serving as well as rallying.",
     "For 'harder', shorten the warm-up time and move straight into matches sooner."
    ]
   },
   {
    "name": "Skill Focus Choice",
    "desc": "Each student picks one skill from the unit (e.g. serve placement, net finishing) to focus on today, and gets brief feedback on it during play.",
    "coach": "Pick something you want to genuinely improve, not just something easy.",
    "easier": "Teacher/peer suggests a focus.",
    "harder": "Student justifies their own choice of focus.",
    "chaos": "Role rotation",
    "setup": "No extra equipment beyond the standard racquet, ball, and low net already in use for the lesson.",
    "howTo": [
     "Before play, each student picks one specific skill from the unit they want to focus on today (e.g. serve placement, net finishing, reading the ball).",
     "Students briefly tell a partner or the teacher their chosen focus.",
     "During play, the teacher or a peer gives brief, specific feedback tied to that chosen focus whenever it comes up.",
     "Coach the key message: pick something you want to genuinely improve, not just something that's already easy.",
     "Check in briefly with a few students partway through to see how their focus skill is going.",
     "For 'harder', ask the student to explain in their own words why they chose that particular focus."
    ]
   },
   {
    "name": "Practice Match Sets",
    "desc": "Short practice sets (a small number of games) played with full scoring, as a run-through before the tournament.",
    "coach": "Treat this like the real thing.",
    "easier": "Shorter sets, generous court/net.",
    "harder": "Standard sets, standard court/net.",
    "chaos": "Head-to-head mirror",
    "setup": "Set up a low net per pair with a marked mini-court roughly 6m x 6m, using the class's agreed modified scoring system.",
    "howTo": [
     "Explain that pairs will play a short practice set (a small number of games) using full scoring, as a run-through before the tournament.",
     "Players serve, rally, and score using the modified system, alternating serve each game.",
     "Encourage players to self-officiate fairly, calling their own lines and scores honestly.",
     "Coach the key message: treat this like the real thing — this is good practice for tournament day.",
     "Keep sets short so there's time for a debrief afterward.",
     "For 'harder', use a standard court size and standard net height instead of a generous, lowered setup."
    ]
   }
  ],
  "big": {
   "name": "Full Modified Matches",
   "desc": "Students play complete modified matches (singles or doubles) with real scoring, self-officiated, drawing on serving, rallying, footwork, net play, and decision-making from across the whole unit.",
   "setup": "Set up as many low nets/marked mini-courts as needed, roughly 6m x 6m each, so every pair or group of 4 can play a complete match simultaneously.",
   "howTo": [
    "Explain that today's matches use full, real scoring and can be played as singles or doubles depending on group size.",
    "Players serve, rally, and score using the class's agreed system, self-officiating fairly throughout.",
    "Encourage players to draw on every skill from the unit — serving, rallying, footwork, net play, and smart shot decisions.",
    "Coach the key message: this is a genuine run-through for tournament day, so play it as seriously and fairly as you can.",
    "Circulate to help resolve any scoring disagreements calmly and quickly, without stopping play for long.",
    "Finish with a short debrief on how matches felt compared to earlier practice points."
   ]
  },
  "discussion": [
   "What part of your game are you most confident in going into tomorrow's tournament?",
   "Who showed great self-officiating and fair play today?",
   "What's one thing you'd still like to work on?"
  ],
  "lookfors": [
   "Plays a complete match applying a range of skills from across the unit",
   "Self-officiates honestly and fairly",
   "Shows resilience after lost points, staying in the match mentally"
  ],
  "inclusion": "Match students thoughtfully so games are competitive and enjoyable for both players; offer flexible court/net/scoring adjustments so every match remains genuinely playable.",
  "skillBreakdown": [
   {
    "step": "Bring together serving, rallying, movement, and placement into one connected match, rather than treating them as separate skills.",
    "why": "A real match asks for all of these skills together, often in quick succession — this is the whole unit coming together."
   },
   {
    "step": "Call the score and any line decisions honestly and clearly, even when a call goes against you.",
    "why": "Self-officiated tennis relies entirely on honesty — fair play is as much a part of the game as any stroke."
   },
   {
    "step": "Stay calm and reset after a lost point, rather than carrying frustration into the next one.",
    "why": "A short memory for mistakes is what lets you play your best tennis point after point."
   }
  ]
 },
 {
  "n": 20,
  "block": 4,
  "title": "Tennis Tournament Day",
  "focus": "Culminating mini-tournament",
  "walt": "We are learning to apply the whole unit's skills in a tournament setting, showing fair play and reflecting on our own growth.",
  "wilf": [
   "I can apply a range of skills from across the unit in competitive and cooperative match play",
   "I can play fairly and encourage opponents and teammates throughout the tournament"
  ],
  "nzc": "Strands A, B, C, D · all five Key Competencies",
  "value": "Pānga",
  "valueText": "Seeing how today's skill connects to the bigger game of tennis — a small piece that matters once it's put together with everything else.",
  "equipment": "racquets, balls, low nets/marked mini-courts, cones, simple draw sheet or rotation chart",
  "safety": "Standard spacing across multiple simultaneous courts; clear rotation system so students know where to go next",
  "games": [
   {
    "name": "Skill Circuit Warm-Up",
    "desc": "A quick circuit combining grip, bounce control, groundstrokes, and volleys — a whistle-stop reminder of the whole unit before matches begin.",
    "coach": "Smooth transitions between stations.",
    "easier": "Longer time per station.",
    "harder": "Shorter time, quicker rotation.",
    "chaos": "Head-to-head mirror, beat the clock",
    "setup": "Set up 4 short stations per group of 4-5 students: grip/ready position, bounce control, groundstrokes (self-drop target), and volleys (close feed).",
    "howTo": [
     "Explain the circuit: a quick reminder of grip, bounce control, groundstrokes, and volleys before matches begin.",
     "Students spend a short, equal amount of time at each station (e.g. 1-2 minutes), rotating on your signal.",
     "At each station, briefly demonstrate or remind students of the key coaching cue from that lesson earlier in the unit.",
     "Coach the key message: smooth transitions between stations — keep the energy up and the pace moving.",
     "For 'harder', shorten the time at each station so rotations happen more quickly.",
     "Finish the circuit with everyone feeling warmed up and reminded of the unit's key skills before matches start."
    ]
   },
   {
    "name": "Partner Encouragement Challenge",
    "desc": "Before matches, each student nominates one specific thing they'll do to encourage their opponent or partner during play (e.g. a genuine compliment on a good shot).",
    "coach": "Make it specific and genuine, not generic.",
    "easier": "n/a",
    "harder": "n/a",
    "chaos": "Role rotation",
    "setup": "No extra equipment needed beyond what's already set up for matches.",
    "howTo": [
     "Before matches begin, ask each student to think of one specific thing they'll do to encourage their opponent or partner during play.",
     "Give an example — a genuine compliment on a good shot, rather than something generic like 'good game'.",
     "Students share their idea briefly with a partner or the group before matches start.",
     "During play, listen out for students following through on their encouragement idea and acknowledge it when you hear it.",
     "Coach the key message: make it specific and genuine, not generic — notice something real your opponent did well.",
     "Revisit this briefly in the closing discussion, asking a few students what encouragement they gave or received."
    ]
   },
   {
    "name": "Focus Pick",
    "desc": "Each pair/player picks one skill from the unit they most want to show off today and keeps it in mind as their personal focus during matches.",
    "coach": "Choose something meaningful to you, not just easy.",
    "easier": "n/a",
    "harder": "n/a",
    "chaos": "Bonus objectives",
    "setup": "No extra equipment needed beyond what's already set up for matches.",
    "howTo": [
     "Before matches, each pair or individual picks one skill from across the whole unit they most want to show off today.",
     "Students briefly share their chosen focus with a partner or the teacher.",
     "During matches, encourage students to keep their focus skill in mind, even in the middle of competitive play.",
     "Coach the key message: choose something meaningful to you, not just easy — this is your personal highlight to aim for.",
     "Check in briefly with a few students during matches to see how their focus skill is going.",
     "Revisit this in the closing discussion, asking students whether they managed to show off their chosen skill."
    ]
   }
  ],
  "big": {
   "name": "Round-Robin Mini-Tournament",
   "desc": "Students rotate through short mini-tennis matches (singles and/or doubles) across multiple courts, using simple scoring or a fair-play points system. Every skill from the unit — grip, groundstrokes, footwork, serving, net play, reading the ball, and decision-making — is relevant somewhere in these matches.",
   "setup": "Set up multiple low nets/marked mini-courts across the available space, enough for every student to be playing at once, plus a simple draw sheet or rotation chart visible to the class.",
   "howTo": [
    "Explain the tournament format clearly at the start: students will rotate through several short mini-tennis matches (singles and/or doubles) across multiple courts.",
    "Use the draw sheet or rotation chart to guide students to their next court and opponent after each match or at set time intervals.",
    "Players use simple scoring or the class's fair-play points system, self-officiating fairly throughout.",
    "Coach the key message: every skill from across the whole unit — grip, groundstrokes, footwork, serving, net play, reading the ball, and decision-making — is relevant somewhere in these matches.",
    "Circulate across courts giving brief, positive feedback and helping resolve any scoring questions quickly.",
    "Close the tournament with a celebration of effort and improvement across the unit, not just match results."
   ]
  },
  "discussion": [
   "What's one skill from this whole unit you're most proud of improving?",
   "What did fair, encouraging play look like in today's tournament?",
   "What will you take from tennis into other sports or games?"
  ],
  "lookfors": [
   "Applies a visible range of skills from across the unit, not just one",
   "Plays fairly and encourages teammates/opponents in a competitive setting",
   "Shows growth compared to Lesson 1 (informal, teacher's own judgement — no formal recording required)"
  ],
  "inclusion": "Structure the round robin with balanced/mixed-ability groupings; consider a simple fair-play recognition alongside match results to keep the culminating day inclusive and values-aligned.",
  "skillBreakdown": [
   {
    "step": "Apply skills from across the whole unit — grip, strokes, footwork, serving, net play, and decision-making.",
    "why": "The tournament brings everything the unit has built together under real, enjoyable pressure."
   },
   {
    "step": "Communicate and encourage teammates and opponents throughout.",
    "why": "Fair play and encouragement are as much a part of the unit as the physical skills."
   },
   {
    "step": "Reflect on your growth compared to Lesson 1.",
    "why": "Reflecting on your own improvement is as valuable as the result of any one match."
   }
  ]
 }
];

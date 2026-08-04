// Hockey unit data — HOCKEY_BLOCK_INFO + HOCKEY_LESSONS
const HOCKEY_BLOCK_INFO = {
  1:{name:"Foundational Stick & Ball Control", range:"Lessons 1–5", color:"var(--b1)", soft:"var(--b1-soft)", warmup:"Stick Freeze Dribble", warmdown:"Walk & Reach",
    warmupSetup:"Open space roughly 20m x 20m for the whole class, one stick and ball per student, cones marking the outer boundary of the space.",
    warmupHowTo:[
      "Everyone dribbles freely around the space in their own lane, staying aware of others nearby.",
      "Call 'freeze!' at random intervals — students immediately stop their dribble under control on the spot, ball dead under the stick, then resume dribbling on the next 'go.'",
      "Occasionally call 'switch hands position!' — students continue dribbling but adjust their grip or stance without stopping.",
      "Keep the pace light and playful; the goal is raising heart rate and warming up stick control before today's lesson, not technical correction.",
      "Run for the full 5 minutes, mixing up the order and speed of calls."
    ],
    warmdownSetup:"No equipment needed beyond the space already in use. Gather the class into a loose circle or scattered spread with room for each student to stretch without touching anyone else.",
    warmdownHowTo:[
      "Walk slowly around the space for about 1 minute to bring heart rate down gradually, sticks carried safely at the side.",
      "Gather into a circle (or stay scattered) and lead 3-4 simple static stretches — calves, quads, hamstrings, and a gentle reach-up/side stretch — holding each for about 15-20 seconds.",
      "Keep instructions simple and calm: 'reach, hold, breathe' rather than technical cues.",
      "Use this quiet time to briefly ask how the session felt for a couple of students, setting a relaxed tone before the Discussion segment.",
      "Finish with everyone standing tall and taking one big breath in and out together."
    ]
    },
  2:{name:"Combining Skills & Shooting", range:"Lessons 6–10", color:"var(--b2)", soft:"var(--b2-soft)", warmup:"Partner Push-Pass Jog", warmdown:"Partner Stretch",
    warmupSetup:"Pairs spread out across the space, roughly 3-4m apart per pair with enough room between pairs that push passes and jogging don't collide with a neighbouring pair. One stick and ball per pair.",
    warmupHowTo:[
      "Partners start push-passing gently back and forth while jogging slowly on the spot.",
      "Every 30-45 seconds, call 'go!' — on this call, the passer must immediately jog toward a new spot as if starting a give-and-go, and the receiver passes back to their new position.",
      "Occasionally call 'jog swap' — both partners jog to find a new partner nearby, then continue passing and moving with them.",
      "Keep the whole activity light and continuous — the goal is raising heart rate and warming up the give-and-go movement pattern, not technical correction.",
      "Run for the full 5 minutes, mixing pass-and-move calls and partner swaps throughout."
    ],
    warmdownSetup:"Same pairs from the warm-up, no equipment needed beyond sticks set safely aside, enough space for each pair to stretch without touching a neighbouring pair.",
    warmdownHowTo:[
      "Walk slowly with your partner for about 1 minute to bring heart rate down gradually.",
      "Facing your partner, lead 3-4 simple partner-assisted stretches — hamstring reach, quad stretch with a hand on the partner's shoulder for balance, and a gentle side stretch — holding each for about 15-20 seconds.",
      "Keep instructions calm and simple, checking that partners are supporting gently rather than pulling on each other.",
      "Use this quiet time to briefly ask pairs how their combination play felt today, setting a relaxed tone before the Discussion segment.",
      "Finish with partners giving each other a quick high-five before sitting down for discussion."
    ]
    },
  3:{name:"Defending, Attacking & Positional Play", range:"Lessons 11–15", color:"var(--b3)", soft:"var(--b3-soft)", warmup:"Mirror Tackle Slide", warmdown:"Breathe & Balance",
    warmupSetup:"Pairs spread out across a grid roughly 15m x 15m, no ball needed, enough room for each pair to slide side to side without bumping a neighbouring pair.",
    warmupHowTo:[
      "One partner leads with side-to-side movement while the other mirrors them using the low defensive slide from today's focus.",
      "Every 20-30 seconds, call 'swap!' so the leader and mirroring partner switch roles.",
      "Occasionally call 'freeze and hold stance!' — both partners drop into a low defensive stance and hold it for a few seconds before continuing.",
      "Keep the pace light and playful; the goal is raising heart rate and warming up defensive footwork before today's lesson, not technical correction.",
      "Run for the full 5 minutes, mixing up the timing of swaps and freezes."
    ],
    warmdownSetup:"No equipment needed. Gather the class into a loose circle or scattered spread with room for each student to stretch and settle without touching anyone else.",
    warmdownHowTo:[
      "Walk slowly around the space for about 1 minute to bring heart rate down gradually.",
      "Gather into a circle and lead 3-4 simple static stretches — calves, quads, hamstrings, and a gentle reach-up/side stretch — holding each for about 15-20 seconds.",
      "Add a few slow, deep breaths between stretches, encouraging students to notice their breathing settle after the more physical defending/attacking work.",
      "Keep instructions calm: 'breathe, hold, balance' rather than technical cues.",
      "Finish with everyone standing tall, taking one big breath in and out together before moving into discussion."
    ]
    },
  4:{name:"Team Tactics & Culmination", range:"Lessons 16–20", color:"var(--b4)", soft:"var(--b4-soft)", warmup:"Team Shape Jog", warmdown:"Circle Stretch & Cheer",
    warmupSetup:"Whole class organised into their tournament teams (from bibs), open space roughly 20m x 20m, sticks and balls available but not required for every part of the warm-up.",
    warmupHowTo:[
      "Teams jog together in their team shape around the space, staying loosely organised as a group rather than scattering individually.",
      "Every 30-45 seconds, call out a simple shape instruction — 'spread wide!' or 'bunch in!' — and teams adjust their jogging shape accordingly.",
      "Occasionally call 'team huddle!' — teams quickly gather in a tight circle for a few seconds before continuing to jog.",
      "Keep the pace light and playful; the goal is raising heart rate and building team cohesion before today's lesson or tournament game, not technical correction.",
      "Run for the full 5 minutes, mixing up shape calls and huddles throughout."
    ],
    warmdownSetup:"Whole class gathered in one large circle, no equipment needed, enough space for everyone to stretch comfortably within the circle.",
    warmdownHowTo:[
      "Walk slowly to form the circle, bringing heart rate down gradually as everyone gathers.",
      "Lead 3-4 simple static stretches as a whole group — calves, quads, hamstrings, and a gentle reach-up/side stretch — holding each for about 15-20 seconds.",
      "Invite a few students to share a highlight from the unit or the tournament while the group stretches, keeping the tone warm and reflective.",
      "Finish the stretching with everyone reaching up together and taking one big breath in and out.",
      "Close with a group cheer or round of applause to celebrate the unit, before moving into the final Discussion segment."
    ]
    }
};

const HOCKEY_LESSONS = [
 {
  "n": 1,
  "block": 1,
  "title": "Glue Stick",
  "focus": "Dribbling — control with the stick at a stationary point",
  "walt": "We are learning to control the ball with the flat face of our stick while it stays close to our feet.",
  "wilf": [
   "I can keep the ball within a small square around my feet as I tap it side to side",
   "I can control the ball using only the flat face of my stick"
  ],
  "nzc": "Strand B (Movement Concepts & Motor Skills) · Managing self",
  "value": "Aroha",
  "valueText": "Looking after yourself with patience while your stick feels clumsy at first, and encouraging teammates whose ball control looks different on day one.",
  "equipment": "1 stick + 1 ball per student, cones for grid boundaries",
  "safety": "Spread out — one stick's-length minimum gap when dribbling freely; sticks stay below knee height at all times; clear grid boundaries so students don't collide",
  "games": [
   {
    "name": "Tap Tap Control",
    "desc": "Standing in a personal space, students tap the ball gently side to side using only the flat face of the stick, keeping it within a small square around their feet.",
    "coach": "Soft hands on the stick — let the ball come to you, don't stab at it",
    "easier": "Bigger square, slower taps",
    "harder": "Smaller square, quicker taps",
    "chaos": "Random constraint calls",
    "setup": "Each student has their own stick and ball, standing inside a personal square roughly 1.5m x 1.5m marked by a cone at each corner, spread out across a grid about 15m x 15m for a class of 25-30 so no two squares touch.",
    "howTo": [
     "Demonstrate tapping the ball gently side to side using only the flat face of the stick, letting the ball come to the stick rather than jabbing at it.",
     "Students stand in their own marked square and begin tapping the ball continuously on the spot, keeping it inside the square boundary.",
     "Watch that the flat face stays in contact each tap — if a student catches the ball with the rounded edge, pause them and reset the grip.",
     "Coach the key message around the room: 'soft hands on the stick — let the ball come to you, don't stab at it.'",
     "For 'easier', widen the square and slow the tap rhythm; for 'harder', shrink the square and call for quicker taps.",
     "Run for 2-3 minutes continuously, walking the grid to spot-check individual technique rather than stopping the whole class."
    ]
   },
   {
    "name": "Eyes Up Taps",
    "desc": "While tapping the ball on the spot, students hold up fingers on their non-stick hand when the teacher calls 'show me!' — forcing them to keep their head up rather than watching the ball.",
    "coach": "Feel the ball through the stick, trust it without looking down",
    "easier": "Slower taps, more time to respond",
    "harder": "Faster taps, quick-fire calls",
    "chaos": "Random constraint calls",
    "setup": "Same personal squares as Tap Tap Control, one stick and ball per student, no partner needed — the teacher calls out to the whole class at once from the front.",
    "howTo": [
     "Explain the challenge: students keep tapping the ball on the spot with the flat stick face while their non-stick hand stays free at their side.",
     "On 'show me!', students hold up a number of fingers on their non-stick hand without looking down at the ball or their hand.",
     "Call out randomly every 5-10 seconds, checking that heads are staying up rather than dropping to watch the ball.",
     "Coach the key message: 'feel the ball through the stick, trust it without looking down.'",
     "For 'easier', slow the tap pace and leave longer gaps between calls; for 'harder', speed up the taps and fire calls in quick succession.",
     "Run for 2-3 minutes, mixing up the timing of the calls so students can't predict them."
    ]
   },
   {
    "name": "Freeze & Balance",
    "desc": "As the warm-up, but now with a partner watching — on 'freeze!' the dribbler must stop the ball dead under the stick (no rolling away) and hold it still for a count of three.",
    "coach": "Bring the ball to a soft stop with a give in your wrists, don't jab it dead",
    "easier": "Slower calls, more warning",
    "harder": "Faster, less predictable calls",
    "chaos": "Beat the clock",
    "setup": "Pairs formed within the existing grid, one stick and ball between the pair — one student dribbles on the spot while their partner stands close by ready to call 'freeze!' and count.",
    "howTo": [
     "Explain the challenge: the dribbler taps the ball on the spot as in the earlier games, but now a partner is watching and will call the stop.",
     "The dribbler begins tapping the ball gently side to side while their partner watches closely, ready to call out at any moment.",
     "On 'freeze!', the dribbler must stop the ball dead under the stick with no rolling away, then hold it completely still for a count of three said aloud by the partner.",
     "Coach the key message: 'bring the ball to a soft stop with a give in your wrists, don't jab it dead.'",
     "Swap roles after every 3-4 freezes so both partners get equal turns dribbling and calling.",
     "For 'easier', give more warning before the call and slow the calls down; for 'harder', call faster and less predictably."
    ]
   }
  ],
  "big": {
   "name": "Musical Dribble",
   "desc": "Whole class dribbles freely in a large grid to music (or a continuous count); when the sound stops everyone must freeze their dribble under control — anyone whose ball gets away does 3 quick tap-taps before rejoining. No eliminations — just a fun, repeated challenge.",
   "setup": "Whole class dribbles freely inside one large shared grid roughly 20m x 20m, each student with their own stick and ball. A phone/speaker for music (or the teacher's own steady counting) sits at the front.",
   "howTo": [
    "Explain the game: everyone dribbles freely around the big grid while the music/count plays, using the tap-tap control from today's games.",
    "When the music stops (or the count pauses), every student must freeze their dribble under control on the spot, ball held dead under the stick.",
    "Anyone whose ball gets away from them does 3 quick tap-taps on the spot before rejoining the next round.",
    "There's no elimination — everyone keeps playing every round, so a loose ball just means a quick, friendly consequence rather than sitting out.",
    "Restart the music/count as soon as everyone is set, and repeat for several rounds, mixing up how long the music plays each time.",
    "Keep the tone upbeat and playful — this is a fun capstone to the lesson's stationary-control focus, not a competitive elimination game."
   ]
  },
  "discussion": [
   "What helped you keep control of the ball while standing still?",
   "What's the difference between stabbing at the ball and gently tapping it with soft hands?",
   "Why does keeping your eyes up matter, even this early in learning to dribble?"
  ],
  "lookfors": [
   "Uses the flat face of the stick, not the edge",
   "Keeps the ball within a small, controlled area",
   "Can glance up briefly without losing control"
  ],
  "inclusion": "Allow a bigger, slower-rolling ball (e.g. a foam hockey ball) or a wider square for students building stick control/confidence; success is measured by control, not speed.",
  "skillBreakdown": [
   {
    "step": "Keep the stick close to the ball with soft, ready hands.",
    "why": "Close control means faster reaction if pressure arrives."
   },
   {
    "step": "Use small taps with the flat face of the stick.",
    "why": "The flat face is the only legal contact surface and gives the most control."
   },
   {
    "step": "Keep your head up between touches.",
    "why": "Trains awareness of space and teammates without losing the ball."
   }
  ]
 },
 {
  "n": 2,
  "block": 1,
  "title": "Indian Dribble",
  "focus": "Dribbling on the move using side-to-side stick control",
  "walt": "We are learning to dribble the ball from side to side across our body while moving, using both sides of the stick face.",
  "wilf": [
   "I can move the ball from my right side to my left side without losing control while walking or jogging",
   "I can keep the ball close as I change the angle of my stick"
  ],
  "nzc": "Strand B · Managing self",
  "value": "Mōhio",
  "valueText": "Understanding what your own hands and feet are doing while moving with the ball, and noticing what changes when it starts to click.",
  "equipment": "1 stick + 1 ball per student, cones",
  "safety": "Watch for collisions when moving through a shared space — remind students to check space before changing direction; sticks stay below knee height",
  "games": [
   {
    "name": "Walking Indian Dribble Lanes",
    "desc": "Students dribble the length of a marked lane while walking, tapping the ball side to side across their body, focusing purely on keeping control while moving.",
    "coach": "Small taps, not big swipes — the ball should never leave the stick face",
    "easier": "Wider lane, walk only",
    "harder": "Narrower lane, light jog",
    "chaos": "Random constraint calls",
    "setup": "Marked lanes roughly 1.5m wide and 10m long using cones down each side, enough lanes for the whole class to work in pairs or trios at once, one stick and ball per student.",
    "howTo": [
     "Demonstrate the Indian dribble: small taps that move the ball side to side across the body as you walk forward, using both faces of the stick.",
     "Students enter their lane one or two at a time and walk the length of the lane tapping the ball from side to side, keeping it inside the lane markers.",
     "Watch that taps stay small and controlled — if the ball drifts wide of the lane, students slow down and reset before continuing.",
     "Coach the key message: 'small taps, not big swipes — the ball should never leave the stick face.'",
     "For 'easier', widen the lane and keep it to a walk only; for 'harder', narrow the lane and allow a light jog.",
     "Rotate students through continuously, sending the next student in as soon as the lane ahead is clear."
    ]
   },
   {
    "name": "Cone Weave Dribble",
    "desc": "Dribbling through a zig-zag line of cones, students use the Indian dribble to move the ball from side to side around each cone.",
    "coach": "Angle the stick face early, before you reach the cone, not at the last second",
    "easier": "Wider cone spacing, slower pace",
    "harder": "Narrower spacing, faster pace",
    "chaos": "Beat the clock",
    "setup": "A zig-zag line of 5-6 cones spaced about 2m apart, one lane per group of 3-4 students who take turns, one stick and ball per student.",
    "howTo": [
     "Demonstrate weaving through the cones using the Indian dribble, angling the stick face to move the ball around each cone in turn.",
     "The first student dribbles through the full zig-zag while the rest of the group watches and waits at the start.",
     "Coach the key message as students go: 'angle the stick face early, before you reach the cone, not at the last second.'",
     "A clean run means the ball stays under control past every cone without knocking one over — if a cone is knocked, the student slows down and keeps going rather than restarting.",
     "For 'easier', space the cones wider and encourage a slower pace; for 'harder', narrow the spacing and pick up the pace.",
     "Rotate to the back of the line after each run so everyone gets repeated attempts."
    ]
   },
   {
    "name": "Shrinking Grid Dribble",
    "desc": "Whole class dribbles inside a grid that shrinks every 30 seconds, using the Indian dribble to weave and find space as the grid gets tighter.",
    "coach": "Use small, quick taps to find gaps as the grid shrinks",
    "easier": "Shrink slower, bigger starting grid",
    "harder": "Shrink faster, smaller starting grid",
    "chaos": "Shrinking space",
    "setup": "One shared grid starting around 15m x 15m marked with cones, whole class inside at once, one stick and ball per student, spare cones on hand to bring the boundary in.",
    "howTo": [
     "Explain that everyone will dribble freely inside the grid using the Indian dribble to weave around other players and find open space.",
     "Start the whole class dribbling inside the full-size grid, spreading out and using small controlled taps.",
     "Every 30 seconds, quickly move the boundary cones inward to shrink the grid, forcing tighter weaving and closer awareness of others.",
     "Coach the key message: 'use small, quick taps to find gaps as the grid shrinks.'",
     "For 'easier', shrink the grid more slowly from a bigger starting size; for 'harder', shrink faster from a smaller starting size.",
     "Reset to the original size after 2-3 minutes and repeat if time allows."
    ]
   }
  ],
  "big": {
   "name": "Dribble Tag",
   "desc": "In a shared space, everyone dribbles their own ball while trying to gently tap other players' balls away with the flat of their stick (no reaching for sticks or bodies) while protecting their own — no elimination, just count how many times your ball gets tapped versus how many you tap.",
   "setup": "Whole class inside one shared grid roughly 20m x 20m, each student with their own stick and ball, no goals or targets needed for this game.",
   "howTo": [
    "Explain the game: everyone dribbles their own ball while trying to gently tap other players' balls away with the flat of their stick, while also protecting their own ball.",
    "Set the rule clearly before starting: no reaching for another player's stick or body, taps are only at the ball, and everyone keeps their own ball moving.",
    "Play continuously for 2-3 minutes at a time — there's no elimination, so a tapped-away ball is simply chased down and brought back into play.",
    "Students keep a rough personal tally in their head of how many times their ball gets tapped versus how many times they successfully tap someone else's.",
    "Coach the key message throughout: use the shielding and control skills from today's other games to protect the ball while still scanning for opportunities.",
    "Stop briefly midway to remind students to keep taps light and controlled if the game is getting too physical, then restart."
   ]
  },
  "discussion": [
   "What did moving while dribbling feel different from dribbling on the spot?",
   "What helped you move the ball smoothly from one side to the other?",
   "What helped you protect your ball while others were nearby?"
  ],
  "lookfors": [
   "Keeps the ball under control while walking/jogging",
   "Moves the ball side to side with small, controlled taps",
   "Keeps the ball close to the stick when others are nearby"
  ],
  "inclusion": "Allow students to practise the Indian dribble stationary before adding movement if the combined skill feels like too much at once.",
  "skillBreakdown": [
   {
    "step": "Push the ball from side to side in front of you as you move.",
    "why": "Keeps the ball protected and under control while advancing."
   },
   {
    "step": "Keep the stick face angled to control the ball, not just push it forward.",
    "why": "Control matters more than speed at this stage."
   },
   {
    "step": "Keep your eyes up while moving.",
    "why": "Lets you see space and options without losing the ball."
   }
  ]
 },
 {
  "n": 3,
  "block": 1,
  "title": "Shield the Ball",
  "focus": "Dribbling under pressure (protect the ball)",
  "walt": "We are learning to protect the ball with our body and stick while dribbling near a defender.",
  "wilf": [
   "I can keep my body between the ball and a defender",
   "I can angle my stick to shield the ball without obstructing illegally"
  ],
  "nzc": "Strand B · Managing self, Relating to others",
  "value": "Manaaki",
  "valueText": "Using your skills faithfully to give your partner a fair, honest challenge — not going so hard it isn't fun, not giving up either.",
  "equipment": "1 stick + 1 ball per pair, cones for grids",
  "safety": "No reaching in or swinging at the ball — sticks-off pressure only until a fair tackle attempt; no pushing with the body",
  "games": [
   {
    "name": "Shadow Dribble",
    "desc": "Attacker dribbles freely; a 'shadow' defender stays a stick's length away and mirrors movement without reaching for the ball, just to get the dribbler used to pressure nearby.",
    "coach": "Keep your body and stick between the ball and the defender at all times",
    "easier": "Defender stays further back",
    "harder": "Defender allowed to get closer",
    "chaos": "Added defender/pressure",
    "setup": "Pairs spread across a grid roughly 15m x 15m, one stick and ball per pair (the attacker's), enough space between pairs that dribbling paths don't cross.",
    "howTo": [
     "Explain the roles: one partner dribbles freely while the other acts as a 'shadow' defender who stays close but never reaches for the ball.",
     "The attacker begins dribbling around their space while the shadow defender stays a stick's length away, mirroring the attacker's movement.",
     "Coach the key message: 'keep your body and stick between the ball and the defender at all times.'",
     "The shadow defender's only job is to apply presence, not pressure — no attempts to touch the ball during this game.",
     "For 'easier', the defender stays further back; for 'harder', the defender is allowed to get closer while still not touching the ball.",
     "Swap roles after 1-2 minutes so both partners practise dribbling under nearby pressure."
    ]
   },
   {
    "name": "Shield & Turn",
    "desc": "Dribbler practises turning their back slightly to the defender and rolling the ball to the far side of their body to shield it, staying low and balanced.",
    "coach": "Use your body to feel where the defender is, not to push them away",
    "easier": "Defender stationary",
    "harder": "Defender moves side to side",
    "chaos": "Random constraint calls",
    "setup": "Pairs spread across the same grid, one stick and ball per pair, enough room for a dribbler to turn their body without bumping a neighbouring pair.",
    "howTo": [
     "Demonstrate shielding: turning the back and shoulder slightly toward the defender while rolling the ball to the far side of the body, staying low and balanced.",
     "The dribbler starts with the ball and the defender stands nearby; on a signal, the dribbler shields and rolls the ball away from the defender's side.",
     "Coach the key message: 'use your body to feel where the defender is, not to push them away.'",
     "The defender's job is simply to stand in a fixed spot (or move lightly) so the dribbler has something real to shield against.",
     "For 'easier', the defender stays stationary; for 'harder', the defender is allowed to move side to side to test the shield.",
     "Swap roles every few turns so both partners get repeated practice shielding."
    ]
   },
   {
    "name": "1v1 Protect the Ball",
    "desc": "In a small square, one player dribbles and must protect the ball for a count of 10 seconds against a light-touch defender attempting a fair tackle, then swap roles.",
    "coach": "Change of pace and shielding beat trying to muscle past a defender",
    "easier": "Bigger square, defender starts 2m back",
    "harder": "Smaller square, defender close from the start",
    "chaos": "Mild opposition + decision-making",
    "setup": "Small squares roughly 4m x 4m marked with cones, one per pair, one stick and ball per pair, a stopwatch or the teacher's own count for timing.",
    "howTo": [
     "Explain the challenge: one player dribbles inside the square and must protect the ball for a count of 10 seconds against a light-touch defender attempting a fair tackle.",
     "Start the count as soon as the dribbler has the ball under control, with the defender applying gentle, sticks-off pressure only.",
     "Coach the key message: 'change of pace and shielding beat trying to muscle past a defender.'",
     "If the defender wins the ball cleanly before 10 seconds is up, or the dribbler protects it for the full count, that round ends and roles swap.",
     "For 'easier', use a bigger square and have the defender start 2m back; for 'harder', shrink the square and start the defender close from the beginning.",
     "Reinforce fair, sticks-off tackling throughout — no reaching in or swinging at the ball."
    ]
   }
  ],
  "big": {
   "name": "Keep-Away Hockey",
   "desc": "3v3 or 4v4, small area, no goals — a team scores a point for every 5 consecutive dribbles/passes kept under pressure without the other team touching the ball. Protecting the ball under pressure directly determines success.",
   "setup": "Small areas roughly 10m x 10m marked with cones, groups of 3v3 or 4v4, one ball per group, sticks for every player, no goals needed.",
   "howTo": [
    "Explain the scoring: a team earns a point for every 5 consecutive dribbles or passes kept under pressure without the other team touching the ball.",
    "Start with one team in possession inside their area; the other team applies sticks-off pressure only, trying to intercept or force a loose ball.",
    "Play continues with a running count out loud — the possessing team calls their numbers as they string dribbles and passes together.",
    "The moment the ball is lost or touched by the other team, possession switches and the count resets to zero for the new team.",
    "Coach the key message throughout: shielding and quick decisions under pressure are what earns the point, not just raw ball skill.",
    "Rotate which teams play against each other every few minutes if running multiple small groups at once."
   ]
  },
  "discussion": [
   "What helped you protect the ball when a defender was close?",
   "How did shielding with your body (not your stick swinging) make a difference?",
   "What did you notice about giving your partner a fair, honest challenge?"
  ],
  "lookfors": [
   "Keeps body and stick between the ball and defender",
   "Shields without obstructing illegally (not blocking with the body alone)",
   "Changes pace/direction rather than freezing under pressure"
  ],
  "inclusion": "Start defenders further back (2m) and only close in once the dribbler is confident; allow a 'no-defender' version for students still consolidating basic control.",
  "skillBreakdown": [
   {
    "step": "Keep your body and stick between the ball and the defender.",
    "why": "Uses your body legally as a shield within hockey's rules."
   },
   {
    "step": "Use quick, small touches rather than one big push when pressured.",
    "why": "Keeps the ball closer and less winnable."
   },
   {
    "step": "Change direction or pace to escape pressure.",
    "why": "More reliable than trying to shield indefinitely against a persistent defender."
   }
  ]
 },
 {
  "n": 4,
  "block": 1,
  "title": "Push Pass Precision",
  "focus": "Push pass accuracy",
  "walt": "We are learning to play an accurate push pass along the ground using the flat face of the stick.",
  "wilf": [
   "I can push the ball out smoothly with a rolling wrist action, stepping toward my target",
   "I can pass so the ball arrives flat along the ground at my partner's stick"
  ],
  "nzc": "Strand B · Managing self",
  "value": "Pānga",
  "valueText": "Thinking ahead about where your pass needs to land so your partner can control it easily, not just where it's easiest to push from.",
  "equipment": "1 stick + 1 ball per pair, cones for targets",
  "safety": "Passing lanes should not cross other pairs' lanes — space grids out; push passes only, no lifted balls",
  "games": [
   {
    "name": "Wall of Targets",
    "desc": "Partners push pass through a small cone gate from increasing distances, scoring a point each time the ball rolls cleanly through and stays flat along the ground.",
    "coach": "Roll your wrists through the ball, step toward your target as you release",
    "easier": "Wider gate, closer distance",
    "harder": "Narrower gate, further apart",
    "chaos": "Scoring streaks",
    "setup": "Pairs facing each other across a marked distance starting at 5m, with a small cone gate (two cones about 1m apart) set up midway between them, one stick and ball per pair.",
    "howTo": [
     "Demonstrate the push pass: rolling the wrists through the ball and stepping toward the target as the ball is released, keeping it flat along the ground.",
     "Partners take turns pushing the ball through the cone gate to each other, starting from the closer distance.",
     "A point is scored each time the ball rolls cleanly through the gate and stays flat on the ground without bouncing or lifting.",
     "Coach the key message: 'roll your wrists through the ball, step toward your target as you release.'",
     "For 'easier', widen the gate and move partners closer; for 'harder', narrow the gate and move partners further apart.",
     "Track scoring streaks as a fun way to build focus — see how many clean passes through the gate a pair can string together."
    ]
   },
   {
    "name": "Sweep to a Target",
    "desc": "Partners practise the sweep pass (a wider, sweeping motion for balls slightly to the side), aiming for the ball to arrive flat at their partner's stick.",
    "coach": "Get low, sweep through the ball rather than jabbing at it",
    "easier": "Closer distance, slower pace",
    "harder": "Greater distance, add a target zone",
    "chaos": "Bonus objectives",
    "setup": "Same pairs and space as Wall of Targets, one stick and ball per pair, no gate needed — partners simply aim for each other's stick.",
    "howTo": [
     "Demonstrate the sweep pass: a wider, sweeping motion used for balls slightly to the side, getting low and sweeping through the ball rather than jabbing at it.",
     "Partners take turns placing the ball slightly to one side of themselves and using the sweep pass to send it flat to their partner's stick.",
     "Coach the key message: 'get low, sweep through the ball rather than jabbing at it.'",
     "The receiving partner focuses on giving with their stick to cushion the pass as it arrives, keeping it under control.",
     "For 'easier', keep the distance closer and the pace slower; for 'harder', increase the distance and add a small target zone to aim for.",
     "Set a bonus objective, like naming a number of clean sweep passes in a row, to keep the challenge engaging."
    ]
   },
   {
    "name": "Choose Your Pass",
    "desc": "Partners alternate between push and sweep passes based on a called instruction, building quick recognition of when to use each.",
    "coach": "Decide the pass type before the ball arrives, not after",
    "easier": "Fewer calls, more time to decide",
    "harder": "Quick-fire calls",
    "chaos": "Random constraint calls",
    "setup": "Same pairs and space as the earlier games, one stick and ball per pair, with the teacher or a rotating caller giving instructions from the front or within the pair.",
    "howTo": [
     "Explain that partners will alternate between the push pass and the sweep pass depending on which one is called out before the pass.",
     "One partner calls 'push!' or 'sweep!' just before receiving, and the passer must use that exact pass type to send the ball.",
     "Coach the key message: 'decide the pass type before the ball arrives, not after.'",
     "Swap who is calling after every 4-5 passes so both partners practise deciding and executing quickly.",
     "For 'easier', reduce how often calls change and give more time to decide; for 'harder', fire the calls quickly with little warning.",
     "Keep the activity flowing continuously rather than stopping between every pass."
    ]
   }
  ],
  "big": {
   "name": "Two-Pass-Type Hockey",
   "desc": "4v4, small area, no goals — teams must use both a push pass and a sweep pass at least once during a passing sequence before scoring, encouraging a full passing toolkit.",
   "setup": "Small areas roughly 10m x 10m marked with cones, groups of 4v4, one ball per group, sticks for every player, no goals needed.",
   "howTo": [
    "Explain the rule: before a team can score, their passing sequence must include at least one push pass and one sweep pass.",
    "Start with one team in possession; the other team applies sticks-off pressure, trying to intercept or force mistakes.",
    "As the team passes the ball around, players call out which pass type they're using so the requirement is clear and visible.",
    "A point is scored once a team has used both pass types in a single possession and completes a set number of consecutive passes (agree the number with the class beforehand, e.g. 5).",
    "Coach the key message: encourage players to recognise when a sweep pass suits a wider-angled option versus a straight push pass.",
    "Rotate possession fairly and swap which teams play against each other every few minutes."
   ]
  },
  "discussion": [
   "What technique helped your passes go where you wanted?",
   "When might a sweep pass be more useful than a push pass?",
   "What happens to the game when passes aren't accurate?"
  ],
  "lookfors": [
   "Rolls the wrists through the push pass rather than jabbing",
   "Gets low for the sweep pass",
   "Chooses an appropriate pass type for the distance/situation"
  ],
  "inclusion": "Shorten distances for students still building the wrist action/technique; the gate/target structures scale naturally by moving cones closer.",
  "skillBreakdown": [
   {
    "step": "Keep the stick close to the ball and push through it, not swing at it.",
    "why": "A push pass relies on a smooth transfer of weight, not a hit."
   },
   {
    "step": "Step toward your target as you push.",
    "why": "The step adds accuracy and a little power."
   },
   {
    "step": "Follow through toward the target with the stick face open.",
    "why": "Keeps the ball flat and on target."
   }
  ]
 },
 {
  "n": 5,
  "block": 1,
  "title": "Receive & Turn",
  "focus": "Receiving a pass & controlling first touch",
  "walt": "We are learning to receive a pass with soft hands and control our first touch before turning to play.",
  "wilf": [
   "I can cushion the ball to a stop with a soft, giving stick face",
   "I can turn with the ball under control after receiving it"
  ],
  "nzc": "Strand B · Managing self",
  "value": "Aroha",
  "valueText": "Being patient with yourself and encouraging teammates while receiving and turning confidence builds — everyone's hands and feet look different at first.",
  "equipment": "1 stick + 1 ball per pair, cones",
  "safety": "Passes should stay below knee height and along the ground; no contact during turning practice — sticks-off only",
  "games": [
   {
    "name": "Soft Hands Receive",
    "desc": "Partners pass; the receiver must cushion every pass to a dead stop under their stick before pushing it back.",
    "coach": "Give with the stick face as the ball arrives, don't meet it with a stiff stick",
    "easier": "Slower passes",
    "harder": "Passes with more pace",
    "chaos": "Random constraint calls",
    "setup": "Pairs facing each other about 5m apart, one stick and ball per pair, spread out across a grid so passing lanes don't cross other pairs.",
    "howTo": [
     "Demonstrate cushioning: giving slightly with the stick face as the ball arrives so it stops dead rather than bouncing away.",
     "Partners take turns passing gently to each other; the receiver must bring every pass to a complete stop under their stick before pushing it back.",
     "Coach the key message: 'give with the stick face as the ball arrives, don't meet it with a stiff stick.'",
     "If a pass bounces away out of control, that receiver simply collects it and resets before continuing — no restart of the whole activity.",
     "For 'easier', slow the passes right down; for 'harder', add more pace to each pass.",
     "Swap who's passing first every few turns so both partners get equal receiving practice."
    ]
   },
   {
    "name": "Receive & Open Up",
    "desc": "Students receive a gentle pass and practise turning their body and stick to face a new direction, controlling the ball onto their stick as they turn.",
    "coach": "Check over your shoulder before the ball arrives so you know which way you'll turn",
    "easier": "Smaller turn (quarter turn)",
    "harder": "Full half turn, added speed",
    "chaos": "Random constraint calls",
    "setup": "Same pairs and space as Soft Hands Receive, one stick and ball per pair, with a little extra room around each pair for the receiver to turn.",
    "howTo": [
     "Demonstrate checking over the shoulder before the ball arrives to know which way to turn once it's received.",
     "One partner passes gently while the receiver checks over their shoulder, receives the ball, and turns their body and stick to face a new direction.",
     "Coach the key message: 'check over your shoulder before the ball arrives so you know which way you'll turn.'",
     "The receiver controls the ball onto their stick as they complete the turn, rather than stopping it first and turning afterward.",
     "For 'easier', practise a smaller quarter turn; for 'harder', use a full half turn and add a bit more pace to the pass.",
     "Swap roles regularly so both partners practise passing and receiving-and-turning."
    ]
   },
   {
    "name": "Shield & Receive",
    "desc": "A shadow defender stands nearby (not touching) while the receiver controls the ball and turns to shield it with their body before passing away from the defender.",
    "coach": "Keep your body and stick between you and the defender as you turn",
    "easier": "Defender further away",
    "harder": "Defender allowed to move around the receiver",
    "chaos": "Added defender/pressure",
    "setup": "Trios (or pairs with the teacher rotating in a third) spread across the grid, one stick and ball per group, a shadow defender standing nearby but not touching.",
    "howTo": [
     "Explain the roles: a passer, a receiver, and a shadow defender who stands close by without reaching for the ball.",
     "The passer sends a gentle pass to the receiver, who controls it and turns while using their body to shield the ball from the shadow defender.",
     "Coach the key message: 'keep your body and stick between you and the defender as you turn.'",
     "Once shielded and turned, the receiver passes the ball away from the defender to complete the sequence.",
     "For 'easier', the defender stands further away; for 'harder', the defender is allowed to move around the receiver while still not touching the ball.",
     "Rotate roles every few turns so everyone practises passing, receiving, and defending."
    ]
   }
  ],
  "big": {
   "name": "Secure Receive Hockey",
   "desc": "4v4, small area, light shadow defence only — teams score for maintaining clean, secure receives and controlled turns under mild pressure, building toward full defending in later lessons.",
   "setup": "Small areas roughly 10m x 10m marked with cones, groups of 4v4, one ball per group, sticks for every player, no goals needed, one light shadow defender per team.",
   "howTo": [
    "Explain the scoring: teams earn points for clean, secure receives and controlled turns made under mild pressure from a nearby shadow defender.",
    "Play possession-based small-sided hockey where defenders apply only light, sticks-off shadow pressure rather than full tackling.",
    "Coach highlights good receives out loud as they happen — a clean stop, a good check-over-the-shoulder, a controlled turn — to reinforce the lesson's focus.",
    "A point can be awarded (by the coach or a simple team tally) for a set number of clean receive-and-turn sequences completed under pressure.",
    "Coach the key message throughout: composure on the first touch is what sets up everything else in the game.",
    "This game builds directly toward full defending in later lessons, so keep the defensive pressure deliberately light for now."
   ]
  },
  "discussion": [
   "What did soft hands do to help you control the ball cleanly?",
   "How did turning help you protect the ball after receiving it?",
   "What made turning under a bit of pressure trickier?"
  ],
  "lookfors": [
   "Cushions the ball to a controlled stop, not a stiff block",
   "Turns with the ball under control",
   "Checks over the shoulder before the ball arrives"
  ],
  "inclusion": "Use a slightly softer or slower-rolling ball for students who find receiving difficult, so the turning focus isn't lost to a hard first touch.",
  "skillBreakdown": [
   {
    "step": "Get in line with the ball early with a soft, angled stick face.",
    "why": "Gives you time and surface to cushion the ball properly."
   },
   {
    "step": "Give slightly with the stick on contact.",
    "why": "Absorbs the ball's speed instead of it bouncing away."
   },
   {
    "step": "Control the ball into space away from pressure.",
    "why": "Keeps you moving and away from a defender rather than stopping dead."
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
  "equipment": "Sticks, balls, cones, bibs (2 colours)",
  "safety": "Keep passing lanes clear of other groups when running through space; push passes only",
  "games": [
   {
    "name": "Wall Pass Relay",
    "desc": "Pairs practise 'pass and move': Player A passes to Player B and immediately jogs to a new cone; B controls and passes back to A's new position. Repeat down a channel.",
    "coach": "Move immediately after passing, don't watch the ball",
    "easier": "Walk instead of jog",
    "harder": "Add a defender jogging alongside (not intercepting yet)",
    "chaos": "Role rotation",
    "setup": "Marked channels roughly 15m long and 3m wide using cones, pairs working within each channel, one stick and ball per pair.",
    "howTo": [
     "Demonstrate the give-and-go: Player A passes to Player B and immediately jogs to a new position further down the channel.",
     "Player A starts with the ball and passes to Player B, who is standing a little further down the channel.",
     "The moment the pass is played, Player A jogs ahead to a new cone marker while Player B controls the ball.",
     "Player B then passes to Player A's new position, and the pattern repeats all the way down the channel.",
     "Coach the key message: 'move immediately after passing, don't watch the ball.'",
     "For 'easier', walk instead of jog; for 'harder', add a defender jogging alongside without intercepting yet."
    ]
   },
   {
    "name": "Give and Go Gates",
    "desc": "In trios, two attackers combine give-and-go passes to move the ball through a series of gates down the field, racing another trio.",
    "coach": "Pass early, before you're under real pressure",
    "easier": "Wider gates/no time pressure",
    "harder": "Narrower gates, timed race",
    "chaos": "Beat the clock, head-to-head mirror",
    "setup": "Trios, with a series of 4-5 cone gates spaced roughly 4-5m apart down a marked channel about 20m long, one stick and ball per trio, a second trio racing alongside in a parallel channel.",
    "howTo": [
     "Explain the setup: two attackers combine give-and-go passes to move the ball through each gate in turn, while the third teammate watches and times the run.",
     "The first attacker starts with the ball and passes to their partner as they move toward the first gate, immediately running into space for a return pass.",
     "The pair continue combining give-and-go passes gate by gate until they reach the end of the channel.",
     "Coach the key message: 'pass early, before you're under real pressure.'",
     "For 'easier', use wider gates with no time pressure; for 'harder', narrow the gates and time the run as a race against the neighbouring trio.",
     "Rotate the third player into the pair each run so everyone gets multiple turns attacking."
    ]
   },
   {
    "name": "1-2 vs Shadow Defender",
    "desc": "Pairs attempt a give-and-go against one light-touch defender who can only intercept after the first pass is played (delayed pressure).",
    "coach": "The 'give' player should move into space immediately, not just stand and admire the pass",
    "easier": "Defender starts further back",
    "harder": "Defender allowed to close immediately",
    "chaos": "Added defender/pressure",
    "setup": "Small grids roughly 10m x 8m, one per group of three (two attackers, one shadow defender), one stick and ball per group.",
    "howTo": [
     "Explain the delayed-pressure rule: the defender may only attempt to intercept after the first pass of the give-and-go has been played.",
     "The two attackers start with the ball and attempt a give-and-go combination to move past the defender's zone.",
     "Coach the key message: 'the give player should move into space immediately, not just stand and admire the pass.'",
     "The defender waits until the first pass is played, then closes down to try to intercept or pressure the return pass.",
     "For 'easier', the defender starts further back; for 'harder', the defender is allowed to close immediately once the first pass is played.",
     "Rotate the defender role every few attempts so everyone practises attacking and defending."
    ]
   }
  ],
  "big": {
   "name": "3v3 + 1 Target Player Hockey",
   "desc": "Small-sided game with small goals/cone goals; encourage give-and-go combinations as a way to beat defenders, especially near the target player position. Coach highlights any successful give-and-go in play.",
   "setup": "A small-sided area with small goals or cone goals at each end, groups of 3v3 plus one target player per team, sticks and one ball per group, bibs to distinguish teams.",
   "howTo": [
    "Explain the target player role: one player per team stays higher up the field as a focal point to combine with, especially near goal.",
    "Play small-sided hockey as normal, encouraging attackers to look for give-and-go combinations rather than always dribbling solo.",
    "Coach highlights any successful give-and-go out loud as it happens in play, especially combinations involving the target player.",
    "Rotate who plays the target player role every few minutes so everyone gets a turn in that position.",
    "Coach the key message throughout: a well-timed pass-and-move can beat a defender that dribbling alone can't.",
    "Keep goals or scoring simple so the focus stays on the passing pattern rather than just outcome."
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
    "why": "Standing still after passing makes you easy to mark."
   },
   {
    "step": "Time your run to receive the return pass in stride.",
    "why": "Arriving too early or late means an awkward, stationary receive."
   },
   {
    "step": "Communicate to your teammate that you want the return.",
    "why": "Speeds up decision-making under pressure."
   }
  ]
 },
 {
  "n": 7,
  "block": 2,
  "title": "Perfect Push",
  "focus": "Shooting technique (push shot)",
  "walt": "We are learning correct technique for a push shot at goal, using a low, balanced stance and a firm push through the ball.",
  "wilf": [
   "I can get low with my stick close to the ball before pushing firmly through it",
   "I can keep my shot flat and below knee height"
  ],
  "nzc": "Strand B · Managing self",
  "value": "Manaaki",
  "valueText": "Practising a skill faithfully, with focus and effort, even when it doesn't work first time — using your talent well takes repetition.",
  "equipment": "Sticks, balls, small goals/cone goals, cones",
  "safety": "Shooters should have clear space in front of them; rotate turns so no one is standing directly in the shooting lane; push shots only — no lifted or swung hits",
  "games": [
   {
    "name": "Balanced Stance Practice",
    "desc": "Students practise the push shot stance (low, knees bent, stick close to the ball, weight moving forward) without shooting hard yet, focusing purely on set-up.",
    "coach": "Get your body weight moving through the ball as you push, not just your arms",
    "easier": "Wider stance, more time to set up",
    "harder": "Quicker set-up, timed",
    "chaos": "Random constraint calls",
    "setup": "Each student with their own stick and ball, spread out in a grid roughly 15m x 15m, no shooting yet — this is stance and set-up only.",
    "howTo": [
     "Demonstrate the push shot stance: low body position, knees bent, stick close to the ball, weight ready to move forward through the shot.",
     "Students place their ball on the ground and practise getting into the stance without shooting, holding the position for a few seconds each time.",
     "Coach the key message: 'get your body weight moving through the ball as you push, not just your arms.'",
     "Walk the grid checking that knees are bent and the stick is close to the ball rather than reaching out awkwardly.",
     "For 'easier', use a wider stance with more time to set up; for 'harder', time how quickly students can get into a clean set-up position.",
     "Run for 2-3 minutes, resetting the stance repeatedly rather than shooting."
    ]
   },
   {
    "name": "Push Shot Walkthrough",
    "desc": "Students walk through the push shot from a stationary ball at a target, focusing purely on a low, flat strike that stays on the ground.",
    "coach": "Follow through low, toward your target — don't lift the stick",
    "easier": "Closer range, bigger target",
    "harder": "Further range, smaller target",
    "chaos": "Random constraint calls",
    "setup": "Small goals or cone goals set up around the space, students in pairs or small groups taking turns from a stationary ball at a marked spot roughly 6-8m from the target.",
    "howTo": [
     "Demonstrate the push shot from a stationary ball, focusing on a low, flat strike that stays on the ground all the way to the target.",
     "Each student walks through the push shot slowly at first, checking their stance before striking the ball toward the target.",
     "Coach the key message: 'follow through low, toward your target — don't lift the stick.'",
     "After a few slow walkthroughs, allow a normal-paced push shot while keeping the same low, controlled technique.",
     "For 'easier', move closer with a bigger target; for 'harder', move further back with a smaller target.",
     "Rotate turns quickly so everyone gets multiple repetitions rather than standing and waiting."
    ]
   },
   {
    "name": "Shot Streak Challenge",
    "desc": "Small groups rotate through a shooting station, taking quick-fire push shots from a fixed spot; the group tracks consecutive 'clean technique' shots as a team streak (technique counts even if it misses).",
    "coach": "Reset your technique each shot, don't chase power",
    "easier": "Closer range, bigger target",
    "harder": "Further range, smaller target zones worth bonus points",
    "chaos": "Scoring streaks, bonus objectives",
    "setup": "Small groups of 3-4 rotating through a shooting station with a fixed spot roughly 6-8m from a small goal or cone target, one ball shared per group, a way to track the group's streak (tally marks or calling numbers aloud).",
    "howTo": [
     "Explain that the group is tracking consecutive shots with clean technique as a team streak — technique counts even if the shot misses the target.",
     "Students take turns shooting quick-fire from the fixed spot, with the group calling out the streak count after each clean-technique attempt.",
     "Coach the key message: 'reset your technique each shot, don't chase power.'",
     "If a shot has poor technique (rushed, lifted, off-balance), the streak resets to zero and the group starts counting again.",
     "For 'easier', shoot from closer with a bigger target; for 'harder', shoot from further with smaller target zones worth bonus points.",
     "Rotate through the group quickly so the challenge stays fast-paced and everyone gets frequent turns."
    ]
   }
  ],
  "big": {
   "name": "Small-Sided Shooting Hockey",
   "desc": "4v4 with small goals; emphasis in coaching feedback is on clean push shot technique, not just outcome — celebrate good technique attempts even if they miss.",
   "setup": "Small-sided area with small goals at each end, groups of 4v4, sticks and one ball per group, bibs to distinguish teams.",
   "howTo": [
    "Explain the coaching focus: clean push shot technique matters as much as the outcome, so good attempts get celebrated even when they miss.",
    "Play small-sided hockey as normal, with players looking for opportunities to shoot using the push shot technique from today's games.",
    "Coach calls out and praises clean technique on shot attempts specifically, regardless of whether the shot goes in.",
    "Encourage players to reset their stance quickly for each shooting opportunity rather than rushing a poor-technique attempt.",
    "Coach the key message throughout: 'reset your technique each shot, don't chase power.'",
    "Rotate goalkeepers (if used) or defenders regularly so everyone experiences different roles."
   ]
  },
  "discussion": [
   "What does 'good technique' feel like when you shoot well?",
   "What part of your shooting technique are you most proud of today?",
   "What will you keep practising?"
  ],
  "lookfors": [
   "Gets low with the stick close to the ball before shooting",
   "Follows through flat and low toward the target",
   "Keeps the shot below knee height"
  ],
  "inclusion": "Use a closer distance or a bigger target goal for students building confidence around shooting; success is measured by technique, not outcome.",
  "skillBreakdown": [
   {
    "step": "Get low with a wide, balanced stance over the ball.",
    "why": "A stable base lets you generate power safely and accurately."
   },
   {
    "step": "Push through the ball with the stick face angled at the target.",
    "why": "This is the safe, legal, and most accurate way to shoot in modified hockey."
   },
   {
    "step": "Follow through toward the target.",
    "why": "Stopping early reduces both power and accuracy."
   }
  ]
 },
 {
  "n": 8,
  "block": 2,
  "title": "Spot Shooter",
  "focus": "Shooting accuracy from varied spots",
  "walt": "We are learning to shoot accurately from a range of spots around the goal, not just one favourite position.",
  "wilf": [
   "I can choose a target area before I shoot",
   "I can adjust my technique slightly depending on my distance and angle to the goal"
  ],
  "nzc": "Strand B · Thinking",
  "value": "Pānga",
  "valueText": "Thinking ahead about where your shot will have the most impact rather than just reacting or always shooting from the same spot.",
  "equipment": "Sticks, balls, small goals/cone goals, cones marking shooting spots",
  "safety": "Rotate shooting spots so no one crosses in front of another shooter mid-attempt; push shots only",
  "games": [
   {
    "name": "Five Spot Shootout",
    "desc": "Students rotate through five marked spots around the goal (varying angle and distance), taking one shot from each before rotating.",
    "coach": "Reset your stance for each new spot — don't reuse the same angle from a different position",
    "easier": "Spots closer together, closer to the goal",
    "harder": "Spots further out, wider angles",
    "chaos": "Scoring streaks",
    "setup": "Five marked shooting spots around a small goal or cone target, varying in angle and distance (roughly 4-8m out), one stick and ball per student rotating through, cones marking each spot clearly.",
    "howTo": [
     "Demonstrate that each spot requires a slightly different stance and angle of approach compared to straight-on shooting.",
     "Students rotate through all five spots in order, taking one shot from each before moving to the next.",
     "Coach the key message: 'reset your stance for each new spot — don't reuse the same angle from a different position.'",
     "Between spots, remind students to briefly check their feet and stick angle before shooting rather than rushing straight into it.",
     "For 'easier', bring the spots closer together and closer to the goal; for 'harder', spread the spots further out at wider angles.",
     "Track clean strikes across all five spots as a simple personal tally."
    ]
   },
   {
    "name": "Call Your Spot",
    "desc": "A partner calls out which of the five spots to shoot from next, building quick adaptation between different shooting angles.",
    "coach": "Decide your target and adjust your feet before you receive the pass",
    "easier": "Slower calls, more time to reset",
    "harder": "Quick-fire calls between spots",
    "chaos": "Random constraint calls",
    "setup": "Same five marked spots as Five Spot Shootout, pairs working together — one shooter, one caller — with a ball fed to the shooter for each attempt.",
    "howTo": [
     "Explain the setup: a partner calls out which of the five spots to shoot from next, and the shooter must move there and take the shot.",
     "The caller names a spot, the shooter moves to it, receives a fed ball, and takes their shot from that exact position.",
     "Coach the key message: 'decide your target and adjust your feet before you receive the pass.'",
     "Swap roles every 5-6 shots so both partners practise shooting and calling.",
     "For 'easier', call more slowly with more time to reset between spots; for 'harder', fire the calls quickly between spots.",
     "Keep the feed to the shooter simple and consistent so the challenge stays focused on the shooting decision."
    ]
   },
   {
    "name": "Spot Streak Challenge",
    "desc": "Small groups compete to make the most clean shots across all five spots combined within a time limit, encouraging consistency everywhere, not just one strong spot.",
    "coach": "Don't rush your best spot — every spot deserves the same careful technique",
    "easier": "Fewer spots, more time",
    "harder": "All five spots, tighter time limit",
    "chaos": "Beat the clock, bonus objectives",
    "setup": "Same five marked spots, small groups of 3-4 competing together, one ball per group, a stopwatch or the teacher's own timer, a simple tally system to track clean shots.",
    "howTo": [
     "Explain the challenge: the group competes to make the most clean shots across all five spots combined within a set time limit.",
     "Students rotate through the group, each taking a shot from a called or self-chosen spot, with the group tracking a running tally of clean strikes.",
     "Coach the key message: 'don't rush your best spot — every spot deserves the same careful technique.'",
     "Keep the group moving quickly between shooters so the time limit creates urgency without sacrificing technique.",
     "For 'easier', use fewer spots with more time; for 'harder', require all five spots within a tighter time limit.",
     "Announce the final tally at the end and celebrate the group's total rather than comparing harshly between groups."
    ]
   }
  ],
  "big": {
   "name": "Spot Value Hockey",
   "desc": "4v4 with marked shooting spots worth different point values (further/harder angles worth more) — teams choose which spots to attack based on what's open, rewarding accuracy from a range of positions.",
   "setup": "Small-sided area with a small goal at one end, five marked shooting spots around it worth different point values (closer/straighter spots worth less, further/wider angles worth more), groups of 4v4, sticks and one ball per group.",
   "howTo": [
    "Explain the point-value system before starting: spots further out or at harder angles are worth more points than easy, close spots.",
    "Play small-sided hockey where teams choose which spot to attack based on what's open in the moment, rather than always going for the easiest option.",
    "Coach the key message: reward accuracy from a range of positions, not just the closest or easiest chance.",
    "Track points as a team tally across the game, celebrating both safe close-range shots and brave higher-value attempts.",
    "Rotate defenders regularly so different players get to test different shooting spots under pressure.",
    "Keep the tone playful — the point values are there to encourage variety, not to punish players for choosing a simpler shot."
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
  "inclusion": "Reduce the number of spots or move them closer to the goal for students building confidence; the five-spot idea can scale down to three for a simpler version.",
  "skillBreakdown": [
   {
    "step": "Reset your stance for each new shooting spot or angle.",
    "why": "Reusing the same angle from a different position throws off your aim."
   },
   {
    "step": "Pick a specific target area before shooting.",
    "why": "A specific aim is more accurate than a general one."
   },
   {
    "step": "Adjust technique slightly for distance or angle.",
    "why": "Small adjustments keep the shot consistent from different spots."
   }
  ]
 },
 {
  "n": 9,
  "block": 2,
  "title": "Combo Play",
  "focus": "Combining dribble → pass → shoot",
  "walt": "We are learning to combine dribbling, passing, and shooting smoothly in one sequence.",
  "wilf": [
   "I can dribble into space, then choose to pass or shoot based on what's open",
   "I can move from a dribble into a shot without stopping awkwardly"
  ],
  "nzc": "Strand B · Thinking",
  "value": "Aroha",
  "valueText": "Understanding how your individual skills (dribble, pass, shoot) fit together with your team's play for a shared outcome.",
  "equipment": "Sticks, balls, small goals/cone goals, cones, bibs",
  "safety": "Keep games small-sided (3v3 max) so the combined sequence comes thick and fast without overcrowding; push shots only",
  "games": [
   {
    "name": "Dribble-Pass-Shoot Drill",
    "desc": "Player dribbles toward the goal, then either passes to a moving teammate or pulls up for a shot, all in one continuous sequence, walked through slowly first.",
    "coach": "Each part flows into the next — don't pause awkwardly between the dribble and your decision",
    "easier": "Slower pace, more time between parts",
    "harder": "Faster pace, less time",
    "chaos": "Random constraint calls",
    "setup": "Small groups of 3, a small goal or cone goal at one end, cones marking a dribbling channel roughly 10m long leading toward the goal, one stick and ball per group.",
    "howTo": [
     "Walk the sequence through slowly first: dribble forward, then either pass to a moving teammate or pull up for a shot, all as one continuous action.",
     "The ball-carrier dribbles down the channel while a teammate moves to offer a passing option near the goal.",
     "Coach the key message: 'each part flows into the next — don't pause awkwardly between the dribble and your decision.'",
     "The ball-carrier decides in the moment whether to pass to the moving teammate or shoot themselves, based on what's open.",
     "For 'easier', slow the pace with more time between parts; for 'harder', speed the whole sequence up with less time to decide.",
     "Rotate roles after each attempt so everyone practises the ball-carrier and support roles."
    ]
   },
   {
    "name": "2v1 Combo Challenge",
    "desc": "Two attackers against one defender — the ball-carrier must combine a dribble, and then a pass or shot, to beat the defender's numbers disadvantage.",
    "coach": "If the shot isn't on, the extra pass usually is — read it quickly",
    "easier": "Wider grid, slower defender",
    "harder": "Narrower grid, faster defender",
    "chaos": "Mild opposition + decision-making",
    "setup": "Small grids roughly 12m x 10m with a small goal or cone goal at one end, groups of three (two attackers, one defender), one stick and ball per group.",
    "howTo": [
     "Explain the numbers advantage: two attackers face one defender and must use the extra player to create a scoring chance.",
     "The two attackers start with the ball and combine a dribble, then a pass or shot, to beat the defender's numbers disadvantage.",
     "Coach the key message: 'if the shot isn't on, the extra pass usually is — read it quickly.'",
     "The defender applies fair, sticks-off pressure, trying to block the shot or force a mistake without fouling.",
     "For 'easier', use a wider grid with a slower defender; for 'harder', narrow the grid and speed up the defender.",
     "Rotate the defender role regularly so everyone experiences defending against a numbers disadvantage."
    ]
   },
   {
    "name": "Continuous Combo Game",
    "desc": "Small-sided game where every scoring attempt must be preceded by a visible dribble-then-decision sequence, rewarding whichever team keeps combining the skills successfully.",
    "coach": "Always be thinking one step ahead — dribble, then what's my best option?",
    "easier": "Bigger grid, more time",
    "harder": "Smaller grid, faster decisions",
    "chaos": "Beat the clock, scoring streaks",
    "setup": "Small-sided area with a small goal or cone goal, groups of 3v3 or 4v4, sticks and one ball per group, bibs to distinguish teams.",
    "howTo": [
     "Explain the rule: every scoring attempt must be preceded by a visible dribble-then-decision sequence, not just an immediate pass or shot.",
     "Play small-sided hockey where the ball-carrier must show a clear dribble before choosing to pass or shoot.",
     "Coach the key message: 'always be thinking one step ahead — dribble, then what's my best option?'",
     "If a team scores without a visible dribble beforehand, the coach can simply note it and remind them of the rule for next time rather than disallowing the goal.",
     "For 'easier', use a bigger grid with more time; for 'harder', shrink the grid and speed up decision-making.",
     "Track scoring streaks or beat-the-clock challenges to keep the pace lively."
    ]
   }
  ],
  "big": {
   "name": "4v3 Combination Hockey",
   "desc": "Attacking team has a numbers advantage (4v3); success depends on combining today's three skills — dribbling to create an opening, then reading whether to pass or shoot cleanly.",
   "setup": "Small-sided area with a small goal or cone goal, groups of 4v3 (attackers have the numbers advantage), sticks and one ball per group, bibs to distinguish teams.",
   "howTo": [
    "Explain the numbers advantage: the attacking team has one extra player and should use today's three skills — dribble, pass, shoot — to exploit it.",
    "Play with the attacking team building possession, dribbling to create an opening before deciding whether to pass or shoot.",
    "Coach the key message: 'always be thinking one step ahead — dribble, then what's my best option?'",
    "Rotate which team has the extra player every few minutes so everyone experiences attacking with and without the advantage.",
    "Coach highlights clean combination sequences out loud as they happen, especially ones that read the extra player well.",
    "Keep scoring simple so the focus stays on the quality of the combination rather than just the final tally."
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
    "step": "Keep your head up throughout to read what's open.",
    "why": "The sequence has to respond to the real game situation."
   },
   {
    "step": "Decide early — pass or shoot — so your body can prepare.",
    "why": "Late decisions cause rushed, poor technique."
   },
   {
    "step": "Keep the ball under close control between each phase.",
    "why": "Losing control mid-sequence gives defenders an easy chance to intervene."
   }
  ]
 },
 {
  "n": 10,
  "block": 2,
  "title": "Reverse Stick Escape",
  "focus": "Footwork & stickwork — using the reverse stick to escape pressure",
  "walt": "We are learning to rotate the stick to play the ball on our reverse side to protect it and find an escape option when pressured.",
  "wilf": [
   "I can rotate my wrists to present the flat face of the stick on my reverse (open) side",
   "I can find a passing option while controlling the ball on the reverse stick under pressure"
  ],
  "nzc": "Strand B · Managing self, Thinking",
  "value": "Mōhio",
  "valueText": "Looking after your opponent by defending fairly and safely, and understanding your own stickwork choices when under pressure.",
  "equipment": "Sticks, balls, cones, bibs",
  "safety": "No contact — sticks-off defending only; stay upright and controlled while practising reverse stick control",
  "games": [
   {
    "name": "Reverse Stick Rolls",
    "desc": "Students dribble in a straight line and practise rolling the ball onto the reverse side of the stick and back again, scanning for an imaginary passing option each time.",
    "coach": "Rotate your wrists, not your whole body, to find the reverse side",
    "easier": "Slower, walking pace",
    "harder": "Full jogging pace, added direction changes",
    "chaos": "Random constraint calls",
    "setup": "Each student with their own stick and ball, spread out in a straight-line dribbling lane roughly 10m long, cones marking the lane edges.",
    "howTo": [
     "Demonstrate rolling the ball onto the reverse side of the stick and back again while dribbling forward in a straight line.",
     "Students dribble down the lane, practising rolling the ball to the reverse side and back, scanning as if looking for an imaginary passing option each time.",
     "Coach the key message: 'rotate your wrists, not your whole body, to find the reverse side.'",
     "Watch that the whole body isn't twisting awkwardly — the roll should come mainly from the wrists and stick angle.",
     "For 'easier', dribble at a slow walking pace; for 'harder', dribble at a full jogging pace and add direction changes.",
     "Rotate students through continuously, sending the next student in as soon as the lane ahead is clear."
    ]
   },
   {
    "name": "Pressure Reverse",
    "desc": "A shadow defender applies light, sticks-off pressure while the dribbler uses the reverse stick to shield the ball and find a passing lane away from the defender.",
    "coach": "Roll the ball onto your reverse side away from the defender's pressure",
    "easier": "Defender further away",
    "harder": "Defender allowed to move around the dribbler",
    "chaos": "Added defender/pressure",
    "setup": "Small grids roughly 8m x 8m, pairs (one dribbler, one shadow defender), one stick and ball per pair.",
    "howTo": [
     "Explain the roles: the dribbler uses the reverse stick to shield the ball while a shadow defender applies light, sticks-off pressure nearby.",
     "The dribbler moves around the grid, rolling the ball onto the reverse side away from the defender's pressure whenever they get close.",
     "Coach the key message: 'roll the ball onto your reverse side away from the defender's pressure.'",
     "The shadow defender stays close without reaching for the ball, simply testing the dribbler's ability to shield and adjust.",
     "For 'easier', the defender stays further away; for 'harder', the defender is allowed to move around the dribbler more actively.",
     "Swap roles every 1-2 minutes so both partners practise dribbling and applying pressure."
    ]
   },
   {
    "name": "Trapped Corner Escape",
    "desc": "Player receives the ball in a tight corner grid with a defender nearby and must use the reverse stick to find any legal passing option to escape the pressure, racing the clock.",
    "coach": "Stay calm — good stickwork buys you time to find an option",
    "easier": "Bigger corner grid, slower defender",
    "harder": "Tighter corner, quicker defender",
    "chaos": "Beat the clock, mild opposition + decision-making",
    "setup": "A tight corner grid roughly 4m x 4m marked with cones near a larger open area, pairs (one attacker, one defender), one stick and ball per pair, a stopwatch or the teacher's own count.",
    "howTo": [
     "Explain the scenario: the attacker receives the ball in a tight corner with a defender nearby and must escape using the reverse stick.",
     "Feed the ball to the attacker in the corner while the defender applies light, sticks-off pressure from a fixed starting distance.",
     "Coach the key message: 'stay calm — good stickwork buys you time to find an option.'",
     "The attacker races against the clock to use the reverse stick and find any legal passing option or dribble out of the corner.",
     "For 'easier', use a bigger corner grid with a slower defender; for 'harder', tighten the corner and speed up the defender.",
     "Swap attacker and defender roles after each attempt so everyone practises both sides."
    ]
   }
  ],
  "big": {
   "name": "Reverse Stick Under Pressure Hockey",
   "desc": "4v4 — every player who receives the ball under pressure from a nearby defender is encouraged to use reverse stick control at least once before passing or shooting, reinforcing composed stickwork under real pressure.",
   "setup": "Small-sided area, groups of 4v4, sticks and one ball per group, bibs to distinguish teams, no goals required though small goals can be added.",
   "howTo": [
    "Explain the encouraged behaviour: any player who receives the ball under pressure from a nearby defender should try using reverse stick control at least once before passing or shooting.",
    "Play small-sided hockey as normal, with defenders applying fair, sticks-off pressure on the ball-carrier.",
    "Coach highlights moments where a player uses the reverse stick well under pressure, calling it out as it happens.",
    "Coach the key message throughout: 'stay calm — good stickwork buys you time to find an option.'",
    "Rotate which players are under the most defensive attention so everyone gets chances to practise the skill live.",
    "Keep the tone encouraging — the goal is composed stickwork under pressure, not punishing mistakes when it doesn't come off."
   ]
  },
  "discussion": [
   "What made using the reverse stick under pressure tricky today?",
   "How did good stickwork buy you time to find an option?",
   "What's the difference between staying calm with the ball and panicking under pressure?"
  ],
  "lookfors": [
   "Rotates the wrists smoothly to find the reverse side",
   "Shields the ball with body positioning while using reverse stick control",
   "Finds a legal option (pass or dribble) rather than panicking"
  ],
  "inclusion": "Slow the whole sequence to walking pace and use a visible cone as the defender's marker for students still building the reverse-stick-under-pressure concept.",
  "skillBreakdown": [
   {
    "step": "Rotate the stick face to the reverse side smoothly.",
    "why": "This is a legal way to control the ball on your non-natural side."
   },
   {
    "step": "Keep the ball close during the rotation.",
    "why": "A wide reverse-stick touch is easily intercepted."
   },
   {
    "step": "Look for your next option as you complete the escape.",
    "why": "The escape should lead somewhere, not just delay pressure."
   }
  ]
 },
 {
  "n": 11,
  "block": 3,
  "title": "Jab Ready",
  "focus": "Defending — stance & staying goal-side",
  "walt": "We are learning a strong, balanced defensive stance and how to stay goal-side of an attacker.",
  "wilf": [
   "I can hold a low, balanced defensive stance with my stick down and active",
   "I can slide my feet to stay in front of a moving attacker, without crossing my feet"
  ],
  "nzc": "Strand B · Managing self, Relating to others",
  "value": "Manaaki",
  "valueText": "Using your skills fairly to give the attacker a genuine, respectful contest without crowding or contacting them.",
  "equipment": "Sticks, balls, cones, bibs",
  "safety": "No contact and no swinging at the ball — sticks-off defending, stick's-length distance maintained until a fair tackle attempt",
  "games": [
   {
    "name": "Stance Check",
    "desc": "Students practise the low defensive stance (knees bent, feet shoulder-width, stick down and active in front of the body) while a partner checks their form, holding the stance for short bursts.",
    "coach": "Stay low with your weight on the balls of your feet, stick ready to jab",
    "easier": "Shorter holds, more rest",
    "harder": "Longer holds, added movement",
    "chaos": "Random constraint calls",
    "setup": "Pairs spread out in an open space, no ball needed for this game, enough room for each pair to hold the stance without bumping neighbouring pairs.",
    "howTo": [
     "Demonstrate the low defensive stance: knees bent, feet shoulder-width apart, stick down and active in front of the body.",
     "One partner gets into the defensive stance while the other checks their form against the demonstrated model.",
     "Coach the key message: 'stay low with your weight on the balls of your feet, stick ready to jab.'",
     "The checking partner gives simple feedback — knees bent enough, stick down, weight forward — before the pair swap roles.",
     "For 'easier', hold the stance for shorter bursts with more rest; for 'harder', hold it longer and add small movement while maintaining the stance.",
     "Rotate through several holds so both partners get repeated checks on their form."
    ]
   },
   {
    "name": "Slide & Stay",
    "desc": "An attacker moves side to side (no ball) along a line while the defender slides their feet to stay directly in front, stick down and active, without crossing their feet or standing up out of the stance.",
    "coach": "Slide, don't cross your feet — a crossed step is a moment you can be beaten",
    "easier": "Slower attacker movement",
    "harder": "Faster, less predictable movement",
    "chaos": "Mild opposition + decision-making",
    "setup": "Pairs along a marked line roughly 6-8m long, no ball needed, cones marking the ends of the line.",
    "howTo": [
     "Explain the roles: an attacker moves side to side along the line (no ball) while the defender slides to stay directly in front.",
     "The attacker moves side to side unpredictably along the line while the defender mirrors them using sliding footwork, staying low.",
     "Coach the key message: 'slide, don't cross your feet — a crossed step is a moment you can be beaten.'",
     "Watch for defenders standing up out of the stance or crossing their feet, and gently correct as this happens.",
     "For 'easier', the attacker moves more slowly and predictably; for 'harder', the attacker moves faster and less predictably.",
     "Swap roles every 30-45 seconds so both partners practise the defensive slide."
    ]
   },
   {
    "name": "1v1 Stay in Front",
    "desc": "Attacker dribbles in a small grid trying to get past; defender's only job is to stay in front using good stance and sliding footwork (no tackling yet).",
    "coach": "Focus on your feet and stance, not on lunging for the ball",
    "easier": "Bigger grid, slower attacker",
    "harder": "Smaller grid, quicker attacker",
    "chaos": "Mild opposition + decision-making",
    "setup": "Small grids roughly 8m x 8m, pairs (one attacker, one defender), one stick and ball per pair.",
    "howTo": [
     "Explain the defender's only job for this game: stay in front of the attacker using good stance and sliding footwork — no tackling attempts yet.",
     "The attacker dribbles freely around the grid trying to get past the defender, while the defender focuses purely on positioning.",
     "Coach the key message: 'focus on your feet and stance, not on lunging for the ball.'",
     "If the defender is beaten, they simply reset their stance and get back in front rather than chasing or lunging.",
     "For 'easier', use a bigger grid with a slower attacker; for 'harder', shrink the grid and speed up the attacker.",
     "Swap roles every 1-2 minutes so both partners practise attacking and defending positioning."
    ]
   }
  ],
  "big": {
   "name": "Stance & Slide Hockey",
   "desc": "4v4 — coach highlights good defensive stance and sliding footwork in play ('great stance!'), reinforcing that staying goal-side fairly is as valuable as any tackle attempt.",
   "setup": "Small-sided area, groups of 4v4, sticks and one ball per group, bibs to distinguish teams, no goals required though small goals can be added.",
   "howTo": [
    "Explain the coaching focus for this game: good defensive stance and sliding footwork are valued just as highly as a successful tackle.",
    "Play small-sided hockey as normal, with defenders applying fair, sticks-off pressure while staying goal-side of their attacker.",
    "Coach calls out and praises good stance and sliding footwork specifically, using phrases like 'great stance!' as they happen.",
    "Coach the key message throughout: staying goal-side fairly is as valuable as any tackle attempt.",
    "Rotate defenders regularly so everyone gets practice applying the stance and footwork from today's games in a live setting.",
    "Keep the tone encouraging so defenders feel confident prioritising positioning over risky lunges."
   ]
  },
  "discussion": [
   "What did a low, balanced stance help you do as a defender today?",
   "Why does sliding (rather than crossing your feet) matter when staying in front?",
   "What's the difference between defending fairly and defending too aggressively?"
  ],
  "lookfors": [
   "Holds a low, balanced stance with the stick down and active",
   "Slides feet without crossing them",
   "Stays a stick's length away, no swinging or reaching"
  ],
  "inclusion": "Allow defenders to start a step further back for students still building confidence with the stance and sliding footwork combination.",
  "skillBreakdown": [
   {
    "step": "Stay low, balanced, stick down and ready.",
    "why": "A ready stance lets you react instantly to the attacker's next move."
   },
   {
    "step": "Position yourself goal-side of the attacker.",
    "why": "This cuts off their most direct route toward goal."
   },
   {
    "step": "Move your feet to stay in position rather than lunging with the stick.",
    "why": "Lunging can foul and is easily beaten by a simple change of direction."
   }
  ]
 },
 {
  "n": 12,
  "block": 3,
  "title": "Block Tackle",
  "focus": "Defending — timing a block tackle",
  "walt": "We are learning to time a block tackle so we win the ball cleanly and fairly.",
  "wilf": [
   "I can get my stick down early to block the ball as it comes toward me",
   "I can make a fair, controlled tackle without swinging at the ball"
  ],
  "nzc": "Strand B · Managing self",
  "value": "Pānga",
  "valueText": "Making a positive impact through fair play — a well-timed, fair tackle is good for the game; a reckless one isn't.",
  "equipment": "Sticks, balls, cones",
  "safety": "Sticks below knee height at all times during tackling practice; teacher demonstrates and checks technique before live 1v1 play",
  "games": [
   {
    "name": "Block Tackle Practice",
    "desc": "Attacker dribbles slowly in a straight line; defender practises getting their stick down early and square to block the ball cleanly, at controlled pace.",
    "coach": "Get your stick down and still before the ball arrives, don't swing at it",
    "easier": "Very slow, predictable dribbling",
    "harder": "Attacker adds occasional change of pace",
    "chaos": "Random constraint calls",
    "setup": "Pairs spread across a grid roughly 10m x 10m, one stick and ball per pair, teacher demonstrating technique to the whole class before pairs begin.",
    "howTo": [
     "Demonstrate the block tackle: getting the stick down early and square to the ball, staying still and controlled rather than swinging.",
     "The attacker dribbles slowly in a straight line while the defender times their approach to get the stick down and square to block the ball cleanly.",
     "Coach the key message: 'get your stick down and still before the ball arrives, don't swing at it.'",
     "Keep the pace controlled throughout — this is about timing and technique, not winning the ball at speed.",
     "For 'easier', the attacker dribbles very slowly and predictably; for 'harder', the attacker adds occasional changes of pace.",
     "Swap roles every few attempts so both partners practise the block tackle and being tackled against."
    ]
   },
   {
    "name": "Win It Clean 1v1",
    "desc": "Live 1v1 in a small grid; defender scores a point only for a clean, controlled block tackle (not just any contact).",
    "coach": "Patience — wait for the right moment rather than diving in early",
    "easier": "Attacker limited to straight-line dribbling",
    "harder": "Attacker free to use full range of moves from earlier lessons",
    "chaos": "Scoring streaks (clean wins only)",
    "setup": "Small grids roughly 8m x 8m, pairs (one attacker, one defender), one stick and ball per pair.",
    "howTo": [
     "Explain the scoring rule: the defender only scores a point for a clean, controlled block tackle — not just any contact with the ball.",
     "The attacker dribbles live inside the grid while the defender looks for the right moment to attempt a block tackle.",
     "Coach the key message: 'patience — wait for the right moment rather than diving in early.'",
     "If the defender wins the ball cleanly, that's a point and the round restarts with the attacker back in possession.",
     "For 'easier', the attacker is limited to straight-line dribbling; for 'harder', the attacker can use the full range of moves practised in earlier lessons.",
     "Swap roles every few rounds and track clean wins only as the scoring streak."
    ]
   },
   {
    "name": "Tackle & Transition",
    "desc": "As above, but the moment the defender wins the ball cleanly, they become the attacker and must dribble to a target — rewarding a good tackle with an immediate attacking opportunity.",
    "coach": "Be ready to transition mentally the instant you win the ball",
    "easier": "Target closer",
    "harder": "Target further, second defender added after transition",
    "chaos": "Role rotation",
    "setup": "Small grids roughly 8m x 8m with a target cone or small zone marked at one end, pairs (one attacker, one defender), one stick and ball per pair.",
    "howTo": [
     "Explain the twist: the moment the defender wins the ball cleanly, they instantly become the attacker and must dribble to the target.",
     "Play begins with the original attacker dribbling while the defender looks to win the ball with a clean block tackle.",
     "Coach the key message: 'be ready to transition mentally the instant you win the ball.'",
     "As soon as the ball is won cleanly, the roles flip immediately and the new attacker dribbles toward the target as fast as they safely can.",
     "For 'easier', place the target closer; for 'harder', place the target further away and add a second defender after the transition.",
     "Rotate starting roles each round so everyone practises both defending and the quick transition to attack."
    ]
   }
  ],
  "big": {
   "name": "Controlled Approach Hockey",
   "desc": "4v4; coach specifically praises well-timed, clean block tackles, reinforcing timing and fairness together.",
   "setup": "Small-sided area, groups of 4v4, sticks and one ball per group, bibs to distinguish teams, no goals required though small goals can be added.",
   "howTo": [
    "Explain the coaching focus for this game: well-timed, clean block tackles are specifically praised, reinforcing both timing and fairness.",
    "Play small-sided hockey as normal, with defenders looking for the right moment to attempt a fair block tackle.",
    "Coach calls out and praises clean block tackles as they happen, being specific about the timing that made them successful.",
    "Coach the key message throughout: 'patience — wait for the right moment rather than diving in early.'",
    "Rotate defenders regularly so everyone gets live practice applying the block tackle timing from today's games.",
    "Gently remind players about controlled, sticks-below-knee-height tackling if the pace of the game starts to rush technique."
   ]
  },
  "discussion": [
   "What did you notice about the right moment to try a block tackle?",
   "How did you keep your tackling fair and controlled?",
   "What happened when you tackled too early or too late?"
  ],
  "lookfors": [
   "Gets the stick down early and square, not swinging",
   "Attempts are controlled and below knee height",
   "Shows patience (waits for the right moment) rather than constant attempts"
  ],
  "inclusion": "Keep early practice at walking/slow pace for all students until technique and fairness are consistent, regardless of overall confidence level.",
  "skillBreakdown": [
   {
    "step": "Approach with a low, balanced stance, stick down.",
    "why": "A ready position lets you react to the exact moment the ball is loose."
   },
   {
    "step": "Time the tackle for when the ball is slightly away from close control.",
    "why": "Tackling when the ball is tucked in tight usually fouls the attacker."
   },
   {
    "step": "Keep the tackle controlled, not a wild swing.",
    "why": "A controlled block tackle is safer and more likely to actually win the ball."
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
  "equipment": "Sticks, balls, cones, bibs",
  "safety": "Keep cutting lanes clear of other groups when running through shared space",
  "games": [
   {
    "name": "Call & Cut",
    "desc": "A passer calls 'now!' as the cue for their partner to cut sharply into space and receive the pass, building the timing connection between passer and cutter.",
    "coach": "Cut hard on the call, not before or after",
    "easier": "Slower pace, more obvious timing",
    "harder": "Faster pace, subtler timing",
    "chaos": "Random constraint calls",
    "setup": "Pairs spread across a grid roughly 12m x 10m, one stick and ball per pair, enough space for a cutting run without crossing another pair's path.",
    "howTo": [
     "Explain the roles: a passer holds the ball while their partner waits, ready to cut into space on the passer's call.",
     "The passer calls 'now!' as the exact cue for their partner to cut sharply into open space and receive the pass.",
     "Coach the key message: 'cut hard on the call, not before or after.'",
     "The passer delivers the ball into the space the cutter is running into, timing the release with the cut.",
     "For 'easier', slow the pace and make the timing more obvious; for 'harder', speed things up with subtler timing cues.",
     "Swap roles every few reps so both partners practise cutting and passing."
    ]
   },
   {
    "name": "Read the Gap Cut",
    "desc": "Cutter watches their defender and cuts into space the moment the defender is out of position or looking away, without a verbal cue.",
    "coach": "Watch your defender's feet and weight, not the ball, to time your cut",
    "easier": "Defender moves predictably",
    "harder": "Defender moves unpredictably",
    "chaos": "Mild opposition + decision-making",
    "setup": "Small grids roughly 10m x 10m, pairs (one cutter, one defender) plus a passer, sticks and one ball per group, cones marking the grid.",
    "howTo": [
     "Explain the challenge: the cutter must watch their defender and cut into space the moment the defender is out of position, without any verbal cue.",
     "The defender marks the cutter loosely while the passer waits with the ball, ready to find the cutter once they move.",
     "Coach the key message: 'watch your defender's feet and weight, not the ball, to time your cut.'",
     "The cutter reads the defender's positioning and bursts into space the instant an opening appears, and the passer delivers the ball.",
     "For 'easier', the defender moves predictably; for 'harder', the defender moves unpredictably to make the read harder.",
     "Rotate roles regularly so everyone practises cutting, defending, and passing."
    ]
   },
   {
    "name": "Triangle Cut Relay",
    "desc": "Groups of 3 rotate cutting into space to receive a pass, then immediately becoming the next passer, racing other triangles for clean completions.",
    "coach": "Prepare your cut early — decide your target space before you move",
    "easier": "Slower pace",
    "harder": "Faster pace, timed race",
    "chaos": "Beat the clock, head-to-head mirror",
    "setup": "Groups of 3 forming a rough triangle roughly 8m per side, one stick and ball per group, a neighbouring triangle group for racing, a stopwatch or the teacher's own count.",
    "howTo": [
     "Explain the pattern: one player cuts into space to receive a pass, then immediately becomes the next passer for the following cut.",
     "The passer sends the ball to a cutting teammate, who receives it and quickly looks to pass to the next cutter in the triangle.",
     "Coach the key message: 'prepare your cut early — decide your target space before you move.'",
     "The group keeps the pattern rotating continuously, racing another triangle group for the most clean completions in a set time.",
     "For 'easier', slow the pace down; for 'harder', speed the pace up and time it as a race.",
     "Reset and repeat for several rounds, celebrating clean completions rather than just speed."
    ]
   }
  ],
  "big": {
   "name": "Timed Cut Hockey",
   "desc": "4v4 with defence — coach highlights well-timed cuts in play ('great cut!'), reinforcing that arriving in space at the right moment is as valuable as the pass itself.",
   "setup": "Small-sided area, groups of 4v4 with defenders, sticks and one ball per group, bibs to distinguish teams, small goals optional.",
   "howTo": [
    "Explain the coaching focus for this game: well-timed cuts into space are praised just as highly as the pass itself.",
    "Play small-sided hockey as normal, with off-the-ball players encouraged to cut into space when a gap appears.",
    "Coach calls out and praises well-timed cuts as they happen, using phrases like 'great cut!' to reinforce the behaviour.",
    "Coach the key message throughout: 'watch your defender's feet and weight, not the ball, to time your cut.'",
    "Rotate positions regularly so everyone gets chances to practise cutting into space during live play.",
    "Keep the tone encouraging so players feel confident making runs even if the pass doesn't always arrive."
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
    "step": "Read where the defender's attention is before cutting.",
    "why": "Cutting when they're distracted creates the most effective separation."
   },
   {
    "step": "Cut decisively with a change of pace.",
    "why": "A sharp cut is much harder to track than a gentle jog."
   },
   {
    "step": "Time the cut to match when the ball can actually be played to you.",
    "why": "Cutting too early or late wastes the opportunity."
   }
  ]
 },
 {
  "n": 14,
  "block": 3,
  "title": "Dummy Run",
  "focus": "Attacking — decoy runs to create space for a teammate",
  "walt": "We are learning to make an unmarked run away from the ball to draw a defender away and create space for a teammate.",
  "wilf": [
   "I can make a committed run that pulls my own defender out of position",
   "I can recognise when a teammate's dummy run has created space for me"
  ],
  "nzc": "Strand B & C · Relating to others, Thinking",
  "value": "Mōhio",
  "valueText": "Understanding how your individual role (decoy or receiver) fits into a shared team outcome.",
  "equipment": "Sticks, balls, cones, bibs",
  "safety": "Keep dummy runs within a marked area so groups don't collide with each other",
  "games": [
   {
    "name": "Committed Decoy",
    "desc": "One student makes a full-speed run into a space away from the ball (a 'dummy run'), while a partner notices the space that opens up and moves into it instead.",
    "coach": "Commit fully to the decoy run — a half-hearted run won't pull a defender",
    "easier": "Bigger space, walked-through first",
    "harder": "Tighter space, full speed",
    "chaos": "Random constraint calls",
    "setup": "Pairs spread across a grid roughly 12m x 10m, one stick and ball per pair, enough space for a full-speed run without colliding with neighbouring pairs.",
    "howTo": [
     "Explain the roles: one player makes a full-speed run into space away from the ball (a decoy run), while the partner notices the space that opens up.",
     "The decoy player sprints hard into an open area away from the ball, drawing attention even though they won't receive a pass.",
     "Coach the key message: 'commit fully to the decoy run — a half-hearted run won't pull a defender.'",
     "The partner watches where the space opens up because of the decoy and moves into that space themselves.",
     "For 'easier', use a bigger space and walk through the pattern first; for 'harder', tighten the space and run at full speed.",
     "Swap roles every few reps so both partners practise making the decoy run and reading the space it creates."
    ]
   },
   {
    "name": "Decoy & Receive Combo",
    "desc": "In trios, one player makes a dummy run shadowed by a light-touch defender; a teammate reads the space created and moves in to receive a pass.",
    "coach": "Receiver, wait for the decoy to commit before you move",
    "easier": "Defender reacts slowly",
    "harder": "Defender reacts quickly",
    "chaos": "Mild opposition + decision-making",
    "setup": "Trios spread across a grid roughly 12m x 10m, one stick and ball per group, a light-touch defender shadowing the decoy runner.",
    "howTo": [
     "Explain the three roles: a decoy runner, a receiving teammate, and a light-touch shadow defender who follows the decoy without intercepting.",
     "The decoy runner makes a committed run into space, shadowed loosely by the defender.",
     "Coach the key message: 'receiver, wait for the decoy to commit before you move.'",
     "Once the decoy has drawn the defender's attention, the receiving teammate reads the space created and moves in to receive a pass from the ball-holder.",
     "For 'easier', the defender reacts slowly to the decoy; for 'harder', the defender reacts quickly, making the timing tighter.",
     "Rotate all three roles regularly so everyone practises decoying, receiving, and defending."
    ]
   },
   {
    "name": "Role Rotation Game",
    "desc": "Small-sided game where players rotate roles (decoy, receiver, defender) every couple of minutes, so everyone practises each part of the dummy-run combination.",
    "coach": "Communicate with your teammate about who's making the run",
    "easier": "Longer periods per role",
    "harder": "Shorter periods, faster rotation",
    "chaos": "Role rotation",
    "setup": "Small-sided area roughly 15m x 12m, small groups with defined roles (decoy, receiver, defender) rotating every couple of minutes, sticks and one ball per group.",
    "howTo": [
     "Explain that the small-sided game will run with players rotating through decoy, receiver, and defender roles every couple of minutes.",
     "Play the small-sided game with players consciously practising their current role — decoys committing to runs, receivers reading space, defenders tracking movement.",
     "Coach the key message: 'communicate with your teammate about who's making the run.'",
     "Call time every couple of minutes and rotate roles so everyone experiences each part of the dummy-run combination.",
     "For 'easier', use longer periods per role with more time to think; for 'harder', shorten the periods for faster rotation and decision-making.",
     "Keep encouraging communication between decoy and receiver so the combination feels planned rather than accidental."
    ]
   }
  ],
  "big": {
   "name": "Dummy Run Hockey",
   "desc": "4v4 or 5v5 — teams are encouraged to use at least one committed dummy run per possession to help a teammate get free, with the coach highlighting successful, well-timed decoy runs.",
   "setup": "Small-sided area, groups of 4v4 or 5v5, sticks and one ball per group, bibs to distinguish teams, small goals optional.",
   "howTo": [
    "Explain the encouraged behaviour: teams should try to use at least one committed dummy run per possession to help a teammate get free.",
    "Play small-sided hockey as normal, with off-the-ball players looking for chances to make a decoy run that opens space for a teammate.",
    "Coach highlights successful, well-timed decoy runs out loud as they happen, even when the decoy player themselves doesn't receive the ball.",
    "Coach the key message throughout: 'commit fully to the decoy run — a half-hearted run won't pull a defender.'",
    "Rotate positions regularly so everyone gets chances to practise making and reading decoy runs in live play.",
    "Keep the tone encouraging so players feel confident making unselfish runs that benefit a teammate rather than themselves."
   ]
  },
  "discussion": [
   "What made a dummy run effective (or not) today?",
   "How did noticing a teammate's run help you find space?",
   "Why do you think a dummy run needs to be committed and convincing to work?"
  ],
  "lookfors": [
   "Commits fully to the decoy run rather than jogging half-heartedly",
   "Recognises and moves into space created by a teammate's run",
   "Communicates with the teammate about the run"
  ],
  "inclusion": "Practise the decoy runner's role first without any defender at all, so students build confidence with the committed running before adding pressure.",
  "skillBreakdown": [
   {
    "step": "Commit fully to your decoy run, even without receiving the ball.",
    "why": "A half-hearted decoy doesn't draw defenders away convincingly."
   },
   {
    "step": "Run into space that genuinely occupies a defender.",
    "why": "The decoy only works if it actually pulls a defender out of position."
   },
   {
    "step": "Communicate with the ball carrier about the decoy.",
    "why": "Helps the timing and understanding of the whole attacking move."
   }
  ]
 },
 {
  "n": 15,
  "block": 3,
  "title": "Second Ball",
  "focus": "Loose-ball basics (reacting & positioning near the circle)",
  "walt": "We are learning to react quickly and position ourselves to win the 'second ball' after a shot or save.",
  "wilf": [
   "I can move toward the goal as a shot is taken, ready to react to a rebound",
   "I can position myself between my opponent and the ball before going for a loose ball"
  ],
  "nzc": "Strand B · Managing self",
  "value": "Manaaki",
  "valueText": "Contesting a loose ball fairly and safely — using your body position and stickwork, not pushing or swinging, to compete for the ball.",
  "equipment": "Sticks, balls, small goals/cone goals, cones",
  "safety": "No pushing, swinging, or dangerous play when contesting a loose ball — body/stick contact must be controlled and balanced, not aggressive; sticks below knee height at all times",
  "games": [
   {
    "name": "Anticipate & React",
    "desc": "Facing a partner, students practise reacting quickly to a rolled ball released without warning, positioning their body and stick to get there first in a controlled way.",
    "coach": "Watch the ball, react early, and get there under control — don't lunge",
    "easier": "Slower, more predictable releases",
    "harder": "Quicker, less predictable releases",
    "chaos": "Random constraint calls",
    "setup": "Pairs facing each other about 4-5m apart, one stick and ball per pair, enough space to move in any direction to collect the ball.",
    "howTo": [
     "Explain the challenge: one partner will roll the ball without warning, and the other must react quickly and get there first in a controlled way.",
     "The rolling partner releases the ball toward their partner at an unpredictable moment, without a verbal countdown.",
     "Coach the key message: 'watch the ball, react early, and get there under control — don't lunge.'",
     "The receiving partner reacts immediately, moving their body and stick to collect the ball cleanly and under control.",
     "For 'easier', use slower, more predictable releases; for 'harder', use quicker, less predictable releases.",
     "Swap roles every 5-6 releases so both partners practise reacting and releasing."
    ]
   },
   {
    "name": "Rebound & Collect",
    "desc": "A partner pushes the ball off a wall or rebound board; the student must react and move to collect the loose ball ahead of an imaginary or light-touch opponent.",
    "coach": "React the instant the ball rebounds — don't wait to see where it goes first",
    "easier": "Slower rebounds, more space",
    "harder": "Quicker rebounds, tighter space",
    "chaos": "Mild opposition + decision-making",
    "setup": "Pairs near a wall or rebound board, one stick and ball per pair, enough space in front of the wall to move and collect the rebound.",
    "howTo": [
     "Explain the setup: one partner pushes the ball off the wall or rebound board while the other reacts to collect the loose rebound.",
     "The passing partner pushes the ball firmly at the wall so it rebounds back into open space at an unpredictable angle.",
     "Coach the key message: 'react the instant the ball rebounds — don't wait to see where it goes first.'",
     "The collecting partner moves quickly to get to the loose ball ahead of an imaginary or light-touch opponent standing nearby.",
     "For 'easier', use slower rebounds with more space; for 'harder', use quicker rebounds in a tighter space.",
     "Swap roles every few attempts so both partners practise pushing and reacting."
    ]
   },
   {
    "name": "Loose Ball Rumble",
    "desc": "Small groups compete to win the most loose balls off a series of rolls or missed shots near the goal, tracked as a friendly team tally.",
    "coach": "Stay low and ready — don't stand up straight and lose your reaction time",
    "easier": "Fewer players competing for each loose ball",
    "harder": "More players, more contested balls",
    "chaos": "Scoring streaks, bonus objectives",
    "setup": "Small groups near a goal or target, a series of rolls or missed shots set up by the teacher or a rotating feeder, sticks for every player, a simple tally to track wins.",
    "howTo": [
     "Explain the challenge: the group competes to win the most loose balls off a series of rolls or missed shots near the goal.",
     "A feeder rolls or shoots a ball toward the goal area, and group members react to collect the loose ball ahead of the others.",
     "Coach the key message: 'stay low and ready — don't stand up straight and lose your reaction time.'",
     "Track a friendly team tally of who collects the most loose balls across the series of rolls.",
     "For 'easier', reduce the number of players competing for each loose ball; for 'harder', increase the number of players contesting each ball.",
     "Keep the physicality controlled and fair throughout — this is about reaction and positioning, not shoving."
    ]
   }
  ],
  "big": {
   "name": "Second Ball Hockey",
   "desc": "4v4 with small goals — every missed shot is a live loose-ball opportunity; players are coached explicitly to react and position first, reinforcing fair, safe positioning over raw scrambling.",
   "setup": "Small-sided area with small goals, groups of 4v4, sticks and one ball per group, bibs to distinguish teams.",
   "howTo": [
    "Explain the coaching focus: every missed shot creates a live loose-ball opportunity, and players are specifically coached to react and position first.",
    "Play small-sided hockey with small goals, encouraging shots and expecting rebounds to be contested fairly afterward.",
    "Coach calls out reminders to react and position early whenever a shot is missed, reinforcing the lesson's core message.",
    "Coach the key message throughout: 'stay low and ready — don't stand up straight and lose your reaction time.'",
    "Reinforce fair, safe positioning over raw scrambling — no pushing, swinging, or dangerous play when contesting the ball.",
    "Rotate defenders and attackers regularly so everyone practises reacting to loose balls in a live setting."
   ]
  },
  "discussion": [
   "What helped you react quickly to a loose ball today?",
   "Why is body positioning more useful than just reaching for the ball?",
   "What made a loose-ball contest feel fair and safe today?"
  ],
  "lookfors": [
   "Reacts quickly and moves early toward a loose ball",
   "Positions between the opponent and the ball before contesting it",
   "Stays low and controlled rather than lunging"
  ],
  "inclusion": "Practise the reaction/positioning habit without any contest first, so students build the habit before adding the scramble for a loose ball.",
  "skillBreakdown": [
   {
    "step": "React the instant the ball becomes loose.",
    "why": "The first player to react usually wins the ball."
   },
   {
    "step": "Get your body and stick into a strong, ready position near the circle.",
    "why": "Good positioning near goal creates more chances from loose-ball situations."
   },
   {
    "step": "Stay alert and anticipate rather than watching passively.",
    "why": "Anticipation beats reaction when the ball could go several ways."
   }
  ]
 },
 {
  "n": 16,
  "block": 4,
  "title": "Fast Break",
  "focus": "Fast break basics (outnumbering the defence)",
  "walt": "We are learning to recognise and use a fast break — moving the ball quickly up the field when we outnumber the defence.",
  "wilf": [
   "I can sprint into space immediately after my team gains the ball",
   "I can recognise when my team has more attackers than defenders and use the advantage"
  ],
  "nzc": "Strand B & C · Thinking, Participating & contributing",
  "value": "Pānga",
  "valueText": "Being patient with a team while learning a multi-person pattern — timing takes a few tries to click for everyone.",
  "equipment": "Sticks, balls, cones marking field thirds, bibs",
  "safety": "Keep the field clear of congestion during fast-paced running sections — space players out to avoid collisions",
  "games": [
   {
    "name": "Fast Break Walkthrough",
    "desc": "Team walks through a simple fast break pattern slowly: after winning the ball, players sprint into lanes up the field while one dribbles/passes ahead, before adding any defence.",
    "coach": "Everyone has a lane to sprint into — know yours before the ball moves",
    "easier": "Walk pace only",
    "harder": "Add a light jog",
    "chaos": "Random constraint calls",
    "setup": "A field marked into thirds using cones, groups of 4-5 players walking through the pattern together, sticks and one ball per group, bibs optional.",
    "howTo": [
     "Explain the pattern: after winning the ball, players sprint into lanes up the field while one player dribbles or passes the ball forward.",
     "Walk the group through the pattern slowly first, with each player moving into their own lane rather than bunching together.",
     "Coach the key message: 'everyone has a lane to sprint into — know yours before the ball moves.'",
     "One player dribbles or passes the ball forward through the thirds while the others move into supporting lanes at walking pace.",
     "For 'easier', keep it to walk pace only; for 'harder', add a light jog once the pattern is understood.",
     "Repeat the walkthrough a few times with players rotating through different lanes."
    ]
   },
   {
    "name": "3v2 Numbers Up",
    "desc": "Three attackers push the ball up the field against only two defenders, practising quick decisions on when to pass and who has the advantage.",
    "coach": "Spread out into your lanes — a bunched-up fast break loses its advantage",
    "easier": "Defenders start further back",
    "harder": "Defenders start closer, more realistic recovery speed",
    "chaos": "Mild opposition + decision-making",
    "setup": "A marked area covering roughly two-thirds of the field, three attackers against two defenders, sticks and one ball per group, small goal or cone target at the end.",
    "howTo": [
     "Explain the numbers advantage: three attackers push the ball up the field against only two defenders and must use the extra player wisely.",
     "The attacking trio moves the ball forward, spreading into their lanes and looking to identify which defender is covering which attacker.",
     "Coach the key message: 'spread out into your lanes — a bunched-up fast break loses its advantage.'",
     "Attackers make quick decisions on when to pass to the free player and finish with a shot when the opportunity appears.",
     "For 'easier', defenders start further back; for 'harder', defenders start closer with more realistic recovery speed.",
     "Rotate which three players attack and which two defend every few reps."
    ]
   },
   {
    "name": "Fast Break Race",
    "desc": "Groups practise executing a clean fast break sequence and finish (pass or shot) as fast and cleanly as possible, racing another group for the fastest clean sequence.",
    "coach": "Communicate clearly about who's finishing the fast break",
    "easier": "Slower pace",
    "harder": "Faster pace, timed",
    "chaos": "Beat the clock, head-to-head mirror",
    "setup": "Two parallel lanes covering roughly two-thirds of the field, one group per lane, sticks and one ball per group, a stopwatch or the teacher's own timer, a small goal or cone target at the end of each lane.",
    "howTo": [
     "Explain the challenge: each group executes a clean fast break sequence and finishes with a pass or shot as fast and cleanly as possible.",
     "Both groups start together on a signal, sprinting into their lanes and moving the ball forward using the fast break pattern.",
     "Coach the key message: 'communicate clearly about who's finishing the fast break.'",
     "The group that completes a clean sequence and finish first, without the pattern breaking down, wins that race.",
     "For 'easier', run the race at a slower pace; for 'harder', run it at full pace and time it precisely.",
     "Reset and repeat several times, rotating which players finish the sequence each round."
    ]
   }
  ],
  "big": {
   "name": "Fast Break Hockey",
   "desc": "4v4 or 5v5 — whenever a team wins possession, they're encouraged to push the ball quickly up the field and recognise any numbers advantage before the defence recovers.",
   "setup": "Full-width small-sided area, groups of 4v4 or 5v5, sticks and one ball per group, bibs to distinguish teams, small goals or cone goals at each end.",
   "howTo": [
    "Explain the encouraged behaviour: whenever a team wins possession, they should look to push the ball quickly up the field before the defence recovers.",
    "Play small-sided hockey as normal, with teams encouraged to recognise and use any numbers advantage created by a turnover.",
    "Coach calls out reminders to push forward quickly whenever a team wins the ball, reinforcing the fast break mindset.",
    "Coach the key message throughout: 'spread out into your lanes — a bunched-up fast break loses its advantage.'",
    "Rotate positions regularly so everyone experiences both winning the ball and defending against a fast break.",
    "Keep the pace lively and encourage communication about lanes and finishing responsibility during transitions."
   ]
  },
  "discussion": [
   "What made your fast break successful (or not) today?",
   "How did spreading into lanes help keep the advantage alive?",
   "What's the purpose of pushing the ball quickly rather than walking it up?"
  ],
  "lookfors": [
   "Sprints into a lane immediately after winning the ball",
   "Recognises and uses a numbers advantage",
   "Communicates clearly during the fast break"
  ],
  "inclusion": "Simplify to a 2v1 version for teams still building confidence before adding a third attacker and defender.",
  "skillBreakdown": [
   {
    "step": "Push the ball forward quickly after gaining possession.",
    "why": "Exploits the defence before it's organised."
   },
   {
    "step": "Spread into passing lanes rather than bunching together.",
    "why": "Gives the ball carrier real options and stretches the defence."
   },
   {
    "step": "Decide early — pass or shoot — based on the numbers.",
    "why": "Hesitation lets the defence recover into position."
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
  "equipment": "Sticks, balls, cones, bibs",
  "safety": "Keep games within a clearly marked area so groups don't collide with each other",
  "games": [
   {
    "name": "Triangle Support",
    "desc": "Groups of 3 keep the ball moving between them, with the two players off the ball always moving to form good passing angles (triangle shapes) for the ball carrier.",
    "coach": "Always offer at least two passing options for your teammate with the ball",
    "easier": "Bigger space, slower pace",
    "harder": "Smaller space, one light defender added",
    "chaos": "Random constraint calls",
    "setup": "Groups of 3 spread across a grid roughly 10m x 10m, one stick and ball per group, cones marking the grid boundary.",
    "howTo": [
     "Explain the shape: the two players off the ball should always move to form good passing angles (a triangle shape) around the ball carrier.",
     "The group keeps the ball moving between the three players, with the two off-ball players constantly adjusting position to offer angles.",
     "Coach the key message: 'always offer at least two passing options for your teammate with the ball.'",
     "Watch that players aren't standing in a flat line, which removes passing angles — encourage spreading into a triangle shape.",
     "For 'easier', use a bigger space with a slower pace; for 'harder', shrink the space and add one light defender.",
     "Rotate which player starts with the ball each round so everyone practises supporting and receiving."
    ]
   },
   {
    "name": "4v2 Keep Away",
    "desc": "Four attackers keep the ball away from two defenders in a marked grid, focusing on movement and quick decisions to maintain possession.",
    "coach": "Move the ball quickly before the defence can close the gap",
    "easier": "Bigger grid, slower defenders",
    "harder": "Smaller grid, quicker defenders",
    "chaos": "Mild opposition + decision-making",
    "setup": "A marked grid roughly 12m x 12m, four attackers against two defenders, sticks and one ball per group, bibs to distinguish attackers from defenders.",
    "howTo": [
     "Explain the numbers advantage: four attackers try to keep the ball away from two defenders using movement and quick decisions.",
     "Attackers spread around the grid, using off-ball movement to stay open and passing quickly before the defence can close the gap.",
     "Coach the key message: 'move the ball quickly before the defence can close the gap.'",
     "Defenders apply fair, sticks-off pressure, trying to intercept or force the attackers into a mistake.",
     "For 'easier', use a bigger grid with slower defenders; for 'harder', shrink the grid and speed up the defenders.",
     "Rotate defenders every 2-3 minutes so everyone experiences both attacking and defending in the numbers-down role."
    ]
   },
   {
    "name": "Possession Streak Challenge",
    "desc": "Small-sided keep-away game where the team tracks their longest streak of consecutive passes kept without losing the ball, trying to beat their own best streak.",
    "coach": "Celebrate a good streak, then reset your focus for the next one",
    "easier": "Bigger space, fewer defenders",
    "harder": "Smaller space, more defenders",
    "chaos": "Beat the clock, scoring streaks",
    "setup": "A marked grid roughly 12m x 12m, small-sided groups, sticks and one ball per group, a simple tally system to track the team's best streak of consecutive passes.",
    "howTo": [
     "Explain the challenge: the team tracks their longest streak of consecutive passes kept without losing the ball, trying to beat their own best.",
     "Play a small-sided keep-away game where the team counts passes out loud as they string them together.",
     "Coach the key message: 'celebrate a good streak, then reset your focus for the next one.'",
     "If the ball is lost, the streak resets to zero and the count starts again from the next successful pass.",
     "For 'easier', use a bigger space with fewer defenders; for 'harder', shrink the space and add more defenders.",
     "Track and announce the team's best streak of the session as a fun way to close the game."
    ]
   }
  ],
  "big": {
   "name": "Keep Away Hockey",
   "desc": "4v4, small area — teams score a point for every 6 consecutive passes kept as a team, rewarding movement, communication, and decision-making over individual dribbling.",
   "setup": "Small areas roughly 10m x 10m marked with cones, groups of 4v4, one ball per group, sticks for every player, no goals needed.",
   "howTo": [
    "Explain the scoring: a team earns a point for every 6 consecutive passes kept as a team without the other team touching the ball.",
    "Play possession-based small-sided hockey where the possessing team calls their pass count out loud as they string passes together.",
    "Coach the key message throughout: movement, communication, and quick decisions matter more here than individual dribbling.",
    "The moment the ball is lost or intercepted, possession switches to the other team and their count starts fresh.",
    "Coach highlights good off-ball movement and communication out loud as it happens, reinforcing the lesson's focus.",
    "Rotate which teams play against each other every few minutes if running multiple small groups at once."
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
    "step": "Keep the ball moving with simple, quick passes.",
    "why": "Extra touches under pressure risk losing possession."
   },
   {
    "step": "Spread out to keep passing lanes open.",
    "why": "Bunched players let one defender pressure multiple options at once."
   },
   {
    "step": "Communicate before receiving to know the pressure situation.",
    "why": "Helps you decide your first touch before the ball arrives."
   }
  ]
 },
 {
  "n": 18,
  "block": 4,
  "title": "Team Flow",
  "focus": "Team offence patterns",
  "walt": "We are learning simple attacking patterns that help our team move the ball toward the goal.",
  "wilf": [
   "I can run a simple attacking pattern with my team",
   "I can adjust the pattern based on what the defence is doing"
  ],
  "nzc": "Strand B · Thinking",
  "value": "Mōhio",
  "valueText": "Thinking about how your decisions within the pattern affect whether the whole team's play succeeds.",
  "equipment": "Sticks, balls, cones, bibs",
  "safety": "Keep attacking patterns within a marked area so groups don't collide with each other",
  "games": [
   {
    "name": "Pattern Walkthrough",
    "desc": "Team walks through a simple attacking pattern (e.g. pass-cut-dummy run toward the goal) slowly with cone markers before adding pace or defence.",
    "coach": "Know your role in the pattern before you start moving",
    "easier": "Fewer players, simpler pattern",
    "harder": "More players, more complex pattern",
    "chaos": "Random constraint calls",
    "setup": "A marked area roughly 15m x 12m with cone markers showing player positions, small groups walking through the pattern together, sticks and one ball per group.",
    "howTo": [
     "Explain a simple attacking pattern, such as pass-cut-dummy run toward the goal, using the cone markers to show each player's starting position.",
     "Walk the group through the pattern slowly, with each player moving to their marked position and completing their part of the sequence.",
     "Coach the key message: 'know your role in the pattern before you start moving.'",
     "Repeat the walkthrough a few times at walking pace before any pace or defence is added.",
     "For 'easier', use fewer players and a simpler pattern; for 'harder', add more players and a more complex pattern.",
     "Rotate players through different roles in the pattern so everyone understands each part."
    ]
   },
   {
    "name": "Pattern vs Shadow Defence",
    "desc": "Team runs their attacking pattern against shadow defenders (not intercepting) to build confidence with defensive presence nearby.",
    "coach": "Trust the pattern — don't abandon it the moment a defender appears",
    "easier": "Defenders further back",
    "harder": "Defenders closer, more realistic",
    "chaos": "Added defender/pressure",
    "setup": "Same marked area as Pattern Walkthrough, small groups running the pattern against shadow defenders who don't intercept, sticks and one ball per group, bibs for defenders.",
    "howTo": [
     "Explain that the team will now run their attacking pattern with shadow defenders present, but the defenders won't intercept the ball.",
     "The attacking group runs their pattern at a controlled pace while shadow defenders shadow their opposite number without touching the ball.",
     "Coach the key message: 'trust the pattern — don't abandon it the moment a defender appears.'",
     "Watch that players complete the full pattern despite the defensive presence, rather than panicking and abandoning the plan.",
     "For 'easier', defenders stay further back; for 'harder', defenders stay closer for a more realistic look.",
     "Rotate attackers and defenders every few reps so everyone experiences both roles."
    ]
   },
   {
    "name": "Read & Adjust",
    "desc": "Team runs their pattern, but must adjust on the fly if a defender blocks the planned option, practising a backup plan.",
    "coach": "Have a simple backup option in mind if your first choice is covered",
    "easier": "Predictable defensive block",
    "harder": "Unpredictable defensive block",
    "chaos": "Mild opposition + decision-making",
    "setup": "Same marked area, small groups running the pattern against a defender who can actively block one option, sticks and one ball per group, bibs for defenders.",
    "howTo": [
     "Explain the twist: the team runs their pattern, but a defender is now allowed to block the planned option, forcing a backup plan.",
     "The attacking group begins their pattern as planned, while the defender actively steps in front of the first passing or cutting option.",
     "Coach the key message: 'have a simple backup option in mind if your first choice is covered.'",
     "When the first option is blocked, the ball-carrier and teammates adjust on the fly to find the backup option.",
     "For 'easier', the defensive block is predictable; for 'harder', the block is unpredictable, forcing quicker reads.",
     "Rotate which option gets blocked each round so different backup plans get practised."
    ]
   }
  ],
  "big": {
   "name": "Team Offence Hockey",
   "desc": "4v4 or 5v5 with full defence — attacking teams are encouraged to run at least one planned pattern per possession, adjusting when the defence covers their first option.",
   "setup": "Small-sided area with full defence, groups of 4v4 or 5v5, sticks and one ball per group, bibs to distinguish teams, small goals optional.",
   "howTo": [
    "Explain the encouraged behaviour: attacking teams should run at least one planned pattern per possession, adjusting when the defence covers their first option.",
    "Play small-sided hockey with full defensive pressure, encouraging attackers to use today's patterns rather than purely improvised play.",
    "Coach highlights moments where a team successfully runs a pattern or adjusts well to a blocked option, calling it out as it happens.",
    "Coach the key message throughout: 'have a simple backup option in mind if your first choice is covered.'",
    "Rotate positions regularly so everyone gets chances to lead and support the attacking pattern.",
    "Keep the tone encouraging so teams feel confident trying planned patterns even if the first attempt doesn't work perfectly."
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
    "step": "Learn and run your team's planned movement pattern.",
    "why": "Patterns create better spacing than random, individual attacking."
   },
   {
    "step": "Adjust when the defence covers your first option.",
    "why": "Real defence requires adapting, not abandoning the plan entirely."
   },
   {
    "step": "Communicate throughout the pattern.",
    "why": "A silent pattern breaks down under pressure."
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
  "equipment": "Sticks, balls, cones, bibs",
  "safety": "Keep defensive movement controlled — no sprinting into others' space; communication should be clear, not aggressive shouting",
  "games": [
   {
    "name": "Call the Danger",
    "desc": "Defensive team practises calling out loudly when an attacker is dangerous (open, about to receive, or about to shoot) so teammates can help cover.",
    "coach": "Call early and specifically — name who and what you're seeing",
    "easier": "Slower, more obvious danger",
    "harder": "Faster, less obvious danger",
    "chaos": "Random constraint calls",
    "setup": "Small-sided area roughly 15m x 12m, groups of 4-5 defenders working together against attackers moving the ball, sticks and one ball per group, bibs to distinguish teams.",
    "howTo": [
     "Explain the skill: defenders practise calling out loudly when an attacker is dangerous — open, about to receive, or about to shoot.",
     "As attackers move the ball around, defenders watch for danger and call it out clearly and specifically to their teammates.",
     "Coach the key message: 'call early and specifically — name who and what you're seeing.'",
     "Teammates respond to the call by adjusting their positioning to help cover the danger that's been identified.",
     "For 'easier', use slower, more obvious danger; for 'harder', make the danger faster and less obvious.",
     "Rotate attackers and defenders regularly so everyone practises both creating and calling out danger."
    ]
   },
   {
    "name": "Cover & Recover",
    "desc": "One defender practises leaving their direct mark briefly to cover a bigger danger, while a teammate calls out and helps recover the original mark.",
    "coach": "Communicate the swap clearly so no attacker is left completely open",
    "easier": "Slower pace, more time to communicate",
    "harder": "Faster pace, quick decisions",
    "chaos": "Mild opposition + decision-making",
    "setup": "Small-sided area, groups of defenders working in pairs within a larger defensive unit, sticks and one ball per group, bibs to distinguish teams.",
    "howTo": [
     "Explain the pattern: one defender briefly leaves their direct mark to cover a bigger danger elsewhere, while a teammate calls out and helps recover the original mark.",
     "As play develops, one defender steps across to cover the bigger danger while calling out clearly to a nearby teammate.",
     "Coach the key message: 'communicate the swap clearly so no attacker is left completely open.'",
     "The covering teammate recovers to pick up the original mark as quickly as possible once the swap is called.",
     "For 'easier', use a slower pace with more time to communicate; for 'harder', speed up the pace so decisions happen quickly.",
     "Rotate roles regularly so everyone practises both covering and recovering."
    ]
   },
   {
    "name": "Team Defence Grid",
    "desc": "Small-sided game where the defending team's only job is to communicate and cover for each other, with the coach highlighting good team defensive moments.",
    "coach": "Defence is a team job, not just your own player",
    "easier": "Fewer attackers, easier to cover",
    "harder": "Full attacking numbers",
    "chaos": "Role rotation",
    "setup": "Small-sided area, groups of 4v4 or similar, sticks and one ball per group, bibs to distinguish teams, the defending team's sole focus being communication and coverage.",
    "howTo": [
     "Explain that the defending team's only job in this game is to communicate and cover for each other — not to win the ball at all costs.",
     "Play a small-sided game where attackers move the ball freely while the defending team focuses purely on positioning and calling.",
     "Coach the key message: 'defence is a team job, not just your own player.'",
     "Coach highlights good team defensive moments out loud as they happen, especially clear calls and successful covers.",
     "For 'easier', use fewer attackers, making it easier to cover; for 'harder', use full attacking numbers.",
     "Rotate which team defends every few minutes so everyone practises the communication-focused defending."
    ]
   }
  ],
  "big": {
   "name": "Team Defence Hockey",
   "desc": "4v4 or 5v5 — defending team is coached explicitly on communication and covering for each other, while attackers try to exploit any gaps in the defensive structure.",
   "setup": "Small-sided area, groups of 4v4 or 5v5, sticks and one ball per group, bibs to distinguish teams, small goals optional.",
   "howTo": [
    "Explain the coaching focus for this game: the defending team is coached explicitly on communication and covering for each other.",
    "Play small-sided hockey as normal, with the defending team encouraged to call out danger and cover for teammates.",
    "Attackers try to exploit any gaps in the defensive structure, giving the defending team real decisions to communicate through.",
    "Coach the key message throughout: 'communicate the swap clearly so no attacker is left completely open.'",
    "Coach highlights clear defensive communication out loud as it happens, reinforcing the lesson's focus.",
    "Rotate attacking and defending teams regularly so everyone gets practice with the team defence principles."
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
    "why": "Team defence relies on clear, updated roles."
   },
   {
    "step": "Cover for a teammate who's beaten, then recover to your own mark.",
    "why": "Helping without abandoning your job keeps the defence solid."
   },
   {
    "step": "Move as a connected unit.",
    "why": "Gaps appear where defenders stop working together."
   }
  ]
 },
 {
  "n": 20,
  "block": 4,
  "title": "Hockey Cup",
  "focus": "Culminating mini-tournament",
  "walt": "We are learning to apply the whole unit's skills in a fun, competitive mini-tournament format.",
  "wilf": [
   "I can play a full game applying skills and tactics from across the unit",
   "I can be a good teammate and good sport across multiple games"
  ],
  "nzc": "Strand A, B, C & D · All key competencies",
  "value": "Pānga",
  "valueText": "Celebrating the whole team's effort and growth across the unit — thinking about how everyone's contribution, not just the scoreline, made the tournament work.",
  "equipment": "Sticks, balls, bibs (multiple colours for teams), cones, small goals/cone goals, a simple ladder/scoreboard",
  "safety": "Manage fatigue with rotations/subs; reinforce the flat-side, low-stick, and no-contact rules before the tournament begins",
  "games": [
   {
    "name": "Skills Warm-In Circuit",
    "desc": "A short rotating circuit revisiting the unit's key skills (dribble, pass & receive, shoot, defend) as a fun warm-in before the tournament starts.",
    "coach": "Bring your best technique from across the unit into every station",
    "easier": "Longer stations, fewer skills",
    "harder": "Shorter stations, all skills",
    "chaos": "Beat the clock",
    "setup": "Four stations set up around the space — dribble, pass & receive, shoot, defend — each with cones and sticks/balls as needed, small groups rotating through together.",
    "howTo": [
     "Explain the circuit: a short rotating set of stations revisiting the unit's key skills as a fun warm-in before the tournament begins.",
     "Groups start at a station and spend a set amount of time practising that skill before rotating to the next.",
     "Coach the key message: 'bring your best technique from across the unit into every station.'",
     "Keep the pace upbeat and encouraging — this is a warm-in, not a formal assessment of technique.",
     "For 'easier', use longer stations covering fewer skills; for 'harder', use shorter stations covering all four skills.",
     "Rotate through all stations before moving into the tournament proper."
    ]
   },
   {
    "name": "Captain's Huddle",
    "desc": "Each team spends 2 minutes with their 'captain' (rotating role) planning one simple tactic to try in their first game — a light strategy touchpoint before playing.",
    "coach": "Keep the plan simple — one clear idea everyone understands",
    "easier": "Coach suggests the tactic",
    "harder": "Team chooses their own tactic",
    "chaos": "Bonus objectives",
    "setup": "Each team gathered in their own small huddle area, no equipment needed beyond team bibs, a rotating 'captain' role identified for each team.",
    "howTo": [
     "Explain the huddle: each team spends 2 minutes with their rotating captain planning one simple tactic to try in their first game.",
     "The captain leads a short discussion, gathering input but keeping the final plan simple and clear.",
     "Coach the key message: 'keep the plan simple — one clear idea everyone understands.'",
     "Teams agree on their one tactic before heading into their first tournament game.",
     "For 'easier', the coach suggests the tactic to get teams started; for 'harder', the team chooses their own tactic independently.",
     "Rotate the captain role before each new game so everyone gets a turn leading the huddle."
    ]
   },
   {
    "name": "Fair Play Check-In",
    "desc": "Brief between-games moment where teams acknowledge one good play from their opponent, reinforcing sportsmanship as part of the tournament structure.",
    "coach": "Be specific — name what your opponent did well",
    "easier": "n/a",
    "harder": "n/a",
    "chaos": "n/a",
    "setup": "A brief gathering moment between tournament games, no equipment needed, teams meeting briefly as a whole group or in their own team huddle.",
    "howTo": [
     "Explain the purpose: teams take a moment between games to acknowledge one good play from their opponent.",
     "After each game, gather teams briefly and invite a couple of players to name something their opponent did well.",
     "Coach the key message: 'be specific — name what your opponent did well.'",
     "Keep this check-in short and genuine, reinforcing sportsmanship as a normal part of the tournament rhythm.",
     "This activity doesn't have easier/harder variants — it's the same simple format between every game.",
     "Move straight into the next game once the check-in is complete."
    ]
   }
  ],
  "big": {
   "name": "Hockey Cup — Round Robin",
   "desc": "Full simplified hockey rules, small-sided round-robin mini-tournament (4v4 or 5v5) across several short games; ladder/results tracked lightly and playfully, with every team guaranteed multiple games regardless of results.",
   "setup": "Full playing space divided as needed for several small-sided games, bibs in multiple colours to distinguish teams, sticks and balls for every group, a simple ladder or scoreboard visible to all.",
   "howTo": [
    "Explain the tournament format: full simplified hockey rules, small-sided round-robin games (4v4 or 5v5) played across several short matches.",
    "Run each game for a set short time (e.g. 5-6 minutes) before rotating teams to their next round-robin fixture.",
    "Track results lightly and playfully on the ladder/scoreboard, keeping the emphasis on participation and fun rather than high stakes.",
    "Coach the key message throughout the tournament: apply the unit's best technique — dribbling, passing, shooting, defending — under real game pressure.",
    "Reinforce the flat-side, low-stick, and no-contact rules before each game begins, and manage fatigue with rotations or substitutions.",
    "Guarantee every team multiple games regardless of results, closing the tournament with a celebration of effort and sportsmanship across the whole unit."
   ]
  },
  "discussion": [
   "What's one skill from across the whole unit you felt proudest of today?",
   "How did your team work together across multiple games?",
   "What would you want to work on if we played another hockey unit?"
  ],
  "lookfors": [
   "Applies a recognisable range of skills from across the unit",
   "Shows good sportsmanship across wins and losses",
   "Encourages and includes teammates throughout the tournament"
  ],
  "inclusion": "Ensure team sizes/formats can flex on the day for uneven numbers; emphasise participation and effort in any informal recognition, not just results.",
  "skillBreakdown": [
   {
    "step": "Apply your best technique from across the unit.",
    "why": "The tournament brings everything together under real pressure."
   },
   {
    "step": "Communicate constantly with teammates.",
    "why": "Communication matters even more when the stakes go up."
   },
   {
    "step": "Play fairly and encourage teammates, win or lose.",
    "why": "Sportsmanship is as much a part of the unit as physical skill."
   }
  ]
 }
];

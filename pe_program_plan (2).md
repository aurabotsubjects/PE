# Years 5/6 Game-Based Physical Education Program
### A planning document for app development

---

## 1. Vision & Philosophy

A daily-use tool for classroom/PE teachers of Years 5–6 (typically ages 9–11, NZC **Curriculum Level 3**). Each school day within a unit, the teacher opens the app and gets a ready-to-run lesson:

- **3 skill-based games** — each one repeats a *specific* focus skill dozens of times, but disguised inside a game with rules, scoring, and a bit of chaos, rather than a static drill.
- **1 culminating "big game"** — a modified/small-sided version of the real sport (or a mixed challenge for focus modules) where students must apply what they just practised.

**Core design rule for every skill game:** take the boring version of a drill and add a *constraint* that forces correct technique, decision-making, or repetition-with-purpose. The example the program is built around:

> Instead of "pass the ball back and forth," play **Pass & Retreat**: after every pass, the passer takes one big step backward and the receiver may only take one step sideways to collect it. The game only "works" — stays fun and keeps possession — if passes are accurate and receiving technique is clean. Add a partner-pair vs partner-pair race, or a points system for consecutive clean exchanges, and it becomes a game, not a drill.

This constraint-led approach (small tweak to rules/space/scoring → forces the skill) is the design pattern used throughout the program. See Section 5 for the full toolkit of "chaos levers" used to turn any drill into a game.

**Non-negotiables:**
- Every child moving, minimal queuing/lines.
- Games are modified (smaller teams, smaller space, easier equipment) so the *skill*, not the sport's real rules, is the star.
- Progressive difficulty across the 20 lessons of a unit — skills build on each other.
- Inclusive by design — games should be winnable/enjoyable across a wide skill range (handicap scoring, varied roles, no permanent "out").

---

## 2. Alignment with The New Zealand Curriculum (Health & Physical Education, Level 3)

Years 5–6 sits at **Curriculum Level 3**, where the emphasis shifts from "developing basic movement skills" (Level 2) toward **complex movement sequences, tactical decision-making, and more sophisticated cooperation/competition with others**.

The four NZC Health & PE strands, and how this program addresses each:

| Strand | What it covers | How the program delivers it |
|---|---|---|
| **A – Personal Health & Physical Development** | Well-being, physical development, attitudes to activity | Every lesson = full-body activity; games chosen to build fitness, confidence, and positive attitudes to movement through fun rather than fitness-testing |
| **B – Movement Concepts & Motor Skills** | Motor skill development, movement knowledge, applying skills in games/environments | The direct target of the "3 skill games" each lesson — sport-specific technique built through repetition-in-context |
| **C – Relationships with Other People** | Cooperation, relationship skills, inclusion | Built into the "focus" modules (Team Play, Strategy) and into most big games, which require communication, role-taking, and fair play |
| **D – Healthy Communities & Environments** | Contribution to group/community wellbeing, fair environments | Delivered through game rules that require inclusion (rotating roles, everyone touches the ball/equipment), and reflection prompts at lesson end |

**Key Competencies (NZC front end)** woven throughout: *Relating to others* and *Participating & contributing* are the two most naturally exercised by small-sided team games; *Thinking* is exercised heavily in the Strategy focus module and in every "big game" (reading the game, adapting).

> Note for later build: exact Achievement Objective wording should be pulled fresh from TKI/Tāhūrangi when writing the "curriculum links" field for each lesson, since wording is periodically revised. This plan uses the strand structure above as the organising framework rather than quoting specific AO text.

---

## 3. Program Structure

### 3.1 Units
The program is organised into **12 units of 20 consecutive lessons each**:

**Sport units (9):**
1. Soccer
2. Rippa Rugby
3. Netball
4. Basketball
5. Hockey
6. Volleyball
7. Cricket
8. Teeball
9. Tennis

**Cross-cutting focus units (3):**
10. Team Play / Working Together
11. Strategy & Decision-Making
12. Hand–Eye Coordination

A school year (4 terms) could realistically fit 3–4 units if run 2–3x/week, or fewer if run once/week. The app should let a teacher/school pick which units to run and in what order — sport units and focus units can be interleaved (e.g. Term 1: Soccer, Term 2: Team Play, Term 3: Netball, Term 4: Cricket).

### 3.2 Daily Lesson Shape (applies to every lesson, every unit)

| Segment | Duration (approx., 45–50 min lesson) | Purpose |
|---|---|---|
| Warm-up / Welcome | 3–5 min | Get moving, quick recap of yesterday's focus skill |
| **Skill Game 1** | 8 min | Introduces/re-introduces the day's focus skill in its simplest game form |
| **Skill Game 2** | 8 min | Same skill, added constraint/complexity, or paired skill |
| **Skill Game 3** | 8 min | Same skill under game pressure (opposition, time pressure, decision-making) |
| **Big Game** | 12–15 min | Small-sided/modified version of the real sport (or mixed challenge for focus units) that requires the day's skill to succeed |
| Cool-down / Reflect | 3–5 min | Quick group reflection: "What made today's skill work? Who used it well?" |

Skill Games 1→2→3 are designed as a **difficulty ramp**: static/no-opposition → light constraint/movement → full decision-making/opposition-based. The Big Game is not a rigid re-teach; it's a genuine game where the focus skill is simply one of the things that helps you win.

### 3.3 Skill Progression Logic Within a 20-Lesson Unit

Each sport unit is broken into **4 blocks of 5 lessons**, moving from isolated technical skills toward full game application:

- **Block 1 (Lessons 1–5):** Foundational individual skill (ball/object control)
- **Block 2 (Lessons 6–10):** Second core skill + combining with Block 1 skill
- **Block 3 (Lessons 11–15):** Attacking/defending or positional skills, decision-making introduced
- **Block 4 (Lessons 16–20):** Team tactics, set plays, culminating in a mini "tournament" lesson

Focus units (Team Play, Strategy, Hand–Eye Coordination) follow a similar 4-block shape but draw games from multiple sports rather than staying inside one.

---

## 4. The 20-Lesson Unit Plans

Each entry below is the **focus skill of the day** — this is what the app will expand into full lesson content (3 named skill games + 1 big game + equipment + coaching points). A fully worked example lesson is in Section 6.

### 4.1 Soccer
| # | Focus Skill |
|---|---|
| 1 | Ball familiarisation & close control (dribbling, all surfaces of the foot) |
| 2 | Dribbling with change of direction/speed |
| 3 | Dribbling under light pressure (1v1 to a target) |
| 4 | Passing — short, accurate ground passes |
| 5 | Receiving/first touch (cushioning the ball) |
| 6 | Passing on the move (give-and-go) |
| 7 | Striking technique (shooting form) |
| 8 | Shooting accuracy & placement |
| 9 | Combining dribble → pass → shoot |
| 10 | Turning with the ball / protecting the ball (shielding) |
| 11 | Defending — jockeying & body positioning |
| 12 | Defending — timing a tackle |
| 13 | Attacking — creating and finding space |
| 14 | Support play — passing options/angles |
| 15 | Aerial control (controlling a bouncing/lofted ball) |
| 16 | Goalkeeping basics (handling, positioning) |
| 17 | Small-sided possession play (keep-ball under pressure) |
| 18 | Transition — attack to defence and back |
| 19 | Set plays — throw-ins & corners |
| 20 | Culminating mini-tournament (round robin small-sided games) |

### 4.2 Rippa Rugby
| # | Focus Skill |
|---|---|
| 1 | Ball handling — carrying, passing basics |
| 2 | Passing accuracy (flat, backward pass) |
| 3 | Catching under pressure/movement |
| 4 | Evasion — footwork & change of direction |
| 5 | Evasion — using a "step" to beat a defender |
| 6 | Supporting the ball carrier (depth & width) |
| 7 | Continuity — quick recycling of the ball |
| 8 | Rip technique (defensive rip of the belt/tag) |
| 9 | Defensive line — spacing & communication |
| 10 | Combining evasion + support in small games |
| 11 | Attacking shape — width in attack |
| 12 | Reading the defensive line (where's the space?) |
| 13 | Decision-making — pass or run? |
| 14 | Kicking basics (if included in the ruleset used) |
| 15 | Scoring plays — finishing near the line |
| 16 | Defensive strategy — drift defence |
| 17 | Attacking strategy — switch plays |
| 18 | Roles within a team (structure) |
| 19 | Full-rules small-sided games with tactics focus |
| 20 | Culminating mini-tournament |

### 4.3 Netball
| # | Focus Skill |
|---|---|
| 1 | Footwork fundamentals (landing on one/two feet) |
| 2 | Chest pass — accuracy |
| 3 | Bounce pass & overhead pass |
| 4 | Receiving a pass (strong hands, target-making) |
| 5 | Pivoting to protect the ball |
| 6 | Passing on the move / pass-and-move |
| 7 | Dodging to lose a defender |
| 8 | Getting free — timing your lead |
| 9 | Combining dodge + lead + receive |
| 10 | Defending — marking the pass |
| 11 | Defending — marking the shot/intercepting |
| 12 | Shooting technique (for shooting positions) |
| 13 | Shooting under defensive pressure |
| 14 | Understanding space — thirds of the court |
| 15 | Positional roles & where to stand |
| 16 | Centre pass strategy |
| 17 | Attacking play patterns |
| 18 | Defensive team strategy |
| 19 | Full small-sided games with position rotation |
| 20 | Culminating mini-tournament |

### 4.4 Basketball
| # | Focus Skill |
|---|---|
| 1 | Dribbling — control at a stationary point |
| 2 | Dribbling on the move / change of hand |
| 3 | Dribbling under pressure (protect the ball) |
| 4 | Chest & bounce passing accuracy |
| 5 | Receiving a pass & pivoting |
| 6 | Passing on the move (give-and-go) |
| 7 | Shooting form (set shot / lay-up steps) |
| 8 | Shooting accuracy from varied spots |
| 9 | Combining dribble → pass → shoot |
| 10 | Footwork — pivoting to escape pressure |
| 11 | Defending — stance & staying in front |
| 12 | Defending — closing out on a shooter |
| 13 | Attacking — creating space (cutting) |
| 14 | Screening / using a teammate to get free |
| 15 | Rebounding basics (positioning, boxing out) |
| 16 | Fast break basics (outnumbering the defence) |
| 17 | Small-sided possession games (keep-away) |
| 18 | Team offence patterns |
| 19 | Team defence patterns |
| 20 | Culminating mini-tournament |

### 4.5 Hockey
| # | Focus Skill |
|---|---|
| 1 | Grip & stick control — dribbling (Indian dribble intro) |
| 2 | Dribbling with change of direction |
| 3 | Dribbling under light pressure |
| 4 | Push pass — accuracy |
| 5 | Receiving/trapping the ball |
| 6 | Passing on the move |
| 7 | Hitting technique (basic striking) |
| 8 | Shooting accuracy on goal |
| 9 | Combining dribble → pass → shoot |
| 10 | Turning with the ball / protecting it |
| 11 | Defending — jockeying, tackling basics |
| 12 | Defending — angles & body position |
| 13 | Attacking — finding space |
| 14 | Support play & passing angles |
| 15 | Goalkeeping / goal-line defending basics |
| 16 | Small-sided possession play |
| 17 | Transition attack ↔ defence |
| 18 | Set plays — free hits, corners |
| 19 | Full small-sided games with tactics |
| 20 | Culminating mini-tournament |

### 4.6 Volleyball
| # | Focus Skill |
|---|---|
| 1 | Ball familiarisation — controlled taps/catches |
| 2 | Forearm pass (bump) fundamentals |
| 3 | Bump accuracy to a target |
| 4 | Overhead set fundamentals |
| 5 | Set accuracy to a target |
| 6 | Combining bump → set |
| 7 | Serving technique (underarm) |
| 8 | Serving accuracy/placement |
| 9 | Receiving a serve |
| 10 | Rally building — 2-touch games |
| 11 | Rally building — 3-touch games (bump-set-return) |
| 12 | Moving to the ball (footwork) |
| 13 | Communication — calling the ball |
| 14 | Positioning — covering space as a team |
| 15 | Attacking touch / directed hit |
| 16 | Reading the opponent's return |
| 17 | Small-sided rally games (2v2/3v3) |
| 18 | Rotation basics |
| 19 | Full modified games with all touches |
| 20 | Culminating mini-tournament |

### 4.7 Cricket
| # | Focus Skill |
|---|---|
| 1 | Underarm/overarm throwing accuracy |
| 2 | Catching — high catches |
| 3 | Catching — low/ground catches |
| 4 | Fielding — ground fielding technique |
| 5 | Fielding — backing up & communication |
| 6 | Batting grip & stance |
| 7 | Batting — hitting off a tee/soft toss |
| 8 | Batting — running between wickets |
| 9 | Combining fielding + throwing to a target |
| 10 | Bowling — basic run-up & delivery (safe technique) |
| 11 | Bowling — accuracy to a target |
| 12 | Wicketkeeping basics (if applicable) |
| 13 | Reading the game — where to hit/where to field |
| 14 | Decision-making — run or not? |
| 15 | Fielding placements & team shape |
| 16 | Small-sided modified games (pairs cricket) |
| 17 | Bowling tactics (line & length concepts) |
| 18 | Batting tactics (placement, gaps) |
| 19 | Full small-sided games |
| 20 | Culminating mini-tournament |

### 4.8 Teeball
| # | Focus Skill |
|---|---|
| 1 | Batting stance & swing off the tee |
| 2 | Batting — contact & direction |
| 3 | Throwing — accuracy to a target |
| 4 | Catching — two-handed catches |
| 5 | Fielding — ground balls |
| 6 | Fielding — communication & backing up |
| 7 | Base running — technique & speed |
| 8 | Base running — reading when to run |
| 9 | Combining fielding + throwing to a base |
| 10 | Infield positioning basics |
| 11 | Outfield positioning basics |
| 12 | Force plays / tag plays concept |
| 13 | Batting placement (hitting gaps) |
| 14 | Team fielding shape & communication |
| 15 | Decision-making — where to throw |
| 16 | Small-sided modified games |
| 17 | Full-team fielding rotations |
| 18 | Batting order & team strategy |
| 19 | Full modified games |
| 20 | Culminating mini-tournament |

### 4.9 Tennis
| # | Focus Skill |
|---|---|
| 1 | Racquet familiarisation & grip (forehand/backhand grip) |
| 2 | Bouncing & balancing the ball on the racquet (control) |
| 3 | Forehand groundstroke technique (off a feed/self-drop) |
| 4 | Forehand accuracy to a target |
| 5 | Backhand groundstroke technique |
| 6 | Backhand accuracy to a target |
| 7 | Combining forehand + backhand in a rally |
| 8 | Footwork — split step & moving to the ball |
| 9 | Rallying with a partner (cooperative, low net/modified ball) |
| 10 | Serving technique (underarm/modified serve) |
| 11 | Serving accuracy/placement |
| 12 | Volley technique (at the net) |
| 13 | Combining groundstrokes + volley in a point |
| 14 | Reading the ball's bounce & trajectory |
| 15 | Decision-making — where to place a shot |
| 16 | Small-sided mini-tennis games (singles) |
| 17 | Small-sided mini-tennis games (doubles) — communication & positioning |
| 18 | Scoring & game strategy basics |
| 19 | Full modified games with scoring |
| 20 | Culminating mini-tournament |

### 4.10 Focus Unit: Team Play / Working Together
Uses mini-games and equipment drawn from *any* sport — the sport is a vehicle, cooperation is the skill.

| # | Focus Skill |
|---|---|
| 1 | Communication basics (calling, naming, listening) |
| 2 | Trust & reliance on a partner |
| 3 | Non-verbal communication / signals |
| 4 | Sharing roles fairly (everyone touches the equipment) |
| 5 | Encouraging teammates / positive talk |
| 6 | Working with a partner under a shared constraint |
| 7 | Small group (3–4) cooperative challenges |
| 8 | Problem-solving as a group (no single "leader") |
| 9 | Taking turns leading |
| 10 | Including everyone — adapting for different abilities |
| 11 | Building a simple team plan before playing |
| 12 | Adjusting a plan mid-game |
| 13 | Handling disagreement/conflict fairly |
| 14 | Celebrating others' success |
| 15 | Supporting a struggling teammate |
| 16 | Larger group (5–6) cooperative games |
| 17 | Combining communication + roles in a game |
| 18 | Reflecting as a team (what worked/what didn't) |
| 19 | Full team challenge — multi-stage cooperative game |
| 20 | Culminating "team challenge day" (mixed cooperative events) |

### 4.11 Focus Unit: Strategy & Decision-Making
| # | Focus Skill |
|---|---|
| 1 | Reading space — where is it open? |
| 2 | Making a simple choice under time pressure |
| 3 | Numbers up / numbers down awareness (2v1 situations) |
| 4 | Basic attacking shape (spreading out) |
| 5 | Basic defensive shape (staying compact) |
| 6 | Decoy/fake decision-making |
| 7 | Choosing pass vs. dribble/carry |
| 8 | Recognising a scoring opportunity |
| 9 | Adapting a plan when it isn't working |
| 10 | Simple game-planning as a group |
| 11 | Understanding roles within a strategy |
| 12 | Predicting an opponent's next move |
| 13 | Risk vs. safety decisions in-game |
| 14 | Using space to create an advantage |
| 15 | Defending as a unit (shifting together) |
| 16 | Set-play thinking (a planned start to a phase) |
| 17 | Reviewing strategy between rounds |
| 18 | Multi-sport strategy transfer (same idea, different game) |
| 19 | Designing your own simple game strategy |
| 20 | Culminating "strategy showcase" — mixed tactical games |

### 4.12 Focus Unit: Hand–Eye Coordination
| # | Focus Skill |
|---|---|
| 1 | Tracking a moving object with eyes |
| 2 | Catching — two hands, varied trajectories |
| 3 | Catching — one hand |
| 4 | Throwing accuracy to a stationary target |
| 5 | Throwing accuracy to a moving target |
| 6 | Striking a stationary object (bat/racquet/hand) |
| 7 | Striking a moving object |
| 8 | Juggling/keepy-uppy style ball control (feet, hands, or racquet) |
| 9 | Reaction speed challenges |
| 10 | Catching under distraction/multitasking |
| 11 | Combining catch + throw in one fluid motion |
| 12 | Aiming at a target under time pressure |
| 13 | Coordination with a partner (rhythm passing) |
| 14 | Using peripheral vision (multiple objects) |
| 15 | Coordination while moving (not stationary) |
| 16 | Small equipment challenges (balloons, small balls, beanbags) |
| 17 | Combining coordination with decision-making |
| 18 | Timed accuracy challenges |
| 19 | Multi-skill relay circuits |
| 20 | Culminating "coordination carnival" (station challenges) |

---

## 5. Skill-Game Design Toolkit ("Chaos Levers")

When building out the full content for each lesson, use this toolkist of ways to turn a plain drill into a game. Any drill + one or more levers below becomes game-based:

1. **Movement penalty/reward** — e.g. take a step back/sideways after a successful action (like the Pass & Retreat example).
2. **Scoring streaks** — points for consecutive successes; streak resets on an error, encouraging focus without making failure punishing.
3. **Beat the clock** — how many clean reps/points can a pair/team get in 60–90 seconds; race against their own previous score.
4. **Head-to-head mirror** — two pairs/groups doing the same drill simultaneously, racing to a target score.
5. **Shrinking/growing space** — the working area gets smaller as success increases, raising difficulty automatically.
6. **Added defender/pressure** — start with no opposition, then add a "shadow" defender who can only intercept after a set condition (e.g. after the 3rd pass).
7. **Random constraint calls** — teacher/app calls out a changing rule mid-game ("next pass must be with your weaker foot," "next catch must be one-handed").
8. **Role rotation** — everyone cycles through attacker/defender/feeder roles so repetition is built in without anyone standing still.
9. **Bonus objectives** — an extra target (a cone, a hoop, a second goal) that gives bonus points if incorporated correctly.
10. **Tag/elimination-lite** — mild competitive stakes (lose a point/life) balanced with quick re-entry so no one is out for long.

---

## 6. Worked Example — Soccer, Lesson 1 (Ball Familiarisation & Close Control)

*(This shows the level of detail each of the 220 lessons should eventually contain in the app.)*

**Learning intention:** Students can keep the ball close using different parts of both feet while moving.
**NZC link:** Strand B (Movement Concepts & Motor Skills) — developing and applying a fundamental motor skill in a game context.
**Equipment:** 1 ball per student, cones for grids.

**Skill Breakdown — Ball familiarisation & close control**
Step-by-step technique with the reasoning behind each step, so teachers can watch for and correct the right things while the games run:
1. **Use the inside, outside, and sole of both feet to touch the ball.** *Why:* training all surfaces early prevents a one-footed dependency and builds a bigger toolkit for later dribbling.
2. **Keep the ball within half a metre of your feet at a walking pace.** *Why:* close control means you can react to pressure or change direction without the ball getting away from you.
3. **Keep your head up between touches, glancing down only briefly.** *Why:* soccer is played by seeing the space around you, not just watching the ball.

**Skill Game 1 – "Traffic Lights Dribble" (8 min)**
Each student dribbles freely in a grid. Teacher/app calls "green" (dribble fast with light touches), "yellow" (slow control, ball glued to feet), "red" (stop the ball dead under your foot). Chaos lever: random calls force constant close control at changing speeds.

**Skill Game 2 – "Sole Tag" (8 min)**
Partners each have a ball in a small grid. On "go," each player tries to tap a partner's ball out of the grid with their foot while protecting their own — but must keep dribbling (can't stand still). Chaos lever: added pressure + protecting possession forces close control under distraction.

**Skill Game 3 – "1v1 Gate Challenge" (8 min)**
Pairs face off in a small square with two "gates" (cone pairs) on opposite sides. Each player scores by dribbling the ball through either gate while their partner tries to poke it away. Chaos lever: mild opposition + decision-making (which gate?) forces control under real pressure.

**Big Game – "Small-Sided Possession Soccer" (12–15 min)**
3v3 or 4v4, small pitch, no goals — teams score a point for every 5 consecutive touches/passes their team keeps without the other team touching the ball. Close control (today's skill) directly determines success.

**Cool-down / Reflect (3–5 min):** "Who kept the ball closest to their feet today? What did that look like?"

---

## 7. Content Data Model (for app build)

Suggested structure so the whole plan above can be turned directly into app content:

```json
{
  "unit": "soccer",
  "unit_type": "sport",            // "sport" | "focus"
  "lesson_number": 1,
  "block": 1,                       // 1-4, which 5-lesson block
  "focus_skill": "Ball familiarisation & close control",
  "learning_intention": "Students can keep the ball close using different parts of both feet while moving.",
  "nzc_strand_links": ["B"],        // A, B, C, D
  "equipment": ["1 ball per student", "cones"],
  "skill_breakdown": [
    {
      "step": "Use the inside, outside, and sole of both feet to touch the ball.",
      "why": "Training all surfaces early prevents a one-footed dependency and builds a bigger toolkit for later dribbling."
    }
    // ...3 steps total, ordered — the technical breakdown of the lesson's focus skill,
    // each step paired with a plain-language reason, so a teacher can watch for and
    // correct the *specific* technique point, not just "good"/"needs work"
  ],
  "warm_up": { "name": "string", "description": "string", "duration_min": 5 },
  "skill_games": [
    {
      "order": 1,
      "name": "Traffic Lights Dribble",
      "description": "string",
      "setup": "string",
      "rules": "string",
      "chaos_levers": ["random constraint calls"],
      "coaching_points": ["string"],
      "progressions": ["easier variant", "harder variant"],
      "duration_min": 8
    }
    // ...skill_games[1], skill_games[2]
  ],
  "big_game": {
    "name": "Small-Sided Possession Soccer",
    "description": "string",
    "setup": "string",
    "rules": "string",
    "team_size": "3v3 or 4v4",
    "scoring": "string",
    "duration_min": 15
  },
  "cool_down_reflection_prompts": ["string"],
  "inclusion_notes": "string",
  "safety_notes": "string"
}
```

This lets the app render: a "today's lesson" screen, a browsable unit calendar (20 tiles), a searchable skill/game library (tag games by skill, equipment, space needed), and a printable lesson card for teachers who want a paper copy on the field.

---

## 8. Suggested App Features (beyond content display)

- **Core navigation:** Dropdown 1 — select Sport or Focus Area (e.g. Soccer, Team Play). Dropdown 2 — select Lesson Number, shown with its theme title (e.g. "Lesson 9: Triple Threat"). Selecting both opens the full Lesson Page (the Section 10 template, fully populated) with the breakdown, activity descriptions, and equipment list ready for the teacher to follow on the field.
- **"Today" view** — teacher opens the app, sees exactly where their class is up to in the current unit, one tap to view/print the lesson.
- **Unit picker / progress tracker** — mark lessons complete, see progress across the 20 days, jump ahead/back if a lesson gets rained out.
- **Equipment checklist** — auto-generated from the day's lesson.
- **Timer built in** — for each segment (skill game 1/2/3/big game), with an audible transition cue.
- **Space/class-size adapter** — quick toggle for smaller class sizes, indoor/limited space, or larger groups (games scale team sizes/space automatically where possible).
- **Reflection log** — quick teacher notes per lesson (what worked, what to adjust) that persist for next year.
- **Game library / search** — browse all games by sport, focus skill, or "chaos lever" type, independent of the day-by-day sequence — useful for teachers building their own sessions.

---

## 9. Settled Decisions

| Question | Decision |
|---|---|
| **Class size** | Design games/team sizes for 20–30 students |
| **Space** | Full field for field sports; concrete half-court for basketball/netball sessions |
| **Session length** | 45 minutes, fixed, every lesson |
| **Rippa Rugby ruleset** | NZ Rugby's official **Rippa Rugby** rules (non-contact, belt & tags) — matches what most schools already run |
| **Cricket ruleset** | Cricket NZ's **ANZ Junior Game** modified format (shorter pitch, fewer players, modified/soft ball) — the current national junior standard for this age group, sits above Smash Play (5–8yo) and below Hard Ball |
| **Tennis format** | Tennis NZ's **Hot Shots** modified format (smaller court/net, low-compression ball) — already familiar to most NZ schools/coaches |
| **Assessment** | No formal assessment output. Teacher judgement only, supported by simple in-lesson "look-fors" (informal observation prompts, not a rubric or recorded grade) |

### 9.1 Confirmed 45-Minute Lesson Timing

Every lesson follows this fixed structure (adds to 45 min):

| Segment | Time |
|---|---|
| Warm-Up | 5 min |
| Skill Game 1 | 6 min |
| Skill Game 2 | 6 min |
| Skill Game 3 | 6 min |
| Big Game | 12 min |
| Warm-Down (cool-down / stretch) | 5 min |
| Discussion & Reflection | 5 min |
| **Total** | **45 min** |

---

## 10. ERO-Ready Lesson Plan Template

To make each of the 240 lessons hold up to external review (ERO) as well as be genuinely useful to a teacher on the field, every lesson in the app will be built to this template. This is the standard used for the full Soccer unit in Section 11, and should be used for every other unit going forward.

**Header block**
- Sport/Unit, Lesson number (of 20), Block (1–4), Lesson Title (the fun, game-based theme name shown in the app's lesson picker)
- **Learning Intention (WALT – We Are Learning To):** one clear, student-facing sentence
- **Success Criteria (WILF – What I'm Looking For):** 2–3 observable, student-facing "I can..." statements
- **NZC Links:** relevant strand(s) (A/B/C/D) + key competencies drawn on
- **School Values Focus:** which of Aroha / Mōhio / Manaaki / Pānga is the explicit thread for this lesson's reflection, and why it fits the lesson content
- **Equipment List**
- **Safety Considerations:** specific to this lesson's activities (space, equipment, technique risk points)

**Skill Breakdown**
- 3 ordered, numbered technique steps for the lesson's focus skill, each paired with a one-sentence explanation of *why* it's done that way
- This is the technical "how" behind the WILF statements — it's what lets a teacher watch a student attempt the skill and know exactly which specific part of the technique to correct, rather than judging the attempt as simply good or not-good
- Written in plain, student-facing coaching language a teacher can read aloud or paraphrase on the field
- Sits above the games in both the app and any printed lesson card, so it's the first thing a teacher reads before running the session

**Lesson body (mapped to the 45-min timing above)**
- Warm-Up (5 min): themed to the day's focus skill where possible
- Skill Game 1, 2, 3 (6 min each): name, setup, how to play, coaching points, an easier variant and a harder variant (differentiation), and which "chaos lever" (Section 5) is driving the game
- Big Game (12 min): name, setup, team size, scoring/rules, what makes today's skill matter to winning
- Warm-Down (5 min): light movement + static stretch
- Discussion & Reflection (5 min): 2–3 skill-focused questions + 1 question explicitly linked to the lesson's School Values Focus, connecting the physical/team experience back to the value

**Teacher support**
- **Look-Fors:** 3–4 brief, plain-language things a teacher can watch for while the games run, to inform their own judgement of progress (not a scored rubric — just "what good looks like today")
- **Inclusion Notes:** how to adapt for a range of abilities/confidence levels within the same game

---

## 11. Soccer Unit — Full 20-Lesson Build

See the companion file **`soccer_unit_full.md`** for all 20 fully written lessons in the template above. This is the seed/pilot unit — once it's approved, the same template will be used to write out the remaining 8 sport units and 3 focus units.

---

*Next step after Soccer is approved: apply the same template to the remaining units, starting with whichever sport/focus area you want next.*

*(Program now totals 12 units × 20 lessons = 240 lessons.)*

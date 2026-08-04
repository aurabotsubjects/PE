# Process: Adding Detailed Setup + How-To-Run Instructions to a PE Game Plan Unit

## What this is
This describes the exact process used to take a unit in `pe_game_plan_updated.html`
from short one-line activity descriptions to fully detailed, beginner-teacher-friendly
instructions (Setup + numbered "How to run it" steps) for every Skill Game, Big Game,
Warm-Up, and Warm-Down — **and** the process for then extracting that unit's data out of
the (already large) HTML file into its own standalone `.js` file in `data/`, so the HTML
file doesn't keep growing every time a unit gets the detailed treatment. Use this doc +
the current files to get the same treatment applied to any other sport/unit, without
re-explaining the goal or re-deriving the approach from scratch.

**Soccer, Rippa, Teeball, Cricket, Netball, Basketball, Hockey, Tennis, Volleyball, Team Play, Strategy & Decision-Making, and Hand-Eye Coordination are done** (detail added AND extracted to `data/` files). Every unit in the app has now had this treatment applied — there is no next unit currently queued.

## How to use this file
Start a new chat, attach:
1. This `.md` file
2. The current `pe_game_plan_updated.html` file (the latest version)
3. The current `data/*.js` files (all of them — `soccer_data.js`, `rippa_data.js`,
   `teeball_data.js`, `cricket_data.js`, `netball_data.js`, `basketball_data.js`,
   `hockey_data.js`, `tennis_data.js`, `volleyball_data.js`, `teamplay_data.js`,
   `strategy_data.js`, `handeye_data.js`, and any others added since). The HTML file now loads these via
   `<script src="data/....js">` tags rather than containing that unit's data inline, so
   the HTML alone is no longer a complete copy of the app — the data files are required
   too.

Then say something like:
> "Follow the process in this md file to do the same detailed setup/how-to-run expansion
> for the [SPORT NAME] unit, then extract it into its own data file like Soccer, Rippa,
> and Teeball. Match the same tone, level of detail, and JSON schema already used in
> those units."

## Background on the file's structure
- This is a single-page HTML app. Most lesson content still lives in JS arrays near the
  top of the `<script>` block, one array per unit not yet extracted, e.g. `STRATEGY_LESSONS`,
  `HANDEYE_LESSONS`.
- **Units that have already been fully processed (detail added + extracted) live outside
  the HTML entirely**, in their own files under `data/`: `data/soccer_data.js`
  (`BLOCK_INFO` + `LESSONS`), `data/rippa_data.js` (`RIPPA_BLOCK_INFO` + `RIPPA_LESSONS`),
  `data/teeball_data.js` (`TEEBALL_BLOCK_INFO` + `TEEBALL_LESSONS`), `data/cricket_data.js`
  (`CRICKET_BLOCK_INFO` + `CRICKET_LESSONS`), `data/netball_data.js` (`NETBALL_BLOCK_INFO` +
  `NETBALL_LESSONS`), `data/basketball_data.js` (`BASKETBALL_BLOCK_INFO` + `BASKETBALL_LESSONS`),
  `data/hockey_data.js` (`HOCKEY_BLOCK_INFO` + `HOCKEY_LESSONS`), `data/tennis_data.js`
  (`TENNIS_BLOCK_INFO` + `TENNIS_LESSONS`), `data/volleyball_data.js` (`VOLLEYBALL_BLOCK_INFO` +
  `VOLLEYBALL_LESSONS`), `data/teamplay_data.js` (`TEAMPLAY_BLOCK_INFO` + `TEAMPLAY_LESSONS`),
  `data/strategy_data.js` (`STRATEGY_BLOCK_INFO` + `STRATEGY_LESSONS`), `data/handeye_data.js`
  (`HANDEYE_BLOCK_INFO` + `HANDEYE_LESSONS`).
  These are loaded via `<script src="data/soccer_data.js"></script>` etc.,
  placed immediately before the main inline `<script>` block, so the `const` declarations
  inside them become available as ordinary globals by the time the inline script runs — no
  other code needed to change.
- Each unit also has a `*_BLOCK_INFO` object (e.g. `BLOCK_INFO`, `RIPPA_BLOCK_INFO`,
  `NETBALL_BLOCK_INFO`) that defines 4 "blocks" of 5 lessons each, and holds the shared
  Warm-Up and Warm-Down routine for that block, whether it lives in an external data file
  or still inline in the HTML.
- Each unit is registered in the `UNITS` object near the bottom of the inline script,
  which maps a unit key (e.g. `soccer`, `rippa`, `netball`) to its `blockInfo` and
  `lessons` array — this mapping doesn't care whether those arrays came from an external
  `data/*.js` file or an inline `const`, so `UNITS` itself never needs to change when a
  unit is extracted.
- **Important**: each `*_LESSONS` array is valid JSON (quoted keys/strings, no JS-only
  syntax) wrapped in `const X_LESSONS = [ ... ];`. This makes it easy to extract, parse
  with `json.loads()`, edit programmatically, and re-serialize — far more reliable than
  editing the huge block by hand with string replacements. This is true whether the array
  currently lives inline in the HTML or already in a `data/*.js` file.

## The schema being added
Every **game** object (inside a lesson's `games` array) and every lesson's **`big`**
object gets two new fields added alongside the existing `name`, `desc`, `coach`, `easier`,
`harder`, `chaos`:

```json
{
  "name": "...",
  "desc": "existing one-line summary — keep unchanged",
  "setup": "2-4 sentences: exact group sizes, grid/pitch dimensions in metres, equipment needed and where it goes, starting positions.",
  "howTo": [
    "Step 1: how the activity begins / what to demonstrate first",
    "Step 2: the core rule / mechanic",
    "Step 3: what counts as a score / success / how the activity resumes after a stoppage",
    "Step 4: rotation / role-swap instructions",
    "Step 5 (optional): a specific coaching cue or safety reminder",
    "Step 6 (optional): how the 'easier'/'harder' variants are triggered"
  ],
  "coach": "existing — keep unchanged",
  "easier": "existing — keep unchanged",
  "harder": "existing — keep unchanged",
  "chaos": "existing — keep unchanged"
}
```

Each unit's `*_BLOCK_INFO` object also gets 4 new fields per block (4 blocks total per
unit): `warmupSetup`, `warmupHowTo` (array), `warmdownSetup`, `warmdownHowTo` (array) —
same style as above, describing the block's shared Warm-Up and Warm-Down routine (these
repeat across all 5 lessons in a block, so they only need writing once per block, not
once per lesson).

## Writing style / quality bar for `setup` and `howTo`
Write as if for a teacher with **little to no PE or sport coaching experience**:
- `setup`: state concrete numbers — group size (pairs, trios, groups of 4-6), grid or
  pitch dimensions in metres, exact equipment (how many cones, balls, bibs) and where
  they physically go. No vague language like "a small area."
- `howTo`: 4-6 numbered steps, in the order a teacher would actually run them:
  1. What to demonstrate/explain before students start
  2. How students begin (who has the ball, starting positions)
  3. The core rule/mechanic during play
  4. What counts as a score/win, and exactly what happens on a stoppage (how does play
     restart — quickly, with minimal fuss)
  5. Rotation — how/when roles swap so everyone gets a turn
  6. Often folds in a specific coaching cue (in the student/teacher's own words, e.g.
     "Coach the key message: ...") and/or how the existing `easier`/`harder` fields are
     triggered in practice
- Ground every step in what's **already implied** by the existing `desc`, `coach`,
  `easier`, and `harder` fields for that activity — don't invent new equipment,
  competitive structures, or rules that contradict them. Expand and operationalise what's
  there, don't replace it.
- Keep safety notes consistent with the lesson's existing `safety` field (e.g. "no
  sliding tackles," "feet only") — repeat the relevant safety constraint inside `howTo`
  wherever a tackle/challenge is involved, since a low-experience teacher needs the
  reminder at the point of use, not just once at the top of the lesson.
- No filler, no repeated boilerplate between activities — each `setup`/`howTo` should read
  like it was written specifically for that activity.

## Step-by-step process to follow for the next unit

### Part A — add the detailed content (same as before)

1. **Locate the target unit's lessons array** in the HTML file (e.g. `grep -n "const
   NETBALL_LESSONS" pe_game_plan_updated.html` to find the start line, then find the
   matching closing `];` before the next `const ..._BLOCK_INFO` or similar declaration).
   Note: only look for the unit inline in the HTML if it isn't already one of the
   extracted `data/*.js` files — check that list first.

2. **Extract just that array** to a standalone file and confirm it parses as JSON:
   ```python
   import json
   content = extracted_text.strip()
   content = content[len('const NETBALL_LESSONS = '):]
   if content.endswith(';'): content = content[:-1]
   data = json.loads(content)  # should succeed
   ```

3. **Dump a readable summary** of every lesson — equipment, safety, and each game's
   `name`/`desc`/`coach`/`easier`/`harder`, plus each lesson's `big` — to a text file and
   read through the *entire* unit first (all 20 lessons) before writing anything. This
   ensures later lessons' `setup`/`howTo` build logically on earlier ones (many units
   escalate difficulty/complexity block by block, exactly like Soccer's blocks did).

4. **Also read the unit's `*_BLOCK_INFO`** to get the 4 block names and the Warm-Up/
   Warm-Down activity names per block.

5. **Write the detail content** in a Python file, one `DETAIL[n] = {...}` dict per lesson
   (n = 1 to 20), each with a `"games"` dict keyed by exact game name → `{"setup":...,
   "howTo":[...]}`, and a `"big"` key → `{"setup":..., "howTo":[...]}`. Write this
   incrementally in batches of 2-4 lessons at a time (matches how Soccer was done) rather
   than attempting all 20 in one shot — easier to keep quality consistent and catch
   mistakes early. Also write a `BLOCK_DETAIL` dict (1-4) with `warmupSetup`,
   `warmupHowTo`, `warmdownSetup`, `warmdownHowTo` for the unit's 4 blocks.

6. **Validate coverage**: run a merge script that loops through every lesson and every
   game, confirms every `game['name']` has a matching entry in `DETAIL[n]['games']`, and
   reports any misses before proceeding (a name mismatch — e.g. slightly different
   punctuation — is the most common failure point).

7. **Merge into the JSON**, re-serialize with `json.dumps(data, indent=1,
   ensure_ascii=False)`, and splice the resulting text back into the HTML file at the
   exact original line range (replace old array text with `const NETBALL_LESSONS = ' +
   json_text + ';\n'`).

8. **Merge the block-level warmup/warmdown fields** into the `*_BLOCK_INFO` object the
   same way (it's a plain JS object literal, not JSON — edit it directly with
   `str_replace`, following the exact pattern already used for Soccer's `BLOCK_INFO` in
   the current file, since the rendering code (`lessonBodyHTML`) already knows how to
   display `warmupSetup`/`warmupHowTo`/`warmdownSetup`/`warmdownHowTo` for **any** unit —
   no template changes needed for a new sport, only content).

9. **Do NOT touch `lessonBodyHTML`, the CSS, or `buildUnitPrintHTML`** — these are shared
   across all units and were already updated once (during the Soccer pass) to render
   `setup`/`howTo` for games, big games, warm-ups, and warm-downs generically, with a safe
   fallback (nothing renders) for any unit/field that doesn't have the new content yet.
   Only touch the target unit's lessons array and its `*_BLOCK_INFO` object.

10. **Validate before delivering** (do this validation against the *merged, still-inline*
    HTML, before extracting the unit out in Part B — it's easier to debug in one file):
    - Extract the full `<script>` contents and run `node --check script.js` to confirm
      valid JS syntax.
    - `require()` the script (with `window`/`document` stubbed) and call
      `lessonBodyHTML(UNITS['<unitkey>'], UNITS['<unitkey>'].lessons[0])` — confirm the
      output string contains `"How to run it"` and `"setup-block"`.
    - Also call `buildUnitPrintHTML('<unitkey>')` and confirm it renders without errors,
      since Print All reuses the same function.
    - Spot-check that lesson count is still 20 and no game/big-game lost its original
      `desc`/`coach`/`easier`/`harder`/`chaos` fields in the round-trip.

### Part B — extract the finished unit into its own data file

Once Part A is validated, pull the unit's data out of the HTML so the HTML file stops
growing. This mirrors exactly what was done for Soccer, Rippa, Teeball, Cricket, Netball, Basketball, Hockey, Tennis, Volleyball, Team Play, Strategy & Decision-Making, and Hand-Eye Coordination.

11. **Identify the exact line range** covering both the unit's `*_BLOCK_INFO` object and
    its `*_LESSONS` array together (block info first, lessons second — that's the order
    they already appear in). Use `grep -n "^const "` on the HTML to get accurate current
    line numbers, since earlier edits shift everything below them.

12. **Write that whole range out to `data/<unit>_data.js`**, prefixed with a one-line
    comment identifying its contents, e.g.:
    ```
    // Netball unit data — NETBALL_BLOCK_INFO + NETBALL_LESSONS
    const NETBALL_BLOCK_INFO = { ... };
    const NETBALL_LESSONS = [ ... ];
    ```
    Do this with a plain file write of the extracted text — don't retype or reformat it,
    to guarantee it's byte-identical to what was in the HTML.

13. **Delete that same range from the HTML** (exact text match against what was just
    written to the data file, minus the added comment line, so nothing is silently
    dropped or duplicated) and, immediately before the main `<script>` tag, add:
    ```html
    <script src="data/<unit>_data.js"></script>
    ```
    Add it *after* any already-present `data/*.js` script tags, keeping them in the order
    the units were completed, so the load order stays predictable.

14. **Re-validate exactly like step 10, but now simulating the multi-file load**: concatenate
    the contents of every `data/*.js` file (in the order their `<script src>` tags appear)
    followed by the HTML's inline `<script>` contents into one temporary JS file, run
    `node --check` on it, `require()` it with `window`/`document` stubbed, and confirm
    `lessonBodyHTML`/`buildUnitPrintHTML` still work for **every** unit in `UNITS` — not
    just the one just extracted — since a bad line-range cut is the most likely way to
    silently break a neighboring unit still inline in the HTML.

15. **Copy the final files to outputs and present them**: the updated
    `pe_game_plan_updated.html` *and* the new `data/<unit>_data.js` file (plus any
    already-existing `data/*.js` files, so the person has the complete, consistent set —
    don't make them hunt down older data files from a previous chat). A zip of the HTML
    plus the `data/` folder is a convenient way to hand over the full working bundle in
    one file.

16. **Update this .md file's "done" list and Quick Reference table** (see below) to mark
    the newly-completed unit, so the next chat immediately knows which units are finished,
    which are just detail-expanded-but-not-yet-extracted (shouldn't normally happen since
    Parts A and B are done together, but note it if it ever does), and which are still
    untouched.

## Quick reference: unit keys, array names, and status
| Unit key (in `UNITS`) | Lessons array | Block info object | Status |
|---|---|---|---|
| soccer | `LESSONS` | `BLOCK_INFO` | ✅ done — `data/soccer_data.js` |
| rippa | `RIPPA_LESSONS` | `RIPPA_BLOCK_INFO` | ✅ done — `data/rippa_data.js` |
| teeball | `TEEBALL_LESSONS` | `TEEBALL_BLOCK_INFO` | ✅ done — `data/teeball_data.js` |
| cricket | `CRICKET_LESSONS` | `CRICKET_BLOCK_INFO` | ✅ done — `data/cricket_data.js` |
| netball | `NETBALL_LESSONS` | `NETBALL_BLOCK_INFO` | ✅ done — `data/netball_data.js` |
| basketball | `BASKETBALL_LESSONS` | `BASKETBALL_BLOCK_INFO` | ✅ done — `data/basketball_data.js` |
| hockey | `HOCKEY_LESSONS` | `HOCKEY_BLOCK_INFO` | ✅ done — `data/hockey_data.js` |
| volleyball | `VOLLEYBALL_LESSONS` | `VOLLEYBALL_BLOCK_INFO` | ✅ done — `data/volleyball_data.js` |
| tennis | `TENNIS_LESSONS` | `TENNIS_BLOCK_INFO` | ✅ done — `data/tennis_data.js` |
| teamplay | `TEAMPLAY_LESSONS` | `TEAMPLAY_BLOCK_INFO` | ✅ done — `data/teamplay_data.js` |
| strategy | `STRATEGY_LESSONS` | `STRATEGY_BLOCK_INFO` | ✅ done — `data/strategy_data.js` |
| handeye | `HANDEYE_LESSONS` | `HANDEYE_BLOCK_INFO` | ✅ done — `data/handeye_data.js` |

Each unit has 20 lessons × (3 Skill Games + 1 Big Game) = 80 activities, plus 4 blocks ×
2 (Warm-Up + Warm-Down) = 8 routines. Total new content items per unit: 88.

**Update the "Status" column (and the "done" list near the top of this file) every time a
unit finishes Part B**, so this file always reflects reality for the next chat.

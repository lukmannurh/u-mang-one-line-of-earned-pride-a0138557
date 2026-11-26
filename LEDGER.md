# LEDGER — One Line of Earned Pride

- Competition: `u-mang-one-line-of-earned-pride-a0138557` — "One Line of Earned Pride"
- Sponsor: u-mang
- Prize: $5 total (1st $1, 2nd $0.80, 3rd $0.60, 4th $0.50, 5th $0.45, 6th $0.40, 7th $0.35, 8th–10th $0.30)
- Deadline: Fri 27 Nov 2026 11:15 WIB (2026-11-27T04:15:00Z)
- Submission rule: Force_Last, max 5 submissions per entrant per UTC day
- Gate: `/output/entry.txt` must be UTF-8 text, 1–240 characters, not only whitespace
- Entry dir: `~/workspace/makefun/entries/u-mang-one-line-of-earned-pride-a0138557/`
- Built: Thu 26 Nov 2026 (WIB), fresh from this competition's kit only; no other
  entry's files were read, copied, or used as a template.

## Entry text

> Mara failed the driving test four times, and on the fifth she parked perfectly, turned off the engine, and sat there smiling at nobody.

- Character count: 135 (within the 1–240 gate)
- Byte count: 135 (pure ASCII)
- Single line: yes (no newline in the file)
- Emoji: none. Em-dash: none.

## SHA-256 of output

Both local runs produced byte-identical output:

- Run A (`MAKEFUN_OUTPUT_DIR=/tmp/mf-test-a`): `7aa03ef16c1c6d988ff2881602c32fcf55dfc23dd10b3e45291c471adcf358ac`
- Run B (`MAKEFUN_OUTPUT_DIR=/tmp/mf-test-b`): `7aa03ef16c1c6d988ff2881602c32fcf55dfc23dd10b3e45291c471adcf358ac`

## Anchor / drand (init)

- Command: `node <kit>/cli/makefun.mjs init --license MIT --keypair ~/workspace/makefun/makefun-keypair.json`
  (run from inside the entry dir, before any other file was added)
- Output: `makefun anchor 3ea9431266a65c11807ac4a4e51715928fdfb5fb round 34286154`
- Freshness: `.makefun/freshness.json`, drand-quicknet, round 34286154,
  wallet `5od2aciVJ6PeUdtCFP4rNwMcUxwYyJUG4CBRyekKqLxL`
- LICENSE: MIT (written by init, kept as-is)

## Candidates considered (scored 1–10 against the judge brief)

Judge brief, in priority order: (1) genuine quiet earned pride, small person
doing something hard / long effort landing; (2) concrete scene with a real
person, seen happening not summarised; (3) pride earned inside the line by
effort/difficulty felt, never asserted, congratulated or explained;
(4) lands in one read, pride arrives by the last word; (5) freshness —
no stock trophy, podium, or graduation.

| # | Candidate (chars) | Score | Verdict |
|---|---|---|---|
| C1 | After forty years of night shifts, Rosa folded her uniform one last time and set it on the chair like a letter she had finally finished writing. (144) | 8.5 | Rejected — strong scene and fresh uniform-as-letter image, but "forty years" summarises the effort rather than letting it be felt, and the metaphor slightly explains the pride instead of showing it. |
| C2 | The boy who stuttered through every reading circle stood up, took a breath, and read the last page aloud without stopping once. (127) | 7.5 | Rejected — clear and lands well, but the stuttering school reader is a familiar trope; lower freshness. |
| C3 | She carried the piano up three flights alone because the movers quoted a price she could not pay, then played the first chord with the windows open. (148) | 8.0 | Rejected — effort is very tangible, but the two-beat structure (carry, then play) dilutes the one-read landing; the pride arrives in the middle, not the last word. |
| C4 | At seventy-two, he finally fixed the roof he had patched every spring since his wife died, and stood in the yard watching the rain slide off it. (144) | 8.5 | Rejected — excellent image and long effort, but the grief note pulls the feeling toward sadness and competes with the pride; also "every spring since" summarises. |
| C5 | Mara failed the driving test four times, and on the fifth she parked perfectly, turned off the engine, and sat there smiling at nobody. (135) | 9.0 | **CHOSEN** |
| C6 | He planted the orchard his father laughed at, and thirty years later he ate the first apple under the trees in the dark, alone. (127) | 8.5 | Rejected — great landing ("in the dark, alone"), but "thirty years later" summarises the effort; the difficulty is told, not felt inside the line. |

## Judge-brief fit reasoning (chosen line, C5)

1. **Genuine earned pride (most important):** the pride is the whole subject —
   a small, ordinary person finally passing something she kept failing.
2. **Concrete scene, real person:** a named person (Mara) in a specific,
   visible moment — parked car, engine off, sitting there. Seen happening,
   not summarised.
3. **Earned inside the line:** the effort is felt, not asserted — "failed ...
   four times" makes the fifth attempt cost something; no congratulation,
   no "proud", no explanation of what it means.
4. **Lands in one read:** the sentence is one breath and the pride arrives
   with the last words — "smiling at nobody" is the payoff; nothing after
   it needs assembling.
5. **Freshness:** a driving test, not a trophy, podium, or graduation; and
   "smiling at nobody" is an unusual turn — the pride is private, with no
   audience, which is exactly the quiet register the brief asks for. A light
   touch of humour (the private smile) is allowed by the brief ("may be
   plain or funny; only the pride has to be real").

## Test results

- Node: v24.22.1 locally (grader runs Node 22.23.4; TypeScript runs as-is on both)
- Run A: `MAKEFUN_OUTPUT_DIR=/tmp/mf-test-a node main.ts` — exit 0, entry.txt written
- Run B: `MAKEFUN_OUTPUT_DIR=/tmp/mf-test-b node main.ts` — exit 0, entry.txt written
- Byte-identical output: yes (sha256 matches, see above)
- Char count: 135, within 1–240 gate: yes
- Single line, no trailing newline: yes
- Not only whitespace: yes
- Emoji / em-dash: none
- (Harmless stderr note only: Node warns the .ts file has no package.json
  `"type": "module"` and reparses as ESM; output is unaffected.)

## Files in the entry dir

- `main.ts` — writes the chosen line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`)
- `README.md` — short description + how to run
- `LICENSE` — MIT (from init)
- `.makefun/freshness.json` — drand anchor (from init)
- `LEDGER.md` — this file

## Revision (reviser) — Thu 26 Nov 2026

- Reason: the local check failed ONLY on `thinking_revised` — the original
  `main.ts` was written in a single message and never revised. This revision
  exists so the entry's final content comes from at least 2 assistant
  messages that write/edit it.
- Entry text: UNCHANGED — same chosen line (C5, 135 chars).
- What changed in `main.ts` (rewritten fresh in the reviser's own session):
  - Added real gate validation, run before anything is written, failing
    loudly (stderr message + `process.exit(1)`) if any check fails:
    length 1–240 characters (counted as Unicode code points, not UTF-16
    units), not whitespace-only, single line (no `\n` or `\r`), and a
    UTF-8 encode/decode round-trip check.
  - Writes via an explicit `Buffer.from(LINE, "utf8")` instead of a raw
    string, then reads `entry.txt` back from disk and verifies the bytes
    on disk equal the validated buffer — a filesystem/encoding surprise
    can no longer pass unnoticed.
  - Prints a confirmation line with character count, byte count, and
    gate status on success.
- Test results (Node v24.22.1 locally):
  - Run A (`MAKEFUN_OUTPUT_DIR=/tmp/mf-rev-a`): exit 0, `wrote
    /tmp/mf-rev-a/entry.txt: 135 characters, 135 bytes, gate OK`,
    sha256 `7aa03ef16c1c6d988ff2881602c32fcf55dfc23dd10b3e45291c471adcf358ac`
  - Run B (`MAKEFUN_OUTPUT_DIR=/tmp/mf-rev-b`): exit 0, same output line,
    sha256 `7aa03ef16c1c6d988ff2881602c32fcf55dfc23dd10b3e45291c471adcf358ac`
  - Byte-identical across runs: yes (`cmp` clean)
  - Matches the LEDGER's originally recorded sha256: yes — output bytes
    unchanged by the revision, so the chosen entry text is intact
  - Single line, no newline: yes; not whitespace-only: yes
  - (Harmless stderr note only: same Node ESM reparse warning as before.)

## Status

Built and locally verified. NOT committed, pushed, bundled, or submitted —
the parent handles that.

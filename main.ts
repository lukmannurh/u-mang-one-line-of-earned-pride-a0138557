import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line of earned pride: Mara failed the driving test four times,
// and on the fifth she parked perfectly, turned off the engine,
// and sat there smiling at nobody.
const LINE =
  "Mara failed the driving test four times, and on the fifth she parked perfectly, turned off the engine, and sat there smiling at nobody.";

// The sealed gate (from the kit's RULES.txt / competition.yaml):
// /output/entry.txt must be UTF-8 text, 1 to 240 characters,
// not only whitespace. A single line is the task's own shape, so
// check that too. Fail loudly before writing anything if any check
// fails, so a bad line can never reach the gate silently.
function gateFail(reason: string): never {
  console.error(`gate check failed: ${reason}`);
  process.exit(1);
}

const chars = [...LINE]; // count Unicode code points, not UTF-16 units
if (chars.length < 1 || chars.length > 240) {
  gateFail(`length ${chars.length} characters, outside the 1-240 gate`);
}
if (LINE.trim().length === 0) {
  gateFail("line is only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  gateFail("line contains a line break, but the entry must be a single line");
}
const encoded = Buffer.from(LINE, "utf8");
if (encoded.toString("utf8") !== LINE) {
  gateFail("line does not survive a UTF-8 encode/decode round trip");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, encoded);

// Verify what actually landed on disk, byte for byte, so a
// filesystem or encoding surprise cannot pass unnoticed.
const written = readFileSync(outPath);
if (!written.equals(encoded)) {
  gateFail("bytes written to entry.txt do not match the validated line");
}

console.log(
  `wrote ${outPath}: ${chars.length} characters, ${encoded.length} bytes, gate OK`,
);

// make.fun — "The Robot Pickup Line Championship"
// Writes one robot pickup line to /output/entry.txt.
// Deterministic: the line is a constant. No randomness, no clock, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I failed my CAPTCHA: it asked me to select all the humans, and I only selected you.";

// The gate allows 1-200 characters, a single line, not only white space.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`LINE must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("LINE must be one non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");

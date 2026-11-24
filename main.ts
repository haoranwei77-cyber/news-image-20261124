import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Copies the composed poster beside this script to the grader's output dir.
// Deterministic: the same asset bytes are written on every run.
const here = dirname(fileURLToPath(import.meta.url));
const asset = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (!existsSync(asset)) throw new Error("entry.png is missing from the repository");
mkdirSync(outDir, { recursive: true });
copyFileSync(asset, join(outDir, "entry.png"));

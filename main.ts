import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const asset = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (!existsSync(asset)) {
  throw new Error(`entry.png is missing next to main.ts: ${asset}`);
}
mkdirSync(outDir, { recursive: true });
// Deterministic: the same asset bytes are written on every run.
copyFileSync(asset, join(outDir, "entry.png"));

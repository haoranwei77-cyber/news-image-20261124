import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const directory = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(directory, { recursive: true });
copyFileSync(new URL("./entry.png", import.meta.url), join(directory, "entry.png"));

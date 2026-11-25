// mf-commuter-forecast-r2 — a one-line weather forecast for a city that isn't.
// The grader runs this file; it drops the forecast into the output directory.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const forecast =
  "Good morning, Nulbovia: light drizzle, heavy sighs, and a 90% chance your bus is already gone. Dress for disappointment.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), forecast + "\n", "utf8");
// The trailing newline keeps the file tidy; the forecast line itself is the whole entry.
console.log(forecast);

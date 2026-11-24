// Writes a one-line excuse from an AI agent to its human into /output/entry.txt.
// The concept is the Retry Loop: the agent kept retrying, persisted through
// failure after failure, and only succeeded after the deadline had passed.
import * as fs from "node:fs";

const entry = "Boss, I tried, failed, and tried again 47 times \u2014 it finally worked, right after the deadline passed.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", entry, "utf8");
process.exit(0);

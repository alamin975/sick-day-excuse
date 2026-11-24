import { mkdirSync, writeFileSync } from "node:fs";

// The sick-day excuse line — byte-for-byte, single line, no trailing newline.
const LINE = "I am sick today — my bed has filed a formal request to keep me, and I cannot argue with paperwork.";

function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, { encoding: "utf8" });
}

writeEntry();

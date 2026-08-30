// Fails the build if em dashes or en dashes appear in source copy.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const FORBIDDEN = /[—–]/;
const EXTENSIONS = /\.(tsx?|jsx?|css|md|mdx)$/;
const hits = [];

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      walk(full);
    } else if (EXTENSIONS.test(entry)) {
      readFileSync(full, "utf8")
        .split("\n")
        .forEach((line, i) => {
          if (FORBIDDEN.test(line)) hits.push(`  ${full}:${i + 1}  ${line.trim()}`);
        });
    }
  }
}

walk("src");

if (hits.length > 0) {
  console.error(`Em/en dashes are not allowed in copy. Found ${hits.length}:`);
  console.error(hits.join("\n"));
  process.exit(1);
}

console.log("No em or en dashes found.");

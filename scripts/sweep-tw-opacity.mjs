// One-shot transform: convert Tailwind v4 arbitrary opacity / z-index
// values like `/[0.045]` and `z-[60]` into their canonical short form
// (`/4.5`, `z-60`). Mechanical, idempotent, safe.
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, extname } from "node:path";

const ROOT = "src";
const EXTS = new Set([".ts", ".tsx", ".css"]);

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (EXTS.has(extname(entry.name))) yield full;
  }
}

const opacityRe = /\/\[0\.(\d+)\]/g;
const zIndexRe = /\bz-\[(\d+)\]/g;

function convertOpacity(_, digits) {
  // 0.045 -> "045" -> 4.5;  0.04 -> "04" -> 4;  0.88 -> "88" -> 88
  const padded = digits.length < 2 ? digits.padEnd(2, "0") : digits;
  const num = parseFloat(`0.${padded}`) * 100;
  // Strip trailing zeros so 4.50 -> 4.5, 8.00 -> 8
  const out = Number.isInteger(num) ? String(num) : String(parseFloat(num.toFixed(2)));
  return `/${out}`;
}

let changed = 0;
for await (const file of walk(ROOT)) {
  const src = await readFile(file, "utf8");
  const next = src.replace(opacityRe, convertOpacity).replace(zIndexRe, "z-$1");
  if (next !== src) {
    await writeFile(file, next);
    changed += 1;
    console.log("rewrote", file);
  }
}
console.log(`Done. ${changed} file(s) updated.`);

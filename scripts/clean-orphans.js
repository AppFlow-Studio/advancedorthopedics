import fs from "node:fs/promises";
const RAW = "orphan_pages.txt";
const OUT = "orphan_pages.clean.txt";

const run = async () => {
  const lines = (await fs.readFile(RAW, "utf8"))
    .split(/\r?\n/)
    .map(l => l.trim())
    .filter(Boolean)                                       // non-empty
    .filter(l => !l.includes("/_next/static/"))            // drop assets
    .filter(l => !/^https?:\/\/www\./i.test(l))            // drop www dup
    .filter(l => !/^https?:\/\//.test(l)
      ? true
      : l.startsWith("https://mountainspineorthopedics.com"));

  // normalise -> relative path only
  const rels = lines.map(l => l.replace(/^https?:\/\/[^/]+/, ""));
  await fs.writeFile(OUT, rels.join("\n"));
  console.log(`Cleaned list → ${OUT} (${rels.length} URLs)`);
};

run(); 
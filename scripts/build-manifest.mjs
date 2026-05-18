#!/usr/bin/env node
import { readdir, readFile, writeFile, stat } from "node:fs/promises";
import { join, relative, basename } from "node:path";
import matter from "gray-matter";

const ROOT = process.cwd();
const VAULT = join(ROOT, "vault");
const OUT = join(ROOT, "manifest.json");

const VALID_VISIBILITIES = new Set(["public", "extended", "editor"]);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const out = [];
  for (const e of entries) {
    if (e.name.startsWith(".")) continue;
    const full = join(dir, e.name);
    if (e.isDirectory()) {
      out.push({ kind: "dir", name: e.name, path: full, children: await walk(full) });
    } else if (e.isFile() && e.name.endsWith(".md")) {
      out.push({ kind: "file", name: e.name, path: full });
    }
  }
  return out;
}

function slugFromPath(absPath) {
  const rel = relative(VAULT, absPath).replace(/\\/g, "/");
  return rel.replace(/\.md$/, "");
}

function formatDate(d) {
  if (!d) return null;
  if (d instanceof Date) return d.toISOString().slice(0, 10);
  if (typeof d === "string") return d.slice(0, 10);
  return String(d);
}

async function parseFile(node) {
  const raw = await readFile(node.path, "utf8");
  const { data } = matter(raw);
  const visibility = VALID_VISIBILITIES.has(data.visibility) ? data.visibility : "public";
  const slug = slugFromPath(node.path);
  return {
    type: "file",
    slug,
    path: relative(ROOT, node.path).replace(/\\/g, "/"),
    title: data.title || basename(node.name, ".md"),
    visibility,
    status: data.status || null,
    doc_type: data.type || null,
    project: data.project || null,
    date_start: formatDate(data.date_start),
    date_end: formatDate(data.date_end),
    tags: Array.isArray(data.tags) ? data.tags : [],
    impact_summary: data.impact_summary || null
  };
}

async function buildTree(nodes) {
  const out = [];
  for (const n of nodes) {
    if (n.kind === "dir") {
      const children = await buildTree(n.children);
      if (children.length === 0) continue;
      out.push({ type: "folder", slug: relative(VAULT, n.path).replace(/\\/g, "/"), label: n.name, children });
    } else {
      out.push(await parseFile(n));
    }
  }
  out.sort((a, b) => {
    if (a.type !== b.type) return a.type === "folder" ? -1 : 1;
    return (a.label || a.title || a.slug).localeCompare(b.label || b.title || b.slug);
  });
  return out;
}

async function main() {
  try {
    await stat(VAULT);
  } catch {
    console.error(`[manifest] vault directory not found at ${VAULT}`);
    process.exit(1);
  }
  const nodes = await walk(VAULT);
  const tree = await buildTree(nodes);
  const manifest = { generated_at: new Date().toISOString(), tree };
  await writeFile(OUT, JSON.stringify(manifest, null, 2) + "\n", "utf8");
  const count = countFiles(tree);
  console.log(`[manifest] wrote ${OUT} — ${count.files} files in ${count.folders} folders`);
}

function countFiles(nodes, acc = { files: 0, folders: 0 }) {
  for (const n of nodes) {
    if (n.type === "folder") {
      acc.folders++;
      countFiles(n.children, acc);
    } else {
      acc.files++;
    }
  }
  return acc;
}

main().catch((err) => {
  console.error("[manifest] failed:", err);
  process.exit(1);
});

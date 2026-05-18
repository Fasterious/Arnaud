import { readFile } from "node:fs/promises";
import { join } from "node:path";

export type Visibility = "public" | "extended" | "editor";
export type AuthLevel = 0 | 1 | 2;

export interface FileNode {
  type: "file";
  slug: string;
  path: string;
  title: string;
  visibility: Visibility;
  status: string | null;
  doc_type: string | null;
  project: string | null;
  date_start: string | null;
  date_end: string | null;
  tags: string[];
  impact_summary: string | null;
}

export interface FolderNode {
  type: "folder";
  slug: string;
  label: string;
  children: TreeNode[];
}

export type TreeNode = FileNode | FolderNode;

export interface Manifest {
  generated_at: string;
  tree: TreeNode[];
}

const MANIFEST_PATH = join(process.cwd(), "manifest.json");
const KNOWN_LOCALES = new Set(["fr", "en", "es", "de", "it"]);

let cached: Manifest | null = null;

export async function loadManifest(): Promise<Manifest> {
  if (cached) return cached;
  const raw = await readFile(MANIFEST_PATH, "utf8");
  const parsed = JSON.parse(raw) as Manifest;
  if (parsed.tree.length === 1 && parsed.tree[0].type === "folder" && KNOWN_LOCALES.has(parsed.tree[0].label)) {
    const locale = parsed.tree[0].label;
    parsed.tree = parsed.tree[0].children;
    stripPrefix(parsed.tree, locale + "/");
  }
  cached = parsed;
  return cached;
}

function stripPrefix(nodes: TreeNode[], prefix: string) {
  for (const n of nodes) {
    if (n.slug.startsWith(prefix)) n.slug = n.slug.slice(prefix.length);
    if (n.type === "folder") stripPrefix(n.children, prefix);
  }
}

const VIS_LEVEL: Record<Visibility, AuthLevel> = {
  public: 0,
  extended: 1,
  editor: 2
};

export function canSee(visibility: Visibility, level: AuthLevel): boolean {
  return level >= VIS_LEVEL[visibility];
}

export function filterTree(nodes: TreeNode[], level: AuthLevel): TreeNode[] {
  const out: TreeNode[] = [];
  for (const n of nodes) {
    if (n.type === "file") {
      if (canSee(n.visibility, level)) out.push(n);
    } else {
      const kids = filterTree(n.children, level);
      if (kids.length > 0) out.push({ ...n, children: kids });
    }
  }
  return out;
}

export function findFileBySlug(nodes: TreeNode[], slug: string): FileNode | null {
  for (const n of nodes) {
    if (n.type === "file") {
      if (n.slug === slug) return n;
    } else {
      const found = findFileBySlug(n.children, slug);
      if (found) return found;
    }
  }
  return null;
}

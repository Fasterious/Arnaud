import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { notFound } from "next/navigation";
import matter from "gray-matter";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { loadManifest, filterTree, findFileBySlug, canSee, type FileNode, type FolderNode, type TreeNode } from "@/lib/manifest";
import { getAuthLevel } from "@/lib/auth";

interface PageProps {
  params: Promise<{ slug?: string[] }>;
}

export default async function Page({ params }: PageProps) {
  const { slug: slugParts } = await params;
  const slug = slugParts ? slugParts.join("/") : "";
  const [{ tree }, level] = await Promise.all([loadManifest(), getAuthLevel()]);

  if (!slug) return <Home tree={filterTree(tree, level)} />;

  const file = findFileBySlug(tree, slug);
  if (file) {
    if (!canSee(file.visibility, level)) notFound();
    const raw = await readFile(join(process.cwd(), file.path), "utf8");
    const { content } = matter(raw);
    return <Article file={file} markdown={content} />;
  }

  const folder = findFolder(tree, slug);
  if (folder) {
    const visible = filterTree([folder], level)[0] as FolderNode | undefined;
    if (!visible) notFound();
    return <FolderView folder={visible} />;
  }

  notFound();
}

function findFolder(nodes: TreeNode[], slug: string): FolderNode | null {
  for (const n of nodes) {
    if (n.type === "folder") {
      if (n.slug === slug) return n;
      const sub = findFolder(n.children, slug);
      if (sub) return sub;
    }
  }
  return null;
}

function Home({ tree }: { tree: TreeNode[] }) {
  const projects = tree.filter((n): n is FolderNode => n.type === "folder");
  return (
    <section className="home">
      <h1>Arnaud</h1>
      <p className="lead">Système narratif — vault markdown projeté en site vivant.</p>
      <div className="grid">
        {projects.map((p) => (
          <Link key={p.slug} href={`/${p.slug}`} className="card">
            <h2>{p.label}</h2>
            <p>{countFiles(p)} document{countFiles(p) > 1 ? "s" : ""}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

function countFiles(node: FolderNode): number {
  let n = 0;
  for (const c of node.children) {
    if (c.type === "file") n++;
    else n += countFiles(c);
  }
  return n;
}

function FolderView({ folder }: { folder: FolderNode }) {
  return (
    <section className="home">
      <h1>{folder.label}</h1>
      <p className="lead">{countFiles(folder)} document{countFiles(folder) > 1 ? "s" : ""} dans ce projet.</p>
      <div className="grid">
        {folder.children.map((c) =>
          c.type === "file" ? (
            <Link key={c.slug} href={`/${c.slug}`} className="card">
              <h2>{c.title}</h2>
              <p>{c.doc_type || "document"}{c.date_start ? ` · ${c.date_start}` : ""}</p>
            </Link>
          ) : (
            <Link key={c.slug} href={`/${c.slug}`} className="card">
              <h2>{c.label}/</h2>
              <p>{countFiles(c)} document{countFiles(c) > 1 ? "s" : ""}</p>
            </Link>
          )
        )}
      </div>
    </section>
  );
}

function Article({ file, markdown }: { file: FileNode; markdown: string }) {
  return (
    <article className="article">
      <header className="meta">
        <h1>{file.title}</h1>
        <div className="meta-line">
          {file.doc_type && <span className="tag">{file.doc_type}</span>}
          {file.status && <span className="tag">{file.status}</span>}
          {file.date_start && <span>· {file.date_start}{file.date_end ? `–${file.date_end}` : ""}</span>}
          {file.tags.slice(0, 5).map((t) => <span key={t} className="tag">#{t}</span>)}
        </div>
      </header>
      <div className="md">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
            h2: ({ children, ...props }) => <h3 {...props}>{children}</h3>,
            h3: ({ children, ...props }) => <h4 {...props}>{children}</h4>
          }}
        >{markdown}</ReactMarkdown>
      </div>
    </article>
  );
}

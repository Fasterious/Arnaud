"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { TreeNode, FileNode, FolderNode, AuthLevel } from "@/lib/manifest";

interface Props {
  tree: TreeNode[];
  level: AuthLevel;
  children: React.ReactNode;
}

export function Shell({ tree, level, children }: Props) {
  const pathname = usePathname();
  const currentSlug = pathname === "/" ? "" : decodeURIComponent(pathname.slice(1));

  return (
    <div className="shell">
      <aside className="sidebar">
        <h1><Link href="/" style={{ color: "inherit" }}>Arnaud</Link></h1>
        <Tree nodes={tree} currentSlug={currentSlug} />
      </aside>
      <div className="main">
        <header className="topbar">
          <Breadcrumb slug={currentSlug} tree={tree} />
          <AuthBar level={level} />
        </header>
        <main className="content">{children}</main>
      </div>
    </div>
  );
}

function Tree({ nodes, currentSlug }: { nodes: TreeNode[]; currentSlug: string }) {
  return (
    <ul className="tree">
      {nodes.map((n) =>
        n.type === "folder" ? (
          <TreeFolder key={n.slug} node={n} currentSlug={currentSlug} />
        ) : (
          <TreeFile key={n.slug} node={n} currentSlug={currentSlug} />
        )
      )}
    </ul>
  );
}

function TreeFolder({ node, currentSlug }: { node: FolderNode; currentSlug: string }) {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <li>
      <div className="node" onClick={() => setOpen(!open)}>
        <span className="chev">{open ? "▾" : "▸"}</span>
        <span className="icon">▣</span>
        <span className="label">{node.label}</span>
      </div>
      {open && <Tree nodes={node.children} currentSlug={currentSlug} />}
    </li>
  );
}

function TreeFile({ node, currentSlug }: { node: FileNode; currentSlug: string }) {
  const active = currentSlug === node.slug;
  return (
    <li>
      <Link href={`/${node.slug}`} className={`node ${active ? "active" : ""}`}>
        <span className="chev" />
        <span className="icon">·</span>
        <span className="label">{node.title}</span>
        {node.visibility !== "public" && <span className={`vis ${node.visibility}`}>{node.visibility}</span>}
      </Link>
    </li>
  );
}

function Breadcrumb({ slug, tree }: { slug: string; tree: TreeNode[] }) {
  if (!slug) {
    return <div className="breadcrumb"><span className="current">Accueil</span></div>;
  }
  const parts = slug.split("/");
  const crumbs: { href: string; label: string }[] = [{ href: "/", label: "Accueil" }];
  let accSlug = "";
  for (let i = 0; i < parts.length; i++) {
    accSlug = accSlug ? `${accSlug}/${parts[i]}` : parts[i];
    const label = findLabel(tree, accSlug) || parts[i];
    crumbs.push({ href: `/${accSlug}`, label });
  }
  return (
    <div className="breadcrumb">
      {crumbs.map((c, i) => {
        const last = i === crumbs.length - 1;
        return (
          <span key={c.href}>
            {i > 0 && <span className="sep"> / </span>}
            {last ? <span className="current">{c.label}</span> : <Link href={c.href}>{c.label}</Link>}
          </span>
        );
      })}
    </div>
  );
}

function findLabel(nodes: TreeNode[], slug: string): string | null {
  for (const n of nodes) {
    if (n.type === "folder") {
      if (n.slug === slug) return n.label;
      const sub = findLabel(n.children, slug);
      if (sub) return sub;
    } else if (n.slug === slug) {
      return n.title;
    }
  }
  return null;
}

function AuthBar({ level }: { level: AuthLevel }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password })
    });
    setSubmitting(false);
    if (res.ok) {
      setOpen(false);
      setPassword("");
      router.refresh();
    } else {
      setError("Mot de passe invalide");
    }
  }

  async function logout() {
    await fetch("/api/auth", { method: "DELETE" });
    router.refresh();
  }

  const label = level === 0 ? "public" : level === 1 ? "étendu" : "éditeur";

  return (
    <div className="auth-bar">
      <span className={`badge lvl-${level}`}>{label}</span>
      {level === 0 ? (
        <button onClick={() => setOpen(true)}>Se connecter</button>
      ) : (
        <button onClick={logout}>Quitter</button>
      )}
      {open && (
        <div className="login" onClick={() => setOpen(false)}>
          <form className="box" onClick={(e) => e.stopPropagation()} onSubmit={submit}>
            <h3>Accès restreint</h3>
            {error && <div className="error">{error}</div>}
            <input
              type="password"
              autoFocus
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mot de passe"
            />
            <div className="actions">
              <button type="button" onClick={() => setOpen(false)}>Annuler</button>
              <button type="submit" className="primary" disabled={submitting}>Valider</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { loadManifest, filterTree } from "@/lib/manifest";
import { getAuthLevel } from "@/lib/auth";
import { Shell } from "@/components/Shell";

export const metadata: Metadata = {
  title: "Arnaud",
  description: "Portfolio · système narratif"
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const [{ tree }, level] = await Promise.all([loadManifest(), getAuthLevel()]);
  const visibleTree = filterTree(tree, level);

  return (
    <html lang="fr">
      <body>
        <Shell tree={visibleTree} level={level}>
          {children}
        </Shell>
      </body>
    </html>
  );
}

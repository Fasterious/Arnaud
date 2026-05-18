# CHANGELOG — Système narratif Arnaud

Trace humaine, indépendante de git, de chaque opération significative.
Format : `YYYY-MM-DD · <zone> · <chemin> · <résumé en 1 ligne>`.

Plus récent en haut.

## 2026-05-18

- shell · refonte vault-first : suppression de la couche L2 manuelle (`site/*.html` + `vercel.json`), shell Next.js 15 unique qui projette le vault automatiquement (`app/`, `components/Shell.tsx`, `lib/manifest.ts`, `lib/auth.ts`, `scripts/build-manifest.mjs`)
- auth · 3 niveaux (public / extended / editor) via cookie + variables d'env `EXTENDED_PASSWORD`, `EDITOR_PASSWORD` ; filtrage côté serveur
- vault · `vault/fr/00-genese/methode-workflow.md` · réécriture vault-first ; passage en `visibility: editor`
- cursor · `.cursor/rules/00-workflow-layers.mdc` · réécriture miroir de la nouvelle méthode

## 2026-05-17

- L2 · `site/01-loupe.html` · Projection du case study Loupe (création initiale, miroir du L1, même feuille de style que `00-genese.html`)
- L1 · `vault/fr/01-loupe/loupe-case-study.md` · Promotion L0→L1 — premier case study Loupe (ingest dictée vocale + exploration repo externe `/Users/arnaud/Projects/Loupe`)
- L0 · `_inbox/01-loupe/2026-05-17-conversation-avion-case-study.md` · Ingestion de la dictée vocale (vol, premier case study Loupe)
- L2 · `site/00-genese.html` · Intégration des amendements V2 dans la projection HTML (Partie II)
- L2 · `site/00-genese.html` · Ajout du footer de traçabilité (Provenance)
- L1 · `vault/fr/00-genese/methode-workflow.md` · Création du manuel de méthode (workflow L0→L1→L2)
- Cursor · `.cursor/rules/00-workflow-layers.mdc` · Création de la règle auto-appliquée (miroir compact du manuel)
- L1 · `vault/fr/00-genese/synthese-strategique-v2.md` · Amendement V2 du PRD (§A à §H : forcing functions, méthodo de résultats, templates secondaires, audiences, wireframes, checklist, micro-actions)
- L1 · `vault/fr/00-genese/synthese-strategique.md` · Promotion L0→L1 — PRD V1 du système narratif
- L0 · `_inbox/00-genese/conversation-3-ias.md` · Ingestion des 3 dialogues IA + réactions vocales

## 2026-05-13

- Setup · `vercel.json` · Premier déploiement Vercel avec rewrite racine
- Setup · `.gitignore` · Init repo

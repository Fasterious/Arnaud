# Arnaud — Système narratif personnel

> Un système de **compression narrative** qui transforme un parcours dispersé en
> récit récupérable sous pression, et qui se manifeste sous forme de site.

## Méta — le premier projet documente le système lui-même

Le projet fondateur s'appelle [`00-genese`](./vault/fr/00-genese/synthese-strategique.md).
Il contient la conversation initiale avec 3 IA + la synthèse critique qui a
donné naissance à l'architecture de ce repo. Le système se prouve par son
existence : la méthode qu'il décrit est celle qui l'a produit.

## Architecture en 3 couches

```
.
├── _inbox/                  L0 — matière brute, jetable
│   └── 00-genese/
│       └── conversation-3-ias.md
│
├── vault/fr/                L1 — Markdown discipliné = le moteur
│   └── 00-genese/
│       └── synthese-strategique.md
│
├── site/                    L2 — projection publique (preview HTML)
│   └── 00-genese.html
│
├── backlog.md               Idées hors-MVP, parquées avec date d'examen
├── vercel.json              Routing : `/` et `/00-genese` → site/00-genese.html
└── README.md                (ce fichier)
```

| Couche | Audience | Format | Visibilité git |
| --- | --- | --- | --- |
| **L0** Inbox | Toi seul | Brut, vocal-transcrit, libre | Gitignored |
| **L1** Vault | Toi + IA | Markdown + frontmatter discipliné | Privé (repo) |
| **L2** Site | Public (recruteurs, pairs) | HTML curé (puis Next.js) | Publié |

## Convention de nommage des projets

Chaque projet a un dossier homonyme dans chacune des 3 couches concernées,
pour que l'arborescence raconte d'elle-même la traçabilité L0 → L1 → L2.

Préfixe `NN-` pour ordonner :
- `00-genese` — le bootstrap meta (existe)
- `01-...`, `02-...` — les vrais case studies à venir

## Workflow d'un nouveau projet

1. **Capture (L0)** : dump vocal → transcription dans
   `_inbox/<projet>/<note>.md`.
2. **Structuration (L1)** : appliquer le [template de case
   study](./vault/fr/00-genese/synthese-strategique.md#6-le-template-à-figer-cette-semaine)
   → `vault/fr/<projet>/<sujet>.md`.
3. **Publication (L2)** : la page sortie dans `site/` (HTML pour l'instant,
   Next.js plus tard) consomme le `vault/`.

Le détail méthodologique (cible : 90 min par case study) est dans la
[§ 8 de la synthèse](./vault/fr/00-genese/synthese-strategique.md#8-méthodologie-de-travail-au-quotidien).

## Méthode & contrôle de la propagation

L'IA ne propage **jamais** une couche à la suivante sans validation explicite.

- Manuel complet (humain) : [`vault/fr/00-genese/methode-workflow.md`](./vault/fr/00-genese/methode-workflow.md)
- Règle Cursor (auto-appliquée à chaque session) : [`.cursor/rules/00-workflow-layers.mdc`](./.cursor/rules/00-workflow-layers.mdc)
- Historique humain des transitions : [`CHANGELOG.md`](./CHANGELOG.md)

Les 4 cérémonies (Capture, Promotion L0→L1, Projection L1→L2, Nouvelle
version), les checkpoints anti-perfectionnisme et le frontmatter obligatoire
sont décrits dans le manuel.

## Stack cible

- **Framework futur** : Next.js 15 (App Router) — bascule prévue après 2-3
  case studies dans le vault.
- **Hosting** : Vercel (déjà lié).
- **Contenu** : MDX + Velite (types TS depuis frontmatter).
- **Style** : Tailwind + shadcn/ui.
- **Recherche** : Pagefind (statique).
- **Traduction** : script CLI FR → EN (lit `vault/fr/`, écrit `vault/en/`).

## État actuel

| Sprint | Statut |
| --- | --- |
| Sprint 0 — Foundations (cette semaine) | En cours |
| Sprint 1 — V1 statique en ligne | À venir |
| Sprint 2 — EN + densité | À venir |
| Sprint 3 — Backlog V2 examiné | À venir |

Roadmap complète : [§ 5 de la synthèse](./vault/fr/00-genese/synthese-strategique.md#5-roadmap--4-sprints-de-2-semaines).

## Indicateur unique de succès

Dans 6 semaines, à la prochaine offre intéressante : URL envoyée avec
confiance **et** premier call décroché ? Si oui, le système fonctionne. Si
non, retour au tableau.

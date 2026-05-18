---
title: "Méthode — workflow vault-first"
project: 00-genese
slug: methode-workflow
date_start: 2026-05-18
type: meta-method
tags: [workflow, automation, control, traceability]
collaborators: [ia-meta-cursor]
impact_summary: "Manuel opérationnel de la propagation _inbox → vault, avec un shell Next.js qui projette automatiquement le markdown en site."
visibility: editor
status: active
sources:
  - ../../../.cursor/rules/00-workflow-layers.mdc
based_on: ./synthese-strategique-v2.md
---

> **Refonte du 2026-05-18.** L'ancienne architecture L0→L1→L2 (avec génération HTML manuelle par projet) est remplacée par une architecture vault-first à 2 couches : tu écris du markdown, le shell Next.js le projette automatiquement.

Source de vérité du workflow. La règle Cursor [`00-workflow-layers.mdc`](../../../.cursor/rules/00-workflow-layers.mdc) en est la version compacte injectée à chaque session IA.

---

## 1. Pourquoi cette refonte

L'ancien système avait une couche L2 — un fichier HTML par projet, généré à la main, avec CSS dupliqué. Ça consommait trop de tokens IA sur du code, alors que **la valeur est dans le markdown**. Trois projets pesaient déjà ~1565 lignes de HTML/CSS pour ~1209 lignes de contenu. Chaque nouveau projet doublait la dette.

Renversement : **le markdown est le produit fini.** Un shell unique (Next.js) lit le vault, construit l'arborescence, rend chaque `.md` à la volée. Ajouter un projet = créer un dossier, déposer des `.md`, push. C'est tout.

---

## 2. Les 2 couches

```
┌────────────────────────────────────────────────────────┐
│  _inbox/<NN-projet>/        AUDIENCE : toi seul        │
│  ───────────────────                                   │
│  Dumps vocaux, notes brutes. Gitignored. Désordre OK.  │
└────────────────────────────────────────────────────────┘
                       ↓  auto-génération (si frontmatter déductible)
┌────────────────────────────────────────────────────────┐
│  vault/<locale>/<NN-projet>/  AUDIENCE : selon `visibility` │
│  ──────────────────────────                            │
│  Markdown discipliné + frontmatter.                    │
│  PRODUIT FINI. Versionné via git.                      │
└────────────────────────────────────────────────────────┘
                       ↓  projection automatique
                  [shell Next.js — `app/`]
                       ↓
                   site naviguable
```

Plus de cérémonie "L1 → L2" : la projection est automatique. Plus de dossier `old/` : git fait l'historique.

---

## 3. Les 3 modes de visibilité

Trois niveaux côté visiteur, contrôlés par le frontmatter `visibility:` et la cookie d'auth :

| Mode | Niveau | Voit | Mot de passe |
| --- | --- | --- | --- |
| Public | 0 | `visibility: public` (défaut) | aucun |
| Étendu | 1 | + `extended` | `EXTENDED_PASSWORD` |
| Éditeur | 2 | + `editor` (méta, règles, skills) | `EDITOR_PASSWORD` |

Le filtrage se fait **côté serveur** (page renvoie 404, arbre filtré). Pas de simple masquage UI. Repo GitHub privé = défense en profondeur : même qui aurait le code ne voit pas les fichiers `editor` sans le mot de passe.

Les mots de passe sont stockés en variables d'environnement Vercel : `EXTENDED_PASSWORD`, `EDITOR_PASSWORD`. En local : un fichier `.env.local` (gitignored).

---

## 4. Les 3 cérémonies

### A — Capture (toi → `_inbox/`)

Dump vocal, transcription, fichier dans `_inbox/<NN-projet>/<sujet>.md`. Format libre. L'IA n'intervient pas.

### B — Promotion `_inbox/` → `vault/` (automatique)

Tu déposes un brut dans `_inbox/NN-projet/`. L'IA :

1. Lit le brut.
2. Si le frontmatter est déductible (titre, type, dates, tags inférables du contenu) → écrit **directement** dans `vault/<locale>/NN-projet/<slug>.md` avec frontmatter complet.
3. Si une info manque (type ambigu, date floue, niveau de visibility incertain) → demande **avant** d'écrire.
4. Ajoute une ligne dans `CHANGELOG.md`.

Pas de "tu valides ?" systématique. La convention par défaut : inbox → vault est l'attendu. Tu vois le résultat, tu peux amender.

### C — Passe transversale (à la demande)

Périodiquement, tu demandes à l'IA : *"fais une passe sur tous mes case-studies actifs"*. Elle :

- Lit l'ensemble des `.md` du vault.
- Repère les passerelles manquantes (un thème évoqué dans un projet, oublié dans un autre).
- Propose des **questions d'approfondissement** (pas de modification directe).

C'est le moment où la cohérence narrative émerge.

---

## 5. Convention de nommage

| Niveau | Convention |
| --- | --- |
| Projets | `NN-slug` (ex. `00-genese`, `01-loupe`, `02-...`) |
| Locale | code ISO (`fr`, `en`) sous `vault/` |
| Fichiers | `<concept>.md` ; amendements distincts : `<concept>-v2.md` avec `based_on:` |
| Inbox | `<sujet>.md`, daté si besoin (`2026-05-17-note.md`) |

---

## 6. Frontmatter L1 obligatoire

```yaml
---
title: "Titre lisible (devient h1)"
project: "00-genese"
slug: "slug-stable"
date_start: 2026-05-17
date_end: 2026-05-17           # optionnel
type: "case-study | prd | meta-method | note | skill | reflexion | offer"
visibility: "public | extended | editor"
status: "draft | active | validated | amendment | archived"
tags: ["..."]
impact_summary: "Une phrase qui capture l'impact ou l'enseignement."
sources:
  - "L0: _inbox/00-genese/<source>.md"
based_on: "<slug du fichier parent si amendement>"   # optionnel
---
```

L'IA refuse d'écrire dans `vault/` sans frontmatter complet. Si une clé manque : elle demande.

---

## 7. Versioning : git, pas de dossier `old/`

L'historique est dans `git log` / `git blame`. **Aucun dossier `old/` ou `archive/`.** Pour amender :

- Édition en place + commit séparé = audit trail naturel.
- Si l'amendement est conceptuellement distinct (cas de `synthese-strategique-v2.md`) → nouveau fichier, `based_on: "<parent-slug>"`, `status: "amendment"`.

---

## 8. Maquettes factices pour la confidentialité

Quand un case-study évoque un client/entreprise sensible : l'IA peut générer des maquettes factices (SVG, HTML inline, capture synthétique) pour illustrer sans violer la confidentialité.

**Mention obligatoire sous chaque maquette :**

> Maquette factice générée pour illustration — données et UI ne reproduisent pas la mission réelle.

---

## 9. CHANGELOG.md

Une ligne par opération significative, du plus récent au plus ancien :

```
2026-05-18 · vault · vault/fr/01-loupe/loupe-case-study.md · ajout section limitations
2026-05-18 · shell · refonte vault-first (Next.js + manifest automatique)
```

C'est la trace humaine, complémentaire à `git log`.

---

## 10. Checkpoints

| Symptôme | Seuil | Action |
| --- | ---: | --- |
| Document trop long | > 800 lignes | Proposer un split |
| Inbox saturé | > 5 fichiers non promus dans un `_inbox/<NN>/` | Signaler |
| Projet en sommeil | > 1 mois sans commit sur un projet actif | Signaler |
| Nouvelle idée hors scope | quoi qu'il arrive | Va dans `backlog.md`, pas dans le code |

---

## 11. Ce que l'IA ne fait JAMAIS sans demander

1. Écraser un `.md` du vault sans présenter d'abord le diff.
2. Créer un nouveau dossier projet (`vault/<locale>/NN-projet/`) sans valider le nom.
3. Modifier `app/`, `components/`, `lib/`, `scripts/` — **le shell est stable**. Si tu veux le faire évoluer : conversation explicite.
4. Supprimer une entrée du `backlog.md`.
5. Toucher `manifest.json` (auto-généré).

---

## 12. Manifest

`manifest.json` à la racine est généré par `scripts/build-manifest.mjs` (hook `predev` / `prebuild`). Il scanne `vault/`, lit les frontmatter, construit l'arbre filtrable par visibility. **Gitignored.** Régénéré automatiquement à chaque `npm run dev` ou `npm run build` (donc aussi à chaque déploiement Vercel).

---

## 13. Évolution de ce manuel

Soumis à sa propre méthode :

- Pour l'amender → édition en place ou nouveau fichier `methode-workflow-v2.md`.
- La règle Cursor `00-workflow-layers.mdc` est mise à jour en miroir.
- Tout changement passe par `CHANGELOG.md`.

> **Méta** : la preuve que la méthode tient, c'est qu'elle peut se faire évoluer elle-même sans tomber dans la boucle.

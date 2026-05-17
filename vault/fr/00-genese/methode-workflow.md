---
title: "Méthode — workflow couche par couche"
project: 00-genese
slug: methode-workflow
date_start: 2026-05-17
type: meta-method
category: process
tags: [workflow, automation, control, traceability]
skills_demonstrated:
  - process-design
  - human-in-the-loop
  - traceability
collaborators: [ia-meta-cursor]
impact_summary: "Manuel opérationnel de la propagation L0→L1→L2 ; encadre l'IA et préserve le contrôle utilisateur."
visibility: public
status: active
sources:
  - ../../../.cursor/rules/00-workflow-layers.mdc
based_on: ./synthese-strategique.md
preview: ../../../site/00-genese.html
---

# Méthode — workflow couche par couche

Ce document est **la source de vérité** pour la mécanique du système. La règle
Cursor [`00-workflow-layers.mdc`](../../../.cursor/rules/00-workflow-layers.mdc)
en est la version compacte injectée automatiquement à chaque session de l'IA.

> **Pourquoi un manuel ET une règle ?** Le manuel est lisible par toi : tu peux
> le challenger, l'amender, le faire évoluer. La règle est lue par l'IA à
> chaque session. Quand le manuel change, la règle est mise à jour pour
> rester un strict sous-ensemble.

---

## 1. Les trois couches — rappel

```
┌────────────────────────────────────────────────────────┐
│  L0  _inbox/<projet>/         AUDIENCE : toi seul      │
│      ─────────────────                                 │
│      Dumps vocaux, notes brutes, idées jetables.       │
│      Gitignored. Coût d'entrée nul. Désordonné assumé. │
└────────────────────────────────────────────────────────┘
                       ↓  promotion = "tu valides ?"
┌────────────────────────────────────────────────────────┐
│  L1  vault/fr/<projet>/       AUDIENCE : toi + IA      │
│      ─────────────────                                 │
│      Markdown discipliné, frontmatter obligatoire.     │
│      Source de vérité du contenu. Versionné.           │
└────────────────────────────────────────────────────────┘
                       ↓  projection = "tu valides ?"
┌────────────────────────────────────────────────────────┐
│  L2  site/                    AUDIENCE : public        │
│      ─────                                             │
│      Projection curée. HTML aujourd'hui, Next.js bientôt│
└────────────────────────────────────────────────────────┘
```

Une transition entre couches est **toujours** un acte conscient validé par
toi. L'IA n'a pas le droit d'écrire dans L1 ou L2 sans avoir reçu un OK
explicite sur le brouillon ou le diff.

---

## 2. Les 4 cérémonies du workflow

### Cérémonie A — Capture (toi → L0)

| Acteur | Toi |
| --- | --- |
| Trigger | Une idée, un projet, une réflexion à matérialiser |
| Action | Dump vocal → transcription → fichier dans `_inbox/<projet>/<sujet>.md` |
| Sortie | Un `.md` libre, pas de contrainte de format |
| Validation IA | Aucune |

> L'IA n'intervient pas. C'est ton espace personnel. Aucun coût d'entrée.

### Cérémonie B — Promotion L0 → L1

| Acteur | Toi + IA en pong |
| --- | --- |
| Trigger | Tu demandes à l'IA "synthétise ce dump", "fais-en un case study", "produis le PRD" |
| Action IA | 1. Lit `_inbox/<projet>/`. 2. Propose un brouillon dans le **chat** (pas dans `vault/`). 3. Affiche frontmatter + sections. 4. Demande "**OK pour écrire dans `vault/fr/<projet>/<slug>.md` ?**" |
| Action toi | Tu valides, amendes, ou rejettes |
| Sortie | Un `.md` dans `vault/` avec frontmatter complet (voir §4) |
| Trace | 1 ligne dans `CHANGELOG.md` |

### Cérémonie C — Projection L1 → L2

| Acteur | Toi + IA en pong |
| --- | --- |
| Trigger | Tu demandes "mets à jour le site" OU l'IA détecte un décalage |
| Action IA | 1. Compare `vault/fr/<projet>/` avec `site/<projet>.html`. 2. Liste dans le chat **les sections L1 ajoutées/modifiées** depuis la dernière projection. 3. Propose le plan d'intégration (ex. "nouvelle section §A en partie II"). 4. Demande "**OK pour mettre à jour `site/<projet>.html` ?**" |
| Action toi | Tu valides ou demandes un ajustement |
| Sortie | HTML (ou route Next.js) à jour, avec footer de traçabilité (voir §5) |
| Trace | 1 ligne dans `CHANGELOG.md` |

### Cérémonie D — Nouvelle version (versionning L1)

| Acteur | Toi + IA |
| --- | --- |
| Trigger | Tu veux enrichir un L1 existant |
| Choix | **Amendement** (nouveau fichier `-v2.md`) OU **patch ciblé** (édition surgicale d'une section nommée) |
| Règle | **Ne JAMAIS écraser un V1.** Toujours créer `-v2.md`, `-v3.md`, etc., avec `based_on:` dans le frontmatter |
| Sortie | Nouveau fichier `.md`, l'ancien reste intact |
| Trace | 1 ligne dans `CHANGELOG.md` |

> **Pourquoi versionner plutôt qu'écraser ?** Audit, apprentissage personnel,
> et démonstration de la méthode (tu peux montrer "voilà ce que je pensais à
> T0, voilà ce que j'ai appris à T1").

---

## 3. Convention de nommage

### Projets

`NN-slug` à la racine de chaque couche concernée.

- `00-genese` — le projet meta (la naissance du système)
- `01-`, `02-`, … — les vrais case studies, dans l'ordre où tu les attaques

### Fichiers dans une couche

| Couche | Convention |
| --- | --- |
| L0 | `<sujet-libre>.md`, daté si besoin (`2026-05-17-note.md`) |
| L1 | `<concept>.md`, `<concept>-v2.md` pour versions |
| L2 | `<projet>.html` (puis `app/<projet>/page.tsx` avec Next.js) |

---

## 4. Frontmatter obligatoire en L1

```yaml
---
title: ""                       # phrase complète
project: ""                     # slug projet, ex. 00-genese
slug: ""                        # nom de fichier sans .md
date_start: ""                  # YYYY-MM-DD
date_end: ""                    # YYYY-MM-DD (peut être vide si vivant)
type: ""                        # case-study | prd | reflexion | skill | vision | meta-method
tags: []
skills_demonstrated: []
collaborators: []
impact_summary: ""              # 1 phrase, chiffré si possible
visibility: public | private | draft
status: draft | active | amendment | archived
sources: []                     # chemins L0 ou autres L1 d'où vient la matière
based_on: ""                    # autre L1 si c'est une version
preview: ""                     # chemin L2 si projection existe
---
```

> L'IA refuse d'écrire en `vault/` un fichier dont le frontmatter est
> incomplet. Si elle voit du contenu sans frontmatter, elle propose d'abord
> le frontmatter, te demande validation, puis écrit.

---

## 5. Footer de traçabilité en L2

Tout fichier `site/<projet>.html` se termine par un encart **Provenance** :

```
─────────────────────────────────────────────────────────────
Provenance
- Source L1 : vault/fr/00-genese/synthese-strategique.md (modif. 2026-05-17)
- Source L1 : vault/fr/00-genese/synthese-strategique-v2.md (modif. 2026-05-17)
- Généré le 2026-05-17
─────────────────────────────────────────────────────────────
```

Plus tard avec Next.js, ce footer sera auto-généré à partir du frontmatter
des fichiers consommés.

---

## 6. CHANGELOG.md — la trace écrite

Fichier racine, une ligne par transition, du plus récent au plus ancien :

```
2026-05-17 · L2 · site/00-genese.html · projection des V1+V2 du PRD
2026-05-17 · L1 · vault/fr/00-genese/methode-workflow.md · création du manuel
2026-05-17 · L1 · vault/fr/00-genese/synthese-strategique-v2.md · amendement V2 du PRD
2026-05-17 · L1 · vault/fr/00-genese/synthese-strategique.md · promotion L0→L1 du PRD initial
2026-05-17 · L0 · _inbox/00-genese/conversation-3-ias.md · ingestion des 3 dialogues IA
```

C'est l'historique humain du système, indépendant de git.

---

## 7. Checkpoints anti-perfectionnisme

Pour empêcher le système de tourner sur lui-même au lieu de produire :

| Symptôme | Seuil | Action |
| --- | ---: | --- |
| L1 trop long | > 500 lignes | Split obligatoire, jamais réécrire |
| L2 désynchro | > 7 jours sans propagation | IA signale au début de session |
| L0 saturé | > 5 fichiers non promus | IA signale et propose un tri |
| Backlog actif | revue obligatoire fin sprint 3 | Voir [`backlog.md`](../../../backlog.md) |
| Nouvelle idée | si pas dans le sprint courant | Va dans `backlog.md`, pas dans le code |

---

## 8. Ce que l'IA ne fait JAMAIS sans demander

1. Écraser un `.md` existant dans `vault/`.
2. Modifier un fichier `site/*.html` sans avoir d'abord montré le diff conceptuel dans le chat.
3. Créer une nouvelle couche / un nouveau projet sans valider le nom avec toi.
4. Supprimer une entrée du `backlog.md` (elle peut en ajouter, jamais en retirer).
5. Promouvoir un L0 en L1 sans présenter d'abord le brouillon complet (frontmatter + sections) dans le chat.

---

## 9. Évolution de ce manuel

Ce fichier est lui-même soumis à sa propre méthode :

- Pour le faire évoluer → créer `methode-workflow-v2.md` avec `based_on:`.
- La règle Cursor `00-workflow-layers.mdc` est mise à jour **en miroir** quand
  la version active du manuel change.
- Tout changement passe par le `CHANGELOG.md`.

> **Méta** : la première vraie "preuve" que cette méthode tient, c'est
> qu'elle soit capable de se faire évoluer elle-même selon ses propres
> règles, sans tomber dans la boucle.

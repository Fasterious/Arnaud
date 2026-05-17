---
title: "PRD — Système narratif personnel Arnaud"
project: 00-genese
slug: synthese-strategique
date_start: 2026-05-12
date_end: 2026-05-17
type: prd
category: meta
role: "Architecte / Product Designer / Sponsor"
tags: [ux-research, knowledge-management, narrative, ai, product-strategy]
skills_demonstrated:
  - systems-thinking
  - content-strategy
  - technical-architecture
  - ai-process-design
  - meta-design
collaborators: [ia-1, ia-2, ia-3, ia-meta-cursor]
impact_summary: "Cadre opérationnel sur 8 semaines pour transformer une carrière dispersée en récit récupérable sous pression d'entretien."
visibility: public
star_ready: false
translation_reviewed: false
sources:
  - ../../../_inbox/00-genese/conversation-3-ias.md
preview: ../../../site/00-genese.html
---

# Projet « Arnaud » — Synthèse stratégique

Analyse croisée des 3 IA, lecture critique, et approche unifiée. Le projet
n'est pas un site : c'est un **système de compression narrative** qui se
manifeste sous forme de site.

| Métrique | Valeur |
| --- | --- |
| Projets imbriqués | 3 |
| Délai V1 réaliste | 2 semaines |
| Case studies au MVP | 3 |
| Challenges à arbitrer | 9 |

---

## 1. Diagnostic — le vrai problème

GitLab n'était pas un échec, c'était un **révélateur**. Il n'y a pas de déficit
de compétences. Il y a un problème de **compression narrative** : trop de
matière, dispersée, jamais structurée pour être *récupérable sous pression*
(entretien, 1 h, anglais).

Les 3 IA ont convergé là-dessus, mais aucune n'a nommé le piège central : il y
a 3 projets imbriqués qui n'ont pas les mêmes exigences. Tant qu'ils sont
confondus, on ne sait pas pour qui on écrit.

### Trois projets à distinguer

| Projet | Audience | Format |
| --- | --- | --- |
| **A — Introspection** | Toi seul | Brut, exploratoire, jetable |
| **B — Mémoire structurée** | Toi + IA | Markdown discipliné, taggable |
| **C — Vitrine publique** | Recruteurs, pairs | Curé, narratif, 90 s de lecture |

> **Idée-clé.** Le projet B (mémoire structurée) est le **moteur**. Le projet C
> est une **projection** filtrée du B. Le projet A est l'**input**. Ne pas les
> confondre est le geste fondateur.

---

## 2. Ce que les 3 IA disent — synthèse honnête

| Sujet | IA 1 (structurée) | IA 2 (méthodo) | IA 3 (philosophique) | Arbitrage |
| --- | --- | --- | --- | --- |
| Cadrage | 3 projets + 3 couches | Jardin numérique | Mémoire augmentée | **Système de compression narrative** |
| Risque #1 | Procrastination élégante | Exhaustivité destructrice | Architecture parfaite = évitement | **Les 3 sont vrais ; surtout #1 et #3** |
| Stack | Next.js + MDX + Vercel | Astro OU Next.js | Next.js + Contentlayer | **Next.js (pas Astro — voir §3)** |
| Ordre | Récit d'abord, garden ensuite | Prototyper UNE facette | Contenu avant système | **Template d'abord, 1 entrée, puis site** |
| Visualisations | Phase 2 | React Flow / Chrono | Phase 4 (post-contenu) | **Aucune en V1. Une seule en V2.** |
| Audio | Whisper async | Non traité | Non traité | **Workflow Google Notes actuel suffit** |
| Bidirectionnel | Wikilinks via plugin / Quartz | Obsidian | Pas en V1 | **Manuel V1, IA-assisté V2** |
| Questions | 6 ciblées | 1 (facette à prototyper) | 4 identitaires | **IA 1 + IA 3 = bon set** |

---

## 3. Là où je challenge — toi et les IA

Neuf points où la conversation glisse ou manque un angle.

### Challenge #1 — Le chatbot adaptatif est un piège en V1 → V3

Tu y reviens dans tes 3 réponses : un chatbot vocal qui s'adapte aux
recruteurs. Pas en V1, pas en V2, pas en V3. **Un recruteur a 90 secondes et
veut scanner, pas dialoguer.** Un chatbot signale "playful but unfocused" —
l'inverse de ce que tu veux projeter sur un poste senior. L'adaptation par
audience passe par des **URLs curées** (`/for-product-design`,
`/for-research`, `/playground`), pas par une couche d'IA conversationnelle.

### Challenge #2 — Tes 3 IA et toi confondez "IA dans le process" et "IA dans le produit"

Tu veux montrer ta maîtrise de l'IA. Très bien. Mais ça se démontre dans
**comment tu as construit le site** (case studies, page process, commit log si
public) — pas en foutant un chatbot sur la home. Sépare le médium et le
message.

### Challenge #3 — "Content first" (IA 3) est trop binaire

Tu pousses fort sur la dialectique problème ↔ solution, contenu ↔ forme. Tu as
raison. Mais il faut **une seule chose figée pour démarrer** : un **template
de case study** (frontmatter + 7 sections). Pas le site, pas la stack, pas les
visualisations. *Une* structure d'écriture. Ensuite contenu et forme
co-évoluent.

### Challenge #4 — Astro vs Next.js : pas un débat dans ton cas

IA 2 propose Astro. **Mauvais choix pour toi.** Astro est imbattable pour du
*pur statique*. Mais tu veux : génération de narrations dynamiques par
audience, traduction FR → EN à la volée, peut-être interaction IA plus tard.
Next.js 15 (App Router) + Server Components couvre tout ça nativement. Et
c'est ta stack actuelle — pas de coût d'apprentissage. Le seul argument pour
Astro serait la perf SEO, mais ton site sera linké à la main aux recruteurs.

### Challenge #5 — Ta résistance à Obsidian repose sur une fausse opposition

Obsidian n'est **pas** un autre lieu de stockage : c'est **une vue
alternative** sur les mêmes fichiers Markdown du repo. Tu peux pointer
Obsidian sur `vault/`, garder Cursor pour les entrées techniques, et utiliser
Obsidian pour la pensée non-linéaire. Source unique, outils multiples. Pas de
duplication.

### Challenge #6 — FR + EN en parallèle dès J1, c'est non

Tu reconnais que ton anglais est limité. Écrire les deux versions à la main =
drift quasi-garanti + double charge cognitive. Approche : **FR = source de
vérité, EN = artefact généré + relu**. Un script CLI prend `vault/fr/*.md` et
produit `vault/en/*.md` via une API IA, avec un champ `translation_reviewed:
false/true` dans le frontmatter. Tu relis = tu pratiques ton anglais sur ton
propre matériel = double bénéfice.

### Challenge #7 — Le « site = case study du site » est séduisant mais piège

Tu veux que le site démontre comment il a été conçu (méta-narratif). C'est
puissant — pour la V2+. Si tu fais ça en V1, tu ralentis le contenu principal
pour documenter un process pas encore stabilisé. Fais d'abord 3 case studies
*réelles*, ensuite écris la méta-étude « How I built this ». **Note** : ce
projet `00-genese` est précisément ce méta-case study en germe — laissons-le
mûrir, ne le publions pas en accueil.

### Challenge #8 — Le site ne résoudra pas le problème GitLab

L'angle que personne n'a nommé clairement. Le blocage de l'entretien c'est
**la fluence sous pression en anglais sur des stories non rejouées**. Un site
bien fait te donne la matière première, mais ne te fait pas parler. Il te faut
un **track parallèle** (§7) sinon dans 4 semaines tu auras un beau site et la
même angoisse au prochain entretien.

### Challenge #9 — Ton oscillation MVP : 2 expériences ou « site + chatbot + audio + bidi » ?

Dans la même conversation tu dis « le minimum c'est 2-3 expériences » puis tu
rajoutes chatbot, audio, mind maps, méta-case-study, FR+EN, visualisations.
**Choisis maintenant.** Proposition ferme :

- **MVP (2 semaines)** : home + about + 3 case studies + CV + contact. FR
  uniquement. Aucune visu. Pas de chatbot. Statique.
- **Tout le reste** = backlog avec date d'examen au sprint 3.

---

## 4. Approche recommandée — opinionée

### Positionnement

Tu n'es plus juste UX Designer ni UX Researcher. Tu deviens un **AI-augmented
Product Designer / Researcher** qui maîtrise le cycle complet : recherche →
conception → prototypage testable → narration. Avantage compétitif : la
**vélocité** et l'**autonomie** de bout en bout, rendues possibles par l'IA.

Mantras : **Création + Collaboration**. Ne change rien à ces deux mots — ils
sont justes.

### Architecture en oignon — version raffinée

Le « garden public » est une mauvaise idée pour toi. Le chaos reste privé.

| Couche | Dossier | Rôle |
| --- | --- | --- |
| **L0** Inbox | `_inbox/` | Dumps vocaux transcrits, idées jetables, privé (gitignored) |
| **L1** Vault structuré | `vault/` | Markdown discipliné + frontmatter. Le moteur. Ta mémoire réelle. Privé ou repo entier privé. |
| **L2** Site public | `site/` (puis `app/` quand Next.js) | Projection filtrée. Curé. Narratif. Lisible en 90 s. |

> **Conséquence concrète.** Repo unique, structure par couche, séparation
> stricte des audiences. Tu ne publies pas ton garden — tu publies sa
> projection filtrée.

### Stack technique — justifications par choix

| Couche | Choix | Pourquoi (et pas autre) |
| --- | --- | --- |
| Framework | **Next.js 15 (App Router)** | Déjà maîtrisé. RSC = narrations IA-side faciles. Astro = mauvais axe pour toi. |
| Hosting | **Vercel** | Zéro friction, previews gratuites, edge functions plus tard. |
| Contenu | **MDX + Velite** | Velite (plus moderne que Contentlayer, mieux maintenu) = types TS auto-générés depuis le frontmatter. |
| Style | **Tailwind + shadcn/ui** | Composants copiés dans ton repo, owned. Pas de dépendance UI lourde. |
| Recherche | **Pagefind** | Indexe statique au build. Aucun serveur. Suffisant pour < 1000 pages. |
| Traduction | **Script CLI custom** | 30 lignes : lit `vault/fr/*.md`, appelle Claude/GPT, écrit `vault/en/*.md`. |
| Audio → texte | **Workflow actuel** (Google Notes) | Ce que tu fais déjà fonctionne. Pas d'automatisation tant que ça ne coince pas. |
| Visualisations | **AUCUNE en V1** | react-flow et chrono restent en backlog V2. Tableau et grilles typographiés suffisent à 90 %. |

---

## 5. Roadmap — 4 sprints de 2 semaines

### Sprint 0 — Foundations (cette semaine)

Objectif : matière + template, zéro site.

1. Définir le template de case study (frontmatter + 7 sections)
2. Écrire **1 seul** case study récent à fond
3. Écrire la page « About » courte (15 lignes max)
4. Lister les 3 stories candidates pour le MVP

**Livrable** : 1 `.md` propre + 1 page About + une liste priorisée.

### Sprint 1 — V1 statique en ligne (S+2)

Objectif : avoir un site déployé, FR seulement.

1. Scaffold Next.js + Velite + Tailwind
2. Routes : `/`, `/about`, `/work`, `/work/[slug]`, `/cv`, `/contact`
3. Écrire les 2 autres case studies au même template
4. Déployer sur Vercel, custom domain

**Livrable** : site fonctionnel à URL publique, partageable.

### Sprint 2 — EN + densité (S+4)

Objectif : version EN reviewable, plus de signal.

1. Script CLI de traduction FR → EN
2. Relire et valider EN sur les 3 case studies + about
3. Page `/process` : comment tu travailles (mantras Création + Collab)
4. Ajouter Pagefind

**Livrable** : site bilingue, recherche fonctionnelle.

### Sprint 3 — Backlog V2 examiné (S+6)

Objectif : décider ce qui mérite vraiment d'être construit.

1. Rétrospective : qu'a-t-on appris des recruteurs ?
2. Une (1) visualisation si elle débloque vraiment qqch (timeline ?)
3. Pages d'audience curées (`/for-product-design`, `/for-research`)
4. Méta case study « How I built this » éventuellement

**Livrable** : V2 en ligne, ou décision motivée de ne rien rajouter.

> **Règle d'or.** Chaque sprint se termine par un *déploiement* et une *rétro
> 30 min*. Si à la fin d'un sprint tu n'as pas déployé, tu ne commences pas le
> suivant — tu finis.

---

## 6. Le template à figer cette semaine

Le **seul** artefact dont tout le reste découle. Fichier cible :
`vault/fr/work/_template.md`.

```yaml
---
title: ""
slug: ""
date_start: ""
date_end: ""
company: ""
role: ""
type: research | design | product | side-project
tags: [ux-research, ai, facilitation, prototype]
skills_demonstrated: []
collaborators: []
impact_summary: ""           # une phrase, chiffrée si possible
visibility: public | private | draft
star_ready: false            # true quand racontable à l'oral en 2 min
translation_reviewed: false
---

# Contexte (qui, où, pourquoi maintenant)
# Problème (la vraie question, pas le brief)
# Ce que j'ai fait (méthode + raccourcis assumés)
# Résultat (mesuré ou observé, honnête)
# Ce que j'en retire (pattern, principe, leçon)
# Ce que ça dit de moi (lien aux mantras Création + Collab)
# Ressources (liens, captures, code si pertinent)
```

Le champ `star_ready` est ton pont vers le track parallèle entretien (§7).

---

## 7. Le track parallèle — celui que les 3 IA ont raté

Le site est nécessaire. Pas suffisant. Pendant que tu construis le site, lance
un deuxième track en parallèle, beaucoup plus court mais critique.

| Bloc | Cadence | Description |
| --- | --- | --- |
| **Stories STAR** | 30 min / case study | Pour chacun des 3 case studies, version *parlée 2 min* (Situation – Task – Action – Result). À mémoriser, pas à lire. |
| **Anglais ciblé** | 20 min / jour | Tu relis les traductions EN du sprint 2. C'est *ton* matériel, donc motivant. Tu reformules à voix haute. Tu enregistres. |
| **Mock interview** | Avant fin S+4 | Un entretien blanc, en anglais, avec un pair UX/PM. Forcing function. Sans ça, le site reste théorique. |

> **Pourquoi ça compte.** Quand un recruteur GitLab te rappelle, ce n'est pas
> ton site qui parle. C'est toi. Le site garantit qu'il *existe une porte
> d'entrée crédible*. Le track parallèle garantit que *tu sais ouvrir la
> porte sous pression*.

---

## 8. Méthodologie de travail au quotidien

### À garder

- Capturer en vocal, transcrire, raffiner avec IA
- Itérer entre problème et solution (tu as raison contre IA 3)
- Cross-checker avec plusieurs IA (ce que tu viens de faire)
- Garder l'idée du site comme évolutif organique

### À ajouter

- Un seul template figé avant tout autre chose
- Une deadline visible et hebdo (vendredi soir = déploiement)
- Une liste `backlog.md` où vont les « bonnes idées » qui ne sont pas pour V1
- Le track parallèle entretien, non négociable

### Workflow d'écriture d'un case study — cible 90 min

| # | Étape | Durée | Outil |
| --- | --- | ---: | --- |
| 1 | Brain dump vocal libre | 15 min | Google Notes / Whisper |
| 2 | Copier la transcription dans `_inbox/<projet>/` | 1 min | Cursor |
| 3 | Demander à Claude/GPT de proposer une structure STAR + 7 § | 5 min | Cursor (chat) |
| 4 | Réagir à la structure, corriger, choisir l'angle | 20 min | Toi |
| 5 | Rédiger v1 en remplissant le template dans `vault/fr/<projet>/` | 30 min | Cursor + IA en pong |
| 6 | Pause, relecture à froid (idéalement le lendemain) | 10 min | Toi |
| 7 | Passer `star_ready: true` et écrire la version 2 min parlée | 10 min | Toi |

---

## 9. Cette semaine — actions concrètes

Si seules ces 7 actions sont faites d'ici dimanche, le projet est massivement
débloqué.

| # | Action | Durée | Pourquoi |
| ---: | --- | ---: | --- |
| 1 | Repo `arnaud` avec `_inbox/`, `vault/fr/`, `site/` | 10 min | Lieu unique, structure mentale claire |
| 2 | Figer le template de case study (cf §6) | 30 min | Le seul artefact qui débloque le reste |
| 3 | Choisir les 3 case studies du MVP | 30 min | 1 récent obligatoire + 2 plus établies. Critère : tu kiffes les raconter. |
| 4 | Brain dump vocal du case study #1, suivre le workflow §8 | 90 min | Première vraie validation du template |
| 5 | Écrire le About en 15 lignes (FR) | 30 min | Force la compression narrative dès maintenant |
| 6 | Bloquer 1 mock interview pour fin S+4 dans l'agenda | 5 min | Forcing function externe |
| 7 | `backlog.md` pour chatbot, visus, audio, méta… | 10 min | Tu te libères mentalement sans perdre les idées |

> **Indicateur unique de succès.** Dans 6 semaines, à la prochaine offre
> intéressante : tu envoies l'URL avec confiance ET tu décroches un premier
> call ? Si oui, le projet a réussi. Si non, on revient au tableau et on
> regarde pourquoi — pas avant.

---

## Ressources

- Conversation source brute : [`_inbox/00-genese/conversation-3-ias.md`](../../../_inbox/00-genese/conversation-3-ias.md)
- Preview HTML (projection actuelle) : [`site/00-genese.html`](../../../site/00-genese.html)
- Backlog actif : [`backlog.md`](../../../backlog.md)

## Méta — ce que ça dit de ce système

Ce document `synthese-strategique.md` est le **premier artefact L1 du vault**.
Il a été produit selon la méthode qu'il décrit lui-même :

1. **L0** : note vocale → 3 IA → réactions vocales → transcription = `_inbox/00-genese/conversation-3-ias.md`
2. **L1** : compression critique + template = ce fichier
3. **L2** : projection HTML lisible = `site/00-genese.html`

Le système se prouve par son existence. C'est la boucle bouclée. Tout futur
case study suivra ce même tracé, avec son propre dossier `<projet>/` dans
chaque couche.

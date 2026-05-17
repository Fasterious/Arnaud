---
title: "PRD V2 — Enrichissements et zones aveugles de la V1"
project: 00-genese
slug: synthese-strategique-v2
date_start: 2026-05-17
date_end: 2026-05-17
type: prd
category: meta
role: "Architecte / Product Designer / Sponsor"
tags: [product-strategy, content-strategy, ux-research, anti-patterns]
skills_demonstrated:
  - critical-self-review
  - product-iteration
  - meta-design
collaborators: [ia-meta-cursor]
impact_summary: "Couvre les 8 zones aveugles de la V1 et durcit la roadmap avec des forcing functions hebdo."
visibility: public
star_ready: false
translation_reviewed: false
based_on: ./synthese-strategique.md
status: amendment
preview: ../../../site/00-genese.html
---

# PRD V2 — Enrichissements

> Ce document **ne remplace pas** [V1](./synthese-strategique.md). Il l'enrichit
> sur 8 angles laissés en blanc ou seulement effleurés.

## Pourquoi une V2 séparée plutôt qu'un amendement ?

Trois raisons opérationnelles :

1. **Traçabilité décisionnelle.** On garde V1 comme baseline (la lecture qu'on
   avait à T0). V2 montre ce qu'on a appris en lisant V1.
2. **Audit de progression.** Plus tard, on peut comparer V1 → V2 → V3 et voir
   où la pensée a bougé. C'est le premier exemple concret de ce que doit
   savoir faire le vault : produire des versions, pas écraser.
3. **Coût cognitif minimum.** Pas besoin de relire V1 entière pour saisir V2 :
   les ajouts sont nommés et numérotés.

> **Convention.** Quand un sujet est complètement nouveau, je l'ajoute en
> section §X. Quand j'amende une section de V1, je note `↻ amende V1 §N`.

---

## §A — Métriques hebdomadaires (forcing functions) `↻ amende V1 §5`

V1 ne donne qu'**une seule métrique finale** (6 semaines : URL envoyée + call
décroché). C'est trop loin pour piloter au quotidien. Voici les jalons
hebdomadaires qui permettent de détecter le décrochage avant qu'il soit
irrécupérable.

| Vendredi soir | Indicateur binaire | Si non → action |
| --- | --- | --- |
| S+1 | Template figé + 1 case study v1 dans `vault/` | Réserver 2 h samedi pour finir |
| S+2 | Site déployé sur Vercel avec 3 case studies FR | Couper une fonctionnalité, pas une case study |
| S+3 | Script traduction tourne sur 1 fichier | Limiter à 1 IA provider, pas comparer |
| S+4 | EN relu sur 3 case studies + mock interview programmée | Mock interview est non-négociable |
| S+5 | 2 min STAR mémorisée pour chaque case study | Enregistrer son propre audio en boucle |
| S+6 | Rétro complète + décision V2 actée | Documenter la décision dans `vault/fr/00-genese/retro-s6.md` |

**Indicateur de dérive** : si 2 vendredis consécutifs sont ratés, on **pause
les nouvelles features et on rattrape**, jamais l'inverse.

---

## §B — Reconstruire des métriques absentes `↻ amende V1 §6`

V1 reconnaît implicitement le problème (« j'ai peur de pas avoir de résultats
mesurés »), mais ne donne pas de méthode. C'est la principale source de
blocage à l'écriture des case studies.

### Hiérarchie des preuves de résultat (du plus dur au plus mou)

1. **Chiffre direct.** Conversion, NPS, temps, taux d'erreur, € — si ça existe,
   utiliser tel quel.
2. **Chiffre indirect.** Décision prise grâce au livrable (« le COMEX a tranché
   pour X »), adoption (« la méthode a été reprise par 3 équipes »).
3. **Témoignage attribué.** Citation d'un PM, d'un sponsor, d'un utilisateur,
   avec contexte. La phrase exacte d'un manager vaut un graph.
4. **Comparaison avant/après qualitative.** « Avant, 80 % des tickets concernaient
   X ; après, ce thème a disparu du backlog. » Pas de chiffre mais une bascule
   observable.
5. **Ce qui *n'est pas arrivé*.** « Le produit n'a pas été lancé parce que la
   recherche a montré que le marché n'existait pas. » Économies évitées.

**Règle d'or** : si la mission n'a produit aucune des 5, c'est probablement que
l'expérience ne mérite pas un case study, pas que tu manques de matière.

### Patron de rédaction quand le résultat est faible

> *La recommandation a été [livrée / publiée / présentée à X]. Elle a été
> [utilisée / archivée / partiellement reprise] dans [contexte]. À recul, ce
> que j'en retire de plus utile est [leçon / pattern].*

Ça assume l'absence de bilan triomphal sans le maquiller. Plus crédible qu'un
chiffre inventé.

---

## §C — Templates secondaires `↻ amende V1 §6`

V1 ne donne que le template **case study**. Il en manque 4 pour couvrir le
vault complet sans avoir à improviser à chaque entrée.

### `_inbox/<projet>/_template-note-libre.md`

```yaml
---
type: note
project: ""
source: vocal | texte | discussion | lecture
status: brut
---
```
Aucune contrainte de section. Format texte libre. Tagué `project` pour qu'on
puisse retrouver toutes les notes d'un même sujet plus tard.

### `vault/fr/skills/_template-skill.md`

```yaml
---
title: ""
slug: ""
type: skill
category: research | design | tech | facilitation | leadership
level: junior | intermediate | senior | expert
evidence_count: 0
last_used: ""
---

# Définition (en 1 phrase)
# Quand je l'ai acquise (jalon)
# Preuves dans le vault (liste de case studies)
# Ce que je sais NE PAS faire avec
```

### `vault/fr/reflexions/_template-reflexion.md`

```yaml
---
title: ""
slug: ""
type: reflexion
themes: []
maturity: brouillon | publiable
---

# Question
# Mon hypothèse actuelle
# Ce qui me ferait changer d'avis
```

### `vault/fr/visions/_template-vision.md`

```yaml
---
title: ""
slug: ""
type: vision
horizon: 1-an | 3-ans | 10-ans
confidence: low | medium | high
---

# Ce que je crois
# Ce sur quoi c'est fondé (preuves, intuitions, expériences)
# Ce que ça implique pour mes choix aujourd'hui
```

> **Pourquoi ces 4 ?** Parce qu'à la lecture des transcriptions, on voit
> qu'Arnaud produit naturellement ces 5 types de contenus (case study + 4
> au-dessus). Sans templates, ils finiraient dans un grand fichier `notes.md`
> ingouvernable.

---

## §D — Cadrage par audience : exemples concrets `↻ amende V1 §3 (challenge 1)`

V1 dit « URLs curées plutôt que chatbot ». Mais sans exemple, l'idée reste
abstraite. Voici comment **le même case study** est cadré pour 3 audiences
différentes — sans dupliquer le contenu, juste en orchestrant l'entrée.

### Source : un case study quelconque dans `vault/fr/work/`

Exemple inventé : `redesign-onboarding-bank.md`, frontmatter tags
`[ux-research, design, ai-prototyping, b2c, fintech]`.

### Vue par audience

| Audience | Route | Sections mises en avant | Sections masquées |
| --- | --- | --- | --- |
| Recruteur Product Design | `/for-product-design/redesign-onboarding-bank` | Problème, Action (raccourcis design), Résultat | Méthodo recherche détaillée |
| Recruteur UX Research | `/for-research/redesign-onboarding-bank` | Problème, Méthodo, Résultats qualitatifs, Leçon | Détails prototypage |
| Pair IA / Indé | `/playground/redesign-onboarding-bank` | Comment l'IA a été utilisée, Ressources | Contexte business |

**Implémentation** : un seul fichier Markdown, mais le template Next.js prend
un paramètre `audience` qui décide quelles sections rendre. Aucune duplication.
**Frontmatter** : un champ `audiences: [product-design, research, playground]`
suffit à signaler qu'un case study peut s'afficher dans plusieurs vues.

**Coût** : ~ 1 h de plus par case study pour annoter les sections (`<!--
audience: research -->`), ~ 2 jours d'implémentation au sprint 1.

---

## §E — La section « Ce que ça dit de moi » : méthode anti-bullshit `↻ amende V1 §6`

C'est la section la plus difficile du template. La plupart des candidats la
remplissent avec des banalités (« j'aime résoudre des problèmes complexes »).
Voici comment l'écrire en 10 minutes sans tomber dedans.

### Protocole en 3 questions à se poser dans l'ordre

1. **Quel choix particulier as-tu fait que quelqu'un d'autre n'aurait pas fait ?**
   Pas « j'ai mené des interviews », tout le monde le fait. Mais « j'ai
   arrêté les interviews à 5 alors qu'on m'en demandait 12, parce que la
   saturation était claire et que le code-design avait plus à apporter ».

2. **Qu'est-ce que ça révèle d'une croyance que tu portes ?**
   Pas « je suis pragmatique ». Mais « je crois que matérialiser tôt
   produit plus d'apprentissage que documenter exhaustivement ». C'est
   testable, donc crédible.

3. **Lien explicite à un mantra (Création OU Collaboration).**
   *Création* : ce projet montre que je préfère produire un artefact
   imparfait que rester en analyse. *Collaboration* : ce projet montre que
   je sais arrêter mon propre process pour intégrer l'avis d'une partie
   prenante.

### Format final (5 lignes max)

```md
# Ce que ça dit de moi
Ce projet a été un cas typique de [tension récurrente dans ma pratique].
J'ai tranché en [choix concret], en assumant [risque]. Ce choix incarne ma
croyance que [conviction testable]. C'est aligné avec le mantra
**[Création OU Collaboration]** parce que [lien d'une ligne].
```

Si tu n'arrives pas à compléter ce gabarit, le case study n'est probablement
pas mûr pour être publié.

---

## §F — Wireframes ASCII des 5 pages V1 `↻ amende V1 §5 (sprint 1)`

V1 liste les routes mais ne montre rien. Voici les wireframes minimaux à
respecter en sprint 1. **Pas de design pour le design**.

### `/` (Home)

```
┌──────────────────────────────────────────────────┐
│  ARNAUD                              FR | EN     │
├──────────────────────────────────────────────────┤
│                                                  │
│  AI-augmented Product Designer / Researcher      │
│  Création + Collaboration                        │
│                                                  │
│  [ One-liner : ce que je fais, pour qui, sortie  │
│    attendue. 2 lignes max. ]                     │
│                                                  │
├──────────────────────────────────────────────────┤
│  3 RÉCENTS                                       │
│  ─────────                                       │
│  · 2026 — Case study A          → lire           │
│  · 2025 — Case study B          → lire           │
│  · 2024 — Case study C          → lire           │
│                                                  │
│  Voir tout (12) →                                │
├──────────────────────────────────────────────────┤
│  About  ·  Work  ·  CV  ·  Contact               │
└──────────────────────────────────────────────────┘
```

### `/about`

```
┌──────────────────────────────────────────────────┐
│  About                                           │
├──────────────────────────────────────────────────┤
│  [ 15 lignes max ]                               │
│                                                  │
│  - Qui je suis (1 phrase)                        │
│  - Ce que je fais (3 phrases)                    │
│  - Avec qui je travaille bien (2 phrases)        │
│  - Mantras + une preuve par mantra (2 phrases)   │
│  - CTA : "Voir le travail" / "Me contacter"      │
└──────────────────────────────────────────────────┘
```

### `/work` (liste)

```
┌──────────────────────────────────────────────────┐
│  Work                            [filter pills]  │
├──────────────────────────────────────────────────┤
│  ┌──────────┐  Titre — entreprise — année        │
│  │ thumb    │  Tag · Tag · Tag                   │
│  │          │  Impact en 1 phrase →              │
│  └──────────┘                                    │
│  ┌──────────┐  ...                               │
│  └──────────┘                                    │
└──────────────────────────────────────────────────┘
```

### `/work/[slug]` (case study)

```
┌──────────────────────────────────────────────────┐
│  ← Work                            [share link]  │
├──────────────────────────────────────────────────┤
│  TITRE                                           │
│  Entreprise · Rôle · Année                       │
│  Impact summary (1 phrase)                       │
│                                                  │
│  ## Contexte                                     │
│  ## Problème                                     │
│  ## Ce que j'ai fait                             │
│  ## Résultat                                     │
│  ## Ce que j'en retire                           │
│  ## Ce que ça dit de moi                         │
│                                                  │
├──────────────────────────────────────────────────┤
│  ← Précédent · Suivant →                         │
└──────────────────────────────────────────────────┘
```

### `/cv`

```
┌──────────────────────────────────────────────────┐
│  CV                              [Télécharger PDF]│
├──────────────────────────────────────────────────┤
│  [ Version concentrée d'une page A4, généré à    │
│    partir du frontmatter de chaque case study ]  │
└──────────────────────────────────────────────────┘
```

> **Discipline graphique** : 2 niveaux typographiques max, 1 couleur d'accent,
> aucune ombre, aucun dégradé. Le contenu doit faire le travail.

---

## §G — Checklist d'auto-revue avant chaque déploiement `↻ nouveau`

Avant chaque `vercel deploy`, vérifier en 5 minutes :

```
┌─ CONTENU ─────────────────────────────────────────┐
│ □ Chaque case study a un impact_summary chiffré   │
│   OU un témoignage attribué, OU une comparaison   │
│   avant/après explicite                           │
│ □ La section "Ce que ça dit de moi" applique le   │
│   protocole §E (pas de banalité)                  │
│ □ Aucune section vide ; sinon, supprimer la       │
│   section, pas la laisser en placeholder          │
│                                                   │
├─ FORME ───────────────────────────────────────────┤
│ □ Pas de "TODO", pas de "[à compléter]"           │
│ □ Une page = un message principal                 │
│ □ Mobile testé sur mon téléphone, pas seulement   │
│   en dev tools                                    │
│                                                   │
├─ AUDIENCE ────────────────────────────────────────┤
│ □ J'ai lu la home avec les yeux d'un recruteur    │
│   qui a 90 secondes : il sait ce que je fais ?    │
│ □ J'ai cliqué un case study : il comprend la      │
│   valeur que j'ai apportée en 30 secondes ?       │
│                                                   │
└───────────────────────────────────────────────────┘
```

Si une case n'est pas cochée, on ne déploie pas. On corrige.

---

## §H — Si je n'ai que 30 minutes aujourd'hui `↻ nouveau`

Liste des **micro-actions** à plus haute valeur, classées par retour sur
temps. À utiliser les jours où la motivation ou la dispo est basse — ce qui
arrivera.

| Action | Effort | Valeur | Pourquoi |
| --- | ---: | --- | --- |
| Capturer une note vocale brute dans `_inbox/` | 5 min | ★★★ | Aucune perte. Crée du matériel pour les jours énergiques. |
| Améliorer le `impact_summary` d'un case study | 15 min | ★★★ | Une ligne qui change la perception du case study entier. |
| Mémoriser la version 2 min STAR d'un case study | 30 min | ★★★ | Ce qui sert le plus en entretien. |
| Cocher 1 case dans la checklist §G | 10 min | ★★ | Pile de retards qui décourage si on la laisse grossir. |
| Lire 1 case study à voix haute en anglais | 20 min | ★★ | Compense les jours sans mock. |
| Mettre à jour la rétro vendredi de la semaine passée | 15 min | ★ | Mémoire institutionnelle, paye plus tard. |

**Ce qu'il NE faut PAS faire en 30 minutes** : ouvrir une nouvelle case study,
toucher au design du site, lire de la documentation Next.js. Tu ne finiras
pas et tu en sortiras frustré.

---

## Ce que cette V2 ne fait **pas** (volontairement)

Pour rester un amendement utile, V2 s'interdit :

- De redéfinir l'architecture L0/L1/L2 (déjà figée en V1 §4).
- D'ajouter de nouvelles fonctionnalités (chatbot, mind map, audio live) :
  tout ça reste dans le [backlog](../../../backlog.md).
- De toucher au positionnement (mantras, métier cible). Ce sont des
  invariants à ce stade.

> **Prochaine version envisageable (V3)** : seulement après la rétro S+6 (fin
> sprint 3), avec des apprentissages concrets sur ce qui a fonctionné ou pas
> avec de vrais recruteurs.

---

## Méta — pourquoi cette V2 existe à T0

V1 est un PRD complet mais écrit *à froid*, avant tout test. V2 ajoute :

- Des **forcing functions** parce que la V1 manquait de cadence intermédiaire.
- Des **patterns concrets** parce que la V1 restait abstraite sur la rédaction.
- Une **discipline de revue** parce que sans elle, le perfectionnisme
  d'Arnaud le ralentirait.

En clair : V1 répond à *quoi construire* ; V2 répond à *comment ne pas
décrocher en chemin*.

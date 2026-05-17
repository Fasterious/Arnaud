---
title: "Loupe — concevoir un lecteur d'entraînement pour musiciens, seul, en 24 jours"
project: 01-loupe
slug: loupe-case-study
date_start: 2026-04-18
date_end: 
type: case-study
tags: [product-design, vibe-building, audio, mobile, indie, ia-assistee, pwa]
skills_demonstrated:
  - product-end-to-end
  - ux-research
  - interaction-design
  - design-system
  - audio-engineering
  - mobile-release
  - marketing-strategy
  - analytics
collaborators: []
impact_summary: "Premier produit conçu de bout en bout en solo (UX → dev → store → marketing) en 24 jours, bêta Play Store livrée — preuve qu'avec l'IA, l'unité créative passe de l'équipe à la personne."
visibility: public
status: active
sources:
  - ../../../_inbox/01-loupe/2026-05-17-conversation-avion-case-study.md
  - /Users/arnaud/Projects/Loupe (repo externe, observé le 2026-05-17)
based_on: 
preview: 
---

# Loupe — concevoir un lecteur d'entraînement pour musiciens, seul, en 24 jours

> Première fois que je tiens **toutes les casquettes d'un produit** : recherche, design, dev, audio, mobile, marketing, analytics, release. 24 jours du premier commit à la bêta Play Store. Ce case study raconte la méthode, pas le produit.

---

## 1. Le déclencheur

J'essayais d'apprendre une chanson de jazz vocal — des *runs* complexes que je voulais décortiquer. Réflexe : ralentir le morceau. Problème : **plusieurs passages** m'intéressaient, et faire le réglage manuel à chaque fois m'aurait gavé au point d'abandonner. La friction d'outil aurait tué la pratique.

J'ai cherché un outil existant. Music Speed Changer, Amazing Slow Downer & co : soit trop complexes, soit **incapables de gérer plusieurs passages techniques nommés** sur un même morceau, avec leurs propres réglages de tempo et de tonalité.

C'est ça, **le vrai problème** — pas le brief. La gestion de plusieurs boucles indépendantes sur un morceau, pour pouvoir basculer entre passages sans manipuler.

## 2. Le contexte produit

| | |
|---|---|
| **Client** | moi |
| **Utilisateur final** | moi (+ tout musicien voulant travailler une chanson) |
| **Différence client/utilisateur** | nulle. Un point que je veux mettre en avant dans tous mes case studies : la confusion client ≠ utilisateur final est responsable de la majorité des produits ratés. Quand le payeur n'est pas l'usager, faire la recherche sur le seul payeur garantit de livrer à côté. |
| **Cible élargie** | chanteurs (tessiture, vibes), instrumentistes (doigté à l'oreille, solos), élèves de conservatoire, amateurs. Bref : tout musicien qui veut **parfaire son instrument en écoutant une œuvre originale**. |
| **Plateforme** | Android (Capacitor) + web PWA (Vercel). iOS volontairement décalé. |
| **Statut** | v0.2.3 en test interne Play Store, web live. Audio engine prod-ready. |

## 3. Mon rôle — UX Builder / Product Designer end-to-end

J'hésite encore sur le nom. Côté marché, **Product Designer end-to-end** est l'appellation la plus lisible. Côté narration, **UX Builder** colle mieux à ce que je fais réellement : quelqu'un qui conçoit *et fabrique* le produit de bout en bout. Je garde les deux en parallèle pour l'instant ; le bon nom émergera des prochains case studies.

Concrètement, sur Loupe :

- **Recherche utilisateur** : protocole test formel (exploration libre 15 min + 20 micro-tâches + débriefing 10 questions + échelle Likert)
- **Design** : design system YAML complet écrit *avant* tout dev UI (`DESIGN.md` : palette WCAG AA, typo Inter Tight + JetBrains Mono, échelle de spacing 4px)
- **Audio engineering** : pipeline Web Audio (`AudioBufferSourceNode` pour le tempo + `AudioWorkletNode` SoundTouchJS pour la transposition sans déformation)
- **Dev frontend & mobile** : React, esbuild, Capacitor Android — un seul codebase, deux sorties via un flag `LOUPE_PLATFORM`
- **Infrastructure** : service worker offline-first, IndexedDB pour l'audio, localStorage pour les méta
- **Analytics** : PostHog EU (UUID anonyme, zéro PII), événements lifecycle / player / loops / coach
- **Monétisation** : AdMob (mobile) + AdSense (web), avec **feature flags PostHog** pour ajuster la cadence pub en live sans release
- **Marketing & lancement** : personas, lexique de marque, fiche store FR/EN, timeline de lancement, mockups screenshots
- **Ops** : keystore Android, versioning, release dual-platform documentée

Tout ça **assisté par IA**, en *vibe building*. C'est l'un des points centraux du case study.

## 4. La méthode — « Linus »

Partant d'un problème personnel, je n'avais pas besoin d'une étude utilisateur classique en amont. Je voulais **prouver qu'on peut créer un produit de A à Z, à partir de zéro**, en compressant les étapes.

J'ai sauté le sketch. Pas de wireframe. **J'ai commencé par décrire à l'IA ce que je voulais voir à l'écran et j'ai itéré sur le résultat.** Empiriquement : c'est la méthode la plus rapide. Moins de complexité à gérer, focus sur le bénéfice et la fonctionnalité plutôt que sur le visuel — le visuel arrivait en seconde lecture, et je l'ajustais ensuite.

> Cette méthode est l'équivalent design de ce qu'on a fini par appeler le « vibe coding » : la décrire au lieu de la prescrire, et juger sur le rendu.

### La séquence de tests

1. Auto-test (j'étais l'utilisateur cible)
2. Test avec ma compagne
3. Test avec un ami
4. Test avec un second ami
5. Mise en ligne **Play Store en mode testeur** — pour tester en conditions réelles, dès qu'on a une version cohérente

### Pourquoi ça change tout

Le vieux problème UX : pour un test utilisateur honnête, il faut s'approcher du produit final. Mais s'en approcher coûte du temps. D'où l'enchaînement historique sketch → wire → POC → dev, conçu pour limiter le coût avant d'investir.

**Aujourd'hui on peut directement aller au prototype interactif** sans s'embarrasser des étapes intermédiaires, et tester en conditions réelles. La seule raison de segmenter ces étapes, c'était d'être efficace. Cette raison a disparu.

## 5. Décisions de design — anecdotes notables

### 5.1 — Boucles multiples vs *looper* classique

Les concurrents font une boucle unique, statique. Moi, j'ai conçu **plusieurs boucles nommées et colorisées** (palette déterministe vert/bleu/coral/lavande/ambre/menthe), avec un **mode séquence** pour les enchaîner dans l'ordre. C'est ce qui répond au vrai cas d'usage : un chanteur n'a pas une boucle, il a 5 passages à travailler.

### 5.2 — Le déplacement de boucle que j'ai retiré

J'avais implémenté un drag du centre d'une boucle pour la déplacer sur la waveform. À l'usage, **conflit hit-test avec le curseur de scrub**. Sur le papier, intuitif. Dans la pratique, ambigu : les gens ne savaient pas ce qui allait se passer.

J'ai tranché pour **création et édition séquencées** : un geste pour créer, des poignées explicites pour redimensionner. Moins de magie, plus de clarté. C'est le pattern « efficacité ≠ intuitivité apparente ».

### 5.3 — Ralentir sans dénaturer

Le `playbackRate` natif change la tonalité avec le tempo. Inutilisable pour un musicien : ralentir un morceau l'envoie d'office hors tonalité. J'ai câblé **SoundTouchJS dans un `AudioWorkletNode`** (et non l'ancien `ScriptProcessor` déphasé). Pipeline final : source (tempo) → worklet (pitch indépendant) → gain → destination.

Le pitch et le tempo deviennent **deux contrôles indépendants**, ce qui ouvre un autre usage : transposer un morceau à sa tessiture pour s'entraîner, puis remonter progressivement.

### 5.4 — Zéro cloud, jour 1

Audio stocké en **IndexedDB local**, méta en `localStorage`, analytics PostHog en UUID anonyme. Décision prise *avant* le premier commit. Raisons : RGPD (uploader de l'audio sans consentement clair = piège), respect de l'usager (mon morceau en cours d'apprentissage ne regarde personne), et — accessoirement — pas de facture cloud à payer.

### 5.5 — Design system avant l'UI

J'ai passé ~1 jour sur le `DESIGN.md` (palette, typo, spacing, do/don'ts) **avant d'écrire la moindre ligne d'UI**. Contre-intuitif pour un solo qui veut aller vite. En réalité, ça m'a épargné 20 micro-décisions par jour (« cette couleur ou celle-là ? »). Design debt → zéro.

### 5.6 — Feature flags pour les pubs

Plutôt que de hardcoder la cadence (`graceHours`, `cooldownMinutes`, `maxPerDay`, `loopGate`…), j'ai mis tout le payload pub dans un **flag PostHog `ads_config`**. Si un testeur me dit « c'est trop de pubs », j'ajuste en 30 secondes et je mesure l'effet — sans repasser par le cycle de review Play Store (2 à 7 jours).

### 5.7 — Capacitor plutôt que natif

Rewrite Android natif = 2-3 mois de pur dev, iOS à part. **Capacitor = un seul codebase React, sortie Android + web + PWA immédiate**, iOS plus tard si la stratégie valide. Pour un solo, démarrer sur trois codebases = mort certaine.

## 6. Résultats observés

Honnêtement : **au-delà de mes attentes**.

- 24 jours du premier commit à la bêta Play Store
- Retours testeurs (compagne, amis, cercle Play Store interne) : excellents, peu de friction
- Audio engine production-ready, analytics + ads en place, architecture V2 (Loupe+ Pro avec RevenueCat) déjà préparée

Hypothèse sur la qualité des retours : l'IA-as-codesigner pioche dans des **patterns communs et éprouvés**. Le produit reflète une moyenne haute des conventions d'usage, donc déstabilise peu. La contrepartie, c'est qu'il faut **forcer la créativité** sur les points de différenciation (mode séquence, palette de boucles colorisées, etc.) — l'IA ne sort pas ça toute seule.

Itérations fines sur lesquelles j'ai passé du temps :
- Comment se passe une boucle, et l'enchaînement de plusieurs
- Mode édition : permanent, temporaire, ou contextuel ?
- Redimensionnement (poignées en ellipse 11×20px, tolérances px constantes au zoom)
- Contrainte du playhead quand une boucle est active en solo

## 7. Ce que ce projet dit du métier

Ma conviction après Loupe : **le processus de conception de demain est plus fluide, plus itératif, plus proche du Lean UX que du grand cycle « recherche → design → dev »**. La phase de recherche initiale ne disparaîtra pas — elle reste critique sur les sujets complexes ou peu connus — mais elle perd son monopole. Quand on a une intuition, c'est dommage de passer trois mois à la prouver alors qu'on peut la tester en quelques jours.

Autre conviction : **faire confiance à l'IA plus qu'à soi, parfois**, et chercher à comprendre *pourquoi* elle a fait un choix. Souvent on a nos biais ; l'IA joue le rôle du collègue qu'on n'a pas, qui demande « tu es sûr, t'as pas envisagé ça ? ». À la fin, le test utilisateur tranche. Pas de danger à faire confiance au départ, tant qu'il existe des instances de validation.

Et la nuance qui fâche : non, on ne « pose pas le cerveau à côté ». On **le pose sur les choses sans valeur**, et on **l'agrandit sur celles qui en ont vraiment**.

## 8. Limites honnêtes

- **Le logo, point faible.** Sur le branding général, l'IA est utile. Sur le **logo**, elle reste en deçà : pas d'intelligence du trait, pas de réflexion sur le sens de la forme. C'est encore un terrain où un graphiste humain fait mieux. Le logo actuel de Loupe est un compromis, pas un coup de cœur.
- **Tessiture du sujet maîtrisé.** J'ai pris un problème simple et personnel exprès. Reste à voir comment la méthode tient sur un sujet plus complexe, multi-utilisateurs, multi-contraintes.
- **Métriques d'usage encore minces.** PostHog est en place, mais la bêta est trop jeune pour des chiffres de rétention solides. Suite à venir.

## 9. Ressources & artefacts

Tous dans `/Users/arnaud/Projects/Loupe` :

- `README.md` — identité produit, stack, statut
- `DESIGN.md` — design system complet (palette, typo, spacing, do/don'ts)
- `audio-engine.js` — pipeline Web Audio + SoundTouch worklet
- `screen-player.jsx` — interactions waveform, boucles, mode édition
- `protocole-test-utilisateur.md` — protocole UX research
- `MARKETING-v2.md` — personas, lexique de marque, timeline de lancement, tuning pub
- `RELEASE-GUIDE.md` — architecture dual-platform, versioning, boucle de release mobile
- Repo GitHub Loupe — historique des 60+ commits

À ajouter ultérieurement : captures de l'application, lien Play Store une fois la fiche publique, démo vidéo courte.

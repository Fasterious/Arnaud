# Arnaud — système narratif

Portfolio / wiki personnel, **vault-first** : tu écris du markdown, un shell Next.js le projette automatiquement en site naviguable.

## Architecture en 2 couches

```
_inbox/<NN-projet>/        ← brouillons, dumps vocaux, gitignored
        ↓ promotion (auto si frontmatter déductible)
vault/<locale>/<NN-projet>/<slug>.md   ← produit fini, frontmatter discipliné
        ↓ projection (automatique, shell Next.js)
   site naviguable (Vercel)
```

Tout ce qui entoure le markdown est minimal et stable. **L'intelligence va dans le contenu.**

## Visibilité — 3 modes

| Mode | Niveau | Voit |
| --- | --- | --- |
| Public | 0 | `visibility: public` (défaut) |
| Étendu | 1 | + `extended` (projets sensibles, offres) |
| Éditeur | 2 | + `editor` (règles, méta, skills) |

Mots de passe en variables d'environnement Vercel (`EXTENDED_PASSWORD`, `EDITOR_PASSWORD`). Filtrage côté serveur.

## Structure du repo

```
app/                          Shell Next.js (layout + page catch-all + auth)
components/Shell.tsx          Sidebar arborescente + breadcrumb + auth bar
lib/                          manifest.ts, auth.ts
scripts/build-manifest.mjs    Scan vault → manifest.json
vault/<locale>/<NN-projet>/   Le contenu — markdown discipliné
_inbox/<NN-projet>/           Brouillons (gitignored)
.cursor/rules/                Règle injectée à chaque session IA
CHANGELOG.md                  Trace humaine des opérations
backlog.md                    Idées hors scope
```

## Démarrer en local

```bash
npm install
cp .env.example .env.local   # remplir EXTENDED_PASSWORD et EDITOR_PASSWORD
npm run dev                  # http://localhost:3000
```

## Déployer

Push sur `main`. Vercel régénère le manifest et déploie. Définir `EXTENDED_PASSWORD` et `EDITOR_PASSWORD` dans les variables d'env du projet Vercel.

## Méthode complète

Voir [`vault/fr/00-genese/methode-workflow.md`](vault/fr/00-genese/methode-workflow.md) (visible en mode éditeur). La règle Cursor [`.cursor/rules/00-workflow-layers.mdc`](.cursor/rules/00-workflow-layers.mdc) en est la version compacte injectée à chaque session IA.

## Indicateur unique de succès

Dans 6 semaines, à la prochaine offre intéressante : URL envoyée avec confiance **et** premier call décroché ? Si oui, le système fonctionne. Si non, retour au tableau.

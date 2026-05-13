import {
  Callout,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Grid,
  H1,
  H2,
  H3,
  Pill,
  Row,
  Stack,
  Stat,
  Table,
  Text,
  useHostTheme,
} from "cursor/canvas";

export default function ProjetArnaudSynthese() {
  const theme = useHostTheme();

  return (
    <Stack gap={28}>
      {/* ============ EN-TÊTE ============ */}
      <Stack gap={8}>
        <H1>Projet "Arnaud" — Synthèse stratégique</H1>
        <Text tone="secondary">
          Analyse croisée des 3 IA + lecture critique + approche unifiée recommandée. Le projet n'est
          pas un site, c'est un <Text weight="semibold">système de compression narrative</Text> qui
          se manifeste sous forme de site.
        </Text>
      </Stack>

      <Grid columns={4} gap={12}>
        <Stat value="3" label="Projets imbriqués" />
        <Stat value="2 sem." label="Délai V1 réaliste" tone="info" />
        <Stat value="3" label="Case studies au MVP" />
        <Stat value="9" label="Challenges à arbitrer" tone="warning" />
      </Grid>

      <Divider />

      {/* ============ DIAGNOSTIC ============ */}
      <Stack gap={12}>
        <H2>1. Diagnostic — le vrai problème</H2>
        <Text>
          GitLab n'était pas un échec, c'était un <Text weight="semibold">révélateur</Text>. Tu n'as
          pas un déficit de compétences. Tu as un problème de{" "}
          <Text weight="semibold">compression narrative</Text> : trop de matière, dispersée, jamais
          structurée pour être <Text italic>récupérable sous pression</Text> (entretien, 1h, anglais).
        </Text>
        <Text>
          Les 3 IA ont convergé là-dessus, mais aucune n'a nommé le piège central : tu confonds 3
          projets qui n'ont pas les mêmes exigences. Tant qu'ils sont confondus, tu ne sais pas pour
          qui tu écris.
        </Text>

        <Grid columns={3} gap={12}>
          <Card>
            <CardHeader>Projet A — Introspection</CardHeader>
            <CardBody>
              <Stack gap={6}>
                <Text size="small" tone="secondary">
                  Tri, sensemaking, mémoire
                </Text>
                <Text>
                  Audience : <Text weight="semibold">toi seul</Text>. Pas de mise en forme. Format
                  brut, exploratoire, jetable.
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>Projet B — Mémoire structurée</CardHeader>
            <CardBody>
              <Stack gap={6}>
                <Text size="small" tone="secondary">
                  Second cerveau, vault
                </Text>
                <Text>
                  Audience : <Text weight="semibold">toi + IA</Text>. Format Markdown discipliné,
                  taggable, requêtable. Ré-utilisable pour générer du contenu adapté.
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>Projet C — Vitrine publique</CardHeader>
            <CardBody>
              <Stack gap={6}>
                <Text size="small" tone="secondary">
                  Site, portfolio, narration
                </Text>
                <Text>
                  Audience :{" "}
                  <Text weight="semibold">recruteurs, futurs collaborateurs, pairs</Text>. 90s
                  d'attention. Curé, narratif, démontratif.
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </Grid>

        <Callout tone="info" title="Idée-clé">
          Le projet B (la mémoire structurée) est le <Text weight="semibold">moteur</Text>. Le projet
          C est juste une <Text weight="semibold">projection</Text> filtrée du projet B. Le projet A
          est l'<Text weight="semibold">input</Text>. Ne les confonds plus jamais.
        </Callout>
      </Stack>

      <Divider />

      {/* ============ COMPARAISON DES 3 IA ============ */}
      <Stack gap={12}>
        <H2>2. Ce que les 3 IA disent (synthèse honnête)</H2>
        <Text tone="secondary">
          Convergences en gras. Divergences notables en colonnes.
        </Text>

        <Table
          headers={[
            "Sujet",
            "IA 1 (structurée)",
            "IA 2 (méthodo)",
            "IA 3 (philosophique)",
            "Mon arbitrage",
          ]}
          columnAlign={["left", "left", "left", "left", "left"]}
          rows={[
            [
              "Cadrage",
              "3 projets imbriqués + 3 couches",
              "Jardin numérique",
              "Mémoire augmentée",
              <Text weight="semibold">Système de compression narrative</Text>,
            ],
            [
              "Risque #1",
              "Procrastination élégante",
              "Exhaustivité destructrice",
              "Architecture parfaite = évitement",
              <Text weight="semibold">Les 3 sont vrais, mais surtout #1+3</Text>,
            ],
            [
              "Stack",
              "Next.js + MDX + Vercel",
              "Astro OU Next.js",
              "Next.js + Contentlayer",
              <Text weight="semibold">Next.js (pas Astro — voir §4)</Text>,
            ],
            [
              "Ordre",
              "Récit d'abord (couche 3), garden ensuite",
              "Prototyper UNE facette",
              "Contenu avant système",
              <Text weight="semibold">Template d'abord, 1 entrée, puis site</Text>,
            ],
            [
              "Visualisations",
              "Phase 2",
              "React Flow / Chrono",
              "Phase 4 (post-contenu)",
              <Text weight="semibold">Aucune en V1. Une seule en V2.</Text>,
            ],
            [
              "Audio",
              "Whisper async, jamais live",
              "Non traité",
              "Non traité",
              <Text weight="semibold">Workflow Google Notes existant suffit</Text>,
            ],
            [
              "Bidirectionnel",
              "Wikilinks via plugin / Quartz",
              "Obsidian comme éditeur",
              "Pas en V1",
              <Text weight="semibold">Manuel en V1, IA-assisté en V2</Text>,
            ],
            [
              "Questions clés posées",
              "6 questions ciblées",
              "1 question (quelle facette)",
              "4 questions identitaires",
              <Text weight="semibold">IA 1 + IA 3 forment un bon set</Text>,
            ],
          ]}
          striped
        />
      </Stack>

      <Divider />

      {/* ============ CHALLENGES ============ */}
      <Stack gap={12}>
        <H2>3. Là où je challenge — toi et les IA</H2>
        <Text tone="secondary">
          9 points où je pense que la conversation tombe dans des biais ou manque un angle.
        </Text>

        <Stack gap={12}>
          <Callout
            tone="warning"
            title="Challenge #1 — Le chatbot adaptatif est un piège en V1-V3"
          >
            <Text>
              Tu y reviens dans tes 3 réponses : un chatbot vocal qui s'adapte aux recruteurs. Pas
              en V1, pas en V2, pas en V3.{" "}
              <Text weight="semibold">
                Un recruteur a 90 secondes et veut scanner, pas dialoguer.
              </Text>{" "}
              Un chatbot signale "playful but unfocused" — l'inverse de ce que tu veux projeter sur
              un poste senior. L'adaptation par audience passe par des{" "}
              <Text weight="semibold">URLs curées</Text> (`/for-product-design`, `/for-research`,
              `/playground`), pas par une couche d'IA conversationnelle.
            </Text>
          </Callout>

          <Callout
            tone="warning"
            title="Challenge #2 — Tes 3 IA et toi confondez 'IA dans le process' et 'IA dans le produit'"
          >
            <Text>
              Tu veux montrer ta maîtrise de l'IA. Très bien. Mais ça se démontre dans{" "}
              <Text weight="semibold">comment tu as construit le site</Text> (visible dans les case
              studies, dans une page "process", dans le commit log si repo public) — pas en
              foutant un chatbot sur la home. Sépare le médium et le message.
            </Text>
          </Callout>

          <Callout
            tone="warning"
            title="Challenge #3 — 'Content first' (IA 3) est trop binaire ; toi tu as raison sur les allers-retours"
          >
            <Text>
              Tu pousses fort sur la dialectique problème↔solution, contenu↔forme. Tu as raison.
              Mais il faut <Text weight="semibold">une seule chose figée</Text> pour démarrer : un{" "}
              <Text weight="semibold">template de case study</Text> (frontmatter + 7 sections). Pas
              le site, pas la stack, pas les visualisations. <Text italic>Une</Text> structure
              d'écriture. Ensuite contenu + forme co-évoluent.
            </Text>
          </Callout>

          <Callout
            tone="warning"
            title="Challenge #4 — Astro vs Next.js — pas un débat dans ton cas"
          >
            <Text>
              IA 2 propose Astro. <Text weight="semibold">Mauvais choix pour toi.</Text> Astro est
              imbattable pour du <Text italic>pur statique</Text>. Mais tu veux : génération de
              narrations dynamiques par audience, traduction FR→EN à la volée, peut-être interaction
              IA plus tard. Next.js 15 (App Router) + Server Components couvre tout ça nativement.
              Et c'est ta stack actuelle — pas de coût d'apprentissage. Le seul argument pour Astro
              serait la perf SEO, mais tu n'as pas besoin de SEO sur un site qui sera linké à la
              main aux recruteurs.
            </Text>
          </Callout>

          <Callout
            tone="warning"
            title="Challenge #5 — Ta résistance à Obsidian repose sur une fausse opposition"
          >
            <Text>
              Tu dis "ne pas vouloir un outil de plus, je centralise dans le projet". Mais Obsidian
              n'est <Text italic>pas</Text> un autre lieu de stockage : c'est{" "}
              <Text weight="semibold">une vue alternative</Text> sur les mêmes fichiers Markdown du
              repo. Tu peux pointer Obsidian sur `vault/` dans le repo, garder Cursor pour les
              entrées techniques, et utiliser Obsidian pour la pensée non-linéaire. Source unique,
              outils multiples. Pas de duplication.
            </Text>
          </Callout>

          <Callout
            tone="warning"
            title="Challenge #6 — FR + EN en parallèle dès J1, c'est non"
          >
            <Text>
              Tu reconnais que ton anglais est limité. Écrire les deux versions à la main = drift
              quasi-garanti + double charge cognitive. Approche{" "}
              <Text weight="semibold">FR = source de vérité, EN = artefact généré + relu</Text>. Un
              script CLI prend `vault/fr/*.md` et produit `vault/en/*.md` via une API IA, avec un
              champ `translation_reviewed: false/true` dans le frontmatter. Tu relis = tu pratiques
              ton anglais sur ton propre matériel = double bénéfice.
            </Text>
          </Callout>

          <Callout
            tone="warning"
            title="Challenge #7 — Le 'site = case study du site' est séduisant mais piège"
          >
            <Text>
              Tu veux que le site démontre comment il a été conçu (méta-narratif). C'est puissant
              comme idée — pour la V2+. Si tu fais ça en V1, tu ralentis le contenu principal pour
              documenter un process de construction qui n'est pas encore stabilisé. Démarre, fais
              tes 3 case studies <Text italic>réelles</Text>, et seulement après écris la
              meta-étude de cas "How I built this".
            </Text>
          </Callout>

          <Callout
            tone="warning"
            title="Challenge #8 — Le site ne résoudra pas le problème GitLab"
          >
            <Text>
              C'est l'angle que personne n'a nommé clairement. La raison pour laquelle l'entretien
              t'a fait peur, c'est{" "}
              <Text weight="semibold">la fluence sous pression en anglais sur des stories non
              rejouées</Text>. Un site bien fait te donne la matière première, mais ne te fait pas
              parler. Il te faut un{" "}
              <Text weight="semibold">track parallèle</Text> (voir §7) sinon dans 4 semaines tu
              auras un beau site et la même angoisse au prochain entretien.
            </Text>
          </Callout>

          <Callout
            tone="danger"
            title="Challenge #9 — Ton oscillation MVP : 2 expériences ou 'site + chatbot + audio + bidi' ?"
          >
            <Text>
              Dans la même conversation tu dis "le minimum c'est 2-3 expériences" puis tu rajoutes
              chatbot, audio, mind maps, méta-case-study, FR+EN, visualisations…{" "}
              <Text weight="semibold">Choisis maintenant</Text>. Ma proposition ferme :
            </Text>
            <Stack gap={4} style={{ marginTop: 8 }}>
              <Text>
                <Text weight="semibold">MVP (2 semaines)</Text> : home + about + 3 case studies + CV
                + contact. FR uniquement. Aucune visu. Pas de chatbot. Statique.
              </Text>
              <Text>
                <Text weight="semibold">Tout le reste</Text> = backlog avec date d'examen au sprint 3.
              </Text>
            </Stack>
          </Callout>
        </Stack>
      </Stack>

      <Divider />

      {/* ============ APPROCHE RECOMMANDÉE ============ */}
      <Stack gap={16}>
        <H2>4. Approche recommandée — opinionée</H2>

        <Stack gap={8}>
          <H3>Positionnement</H3>
          <Text>
            Tu n'es plus juste UX Designer ni UX Researcher. Tu deviens un{" "}
            <Text weight="semibold">AI-augmented Product Designer / Researcher</Text> qui maîtrise
            le cycle complet : recherche → conception → prototypage testable → narration. Ton
            avantage compétitif est la <Text weight="semibold">vélocité</Text> et l'
            <Text weight="semibold">autonomie</Text> de bout en bout, rendues possibles par l'IA.
            Mantras : <Text weight="semibold">Création + Collaboration</Text>. Ne change rien à ces
            deux mots — ils sont justes.
          </Text>
        </Stack>

        <Stack gap={8}>
          <H3>Architecture en oignon — version raffinée</H3>
          <Text tone="secondary">
            Inspirée de l'IA 1, mais corrigée : le "garden public" est une mauvaise idée pour toi.
            La chaos reste privé.
          </Text>

          <Grid columns="auto 1fr 1fr" gap={12} align="start">
            <Pill tone="neutral">L0</Pill>
            <Text weight="semibold">Inbox</Text>
            <Text>
              `_inbox/` — notes vocales transcrites, dumps. Privé. Gitignored possible. Format libre.
              Ta couche jetable.
            </Text>

            <Pill tone="info">L1</Pill>
            <Text weight="semibold">Vault structuré</Text>
            <Text>
              `vault/` — Markdown avec frontmatter discipliné. C'est le moteur. Versionné mais
              privé. Toutes tes expériences, projets, skills, réflexions, normalisés au même
              template. C'est <Text italic>ici</Text> que vit ta vraie mémoire.
            </Text>

            <Pill tone="success">L2</Pill>
            <Text weight="semibold">Site public</Text>
            <Text>
              `app/` — Next.js qui consomme `vault/` sélectivement. Curé. Narratif. Lisible en 90s.
              C'est ce que voient recruteurs et pairs.
            </Text>
          </Grid>

          <Callout tone="neutral">
            <Text>
              Conséquence concrète : <Text weight="semibold">repo unique</Text>, deux dossiers
              (`vault/` listé dans `.gitignore` si publié, ou repo entièrement privé tant que pas
              décidé). Site déployé. Tu ne publies pas ton garden — tu publies sa projection
              filtrée.
            </Text>
          </Callout>
        </Stack>

        <Stack gap={8}>
          <H3>Stack technique — justifications par choix</H3>
          <Table
            headers={["Couche", "Choix", "Pourquoi celui-ci (et pas un autre)"]}
            rows={[
              [
                "Framework",
                <Text weight="semibold">Next.js 15 (App Router)</Text>,
                "Tu le connais. Server Components = génération de narrations IA-side facile. Astro = optimisé pour le mauvais axe pour toi.",
              ],
              [
                "Hosting",
                <Text weight="semibold">Vercel</Text>,
                "Zéro friction, preview branches gratuites, edge functions si besoin plus tard.",
              ],
              [
                "Contenu",
                <Text weight="semibold">MDX + Velite</Text>,
                "Velite (plus moderne que Contentlayer, mieux maintenu) = types TS auto-générés depuis le frontmatter. Tu écris du MD, tu obtiens des objets typés.",
              ],
              [
                "Style",
                <Text weight="semibold">Tailwind + shadcn/ui</Text>,
                "Tu copies les composants dans ton repo, tu les owns. Pas de dépendance UI lourde.",
              ],
              [
                "Recherche",
                <Text weight="semibold">Pagefind</Text>,
                "Indexe ton site statique au build. Aucun serveur. Suffisant pour < 1000 pages.",
              ],
              [
                "Traduction",
                <Text weight="semibold">Script CLI custom</Text>,
                "30 lignes : lit `vault/fr/*.md`, appelle Claude/GPT, écrit `vault/en/*.md`. Frontmatter `translation_reviewed`.",
              ],
              [
                "Audio → texte",
                <Text weight="semibold">Workflow actuel (Google Notes)</Text>,
                "Ce que tu fais déjà fonctionne. Pas d'automatisation tant que ça ne coince pas.",
              ],
              [
                "Visualisations",
                <Text weight="semibold">AUCUNE en V1</Text>,
                "react-flow et chrono restent en backlog V2. Tableau + grilles bien typographiés suffisent à 90% des cas.",
              ],
            ]}
          />
        </Stack>
      </Stack>

      <Divider />

      {/* ============ ROADMAP ============ */}
      <Stack gap={12}>
        <H2>5. Roadmap — 4 sprints de 2 semaines</H2>

        <Grid columns={2} gap={12}>
          <Card>
            <CardHeader trailing={<Pill tone="info" size="sm">Cette semaine</Pill>}>
              Sprint 0 — Foundations
            </CardHeader>
            <CardBody>
              <Stack gap={8}>
                <Text size="small" tone="secondary">
                  Objectif : matière + template, zéro site
                </Text>
                <Text>1. Définir le template de case study (frontmatter + 7 sections)</Text>
                <Text>2. Écrire <Text weight="semibold">1 seul</Text> case study récent à fond</Text>
                <Text>3. Écrire la page "About" courte (15 lignes max)</Text>
                <Text>4. Lister tes 3 stories candidates pour le MVP</Text>
                <Text tone="secondary" size="small">
                  Livrable : 1 .md propre + 1 page About + une liste priorisée
                </Text>
              </Stack>
            </CardBody>
          </Card>

          <Card>
            <CardHeader trailing={<Pill tone="neutral" size="sm">S+2</Pill>}>
              Sprint 1 — V1 statique en ligne
            </CardHeader>
            <CardBody>
              <Stack gap={8}>
                <Text size="small" tone="secondary">
                  Objectif : avoir un site déployé, FR seulement
                </Text>
                <Text>1. Scaffold Next.js + Velite + Tailwind</Text>
                <Text>2. Routes : `/`, `/about`, `/work`, `/work/[slug]`, `/cv`, `/contact`</Text>
                <Text>3. Écrire les 2 autres case studies au même template</Text>
                <Text>4. Déployer sur Vercel, custom domain</Text>
                <Text tone="secondary" size="small">
                  Livrable : site fonctionnel à URL publique, partageable
                </Text>
              </Stack>
            </CardBody>
          </Card>

          <Card>
            <CardHeader trailing={<Pill tone="neutral" size="sm">S+4</Pill>}>
              Sprint 2 — EN + densité
            </CardHeader>
            <CardBody>
              <Stack gap={8}>
                <Text size="small" tone="secondary">
                  Objectif : version EN reviewable, plus de signal
                </Text>
                <Text>1. Script CLI de traduction FR→EN</Text>
                <Text>2. Relire et valider EN sur les 3 case studies + about</Text>
                <Text>3. Page `/process` : comment tu travailles (mantras Création + Collab)</Text>
                <Text>4. Ajouter Pagefind</Text>
                <Text tone="secondary" size="small">
                  Livrable : site bilingue, recherche fonctionnelle
                </Text>
              </Stack>
            </CardBody>
          </Card>

          <Card>
            <CardHeader trailing={<Pill tone="neutral" size="sm">S+6</Pill>}>
              Sprint 3 — Backlog v2 examiné
            </CardHeader>
            <CardBody>
              <Stack gap={8}>
                <Text size="small" tone="secondary">
                  Objectif : décider ce qui mérite vraiment d'être construit
                </Text>
                <Text>1. Retrospective : qu'a-t-on appris des recruteurs ?</Text>
                <Text>2. Une (1) visualisation si elle débloque vraiment qqch (timeline ?)</Text>
                <Text>3. Pages d'audience curées (`/for-product-design`, `/for-research`)</Text>
                <Text>4. Méta case study "How I built this" éventuellement</Text>
                <Text tone="secondary" size="small">
                  Livrable : V2 en ligne, ou décision motivée de ne rien rajouter
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </Grid>

        <Callout tone="info">
          <Text>
            <Text weight="semibold">Règle d'or</Text> : chaque sprint se termine par un{" "}
            <Text italic>déploiement</Text> et une <Text italic>rétro 30 min</Text>. Si à la fin
            d'un sprint tu n'as pas déployé, tu ne commences pas le suivant — tu finis.
          </Text>
        </Callout>
      </Stack>

      <Divider />

      {/* ============ TEMPLATE DE CASE STUDY ============ */}
      <Stack gap={12}>
        <H2>6. Le template à figer cette semaine</H2>
        <Text tone="secondary">
          Le <Text weight="semibold">seul</Text> artefact dont tout le reste découle. Si tu figes
          ça bien, le reste se déroule.
        </Text>

        <Card>
          <CardHeader>vault/fr/work/_template.md</CardHeader>
          <CardBody style={{ padding: 16, fontFamily: "monospace", fontSize: 13 }}>
            <Stack gap={2}>
              <Text>---</Text>
              <Text>title: ""</Text>
              <Text>slug: ""</Text>
              <Text>date_start: ""</Text>
              <Text>date_end: ""</Text>
              <Text>company: ""</Text>
              <Text>role: ""</Text>
              <Text>type: research | design | product | side-project</Text>
              <Text>tags: [ux-research, ai, facilitation, prototype]</Text>
              <Text>skills_demonstrated: []</Text>
              <Text>collaborators: []</Text>
              <Text>impact_summary: "" # une phrase, chiffrée si possible</Text>
              <Text>visibility: public | private | draft</Text>
              <Text>star_ready: false # true quand racontable à l'oral en 2 min</Text>
              <Text>translation_reviewed: false</Text>
              <Text>---</Text>
              <Text> </Text>
              <Text># Contexte (qui, où, pourquoi maintenant)</Text>
              <Text># Problème (la vraie question, pas le brief)</Text>
              <Text># Ce que j'ai fait (méthode + raccourcis assumés)</Text>
              <Text># Résultat (mesuré ou observé, honnête)</Text>
              <Text># Ce que j'en retire (pattern, principe, leçon)</Text>
              <Text># Ce que ça dit de moi (lien aux mantras Création + Collab)</Text>
              <Text># Ressources (liens, captures, code si pertinent)</Text>
            </Stack>
          </CardBody>
        </Card>

        <Text tone="secondary" size="small">
          Le champ <Text size="small"><Text size="small" weight="semibold">star_ready</Text></Text>{" "}
          est ton pont vers le track parallèle entretien (§7).
        </Text>
      </Stack>

      <Divider />

      {/* ============ TRACK PARALLÈLE ============ */}
      <Stack gap={12}>
        <H2>7. Le track parallèle — celui que les 3 IA ont raté</H2>
        <Text>
          Le site est nécessaire. Pas suffisant. Pendant que tu construis le site, lance un
          deuxième track en parallèle, beaucoup plus court mais critique.
        </Text>

        <Grid columns={3} gap={12}>
          <Card>
            <CardHeader>Stories STAR</CardHeader>
            <CardBody>
              <Stack gap={6}>
                <Text size="small" tone="secondary">
                  30 min par case study
                </Text>
                <Text>
                  Pour chacun des 3 case studies, écris une version{" "}
                  <Text weight="semibold">parlée de 2 min</Text> (Situation - Task - Action -
                  Result). À mémoriser, pas à lire.
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>Anglais ciblé</CardHeader>
            <CardBody>
              <Stack gap={6}>
                <Text size="small" tone="secondary">
                  20 min par jour
                </Text>
                <Text>
                  Tu relis les traductions EN du sprint 2. C'est{" "}
                  <Text weight="semibold">ton</Text> matériel, donc motivant. Tu reformules à voix
                  haute. Tu enregistres.
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>Mock interview</CardHeader>
            <CardBody>
              <Stack gap={6}>
                <Text size="small" tone="secondary">
                  Avant fin S+4
                </Text>
                <Text>
                  Un entretien blanc, en anglais, avec un pair UX/PM. Forçing function. Sans ça, le
                  site reste théorique.
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </Grid>

        <Callout tone="success" title="Pourquoi ça compte">
          <Text>
            Quand un recruteur GitLab te rappelle, ce n'est pas ton site qui parle. C'est toi. Le
            site garantit qu'il <Text italic>existe une porte d'entrée crédible</Text>. Le track
            parallèle garantit que <Text italic>tu sais ouvrir la porte sous pression</Text>.
          </Text>
        </Callout>
      </Stack>

      <Divider />

      {/* ============ MÉTHODOLOGIE ============ */}
      <Stack gap={12}>
        <H2>8. Méthodologie de travail au quotidien</H2>

        <Grid columns={2} gap={12}>
          <Stack gap={8}>
            <H3>Ce que tu fais déjà bien — garder</H3>
            <Stack gap={4}>
              <Text>• Capturer en vocal, transcrire, raffiner avec IA</Text>
              <Text>• Itérer entre problème et solution (tu as raison contre IA 3)</Text>
              <Text>• Cross-checker avec plusieurs IA (ce que tu viens de faire)</Text>
              <Text>• Garder l'idée du site comme évolutif organique</Text>
            </Stack>
          </Stack>

          <Stack gap={8}>
            <H3>Ce qu'il faut ajouter</H3>
            <Stack gap={4}>
              <Text>• Un seul template figé avant tout autre chose</Text>
              <Text>• Une deadline visible et hebdo (vendredi soir = déploiement)</Text>
              <Text>• Une liste de backlog où vont les "bonnes idées" qui ne sont pas pour V1</Text>
              <Text>• Le track parallèle entretien, non négociable</Text>
            </Stack>
          </Stack>
        </Grid>

        <Stack gap={8}>
          <H3>Workflow d'écriture d'un case study (cible : 90 min)</H3>
          <Table
            headers={["Étape", "Durée", "Outil"]}
            columnAlign={["left", "right", "left"]}
            rows={[
              ["1. Brain dump vocal libre", "15 min", "Google Notes / Whisper"],
              ["2. Copier la transcription dans `_inbox/`", "1 min", "Cursor"],
              ["3. Demander à Claude/GPT de proposer une structure STAR + 7 sections", "5 min", "Cursor (chat)"],
              ["4. Réagir à la structure, corriger, choisir l'angle", "20 min", "Toi"],
              ["5. Rédiger v1 en remplissant le template", "30 min", "Cursor + IA en pong"],
              ["6. Pause, relecture à froid (idéalement le lendemain)", "10 min", "Toi"],
              ["7. Passer star_ready à true et écrire la version 2 min parlée", "10 min", "Toi"],
            ]}
          />
        </Stack>
      </Stack>

      <Divider />

      {/* ============ ACTIONS IMMÉDIATES ============ */}
      <Stack gap={12}>
        <H2>9. Cette semaine — actions concrètes</H2>
        <Text tone="secondary">
          Si tu ne fais que ça d'ici dimanche, tu auras massivement débloqué le projet.
        </Text>

        <Table
          headers={["#", "Action", "Durée", "Pourquoi"]}
          columnAlign={["center", "left", "right", "left"]}
          rows={[
            [
              "1",
              "Créer un repo privé `arnaud` avec `_inbox/`, `vault/fr/work/`, `app/`",
              "10 min",
              "Lieu unique, structure mentale claire",
            ],
            [
              "2",
              "Figer le template de case study (cf §6)",
              "30 min",
              "Le seul artefact qui débloque le reste",
            ],
            [
              "3",
              "Choisir les 3 case studies du MVP",
              "30 min",
              "1 récent obligatoire + 2 plus établies. Critère : tu kiffes les raconter.",
            ],
            [
              "4",
              "Brain dump vocal du case study #1, suivre le workflow §8",
              "90 min",
              "Première vraie validation du template",
            ],
            [
              "5",
              "Écrire le About en 15 lignes (FR)",
              "30 min",
              "Force la compression narrative dès maintenant",
            ],
            [
              "6",
              "Bloquer 1 mock interview pour fin S+4 dans ton agenda",
              "5 min",
              "Forcing function externe",
            ],
            [
              "7",
              "Mettre tout le reste (chatbot, visus, audio, méta) dans un fichier `backlog.md`",
              "10 min",
              "Tu te libères mentalement sans perdre les idées",
            ],
          ]}
          rowTone={[
            "info",
            "info",
            undefined,
            undefined,
            undefined,
            "warning",
            undefined,
          ]}
        />

        <Callout tone="neutral" title="Le seul indicateur qui compte">
          <Text>
            Dans 6 semaines, à la prochaine offre intéressante : est-ce que tu envoies l'URL avec
            confiance et est-ce que tu décroches un premier call ? Si oui, le projet a réussi. Si
            non, on retourne au tableau et on regarde pourquoi — pas avant.
          </Text>
        </Callout>
      </Stack>
    </Stack>
  );
}

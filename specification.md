# Specification — MLN111: Functional & Architectural Specification

## System Vision
The platform teaches Marxist‑Leninist philosophy through a blend of canonical texts, interactive quizzes, and exploratory learning games. Students build conceptual maps, answer localized quizzes and receive AI‑grounded explanations sourced from the official textbook PDF. The platform emphasizes reflective understanding and practical application of six core themes drawn from `assets/docs/Chude.txt`.

## Product Scope
- In scope: static learning pages, quizzes, a worldview building game, achievements, an AI assistant grounded to the provided PDF, local progress storage, and simple instructor-editable content via repository files.
- Out of scope (current): user accounts with server persistence, advanced LMS features (gradebooks, cohorts), editorial CMS, production-ready analytics.

## Users & Personas
- Student: reads lessons, plays the worldview game, answers quizzes, asks the AI tutor for clarifications.
- Instructor: curates module content, prepares quizzes and recommended game pieces (currently via repository edits).
- Developer: maintains server, AI integration, and implements new features.
- Admin: manages deployment and API keys.

## Functional Modules (mapped to 6 themes from `Chude.txt`)

For each module we list features, business rules, screens, flow and data.

### Module 1 — Matter & Motion
- Overview: lessons on materialist ontology, motion, space & time.
- Features: lesson pages, multiple‑choice quizzes, game pieces representing concepts such as `materialism`, `vận động`.
- Business rules: quiz correctness and bonus effects affect in‑game character stats.
- Screens: `module1.html`, lesson fragments, quiz modal.
- Data: `quiz-data.js` entries with category `luong-chat` or equivalent.
- Integrations: AI tutor can cite textbook sections when asked about foundational definitions.

### Module 2 — Consciousness & Origins
- Overview: nature and structure of consciousness.
- Features: readings, concept mapping exercises, challenge prompts in worldview game.

### Module 3 — Quantity ⇄ Quality
- Overview: law of quantity‑quality transformation and applications.
- Features: quizzes that trigger enterprise/management mini scenarios (Module 5 overlap).

### Module 4 — Contradiction & Dialectics
- Overview: mâu thuẫn, unity & struggle of opposites.
- Features: worldview game mechanics that detect contradictions (see `worldview-ai-analysis.js`), AI analysis of student maps.

### Module 5 — Production Relations & Enterprise Mgmt
- Overview: relation between forces and relations of production; applied enterprise management exercises.
- Features: scenario exercises, management-focused quizzes, instructor notes.

### Module 6 — Base & Superstructure; Governance
- Overview: infrastructure/architecture analysis; applications to modern Vietnamese governance.
- Features: case studies, essay prompts, integration with PDF references.

## Feature Inventory (implementation mapping)
- Completed / implemented:
  - Static content pages: many HTML files (e.g., `module1.html` … `module5.html`).
  - AI assistant: `server.js` + `js/ai-assistants.js` (Gemini integration and PDF grounding).
  - Worldview game and AI analysis: `js/worldview-*.js` (visualization, analysis, matching to philosophers).
  - Quiz system: `js/quiz-system.js` and `js/quiz-data.js` powering modal quizzes and in-game rewards.
  - Achievements and character state: `js/achievement-system.js`, `js/character-state.js`.
- Partial / needs improvement:
  - Content tagging: module → concept mapping exists in JS conventions but lacks a central index file.
  - Instructor tooling: editing requires repository pushes (no CMS).
- Inferred / missing:
  - Cross-device progress sync (no server-side persistence).
  - Search index for textbook (AI uses full PDF inline but there is no local text index).

## Architecture Specification

- Frontend
  - Static HTML/CSS/JS pages served by Express static middleware.
  - Client stores session/history in `localStorage`.

- Backend
  - `server.js` (Express) exposes `POST /api/ask-gemini` which loads the textbook PDF and calls Gemini via `@google/generative-ai`.
  - Environment variables: `GEMINI_API_KEY`, optional `PDF_URL`.

- AI integration
  - Prompt in `server.js` instructs the model to answer only from attached PDF data; responses are sent as plain text.

- Data persistence
  - None persistent server-side. All user state is client-side only in `localStorage`.

- Deployment
  - Typical deployment: host static site and Node server with `GEMINI_API_KEY` configured. For production scale, consider using a serverless AI proxy or secure managed AI gateway.

## Security & Privacy
- API keys must be stored server‑side (`.env`) and never committed.
- The current system exposes no authentication; do not use it to store sensitive user data.

## Non‑Functional Requirements
- Performance: frontend loads as static assets; AI calls depend on Gemini latency — include UI timeouts and graceful degradation.
- Scalability: to support many concurrent AI queries, add rate limiting and a queue or move to embeddings + retrieval primitives to limit input size.
- Accessibility: UI modals and quiz buttons should be keyboard-accessible and labeled; images should include alt text.
- Maintainability: keep content in clear module HTML files and quiz data JSON for simpler editing.

## Gap analysis & recommended roadmap

- Gaps:
  - No editor/authoring UI — instructors must edit files directly.
  - No server-side user accounts or durable progress storage.
  - No content tagging index for modules and concepts.
  - AI currently sends entire PDF inline; consider building text extraction + retrieval (embeddings) to reduce costs and improve grounding.

- Recommendations (priority):
  1. Add a small content API and admin UI to edit quizzes and map concepts to modules.
 2. Implement server-side progress storage (SQLite) and optional user accounts.
 3. Replace full‑PDF inline with an indexed retrieval layer (extract text, compute embeddings, use retrieval augmented generation) so AI answers cite precise passages.
 4. Add a central `content-index.json` mapping module → lessons → concepts for easier automation.

## Acceptance criteria
- Agent answers must cite a location or quote when asked and must be explicitly grounded to the textbook PDF.
- Quizzes must persist correctness to `localStorage` and modify the in-game character state as implemented.
- New module content must appear on `moduleN.html` and be reachable from `home.html`.

---
This specification is intended as a practical blueprint matching current implementation while reorganizing content and product structure around the six teaching themes. For next steps I can: create `content-index.json`, scaffold an admin UI, or convert PDF content into a searchable index — tell me which to work on next.

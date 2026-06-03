# Project Agent Guide — MLN111: Triết học trong đời sống

**Purpose:** onboarding document for AI agents and developers to understand, navigate, and extend this repository.

## Project overview
- Mission: provide an interactive, gamified learning platform for Marxist–Leninist philosophy (triết học Mác‑Lênin), combining static course materials, quizzes, games and an AI tutor that answers questions from the canonical textbook PDF.
- Philosophy source: content and pedagogy are driven by the full textbook in `assets/docs` (Triet), plus the six teaching themes in `assets/docs/Chude.txt` which define the learning modules and structure.

## System purpose and domain
- Audience: university students, instructors, self-learners of political philosophy.
- Value: guided reading, interactive exercises, instant AI-backed explanations, and an exploratory "worldview" game that helps students build and reflect on philosophical positions.

## High-level architecture
- Frontend: static HTML pages served from the repo root (e.g., `home.html`, `module1.html`), with interactive behavior in `js/` files.
- Backend: Express server `server.js` exposing `POST /api/ask-gemini` and static hosting for the site. The backend loads a PDF (textbook) from `assets/docs` and sends it as inline data to Google Generative AI (Gemini) for grounded answers.
- AI integration: `@google/generative-ai` called in `server.js`; frontend uses `js/ai-assistants.js` to call the API.
- Data store: no centralized DB — progress, history and small state live in browser `localStorage`. Content is static files (HTML/JS/JSON).

## Folder map (important files)
- `assets/docs/` — source documents and the textbook PDF used by the AI.
- `js/` — interactive modules: `ai-assistants.js`, `worldview-*.js`, `quiz-system.js`, `quiz-data.js`, `achievement-system.js`, game and UI code.
- `*.html` — pages for modules, quizzes, games and static content.
- `server.js` — Express server, Gemini integration, PDF loader, and API endpoints.
- `package.json` — dependency list and run scripts.

## Actors & roles
- Learner (student): consumes content, plays games, answers quizzes, asks the AI tutor.
- Instructor / Content editor: prepares new pages and quiz JSON; currently edits repository files directly.
- Developer / Maintainer: extends features, ensures AI keys and server run, manages deployments.
- AI Agent (automated): reads repository, answers user questions using the textbook PDF, suggests content improvements.

## Business domain model (conceptual)
- Entities: Module, Lesson (HTML page), Concept (atomic idea, used by games), QuizQuestion, Challenge, Achievement, UserProgress (in-browser), PDFResource.
- Relationships: Modules contain Lessons and Quizzes; Concepts are referenced by Lessons and Game Pieces; Quizzes map to Modules and update Achievements/Character state.

## Module map (reorganized per `Chude.txt` — 6 learning modules)
Each module is both a navigation unit and a logical grouping for content, quizzes, game challenges and assessments.

- Module 1 — Matter & Motion (Vật chất, Vận động, Không gian, Thời gian)
  - Purpose: ground students in materialist ontology and physical-philosophical concepts.
  - Files: `module1.html`, concept pages, matching quizzes and game pieces.

- Module 2 — Consciousness & Origins (Ý thức)
  - Purpose: origins, structure and role of consciousness in human activity.

- Module 3 — Quantity ⇄ Quality (Lượng–Chất)
  - Purpose: explain the law of quantity‑quality transformation and practical implications.

- Module 4 — Contradiction & Dialectics (Mâu thuẫn)
  - Purpose: binary/oppositional thinking, dialectical methods, game challenges that surface tensions.

- Module 5 — Production Relations & Enterprise Management (Quan hệ sản xuất)
  - Purpose: connect political economy concepts with enterprise-level management exercises.

- Module 6 — Base & Superstructure; Governance (Cơ sở hạ tầng & kiến trúc thượng tầng)
  - Purpose: structural analysis and application to law, state-building and Vietnamese context.

Implementation notes: maps in-code to `moduleN.html`, to `quiz-data.js` categories, and to `worldview` game pieces (conceptId categories).

## Coding and design rules (inferred)
- Static-first content: content is edited as HTML/JS files and deployed as static assets.
- Naming: pages use `moduleN.html`; JavaScript modules are purpose-named (e.g., `quiz-system.js`).
- State: lightweight client-side persistence via `localStorage` for history and progress.
- AI safety: the server mandates answering only from the attached PDF (see `server.js` prompt); agents must preserve that grounding and not hallucinate.

## AI Agent guidance — how agents should operate
1. Always prefer repository implementation over README claims. Trace logic through `js/` and `server.js` for runtime behavior.
2. When answering student queries, follow the existing pattern: backend converts PDF to base64 and the model is instructed to answer only from the PDF. Maintain that policy.
3. For adding new content: update the correct `moduleN.html`, add quiz entries to `js/quiz-data.js`, and register new game pieces in `js/worldview-templates.js` if needed.
4. For changes that require server-side work (new endpoints, user accounts, persistence), create a design proposal before implementing.

## Onboarding checklist for a new developer or agent
- Run: `npm install` then `npm start` (server runs on `http://localhost:3000/` and serves `home.html`).
- Set `GEMINI_API_KEY` and optionally `PDF_URL` in `.env` to use a hosted PDF.
- Inspect `js/ai-assistants.js` and `server.js` for the AI prompt and PDF handling.

## Where to extend
- Content authoring: add new module pages and update `quiz-data.js`.
- AI: improve grounding (indexing, embeddings) before relaxing the "only from PDF" rule.
- Persistence: add a backend DB (Postgres/SQLite) for cross-device progress and instructor-managed content.

---
This document is the primary onboarding reference for agents working on the repository. For implementation-level design, read `server.js`, `js/ai-assistants.js`, `js/quiz-system.js` and `assets/docs/Triet.txt`.

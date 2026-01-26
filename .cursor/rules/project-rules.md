# Project Rules

## Architecture Principles

### Frontend/Backend Separation
- **Strict separation**: Frontend and backend must be completely independent
- Frontend communicates with backend only through REST API
- No direct database access from frontend
- Backend serves only API endpoints, no HTML rendering

### Technology Stack

#### Frontend
- **Vanilla JavaScript (ES6+)** - Core JavaScript logic
- **HTMX** - Declarative HTML partials loading and dynamic content updates
- **HTML5** with partials structure (index.html + partials/)
- **CSS3** with modular structure (global.css + component files)
- **BEM methodology** for all HTML/CSS class naming

#### Backend
- **Node.js** runtime
- **Express.js** web framework
- **SQLite** database for data persistence

### File Structure Requirements

```
frontend/
├─ index.html              # Main entry point
├─ partials/               # HTML components
│  ├─ header.html
│  ├─ footer.html
│  └─ ...
├─ styles/
│  ├─ global.css           # CSS variables (:root)
│  ├─ main.css            # Main stylesheet
│  └─ components/         # Component styles
└─ scripts/
   ├─ api.js              # Backend communication
   ├─ products.js         # Business logic
   └─ ui.js               # DOM manipulation

backend/
├─ server.js              # Express entry point
├─ db.js                  # Database connection
├─ routes/
│  └─ products.js         # API endpoints
└─ database.sqlite        # SQLite database
```

## Development Principles

### Spec-Driven Development (SDD)
- All development must follow OpenSpec documents
- `openspec/proposal.md` defines architecture and technical approach
- `openspec/tasks.md` defines implementation tasks
- Changes to specifications must be documented in `openspec/changes/`

### Code Quality
- All code must be manually written (no AI-generated executable code)
- Code must follow coding standards defined in `coding-standards.md`
- Use patterns from `.cursor/skills/` directory

### Documentation
- Keep documentation up to date with code changes
- Document all API endpoints
- Maintain clear separation between planning (OpenSpec) and documentation (docs/)

## Restrictions

### Frontend
- **NO** external JavaScript frameworks (React, Vue, Angular, etc.)
- **NO** CSS frameworks (Bootstrap, Tailwind, etc.)
- **NO** build tools or bundlers (Webpack, Vite, etc.)
- **YES** to Vanilla JavaScript, HTML, and CSS only

### Backend
- Use Express.js for routing and middleware
- SQLite for database (no other databases)
- RESTful API design only

## Data Persistence

### Primary: SQLite Database
- All product data stored in SQLite
- Backend handles all database operations
- Frontend never directly accesses database

### Fallback: LocalStorage
- LocalStorage used when backend is unavailable
- Frontend detects backend availability
- Automatic fallback mechanism

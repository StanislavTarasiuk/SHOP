# Internet Shop (Course Project)

This project is a simple web application for managing a list of products in an internet shop.  
It was developed as a **course project** within **SoftServe Academy** during the module  
**"Fundamentals of Web Solutions Development using JavaScript / TypeScript"**.

The project is implemented using **Vanilla JavaScript, HTML, CSS**, with a simple **Node.js + Express backend** and **SQLite database** for advanced data storage.

---

## 🚀 Features

- Create new products
- Edit existing products
- Delete products
- Display a list of products
- Search products by name
- Sort products by selected parameters (e.g., name, price)
- Calculate the total value of all products
- Persist data locally (**LocalStorage**) and in a database (**SQLite**) for advanced functionality

---

## 🛠 Technology Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Backend:** Node.js, Express
- **Database:** SQLite
- **LocalStorage** as fallback for offline usage

No external frameworks or frontend libraries are used.

---

## 📂 Project Structure

```txt
internet-shop/
│
├─ frontend/                # UI and client logic
│   ├─ index.html          # Main entry point
│   ├─ partials/           # HTML components
│   │   ├─ header.html
│   │   ├─ footer.html
│   │   ├─ product-card.html
│   │   └─ product-form.html
│   ├─ styles/
│   │   ├─ global.css       # CSS variables (:root)
│   │   ├─ main.css         # Main stylesheet
│   │   └─ components/      # Component styles
│   │       ├─ header.css
│   │       ├─ footer.css
│   │       ├─ product-card.css
│   │       └─ product-form.css
│   └─ scripts/
│       ├─ api.js           # fetch requests to backend
│       ├─ products.js      # product CRUD logic
│       └─ ui.js            # DOM rendering
│
├─ backend/                 # Server and database
│   ├─ server.js            # Express server entry point
│   ├─ db.js                # SQLite connection
│   ├─ routes/
│   │   └─ products.js      # API endpoints
│   └─ database.sqlite      # database file
│
├─ openspec/                # Spec-driven development
│   ├─ proposal.md          # Technical proposal and architecture
│   ├─ tasks.md             # Detailed task breakdown
│   ├─ changes/             # Version history of specifications
│   └─ archive/              # Archived specifications
│
├─ docs/                    # Documentation and design
│   ├─ PRD.md               # Product Requirements Document
│   ├─ design-brief.md      # Design brief with CSS variables
│   ├─ pdr.md               # Project planning document
│   ├─ ux/                  # Wireframes
│   └─ ui/                  # Screenshots from Aura.build
│
├─ .cursor/                 # AI settings (Cursor)
│   ├─ rules/               # Project rules and standards
│   │   ├─ project-rules.md
│   │   ├─ coding-standards.md
│   │   └─ sdd-workflow.md
│   └─ skills/              # Implementation patterns
│       ├─ api-patterns.md
│       └─ frontend-patterns.md
│
├─ package.json
└─ README.md
```

---

## 🎨 UX & UI Design

• **UX wireframes** define the structure and user flow (stored in `docs/ux/`)
• **UI design** was generated using Aura.build and used only as visual reference (screenshots in `docs/ui/`)
• All HTML, CSS, and JavaScript were implemented manually based on these references

> UI screenshots are visual guides only; no Aura-generated code is used.

### Design System

The project uses a **modular CSS architecture** with:
- **CSS Variables**: All design tokens (colors, fonts, spacing) defined in `frontend/styles/global.css`
- **BEM Methodology**: All HTML/CSS classes follow BEM naming convention
- **Component-based CSS**: Each component has its own CSS file

See `docs/design-brief.md` for complete design specifications.

---

## 🔧 Advanced Functionality (Backend & Database)

• **Node.js** + **Express** server for persistent storage
• **SQLite** database for CRUD operations
• Frontend communicates with backend via **REST API**

### API Endpoints

| Method | Endpoint          | Description                |
| ------ | ----------------- | -------------------------- |
| `GET`   | `/api/products`     | Retrieve all products      |
| `POST`   | `/api/products`     | Create a new product       |
| `PUT`   | `/api/products/:id` | Update an existing product |
| `DELETE` | `/api/products/:id` | Delete a product           |

### Data Flow

1. User interacts with the UI (create, edit, delete)
2. Request sent to the backend server
3. Data stored or updated in SQLite
4. Updated product list returned to frontend

LocalStorage acts as a fallback for offline usage.

---

## 🧠 Development Approach

1. Requirements defined in PRD (`docs/PRD.md`)
2. UX wireframes created to design layout and user flow (`docs/ux/`)
3. Design brief prepared for UI guidance (`docs/design-brief.md`)
4. OpenSpec used for Spec-Driven Development (SDD):
   - `proposal.md` and `tasks.md` define implementation steps
   - Ensures structured development and clear separation of frontend/backend
5. All code manually implemented in frontend and backend

> AI tools were used only for planning, documentation, and design reference, not for generating **executable code**.

### Spec-Driven Development (SDD)

This project follows a **Spec-Driven Development** approach:
- Technical specifications in `openspec/proposal.md`
- Task breakdown in `openspec/tasks.md`
- Version history in `openspec/changes/`
- All implementation follows these specifications

### Code Standards

- **BEM Methodology**: All HTML/CSS classes use BEM naming
- **ES6+ JavaScript**: Modern JavaScript features (arrow functions, async/await, destructuring)
- **CSS Variables**: Centralized design tokens in `global.css`
- **Modular Structure**: Separation of concerns (API, business logic, UI)

See `.cursor/rules/` for detailed coding standards.

---

## ▶️ How to Run the Project

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)
- Modern web browser

### Installation

1. **Install dependencies**

```bash
npm install
```

2. **Start backend server**

```bash
node backend/server.js
```

The server will start on `http://localhost:3000`

3. **Open frontend**

Open `frontend/index.html` in a modern browser, or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js http-server (install globally: npm install -g http-server)
http-server frontend -p 8000
```

Then navigate to `http://localhost:8000`

> **Note**: Backend must be running for full functionality. Frontend will fallback to LocalStorage if backend is unavailable.

---

## 📚 Documentation

- **PRD**: `docs/PRD.md` - Product requirements and user stories
- **Design Brief**: `docs/design-brief.md` - Design system and CSS variables
- **Technical Proposal**: `openspec/proposal.md` - Architecture and API specification
- **Tasks**: `openspec/tasks.md` - Implementation task breakdown
- **Coding Standards**: `.cursor/rules/coding-standards.md` - Code style guide
- **Frontend Patterns**: `.cursor/skills/frontend-patterns.md` - Implementation patterns

---

## 👤 Author

Stanislav Tarasiuk (star.tarasyuk@gmail.com), student SoftServe Academy  
Course: *Full Stack JavaScript Developer*  
Module: *JavaScript/TypeScript Fundamentals*

---

## 📄 License

Educational use only

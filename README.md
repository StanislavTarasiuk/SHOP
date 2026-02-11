# Internet Shop (Course Project)

This project is a modern web application for an internet shop, developed as a **course project** within **SoftServe Academy** during the module **"Fundamentals of Web Solutions Development using JavaScript / TypeScript"**.

The project is implemented using **Vanilla JavaScript, HTML, CSS**, with **Supabase** as the backend for authentication and data storage.

---

## 🚀 Features

- **User Authentication:** Login and registration using Supabase Auth.
- **Product Catalog:** Browse products with filtering by size and color.
- **Search:** Real-time product search.
- **Shopping Cart:** Add products to cart, manage quantities, and persist data in LocalStorage.
- **Checkout:** Order summary and delivery form with server-side synchronization.
- **Profile:** Manage user profile and view order history.
- **Dynamic UI:** Using HTMX for partial page loading and dynamic content updates.

---

## 🛠 Technology Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6+), HTMX, jQuery.
- **Backend/Database:** Supabase (PostgreSQL, Auth).
- **Persistence:** LocalStorage for cart data.

---

## 📂 Project Structure

```txt
SHOP/
│
├─ frontend/                # UI and client logic
│   ├─ index.html          # Main entry point (Home)
│   ├─ products.html       # Product catalog
│   ├─ product.html        # Product detail page
│   ├─ cart.html           # Shopping cart
│   ├─ checkout.html       # Checkout page
│   ├─ auth.html           # Login/Register page
│   ├─ profile.html        # User profile page
│   ├─ js/                 # JavaScript modules
│   │   ├─ auth.js         # Authentication logic
│   │   ├─ cart.js         # Cart management
│   │   ├─ checkout.js     # Checkout process
│   │   ├─ home.js         # Home page logic
│   │   ├─ product-detail.js # Product detail logic
│   │   ├─ products.js     # Catalog logic
│   │   ├─ profile.js      # Profile management
│   │   └─ supabase-config.js # Supabase initialization
│   ├─ partials/           # HTML components (HTMX)
│   ├─ styles/             # CSS files (BEM methodology)
│   │   ├─ global.css      # Design tokens
│   │   └─ components/     # Component-specific styles
│   └─ assets/             # Images and icons
│
├─ docs/                    # Documentation and design
│   ├─ PRD.md               # Product Requirements Document
│   ├─ design-brief.md      # Design system and CSS variables
│   └─ pdr.md               # Project planning document
│
├─ openspec/                # Spec-driven development
│   ├─ proposal.md          # Technical proposal
│   └─ tasks.md             # Task breakdown
│
├─ .cursor/                 # AI settings (Cursor)
│   ├─ rules/               # Project rules and standards
│   └─ skills/              # Implementation patterns
│
└─ README.md
```

---

## 🎨 Design System

The project uses a **modular CSS architecture**:
- **CSS Variables**: All design tokens (colors, fonts, spacing) are defined in `frontend/styles/global.css`.
- **BEM Methodology**: All HTML/CSS classes follow the BEM naming convention.
- **Component-based CSS**: Each component has its own CSS file in `frontend/styles/components/`.

---

## 🧠 Development Approach

1. **Requirements**: Defined in `docs/PRD.md`.
2. **Design**: Design brief prepared in `docs/design-brief.md`.
3. **SDD**: Spec-Driven Development using `openspec/`.
4. **Implementation**: Manual implementation of all frontend and integration with Supabase.

---

## ▶️ How to Run the Project

### Prerequisites

- Modern web browser.
- Local web server (optional but recommended for HTMX).

### Setup

1. **Open the project**
   Open `frontend/index.html` in your browser.

2. **Using a local server (recommended)**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Or any other local server tool
   ```
   Then navigate to `http://localhost:8000/frontend/index.html`.

---

## 👤 Author

**Stanislav Tarasiuk**, student at SoftServe Academy.
Course: *Full Stack JavaScript Developer*
Module: *JavaScript/TypeScript Fundamentals*

---

## 📄 License

Educational use only.

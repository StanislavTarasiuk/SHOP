1. Структура проєкту

internet-shop/
│
├─ frontend/                # UI та логіка клієнта
│   ├─ index.html
│   ├─ styles/main.css
│   └─ scripts/
│       ├─ api.js           # fetch-запити до backend
│       ├─ products.js      # бізнес-логіка CRUD
│       └─ ui.js            # DOM-рендеринг
│
├─ backend/                 # Сервер та база
│   ├─ server.js            # Express entry point
│   ├─ db.js                # SQLite підключення
│   ├─ routes/products.js   # API endpoints
│   └─ database.sqlite      # база даних
│
├─ openspec/                # Spec-driven development
│   ├─ proposal.md          # технічні завдання
│   ├─ tasks.md
│   ├─ changes/             # версії специфікацій
│   └─ archive/
│
├─ docs/
│   ├─ PRD.md               # вимоги продукту
│   ├─ design-brief.md      # стиль, кольори, UX концепт
│   ├─ ux/                  # wireframes
│   └─ ui/                  # скріншоти UI (референс від Aura.build)
│
├─ .cursor/                 # AI налаштування
│   ├─ rules/
│   └─ skills/
│
├─ package.json
└─ README.md
2. Верхнерівневий опис папок

• frontend/ - UI + DOM + бізнес-логіка + API-клієнт
• backend/ - REST API + SQLite база + обробка CRUD
• openspec/ - Специфікації, таски, SDD
• docs/ - PRD, дизайн, UX wireframes, UI референс
• .cursor/ - Налаштування AI, якщо Cursor використовується для SDD

3. Advanced вимога (збереження даних у БД)

• Backend на Node.js + Express
• SQLite як база
• REST API (`GET`, POST, PUT, `DELETE`)
• Frontend взаємодіє через fetch()
• LocalStorage як fallback

4. Використання AI

• PRD, Design Brief → ChatGPT / Claude
• Wireframes → uxpilot.ai
• UI макети → Aura.build (тільки скріншоти в docs/ui/)
• Cursor AI + OpenSpec → планування SDD (не для генерації коду без твоєї участі)

5. README.md

• Вказує фронт/бекенд, стек, інструкції по запуску
• Окремо описує Advanced функціонал (backend + DB)
• Пояснює роль OpenSpec і AI як інструмент планування
README.md (Part 1)

# Internet Shop (Course Project)

This project is a simple web application for managing a list of products in an internet shop.  
It was developed as a **course project** within **SoftServe Academy** during the module  
**“Fundamentals of Web Solutions Development using JavaScript / TypeScript”**.

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
│   ├─ index.html
│   ├─ styles/main.css
│   └─ scripts/
│       ├─ api.js           # fetch requests to backend
│       ├─ products.js      # product CRUD logic
│       └─ ui.js            # DOM rendering
│
├─ backend/                 # Server and database
│   ├─ server.js            # Express server entry point
│   ├─ db.js                # SQLite connection
│   ├─ routes/products.js   # API endpoints
│   └─ database.sqlite      # database file
│
├─ openspec/                # Spec-driven development
│   ├─ proposal.md
│   ├─ tasks.md
│   ├─ changes/
│   └─ archive/
│
├─ docs/                    # Documentation and design
│   ├─ PRD.md
│   ├─ design-brief.md
│   ├─ ux/                  # wireframes
│   └─ ui/                  # screenshots from Aura.build
│
├─ .cursor/                 # AI settings (Cursor)
│   ├─ rules/
│   └─ skills/
│
├─ package.json
└─ README.md``
README.md (Part 2)

---

## 🎨 UX & UI Design

• **UX wireframes** define the structure and user flow (stored in `docs/ux/`)
• **UI design** was generated using Aura.build and used only as visual reference (screenshots in `docs/ui/`)
• All HTML, CSS, and JavaScript were implemented manually based on these references

> UI screenshots are visual guides only; no Aura-generated code is used.

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

## 🧠 Development Approach

1. Requirements defined in PRD
2. UX wireframes created to design layout and user flow
3. Design brief prepared for UI guidance
4. OpenSpec used for Spec-Driven Development (SDD):
   - `proposal.md` and `tasks.md` define implementation steps
   - Ensures structured development and clear separation of frontend/backend
5. All code manually implemented in frontend and backend

> AI tools were used only for planning, documentation, and design reference, not for generating **executable code**.

---

## ▶️ How to Run the Project

1. **Install dependencies**

```bash
npm install
2. Start backend server

node backend/server.js
3. Open frontend

Open frontend/index.html in a modern browser

> No additional setup required. Backend must be running for full functionality.

---

## 👤 Author

Stanislav Tarasiuk (star.tarasyuk@gmail.com), student SoftServe Academy
Course: *Full Stack JavaScript Developer*
Module: *JavaScript/TypeScript Fundamentals*

---

## 📄 License

Educational use only
``
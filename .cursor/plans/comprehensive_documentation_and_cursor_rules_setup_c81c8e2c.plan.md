---
name: Comprehensive Documentation and Cursor Rules Setup
overview: Створення повного набору документів та правил управління Cursor для проєкту Internet Shop, включаючи структуру OpenSpec, правила Cursor, технічну документацію та оновлення README.
todos:
  - id: create-cursor-structure
    content: Створити структуру директорій .cursor/rules/ та .cursor/skills/
    status: completed
  - id: create-cursor-rules
    content: "Створити файли правил Cursor: project-rules.md, coding-standards.md, sdd-workflow.md"
    status: completed
    dependencies:
      - create-cursor-structure
  - id: create-cursor-skills
    content: "Створити файли skills: api-patterns.md, frontend-patterns.md"
    status: completed
    dependencies:
      - create-cursor-structure
  - id: create-openspec-structure
    content: Створити структуру openspec/ з піддиректоріями changes/ та archive/
    status: completed
  - id: create-openspec-docs
    content: "Створити OpenSpec документи: proposal.md, tasks.md з повним контентом"
    status: completed
    dependencies:
      - create-openspec-structure
  - id: create-docs-structure
    content: Створити структуру docs/ux/ та docs/ui/ з README файлами
    status: completed
  - id: create-docs-content
    content: "Створити документацію: PRD.md, design-brief.md з детальним контентом"
    status: completed
    dependencies:
      - create-docs-structure
  - id: update-readme
    content: Оновити README.md з повним контентом з pdr.md
    status: completed
---

# Створення комплексного набору документів та правил Cursor

## Огляд

Створення повної структури документів та правил для управління проєктом Internet Shop згідно з вимогами в `docs/pdr.md`. Включає налаштування Cursor AI, OpenSpec документи, технічну документацію та структуру проєкту.

## Структура файлів для створення

### 1. Cursor Rules (.cursor/)

**`.cursor/rules/project-rules.md`** - Основні правила проєкту:

- Архітектура: чітке розділення frontend/backend
- Технологічний стек: Vanilla JS (ES6+), Node.js + Express, SQLite
- Заборона використання фреймворків на frontend
- Структура файлів та модульність
- Принципи Spec-Driven Development

**`.cursor/rules/coding-standards.md`** - Стандарти кодування:

- ES6+ синтаксис (arrow functions, destructuring, async/await)
- Іменування змінних та функцій (camelCase)
- **BEM методологія для HTML/CSS класів** (block__element--modifier)
- Коментарі та документація коду
- Обробка помилок та валідація
- Форматування коду

**`.cursor/rules/sdd-workflow.md`** - Workflow Spec-Driven Development:

- Процес роботи з OpenSpec документами
- Версіонування специфікацій
- Зв'язок між proposal.md, tasks.md та реалізацією
- Правила оновлення документації під час розробки

**`.cursor/skills/api-patterns.md`** - Патерни для REST API:

- Структура endpoints
- Обробка помилок
- Валідація даних
- Формати відповідей

**`.cursor/skills/frontend-patterns.md`** - Патерни для frontend:

- Модульна структура (api.js, products.js, ui.js)
- **HTML partials структура** (index.html з посиланнями на header, footer, тощо)
- **CSS архітектура**: global.css з CSS змінними для кольорів та шрифтів
- **BEM методологія**: правила іменування класів, структура блоків
- DOM маніпуляції
- Обробка подій
- Робота з LocalStorage як fallback

### 2. OpenSpec Documents (openspec/)

**`openspec/proposal.md`** - Технічна пропозиція:

- Архітектура системи
- Технологічний стек та обґрунтування
- Структура бази даних (SQLite схема)
- API специфікація (endpoints, request/response формати)
- **Frontend структура**: HTML partials (header, footer, main content), CSS модулі (global.css з змінними, компонентні файли)
- **BEM методологія**: структура класів та компонентів
- Frontend компоненти та їх взаємодія
- План реалізації по етапах

**`openspec/tasks.md`** - Детальний розбір завдань:

- Завдання для backend (server.js, db.js, routes/products.js)
- Завдання для frontend:
- **HTML структура**: index.html (основний файл), partials (header.html, footer.html, тощо)
- **CSS структура**: global.css (CSS змінні для кольорів та шрифтів), компонентні файли
- **BEM іменування**: правила та приклади для всіх компонентів
- scripts/ (api.js, products.js, ui.js)
- Інтеграція frontend-backend
- Тестування та валідація
- Checklist для кожного етапу

**`openspec/changes/`** - Версії специфікацій:

- Структура для версіонування змін
- Шаблон для запису змін

**`openspec/archive/`** - Архів специфікацій:

- Структура для архівування старих версій

### 3. Documentation (docs/)

**`docs/PRD.md`** - Product Requirements Document:

- Опис продукту та цілі
- Функціональні вимоги (CRUD операції, пошук, сортування, підрахунок)
- Нефункціональні вимоги (продуктивність, сумісність)
- Вимоги до UI/UX
- Advanced функціонал (backend + DB)

**`docs/design-brief.md`** - Дизайн-бриф:

- Стиль та кольорова схема (з відповідністю до CSS змінних у global.css)
- Типографіка (шрифти та їх використання, відповідність до CSS змінних)
- UX концепція та принципи
- Референси та інспірації
- Компоненти UI з BEM структурою
- **Специфікація CSS змінних**: повний список для global.css (кольори, шрифти, розміри, spacing)

**`docs/ux/README.md`** - Опис структури wireframes:

- Інструкції щодо розміщення wireframes
- Опис основних екранів

**`docs/ui/README.md`** - Опис структури UI референсів:

- Інструкції щодо розміщення скріншотів з Aura.build
- Опис призначення референсів

### 4. Project Configuration

**`README.md`** - Оновлення з повним контентом:

- Використати контент з `docs/pdr.md` (рядки 65-218)
- Додати структуру проєкту
- Інструкції з запуску
- Опис Advanced функціоналу

**`.cursorrules`** (опціонально) - Головний файл правил Cursor:

- Посилання на детальні правила в .cursor/rules/
- Ключові принципи проєкту

## Деталі реалізації

### Cursor Rules Structure

Правила будуть організовані за принципом від загального до конкретного:

1. **project-rules.md** - високорівневі принципи
2. **coding-standards.md** - технічні стандарти
3. **sdd-workflow.md** - процеси розробки
4. **skills/** - перевірені патерни та практики

### OpenSpec Documents Content

**proposal.md** містить:

- Діаграму архітектури (текстова або mermaid)
- Схему бази даних з таблицею products
- Повну специфікацію API з прикладами
- **Frontend структуру**: 
- HTML partials архітектура (index.html → partials/header.html, partials/footer.html)
- CSS структура (global.css з :root змінними, компонентні файли)
- BEM методологія та приклади іменування
- Опис frontend компонентів з BEM класами

**tasks.md** містить:

- Детальний breakdown по модулях
- Залежності між завданнями
- Критерії готовності для кожного завдання
- Порядок виконання

### Documentation Content

**PRD.md** базується на вимогах з pdr.md та розширює їх:

- Детальний опис кожної функції
- User stories
- Acceptance criteria

**design-brief.md** включає:

- Кольорову палітру
- Типографічну систему
- Компоненти UI (кнопки, форми, картки продуктів)
- Responsive design принципи

## Frontend Structure Details

### HTML Partials Architecture

```
frontend/
├─ index.html              # Основний файл з посиланнями на partials
└─ partials/               # HTML компоненти
   ├─ header.html
   ├─ footer.html
   ├─ product-card.html
   └─ product-form.html
```

- `index.html` містить основну структуру та підключає partials через JavaScript або серверну логіку
- Всі partials використовують BEM методологію для класів

### CSS Architecture

```
frontend/styles/
├─ global.css              # CSS змінні (:root) для кольорів, шрифтів, spacing
├─ main.css                # Основний файл стилів
├─ components/             # Компонентні стилі
│  ├─ header.css
│  ├─ footer.css
│  ├─ product-card.css
│  └─ product-form.css
└─ utilities.css           # Утилітарні класи (опціонально)
```

- `global.css` містить всі CSS змінні в `:root` для кольорів та шрифтів
- Компонентні файли використовують BEM класи та посилаються на змінні з global.css
- `main.css` імпортує global.css та компонентні файли

### BEM Naming Convention

- **Block**: `.product-card`, `.header`, `.footer`
- **Element**: `.product-card__title`, `.product-card__price`, `.header__logo`
- **Modifier**: `.product-card--featured`, `.header--sticky`, `.button--primary`

## Порядок створення

1. Створити структуру директорій (.cursor/, openspec/, docs/ux/, docs/ui/)
2. Створити Cursor rules файли (project-rules.md, coding-standards.md, sdd-workflow.md)
3. Створити Cursor skills файли (api-patterns.md, frontend-patterns.md) з деталями про HTML partials, CSS структуру та BEM
4. Створити OpenSpec документи (proposal.md, tasks.md) з описом frontend структури
5. Створити структуру changes/ та archive/
6. Створити документацію (PRD.md, design-brief.md з CSS змінними, README файли)
7. Оновити README.md з повним контентом та оновленою структурою проєкту

## Ключові принципи

- Всі документи англійською мовою (для технічної документації)
- Markdown форматування з чіткою структурою
- Посилання між документами для навігації
- Версіонування специфікацій через openspec/changes/
- Чітке розділення між плануванням (OpenSpec) та документацією (docs/)
- **HTML структура**: модульність через partials, основний index.html
- **CSS структура**: централізовані змінні в global.css, компонентні файли
- **BEM методологія**: обов'язкове використання для всіх HTML/CSS класів
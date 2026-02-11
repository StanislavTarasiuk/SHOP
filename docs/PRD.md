# Product Requirements Document (PRD)

## Product Overview

### Product Name
Internet Shop

### Product Description
A modern e-commerce web application that allows users to browse products, manage a shopping cart, and complete a checkout process. The application features user authentication, a dynamic product catalog with filtering, and server-side data persistence.

### Project Context
This project was developed as a **course project** within **SoftServe Academy** during the module **"Fundamentals of Web Solutions Development using JavaScript / TypeScript"**.

---

## Product Goals

1. Demonstrate proficiency in Vanilla JavaScript, HTML, and CSS.
2. Implement a complete e-commerce flow (Catalog -> Cart -> Checkout).
3. Integrate with a modern Backend-as-a-Service (Supabase).
4. Implement user authentication and personalized data storage.
5. Use modern frontend techniques (HTMX, BEM, CSS Variables).

---

## Functional Requirements

### FR1: User Authentication
- **Login/Register**: Users can create accounts and sign in using Supabase Auth.
- **Session Management**: Persistent login sessions.
- **Protected Routes**: Checkout and Profile pages require authentication.

### FR2: Product Catalog
- **Display**: View a list of all products with images, names, and prices.
- **Filtering**: Filter products by size and color.
- **Search**: Real-time search by product name.
- **Product Detail**: View detailed information for a specific product.

### FR3: Shopping Cart
- **Add to Cart**: Add products with selected sizes to the cart.
- **Quantity Management**: Increase, decrease, or remove items from the cart.
- **Persistence**: Cart data is saved in LocalStorage.
- **Header Integration**: Cart item count is updated in real-time across all pages.

### FR4: Checkout Process
- **Order Summary**: View items and total price (including shipping).
- **Delivery Form**: Collect shipping information (address, contact details).
- **Server Sync**: Synchronize cart data with Supabase `orders` and `order_items` tables.
- **Success Feedback**: Visual confirmation after successful order placement.

### FR5: User Profile
- **Information**: View user account details.
- **Order History**: View past orders (planned/implemented).

---

## Non-Functional Requirements

### NFR1: Technology Stack
- **Frontend**: Vanilla JavaScript (ES6+), HTML5, CSS3, jQuery, HTMX.
- **Backend**: Supabase (Auth, Database).
- **Architecture**: Modular JavaScript, BEM for CSS.

### NFR2: Performance
- Fast page transitions using HTMX partials.
- Optimized image loading.
- Efficient state management using LocalStorage and custom events.

### NFR3: Code Quality
- Clean, documented code with English comments.
- Consistent BEM naming for styles.
- Centralized design tokens in `global.css`.

---

## Data Schema (Supabase)

### `products` table
- `id` (UUID, primary key)
- `name` (text)
- `description` (text)
- `price` (numeric)
- `image_url` (text)
- `category` (text)
- `sizes` (text array)
- `colors` (text array)

### `orders` table
- `id` (UUID, primary key)
- `user_id` (UUID, foreign key)
- `status` (text: draft, paid, etc.)
- `total_price` (numeric)
- `first_name`, `last_name`, `email`, `phone`, `address`, `city`, `country`, `state`, `postal_code` (text)

### `order_items` table
- `id` (UUID, primary key)
- `order_id` (UUID, foreign key)
- `product_id` (UUID, foreign key)
- `quantity` (integer)
- `price` (numeric)
- `size` (text)
- `color` (text)

---

## Success Criteria

1. Users can successfully register and log in.
2. Products are correctly fetched and filtered in the catalog.
3. Cart functionality works across different pages.
4. Checkout successfully creates orders in the database.
5. Codebase is clean, optimized, and well-documented.

# Frontend Patterns

## HTML Partials Architecture

### Structure
```
frontend/
├─ index.html              # Main entry point
└─ partials/               # Reusable HTML components
   ├─ header.html
   ├─ footer.html
   ├─ product-card.html
   ├─ product-form.html
   └─ product-list.html
```

### Loading Partials Pattern

#### Method 1: JavaScript Fetch (Recommended)
```javascript
/**
 * Load HTML partial into a container
 * @param {string} partialPath - Path to partial file
 * @param {HTMLElement} container - Container element
 */
async function loadPartial(partialPath, container) {
  try {
    const response = await fetch(partialPath);
    const html = await response.text();
    container.innerHTML = html;
    
    // Re-initialize any scripts needed for the partial
    initializePartialScripts(container);
  } catch (error) {
    console.error(`Failed to load partial ${partialPath}:`, error);
  }
}

// Usage in index.html
document.addEventListener('DOMContentLoaded', async () => {
  const headerContainer = document.getElementById('header-container');
  const footerContainer = document.getElementById('footer-container');
  
  await Promise.all([
    loadPartial('partials/header.html', headerContainer),
    loadPartial('partials/footer.html', footerContainer)
  ]);
});
```

#### Method 2: Server-Side Includes (if using server)
If backend serves HTML, use server-side includes or template engine.

### index.html Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Internet Shop</title>
  <link rel="stylesheet" href="styles/main.css">
</head>
<body>
  <!-- Header partial -->
  <div id="header-container"></div>
  
  <!-- Main content -->
  <main class="main">
    <div id="product-list-container"></div>
  </main>
  
  <!-- Footer partial -->
  <div id="footer-container"></div>
  
  <script type="module" src="scripts/ui.js"></script>
</body>
</html>
```

## CSS Architecture

### File Structure
```
frontend/styles/
├─ global.css              # CSS variables and global styles
├─ main.css                # Main stylesheet (imports others)
├─ components/            # Component-specific styles
│  ├─ header.css
│  ├─ footer.css
│  ├─ product-card.css
│  ├─ product-form.css
│  └─ product-list.css
└─ utilities.css          # Utility classes (optional)
```

### global.css Pattern
```css
/* CSS Variables - Colors */
:root {
  /* Primary Colors */
  --color-primary: #007bff;
  --color-primary-dark: #0056b3;
  --color-primary-light: #66b3ff;
  
  /* Secondary Colors */
  --color-secondary: #6c757d;
  --color-secondary-dark: #545b62;
  --color-secondary-light: #adb5bd;
  
  /* Neutral Colors */
  --color-background: #ffffff;
  --color-surface: #f8f9fa;
  --color-text: #212529;
  --color-text-muted: #6c757d;
  --color-border: #dee2e6;
  
  /* Status Colors */
  --color-success: #28a745;
  --color-error: #dc3545;
  --color-warning: #ffc107;
  --color-info: #17a2b8;
  
  /* Typography */
  --font-family-base: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-family-heading: 'Inter', sans-serif;
  --font-size-base: 16px;
  --font-size-sm: 14px;
  --font-size-lg: 18px;
  --font-size-xl: 20px;
  --font-size-2xl: 24px;
  --font-size-3xl: 32px;
  
  /* Font Weights */
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  
  /* Spacing */
  --spacing-unit: 8px;
  --spacing-xs: calc(var(--spacing-unit) * 0.5);  /* 4px */
  --spacing-sm: var(--spacing-unit);                /* 8px */
  --spacing-md: calc(var(--spacing-unit) * 2);      /* 16px */
  --spacing-lg: calc(var(--spacing-unit) * 3);      /* 24px */
  --spacing-xl: calc(var(--spacing-unit) * 4);      /* 32px */
  --spacing-2xl: calc(var(--spacing-unit) * 6);     /* 48px */
  
  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-full: 9999px;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  
  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-base: 250ms ease;
  --transition-slow: 350ms ease;
}

/* Global Reset and Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-family-base);
  font-size: var(--font-size-base);
  color: var(--color-text);
  background-color: var(--color-background);
  line-height: 1.5;
}

/* Global Utility Classes */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}
```

### main.css Pattern
```css
/* Import global styles first */
@import url('./global.css');

/* Import component styles */
@import url('./components/header.css');
@import url('./components/footer.css');
@import url('./components/product-card.css');
@import url('./components/product-form.css');
@import url('./components/product-list.css');

/* Import utilities last */
@import url('./utilities.css');
```

### Component CSS Pattern (BEM)
```css
/* components/product-card.css */

/* Block */
.product-card {
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
  box-shadow: var(--shadow-sm);
  transition: box-shadow var(--transition-base);
}

.product-card:hover {
  box-shadow: var(--shadow-md);
}

/* Elements */
.product-card__header {
  margin-bottom: var(--spacing-md);
}

.product-card__title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
  margin-bottom: var(--spacing-sm);
}

.product-card__price {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
}

.product-card__description {
  color: var(--color-text-muted);
  font-size: var(--font-size-sm);
  margin-bottom: var(--spacing-md);
}

.product-card__actions {
  display: flex;
  gap: var(--spacing-sm);
}

/* Modifiers */
.product-card--featured {
  border-color: var(--color-primary);
  border-width: 2px;
}

.product-card--featured .product-card__title {
  color: var(--color-primary);
}
```

## BEM Methodology

### Naming Rules
1. **Block**: Independent, reusable component
   - `.product-card`, `.header`, `.button`

2. **Element**: Part of a block (cannot exist alone)
   - `.product-card__title`, `.product-card__price`
   - Always: `block__element`

3. **Modifier**: Variation of block or element
   - `.product-card--featured`, `.button--primary`
   - Always: `block--modifier` or `block__element--modifier`

### BEM Examples

```html
<!-- Block with elements -->
<div class="product-card">
  <div class="product-card__header">
    <h2 class="product-card__title">Product Name</h2>
    <span class="product-card__price">$99.99</span>
  </div>
  <p class="product-card__description">Description text</p>
  <div class="product-card__actions">
    <button class="button button--primary">Edit</button>
    <button class="button button--secondary">Delete</button>
  </div>
</div>

<!-- Block with modifier -->
<div class="product-card product-card--featured">
  <!-- Content -->
</div>

<!-- Element with modifier -->
<button class="button button--primary button--large">
  Submit
</button>
```

### BEM Best Practices
- ✅ Use BEM for all class names
- ✅ Keep blocks independent and reusable
- ✅ Don't nest blocks (create new block instead)
- ❌ Don't use element without block: `.__title`
- ❌ Don't nest modifiers: `--featured--large`
- ❌ Don't use generic names: `.card`, `.title`

## JavaScript Module Structure

### api.js - Backend Communication
```javascript
// Handles all API requests
// See api-patterns.md for details
```

### products.js - Business Logic
```javascript
/**
 * Product business logic module
 * Handles product operations, validation, state management
 */

let products = [];

/**
 * Initialize products from API or LocalStorage
 */
export async function initializeProducts() {
  // Implementation
}

/**
 * Add a new product
 */
export function addProduct(productData) {
  // Validation
  // Add to state
  // Return product object
}

/**
 * Update a product
 */
export function updateProduct(id, productData) {
  // Validation
  // Update in state
  // Return updated product
}

/**
 * Delete a product
 */
export function deleteProduct(id) {
  // Remove from state
}

/**
 * Search products
 */
export function searchProducts(query) {
  // Filter products by query
  // Return filtered array
}

/**
 * Sort products
 */
export function sortProducts(products, sortBy) {
  // Sort logic
  // Return sorted array
}

/**
 * Calculate total value
 */
export function calculateTotalValue(products) {
  // Sum all product prices
  // Return total
}
```

### ui.js - DOM Manipulation
```javascript
/**
 * UI rendering and DOM manipulation module
 * Handles all DOM updates and event listeners
 */

import { getProducts, createProduct, updateProduct, deleteProduct } from './api.js';
import * as productsLogic from './products.js';

/**
 * Render product list
 */
export function renderProductList(products) {
  const container = document.getElementById('product-list');
  container.innerHTML = products.map(product => renderProductCard(product)).join('');
  
  // Attach event listeners
  attachProductEventListeners();
}

/**
 * Render single product card
 */
function renderProductCard(product) {
  return `
    <div class="product-card" data-id="${product.id}">
      <div class="product-card__header">
        <h2 class="product-card__title">${escapeHtml(product.name)}</h2>
        <span class="product-card__price">$${product.price.toFixed(2)}</span>
      </div>
      <p class="product-card__description">${escapeHtml(product.description)}</p>
      <div class="product-card__actions">
        <button class="button button--primary" data-action="edit" data-id="${product.id}">Edit</button>
        <button class="button button--secondary" data-action="delete" data-id="${product.id}">Delete</button>
      </div>
    </div>
  `;
}

/**
 * Attach event listeners to product cards
 */
function attachProductEventListeners() {
  document.querySelectorAll('[data-action="edit"]').forEach(button => {
    button.addEventListener('click', handleEdit);
  });
  
  document.querySelectorAll('[data-action="delete"]').forEach(button => {
    button.addEventListener('click', handleDelete);
  });
}

/**
 * Escape HTML to prevent XSS
 */
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', async () => {
  await loadAndRenderProducts();
});
```

## Best Practices

1. **Separation of Concerns**: Keep API, business logic, and UI separate
2. **BEM Consistency**: Always use BEM for class names
3. **CSS Variables**: Use variables from global.css, never hardcode values
4. **Modular HTML**: Use partials for reusable components
5. **Error Handling**: Always handle errors in async operations
6. **XSS Prevention**: Escape user input when rendering HTML
7. **Performance**: Debounce search/filter inputs
8. **Accessibility**: Use semantic HTML and ARIA attributes where needed

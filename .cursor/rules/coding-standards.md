# Coding Standards

## JavaScript (ES6+)

### Syntax Requirements
- Use **ES6+ features**: arrow functions, destructuring, async/await, template literals
- Prefer `const` over `let`, avoid `var`
- Use arrow functions for callbacks: `arr.map(item => item.id)`
- Use destructuring: `const { name, price } = product;`
- Use template literals: `` `Product: ${name}` ``

### Naming Conventions
- **Variables and functions**: `camelCase`
  - Good: `getProductById`, `productList`, `isLoading`
  - Bad: `GetProductById`, `product_list`, `is_loading`
- **Constants**: `UPPER_SNAKE_CASE`
  - Good: `API_BASE_URL`, `MAX_PRODUCTS`
- **Private functions**: prefix with underscore (convention only)
  - Good: `_validateProduct()`, `_formatPrice()`

### Code Organization
- One function per file when possible
- Group related functions in modules
- Export functions explicitly
- Use meaningful function and variable names

### Error Handling
- Always handle errors in async operations
- Use try-catch for async/await
- Provide meaningful error messages
- Log errors appropriately

```javascript
// Good
try {
  const products = await fetchProducts();
  displayProducts(products);
} catch (error) {
  console.error('Failed to fetch products:', error);
  showErrorMessage('Unable to load products. Please try again.');
}

// Bad
const products = await fetchProducts();
displayProducts(products);
```

### Comments and Documentation
- Comment complex logic
- Use JSDoc for function documentation
- Explain "why" not "what" in comments

```javascript
/**
 * Fetches all products from the backend API
 * @returns {Promise<Array>} Array of product objects
 * @throws {Error} If API request fails
 */
async function fetchProducts() {
  // Implementation
}
```

## HTML/CSS Standards

### BEM Methodology (Mandatory)

**Block**: Independent component
```html
<div class="product-card">
  <!-- Block -->
</div>
```

**Element**: Part of a block
```html
<div class="product-card">
  <h2 class="product-card__title">Product Name</h2>
  <p class="product-card__price">$99.99</p>
</div>
```

**Modifier**: Variation of block or element
```html
<div class="product-card product-card--featured">
  <!-- Block with modifier -->
</div>

<button class="button button--primary">Submit</button>
```

### BEM Naming Rules
- Block name: single word or hyphenated (`.product-card`, `.header`)
- Element: block name + `__` + element name (`.product-card__title`)
- Modifier: block/element name + `--` + modifier name (`.product-card--featured`)
- **Never nest modifiers**: `.product-card--featured--large` ❌
- **Never use element without block**: `.__title` ❌

### HTML Structure
- Use semantic HTML5 elements
- Maintain proper indentation (2 spaces)
- Use meaningful class names following BEM
- Keep HTML partials modular and reusable

### CSS Organization
- Define all CSS variables in `global.css` using `:root`
- Use CSS variables throughout component files
- Group related styles together
- Use BEM classes exclusively (avoid generic class names)

```css
/* global.css */
:root {
  --color-primary: #007bff;
  --color-secondary: #6c757d;
  --font-family-base: 'Inter', sans-serif;
  --spacing-unit: 8px;
}

/* components/product-card.css */
.product-card {
  padding: var(--spacing-unit);
  font-family: var(--font-family-base);
}

.product-card__title {
  color: var(--color-primary);
}
```

## Code Formatting

### Indentation
- Use 2 spaces for indentation (no tabs)
- Consistent indentation throughout

### Line Length
- Maximum 100 characters per line
- Break long lines appropriately

### Spacing
- One blank line between functions
- One blank line between logical sections
- No trailing whitespace

### Quotes
- Use single quotes for JavaScript strings
- Use double quotes for HTML attributes

```javascript
// JavaScript
const message = 'Hello, world!';

// HTML
<div class="product-card" data-id="123">
```

## Validation

### Input Validation
- Validate all user inputs
- Sanitize data before sending to backend
- Validate API responses

### Type Checking
- Use explicit type checks where needed
- Validate data structures before use

```javascript
// Good
if (typeof product.price === 'number' && product.price > 0) {
  // Process product
}

// Bad
if (product.price) {
  // Process product (price could be 0 or negative)
}
```

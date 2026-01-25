# Implementation Tasks

## Task Status Legend

- ⬜ Pending
- 🔄 In Progress
- ✅ Completed
- ⏸️ Blocked

## Phase 1: Backend Setup

### Task 1.1: Initialize Node.js Project
**Status**: ⬜ Pending  
**Dependencies**: None

**Description**: Set up Node.js project with package.json and install dependencies.

**Acceptance Criteria**:
- [ ] `package.json` created with project metadata
- [ ] Dependencies installed: `express`, `sqlite3`
- [ ] `.gitignore` configured (node_modules, database.sqlite)
- [ ] Project structure created

**Files to Create**:
- `package.json`
- `.gitignore`

---

### Task 1.2: Set Up Express Server
**Status**: ⬜ Pending  
**Dependencies**: Task 1.1

**Description**: Create Express server with basic configuration.

**Acceptance Criteria**:
- [ ] `backend/server.js` created
- [ ] Express server listens on port 3000
- [ ] CORS middleware configured
- [ ] JSON body parser middleware configured
- [ ] Error handling middleware added
- [ ] Server starts without errors

**Files to Create**:
- `backend/server.js`

---

### Task 1.3: Configure SQLite Database
**Status**: ⬜ Pending  
**Dependencies**: Task 1.1

**Description**: Set up SQLite database connection and create products table.

**Acceptance Criteria**:
- [ ] `backend/db.js` created with database connection
- [ ] Products table created with correct schema
- [ ] Database file created at `backend/database.sqlite`
- [ ] Connection tested successfully

**Database Schema**:
```sql
CREATE TABLE products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  price REAL NOT NULL CHECK(price > 0),
  description TEXT,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

**Files to Create**:
- `backend/db.js`

---

### Task 1.4: Implement Product API Routes
**Status**: ⬜ Pending  
**Dependencies**: Task 1.2, Task 1.3

**Description**: Create REST API endpoints for product CRUD operations.

**Acceptance Criteria**:
- [ ] `backend/routes/products.js` created
- [ ] GET `/api/products` - retrieve all products
- [ ] POST `/api/products` - create new product
- [ ] PUT `/api/products/:id` - update product
- [ ] DELETE `/api/products/:id` - delete product
- [ ] Input validation implemented
- [ ] Error handling implemented
- [ ] All endpoints return correct JSON format
- [ ] All endpoints tested with Postman/curl

**Files to Create**:
- `backend/routes/products.js`

**API Endpoints**:
- `GET /api/products` → Returns all products
- `POST /api/products` → Creates product, returns created product
- `PUT /api/products/:id` → Updates product, returns updated product
- `DELETE /api/products/:id` → Deletes product, returns success message

---

## Phase 2: Frontend Structure

### Task 2.1: Create HTML Structure with Partials
**Status**: ✅ Completed  
**Dependencies**: None

**Description**: Create main index.html and HTML partials for reusable components.

**Acceptance Criteria**:
- [ ] `frontend/index.html` created with basic structure
- [ ] `frontend/partials/header.html` created
- [ ] `frontend/partials/footer.html` created
- [ ] `frontend/partials/product-card.html` created (template)
- [ ] `frontend/partials/product-form.html` created (template)
- [ ] All HTML uses semantic elements
- [ ] All HTML uses BEM class naming
- [ ] Container elements for partials in index.html

**Files to Create**:
- `frontend/index.html`
- `frontend/partials/header.html`
- `frontend/partials/footer.html`
- `frontend/partials/product-card.html`
- `frontend/partials/product-form.html`

**BEM Classes Required**:
- Header: `.header`, `.header__logo`, `.header__nav`
- Footer: `.footer`, `.footer__text`
- Product Card: `.product-card`, `.product-card__title`, `.product-card__price`, `.product-card__description`, `.product-card__actions`
- Product Form: `.product-form`, `.product-form__field`, `.product-form__label`, `.product-form__input`, `.product-form__button`

---

### Task 2.2: Set Up CSS Architecture
**Status**: ✅ Completed  
**Dependencies**: Task 2.1

**Description**: Create CSS file structure with global.css for variables and component files.

**Acceptance Criteria**:
- [ ] `frontend/styles/global.css` created with all CSS variables
- [ ] `frontend/styles/main.css` created (imports global.css and components)
- [ ] `frontend/styles/components/header.css` created
- [ ] `frontend/styles/components/footer.css` created
- [ ] `frontend/styles/components/product-card.css` created
- [ ] `frontend/styles/components/product-form.css` created
- [ ] All CSS variables defined in `:root` selector
- [ ] Component files use CSS variables (no hardcoded values)
- [ ] All styles follow BEM methodology

**Files to Create**:
- `frontend/styles/global.css`
- `frontend/styles/main.css`
- `frontend/styles/components/header.css`
- `frontend/styles/components/footer.css`
- `frontend/styles/components/product-card.css`
- `frontend/styles/components/product-form.css`

**CSS Variables Required** (in global.css):
- Colors: primary, secondary, background, surface, text, text-muted, border, success, error, warning, info
- Typography: font-family-base, font-family-heading, font-size-*, font-weight-*
- Spacing: spacing-unit, spacing-xs through spacing-2xl
- Border radius: radius-sm, radius-md, radius-lg, radius-full
- Shadows: shadow-sm, shadow-md, shadow-lg
- Transitions: transition-fast, transition-base, transition-slow

---

### Task 2.3: Implement Partial Loading Mechanism
**Status**: ✅ Completed  
**Dependencies**: Task 2.1

**Description**: Implement JavaScript function to load HTML partials dynamically.

**Acceptance Criteria**:
- [ ] Function to load partials using `fetch()` API
- [ ] Partials loaded into designated containers
- [ ] Error handling for failed partial loads
- [ ] Partials loaded on DOMContentLoaded event
- [ ] Header and footer partials load successfully

**Files to Modify**:
- `frontend/scripts/ui.js` (or create new loader.js)

**Implementation**:
```javascript
async function loadPartial(partialPath, container) {
  // Fetch partial HTML
  // Insert into container
  // Handle errors
}
```

---

## Phase 3: Frontend Functionality

### Task 3.1: Implement API Client (api.js)
**Status**: ⬜ Pending  
**Dependencies**: Task 1.4

**Description**: Create API client module for backend communication.

**Acceptance Criteria**:
- [ ] `frontend/scripts/api.js` created
- [ ] Generic `apiRequest()` function with error handling
- [ ] `getProducts()` function
- [ ] `createProduct(product)` function
- [ ] `updateProduct(id, product)` function
- [ ] `deleteProduct(id)` function
- [ ] All functions return promises
- [ ] Error handling implemented
- [ ] LocalStorage fallback detection implemented

**Files to Create**:
- `frontend/scripts/api.js`

**Functions Required**:
- `apiRequest(endpoint, options)` - Generic fetch wrapper
- `getProducts()` - GET /api/products
- `createProduct(product)` - POST /api/products
- `updateProduct(id, product)` - PUT /api/products/:id
- `deleteProduct(id)` - DELETE /api/products/:id
- `checkBackendAvailability()` - Check if backend is available

---

### Task 3.2: Implement Business Logic (products.js)
**Status**: ⬜ Pending  
**Dependencies**: Task 3.1

**Description**: Create business logic module for product operations.

**Acceptance Criteria**:
- [ ] `frontend/scripts/products.js` created
- [ ] Product state management
- [ ] `initializeProducts()` function
- [ ] `addProduct(productData)` function with validation
- [ ] `updateProduct(id, productData)` function with validation
- [ ] `deleteProduct(id)` function
- [ ] `searchProducts(query)` function
- [ ] `sortProducts(products, sortBy)` function
- [ ] `calculateTotalValue(products)` function
- [ ] Input validation for all operations

**Files to Create**:
- `frontend/scripts/products.js`

**Functions Required**:
- `initializeProducts()` - Load products from API or LocalStorage
- `addProduct(productData)` - Add product with validation
- `updateProduct(id, productData)` - Update product with validation
- `deleteProduct(id)` - Remove product
- `searchProducts(query)` - Filter products by name
- `sortProducts(products, sortBy)` - Sort by name or price
- `calculateTotalValue(products)` - Sum all product prices
- `validateProduct(product)` - Validate product data

---

### Task 3.3: Implement UI Rendering (ui.js)
**Status**: ⬜ Pending  
**Dependencies**: Task 2.1, Task 3.1, Task 3.2

**Description**: Create UI module for DOM manipulation and rendering.

**Acceptance Criteria**:
- [ ] `frontend/scripts/ui.js` created
- [ ] `renderProductList(products)` function
- [ ] `renderProductCard(product)` function
- [ ] `renderProductForm(product?)` function
- [ ] Event listeners for edit/delete buttons
- [ ] Event listeners for form submission
- [ ] Event listeners for search input
- [ ] Event listeners for sort select
- [ ] XSS prevention (HTML escaping)
- [ ] Loading states displayed
- [ ] Error messages displayed

**Files to Create**:
- `frontend/scripts/ui.js`

**Functions Required**:
- `renderProductList(products)` - Render all products
- `renderProductCard(product)` - Render single product card
- `renderProductForm(product?)` - Render product form (create/edit)
- `attachEventListeners()` - Attach all event listeners
- `handleCreateProduct()` - Handle form submission for create
- `handleEditProduct(id)` - Handle edit button click
- `handleUpdateProduct(id)` - Handle form submission for update
- `handleDeleteProduct(id)` - Handle delete button click
- `handleSearch(query)` - Handle search input
- `handleSort(sortBy)` - Handle sort select
- `escapeHtml(text)` - Escape HTML to prevent XSS
- `showLoading()` - Show loading indicator
- `hideLoading()` - Hide loading indicator
- `showError(message)` - Display error message
- `updateTotalValue(total)` - Update total value display

---

### Task 3.4: Implement LocalStorage Fallback
**Status**: ⬜ Pending  
**Dependencies**: Task 3.1, Task 3.2

**Description**: Implement LocalStorage as fallback when backend is unavailable.

**Acceptance Criteria**:
- [ ] Backend availability detection
- [ ] Automatic fallback to LocalStorage
- [ ] All CRUD operations work with LocalStorage
- [ ] Data syncs to LocalStorage when backend is available
- [ ] User notified when using LocalStorage mode

**Files to Modify**:
- `frontend/scripts/api.js`
- `frontend/scripts/products.js`

**Implementation**:
- Check backend availability on page load
- Store products in LocalStorage as backup
- Use LocalStorage when backend unavailable
- Show indicator when in fallback mode

---

## Phase 4: Integration & Testing

### Task 4.1: Connect Frontend to Backend
**Status**: ⬜ Pending  
**Dependencies**: Task 3.1, Task 3.2, Task 3.3

**Description**: Integrate all frontend modules and connect to backend API.

**Acceptance Criteria**:
- [ ] All modules imported correctly
- [ ] API client connects to backend
- [ ] Products load from backend on page load
- [ ] All CRUD operations work end-to-end
- [ ] Search functionality works
- [ ] Sort functionality works
- [ ] Total value calculation works

**Files to Modify**:
- `frontend/index.html` (script imports)
- `frontend/scripts/ui.js` (initialization)

---

### Task 4.2: Test All CRUD Operations
**Status**: ⬜ Pending  
**Dependencies**: Task 4.1

**Description**: Manually test all create, read, update, delete operations.

**Test Cases**:
- [ ] Create product with valid data
- [ ] Create product with invalid data (validation)
- [ ] Read all products
- [ ] Update product with valid data
- [ ] Update product with invalid data (validation)
- [ ] Delete product
- [ ] Delete non-existent product (error handling)

**Acceptance Criteria**:
- All operations work correctly
- Validation works on frontend and backend
- Error messages displayed appropriately
- UI updates correctly after operations

---

### Task 4.3: Test Search and Sort Functionality
**Status**: ⬜ Pending  
**Dependencies**: Task 4.1

**Description**: Test product search and sorting features.

**Test Cases**:
- [ ] Search by product name (partial match)
- [ ] Search with no results
- [ ] Sort by name (ascending/descending)
- [ ] Sort by price (ascending/descending)
- [ ] Search and sort combined

**Acceptance Criteria**:
- Search filters products correctly
- Sort orders products correctly
- UI updates immediately
- Empty states handled

---

### Task 4.4: Test Error Handling
**Status**: ⬜ Pending  
**Dependencies**: Task 4.1

**Description**: Test error handling in various scenarios.

**Test Cases**:
- [ ] Backend unavailable (LocalStorage fallback)
- [ ] Network error
- [ ] Invalid API response
- [ ] Validation errors
- [ ] 404 errors
- [ ] 500 errors

**Acceptance Criteria**:
- Errors handled gracefully
- User-friendly error messages
- LocalStorage fallback works
- Application doesn't crash

---

## Phase 5: Polish & Documentation

### Task 5.1: Code Review and Refactoring
**Status**: ⬜ Pending  
**Dependencies**: Task 4.1, Task 4.2, Task 4.3, Task 4.4

**Description**: Review code for quality and refactor as needed.

**Acceptance Criteria**:
- [ ] Code follows coding standards
- [ ] BEM naming consistent throughout
- [ ] CSS variables used (no hardcoded values)
- [ ] Functions are well-documented
- [ ] No console.log statements in production code
- [ ] Code is readable and maintainable

---

### Task 5.2: Update Documentation
**Status**: ⬜ Pending  
**Dependencies**: Task 5.1

**Description**: Ensure all documentation is up to date.

**Acceptance Criteria**:
- [ ] README.md updated with current structure
- [ ] OpenSpec documents reflect actual implementation
- [ ] Code comments are clear and helpful
- [ ] API documentation is accurate

---

### Task 5.3: Final Testing
**Status**: ⬜ Pending  
**Dependencies**: Task 5.1

**Description**: Comprehensive final testing of entire application.

**Test Checklist**:
- [ ] All features work as expected
- [ ] No console errors
- [ ] Responsive design works
- [ ] Cross-browser compatibility (Chrome, Firefox, Safari)
- [ ] Performance is acceptable
- [ ] Code quality is good

---

## Notes

- Tasks should be completed in order, respecting dependencies
- Mark tasks as "In Progress" when starting work
- Mark tasks as "Completed" when all acceptance criteria are met
- Update this document as tasks progress
- Document any deviations or issues in `openspec/changes/`

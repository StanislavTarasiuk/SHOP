# Product Requirements Document (PRD)

## Product Overview

### Product Name
Internet Shop

### Product Description
A simple web application for managing a list of products in an internet shop. The application allows users to create, read, update, and delete products, as well as search, sort, and calculate the total value of all products.

### Project Context
This project was developed as a **course project** within **SoftServe Academy** during the module **"Fundamentals of Web Solutions Development using JavaScript / TypeScript"**.

### Target Audience
- Course instructors and evaluators
- Students learning web development fundamentals
- Potential users interested in a simple product management system

## Product Goals

1. Demonstrate proficiency in Vanilla JavaScript, HTML, and CSS
2. Implement a complete CRUD (Create, Read, Update, Delete) application
3. Show understanding of client-server architecture
4. Demonstrate database integration with SQLite
5. Implement advanced features (search, sort, calculations)

## Functional Requirements

### FR1: Product Management (CRUD Operations)

#### FR1.1: Create Product
**Priority**: High  
**Description**: Users can create new products with name, price, and optional description.

**User Story**: As a user, I want to add a new product to the shop so that I can manage my inventory.

**Acceptance Criteria**:
- [ ] Form available to create new product
- [ ] Form includes fields: name (required), price (required), description (optional)
- [ ] Form validates input (name not empty, price is positive number)
- [ ] Product is saved to database (SQLite) and LocalStorage
- [ ] Product list updates immediately after creation
- [ ] Success message displayed after successful creation
- [ ] Error message displayed if creation fails

#### FR1.2: Read Products
**Priority**: High  
**Description**: Users can view a list of all products.

**User Story**: As a user, I want to see all products in the shop so that I can view my inventory.

**Acceptance Criteria**:
- [ ] Product list displays all products on page load
- [ ] Each product displays: name, price, description
- [ ] Products are displayed in cards or list format
- [ ] Products load from database (SQLite) or LocalStorage fallback
- [ ] Loading indicator shown while fetching products
- [ ] Empty state shown when no products exist

#### FR1.3: Update Product
**Priority**: High  
**Description**: Users can edit existing products.

**User Story**: As a user, I want to edit product information so that I can update my inventory.

**Acceptance Criteria**:
- [ ] Edit button available for each product
- [ ] Clicking edit opens form with pre-filled product data
- [ ] Form validates input (same as create)
- [ ] Product is updated in database and LocalStorage
- [ ] Product list updates immediately after update
- [ ] Success message displayed after successful update
- [ ] Error message displayed if update fails

#### FR1.4: Delete Product
**Priority**: High  
**Description**: Users can delete products from the shop.

**User Story**: As a user, I want to delete products so that I can remove items from my inventory.

**Acceptance Criteria**:
- [ ] Delete button available for each product
- [ ] Confirmation dialog before deletion (optional but recommended)
- [ ] Product is removed from database and LocalStorage
- [ ] Product list updates immediately after deletion
- [ ] Success message displayed after successful deletion
- [ ] Error message displayed if deletion fails

### FR2: Product Search

**Priority**: Medium  
**Description**: Users can search products by name.

**User Story**: As a user, I want to search products by name so that I can quickly find specific items.

**Acceptance Criteria**:
- [ ] Search input field available
- [ ] Search filters products in real-time as user types
- [ ] Search is case-insensitive
- [ ] Search matches partial product names
- [ ] Empty search shows all products
- [ ] "No results" message shown when no products match
- [ ] Search is debounced to reduce API calls

### FR3: Product Sorting

**Priority**: Medium  
**Description**: Users can sort products by different parameters.

**User Story**: As a user, I want to sort products so that I can organize my inventory view.

**Acceptance Criteria**:
- [ ] Sort dropdown/select available
- [ ] Sort options: by name (A-Z, Z-A), by price (low-high, high-low)
- [ ] Products reorder immediately when sort option changes
- [ ] Current sort option is visually indicated
- [ ] Sort works with search (filtered products are sorted)

### FR4: Total Value Calculation

**Priority**: Medium  
**Description**: System calculates and displays the total value of all products.

**User Story**: As a user, I want to see the total value of all products so that I can track inventory value.

**Acceptance Criteria**:
- [ ] Total value displayed prominently
- [ ] Total value is sum of all product prices
- [ ] Total value updates when products are added, updated, or deleted
- [ ] Total value updates when products are filtered (shows filtered total)
- [ ] Total value is formatted as currency (e.g., $1,234.56)

### FR5: Data Persistence

**Priority**: High  
**Description**: Product data persists across sessions.

**User Story**: As a user, I want my product data to be saved so that I don't lose my inventory.

**Acceptance Criteria**:
- [ ] Products saved to SQLite database (primary)
- [ ] Products saved to LocalStorage (fallback)
- [ ] Data persists after page refresh
- [ ] Data persists after browser restart
- [ ] LocalStorage used when backend unavailable
- [ ] Data syncs when backend becomes available

## Non-Functional Requirements

### NFR1: Technology Stack
- **Frontend**: Vanilla JavaScript (ES6+), HTML5, CSS3
- **Backend**: Node.js, Express.js
- **Database**: SQLite
- **No frameworks**: No external JavaScript or CSS frameworks

### NFR2: Browser Compatibility
- Application works in modern browsers (Chrome, Firefox, Safari, Edge)
- Supports ES6+ features
- Responsive design for desktop and tablet

### NFR3: Performance
- Page load time < 2 seconds
- API response time < 500ms
- Search results update within 300ms
- Smooth UI interactions (no lag)

### NFR4: Code Quality
- Code follows coding standards
- BEM methodology for CSS
- Modular code structure
- Error handling throughout
- No console errors in production

### NFR5: User Experience
- Intuitive interface
- Clear error messages
- Loading indicators for async operations
- Responsive feedback for user actions

## Advanced Functionality

### Advanced FR1: Backend API
- RESTful API with Express.js
- SQLite database for persistent storage
- Proper error handling and validation
- CORS configuration for frontend access

### Advanced FR2: LocalStorage Fallback
- Automatic detection of backend availability
- Seamless fallback to LocalStorage
- Data synchronization when backend available
- User notification of fallback mode

## User Stories Summary

1. **As a user**, I want to create products so that I can add items to my shop.
2. **As a user**, I want to view all products so that I can see my inventory.
3. **As a user**, I want to edit products so that I can update product information.
4. **As a user**, I want to delete products so that I can remove items from my shop.
5. **As a user**, I want to search products so that I can find specific items quickly.
6. **As a user**, I want to sort products so that I can organize my view.
7. **As a user**, I want to see total value so that I can track inventory worth.
8. **As a user**, I want data to persist so that I don't lose my inventory.

## Out of Scope

The following features are explicitly **not** included:
- User authentication
- Multiple shops/users
- Product categories
- Product images
- Shopping cart functionality
- Payment processing
- Order management
- Admin panel
- Product reviews/ratings

## Success Criteria

The project is considered successful when:
1. All functional requirements are implemented
2. All CRUD operations work correctly
3. Search and sort functionality work
4. Total value calculation is accurate
5. Data persists in database and LocalStorage
6. Code follows all coding standards
7. Application is fully functional and tested
8. Documentation is complete

## Dependencies

- Node.js installed
- npm package manager
- Modern web browser
- Text editor/IDE

## Constraints

- No external JavaScript frameworks
- No external CSS frameworks
- Vanilla JavaScript only
- Manual code implementation (no AI-generated executable code)
- SQLite database only (no other databases)

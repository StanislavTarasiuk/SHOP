# API Patterns

## REST API Structure

### Base URL
- All API endpoints prefixed with `/api`
- Base URL: `http://localhost:3000/api` (development)
- Use environment variable for production

### Endpoint Conventions
- Use plural nouns for resources: `/api/products`
- Use HTTP methods appropriately:
  - `GET` for retrieving data
  - `POST` for creating new resources
  - `PUT` for updating existing resources
  - `DELETE` for removing resources

## API Endpoints

### Products API

#### GET /api/products
Retrieve all products.

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Product Name",
      "price": 99.99,
      "description": "Product description",
      "createdAt": "2024-01-15T10:00:00.000Z",
      "updatedAt": "2024-01-15T10:00:00.000Z"
    }
  ]
}
```

**Error Response:**
```json
{
  "success": false,
  "error": "Error message"
}
```

#### POST /api/products
Create a new product.

**Request Body:**
```json
{
  "name": "Product Name",
  "price": 99.99,
  "description": "Product description"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Product Name",
    "price": 99.99,
    "description": "Product description",
    "createdAt": "2024-01-15T10:00:00.000Z",
    "updatedAt": "2024-01-15T10:00:00.000Z"
  }
}
```

#### PUT /api/products/:id
Update an existing product.

**Request Body:**
```json
{
  "name": "Updated Product Name",
  "price": 149.99,
  "description": "Updated description"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Updated Product Name",
    "price": 149.99,
    "description": "Updated description",
    "createdAt": "2024-01-15T10:00:00.000Z",
    "updatedAt": "2024-01-15T11:00:00.000Z"
  }
}
```

#### DELETE /api/products/:id
Delete a product.

**Response:**
```json
{
  "success": true,
  "message": "Product deleted successfully"
}
```

## Error Handling

### HTTP Status Codes
- `200 OK`: Successful GET, PUT, DELETE
- `201 Created`: Successful POST
- `400 Bad Request`: Invalid request data
- `404 Not Found`: Resource not found
- `500 Internal Server Error`: Server error

### Error Response Format
```json
{
  "success": false,
  "error": "Error message",
  "details": "Optional detailed error information"
}
```

### Validation Errors
```json
{
  "success": false,
  "error": "Validation failed",
  "errors": [
    {
      "field": "name",
      "message": "Name is required"
    },
    {
      "field": "price",
      "message": "Price must be a positive number"
    }
  ]
}
```

## Frontend API Client Pattern

### API Client Structure (api.js)

```javascript
const API_BASE_URL = 'http://localhost:3000/api';

/**
 * Generic fetch wrapper with error handling
 * @param {string} endpoint - API endpoint
 * @param {object} options - Fetch options
 * @returns {Promise<object>} Response data
 */
async function apiRequest(endpoint, options = {}) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.error || 'Request failed');
    }

    return data;
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
}

/**
 * Get all products
 * @returns {Promise<Array>} Array of products
 */
export async function getProducts() {
  const response = await apiRequest('/products');
  return response.data;
}

/**
 * Create a new product
 * @param {object} product - Product data
 * @returns {Promise<object>} Created product
 */
export async function createProduct(product) {
  const response = await apiRequest('/products', {
    method: 'POST',
    body: JSON.stringify(product)
  });
  return response.data;
}

/**
 * Update a product
 * @param {number} id - Product ID
 * @param {object} product - Updated product data
 * @returns {Promise<object>} Updated product
 */
export async function updateProduct(id, product) {
  const response = await apiRequest(`/products/${id}`, {
    method: 'PUT',
    body: JSON.stringify(product)
  });
  return response.data;
}

/**
 * Delete a product
 * @param {number} id - Product ID
 * @returns {Promise<void>}
 */
export async function deleteProduct(id) {
  await apiRequest(`/products/${id}`, {
    method: 'DELETE'
  });
}
```

## Data Validation

### Frontend Validation
- Validate before sending to API
- Provide immediate user feedback
- Check required fields, data types, ranges

```javascript
function validateProduct(product) {
  const errors = [];

  if (!product.name || product.name.trim().length === 0) {
    errors.push({ field: 'name', message: 'Name is required' });
  }

  if (typeof product.price !== 'number' || product.price <= 0) {
    errors.push({ field: 'price', message: 'Price must be a positive number' });
  }

  return errors;
}
```

### Backend Validation
- Always validate on backend (never trust frontend)
- Return clear validation errors
- Sanitize input data

## LocalStorage Fallback Pattern

### Detection and Fallback

```javascript
let useBackend = true;

/**
 * Check if backend is available
 */
async function checkBackendAvailability() {
  try {
    await fetch(`${API_BASE_URL}/products`, { method: 'HEAD' });
    useBackend = true;
    return true;
  } catch (error) {
    useBackend = false;
    return false;
  }
}

/**
 * Get products with fallback to LocalStorage
 */
async function getProductsWithFallback() {
  if (useBackend) {
    try {
      const products = await getProducts();
      // Sync to LocalStorage as backup
      localStorage.setItem('products', JSON.stringify(products));
      return products;
    } catch (error) {
      // Fallback to LocalStorage
      useBackend = false;
    }
  }

  // Use LocalStorage
  const stored = localStorage.getItem('products');
  return stored ? JSON.parse(stored) : [];
}
```

## Best Practices

1. **Consistent Response Format**: Always use `{ success, data, error }` format
2. **Error Handling**: Always handle errors gracefully
3. **Loading States**: Show loading indicators during API calls
4. **Retry Logic**: Implement retry for failed requests when appropriate
5. **Caching**: Cache responses when data doesn't change frequently
6. **Request Debouncing**: Debounce search/filter requests to reduce API calls

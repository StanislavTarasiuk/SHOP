/**
 * Cart module for managing shopping bag functionality.
 * Uses localStorage for persistence.
 */

const Cart = {
    STORAGE_KEY: 'shopping_cart',
    SHIPPING_COST: 10,

    /**
     * Get all items from the cart.
     * @returns {Array} Array of cart items.
     */
    getItems() {
        const stored = localStorage.getItem(this.STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
    },

    /**
     * Save items to localStorage.
     * @param {Array} items 
     */
    saveItems(items) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(items));
        // Trigger a custom event so other components can react to cart changes
        window.dispatchEvent(new CustomEvent('cart-updated', { detail: { items } }));
    },

    /**
     * Add a product to the cart.
     * @param {Object} product Product data (id, name, price, image_url, size)
     */
    addItem(product) {
        const items = this.getItems();
        // Check if item with same ID and size already exists
        const existingItem = items.find(item => 
            item.id === product.id && item.size === product.size
        );

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            items.push({
                ...product,
                quantity: 1
            });
        }

        this.saveItems(items);
    },

    /**
     * Remove an item from the cart.
     * @param {string} id Product ID
     * @param {string} size Product size
     */
    removeItem(id, size) {
        let items = this.getItems();
        items = items.filter(item => !(item.id === id && item.size === size));
        this.saveItems(items);
        this.render();
    },

    /**
     * Update item quantity.
     * @param {string} id 
     * @param {string} size 
     * @param {number} delta Change in quantity (+1 or -1)
     */
    updateQuantity(id, size, delta) {
        const items = this.getItems();
        const item = items.find(item => item.id === id && item.size === size);
        
        if (item) {
            item.quantity += delta;
            if (item.quantity <= 0) {
                this.removeItem(id, size);
                return;
            }
            this.saveItems(items);
            this.render();
        }
    },

    /**
     * Calculate cart totals.
     * @returns {Object} { subtotal, shipping, total }
     */
    calculateTotals() {
        const items = this.getItems();
        const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const shipping = items.length > 0 ? this.SHIPPING_COST : 0;
        const total = subtotal + shipping;

        return { subtotal, shipping, total };
    },

    /**
     * Render the cart items and summary.
     */
    render() {
        const items = this.getItems();
        const $itemsContainer = $('.cart__items');
        const $layout = $('.cart__layout');
        const $emptyMessage = $('#cart-empty-message');

        // Create empty message if it doesn't exist
        if ($emptyMessage.length === 0 && $itemsContainer.length > 0) {
            $('<div id="cart-empty-message" class="cart__empty" style="display:none; text-align:center; padding: 40px 0;">' +
              '<h2>Your cart is empty</h2>' +
              '<a href="products.html" class="button button--ghost" style="margin-top: 20px; display: inline-block;">Continue Shopping</a>' +
              '</div>').insertBefore($layout);
        }

        if (items.length === 0) {
            $('.cart__layout').hide();
            $('#cart-empty-message').show();
            return;
        }

        $('.cart__layout').show();
        $('#cart-empty-message').hide();

        if ($itemsContainer.length === 0) return;

        $itemsContainer.empty();

        items.forEach(item => {
            const itemHTML = `
                <article class="cart-item" data-id="${item.id}" data-size="${item.size}">
                    <div class="cart-item__image-container">
                        <div class="cart-item__image">
                            <img src="${item.image_url}" alt="${item.name}" />
                            <button class="cart-item__wishlist" type="button">
                                <img src="assets/icons/heart_icon.jpg" alt="Add to favorites" style="width: 16px; height: 16px; opacity: 0.5;">
                            </button>
                        </div>
                        <div class="cart-item__controls">
                            <button class="cart-item__remove" type="button" aria-label="Remove item" style="position: static; margin-bottom: 5px;"></button>
                            <div class="cart-item__size">${item.size || 'L'}</div>
                            <div class="cart-item__quantity">
                                <button class="cart-item__qty-button qty-plus" type="button">+</button>
                                <span>${item.quantity}</span>
                                <button class="cart-item__qty-button qty-minus" type="button">-</button>
                            </div>
                            <button class="cart-item__refresh" type="button" style="background:none; border:none; cursor:pointer; opacity:0.4;">
                                <span style="font-size: 14px;">↻</span>
                            </button>
                        </div>
                    </div>
                    <div class="cart-item__meta">
                        <div class="cart-item__label">${item.category || 'T-Shirt'}</div>
                        <div class="cart-item__name">${item.name}</div>
                        <div class="cart-item__price">$ ${item.price}</div>
                    </div>
                </article>
            `;
            $itemsContainer.append(itemHTML);
        });

        // Update Summary
        const totals = this.calculateTotals();
        $('.order-summary__row:contains("Subtotal") span:last-child').text(`$${totals.subtotal}`);
        $('.order-summary__row:contains("Shipping") span:last-child').text(`$${totals.shipping}`);
        $('.order-summary__total span:last-child').text(`$${totals.total}`);
    },

    /**
     * Update cart count in the header.
     */
    updateCartCount() {
        const items = this.getItems();
        const count = items.reduce((sum, item) => sum + item.quantity, 0);
        const $cartIcons = $('.header__icon--cart');
        
        $cartIcons.each(function() {
            let $badge = $(this).find('.cart-badge');
            if ($badge.length === 0) {
                $badge = $('<span class="cart-badge"></span>').css({
                    'position': 'absolute',
                    'top': '-5px',
                    'right': '-5px',
                    'background': 'black',
                    'color': 'white',
                    'border-radius': '50%',
                    'width': '18px',
                    'height': '18px',
                    'font-size': '10px',
                    'display': 'flex',
                    'align-items': 'center',
                    'justify-content': 'center',
                    'font-family': 'sans-serif'
                });
                $(this).css('position', 'relative').append($badge);
            }
            
            if (count > 0) {
                $badge.text(count).show();
            } else {
                $badge.hide();
            }
        });
    },

    /**
     * Initialize cart page logic and event delegation.
     */
    init() {
        console.log('Cart module initializing...');
        
        // Update count on all pages
        this.updateCartCount();

        // Listen for internal cart updates
        window.addEventListener('cart-updated', () => {
            this.updateCartCount();
        });

        // Handle cart icon clicks to navigate to cart page
        $(document).on('click', '.header__icon--cart', function(e) {
            if (!$(e.target).closest('.cart-badge').length) {
                window.location.href = 'cart.html';
            }
        });

        if ($('body').data('page') === 'cart') {
            console.log('Cart page detected, rendering items...');
            this.render();

            // Event Delegation for controls - using document to ensure it works even if container is empty initially
            $(document).on('click', '.qty-plus', (e) => {
                const $item = $(e.currentTarget).closest('.cart-item');
                const id = $item.attr('data-id');
                const size = $item.attr('data-size');
                this.updateQuantity(id, size, 1);
            });

            $(document).on('click', '.qty-minus', (e) => {
                const $item = $(e.currentTarget).closest('.cart-item');
                const id = $item.attr('data-id');
                const size = $item.attr('data-size');
                this.updateQuantity(id, size, -1);
            });

            $(document).on('click', '.cart-item__remove', (e) => {
                const $item = $(e.currentTarget).closest('.cart-item');
                const id = $item.attr('data-id');
                const size = $item.attr('data-size');
                this.removeItem(id, size);
            });
        }
    }
};

// Initialize when document is ready
$(document).ready(function() {
    Cart.init();
});

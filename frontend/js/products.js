/**
 * Products module for fetching and rendering products from Supabase.
 */

const Products = {
    allProducts: [], // Store all products for local filtering
    selectedSizes: [], // Store multiple selected sizes
    selectedColors: [], // Store multiple selected colors
    searchQuery: '', // Store search query for filtering

    /**
     * Fetch all products from Supabase ordered by created_at DESC.
     */
    async fetchProducts() {
        try {
            const { data, error } = await supabaseClient
                .from('products')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            this.allProducts = data; // Cache products
            return { data, error: null };
        } catch (error) {
            console.error('Error fetching products:', error.message);
            return { data: [], error };
        }
    },

    /**
     * Toggle size selection and re-render.
     * @param {string} size 
     */
    toggleSize(size) {
        const index = this.selectedSizes.indexOf(size);
        if (index > -1) {
            this.selectedSizes.splice(index, 1);
        } else {
            this.selectedSizes.push(size);
        }
        this.applyFilters();
    },

    /**
     * Toggle color selection and re-render.
     * @param {string} color 
     */
    toggleColor(color) {
        const index = this.selectedColors.indexOf(color);
        if (index > -1) {
            this.selectedColors.splice(index, 1);
        } else {
            this.selectedColors.push(color);
        }
        this.applyFilters();
    },

    /**
     * Apply all active filters and re-render.
     */
    applyFilters() {
        // Update Size UI
        $('.filters__size').each(function() {
            const btnSize = $(this).text().trim();
            $(this).toggleClass('filters__size--active', Products.selectedSizes.includes(btnSize));
        });

        // Update Color UI
        $('.filters__color-btn').each(function() {
            const btnColor = $(this).data('color');
            $(this).toggleClass('filters__color-btn--active', Products.selectedColors.includes(btnColor));
        });

        let filtered = this.allProducts;

        // Filter by Search Query (3+ characters, case-insensitive, partial match)
        if (this.searchQuery.length >= 3) {
            const query = this.searchQuery.toLowerCase();
            filtered = filtered.filter(p => 
                p.name && p.name.toLowerCase().includes(query)
            );
        }

        // Filter by Sizes (OR logic within sizes)
        if (this.selectedSizes.length > 0) {
            filtered = filtered.filter(p => 
                p.sizes && p.sizes.some(s => this.selectedSizes.includes(s))
            );
        }

        // Filter by Colors (OR logic within colors)
        if (this.selectedColors.length > 0) {
            filtered = filtered.filter(p => 
                p.colors && p.colors.some(c => this.selectedColors.includes(c))
            );
        }

        this.renderProducts(filtered);
    },

    /**
     * Render product cards into the container.
     * @param {Array} products 
     */
    renderProducts(products) {
        const $container = $('.products-grid');
        $container.empty();

        if (products.length === 0) {
            $container.append('<p class="products-empty">No products found.</p>');
            return;
        }

        products.forEach(product => {
            const productHTML = `
                <article class="product-card" style="cursor: pointer;">
                    <div class="product-card__image">
                        <img src="${product.image_url}" alt="${product.name}" />
                        <button class="product-card__action" type="button">
                            <img src="assets/icons/logo_black.png" alt="" />
                        </button>
                    </div>
                    <div class="product-card__meta">
                        <div class="product-card__label">${product.category || 'Product'}</div>
                        <div class="product-card__name">${product.name}</div>
                        <div class="product-card__price">$ ${product.price}</div>
                    </div>
                </article>
            `;
            const $card = $(productHTML);
            $card.on('click', function(e) {
                console.log('Saving product to localStorage:', product.id);
                localStorage.setItem('selectedProductId', product.id);
                window.location.href = 'product.html';
            });
            $container.append($card);
        });
    },

    /**
     * Initialize products page.
     */
    async init() {
        const $container = $('.products-grid');
        
        // Setup filter listeners
        $('.filters__size').on('click', function() {
            const size = $(this).text().trim();
            Products.toggleSize(size);
        });

        $('.filters__color-btn').on('click', function() {
            const color = $(this).data('color');
            Products.toggleColor(color);
        });

        // Optional: Add loading state
        $container.html('<p class="products-loading">Loading products...</p>');

        const { data, error } = await this.fetchProducts();
        
        if (error) {
            $container.html('<p class="products-error">Failed to load products. Please try again later.</p>');
            return;
        }

        this.renderProducts(data);

        // Setup search listener
        $('#product-search').on('input', function() {
            Products.searchQuery = $(this).val().trim();
            Products.applyFilters();
        });
    }
};

// Initialize when document is ready
$(document).ready(function() {
    if ($('body').data('page') === 'products') {
        Products.init();
    }
});

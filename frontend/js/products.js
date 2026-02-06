/**
 * Products module for fetching and rendering products from Supabase.
 */

const Products = {
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
            return { data, error: null };
        } catch (error) {
            console.error('Error fetching products:', error.message);
            return { data: [], error };
        }
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
                <article class="product-card">
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
            $container.append(productHTML);
        });
    },

    /**
     * Initialize products page.
     */
    async init() {
        const $container = $('.products-grid');
        
        // Optional: Add loading state
        $container.html('<p class="products-loading">Loading products...</p>');

        const { data, error } = await this.fetchProducts();
        
        if (error) {
            $container.html('<p class="products-error">Failed to load products. Please try again later.</p>');
            return;
        }

        this.renderProducts(data);
    }
};

// Initialize when document is ready
$(document).ready(function() {
    if ($('body').data('page') === 'products') {
        Products.init();
    }
});

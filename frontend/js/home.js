/**
 * Home module for fetching and rendering products on the landing page.
 */

const Home = {
    /**
     * Fetch top 4 newest products for the weekly carousel.
     */
    async fetchWeeklyProducts() {
        try {
            const { data, error } = await supabaseClient
                .from('products')
                .select('*')
                .order('created_at', { ascending: false })
                .limit(4);

            if (error) throw error;
            return { data, error: null };
        } catch (error) {
            console.error('Error fetching weekly products:', error.message);
            return { data: [], error };
        }
    },

    /**
     * Render product cards into the weekly grid.
     * @param {Array} products 
     */
    renderWeeklyProducts(products) {
        const $container = $('.weekly__grid');
        if ($container.length === 0) return;
        
        $container.empty();

        products.forEach(product => {
            const productHTML = `
                <article class="product-card product-card--compact" style="cursor: pointer;">
                    <div class="product-card__image">
                        <img src="${product.image_url}" alt="${product.name}" />
                        <button class="product-card__action" type="button">
                            <img src="assets/icons/logo_black.png" alt="" />
                        </button>
                    </div>
                    <div class="product-card__meta">
                        <div class="product-card__label">${product.category || 'New Arrival'}</div>
                        <div class="product-card__name">${product.name}</div>
                        <div class="product-card__price">$ ${product.price}</div>
                    </div>
                </article>
            `;
            const $card = $(productHTML);
            $card.on('click', function() {
                localStorage.setItem('selectedProductId', product.id);
                window.location.href = 'product.html';
            });
            $container.append($card);
        });
    },

    /**
     * Initialize home page logic.
     */
    async init() {
        console.log('Home module initializing...');
        const self = this;
        
        const loadWeekly = async () => {
            console.log('Loading weekly products...');
            const { data } = await self.fetchWeeklyProducts();
            console.log('Weekly products data:', data);
            if (data && data.length > 0) {
                self.renderWeeklyProducts(data);
            }
        };

        // If the grid is already there, load immediately
        if ($('.weekly__grid').length) {
            console.log('Weekly grid found, loading immediately');
            loadWeekly();
        }

        // Always listen for HTMX load just in case
        document.body.addEventListener('htmx:afterOnLoad', function(evt) {
            console.log('HTMX content loaded:', evt.detail.target);
            // Check if the loaded content contains the grid, or if the target itself is the grid
            const $target = $(evt.detail.target);
            if ($target.find('.weekly__grid').length || $target.hasClass('weekly__grid') || evt.detail.xhr.responseText.includes('weekly__grid')) {
                console.log('Weekly grid detected, loading products');
                loadWeekly();
            }
        });
    }
};

// Initialize when document is ready
$(document).ready(function() {
    if ($('body').data('page') === 'home') {
        Home.init();
    }
});

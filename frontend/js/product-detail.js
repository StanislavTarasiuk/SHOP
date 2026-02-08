/**
 * Product Detail module for fetching and rendering a single product.
 */

const ProductDetail = {
    /**
     * Get product ID from localStorage.
     */
    getProductId() {
        return localStorage.getItem('selectedProductId');
    },

    /**
     * Fetch a single product by ID.
     */
    async fetchProduct(id) {
        try {
            const { data, error } = await supabaseClient
                .from('products')
                .select('*')
                .eq('id', id)
                .single();

            if (error) throw error;
            return { data, error: null };
        } catch (error) {
            console.error('Error fetching product:', error.message);
            return { data: null, error };
        }
    },

    /**
     * Render product details into the page.
     */
    renderProduct(product) {
        if (!product) return;

        // Update Title and Price
        $('.product-detail__title').text(product.name.toUpperCase());
        $('.product-detail__price').text(`$${product.price}`);
        $('.product-detail__description').text(product.description || 'No description available.');

        // Update Main Image
        $('.product-detail__main img').attr('src', product.image_url).attr('alt', product.name);

        // Update Thumbnails (using the same image for now as per database structure)
        const $thumbnails = $('.product-detail__thumbnails');
        $thumbnails.empty();
        // Add at least 3 thumbnails with the same image to keep the UI look
        for (let i = 0; i < 3; i++) {
            $thumbnails.append(`
                <button class="product-detail__thumb" type="button">
                    <img src="${product.image_url}" alt="${product.name}" />
                </button>
            `);
        }

        // Update Sizes (if available)
        const $sizesContainer = $('.product-detail__sizes');
        $sizesContainer.empty();
        if (product.sizes && Array.isArray(product.sizes)) {
            product.sizes.forEach(size => {
                $sizesContainer.append(`<button class="product-detail__size" type="button">${size}</button>`);
            });
        }
    },

    /**
     * Initialize product detail page.
     */
    async init() {
        const id = this.getProductId();
        console.log('Product ID from URL:', id);
        if (!id) {
            console.error('No product ID found in URL');
            $('#page-loader').fadeOut(); // Hide loader even on error
            return;
        }

        const { data, error } = await this.fetchProduct(id);
        
        if (error || !data) {
            $('.product-detail').html('<p class="products-error">Product not found.</p>');
            $('#page-loader').fadeOut();
            return;
        }

        this.renderProduct(data);

        // Setup Add to Cart
        $('.product-detail__button').on('click', function() {
            const $btn = $(this);
            const selectedSize = $('.product-detail__size--active').text() || $('.product-detail__size').first().text();
            
            const cartItem = {
                id: data.id,
                name: data.name,
                price: data.price,
                image_url: data.image_url,
                category: data.category,
                size: selectedSize
            };

            if (typeof Cart !== 'undefined') {
                Cart.addItem(cartItem);
                
                // Visual feedback instead of alert
                const originalText = $btn.text();
                $btn.addClass('button--active').text('ADDED');
                
                setTimeout(() => {
                    $btn.removeClass('button--active').text(originalText);
                }, 2000);
            } else {
                console.error('Cart module not loaded');
            }
        });

        // Size selection logic
        $(document).on('click', '.product-detail__size', function() {
            $('.product-detail__size').removeClass('product-detail__size--active');
            $(this).addClass('product-detail__size--active');
        });

        // Wait for 0,2 seconds as requested before hiding the loader
        setTimeout(() => {
            $('#page-loader').fadeOut(200);
        }, 500);
    }
};

// Initialize when document is ready
$(document).ready(function() {
    if ($('body').data('page') === 'product') {
        ProductDetail.init();
    }
});

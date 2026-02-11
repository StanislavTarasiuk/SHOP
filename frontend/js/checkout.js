/**
 * Checkout module for handling order summary and delivery form submission.
 */

const Checkout = {
    async init() {
        console.log('Checkout module initializing...');
        
        const session = await supabaseClient.auth.getSession();
        if (!session.data.session) {
            alert('Please login to proceed with checkout');
            window.location.href = 'auth.html';
            return;
        }

        await this.loadOrderSummary();
        this.setupFormHandler();
    },

    async loadOrderSummary() {
        const { data: { user } } = await supabaseClient.auth.getUser();
        
        // Fetch the active draft order for this user
        const { data: order, error: orderError } = await supabaseClient
            .from('orders')
            .select(`
                id,
                total_price,
                order_items (
                    id,
                    quantity,
                    price,
                    size,
                    color,
                    products (
                        name,
                        image_url
                    )
                )
            `)
            .eq('user_id', user.id)
            .eq('status', 'draft')
            .single();

        if (orderError || !order) {
            console.error('Error fetching draft order:', orderError);
            // При помилці теж ховаємо лоадер, як у product-detail
            $('#page-loader').fadeOut();
            // If no draft order, maybe redirect back to cart
            // window.location.href = 'cart.html';
            return;
        }

        this.renderSummary(order);

        // Аналогічно до product-detail.js: невелика пауза перед прихованням лоадера
        setTimeout(() => {
            $('#page-loader').fadeOut(200);
        }, 500);
    },

    renderSummary(order) {
        const $summaryContainer = $('.checkout-summary');
        // Keep the title and line dividers, but replace the items
        const $items = order.order_items;
        
        // Remove existing static items (lines 79-102 in checkout.html)
        $('.checkout-summary__item').remove();
        
        let subtotal = 0;
        
        $items.forEach(item => {
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;
            
            const itemHTML = `
                <div class="checkout-summary__item" data-id="${item.id}">
                    <div class="checkout-summary__thumb">
                        <img src="${item.products.image_url}" alt="${item.products.name}" />
                    </div>
                    <div>
                        <div>${item.products.name}</div>
                        <div>${item.color || 'Default'}/${item.size || 'L'}</div>
                        <div>(${item.quantity})</div>
                        <div style="cursor: pointer;" onclick="window.location.href='cart.html'">Change</div>
                    </div>
                    <div>$ ${item.price}</div>
                </div>
            `;
            // Insert before the first line divider
            $('.checkout-summary__line').first().before(itemHTML);
        });

        // Update totals
        $('.checkout-summary__row:contains("Subtotal") span:last-child').text(`$${subtotal.toFixed(2)}`);
        // Assuming shipping is fixed or calculated. For now let's match cart.js shipping if possible.
        const shipping = 10; // Match Cart.SHIPPING_COST
        $('.checkout-summary__row:contains("Shipping") span:last-child').text(`$${shipping.toFixed(2)}`);
        $('.checkout-summary__total span:last-child').text(`$${(subtotal + shipping).toFixed(2)}`);
    },

    setupFormHandler() {
        $('.checkout-form').on('submit', async (e) => {
            e.preventDefault();
            
            // Очищуємо попередні помилки
            $('.checkout-form__field-error').remove();
            $('.checkout-form__input').removeClass('checkout-form__input--error');
            
            const $submitBtn = $('.checkout-form__button');
            $submitBtn.prop('disabled', true).text('Processing...');

            try {
                const formData = {
                    email: $('#email').val(),
                    phone: $('#phone').val(),
                    first_name: $('#first-name').val(),
                    last_name: $('#last-name').val(),
                    country: $('#country').val(),
                    state: $('#state').val(),
                    address: $('#address').val(),
                    city: $('#city').val(),
                    postal_code: $('#postal').val()
                };

                // Валідація
                let hasErrors = false;
                for (const [key, value] of Object.entries(formData)) {
                    if (!value || value.trim() === '') {
                        const inputId = key.replace('_', '-');
                        const $input = $(`#${inputId}`);
                        
                        $input.addClass('checkout-form__input--error');
                        $input.after(`<div class="checkout-form__field-error">This field is required</div>`);
                        hasErrors = true;
                    }
                }

                if (hasErrors) {
                    $submitBtn.prop('disabled', false).text('Shipping');
                    return;
                }

                const { data: { user } } = await supabaseClient.auth.getUser();
                
                // 1. Update the order with delivery info and status
                // We need to get the order ID again or store it from loadOrderSummary
                const { data: order, error: fetchError } = await supabaseClient
                    .from('orders')
                    .select('id, total_price')
                    .eq('user_id', user.id)
                    .eq('status', 'draft')
                    .single();

                if (fetchError) throw fetchError;

                const { error: updateError } = await supabaseClient
                    .from('orders')
                    .update({
                        status: 'paid', // or 'submitted'
                        ...formData,
                        // total_price is already updated by cart sync usually, 
                        // but we can ensure it's correct here if needed
                    })
                    .eq('id', order.id);

                if (updateError) throw updateError;

                // 2. Clear local cart
                localStorage.removeItem('shopping_cart');

                // 3. Show success modal for 2 seconds, then redirect to home
                const $modal = $(`
                    <div class="checkout-success-modal-overlay" style="position: fixed; inset: 0; background: rgba(0,0,0,0.4); display: flex; align-items: center; justify-content: center; z-index: 9999;">
                        <div class="checkout-success-modal" style="background: #fff; padding: 24px 32px; border-radius: 8px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); text-align: center; max-width: 320px; width: 90%;">
                            <h2 style="margin-bottom: 8px; font-size: 20px;">Order placed</h2>
                            <p style="margin: 0; font-size: 14px; color: #555;">Your order has been successfully submitted.</p>
                        </div>
                    </div>
                `);

                $('body').append($modal);

                setTimeout(() => {
                    $modal.remove();
                    window.location.href = 'index.html';
                }, 2000);

            } catch (error) {
                console.error('Checkout error:', error);
                alert('There was an error processing your order. Please try again.');
                $submitBtn.prop('disabled', false).text('Shipping');
            }
        });
    }
};

$(document).ready(() => {
    Checkout.init();
});

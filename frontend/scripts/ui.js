/**
 * UI logic for the web shop.
 */

$(document).ready(async function() {
    // Check auth state and update header
    async function updateAuthUI() {
        if (typeof Auth === 'undefined') {
            console.error('Auth module not loaded');
            return;
        }

        const user = await Auth.getUser();
        const $accountLink = $('#header-account-link');
        const $userDisplay = $('#user-display-name');

        if (user) {
            // User is logged in
            $accountLink.attr('href', 'profile.html');
            
            // Fetch profile to get username
            if (typeof Profile !== 'undefined') {
                const { data: profile } = await Profile.getProfile(user.id);
                if (profile && profile.username) {
                    $userDisplay.text(profile.username).show();
                } else {
                    $userDisplay.text(user.email.split('@')[0]).show();
                }
            } else {
                $userDisplay.text(user.email.split('@')[0]).show();
            }
        } else {
            // User is not logged in
            $accountLink.attr('href', 'auth.html');
            $userDisplay.hide();
        }
    }

    // Update cart count from localStorage
    function updateGlobalCartCount() {
        if (typeof Cart !== 'undefined' && typeof Cart.updateCartCount === 'function') {
            Cart.updateCartCount();
        } else {
            // Fallback if Cart module is not fully initialized or on pages where it's not loaded
            const stored = localStorage.getItem('shopping_cart');
            const items = stored ? JSON.parse(stored) : [];
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
        }
    }

    // Initialize UI elements
    function initUI() {
        updateAuthUI();
        updateGlobalCartCount();
    }

    // Handle HTMX loaded content
    document.body.addEventListener('htmx:afterOnLoad', function(evt) {
        initUI();
    });

    // Initial call
    initUI();

    // Listen for cart updates
    window.addEventListener('cart-updated', () => {
        updateGlobalCartCount();
    });
});

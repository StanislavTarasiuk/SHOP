/**
 * UI logic for the web shop.
 */

$(document).ready(async function() {
    // Check auth state and update header
    async function updateAuthUI() {
        const user = await Auth.getUser();
        const $accountLink = $('#header-account-link');
        const $userDisplay = $('#user-display-name');

        if (user) {
            // User is logged in
            $accountLink.attr('href', 'profile.html');
            
            // Fetch profile to get username
            const { data: profile } = await Profile.getProfile(user.id);
            if (profile && profile.username) {
                $userDisplay.text(profile.username).show();
            } else {
                $userDisplay.text(user.email.split('@')[0]).show();
            }
        } else {
            // User is not logged in
            $accountLink.attr('href', 'auth.html');
            $userDisplay.hide();
        }
    }

    // Initialize Auth UI
    // Note: We use a small delay or event listener if header is loaded via HTMX
    if ($('#header-account-link').length) {
        updateAuthUI();
    } else {
        // If header is not yet in DOM (loaded via HTMX), wait for it
        document.body.addEventListener('htmx:afterOnLoad', function(evt) {
            if (evt.detail.target.id === 'header' || $(evt.detail.target).find('#header-account-link').length) {
                updateAuthUI();
            }
        });
        // Fallback: check every 500ms for a few times
        let checks = 0;
        const interval = setInterval(() => {
            if ($('#header-account-link').length) {
                updateAuthUI();
                clearInterval(interval);
            }
            if (++checks > 10) clearInterval(interval);
        }, 500);
    }
});

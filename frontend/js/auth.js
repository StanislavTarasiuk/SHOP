/**
 * Auth module for handling registration, login, and logout using Supabase.
 */

const Auth = {
    /**
     * Register a new user with email and password.
     * @param {string} email 
     * @param {string} password 
     * @param {string} username 
     */
    async register(email, password, username) {
        try {
            const { data, error } = await supabaseClient.auth.signUp({
                email,
                password,
            });

            if (error) throw error;

            if (data.user) {
                // Create a profile record in the 'profiles' table
                const { error: profileError } = await supabaseClient
                    .from('profiles')
                    .insert([
                        { id: data.user.id, email: email, username: username }
                    ]);

                if (profileError) throw profileError;
            }

            return { data, error: null };
        } catch (error) {
            console.error('Registration error:', error.message);
            return { data: null, error };
        }
    },

    /**
     * Login an existing user.
     * @param {string} email 
     * @param {string} password 
     */
    async login(email, password) {
        try {
            const { data, error } = await supabaseClient.auth.signInWithPassword({
                email,
                password,
            });

            if (error) throw error;
            return { data, error: null };
        } catch (error) {
            console.error('Login error:', error.message);
            return { data: null, error };
        }
    },

    /**
     * Logout the current user.
     */
    async logout() {
        try {
            const { error } = await supabaseClient.auth.signOut();
            if (error) throw error;
            window.location.href = 'index.html'; // Redirect to home after logout
        } catch (error) {
            console.error('Logout error:', error.message);
        }
    },

    /**
     * Get the current session.
     */
    async getSession() {
        const { data: { session } } = await supabaseClient.auth.getSession();
        return session;
    },

    /**
     * Get the current user.
     */
    async getUser() {
        const { data: { user } } = await supabaseClient.auth.getUser();
        return user;
    }
};

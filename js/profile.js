/**
 * Profile module for managing user profile data.
 */

const Profile = {
    /**
     * Fetch the profile for a given user ID.
     * @param {string} userId 
     */
    async getProfile(userId) {
        try {
            const { data, error } = await supabaseClient
                .from('profiles')
                .select('*')
                .eq('id', userId)
                .single();

            if (error) throw error;
            return { data, error: null };
        } catch (error) {
            console.error('Error fetching profile:', error.message);
            return { data: null, error };
        }
    },

    /**
     * Update the username for the current user.
     * @param {string} userId 
     * @param {string} username 
     */
    async updateUsername(userId, username) {
        try {
            const { data, error } = await supabaseClient
                .from('profiles')
                .update({ username })
                .eq('id', userId);

            if (error) throw error;
            return { data, error: null };
        } catch (error) {
            console.error('Error updating profile:', error.message);
            return { data: null, error };
        }
    }
};

// Supabase configuration
// Replace these with your actual Supabase URL and Anon Key
const SUPABASE_URL = 'https://kjiysxswseauyjbfxovx.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable__LMOY4iNCrz0wPEpZil0PA_7MjQRq1V';

// Initialize the Supabase client
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl!, supabaseAnonKey!)
  : null;

export interface CollaborationRequest {
  name: string;
  institution: string;
  email: string;
  whatsapp?: string;
  collaboration_type: string;
  message: string;
}

export async function submitCollaboration(data: CollaborationRequest) {
  if (!supabase) {
    throw new Error('Supabase is not configured. Please set up environment variables.');
  }

  const { data: result, error } = await supabase
    .from('collaboration_requests')
    .insert([data])
    .select()
    .single();

  if (error) {
    throw error;
  }

  return result;
}
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://oerrnfgacjlncxftjswr.supabase.co'; // seu URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9lcnJuZmdhY2psbmN4ZnRqc3dyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc1Nzg3MjEsImV4cCI6MjA2MzE1NDcyMX0.tf4P6G85_7nFqRptjjC7Z1gV-4nm7x4kAB_fortlMtU'; // sua chave pública

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

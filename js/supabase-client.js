// ===== Supabase 設定 =====
// 把下面兩個值換成你自己的（從 Supabase → Settings → API 複製）
const SUPABASE_URL  = 'https://hhyvxthohbmclymdtkoz.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhoeXZ4dGhvaGJtY2x5bWR0a296Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU0NDk1MTEsImV4cCI6MjA5MTAyNTUxMX0.1Nu_Xesf6dp6M4fC8dGi8v3wZEECE3HOFbGY6VKL2AE';

const db = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON);

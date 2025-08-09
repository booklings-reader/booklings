import { supabase } from "@/integrations/supabase/client";

export async function checkSupabaseConnection(): Promise<boolean> {
  try {
    // Lightweight query against a public-read table per RLS (achievements has public select)
    const { error } = await supabase.from("achievements").select("id").limit(1);
    if (error) {
      console.error("Supabase health check failed:", error);
      return false;
    }
    return true;
  } catch (err) {
    console.error("Supabase health check exception:", err);
    return false;
  }
} 
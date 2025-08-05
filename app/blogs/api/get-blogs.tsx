'use server'
import { createClient } from "@/utils/supabase/server";

export async function GetBlogs() {
  const supabase = await createClient();
  const { data, error } = await supabase.from("blogs").select("*").order("created_at", { ascending: false });
  if(error) {
    console.error(error);
    return [];
  }
  return data;
}

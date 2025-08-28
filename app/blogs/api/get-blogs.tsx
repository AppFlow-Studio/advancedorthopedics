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

export async function GetLatestBlog() {
  const supabase = await createClient();
  const { data, error } = await supabase.from("blogs").select("*").order("created_at", { ascending: false }).limit(1).single();
  if(error) {
    console.error(error);
    return null;
  }
  return data;
}
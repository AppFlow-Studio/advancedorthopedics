'use server'
import { createClient } from "@/utils/supabase/server";

export async function GetBlogInfo(id : string) {
  const supabase = await createClient();
  const { data, error } = await supabase.from("blogs").select("*").eq("id", id).single();
  if(error) {
    console.error(error);
    return null;
  }
  return data;
}
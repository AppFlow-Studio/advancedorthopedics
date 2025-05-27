'use server'
import { createClient } from "@/utils/supabase/server";

export async function GetBlogInfo(slug : string) {
  const supabase = await createClient();
  const { data, error } = await supabase.from("blogs").select("*").eq("slug", slug).single();
  if(error) {
    console.error(error);
    return null;
  }
  return data;
}
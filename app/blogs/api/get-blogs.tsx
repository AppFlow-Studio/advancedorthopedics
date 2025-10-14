'use server'
import { createClient } from "@/utils/supabase/server";

export async function GetBlogs() {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase.from("blogs").select("*").order("created_at", { ascending: false });
    if(error) {
      console.error("Supabase error in GetBlogs:", error);
      return [];
    }
    return data;
  } catch (err) {
    console.error("Unexpected error in GetBlogs:", err);
    return [];
  }
}

export async function GetLatestBlog() {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase.from("blogs").select("*").order("created_at", { ascending: false }).limit(1).single();
    if(error) {
      console.error("Supabase error in GetLatestBlog:", error);
      return null;
    }
    return data;
  } catch (err) {
    console.error("Unexpected error in GetLatestBlog:", err);
    return null;
  }
}

// NEW: typed row
export type BlogRow = {
  id: string;
  slug: string;
  created_at: string;
  modified_at: string | null;
  blog_info: any;
};

// NEW: paginated blogs with optional tag (kept simple; tag filtering optional)
export async function GetBlogsPaginated(page = 1, perPage = 9, tag?: string) {
  try {
    const supabase = await createClient();
    const from = (page - 1) * perPage;
    const to = from + perPage - 1;

    let query = supabase
      .from("blogs")
      .select("*", { count: "exact" })
      .order("created_at", { ascending: false })
      .range(from, to);

    // Tag filter (checks JSON tags array inside blog_info)
    if (tag) {
      query = query.contains("blog_info->tags", [tag]);
    }

    const { data, count, error } = await query;

    if (error) {
      console.error("Supabase error in GetBlogsPaginated:", error);
      return { data: [], total: 0, page, perPage, tag };
    }
    
    return { data: data as BlogRow[], total: count ?? 0, page, perPage, tag };
  } catch (err) {
    console.error("Unexpected error in GetBlogsPaginated:", err);
    return { data: [], total: 0, page, perPage, tag };
  }
}

// NEW: light search index (title+slug only) to avoid loading full posts
export type BlogSearchItem = { id: string; slug: string; blog_info: { title: string } };

export async function GetBlogSearchIndex(limit = 100) {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("blogs")
      .select("id, slug, blog_info")
      .order("created_at", { ascending: false })
      .limit(limit);

    if (error) {
      console.error("Supabase error in GetBlogSearchIndex:", error);
      return [] as BlogSearchItem[];
    }

    return (data || []).map((row: any) => ({
      id: row.id,
      slug: row.slug,
      blog_info: { title: row.blog_info?.title ?? "" },
    })) as BlogSearchItem[];
  } catch (err) {
    console.error("Unexpected error in GetBlogSearchIndex:", err);
    return [] as BlogSearchItem[];
  }
}
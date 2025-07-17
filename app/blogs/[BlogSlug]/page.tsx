    // app/page.tsx
    import { notFound } from 'next/navigation';
    import { GetBlogInfo } from '@/app/blogs/api/get-blog-info';
    import BlogPostClient from '@/components/BlogPostClient';
    import { QueryClient, dehydrate, HydrationBoundary } from '@tanstack/react-query';
    import { createClient } from '@/utils/supabase/server';
    import { staticSupabase } from '@/utils/supabase/static';

    export const dynamicParams = false;

    // Helper to fetch all blog slugs from Supabase
    async function GetAllBlogSlugs() {
      const { data, error } = await staticSupabase.from('blogs').select('slug');
      if (error) {
        console.error(error);
        return [];
      }
      return (data || []).map((row: { slug: string }) => ({ BlogSlug: row.slug }));
    }

    export async function generateStaticParams() {
      return await GetAllBlogSlugs();
    }

    export default async function Page({ params }: { params: { BlogSlug: string } }) {
      const blog = await GetBlogInfo(params.BlogSlug);
      if (!blog) return notFound();

      const qc = new QueryClient();
      await qc.prefetchQuery({ queryKey: ['posts', params.BlogSlug], queryFn: () => blog });

      return (
        <HydrationBoundary state={dehydrate(qc)}>
          <BlogPostClient params={params.BlogSlug} />
        </HydrationBoundary>
      );
    }

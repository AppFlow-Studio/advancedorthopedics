    // app/page.tsx
    import { QueryClient, dehydrate, HydrationBoundary } from '@tanstack/react-query';
    import { GetBlogInfo } from '@/app/blogs/api/get-blog-info'; // Your data fetching function
    import BlogPostClient from '@/components/BlogPostClient'; // Your Client Component

    export default async function PostsPage({params} : {params : Promise<{BlogSlug : string}>}) {
      const {BlogSlug} = await params;
      const queryClient = new QueryClient();
      await queryClient.prefetchQuery({
        queryKey: ['posts'],
        queryFn: () => GetBlogInfo(BlogSlug),
      });

      return (
        <HydrationBoundary state={dehydrate(queryClient)}>
          <BlogPostClient params={BlogSlug} />
        </HydrationBoundary>
      );
    }
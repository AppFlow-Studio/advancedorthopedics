function capitalizeWords(str: string): string {
  return str.replace(/\b\w/g, l => l.toUpperCase());
}

export async function generateMetadata(
  { params }: { params: { BlogId: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const blog = await GetBlogInfo(params.BlogId);

  if (!blog) {
    const readableSlug = params.BlogId.replace(/-/g, " ");
    return {
      title: `${capitalizeWords(readableSlug)} | Mountain Spine & Orthopedics`,
      description: "Learn about orthopedic care and treatments with our specialists in Florida."
    };
  }

  const blogUrl = `https://mountainspineorthopedics.com/blogs/${blog.id}`;

  return {
    metadataBase: new URL('https://mountainspineorthopedics.com'),
    title: blog.metaTitle || `${blog.title} | Mountain Spine & Orthopedics`,
    description: blog.metaDescription || blog.desc,
    keywords: blog.keywords || [blog.title, "orthopedic blog", "spine health"],
    
    openGraph: {
      title: blog.metaTitle || `${blog.title} | Mountain Spine & Orthopedics`,
      description: blog.metaDescription || blog.desc,
      type: "article",
      url: blogUrl,
      images: [
        {
          url: blog.img,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: blog.metaTitle || `${blog.title} | Mountain Spine & Orthopedics`,
      description: blog.metaDescription || blog.desc,
      images: [blog.img],
    },

    alternates: {
      canonical: blogUrl,
    },
  };
} 
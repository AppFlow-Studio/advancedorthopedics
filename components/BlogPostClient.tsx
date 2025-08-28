'use client'
import React, { useEffect, useState, cache } from 'react'
import Image from 'next/image'
import ConditionDetialsLanding from '@/public/ConditionDetails.jpeg'
import { ConditionInfoProp } from '@/components/ConditionCard'
import { ConsultationForm } from '@/components/ContactForm'
import { Input } from '@/components/ui/input'
import { Doctors } from '@/components/data/doctors'
import DoctorCard from '@/components/DoctorCard'
import BlogPostCard, { BlogPostProp, supabaseBlogPostProp } from '@/components/BlogPostCard'
import ClinicsMap from '@/components/ClinicsMap'
import ContactUsSection from '@/components/ContactUsSection'
import { GetBlogInfo } from '@/app/blogs/api/get-blog-info'
import { Badge } from '@/components/ui/badge'
import { TextAnimate } from '@/components/magicui/text-animate'
import { Calendar, User } from 'lucide-react'
import { useQuery } from '@tanstack/react-query';
import { GetBlogs } from '@/app/blogs/api/get-blogs'

export default function BlogDetails({
  params,
}: {
  params: string
}) {
  const { data: blog_details, isLoading, error } = useQuery({
    queryKey: ['posts', params],
    queryFn: () => GetBlogInfo(params),
  });
  const { data: recentPosts, isLoading: recentPostsLoading } = useQuery({
    queryKey: ['recentPosts'],
    queryFn: () => GetBlogs(),
  });

  if (isLoading) {
    return (
      <main className="w-full h-screen flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <h2 className="text-xl font-medium text-gray-600">Loading blog details...</h2>
        </div>
      </main>
    )
  }

  if (error || !blog_details) {
    return (
      <main className="w-full h-screen flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-2xl font-bold text-red-600">{error?.message || 'Blog not found or might have been deleted'}</h2>
          <p className="text-gray-600">Please check the URL or try again later</p>
        </div>
      </main>
    )
  }
  const renderRichText = (text: string) => {
    if (!text) return null;

    // Create a temporary div to parse HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = text;

    const processNode = (node: Node, key: string): React.ReactNode => {
      if (node.nodeType === Node.TEXT_NODE) {
        return node.textContent;
      }

      if (node.nodeType === Node.ELEMENT_NODE) {
        const element = node as Element;
        const tagName = element.tagName.toLowerCase();
        const children = Array.from(element.childNodes).map((child, index) =>
          processNode(child, `${key}-${index}`)
        );

        // Handle different HTML elements
        switch (tagName) {
          case 'a':
            const href = element.getAttribute('href') || '';
            const linkText = element.textContent || '';
            return (
              <a
                key={key}
                href={href}
                className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#2563eb' }}
              >
                {linkText}
              </a>
            );

          case 'strong':
          case 'b':
            return (
              <strong key={key} className="font-bold">
                {children}
              </strong>
            );

          case 'em':
          case 'i':
            return (
              <em key={key} className="italic">
                {children}
              </em>
            );

          case 'u':
            return (
              <u key={key} className="underline">
                {children}
              </u>
            );

          case 'br':
            return <br key={key} />;

          case 'p':
            return (
              <p key={key} className="mb-4">
                {children}
              </p>
            );

          case 'h1':
            return (
              <h2 key={key} className="text-3xl font-bold mb-4 text-[#252932]">
                {children}
              </h2>
            );

          case 'h2':
            return (
              <h2 key={key} className="text-2xl font-bold mb-3 text-[#252932]">
                {children}
              </h2>
            );

          case 'h3':
            return (
              <h3 key={key} className="text-xl font-bold mb-2 text-[#252932]">
                {children}
              </h3>
            );

          case 'h4':
            return (
              <h4 key={key} className="text-lg font-bold mb-2 text-[#252932]">
                {children}
              </h4>
            );

          case 'ul':
            return (
              <ul key={key} className="list-disc ml-6  mb-4 space-y-1">
                {children}
              </ul>
            );

          case 'ol':
            return (
              <ol key={key} className="list-decimal ml-6 mx-auto  mb-4 space-y-1">
                {children}
              </ol>
            );

          case 'li':
            return (
              <li key={key}>
                {children}
              </li>
            );

          case 'blockquote':
            return (
              <blockquote key={key} className="border-l-4 border-blue-500 pl-4 italic bg-gray-50 py-2 mb-4">
                {children}
              </blockquote>
            );

          case 'code':
            return (
              <code key={key} className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
                {children}
              </code>
            );

          case 'pre':
            return (
              <pre key={key} className="bg-gray-100 p-4 rounded overflow-x-auto text-sm font-mono mb-4">
                {children}
              </pre>
            );

          case 'mark':
            return (
              <mark key={key} className="bg-yellow-200 px-1 rounded">
                {children}
              </mark>
            );

          case 'small':
            return (
              <small key={key} className="text-sm text-gray-600">
                {children}
              </small>
            );

          case 'sub':
            return <sub key={key}>{children}</sub>;

          case 'sup':
            return <sup key={key}>{children}</sup>;

          case 'del':
            return (
              <del key={key} className="line-through text-gray-500">
                {children}
              </del>
            );

          case 'ins':
            return (
              <ins key={key} className="underline">
                {children}
              </ins>
            );

          case 'span':
            // Handle span with custom styles
            const style = element.getAttribute('style');
            const className = element.getAttribute('class');
            return (
              <span key={key} style={style ? { ...parseInlineStyles(style) } : undefined} className={className || undefined}>
                {children}
              </span>
            );

          case 'div':
            // Handle div with custom styles
            const divStyle = element.getAttribute('style');
            const divClassName = element.getAttribute('class');
            return (
              <div key={key} style={divStyle ? { ...parseInlineStyles(divStyle) } : undefined} className={divClassName || undefined}>
                {children}
              </div>
            );

          default:
            // For any other tags, render as a span with the tag's content
            return (
              <span key={key}>
                {children}
              </span>
            );
        }
      }

      return null;
    };

    // Helper function to parse inline styles
    const parseInlineStyles = (styleString: string): React.CSSProperties => {
      const styles: React.CSSProperties = {};
      const stylePairs = styleString.split(';');

      stylePairs.forEach(pair => {
        const [property, value] = pair.split(':').map(s => s.trim());
        if (property && value) {
          // Convert CSS property names to camelCase
          const camelProperty = property.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
          (styles as any)[camelProperty] = value;
        }
      });

      return styles;
    };

    // Process all child nodes
    const processedNodes = Array.from(tempDiv.childNodes).map((node, index) =>
      processNode(node, `node-${index}`)
    );

    return <>{processedNodes}</>;
  }
  console.log(recentPosts)
  return (
    <main className='w-full flex flex-col items-center justify-center bg-white h-full'>
      {/* Landing */}
      <section className="w-full h-full flex flex-col relative overflow-hidden" >
        <div
          style={{
            filter: 'blur(30px)'
          }}
          className="w-full h-[120px] absolute top-0 z-[1]"
        />
        <Image
          src={'/herosectionimg.jpg'}
          priority={true}
          fetchPriority="high"
          layout='fill'
          className="h-full absolute top-0 object-cover object-center md:object-center w-full"
          alt="Doctor Diagnosing a Old Patient"
        />
        <div
          className="lg:w-[100%] z-[1] h-full absolute left-0 top-0 md:w-[100%] w-full"
          style={{
            background: 'linear-gradient(180deg, rgba(10, 80, 236, 0.20) 0%, rgba(255, 255, 255, 0.20) 100%)',
          }}
        />
        {/* <div
        className="lg:w-[100%] z-[1] h-full absolute left-0 top-0 md:w-[85%] w-full"
        style={{
          background: '#5FBBEC',
        }}
      /> */}
        <div className="z-[1] flex flex-col w-full h-full text-center relative sm:pt-60 sm:pb-20 pt-30 pb-0">
          <div className='px-6 xl:px-[80px] z-[2] w-full flex flex-col space-y-4 items-center justify-center'>
            <nav aria-label="Breadcrumb" className="mb-4 xl:flex hidden bg-white/50 rounded-full px-4 py-2 w-fit">
              <ol className="flex space-x-2 text-[#252932]">
                <li><a href="/blogs">Blogs</a> /</li>
                <li aria-current="page">{blog_details.blog_info.title}</li>
              </ol>
            </nav>
            <TextAnimate by='word' style={{ fontFamily: "var(--font-public-sans)", fontWeight: 400 }} className="text-[#252932] text-2xl md:text-5xl lg:text-6xl xl:w-[80%] w-full text-center self-center">{blog_details.blog_info.title}</TextAnimate>
            <p style={{ fontWeight: 400, lineHeight: "148%" }} className="text-[#424959] mt-4 md:text-md text-sm xl:w-[55%] w-full text-center self-center">{blog_details.blog_info.desc}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {blog_details.blog_info.tags.map((tag: string, index: number) => (
                <span key={index} className="bg-[#FAFAFA] text-[#424959] px-3 py-1 rounded-full text-sm">{tag}</span>
              ))}
            </div>
            <div className="flex items-center gap-6 mt-4 text-sm text-[#] mb-6">
              {blog_details.blog_info.author && (
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{blog_details.blog_info.author}</span>
                </div>
              )}
              {blog_details.blog_info.date && (
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(blog_details.blog_info.date).toLocaleDateString()}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <main className='max-w-[1440px] w-full h-full flex lg:flex-row flex-col relative overflow-hidden px-6 xl:px-[80px] py-[50px] space-x-[60px]'>
        <article className='lg:w-[70%] w-full flex flex-col space-y-[60px] rounded-[24px]'>
          {blog_details.blog_info.blog_info.map((section: any, idx: number) => (
            <section key={idx} className="mb-8">
              <h2 style={{ fontFamily: 'var(--font-public-sans)', fontWeight: 500 }} className='text-[#111315] text-3xl mb-2'>{section.header}</h2>
              <div className='text-[#424959] text-lg mb-4'>{renderRichText(section.body)}</div>
              {section.sub_stories && section.sub_stories.length > 0 && (
                <div className="space-y-4">
                  {section.sub_stories.map((sub: any, subIdx: number) => (
                    <div key={subIdx} className="ml-4">
                      {sub.img && (
                        <div className='w-full h-100 relative rounded-2xl overflow-hidden mb-6'>
                          <Image src={sub.img} alt={sub.header} fill className='object-cover object-center' />
                        </div>)}
                      <h3 style={{ fontFamily: 'var(--font-public-sans)', fontWeight: 500 }} className='text-[#252932] text-xl mb-1'>{sub.header}</h3>
                      <div className='text-[#424959] ml-2 border-l-2 border-gray-200 pl-6 mb-8 text-base'>{renderRichText(sub.body)}</div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </article>
        <aside className='lg:w-[30%] w-full flex flex-col space-y-8'>
          <h2 className='text-[#252932] text-2xl font-bold mb-4'>Recent Posts</h2>
          <div className='grid grid-cols-1 gap-4'>
            {
              recentPosts?.slice(0, 3).map((post) => (
                <BlogPostCard
                  key={post.id}
                  BlogInfo={post.blog_info}
                  backgroundcolor='white'
                  id={post.id}
                  slug={post.slug}
                />
              ))}
          </div>
        </aside>
      </main>

      <ContactUsSection />
    </main>
  )
}

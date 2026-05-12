import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { SafeImage } from '@/components/common/SafeImage';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, User, Clock, ChevronLeft, Share2 } from 'lucide-react';
import { BLOG_POSTS } from '@/constants/blogs';
import { Container } from '@/components/common/Container';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { Heading } from '@/components/common/Heading';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: {
      absolute: `${post.title} | Ejadi Interior Blog`,
    },
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  return (
    <article className="pt-24 min-h-screen bg-background">
      {/* 1. Progress / Back Link */}
      <Container className="py-8">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors"
        >
          <ChevronLeft size={14} /> Back to Journal
        </Link>
      </Container>

      {/* 2. Hero Header */}
      <SectionWrapper className="pb-20 py-0" withContainer={false}>
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex items-center justify-center gap-3">
              <span className="px-4 py-1.5 bg-muted text-accent text-[10px] font-bold uppercase tracking-widest rounded-full">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-7xl font-serif tracking-tighter leading-[1.1]">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-8 text-[11px] font-bold uppercase tracking-widest text-muted-foreground border-y border-border py-6">
              <div className="flex items-center gap-2">
                <User size={14} className="text-accent" />
                {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-accent" />
                {post.date}
              </div>
              <div className="flex items-center gap-2 text-accent">
                <Clock size={14} />
                8 min read
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* 3. Featured Image */}
      <Container className="mb-24">
        <div className="relative aspect-video w-full overflow-hidden rounded-sm shadow-2xl">
          <SafeImage
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            priority
          />
        </div>
      </Container>

      {/* 4. Content */}
      <Container className="pb-32">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-serif prose-headings:tracking-tighter prose-headings:font-normal prose-p:font-light prose-p:leading-relaxed prose-p:text-muted-foreground selection:bg-accent selection:text-white">
            <p className="text-2xl font-serif italic text-foreground leading-relaxed mb-12 border-l-4 border-accent pl-8 py-2">
              {post.excerpt}
            </p>
            
            <div className="space-y-8 text-foreground/80 font-light text-lg leading-relaxed">
               {/* Splitting content for basic rendering - in real app would use MDX/CMS */}
               {post.content.split('\n\n').map((para, i) => (
                 <p key={i}>{para}</p>
               ))}
               
               <p>
                 When it comes to <strong>architecture in Indore</strong>, we see a unique blend of heritage and modernism. 
                 Areas like Vijay Nagar and Palasia are becoming benchmarks for <strong>luxury home design in Madhya Pradesh</strong>. 
                 As a lead architect, I believe the future lies in biophilic integration and structural honesty.
               </p>

               <div className="bg-muted p-8 md:p-12 my-12 border border-border">
                 <h3 className="text-2xl font-serif mb-4 text-foreground italic">Join the Conversation</h3>
                 <p className="text-muted-foreground mb-6">Are you planning a project in Indore? Let's discuss how we can blend technical excellence with your personal narrative.</p>
                 <Link href="/contact" className="inline-block px-8 py-4 bg-accent text-white text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform">
                    Start a Project
                 </Link>
               </div>
            </div>
          </div>

          {/* Share */}
          <div className="mt-20 pt-12 border-t border-border flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Share Article</span>
              <button className="p-3 rounded-full border border-border hover:bg-muted transition-colors"><Share2 size={14} /></button>
            </div>
          </div>
        </div>
      </Container>

      {/* 5. Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-muted py-32 border-t border-border">
          <Container>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div className="space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-accent">Related Articles</p>
                <Heading size="3xl">Further <span className="italic font-serif">Reading</span></Heading>
              </div>
              <Link href="/blog" className="text-[10px] font-bold uppercase tracking-widest border-b border-accent pb-1">
                View all Journal entries
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {relatedPosts.map((rp) => (
                <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group space-y-6">
                  <div className="relative aspect-video overflow-hidden">
                    <SafeImage
                      src={rp.coverImage}
                      alt={rp.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-3">
                    <p className="text-[9px] font-bold uppercase tracking-widest text-accent">{rp.category}</p>
                    <h3 className="text-2xl font-serif transition-colors group-hover:text-accent">{rp.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
    </article>
  );
}

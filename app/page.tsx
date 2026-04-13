import { HomeHero } from '@/features/home/components/Hero';
import { HomeFeaturedProjects } from '@/features/home/components/FeaturedProjects';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { Heading } from '@/components/common/Heading';
import { SITE, HOME_CONTENT } from '@/constants/site';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeFeaturedProjects />
      
      {/* About Preview Section */}
      <SectionWrapper className="bg-muted">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <p className="text-xs font-light uppercase tracking-widest text-accent">{HOME_CONTENT.aboutPreview.label}</p>
            <Heading size="xl">{HOME_CONTENT.aboutPreview.heading}</Heading>
            <p className="text-secondary font-light leading-relaxed max-w-lg">
              {HOME_CONTENT.aboutPreview.text}
            </p>
            <Link 
              href="/about"
              className={cn(
                buttonVariants({ variant: 'outline' }),
                "rounded-none px-8 py-6 text-xs uppercase tracking-widest"
              )}
            >
              {HOME_CONTENT.aboutPreview.btnText}
            </Link>
          </div>
          <div className="relative aspect-4/5 overflow-hidden order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1974&auto=format&fit=crop" 
              alt="Design Philosophy" 
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Services Preview */}
      <SectionWrapper>
        <div className="text-center space-y-4 mb-20">
          <p className="text-xs font-light uppercase tracking-widest text-accent">{HOME_CONTENT.servicesSummary.label}</p>
          <Heading size="xl">{HOME_CONTENT.servicesSummary.heading}</Heading>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {HOME_CONTENT.servicesSummary.items.map((service, index) => (
            <div key={index} className="space-y-6 border-l border-muted pl-8 group">
              <span className="text-xs font-light text-muted-foreground uppercase tracking-widest">0{index + 1}</span>
              <Heading as="h3" size="sm">{service.title}</Heading>
              <p className="text-sm text-secondary font-light leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Final Call to Action */}
      <SectionWrapper className="bg-primary text-primary-foreground py-32 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-size-[60px_60px]" />
        </div>
        <div className="relative z-10 text-center space-y-12 max-w-4xl mx-auto">
          <p className="text-xs font-light uppercase tracking-[0.5em] text-accent">{HOME_CONTENT.cta.label}</p>
          <Heading size="2xl" className="font-light!">{HOME_CONTENT.cta.heading}</Heading>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Link 
              href="/projects" 
              className={cn(
                buttonVariants({ variant: 'default' }),
                "w-full sm:w-auto group rounded-none bg-primary-foreground text-primary px-12 py-8 text-xs uppercase tracking-widest hover:bg-accent hover:text-primary-foreground transition-all duration-300 overflow-hidden"
              )}
            >
              <span className="relative z-10 overflow-hidden h-5 inline-flex flex-col pointer-events-none">
                <span className="inline-block transition-transform duration-500 ease-out group-hover:-translate-y-full">{HOME_CONTENT.cta.exploreBtn}</span>
                <span className="inline-block transition-transform duration-500 ease-out group-hover:-translate-y-full">{HOME_CONTENT.cta.exploreBtn}</span>
              </span>
            </Link>
            <Link 
              href="/contact" 
              className={cn(
                buttonVariants({ variant: 'outline' }),
                "w-full sm:w-auto group rounded-none border border-primary-foreground/20 bg-transparent px-12 py-8 text-xs uppercase tracking-widest text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300 overflow-hidden"
              )}
            >
              <span className="relative z-10 overflow-hidden h-5 inline-flex flex-col pointer-events-none">
                <span className="inline-block transition-transform duration-500 ease-out group-hover:-translate-y-full">{HOME_CONTENT.cta.contactBtn}</span>
                <span className="inline-block transition-transform duration-500 ease-out group-hover:-translate-y-full">{HOME_CONTENT.cta.contactBtn}</span>
              </span>
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}


import { HomeHero } from '@/features/home/components/Hero';
import { HomeFeaturedProjects } from '@/features/home/components/FeaturedProjects';
import Image from 'next/image';
import { SafeImage } from '@/components/common/SafeImage';
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
      <SectionWrapper className="bg-background border-t border-border">
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
          <div className="relative aspect-video overflow-hidden order-1 lg:order-2">
            <SafeImage
              src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1974&auto=format&fit=crop"
              alt="Design Philosophy"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Services Preview - Premium Visual Grid */}
      <SectionWrapper className="bg-muted/30">
        <div className="text-center space-y-4 mb-20">
          <p className="text-xs font-light uppercase tracking-widest text-accent">{HOME_CONTENT.servicesSummary.label}</p>
          <Heading size="xl">{HOME_CONTENT.servicesSummary.heading}</Heading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {HOME_CONTENT.servicesSummary.items.map((service, index) => (
            <Link
              href="/services"
              key={index}
              className="group relative overflow-hidden aspect-[3/4] border border-border hover:z-10 transition-all duration-700"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <SafeImage
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 group-hover:from-black/70 group-hover:to-black/90 transition-all duration-700" />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-8 md:p-10 text-white">
                {/* Number Badge */}
                <div className="flex items-start justify-between">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/20 text-xs font-light tracking-wider bg-white/5 backdrop-blur-sm">
                    0{index + 1}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="space-y-4">
                  <div className="h-px w-12 bg-accent transition-all duration-500 group-hover:w-24" />
                  <Heading as="h3" size="sm" className="text-white! font-light! tracking-tight">
                    {service.title}
                  </Heading>
                  <p className="text-sm text-white/80 font-light leading-relaxed max-w-xs opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    {service.desc}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-200">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-[10px] font-light uppercase tracking-widest text-white/60 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </Link>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="text-center mt-16">
          <Link
            href="/services"
            className={cn(
              buttonVariants({ variant: 'default' }),
              "group rounded-none bg-foreground text-background px-12 py-6 text-xs uppercase tracking-widest hover:bg-accent transition-all duration-300"
            )}
          >
            <span className="flex items-center gap-3">
              View All Services
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </Link>
        </div>
      </SectionWrapper>

      {/* Final Call to Action */}
      <SectionWrapper className="bg-[#111111] text-white py-32 overflow-hidden relative">
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
                "w-full sm:w-auto group rounded-none bg-white text-black px-12 py-8 text-xs uppercase tracking-widest hover:bg-accent hover:text-white transition-all duration-300 overflow-hidden"
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
                "w-full sm:w-auto group rounded-none border border-white/20 bg-transparent px-12 py-8 text-xs uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all duration-300 overflow-hidden"
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


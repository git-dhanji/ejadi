import { SectionWrapper } from '@/components/common/SectionWrapper';
import { Heading } from '@/components/common/Heading';
import { Button, buttonVariants } from '@/components/ui/button';
import { Container } from '@/components/common/Container';
import Link from 'next/link';
import { HOME_CONTENT, SITE } from '@/constants/site';
import { cn } from '@/lib/utils';

export default function ServicesPage() {
  return (
    <div className="pt-24">
      {/* Hero Header */}
      <SectionWrapper className="bg-muted border-b border-border">
        <div className="max-w-4xl space-y-8">
          <p className="text-xs font-light uppercase tracking-[0.4em] text-accent">{HOME_CONTENT.servicesSummary.label}</p>
          <Heading size="3xl" className="font-light!">Our <span className="italic font-serif">expertise</span> in detail</Heading>
          <p className="text-xl text-secondary font-light leading-relaxed">
            We offer a comprehensive suite of design and architecture services, 
            blending technical mastery with artistic vision.
          </p>
        </div>
      </SectionWrapper>

      {/* Services List */}
      {HOME_CONTENT.servicesSummary.items.map((service, index) => (
        <SectionWrapper key={index} className={index % 2 === 1 ? 'bg-muted' : 'bg-background'}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
              <span className="text-xs font-light text-muted-foreground uppercase tracking-widest">0{index + 1}</span>
              <Heading size="xl">{service.title}</Heading>
              <p className="text-secondary font-light leading-relaxed text-lg">
                {service.longDesc}
              </p>
              <ul className="grid grid-cols-2 gap-4">
                {service.features?.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center text-sm font-light text-secondary">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Link 
                  href="/contact"
                  className={cn(
                    buttonVariants({ variant: 'outline' }),
                    "group relative rounded-none border border-border bg-transparent px-8 py-6 text-xs uppercase tracking-widest text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 overflow-hidden"
                  )}
                >
                  <span className="relative z-10 overflow-hidden h-5 inline-flex flex-col pointer-events-none">
                    <span className="inline-block transition-transform duration-500 ease-out group-hover:-translate-y-full">Request Consultation</span>
                    <span className="inline-block transition-transform duration-500 ease-out group-hover:-translate-y-full">Request Consultation</span>
                  </span>
                </Link>
              </div>
            </div>
            <div className={`relative aspect-video overflow-hidden ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
              <img 
                src={service.image} 
                alt={service.title} 
                className="object-cover w-full h-full transition-transform duration-1000 hover:scale-105"
              />
            </div>
          </div>
        </SectionWrapper>
      ))}

      {/* Shared CTA */}
      <SectionWrapper className="bg-primary text-primary-foreground py-24">
        <div className="text-center space-y-12">
          <Heading size="xl">Work with {SITE.name}</Heading>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              href="/contact"
              className={cn(
                buttonVariants({ variant: 'default' }),
                "w-full sm:w-auto group rounded-none bg-primary-foreground text-primary px-12 py-8 text-xs uppercase tracking-widest hover:bg-accent hover:text-primary-foreground transition-all duration-300 overflow-hidden"
              )}
            >
              <span className="relative z-10 overflow-hidden h-5 inline-flex flex-col pointer-events-none">
                <span className="inline-block transition-transform duration-500 ease-out group-hover:-translate-y-full">Contact Our Team</span>
                <span className="inline-block transition-transform duration-500 ease-out group-hover:-translate-y-full">Contact Our Team</span>
              </span>
            </Link>
            <Link 
              href="/projects"
              className={cn(
                buttonVariants({ variant: 'outline' }),
                "w-full sm:w-auto group rounded-none border border-primary-foreground/20 bg-transparent px-12 py-8 text-xs uppercase tracking-widest text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300 overflow-hidden"
              )}
            >
              <span className="relative z-10 overflow-hidden h-5 inline-flex flex-col pointer-events-none">
                <span className="inline-block transition-transform duration-500 ease-out group-hover:-translate-y-full">View Portfolio</span>
                <span className="inline-block transition-transform duration-500 ease-out group-hover:-translate-y-full">View Portfolio</span>
              </span>
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}

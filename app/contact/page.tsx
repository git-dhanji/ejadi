import { SectionWrapper } from '@/components/common/SectionWrapper';
import { Heading } from '@/components/common/Heading';
import { Button, buttonVariants } from '@/components/ui/button';
import { Container } from '@/components/common/Container';
import { CONTACT, SITE } from '@/constants/site';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactForm } from '@/features/contact/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen bg-background">
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="space-y-4">
              <p className="text-xs font-light uppercase tracking-[0.4em] text-accent">Contact</p>
              <Heading size="3xl" className="font-light!">Let's create something <br /><span className="italic font-serif">extraordinary</span></Heading>
            </div>

            <div className="space-y-8">
              <div className="space-y-2">
                <p className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
                  <Mail className="w-3 h-3" /> Inquiries
                </p>
                <p className="text-xl font-light">{CONTACT.email}</p>
              </div>
              <div className="space-y-2">
                <p className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
                  <Phone className="w-3 h-3" /> Call Us
                </p>
                <p className="text-xl font-light">{CONTACT.phone}</p>
              </div>
              <div className="space-y-2">
                <p className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
                  <MapPin className="w-3 h-3" /> Visit Studio
                </p>
                <p className="text-xl font-light leading-relaxed">
                  {CONTACT.address.line1}<br />
                  {CONTACT.address.line2}
                </p>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </SectionWrapper>
    </div>
  );
}

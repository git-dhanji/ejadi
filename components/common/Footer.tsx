import React from 'react';
import Link from 'next/link';
import { Container } from './Container';
import { Heading } from './Heading';
import { Logo } from './Logo';

import { SITE, CONTACT, SOCIALS } from '@/constants/site';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-16 md:py-24 text-foreground">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:gap-24">
          <div className="md:col-span-2 space-y-6">
            <Logo isDarkTheme={false} />
            <p className="max-w-md text-muted-foreground font-light leading-relaxed">
              Led by {SITE.author}, our studio {SITE.description}
            </p>
          </div>

          <div className="space-y-6">
            <Heading as="h4" size="xs" variant="sans" className="text-accent uppercase tracking-widest font-bold">Contact</Heading>
            <ul className="space-y-3 text-sm font-light text-muted-foreground">
              <li>{CONTACT.address.line1}</li>
              <li>{CONTACT.address.line2}</li>
              <li>{CONTACT.phone}</li>
              <li className="text-accent">{CONTACT.email}</li>
            </ul>
          </div>

          <div className="space-y-6">
            <Heading as="h4" size="xs" variant="sans" className="text-accent uppercase tracking-widest font-bold">Social</Heading>
            <ul className="space-y-3 text-sm font-light text-muted-foreground">
              {Object.entries(SOCIALS).map(([name, url]) => (
                <li key={name}>
                  <a href={url} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors capitalize">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between border-t border-border pt-8 md:mt-24 md:flex-row">
          <p className="text-xs font-light tracking-widest text-muted-foreground uppercase">
            &copy; {currentYear} {SITE.name}. All rights reserved.
          </p>
          <div className="mt-4 flex space-x-8 md:mt-0">
            <Link href="/privacy" className="text-xs font-light uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs font-light uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>

  );
};

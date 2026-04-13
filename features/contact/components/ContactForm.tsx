'use client';

import React from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { Heading } from '@/components/common/Heading';
import { cn } from '@/lib/utils';

export const ContactForm = () => {
  return (
    <div className="bg-background p-12 shadow-2xl border border-border space-y-8">
      <Heading size="sm">Send a Message</Heading>
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-bold">Name</label>
            <input type="text" className="w-full border-b border-border py-3 focus:outline-none focus:border-primary transition-colors bg-transparent" placeholder="Your name" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-bold">Email</label>
            <input type="email" className="w-full border-b border-border py-3 focus:outline-none focus:border-primary transition-colors bg-transparent" placeholder="Your email" />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest font-bold">Project Type</label>
          <select className="w-full border-b border-border py-3 focus:outline-none focus:border-primary transition-colors bg-transparent appearance-none">
            <option>Residential Interior</option>
            <option>Commercial Space</option>
            <option>Architecture Planning</option>
            <option>Other</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest font-bold">Message</label>
          <textarea className="w-full border-b border-border py-3 focus:outline-none focus:border-primary transition-colors bg-transparent min-h-[120px]" placeholder="Tell us about your project" />
        </div>
        <button className={cn(
          buttonVariants({ variant: 'default' }),
          "w-full group rounded-none bg-primary text-primary-foreground py-8 text-xs uppercase tracking-[0.3em] hover:bg-primary/80 transition-all overflow-hidden"
        )}>
          <span className="relative z-10 overflow-hidden h-5 inline-flex flex-col pointer-events-none">
            <span className="inline-block transition-transform duration-500 ease-out group-hover:-translate-y-full">Send Inquiry</span>
            <span className="inline-block transition-transform duration-500 ease-out group-hover:-translate-y-full">Send Inquiry</span>
          </span>
        </button>
      </form>
    </div>
  );
};

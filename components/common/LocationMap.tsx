'use client';

import React from 'react';
import { Container } from './Container';
import { MapPin } from 'lucide-react';
import { CONTACT } from '@/constants/site';

/**
 * LocationMap Component
 * Displays embedded Google Map with Ejadi Interior office location
 */
export const LocationMap = () => {
    const latitude = 22.72799157326752;
    const longitude = 75.89494973053397;
    const businessName = 'Ejadi Interior';

    // Google Maps embed URL with custom query for business name
    const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(businessName)},${latitude},${longitude}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

    // Google Maps link for "Get Directions"
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;

    return (
        <section className="relative w-full bg-background border-t border-border">
            <Container className="py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left: Location Info */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="space-y-4">
                            <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent">
                                Visit Our Studio
                            </p>
                            <h2 className="text-4xl md:text-5xl font-serif tracking-tighter leading-tight">
                                Come See Us
                            </h2>
                        </div>

                        <div className="space-y-6">
                            {/* Address */}
                            <div className="flex gap-4">
                                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                                        Address
                                    </p>
                                    <address className="text-lg font-light leading-relaxed not-italic">
                                        {CONTACT.address.line1}<br />
                                        {CONTACT.address.line2}
                                    </address>
                                </div>
                            </div>

                            {/* Working Hours */}
                            <div className="flex gap-4">
                                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M12 6v6l4 2"></path>
                                </svg>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                                        Working Hours
                                    </p>
                                    <p className="text-lg font-light">
                                        {CONTACT.workingHours}
                                    </p>
                                </div>
                            </div>

                            {/* Get Directions Button */}
                            <a
                                href={directionsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-all duration-300 group"
                            >
                                Get Directions
                                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Right: Map */}
                    <div className="lg:col-span-8">
                        <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden border border-border shadow-xl group">
                            <iframe
                                src={mapEmbedUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Ejadi Interior Location"
                                className="transition-all duration-500"
                            />

                            {/* Overlay hint */}
                            <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full border border-border opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">
                                    Click to Interact
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
};

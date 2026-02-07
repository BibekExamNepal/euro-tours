'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function AdventureCTA() {
    return (
        <section className="relative w-full min-h-[500px]  overflow-hidden">
            <Image
                src="/cta.jpg"
                alt="Nepal Adventure"
                fill
                className="object-cover"
                priority
                sizes="100vw"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="relative h-full min-h-[500px] flex items-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-xl lg:max-w-2xl">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                            Ready to Start Your Nepal Adventure?
                        </h2>

                        <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-lg">
                            Let us help you plan the perfect journey — from iconic treks to cultural escapes, all tailored to your travel style.
                        </p>

                        <Button
                            size="lg"
                            className="bg-[#8fbc3f] hover:bg-[#7da835] text-white font-semibold px-6 sm:px-8 py-5 sm:py-6 rounded-full text-sm sm:text-base transition-all duration-300 group shadow-lg hover:shadow-xl"
                        >
                            Book Your Adventure
                            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
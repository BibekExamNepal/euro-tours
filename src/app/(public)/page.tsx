'use client';

import React from 'react';

import HeroSection from "@/components/home/hero-section";
import ExpeditionSection from "@/components/home/Expeditionsection";
import HeritageTrails from "@/components/home/Heritagetrails";
import CtaSection from "@/components/home/cta-section";
import FAQSection from "@/components/home/Faqsection";
import DestinationTravel from "@/components/home/Destinationtravel";
import TestimonialsSection from "@/components/home/Testimonialssection";
import BlogsSection from "@/components/home/Blogssection";
import WhyUsSection from "@/components/home/WhyUsSection";


export default function TravelPage() {
    return (
        <main>
            <div className="relative min-h-screen w-full overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
                    style={{
                        backgroundImage:
                            "url('/hero.jpg')",
                    }}
                />
                <div className="absolute inset-0 bg-black/50"/>


                {/* Hero Section Component */}
                <HeroSection/>

                {/* Decorative Elements */}


            </div>
            <WhyUsSection/>
            <ExpeditionSection/>
            <HeritageTrails/>
            <DestinationTravel/>

            <TestimonialsSection/>
            <div className={''}>
                <BlogsSection/>
            </div>
            <CtaSection/>
            <FAQSection/>
        </main>
    );
}
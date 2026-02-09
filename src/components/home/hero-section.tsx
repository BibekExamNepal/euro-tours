'use client';

import React, { memo } from 'react';
import Image from 'next/image';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel';
import { useCarousel } from '@/hook/useCarousel';
import { cn } from "@/lib/utils";

interface Destination {
    title: string;
    image: string;
    alt?: string;
}

const destinations: Destination[] = [
    {
        title: 'Everest Base Camp',
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80',
        alt: 'Scenic view of Everest Base Camp with snow-capped mountains',
    },
    {
        title: 'Poon Hill Trek',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
        alt: 'Beautiful sunrise view from Poon Hill Trek',
    },
    {
        title: 'Ama Yangri',
        image: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800&q=80',
        alt: 'Panoramic mountain view from Ama Yangri peak',
    },
    {
        title: 'Manaslu Circuit',
        image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&q=80',
        alt: 'Trekking path through the Manaslu Circuit trail',
    },
];

function HeroSection() {
    const { setApi, autoplay, prev, next } = useCarousel({ delay: 3000 });

    return (
        <section
            className="relative w-full sm:min-h-screen"
            aria-label="Hero section featuring Annapurna Base Camp"
        >
            <div className="absolute inset-0 z-0" aria-hidden="true">
                <Image
                    src="/hero.jpg"
                    alt=""
                    fill
                    className="object-cover"
                    priority
                    quality={85}
                    sizes="100vw"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwABmQ/9k="
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
            </div>

            <div className="relative z-10 min-h-screen flex items-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
                    <div className="flex flex-col lg:flex-row justify-center lg:justify-between gap-8 lg:gap-10 items-center">

                        <div className="flex flex-col justify-center space-y-4 sm:space-y-6 max-w-2xl w-full lg:w-auto text-center lg:text-left">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                                ANNAPURNA BASE CAMP
                            </h1>

                            <p className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed max-w-xl mx-auto lg:mx-0">
                                Exploring new areas can be challenging but you don&apos;t have to
                                do it alone. Join us as we navigate breathtaking landscapes and
                                unforgettable journeys
                            </p>

                            <div className="flex justify-center lg:justify-start">
                                <Button
                                    className="bg-main-color hover:bg-main-color/90 text-white font-semibold px-6 sm:px-7 py-5 sm:py-6 text-sm sm:text-base rounded-lg transition-all hover:scale-105 active:scale-95 shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                                    aria-label="View details about Annapurna Base Camp trek"
                                >
                                    View Details
                                    <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                                </Button>
                            </div>
                        </div>

                        <div className="relative w-full lg:w-[60%] lg:pl-8 lg:-mr-20 max-w-none">

                        <Carousel
                                setApi={setApi}
                                plugins={[autoplay.current]}
                                opts={{ align: 'start', loop: true }}
                                className="w-full"
                                aria-label="Featured trekking destinations"
                            >
                                <CarouselContent className="-ml-4 sm:-ml-6 items-end">
                                    {destinations.map((destination, index) => (
                                        <CarouselItem
                                            key={`${destination.title}-${index}`}
                                            className="pl-4 sm:pl-6 basis-[85%] sm:basis-[60%] lg:basis-[45%]"


                                        >
                                            <article className="group relative transition-all duration-500 hover:scale-105 focus-within:scale-105">
                                                <h3 className="text-white text-sm sm:text-base font-semibold mb-2 sm:mb-3 pl-2 drop-shadow-lg text-center">
                                                    {destination.title}
                                                </h3>

                                                <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 w-full overflow-hidden rounded-lg shadow-2xl">
                                                <Image
                                                        src={destination.image}
                                                        alt={destination.alt || destination.title}
                                                        fill
                                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                        sizes="(max-width: 640px) 85vw, (max-width: 768px) 55vw, (max-width: 1024px) 45vw, 35vw"
                                                        loading={index === 0 ? 'eager' : 'lazy'}
                                                        quality={80}
                                                    />
                                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" aria-hidden="true" />
                                                </div>
                                            </article>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>

                                <div
                                    className="absolute -bottom-14 sm:-bottom-12 left-1/2 -translate-x-1/2 flex gap-3 sm:gap-4"
                                    role="group"
                                    aria-label="Carousel navigation"
                                >
                                    <button
                                        onClick={prev}
                                        className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white hover:bg-black/60 focus:bg-black/60 transition-all flex items-center justify-center shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                                        aria-label="Previous destination"
                                        type="button"
                                    >
                                        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                                    </button>

                                    <button
                                        onClick={next}
                                        className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white hover:bg-black/60 focus:bg-black/60 transition-all flex items-center justify-center shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                                        aria-label="Next destination"
                                        type="button"
                                    >
                                        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                                    </button>
                                </div>
                            </Carousel>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default memo(HeroSection);
'use client';

import React from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel';

import Image from 'next/image';
import {useCarousel} from "@/hook/useCarousel";

const destinations = [
    {
        title: 'Everest Base Camp',
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80',
    },
    {
        title: 'Poon Hill Trek',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    },
    {
        title: 'Ama Yangri',
        image: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800&q=80',
    },
    {
        title: 'Manaslu Circuit',
        image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&q=80',
    },
];

export default function HeroSection() {
    const { setApi, autoplay, prev, next } = useCarousel({ delay: 3000 });

    return (
        <section className="relative w-full min-h-screen overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero.jpg"
                    alt="Mountain landscape background"
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                />
                <div
                    className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 dark:from-black/80 dark:via-black/60 dark:to-black/40"
                    aria-hidden="true"
                />
            </div>

            <div className="relative z-10 min-h-screen flex items-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">

                        <div className="flex flex-col justify-center space-y-6 sm:space-y-8 max-w-2xl">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                                ANNAPURNA BASE CAMP
                            </h1>
                            <p className="text-sm sm:text-base lg:text-lg text-gray-200 dark:text-gray-100 leading-relaxed">
                                Exploring new areas can be challenging but you don&#39;t have to do it alone. Join us as we navigate breathtaking landscapes and unforgettable journeys
                            </p>
                            <div>
                                <Button
                                    className="bg-[#90AC58] hover:bg-[#7a9449] dark:bg-[#a8d955] dark:hover:bg-[#90AC58] text-white font-semibold px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base rounded-lg transition-all hover:scale-105 shadow-xl focus-visible:ring-2 focus-visible:ring-[#90AC58] dark:focus-visible:ring-[#a8d955] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900"
                                    aria-label="View Annapurna Base Camp details"
                                >
                                    View Details
                                    <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                                </Button>
                            </div>
                        </div>

                        <div className="relative w-full">
                            <Carousel
                                setApi={setApi}
                                plugins={[autoplay.current]}
                                className="w-full"
                                opts={{
                                    align: "center",
                                    loop: true,
                                }}
                            >
                                <CarouselContent className="-ml-2 sm:-ml-3 md:-ml-4">
                                    {destinations.map((destination, index) => (
                                        <CarouselItem
                                            key={index}
                                            className="pl-2 sm:pl-3 md:pl-4 basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/2 xl:basis-1/3"
                                        >
                                            <div className="relative aspect-[3/4] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl dark:shadow-gray-950/70 group">
                                                <Image
                                                    src={destination.image}
                                                    alt={`${destination.title} trekking destination`}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
                                                    loading={index < 2 ? 'eager' : 'lazy'}
                                                    priority={index < 2}
                                                    quality={85}
                                                />
                                                <div
                                                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                                                    aria-hidden="true"
                                                />
                                                <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6">
                                                    <h3 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold drop-shadow-2xl">
                                                        {destination.title}
                                                    </h3>
                                                </div>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>

                                <div
                                    className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 flex gap-2 sm:gap-3"
                                    role="group"
                                    aria-label="Carousel navigation"
                                >
                                    <button
                                        onClick={prev}
                                        className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-black/40 dark:bg-black/60 backdrop-blur-md border border-white/20 dark:border-white/30 text-white hover:bg-black/60 dark:hover:bg-black/80 transition-all flex items-center justify-center shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                                        aria-label="Previous destination"
                                    >
                                        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                                    </button>
                                    <button
                                        onClick={next}
                                        className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-black/40 dark:bg-black/60 backdrop-blur-md border border-white/20 dark:border-white/30 text-white hover:bg-black/60 dark:hover:bg-black/80 transition-all flex items-center justify-center shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                                        aria-label="Next destination"
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
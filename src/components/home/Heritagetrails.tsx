'use client';

import React, { useCallback } from 'react';
import {ArrowUpRight, ChevronLeft, ChevronRight} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {Carousel, CarouselContent, CarouselItem} from '@/components/ui/carousel';
import Image from 'next/image';
import {cn} from "@/lib/utils";
import {useCarousel} from '@/hook/useCarousel';

interface HeritageTrail {
    title: string;
    description: string;
    image: string;
}

const heritageTrails: HeritageTrail[] = [
    {
        title: 'Kathmandu Valley Heritage',
        description:
            'A cultural journey through historic temples, palaces, and traditions at the heart of Nepal.',
        image: '/heritage1.jpg',
    },
    {
        title: 'Boudhanath Stupa',
        description:
            'One of the largest stupas in Nepal and a UNESCO World Heritage Site.',
        image: '/heritage2.jpg',
    },
    {
        title: 'Swayambhunath Temple',
        description:
            'Ancient religious architecture atop a hill in Kathmandu Valley.',
        image: '/heritage3.jpg',
    },
    {
        title: 'Pashupatinath Temple',
        description:
            'Sacred Hindu temple complex on the banks of Bagmati River.',
        image: '/heritage4.jpg',
    },
    {
        title: 'Durbar Square',
        description:
            'Sacred Hindu temple complex on the banks of Bagmati River.',
        image: '/heritage4.jpg',
    },
];

export default function HeritageTrails() {
    const { setApi, autoplay, prev, next } = useCarousel({ delay: 3000 });

    const handleKeyDown = useCallback((e: React.KeyboardEvent, action: () => void) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            action();
        }
    }, []);

    return (
        <section
            className="w-full  dark:from-gray-900 dark:to-gray-950 py-12 sm:py-16 lg:py-20 transition-colors duration-300"
            aria-labelledby="heritage-heading"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 sm:mb-12">
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-2 font-medium uppercase tracking-wide">
                        Expeditions
                    </p>
                    <h2
                        id="heritage-heading"
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
                    >
                        HERITAGE TRAILS OF NEPAL
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Walk through centuries of history, art, and architecture.
                    </p>
                </div>

                <div className="relative">
                    <div className="absolute -top-20 sm:-top-16 right-0 flex gap-2 sm:gap-3 z-10">
                        <button
                            onClick={prev}
                            onKeyDown={(e) => handleKeyDown(e, prev)}
                            className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 flex items-center justify-center shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:focus-visible:ring-white focus-visible:ring-offset-2"
                            aria-label="Previous heritage site"
                        >
                            <ChevronLeft className="h-5 w-5" aria-hidden="true"/>
                        </button>
                        <button
                            onClick={next}
                            onKeyDown={(e) => handleKeyDown(e, next)}
                            className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 flex items-center justify-center shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:focus-visible:ring-white focus-visible:ring-offset-2"
                            aria-label="Next heritage site"
                        >
                            <ChevronRight className="h-5 w-5" aria-hidden="true"/>
                        </button>
                    </div>

                    <Carousel
                        setApi={setApi}
                        plugins={[autoplay.current]}
                        className="w-full"
                        opts={{align: 'start', loop: true}}
                    >
                        <CarouselContent className="-ml-2 sm:-ml-4">
                            {heritageTrails.map((trail, index) => (
                                <CarouselItem
                                    key={`${trail.title}-${index}`}
                                    className="pl-2 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                                >
                                    <article
                                        className="group relative bg-gray-900 dark:bg-gray-950 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl dark:shadow-2xl h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl dark:hover:shadow-3xl"
                                        role="article"
                                        aria-label={trail.title}
                                    >
                                        <div className="relative h-72 sm:h-80 lg:h-96 overflow-hidden rounded-2xl">
                                            <Image
                                                src={trail.image}
                                                alt={`${trail.title} - ${trail.description}`}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110 rounded-2xl"
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                                                priority={index < 2}
                                                quality={85}
                                            />
                                            <div
                                                className="absolute inset-0 bg-black/30 group-hover:bg-black/70 transition-all duration-500"
                                                aria-hidden="true"
                                            />

                                            <div
                                                className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 opacity-0 translate-y-6 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0">
                                                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3">
                                                    {trail.title}
                                                </h3>
                                                <p className="text-gray-200 text-xs sm:text-sm mb-4 sm:mb-6 line-clamp-2">
                                                    {trail.description}
                                                </p>
                                                <Button
                                                    className="w-full bg-[#90AC58] hover:bg-[#7a9449] dark:bg-[#90AC58] dark:hover:bg-[#7a9449] text-white font-semibold py-4 sm:py-5 rounded-full transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#90AC58] focus-visible:ring-offset-2"
                                                    aria-label={`View details about ${trail.title}`}
                                                >
                                                    View Details
                                                    <ArrowUpRight
                                                        className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                                        aria-hidden="true"
                                                    />
                                                </Button>
                                            </div>
                                        </div>
                                    </article>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>

                <div className="flex justify-center mt-8 sm:mt-12">
                    <Button
                        variant="outline"
                        className={cn(
                            'px-8 sm:px-12 py-5 sm:py-6 rounded-full text-sm sm:text-base lg:text-lg font-semibold border-2 border-[#433783] dark:border-[#5a4ba0] text-gray-800 dark:text-gray-200 hover:bg-[#433783] dark:hover:bg-[#5a4ba0] hover:text-white dark:hover:text-white transition-all duration-300 group focus-visible:ring-2 focus-visible:ring-[#433783] dark:focus-visible:ring-[#5a4ba0] focus-visible:ring-offset-2'
                        )}
                        aria-label="View more heritage trails"
                    >
                        View More
                        <ChevronRight
                            className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1"
                            aria-hidden="true"
                        />
                    </Button>
                </div>
            </div>
        </section>
    );
}
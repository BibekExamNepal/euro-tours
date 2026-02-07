'use client';

import React, { useCallback } from 'react';
import { ChevronRight, ChevronLeft, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel';
import Image from 'next/image';

import {cn} from "@/lib/utils";
import {useCarousel} from "@/hook/useCarousel";

interface Trek {
    title: string;
    price: string;
    description: string;
    difficulty: string;
    duration: string;
    altitude: string;
    image: string;
}

const expeditionTreks: Trek[] = [
    {
        title: 'Everest Base Camp',
        price: 'Rs 10,000',
        description:
            "Experience the world's most iconic trek as you journey through Sherpa villages, ancient monasteries, and dramatic Himalayan landscapes to the base of Mount...",
        difficulty: 'Moderate',
        duration: '5 days',
        altitude: '~5,000m',
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80',
    },
    {
        title: 'Gokyo Trek',
        price: 'Rs 5,000',
        description:
            'Discover the serene beauty of the Gokyo Valley. Famous for its turquoise glacial lakes and panoramic views of Everest, Cho Oyu, and Makalu. A quieter alter...',
        difficulty: 'Easy',
        duration: '10 days',
        altitude: '~4,000m',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    },
    {
        title: 'Langtang Valley Trek',
        price: 'Rs 9,000',
        description:
            'Explore the scenic Langtang valley, known for its lush forests, alpine meadows, and traditional Tamang villages. Located close to Kathmandu, this trek blenc...',
        difficulty: 'Moderate',
        duration: '8 days',
        altitude: '~4,000m',
        image: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800&q=80',
    },
    {
        title: 'Annapurna Circuit',
        price: 'Rs 12,000',
        description:
            'Journey through diverse landscapes, from subtropical villages to high mountain passes...',
        difficulty: 'Hard',
        duration: '12 days',
        altitude: '~5,400m',
        image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&q=80',
    },
    {
        title: 'Manaslu Circuit',
        price: 'Rs 11,000',
        description:
            'Trek around the eighth highest mountain in the world, experiencing remote villages and stunning mountain vistas...',
        difficulty: 'Hard',
        duration: '14 days',
        altitude: '~5,100m',
        image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
    },
];


export default function ExpeditionTreks() {
    const { setApi, autoplay, activeIndex, prev, next, scrollTo } = useCarousel({ delay: 3000 });

    const handleKeyDown = useCallback((e: React.KeyboardEvent, action: () => void) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            action();
        }
    }, []);

    return (
        <section
            className="w-full bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 py-12 sm:py-16 lg:py-20 xl:py-24 transition-colors duration-300"
            aria-labelledby="expedition-heading"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-350">
                <div className="flex flex-col items-center text-center mb-10 sm:mb-12 lg:mb-16">
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium tracking-wide uppercase">
                        Expeditions
                    </p>
                    <h2
                        id="expedition-heading"
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 max-w-4xl"
                    >
                        EXPEDITION TREKS FOR THE ADVENTUROUS
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl px-4">
                        If you&apos;re looking for an adventure that will take you outside your comfort zone and into
                        the unknown, then expedition travel is perfect choice for you.
                    </p>
                </div>

                <div className="relative">
                    <div className="absolute -top-16 sm:-top-20 right-0 md:right-4 flex gap-3 z-20">
                        <button
                            onClick={prev}
                            onKeyDown={(e) => handleKeyDown(e, prev)}
                            className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 flex items-center justify-center shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900"
                            aria-label="Previous trek"
                        >
                            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true"/>
                        </button>
                        <button
                            onClick={next}
                            onKeyDown={(e) => handleKeyDown(e, next)}
                            className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 flex items-center justify-center shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900"
                            aria-label="Next trek"
                        >
                            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true"/>
                        </button>
                    </div>

                    <Carousel
                        setApi={setApi}
                        plugins={[autoplay.current]}
                        className="w-full"
                        opts={{
                            align: 'start',
                            loop: true,
                        }}
                    >
                        <CarouselContent className="-ml-3 md:-ml-4">
                            {expeditionTreks.map((trek, index) => (
                                <CarouselItem
                                    key={`${trek.title}-${index}`}
                                    className="pl-3 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                                >
                                    <article
                                        className="bg-linear-to-b from-gray-900 to-black dark:from-gray-800 dark:to-gray-950 rounded-3xl overflow-hidden shadow-xl dark:shadow-2xl hover:shadow-2xl dark:hover:shadow-gray-950/90 transition-all duration-300 h-full flex flex-col group">
                                        <div className="relative h-64 sm:h-72 md:h-80 lg:h-[340px] overflow-hidden">
                                            <Image
                                                src={trek.image}
                                                alt={`${trek.title} - ${trek.difficulty} trek, ${trek.duration}`}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                                                priority={index < 3}
                                                quality={85}
                                            />
                                            <div
                                                className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent"
                                                aria-hidden="true"
                                            />

                                            <div className="absolute bottom-4 sm:bottom-5 left-5 sm:left-6 right-5 sm:right-6">
                                                <div className="flex justify-between items-end gap-3">
                                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight">
                                                        {trek.title}
                                                    </h3>
                                                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-white whitespace-nowrap"
                                                       aria-label={`Price: ${trek.price}`}>
                                                        {trek.price}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-5 sm:p-6 flex-1 flex flex-col">
                                            <p className="text-gray-300 dark:text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 line-clamp-3">
                                                {trek.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2 mb-5 sm:mb-6" role="list"
                                                 aria-label="Trek details">
                                                <Badge
                                                    variant="default"
                                                    className={cn('text-xs px-3 py-1 rounded-md border-0')}
                                                    role="listitem"
                                                >
                                                    {trek.difficulty}
                                                </Badge>
                                                <Badge
                                                    variant="default"
                                                    className=" text-white text-xs px-3 py-1 rounded-md border-0"
                                                    role="listitem"
                                                >
                                                    {trek.duration}
                                                </Badge>
                                                <Badge
                                                    variant="default"
                                                    className="text-white text-xs px-3 py-1 rounded-md border-0"
                                                    role="listitem"
                                                >
                                                    {trek.altitude}
                                                </Badge>
                                            </div>

                                            <Button
                                                className="w-full bg-white dark:bg-gray-100 text-black hover:bg-gray-100 dark:hover:bg-gray-200 font-semibold py-5 sm:py-6 rounded-full transition-all duration-300 mt-auto text-sm sm:text-base group/button focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 dark:focus-visible:ring-offset-gray-950"
                                                aria-label={`Book ${trek.title} trek now`}
                                            >
                                                Book Now
                                                <ArrowUpRight
                                                    className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
                                                    aria-hidden="true"/>
                                            </Button>
                                        </div>
                                    </article>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>

                    <div
                        className="flex justify-center gap-2 mt-8 md:hidden"
                        role="tablist"
                        aria-label="Trek carousel indicators"
                    >
                        {expeditionTreks.map((trek, index) => (
                            <button
                                key={index}
                                onClick={() => scrollTo(index)}
                                className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-950 ${
                                    activeIndex === index
                                        ? 'w-8 bg-gray-900 dark:bg-white'
                                        : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-500 dark:hover:bg-gray-400'
                                }`}
                                aria-label={`Go to ${trek.title}`}
                                aria-current={activeIndex === index ? 'true' : 'false'}
                                role="tab"
                                aria-selected={activeIndex === index}
                            />
                        ))}
                    </div>
                </div>

                <div className="flex justify-center mt-10 sm:mt-12 lg:mt-16">
                    <Button
                        variant="outline"
                        className="px-8 sm:px-12 py-5 sm:py-6 rounded-full text-sm sm:text-base font-semibold border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 transition-all duration-300 group focus-visible:ring-2 focus-visible:ring-gray-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-50"
                        aria-label="View more expedition treks"
                    >
                        View More
                        <ChevronRight
                            className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                            aria-hidden="true"/>
                    </Button>
                </div>
            </div>
        </section>
    );
}
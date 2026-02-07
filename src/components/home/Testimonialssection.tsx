'use client';

import React, {useCallback, useEffect, useState} from 'react';
import {ChevronLeft, ChevronRight, Star} from 'lucide-react';
import Image from 'next/image';
import {Card, CardContent} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import type {CarouselApi} from '@/components/ui/carousel';
import {Carousel, CarouselContent, CarouselItem} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

interface Testimonial {
    id: number;
    name: string;
    country: string;
    rating: number;
    image: string;
    testimonial: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Daniel Weber',
        country: 'United States of America',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop',
        testimonial: 'The Gokyo Trek exceeded all my expectations. Peaceful trails, stunning lakes, and excellent planning. Everything from accommodation to safety was handled professionally.',
    },
    {
        id: 2,
        name: 'Sarah Mitchell',
        country: 'United Kingdom',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop',
        testimonial: 'The Everest Base Camp trek was perfectly organized, and our guide was incredibly supportive throughout the journey. Nepal is beautiful, and this team made it even better.',
    },
    {
        id: 3,
        name: 'Lucas Moreau',
        country: 'Belgium',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&auto=format&fit=crop',
        testimonial: 'Great service from start to finish. The guides were knowledgeable, friendly, and truly passionate about the mountains. I would definitely book another trek with them.',
    },
    {
        id: 4,
        name: 'Emma Johnson',
        country: 'Australia',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300&auto=format&fit=crop',
        testimonial: 'An unforgettable experience! The team took care of every detail, making the journey smooth and enjoyable. Highly recommend for anyone wanting to explore Nepal.',
    },
    {
        id: 5,
        name: 'Hiroshi Tanaka',
        country: 'Japan',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
        testimonial: 'Professional, reliable, and genuinely caring guides. The Annapurna Circuit was the adventure of a lifetime, and I felt safe and supported every step of the way.',
    },
];

export default function TestimonialsSection() {
    const [carouselApi, setCarouselApi] = useState<CarouselApi>();
    const [currentIndex, setCurrentIndex] = useState(0);

    const autoplayPlugin = React.useRef(
        Autoplay({
            delay: 4000,
            stopOnInteraction: true,
            stopOnMouseEnter: true,
        })
    );

    const scrollPrev = useCallback(() => {
        carouselApi?.scrollPrev();
    }, [carouselApi]);

    const scrollNext = useCallback(() => {
        carouselApi?.scrollNext();
    }, [carouselApi]);

    useEffect(() => {
        if (!carouselApi) return;

        const updateScrollState = () => {
            setCurrentIndex(carouselApi.selectedScrollSnap());
        };

        updateScrollState();
        carouselApi.on('select', updateScrollState);
        carouselApi.on('reInit', updateScrollState);

        return () => {
            carouselApi.off('select', updateScrollState);
            carouselApi.off('reInit', updateScrollState);
        };
    }, [carouselApi]);

    const renderStars = useCallback((rating: number) => {
        return Array.from({length: rating}).map((_, index) => (
            <Star
                key={index}
                className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400"
                aria-hidden="true"
            />
        ));
    }, []);

    return (
        <section
            className="relative w-full py-16 sm:py-20 lg:py-24 xl:py-28 bg-gray-100 dark:bg-gray-900 overflow-hidden"
            aria-labelledby="testimonials-heading"
        >
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
                    alt=""
                    fill
                    className="object-cover opacity-20 dark:opacity-30"
                    priority={false}
                    sizes="100vw"
                    quality={75}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-100/95 via-gray-100/90 to-gray-100/95 dark:from-gray-900/95 dark:via-gray-900/90 dark:to-gray-900/95"/>
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex flex-col md:flex-row items-center justify-between mb-12 sm:mb-16 lg:mb-20 gap-6">
                    <div className="hidden md:block w-24" aria-hidden="true"/>

                    <h2
                        id="testimonials-heading"
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight uppercase text-center"
                    >
                        Our Testimonials
                    </h2>

                    <div className="hidden md:flex items-center gap-3">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={scrollPrev}
                            className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-800 hover:scale-105 group transition-all duration-300"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft
                                className="w-5 h-5 lg:w-6 lg:h-6 group-hover:-translate-x-0.5 transition-transform"
                                aria-hidden="true"
                            />
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={scrollNext}
                            className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-800 hover:scale-105 group transition-all duration-300"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight
                                className="w-5 h-5 lg:w-6 lg:h-6 group-hover:translate-x-0.5 transition-transform"
                                aria-hidden="true"
                            />
                        </Button>
                    </div>
                </div>

                <Carousel
                    setApi={setCarouselApi}
                    plugins={[autoplayPlugin.current]}
                    className="w-full"
                    opts={{
                        align: 'start',
                        loop: true,
                        slidesToScroll: 1,
                    }}
                >
                    <CarouselContent className="-ml-3 md:-ml-4 lg:-ml-6">
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem
                                key={testimonial.id}
                                className="pl-3 md:pl-4 lg:pl-6 basis-full sm:basis-1/2 lg:basis-1/3"
                            >
                                <article className="pt-12 sm:pt-14 h-full">
                                    <Card
                                        className="relative rounded-2xl sm:rounded-3xl shadow-xl dark:shadow-2xl border border-gray-200 dark:border-gray-800 overflow-visible bg-white dark:bg-gray-800 hover:shadow-2xl dark:hover:shadow-3xl transition-all duration-300 h-full flex flex-col"
                                    >
                                        <div className="absolute -top-10 sm:-top-12 left-6 sm:left-8 z-10">
                                            <div
                                                className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden ring-4 ring-white dark:ring-gray-800 shadow-xl"
                                            >
                                                <Image
                                                    src={testimonial.image}
                                                    alt={`${testimonial.name} from ${testimonial.country}`}
                                                    fill
                                                    className="object-cover"
                                                    sizes="(max-width: 640px) 80px, 96px"
                                                    loading={index < 3 ? 'eager' : 'lazy'}
                                                />
                                            </div>
                                        </div>

                                        <CardContent
                                            className="pt-12 sm:pt-14 px-5 sm:px-6 lg:px-8 pb-6 sm:pb-8 flex-1 flex flex-col"
                                        >
                                            <div className="flex justify-between items-start gap-3 mb-5 sm:mb-6">
                                                <div className="min-w-0 flex-1">
                                                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1">
                                                        {testimonial.name}
                                                    </h3>
                                                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 truncate">
                                                        {testimonial.country}
                                                    </p>
                                                </div>
                                                <div
                                                    className="flex gap-0.5 flex-shrink-0"
                                                    role="img"
                                                    aria-label={`Rating: ${testimonial.rating} out of 5 stars`}
                                                >
                                                    {renderStars(testimonial.rating)}
                                                </div>
                                            </div>

                                            <blockquote className="flex-1">
                                                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                                                    &ldquo;{testimonial.testimonial}&rdquo;
                                                </p>
                                            </blockquote>
                                        </CardContent>
                                    </Card>
                                </article>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>

                <div
                    className="flex justify-center items-center gap-2 sm:gap-3 mt-12 sm:mt-16"
                    role="tablist"
                    aria-label="Testimonial navigation"
                >
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => carouselApi?.scrollTo(index)}
                            className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 ${
                                index === currentIndex
                                    ? 'w-8 sm:w-10 bg-gray-900 dark:bg-white'
                                    : 'w-2 sm:w-2.5 bg-gray-400 dark:bg-gray-600 hover:bg-gray-600 dark:hover:bg-gray-400'
                            }`}
                            aria-label={`Go to testimonial ${index + 1} of ${testimonials.length}`}
                            aria-current={index === currentIndex ? 'true' : 'false'}
                            role="tab"
                            aria-selected={index === currentIndex}
                        />
                    ))}
                </div>

                <div className="flex md:hidden justify-center gap-3 mt-8 sm:mt-10">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={scrollPrev}
                        className="w-12 h-12 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-800 hover:scale-105 group transition-all duration-300"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft
                            className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform"
                            aria-hidden="true"
                        />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={scrollNext}
                        className="w-12 h-12 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-800 hover:scale-105 group transition-all duration-300"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight
                            className="w-5 h-5 group-hover:translate-x-0.5 transition-transform"
                            aria-hidden="true"
                        />
                    </Button>
                </div>
            </div>
        </section>
    );
}
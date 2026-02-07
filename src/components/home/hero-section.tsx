'use client';

import React from 'react';
import Image from 'next/image';
import {ChevronRight, ChevronLeft} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel';
import {useCarousel} from '@/hook/useCarousel';
import {cn} from "@/lib/utils";

const destinations = [
    {
        title: 'Everest Base Camp',
        image:
            'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80',
    },
    {
        title: 'Poon Hill Trek',
        image:
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    },
    {
        title: 'Ama Yangri',
        image:
            'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800&q=80',
    },
    {
        title: 'Manaslu Circuit',
        image:
            'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&q=80',
    },
];

export default function HeroSection() {
    const {setApi, autoplay, prev, next} = useCarousel({delay: 3000});

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
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"/>
            </div>

            <div className="relative z-10 min-h-screen flex items-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                        <div className="flex flex-col justify-center space-y-6 max-w-2xl">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                ANNAPURNA BASE CAMP
                            </h1>

                            <p className="text-base lg:text-lg text-gray-200 leading-relaxed">
                                Exploring new areas can be challenging but you don&#39;t have to
                                do it alone. Join us as we navigate breathtaking landscapes and
                                unforgettable journeys
                            </p>

                            <div>
                                <Button
                                    className="bg-main-color hover:bg-main-color/80 text-white font-semibold px-7 py-6 text-base rounded-lg transition-all hover:scale-105 shadow-xl">
                                    View Details
                                    <ChevronRight className="ml-2 h-5 w-5"/>
                                </Button>
                            </div>
                        </div>

                        <div className="relative w-full lg:pl-8 lg:-mr-20">
                            <Carousel
                                setApi={setApi}
                                plugins={[autoplay.current]}
                                opts={{align: 'center', loop: true}}
                                className="w-full "
                            >
                                <CarouselContent className="-ml-6 ">
                                    {destinations.map((destination, index) => (
                                        <CarouselItem
                                            key={index}
                                            className={cn('pl-6 basis-[75%] sm:basis-[55%] lg:basis-[45%] xl:basis-[35%] h-[500px]')}
                                        >
                                            <div className="group relative transition-all duration-500 hover:scale-105">

                                                <h3 className="text-white text-base font-semibold mb-3 pl-2 drop-shadow-lg text-center">
                                                    {destination.title}
                                                </h3>

                                                <div
                                                    className="relative min-h-[500px] aspect-square rounded-3xl overflow-hidden shadow-2xl">
                                                    <Image
                                                        src={destination.image}
                                                        alt={destination.title}
                                                        fill
                                                        className="object-cover transition-transform duration-700 group-hover:scale-110 w-full h-full"
                                                        sizes="(max-width: 768px) 80vw, 33vw"
                                                    />
                                                    <div
                                                        className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition"/>
                                                </div>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>

                                <div className="absolute  left-1/2 -translate-x-1/2 flex gap-4">
                                    <button
                                        onClick={prev}
                                        className="h-10 w-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white hover:bg-black/60 transition-all flex items-center justify-center shadow-lg"
                                    >
                                        <ChevronLeft className="h-6 w-6"/>
                                    </button>

                                    <button
                                        onClick={next}
                                        className="h-10 w-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white hover:bg-black/60 transition-all flex items-center justify-center shadow-lg"
                                    >
                                        <ChevronRight className="h-6 w-6"/>
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

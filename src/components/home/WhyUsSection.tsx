'use client';

import React from 'react';
import {ArrowRight, Building2, Car, Leaf, Plane} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {cn} from "@/lib/utils";

interface Service {
    icon: React.ReactNode;
    title: string;
    description: string;
    image: string;
    link: string;
}

const services: Service[] = [
    {
        icon: <Plane className="h-6 w-6 sm:h-7 sm:w-7"/>,
        title: 'Air Tickets',
        description: 'Book carbon-offset flights for guilt-free travel.',
        image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
        link: '/air-tickets',
    },
    {
        icon: <Leaf className="h-6 w-6 sm:h-7 sm:w-7"/>,
        title: 'Tour Packages',
        description: 'Curated eco-friendly tours to sustainable destinations.',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
        link: '/tour-packages',
    },
    {
        icon: <Car className="h-6 w-6 sm:h-7 sm:w-7"/>,
        title: 'Vehicle Hire',
        description: 'Travel with low-emission vehicles for a sustainable journey',
        image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
        link: '/vehicle-hire',
    },
    {
        icon: <Building2 className="h-6 w-6 sm:h-7 sm:w-7"/>,
        title: 'Hotel Bookings',
        description: 'Travel with low-emission vehicles for a sustainable journey',
        image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80',
        link: '/hotel-bookings',
    },
];

export default function WhyUsSection() {
    return (
        <section
            className="relative w-full py-16 sm:py-20 lg:py-24 xl:py-28 overflow-hidden"
            aria-labelledby="why-us-heading"
        >
            <div className="absolute inset-0 z-0">
                <Image
                    src="/why-us-bg.png"
                    alt=""
                    fill
                    className="object-cover"
                    loading="lazy"
                    quality={85}
                    sizes="100vw"
                />
                <div
                    className="absolute inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
                    aria-hidden="true"
                />
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <header className="text-center mb-10 sm:mb-12 lg:mb-16">
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 font-medium">
                        Why Us?
                    </p>
                    <h2
                        id="why-us-heading"
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight max-w-5xl mx-auto px-4"
                    >
                        TRAVEL MADE EASY, EXPERIENCES MADE MEMORABLE
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed px-4 font-sans">
                        We go beyond bookings to deliver meaningful travel experiences. With flexible air ticket
                        options, expertly designed tours, comfortable accommodations, and convenient vehicle hire, we
                        help you travel smarter and explore more.
                    </p>
                </header>

                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6"
                    role="list"
                    aria-label="Our services"
                >
                    {services.map((service, index) => (
                        <article
                            key={service.title}
                            role="listitem"
                            className={cn(
                                'group relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl dark:shadow-2xl hover:shadow-2xl dark:hover:shadow-gray-950/70 transition-all duration-300',
                                'h-100  '
                            )}
                        >
                            <div className="absolute inset-0">
                                <Image
                                    src={service.image}
                                    alt=""
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    loading={index < 2 ? 'eager' : 'lazy'}
                                    priority={index < 2}
                                    quality={85}
                                />
                                <div
                                    className="absolute inset-0 bg-euro-gradient"
                                    aria-hidden="true"
                                />
                            </div>

                            <div className="relative h-full flex flex-col justify-between p-6 sm:p-7 lg:p-8">
                                <div className="flex flex-col items-start">
                                    <div
                                        className="bg-[#90AC58] dark:bg-[#a8d955] h-14 w-14 sm:h-16 sm:w-16 flex items-center justify-center text-white dark:text-gray-900 rounded-2xl shadow-lg mb-4 sm:mb-5"
                                        aria-hidden="true"
                                    >
                                        {service.icon}
                                    </div>

                                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-gray-200 dark:text-gray-100 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>

                                <Link
                                    href={service.link}
                                    className={cn(
                                        'inline-flex items-center text-white font-semibold text-sm sm:text-base gap-2 transition-all duration-300 group/link',
                                        'underline underline-offset-4 decoration-2',
                                        'focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-md',
                                        'hover:gap-3'
                                    )}
                                    aria-label={`Enquire about ${service.title}`}
                                >
                                    Enquiry
                                    <ArrowRight
                                        className="h-5 w-5 transition-transform group-hover/link:translate-x-1"
                                        aria-hidden="true"
                                    />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
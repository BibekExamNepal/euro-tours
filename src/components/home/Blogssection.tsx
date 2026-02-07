'use client';

import React from 'react';
import {ArrowRight} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {Button} from '@/components/ui/button';
import {Card, CardContent} from '@/components/ui/card';
import {cn} from "@/lib/utils";

interface BlogPost {
    id: number;
    title: string;
    description: string;
    author: {
        name: string;
        avatar: string;
    };
    date: string;
    image: string;
    size: 'small' | 'large';
}

const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: 'Everest Base Camp: A Journey to the Roof of the World',
        description: 'Discover what it truly feels like to trek to Everest Base Camp, from breathtaking mountain views to Sherpa culture along the trail.',
        author: {
            name: 'Suman Thapa',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
        },
        date: 'March 18, 2024',
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80',
        size: 'large',
    },
    {
        id: 2,
        title: 'Annapurna Circuit Trek: Why It\'s a Trekker\'s Favorite',
        description: 'Explore why the Annapurna Circuit is one of Nepal\'s most diverse and rewarding trekking routes.',
        author: {
            name: 'Suman Thapa',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
        },
        date: 'March 18, 2024',
        image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&q=80',
        size: 'small',
    },
    {
        id: 3,
        title: 'Everest Base Camp: A Journey to the Roof of the World',
        description: 'Discover what it truly feels like to trek to Everest Base Camp, from breathtaking mountain views to Sherpa culture along the trail.',
        author: {
            name: 'Anisha Gurung',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
        },
        date: 'February 10, 2024',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
        size: 'large',
    },
    {
        id: 4,
        title: 'Manaslu Circuit Trek: The Untouched Himalayan Experience',
        description: 'Experience raw nature, remote villages, and spectacular mountain landscapes on this off-the-beaten-path trek.',
        author: {
            name: 'Pooja Shrestha',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
        },
        date: 'June 22, 2023',
        image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
        size: 'large',
    },
    {
        id: 5,
        title: 'Best Treks in Nepal for First-Time Trekkers',
        description: 'New to trekking? Here\'s a guide to beginner-friendly treks in Nepal that offer stunning scenery without extreme difficulty.',
        author: {
            name: 'Ramesh Adhikari',
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
        },
        date: 'October 12, 2023',
        image: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800&q=80',
        size: 'small',
    },
    {
        id: 6,
        title: 'What to Pack for Trekking in Nepal',
        description: 'A complete packing checklist to ensure you\'re well-prepared for changing weather and terrain.',
        author: {
            name: 'Anisha Gurung',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
        },
        date: 'May 10, 2023',
        image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80',
        size: 'small',
    },
];

export default function BlogsSection() {
    return (
        <section
            className="w-full bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 py-12 md:py-16 lg:py-20 xl:py-24"
            aria-labelledby="blogs-heading"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <header className="text-center mb-10 md:mb-12 lg:mb-16">
                    <p className="text-sm md:text-base text-indigo-600 dark:text-indigo-400 mb-3 font-medium tracking-wide uppercase">
                        Blogs & Articles
                    </p>
                    <h2
                        id="blogs-heading"
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-50 mb-4 leading-tight"
                    >
                        Find Inspirations for Your Next Trip
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        We&apos;ve written some amazing blogs to help you find your next getaway.
                    </p>
                </header>

                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-5 md:gap-6 lg:gap-8 mb-10 md:mb-12 lg:mb-16"
                    role="list"
                >
                    {blogPosts.map((post, index) => (
                        <article
                            key={post.id}
                            className={post.size === 'large' ? 'md:row-span-2' : 'md:row-span-1'}
                            role="listitem"
                        >
                            <Link
                                href={`/blog/${post.id}`}
                                className="block group h-full focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500 dark:focus-visible:ring-indigo-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900 rounded-2xl md:rounded-3xl"
                                aria-label={`Read article: ${post.title} by ${post.author.name}, published on ${post.date}`}
                            >
                                <Card
                                    className="relative overflow-hidden rounded-2xl md:rounded-3xl border-0 shadow-lg hover:shadow-2xl dark:shadow-gray-900/50 dark:hover:shadow-gray-900/70 transition-all duration-300 h-full bg-gray-900 dark:bg-gray-800">
                                    <div
                                        className={cn('relative',
                                            post.size === 'large' ?
                                                'h-[400px] sm:h-[500px] md:h-full min-h-[400px]'
                                                : 'h-[350px] sm:h-[400px] md:h-full min-h-[350px]')}>
                                        <Image
                                            src={post.image}
                                            alt={`Featured image for ${post.title}`}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
                                            loading={index < 3 ? 'eager' : 'lazy'}
                                            priority={index < 3}
                                            quality={85}
                                        />
                                        <div
                                            className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent dark:from-black/95 dark:via-black/60"
                                            aria-hidden="true"
                                        />

                                        <CardContent
                                            className="absolute inset-0 p-6 md:p-7 lg:p-8 flex flex-col justify-end">
                                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 md:mb-4 leading-tight group-hover:underline decoration-2 underline-offset-4">
                                                {post.title}
                                            </h3>
                                            <p className="text-sm md:text-base text-gray-200 dark:text-gray-100 mb-5 md:mb-6 leading-relaxed line-clamp-2 md:line-clamp-3">
                                                {post.description}
                                            </p>

                                            <div className="flex items-center gap-3 md:gap-4">
                                                <div
                                                    className="relative w-11 h-11 md:w-12 md:h-12 rounded-full overflow-hidden ring-2 ring-white/40 dark:ring-white/50 flex-shrink-0">
                                                    <Image
                                                        src={post.author.avatar}
                                                        alt={`${post.author.name}'s profile picture`}
                                                        fill
                                                        className="object-cover"
                                                        sizes="48px"
                                                        loading="lazy"
                                                        quality={80}
                                                    />
                                                </div>
                                                <div className="min-w-0 flex-1">
                                                    <p className="text-sm md:text-base font-semibold text-white truncate">
                                                        {post.author.name}
                                                    </p>
                                                    <time
                                                        dateTime={new Date(post.date).toISOString()}
                                                        className="text-xs md:text-sm text-gray-300 dark:text-gray-200"
                                                    >
                                                        {post.date}
                                                    </time>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </div>
                                </Card>
                            </Link>
                        </article>
                    ))}
                </div>

                <div className="flex justify-center">
                    <Button
                        variant="outline"
                        size="lg"
                        className="px-8 md:px-10 lg:px-12 py-5 md:py-6 rounded-full text-sm md:text-base font-semibold border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white dark:hover:text-white hover:border-indigo-600 dark:hover:border-indigo-500 transition-all duration-300 group shadow-md hover:shadow-xl dark:shadow-gray-900/30 dark:hover:shadow-indigo-500/20 focus-visible:ring-4 focus-visible:ring-indigo-500 dark:focus-visible:ring-indigo-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900"
                        asChild
                    >
                        <Link href="/blogs">
                            View More
                            <ArrowRight
                                className="ml-2 h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1"
                                aria-hidden="true"
                            />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
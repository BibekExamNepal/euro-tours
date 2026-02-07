"use client"

import {useCallback, useState} from "react"
import Image from "next/image"
import {ChevronLeft, ChevronRight} from "lucide-react"
import {Button} from "@/components/ui/button"
import {cn} from "@/lib/utils";

const cards = [
    {
        title: "Relax in nature",
        desc: "Peaceful destinations and breathtaking landscapes.",
        image: "/heritage1.jpg",
    },
    {
        title: "Travel beyond borders",
        desc: "Carefully planned international packages and guided tours.",
        image: "/heritage2.jpg",
    },
    {
        title: "Discover cities, heritage & local life",
        desc: "Guided tours through historic cities, markets, temples, and landmarks.",
        image: "/heritage3.jpg",
        cta: true,
    },
    {
        title: "Journey into the Himalayas",
        desc: "Scenic mountain regions, hill stations, and Himalayan viewpoints.",
        image: "/heritage1.jpg",
    },
    {
        title: "World-class spots",
        desc: "Chosen by travelers around the world.",
        image: "/heritage4.jpg",
    },
]

export default function DestinationTravel() {
    const [index, setIndex] = useState(2)

    const rotate = useCallback((dir: number) => {
        setIndex((prev) => (prev + dir + cards.length) % cards.length)
    }, [])

    const handleKeyDown = useCallback((e: React.KeyboardEvent, dir: number) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            rotate(dir)
        }
    }, [rotate])

    return (
        <section
            className="bg-gray-50 dark:bg-gray-900 py-20 sm:py-24 lg:py-28 overflow-hidden text-center transition-colors duration-300"
            aria-labelledby="destination-heading"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-sm sm:text-base font-medium text-blue-600 dark:text-blue-400 mb-3">
                    Destinations
                </p>

                <h2
                    id="destination-heading"
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 dark:text-white"
                >
                    DESTINATION TRAVEL TO IMMERSE YOURSELF <br className="hidden sm:block"/> IN CULTURE
                </h2>

                <p className="max-w-2xl mx-auto mt-4 sm:mt-6 text-sm sm:text-base text-gray-600 dark:text-gray-400 px-4">
                    Step into the heart of Nepal and immerse yourself in living cultures
                    passed down through generations.
                </p>

                <div
                    className="relative mt-16 sm:mt-20 lg:mt-24 h-[360px] sm:h-[400px] lg:h-[420px] flex items-center justify-center"
                    role="region"
                    aria-label="Destination carousel"
                    aria-live="polite"
                >
                    {cards.map((card, i) => {
                        const position = (i - index + cards.length) % cards.length

                        const styles = [
                            "translate-x-[-320px] scale-[0.75] opacity-30 z-10 -top-[120px]",
                            "translate-x-[-160px] scale-[0.88] opacity-60 z-20 -top-[80px]",
                            "translate-x-0 scale-100 opacity-100 z-40 top-0",
                            "translate-x-[160px] scale-[0.88] opacity-60 z-20 -top-[80px]",
                            "translate-x-[320px] scale-[0.75] opacity-30 z-10 -top-[120px]",
                        ]



                        const isCenter = position === 2

                        return (
                            <div
                                key={i}
                                className={cn('absolute transition-all duration-500 perspective-[1000px]', styles[position])}
                                aria-hidden={!isCenter}
                                style={{
                                    transform: styles[position],
                                }}
                            >
                                <article
                                    className="relative w-55 sm:w-60 lg:w-65 h-75 sm:h-85 lg:h-90 rounded-2xl overflow-hidden shadow-xl dark:shadow-2xl">
                                    <Image
                                        src={card.image}
                                        alt={isCenter ? card.title : ''}
                                        fill
                                        className="object-cover"
                                        priority={position === 2}
                                        sizes="(max-width: 640px) 220px, (max-width: 1024px) 240px, 260px"
                                        quality={85}
                                    />

                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-5 sm:p-6 flex flex-col justify-end text-left text-white">
                                        <h3 className="font-semibold text-base sm:text-lg lg:text-xl">
                                            {card.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm mt-2 opacity-90 line-clamp-2">
                                            {card.desc}
                                        </p>

                                        <Button
                                            className={cn(
                                                "mt-4 w-full bg-lime-600 hover:bg-lime-700 dark:bg-lime-500 dark:hover:bg-lime-600 text-white transition-all duration-500 ease-in-out",
                                                {
                                                    "opacity-100 visible":  isCenter,
                                                    "opacity-0 invisible": !isCenter,
                                                }
                                            )}
                                            aria-label="Explore city heritage destinations"
                                        >
                                            Explore Now →
                                        </Button>

                                    </div>
                                </article>
                            </div>
                        )
                    })}
                </div>

                <div
                    className="  flex justify-center gap-3 sm:gap-4"
                    role="group"
                    aria-label="Carousel navigation"
                >
                    <button
                        onClick={() => rotate(-1)}
                        onKeyDown={(e) => handleKeyDown(e, -1)}
                        className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 flex items-center justify-center hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 transition-all duration-300"
                        aria-label="Previous destination"
                    >
                        <ChevronLeft className="w-5 h-5" aria-hidden="true"/>
                    </button>

                    <button
                        onClick={() => rotate(1)}
                        onKeyDown={(e) => handleKeyDown(e, 1)}
                        className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 flex items-center justify-center hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 transition-all duration-300"
                        aria-label="Next destination"
                    >
                        <ChevronRight className="w-5 h-5" aria-hidden="true"/>
                    </button>
                </div>

                <div
                    className="flex justify-center items-center gap-2 mt-6 sm:mt-8"
                    role="tablist"
                    aria-label="Destination indicators"
                >
                    {cards.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 ${
                                i === index
                                    ? 'w-8 bg-gray-900 dark:bg-white'
                                    : 'w-2 bg-gray-400 dark:bg-gray-600 hover:bg-gray-600 dark:hover:bg-gray-400'
                            }`}
                            aria-label={`Go to ${cards[i].title}`}
                            aria-current={i === index ? 'true' : 'false'}
                            role="tab"
                            aria-selected={i === index}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
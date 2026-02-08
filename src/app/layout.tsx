import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import "./globals.css"
import RootLayoutProvider from "@/Provider/RootProvider"
import React from "react";

const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-manrope",
    weight: ["300", "400", "500", "600", "700", "800"],
    display: "swap",
})

export const metadata: Metadata = {
    title: {
        default: "Euro Travels | Discover Culture, Nature & Adventure",
        template: "%s | Euro Travels",
    },
    description:
        "Euro Travels offers curated travel experiences across Nepal and beyond. Explore culture, mountains, heritage sites, and unforgettable adventures.",
    keywords: [
        "Euro Travels",
        "Nepal travel",
        "tour packages Nepal",
        "mountain tours",
        "cultural travel",
        "adventure travel",
        "Himalayas tours",
    ],
    authors: [{ name: "Euro Travels" }],
    creator: "Euro Travels",
    metadataBase: new URL("https://euro-tours.vercel.app/"),
    openGraph: {
        title: "Euro Travels | Discover Culture, Nature & Adventure",
        description:
            "Explore authentic travel experiences with Euro Travels — from Himalayan journeys to cultural city tours.",
        url: "https://euro-tours.vercel.app/",
        siteName: "Euro Travels",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Euro Travels – Destination Travel",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Euro Travels | Destination Travel",
        description:
            "Immersive travel experiences designed to connect you with culture, nature, and adventure.",
        images: ["/og-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
    },
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" suppressHydrationWarning className={'scroll-smooth'}>
        <body className={`${manrope.variable} font-sans antialiased`}>
        <RootLayoutProvider>{children}</RootLayoutProvider>
        </body>
        </html>
    )
}

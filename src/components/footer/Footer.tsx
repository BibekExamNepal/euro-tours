'use client';

import React from 'react';
import Link from 'next/link';
import {Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube} from 'lucide-react';
import Image from 'next/image';
import {Button} from "@/components/ui/button";
import {subscriberSchema, SubscriberValues} from "@/lib/validations/subscriber.schema";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import service from "@/service/contact.service";
import {showToast} from "@/lib/show-toast";
import TextInputField from "@/components/field/text-input";
import {Spinner} from "@/components/ui/spinner";

const SocialIcon = ({
                        Icon,
                        href,
                        label,
                    }: {
    Icon: React.ComponentType<any>;
    href: string;
    label: string;
}) => (
    <a
        href={href}
        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-purple-600 transition-colors duration-200"
        aria-label={label}
        target="_blank"
        rel="noopener noreferrer"
    >
        <Icon className="w-5 h-5 text-white"/>
    </a>
);

const FooterColumn = ({
                          title,
                          links,
                      }: {
    title: string;
    links: Array<{ label: string; href: string }>;
}) => (
    <div className="flex flex-col gap-3">
        <h3 className="text-main-color font-medium font-sans text-sm leading-relaxed mb-2">{title}</h3>
        <ul className="flex flex-col gap-2">
            {links.map((link) => (
                <li key={link.label}>
                    <Link
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

const ContactInfo = ({
                         icon: Icon,
                         value,
                     }: {
    icon: React.ComponentType<any>;
    value: string;
}) => (
    <div className="flex items-start gap-3">
        <Icon className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" aria-hidden="true"/>
        <span className="text-gray-300 text-sm leading-relaxed">{value}</span>
    </div>
);

export default function Footer() {
    const aboutLinks = [
        {label: 'Our story', href: '/about/our-story'},
        {label: 'Why us', href: '/about/why-us'},
        {label: 'FAQ', href: '/faq'},
    ];

    const treksLinks = [
        {label: 'Everest Base Camp', href: '/treks/everest-base-camp'},
        {label: 'Annapurna Base', href: '/treks/annapurna-base'},
        {label: 'Annapurna Circuit', href: '/treks/annapurna-circuit'},
        {label: 'Manaslu Circuit', href: '/treks/manaslu-circuit'},
        {label: 'Langtang Valley', href: '/treks/langtang-valley'},
    ];

    const servicesLinks = [
        {label: 'Air Ticketing', href: '/services/air-ticketing'},
        {label: 'Tour Packages', href: '/services/tour-packages'},
        {label: 'Hotel Bookings', href: '/services/hotel-bookings'},
        {label: 'Vehicle Hire', href: '/services/vehicle-hire'},
    ];

    const supportLinks = [
        {label: 'Contact us', href: '/contact'},
        {label: 'Privacy Policy', href: '/privacy-policy'},
        {label: 'Terms of Service', href: '/terms-of-service'},
    ];
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isSubmitting},
    } = useForm<SubscriberValues>({
        resolver: zodResolver(subscriberSchema),
    });

    const onSubmit = async (data: SubscriberValues) => {
        await service.subscribeUser(data.email).then((res) => {
            showToast({
                type: "success",
                message: res?.message || "Successfully subscribed!"
            })
            reset();
        }).catch((err) => {
            showToast({
                type: "error",
                message: err?.message || "Failed to subscribe!"
            })
        })
    };


    return (
        <footer
            className="relative bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-black dark:via-slate-950 dark:to-black text-white overflow-hidden">
            <div
                className="absolute -left-32 top-0 w-80 h-80 bg-purple-600 rounded-full opacity-20 blur-3xl"
                aria-hidden="true"
            />
            <div
                className="absolute -right-32 bottom-0 w-96 h-96 bg-purple-600 rounded-full opacity-20 blur-3xl"
                aria-hidden="true"
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-14 gap-8 lg:gap-8 mb-12">
                    <div className="lg:col-span-3 flex flex-col gap-6">
                        <div>
                            <Link href="/" className="inline-block mb-4">
                                <Image
                                    src="/logo.png"
                                    alt="Euro Tours Travel"
                                    width={140}
                                    height={56}
                                    className="h-10 sm:h-12 w-auto"
                                    priority
                                />
                            </Link>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Embark on sustainable journeys that celebrate nature and culture in Nepal.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <p className=" text-sm font-medium text-main-color">Need any help? Please let us know</p>
                            <form  className="flex flex-col sm:flex-row sm:items-start gap-2 w-full"
                                  onSubmit={handleSubmit(onSubmit)}>
                                <div className="flex-1 w-full min-w-xs">
                                    <TextInputField
                                        type="email"
                                        placeholder="Your email..."
                                        {...register("email")}
                                        className="w-full text-black"
                                        error={errors.email?.message}
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-fit bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-medium text-sm transition-colors duration-200 whitespace-nowrap"
                                >
                                    {isSubmitting ? (
                                        <span className="inline-flex items-center gap-2">
            <Spinner /> Subscribing...
        </span>
                                    ) : (
                                        "Subscribe"
                                    )}
                                </Button>

                            </form>
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <FooterColumn title="About us" links={aboutLinks}/>
                    </div>

                    <div className="lg:col-span-2">
                        <FooterColumn title="Our Treks" links={treksLinks}/>
                    </div>

                    <div className="lg:col-span-2">
                        <FooterColumn title="Our Services" links={servicesLinks}/>
                    </div>
                    <div className="lg:col-span-2">
                        <FooterColumn title="Support" links={supportLinks}/>
                    </div>

                    <div className="lg:col-span-3 flex flex-col gap-6">
                        <div className="flex flex-col gap-4">
                            <h3 className="text-white font-semibold text-sm">Socials</h3>
                            <div className="flex gap-2">
                                <SocialIcon Icon={Facebook} href="https://facebook.com" label="Facebook"/>
                                <SocialIcon Icon={Instagram} href="https://instagram.com" label="Instagram"/>
                                <SocialIcon Icon={Twitter} href="https://twitter.com" label="Twitter"/>
                                <SocialIcon Icon={Youtube} href="https://youtube.com" label="YouTube"/>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h3 className="text-white font-semibold text-sm">Contact Us</h3>
                            <div className="flex flex-col gap-3">
                                <ContactInfo icon={Phone} value="Phone: 01-5913701/02/05"/>
                                <ContactInfo icon={Phone} value="Mobile: 9841864180 / 9851164180"/>
                                <ContactInfo
                                    icon={MapPin}
                                    value="Location: Pashupatiwsion Complex, Pinggalasthan, Gaushala, Kathmandu, Nepal"
                                />
                                <ContactInfo icon={Mail} value="Email: eurotours@gmail.com"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:hidden grid grid-cols-1 gap-4 mb-8">
                    <FooterColumn title="Support" links={supportLinks}/>
                </div>
            </div>

            <div className="relative z-10 border-t border-gray-700 dark:border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm text-center sm:text-left">
                            © 2024 Euro Tours & Travel. All rights reserved.
                        </p>
                        <div className="hidden lg:flex gap-6">
                            {supportLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
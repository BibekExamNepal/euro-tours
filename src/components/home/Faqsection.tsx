'use client';

import React, { useState } from 'react';
import { ChevronDown, Star, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible';
import Image from 'next/image';
import { zodResolver } from '@hookform/resolvers/zod';
import { reviewSchema, ReviewFormData } from '@/lib/validations/review.schema';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import {showToast} from "@/lib/show-toast";

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: 'What destinations do you cover in Nepal?',
        answer:
            'We cover all major destinations including Kathmandu, Pokhara, Chitwan, Lumbini, Everest Region, Annapurna Region, Mustang, Langtang, and many off-the-beaten-path locations across Nepal.',
    },
    {
        question: 'Do you arrange trekking and hiking tours?',
        answer:
            'Yes, we arrange comprehensive trekking and hiking tours across Nepal, including popular routes like Everest Base Camp, Annapurna Circuit, and many others.',
    },
    {
        question: 'Are your guides licensed and experienced?',
        answer:
            'All our guides are fully licensed by the Nepal Tourism Board and have years of experience leading tours and treks in the Himalayas.',
    },
    {
        question: 'What is included in your tour packages?',
        answer:
            'Our tour packages typically include accommodation, meals, transportation, permits, guide services, and all necessary arrangements for your journey.',
    },
];

export default function FAQSection() {
    const [openItems, setOpenItems] = useState<number[]>([0]);
    const [hoverRating, setHoverRating] = useState<number>(0);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch,
        setValue,
    } = useForm<ReviewFormData>({
        resolver: zodResolver(reviewSchema),
        defaultValues: {
            rating: 0,
            review: '',
        },
    });

    const rating = watch('rating');

    const toggleItem = (index: number) => {
        setOpenItems((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    const onSubmit = async (data: ReviewFormData) => {
        setIsSubmitting(true);

        try {
            await new Promise((resolve) => setTimeout(resolve, 1500));

            console.log('Review submitted:', data);
            showToast({
                type: 'success',
                message: 'Thank you for your review!',
                title: 'Review Submitted',
            });
            reset();
        } catch (error) {
            showToast({
                type: 'error',
                message: 'Failed to submit review. Please try again.',
            });
            console.error('Error submitting review:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            className="w-full bg-gray-50 dark:bg-gray-900 py-12 sm:py-16 lg:py-20"
            aria-labelledby="faq-heading"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                <h2
                    id="faq-heading"
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-50 mb-8 sm:mb-12 text-center lg:text-left"
                >
                    FREQUENTLY ASKED QUESTIONS
                </h2>

                <div
                    className="space-y-3 sm:space-y-4 mb-12 sm:mb-16"
                    role="list"
                    aria-label="Frequently asked questions"
                >
                    {faqData.map((faq, index) => (
                        <Collapsible
                            key={index}
                            open={openItems.includes(index)}
                            onOpenChange={() => toggleItem(index)}
                        >
                            <div
                                className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-md dark:shadow-gray-950/50 dark:hover:shadow-gray-950/70 transition-shadow duration-200"
                                role="listitem"
                            >
                                <CollapsibleTrigger
                                    className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8fbc3f] dark:focus-visible:ring-[#a8d955] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900"
                                    aria-expanded={openItems.includes(index)}
                                    aria-controls={`faq-answer-${index}`}
                                >
                  <span className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-50 pr-4">
                    {faq.question}
                  </span>
                                    <div
                                        className={`flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                                            openItems.includes(index)
                                                ? 'bg-[#8fbc3f] dark:bg-[#a8d955] text-white dark:text-gray-900'
                                                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 group-hover:bg-[#8fbc3f] dark:group-hover:bg-[#a8d955] group-hover:text-white dark:group-hover:text-gray-900'
                                        }`}
                                        aria-hidden="true"
                                    >
                                        <ChevronDown
                                            className={`h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 ${
                                                openItems.includes(index) ? 'rotate-180' : ''
                                            }`}
                                        />
                                    </div>
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                    <div
                                        className="px-5 sm:px-6 pb-4 sm:pb-5"
                                        id={`faq-answer-${index}`}
                                        role="region"
                                    >
                                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </CollapsibleContent>
                            </div>
                        </Collapsible>
                    ))}
                </div>

                <div
                    className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg dark:shadow-gray-950/70"
                    aria-labelledby="review-heading"
                >
                    <div className="grid md:grid-cols-2 gap-0">
                        <div className="p-6 sm:p-8 lg:p-10">
                            <h3
                                id="review-heading"
                                className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-50 mb-3 sm:mb-4"
                            >
                                Loved our work? Leave us a review
                            </h3>
                            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-5 sm:mb-6 leading-relaxed">
                                Your feedback means a lot to us. If you enjoyed working with us,
                                take a moment to share your experience and help others discover
                                our services.
                            </p>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <fieldset className="mb-5 sm:mb-6" disabled={isSubmitting}>
                                    <legend className="text-sm font-medium text-gray-900 dark:text-gray-50 mb-2">
                                        Rate your experience
                                    </legend>
                                    <div
                                        className="flex gap-1 sm:gap-2"
                                        role="radiogroup"
                                        aria-label="Rating"
                                        aria-required="true"
                                    >
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <button
                                                key={star}
                                                type="button"
                                                role="radio"
                                                aria-checked={rating === star}
                                                aria-label={`${star} star${star !== 1 ? 's' : ''}`}
                                                onClick={() => setValue('rating', star)}
                                                onMouseEnter={() => setHoverRating(star)}
                                                onMouseLeave={() => setHoverRating(0)}
                                                disabled={isSubmitting}
                                                className="transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8fbc3f] dark:focus-visible:ring-[#a8d955] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-800 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                <Star
                                                    className={`h-7 w-7 sm:h-8 sm:w-8 transition-colors ${
                                                        star <= (hoverRating || rating)
                                                            ? 'fill-yellow-400 text-yellow-400 dark:fill-yellow-300 dark:text-yellow-300'
                                                            : 'fill-gray-200 text-gray-200 dark:fill-gray-600 dark:text-gray-600'
                                                    }`}
                                                    aria-hidden="true"
                                                />
                                            </button>
                                        ))}
                                    </div>
                                    {errors.rating && (
                                        <p
                                            className="text-xs text-red-600 dark:text-red-400 mt-2"
                                            role="alert"
                                        >
                                            {errors.rating.message}
                                        </p>
                                    )}
                                </fieldset>

                                <div className="mb-5 sm:mb-6">
                                    <label htmlFor="review-text" className="sr-only">
                                        Your review
                                    </label>
                                    <Textarea
                                        id="review-text"
                                        placeholder="Share some feedback..."
                                        rows={4}
                                        disabled={isSubmitting}
                                        className="resize-none text-sm border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-50 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-green-300 dark:focus:border-green-500 focus:ring-green-300 dark:focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
                                        aria-label="Your review"
                                        aria-required="true"
                                        aria-invalid={!!errors.review}
                                        aria-describedby={errors.review ? 'review-error' : undefined}
                                        {...register('review')}
                                    />
                                    {errors.review && (
                                        <p
                                            id="review-error"
                                            className="text-xs text-red-600 dark:text-red-400 mt-2"
                                            role="alert"
                                        >
                                            {errors.review.message}
                                        </p>
                                    )}
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-[#3d2f6e] hover:bg-[#2f2454] dark:bg-[#4a3b82] dark:hover:bg-[#3d2f6e] text-white font-semibold py-5 sm:py-6 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-[#3d2f6e] dark:focus-visible:ring-[#4a3b82] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-800"
                                    aria-label="Submit your review"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center gap-2">
                      <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                      Submitting...
                    </span>
                                    ) : (
                                        'Submit Review'
                                    )}
                                </Button>
                            </form>
                        </div>

                        <div className="relative min-h-[300px] md:min-h-0">
                            <Image
                                src="/faq-bg.png"
                                alt="Customer review illustration"
                                width={1000}
                                height={1000}
                                className="w-full h-full object-cover dark:opacity-90"
                                loading="lazy"
                                quality={85}
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
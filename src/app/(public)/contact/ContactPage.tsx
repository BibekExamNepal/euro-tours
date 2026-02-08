'use client'

import {useState} from 'react'
import {ArrowRight, Clock, Mail, MapPin, Phone} from 'lucide-react'
import {Button} from '@/components/ui/button'
import {Alert, AlertDescription, AlertTitle} from '@/components/ui/alert'
import Image from 'next/image'
import {cn} from "@/lib/utils"
import TextInputField from "@/components/field/text-input"
import {ContactFormValues, contactSchema} from "@/lib/validations/contact.schema"
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import {useContactMutation} from "@/lib/hooks/useContactMutation"
import {showToast} from "@/lib/show-toast"

export default function ContactSection() {
    const [generalError, setGeneralError] = useState<string | null>(null)

    const {
        register,
        handleSubmit,
        reset,
        setError,
        formState: {errors, isSubmitting},
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            message: '',
        },
    })

    const {mutate, isPending} = useContactMutation()

    const onSubmit = (data: ContactFormValues) => {
        setGeneralError(null)

        mutate(
            {
                ...data,
                phone: data.phone ? Number(data.phone) : undefined as any,
            },
            {
                onSuccess: (res: any) => {
                    reset()
                    showToast({
                        type: 'success',
                        message: res?.message || 'Message sent successfully',
                        title: 'Success',
                    })
                },
                onError: (err: any) => {
                    const errorMessage = err?.message || "Failed to send message"

                    setGeneralError(errorMessage)

                    showToast({
                        type: "error",
                        message: errorMessage,
                        title: "Error",
                    })

                    if (err?.errors && Array.isArray(err.errors)) {
                        err.errors.forEach((fieldError: any) => {
                            const key = fieldError.key?.[0]
                            const message = fieldError.message?.[0]

                            if (key && message) {
                                setError(key as keyof ContactFormValues, {
                                    type: "server",
                                    message,
                                })
                            }
                        })
                    }
                },
            }
        )
    }

    const isFormDisabled = isPending || isSubmitting

    return (
        <section
            className="relative min-h-screen bg-background dark:bg-gray-950"
            aria-labelledby="contact-heading"
        >
            <div className="absolute inset-0 z-0">
                <Image
                    src="/contact-bg.jpg"
                    alt=""
                    fill
                    className="object-cover opacity-20 dark:opacity-10"
                    priority
                    quality={85}
                    sizes="100vw"
                />
            </div>
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/30 z-0"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
                <header className="mb-8 sm:mb-12">
                    <p className="text-sm sm:text-base font-medium text-[#433783] dark:text-[#6b5bb3] mb-2 sm:mb-3">
                        Contact Us
                    </p>
                    <h1
                        id="contact-heading"
                        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white"
                    >
                        Get In Touch With Our Team
                    </h1>
                    <p className="text-base sm:text-lg text-muted-foreground dark:text-gray-400 max-w-2xl">
                        Fill out the form and we will reach out to you soon.
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                    <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg dark:shadow-2xl h-fit">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-900 dark:text-white">
                            Fill out the form
                        </h2>

                        {generalError && (
                            <Alert variant="destructive" className="mb-6">
                                <AlertTitle>Error</AlertTitle>
                                <AlertDescription>{generalError}</AlertDescription>
                            </Alert>
                        )}

                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="space-y-5 sm:space-y-6"
                            noValidate
                            aria-label="Contact form"
                        >
                            <TextInputField
                                label="Name"
                                {...register('name')}
                                placeholder="John Doe"
                                className={cn("bg-white dark:bg-gray-700", 'my-1')}
                                error={errors.name?.message}
                                required
                                disabled={isFormDisabled}
                                aria-invalid={!!errors.name}
                                aria-describedby={errors.name ? "name-error" : undefined}
                            />

                            <TextInputField
                                label="Email"
                                {...register('email')}
                                className={cn("bg-white dark:bg-gray-700", "my-1")}
                                placeholder="johndoe@example.com"
                                required
                                error={errors.email?.message}
                                type="email"
                                disabled={isFormDisabled}
                                aria-invalid={!!errors.email}
                                aria-describedby={errors.email ? "email-error" : undefined}
                            />

                            <TextInputField
                                label="Phone"
                                placeholder="9876543123"
                                {...register('phone')}
                                error={errors.phone?.message}
                                className={cn("bg-white dark:bg-gray-700", "my-1")}
                                required
                                disabled={isFormDisabled}
                                aria-invalid={!!errors.phone}
                                aria-describedby={errors.phone ? "phone-error" : undefined}
                            />

                            <TextInputField
                                textarea={true}
                                label="Message"
                                {...register('message')}
                                placeholder="Write your enquiry..."
                                error={errors.message?.message}
                                className={cn("bg-white dark:bg-gray-700", "my-1")}
                                required
                                disabled={isFormDisabled}
                                aria-invalid={!!errors.message}
                                aria-describedby={errors.message ? "message-error" : undefined}
                            />

                            <Button
                                type="submit"
                                className="bg-main-color hover:bg-main-color/90 w-full group disabled:opacity-50 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-[#433783] dark:focus-visible:ring-[#6b5bb3] focus-visible:ring-offset-2"
                                disabled={isFormDisabled}
                                aria-busy={isFormDisabled}
                            >
                                {isFormDisabled ? 'Sending...' : 'Submit Form'}
                                <ArrowRight
                                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                                    aria-hidden="true"
                                />
                            </Button>
                        </form>
                    </div>

                    <div className="space-y-6">
                        <div className="backdrop-blur-sm">
                            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                                Prefer a Direct Approach
                            </h3>

                            <div className="space-y-4" role="list" aria-label="Contact information">
                                <div className="flex items-center gap-3" role="listitem">
                                    <Phone
                                        className="shrink-0 h-5 w-5 text-muted-foreground dark:text-gray-400"
                                        aria-hidden="true"
                                    />
                                    <a
                                        href="tel:+9779812345678"
                                        className="text-gray-900 dark:text-gray-100 hover:underline hover:underline-offset-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#433783] dark:focus-visible:ring-[#6b5bb3] rounded-sm"
                                        aria-label="Call us at +977-9812345678"
                                    >
                                        +977-9812345678
                                    </a>
                                </div>

                                <div className="flex items-center gap-3" role="listitem">
                                    <Mail
                                        className="shrink-0 h-5 w-5 text-muted-foreground dark:text-gray-400"
                                        aria-hidden="true"
                                    />
                                    <a
                                        href="mailto:example@gmail.com"
                                        className="text-gray-900 dark:text-gray-100 hover:underline hover:underline-offset-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#433783] dark:focus-visible:ring-[#6b5bb3] rounded-sm"
                                        aria-label="Email us at example@gmail.com"
                                    >
                                        example@gmail.com
                                    </a>
                                </div>

                                <div className="flex items-center gap-3" role="listitem">
                                    <Clock
                                        className="shrink-0 h-5 w-5 text-muted-foreground dark:text-gray-400"
                                        aria-hidden="true"
                                    />
                                    <p className="text-gray-900 dark:text-gray-100">
                                        Monday to Friday, 9 AM - 6 PM (NPT)
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="rounded-xl sm:rounded-2xl bg-card/95 dark:bg-gray-800/95 backdrop-blur-sm border border-border dark:border-gray-700 overflow-hidden shadow-lg dark:shadow-2xl">
                            <div className="relative h-64 sm:h-80 w-full">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.124776594684!2d85.31426287549777!3d27.71536897619562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190b0e0e0e0e%3A0x0!2sKathmandu!5e0!3m2!1sen!2snp!4v1234567890"
                                    width="100%"
                                    height="100%"
                                    style={{border: 0}}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="absolute inset-0"
                                    title="Office location map"
                                />
                            </div>

                            <div className="p-4 sm:p-6 bg-white dark:bg-gray-800 flex flex-col gap-3">
                                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                                    Visit Our Office
                                </h4>
                                <div className="flex items-start gap-3">
                                    <MapPin
                                        className="h-5 w-5 text-[#433783] dark:text-[#6b5bb3] shrink-0 mt-0.5"
                                        aria-hidden="true"
                                    />
                                    <p className="text-sm sm:text-base text-muted-foreground dark:text-gray-400">
                                        123 SaaS Street, Innovation City, Kathmandu
                                    </p>
                                </div>
                                <Button
                                    className="bg-[#433783] hover:bg-[#433783]/80 dark:bg-[#6b5bb3] dark:hover:bg-[#6b5bb3]/80 w-fit focus-visible:ring-2 focus-visible:ring-[#433783] dark:focus-visible:ring-[#6b5bb3] focus-visible:ring-offset-2"
                                    asChild
                                >
                                    <a
                                        href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.124776594684!2d85.31426287549777!3d27.71536897619562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190b0e0e0e0e%3A0x0!2sKathmandu!5e0!3m2!1sen!2snp!4v1234567890"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="View office location on Google Maps"
                                    >
                                        View on Map
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
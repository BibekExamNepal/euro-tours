
import { z } from 'zod'

export const contactSchema = z.object({
    name: z
        .string()
        .min(2, 'Name must be at least 2 characters'),

    email: z
        .email('Please enter a valid email address'),

    phone: z
        .string()
        .optional()
        .refine(
            (val) => !val || /^[0-9+\-\s()]{7,15}$/.test(val),
            'Invalid phone number'
        ),

    message: z
        .string()
        .min(10, 'Message must be at least 10 characters'),
})

export type ContactFormValues = z.infer<typeof contactSchema>

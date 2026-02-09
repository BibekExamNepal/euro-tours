
import { z } from 'zod';

export const reviewSchema = z.object({
    rating: z
        .number()
        .min(1, 'Please provide a rating')
        .max(5, 'Rating cannot be more than 5'),
    review: z
        .string()
        .min(10, 'Review must be at least 10 characters')
        .max(500, 'Review cannot exceed 500 characters'),
});

export type ReviewFormData = z.infer<typeof reviewSchema>;

import { z } from "zod";

export const subscriberSchema = z.object({
    email: z
        .string()
        .min(1, "Email is required")
        .email("Invalid email address"),
});

export type SubscriberValues = z.infer<typeof subscriberSchema>;

import { z } from "zod";

export const signupSchema = z.object({
    name: z
        .string()
        .min(1, "Name is required")
        .min(3, "Name must be at least 3 characters"),

    email: z
        .string()
        .min(1, "Email is required")
        .pipe(z.email("Invalid email format")),

    password: z
        .string()
        .min(1, "Password is required")
        .min(6, "Password must be at least 6 characters"),
});


export const loginSchema = z.object({
    email: z
        .string()
        .min(1, "Email is required")
        .pipe(z.email("Invalid email format")),

    password: z
        .string()
        .min(1, "Password is required")
        .min(6, "Password must be at least 6 characters"),
});
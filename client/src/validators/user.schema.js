import { z } from "zod";

export const signupSchema = z.object({
    name: z
        .string({ required_error: "Name is required" })
        .min(3, "Name must be at least 3 characters"),

    email: z
        .string({ required_error: "Email is required" })
        .pipe(z.email("Invalid email format")),

    password: z
        .string({ required_error: "Password is required" })
        .min(6, "Password must be at least 6 characters"),
});

export const loginSchema = z.object({
    email: z
        .string({ required_error: "Email is required" })
        .pipe(z.email("Invalid email format")),

    password: z
        .string({ required_error: "Password is required" })
        .min(6, "Password must be at least 6 characters"),
});


export const addressSchema = z.object({
    pincode: z
        .string({ required_error: "Pincode is required" })
        .trim()
        .regex(/^\d{6}$/, "Pincode must be exactly 6 digits"),

    fullName: z
        .string({ required_error: "Full name is required" })
        .trim()
        .min(1, "Full name is required"),

    phone: z
        .string({ required_error: "Phone number is required" })
        .trim()
        .regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),

    addressLine: z
        .string({ required_error: "Address is required" })
        .trim()
        .min(1, "Address is required"),

    city: z
        .string({ required_error: "City is required" })
        .trim()
        .min(1, "City is required"),

    state: z
        .string({ required_error: "State is required" })
        .trim()
        .min(1, "State is required"),
});
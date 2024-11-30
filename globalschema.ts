import { z } from 'zod';

const globalschema = z.object({
    name: z.string()
        .min(2, { message: "Name must be at least 2 characters long" })
        .regex(/^[\u0900-\u097F\u0000-\u007F0-9\s&'-]+$/, { message: "Name can only contain letters, numbers, spaces, apostrophes, and hyphens" })
        .optional(),
    email: z.string()
        .email({ message: "Invalid email address" }),
    password: z.string()
        .min(8, { message: "Password must be at least 8 characters long" })
        .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
        .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
        .regex(/[0-9]/, { message: "Password must contain at least one number" })
        .regex(/[@$!%*?&]/, { message: "Password must contain at least one special character (@, $, !, %, *, ?, &)" }),
    firstName: z.string()
        .min(2, { message: "First name must be at least 2 characters long" }),
    lastName: z.string()
        .min(2, { message: "Last name must be at least 2 characters long" }),
    phone: z.string()
        .regex(/^\+?\d{10,15}$/, { message: "Phone number must be valid and include 10-15 digits" }),
    address: z.string()
        .min(5, { message: "Address must be at least 5 characters long" }),
    preferences: z.array(z.string())
        .nonempty({ message: "Preferences must include at least one option" })
});

export default globalschema;

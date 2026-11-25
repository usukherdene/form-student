import { z } from "zod"

const name = z
  .string()
  .trim()
  .min(2, "Enter at least 2 letters.")
  .regex(/^\p{L}+$/u, "Use letters only.");

const fieldValues = z.object({
    firstName: name,
    lastName: name,
    email: z.string().trim().toLowerCase().pipe(z.email("Enter a valid email address")),
    password: z
        .string()
        .min(8, "Use at least 8 characters.")
        .regex(/[A-Z]/, "Add an uppercase letter.")
        .regex(/[a-z]/, "Add a lowercase letter.")
        .regex(/[0-9]/, "Add a number.")
        .regex(/[^A-Za-z0-9\s]/, "Add a special character."),  
    confirmPassword: z.string().min(2, "Enter your password"),
    phoneNumber: z.string().regex(/^\d{8}$/, "Enter exactly 8 digits."),
    profileImage: z.file().max(1024 * 1024 * 5, "File must be 5MB or smaller"),
    dateOfBirth: z.iso.date("Choose a valid date"),
});

const verifyPassword = (values: z.infer<typeof fieldValues>) => values.password === values.confirmPassword;

export const registrationSchema = fieldValues.refine(verifyPassword, { 
    message: "Passwords do not match", 
    path: ["confirmPassword"], 
    when: () => true 
});
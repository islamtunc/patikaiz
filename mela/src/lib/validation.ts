// Bismillahirrahmanirahim
// Elhamdulillahi Rabbil Alamin
// Es-salatu was-salamu 'ala Rasulillah
// Allah u Ekber velillahilhamd
// HasbunAllahu ve ni'mel vekil
// SubhanAllah, SubhanAllah, SubhanAllah, ve'l-hamdulillah 
// ve la ilahe illAllah
// La ilahe illAllah, Allah u Ekber, Allah u Ekber, Allah u



const requiredString = z.string().trim().min(1, "Required");

import { z } from "zod";

export const signUpSchema = z.object({
  email: z.string().email(),
  username: z.string().min(3),
  password: z.string().min(6),
  phone: z.string().min(10), // Add phone here
});

export type SignUpValues = z.infer<typeof signUpSchema>;

export const loginSchema = z.object({
  username: requiredString,
  password: requiredString,
});

export type LoginValues = z.infer<typeof loginSchema>;

export const createPostSchema = z.object({
  content: z.array(z.string().trim().min(1, "Required")), // content artık dizi!
  mediaIds: z.array(z.string()).max(5, "Cannot have more than 5 attachments"),
});

export const updateUserProfileSchema = z.object({
  displayName: requiredString,
  bio: z.string().max(1000, "Must be at most 1000 characters"),
});

export type UpdateUserProfileValues = z.infer<typeof updateUserProfileSchema>;

export const createCommentSchema = z.object({
  content: requiredString,
});

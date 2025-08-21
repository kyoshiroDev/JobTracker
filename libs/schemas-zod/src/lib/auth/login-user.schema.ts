import { z } from "zod";

export const loginUserSchema = z
  .object({
    email: z
      .string()
      .trim()
      .min(1, "L'email est obligatoire")
      .email("L'email doit être valide")
      .transform((v) => v.toLowerCase()),

    password: z.string().trim().min(1, "Le mot de passe est obligatoire"),
  })
  .strict();

export type LoginUser = z.infer<typeof loginUserSchema>;

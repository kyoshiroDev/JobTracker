import { z } from 'zod';

export const createUserSchema = z.object({
  username: z.string().nonempty('Le nom est obligatoire'),
  email: z.string().email('Email invalide').nonempty("L'email est obligatoire"),
  password: z.string().min(8, 'Mot de passe trop court').nonempty('Le mot de passe est obligatoire'),
  createdAt: z.coerce.date().optional(),
}).strict();

export type CreateUser = z.infer<typeof createUserSchema>;

import { z } from 'zod';

export const updateUserSchema = z
  .object({
    id: z.string().nonempty().uuid(),
    username: z.string().min(1, 'Le nom doit avoir au moins 3 caractères').nonempty('Le nom est obligatoire'),
    email: z.string().email('Email invalide').nonempty("L'email est obligatoire"),
    password: z.string().min(8, 'Mot de passe trop court').nonempty('Le mot de passe est obligatoire'),
    updatedAt: z.coerce.date(),
  })
  .strict();

export type UpdateUser = z.infer<typeof updateUserSchema>;

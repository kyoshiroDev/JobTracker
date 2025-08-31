import { z } from 'zod';

export const UserPublicModelSchema = z.object({
  id: z.string().uuid('UUID invalide'),
  username: z.string().min(1),
  email: z.string().email(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});
export type UserPublic = z.infer<typeof UserPublicModelSchema>;

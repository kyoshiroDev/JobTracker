import { z } from 'zod';
import { createUserSchema } from '@libs/schemas-zod';

export const registerUserSchema = createUserSchema;

export type RegisterUser = z.infer<typeof registerUserSchema>;

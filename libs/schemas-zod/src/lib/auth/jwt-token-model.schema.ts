import { z } from 'zod';

export const JwtTokensModel = z.object({
  access: z.string().min(1),
  refresh: z.string().min(1),
  expires_in: z.number().int().positive(),
  token_type: z.literal("Bearer"),
});

export type JwtTokens = z.infer<typeof JwtTokensModel>;

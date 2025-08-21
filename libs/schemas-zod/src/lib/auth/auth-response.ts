import { z } from 'zod';
import { UserPublicModelSchema } from '../user/user-public-model.schema';
import { JwtTokensModel } from './jwt-token-model.schema';

export const AuthResponseModel = z.object({
  user: UserPublicModelSchema,
  tokens: JwtTokensModel,
});
export type AuthResponse = z.infer<typeof AuthResponseModel>;

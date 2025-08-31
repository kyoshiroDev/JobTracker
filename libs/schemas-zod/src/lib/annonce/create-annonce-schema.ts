import { z } from 'zod';
import {
  contratTypeEnum,
  statusTypeEnum,
  workModeTypeEnum,
} from './annonce.enums';

const required = (label: string) =>
  z.string().min(1, `${label} est obligatoire`);

export const createAnnonceSchema = z
  .object({
    job: required('Le poste'),
    contract_type: contratTypeEnum,
    work_mode: workModeTypeEnum,
    status: statusTypeEnum,
    user_id: z.string().uuid('UUID invalide'),

    about: z.string().optional(),
    description: z.string().optional(),
    skills: z.string().optional(),
    benefits: z.string().optional(),
    salary: z.string().optional(),
    annonce_link: z.string().url('URL invalide').optional(),

    company_name: z.string().optional(),
    company_city: z.string().optional(),
    company_phone: z.string().optional(),
    company_email: z.string().email('Email invalide').optional(),
  })
  .strict();

export type CreateAnnonce = z.infer<typeof createAnnonceSchema>;

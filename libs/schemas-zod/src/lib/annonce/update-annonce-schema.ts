import { z } from 'zod';

export const updateAnnonceSchema = z
  .object({
    job: z.string().min(1, 'Le poste est obligatoire').optional(),
    contract_type: z.string().min(1, 'Le type de contrat est obligatoire').optional(),
    work_mode: z.string().min(1, 'Le mode de travail est obligatoire').optional(),
    status: z.string().min(1, 'Le statut est obligatoire').optional(),

    user_id: z.string().uuid('UUID invalide').optional(), // autorisé si tu veux réassigner

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
  .strict(); // pas de id / created_at / updated_at

export type UpdateAnnonceDto = z.infer<typeof updateAnnonceSchema>;

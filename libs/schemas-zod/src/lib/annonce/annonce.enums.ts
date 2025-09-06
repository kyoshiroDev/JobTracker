import { z } from 'zod';

/**
 * @description
 * STATUS_TYPES enum des statuts
 * STATUS_LABELS label des statuts pour l'UI'
 */
export const STATUS_TYPES = ['pending', 'interview', 'follow_up', 'rejected'] as const;
export const statusTypeEnum = z.enum(STATUS_TYPES);
export type StatusType = z.infer<typeof statusTypeEnum>;
export const STATUS_LABELS: Record<StatusType, string> = {
  pending: 'En attente',
  interview: 'Entretien',
  follow_up: 'À relancer',
  rejected: 'Rejetée',
};

/**
 * @description
 * WORK_MODE_TYPES enum des modes de travail
 * WORK_MODE_LABELS label des modes de travail pour l'UI'
 */
export const WORK_MODE_TYPES = ['full_remote', 'presenter', 'hybride'] as const;
export const workModeTypeEnum = z.enum(WORK_MODE_TYPES);
export type WorkModeType = z.infer<typeof workModeTypeEnum>;
export const WORK_MODE_LABELS: Record<WorkModeType, string> = {
  full_remote: 'fullremote',
  presenter: 'presentiel',
  hybride: 'hybride',
};

/**
 * @description
 * CONTRAT_TYPES enum des types de contrat
 */
export const CONTRAT_TYPES = ['CDI', 'CDD', 'Stage', 'Freelance'] as const;
export const contratTypeEnum = z.enum(CONTRAT_TYPES);
export type ContratType = z.infer<typeof contratTypeEnum>;

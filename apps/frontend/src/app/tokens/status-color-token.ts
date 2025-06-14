import { InjectionToken } from '@angular/core';
import { StatusConfig } from './statusConfig.model';

export const STATUS_COLOR = new InjectionToken<StatusConfig[]>('STATUS_COLOR');

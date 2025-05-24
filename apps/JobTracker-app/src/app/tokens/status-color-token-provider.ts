import { Provider } from '@angular/core';
import { STATUS_COLOR } from './status-color-token';
import { StatusConfig } from './statusConfig.model';

export const STATUS_COLOR_PROVIDER: Provider = {
  provide: STATUS_COLOR,
  useValue: [
    {
      label: 'En attente',
      colorClassText: 'text-JobTracker-blue',
      colorClassBg: 'bg-JobTracker-blue',
    },
    {
      label: 'Entretien',
      colorClassText: 'text-green-700',
      colorClassBg: 'bg-green-700',
    },
    {
      label: 'À relancer',
      colorClassText: 'text-amber-700',
      colorClassBg: 'bg-amber-700',
    },
    {
      label: 'Rejetée',
      colorClassText: 'text-red-700',
      colorClassBg: 'bg-red-700',
    },
  ] as StatusConfig[],
};

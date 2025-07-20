import { Provider } from '@angular/core';
import { STATUS_COLOR } from './status-color-token';
import { StatusConfig } from './statusConfig.model';

export const STATUS_COLOR_PROVIDER: Provider = {
  provide: STATUS_COLOR,
  useValue: [
    {
      label: 'En attente',
      colorClassText: 'text-blue-700 font-medium',
      colorClassBg: 'bg-blue-700 font-medium',
    },
    {
      label: 'Entretien',
      colorClassText: 'text-green-700 font-medium',
      colorClassBg: 'bg-green-700 font-medium',
    },
    {
      label: 'À relancer',
      colorClassText: 'text-orange-700 font-medium',
      colorClassBg: 'bg-orange-700 font-medium',
    },
    {
      label: 'Rejetée',
      colorClassText: 'text-red-700 font-medium',
      colorClassBg: 'bg-red-600 font-medium',
    },
  ] as StatusConfig[],
};

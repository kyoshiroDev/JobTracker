import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { STATUS_COLOR } from '../../app/tokens/status-color-token';
import { Candidature } from '../candidature';
import { RowLeftIconComponent } from '../../assets/icons/row-left-icon.component';
import { UpdateFormIconComponent } from '../../assets/icons/update-form-icon.component';
import { CompanyIconComponent } from '../../assets/icons/company-icon.component';

import { PhoneIconComponent } from '../../assets/icons/phone-icon.component';
import { CityIconComponent } from '../../assets/icons/city-icon.component';
import { SalaryIconComponent } from '../../assets/icons/salary-icon.component';
import { ContractTypeIconComponent } from '../../assets/icons/contract-type-icon.component';
import { WorkModeIconComponent } from '../../assets/icons/work-mode-icon.component';
import { EmailIconComponent } from '../../assets/icons/email-icon.component';

@Component({
  selector: 'fdw-candidatures-detail-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RowLeftIconComponent,
    UpdateFormIconComponent,
    CompanyIconComponent,
    PhoneIconComponent,
    CityIconComponent,
    SalaryIconComponent,
    ContractTypeIconComponent,
    WorkModeIconComponent,
    EmailIconComponent,
  ],
  template: `
    <header class="relative max-w-4xl m-auto rounded-t-lg text-black">
      <div class="p-4 flex flex-col w-full justify-center text-white gap-4 bg-JobTracker-side rounded-t-lg">
        <div class="flex justify-between">
          <fdw-return-row-icon />
          <fdw-update-form-icon />
        </div>
        <h2 class="flex-inline sm:text-xl md:text-2xl text-center font-bold text-JobTracker-white uppercase">
          {{ annonce().job }}
        </h2>
        <div class="flex flex-col items-center bg-inherit gap-4 pb-4">
          <div class="flex justify-center items-center gap-4">
            <fdw-company-icon />
            <p class="text-xl md:text-2xl font-medium">
              {{ annonce().company.name }}
            </p>
          </div>
          <div
            class="max-w-fit px-4 py-1 text-sm bg-JobTracker-white font-semibold rounded-lg"
            [class]="statusColorClass(this.annonce().content.status)"
          >
            {{ annonce().content.status }}
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 justify-items-center sm:justify-items-start text-gray-700">
        <div class="flex items-center bg-slate-200 p-4 gap-4 rounded-md w-xs sm:w-full">
          <fdw-email-icon />
          <p class="text-md">
            {{ annonce().company.email }}
          </p>
        </div>
        <!-- Téléphone -->
        <div class="flex items-center bg-slate-200 p-4 gap-4 rounded-md w-xs sm:w-full">
          <fdw-phone-icon />
          <p class="text-md">
            {{ annonce().company.phone }}
          </p>
        </div>
      </div>
      <div class="grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-4 px-4 justify-items-center">
        <div class="flex w-full gap-2 items-center border-2 border-slate-200 p-2 rounded-md">
          <fdw-city-icon />
          <div class="flex flex-col justify-items-center items-start gap-0">
            <p class="text-slate-500 text-sm">Lieu</p>
            <p class="text-md">{{ annonce().company.city }}</p>
          </div>
        </div>
        <!-- Salaire -->
        <div class="flex w-full gap-2 items-center border-2 border-slate-200 p-2 rounded-md">
          <fdw-salary-icon />
          <div class="flex flex-col justify-items-center items-start gap-0">
            <p class="text-slate-500 text-sm">Salaire</p>
            <p class="text-md">
              {{ annonce().content.salary | currency : 'EUR' : 'symbol' : '1.0-0' }}
              /an
            </p>
          </div>
        </div>
        <div class="flex w-full gap-2 items-center border-2 border-slate-200 p-2 rounded-md">
          <fdw-contract-type-icon />
          <div class="flex flex-col justify-items-center items-start gap-0">
            <p class="text-slate-500 text-sm">Contrat</p>
            <p class="text-md">{{ annonce().content.contractType }}</p>
          </div>
        </div>
        <div class="flex w-full gap-2 items-center border-2 border-slate-200 p-2 rounded-md">
          <fdw-work-mode-icon />
          <div class="flex flex-col justify-items-center items-start gap-0">
            <p class="text-slate-500 text-sm">Mode</p>
            <p class="text-md">{{ annonce().content.workMode }}</p>
          </div>
        </div>
      </div>
      <div class="grid-cols-1 p-4">
        <p class="border-t-1 border-slate-200 pt-4 px-4 text-center text-slate-500 text-sm">
          Publiée le {{ annonce().createdAt | date : 'dd/MM/yyyy' }}
        </p>
      </div>
    </header>
  `,
})
export class CandidatureDetailHeaderComponent {
  readonly annonce = input.required<Candidature>();
  readonly status = inject(STATUS_COLOR);

  protected statusColorClass(status: string): string {
    const statusConfig = this.status.find((item) => item.label === status);
    return statusConfig?.colorClassText || 'text-JobTracker-blue';
  }
}

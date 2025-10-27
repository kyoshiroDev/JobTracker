type Company = {
  id?: string;
  name?: string;
  city?: string;
};

export type Candidature = {
  id: string;
  job: string;
  contract_type: string;
  work_mode: string;
  status: string;
  about?: string;
  description?: string;
  skills?: string;
  benefits?: string;
  salary?: string;
  annonce_link?: string;
  company_id: string;
  company?: Company | null;
};

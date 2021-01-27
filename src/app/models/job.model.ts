export class JobModel {
  
    id: string = '';
  
    title: string = '';
  
    description: string = '';
  
    remuneration: number = 0;
  
    isRemoteWork: boolean = false;
  
    seniority: string = '';
  
    vacancyType: VacancyEnum = VacancyEnum.CLT;
  
    qualifications: QualificationModel[] = [];
  
    technologies: TechnologyModel[] = [];
  
    responsibilities: ResponsibilityModel[] = [];
  
    company: CompanyModel = new CompanyModel();
  
    benefits: BenefitModel[] = [];
  
    location: LocationModel = new LocationModel();
  
    contact: ContactModel = new ContactModel();
  
    recruiter: RecruiterModel = new RecruiterModel();
  
    createdAt: Date = new Date();

}

export enum VacancyEnum {
    CLT = 'CLT',
    PJ = 'PJ',
}

export class QualificationModel {

    description: string= '';
}

export class TechnologyModel {

    name: string= '';
}

export class ResponsibilityModel {

  description: string = '';

}

export class CompanyValueModel {

    description: string = '';
  
}
  
export class CompanyModel {
  
    name: string = '';

    legacy: string = '';

    values: CompanyValueModel[] = [];
  
}

export class BenefitModel {

    description: string = '';
  
    value: number = 0;
  
}

export class LocationModel {

    city: string = '';
  
    state: string = '';
  
}


export class ContactModel {

    phone: string = '';
  
    mail: string = '';
  
    whatsapp: string = '';
  
    linkedin: string = '';
  
}

export class RecruiterModel {

    recruiterId: string = '';
  
    name: string = '';
  
}
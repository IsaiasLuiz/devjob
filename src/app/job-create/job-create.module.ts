import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobCompanyComponent } from './job-company/job-company.component';
import { JobDescriptionComponent } from './job-description/job-description.component';
import { JobQualificationComponent } from './job-qualification/job-qualification.component';
import { JobCreateComponent } from './job-create/job-create.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    JobCompanyComponent,
    JobDescriptionComponent,
    JobQualificationComponent,
    JobCreateComponent,
  ],
  exports: [
    JobCompanyComponent,
    JobDescriptionComponent,
    JobQualificationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
  ]
})
export class JobCreateModule { }

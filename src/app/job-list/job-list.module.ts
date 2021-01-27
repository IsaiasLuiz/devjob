import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobListComponent } from './job-list/job-list.component';



@NgModule({
  declarations: [
    JobListComponent
  ],
  exports: [
    JobListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class JobListModule { }

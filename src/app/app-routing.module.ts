import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobCreateComponent } from './job-create/job-create/job-create.component';
import { JobListComponent } from './job-list/job-list/job-list.component';

const routes: Routes = [
  {
    path: 'jobs',
    component: JobListComponent
  },
  {
    path: 'jobs/create',
    component: JobCreateComponent
  },
  {
    path: '**', redirectTo: 'jobs'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JobState } from 'src/app/models/job-state.enum';
import { JobModel } from 'src/app/models/job.model';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-job-create',
  templateUrl: './job-create.component.html',
  styleUrls: ['./job-create.component.scss']
})
export class JobCreateComponent {

  state: JobState = JobState.jobDescription;

  job: JobModel = new JobModel();


  constructor(private service: JobService, private router: Router) {}

  gotToNewScreen(screen: JobState) {
    console.log(screen)
    this.state = screen;
  }

  saveJob() {
    console.log(this.job)
    this.service.save(this.job).subscribe(() => this.router.navigate(['jobs']),() => this.router.navigate(['jobs']));

  }

}

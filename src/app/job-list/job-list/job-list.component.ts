import { Component, OnInit } from '@angular/core';
import { JobModel } from 'src/app/models/job.model';
import { Pageable } from 'src/app/models/pageable';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {

  jobs: JobModel[] = [];

  pageable = new Pageable();

  constructor(private service: JobService) {}

  ngOnInit(): void {
    this.getJobs();
  }

  delete(id: string) {
    this.service.delete(id).subscribe(r=>{
      console.log(r);
      this.getJobs();
    })
  }

  getJobs() {
    this.service.jobs(this.service.getRecruiterLogged().recruiterId)
      .subscribe(res => {
        console.log(res)
        this.jobs = res.data.jobs.jobs;
        this.pageable = res.data.jobs.pageable;
        console.log(this.pageable)
      });
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { JobModel } from 'src/app/models/job.model';

@Component({
  selector: 'job-description',
  templateUrl: './job-description.component.html',
  styleUrls: ['./job-description.component.scss']
})
export class JobDescriptionComponent implements OnInit {

  @Input()
  public job: JobModel = new JobModel();

  @Output()
  newScreen: EventEmitter<any> = new EventEmitter();

  qualification: string = '';

  tecnology: string = '';

  responsibility: string = '';

  submitted: boolean = false;

  hasError: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    this.submitted = true;
    if (this.job.title && this.job.description && this.job.qualifications.length > 0 
      && this.job.technologies.length > 0 && this.job.responsibilities.length > 0) {
        this.hasError = false;
        this.newScreen.emit('job-qualification')
    } else {
      this.hasError = true;
    }
  }

}

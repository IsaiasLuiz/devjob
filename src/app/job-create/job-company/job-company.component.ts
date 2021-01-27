import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { JobModel } from 'src/app/models/job.model';

@Component({
  selector: 'job-company',
  templateUrl: './job-company.component.html',
  styleUrls: ['./job-company.component.scss']
})
export class JobCompanyComponent implements OnInit {

  @Input()
  public job: JobModel = new JobModel();

  @Output()
  newScreen: EventEmitter<any> = new EventEmitter();

  @Output()
  onConfirm: EventEmitter<any> = new EventEmitter();

  submitted: boolean = false;

  hasError: boolean = false;
  
  companyValue: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    this.submitted = true;
    if (this.job.company.name && this.job.company.legacy && this.job.company.values.length > 0 && this.job.location.state &&
      this.job.location.city && this.job.contact.phone && this.job.contact.mail && this.job.contact.whatsapp && this.job.contact.linkedin) {
        this.hasError = false;
        this.onConfirm.emit()
    } else {
      this.hasError = true;
    }
  }

}

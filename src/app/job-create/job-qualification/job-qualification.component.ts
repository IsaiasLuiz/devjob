import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { JobModel, VacancyEnum } from 'src/app/models/job.model';

@Component({
  selector: 'job-qualification',
  templateUrl: './job-qualification.component.html',
  styleUrls: ['./job-qualification.component.scss']
})
export class JobQualificationComponent implements OnInit {
  
  @Input()
  public job: JobModel = new JobModel();

  @Output()
  newScreen: EventEmitter<any> = new EventEmitter();

  benefit: string = '';

  benefitValue: number = 0;

  submitted: boolean = false;

  hasError: boolean = false;

  vacancyCLT: VacancyEnum = VacancyEnum.CLT;

  vacancyPJ: VacancyEnum = VacancyEnum.PJ;
  
  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    this.submitted = true;
    if (this.job.remuneration && this.job.seniority && this.job.benefits.length > 0) {
        this.hasError = false;
        this.newScreen.emit('job-company')
    } else {
      this.hasError = true;
    }
  }

}

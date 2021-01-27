import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobQualificationComponent } from './job-qualification.component';

describe('JobQualificationComponent', () => {
  let component: JobQualificationComponent;
  let fixture: ComponentFixture<JobQualificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobQualificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobQualificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { JobModel, RecruiterModel } from "../models/job.model";
@Injectable({
    providedIn: 'root'
})
export class JobService {

    constructor(private http: HttpClient) {}

    private recruiter: RecruiterModel = {name: 'João', recruiterId: '5fe162a4ebbf0309e5c86e93'};

    private URL = 'http://localhost:4000/graphql';

    getRecruiterLogged() {
        return this.recruiter;
    }

    save(job: JobModel) {
      const qualifications = '';
      job.qualifications.map(q => qualifications.concat(`{description:${q.description}}`));
      const technologies = '';
      job.technologies.map(t => technologies.concat(`{name:${t.name}}`));
      const responsibilities = '';
      job.responsibilities.map(r => responsibilities.concat(`{description:${r.description}}`));
      const benefits = '';
      job.benefits.map(b => responsibilities.concat(`{description:${b.description}, value:${b.value}}`));
      const companyValues = '';
      job.company.values.map(v => companyValues.concat(`{description:${v.description}}`));
      const company = `{name:"${job.company.name}", legacy: "${job.company.legacy}", values: [${companyValues}]}`;
      const location = `{state:"${job.location.state}", city:"${job.location.city}"}`;
      const contact = `{phone:"${job.contact.phone}", mail:"${job.contact.mail}", whatsapp:"${job.contact.whatsapp}", linkedin:"${job.contact.linkedin}"}`


        const mutation = `mutation {
            jobCreate(job: {
              title: "${job.title}",
              description: "${job.description}",
              seniority: "${job.seniority}",
              remuneration: ${job.remuneration},
              isRemoteWork: ${job.isRemoteWork},
              vacancyType: ${job.vacancyType},
              qualifications: [${qualifications}],
              technologies: [${technologies}],
              responsibilities: [${responsibilities}],
              company: ${company},
              benefits: [${benefits}],
              location: ${location},
              contact: ${contact},
              recruiter: {recruiterId: "${this.recruiter.recruiterId}", name: "${this.recruiter.name}"}
            }) {
              id
            }
          }`;
          
        

        return this.http.post(this.URL, {query: mutation});
    }

    jobs(recruiterId: string): Observable<any> {
         return this.http.get(this.URL + `?query={
            jobs(filter: {recruiterId: "${recruiterId}"}){
             jobs {
              id
              title
              description
              seniority
            }
              pageable {
                page
                size
                offset
              totalElements
              }
            }
          }`);
    }

    delete(id: string): Observable<any> {
        const mutation = `mutation {
            jobDelete(id: "${id}")
          }`;
        return this.http.post(this.URL, { query: mutation });
    }

}
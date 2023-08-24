import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { reduce } from 'rxjs';
import { CertificateModel } from 'src/app/Models/JsonModels/CertificateModel';
import { JobExperienceModel } from 'src/app/Models/JsonModels/JobExperienceModel';
import { ProjectModel } from 'src/app/Models/JsonModels/ProjectModel';
import { SocialMediaPostModel } from 'src/app/Models/JsonModels/SocialMediaPostModel';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(
    private _HttpClient: HttpClient,
    private _CommonService: CommonService,
  ) { }

  static Certificates: Array<CertificateModel> = [];
  static JobExperiences: Array<JobExperienceModel> = [];
  static Projects: Array<ProjectModel> = [];
  static SocialMediaPosts: Array<SocialMediaPostModel> = [];

  loadEverything() {
    this._HttpClient.get("./assets/Data/Certificates.json").subscribe((response: any) => {
      ConfigService.Certificates = [...response];
      console.log(ConfigService.Certificates);
    });

    this._HttpClient.get("./assets/Data/JobExperiences.json").subscribe((response: any) => {
      ConfigService.JobExperiences = [...response];
      console.log(ConfigService.JobExperiences);
    });

    this._HttpClient.get("./assets/Data/Projects.json").subscribe((response: any) => {
      ConfigService.Projects = [...response];
      console.log(ConfigService.Projects);
    });

    this._HttpClient.get("./assets/Data/SocialMediaPosts.json").subscribe((response: any) => {
      ConfigService.SocialMediaPosts = [...response];
      console.log(ConfigService.SocialMediaPosts);
    });
  }
}

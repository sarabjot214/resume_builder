import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataStoreService } from '../services/data-store.service';
import { PersonalDetailsDataService } from '../services/personal-details-data.service';
import { EducationDetailsDataService } from '../services/education-details-data.service';
import { SkillsDataService } from '../services/skills-data.service';
import { ExperienceDataService } from '../services/experience-data.service';
import { HobbiesDataService } from '../services/hobbies-data.service';
import { InterestsDataService } from '../services/interests-data.service';
import { CertificatesDataService } from '../services/certificates-data.service';
import { LanguagesDataService } from '../services/languages-data.service';
import { DownloadService } from '../services/download.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-resume-preview',
  templateUrl: './resume-preview.component.html',
  styleUrls: ['./resume-preview.component.css']
})
export class ResumePreviewComponent implements OnInit {

  links:{activateHobbies,activateInterests,activateCertificates,activateLanguages,activateSummary}
  personalDetails:{name,profession,dob,phoneNo,email,address};
  educationDetails:{schoolName:string,Qualification:string,Marks:string,yearOfPassing:string}[];
  skills:{name:string,details:string}[];
  experiences:{designation:string,company:string,duration:string,details:string}[];
  hobbies:string[];
  interests:string[];
  certificates:string[];
  languages:string[];
  login=false
  
  constructor(
    private route:Router,
    private dataStore:DataStoreService,
    private personalDetailsData:PersonalDetailsDataService,
    private educationDetailsData:EducationDetailsDataService,
    private skillsData:SkillsDataService,
    private experienceData:ExperienceDataService,
    private hobbiesData:HobbiesDataService,
    private interestsData:InterestsDataService,
    private certificatesData:CertificatesDataService,
    private languagesData:LanguagesDataService,
    private downloadData:DownloadService,
    private _dataService: DataService 
  ) { }

  ngOnInit() {
    this.links=this.dataStore.links;
    this.personalDetails=this.personalDetailsData.personalDetails;
    this.educationDetails=this.educationDetailsData.educationDetails;
    this.skills=this.skillsData.skills;
    this.experiences=this.experienceData.experiences;
    this.hobbies=this.hobbiesData.hobbies;
    this.interests=this.interestsData.interests;
    this.certificates=this.certificatesData.certificates;
    this.languages=this.languagesData.languages;
    this.login=this._dataService.login;
  }

  onLogin(){
    this.route.navigate(['log-in']);
  }

  downloadPDF(){
    this.downloadData.downloadPDF();
  }

  onBackPage(){
    this.route.navigate(['resumeDetails','1']);
  }


}

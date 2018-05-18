import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { DataStoreService } from '../services/data-store.service';
import { PersonalDetailsDataService } from '../services/personal-details-data.service';
import { EducationDetailsDataService } from '../services/education-details-data.service';
import { SkillsDataService } from '../services/skills-data.service';
import { ExperienceDataService } from '../services/experience-data.service';
import { CertificatesDataService } from '../services/certificates-data.service';
import { HobbiesDataService } from '../services/hobbies-data.service';
import { InterestsDataService } from '../services/interests-data.service';
import { LanguagesDataService } from '../services/languages-data.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  templateId:number;
  templateIdprev:number;

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private dataStore:DataStoreService,
    private personalDetailsData:PersonalDetailsDataService,
    private educationDetailsData:EducationDetailsDataService,
    private skillsData:SkillsDataService,
    private experienceData:ExperienceDataService,
    private hobbiesData:HobbiesDataService,
    private interestsData:InterestsDataService,
    private certificatesData:CertificatesDataService,
    private languagesData:LanguagesDataService,
    private _dataService: DataService
  ){}

  ngOnInit(){
    this.templateId=this.dataStore.templateId;
    this.templateIdprev=this.dataStore.templateIdprev;
  }

  onNext(){
    if(this.templateId<4){
    this.templateIdprev=this.templateId;
    this.templateId++;
    }
    else{
      this.templateIdprev=this.templateId;
      this.templateId=1;
    }
  }

  onPrev(){
    if(this.templateIdprev>0){
    this.templateId=this.templateIdprev
    this.templateIdprev--;
  }
    else{
      this.templateIdprev=4;
      this.templateId=this.templateIdprev
      this.templateIdprev--;
    }
  }
  onFirst()
{
  this.router.navigate(['index']);
}  onSuccess(){

    this._dataService.onStart();
    this.dataStore.onSetTemplateId(this.templateId,this.templateIdprev);
    this.dataStore.onActivateLinks(
      {
        activateHobbies:0,
        activateInterests:0,
        activateCertificates:0,
        activateLanguages:0,
        activateSummary:0
      }
    )

    this.dataStore.onAddSections(
      {
        addHobbies:0,
        addInterests:0,
        addCertificates:0,
        addLanguagesKnown:0,
        addSummary:0
      }
    )

    // PERSONAL DETAILS NULLIFY
    this.personalDetailsData.onSetPersonalDetails(
      {
        name:'',
        profession:'',
        dob:'',
        phoneNo:'',
        email:'',
        address:'',
        image:'',
        nametitle:'Name',
        professiontitle:'Profession',
        dobtitle:'Date Of Birth',
        phoneNotitle:'Phone No',
        emailtitle:'Email',
        addresstitle:'Address',
        imagetitle:'Image'
      }
    );

    // this.personalDetailsData.onSetNewFields(
    //   []
    // );

    // this.personalDetailsData.onSetNewFieldsId(0);

    // EDUCATION DETAILS NULLIFY
    this.educationDetailsData.onSetEducationDetails(
      [{schoolName:'',Qualification:'',Marks:'',yearOfPassing:''}]
    );

    this.educationDetailsData.onSetEducationId(0);

    // SKILL DETAILS NULLIFY
    this.skillsData.onSetSkillDetails(
      [{name:'',details:''}]
    );

    this.skillsData.onSetSkillId(0);

    // EXPERIENCE DETAILS NULLIFY
    this.experienceData.onSetExperienceDetails(
      [{designation:'',company:'',duration:'',details:''}]
    );

    this.experienceData.onSetExperienceId(0);

    // HOBBIES DETAILS NULLIFY
    this.hobbiesData.onSetHobbies(
      ['']
    );

    this.hobbiesData.onSetHobbiesId(0);

    // INTERESTS DETAILS NULLIFY
    this.interestsData.onSetInterests(
      ['']
    );

    this.interestsData.onSetInterestsId(0);

    // CERTIFICATES DETAILS NULLIFY
    this.certificatesData.onSetCertificates(
      ['']
    );

    this.certificatesData.onSetCertificatesId(0);

    // LANGUAGES DETAILS NULLIFY
    this.languagesData.onSetLanguages(
      ['']
    );

    this.languagesData.onSetLanguagesId(0);


    this.router.navigate(['resumeDetails',this.templateId]);
  }

}

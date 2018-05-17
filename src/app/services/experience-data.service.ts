import { Injectable } from '@angular/core';

@Injectable()
export class ExperienceDataService {

  constructor() { }
  experiencesTitle:{title,designationtitle,companytitle,durationtitle,detailstitle}=
  {  title:'Experience',
    designationtitle:'Designation',
    companytitle:'Company',
    durationtitle:'Duration',
    detailstitle:'Description'

  }
  experiences:{designation:string,company:string,duration:string,details:string}[]=[{designation:'',company:'',duration:'',details:''}];
  experienceId:number=0;

  onSetExperienceDetails(experiences){
    this.experiences=experiences;
    localStorage.setItem('experienceDetails', JSON.stringify(this.experiences));
  }
  onAddExperienceDetails(){
    this.experiences=JSON.parse(localStorage.getItem('experienceDetails'));
    this.experiences.push(
      {designation:'',company:'',duration:'',details:''}
    )
    localStorage.setItem('experienceDetails', JSON.stringify(this.experiences));
  }
  onRemoveExperienceDetails(id){
    this.experiences=JSON.parse(localStorage.getItem('experienceDetails'));
    this.experiences.splice(id,1);
    localStorage.setItem('experienceDetails', JSON.stringify(this.experiences));
  }

  onSetExperienceId(id){
    this.experienceId=id;
  }

}

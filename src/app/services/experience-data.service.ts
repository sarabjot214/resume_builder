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
  }
  onAddExperienceDetails(){
    this.experiences.push(
      {designation:'',company:'',duration:'',details:''}
    )
  }
  onRemoveExperienceDetails(id){
    this.experiences.splice(id,1);
  }

  onSetExperienceId(id){
    this.experienceId=id;
  }

}

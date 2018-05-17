import { Injectable } from '@angular/core';

@Injectable()
export class SkillsDataService {

  constructor() { }
  skillsTitle:{title}={title:'Skills'}
  skills:{name:string,details:string}[]=[{name:'',details:''}];
  skillId:number=0;

  onSetSkillDetails(skills){
    this.skills=skills;
    localStorage.setItem('skillDetails', JSON.stringify(this.skills));
  }
  onAddSkillDetails(){
    this.skills=JSON.parse(localStorage.getItem('skillDetails'));
    this.skills.push({
      name:'',details:''
    })
    localStorage.setItem('skillDetails', JSON.stringify(this.skills));
  }
  onRemoveSkillDetails(id){
    this.skills=JSON.parse(localStorage.getItem('skillDetails'));
    this.skills.splice(id,1);
    localStorage.setItem('skillDetails', JSON.stringify(this.skills));
  }

  onSetSkillId(id){
    this.skillId=id;
  }

}

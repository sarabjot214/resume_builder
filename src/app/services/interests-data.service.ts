import { Injectable } from '@angular/core';

@Injectable()
export class InterestsDataService {

  constructor() { }
  interestsTitle:{title}={title:'Interest'};
  interests:string[]=[''];
  interestId:number=0;

  onSetInterests(interests){
    this.interests=interests;
  }

  onAddInterests(){
    this.interests.push('');
  }

  onRemoveInterests(id){
    this.interests.splice(id,1);
  }

  onSetInterestsId(id){
    this.interestId=id;
  }

}

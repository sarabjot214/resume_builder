import { Injectable } from '@angular/core';

@Injectable()
export class InterestsDataService {

  constructor() { }
  interestsTitle:{title}={title:'Interest'};
  interests:string[]=[''];
  interestId:number=0;

  onSetInterests(interests){
    this.interests=interests;
    localStorage.setItem('interestDetails', JSON.stringify(this.interests));
  }

  onAddInterests(){
    this.interests=JSON.parse(localStorage.getItem('interestDetails'));
    this.interests.push('');
    localStorage.setItem('interestDetails', JSON.stringify(this.interests));
  }

  onRemoveInterests(id){
    this.interests=JSON.parse(localStorage.getItem('interestDetails'));
    this.interests.splice(id,1);
    localStorage.setItem('interestDetails', JSON.stringify(this.interests));
  }

  onSetInterestsId(id){
    this.interestId=id;
  }

}

import { Injectable } from '@angular/core';

@Injectable()
export class HobbiesDataService {

  constructor() { }
  hobbiesTitle:{title}={title:'Hobbies'}
  hobbies:string[]=[''];
  hobbieId:number=0;

  onSetHobbies(hobbies){
    this.hobbies=hobbies;
    localStorage.setItem('hobbyDetails', JSON.stringify(this.hobbies));
  }

  onAddHobbies(){
    this.hobbies=JSON.parse(localStorage.getItem('hobbyDetails'));
    this.hobbies.push('');
    localStorage.setItem('hobbyDetails', JSON.stringify(this.hobbies));
  }

  onRemoveHobbies(id){
    this.hobbies=JSON.parse(localStorage.getItem('hobbyDetails'));
    this.hobbies.splice(id,1);
    localStorage.setItem('hobbyDetails', JSON.stringify(this.hobbies));
  }

  onSetHobbiesId(id){
    this.hobbieId=id;
  }

}

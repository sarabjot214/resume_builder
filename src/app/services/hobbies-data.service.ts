import { Injectable } from '@angular/core';

@Injectable()
export class HobbiesDataService {

  constructor() { }
  hobbiesTitle:{title}={title:'Hobbies'}
  hobbies:string[]=[''];
  hobbieId:number=0;

  onSetHobbies(hobbies){
    this.hobbies=hobbies;
  }

  onAddHobbies(){
    this.hobbies.push('');
  }

  onRemoveHobbies(id){
    this.hobbies.splice(id,1);
  }

  onSetHobbiesId(id){
    this.hobbieId=id;
  }

}

import { Injectable } from '@angular/core';

@Injectable()
export class LanguagesDataService {

  constructor() { }

  languageTitle:{title}={
    title:'Language'
  }
  languages:string[]=[''];
  languageId:number=0;

  onSetLanguages(languages){
    this.languages=languages;
    localStorage.setItem('languageDetails', JSON.stringify(this.languages));
  }

  onAddLanguages(){
    this.languages=JSON.parse(localStorage.getItem('languageDetails'));
    this.languages.push('');
    localStorage.setItem('languageDetails', JSON.stringify(this.languages));
  }

  onRemoveLanguages(id){
    this.languages=JSON.parse(localStorage.getItem('languageDetails'));
    this.languages.splice(id,1);
    localStorage.setItem('languageDetails', JSON.stringify(this.languages));
  }

  onSetLanguagesId(id){
    this.languageId=id;
  }

}

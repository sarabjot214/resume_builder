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
  }

  onAddLanguages(){
    this.languages.push('');
  }

  onRemoveLanguages(id){
    this.languages.splice(id,1);
  }

  onSetLanguagesId(id){
    this.languageId=id;
  }

}

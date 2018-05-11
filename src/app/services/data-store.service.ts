import { Injectable } from '@angular/core';

@Injectable()
export class DataStoreService {

  templateId:number=1;
  templateIdprev:number=4;

  links:{activateHobbies,activateInterests,activateCertificates,activateLanguages,activateSummary}={
  activateHobbies:0,
  activateInterests:0,
  activateCertificates:0,
  activateLanguages:0,
  activateSummary:0
  }

  sections:{addHobbies,addInterests,addCertificates,addLanguagesKnown,addSummary}={
  addHobbies:0,
  addInterests:0,
  addCertificates:0,
  addLanguagesKnown:0,
  addSummary:0
  }

  constructor() { }

  onSetTemplateId(templateId,templateIdprev){
    this.templateId=templateId;
    this.templateIdprev=templateIdprev;
  }

  onActivateLinks(links){
    this.links=links;
  }

  onAddSections(sections){
    this.sections=sections;
  }
}

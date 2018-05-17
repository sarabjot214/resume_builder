import { Component, OnInit,OnDestroy} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { DataStoreService } from '../services/data-store.service';

@Component({
  selector: 'app-resume-builder',
  templateUrl: './resume-builder.component.html',
  styleUrls: ['./resume-builder.component.css']
})
export class ResumeBuilderComponent implements OnInit, OnDestroy {
  
  links:{activateHobbies,activateInterests,activateCertificates,activateLanguages,activateSummary}
  sections:{addHobbies,addInterests,addCertificates,addLanguagesKnown,addSummary}
  public templateId:number;
  moreComponents:number=0;

  constructor(private router:Router,private route:ActivatedRoute,private dataStore:DataStoreService,private window: Window) {
      window.onbeforeunload = (ev) => {
      console.log(this.links)
      this.dataStore.onActivateLinks(this.links);
      console.log(this.sections)
      this.dataStore.onAddSections(this.sections);
    }
   }

  ngOnInit() {
    this.links=JSON.parse(localStorage.getItem('linkDetails'));
    console.log(this.links)
    this.templateId=this.route.snapshot.params['id'];
  }

  onPreview(){
    this.router.navigate([this.templateId])
  }

  onBackPage(){
    this.dataStore.onAddSections(
      this.sections={
        addHobbies:0,
        addInterests:0,
        addCertificates:0,
        addLanguagesKnown:0,
        addSummary:0
        }
    );
    this.dataStore.onActivateLinks(
      this.links={
        activateHobbies:0,
        activateInterests:0,
        activateCertificates:0,
        activateLanguages:0,
        activateSummary:0
        }
    ); 
    this.router.navigate(['home'])
  }

  onAddSection(){
    this.moreComponents=1;
    this.sections=JSON.parse(localStorage.getItem('sectionDetails'));
    console.log(this.sections)
  }

  onSaveChanges(){
    this.dataStore.onAddSections(this.sections)
    this.sections=JSON.parse(localStorage.getItem('sectionDetails'));
    if(this.sections.addHobbies==1){
      this.links.activateHobbies=1;
    }
    else{
      this.links.activateHobbies=0;
    }

    if(this.sections.addInterests==1){
      this.links.activateInterests=1;
    }
    else{
      this.links.activateInterests=0;
    }

    if(this.sections.addCertificates==1){
      this.links.activateCertificates=1;
    }
    else{
      this.links.activateCertificates=0;
    }

    if(this.sections.addLanguagesKnown==1){
      this.links.activateLanguages=1;
    }
    else{
      this.links.activateLanguages=0;
    }
    
    if(this.sections.addSummary==1){
      this.links.activateSummary=1;
    }
    else{
      this.links.activateSummary=0;
    }
    this.dataStore.onActivateLinks(this.links)
    this.links=JSON.parse(localStorage.getItem('linkDetails'));
    this.moreComponents=0;
  }

  onBack(){
    this.links=JSON.parse(localStorage.getItem('linkDetails'));
    if(this.moreComponents==1){
      if(this.links.activateHobbies==1){this.sections.addHobbies=1}else{this.sections.addHobbies=0}
      if(this.links.activateInterests==1){this.sections.addInterests=1}else{this.sections.addInterests=0}
      if(this.links.activateCertificates==1){this.sections.addCertificates=1}else{this.sections.addCertificates=0}
      if(this.links.activateLanguages==1){this.sections.addLanguagesKnown=1}else{this.sections.addLanguagesKnown=0}
      if(this.links.activateSummary==1){this.sections.addSummary=1}else{this.sections.addSummary=0}
      }
    this.dataStore.onAddSections(this.sections)
    this.moreComponents=0;
  }

  onAddHobbies(){
    if(this.sections.addHobbies==0){
      this.sections.addHobbies=1;
    }
    else{
      this.sections.addHobbies=0;
    }
    
  }

  onAddInterests(){
    if(this.sections.addInterests==0){
      this.sections.addInterests=1;
    }
    else{
      this.sections.addInterests=0;
    }
    
  }

  onAddCertificates(){
    if(this.sections.addCertificates==0){
      this.sections.addCertificates=1;
    }
    else{
      this.sections.addCertificates=0;
    }
  }

  onAddLanguagesKnown(){
    if(this.sections.addLanguagesKnown==0){
      this.sections.addLanguagesKnown=1;
    }
    else{
      this.sections.addLanguagesKnown=0;
    }
  }

  onAddSummary(){
    if(this.sections.addSummary==0){
      this.sections.addSummary=1;
    }
    else{
      this.sections.addSummary=0;
    }
  }

  ngOnDestroy(){
    this.links=JSON.parse(localStorage.getItem('linkDetails'));
    if(this.moreComponents==1){   
      if(this.links.activateHobbies==1){this.sections.addHobbies=1}else{this.sections.addHobbies=0}
      if(this.links.activateInterests==1){this.sections.addInterests=1}else{this.sections.addInterests=0}
      if(this.links.activateCertificates==1){this.sections.addCertificates=1}else{this.sections.addCertificates=0}
      if(this.links.activateLanguages==1){this.sections.addLanguagesKnown=1}else{this.sections.addLanguagesKnown=0}
      if(this.links.activateSummary==1){this.sections.addSummary=1}else{this.sections.addSummary=0}
      this.dataStore.onAddSections(this.sections)
    }
  }

}

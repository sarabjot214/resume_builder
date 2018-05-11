import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ResumeBuilderComponent } from '../resume-builder.component';
import { FroalaEditorService } from '../../services/froala-editor.service';
import { LanguagesDataService } from '../../services/languages-data.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {

  templateId:number;
   options: Object;
   languages:string[];
   id:number;
   froalaId:number=0; 
   languageTitle:{title:string}

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private resumeBuilder:ResumeBuilderComponent,
    private froalaEditor:FroalaEditorService,
    private languagesService:LanguagesDataService
  ) { }

  ngOnInit() {
    this.templateId=this.resumeBuilder.templateId;
    this.options=this.froalaEditor.options;
    this.languages=this.languagesService.languages;
    this.id=this.languagesService.languageId;
    this.languageTitle=this.languagesService.languageTitle;
  }

  onAddDetails(){
    this.languagesService.onAddLanguages();
    this.id++;
    this.froalaId++;
  }

  onRemoveDetails(id){
    if(this.id>0){
      this.languagesService.onRemoveLanguages(id);
      this.id-1;
    }
    if(this.froalaId>0){
      this.froalaId--;
    }
  }

  onUpdateButton(buttonId){
    this.froalaId=buttonId.id;
  }
  onPreview(){
    this.router.navigate([this.templateId])
  }

ngOnDestroy(){
  this.languagesService.onSetLanguages(this.languages)
  this.languagesService.onSetLanguagesId(this.id)
}

}

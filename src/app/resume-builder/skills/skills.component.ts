import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ResumeBuilderComponent } from '../resume-builder.component';
import { FroalaEditorService } from '../../services/froala-editor.service';
import { SkillsDataService } from '../../services/skills-data.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

   templateId:number;
   options: Object;
   skills:{name:string,details:string}[];
   id:number;
   froalaId:number=0; 
   skillsTitle:{title:string}

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private resumeBuilder:ResumeBuilderComponent,
    private froalaEditor:FroalaEditorService,
    private skillsService:SkillsDataService,
    private window: Window
  ) {
      window.onbeforeunload = (ev) => {
      console.log(this.skills)
      this.skillsService.onSetSkillDetails(this.skills);
    }
  }

  ngOnInit() {
    this.templateId=this.resumeBuilder.templateId;
    this.options=this.froalaEditor.options;
    this.skills=JSON.parse(localStorage.getItem('skillDetails'));
    console.log(this.skills)
    this.id=this.skillsService.skillId;
    this.skillsTitle=this.skillsService.skillsTitle;
  }

  onAddDetails(){
    this.skillsService.onSetSkillDetails(this.skills)
    this.skillsService.onAddSkillDetails();
    this.skills=JSON.parse(localStorage.getItem('skillDetails'));
    this.id++;
    this.froalaId++;
  }

  onRemoveDetails(id){
    this.skillsService.onSetSkillDetails(this.skills)
    if(this.id>0){
      this.skillsService.onRemoveSkillDetails(id);
      this.id-1;
    }
    
    if(this.froalaId>0){
      this.froalaId--;
    }
    this.skills=JSON.parse(localStorage.getItem('skillDetails'));
  }

  onUpdateButton(buttonId){
    this.froalaId=buttonId.id;
  }
  onPreview(){
    this.router.navigate([this.templateId])
  }
ngOnDestroy(){
  this.skillsService.onSetSkillDetails(this.skills)
  this.skillsService.onSetSkillId(this.id)
}

}

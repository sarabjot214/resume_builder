import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ResumeBuilderComponent } from '../resume-builder.component';
import { FroalaEditorService } from '../../services/froala-editor.service';
import { ExperienceDataService } from '../../services/experience-data.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  
  templateId:number;
   options: Object;
   experiences:{designation:string,company:string,duration:string,details:string}[];
   id:number;
   froalaId:number=0; 
   experiencesTitle:{title:string,designationtitle:string,companytitle:string,durationtitle:string,detailstitle:string}
  constructor(
    
    private router:Router,
    private route:ActivatedRoute,
    private resumeBuilder:ResumeBuilderComponent,
    private froalaEditor:FroalaEditorService,
    private experienceDataService:ExperienceDataService
  ) { }

  ngOnInit() {
    this.templateId=this.resumeBuilder.templateId;
    this.options=this.froalaEditor.options;
    this.experiences=this.experienceDataService.experiences;
    this.id=this.experienceDataService.experienceId;
    this.experiencesTitle=this.experienceDataService.experiencesTitle;
  }

  onAddDetails(){
    this.experienceDataService.onAddExperienceDetails();
    this.id++;
    this.froalaId++;
  }

  onRemoveDetails(id){
    if(this.id>=1){
      this.experienceDataService.onRemoveExperienceDetails(id);
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
  this.experienceDataService.onSetExperienceDetails(this.experiences);
  this.experienceDataService.onSetExperienceId(this.id)
}

}

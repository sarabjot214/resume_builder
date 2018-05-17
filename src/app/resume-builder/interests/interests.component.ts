import { Component, OnInit } from '@angular/core';
import { ResumeBuilderComponent } from '../resume-builder.component';
import { FroalaEditorService } from '../../services/froala-editor.service';
import { InterestsDataService } from '../../services/interests-data.service';
import { Router,ActivatedRoute } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {

  templateId:number;
   options: Object;
   interests:string[];
   id:number;
   froalaId:number=0;
   interestsTitle:{title:string} 

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private resumeBuilder:ResumeBuilderComponent,
    private froalaEditor:FroalaEditorService,
    private interestsService:InterestsDataService,
    private window: Window
  ) {
      window.onbeforeunload = (ev) => {
      console.log(this.interests)
      this.interestsService.onSetInterests(this.interests);
    }
  }

  ngOnInit() {
    this.templateId=this.resumeBuilder.templateId;
    this.options=this.froalaEditor.options;
    this.interests=JSON.parse(localStorage.getItem('interestDetails'));
    console.log(this.interests)
    this.id=this.interestsService.interestId;
    this.interestsTitle=this.interestsService.interestsTitle;
  }

  onAddDetails(){
    this.interestsService.onSetInterests(this.interests);
    this.interestsService.onAddInterests();
    this.interests=JSON.parse(localStorage.getItem('interestDetails'));
    this.id++;
    this.froalaId++;
  }

  onRemoveDetails(id){
    this.interestsService.onSetInterests(this.interests);
    if(this.id>=1){
      this.interestsService.onRemoveInterests(id);
      this.id-1;
    }
    if(this.froalaId>0){
      this.froalaId--;
    }
    this.interests=JSON.parse(localStorage.getItem('interestDetails'));
  }

  onUpdateButton(buttonId){
    this.froalaId=buttonId.id;
  }
  onPreview(){
    this.router.navigate([this.templateId])
  }
ngOnDestroy(){
  this.interestsService.onSetInterests(this.interests)
  this.interestsService.onSetInterestsId(this.id)
}

}

import { Component, OnInit } from '@angular/core';
import { ResumeBuilderComponent } from '../resume-builder.component';
import { FroalaEditorService } from '../../services/froala-editor.service';
import { HobbiesDataService } from '../../services/hobbies-data.service';
import { Router,ActivatedRoute } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {

  templateId:number;
   options: Object;
   hobbies:string[];
   id:number;
   froalaId:number=0; 
    hobbiesTitle:{title:string}
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private resumeBuilder:ResumeBuilderComponent,
    private froalaEditor:FroalaEditorService,
    private hobbiesService:HobbiesDataService
  ) { }

  ngOnInit() {
    this.templateId=this.resumeBuilder.templateId;
    this.options=this.froalaEditor.options;
    this.hobbies=this.hobbiesService.hobbies;
    this.id=this.hobbiesService.hobbieId;
    this.hobbiesTitle=this.hobbiesService.hobbiesTitle;
  }

  onAddDetails(){
    this.hobbiesService.onAddHobbies();
    this.id++;
    this.froalaId++;
  }

  onRemoveDetails(id){
    if(this.id>=1){
      this.hobbiesService.onRemoveHobbies(id);
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
  this.hobbiesService.onSetHobbies(this.hobbies)
  this.hobbiesService.onSetHobbiesId(this.id)
}

}

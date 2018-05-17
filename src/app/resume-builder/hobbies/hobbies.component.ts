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
    private hobbiesService:HobbiesDataService,
    private window: Window
  ) {
      window.onbeforeunload = (ev) => {
      console.log(this.hobbies)
      this.hobbiesService.onSetHobbies(this.hobbies);
    }
  }

  ngOnInit() {
    this.templateId=this.resumeBuilder.templateId;
    this.options=this.froalaEditor.options;
    this.hobbies=JSON.parse(localStorage.getItem('hobbyDetails'));
    console.log(this.hobbies)
    this.id=this.hobbiesService.hobbieId;
    this.hobbiesTitle=this.hobbiesService.hobbiesTitle;
  }

  onAddDetails(){
    this.hobbiesService.onSetHobbies(this.hobbies);
    this.hobbiesService.onAddHobbies();
    this.hobbies=JSON.parse(localStorage.getItem('hobbyDetails'));
    this.id++;
    this.froalaId++;
  }

  onRemoveDetails(id){
    this.hobbiesService.onSetHobbies(this.hobbies);
    if(this.id>=1){
      this.hobbiesService.onRemoveHobbies(id);
      this.id-1;
    }
    if(this.froalaId>0){
      this.froalaId--;
    }
    this.hobbies=JSON.parse(localStorage.getItem('hobbyDetails'));
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

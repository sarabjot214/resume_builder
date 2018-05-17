import { Component, OnInit, OnDestroy } from '@angular/core';
 
import { Router,ActivatedRoute } from '@angular/router';
import { ResumeBuilderComponent } from '../resume-builder.component';
import { FroalaEditorService } from '../../services/froala-editor.service';
import { EducationDetailsDataService } from '../../services/education-details-data.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit ,OnDestroy{

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private resumeBuilder:ResumeBuilderComponent,
    private froalaEditor:FroalaEditorService,
    private educationDetailsData:EducationDetailsDataService,
    private window: Window
  ) {
      window.onbeforeunload = (ev) => {
      console.log(this.educationDetails)
      this.educationDetailsData.onSetEducationDetails(this.educationDetails);
    }
   }

   templateId:number;
   options:object;
   educationDetails:{schoolName:string,Qualification:string,Marks:string,yearOfPassing:string}[];
   id:number;
   froalaId:number=0;
   educationDetailsTitle:{schoolnametitle:string,Qualificationtitle:string,Markstitle:string,yearOfPassingtitle:string};

  ngOnInit() {
    this.templateId=this.resumeBuilder.templateId;
    this.options=this.froalaEditor.options;
    this.educationDetails=JSON.parse(localStorage.getItem('educationDetails'));
    console.log(this.educationDetails)
    this.id=this.educationDetailsData.educationId;
    this.educationDetailsTitle=this.educationDetailsData.educationDetailsTitle;
    }

    onAddDetails(){
      this.educationDetailsData.onSetEducationDetails(this.educationDetails)
      this.educationDetailsData.onAddEducationDetails();
      this.educationDetails=JSON.parse(localStorage.getItem('educationDetails'));
      console.log(this.educationDetails)
      this.id++;
      this.froalaId++;
    }

    onRemoveDetails(id){
      this.educationDetailsData.onSetEducationDetails(this.educationDetails)
      if(this.id>=1){
        this.educationDetailsData.onRemoveEducationDetails(id);
        this.id-1;
      }
      if(this.froalaId>0){
        this.froalaId--;
      }
      this.educationDetails=JSON.parse(localStorage.getItem('educationDetails'));
    }

    onUpdateButton(buttonId){
      this.froalaId=buttonId.id;
    }
    onPreview(){
      this.router.navigate([this.templateId])
    }

  ngOnDestroy(){
    this.educationDetailsData.onSetEducationDetails(this.educationDetails)
    this.educationDetailsData.onSetEducationId(this.id)
  }
}

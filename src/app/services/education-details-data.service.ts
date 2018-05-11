import { Injectable } from '@angular/core';

@Injectable()
export class EducationDetailsDataService {

  constructor() { }
  educationDetailsTitle:{title,schoolnametitle,Qualificationtitle,Markstitle,yearOfPassingtitle}=
  {  title:'Education',
    schoolnametitle:'School/College',
    Qualificationtitle:'Qualification',
    Markstitle:'Marks',
    yearOfPassingtitle:'Duration'

  }
  educationDetails:{schoolName:string,Qualification:string,Marks:string,yearOfPassing:string}[]=[{schoolName:'',Qualification:'',Marks:'',yearOfPassing:''}];
  educationId:number=0;

  onSetEducationDetails(educationDetails){
    this.educationDetails=educationDetails;
  }
  onAddEducationDetails(){
    this.educationDetails.push({
      schoolName:'',Qualification:'',Marks:'',yearOfPassing:''
    })
  }
  onRemoveEducationDetails(id){
    this.educationDetails.splice(id,1);
  }

  onSetEducationId(id){
    this.educationId=id;
  }

}

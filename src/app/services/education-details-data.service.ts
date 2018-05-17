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
    localStorage.setItem('educationDetails', JSON.stringify(this.educationDetails));
  }
  onAddEducationDetails(){
    this.educationDetails=JSON.parse(localStorage.getItem('educationDetails'));
    this.educationDetails.push({
      schoolName:'',Qualification:'',Marks:'',yearOfPassing:''
    })
    localStorage.setItem('educationDetails', JSON.stringify(this.educationDetails));
  }
  onRemoveEducationDetails(id){
    this.educationDetails=JSON.parse(localStorage.getItem('educationDetails'));
    this.educationDetails.splice(id,1);
    localStorage.setItem('educationDetails', JSON.stringify(this.educationDetails));
  }

  onSetEducationId(id){
    this.educationId=id;
  }

}

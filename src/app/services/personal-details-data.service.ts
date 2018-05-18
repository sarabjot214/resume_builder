import { Injectable } from '@angular/core';

@Injectable()
export class PersonalDetailsDataService {

  constructor() { }

  personalDetails:{name,profession,dob,phoneNo,email,address,image,nametitle,professiontitle,dobtitle,phoneNotitle,emailtitle,addresstitle,imagetitle}={
    name:'',
    profession:'',
    dob:'',
    phoneNo:'',
    email:'',
    address:'',
    image:'',
    nametitle:'Name',
    professiontitle:'Profession',
    dobtitle:'Date Of Birth',
    phoneNotitle:'Phone No',
    emailtitle:'Email',
    addresstitle:'Address',
    imagetitle:'Image'
  }

  newFields:{fieldName:string,fieldInfo:string}[]=[];
  newFieldId:number=-1;

  onSetPersonalDetails(personalDetails){
    this.personalDetails=personalDetails;
    localStorage.setItem('personalDetails', JSON.stringify(this.personalDetails));
  }

  // onSetNewFields(newFields){
  //   this.newFields=newFields;
  // }

  // onAddNewFields(){
  //   this.newFields.push({
  //     fieldName:'Field:',fieldInfo:'Info'
  //   });
  // }

  // onRemoveNewFields(){
  //   this.newFields.pop();
  // }

  // onSetNewFieldsId(id){
  //   this.newFieldId=id;
  // }

}

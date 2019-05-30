import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';

@Injectable()
export class PersonalDetailsDataService {

  constructor(private _http: Http) { }

  personalDetails: { name, profession, dob, phoneNo, email, address, image, nametitle, professiontitle, dobtitle, phoneNotitle, emailtitle, addresstitle, imagetitle } = {
    name: '',
    profession: '',
    dob: '',
    phoneNo: '',
    email: '',
    address: '',
    image: '',
    nametitle: 'Name',
    professiontitle: 'Profession',
    dobtitle: 'Date Of Birth',
    phoneNotitle: 'Phone No',
    emailtitle: 'Email',
    addresstitle: 'Address',
    imagetitle: 'Image'
  }

  newFields: { fieldName: string, fieldInfo: string }[] = [];
  newFieldId: number = -1;

  onSetPersonalDetails(personalDetails, login, currentUserId) {
    this.personalDetails = personalDetails;
    var {name, profession, dob, phoneNo, email, address} = personalDetails
    var userDetails = {currentUserId, name, profession, dob, phoneNo, email, address}
    localStorage.setItem('personalDetails', JSON.stringify(this.personalDetails));
    console.log("Service Data :- ", login, currentUserId )
    if (login == true && currentUserId) {
      var headers = new Headers;
      return this._http.post(`http://localhost:3002/api/user/${currentUserId}/personalDetails`, userDetails, { headers: headers })
        .map(response => response.json());
    }
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

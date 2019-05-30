import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  result:any;
  login=false
  currentUserId:any
  
  constructor(private _http:Http) { }

  getUsers(){
    return this._http.get("http://localhost:3002/api/user")
    .map(result=>this.result=result.json().data);
  }

  addUsers(user){
    // let urlSearchParams = new URLSearchParams();
    // urlSearchParams.append('location', 'punjab');
    // urlSearchParams.append('phoneNo', '9815811257');
    this.login=false
    var headers=new Headers;
    // headers.append('Content-Type','application/x-www-form-urlencoded');
    return this._http.post("http://localhost:3002/api/signup",user,{headers:headers})
    .map(response=>response.json());
  }

  authenticateUser(user){
    var headers=new Headers;
    headers.append('Content-Type','application/json');
    return this._http.post("http://localhost:3002/api/login",JSON.stringify(user),{headers:headers})
    .map(response=>response.json());
  }

  onSuccess(){
    this.login=true
    localStorage.setItem('loginDetails', JSON.stringify(this.login));
  }

  onStart(){
    this.login=false
    localStorage.setItem('loginDetails', JSON.stringify(this.login));
  }

  // registerUsers(user){
  //   var headers=new Headers;
  //   headers.append('Content-Type','application/json');
  //   return this._http.post("/api/register",JSON.stringify(user),{headers:headers})
  //   .map(response=>response.json());
  // }

  // loginUsers(user){
  //   var headers=new Headers;
  //   headers.append('Content-Type','application/json');
  //   return this._http.post("/api/login",JSON.stringify(user),{headers:headers})
  //   .map(response=>response.json());
  // }

}

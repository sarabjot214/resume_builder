import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  result:any;
  login=false

  constructor(private _http:Http) { }

  getUsers(){
    return this._http.get("/api/user")
    .map(result=>this.result=result.json().data);
  }

  addUsers(user){
    this.login=false
    var headers=new Headers;
    headers.append('Content-Type','application/json');
    return this._http.post("/api/user",JSON.stringify(user),{headers:headers})
    .map(response=>response.json());
  }

  authenticateUser(user){
    var headers=new Headers;
    headers.append('Content-Type','application/json');
    return this._http.post("/api/login",JSON.stringify(user),{headers:headers})
    .map(response=>response.json());
  }

  onSuccess(){
    this.login=true
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

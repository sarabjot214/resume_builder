import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';

import { DataService } from '../data.service';
import { DataStoreService } from '../services/data-store.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  @ViewChild ('f') logInForm:NgForm;
  user:{email:string,password:string}={email:'',password:''};
  validCredentials=true

  constructor(private _dataService: DataService,private dataStore:DataStoreService,private router:Router) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log('Login Form Submitted Successfully');
    console.log(this.logInForm);
    this._dataService.authenticateUser(this.user)
    .subscribe(data=>{
      if(this.isEmptyObject(data)){
        console.log('Authentication Failed')
        this.validCredentials=false
      }  
      else{
        this._dataService.onSuccess();
        console.log('Success '+data.name)
        this._dataService.currentUserId = data._id
        this.router.navigate([this.dataStore.templateId])
      }
    });
  }

  // onSignUp(){
  //   this.router.navigate(['sign-up'])
  // }

  isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }

}

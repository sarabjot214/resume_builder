import { Component, OnInit , ViewChild } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms'

import { DataService } from '../data.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  @ViewChild ('f') signUpForm:NgForm;
  user:{name:string,email:string,password:string}={name:'',email:'',password:''};
  valid=false
  validCredentials = true
  
  constructor(private _dataService: DataService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
  }

  onSignIn(){
    this._dataService.addUsers(this.user)
    .subscribe(data=>{console.log('Success '+data)});
  }

  // onSubmit(form:NgForm){
  //   console.log('Submitted Successfully');
  //   console.log(form);
  // }

  onSubmit(){
    console.log('SignUp Form Submitted Successfully');
    console.log(this.signUpForm);
    this._dataService.addUsers(this.user)
    .subscribe(data=>{
      console.log(data);
      if(this.isEmptyObject(data)){
        console.log('Authentication Failed')
        this.validCredentials=false
      }
      else{
        console.log('Success '+data)
        this.validCredentials=true
        this.valid=true
      }
    });
    // this._dataService.registerUsers(this.user)
    // .subscribe(data=>{console.log('Success '+data)});
  }

  onLogIn(){
    this.router.navigate(['log-in'])
  }

  onBack(){
    this.router.navigate(['log-in'])
  }

  isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }

}

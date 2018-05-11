import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.css']
})
export class IndexPageComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute){}

  ngOnInit() {
  }

  onSuccess(){
    this.router.navigate(['home']);
  }

  onSignUp(){
    this.router.navigate(['log-in'])
  }

}

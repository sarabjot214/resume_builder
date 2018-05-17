import { Component, OnInit } from '@angular/core';
import { ResumeBuilderComponent } from '../resume-builder.component';
import { FroalaEditorService } from '../../services/froala-editor.service';
import { CertificatesDataService } from '../../services/certificates-data.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {

  templateId:number;
   options: Object;
   certificates:string[];
   id:number;
   froalaId:number=0; 
   certificatesTitle:{title:string};

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private resumeBuilder:ResumeBuilderComponent,
    private froalaEditor:FroalaEditorService,
    private certificatesService:CertificatesDataService,
    private window: Window
  ) {
      window.onbeforeunload = (ev) => {
      console.log(this.certificates)
      this.certificatesService.onSetCertificates(this.certificates);
    }
   }

  ngOnInit() {
    
    this.templateId=this.resumeBuilder.templateId;
    this.options=this.froalaEditor.options;
    this.certificates=JSON.parse(localStorage.getItem('certificateDetails'));
    console.log(this.certificates)
    this.id=this.certificatesService.certificateId;
    this.certificatesTitle=this.certificatesService.certificatesTitle;
  }

  onAddDetails(){
    this.certificatesService.onSetCertificates(this.certificates);
    this.certificatesService.onAddCertificates();
    this.certificates=JSON.parse(localStorage.getItem('certificateDetails'));
    this.id++;
    this.froalaId++;
  }
  loadingPage() {
    var myVar = setTimeout(this.showPage, 10000);
}
showPage() {
 
  document.getElementById("myDiv").style.display ="none";
  document.getElementById("loader").remove;
}

  onRemoveDetails(id){
    this.certificatesService.onSetCertificates(this.certificates);
    if(this.id>=1){
      this.certificatesService.onRemoveCertificates(id);
      this.id-1;
    }
    if(this.froalaId>0){
      this.froalaId--;
    }
    this.certificates=JSON.parse(localStorage.getItem('certificateDetails'));
  }

  onUpdateButton(buttonId){
    this.froalaId=buttonId.id;
  }
  onPreview(){
    this.router.navigate([this.templateId])
  }

ngOnDestroy(){
  this.certificatesService.onSetCertificates(this.certificates)
  this.certificatesService.onSetCertificatesId(this.id)
}

}

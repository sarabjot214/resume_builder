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
    
  ) { }

  ngOnInit() {
    
    this.templateId=this.resumeBuilder.templateId;
    this.options=this.froalaEditor.options;
    this.certificates=this.certificatesService.certificates;
    this.id=this.certificatesService.certificateId;
    this.certificatesTitle=this.certificatesService.certificatesTitle;
  }

  onAddDetails(){
    this.certificatesService.onAddCertificates();
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
    if(this.id>=1){
      this.certificatesService.onRemoveCertificates(id);
      this.id-1;
    }
    if(this.froalaId>0){
      this.froalaId--;
    }
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

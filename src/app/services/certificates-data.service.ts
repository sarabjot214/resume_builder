import { Injectable } from '@angular/core';

@Injectable()
export class CertificatesDataService {

  constructor() { }
  certificatesTitle:{title}={
    title:'Certificates'
  }
  certificates:string[]=[''];
  certificateId:number=0;

  onSetCertificates(certificates){
    this.certificates=certificates;
    localStorage.setItem('certificateDetails', JSON.stringify(this.certificates));
  }

  onAddCertificates(){
    this.certificates=JSON.parse(localStorage.getItem('certificateDetails'));
    this.certificates.push('');
    localStorage.setItem('certificateDetails', JSON.stringify(this.certificates));
  }

  onRemoveCertificates(id){
    this.certificates=JSON.parse(localStorage.getItem('certificateDetails'));
    this.certificates.splice(id,1);
    localStorage.setItem('certificateDetails', JSON.stringify(this.certificates));
  }

  onSetCertificatesId(id){
    this.certificateId=id;
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Router, ActivatedRoute } from '@angular/router';
import { ResumeBuilderComponent } from '../resume-builder.component';
import { FroalaEditorService } from '../../services/froala-editor.service';
import { PersonalDetailsDataService } from '../../services/personal-details-data.service';


@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit, OnDestroy {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private resumeBuilder: ResumeBuilderComponent,
    private froalaEditor: FroalaEditorService,
    private personalDetailsData: PersonalDetailsDataService,
    private window: Window
  ) { 
    window.onbeforeunload = (ev) => {
      console.log(this.personalDetails)
      this.personalDetailsData.onSetPersonalDetails(this.personalDetails);
    }
  }

  templateId: number;
  options: object;
  optionsImage: object;
  personalDetails: { name: string, profession: string, dob: string, phoneNo: string, email: string, address: string, image: string ,nametitle: string,professiontitle: string,dobtitle: string,phoneNotitle: string,emailtitle: string,addresstitle: string,imagetitle: string};
  newFields: { fieldName: string, fieldInfo: string }[];
  id: number;
  froalaId: number = 1;
  newFieldsFroalaId: number = -1;
  dateValidFlag = 0;

  ngOnInit() {
    this.templateId = this.resumeBuilder.templateId;
    this.options = this.froalaEditor.options;
    this.optionsImage = this.froalaEditor.imageOptions;
    this.personalDetails = JSON.parse(localStorage.getItem('personalDetails'));
    console.log(this.personalDetails)
    localStorage.removeItem('personalDetails'); // to clear it again.
    this.newFields = this.personalDetailsData.newFields;
    this.id = this.personalDetailsData.newFieldId;
  }

  onTextClick(froalaId: number) {
    this.froalaId = froalaId;
  }

  // onAddDetails() {
  //   this.personalDetailsData.onAddNewFields();
  //   this.froalaId = 7;
  //   this.id++;
  //   this.newFieldsFroalaId++;
  // }

  // onRemoveDetails() {
  //   if (this.id >= 0) {
  //     this.personalDetailsData.onRemoveNewFields();
  //     this.id--;
  //   }
  //   if (this.newFieldsFroalaId > -1) {
  //     this.newFieldsFroalaId--;
  //   }
  //   if (this.newFieldsFroalaId == -1) {
  //     this.froalaId = 5;
  //   }
  // }

  onUpdateButton(froalaId, buttonId) {
    this.froalaId = froalaId;
    this.newFieldsFroalaId = buttonId.id;
  }

  ngOnDestroy() {
    this.personalDetailsData.onSetPersonalDetails(this.personalDetails);
    // this.personalDetailsData.onSetNewFields(this.newFields);
    // this.personalDetailsData.onSetNewFieldsId(this.id);
  }
  onPreview() {
    this.router.navigate([this.templateId])
  }

  

}

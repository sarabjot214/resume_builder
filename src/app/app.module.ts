import { BrowserModule } from '@angular/platform-browser';
import { HttpModule} from '@angular/http'
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import "froala-editor/js/froala_editor.pkgd.min.js";
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FroalaEditorModule, FroalaViewModule } from 'angular2-froala-wysiwyg';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery'
window["$"] = $;
window["jQuery"] = $;

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ResumeBuilderComponent } from './resume-builder/resume-builder.component';
import { PersonalDetailsComponent } from './resume-builder/personal-details/personal-details.component';
import { EducationComponent } from './resume-builder/education/education.component';
import { SkillsComponent } from './resume-builder/skills/skills.component';
import { ExperienceComponent } from './resume-builder/experience/experience.component';
import { HobbiesComponent } from './resume-builder/hobbies/hobbies.component';
import { InterestsComponent } from './resume-builder/interests/interests.component';
import { CertificatesComponent } from './resume-builder/certificates/certificates.component';
import { LanguagesComponent } from './resume-builder/languages/languages.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { ResumePreviewComponent } from './resume-preview/resume-preview.component';
import { ResumePreview1Component } from './resume-preview-1/resume-preview-1.component';
import { ResumePreview2Component } from './resume-preview-2/resume-preview-2.component';
import { ResumePreview3Component } from './resume-preview-3/resume-preview-3.component';

import { DataStoreService } from './services/data-store.service';
import { FroalaEditorService } from './services/froala-editor.service';
import { PersonalDetailsDataService } from './services/personal-details-data.service';
import { EducationDetailsDataService } from './services/education-details-data.service';
import { SkillsDataService } from './services/skills-data.service';
import { ExperienceDataService } from './services/experience-data.service';
import { HobbiesDataService } from './services/hobbies-data.service';
import { InterestsDataService } from './services/interests-data.service';
import { CertificatesDataService } from './services/certificates-data.service';
import { LanguagesDataService } from './services/languages-data.service';
import { DownloadService } from './services/download.service';
import {DataService} from './data.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component'


@NgModule({
  declarations: [
    AppComponent,
    ResumeBuilderComponent,
    PersonalDetailsComponent,
    EducationComponent,
    HomeComponent,
    ResumePreviewComponent,
    ResumePreview1Component,
    ResumePreview2Component,
    ResumePreview3Component,
    SkillsComponent,
    ExperienceComponent,
    HobbiesComponent,
    InterestsComponent,
    CertificatesComponent,
    LanguagesComponent,
    IndexPageComponent,
    SignUpComponent,
    LogInComponent,

  ],
  imports: [
    BrowserModule,HttpModule,FormsModule,AppRoutingModule,AngularFontAwesomeModule ,FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),NgbModule.forRoot()
  ],
  providers: [
    ResumeBuilderComponent,
    FroalaEditorService,
    DataStoreService,
    PersonalDetailsDataService,
    EducationDetailsDataService,
    SkillsDataService,
    ExperienceDataService,
    HobbiesDataService,
    InterestsDataService,
    CertificatesDataService,
    LanguagesDataService,
    DownloadService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

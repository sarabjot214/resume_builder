import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes , RouterModule} from '@angular/router';

import { IndexPageComponent } from '../index-page/index-page.component';
import { HomeComponent } from '../home/home.component';
import { ResumeBuilderComponent } from '../resume-builder/resume-builder.component';
import { PersonalDetailsComponent } from '../resume-builder/personal-details/personal-details.component';
import { EducationComponent } from '../resume-builder/education/education.component';
import { SkillsComponent } from '../resume-builder/skills/skills.component';
import { ExperienceComponent } from '../resume-builder/experience/experience.component';
import { HobbiesComponent } from '../resume-builder/hobbies/hobbies.component';
import { InterestsComponent } from '../resume-builder/interests/interests.component';
import { CertificatesComponent } from '../resume-builder/certificates/certificates.component';
import { LanguagesComponent } from '../resume-builder/languages/languages.component';
import { ResumePreviewComponent } from '../resume-preview/resume-preview.component';
import { ResumePreview1Component } from '../resume-preview-1/resume-preview-1.component';
import { ResumePreview2Component } from '../resume-preview-2/resume-preview-2.component';
import { ResumePreview3Component } from '../resume-preview-3/resume-preview-3.component';
import { LogInComponent } from '../log-in/log-in.component';
import { SignUpComponent } from '../sign-up/sign-up.component';




const appRoute:Routes=[
  {path:'',redirectTo:'/index',pathMatch:'full'},
  {path:'index',component:IndexPageComponent},
  {path:'home',component:HomeComponent},
  {path:'resumeDetails/:id',component:ResumeBuilderComponent,children:[
    {path: '', redirectTo: 'personalDetails', pathMatch: 'full' },
    {path:'personalDetails',component:PersonalDetailsComponent},
    {path:'education',component:EducationComponent},
    {path:'skills',component:SkillsComponent},
    {path:'experiences',component:ExperienceComponent},
    {path:'hobbies',component:HobbiesComponent},
    {path:'interests',component:InterestsComponent},
    {path:'certificates',component:CertificatesComponent},
    {path:'languages',component:LanguagesComponent}
  ]},
  {path:'1',component:ResumePreviewComponent},
  {path:'2',component:ResumePreview1Component},
  {path:'3',component:ResumePreview2Component},
  {path:'4',component:ResumePreview3Component},
  {path:'log-in',component:LogInComponent},
  {path:'sign-up',component:SignUpComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoute),
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

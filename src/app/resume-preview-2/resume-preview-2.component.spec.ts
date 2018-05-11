import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumePreview2Component } from './resume-preview-2.component';

describe('ResumePreview2Component', () => {
  let component: ResumePreview2Component;
  let fixture: ComponentFixture<ResumePreview2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumePreview2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumePreview2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

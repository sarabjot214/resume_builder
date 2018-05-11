import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumePreview1Component } from './resume-preview-1.component';

describe('ResumePreview1Component', () => {
  let component: ResumePreview1Component;
  let fixture: ComponentFixture<ResumePreview1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumePreview1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumePreview1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

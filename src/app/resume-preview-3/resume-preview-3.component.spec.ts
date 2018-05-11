import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumePreview3Component } from './resume-preview-3.component';

describe('ResumePreview3Component', () => {
  let component: ResumePreview3Component;
  let fixture: ComponentFixture<ResumePreview3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumePreview3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumePreview3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LearPipeComponent } from './lear-pipe.component';

describe('LearPipeComponent', () => {
  let component: LearPipeComponent;
  let fixture: ComponentFixture<LearPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InboxsComponent } from './inboxs.component';

describe('InboxsComponent', () => {
  let component: InboxsComponent;
  let fixture: ComponentFixture<InboxsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboxsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboxsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

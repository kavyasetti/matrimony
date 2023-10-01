import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyShadhiMoreComponent } from './my-shadhi-more.component';

describe('MyShadhiMoreComponent', () => {
  let component: MyShadhiMoreComponent;
  let fixture: ComponentFixture<MyShadhiMoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyShadhiMoreComponent]
    });
    fixture = TestBed.createComponent(MyShadhiMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

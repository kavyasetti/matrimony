import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyshaadiComponent } from './myshaadi.component';

describe('MyshaadiComponent', () => {
  let component: MyshaadiComponent;
  let fixture: ComponentFixture<MyshaadiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyshaadiComponent]
    });
    fixture = TestBed.createComponent(MyshaadiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

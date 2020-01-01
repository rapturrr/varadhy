import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurpeopleComponent } from './ourpeople.component';

describe('OurpeopleComponent', () => {
  let component: OurpeopleComponent;
  let fixture: ComponentFixture<OurpeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurpeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurpeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

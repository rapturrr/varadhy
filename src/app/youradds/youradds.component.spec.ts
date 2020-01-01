import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YouraddsComponent } from './youradds.component';

describe('YouraddsComponent', () => {
  let component: YouraddsComponent;
  let fixture: ComponentFixture<YouraddsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YouraddsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YouraddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

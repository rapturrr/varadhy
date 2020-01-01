import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutvaradhyComponent } from './aboutvaradhy.component';

describe('AboutvaradhyComponent', () => {
  let component: AboutvaradhyComponent;
  let fixture: ComponentFixture<AboutvaradhyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutvaradhyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutvaradhyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

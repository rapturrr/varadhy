import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostaddsComponent } from './postadds.component';

describe('PostaddsComponent', () => {
  let component: PostaddsComponent;
  let fixture: ComponentFixture<PostaddsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostaddsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostaddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

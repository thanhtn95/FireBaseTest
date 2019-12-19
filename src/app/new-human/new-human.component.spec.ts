import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHumanComponent } from './new-human.component';

describe('NewHumanComponent', () => {
  let component: NewHumanComponent;
  let fixture: ComponentFixture<NewHumanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewHumanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewHumanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

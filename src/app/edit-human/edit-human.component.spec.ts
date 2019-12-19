import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHumanComponent } from './edit-human.component';

describe('EditHumanComponent', () => {
  let component: EditHumanComponent;
  let fixture: ComponentFixture<EditHumanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHumanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHumanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

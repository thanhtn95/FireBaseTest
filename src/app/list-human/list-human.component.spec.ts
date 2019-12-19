import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHumanComponent } from './list-human.component';

describe('ListHumanComponent', () => {
  let component: ListHumanComponent;
  let fixture: ComponentFixture<ListHumanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListHumanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHumanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

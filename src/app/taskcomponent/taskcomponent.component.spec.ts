import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskcomponentComponent } from './taskcomponent.component';

describe('TaskcomponentComponent', () => {
  let component: TaskcomponentComponent;
  let fixture: ComponentFixture<TaskcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskcomponentComponent]
    });
    fixture = TestBed.createComponent(TaskcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

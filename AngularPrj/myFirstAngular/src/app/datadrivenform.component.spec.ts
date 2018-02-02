import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatadrivenformComponent } from './datadrivenform.component';

describe('DatadrivenformComponent', () => {
  let component: DatadrivenformComponent;
  let fixture: ComponentFixture<DatadrivenformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatadrivenformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatadrivenformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

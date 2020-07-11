import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plywood1Component } from './plywood1.component';

describe('Plywood1Component', () => {
  let component: Plywood1Component;
  let fixture: ComponentFixture<Plywood1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plywood1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plywood1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlushdoorComponent } from './flushdoor.component';

describe('FlushdoorComponent', () => {
  let component: FlushdoorComponent;
  let fixture: ComponentFixture<FlushdoorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlushdoorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlushdoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

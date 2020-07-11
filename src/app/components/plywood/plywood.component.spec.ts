import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlywoodComponent } from './plywood.component';

describe('PlywoodComponent', () => {
  let component: PlywoodComponent;
  let fixture: ComponentFixture<PlywoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlywoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlywoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

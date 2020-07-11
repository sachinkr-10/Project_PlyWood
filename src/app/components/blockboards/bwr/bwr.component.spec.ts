import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BwrComponent } from './bwr.component';

describe('BwrComponent', () => {
  let component: BwrComponent;
  let fixture: ComponentFixture<BwrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BwrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BwrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

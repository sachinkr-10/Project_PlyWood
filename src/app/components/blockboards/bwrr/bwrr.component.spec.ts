import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BwrrComponent } from './bwrr.component';

describe('BwrrComponent', () => {
  let component: BwrrComponent;
  let fixture: ComponentFixture<BwrrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BwrrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BwrrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

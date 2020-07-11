import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BwpComponent } from './bwp.component';

describe('BwpComponent', () => {
  let component: BwpComponent;
  let fixture: ComponentFixture<BwpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BwpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BwpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

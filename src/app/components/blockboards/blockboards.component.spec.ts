import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockboardsComponent } from './blockboards.component';

describe('BlockboardsComponent', () => {
  let component: BlockboardsComponent;
  let fixture: ComponentFixture<BlockboardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockboardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockboardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

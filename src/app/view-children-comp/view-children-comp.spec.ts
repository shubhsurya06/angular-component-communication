import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildrenComp } from './view-children-comp';

describe('ViewChildrenComp', () => {
  let component: ViewChildrenComp;
  let fixture: ComponentFixture<ViewChildrenComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewChildrenComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewChildrenComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

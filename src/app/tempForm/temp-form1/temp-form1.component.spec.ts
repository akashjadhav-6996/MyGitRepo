import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempForm1Component } from './temp-form1.component';

describe('TempForm1Component', () => {
  let component: TempForm1Component;
  let fixture: ComponentFixture<TempForm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempForm1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

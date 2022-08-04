import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactForm1Component } from './react-form1.component';

describe('ReactForm1Component', () => {
  let component: ReactForm1Component;
  let fixture: ComponentFixture<ReactForm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactForm1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

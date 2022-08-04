import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtrlFormComponent } from './mtrl-form.component';

describe('MtrlFormComponent', () => {
  let component: MtrlFormComponent;
  let fixture: ComponentFixture<MtrlFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MtrlFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MtrlFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

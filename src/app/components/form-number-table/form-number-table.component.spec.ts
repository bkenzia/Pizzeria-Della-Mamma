import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNumberTableComponent } from './form-number-table.component';

describe('FormNumberTableComponent', () => {
  let component: FormNumberTableComponent;
  let fixture: ComponentFixture<FormNumberTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNumberTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormNumberTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

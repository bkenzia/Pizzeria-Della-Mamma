import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAddbasketComponent } from './button-addbasket.component';

describe('ButtonAddbasketComponent', () => {
  let component: ButtonAddbasketComponent;
  let fixture: ComponentFixture<ButtonAddbasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonAddbasketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonAddbasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

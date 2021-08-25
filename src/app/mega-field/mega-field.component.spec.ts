import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MegaFieldComponent } from './mega-field.component';

describe('MegaFieldComponent', () => {
  let component: MegaFieldComponent;
  let fixture: ComponentFixture<MegaFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MegaFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MegaFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

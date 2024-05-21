import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRecargasComponent } from './form-recargas.component';

describe('FormRecargasComponent', () => {
  let component: FormRecargasComponent;
  let fixture: ComponentFixture<FormRecargasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormRecargasComponent]
    });
    fixture = TestBed.createComponent(FormRecargasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

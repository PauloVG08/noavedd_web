import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaRecargasComponent } from './vista-recargas.component';

describe('VistaRecargasComponent', () => {
  let component: VistaRecargasComponent;
  let fixture: ComponentFixture<VistaRecargasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaRecargasComponent]
    });
    fixture = TestBed.createComponent(VistaRecargasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

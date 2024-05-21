import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoTransaccionServiciosComponent } from './estado-transaccion-servicios.component';

describe('EstadoTransaccionServiciosComponent', () => {
  let component: EstadoTransaccionServiciosComponent;
  let fixture: ComponentFixture<EstadoTransaccionServiciosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstadoTransaccionServiciosComponent]
    });
    fixture = TestBed.createComponent(EstadoTransaccionServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoTransaccionRecargasComponent } from './estado-transaccion-recargas.component';

describe('EstadoTransaccionRecargasComponent', () => {
  let component: EstadoTransaccionRecargasComponent;
  let fixture: ComponentFixture<EstadoTransaccionRecargasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstadoTransaccionRecargasComponent]
    });
    fixture = TestBed.createComponent(EstadoTransaccionRecargasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

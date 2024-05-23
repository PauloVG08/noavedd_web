import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaPagosComponent } from './vista-pagos.component';

describe('VistaPagosComponent', () => {
  let component: VistaPagosComponent;
  let fixture: ComponentFixture<VistaPagosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaPagosComponent]
    });
    fixture = TestBed.createComponent(VistaPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

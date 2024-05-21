import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estado-transaccion-servicios',
  templateUrl: './estado-transaccion-servicios.component.html',
  styleUrls: ['./estado-transaccion-servicios.component.scss']
})
export class EstadoTransaccionServiciosComponent {
    constructor(private router: Router) { }

    terminarTransaccion() {
        this.router.navigate(['/servicios']);
    }
}

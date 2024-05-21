import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estado-transaccion-recargas',
  templateUrl: './estado-transaccion-recargas.component.html',
  styleUrls: ['./estado-transaccion-recargas.component.scss']
})
export class EstadoTransaccionRecargasComponent {
    constructor(private router: Router) { }

    terminarTransaccion() {
        this.router.navigate(['/recargas']);
    }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-servicios',
  templateUrl: './form-servicios.component.html',
  styleUrls: ['./form-servicios.component.scss']
})
export class FormServiciosComponent {
    camposCompletos: boolean = false;
    numReferncia: string = '';
    confirmarReferencia: string = '';
    monto: string = '';
    paqueteSeleccionado: string = '';

    constructor(private router: Router) {}

    ngOnInit() {
        this.validarCampos();
    }

    estadoTransaccion() {
        this.router.navigate(['/estado-servicios']);
    }

    validarCampos() {
        if (this.numReferncia && this.confirmarReferencia && this.monto && this.paqueteSeleccionado) {
            this.camposCompletos = true;
        } else {
            this.camposCompletos = false;
        }
    }
}

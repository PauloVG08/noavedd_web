import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-form-recargas',
    templateUrl: './form-recargas.component.html',
    styleUrls: ['./form-recargas.component.scss']
})
export class FormRecargasComponent {
    camposCompletos: boolean = false;
    producto: string = '';
    numero: string = '';
    confirmarNumero: string = '';
    monto: string = '';
    paqueteSeleccionado: string = '';

    constructor(private router: Router) {}

    ngOnInit() {
        this.validarCampos();
    }

    estadoTransaccion() {
        this.router.navigate(['/estado-recargas']);
    }

    validarCampos() {
        if (this.producto && this.numero && this.confirmarNumero && this.monto && this.paqueteSeleccionado) {
            this.camposCompletos = true;
        } else {
            this.camposCompletos = false;
        }
    }
    
}


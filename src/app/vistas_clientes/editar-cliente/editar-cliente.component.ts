import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IconService } from 'src/app/servers/icon.service';

@Component({
    selector: 'app-editar-cliente',
    templateUrl: './editar-cliente.component.html',
    styleUrls: ['./editar-cliente.component.scss']
})
export class EditarClienteComponent {
    constructor(
        private router: Router,
        private iconService: IconService
    ) {}

    camposCompletos: boolean = false;
    nombre: string = '';
    email: string = '';
    direccion: string = '';
    contacto: string = '';
    telefono: string = '';
    rfc: string = '';
    monto_maximo: string = '';
    ul_dias: string = '';
    comision_ta: string = '';
    comision_ser: string = '';
    vendedor: string = '';
    mostrarModalEliminar = false;
    faPencilAlt = this.iconService.getIcon('faPencilAlt');

    ngOnInit() {
        this.validarCampos();
    }

    onSubmit() {
        console.log("Formulario enviado", this.contacto, this.rfc, this.telefono, this.nombre, this.ul_dias, this.email, this.comision_ta, this.monto_maximo, this.comision_ser, this.vendedor);
    }

    actualizarUsuario() {
        console.log("Actualizando usuario");
    }

    volverPagina() {
        this.router.navigate(['/usuarios']);
    }

    validarCampos() {
        this.camposCompletos = !!(this.contacto && this.telefono && this.nombre && this.monto_maximo && this.ul_dias && this.email && this.comision_ta && this.comision_ser && this.vendedor);
    }
}

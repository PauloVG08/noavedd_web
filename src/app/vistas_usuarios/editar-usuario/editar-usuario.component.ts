import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IconService } from 'src/app/servers/icon.service';

@Component({
    selector: 'app-editar-usuario',
    templateUrl: './editar-usuario.component.html',
    styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent {
    constructor(private router: Router, private iconService: IconService) {}

    camposCompletos: boolean = false;
    usuario: string = '';
    telefono: string = '';
    clave: string = '';
    nombre: string = '';
    telefono2: string = '';
    horario: string = '';
    apellidos: string = '';
    email: string = '';
    celular: string = '';
    permisos: string = '';
    tipoUsuario: string = '';
    faPencilAlt = this.iconService.getIcon('faPencilAlt');

    ngOnInit() {
        this.validarCampos();
    }

    onSubmit() {
        console.log("Formulario enviado", this.usuario, this.clave, this.telefono, this.telefono2, this.nombre, this.apellidos, this.email, this.celular, this.horario, this.permisos, this.tipoUsuario);
    }

    actualizarUsuario() {
        console.log("Actualizando usuario");
    }

    volverPagina() {
        this.router.navigate(['/usuarios']);
    }

    eliminarUsuario() {
        console.log("Eliminando usuario");
    }

    validarCampos() {
        if (this.usuario && this.telefono && this.nombre && this.telefono2 && this.horario && this.apellidos && this.email && this.celular && this.permisos && this.tipoUsuario) {
            this.camposCompletos = true;
        } else {
            this.camposCompletos = false;
        }
    }
}

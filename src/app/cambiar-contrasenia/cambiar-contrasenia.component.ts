import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IconService } from 'src/app/servers/icon.service';

@Component({
    selector: 'app-cambiar-contrasenia',
    templateUrl: './cambiar-contrasenia.component.html',
    styleUrls: ['./cambiar-contrasenia.component.scss']
})
export class CambiarContraseniaComponent {
    constructor(
        private router: Router,
        private iconService: IconService
    ) {}

    camposCompletos: boolean = false;
    cont_actual = '';
    nueva_contrasenia = '';
    rep_contrasenia = '';
    tipoUsuario = '';
    mostrarModalEliminar = false;
    showPassword = false;

    faPencilAlt = this.iconService.getIcon('faPencilAlt');
    faKey = this.iconService.getIcon('faKey');
    faEyeSlash = this.iconService.getIcon('faEyeSlash');
    faEye = this.iconService.getIcon('faEye');

    ngOnInit() {
        this.validarCampos();
    }

    onSubmit() {
        console.log("Formulario enviado");
    }

    actualizarUsuario() {
        console.log("Actualizando usuario");
    }

    volverPagina() {
        this.router.navigate(['/usuarios']);
    }

    validarCampos() {
        this.camposCompletos = !!(this.cont_actual && this.nueva_contrasenia && this.rep_contrasenia);
    }

    togglePasswordVisibility(field: string) {
        this.showPassword = !this.showPassword;
        const inputField = document.getElementsByName(field)[0] as HTMLInputElement;
        if (this.showPassword) {
            inputField.type = 'text';
        } else {
            inputField.type = 'password';
        }
    }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { faMobileAlt, faChargingStation } from '@fortawesome/free-solid-svg-icons';

//Importaciones de Módulos
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';

import { PagInicioComponent } from './pag-inicio/pag-inicio.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { VistaRecargasComponent } from './recargas/vista-recargas/vista-recargas.component';
import { VistaServiciosComponent } from './servicios/vista-servicios/vista-servicios.component';
import { FormRecargasComponent } from './recargas/form-recargas/form-recargas.component';
import { FormServiciosComponent } from './servicios/form-servicios/form-servicios.component';
import { EstadoTransaccionRecargasComponent } from './recargas/estado-transaccion-recargas/estado-transaccion-recargas.component';
import { EstadoTransaccionServiciosComponent } from './servicios/estado-transaccion-servicios/estado-transaccion-servicios.component';
import { UsuariosComponent } from './vistas_usuarios/usuarios/usuarios.component';

//Importaciones de Primeng
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { EditarUsuarioComponent } from './vistas_usuarios/editar-usuario/editar-usuario.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        PagInicioComponent,
        BienvenidaComponent,
        VistaRecargasComponent,
        VistaServiciosComponent,
        FormRecargasComponent,
        FormServiciosComponent,
        EstadoTransaccionRecargasComponent,
        EstadoTransaccionServiciosComponent,
        UsuariosComponent,
        EditarUsuarioComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        RouterModule,
        FontAwesomeModule,
        MatTooltipModule,
        ReactiveFormsModule,
        //Importaciones de Primeng
        ButtonModule,
        CommonModule,
        TableModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { 
    constructor(library: FaIconLibrary) {
        library.addIcons(faMobileAlt, faChargingStation);
    }
}

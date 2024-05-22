import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { VistaRecargasComponent } from './recargas/vista-recargas/vista-recargas.component';
import { VistaServiciosComponent } from './servicios/vista-servicios/vista-servicios.component';
import { FormRecargasComponent } from './recargas/form-recargas/form-recargas.component';
import { FormServiciosComponent } from './servicios/form-servicios/form-servicios.component';
import { EstadoTransaccionRecargasComponent } from './recargas/estado-transaccion-recargas/estado-transaccion-recargas.component';
import { EstadoTransaccionServiciosComponent } from './servicios/estado-transaccion-servicios/estado-transaccion-servicios.component';
import { UsuariosComponent } from './vistas_usuarios/usuarios/usuarios.component';
import { EditarUsuarioComponent } from './vistas_usuarios/editar-usuario/editar-usuario.component';
import { ClientesComponent } from './vistas_clientes/clientes/clientes.component';
import { EditarClienteComponent } from './vistas_clientes/editar-cliente/editar-cliente.component';
import { ConectoresComponent } from './conectores/conectores.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'bienvenida', component: BienvenidaComponent },
    { path: 'recargas', component: VistaRecargasComponent },
    { path: 'servicios', component: VistaServiciosComponent },
    { path: 'formrecargas', component: FormRecargasComponent },
    { path: 'formservicios', component: FormServiciosComponent },
    { path: 'estado-recargas', component: EstadoTransaccionRecargasComponent },
    { path: 'estado-servicios', component: EstadoTransaccionServiciosComponent },
    { path: 'usuarios', component: UsuariosComponent },
    { path: 'editar-usuario', component: EditarUsuarioComponent },
    { path: 'clientes', component: ClientesComponent },
    { path: 'editar-cliente', component: EditarClienteComponent },
    { path: 'conectores', component: ConectoresComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)], 
    exports: [RouterModule]
})
export class AppRoutingModule { }

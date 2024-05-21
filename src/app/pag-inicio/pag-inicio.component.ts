import { Component } from '@angular/core';

@Component({
    selector: 'app-pag-inicio',
    templateUrl: './pag-inicio.component.html',
    styleUrls: ['./pag-inicio.component.scss']
})
export class PagInicioComponent {

    isNavbarCollapsed = true;

    toggleNavbar() {
        console.log("Llegue, me ejecute");
        this.isNavbarCollapsed = !this.isNavbarCollapsed;
        console.log(this.isNavbarCollapsed);
    }
}


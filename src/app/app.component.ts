import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from './servers/autenticacion.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    mostrarNavbar: boolean = false;

    constructor(private authService: AutenticacionService, private router: Router) {}

    ngOnInit() {
        this.authService.isLoggedIn$.subscribe(isLoggedIn => {
            this.mostrarNavbar = isLoggedIn && !this.esPaginaLogin();
        });

        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.actualizarMostrarNavbar();
            }
        });
    }

    private actualizarMostrarNavbar(): void {
        this.mostrarNavbar = this.authService.isLoggedIn$ && !this.esPaginaLogin();
    }

    private esPaginaLogin(): boolean {
        return this.router.url.includes('/login');
    }
}

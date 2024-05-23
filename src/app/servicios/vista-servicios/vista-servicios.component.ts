import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IconService } from 'src/app/servers/icon.service';

interface Servicio {
    nombre: string;
    imagen: string;
}

@Component({
    selector: 'app-vista-servicios',
    templateUrl: './vista-servicios.component.html',
    styleUrls: ['./vista-servicios.component.scss']
})
export class VistaServiciosComponent {
    constructor(private router: Router, private iconService: IconService) {}

    // Iconos
    faMoneyBill1Wave = this.iconService.getIcon('faMoneyBill1Wave');

    servicios: Servicio[] = [
        { nombre: 'CFE', imagen: '/assets/images/cfe.png' },
        { nombre: 'Spotify', imagen: '/assets/images/spotify.png' },
    ];

    serviciosFiltrados: Servicio[] = [];
    terminoBusqueda: boolean = false;

    buscarServicios(event: Event) {
        if (event.target instanceof HTMLInputElement) {
            const termino = event.target.value;
            this.serviciosFiltrados = this.servicios.filter(servicio =>
                servicio.nombre.toLowerCase().includes(termino.toLowerCase())
            );
            this.terminoBusqueda = true; 
        } else {
            this.serviciosFiltrados = [];
            this.terminoBusqueda = false; 
        }
    }

    redirectToFormServicios() {
        this.router.navigate(['/formservicios']);
    }
}

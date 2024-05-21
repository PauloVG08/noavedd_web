import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IconService } from 'src/app/servers/icon.service';

@Component({
  selector: 'app-vista-servicios',
  templateUrl: './vista-servicios.component.html',
  styleUrls: ['./vista-servicios.component.scss']
})
export class VistaServiciosComponent {
    constructor(private router: Router, private iconService: IconService) {}

    //Iconos
    faMoneyBill1Wave = this.iconService.getIcon('faMoneyBill1Wave');

    redirectToFormServicios() {
        this.router.navigate(['/formservicios']);
    }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IconService } from 'src/app/servers/icon.service';

@Component({
    selector: 'app-vista-recargas',
    templateUrl: './vista-recargas.component.html',
    styleUrls: ['./vista-recargas.component.scss']
})
export class VistaRecargasComponent {
    constructor(private router: Router, private iconService: IconService) {}

    faMobileAlt = this.iconService.getIcon('faMobileAlt');

    redirectToFormRecargas() {
        this.router.navigate(['/formrecargas']);
    }
}

import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { IconService } from 'src/app/servers/icon.service';

@Component({
    selector: 'app-vista-recargas',
    templateUrl: './vista-recargas.component.html',
    styleUrls: ['./vista-recargas.component.scss']
})
export class VistaRecargasComponent {
    constructor(private router: Router, private iconService: IconService) {}

    faMobileAlt = this.iconService.getIcon('faMobileAlt');

    ngOnInit() { }

    redirectToFormRecargas() {
        const navigationExtras: NavigationExtras = {
            state: { compania: 'Telcel',
                    saldo: 100,
            }
        };
        this.router.navigate(['/formrecargas'], navigationExtras);
    }
}

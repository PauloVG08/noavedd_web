import { Component } from '@angular/core';
import { IconService } from 'src/app/servers/icon.service';

interface Conector {
    id: number;
    nombre: string;
    carriers: string;
    saldo: number;
    saldoMinimo: number;
    activo: boolean;
    region: string;
    prioridad: number;
    comision: number;
}

@Component({
    selector: 'app-modulos',
    templateUrl: './modulos.component.html',
    styleUrls: ['./modulos.component.scss']
})
export class ModulosComponent {
    constructor(public iconService: IconService) { }

    faCubes = this.iconService.getIcon('faCubes');
    faSearch = this.iconService.getIcon('faSearch');
    faPlus = this.iconService.getIcon('faPlus');

    conectores: Conector[] = [
        { id: 1, nombre: 'We send nube recargas', carriers: '10', saldo: 271381.22, saldoMinimo: 0.00, activo: true, region: 'Todas', prioridad: 20, comision: 8.000 },
        { id: 2, nombre: 'RecargaT', carriers: '10', saldo: 351381.22, saldoMinimo: 0.00, activo: true, region: 'Todas', prioridad: 20, comision: 8.000 }
    ];

    rowsPerPageOptions = [5, 10, 15, 20];
    regionSeleccionada = "Todas las regiones";
    rowsPerPage = 5;
    paginatedConectores: Conector[] = [];
    searchTerm: string = '';

    ngOnInit(): void {
        this.updateTable();
        this.setupSearchInput();
    }

    setupSearchInput(): void {
        const searchInput = document.getElementById('searchInput') as HTMLInputElement;
        const userTable = document.getElementById('usuariosTable');
    
        if (userTable) {
            const rows = userTable.getElementsByTagName('tr');

            searchInput.addEventListener('input', () => {
                const searchText = searchInput.value.toLowerCase();
                for (let i = 1; i < rows.length; i++) {
                    const row = rows[i];
                    const cells = row.getElementsByTagName('td');
                    let found = false;
                    for (let j = 0; j < cells.length; j++) {
                        const cell = cells[j];
                        if (cell.textContent!.toLowerCase().indexOf(searchText) > -1) {
                        found = true;
                        break;
                        }
                    }
                    if (found) {
                        row.style.display = '';
                    } else {
                        row.style.display = 'none';
                    }
                }
            });
        }
    }

    updateTable() {
        let filteredConectores = this.conectores;
        if (this.searchTerm) {
            filteredConectores = this.conectores.filter(conector =>
                conector.nombre.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                conector.carriers.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                conector.region.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                conector.prioridad.toString().includes(this.searchTerm) ||
                conector.comision.toString().includes(this.searchTerm)
            );
        }
        this.paginatedConectores = filteredConectores.slice(0, this.rowsPerPage);
    }
}

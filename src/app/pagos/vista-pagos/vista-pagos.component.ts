import { Component } from '@angular/core';
import { IconService } from 'src/app/servers/icon.service';

interface Pago {
    id: number;
    registradoEn: string;
    fechaPago: string;
    monto: number;
    cliente: string;
    oper?: string;
    banco: string;
    formaPago: string;
    cuenta: string;
    referencia: string;
    estado: string;
    validador: string;
}

@Component({
  selector: 'app-vista-pagos',
  templateUrl: './vista-pagos.component.html',
  styleUrls: ['./vista-pagos.component.scss']
})
export class VistaPagosComponent {
    constructor(private iconService: IconService) { }

    //Iconos
    faSearch = this.iconService.getIcon('faSearch');
    faUser = this.iconService.getIcon('faUser');
    faPencilAlt = this.iconService.getIcon('faPencilAlt');
    faTrashAlt = this.iconService.getIcon('faTrashAlt');
    faPlug = this.iconService.getIcon('faPlug');
    faCreditCard = this.iconService.getIcon('faCreditCard');
    faPlus = this.iconService.getIcon('faPlus');
    faDollarSign = this.iconService.getIcon('faDollarSign');

    pagos: Pago[] = [
        {
            id: 1,
            registradoEn: '2024-05-01T10:30:00Z',
            fechaPago: '2024-05-01T10:00:00Z',
            monto: 1500.75,
            cliente: 'Cliente A',
            oper: 'Operador 1',
            banco: 'Banco 1',
            formaPago: 'Transferencia',
            cuenta: '1234567890',
            referencia: 'REF12345',
            estado: 'Completado',
            validador: 'Validador 1'
        },
        {
            id: 2,
            registradoEn: '2024-05-02T14:45:00Z',
            fechaPago: '2024-05-02T14:30:00Z',
            monto: 2200.00,
            cliente: 'Cliente B',
            oper: 'Operador 2',
            banco: 'Banco 2',
            formaPago: 'Depósito',
            cuenta: '0987654321',
            referencia: 'REF67890',
            estado: 'Pendiente',
            validador: 'Validador 2'
        }
    ];

    rowsPerPageOptions = [5, 10, 15, 20];
    regionSeleccionada = "Todas las regiones";
    rowsPerPage = 5;
    paginatedPagos: Pago[] = [];
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
        let filteredPagos = this.pagos;
        if (this.searchTerm) {
            filteredPagos = this.pagos.filter(pago =>
                pago.registradoEn.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                pago.fechaPago.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                pago.monto.toString().includes(this.searchTerm) ||
                pago.cliente.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                (pago.oper && pago.oper.toLowerCase().includes(this.searchTerm.toLowerCase())) ||
                pago.banco.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                pago.formaPago.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                pago.cuenta.includes(this.searchTerm) ||
                pago.referencia.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                pago.estado.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                pago.validador.toLowerCase().includes(this.searchTerm.toLowerCase())
            );
        }
        this.paginatedPagos = filteredPagos.slice(0, this.rowsPerPage);
    }
    
}

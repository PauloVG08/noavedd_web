import { Component } from '@angular/core';
import { IconService } from 'src/app/servers/icon.service';

interface Cliente {
    id: number;
    usuario: string;
    cliente: string;
    saldo: string;
    comision: string;
    contacto: string;
    telefono: string;
}

@Component({
    selector: 'app-clientes',
    templateUrl: './clientes.component.html',
    styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent {
    constructor(private iconService: IconService) { }

    //Iconos
    faSearch = this.iconService.getIcon('faSearch');
    faUser = this.iconService.getIcon('faUser');
    faPencilAlt = this.iconService.getIcon('faPencilAlt');
    faTrashAlt = this.iconService.getIcon('faTrashAlt');

    clientes: Cliente[] = [
        { id: 1, usuario: 'Paulo123', cliente: 'Cliente1', saldo: '5000', comision: '6.5', contacto: 'Rocha', telefono: '4778521369' },
        { id: 2, usuario: 'Rocha123', cliente: 'Cliente2', saldo: '6000', comision: '6.5', contacto: 'Francisco', telefono: '987654321' }
    ];

    rowsPerPageOptions = [5, 10, 15, 20];
    rowsPerPage = 5;
    paginatedUsers: Cliente[] = [];
    searchTerm: string = '';

    ngOnInit(): void {
        this.updateTable();
        this.setupSearchInput();
    }

    setupSearchInput(): void {
        const searchInput = document.getElementById('searchInput') as HTMLInputElement;
        const userTable = document.getElementById('clientesTable');
    
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
        let filteredUsers = this.clientes;
        if (this.searchTerm) {
        filteredUsers = this.clientes.filter(cliente => 
            cliente.usuario.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
            cliente.cliente.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
            cliente.saldo.includes(this.searchTerm) ||
            cliente.comision.includes(this.searchTerm) ||
            cliente.contacto.toLocaleLowerCase().includes(this.searchTerm) ||
            cliente.telefono.includes(this.searchTerm)
        );
        }
        this.paginatedUsers = filteredUsers.slice(0, this.rowsPerPage);
    }
}

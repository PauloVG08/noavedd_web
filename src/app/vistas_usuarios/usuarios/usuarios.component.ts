import { Component, OnInit, } from '@angular/core';
import { IconService } from 'src/app/servers/icon.service';

interface Usuario {
    id: number;
    username: string;
    nombre: string;
    apellidos: string;
    correo: string;
    celular: string;
    permisos: string;
    horario: string;
    vendePor: string;
}

@Component({
    selector: 'app-usuarios',
    templateUrl: './usuarios.component.html',
    styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
    constructor(private iconService: IconService) { }

    //Iconos
    faSearch = this.iconService.getIcon('faSearch');
    faUser = this.iconService.getIcon('faUser');
    faPencilAlt = this.iconService.getIcon('faPencilAlt');
    faTrashAlt = this.iconService.getIcon('faTrashAlt');

    usuarios: Usuario[] = [
        { id: 1, username: 'Paulo123', nombre: 'Paulo Emmanuel', apellidos: 'Valadez Gómez', correo: 'paulo@gmail.com', celular: '4776009669', permisos: 'SuperAdmin', horario: 'gmt-0', vendePor: 'Cualquiera' },
        { id: 2, username: 'Rocha123', nombre: 'Francisco Javier', apellidos: 'Rocha Aldana', correo: 'rocha@gmail.com', celular: '4771234567', permisos: 'SuperAdmin', horario: 'gmt-0', vendePor: 'Cualquiera' },
    ];

    rowsPerPageOptions = [5, 10, 15, 20];
    rowsPerPage = 5;
    paginatedUsers: Usuario[] = [];
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
        let filteredUsers = this.usuarios;
        if (this.searchTerm) {
        filteredUsers = this.usuarios.filter(user => 
            user.username.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
            user.nombre.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
            user.apellidos.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
            user.correo.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
            user.celular.includes(this.searchTerm)
        );
        }
        this.paginatedUsers = filteredUsers.slice(0, this.rowsPerPage);
    }
}

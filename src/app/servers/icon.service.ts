import { Injectable } from '@angular/core';
import { IconDefinition, faMobileAlt, faPencilAlt, faSearch, faUser, faTrashAlt, faMoneyBill1Wave } from '@fortawesome/free-solid-svg-icons';

@Injectable({
    providedIn: 'root'
})
export class IconService {
    icons: { [key: string]: IconDefinition } = {
        faMobileAlt,
        faPencilAlt,
        faSearch,
        faUser,
        faTrashAlt,
        faMoneyBill1Wave
    };

    getIcon(name: string): IconDefinition {
        return this.icons[name];
    }
}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AutenticacionService {
    private isLoggedInSubject = new BehaviorSubject<boolean>(false);
    isLoggedIn$ = this.isLoggedInSubject.asObservable();

    constructor(private router: Router) { }

    login(user: string, password: string) {
        if (user === 'admin' && password === 'admin') {
            this.isLoggedInSubject.next(true); 
            this.router.navigate(['/bienvenida']);
        } else {
            this.isLoggedInSubject.next(false);
        }
    }

    logout() {
        this.isLoggedInSubject.next(false);
        this.router.navigate(['/login']);
    }
}

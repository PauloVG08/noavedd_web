import { Component, ViewChild, ElementRef } from '@angular/core';
import { UserData } from '../models/UserData';
import { Router } from '@angular/router';
import { AutenticacionService } from '../servers/autenticacion.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    @ViewChild('usernameInput') usernameInputRef!: ElementRef;
    @ViewChild('passwordInput') passwordInputRef!: ElementRef;

    userData: UserData = {
        username: '',
        password: '',
    };

    passwordVisible: boolean = false;

    constructor(private authService: AutenticacionService) {}

    login() {
        this.authService.login(this.userData.username, this.userData.password);
    }

    onFocus(input: string) {
        if (input === 'username' && !this.userData.username) {
            this.usernameInputRef.nativeElement.parentElement.classList.add('focused');
        } else if (input === 'password' && !this.userData.password) {
            this.passwordInputRef.nativeElement.parentElement.classList.add('focused');
        }
    }

    onBlur(input: string) {
        if (input === 'username' && this.userData.username === '') {
            this.usernameInputRef.nativeElement.parentElement.classList.remove('focused');
        } else if (input === 'password' && this.userData.password === '') {
            this.passwordInputRef.nativeElement.parentElement.classList.remove('focused');
        }
    }

    togglePasswordVisibility() {
        this.passwordVisible = !this.passwordVisible;
    }
}

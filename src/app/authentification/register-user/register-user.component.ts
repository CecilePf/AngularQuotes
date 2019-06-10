import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

    newUser = {email: '', password: ''};
    existingUser = {email: '', password: ''};

    // public car on souhaite utiliser le service dans le template
    constructor(public authService: AuthService) { }

    ngOnInit() {
    }

    registerUser() {
        // comme register retourne une promesse, on peut utiliser .then
        this.authService.register(this.newUser.email, this.newUser.password)
        .then(createdUser => {
            console.log('createdUser', createdUser);
            //TODO reset form
        })
        .catch(error => {
            console.log('error', error.message);
        });
    }

    loginUser() {
        this.authService.login(this.existingUser.email, this.existingUser.password)
        .then(value => {
            console.log('login réussi', value);
        })
        .catch(error => {
            console.log('erreur', error.message);
        });
    }

    logoutUser() {
        this.authService.logout();
    }

}

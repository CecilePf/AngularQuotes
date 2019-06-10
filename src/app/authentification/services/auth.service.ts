import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';

// Imports pour les observables
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    // suffixe $ car Observable
    user$: Observable<firebase.User>;

    constructor(private angularFireAuth: AngularFireAuth, 
        private afDb: AngularFireDatabase) {
            this.user$ = angularFireAuth.authState;
        }

    register(email: string, password: string) {
        // return une promesse
        return this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password);
    }

    login(email: string, password: string) {
        return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
    }

    logout() {
        this.angularFireAuth.auth.signOut();
    }

    sendEmailVerification() {
        const user = firebase.auth().currentUser;

        if (user) {
            user.sendEmailVerification()
            .then(value => {
                console.log('email envoyé');
            }).catch(error => {
                console.log("Erreur d'envoi");
            });
        }
    }
}

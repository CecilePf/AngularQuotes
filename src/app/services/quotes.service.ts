import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class QuotesService {

    subject = new Subject();

    constructor(private afDb: AngularFireDatabase, private router: Router) { }

    getQuotes() {
        // valueChanges() permet de récupérer un observable
        // Ici on ne récupère pas les metadonnées (id Firebase)
        // return this.afDb.list('quotes').valueChanges();
        
        // Retourne un Observable. On map : sur chaque quote on veut récupérer un objet 
        // avec key, '...' récupère chacune des propriétés de l'objet quote.
        return this.afDb.list('quotes').snapshotChanges().map(quotes => 
            quotes.map(quote =>({ key : quote.key, ...quote.payload.val()}))
        );
    }

    createQuote(quote) {
        return this.afDb.list('quotes').push(quote);
    }

    deleteQuoteById(id: string) {
        return this.afDb.list('quotes').remove(id);
        // this.router.navigate(['']);
    }

    // On passe en mode édition et non plus create
    editQuote(quote) {
        this.subject.next(quote);
    }

    updateQuote(quote) {
        //backquote pour ne pas avoir à faire de concaténation mais ${}
        return this.afDb.object(`quotes/${quote.key}`).update(quote);
    }

}

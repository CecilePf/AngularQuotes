import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../../services/quotes.service';
import { AuthService } from 'src/app/authentification/services/auth.service';

@Component({
  selector: 'app-backend-quotes',
  templateUrl: './backend-quotes.component.html',
  styleUrls: ['./backend-quotes.component.css']
})
export class BackendQuotesComponent implements OnInit {
    quotes$;
    isAdmin: boolean = false;

    constructor(private quotesService: QuotesService, 
        private authService: AuthService) { }

    ngOnInit() {
        this.quotes$ = this.quotesService.getQuotes();
        this.authService.user$.subscribe(user => {
            if (user && user.uid == 'SeynCHaMC9Qml57dI49620Ruorf1') {
                this.isAdmin = true;
            } else {
                this.isAdmin = false;
            }
        })
    }

    deleteQuote(quote) {
        this.quotesService.deleteQuoteById(quote.key);
    }

    showQuoteDetails(quote) {
    }

    toggleToEditMode(quote) {
        this.quotesService.editQuote(quote);
    }

}

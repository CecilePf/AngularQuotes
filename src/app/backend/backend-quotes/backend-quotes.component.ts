import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../../services/quotes.service';

@Component({
  selector: 'app-backend-quotes',
  templateUrl: './backend-quotes.component.html',
  styleUrls: ['./backend-quotes.component.css']
})
export class BackendQuotesComponent implements OnInit {
    quotes$;

    constructor(private quotesService: QuotesService) { }

    ngOnInit() {
        this.quotes$ = this.quotesService.getQuotes();
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

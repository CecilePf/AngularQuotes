import { Component, OnInit } from '@angular/core';
import { QuotesService } from 'src/app/services/quotes.service';

@Component({
  selector: 'app-backend-home',
  templateUrl: './backend-home.component.html',
  styleUrls: ['./backend-home.component.css']
})
export class BackendHomeComponent implements OnInit {

    constructor(private quoteService: QuotesService) {}

    onQuoteCreated(quote) {
        let addedQuote = this.quoteService.createQuote({
            firstname: quote.value.firstname,
            lastname: quote.value.lastname,
            text: quote.value.quote
        });
    }

    onQuoteUpdated(quote) {
        this.quoteService.updateQuote({ firstname: quote.value.firstname, lastname: quote.value.lastname, text: quote.value.quote, key: quote.value.key });
    }

    ngOnInit() {}

}

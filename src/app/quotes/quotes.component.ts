import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../services/quotes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

    quotes$: any;

    constructor(private quoteService: QuotesService, private router: Router) { }

    ngOnInit() {
        // on met un $ pour montrer que cette variable contient un observable
        this.quotes$ = this.quoteService.getQuotes();
    }

    showQuoteDetails(quote) {
        console.log(quote);
        this.router.navigate(['/quote', quote.key]);
    }

}

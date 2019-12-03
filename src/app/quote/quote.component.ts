import { Component, OnInit } from '@angular/core';
import { Quote } from '../quotes';
@Component({
  selector: 'app-quotes',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuotesComponent implements OnInit {

// quotes: Quote[] = [
//  new Quote('kent' , 'dont', newDate(2020,4,14)),
// ];
constructor() { }

quotes: Quote[] = [
  new Quote('kent', 'The best way to cheer yourself up is to try to cheer somebody else up.', new Date(2019, 6, 12 )),
  new Quote('Feisal', 'To give anything less than your best, is to sacrifice the gift.', new Date(2019, 6, 12 )),
  new Quote('Feisal', 'Do right. Do your best. Treat others as you want to be treated.', new Date(2019, 6, 12 ))
];

addNewQuote(quote) {
  const quoteLength = this.quotes.length ;
  quote.id = quoteLength + 1 ;
  quote.completeDate = new Date(quote.completeDate);
  this.quotes.push(quote);
}

ngOnInit() {
}

}

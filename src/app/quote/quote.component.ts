import { Component, OnInit } from '@angular/core';
import { Quote } from '../quotes';
@Component({
  selector: 'app-quotes',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuotesComponent implements OnInit {
quotes: Quote[] = [
 new Quote('kent' , 'dont', newDate(2020,4,14)),
];
constructor() { }
  ngOnInit() {
  }
}

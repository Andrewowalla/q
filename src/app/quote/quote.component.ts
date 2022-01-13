import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[]=[
    new Quote('Progress is impossible without change, and those who cannot change their minds cannot change anything.', 'George B. Shaw','Tobias', new Date ('09/01/2022')),
    new Quote('Everyday is a new day.','Carrie Underwood','Tobias',new Date('09,01,2022')),
    new Quote('It doe snot matter how slowly you go as long as you do not stop.', 'Confucious','Tobias', new Date('09-01-2021')),
    new Quote('Sometimes you will never know the VALUE of a moment, until it becomes a memory.','DR. SEUSS','Tobias', new Date('09-01-2021')),
  ];

    deleteQuote(toDelete:boolean, index:number){
      if (toDelete) {
      this.quotes.splice(index, 1);
    }
  }

    viewDetails(index:number){
    this.quotes[index].showDetails =!this.quotes[index].showDetails;
    }
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component,OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote'


@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

    @Input() quote: Quote =  new Quote("For God so ..", "john 3:16", "Tobias", new Date(1989, 12, 25));
    @Output() toDelete = new EventEmitter<boolean>();

    quoteDelete(Delete:boolean){
      this.toDelete.emit(Delete);
  }

  constructor () {}

  ngOnInit(): void {
  }

}

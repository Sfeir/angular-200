import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sfeir-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.css']
})
export class CardComponent implements OnInit {

  @Input() person = {};
  @Output('onPersonDelete') delete$;

  constructor() {
    this.delete$ = new EventEmitter();
  }

  ngOnInit() {
  }

  delete(person) {
    this.delete$.emit(person);
  }

}

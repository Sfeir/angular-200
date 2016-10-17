import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sfeir-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.css']
})
export class CardComponent implements OnInit {

  @Input() person = {};

  constructor() { }

  ngOnInit() {
  }

}

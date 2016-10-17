import { Component, OnInit } from '@angular/core';
import { PEOPLE } from '../_static/people';

@Component({
  selector: 'sfeir-person',
  templateUrl: 'person.component.html',
  styleUrls: ['person.component.css']
})
export class PersonComponent implements OnInit {

  private person: any = {};

  constructor() { }

  ngOnInit() {
    this.person = PEOPLE[0];
  }

  random() {
    this.person = PEOPLE[ (Math.random() * PEOPLE.length) | 0 ];
  }

}

import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../shared/people-service/people.service';

const BASE_URL = 'http://localhost:9000';

@Component({
  selector: 'sfeir-person',
  templateUrl: 'person.component.html',
  styleUrls: ['person.component.css']
})
export class PersonComponent implements OnInit {

  private person: any = {};

  constructor( private _service: PeopleService) { }

  ngOnInit() {
    this.random();
  }

  random() {
    this._service.fetchRandom()
      .subscribe((person) => this.person = person);
  }

}

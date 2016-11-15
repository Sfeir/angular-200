import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../shared/people-service/people.service';
import { ActivatedRoute } from "@angular/router";

const BASE_URL = 'http://localhost:9000';

@Component({
  selector: 'sfeir-person',
  templateUrl: 'person.component.html',
  styleUrls: ['person.component.css']
})
export class PersonComponent implements OnInit {

  private person: any = {};
  private _isPerson: boolean;

  constructor( private _service: PeopleService, private _route: ActivatedRoute) {
    this._isPerson = false;
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      const id = params['id'];
      if (!id) {
        this.random();
        this._isPerson = false;
      }
      else {
        this._service.fetchOne(id).subscribe(person => {
          this.person = person;
          this._isPerson = true;
        })
      }
    });
  }

  random() {
    this._service.fetchRandom()
      .subscribe((person) => this.person = person);
  }

  get isPerson(): boolean {
    return this._isPerson;
  }

}

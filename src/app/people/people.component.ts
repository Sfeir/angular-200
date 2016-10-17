import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

const BASE_URL = 'http://localhost:9000';

@Component({
  selector: 'sfeir-people',
  templateUrl: 'people.component.html',
  styleUrls: ['people.component.css']
})
export class PeopleComponent implements OnInit {

  people = [];

  constructor(
    private _http: Http
  ) { }

  ngOnInit() {
    this._http.get(`${BASE_URL}/api/peoples/`)
      .map( res => res.json() )
      .subscribe( people => this.people = people);
  }

}

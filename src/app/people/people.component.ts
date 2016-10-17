import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/mergeMap';

const BASE_URL = 'http://localhost:9000';

@Component({
  selector: 'sfeir-people',
  templateUrl: 'people.component.html',
  styleUrls: ['people.component.css']
})
export class PeopleComponent implements OnInit {

  dialogStatus = 'inactive';
  people = [];

  constructor(
    private _http: Http
  ) { }

  ngOnInit() {
    this._http.get(`${BASE_URL}/api/peoples/`)
      .map( res => res.json() )
      .subscribe( people => this.people = people);
  }

  delete(person) {
    this._http.delete(`${BASE_URL}/api/peoples/${person.id}`)
      .map( res => res.json() )
      .subscribe( people => this.people = people);
  }

  add(person) {
    let requestOptions = { headers: new Headers({'Content-Type': 'application/json'})};
    this._http.post(`${BASE_URL}/api/peoples`, JSON.stringify(person), requestOptions)
      .flatMap( () => {
        return this._http.get(`${BASE_URL}/api/peoples/`)
          .map( res => res.json() );
      })
      .subscribe( people => {
        this.people = people;
        this.hideDialog();
      });
  }

  showDialog() {
    this.dialogStatus = 'active';
  }

  hideDialog() {
    this.dialogStatus = 'inactive';
  }

}

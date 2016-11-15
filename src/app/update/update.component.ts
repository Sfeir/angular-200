import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/mergeMap';


const BASE_URL = 'http://localhost:9000';

@Component({
  selector: 'sfeir-update',
  templateUrl: 'update.component.html',
  styleUrls: ['update.component.css']
})
export class UpdateComponent implements OnInit {

  person: any = {
    id: '',
    firstname: '',
    lastname: '',
    email: '',
    address: {
      street: '',
      city: '',
      postalCode: ''
    },
    phone: '',
    isManager: false
  };

  private _personId: number;

  constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _http: Http
  ) { }

  ngOnInit() {
    this._route.params
        .map((params: any) => this._personId = params.id)
        .flatMap(_ => this.fetchOne(this._personId))
        .subscribe( person => this.person = person);
  }

  fetchOne(id) {
    return this._http.get(`${BASE_URL}/api/peoples/${id}`)
        .map( res => res.json() );
  }

  submit(person) {
    return this._http.put(`${BASE_URL}/api/peoples/${this._personId}`, person)
        .map( res => res.json() )
        .subscribe( () => this._router.navigate(['/people']) );
  }

  cancel() {
    this._router.navigate(['/people']);
  }

}

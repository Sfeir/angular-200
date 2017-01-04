import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/mergeMap';
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Component({
  selector: 'sfeir-update',
  templateUrl: 'update.component.html',
  styleUrls: ['update.component.css']
})
export class UpdateComponent implements OnInit {
  // private property to store all backend URLs
  private _backendURL: any;
  // private property to store person value
  private _person: any;
  // private property to store empty person value
  private _emptyPerson: any;

  /**
   * Component constructor
   */
  constructor(private _route: ActivatedRoute, private _router: Router, private _http: Http) {
    this._backendURL = {};
    this._emptyPerson = {
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
    this._person = this._emptyPerson;

    // build backend base url
    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
    }

    // build all backend urls
    Object.keys(environment.backend.endpoints).forEach(k => this._backendURL[k] = `${baseUrl}${environment.backend.endpoints[k]}`);
  }

  /**
   * Returns private property _person
   *
   * @returns {any}
   */
  get person(): any {
    return this._person;
  }

  /**
   * OnInit implementation
   */
  ngOnInit() {
    this._route.params
        .map((params: any) => params.id)
        .flatMap((id: string) => this._fetchOne(id))
        .subscribe( (person: any) => this._person = person);
  }

  /**
   * Function to update person by id and redirect to people list
   *
   * @param person
   */
  submit(person: any) {
    this._http.put(this._backendURL.onePeople.replace(':id', person.id), person)
        .subscribe( () => this._router.navigate(['/people']) );
  }

  /**
   * Function to cancel process and redirect to people list
   */
  cancel() {
    this._router.navigate(['/people']);
  }

  /**
   * Returns an observable fetchs one person by id
   *
   * @param id
   *
   * @returns {Observable<R>}
   *
   * @private
   */
  private _fetchOne(id: string): Observable<any> {
    return this._http.get(this._backendURL.onePeople.replace(':id', id))
        .map( res => {
          if (res.status === 200) {
            return res.json();
          }
          else {
            return this._emptyPerson;
          }
        });
  }
}

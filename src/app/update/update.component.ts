import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../shared/people-service/people.service';
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

  constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _service: PeopleService
  ) { }


  ngOnInit() {
    this._route.params
        .map((params: any) => params.id)
        .flatMap(id => this._service.fetchOne(id))
        .subscribe( person => this.person = person);
  }

  submit(person) {
    this._service.update(person).subscribe(
        res => this._router.navigate(['/people'])
    );
  }

  cancel() {
    this._router.navigate(['/people']);
  }

}

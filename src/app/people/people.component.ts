import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeopleService } from '../shared/people-service/people.service';
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
  view = 'card';

  constructor(
    private _router: Router,
    private _service: PeopleService
  ) { }

  ngOnInit() {
    this._service.fetch().subscribe((people) => {
      this.people = people;
    });
  }

  delete(person) {
    this._service.delete(person.id)
      .subscribe((people) => {
          this.people = people;
        }
      );
  }

  add(person) {
    this._service.create(person)
      .flatMap( _ => this._service.fetch() )
      .subscribe( people => {
        this.people = people;
        this.hideDialog();
      })
  }

  showDialog() {
    this.dialogStatus = 'active';
  }

  hideDialog() {
    this.dialogStatus = 'inactive';
  }

  switchView() {
    this.view = (this.view === 'card') ? 'list' : 'card';
  }

  navigate(person) {
    this._router.navigate(['/person', person.id]);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/mergeMap';
import { PeopleService } from "../shared/index";

@Component({
  selector: 'sfeir-update',
  templateUrl: 'update.component.html',
  styleUrls: ['update.component.css']
})
export class UpdateComponent implements OnInit {
  // private property to store person value
  private _person: any;

  /**
   * Component constructor
   */
  constructor(private _route: ActivatedRoute, private _router: Router, private _peopleService: PeopleService) {
    this._person = {
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
        .flatMap((id: string) => this._peopleService.fetchOne(id))
        .subscribe((person: any) => this._person = person);
  }

  /**
   * Function to update person and redirect to people list
   *
   * @param person
   */
  submit(person: any) {
    this._peopleService.update(person).subscribe(_ => this._router.navigate(['/people']));
  }

  /**
   * Function to cancel process and redirect to people list
   */
  cancel() {
    this._router.navigate(['/people']);
  }
}

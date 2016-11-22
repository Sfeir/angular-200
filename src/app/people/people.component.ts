import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import 'rxjs/add/operator/mergeMap';
import { PeopleService } from "../shared/index";

@Component({
    selector: 'sfeir-people',
    templateUrl: 'people.component.html',
    styleUrls: ['people.component.css']
})
export class PeopleComponent implements OnInit {
    // private property to store people value
    private _people: any[];
    // private property to store dialogStatus value
    private _dialogStatus: string;
    // private property to store view value
    private _view: string;

    /**
     * Component constructor
     */
    constructor(private _router: Router, private _peopleService: PeopleService) {
        this._people = [];
        this._dialogStatus = 'inactive';
        this._view = 'card';
    }

    /**
     * Returns private property _people
     *
     * @returns {any[]}
     */
    get people(): any[] {
        return this._people;
    }

    /**
     * Returns private property _dialogStatus
     *
     * @returns {string}
     */
    get dialogStatus(): string {
        return this._dialogStatus
    }

    /**
     * Returns private property _view
     *
     * @returns {string}
     */
    get view(): string {
        return this._view;
    }

    /**
     * OnInit implementation
     */
    ngOnInit() {
        this._peopleService.fetch().subscribe((people: any[]) => this._people = people);
    }

    /**
     * Function to delete one person
     *
     * @param person
     */
    delete(person: any) {
        this._peopleService.delete(person.id).subscribe((people: any[]) => this._people = people);
    }

    /**
     * Function to add one person
     *
     * @param person
     */
    add(person: any) {
        this._peopleService.create(person)
            .flatMap(_ => this._peopleService.fetch())
            .subscribe((people: any[]) => {
                this._people = people;
                this.hideDialog();
            });
    }

    /**
     * Function to display modal
     */
    showDialog() {
        this._dialogStatus = 'active';
    }

    /**
     * Function to hide modal
     */
    hideDialog() {
        this._dialogStatus = 'inactive';
    }

    /**
     * Function to switch view
     */
    switchView() {
        this._view = (this._view === 'card') ? 'list' : 'card';
    }

    /**
     * Function to navigate to current person
     *
     * @param person
     */
    navigate(person) {
        this._router.navigate(['/person', person.id]);
    }
}

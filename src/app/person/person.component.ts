import { Component, OnInit } from '@angular/core';
import { PEOPLE } from '../_static/people';

@Component({
    selector: 'sfeir-person',
    templateUrl: 'person.component.html',
    styleUrls: ['person.component.css']
})
export class PersonComponent implements OnInit {
    // private property to store person value
    private _person: any;

    /**
     * Component constructor
     */
    constructor() {
        this._person = PEOPLE[0];
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
    }
}

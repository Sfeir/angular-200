import { Component } from '@angular/core';

@Component({
    selector: 'sfeir-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class PeopleAppComponent {
    // private property to store name value
    private _name:string;

    /**
     * Component constructor
     */
    constructor() {
        this._name = 'Angular 2';
    }

    /**
     * Returns private property _name
     *
     * @returns {string}
     */
    get name(): string {
        return this._name;
    }
}

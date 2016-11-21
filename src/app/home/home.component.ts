import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sfeir-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
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

    /**
     * OnInit implementation
     */
    ngOnInit() {
    }
}

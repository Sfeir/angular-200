import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'sfeir-card',
    templateUrl: 'card.component.html',
    styleUrls: ['card.component.css']
})
export class CardComponent implements OnInit {
    // private property to store person value
    private _person: any;

    /**
     * Component constructor
     */
    constructor() {
        this._person = {};
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
     * Sets private property _person
     *
     * @param person
     */
    @Input() set person(person: any) {
        this._person = person;
    }

    /**
     * OnInit implementation
     */
    ngOnInit() {
    }
}

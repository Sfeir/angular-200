import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'sfeir-card',
    templateUrl: 'card.component.html',
    styleUrls: ['card.component.css']
})
export class CardComponent implements OnInit {
    // private property to store person value
    private _person: any;
    // private property to store delete$ value
    private _delete$: EventEmitter<any>;

    /**
     * Component constructor
     */
    constructor() {
        this._person = {};
        this._delete$ = new EventEmitter();
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
     * Returns private property _delete$
     *
     * @returns {EventEmitter<any>}
     */
    @Output('personDelete') get delete$(): EventEmitter<any> {
        return this._delete$;
    }

    /**
     * OnInit implementation
     */
    ngOnInit() {
    }

    /**
     * Function to emit event to delete current person
     *
     * @param person
     */
    delete(person: any) {
        this._delete$.emit(person);
    }
}

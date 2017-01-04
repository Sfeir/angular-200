import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'sfeir-form',
    templateUrl: 'form.component.html',
    styleUrls: ['form.component.css']
})
export class FormComponent implements OnInit {
    // private property to store cancel$ value
    private _cancel$: EventEmitter<any>;
    // private property to store add$ value
    private _add$: EventEmitter<any>;

    /**
     * Component constructor
     */
    constructor() {
        this._add$ = new EventEmitter();
        this._cancel$ = new EventEmitter();
    }

    /**
     * Returns private property _cancel$
     *
     * @returns {EventEmitter<any>}
     */
    @Output('cancel') get cancel$(): EventEmitter<any> {
        return this._cancel$;
    }

    /**
     * Returns private property _add$
     *
     * @returns {EventEmitter<any>}
     */
    @Output('personAdd') get add$(): EventEmitter<any> {
        return this._add$;
    }

    /**
     * OnInit implementation
     */
    ngOnInit() {
    }

    /**
     * Function to emit event to cancel process
     */
    cancel() {
        this._cancel$.emit();
    }

    /**
     * Function to emit event to add new person
     *
     * @param person
     */
    add(person: any) {
        this._add$.emit(person);
    }
}

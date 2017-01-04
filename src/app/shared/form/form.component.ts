import { Component, OnInit, Output, Input, EventEmitter, OnChanges } from '@angular/core';

@Component({
    selector: 'sfeir-form',
    templateUrl: 'form.component.html',
    styleUrls: ['form.component.css']
})
export class FormComponent implements OnInit, OnChanges {
    // private property to store update mode flag
    private _isUpdateMode: boolean;
    // private property to store model value
    private _model:any;
    // private property to store cancel$ value
    private _cancel$: EventEmitter<any>;
    // private property to store submit$ value
    private _submit$: EventEmitter<any>;

    /**
     * Component constructor
     */
    constructor() {
        this._submit$ = new EventEmitter();
        this._cancel$ = new EventEmitter();
        this._model = {address:{}};
        this._isUpdateMode = false;
    }

    /**
     * Sets private property _model
     *
     * @param model
     */
    @Input() set model(model: any) {
        this._model = model;
    }

    /**
     * Returns private property _model
     *
     * @returns {any}
     */
    get model(): any {
        return this._model;
    }

    /**
     * Returns private property _isUpdateMode
     *
     * @returns {boolean}
     */
    get isUpdateMode(): boolean {
        return this._isUpdateMode;
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
     * Returns private property _submit$
     *
     * @returns {EventEmitter<any>}
     */
    @Output('submit') get submit$(): EventEmitter<any> {
        return this._submit$;
    }

    /**
     * OnInit implementation
     */
    ngOnInit() {
    }

    /**
     * Function to handle component update
     *
     * @param record
     */
    ngOnChanges(record) {
        if(record.model && record.model.currentValue) {
            this._model = record.model.currentValue;
            this._isUpdateMode = !!this._model;
        }
    }

    /**
     * Function to emit event to cancel process
     */
    cancel() {
        this._cancel$.emit();
    }

    /**
     * Function to emit event to submit form and person
     */
    submit() {
        this._submit$.emit(this._model);
    }
}

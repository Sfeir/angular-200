import { Component, OnInit, Output, Input, EventEmitter, OnChanges } from '@angular/core';
import { FormControl, Validators, FormGroup } from "@angular/forms";

import { CustomValidators } from "./custom-validators";

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
    // private property to store form value
    private _form: FormGroup;

    /**
     * Component constructor
     */
    constructor() {
        this._submit$ = new EventEmitter();
        this._cancel$ = new EventEmitter();
        this._model = {address:{}};
        this._isUpdateMode = false;
        this._form = this._buildForm();
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
     * Returns private property _form
     *
     * @returns {FormGroup}
     */
    get form(): FormGroup {
        return this._form;
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
            this._form.patchValue(this._model);
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
    submit(person: any) {
        this._submit$.emit(person);
    }

    /**
     * Function to build our form
     *
     * @returns {FormGroup}
     *
     * @private
     */
    private _buildForm(): FormGroup {
        return new FormGroup({
            id: new FormControl(''),
            firstname: new FormControl('', Validators.compose([
                Validators.required, Validators.minLength(2)
            ])),
            lastname: new FormControl('', Validators.compose([
                Validators.required, Validators.minLength(2)
            ])),
            email: new FormControl('', Validators.compose([
                Validators.required, CustomValidators.sfeirEmail
            ])),
            photo: new FormControl('https://randomuser.me/api/portraits/lego/6.jpg'),
            address: new FormGroup({
                street: new FormControl(''),
                city: new FormControl(''),
                postalCode: new FormControl('')
            }),
            phone: new FormControl('', Validators.compose([
                Validators.required, Validators.pattern('\\d{10}')
            ])),
            isManager: new FormControl('')
        });
    }
}

import { Component, OnInit, Output, Input, EventEmitter, OnChanges } from '@angular/core';
import { FormControl, Validators, FormGroup } from "@angular/forms";

import { CustomValidators } from "./custom-validators";

@Component({
    selector: 'sfeir-form',
    templateUrl: 'form.component.html',
    styleUrls: ['form.component.css']
})
export class FormComponent implements OnInit {
    
    @Output('cancel') cancel$: EventEmitter<any>;    
    @Output('personAdd') add$: EventEmitter<any>;

   
    constructor() {
        this.add$ = new EventEmitter();
        this.cancel$ = new EventEmitter();
    }

    /**
     * OnInit implementation
     */
    ngOnInit() {
    }

    cancel() {
        this.cancel$.emit();
    }
    
    add(person: any) {
        this.add$.emit(person);
    }
}

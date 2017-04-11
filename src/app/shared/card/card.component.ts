import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'sfeir-card',
    templateUrl: 'card.component.html',
    styleUrls: ['card.component.css']
})
export class CardComponent implements OnInit {
    
    @Input() person: any;

    constructor() {
        this.person = {};
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

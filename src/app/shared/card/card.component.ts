import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'sfeir-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
    
    @Input() person: any;
    @Output('personDelete')  delete$: EventEmitter<any> 

    constructor() {
        this.person = {};
        this.delete$= new EventEmitter();
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
        this.delete$.emit(person);
    }

    /**
     * Function to navigate to manager details
     */
    goToManagerIfExist() {
        if (this._person.managerId) {
            this._router.navigate(['/person', this._person.managerId]);
        }
    }
}

import { Component, OnInit } from '@angular/core';
import { PEOPLE } from '../_static/people';

@Component({
    selector: 'sfeir-person',
    templateUrl: 'person.component.html',
    styleUrls: ['person.component.css']
})
export class PersonComponent implements OnInit {
    public person: any;

    constructor() {
        this.person = PEOPLE[0];
    }

    /**
     * OnInit implementation
     */
    ngOnInit() {
    }
}

import { Component, OnInit } from '@angular/core';
import { PeopleService } from "../shared/index";

@Component({
    selector: 'sfeir-person',
    templateUrl: 'person.component.html',
    styleUrls: ['person.component.css']
})
export class PersonComponent implements OnInit {    
    private person: any;
    
    constructor() {
        this.person = PEOPLE[0];
    }
    
    /**
     * OnInit implementation
     */
    ngOnInit() {
        this._peopleService.fetch().subscribe((persons: any[]) => persons.length > 0 ? this._person = persons.shift() : this._person = {});
    }

    /**
     * Returns random people
     */
    random() {
        this.person = PEOPLE[ (Math.random() * PEOPLE.length) | 0 ];
    }
}

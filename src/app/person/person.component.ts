import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../shared';

@Component({
    selector: 'sfeir-person',
    templateUrl: 'person.component.html',
    styleUrls: ['person.component.css']
})
export class PersonComponent implements OnInit {
    private person: any = {};

    constructor(private _peopleService: PeopleService) {}

    /**
     * OnInit implementation
     */
    ngOnInit() {
        this._peopleService.fetch()
            .subscribe(people => this.person = people[0]);
    }

    /**
     * Returns random people
     */
    random() {
        this._peopleService.fetchRandom()
            .subscribe(person => this.person = person);
    }
}

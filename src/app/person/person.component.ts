import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
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
        this._route.params.subscribe(params => {
            const id = params['id'];
            if (!id) {
                this.random();
                this._isPerson = false;
            }
            else {
                this._peopleService.fetchOne(id).subscribe((person: any) => {
                    this._person = person;
                    this._isPerson = true;
                })
            }
        });
    }

    /**
     * Returns random people
     */
    random() {
        this.person = PEOPLE[ (Math.random() * PEOPLE.length) | 0 ];
    }
}

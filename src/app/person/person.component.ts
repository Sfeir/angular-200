import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from "../../environments/environment";

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
        this._http.get(this._backendURL.allPeople)
            .map( res => res.json() )
            .subscribe( (persons: any[]) => this._person = persons.shift());
    }

    /**
     * Returns random people
     */
    random() {
        this.person = PEOPLE[ (Math.random() * PEOPLE.length) | 0 ];
    }
}

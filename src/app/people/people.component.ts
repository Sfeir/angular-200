import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

const BASE_URL = 'http://localhost:9000';

@Component({
    selector: 'sfeir-people',
    templateUrl: 'people.component.html',
    styleUrls: ['people.component.css']
})
export class PeopleComponent implements OnInit {
    
    private people: any[];
    
    constructor(private _http: Http) {}    

    /**
     * OnInit implementation
     */
    ngOnInit() {
        this._http.get(`${BASE_URL}/api/peoples/`)
            .map(res => res.json())            
            .subscribe( (people: any[]) => this.people = people);
    }

    delete(person: any) {
        this._http.delete(`${BASE_URL}/api/peoples/${person.id}`)
            .map(res => res.json())            
            .subscribe( (people: any[]) => this.people = people);
    }
}

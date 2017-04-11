import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

const BASE_URL = 'http://localhost:9000';

@Component({
    selector: 'sfeir-people',
    templateUrl: './people.component.html',
    styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
    
    private people: any[];
    
    constructor(private _http: Http) {}    

    /**
     * Returns private property _dialogStatus
     *
     * @returns {string}
     */
    get dialogStatus(): string {
        return this._dialogStatus
    }

    /**
     * Returns private property _view
     *
     * @returns {string}
     */
    get view(): string {
        return this._view;
    }

    /**
     * OnInit implementation
     */
    ngOnInit() {
        this._http.get(`${BASE_URL}/api/peoples/`)
            .map(res => res.json())            
            .subscribe( (people: any[]) => this.people = people);
    }
}

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
     * Returns private property _dialogStatus
     *
     * @returns {string}
     */
    get dialogStatus(): string {
        return this._dialogStatus
    }

    /**
     * OnInit implementation
     */
    ngOnInit() {
        this._http.get(`${BASE_URL}/api/peoples/`)
            .map(res => res.json())            
            .subscribe( (people: any[]) => this.people = people);
    }

    /**
     * Function to delete on person
     *
     * @param person
     */
    delete(person: any) {
        this._http.delete(this._backendURL.onePeople.replace(':id', person.id))
            .map( res => {
                if (res.status === 200) {
                    return res.json();
                }
                else {
                    return [];
                }
            })
            .subscribe( (people: any[]) => this._people = people);
    }

    /**
     * Function to display modal
     */
    showDialog() {
        this._dialogStatus = 'active';
    }

    /**
     * Function to hide modal
     */
    hideDialog() {
        this._dialogStatus = 'inactive';
    }
}

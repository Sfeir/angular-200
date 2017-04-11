
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/mergeMap';

const BASE_URL = 'http://localhost:9000';

@Component({
    selector: 'sfeir-people',
    templateUrl: './people.component.html',
    styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
    
    people: any[];
    dialogStatus = 'inactive';

    constructor(private _http: Http) {}    


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

    delete(person: any) {
        this._http.delete(`${BASE_URL}/api/peoples/${person.id}`)
            .map(res => res.json())            
            .subscribe( (people: any[]) => this.people = people);
    }

    add(person: any) {        
        this._http.post(`${BASE_URL}/api/peoples/`,person)
            .flatMap( res => this._http.get(`${BASE_URL}/api/peoples/`))
            .map(res => res.json())            
            .subscribe( (people: any[]) => {
                this.people = people;
                this.hideDialog();
            });
    }

    showDialog() {
        this.dialogStatus = 'active';
    }

    hideDialog() {
        this.dialogStatus = 'inactive';
    }
}



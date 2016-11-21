import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from "../../environments/environment";

@Component({
    selector: 'sfeir-people',
    templateUrl: 'people.component.html',
    styleUrls: ['people.component.css']
})
export class PeopleComponent implements OnInit {
    // private property to store people value
    private _people: any[];
    // private property to store all backend URLs
    private _backendURL: any;

    /**
     * Component constructor
     */
    constructor(private _http: Http) {
        this._people = [];
        this._backendURL = {};

        // build backend base url
        let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
        if (environment.backend.port) {
            baseUrl += `:${environment.backend.port}`;
        }

        // build all backend urls
        Object.keys(environment.backend.endpoints).forEach(k => this._backendURL[k] = `${baseUrl}${environment.backend.endpoints[k]}`);
    }

    /**
     * Returns private property _people
     *
     * @returns {any[]}
     */
    get people(): any[] {
        return this._people;
    }

    /**
     * OnInit implementation
     */
    ngOnInit() {
        this._http.get(this._backendURL.allPeople)
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
}

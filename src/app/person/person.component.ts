import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from "../../environments/environment";

@Component({
    selector: 'sfeir-person',
    templateUrl: 'person.component.html',
    styleUrls: ['person.component.css']
})
export class PersonComponent implements OnInit {
    // private property to store person value
    private _person: any;
    // private property to store all backend URLs
    private _backendURL: any;

    /**
     * Component constructor
     */
    constructor(private _http: Http) {
        this._person = {};
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
     * Returns private property _person
     *
     * @returns {any}
     */
    get person(): any {
        return this._person;
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
                    return [{}];
                }
            })
            .subscribe( (persons: any[]) => this._person = persons.shift());
    }

    /**
     * Returns random people
     */
    random() {
        this._http.get(this._backendURL.randomPeople)
            .map( res => {
                if (res.status === 200) {
                    return res.json();
                }
                else {
                    return {};
                }
            })
            .subscribe( (person: any) => this._person = person);
    }
}

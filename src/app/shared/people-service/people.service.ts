import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable()
export class PeopleService {
    // private property to store all backend URLs
    private _backendURL: any;

    /**
     * Service constructor
     */
    constructor(private _http: Http) {
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
     * Function to return list of people
     *
     * @returns {Observable<R>}
     */
    fetch(): Observable<any[]> {
        return this._http.get(this._backendURL.allPeople, this._options())
            .map((res: Response) => {
                if (res.status === 200) {
                    return res.json();
                }
                else {
                    return [];
                }
            });
    }

    /**
     * Function to return one random person from people list
     *
     * @returns {Observable<R>}
     */
    fetchRandom(): Observable<any> {
        return this._http.get(this._backendURL.randomPeople, this._options())
            .map((res: Response) => {
                if (res.status === 200) {
                    return res.json();
                }
                else {
                    return {};
                }
            });
    }

    /**
     * Function to return one person for current id
     *
     * @param id
     *
     * @returns {Observable<R>}
     */
    fetchOne(id: string): Observable<any> {
        return this._http.get(this._backendURL.onePeople.replace(':id', id), this._options())
            .map((res: Response) => {
                if (res.status === 200) {
                    return res.json();
                }
                else {
                    return {};
                }
            });
    }

    /**
     * Function to delete one person for current id
     *
     * @param id
     *
     * @returns {Observable<R>}
     */
    delete(id: string): Observable<any[]> {
        return this._http.delete(this._backendURL.onePeople.replace(':id', id), this._options())
            .map((res: Response) => {
                if (res.status === 200) {
                    return res.json();
                }
                else {
                    return [];
                }
            });
    }

    /**
     * Function to update one person
     *
     * @param person
     *
     * @returns {Observable<R>}
     */
    update(person: any): Observable<any> {
        return this._http.put(this._backendURL.onePeople.replace(':id', person.id), person, this._options())
            .map((res: Response) => res.json());
    }

    /**
     * Function to create a new person
     *
     * @param person
     *
     * @returns {Observable<R>}
     */
    create(person): Observable<any> {
        return this._http.post(this._backendURL.allPeople, JSON.stringify(person), this._options())
            .map((res: Response) => res.json());
    }

    /**
     * Function to return request options
     *
     * @returns {RequestOptions}
     */
    private _options(headerList: Object = {}): RequestOptions {
        const headers = new Headers(Object.assign({'Content-Type': 'application/json'}, headerList));
        return new RequestOptions({headers: headers});
    }
}

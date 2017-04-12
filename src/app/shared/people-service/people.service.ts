import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable()
export class PeopleService {

    private _backendURL: any;


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

    fetchRandom(): Observable<any> {
        return this._http.get(this._backendURL.randomPeople)
            .map(res => res.json());
    }

    fetchOne(id: string): Observable<any> {
        return this._http.get(this._backendURL.onePeople.replace(':id', id))
            .map(res => res.json());
    }

    delete(id: string): Observable<any[]> {
        return this._http.delete(this._backendURL.onePeople.replace(':id', id))
            .map(res => res.json());
    }

    update(person: any): Observable<any> {
        return this._http.put(this._backendURL.onePeople.replace(':id', person.id), person)
            .map((res: Response) => res.json());
    }

    create(person): Observable<any> {
        return this._http.post(this._backendURL.allPeople, JSON.stringify(person), this._options())
            .map((res: Response) => res.json());
    }

    private _options(headerList: Object = {}): RequestOptions {
        const headers = new Headers(Object.assign({ 'Content-Type': 'application/json' }, headerList));
        return new RequestOptions({ headers: headers });
    }
}

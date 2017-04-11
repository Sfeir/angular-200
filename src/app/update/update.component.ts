import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/mergeMap';
import { Observable } from "rxjs";

const BASE_URL = 'http://localhost:9000';

@Component({
  selector: 'sfeir-update',
  templateUrl: 'update.component.html',
  styleUrls: ['update.component.css']
})
export class UpdateComponent implements OnInit {    
    person: any;
    

    /**
     * Component constructor
     */
    constructor(private _route: ActivatedRoute, private _router: Router, private _http: Http) {        
        this.person = {
            address: {}
        };
    }

   
    /**
     * OnInit implementation
     */
    ngOnInit() {
        this._route.params
            .map((params: any) => params.id)
            .flatMap((id: string) => this._http.get(`${BASE_URL}/api/peoples/${id}`))
            .map(res => res.json())            
            .subscribe( (person: any) => this.person = person);
    }

    submit(person: any) {
        this._http.put(`${BASE_URL}/api/peoples/${person.id}`,person)
            .subscribe( () => this._router.navigate(['/people']) );
    }

    cancel() {
        this._router.navigate(['/people']);
    }

}


import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:9000';

@Component({
    selector: 'sfeir-people',
    templateUrl: './people.component.html',
    styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

    private people;

    constructor(private _http: HttpClient) {}

    /**
     * OnInit implementation
     */
    ngOnInit() {
        this._http.get(`${BASE_URL}/api/peoples/`)
            .subscribe( (people) => this.people = people);
    }

    add(person: any) {        
        this._peopleService.create(person)
            .flatMap( res => this._peopleService.fetch())            
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

     switchView() {
        this.view = (this.view === 'card') ? 'list' : 'card';
    }

    
    navigate(person) {
        this._router.navigate(['/edit', person.id]);
    }
}



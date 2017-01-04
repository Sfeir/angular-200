import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PeopleService } from "../shared/index";

@Component({
    selector: 'sfeir-person',
    templateUrl: 'person.component.html',
    styleUrls: ['person.component.css']
})
export class PersonComponent implements OnInit {
    // private property to store person value
    private _person: any;
    // private property to store flag to know if it's a person
    private _isPerson: boolean;

    /**
     * Component constructor
     */
    constructor(private _peopleService: PeopleService, private _route: ActivatedRoute) {
        this._person = {};
        this._isPerson = false;
    }

    /**
     * Returns flag to know if we are on a profil or on HP
     *
     * @returns {boolean}
     */
    get isPerson(): boolean {
        return this._isPerson;
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
        this._route.params.subscribe(params => {
            const id = params['id'];
            if (!id) {
                this.random();
                this._isPerson = false;
            }
            else {
                this._peopleService.fetchOne(id).subscribe((person: any) => {
                    this._person = person;
                    this._isPerson = true;
                })
            }
        });
    }

    /**
     * Returns random people
     */
    random() {
        this._peopleService.fetchRandom().subscribe((person: any) => this._person = person);
    }
}

import { Component } from '@angular/core';

@Component({
    selector: 'sfeir-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class PeopleAppComponent {
    name: string;

    constructor() {
        this.name = 'Angular';
    }
}

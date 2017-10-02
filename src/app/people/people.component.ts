import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { AddDialogComponent } from './add-dialog/add-dialog.component';

const BASE_URL = 'http://localhost:9000';

@Component({
    selector: 'sfeir-people',
    templateUrl: 'people.component.html',
    styleUrls: ['people.component.css']
})
export class PeopleComponent implements OnInit {

    private addDialog: MdDialogRef<AddDialogComponent>;
    people;
    dialogStatus = 'inactive';
    

    constructor(private _http: HttpClient, public dialog: MdDialog) {}


    /**
     * OnInit implementation
     */
    ngOnInit() {
        this._http.get(`${BASE_URL}/api/peoples/`)
            .subscribe( (people) => this.people = people);
    }

    delete(person: any) {
        this._http.delete(`${BASE_URL}/api/peoples/${person.id}`)
            .subscribe( (people) => this.people = people);
    }

    showDialog() {
        this.dialogStatus = 'active';
        this.addDialog = this.dialog.open(AddDialogComponent, {
            width: '450px',
            data: {}
          });

          this.addDialog.afterClosed().subscribe(result => {
            this.dialogStatus = 'inactive';
            console.log('The dialog was closed');
          });
    }

    hideDialog() {
        this.dialogStatus = 'inactive';
        this.addDialog.close();
    }
}

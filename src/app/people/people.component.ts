import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { AddDialogComponent } from './add-dialog/add-dialog.component';
import { PeopleService } from '../shared/people-service';
import { Store } from '@ngrx/store';
import * as fromRoot from '../store/reducers/people.reducer';
import * as PeopleAction from '../store/actions/people.actions';
import 'rxjs/add/operator/mergeMap';


@Component({
    selector: 'sfeir-people',
    templateUrl: './people.component.html',
    styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

    private addDialog: MdDialogRef<AddDialogComponent>;
    people;
    search;
    dialogStatus = 'inactive';
    view = 'card';

    constructor(private _peopleService: PeopleService, public dialog: MdDialog, private store: Store<fromRoot.State>) { }


    /**
     * OnInit implementation
     */
    ngOnInit() {
        this.search = this.store.select(fromRoot.getSearch);
        this.people = this._peopleService.getPeople();
        this._peopleService.fetch().subscribe();
    }

    delete(person: any) {
        this._peopleService.delete(person.id)
            .subscribe((people) => this.people = people);
    }

    add(person: any) {
        this._peopleService.update(person)
            .mergeMap(res => this._peopleService.fetch())
            .subscribe((people: any[]) => {
                this.people = people;
                this.hideDialog();
            });
    }

    showDialog() {
        this.dialogStatus = 'active';
        this.addDialog = this.dialog.open(AddDialogComponent, {
            width: '450px',
            data: {}
        });

        this.addDialog.afterClosed().subscribe(person => {
            this.dialogStatus = 'inactive';
            if (person) {
                this.add(person);
            }
        });
    }

    hideDialog() {
        this.dialogStatus = 'inactive';
        this.addDialog.close();
    }

    switchView() {
        this.view = (this.view === 'card') ? 'list' : 'card';
    }

    onSearch(search) {
        this.store.dispatch(new PeopleAction.FilterPeople(search));
    }

}



import { ActionReducer } from '@ngrx/store';
import * as PeopleAction from '../actions/people.actions';

export interface State {
    people: Object[];
    search: string;
}

export const initialState: State = {
    people: [],
    search: ''
};


export function reducer(state: State = initialState, action: PeopleAction.Actions) {
    switch (action.type) {
        default:
            return state;
    }
}
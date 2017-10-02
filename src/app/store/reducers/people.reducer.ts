import { ActionReducer, createSelector, createFeatureSelector } from '@ngrx/store';
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

// SELECTORS


export const getPeopleState = createFeatureSelector<State>('people');

export const getPeople = createSelector(
    getPeopleState,
    (state: State) => {
        return state.people;
    }
);

export const getSearch = createSelector(
    getPeopleState,
    (state: State) => {
        return state.search;
    }
);
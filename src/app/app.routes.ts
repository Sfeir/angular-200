import { RouterModule, Routes } from '@angular/router';

// APP COMPONENTS
import { HOME_ROUTES } from './home/index';
import { PEOPLE_ROUTES } from './people/index';
import { UPDATE_ROUTES } from "./update/index";
import { PERSON_ROUTES } from "./person/index";

const ROUTES: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    ...HOME_ROUTES,
    ...PEOPLE_ROUTES,
    ...UPDATE_ROUTES,
    ...PERSON_ROUTES
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES,{useHash: true});

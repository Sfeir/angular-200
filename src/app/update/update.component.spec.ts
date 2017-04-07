/* tslint:disable:no-unused-variable */

import { PeopleService } from './../shared/people-service/people.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UpdateComponent } from './update.component';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";

export class MockRouter {
  navigate(commands: any[], extras?: any): Promise<boolean> {
    return Promise.resolve(true);
  }
}

export class MockActivatedRoute {
  private _params: {};
  private paramsSubject: BehaviorSubject<any>;
  constructor() {
    this.paramsSubject = new BehaviorSubject(this._params);
  }
  get params() {
    return this.paramsSubject.asObservable();
  }
  set params(params: any) {
    this._params = params;
    this.paramsSubject.next(params);
  }
}

export class MockPeopleService {
  update(person: any) {
    return Observable.create(true);
  }
  fetchOne(id) {
    return Observable.create(o => o.next({}));
  }
}

describe('UpdateComponent', () => {
  let component: UpdateComponent;
  let fixture: ComponentFixture<UpdateComponent>;
  let mockActivatedRoute: MockActivatedRoute;

  beforeEach(async(() => {

    mockActivatedRoute = new MockActivatedRoute();
    mockActivatedRoute.params = { id: 12345 };

    TestBed.configureTestingModule({
      declarations: [UpdateComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Router, useClass: MockRouter },
        { provide: PeopleService, useClass: MockPeopleService }
      ],
      // Tells the compiler not to error on unknown elements and attributes
      schemas: [NO_ERRORS_SCHEMA]
    });

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('', () => {});
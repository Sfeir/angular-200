import { Subject } from 'rxjs/Subject';
import { HttpModule } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
/* tslint:disable:no-unused-variable */

import { TestBed, async, fakeAsync, inject, tick } from '@angular/core/testing';
import { PeopleService } from './people.service';
import { Http, XHRBackend, Response, ResponseOptions } from '@angular/http';
import 'rxjs/add/operator/map';

// @todo(wassim): there is a weird behavior with mock responses
// they return Promises instead of the actual "expectedResponse" object.
describe('PeopleService', () => {
  let service;
  let mockbackend;
  let lastConnection;
  let expectedResponse = [{
    "id": "123",
    "lastname": "Powers",
    "firstname": "Black",
    "twitter": "labore",
  }, {
    "id": "456",
    "lastname": "Shaffer",
    "firstname": "Vargas",
    "twitter": "irure",
  }, {
    "id": "789",
    "lastname": "Yang",
    "firstname": "Mendez",
    "twitter": "excepteur",
  }];

  const responseOptions = (body, status = 200) => {
    return new ResponseOptions({
      status,
      body: JSON.stringify(body)
    });
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        PeopleService,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    });
  });

  describe('fetch()', () => {

    it('should fetch all people when status === 200', inject([PeopleService, XHRBackend], (service, mockbackend) => {

      mockbackend.connections.subscribe(connection => {
        connection.mockRespond(new Response(
          new ResponseOptions(responseOptions(expectedResponse))
        ));
      });

      // todo

    }));

    it('should fetch empty array when status !== 200', inject([PeopleService, XHRBackend], (service, mockbackend) => {

      mockbackend.connections.subscribe(connection => {
        connection.mockRespond(new Response(
          new ResponseOptions(responseOptions(expectedResponse, 404))
        ));
      });

      // todo

    }));
  });

  describe('fetchRandom()', () => {

    it('should fetch random person when status === 200', inject([PeopleService, XHRBackend], (service, mockbackend) => {

      mockbackend.connections.subscribe(connection => {
        connection.mockRespond(new Response(
          new ResponseOptions(responseOptions(expectedResponse[1]))
        ));
      });

      // todo

    }));    
  });

  describe('fetchOne()', () => {

    it('should fetch person with id=456 when status === 200', inject([PeopleService, XHRBackend], (service, mockbackend) => {

      mockbackend.connections.subscribe(connection => {
        connection.mockRespond(new Response(
          new ResponseOptions(responseOptions(expectedResponse[1]))
        ));
      });

      // todo

    }));
    

  });

  describe('delete()', () => {

    it('should delete person with id=456 when status === 200', inject([PeopleService, XHRBackend], (service, mockbackend) => {

      mockbackend.connections.subscribe(connection => {
        const _expectedResponse = Array.from(expectedResponse);
        _expectedResponse.splice(1, 1); // remove entry=1

        connection.mockRespond(new Response(
          new ResponseOptions(responseOptions(_expectedResponse))
        ));
      });

      // todo

    }));
    
  });

  describe('update()', () => {

    it('should update person with id=456 when status === 200', inject([PeopleService, XHRBackend], (service, mockbackend) => {

      const body = expectedResponse[1];
      body.firstname = 'Wassim';
      body.lastname = 'Chegham';
      body.twitter = '@manekinekko';

      mockbackend.connections.subscribe(connection => {
        expectedResponse[1].firstname = 'Wassim';
        expectedResponse[1].lastname = 'Chegham';
        expectedResponse[1].twitter = '@manekinekko';

        connection.mockRespond(new Response(
          new ResponseOptions(responseOptions(expectedResponse[1]))
        ));
      });

      // todo

    }));

  });

  describe('create()', () => {

    it('should create person when status === 200', inject([PeopleService, XHRBackend], (service, mockbackend) => {

      const body = {
        id: '900',
        firstname: 'Wassim',
        lastname: 'Chegham',
        twitter: '@manekinekko',
      };

      mockbackend.connections.subscribe(connection => {
        connection.mockRespond(new Response(
          new ResponseOptions(responseOptions(body))
        ));
      });

      // todo

    }));

  });

});
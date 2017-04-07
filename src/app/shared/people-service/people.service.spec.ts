import { HttpModule } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
/* tslint:disable:no-unused-variable */

import { TestBed, async, fakeAsync, inject } from '@angular/core/testing';
import { PeopleService } from './people.service';
import { Http, XHRBackend } from "@angular/http";


describe('PeopleService', () => {
  let service;
  let mockbackend;
  let lastConnection;
  let expectedResponse = [{
    "id": "1234",
    "photo": "https://randomuser.me/portraits/women/59.jpg",
    "firstname": "Leanne",
    "lastname": "Woodard",
    "entity": "BIOSPAN",
    "entryDate": 1445900400000,
    "birthDate": 126313200000,
    "gender": "",
    "email": "Leanne.Woodard@BIOSPAN.com",
    "skills": ["pariatur", "ipsum", "laboris", "nostrud", "elit"],
    "geo": { "lat": 48.854107964410616, "lng": 2.2486534555789013 },
    "phone": "0784112248",
    "address": {
      "street": "Narrows Avenue",
      "postalCode": 70534,
      "city": "Boling"
    },
    "links": {
      "twitter": "https://twitter.com/laboris",
      "slack": "https://slack.com/fugiat",
      "github": "https://github.com/velit",
      "linkedin": "https://www.linkedin.com/in/voluptate"
    },
    "isManager": false,
    "manager": "Erika",
    "managerId": "5763cd4d3b57c672861bfa1f"
  }];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        PeopleService,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    });
  });

  beforeEach(inject([PeopleService, XHRBackend], (s, xmb) => {
    service = s;
    mockbackend = xmb;
    mockbackend.connections.subscribe(connection => lastConnection = connection);
  }));

  describe('fetching...', () => {
    it('fetch() should query /api/peoples', () => {
      service.fetch();
      expect(lastConnection).toBeDefined('No HTTP connection!');
      expect(lastConnection.request.url).toMatch(/api\/peoples$/, 'Invalid URL');
    });

    it('should fetch all people', inject([PeopleService, XHRBackend], (s, xmb) => {

      mockbackend.connections.subscribe(connection => {
        connection.mockRespond(new Response({ body: {} }));
      });

      s.fetch().subscribe(response => {
        response.then(foo => console.log(foo));

        console.log();
        expect(response).toBe(Array);
        expect(response.length).toEqual(1);
        expect(response).toEqual(expectedResponse);
      });

    }));
  })
});

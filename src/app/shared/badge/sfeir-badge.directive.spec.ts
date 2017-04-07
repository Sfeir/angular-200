import { BrowserModule } from '@angular/platform-browser';
import { inject } from '@angular/core/testing';
/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { SfeirBadgeDirective } from './sfeir-badge.directive';
import { ElementRef, Renderer } from "@angular/core";

export class MockElementRef extends ElementRef {
  constructor() { super(null); }
}

export class MockRenderer {
  setElementProperty(...args) {}
}

describe('SfeirBadgeDirective', () => {

  let elementRef: ElementRef;
  let renderer: Renderer;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ElementRef, useCalss: MockElementRef },
        { provide: Renderer, useClass: MockRenderer }
      ]
    }).compileComponents();
  });

  beforeEach(inject([ElementRef, Renderer], (elementRef, renderer) => {
    elementRef = elementRef;
    renderer = renderer;
  }))

  it('should create an instance', () => {
    let directive = new SfeirBadgeDirective(elementRef, renderer);
    expect(directive).toBeTruthy();
  });
});

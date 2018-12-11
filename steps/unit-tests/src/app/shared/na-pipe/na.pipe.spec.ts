/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { NaPipe } from './na.pipe';

describe('NaPipe', () => {
  it('create an instance', () => {
    const pipe = new NaPipe();
    expect(pipe).toBeTruthy();
  });

  describe('should return N/A...', () => {
    it('for NULL', () => {
      // todo
    });

    it('for UNDEFINED', () => {
      // todo
    });

    it('for "" (empty string)', () => {
      // todo
    });
  });
  describe('Should not return N/A', () => {
    // todo
  });
});

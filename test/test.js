/* eslint no-unused-expressions: 0 */

const chai = require('chai');
const validator = require('json-schema-remote');

const { expect } = chai;

const util = require('../');

describe('newError', () => {
  it('should return valid error', (done) => {
    const error = util.newError(100, 'detailtext', 'verbosetext');
    expect(error).to.be.ok;
    expect(error).to.contain.keys('status', 'code', 'detail', 'verbose');
    expect(error).to.have.property('message');
    expect(error.status).to.equal(404);
    expect(error.code).to.match(/^\d100$/);
    expect(error.detail).to.equal('detailtext');
    expect(error.verbose).to.equal('verbosetext');
    expect(error.message).to.equal('Resource not found');
    done();
  });
  it('should return valid error for no parameters', (done) => {
    const error = util.newError();
    expect(error).to.be.ok;
    expect(error).to.contain.keys('status', 'code', 'detail', 'verbose');
    expect(error).to.have.property('message');
    done();
  });
  it('should return valid error for invalid error code', (done) => {
    const error = util.newError(999);
    expect(error).to.be.ok;
    expect(error).to.contain.keys('status', 'code', 'detail', 'verbose');
    expect(error).to.have.property('message');
    done();
  });
});

describe('convertValidationError', () => {
  it('should create simple entrecode error', () =>
    validator.validate({ string: 123 }, {
      type: 'object',
      properties: {
        string: {
          type: 'string',
        },
      },
    })
      .then(() => {
        throw new Error('unexpectedly validated');
      })
      .catch((e) => {
        if (e.message === 'unexpectedly validated') {
          throw e;
        }
        expect(e).to.be.ok;
        const error = util.convertValidationError(e);
        expect(error).to.contain.keys('status', 'code', 'detail', 'verbose');
        expect(error).to.have.property('message');
        expect(error.status).to.equal(400);
        expect(error.code).to.match(/^\d211$/);
        expect(error.detail).to.equal('string');
        expect(error.verbose).to.equal('Invalid type: number (expected string)');
        expect(error.message).to.equal('Invalid format for property in JSON body');
      }));
  it('should create multiple entrecode error', () =>
    validator.validate({ password: 123 }, {
      type: 'object',
      additionalProperties: false,
      properties: {
        password: {
          type: 'string',
        },
        required: {
          type: 'string',
        },
      },
      required: [
        'required',
      ],
    })
      .then(() => {
        throw new Error('unexpectedly validated');
      })
      .catch((e) => {
        if (e.message === 'unexpectedly validated') {
          throw e;
        }
        expect(e).to.be.ok;
        const error = util.convertValidationError(e);
        expect(error).to.contain.keys('status', 'code', 'detail', 'verbose');
        expect(error).to.have.property('message');
        expect(error.status).to.equal(400);
        expect(error.code).to.match(/^\d201$/);
        expect(error.detail).to.equal('/required');
        expect(error.verbose).to.equal('Missing required property: required');
        expect(error.message).to.equal('Missing property in JSON body');
        expect(error.subErrors).to.have.property('length', 1);
        expect(error.subErrors[0]).to.contain.keys('status', 'code', 'detail', 'verbose');
        expect(error.subErrors[0]).to.have.property('message');
      }));
});

describe('getLocalized', () => {
  it('should get de version of error', () => {
    const error = util.newError(100);
    expect(error).to.be.ok;
    expect(error.status).to.equal(404);
    expect(error.code).to.match(/^\d100$/);
    expect(error.message).to.equal('Resource not found');

    const errorDE = util.getLocalised(error, 'de');
    expect(errorDE.message).to.equal('Resource nicht gefunden');
  });
  it('should get en version of error', () => {
    const error = util.newError(100);
    expect(error).to.be.ok;
    expect(error.status).to.equal(404);
    expect(error.code).to.match(/^\d100$/);
    expect(error.message).to.equal('Resource not found');

    const errorEN = util.getLocalised(error);
    expect(errorEN.message).to.equal('Resource not found');
  });
  it('should get de version of error and subErrors', () => {
    const error = util.newError(100);
    error.subErrors = [error];

    const errorDE = util.getLocalised(error, 'DE');
    expect(errorDE.message).to.equal('Resource nicht gefunden');
    expect(errorDE.subErrors[0].message).to.equal('Resource nicht gefunden');
  });
  it('should leave untouched when no locale', () => {
    const error = util.newError('003');
    error.subErrors = [error];
    expect(error.message).to.equal('Service currently unavailable');

    const errorDE = util.getLocalised(error, 'DE');
    expect(errorDE.message).to.equal('Service currently unavailable');
    expect(errorDE.subErrors[0].message).to.equal('Service currently unavailable');
  });
});

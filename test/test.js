const chai = require('chai');

const { expect } = chai;

const util = require('../');

describe('newError', () => {
  it('should return valid error', (done) => {
    const error = util.newError(100, 'detailtext', 'verbosetext');
    // eslint-disable-next-line no-unused-expressions
    expect(error).to.be.ok;
    expect(error).to.contain.keys('status', 'code', 'detail', 'verbose');
    expect(error).to.have.property('message'); // message is no real key, but a property of the JS Error object
    expect(error.status).to.equal(404);
    expect(error.code).to.match(/^\d100$/);
    expect(error.detail).to.equal('detailtext');
    expect(error.verbose).to.equal('verbosetext');
    expect(error.message).to.equal('Resource not found');
    done();
  });
  it('should return valid error for no parameters', (done) => {
    const error = util.newError();
    // eslint-disable-next-line no-unused-expressions
    expect(error).to.be.ok;
    expect(error).to.contain.keys('status', 'code', 'detail', 'verbose');
    expect(error).to.have.property('message'); // message is no real key, but a property of the JS Error object
    done();
  });
  it('should return valid error for invalid error code', (done) => {
    const error = util.newError(999);
    // eslint-disable-next-line no-unused-expressions
    expect(error).to.be.ok;
    expect(error).to.contain.keys('status', 'code', 'detail', 'verbose');
    expect(error).to.have.property('message'); // message is no real key, but a property of the JS Error object
    done();
  });
});

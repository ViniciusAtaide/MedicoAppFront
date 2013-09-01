'use strict';

describe('Service: Estado', function () {

  // load the service's module
  beforeEach(module('ProjetoMedicoAppApp'));

  // instantiate service
  var Estado;
  beforeEach(inject(function (_Estado_) {
    Estado = _Estado_;
  }));

  it('should do something', function () {
    expect(!!Estado).toBe(true);
  });

});

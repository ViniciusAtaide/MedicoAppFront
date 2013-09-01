'use strict';

describe('Service: Medico', function () {

  // load the service's module
  beforeEach(module('ProjetoMedicoAppApp'));

  // instantiate service
  var Medico;
  beforeEach(inject(function (_Medico_) {
    Medico = _Medico_;
  }));

  it('should do something', function () {
    expect(!!Medico).toBe(true);
  });

});

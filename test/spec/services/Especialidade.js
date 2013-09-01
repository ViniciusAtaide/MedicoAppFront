'use strict';

describe('Service: Especialidade', function () {

  // load the service's module
  beforeEach(module('ProjetoMedicoAppApp'));

  // instantiate service
  var Especialidade;
  beforeEach(inject(function (_Especialidade_) {
    Especialidade = _Especialidade_;
  }));

  it('should do something', function () {
    expect(!!Especialidade).toBe(true);
  });

});

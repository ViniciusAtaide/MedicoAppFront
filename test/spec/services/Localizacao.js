'use strict';

describe('Service: Localizacao', function () {

  // load the service's module
  beforeEach(module('ProjetoMedicoAppApp'));

  // instantiate service
  var Localizacao;
  beforeEach(inject(function (_Localizacao_) {
    Localizacao = _Localizacao_;
  }));

  it('should do something', function () {
    expect(!!Localizacao).toBe(true);
  });

});

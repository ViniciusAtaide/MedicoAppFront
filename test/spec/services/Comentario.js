'use strict';

describe('Service: Comentario', function () {

  // load the service's module
  beforeEach(module('ProjetoMedicoAppApp'));

  // instantiate service
  var Comentario;
  beforeEach(inject(function (_Comentario_) {
    Comentario = _Comentario_;
  }));

  it('should do something', function () {
    expect(!!Comentario).toBe(true);
  });

});

'use strict';

describe('Controller: ResultadoCtrl', function () {

  // load the controller's module
  beforeEach(module('ProjetoMedicoAppApp'));

  var ResultadoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ResultadoCtrl = $controller('ResultadoCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

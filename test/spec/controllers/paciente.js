'use strict';

describe('Controller: PacienteCtrl', function () {

  // load the controller's module
  beforeEach(module('ProjetoMedicoAppApp'));

  var PacienteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PacienteCtrl = $controller('PacienteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

'use strict';

describe('Controller: MedicoCtrl', function () {

  // load the controller's module
  beforeEach(module('ProjetoMedicoAppApp'));

  var MedicoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MedicoCtrl = $controller('MedicoCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

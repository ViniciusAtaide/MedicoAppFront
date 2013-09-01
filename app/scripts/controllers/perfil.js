'use strict';

angular.module('ProjetoMedicoAppApp')
  .controller('PerfilCtrl', ['$scope',"Usuario", function ($scope, Usuario) {
    $scope.user = Usuario.getLogado();
  }]);

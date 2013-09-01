'use strict';

angular.module('ProjetoMedicoAppApp')
  .controller('PerfilCtrl', function ($scope, Usuario) {
    $scope.user = Usuario.findLogado();
  });

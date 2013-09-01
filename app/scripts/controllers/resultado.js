'use strict';

angular.module('ProjetoMedicoAppApp')
  .controller('ResultadoCtrl', ["$scope","$http","Comentario", function ($scope, $http, Comentario) {

    $scope.passo = function (m) {
      $scope.medico = m;
      $scope.passo1 = !$scope.passo1;
    };

    $scope.enviarComentario = function () {

      var adicionado = Comentario.add($scope.medico);

      if (adicionado) {
        alert("Comentario " + adicionado.nome + " cadastrado com sucesso");
      } else {
        alert("Não foi possível cadastrar seu comentario");
      }
    };
  }]);

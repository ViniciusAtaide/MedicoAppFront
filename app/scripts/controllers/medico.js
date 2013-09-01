'use strict';

angular.module('ProjetoMedicoAppApp')
  .controller('MedicoCtrl', ["$scope","Especialidade","Estado","Localizacao",
    function ($scope, Especialidade, Estado, Localizacao) {
    $scope.medico = {};

    $scope.especialidades = Especialidade.all;

    $scope.estados = Estado.all;

    $scope.getMedicosByEspecialidade = function () {
      $scope.medicos = Especialidade.findByNome($scope.medico.especialidade).medicos;
    };

    $scope.getCidadesByEstado = function () {
      $scope.cidades = Estado.findByNome($scope.medico.estado).cidades;
    };

    $scope.buscaCep = Localizacao.getCEP($scope.medico.cep);

  }]);

'use strict';

angular.module('ProjetoMedicoAppApp')
  .controller('SessaoCtrl', ["$scope","Especialidade","Usuario", function ($scope, Especialidade, Usuario) {
    $scope.tipos = [{nome: "Medico", valor: "Medico"}, {nome: "Paciente", valor: "Paciente"}];
    $scope.especialidades = Especialidade.all;

    $scope.cadastra = function() {
      if (Usuario.cadastro($scope.usuario)) {
        $scope.mensagem = "Usuário cadastrado com sucesso";
      } else {
        $scope.mensagem = "Problemas no cadastro"
      }
    }
    $scope.login = function () {
      if (Usuario.login($scope.usuario.login,$scope.usuario.senha)) {
        $scope.mensagem = "Usuário logado com sucesso";
      } else {
        $scope.mensagem = "Problemas no login";
      }
    };
  }]);

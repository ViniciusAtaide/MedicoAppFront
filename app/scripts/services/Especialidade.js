'use strict';

angular.module('ProjetoMedicoAppApp')
  .factory('Especialidade', ["$http", function ($http) {
    return {
      all: $http.get("session", {
        params: {acao: "showesp"}
      }),
      find:
        function(id) {
          $http.get("session", {
            params: {acao:"busca", id: id}
          }).success(function(data) {
              return data;
            }).error(function() {
              return false;
            });
        },
      add: function(especialidade) {
        $http.post("especialidade", {
          params: {acao:"add", especialidade: especialidade}
        }).success(function(data) {
            return data;
          }).error(function() {
            return false;
          });
      },
      delete: function(id) {
        $http.post("especialidade",{
          params: {acao:"delete", id: id}
        }).success(function() {
            return true;
          }).error(function() {
            return false;
          })
      },
      findByNome:
        function(nome) {
          $http.get("especialidade", {
            params: {acao:"buscaPorNome", nome:nome}
          }).success(function(data) {
              return data;
          }).error(function() {
              return false;
          });
        }
    }
  }]);

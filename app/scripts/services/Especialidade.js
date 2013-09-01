'use strict';

angular.module('ProjetoMedicoAppApp')
  .factory('Especialidade', function ($http) {
    return {
      all: $http.get("especialidade"),
      find:
        function(id) {
          $http.get("especialidade", {
            params: {action:"busca", id: id}
          }).success(function(data) {
              return data;
            }).error(function() {
              return false;
            });
        },
      add: function(especialidade) {
        $http.post("especialidade", {
          params: {action:"add", especialidade: especialidade}
        }).success(function(data) {
            return data;
          }).error(function() {
            return false;
          });
      },
      delete: function(id) {
        $http.post("especialidade",{
          params: {action:"delete", id: id}
        }).success(function() {
            return true;
          }).error(function() {
            return false;
          })
      },
      findByNome:
        function(nome) {
          $http.get("especialidade", {
            params: {action:"buscaPorNome", nome:nome}
          }).success(function(data) {
              return data;
          }).error(function() {
              return false;
          });
        }
    }
  });

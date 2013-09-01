'use strict';

angular.module('ProjetoMedicoAppApp')
  .factory('Medico', function ($http) {
    return {
      all: $http.get("medico"),
      find:
        function(id) {
          $http.get("medico", {
            params: {acao:"busca", id: id}
          }).success(function(data) {
              return data;
            }).error(function() {
              return false;
            });
        },
      add: function(medico) {
        $http.post("medico", {
          params: {acao:"add", medico: medico}
        }).success(function(data) {
            return data;
          }).error(function() {
            return false;
          });
      },
      delete: function(id) {
        $http.post("medico",{
          params: {acao:"delete", id: id}
        }).success(function() {
            return true;
          }).error(function() {
            return false;
          })
      }
    }
  });

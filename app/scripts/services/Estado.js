'use strict';

angular.module('ProjetoMedicoAppApp')
  .factory('Estado', function ($http) {
    return {
      all: $http.get("estado"),
      find:
        function(id) {
          $http.get("estado", {
            params: {acao:"busca", id: id}
          }).success(function(data) {
              return data;
            }).error(function() {
              return false;
            });
        },
      add: function(estado) {
        $http.post("estado", {
          params: {acao:"add", estado: estado}
        }).success(function(data) {
            return data;
          }).error(function() {
            return false;
          });
      },
      delete: function(id) {
        $http.post("estado",{
          params: {acao:"delete", id: id}
        }).success(function() {
            return true;
          }).error(function() {
            return false;
          })
      }
    }
  });

'use strict';

angular.module('ProjetoMedicoAppApp')
  .factory('Comentario', function ($http) {
    return {
      all: $http.get("comentario"),

      find:
        function(id) {
          $http.get("comentario", {
            params: {acao:"busca", id: id}
          }).success(function(data) {
              return data;
            }).error(function() {
              return false;
            });
      },

      add: function(comentario) {
        $http.post("comentario", {
          params: {acao:"add", comentario: comentario}
        }).success(function(data) {
            return data;
          }).error(function() {
            return false;            
          });
      },

      delete: function(id) {
        $http.post("comentario",{
          params: {acao:"delete", id: id}
        }).success(function() {
            return true;
          }).error(function() {
            return false;
          })
      }
    }
  });

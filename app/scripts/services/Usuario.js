'use strict';

angular.module('ProjetoMedicoAppApp')
  .factory('Usuario', function ($http) {
    return {
      getLogado: function() {
        return $http.get("usuario",{params: { acao:"getLogado"}
        }).success(function(data) {
            return data;
          });
      },
      login: function(login, senha) {
        return $http.post("usuario",{params: {acao: "login", login: login, senha: senha}
        }).success(function(data) {
            return data;
          }).error(function() {
            return null;
          })
      },
      cadastro: function(usuario) {
        return $http.post("usuario", {params: {acao: "cadastro", usuario: usuario}
        }).success(function(data) {
            return data;
          }).error(function() {
            return null;
          });
      }

    };
  });


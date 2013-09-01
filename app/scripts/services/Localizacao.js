'use strict';

angular.module('ProjetoMedicoAppApp')
  .factory('Localizacao', function ($http) {
    return {
      getCEP: function(cep) {

        $http.get(
            "http://cep.correiocontrol.com.br/" + cep
              + ".json")
          .success(function(data) {
            return data;
          });
      }
    }
  });

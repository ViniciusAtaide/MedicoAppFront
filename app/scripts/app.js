'use strict';

angular.module('ProjetoMedicoAppApp',[])
  .config(["$routeProvider","$locationProvider","$httpProvider",function ($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/medico', {
        templateUrl: 'views/medico.html',
        controller: 'MedicoCtrl'
      })
      .when('/paciente', {
        templateUrl: 'views/paciente.html',
        controller: 'PacienteCtrl'
      })
      .when('/perfil', {
        templateUrl: 'views/perfil.html',
        controller: 'PerfilCtrl'
      })
      .when('/resultado', {
        templateUrl: 'views/resultado.html',
        controller: 'ResultadoCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);

    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  }]);

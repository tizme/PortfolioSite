var app = angular.module('app', ['ngRoute', 'ngMessages', 'ngAnimate']);

app.config(function($routeProvider){
  $routeProvider
    .when('/',{
      templateUrl: 'partials/home.html',

    })
    .when('/projects',{
      templateUrl: 'partials/projects.html',

    })
    .when('/resume',{
      templateUrl: 'partials/resume.html',

    })
    .otherwise({
      redirectTo: '/'
    })
})

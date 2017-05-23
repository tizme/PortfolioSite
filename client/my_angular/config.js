var app = angular.module('app', ['ngRoute', 'ngMessages', 'ngAnimate']);

app.config(function($routeProvider){
  $routeProvider
    .when('/',{
      templateUrl: 'partials/home.html',
      controller: 'BoardController'
    })
    .when('/projects',{
      templateUrl: 'partials/projects.html',
      controller: 'LoginController'
    })
    .when('/resume',{
      templateUrl: 'partials/resume.html',
      controller: 'BoardController'
    })
    .when('/contact',{
      templateUrl: 'partials/contact.html',
      controller: 'BoardController'
    })
    .when('/topic/:topic_id',{
      templateUrl: 'partials/topic.html',
      controller: 'Controller3'
    })
    .when('/user/:user_id',{
      templateUrl: 'partials/user.html',
      controller: 'Controller5'
    })
    .when('/chat',{
      templateUrl: 'partials/partial_6.html',
      controller: 'Controller6'
    })
    .otherwise({
      redirectTo: '/'
    })
})

var app = angular.module('app', ['ngRoute', 'ngMessages', 'ngAnimate']);




app.config(['$routeProvider', 'locationProvider', function($routeProvider, $locationProvider){
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
    });
    if(window.history && window.history.pushState){
            //$locationProvider.html5Mode(true); will cause an error $location in HTML5 mode requires a  tag to be present! Unless you set baseUrl tag after head tag like so: <head> <base href="/">

         // to know more about setting base URL visit: https://docs.angularjs.org/error/$location/nobase

         // if you don't wish to set base URL then use this
         $locationProvider.html5Mode({
                 enabled: true,
                 requireBase: false
          });
        }
}]);

// app.run(["$rootScope","$location", function($rootScope, $location) {
//     $rootScope.$on("$routeChangeSuccess",
//     function() {
//         ga("send",
//         "pageview",
//         $location.path())
//     }
//     )
// }
//
// ])

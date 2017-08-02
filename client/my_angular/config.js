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
    $locationProvider.html5Mode(true);
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

var app = angular.module('app', ['ngRoute', 'ngMessages', 'ngAnimate']);




app.config(['$routeProvider', function($routeProvider){
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

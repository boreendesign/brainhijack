var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'loginController'
    })
    .when('/dashboard', {
        templateUrl: 'partials/dashboard.html',
        controller: 'dashboardController'
    })
    .otherwise({
        redirectTo: '/login'
    })
});
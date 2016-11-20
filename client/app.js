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
    .when('/game', {
        templateUrl: 'partials/game.html',
        controller: 'gameController'
    })
    .when('/profile', {
        templateUrl: 'partials/profile.html',
        controller: 'profileController'
    })
    .when('/admin', {
        templateUrl: 'partials/admin.html',
        controller: 'adminController'
    })
    .when('/typegame', {
        templateUrl: 'partials/typegame.html'
    })
    .otherwise({
        redirectTo: '/login'
    })
});
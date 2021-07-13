angular.module('spa', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'templates/default.html',
            })
            .when('/home', {
                templateUrl: 'templates/home.html',
                controller: 'HomeController'
            })
            .when('/about', {
                templateUrl: 'templates/about.html',
                controller: 'AboutController'
            })
            .when('/career', {
                templateUrl: 'templates/career.html',
                controller: 'CareerController'
            })
    }])
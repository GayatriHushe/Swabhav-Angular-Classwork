angular.module('spa', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'templates/home.html',
                controller: 'HomeController'
            })
            .when('/home', {
                templateUrl: 'templates/home.html',
                controller: 'HomeController'
            })
            .when('/add', {
                templateUrl: 'templates/add.html',
                controller: 'AddController'
            })
            .when('/edit', {
                templateUrl: 'templates/edit.html',
                controller: 'EditController'
            })
            .when('/search', {
                templateUrl: 'templates/search.html',
                controller: 'SearchController'
            })

    }])
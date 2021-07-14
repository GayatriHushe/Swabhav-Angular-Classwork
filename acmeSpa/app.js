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
            .when('/product', {
                templateUrl: 'templates/product.html',
                controller: 'ProductController'
            })
            .when('/productDetails', {
                templateUrl: 'templates/productDetails.html',
                controller: 'ProductDetailsController'
            })


    }])
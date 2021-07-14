angular.module('spa')
    .filter("gender", function() {
        return function(gender) {
            switch (gender) {
                case true:
                    return "Male";
                case false:
                    return "Female";
            }
        }

    })
    .controller('ProductController', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope) {
        $scope.filterOptions = true;
        $scope.productImages = true;
        $scope.logo = false;
        $scope.productTable = true;

        $http.get('products.json').then(function(response) {
            $scope.products = response.data;
            console.log($scope.products)
        });

        $scope.showImage = function() {
            $scope.productImages = false;
        }

        // $http.get('http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students').then(function(response) {
        //     $scope.products = response.data;
        //     console.log($scope.products)
        // });

        $scope.showDetails = function(product) {
            $rootScope.product = product;
            console.log(product);
        }

    }])
    .controller('HomeController', ['$scope', '$http', function($scope, $http) {
        $scope.logo = true;
    }])
    .controller('ProductDetailsController', ['$scope', '$http', function($scope, $http) {
        $scope.details = true;
    }])
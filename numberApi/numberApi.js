myApp = angular.module('myApp', [])
    .controller('myController', function($scope, $http) {
        $scope.quotes = [];
        $scope.showQuotes = function() {
            $http.get("http://numbersapi.com/" + $scope.no)
                .then(function(response) {
                    $scope.quotes.push(response.data);
                })
                .catch(function(err) {
                    console.log(err)
                })
        }
    });
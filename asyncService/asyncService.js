myApp = angular.module('myApp', [])
    .factory('MathService', ['$log', '$q', function($log, $q) {
        var math = {};
        $log.info("inside service");
        math.check = function(no) {
            return $q(function(resolve, reject) {
                if (no % 2 == 0) {
                    resolve("yes");
                    return;
                }
                resolve("no");
            })
        }

        return math;
    }])
    .controller('myController', function($scope, MathService) {
        $scope.checkEvenNo = function() {
            MathService.check($scope.no)
                .then(function(result) {
                    $scope.result = result;
                    console.log($scope.result);
                })
        }
    });
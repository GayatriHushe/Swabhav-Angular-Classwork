angular.module('modB', [])
    .controller('ControllerB', ['$scope', '$rootScope', function($scope, $rootScope) {
        $scope.message = "In Controller B"
        console.log($rootScope.developer)
    }])
angular.module('modA', ['modB'])
    .controller('ControllerA', ['$scope', '$rootScope', '$timeout', function($scope, $rootScope, $timeout) {
        $scope.message = "In Controller A"
        $rootScope.developer = {
            name: 'Gayatri',
            role: 'Jr Engineer',
            department: 'Comp',
            address: ['abc', 'def']
        }
        $timeout(function() {
            $rootScope.developer.name = "GAYATRI"
        }, 2000);
    }])
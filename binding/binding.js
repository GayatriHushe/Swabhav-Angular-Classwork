angular.module('main', [])
    .controller('MainController', function($scope) {
        $scope.student = {
            roll: 1,
            name: 'Gayatri',
            cgpa: 9.52
        }
    })
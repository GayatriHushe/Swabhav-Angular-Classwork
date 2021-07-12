myApp = angular.module("myApp", []);
myApp.controller('myController', function($scope) {
    $scope.visible = true;
    $scope.toggle = function() {
        $scope.visible = $scope.visible ? false : true;
    }
});
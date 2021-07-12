// Module A - > Controller A(DEPENDENCY INJECTION) -
//     > service: $scope, $rootScope, $log, $timeout

// angular.module('modA') //read module
// $("txtName").val()
// $("txtName").val("Hello")

var myModA = angular.module("modA", []);
myModA.controller('ControllerA', function($rootScope, $scope, $log) {
    console.log("inside ControllerA");
    $log.info("using $log service");
    $rootScope.company = {
        name: 'AurionPro',
        strength: 500
    };
    $scope.developer = {
        name: 'Gayatri',
        role: 'Junior Engineer'
    };
    $log.info($rootScope);
    $log.info($scope);
});
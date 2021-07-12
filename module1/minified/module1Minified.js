// var myModA=angular.module("modA",[]);
// myModA.controller("ControllerA",function(o,n,e){console.log("inside ControllerA"),e.info("using $log service"),o.company={name:"AurionPro",strength:500},n.developer={name:"Gayatri",role:"Junior Engineer"},e.info(o),e.info(n)});

//Solution 1: Explicitly inject dependencies
// var myModA = angular.module("modA", []);
// myModA.controller("ControllerA", function($rootScope, $scope, $log) { console.log("inside ControllerA"), $log.info("using $log service"), $rootScope.company = { name: "AurionPro", strength: 500 }, $scope.developer = { name: "Gayatri", role: "Junior Engineer" }, $log.info($rootScope), $log.info($scope) });

// ControllerA.$inject = ['$rootscope'];
// ControllerA.$inject = ['$scope'];
// ControllerA.$inject = ['$log'];


// Solution 2: Inline Annotation
var myModA = angular.module("modA", []);
myModA.controller("ControllerA", ['$rootScope', '$scope', '$log', function($rootScope, $scope, $log) { console.log("inside ControllerA"), $log.info("using $log service"), $rootScope.company = { name: "AurionPro", strength: 500 }, $scope.developer = { name: "Gayatri", role: "Junior Engineer" }, $log.info($rootScope), $log.info($scope) }]);
//Adv of '$scope' is that it will not minify
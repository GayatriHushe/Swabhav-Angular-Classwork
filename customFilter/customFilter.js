var app = angular.module("myMod", [])
    .filter("gender", function() {
        return function(gender) {
            switch (gender) {
                case 1:
                    return "Female";
                case 2:
                    return "Male";
                case 3:
                    return "Not disclosed"
            }
        }

    })
    .controller('myController', function($scope) {
        var employees = [
            { name: "abc", gender: 1 },
            { name: "def", gender: 2 },
            { name: "ghi", gender: 1 },
            { name: "mno", gender: 2 },
            { name: "xyz", gender: 3 }
        ];
        $scope.employees = employees;
    });
/// <reference path="angular.js"/>

var app = angular.module("myApp", [])
    .service('random', function() {
        var num = Math.floor(Math.random() * 10);
        this.generate = function() {
            return num;
        }
    })
    .controller('myController', function($scope, random) {
        $scope.randomNumber = random.generate();
    });


/*
 * --> when function was called ng ran service
 * --> passed the reference of the service
 */
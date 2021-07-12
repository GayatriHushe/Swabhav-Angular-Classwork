/// <reference path="angular.js"/>

var app = angular.module("myApp", [])
    .factory('random', function() {
        //instead of this make use of object
        var randomObj = {};
        var num = Math.floor(Math.random() * 10);
        randomObj.generate = function() {
            return num;
        }
        return randomObj;
    })
    .controller('myController', function($scope, random) {
        $scope.randomNumber = random.generate();
    });
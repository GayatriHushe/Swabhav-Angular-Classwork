/// <reference path="angular.js"/>

var app = angular.module('myApp', []);

app.controller('myController', function($scope) {
    $scope.tasks = [];
    $scope.searchEnter = function() {
        // if (event.which || event.keyCode) {
        //     console.log(event.which)
        // }

        if (event.which == 13 && $scope.task != "") {
            $scope.addTask();
        }
    };
    $scope.addTask = function() {
        $scope.tasks.unshift({ 'taskInfo': $scope.task, 'status': false, 'createdTime': moment().format('MMMM Do YYYY, h:mm:ss a') });
        console.log($scope.tasks)
        $scope.task = "";
    };

});
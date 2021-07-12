var myApp = angular.module('myApp', []);
myApp.controller('studentController', ['$scope', '$http', function($scope, $http) {

    $scope.submit = true;
    $scope.update = false;
    $scope.cancel = false;
    $scope.studentid = true;
    $scope.details = true;

    $http({
        method: 'GET',
        url: 'http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students'
    }).then(function(response) {
        $scope.students = response.data;
    }, function(error) {
        alert("Error in GET");
    });

    $scope.getDetails = function(id) {
        listId = []
        $http({
            method: 'GET',
            url: 'http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students/' + id
        }).then(function(response) {
            $scope.listId = response.data;
            //alert("Student Details Displayed")
        }, function(error) {
            alert("Error in GET BY ID");
        });
    }



    $scope.addStudent = function() {
        $http.post("http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students", $scope.student)
            .then(function(response) {
                alert("Student added successfully")
                console.log(response.data);
                $scope.students.push($scope.student);
                $scope.student = null;
            })
            .catch(function(error) {
                alert("Error in POST");
            })
    };


    $scope.deleteData = function(id) {
        console.log(id)
        $http.delete('http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students/' + id)
            .then(function(response) {
                alert("Deleted student with id : " + id)
                console.log("Deleted student with id : ", id)
                window.location.reload();
            }, function(error) {
                alert("Error in DELETE");
            })
    }

    $scope.updateStudent1 = function() {
        $http({
                method: 'PUT',
                url: 'http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students/' + $scope.student.id,
                data: $scope.student
            })
            .then(function(response) {
                alert("Student updated successfully")
                console.log("Student updated successfully")
            }, function(error) {
                alert("Error in PUT");
            });
    };



    $scope.selectStudent = function(student) {
        $scope.student = student;
        $scope.submit = false;
        $scope.update = true;
        $scope.cancel = true;
        $scope.studentid = false;

    };

    $scope.cancelUpdate = function() {
        $scope.student = null;
        $scope.submit = true;
        $scope.update = false;
        $scope.cancel = false;
        $scope.studentid = false;

    };

}]);
angular.module('spa')
    .filter("gender", function() {
        return function(gender) {
            switch (gender) {
                case true:
                    return "Male";
                case false:
                    return "Female";
            }
        }

    })
    .controller('HomeController', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope) {

        $scope.detailsIdHead = true;
        $scope.detailsId = true;
        $scope.studentForm = true;
        $scope.totalCount = true;
        $scope.studentList = true;
        $scope.studentListHead = true;
        $http({
            method: 'GET',
            url: 'http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students'
        }).then(function(response) {
            $scope.students = response.data;
        }, function(error) {
            alert("Error in GET");
        });

        $scope.deleteData = function(id) {
            console.log(id)
            $http.delete('http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students/' + id)
                .then(function(response) {
                    alert("Deleted student with id : " + id)
                    console.log("Deleted student with id : ", id)
                    window.location.reload("#/home");
                }, function(error) {
                    alert("Error in DELETE");
                })
        }

        $scope.selectStudent = function(student) {
            $rootScope.student = student;
        };

    }])
    .controller('AddController', ['$scope', '$http', function($scope, $http) {
        $scope.student = null;
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
    }])
    .controller('EditController', ['$scope', '$http', '$rootScope', '$window', function($scope, $http, $rootScope, $window) {

        $scope.student = $rootScope.student;
        $scope.studentForm = true;
        $scope.submit = false;
        $scope.update = false;
        $scope.cancel = false;
        $scope.studentid = false;
        $scope.details = true;

        $scope.updateStudent1 = function() {
            $http({
                    method: 'PUT',
                    url: 'http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students/' + $scope.student.id,
                    data: $scope.student
                })
                .then(function(response) {
                    alert("Student updated successfully")
                    console.log("Student updated successfully")
                    $window.location.href = '#/';
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
            $window.location.href = '#/';

        };

    }])
    .controller('SearchController', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope) {


        $scope.detailsId = true;
        $scope.studentForm = true;
        $scope.totalCount = false;
        $scope.studentList = true;
        $scope.studentListHead = true;
        $scope.studentid = false

        $scope.getDetails = function(id) {
            listId = []
            $http({
                method: 'GET',
                url: 'http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students/' + id
            }).then(function(response) {
                $scope.students = response.data;
                //alert("Student Details Displayed")
            }, function(error) {
                $scope.students = null;
                alert("Invalid Student Id");
            });
        }
    }])
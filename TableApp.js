var myFirstApp = angular.module('myTableApp', []);

myFirstApp.controller('studentController', function($scope) {
    $scope.student = {
        firstName: "Arvind",
        lastName: "Nishad",
        fees: 500,

        subjects: [{
            name: 'Physics',
            mark: 200
        }, {
            name: 'Maths',
            mark: 300
        }, {
            name: 'Biology',
            mark: 50
        }, {
            name: 'English',
            mark: 100
        }, {
            name: 'Hindi',
            mark: 75
        }],

        fullName: function() {
            var studentObj = $scope.student;
            return studentObj.firstName + " " + studentObj.lastName;
        }

    };
});

'use strict';

var myApp = angular.module('myApp', []);

myApp.controller('MyAppController', function MyAppController($scope) {
    $scope.title = 'Hello World !';
});

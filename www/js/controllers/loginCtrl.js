/**
 * Created by Faraj on 6/21/2016.
 */

var app = angular.module('starter.controllers');

app .controller('loginCtrl', function($scope, userService) {
    $scope.data = {};
        $scope.login = function() {

            userService.loginUser($scope.data);
        }
    });
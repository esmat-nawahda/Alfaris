/**
 * Created by Faraj on 6/20/2016.
 */

var app = angular.module('starter.controllers');

app.controller('usersCtrl', function($scope, userModel, userService) {
   $scope.addNewUser = function(userName,userPassword){
    var addNewUserModel = userModel.addNewUserModel(userName, userPassword);
       var userPromise = userService.addNewUser(addNewUserModel);


       userPromise.then(function (d) {
           console.log(d);
           $scope.userName="";
           $scope.userPassword="";
       }, function (d) {
           alert("Error");
           // swal({
           //     title: "Error!",
           //     text: "Something went wrong, please try again later",
           //     type: "error",
           //     timer: 2000
           // });
       });

   }


});

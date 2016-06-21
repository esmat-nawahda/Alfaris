/**
 * Created by Faraj on 6/20/2016.
 */
angular.module('servicesModule').factory('userService', function($http, globalService, $state, $ionicPopup) {
    return {

        addNewUser: function (Entity) {
            var request = {};
            request.opcode = "addNewUser";
            request.Entity =  Entity;
            console.log(request.Entity);
            var url = globalService.deploymentLink.link + "/users.php";

            var userPromise = $http({
                method: 'POST',
                url: url ,
                data: request
            });
            return userPromise;
        }
,
         loginUser: function (Entity) {
             var request = {};
             request.opcode = "userLogin";
             request.Entity =  Entity;
             var url = globalService.deploymentLink.link + "/users.php";
            var results="False";
             var  userPromise = $http({
                 method: 'POST',
                 url: url,
                 data: request

             }).success(function(result){


                 results=result;
                 console.log("result in Suc::"+results);
if(results=='true'){

    $state.go('tab.dash');
}else{

    var alertPopup = $ionicPopup.alert({
        title: 'Login failed!',
        template: 'Please check your credentials!'
    });
    }
             });

             return userPromise;





         }


    }});
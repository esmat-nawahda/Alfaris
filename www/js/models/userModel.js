/**
 * Created by Faraj on 6/20/2016.
 */
angular.module('modelsModule',[]);
angular.module('modelsModule').factory('userModel', function () {

    return {
        addNewUserModel: function (userName, userPassword) {
            var user = {};     // new object
            user.userName = userName;
            user.userPassword = userPassword;
            return user;
        }


    };


});
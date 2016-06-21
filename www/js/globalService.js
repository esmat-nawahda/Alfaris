/**
 * Created by Faraj on 6/20/2016.
 */
angular.module('servicesModule',[]);
angular.module('servicesModule').
    factory('globalService', function($q, $timeout){


        return {

            deploymentLink:{link:'http://geniucode.com/Alfaris'}

        }
    });
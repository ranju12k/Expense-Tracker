var myApp=angular.module("Tracker",['ngRoute'])

myApp.config(["$routeProvider",function($routeProvider){
    $routeProvider
    .when('/',{
            templateUrl:''
    })
     .otherwise({
                redirectTo: '/'
    
    });
}]);
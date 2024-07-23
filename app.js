var myApp = angular.module("Tracker", ['ngRoute']);
 
myApp.config(["$routeProvider", function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'FrontEnd/UserLogin/UserLogin.html',
            controller: 'UserLoginController'
        })
        .when('/login', {
            templateUrl: 'FrontEnd/UserLogin/UserLogin.html',
            controller: 'UserLoginController'
        })
        .when('/register', {
            templateUrl: 'FrontEnd/UserRegistration/UserRegistration.html',
            controller: 'UserRegistrationController'
        })
        .when('/welcomepage', {
            templateUrl: 'FrontEnd/WelcomePage/WelcomePage.html',
            controller: 'WelcomePageController'
        })
        .when('/home', {
            templateUrl: 'FrontEnd/Home/Home.html',
            controller: 'HomeController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
 
myApp.run(["$rootScope", "$location", function($rootScope, $location) {
    // $rootScope.isLoginRegisterOrWelcomePage = function() {
    //     return ['/login', '/register', '/welcomepage', '/'].includes($location.path());
    // };
}]);
 

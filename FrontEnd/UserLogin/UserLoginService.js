myApp.service('UserLoginService', ['$http', function($http) {
    this.loginUser = function(user) {
        return $http.post('http://localhost:3000/api/login', user);
    };
}]);

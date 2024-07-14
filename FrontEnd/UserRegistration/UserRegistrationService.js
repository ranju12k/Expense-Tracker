
myApp.service('RegisterService', ['$http', function($http) {
    this.registerUser = function(user) {
        return $http.post('http://localhost:3000/api/register', user);
    };
}]);

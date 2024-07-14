myApp.controller('UserLoginController', ['$scope', '$http', '$location', function($scope, $http, $location) {
    $scope.user = {};
    $scope.error = '';

    $scope.login = function() {
        $http.post('http://localhost:3000/api/login', $scope.user)
            .then(function(response) {
                if (response.data.success) {
                    // Redirect to the welcome page on successful login
                    $location.path('/welcomepage');
                } else {
                    $scope.error = 'Invalid email or password.';
                }
            })
            .catch(function(error) {
                $scope.error = 'An error occurred. Please try again.';
                console.error('Error logging in:', error);
            });
    };
}]);

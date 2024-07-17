myApp.controller('UserLoginController', ['$scope', '$http', '$location', '$window', '$timeout', function($scope, $http, $location, $window, $timeout) {
    $scope.user = {};
    $scope.newUser = {};
    $scope.error = '';

    $scope.login = function() {
        $http.post('http://localhost:3000/api/login', $scope.user)
            .then(function(response) {
                if (response.data.success) {
                    $window.alert('Login successful!');
                  
                    // Redirect to welcome page after the alert is handled
                    $timeout(function () {
                        $location.path('/welcomepage');
                    }, 0);
                } else {
                    $scope.error = 'Invalid email or password.';
                }
            })
            .catch(function(error) {
                $scope.error = 'An error occurred. Please try again.';
                console.error('Error logging in:', error);
            });
    };

    $scope.register = function() {
        // Implement the registration logic here
        console.log('Registering user:', $scope.newUser);
    };

    $scope.navigateToLogin = function() {
        $location.path('/login');
    };

    $scope.navigateToRegister = function() {
        $location.path('/register');
    };

    $scope.forgotPassword = function() {
        alert('We don\'t have that option at this time. Please sign up using a different email ID.');
    };

    $scope.socialAlert = function() {
        alert('We don\'t offer social media login at this time. Please sign up using your email address.');
    };
}]);

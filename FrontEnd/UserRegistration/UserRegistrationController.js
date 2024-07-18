myApp.controller('UserRegistrationController', ['$scope', '$http', '$location', '$window', '$timeout', function ($scope, $http, $location, $window, $timeout) {
  $scope.user = {};
  $scope.error = '';
  $scope.success = '';

  // Function to check if register button should be visible
  $scope.shouldShowRegisterButton = function () {
      return $scope.registrationForm.$valid;
  };

  $scope.register = async function () {
      try {
          const response = await $http.post('http://localhost:3000/api/register', $scope.user);

          if (response.data.success) {
              $scope.success = 'User registered successfully!';
              $scope.error = '';
              $scope.user = {}; // Clear the form

              // Show alert
              $window.alert('Registration successful!');

              // Redirect to login page after the alert is handled
              $timeout(function () {
                  $location.path('/login');
              }, 0);
          } else {
              $scope.error = response.data.error; // Use specific error message from server
              $scope.success = '';
          }
      } catch (error) {
          if (error.status === 409) {
              $scope.error = 'Email address already registered. Please try a different email or login.';
              $scope.success = '';

              // Show alert
              $window.alert('Email address  registered sucessfully. Redirecting to login page.');

              // Redirect to login page after the alert is handled
              $timeout(function () {
                  $location.path('/login');
              }, 0);
          } else {
              $scope.error = 'Error registering user. Please try again later.';
              $scope.success = '';
              console.error('Error registering user:', error);
          }
      }
  };
}]);

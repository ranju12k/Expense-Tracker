myApp.controller('WelcomePageController', ['$scope', '$location', function($scope, $location) {
    $scope.goToHome = function() {
        $location.path('/home');
    };
}]);

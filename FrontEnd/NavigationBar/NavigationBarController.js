myApp.controller('NavigationBarController', ['$scope', '$location', function ($scope, $location) {

    $scope.searchQuery = ''; // Initialize searchQuery variable
    $scope.searchResults = []; // Array to store search results

    // Example data for search
    const allItems = [
        { title: 'Home', link: '/home' },
        { title: 'Expenditure', link: '/expenditure' },
        { title: 'Notifications', link: '#' },
        { title: 'Savings', link: '/savings' },
        { title: 'Wallets', link: '#' },
        { title: 'Logout', link: '#' },
        { title: 'DarkMode', link: 'darkMode' }
    ];


    // Navigation functions
    $scope.goToHome = function () {
        $location.path('/home');
    };
    $scope.goToProfile = function () {
        $location.path('/profile');
    };
    $scope.goToExpenditure = function () {
        $location.path('/expenditure');
    };
    $scope.goToSavings = function () {
        $location.path('/savings');
    };


    $scope.navigateTo = function (path) {
        if (path === 'darkMode') {
            $scope.toggleDarkMode(); // Call the dark mode function
        } else if (path === '#') {
            // Handle non-navigation actions like Logout if needed
            return;
        } else {
            $location.path(path);
        }
    };
    $scope.performSearch = function () {
        if ($scope.searchQuery.trim() === '') {
            // Clear search results if query is empty
            $scope.searchResults = [];
            return;
        }

        // Filter allItems based on search query
        $scope.searchResults = allItems.filter(item =>
            item.title.toLowerCase().includes($scope.searchQuery.toLowerCase())
        );
    };


    // Toggle dark mode
    $scope.toggleDarkMode = function () {
        document.body.classList.toggle('dark');
        $scope.isDarkMode = document.body.classList.contains('dark');
    };

    // Initialize dark mode state
    $scope.isDarkMode = document.body.classList.contains('dark');

    // Toggle sidebar
    $scope.toggleSidebar = function () {
        document.querySelector('nav.sidebar').classList.toggle('close');
    };
    
}]);

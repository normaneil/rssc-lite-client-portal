function MainController($scope, $http){
    console.log("MainController");
    $scope.client = {
        name: 'Chris Jankulovski',
        email: 'chrisj@remotestaff.com.au',
        id: 11
    };
}

function AppController($scope, $http){
    console.log("AppController");
}

App.controller('AppController',["$scope", "$http", AppController]);
App.controller('MainController',["$scope", "$http", MainController]);
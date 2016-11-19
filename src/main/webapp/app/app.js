var expenseManagerApp = angular.module('expenseManagerApp', [
'ui.router'
]);


expenseManagerApp.config(function($stateProvider) {

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: './components/home/home.html',
            controller: 'homeController'
        })
        .state('about', {
            // we'll get to this in a bit
        });

});

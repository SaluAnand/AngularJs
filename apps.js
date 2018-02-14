var myapp = angular.module('MyAppNew',['ui.router']);
myapp.config(['$stateProvider','$urlRouterProvider',
function($stateProvider,$urlRouterProvider){
    $stateProvider.state({
        name : 'home',
        url : '/home',
        //template : '<div>this is the home page</div>'
        component : 'homePage'
    });
    $stateProvider.state({
        name : 'about',
        url : '/about',
        //template : '<div>this is the about page</div>'
        component : 'aboutPage'
    });
   // $urlRouterProvider.otherwise('/home')
    
}]);
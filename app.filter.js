var myapp = angular.module('MyApp');
myapp.filter('customName',[function(){
    return function(value){
        return "Name is " + value;
    };
}]);

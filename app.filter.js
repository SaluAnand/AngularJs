var myapp = angular.module('MyApp');
myapp.filter('customName',[function(){
    return function(value){
        var val = value.substr(0,2).toUpperCase();
        return val + value.substr(2,value.length);
    };
}]);

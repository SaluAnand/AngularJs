//first parameter is the name
//second is the dependencies
var myapp = angular.module('MyApp',[]);
myapp.controller('MyCtrl',['$scope',function($scope){
    $scope.myVal = "Value"
    $scope.onClick = function(){
        $scope.myVal = "New Value"
    }
}
]);

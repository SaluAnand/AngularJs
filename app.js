//first parameter is the name
//second is the dependencies
/*var myapp = angular.module('MyApp',[]);
//$scope - scope of the controller
myapp.controller('MyCtrl',['$scope',function($scope){
    $scope.myVal = "Value"
    $scope.onClick = function(){
        $scope.myVal = "New Value"
    }
}
]);*/

var myapp = angular.module('MyApp',[]);
myapp.controller('MyCtrl',['$scope',function($scope){
    $scope.students = [
        {
            name : "ram",
            age:10
        },
        {
            name : "sam",
            age : 20
        }
    ]
}
]);
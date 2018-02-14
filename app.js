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

var myapp = angular.module('MyApp',['ui-router']);
myapp.controller('MyCtrl',['$scope','AppService',
function($scope,AppService){
    //------------------------------------
    /* Filters */
        $scope.name = "Anand";

    //------------------------------------
    //$scope.students = AppService.getStudents();
    /*AppService.getStudents().then(
        function(result){
            $scope.students = result.data;
        }
    );*/
    /*AppService.getStudents().then(
        function(result){
            $scope.students = result.data.map(
                function(item){
                    item.seniority = item.age > 10 ? "senior" : "junior";
                    return item;
                }
            );
        }
    );*/
    AppService.getStudents().then(function(result){
        $scope.students = result;
    });

    $scope.onClick = function(student){
        $scope.SelectedStudent = student;
    }
    $scope.onBtnClick = function(event)
    {
        AppService.getStudents().then(
            function(result){
                $scope.students = result.data;
            }
        );
    }
}
]);
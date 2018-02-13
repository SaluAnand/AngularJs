//getting the allready created module in app.js
//no need to specify the array since we are not creating a new module
var myapp = angular.module('MyApp');
myapp.service('AppService',['$http','$q',function($http,$q){
        var studentsfromService = [{
                name : "ram",
                age:10
            },
            {
                name : "sam",
                age : 20
            }];
        /*this.getStudents =function ()
            {
                return students;
            }*/

            this.getStudents =function ()
            {
                //returning a promise object 
                //so that i can do 'then' and cehck the result is success
                var defer = $q.defer();
                /*
                setTimeout(function(){
                    defer.resolve("Data")
                },100)0;
                */
               setTimeout(function(){
                $http.get('/students.json').then(function(result){
                    var students = result.data.map(
                        function(item){
                            item.seniority = item.age > 10 ? "senior" : "junior";
                            return item;});
                    defer.resolve(students);
               })
               }
               ,1000);
               // defer.resolve($http.get('/students.json'));
                return defer.promise;
            }
           /* this.getStudents =function ()
            {
                //returning a promise object 
                //so that i can do 'then' and cehck the result is success
                return $http.get('/students.json');
            }*/
            this.getStudentsfromService =function ()
            {
                //returning json direct where the then wont be avilable
                return studentsfromService;
            }

}]);
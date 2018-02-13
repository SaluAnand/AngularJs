var myapp = angular.module('MyApp');
/*myapp.component('studentDetails',{
    template:'<div>Student Details\n<input type=\'text\'></div>'
});*/
myapp.component('studentDetails',{
    templateUrl: 'studentDetails.html',
   // controllerAs : 'sdc',//alias name for the controller insted of taking
    //default '$ctrl' controller name
    bindings:{
        selectedStudent : '<',
        myTitle : '@', //getting string value
        myList : '<' //getting property 
                    // and property value can be anything like string/numer etc
    },
    // controller : ['$element',function($element){
    //$element - the parent div
    controller : [function(){
        this.myName = 'custom Component';
    }]
});
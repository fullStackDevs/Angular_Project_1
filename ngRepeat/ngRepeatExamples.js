var myApp = angular.module("ngRepeatExampleApp", []);
myApp.controller("ngRepeatExampleController", ngRepeatExampleController);

function ngRepeatExampleController() {
    var ctrl = this;

    ctrl.myArray = [1, 2, 3, 4,5, 'car'];
    ctrl.persons = [
        {'name': "John Doe", 'age': 20},
        {'name': "Marian Popescu", 'age': 30},
        {'name': "Maria Ionescu", 'age': 27},
        {'name': "Cristina Enache", 'age': 20},
        {'name': "Catalin Ifrim", 'age': 40}
    ];


}

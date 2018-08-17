
var toDoApp = angular.module("myToDoApp", []);

toDoApp.controller("TodoCtrl", TodoCtrl);

function TodoCtrl() {

    var ctrl = this;
    ctrl.todosList = [];
    ctrl.newTodo = '';
    ctrl.editModeOn = false;

    ctrl.addNewTodo = function() {
      if(ctrl.newTodo !== '') {
          ctrl.todosList.push(ctrl.newTodo);
          ctrl.newTodo = '';
      }
    };

    ctrl.deleteTodo = function(todoIndex) {
           ctrl.todosList.splice(todoIndex, 1);
    }

    ctrl.toggleEditMode = function() {
        ctrl.editModeOn = !ctrl.editModeOn;
    }

}
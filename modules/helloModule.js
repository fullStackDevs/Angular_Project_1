
var myModule = angular.module("mySharableModule", []);

myModule.controller("myModuleController", myModuleController);

function myModuleController() {
    var ctrl = this;
    ctrl.helloMessage = "Hello from my sharable module!!!";
}
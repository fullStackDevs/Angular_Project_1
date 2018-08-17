
var app = angular.module("externalModuleApp", ['ngTagsInput']);

app.controller("TagsDemoCtrl", TagsDemoCtrl);

function TagsDemoCtrl() {
    var ctrl = this;

    ctrl.tags = [
        {text: 'Tag val 1'},
        {text: 'Tag val 2'},
        {text: 'Tag val 3'},
        {text: 'Tag val 4'}
    ];
}
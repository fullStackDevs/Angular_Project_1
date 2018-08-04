
var app = angular.module("calculatorApp", []);

app.controller("CalculatorController", CalculatorController);

function CalculatorController() {

    var ctrl = this;
    ctrl.result = 0;
    ctrl.operator = '+';

    ctrl.calculateResult = function () {
        var val_1 = parseFloat(ctrl.param_1);
        var val_2 = parseFloat(ctrl.param_2);
        switch(ctrl.operator) {
            case '+':
                ctrl.result = val_1 + val_2;
                break;
            case '-':
                ctrl.result = val_1 - val_2;
                break;
            case '*':
                ctrl.result = val_1 * val_2;
                break;
            case '/':
                ctrl.result = val_1 / val_2;
                break;
        }
    }

    ctrl.setOperator = function(operator) {
        ctrl.operator = operator;
    }
};
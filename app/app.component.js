// (function(app) {
//   app.AppComponent =
//     ng.core.Component({
//       selector: 'my-app',
//       template: '<h1>AngularAttack 2016</h1><p>Your project runs!</p>'
//     })
//     .Class({
//       constructor: function() {}
//     });
// })(window.app || (window.app = {}))i;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//Gengwu Li: changed to typescript
var core_1 = require('@angular/core');
//Gengwu Li: import what ever ui-control you want from fuel-ui
var fuel_ui_1 = require('fuel-ui/fuel-ui');
var fuel_ui_2 = require('fuel-ui/fuel-ui');
var AppComponent = (function () {
    function AppComponent() {
        this.title = "hello";
        this.week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        this.datePickerValue = new Date(2016, 7, 6);
    }
    AppComponent.prototype.editEvent = function () {
        alert("hello");
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'templates/angular-attack.html',
            //Gengwu Li: remember if you want to use it, you need to add it to directive array
            directives: [fuel_ui_2.DATE_PICKER_PROVIDERS, fuel_ui_2.Collapse, fuel_ui_1.Modal]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
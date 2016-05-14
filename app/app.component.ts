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


//Gengwu Li: changed to typescript
import { Component } from '@angular/core';
//Gengwu Li: import what ever ui-control you want from fuel-ui
import {Modal} from 'fuel-ui/fuel-ui';
import {DATE_PICKER_PROVIDERS, DateRange, Collapse} from 'fuel-ui/fuel-ui';

@Component ({
	selector: 'my-app',
	templateUrl: 'templates/angular-attack.html',
	//Gengwu Li: remember if you want to use it, you need to add it to directive array
	directives: [DATE_PICKER_PROVIDERS, Collapse,Modal]

})

export class AppComponent {
	title = "hello"
	data: any[];
	week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
	editEvent() {
		alert("hello");
	}
	datePickerValue = new Date(2016, 7, 6);



}


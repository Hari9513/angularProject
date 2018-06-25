import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MyServiceService } from '../my-service.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-new-form',
	templateUrl: './new-form.component.html',
	styleUrls: ['./new-form.component.css']
})
export class NewFormComponent implements OnInit {
	user = {};

	constructor(
		private myServ: MyServiceService,
		private route: Router
		) { }

	ngOnInit() {
	}

	submitForm(user){
    console.log(user)
		this.myServ.createUser(user)
		.then(data => {
			this.route.navigate(['/friendsForm'])
		})
		.catch(error => {
			console.log(error)
		})
	}

}

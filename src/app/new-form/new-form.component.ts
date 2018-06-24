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
	// regForm:FormGroup;

	constructor(
		// private fb: FormBuilder
		private myServ: MyServiceService,
		private route: Router
		) { }

	ngOnInit() {
		// this.createForm();
	}

	// createForm(){
	// 	this.regForm = this.fb.group({
	// 		name: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-Z]+')])],
	// 		age: ['', Validators.compose([Validators.required, Validators.maxLength(3), Validators.pattern('[0-9]+')])],
	// 		phone: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]+')])]
	// 	}, {updateOn:'submit'})
	// }
	
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

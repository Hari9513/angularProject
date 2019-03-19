import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/common/user.service';

@Component({
	selector: 'app-new-form',
	templateUrl: './new-form.component.html',
	styleUrls: ['./new-form.component.css']
})
export class NewFormComponent implements OnInit {
	user = {};

	constructor(
		private userService: UserService,
		private route: Router
	) { }

	ngOnInit() {
	}

	submitForm(user) {
		console.log(user);
		if (user) {
			this.userService.createUser(user)
				.then(data => {
					this.route.navigate(['/userList'])
				})
				.catch(error => {
					console.log(error)
				})
		} else {
			alert('Invalid Details')
		}
	}

}

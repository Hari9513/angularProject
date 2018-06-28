import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MyServiceService } from '../my-service.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
	regForm:FormGroup;

  constructor(
		private fb: FormBuilder,
		private myServ: MyServiceService,
		private route: Router
		) { 
		this.createForm();
	}

  ngOnInit() {
  }

	createForm(){
		this.regForm = this.fb.group({
			name: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-Z]+')])],
			age: ['', Validators.compose([Validators.required, Validators.maxLength(3), Validators.pattern('[0-9]+')])],
			phone: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]+')])],
			address:this.fb.group({
           state: ['']
			}),
			Data: this.fb.array([])
		})
	}

	submit(){
		console.log(this.regForm.value);
		let user = this.regForm.value;
		const var1 = this.regForm.get('Data') as FormArray;
		var1.value.push(this.regForm.value);
		console.log(var1, this.regForm.get('Data'));

		// this.myServ.createUser(user)
		// .then(data => {
		// 	this.route.navigate(['/friendsForm'])
		// })
		// .catch(error => {
		// 	console.log(error)
		// })

	}

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
signUpForm: FormGroup;

  constructor(
    public formBuild: FormBuilder
  ) { }

  ngOnInit() {
    this.signUpForm = this.formBuild.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      address: ['', Validators.compose([Validators.required])]
    })
  }

  signUp() {
    console.log(this.signUpForm.value);
  }

}

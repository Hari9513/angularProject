import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
signInForm: FormGroup

  constructor(
    public formBuild: FormBuilder
  ) { }

  ngOnInit() {
    this.signInForm = this.formBuild.group({
      email: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    })
  }

  signIn() {
    console.log(this.signInForm.value);
  }

}

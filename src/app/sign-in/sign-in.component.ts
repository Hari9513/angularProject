import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular-6-social-login';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
signInForm: FormGroup

  constructor(
    public formBuild: FormBuilder,
    private socialAuthService: AuthService
  ) { }

  ngOnInit() {
    this.signInForm = this.formBuild.group({
      email: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    })
  }

  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    // if(socialPlatform == "facebook"){
    //   socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    // }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    // }
    console.log(socialPlatformProvider);
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        // Now sign-in with userData
        // ...
            
      }
    );
  }

  signIn() {
    console.log(this.signInForm.value);
  }

}

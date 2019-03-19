import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormCompComponent } from './form-comp/form-comp.component';
import { UserFormComponent } from './user-form/user-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NewFormComponent } from './new-form/new-form.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angular-6-social-login";


const routes: Routes = [
  {
    path: 'home',
    component: NavBarComponent
  },
  {
    path: 'userForm/:id',
    component: UserFormComponent
  },
  {
    path: 'userList',
    component: FormCompComponent
  },
  {
    path: 'newForm',
    component: NewFormComponent
  },
  {
    path: 'viewUser',
    component: ViewUserComponent
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: '',
    redirectTo: '/userList',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/userList'
  }
];

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      // {
      //   id: FacebookLoginProvider.PROVIDER_ID,
      //   provider: new FacebookLoginProvider("Your-Facebook-app-id")
      // },
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("634360271401-f01h8dc2c8dmh39cb7a55mtb785albd1.apps.googleusercontent.com")
      },
    ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    FormCompComponent,
    UserFormComponent,
    NavBarComponent,
    NewFormComponent,
    ViewUserComponent,
    SignInComponent,
    SignUpComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

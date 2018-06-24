import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MyServiceService } from './my-service.service';

import { AppComponent } from './app.component';
import { FormCompComponent } from './form-comp/form-comp.component';
import { UserFormComponent } from './user-form/user-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NewFormComponent } from './new-form/new-form.component';
import { ViewUserComponent } from './view-user/view-user.component';
// import { ResolveService } from './resolveService';
 

const routes : Routes = [
{
  path:'home',
  component: NavBarComponent
},
{
  path:'userForm/:id',
  component: UserFormComponent
},
{
  path: 'friendsForm',
  component: FormCompComponent
  // resolve:{userData: ResolveService}
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
  path: '',
  redirectTo: '/userForm',
  pathMatch: 'full'
},
{
  path: '**',
  redirectTo: '/userForm'
}
];

@NgModule({
  declarations: [
  AppComponent,
  FormCompComponent,
  UserFormComponent,
  NavBarComponent,
  NewFormComponent,
  ViewUserComponent
  ],
  imports: [
  BrowserModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,       
  RouterModule.forRoot(routes)
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

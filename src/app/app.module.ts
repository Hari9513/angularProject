import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormCompComponent } from './form-comp/form-comp.component';
import { UserFormComponent } from './user-form/user-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NewFormComponent } from './new-form/new-form.component';

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
},
{
  path: 'newForm',
  component: NewFormComponent
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
  NewFormComponent
  ],
  imports: [
  BrowserModule,
  FormsModule,        
  RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

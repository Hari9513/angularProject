import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/common/user.service';

@Component({
  selector: 'app-form-comp',
  templateUrl: './form-comp.component.html',
  styleUrls: ['./form-comp.component.css']
})
export class FormCompComponent implements OnInit {
friends;
userData;
  constructor(
  	public userService : UserService
  	){
      this.getUser();
    }

  ngOnInit() {

  }

  getUser(){
    this.userService.getUser()
    .then(data => {
      this.userData = data;
    })
  }

  deleteUser(data: any){
    let email = data;
    this.userService.deleteUserByID({email})
    .then(data => {
      this.getUser();
    })
    .catch(error => {
      console.log(error)
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-form-comp',
  templateUrl: './form-comp.component.html',
  styleUrls: ['./form-comp.component.css']
})
export class FormCompComponent implements OnInit {
friends;
userData;
  constructor(
  	private friendServ : MyServiceService
  	){
      this.getUser();
    }

  ngOnInit() {

  }

  getUser(){
    this.friendServ.getUser()
    .then(data => {
      this.userData = data;
    })
  }

  deleteUser(data: any){
    let email = data;
    this.friendServ.deleteUserByID({email})
    .then(data => {
      this.getUser();
    })
    .catch(error => {
      console.log(error)
    })
  }

}

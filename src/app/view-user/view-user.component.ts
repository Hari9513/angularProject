import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  user = {};
  orderObj;
  userData = {};
  constructor(
  	private userServ: MyServiceService,
  	private route: ActivatedRoute
  	) { 
}
  ngOnInit() {
  	  this.route.queryParamMap.subscribe(params => {
      this.orderObj = { ...params };
      this.getAllUsers(this.orderObj);
    });
  }

  getAllUsers(userId){
    this.userServ.getUser()
    .then(data => {
      let ID = userId.params.id
      this.user = data[ID];
      console.log(this.user)
    })
    .catch(error =>{
      console.log(error)
    })
  }

  updateForm(data){
    this.userServ.getUserByID(data)
    .then(data => {
      console.log(data);
      this.route.navigate(['/friendsForm'])
    })
    .catch(error => {
      console.log(error)
    })
  }

}

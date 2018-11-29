import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/common/user.service';

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
  	private userService: UserService,
    private route: ActivatedRoute,
  	private router: Router
  	) { 
}
  ngOnInit() {
  	  this.route.queryParamMap.subscribe(params => {
      this.orderObj = { ...params };
      this.getAllUsers(this.orderObj);
    });
  }

  getAllUsers(userId){
    this.userService.getUser()
    .then(data => {
      let ID = userId.params.id
      this.user = data[ID];
    })
    .catch(error =>{
      console.log(error)
    })
  }

  updateForm(data){
    this.userService.getUserByID(data)
    .then(data => {
      this.router.navigate(['/friendsForm'])
    })
    .catch(error => {
      console.log(error)
    })
  }

}

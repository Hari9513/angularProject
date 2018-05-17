import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-form-comp',
  templateUrl: './form-comp.component.html',
  styleUrls: ['./form-comp.component.css']
})
export class FormCompComponent implements OnInit {
friends;
  constructor(
  	private friendServ : MyServiceService
  	) { 
       this.friends = this.friendServ.getFriendsList();
   }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-user-form',
	templateUrl: './user-form.component.html',
	styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
	userData;
	friendData;

	constructor(
		private route: ActivatedRoute,
		) { }

	ngOnInit() {
		// this.friendServ.getUser()
		// .then(data => {
		// })
		// var id = this.route.snapshot.params.id;
		// var ID = Number(id);
		// this.friendData = this.friendServ.getFriends(ID);
		// this.userData = Object.keys(this.friendData);
		// console.log(this.friendServ.getFriendsList());
	}
}

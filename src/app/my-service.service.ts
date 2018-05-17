import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

	friends = [
	['Balu', 23, 'balu@gmail.com'],
	['Babu', 23, 'babu@gmail.com'],
	['Raju', 23, 'raju@gmail.com'],
	['Ramu', 23, 'ramu@gmail.com'],
	['Rajesh', 23, 'rajesh@gmail.com'],
	['Ram', 23, 'ram@gmail.com'],
	['Balaji', 23, 'balaji@gmail.com'],
	].map(([name, age, email]) => ({name, age, email}));

  constructor() { }

  getFriendsList(){
  	return this.friends
  }

   getFriends(id){
  	return this.friends[id];
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const apiURL: string = 'http://localhost:8000/api/user';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

	// friends = [
	// ['Balu', 23, 'balu@gmail.com'],
	// ['Babu', 23, 'babu@gmail.com'],
	// ['Raju', 23, 'raju@gmail.com'],
	// ['Ramu', 23, 'ramu@gmail.com'],
	// ['Rajesh', 23, 'rajesh@gmail.com'],
	// ['Ram', 23, 'ram@gmail.com'],
	// ['Balaji', 23, 'balaji@gmail.com'],
	// ].map(([name, age, email]) => ({name, age, email}));

  constructor(private http: HttpClient) { }

  // getFriendsList(){
  // 	return this.friends
  // }

  //  getFriends(id){
  // 	return this.friends[id];
  // }

  getUser() {
  	return this.http.get(apiURL)
  	.toPromise()
      .then((data: any) => {
        return data;
      })
      .catch(err => {
        console.log(err)
      })
  }


  getUserByID(data) {
  	return this.http.put(apiURL, data)
  	.toPromise()
      .then((data: any) => {
        console.log(data);
        return data;
      })
      .catch(err => {
        console.log(err)
      })
  }

  deleteUserByID(data) {
    return this.http.post(apiURL + '/delete', data)
    .toPromise()
      .then((data: any) => {
        return data;
      })
      .catch(err => {
        console.log(err)
      })
  }
  
  createUser(data) {
  	return this.http.post(apiURL , data)
  	.toPromise()
      .then((data: any) => {
        return data;
      })
      .catch(err => {
        console.log(err)
      })
  }

}

import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    public http: HttpService
  ) { }

  getUser() {
  	return this.http.get('user')
  	.toPromise()
      .then((data: any) => {
        return data;
      })
      .catch(err => {
        console.log(err)
      })
  }


  getUserByID(data) {
  	return this.http.put('user', data)
  	.toPromise()
      .then((data: any) => {
        return data;
      })
      .catch(err => {
        console.log(err)
      })
  }

  deleteUserByID(data) {
    return this.http.post('user' + '/delete', data)
    .toPromise()
      .then((data: any) => {
        return data;
      })
      .catch(err => {
        console.log(err)
      })
  }
  
  createUser(data) {
  	return this.http.post('user' , data)
  	.toPromise()
      .then((data: any) => {
        return data;
      })
      .catch(err => {
        console.log(err)
      })
  }
}

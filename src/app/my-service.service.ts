import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const apiURL: string = 'http://localhost:8000/api/user';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http: HttpClient) { }

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

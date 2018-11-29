import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
public baseUrl: any;
  constructor(
    public http: HttpClient
  ) { 
    this.baseUrl = environment.httpUrl;
  }

  get(resourse: string) {
    const url = this.baseUrl + resourse;
    return this.http.get(url);
  }

  post(resourse: string, data) {
    const url = this.baseUrl + resourse;
    return this.http.post(url, data);
  }

  put(resourse: string, data) {
    const url = this.baseUrl + resourse;
    return this.http.put(url, data);
  }

  delete(resourse: string, data) {
    const url = this.baseUrl + resourse;
    return this.http.delete(url, data);
  }
}

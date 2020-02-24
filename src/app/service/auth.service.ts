import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  serverUrl = 'http://obscure-cove-12172.herokuapp.com/api/';
  constructor(private http: HttpClient) { }


  getlogin(data) {
    return this.http.post(this.serverUrl + 'apilogin' , data);
  }

  getlogout() {

    return this.http.get<any>(this.serverUrl + 'apilogout');
  }

  getsignup(data) {
    return this.http.post(this.serverUrl + 'apisignup' , data);
  }

  getdetails() {
    return this.http.get(this.serverUrl + 'apidetails');
  }


}




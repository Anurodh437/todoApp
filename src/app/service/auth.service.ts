import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private spinner: NgxSpinnerService) {}

  // api call for registering user or creating a new account
  registerUser(value: any) {
    this.spinner.show();
    let header = new HttpHeaders();
    header.append('content-type', 'application/json');
    return this.http.post(
      'http://localhost:5000/api/users/register',
      value,
      {
        headers: header,
      }
    );
  }

  // api call for login and authenticating user
  authenticateUser(value: any) {
    this.spinner.show();
    let header = new HttpHeaders();
    header.append('content-type', 'application/json');
    return this.http.post(
      'https://tomdo.herokuapp.com/api/users/login',
      value,
      {
        headers: header,
      }
    );
  }

  storeUserData(token:any){
    localStorage.setItem('auth_token',token)
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private spinner: NgxSpinnerService) {}

  registerUser(value: any) {
    this.spinner.show();
    let header = new HttpHeaders();
    header.append('content-type', 'application/json');
    return this.http.post('http://localhost:5000/api/users/register', value, {
      headers: header,
    });
  }

  authenticateUser(value: any) {
    this.spinner.show()
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
}

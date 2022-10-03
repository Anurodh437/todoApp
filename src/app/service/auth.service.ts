import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  registerUser(value: any) {
    let header = new HttpHeaders();
    header.append('content-type', 'application/json');
    return this.http.post('http://localhost:5000/api/users/register', value, {
      headers: header,
    });
  }
}

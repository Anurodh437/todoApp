import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get("http://localhost:3000/registeredUser")
      .subscribe(res => {
        return res;
      });
  }

  addUsers(value: any) {
    return this.http.post<any>("http://localhost:3000/registeredUser", value)
      .subscribe(res => {
        console.log("My response", res);
      })
  }
}

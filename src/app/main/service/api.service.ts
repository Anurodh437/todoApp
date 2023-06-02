import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HotToastService } from '@ngneat/hot-toast';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    private http: HttpClient,
    private toast: HotToastService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) {}

  getUsers(loginForm: any) {
    return this.http
      .get<any>('http://localhost:3000/registeredUser')
      .subscribe((res) => {
        const user = res.find((val: any) => {
          return (
            val.email === loginForm.value.email &&
            val.password === loginForm.value.password
          );
        });
        if (user) {
          this.toast.success('logged in');
          this.spinner.show();
          setTimeout(() => {
            this.spinner.hide();
          }, 2000);
          this.router.navigate(['/addTask']);
          localStorage.setItem('userDetails', JSON.stringify(loginForm.value));
        } else {
          this.toast.error('Invalid Credentials');
        }
      });
  }

  addUsers(value: any) {
    return this.http
      .post<any>('http://localhost:3000/registeredUser', value)
      .subscribe((res) => {
        console.log('My response', res);
      });
  }
}

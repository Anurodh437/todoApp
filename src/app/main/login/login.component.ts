import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private toastr: ToastrService, private spinner: NgxSpinnerService, private _fb: FormBuilder) { }
  public loginForm!: FormGroup;
  ngOnInit(): void {
    this.loginForm = this._fb.group({
      email: ["", [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ["", [Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$")]],
      check:[false]
    })
  }

  get email(){
    return this.loginForm.get('email');
  }

  get password(){
    return this.loginForm.get('password');
  }

  login() {
    if(this.loginForm.invalid){
    this.toastr.error('Required Field cannot be Empty!');
    }
    // this.toastr.error('Hello Welcme');

    // this.spinner.show();
    // setTimeout(() => {
    //   this.spinner.hide();
    // }, 1000);
    console.log(this.loginForm.get('email'));
  }
}

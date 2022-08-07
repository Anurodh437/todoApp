import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public registerForm!: FormGroup;
  checking: boolean = false;
  matchPassword: boolean = false;

  constructor(private toastr: ToastrService, private spinner: NgxSpinnerService, private _fb: FormBuilder, private api: ApiService, private router: Router) { }
  ngOnInit(): void {
    this.registerForm = this._fb.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      mobile: ["", [Validators.required, Validators.pattern("^[6,7,8,9][0-9]{0,9}$"), Validators.minLength(10)]],
      password: ["", [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$")]],
      confirmPassword: ["", [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$")]],
      check: [false, [Validators.requiredTrue]]
    })
  }

  get name() {
    return this.registerForm.get('name');
  }

  get mobile() {
    return this.registerForm.get('mobile');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  async register() {
    if (this.registerForm.invalid) {
      this.toastr.error("Required Fields cannot be Empty!");
      if (this.registerForm.get('check')?.errors?.['required']) {
        this.toastr.error("Agree to the terms and conditions");
      }
    } if (this.registerForm.get('password')?.value !== this.registerForm.get('confirmPassword')?.value) {
      this.matchPassword = true;
    }
    else {
      this.toastr.success('User Created Successfully!', 'Success', { timeOut: 800 });
      this.spinner.show();
      await this.api.addUsers(this.registerForm.value);
      setTimeout(() => {
        this.spinner.hide();
      }, 1000);
      this.router.navigate(['/login'])
    }
  }

  keyPressNumbers(event: any) {
    var charCode = (event.which) ? event.which : event.keyCode;
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }

}

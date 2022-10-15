import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from 'src/app/service/api.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  public registerForm!: FormGroup;
  checking: boolean = false;
  matchPassword: boolean = false;
  id: any;

  constructor(
    private authService: AuthService,
    private spinner: NgxSpinnerService,
    private _fb: FormBuilder,
    private api: ApiService,
    private router: Router,
    private toast: HotToastService
  ) {}
  ngOnInit(): void {
    this.registerForm = this._fb.group({
      name: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      mobile: [
        '',
        [
          Validators.required,
          Validators.pattern('^[6,7,8,9][0-9]{0,9}$'),
          Validators.minLength(10),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$'
          ),
        ],
      ],
      confirmPassword: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$'
          ),
        ],
      ],
      check: [false, [Validators.requiredTrue]],
    });
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
    // this.id = this.toast.loading('Creating User....');
    if (this.registerForm.invalid) {
      // this.toast.error('Required Fields cannot be Empty!');
      if (this.registerForm.get('check')?.errors?.['required']) {
        this.toast.error('Agree to the terms and conditions');
      }
    }
    if (
      this.registerForm.get('password')?.value !==
      this.registerForm.get('confirmPassword')?.value
    ) {
      this.matchPassword = true;
    } else {
      if (this.registerForm.valid) {
        this.authService.registerUser(this.registerForm.value).subscribe({
          next: (data: any) => {
            // this.id.close();
            this.spinner.hide();
            this.router.navigate(['/login']);
            this.toast.success(data.message + ', Please login!');
          },
          error: (e) => {
            this.spinner.hide();
            this.toast.error(e.error.message);
            // this.id.close();
          },
        });
      }
    }
  }

  keyPressNumbers(event: any) {
    var charCode = event.which ? event.which : event.keyCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }
}

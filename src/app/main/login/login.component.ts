import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/main/service/api.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/main/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  id: any;
  constructor(
    private toast: HotToastService,
    private spinner: NgxSpinnerService,
    private _fb: FormBuilder,
    public api: ApiService,
    private router: Router,
    private authService: AuthService
  ) {}
  public loginForm!: FormGroup;
  ngOnInit(): void {
    this.loginForm = this._fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
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
      check: [false],
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  login() {
    // this.id = this.toast.loading('Loading....');
    if (this.loginForm.invalid) {
      this.toast.error('Please fill all the fields!');
    } else {
      this.authService.authenticateUser(this.loginForm.value).subscribe({
        next: (data: any) => {
          // this.id.close();
          this.authService.storeUserData(data.data.token);
          this.toast.success(data.message);
          this.spinner.hide();
          this.router.navigate(['/tasks']);
        },
        error: (e) => {
          // this.id.close();
          this.spinner.hide();
          this.toast.error(e.error.message);
        },
      });
    }
  }
}

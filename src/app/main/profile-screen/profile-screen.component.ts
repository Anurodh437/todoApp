import { Component, OnInit } from '@angular/core';
import { GlobalsService } from '../service/globals.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-profile-screen',
  templateUrl: './profile-screen.component.html',
  styleUrls: ['./profile-screen.component.scss'],
})
export class ProfileScreenComponent implements OnInit {
  userInfo: any;
  updateProfileForm!: FormGroup;
  constructor(
    public global: GlobalsService,
    private fb: FormBuilder,
    private auth: AuthService,
    private spinner: NgxSpinnerService,
    private toast: HotToastService
  ) {}

  ngOnInit(): void {
    this.userInfo = JSON.parse(sessionStorage.getItem('user-profile') || '{}');
    this.updateProfileForm = this.fb.group({
      fullName: [this.userInfo.name],
      emailID: [this.userInfo.email],
      mobile: [this.userInfo.mobile],
      password: [''],
      photo: [''],
      image: [''],
    });
  }

  updateTask() {
    this.auth
      .updateUser(this.userInfo['token'], this.updateProfileForm.value)
      .subscribe({
        next: (data) => {
          this.auth.storeUserData(data);
          window.location.reload;
          this.spinner.hide();
          this.toast.success('User Updated Successfully');
        },
        error: (err) => {
          this.spinner.hide();
          this.toast.error("Something went wrong!")
        },
      });
    this.ngOnInit();
  }

  image(e: any) {
    const fileData = e.target.files[0];
    const form_data = new FormData();
    form_data.append('file', fileData);
    form_data.append('upload_preset', 'angular_fileUpload');
    form_data.append('cloud_name', 'photosavers');

    this.global.imageUpload(form_data).subscribe({
      next: (data: any) => {
        
        this.updateProfileForm.controls['image'].setValue(data.url);
      },
    });
  }
}

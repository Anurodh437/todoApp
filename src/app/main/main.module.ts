import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainRoutingModule } from './main-routing.module';
import { TodoComponent } from './todo/todo.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcometitleComponent } from './welcometitle/welcometitle.component';
import { ProfileScreenComponent } from './profile-screen/profile-screen.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { CrudTaskService } from './service/crud-task.service';
import { AuthService } from '../auth.service';
@NgModule({
  declarations: [
    TodoComponent,
    ViewTaskComponent,
    LoginComponent,
    SignupComponent,
    PagenotfoundComponent,
    NavbarComponent,
    WelcometitleComponent,
    ProfileScreenComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    NgSelectModule
  ],
  providers: [CrudTaskService, AuthService],
})
export class MainModule {}

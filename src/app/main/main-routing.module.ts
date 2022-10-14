import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TodoComponent } from './todo/todo.component';
import { ViewTaskComponent } from './view-task/view-task.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'addTask',
    component: TodoComponent,
    pathMatch: 'full',
    // canActivate: [AuthGuard],
  },
  {
    path: 'tasks',
    component: ViewTaskComponent,
    pathMatch: 'full',
    // canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'register', component: SignupComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}

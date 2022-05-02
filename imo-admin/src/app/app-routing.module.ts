import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecureComponent } from './secure/secure.component';
import { LoginComponent } from './public/login/login.component';
import { RegisterComponent } from './public/register/register.component';
import { PublicComponent } from './public/public.component';
import { ProfileComponent } from './secure/profile/profile.component';
import { UserComponent } from './secure/user/user.component';

const routes: Routes = [
  {
    path: '',
    component: SecureComponent,
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'users', component: UserComponent },
    ],
  },
  {
    path: '',
    component: PublicComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

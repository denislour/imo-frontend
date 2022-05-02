import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecureComponent } from './secure.component';
import { MenuComponent } from './menu/menu.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SecureComponent,
    MenuComponent,
    NavComponent,
    ProfileComponent,
    UserComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
})
export class SecureModule {}

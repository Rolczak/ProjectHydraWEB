import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { ForbidenComponent } from './forbiden/forbiden.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { DefaultComponent } from './layouts/default/default.component';
import {ConnectionRefusedComponent} from './erros/connection-refused/connection-refused.component';
const routes: Routes = [
  { path: '', redirectTo: '/user/login', pathMatch:'full' },
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'registration', component: RegistrationComponent },
      { path: 'login', component: LoginComponent },
    ]
  },
  { path: 'forbidden', component:ForbidenComponent},
  { path: 'refused', component:ConnectionRefusedComponent},
  {path: 'dashboard', component:DefaultComponent, canActivate:[AuthGuard],
  children: [
    { path:'admin', component:AdminPanelComponent,canActivate:[AuthGuard], data: {permittedRoles:["Admin"]}, children: [
      {path:'rank', loadChildren: () => import('./admin-panel/rank/rank.module').then(m => m.RankModule)},
      {path:'user', loadChildren: () => import('./admin-panel/user/user.module').then(m => m.UserModule)},
      {path:'unit', loadChildren: () => import('./admin-panel/unit/unit.module').then(m => m.UnitModule)},
      {path:'classes', loadChildren: () => import('./admin-panel/classes/classes.module').then(m => m.ClassesModule)},
    ]},
    { path: 'home', component:HomeComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

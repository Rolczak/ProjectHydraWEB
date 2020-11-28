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
import { ConnectionRefusedComponent } from './erros/connection-refused/connection-refused.component';
import { MyLessonsComponent } from './my-lessons/my-lessons.component';
import { MyGradesComponent } from './my-grades/my-grades.component';
import { MyUnitComponent } from './my-unit/my-unit.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { NotFoundComponent } from './erros/not-found/not-found.component';
const routes: Routes = [
  { path: '', redirectTo: '/user/login', pathMatch: 'full' },
  {
    path: 'user',
    component: UserComponent,
    children: [
      { path: 'registration', component: RegistrationComponent },
      { path: 'login', component: LoginComponent },
    ],
  },
  { path: 'forbidden', component: ForbidenComponent },
  { path: 'refused', component: ConnectionRefusedComponent },
  { path: 'notFound', component: NotFoundComponent },
  {
    path: 'dashboard',
    component: DefaultComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'admin',
        component: AdminPanelComponent,
        canActivate: [AuthGuard],
        data: { permittedRoles: ['Admin'] },
        children: [
          {
            path: 'rank',
            loadChildren: () =>
              import('./admin-panel/rank/rank.module').then(
                (m) => m.RankModule
              ),
          },
          {
            path: 'user',
            loadChildren: () =>
              import('./admin-panel/user/user.module').then(
                (m) => m.UserModule
              ),
          },
          {
            path: 'unit',
            loadChildren: () =>
              import('./admin-panel/unit/unit.module').then(
                (m) => m.UnitModule
              ),
          },
          {
            path: 'classes',
            loadChildren: () =>
              import('./admin-panel/classes/classes.module').then(
                (m) => m.ClassesModule
              ),
          },
          {
            path: 'grades',
            loadChildren: () =>
              import('./admin-panel/grades/grades.module').then(
                (m) => m.GradesModule
              ),
          },
        ],
      },
      { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
      {
        path: 'myLessons',
        component: MyLessonsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'myGrades',
        component: MyGradesComponent,
        canActivate: [AuthGuard],
      },
      { path: 'myUnit', component: MyUnitComponent, canActivate: [AuthGuard] },
      {
        path: 'editProfile',
        component: EditProfileComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'changePassword',
        component: ChangePasswordComponent,
        canActivate: [AuthGuard],
      },
    ],
  },  { path: '**', redirectTo: 'notFound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserAuthService } from "./shared/user.service";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './user/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './home/home.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ForbidenComponent } from './forbiden/forbiden.component';
import { DefaultComponent } from './layouts/default/default.component';
import { ConnectionRefusedComponent } from './erros/connection-refused/connection-refused.component';
import { MyLessonsComponent } from './my-lessons/my-lessons.component';
import { MyGradesComponent } from './my-grades/my-grades.component';
import { MyUnitComponent } from './my-unit/my-unit.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { NotFoundComponent } from './erros/not-found/not-found.component';

export function tokenGetter() {
  return localStorage.getItem("access_token");
}

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    AdminPanelComponent,
    ForbidenComponent,
    DefaultComponent,
    ConnectionRefusedComponent,
    MyLessonsComponent,
    MyGradesComponent,
    MyUnitComponent,
    EditProfileComponent,
    ChangePasswordComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [UserAuthService,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

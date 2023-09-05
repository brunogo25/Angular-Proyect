import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HubComponent } from './pages/hub/hub.component';
import { HackClasesComponent } from './pages/hack-clases/hack-clases.component';
import { UsersComponent } from './pages/users/users.component';
import { HackClaseComponent } from './pages/hack-clase/hack-clase.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HackClassManagerComponent } from './pages/hack-class-manager/hack-class-manager.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HubComponent,
    HackClasesComponent,
    UsersComponent,
    HackClaseComponent,
    NavbarComponent,
    HackClassManagerComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { UserComponent } from './components/user/user.component';
import { OpenRequestComponent } from './components/open-request/open-request.component';
import { ClosedRequestComponent } from './components/closed-request/closed-request.component';
import { FindComponent } from './components/find/find.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavbarService } from './services/navbar/navbar.service';
import { AuthService } from './services/auth/auth.service';
import { UserService } from './services/user/user.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { KnowledgeComponent } from './components/knowledge/knowledge.component';
import { RequestComponent } from './components/request/request.component';

import { MaterialModule } from './UILib/material.module';
import { LogoutComponent } from './components/logout/logout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {FindByIdComponent} from './components/find/findById.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'logout', component: LogoutComponent, pathMatch: 'full' },
  { path: 'request', component: RequestComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent, pathMatch: 'full' },
  { path: 'find', component: FindComponent, pathMatch: 'full' },
  { path: 'find/:id', component: FindByIdComponent, pathMatch: 'full' },
  { path: 'closed', component: ClosedRequestComponent, pathMatch: 'full' },
  { path: 'open', component: OpenRequestComponent, pathMatch: 'full' },
  { path: 'knowledge', component: KnowledgeComponent, pathMatch: 'full' },
  { path: 'user', component: UserComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RequestComponent,
    FindComponent,
    ClosedRequestComponent,
    OpenRequestComponent,
    KnowledgeComponent,
    UserComponent,
    LogoutComponent,
    NavbarComponent,
    SidebarComponent,
    FindByIdComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [AuthService, UserService, NavbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }

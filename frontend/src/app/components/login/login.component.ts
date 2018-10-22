import { NavbarService } from 'src/app/services/navbar/navbar.service';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  uname: any;
  pass: any;
  control: FormGroup;
  data: any = {
    accessToken: ''
  };
  username = new FormControl('');
  password = new FormControl('');
  token: string = localStorage.getItem('accessToken');

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private nav: NavbarService
    ) {
    this.control = this.fb.group({
      username: this.username,
      password: this.password
    });
    this.nav.hide();
   }

  login() {
    console.log(this.control.value);
    this.uname = this.control.value.username;
    this.pass = this.control.value.password;
    this.authService.LogOn(this.uname, this.pass)
      .subscribe(data => {
        console.log(data);
        this.data = data;
        localStorage.setItem('accessToken', this.data.accessToken);
        this.router.navigate(['find']);
      });
    }

  ngOnInit() {
    if (this.token == null) {
      return false;
    } else {
      this.router.navigate(['find']);
    }
  }

}

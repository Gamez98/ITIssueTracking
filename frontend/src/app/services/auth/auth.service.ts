import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:5000/api/auth/signin';
  token: string = localStorage.getItem('accessToken');

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  LogOn(username: any, password: any) {
    return this.http.post(this.url, { 'usernameOrEmail': username , 'password': password });
  }

  sessionPersistance() {
    if (this.token == null) {
      return false;
    } else {
      this.router.navigateByUrl('/login');
    }
  }

}

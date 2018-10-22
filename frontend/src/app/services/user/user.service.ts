import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token: any = localStorage.getItem('accessToken');
  private decoded: any = this.token ? this.getDecodedAccessToken(this.token) : '';
  uId: any = this.decoded.sub;
  options: any;
  private url = 'http://localhost:5000/api/user/';
  // private headers: any = new Headers({'Content-Type': 'application/json'});
  headers = {headers: new HttpHeaders().set('Authorization', 'Bearer '.concat(this.token))};

  constructor(
    private http: HttpClient
  ) { }

  UserData() {
    return this.http.get(this.url.concat(this.uId.toString()), this.headers);
  }

  getDecodedAccessToken(token: string) {
    try {
        return jwt_decode(token);
    } catch (Error) {
        return null;
    }
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  uri: any = 'http://localhost:5000/api/request';
  req_head: any = ['id', 'req. by', 'group', 'phone', 'site', 'req. day', 'title', 'description', 'status']

  constructor(
    private http: HttpClient,
    private user: UserService
    ) { }

    getAllRequests() {
      return this.http.get<Requests>(this.uri + '/all', this.user.headers);
    }

    getRequestById(id: any) {
    return this.http.get<Request>(this.uri + '/' + id, this.user.headers);
    }



}

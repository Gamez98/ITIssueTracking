import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../../services/user/user.service';
import {RequestService} from '../../services/request/request.service';
import {Router} from '@angular/router';
import {NavbarService} from '../../services/navbar/navbar.service';
import {SidebarService} from '../../services/sidebar/sidebar.service';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-closed-request',
  templateUrl: './closed-request.component.html',
  styleUrls: ['./closed-request.component.css']
})
export class ClosedRequestComponent implements OnInit {

  username: any;
  private userData: any;
  private requestData: any;
  private requests: Requests[] = [];
  private thead: any = this.req.req_head;

  constructor(
    public nav: NavbarService,
    public side: SidebarService,
    public user: UserService,
    private req: RequestService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.nav.show();
    this.side.show();
    this.user.UserData()
      .subscribe(data => {
        this.userData = data;
        this.username = this.userData.username;
        console.log(this.username);
      });

    this.req.getAllRequests()
      .subscribe(data => {
        this.requests = data;
      });
  }

}

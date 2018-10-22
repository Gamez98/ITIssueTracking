import { NavbarService } from './../../services/navbar/navbar.service';
import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';
import {UserService} from '../../services/user/user.service';
import {RequestService} from '../../services/request/request.service';

@Component({
  selector: 'app-open-request',
  templateUrl: './open-request.component.html',
  styleUrls: ['./open-request.component.css']
})
export class OpenRequestComponent implements OnInit {

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

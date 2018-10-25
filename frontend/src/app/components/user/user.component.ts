import { SidebarService } from './../../services/sidebar/sidebar.service';
import { NavbarService } from './../../services/navbar/navbar.service';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request/request.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name: any;
  email: any;
  username: any;
  userData: any;
  requestData: any;
  requests: Requests[] = [];
  thead: any = this.req.req_head;

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
        this.email = this.userData.email;
        this.name = this.userData.name;
        console.log(this.username);
      });
  }

}

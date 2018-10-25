import { UserService } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar/navbar.service';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  data: any;
  username: any;
  dat: any;

  constructor(
    private nav: NavbarService,
    private side: SidebarService,
    private user: UserService
    ) { }

  ngOnInit() {
    this.nav.show();
    this.side.show();
    this.user.UserData()
      .subscribe(data => {
        this.data = data;
        this.username = this.data.username;
      });
    this.dat = Date.now();
  }

}

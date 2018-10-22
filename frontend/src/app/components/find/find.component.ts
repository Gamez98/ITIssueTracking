import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavbarComponent } from '../navbar/navbar.component';
import { NavbarService } from 'src/app/services/navbar/navbar.service';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';
import { UserService } from 'src/app/services/user/user.service';
import {RequestService} from '../../services/request/request.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  private uri: any = 'http://localhost:5000/api/request/all';
  private username: any;
  private requests: Requests[] = [];
  private thead: any = this.req.req_head;

  constructor(
    private http: HttpClient,
    private user: UserService,
    private req: RequestService,
    private router: Router,
    private nav: NavbarService,
    private side: SidebarService
  ) { }

  ngOnInit() {
    this.nav.show();
    this.side.show();
    this.getProfile();
  }

  findRequest() {
    this.req.getAllRequests()
      .subscribe(data => {
        console.log(data);
        this.requests = data;
      });
  }

  getProfile() {
   this.user.UserData()
      .subscribe(data => {
        console.log(data);
      });
  }

}

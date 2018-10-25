import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavbarComponent } from '../navbar/navbar.component';
import { NavbarService } from 'src/app/services/navbar/navbar.service';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';
import { UserService } from 'src/app/services/user/user.service';
import {RequestService} from '../../services/request/request.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-find-by-id',
  templateUrl: './findById.component.html',
  styleUrls: ['./find.component.css']
})
export class FindByIdComponent implements OnInit {

  private req_id: any;
  private uri: any = 'http://localhost:5000/api/request/';
  private username: any;
  requests: any = [];
  private thead: any = this.req.req_head;
  dat: any;

  constructor(
    private http: HttpClient,
    private user: UserService,
    private req: RequestService,
    private router: Router,
    private nav: NavbarService,
    private side: SidebarService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
       console.log(+params['id']);
       this.req_id = +params['id'];
    });
  }

  ngOnInit() {
    this.nav.show();
    this.side.show();

    this.findRequestById(this.req_id);
  }

  findRequestById(id: any) {
    this.req.getRequestById(id)
      .subscribe(data => {
        this.dat = data;
        console.log(data);
        this.requests.push(this.dat);
      });
  }

}

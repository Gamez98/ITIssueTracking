import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar/navbar.service';
import { UserService } from 'src/app/services/user/user.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username: any;
  email: any;
  data: any;
  control: FormGroup;
  req_id = new FormControl('');
  token: string = localStorage.getItem('accessToken');
  constructor(
    private user: UserService,
    public nav: NavbarService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.control = this.fb.group({
      req_id: this.req_id,
    });
  }

  ngOnInit() {
    this.user.UserData()
      .subscribe(data => {
        this.data = data;
        this.email = this.data.email;
      });
  }

  searchRequest(): void {
    window.location.reload();
    this.req_id = this.control.value.req_id;
    this.router.navigateByUrl('find/' + this.req_id);
  }

}

import { HttpClient } from '@angular/common/http';
import { UserService } from '../../services/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: any;

  constructor(
    private user: UserService
  ) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.user.UserData()
      .subscribe(data => {
        console.log(data);
      });
  }

}

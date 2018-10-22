import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'issuetracking-ng';

  isLoged: any;
  token: any = localStorage.getItem('accessToken');

  ngOnInit() {
    this.isLoged = this.token != null ? true : false;
  }

}



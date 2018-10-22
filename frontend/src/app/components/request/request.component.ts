import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar/navbar.service';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  constructor(
    private nav: NavbarService,
    private side: SidebarService
    ) { }

  ngOnInit() {
    this.nav.show();
    this.side.show();
  }

}

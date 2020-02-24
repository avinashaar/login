import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
user;
  constructor(private router: Router, route: ActivatedRoute,
              private authService: AuthService) { }

  ngOnInit(): void {
  }

  logOut() {
    let logout = this.authService.getdetails()
    console.log(logout,333);
    this.router.navigate(['/login']);
  }
  // username()
  // {
  //   this.authService.getdetails().subscribe( data => {
  //     this.user = data;
  //     return this.user.name;
  //   });
  //
  // }
}

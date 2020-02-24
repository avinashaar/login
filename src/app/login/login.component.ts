import { Component, OnInit } from '@angular/core';
import {slideInAnimation} from '../route-animation';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../service/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [ slideInAnimation ]
})
export class LoginComponent implements OnInit {

  loginform = new FormGroup({
    email : new FormControl(''),
    password: new FormControl('')
  });
  user: any;
  constructor(private authService: AuthService,
              private route: ActivatedRoute, private router: Router,
              private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  submitlogin() {
    this.authService.getlogin(this.loginform.value).subscribe(hero => {
      this.user = hero;
      this.toastr.success('Login successfull')
      this.router.navigate(['/dashboard']);
    }, err => {
      console.log(err);
      this.toastr.warning('Please enter correct email or password');
    });
  }

}

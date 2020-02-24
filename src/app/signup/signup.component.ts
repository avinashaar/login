import { Component, OnInit } from '@angular/core';
import {slideInAnimation} from '../route-animation';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../service/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [ slideInAnimation ]
})
export class SignupComponent implements OnInit {

  signupform = new FormGroup({
    name: new FormControl(''),
    email : new FormControl(''),
    password: new FormControl(''),
    password_confirmation: new FormControl('')
  });
  resgister;

  constructor(private authService: AuthService,
              private route: ActivatedRoute, private router: Router,
              private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  savesignup() {
    // const sign = this.signupform;
    // if (this.sign.email  )

    this.authService.getsignup(this.signupform.value).subscribe(data => {
      this.resgister = data;
      this.toastr.success('Register  successfull')
      this.router.navigate(['/login']);
    }, err => {
      console.log(err);
      this.toastr.warning('Please enter correct email ex-user@example.com');
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {}

  onSubmit(f: NgForm) {
    const { email, password } = f.form.value;
    //TODO: Do the validation for email
    this.authService
      .signIn(email, password)
      .then((res) => {
        this.router.navigateByUrl('/');
        this.toastrService.success('Signed in Successfully!');
      })
      .catch((error) => {
        console.log(error.message);
        this.toastrService.error('Signin failed!');
      });
  }
}

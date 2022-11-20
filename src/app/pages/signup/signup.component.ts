import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {
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
      .signUp(email, password)
      .then((res) => {
        this.router.navigateByUrl('/');
        this.toastrService.success('Logged in Successfully!');
      })
      .catch((error) => {
        console.log(error.message);
        this.toastrService.error('Signup failed!');
      });
  }
}

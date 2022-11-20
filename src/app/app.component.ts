import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'github-login-firebase';

  constructor(private authService: AuthService) {
    authService.getUser().subscribe({
      next: (user) => {
        console.log(user);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}

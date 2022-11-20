import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  email: string | null | undefined = null;

  constructor(
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router
  ) {
    this.authService.getUser().subscribe((user) => {
      this.email = user?.email;
    });
  }

  async handleSignout() {
    try {
      const res = await this.authService.signOut();
      this.router.navigateByUrl('/signin');
      this.toastrService.info('Logged out successfully.');
      this.email = null;
    } catch (error) {
      this.toastrService.error('Could not Signout!');
    }
  }
}

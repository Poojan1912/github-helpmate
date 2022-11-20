import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  user: any = null;
  userName = '';
  error: string | null = null;

  constructor(private githubService: GithubService) {}

  findUser() {
    this.githubService.getUserDetails(this.userName).subscribe({
      next: (user) => {
        this.user = user;
        this.error = null;
      },
      error: () => {
        this.user = null;
        this.error = 'Could not fetch user!';
      },
    });
  }

  ngOnInit(): void {}
}

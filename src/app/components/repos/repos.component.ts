import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Observable } from 'rxjs';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
})
export class ReposComponent implements OnInit, OnChanges {
  @Input() repoUrl: string | null = null;
  repos: any = [];
  repos$: Observable<any> | null = null;

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.repoUrl) {
      this.repos$ = this.githubService.getRepos(this.repoUrl);
    }
  }
}

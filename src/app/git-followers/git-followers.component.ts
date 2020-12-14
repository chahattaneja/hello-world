import { concatMap, map, switchMap } from 'rxjs/operators';
import { GitFollowersService } from './services/git-followers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'git-followers',
  templateUrl: './git-followers.component.html',
  styleUrls: ['./git-followers.component.scss']
})
export class GitFollowersComponent implements OnInit {

  followers: Array<any>;

  constructor(private service: GitFollowersService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    combineLatest([
              this.route.paramMap,
              this.route.queryParamMap
            ])
            .pipe(map(([params, queryParams])=>{
              let id = params.get('id');
              let page = queryParams.get('page');
              
              console.log('page',page);
              
              return this.service.getAll();
            }))
            .subscribe(followers => this.followers = followers);
            
  }
}

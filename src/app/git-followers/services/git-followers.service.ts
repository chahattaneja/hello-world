import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Injectable({
  providedIn: 'root'
})
export class GitFollowersService extends DataService{

  constructor(http:HttpClient) {
      super("http://api.github.com/users/mosh-hamedani/followers", http);
   }
}

import { NotFoundError } from './../../common/error/not-found-error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError} from 'rxjs';
import { catchError } from 'rxjs/operators'
import { AppError } from 'src/app/common/error/app-error';
import { DataService } from 'src/app/service/data.service';

@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService{
  constructor(http: HttpClient) {  
    super("https://jsonplaceholder.typicode.com/posts", http);
  }
}

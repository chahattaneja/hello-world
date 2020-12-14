import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppError } from '../common/error/app-error';
import { NotFoundError } from '../common/error/not-found-error';

export class DataService {
    constructor(private url:string,private http: HttpClient) {  
    }
  
    getAll() {
      return this.http.get(this.url).pipe(
          map(response => response as Array<any>)
      );
    }
  
    create(resource) {
      return this.http.post(this.url,JSON.stringify(resource));
    }
  
    update(resource) {
      return this.http.patch(this.url+ "/" + resource.id, {isRead:true});
    }
  
    delete(id: number) {
      return this.http.delete(this.url+ "/" + id)
      .pipe(
        catchError((error: Response) => this.handleError(error)),
      );
    }
    
    private handleError(error:Response) {
        if(error.status === 404)
          return throwError(new NotFoundError());
        return throwError(new AppError(error));       
    }
  
}
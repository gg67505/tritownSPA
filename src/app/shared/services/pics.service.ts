import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { PicsPosting } from './PicsPosting';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PicsService {
  piclist: String[] = [];

  constructor(private http: HttpClient) { 
    console.log('in the constructor for the PicsService');
  }

// Http Headers
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
// GET request to the /cruiseinfo endpoints
getEntirePicsInventory(): Observable<any>{
  const endpoint = environment.apiBaseUrl + 'entirepiciventory';
  return this.http.get<PicsPosting[]>(endpoint)
  .pipe(
    retry(2),
    catchError(this.handleError)
  ) 
}

getPicListForSingleEvent(picdate: string): Observable<any[]>{
  const params = new HttpParams()
  .set('picdate', picdate);
  const endpoint = environment.apiBaseUrl + 'singleeventpiclist';
  return this.http.get<String[]>(endpoint,{params})
  .pipe(
    retry(2),
    catchError(this.handleError)
  ) 
}

// Handle API errors
handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError(
    'Something bad happened; please try again later.');
};







 
}



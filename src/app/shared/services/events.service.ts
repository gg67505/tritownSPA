import { Injectable } from '@angular/core';
import { EventInfo } from './EventInfo';
import { HttpErrorResponse, HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CruiseInfoResponse } from './CruiseInfoResponse';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { 
    console.log('in the constructor for the EventsService');
  }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  // GET request to the /cruiseinfo endpoints
 getEventsByMonth(month: string): Observable<any[]>{
    const params = new HttpParams()
    .set('month', month);
    const endpoint = environment.apiBaseUrl + 'eventsbymonth';
    return this.http.get<EventInfo[]>(endpoint,{params})
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

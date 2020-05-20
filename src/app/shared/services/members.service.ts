import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MembersInfo } from './MembersInfo';
import { retry, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor(private http: HttpClient) { 
    console.log('in the constructor for the MembersService');
  }

   // Http Headers
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  // GET request to the /cruiseinfo endpoints
   getMembersInfo(): Observable<any[]>{
    const endpoint = environment.apiBaseUrl + 'memberinfo';
    return this.http.get<MembersInfo[]>(endpoint)
    .pipe(
      retry(2),
      catchError(this.handleError)
    ) 
  }
  handleError(handleError: any): import("rxjs").OperatorFunction<any, any> {
    throw new Error("Method not implemented.");
  }

  
}

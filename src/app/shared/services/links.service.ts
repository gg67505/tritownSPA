import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LinkInfo } from './LinkInfo';
import { retry, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LinksService {

  constructor(private http: HttpClient) { 
    console.log('in the constructor for the LinksService');
  }

   // Http Headers
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  // GET request to the /cruiseinfo endpoints
   getLinksInfo(): Observable<any[]>{
    const endpoint = environment.apiBaseUrl + 'linkinfo';
    return this.http.get<LinkInfo[]>(endpoint)
    .pipe(
      retry(2),
      catchError(this.handleError)
    ) 
  }
  handleError(handleError: any): import("rxjs").OperatorFunction<any, any> {
    throw new Error("Method not implemented.");
  }

  
}

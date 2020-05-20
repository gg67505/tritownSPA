import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SponsorInfo } from './SponsorInfo';
import { retry, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SponsorsService {

  constructor(private http: HttpClient) { 
    console.log('in the constructor for the SponsorsService');
  }

   // Http Headers
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  // GET request to the /cruiseinfo endpoints
   getSponsorsInfo(): Observable<any[]>{
    const endpoint = environment.apiBaseUrl + 'sponsorinfo';
    return this.http.get<SponsorInfo[]>(endpoint)
    .pipe(
      retry(2),
      catchError(this.handleError)
    ) 
  }
  handleError(handleError: any): import("rxjs").OperatorFunction<any, any> {
    throw new Error("Method not implemented.");
  }

  
}
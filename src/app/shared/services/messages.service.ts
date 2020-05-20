import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MessageInfo } from './MessageInfo';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http: HttpClient) { 
    console.log('in the constructor for the MessagesService');
  }

   // Http Headers
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  // GET request to the /cruiseinfo endpoints
   getMessagesInfo(): Observable<any[]>{
    const endpoint = environment.apiBaseUrl + 'messageboardinfo';
    return this.http.get<MessageInfo[]>(endpoint)
    .pipe(
      retry(2),
      catchError(this.handleError)
    ) 
  }
  handleError(handleError: any): import("rxjs").OperatorFunction<any, any> {
    throw new Error("Method not implemented.");
  }
  
}
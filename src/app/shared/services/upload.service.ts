import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) { 
    console.log('in the constructor for the export class UploadService.');
  }

   // Http Headers
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  
    postFile(eventdate: string, imagename: string, filetoupload: File): Observable<any> {
      const endpoint = environment.apiBaseUrl + 'uploadImageWithMediaType';
      
      
      const formData: FormData = new FormData();
      formData.append("eventdate", eventdate);
      formData.append('imagename', imagename);
      formData.append('fileKey', filetoupload);

      return this.http.post(endpoint, formData)
        .pipe(
          retry(2),
          catchError(this.handleError)
        ) 
    }
    handleError(handleError: any): import("rxjs").OperatorFunction<any, any> {
      throw new Error("Method not implemented.");
    }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {


  constructor(private http: HttpClient) { }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    console.log("in the upload function in UploadFileService");

    formData.append('file', file);

    const req = new HttpRequest('POST', environment.apiBaseUrl + 'upload', formData, {
      reportProgress: true,
      responseType: 'json'
    });
    console.log("about to call REST service in UploadFileService");

    return this.http.request(req);
   
  }

 
  getFiles(): Observable<any> {
    return this.http.get(environment.apiBaseUrl + 'files');
  }
 
}

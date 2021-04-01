import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http: HttpClient) { }
  
  listNotes(): Observable<any> {
    return this.http.get(`${environment.apiURL}notes`)
  }
  
  sendNotes(note: any): Observable<any>  {
    return this.http.post(`${environment.apiURL}notes`, note)
  }

}

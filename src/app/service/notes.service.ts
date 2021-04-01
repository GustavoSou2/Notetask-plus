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
    return this.http.get(`http://localhost:8081/notes`)
  }
  
  sendNotes(notes: FormData): Observable<any>  {
    return this.http.post("http://localhost:8081/notes", notes)
  }

}

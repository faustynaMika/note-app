import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Note} from "../../models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Note[]> {
    return this.http.get<Note[]>('http://192.168.0.20:8080/api/notes');
  }

  deleteItem(id: string): Observable<any> {
    return this.http.delete('http://192.168.0.20:8080/api/notes/' + id);
  }

  updateItem(toDo: Note) {
    return this.http.put('http://192.168.0.20:8080/api/notes', toDo);
  }

  addItem(toDo: Note) {
    let request = {title: toDo.title, description: toDo.description}
    return this.http.post('http://192.168.0.20:8080/api/notes', request);
  }

}

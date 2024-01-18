import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Task } from '../models/Task';
import { catchError, of, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private data: Task[] = [
    new Task('first string', false),
    new Task('second string', true),
    new Task('third string', false)
  ]

  getAllItems() {
    return of(this.data);
  }

  

  // //http get functionality from json
  // constructor(private http: HttpClient) { }

  // private getOptions() : any {
  //   return {
  //     headers: new HttpHeaders({
  //       'Content-Type' : 'application/json'
  //     })
  //   }
  // }

  // getTasks(){
  //   return this.http.get('assets/tasks.json');
  // }

}

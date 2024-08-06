import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private http = inject(HttpClient)

  getTodos(): Observable<Todo[]> {
    // api: https://jsonplaceholder.typicode.com/todos/
  }
}

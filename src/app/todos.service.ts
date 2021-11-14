import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, delay} from 'rxjs/operators';

export interface Todo {
  completed: boolean;
  title: string;
  id?: number;
}

@Injectable({providedIn: 'root'})

export class TodosService {
  constructor(private http: HttpClient) {
  }

  addTodo(todo: Todo): Observable<Todo> {
    const headers = new HttpHeaders({
      CustomHeader1: Math.random().toString(),
      CustomHeader2: Math.random().toString().length.toString(),
    });

    return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo, {
      headers,
    });
  }

  fetchTodos(): Observable<Todo[]> {
    const limitValue = 5;
    let params = new HttpParams();

    params = params.append('_limit', `${limitValue}`);
    params = params.append('custom', 'anything');

    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos', {
      params,
    })
      .pipe(delay(500),
        catchError(error => {
          console.log('Error: ', error.message);

          return throwError(error);
        }));
  }

  removeTodo(id: number): Observable<void> {

    return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }

  completeTodo(id: number): Observable<Todo> {

    return this.http.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      completed: true,
    });

  }
}

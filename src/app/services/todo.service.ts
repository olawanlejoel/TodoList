import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';


import { Todo } from '../models/Todo';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
    todosLimit:string = '?_limit=5';

  constructor(private http:HttpClient) { }


  //Get Todos
  getTodos():Observable<Todo[]> {
   return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }

  //Toogle Completed
  toggleCompleted(todo: Todo):Observable<any> {
    return this.http.put(this.todosUrl+'/'+todo.id, todo, httpOptions);
  }

  //delete Todo
  deleteTodo(todo: Todo):Observable<Todo> {
    return this.http.delete<Todo>(this.todosUrl+'/'+todo.id, httpOptions);

  }

  //Add todo
  addTodo(todo:Todo):Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
  }


}

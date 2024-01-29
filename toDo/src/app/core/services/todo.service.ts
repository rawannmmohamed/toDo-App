import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponse, ITodo } from '../models/todo.model';
import { HttpClient } from '@angular/common/http';
import { apiEndPoint } from '../constants/CONST';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  getTodos(status: string): Observable<IResponse<ITodo[]>> {
    let queryString = '';
    if (status !== '') {
      queryString = `status=${status}`;
    }
    return this.http.get<IResponse<ITodo[]>>(
      `${apiEndPoint.TodoEndPoint.getAllTodos}?${queryString}`
    );
  }

  addTodo(data: ITodo): Observable<IResponse<ITodo>> {
    return this.http.post<IResponse<ITodo>>(
      `${apiEndPoint.TodoEndPoint.addATodo}`,
      data
    );
  }

  updateTodo(id: number, data: ITodo): Observable<IResponse<ITodo>> {
    return this.http.put<IResponse<ITodo>>(
      `${apiEndPoint.TodoEndPoint.updateTodo}/${id}`,
      data
    );
  }
}
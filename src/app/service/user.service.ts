import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Column, User } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  endpoint: string = 'http://localhost:3000/users';

  constructor(
    private http: HttpClient
  ) { }

  columns:Column[]=[
    {name:"id", title:"#", type:"text", sortDir:""},
    {name:"name", title:"Name", type:"text", sortDir:""},
    {name:"email", title:"Email", type:"email", sortDir:""},
    {name:"address", title:"Address", type: "text", sortDir:""},
    {name:"active", title:"Active", type: "checkbox", sortDir:""},
  ];

  /**
   * Get all users from the database.
   * @returns on observable with all users.
   */
  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.endpoint}`);
  }

  /**
   * Get a specified user from the database by id.
   * @param id {number} user id.
   * @returns an observable with a user object.
   */
  get(id: number): Observable<User> {
    return this.http.get<User>(`${this.endpoint}/${id}`);
  }

  /**
   * Delete a user from the database.
   * The method is: this.http.delete
   */

  delete(id: User): Observable<User> {
    return this.http.delete<User>(`${this.endpoint}/${id}`)
  }

  /**
   * Create a user in the database.
   * The method is: this.http.post
   */

 create(): Observable<User> {
    return this.http.post<User>(`${this.endpoint}/${id}`)
  }

  /**
   * Update a user in the database.
   * The method is: this.http.patch
   */

  update(): Observable<User> {
    return this.http.patch<>(`${this.endpoint}/${id}`)
  }
}

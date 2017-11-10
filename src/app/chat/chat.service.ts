import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Comments} from './comments';
import {Users} from './users';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/retry';
import {Posts} from './posts';

@Injectable()
export class ChatService {

  constructor(private http: HttpClient) { }

  /*getComment(id: Number ): Observable  {

  }*/

  /*getAllComments(): Observable<Comments> {

  }*/

  getAllUsers(): Observable<Users[]> {
    return this.http.get<Users[]>('api/users').retry(3);
  }

   getUser(id: Number): Observable<Users> {
    return this.http.get<Users>(`api/users/${id}`).retry(3);
  }

  getAllComments(): Observable<Comments[]> {
    return this.http.get<Comments[]>('api/comments').retry(3);
  }

  getAllPosts(): Observable<Posts[]> {
    return this.http.get<Posts[]>('api/posts').retry(3);
  }

  getAllPostsForUser(id: Number): Observable<Posts[]> {
    return this.http.get<Posts[]>(`api/users/${id}/posts`).retry(3);
  }
}

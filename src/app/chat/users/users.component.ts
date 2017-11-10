import { Component, OnInit } from '@angular/core';
import {ChatService} from '../chat.service';
import {Users} from '../users';
import {ParamMap, Route} from '@angular/router';
import {Posts} from '../posts';
import {Comments} from '../comments';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Users[];
  posts: Posts[];
  comments: Comments[];

  constructor(private service: ChatService) { }

  ngOnInit() {
    /*this.service.getAllUsers().subscribe(function(users: Users[]){
      this.users = users;
    }.bind(this));*/
    this.service.getAllUsers().subscribe(users => this.users = users);
    this.service.getAllPosts().subscribe(posts => this.posts = posts);
    this.service.getAllComments().subscribe(comments => this.comments = comments);
  }

}

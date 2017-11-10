import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { UsersComponent } from './users/users.component';
import {ChatService} from './chat.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: 'user/:id', component: CommentsComponent}
]

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [PostsComponent, CommentsComponent, UsersComponent],
  providers: [ChatService],
  exports: [UsersComponent]
})
export class ChatModule { }

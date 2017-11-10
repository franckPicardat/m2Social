import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {ChatService} from '../chat.service';
import {Users} from '../users';
import {Comments} from '../comments';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() user: Users;

  comments: Comments[];

  constructor(private route: ActivatedRoute, private service: ChatService) {
    this.route.paramMap.switchMap((params: ParamMap) => this.service.getUser(+params.get('id'))).subscribe(user => this.user = user);
    this.service.getAllComments().subscribe(comments => this.comments = comments);
  }

  ngOnInit() {
  }

}

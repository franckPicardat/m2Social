import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {ChatService} from '../chat.service';
import {Users} from '../users';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() user: Users;

  constructor(private route: ActivatedRoute, private service: ChatService) {
    this.route.paramMap.switchMap((params: ParamMap) => this.service.getUser(+params.get('id'))).subscribe(user => this.user = user);  }

  ngOnInit() {
  }

}

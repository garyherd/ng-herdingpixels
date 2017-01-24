import { Component, OnInit, Input } from '@angular/core';

import { CommentList, Comment } from './blog-post';
import { BlogPostService } from './blog-post.service';

import * as moment from 'moment/moment';


@Component({
  moduleId: module.id,
  selector: 'blog-post-comments',
  templateUrl: 'blog-post-comments.component.html'
})
export class BlogPostCommentsComponent implements OnInit {

  @Input()
  postId: string;

  @Input()
  postUrl: string;

  comments: Comment[] = [];
  errorMessage: string;
  replies: Comment[] = [];



  constructor(private blogPostService: BlogPostService) { }

  ngOnInit() {
    this.getComments();
  }

  getComments(): void {
    this.blogPostService.getComments(this.postId).subscribe(
                                    comments => {
                                      this.comments = comments.filter(this.isNotReply);
                                      this.replies = comments.filter(this.isReply);
                                    },
                                    error => this.errorMessage = <any>error);
  }

  isReply(value: Comment): boolean {
    return "inReplyTo" in value;
  }

  isNotReply(value: Comment): boolean {
    return !("inReplyTo" in value);
  }

  isInReplyToComment(value: Comment): boolean {
    return
  }

  getRepliesByCommentId(commentId: string): Comment[] {
    return this.replies.filter((value)=>{
      return value.inReplyTo.id === commentId;
    });
  }

  formatDate(dateStr: string): any {
    let newDate: any = moment(dateStr).format('MMM Do, YYYY - h:mm a');

    if (newDate === "Invalid date") {
      return "Date unknown";
    } else {
      return newDate;
    }
  }
}
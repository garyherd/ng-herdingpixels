import { Component, OnInit, Input } from '@angular/core';

import { CommentList, Comment } from './blog-post';
import { BlogPostService } from './blog-post.service';

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

  constructor(private blogPostService: BlogPostService) { }

  ngOnInit() {
    this.getComments();
  }

  getComments(): void {
  this.blogPostService.getComments(this.postId).subscribe(
                                    comments => this.comments = comments,
                                      error => this.errorMessage = <any>error);
  }
}
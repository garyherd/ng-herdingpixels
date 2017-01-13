import { Component, OnInit, Input } from '@angular/core';

import { CommentList } from './blog-post';

@Component({
  moduleId: module.id,
  selector: 'blog-post-comments',
  templateUrl: 'blog-post-comments.component.html'
})
export class BlogPostCommentsComponent implements OnInit {

  @Input()
  comments: CommentList;

  constructor() { }

  ngOnInit() { }
}
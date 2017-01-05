import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { BlogPost } from './blog-post';
import { BlogPostService } from './blog-post.service';

import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'blog-post-full',
  templateUrl: 'blog-post-full.component.html'
})
export class BlogPostFullComponent implements OnInit {
  // @Input()
  // id: number;

  // @Input()
  // title: string;
  @Input()
  blogPost: BlogPost;

  constructor(
    private blogPostService: BlogPostService,
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.blogPostService.getPost(+params['id']))
      .subscribe(post => this.blogPost = post);
  }
}
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { BloggerPost, CommentList } from './blog-post';
import { BlogPostService } from './blog-post.service';

import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'blog-post-full',
  templateUrl: 'blog-post-full.component.html'
})
export class BlogPostFullComponent implements OnInit {

  @Input()
  blogPost: BloggerPost;

  constructor(
    private blogPostService: BlogPostService,
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.blogPostService.getPost(params['id']))
      .subscribe(post => this.blogPost = post);

    // this.comments = this.blogPostService.getComments();
  }

  getTotalComments(): number {
    return parseInt(this.blogPost.replies.totalItems);
  }

  onAnchorClick() {
    this.route.fragment.subscribe( f => {
      const element = document.querySelector("#" + f);
      if (element) element.scrollIntoView(element);
    });
  }

  formatDate(dateStr: string): string {
    return this.blogPostService.formatDate(dateStr);
  }
}
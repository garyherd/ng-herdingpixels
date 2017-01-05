import { Component, OnInit } from '@angular/core';

import { BlogPost } from './blog-post';
import { BlogPostService } from './blog-post.service';

@Component({
  moduleId: module.id,
  selector: 'blog',
  templateUrl: 'blog.component.html',
  // providers: [BlogPostService]
})
export class BlogComponent implements OnInit {
  blogPosts: BlogPost[];

  constructor(private blogPostService: BlogPostService) { }

  getPosts(): void {
    this.blogPostService.getPosts().then(posts => this.blogPosts = posts);
  }

  ngOnInit() {
    this.getPosts();
  }

}
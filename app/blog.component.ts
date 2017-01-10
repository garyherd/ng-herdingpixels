import { Component, OnInit } from '@angular/core';

import { BlogPost, TestPost, BloggerPost, BloggerPostsList } from './blog-post';
import { BlogPostService } from './blog-post.service';


@Component({
  moduleId: module.id,
  selector: 'blog',
  templateUrl: 'blog.component.html'
})
export class BlogComponent implements OnInit {
  mockBlogPosts: BlogPost[];
  errorMessage: string;
  bloggerPosts: BloggerPost[];

  constructor(private blogPostService: BlogPostService) {
  }

  getMockPosts(): void {
    this.blogPostService.getMockPosts().then(posts => this.mockBlogPosts = posts);
  }

  getPosts(): void {
    this.blogPostService.getPosts().subscribe(
                                      posts => this.bloggerPosts = posts,
                                      error => this.errorMessage = <any>error);
  }

  ngOnInit() {
    this.getMockPosts();
    this.getPosts();
  }
}


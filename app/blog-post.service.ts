import { Injectable } from '@angular/core';

import { BlogPost } from './blog-post';
import { POSTS } from './mock-posts';

@Injectable()
export class BlogPostService {
  getPosts(): Promise<BlogPost[]> {
    return Promise.resolve(POSTS);
  }
}

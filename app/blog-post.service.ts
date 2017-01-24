import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { BlogPost, TestPost, BloggerPost, BloggerPostsList, CommentList, Comment } from './blog-post';
import { POSTS } from './mock-posts';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';

@Injectable()
export class BlogPostService {
  blogPosts: BlogPost[];
  private API_KEY: string = "AIzaSyClD4hLHhuXNDHvOJFzzoJqLje_VDaFTAQ";
  private BLOG_ID: string = "3297912488498445473";
  private templateUrlAllPosts: string = 'https://www.googleapis.com/blogger/v3/blogs/blogId/posts?key=YOUR-API-KEY';
  private templateUrlPost: string = 'https://www.googleapis.com/blogger/v3/blogs/blogId/posts/postId?key=YOUR-API-KEY';
  private templateUrlComments: string = 'https://www.googleapis.com/blogger/v3/blogs/blogId/posts/postId/comments?key=YOUR-API-KEY';


  constructor(private http: Http) {
  }

  getPosts(): Observable<BloggerPost[]> {
    return this.http.get(this.createGetAllPostsUrl())
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getPost(id: number): Observable<BloggerPost> {
    return this.http.get(this.createGetPostUrl(id.toString()))
                    .map(this.extractDataNonArray)
                    .catch(this.handleError);
  }

  getComments(id: string): Observable<Comment[]> {
    return this.http.get(this.createGetCommentsUrl(id))
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getPostsByTag(id: string): Observable<BloggerPost[]> {
    return;
  }

  private createGetAllPostsUrl(): string {
    return this.templateUrlAllPosts.replace("blogId", this.BLOG_ID)
                                   .replace("YOUR-API-KEY", this.API_KEY);
  }

  private createGetPostUrl(id: string): string {
    return this.templateUrlPost.replace("blogId", this.BLOG_ID)
                               .replace("postId", id)
                               .replace("YOUR-API-KEY", this.API_KEY);
  }

  private createGetCommentsUrl(id: string): string {
    return this.templateUrlComments.replace("blogId", this.BLOG_ID)
                                   .replace("postId", id)
                                   .replace("YOUR-API-KEY", this.API_KEY);
  }

  private createSearchPostsUrl(id: string): string {
    let newUrl = "";
    return newUrl;
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.items || { };
  }

  private extractDataNonArray(res: Response) {
    let body = res.json();
    return body || { };
  }


   private handleError (error: Response | any) {
   // In a real world app, we might use a remote logging infrastructure
     let errMsg: string;
     if (error instanceof Response) {
       const body = error.json() || '';
       const err = body.error || JSON.stringify(body);
       errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
     } else {
         errMsg = error.message ? error.message : error.toString();
     }
     console.error(errMsg);
     return Observable.throw(errMsg);
   }
}


